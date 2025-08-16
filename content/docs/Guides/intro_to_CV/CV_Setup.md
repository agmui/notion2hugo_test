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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEVO3O5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDsGx4L78ZNYKqWLC76%2BiAyo6WGovVPBEf8oiXuSOE9yAIgV8Z2Du1jYzoXdko7JEBhIMSRMmCAOXzzM487oo5dUBgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLfkgWBSYR7FK8v6USrcA3l9bTjiPcgP3ZrEVpYaBLDhWy36iI2sW6VSbWCjAfFlTkw8TPWS3AMTcTEna1C859SItk7%2Ba9KwQUjeA3vwl01CyoLok22P8PXP78Yvn4vO1HchhrL%2F4rPSG05acXGx1GhAwLD%2BmjrCNYXPRqiFvirskm2dKO9cKi0K2NwdhZAwzGBaFaST71ZKfkU4BJN6ylDj7FKW5bLNQDUk0vew48V1Z9FR2Nb0mEMxhX4QghzjroDsuZtJFs25Gg6Q6C8mjAmK%2BEgaw4ZQn%2BH5o5IePlOcSl%2B9zPyrXFnhhrs8pjhj7gKGtSjqxT%2BNyFg%2FNppFyGBMEh4o%2FDXaKmh0lLkrcHhqX75SLh7s%2FdobNaaWgldI%2FrUpQhxZpsphP1dW79BsdGbQ2JZuNNfS7MCJV7yxAlEs%2Be%2FjuTMIaqXT84flpvqNuFSUz6InEjO4WvFioLfpDh2%2F4%2Fw%2FgeA1lKiWhADWRXYHLUhWX%2FXS4eAPr5CgQ6HZYLqBJJdVfdISi86Ov55xK9HuyEER1DuQ7C8KE%2FXLSOfqLA2nOZkvVvtE3N6fZN1HlPm0iAkv85HToF2q8Zp40o%2FNZHsX3zBqLqJ6dsSx5NhkTT%2Fqo60UzFf%2Fqw6F6o54Os5Sa03UkUGXbO9MMPTj%2F8QGOqUB17unUY9groK4y5uTDDB2nYLv4aORRL2IySO%2BDrUomlKvIpBxOxerV6IPBJCQ5nbqeeMEmzDP30TCprziZ3bwoSl%2BGAkbiXbQjvkUrsOB6BJLeH76elQZ6MeN7KE73q3cgr%2F1kS9iWyWXTWl3xz8RSZC5aaSwR48yERihXLXAaTsUFQVUn4ut3IeY8aFgxvCO8GmJDEAgxMghOkS4nZtPGNhh1HBV&X-Amz-Signature=fcb6bf8482884fec856d609b4e429ab50b92fb06960573a7dc3164ae10dfdbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A52LGTU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIGKfh0oQTFiD%2B2Vg%2F8%2FHbUSaNgffIqGBMyNPK6YXeiV%2FAiEAscqaqGl3gjnFZ21krfkemEuiCRhKeBaR1y2zrKcXrxAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDFym17mu%2BG89Bx2dircA9%2F7wKNA8vsuuM4%2FPN4g%2FgwlS113L1%2Bkxbx2B7eHAifNfwRZfvDuoWn5tG5jR0Q5PinOIrXim5plqFpi5tzxjzuSGkPQAEpltm8ykYm9lPXK41n0LvGk3HUyb2RrB2FYcXI8yF%2B268UkczCK7m5wB5rBuTF2RErrFCsul4JdkLiPtXZ20hUXdoTaFSGpoLmtwhasD6T8G%2BtJ%2F8TSs4YwESHlf9aSoWBmvPZc%2Flv3F4LTSTRa267coWo2S6lR8CQrZZmE5U%2BY6mpHTnHapcEQ%2FQ1Tf09%2B86Y86gHPWg80xL0Y5HEmiqoHg12f7Qp%2B5yFz9MtBzv32ALhEJwhvdI%2FPJ1DYjy7pI9XOgvpDXr21ipMvx%2BDllEaiqAKl5K2WuNXU%2B7GfoEAa0YQQ9DH0i5mjmXZOfSesXtv45KujZTszd%2F5ldTBsWAgeyFCEOYXwWBLBDxIC1AZznPSnVOtefrMW3HmKu1Y%2F6%2BbC9nDzYtDCv6glVh%2FRJ%2Bq6NIBQltl4wDA9CYXyD93SixVhzUwTg33PhXfW%2BhUDJBtbZHAFtyWXYQ0CpKpOa3prEZuIplbTMCdqJsuNyAE8Vf41EiqZVh%2FsE3gqWeyRlas7scaOkvFe%2BYgoY0JqugestIxAeDdmMP3j%2F8QGOqUBV3%2FI8PuooyOWIrK0oYvXi5EbMyegHlY0xuyf06AK18leqoY2j0Fex7OlidPRdpANMR3vkaRs65ixlkKcXqZahZbGczuOumfJPAN60pBZ53BmixDdrDx1ixL%2F3ECPCb06QaefAVXUYgs8cdKsfwrgSk24IWrHVFrrAFaIP%2FU4o2qJuCplp9qbCYxN1ry4NnI7rgALqio8g%2BqUEV41WBfYIvpnAC3x&X-Amz-Signature=cde159c8d123887ac44ff973cbd88f0be70721f58efba1e22dc40c9e5c867e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
