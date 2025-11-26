---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJFK2PG%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDV4hrxV2ef38DI380Uz3UW7t6fOE5L8CC7EKSa3H0HwIgP4aDIeLfcsnbODPromEzdA1NUjLzp1%2BvN1nM5T384GMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIdVguhL%2BNgUhzvHkyrcA4ixrwT0EH5EHyBrSOLFEU4UoxmgkHQuFQ0148Wd0OvRpiZ8BGiUGqRj2wj%2BsAn2j2NUb3hyDtE2OtPn1L27d4rSNm449YB2qcevqC5MXdqH%2FkJggguC6Jpyr6H5RipWCZg7l9J2JOu0YXY6UqybAZ%2BQ8gWsBTOJq%2FAaEYVGpXPL9zBwdgcW%2Bdn5r02DHSFpOdiRcJsC5RmwrqnaBipWZ%2BUzZpij853IuASVD5FhY19sx6s3Av0Scau0bJjEUb%2F4Yg00tekFwTLPKht3X8g2MK%2Fkvb1lN5DMLvswHDFo7IYJC5nFAkJSwiBUDR2Icgjfnzu%2BcHsm7Qqwsda8QR9sKLs3Wgp%2FKKS0TIVR5dnAopLFiOrGinQjgQ9vUWcjG4byUciKbidSjiqSB%2FGQBvAQOmAmcCuLTMqCF6jScy%2FmyWbgf0mZVJtAuHyKVamWvE5CfyNgat1MLlY9%2BJjqQd1MVaJimgCM%2FODATOg6FKoB8Gg95AqatuNPY6r4YZ7%2F34avuN7bB8z7K5tkrFPY5YPtB3R9YJLMvSL93b04o9l5EFLVzm354ikuYF8f6f%2Fuci40WT2t6YBke5%2FXNLEamHDlVoBEM9SXhW6SwlccwIJG%2Bvmy6hUkcFjJaUwn7%2BOmMN2xmckGOqUBg19l6D5njnvkGDVt%2BJd7289YMuoOBgeUx%2Fkf5SzhGuwMTrzrb9M6rPTbZT%2FXtyjsh387FvVFVXqu2%2Fib78MTOsDHl47sD8pRMKgy9XRFxvIcvsyP6qrVe%2BrgHnuMDUbEOKB4O%2BVPTydKNrVvFgru8Kl%2FgU%2BlEX6kwt%2BAZmQk7zplh113%2BzKnxFW1dP7dIZRETqTQzO6%2B6pIOSQkOiQtDbIQquUVe&X-Amz-Signature=fa8685d32b0b0d30bf9a9855768ceda20aca6c5df9591f6b29ff2fc5fd89056d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
