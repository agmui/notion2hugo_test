---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKRZT5Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICOWXcUgkNBCXdv55Tm4TVV6q6kn2FeuSswCPoYuZD76AiAeWUf8%2FVnZluc70w3IPaYSda3VHizHOoIqTcj%2FTtU4hCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM8iiQDFL7JDnFErwuKtwD6Thvmx1zn7oIqtc1d1JeqUm8bbDylucAxuhmsGaIfb7g2HMJTRbScl1nrLcOlyNTyuVr9iRzOQde%2Bj1h3IQ4ciDltCTSRaxrHuQAXRC%2BVROIfPiOBc3%2FpfduiEM15PSZEogLGJf0LoSJtouGAtVvKNLwDvK9fTmttKItFP1qKF5Ai7VN5XVaA3HHALhPU7afh0MlHvQXOZiWpmNFQr%2BOBS17D2xLWwN77E9ymaS8FLzkp41xhZ5j416%2BVQdFESSzzf0kDPwrQ0n3aPzZTIn0ReUY1aR%2FqXWf2ma2wOB08GQ9BIAUrnCi2Nz5Y0%2FarkNWUeqd4jVZI6mlxRXCds5e6FoK2z6qD9jD%2Fq60613stwW4ZCmWyMDsC1crm%2B4pt3Wk28M33M2ObOHYhU3Gxeq27fmM1iqMBPLw4lktXXWX782DpQN2VkK5TfsYfdxlCfeBOdIweGBPViLi%2FnOfwfDCFz4D2bRUGofjzyUBvtu9Qmdu8N3WZZue7g7uUZQnd1qdmju1ni%2FQQBYYlee%2F121TiwrK8vNpVRt8ZF4AXjL%2F7StzloteyslU09SvOqTFwgKI7%2FV6zHUFI%2BSBfnBvBM75mAUEsUVRkcevkctqhQUwu9etasQoWOZkSdHiaKAwwZO1wgY6pgGWHW02R8Il3TFTmfpZVHw8eHYqV2sNP9pjl8ZbLRfLlgX3R77zY0oQliCor5rCb5Cldhfkf%2BhzEf3xFMjwMZ5Ep7nzSgoLtthOuGcyd0HPTqrSUgRfZJYwe0jtn1At3E2i07DZBOSp0eVhrHIdoarjRy2nQO9dvmIHhP7M4%2BWhE880CPk%2B51C8fqmMCWeH0U55GSry2vPvZPQxzg0qzvLw05VI6BED&X-Amz-Signature=888be5585e47bef53ac8cb35d6599c8643e64a2753646c8ec8fab82fc136e0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHE3PJE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD95J2X0q%2Faw6TzqTmm2JU5UsmLhcvliFjN%2BhYy60dkRAIgbTO7YaN1vcXa1MpFhmkRQfqJF11nqMabNv4ZrPTyMjAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCGw%2BZbbL4INdkaDgSrcA3nGqv5vBlxbQ6K6tEp%2FCPYaix6%2BN0o2pRQwd3rJUEyIYi4FL%2FzLwmueCtpxOncq1x5glIsOE4e5Y14a6HLvmCdt2vjPUPcUeWzyCo4pfTHEzcTaQy%2FCd1WOIxubP4Mi7DMIb7NuMW4BDxjvfNKA23yINy8NTfyTnt0V%2BsaAUEZpM1nJWaEPusr5QcMR2d7%2FL9e%2B27nmd3VLHVnRjCuN2e2vnRrvLDCigRORmHz%2FM4zLqx4VmYrceztLzqsl6xXABa1FjjYpjypdIL03RKQbrok%2FOaStg4TMGwoxEBjwpPYAWlF50POBe%2BaeRama1psAi5Hmti7irLOKUewt0fk2kycnZ%2FY%2FGYvTiy%2Fr%2F35uJGAxPHX%2B%2FPnjw1okpb4yaLv0%2BkS%2Fu368aQFoWbbezZcVC7ixnB%2FBrW1T010Q%2FKEVBSCwy%2FQcIiL9ktSEhbraQSQTUQF4RInP4uU3UwbX5Oh3I4OA2ZX%2FcnFWcONcnU8FXMKkFTiu1W6tFxKShA6r3i3WF%2Bsf8dwfLPZE86gZ%2FliFzBGPYtRM3mY3YPTYP9WGX7ex%2FApm7df71BQDXHc5TH%2B6g4kb%2BLeaU%2BGyZMYgmsuC7gPtU9336XhydhIlEIZZcrUrcMB8XD5KxD4S1lhiMIGUtcIGOqUB%2FvGk0RxE1%2BV676ixaXq143Bqu%2BzkF17rHQh%2Flt4RhKxpcPfw5n8QKEUv5oYGCFLfjTn3MiVc8dBeXH1trkOfhOnUj3CkO1aN1TWADJuyOmwo5aVyslHUyfMc4%2FlssnUMrSr7nonGgGAq8SxxMx4sQGnL6tF6pCIgUrTDD5mXdlSNkOLriMfGtTFRn7xus40NIa6wyD1%2BAmC2%2FgnGgi6fHmYhXPFt&X-Amz-Signature=fb66e53b2cf2737c729c9d9f7af9b64508c25110adad82ba9422ce9bbef80907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
