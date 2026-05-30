#!/usr/bin/env python3
# 通过阿里云RAM角色授权方式配置OSS域名绑定
# 需要从环境变量或STS获取临时凭证

import oss2
import json
import urllib.request

# 尝试通过阿里云metadata服务获取临时凭证（仅在阿里云ECS上有效）
try:
    req = urllib.request.Request(
        'http://100.100.100.200/latest/meta-data/ram/security-credentials/',
        method='GET'
    )
    role_name = urllib.request.urlopen(req, timeout=3).read().decode().strip()
    
    req2 = urllib.request.Request(
        f'http://100.100.100.200/latest/meta-data/ram/security-credentials/{role_name}',
        method='GET'
    )
    cred = json.loads(urllib.request.urlopen(req2, timeout=3).read().decode())
    
    print("获取到临时凭证，可以操作OSS")
    print(f"AccessKeyId: {cred['AccessKeyId'][:10]}...")
except Exception as e:
    print(f"不在阿里云ECS上: {e}")
    print("需要手动提供AccessKey")
