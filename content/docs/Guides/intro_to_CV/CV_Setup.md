---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUPLLTTF%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCcXT0o4ZLcEnyTu76Q99ZAMR6B%2FCJSvyx%2BCmLpnGJ6%2FAIgNX1%2Fysp5whAoKNRjzXX1XvAtMFMGJneu39d5fxitj5Yq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDBN53RnMGLu6ockkoCrcA482C%2BXyZ%2BQA8lryXQvltO2TaZBSFVl%2BP73f%2FqcxoY7%2FgyB1igYyrFX46%2BR3zsvgOBMbHCRX8MyP%2FsTO0hdye1N%2FaKoSujnTeEOMupriaLl2qDpdxB6VbkkaRnIIZ0PA2n%2BZg0ADDwlzjKt%2BHyoyZtgOmdztOr1fdF8v8C%2Fazn2YKelCMIw3XzGRP7ZgwXU0e%2FKo9KtPknFok8wLxJPon8IH9mbp3AbG2Mn%2FsstCcgxF%2FdQHQJINgxB2OMCAHgsluhPfP0skMhEXVQh2rDpmYwIs03BApgJrsKqquoYmV77ROV3JXhO2IhvR95yFjcR42GIM0k9BntprJlStnxDSxyFhx%2BIiwCRFGgnLfirD0ttbfPtIdkJYqUq7xiR%2B1EfnPQT%2BOrr%2BTfcRR2YyRpHEtZ0oOduVlMXpYfkeX2BDVOnWOB2ZFELMGsU9LTfDZtRtipDSomM7cSLAV196Xt6vPE%2FeCPyYym0T9dhGqdlRS9iIIFFKHXiZPUjdolkCkmj6leufGh80IH2oXcMBx2g8M%2BNVJ1VpXhl%2FvkFbwx9bejWC6m1rvbsGemv%2BfIjzIQ%2F3gj0Yl9r4KhsWAFmVVD6PqM3i62S4PKgZl%2B8bEQQseeUUYlNf0FYh9LyWFZaVMPTduMkGOqUBjKmqcpUKGPhS7J7v6xl9YRqwZdxpClB6MIp2xO6mPg1PTAtUJeWdY8PDFGpey%2BfhkIXFGVwjlRXNW1fnCkZ%2BHbpoNgUk7UUHuYvmRX01zIYyEjBPuiz2duNykYZ0yZ3PUTkRWHHmblQA4VZRs7OetFqDhWKk5Po0hdgpr9eAfmZ8gtODiUoYVWgtFQDbTagnsHyT%2FSnoFEckAm0Pe0HhUyfpbi9t&X-Amz-Signature=506d6075ac53a50a5c63acdf845ef316697dc1cf801e8a3537c8cbdaff95662b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2V7HU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQC4zIElI60HH21xw266o0UGSMCAVTgPrN%2BY%2BLVTNJMVXwIgQHF6I5n23yAQy4FkMngml%2FRlBMfIBB15Z3iUWncFLkkq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDP%2BksTJ%2BHMO6dIPyUyrcA6x8SOXPA0yquiLNlaKmnRB%2F0vduUdFD14pZANpHbcSnyfmkne4kuOzRdC60c0NO%2F%2BnC%2BzU65ppvgM2XnzboEbBS8u4XzDX5rD25tjaQc%2F9DesPcmo%2FEQdutLzgBEHwWv%2Fc9gcq3cl%2FZlesu5RmJZmp3Pd3dH5fG9sIfEUynUi5B%2FD8Obt6AnA05FqYC06bEQ5wGEi2dG3Lo3InS1TscZq%2FuS3IKxBthdEDv97BKXw%2B%2BrgJqK%2B2Pecalpv3mXExuEeenJCvTjygoR0pDKtUv%2BXCvzlfT62sJoKsKzgb0TVAz2gFNiPdqPxDRKqLVtChmn0qspN%2FEjs7RwZfe7ZVPZEhrxrCF6JhHUZFvpXVKJY6jCc9UbUETXapd9v3lKMcRdYMi4XZE6fpzFHWr6bUKRCNLZlA01wlGsaQDj5NzrvEgaSjhe145FbHYUF3Q57KbhwWRBahAErbTPKqq1kZ8y59XwIY9vV5DWPvmqvWR8zk077n20GSAxJ5TvzNGU17K81EeXmwWgZa1oYReQa%2Bow%2B3O2vS2QP%2Bfgn00DYr%2Bo6SLuwLu4OPAb7rY4fE6QOpFah%2FlHwou235VeY36%2FgS2NZ657cS4dEx8aLb21yL9fwgTFesCwKKEqKZAXZClMLTeuMkGOqUB%2FqGccm7q%2F%2BjiL%2BM4OWoABmEilHF49AnFC%2FW4mZ1Fk%2Fd4ooXCvIMArKjL7i36UX4VXVQ2OT6x3dBx3%2BFeo9ZzvWEXIvfoCboHuel5RisVVvfhAy925W4h2hxM0svMSVFvG1qW%2Fls5qdLEN6hsUl90dJQdSlPGO4t%2FyXWAgv6yHG%2FJ8Js143fVDdybA5rzoN4jLVyFRykCUOA3BvA4X0h53NvpRTtM&X-Amz-Signature=bea031b973d063cbd16f2cf85f520d57079a32e94643ad5b54790c47b9b47373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
