---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMCLAKX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDueYBRDjChvcWUXzQLAe9pUuq9aJFgibCdWI9oOsuDYQIhAP1wBaHDC3jtLLz%2F7Cl2C3amQImq60ElvpfkEmRBxEOKKv8DCEMQABoMNjM3NDIzMTgzODA1IgxPVIDSBC0rnw1O4Lwq3AO0QctOAhXF1TduEcIUyl5GfryklCitFOi148E3BWX2yxjAzTbs9GX3EKRRCCiD43DnIM%2FHAhs6OqwNGAQ5ocGnxHVlLThptD82F60k3aJH5h9Ki3aGKLGimNVD%2BMesuxhrUqnkC%2Bz9NRCCgqvouJD8aBPNJCwvxSuCMLeyuLXA32FSso4gba5QulKeciT6Bd3s5aAkkh3N1vv8kEbgs2ATV29Ktp7UgPlfp%2Br1OFN7nPFd3WSjATK26PEshLZDTBkVtk7R0uG82ZRFMeOI86gpZZFWRTP5HWaOAsa39InXkQZpE7Pp%2BZtqJ4EuBbQIXYU8aBmG%2FF4TKz1uLO38koIeaos482ZGmo2X9NFbc6HuzcqkAyC9owzZ7MrwzkDn37PARl2zXOuMgcsUmHSjNUhuLzarkmdmgUDnyhKHgdJkO288DU05CNbe6Ha5ETODa%2FaMCPTLzGDCeMcFHmu6kSL3sFHBlP8utj0Q8XhRga6DBCHvyD1jFDtUtj2zXe0%2BWoYgWPeHmlZEZVMRlw3CrxZ9Ofs1xitoswJOLrtbiXZrMrcp5%2FB1RlceYIzOhkajs3Q580X66MKav4L2o5Awkn0VQwZCk6ptKWWdR%2Fhb5B%2F976r2dGj1MvgKIWxu0jD24PbEBjqkAcURRO0GD6RSEOwvdctlmtVjXbDrzaDikgqSryC3Lci9Y4H0r%2Fn%2FHWzkjx4YzHsq6dEkerhzRYvA0HmF7u4Rx3Y%2Bk%2Fto8aykIl8sBgwr8O%2B0jIaRoiGRx3U5iavdT8popRCdBlNZkzgoDN13ITuIJ8c%2BiGyMugGNYKVbp9FeXPtQdGCFsGr5ukyqKhiD3NpuFmetfqkVjAqfa7UyIBYHSCXvNJDs&X-Amz-Signature=059ea2c3c4c8feee7d579557ba3ccb7ba270571fec677d8fb205818703ee1f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=daa0b622dc994cca284a04ed6569fb911ebe9410cf1a5221fb9fefc4bd34ae31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
