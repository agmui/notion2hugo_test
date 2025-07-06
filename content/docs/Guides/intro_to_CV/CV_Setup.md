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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTWHW5B%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCTmIRd0AepXQhEA1kHhsr%2FW9vW5mnCPNbfaRwxuGkqiwIhAIdrLyvxOh70rF5fZx%2BRQbWiN1vJc%2Bh%2Ba%2FW%2BXV6BL07UKv8DCGMQABoMNjM3NDIzMTgzODA1IgxtGB0IrUJwuWs1W6wq3AMWRoO3EVYe11f2Ed82ZrmrOv%2F2Smq2uMTdDo7zF9Xy8fDYmsIWAvPAZ9eIBNsPDG0CQy1LQYUq%2BZrFedQoXKHK%2FCzlnaJqK8gBd5x4W6ZzSIw0AHtpppTcP181n%2B89ypW%2BcgEfyXRPvBVfZGaZJN%2BPznOWTcCUdtUEmx8if0VCLiUA4BPydxWVMxgHLbOMzPQo4gi8uD%2FALDqZoQSaZ4I9xkdKWHIhDNenBGoP%2BEBhJvNx5pTRiFvaRxHjXCYj%2Fx8Qc6S%2FHPj9WAA5XNAuqpSj5Jqio%2FbPibHroOV5N3CYErCFsDjXPrnbyBjw0KnHv9JtaKVmctTdw5cTc8HB8DOapvQVBw%2FphquF00f7Ndzmbr2nR3A%2FLdDw%2BzKOruhW9sUdHq1%2FsuW%2FSvlJziu%2BOBoL8W2eGGq6Zn9DjCcTSqA5vJ6Mqt3avu7Pts0y8hOeWu%2BsswtsvjlIvM6tm%2FS0UtYjhc%2B6XRb1kVd5Kel1sgsmgsJu2TADxEj3raEMbrPb3JgmGTCL8pJAw%2BMsbFSg6CyU4LSTfwkbTTuevGhAs43YXK6Mjr24CQZP3Cy9hloxVfuqzCvrW8pJ344M2CsfnBikTlXq%2BBrIUThItT4IA3PDIGc6ybG8TvdyeVdsIzCy8qrDBjqkAVG3fz9S8ejKIRnM%2FXVmB3XTRPgN8BllY3AIeIoH6pXAOAzoVDpL8%2Fw1sNKv4CsmuG1K3UDHX%2FqHYVJzaWzGcaYbxl2rpROyvP5VRvyQV3hRua5zFLmvQ52u4A1FRRQjgSc9EmMm7ubsRxvQKAG7IXPq9HaQ1XRgikig4WFFYcVrdS5zu4Ukc42rKV7hevm4XzlWEuc2lKusWbL6pKu5Il2vZ8F1&X-Amz-Signature=828d179858339ef1807591f5b244d79e8491b3410e07b796a12ba1355d2d53f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZLKDGZV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC8k8pmswwq5c9IQGekE%2BX1ilTjjdNF2fKPZjBSDrsCLAIgG0H6jhED0fHk6rmSU1QKORJgw76rwVG065PKQrqFz%2BEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKlqr3bwlaKYq1WB0SrcA6kIF7QZPD%2F%2BMKwLw1FcYszXmZPuhK3eEeMVYa67ypNHiOayJJhG6NdrfqrXsUZsN%2FUMaWdJquJ4xjkmY3M5ObPTbgWHi5oQD9eXiW%2BTu7MSHo5jLest%2B3hLfkmXDTD%2BsPBrqtz6KPUsOVt1NGff4NpVEjMv9cmiZm7LipIt9OOffJNyqsaYRBMi%2FiZb2e3YmSxBbX0lNXV7DywTOWmF%2F1BrRQY1BrpxkAfV%2BbLkxiYyVR%2Fk2FcFPqKrkV6jc%2BHmYMbEYWt5aYjTzx0BUHtJeCuCVGVQrXjVZqcurIT8nKoMPutvlJwSDU6Ek7eI7dTbOOEsJ9wifBxlfCLlpgJWlSL56etURxYHgjqIJ2z2dfnKceuCIB092oFNeoxijFioMP5h0JvBOLdtYO5PhkWX92fqKFI4WhcED0xB2doc0ORA23w98OobIhUiEML2620qlK1u10iTCfB0fDIdNnZrv%2FUvUiRAqd7ckPOMmjSbYziqvXYmSGF%2B8GaLAJadlV%2F10oJVj7N7cch1dsgLsRNEPla40rlGwpJuRBBNlul0glmKDdwDPLpfCb9emDSOmrtr9zrB%2BhUZxl75JVtU2N1d3Nltc4V4MRywOgWIzfbeEmZ%2BNJ8pWvGuPgn5oTevMILzqsMGOqUBlCbHRw9n89gRsiHmEWGvxxGg9eeV77htwPSF7ECPVoFZ13jso8G0rLAJqmliCWRLXz1iF2HJSxLHh6X2C0Vi5vHdH5uNhoMdYL2SDya6pE3A6bIPrjkMqMe1ZkrsdZ1aA2Tsr0Pc19%2B%2BpQs86TaRYRpsJ4exTOfxuG%2FhGnc%2BeeFe2Xuqqi61hxa0%2FwanjHvXeCZoK4DcZd7JCfE45XDhevFrksFU&X-Amz-Signature=f8f11b9a3608cdc6e54acc648b79c846e16fb28d09b48e41dbf4abaa82a82901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
