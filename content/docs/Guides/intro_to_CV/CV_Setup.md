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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUDOLQBD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDcCBzJsWKRKmiJsI6DZRfYlapqMukGvQW8zdacuD88gAIhAO3I694TZ4e%2BnWjfxfezCiagfTpjwmXCEvRhW3uKc0A9Kv8DCF0QABoMNjM3NDIzMTgzODA1IgwIwrsf4DgfdwCYJAYq3APIXsXAVCS0SdLAxZJIR6DBUvzYAQV%2FxogAYvkTTrjVXeaYRI1moiFdlUjClFhzzVARYEXtxy2lWfLSyi75CowljDEOEUnU%2FMf1yQQbsaZOBAbdthJrRFPOAz3JSWdprlVbGv7l3rRkgdsPMA7f0BP8cxoMjStjLBXgCJ4R8cpKTizPHr%2ByfAWFF5445Ni1Dm1oqv3fIEnhSuML7AFwWG9EAFL%2F%2Buffq7AFQJJB7my6nlsKAX4ZecLsmQm6F%2F3Vhg1KZ0K%2Bk7oyQiP4Jv3Fobow0O9eDqg2qSoJidDElY%2F1%2F6Ee%2BmBXRu4zg6oVxx8SRzVjqH6iAFBaRqaMOAxAVJ3oVBbmSR2zITwRCtA10YvFFJuTpOL9dX2ES12fgugLYZIBTeYwQ2PTOU45S1jPs3NYjOSgeuIcnyvwL1HRwTCgE6XZxXLgYeZ%2Ffd7RZmUB6VjWSTiYOj%2Bsm1XNWUNk6D2K0GTumMvBOMvuXBH3WcMs%2B3MPhuQNcVqRIsx5tm%2BPs0Vv4tUqJomUYcaoV5bMKnWycCBcBjA1B6Zl%2FAXXvaaq%2FI%2BdViff9fQbFXYxFwMDVoJB%2BWBc2O0uT0Q9ba8Yi2R5ft54JUh0OT2xHVa0LPR65S3W16fpXojuRQDsQjD2zKnDBjqkAQ56D8HEvd1%2FW%2FfIEPFk958lCxMH3IOSEm%2F7kBKhcJaB5xKKlheIXtHasg%2Fxh7BcKLGpM1zeLhVVKERoQArTaEkz8ktJiFCujoaPqTY18f6bT5%2FQPY3IqsxUefl2f8b1f4c6O1aGPE7971GdyZWVIA5yaq0%2FzNUPE4QilnO%2B%2FN2E2IqOHx9f8AgUSfpLecaYZ1U%2F%2FsdLwBIAAiT%2FTPz5tMskmnWa&X-Amz-Signature=2f9e51e643235b6553e2e7eacc914043138cbd9bf0e55184e6ef3af3ea44f1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEGBHOE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAbLv3Ai2cxXsTENR2EVNeSJvq8%2FLoNYCJslhD5ZxTUtAiEAjJFWugUSTqKYpUzUnaUy7eFrtODiWj%2FEI%2Bj1Z3HtWBgq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJT95woFoRMBFVxWDircA4cmXzY3hGq6%2FOsFYPboniU5rLlcn34POTGE22%2B9rQnAgKknngafD71jDsdCNRo4mlES%2BjWp71ccdvcwCJNLIeyuVby%2B3qhCJvOtUzIDrXv7bRmFzAGW8F6jJqpLNQCWWIuw1P6P%2FuPAdQVtok8ACvzEd%2FnASvDtxqlsD1bAGg005mZ1UJTHSR48NkdWjiFzAzGInRgOZjlxVij5X3nPcbdFkXIOfLFv4NTZvDaMbp9ywqaSqC8H0G8mpeKq8ILFvL14nhxhtLmhfGJCQpglcgaf1zCYQHZ4q13m%2Bt69uukdK%2FeYJBbJoEsr4MJM%2BggK1e4bUKKLpWvbHT9BoWLkUiCpIfZ4ngodw1qCho7O8lJVh59b4ej%2B6Qv9Vvdk88JXRfd1MGefvKCMIA2giKvZQZcoOgaQkqEMOAjtdRiQQmzIBUwqKnWYSP65pvXhdSauuvrJDyIGMtUYup7VcBBs%2FLA0bcTddu5vHj%2BWkQbbsh4YzyweZVOkJ5xg3%2BVCyl91RKexScv4JugXt8sxZc6H3fQZtf7Yk7oLNlRDysCPZZPILBmhU2cfr7jFrMl%2Fn3NT3%2FHWQOU3TzhCYtKubRjHSdukE4w%2BgOMyVv973h5SlCE8a%2FguFQddd%2Bs2AOG4MMfZqcMGOqUBfGAdznA%2FeU1q0CkOer29nJfhqG%2FMd9DsbdxfHpI1mY6OTqqKkQ2j0NgjhJA33FAYR8w%2BVgDRmEvYzNiz%2BZdGZ9gxuV3rPHU28upIo0rCSUx9xjOJbbI2NXChAhnQadYSCcqAwb8swWqlBbc8ikiekGdZwXFTH7pOFEOell5DxYpZretYetSjhCWjwUv7F68MmNnGKcMq1z8Df4F2mtd%2BU8HQLEwg&X-Amz-Signature=6d973ce1a4cc56109cb891bacbf828b94580c43af97846140c6e90a538d56236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
