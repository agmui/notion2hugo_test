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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3LY7BD%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCpVe7pXvl5ipldSBt0nsq1V%2FAzIyHm2kakDbjnlo%2FwVgIgaRu%2FmHUi9l5ZqEBRunVeKvl51k37xJpEHJHLMjsKp%2F4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFsMhRBBtGhFqm2gGyrcA%2B8su%2BataCaS76DXdxG9fzUf7u49WNP%2FemTxFc8l2KbNO22GU2e8JY0C4pP%2FZXuqrIHSDb36F0CA02xEym58Sw9ko2QC8y9oWmwDIQ3%2BG3QGLjWWv1sberuFdS271UyoP2f35Q%2BKfDLpo%2Fzimp6Dmu6i0%2FOCByehm9ECX32QQ69wy0MOObdHWhhBS%2BYJ53jL4cZdisbrVeoYL%2BAdFVMCreRl2AphsUFWDS3sKTK0%2BkN%2FY9aCVADtfP4zf6Br7vKw9GEBr04SpTClJmnQJNj8IQoqpQrJGXjP0boYB2CUH%2Bu7dLAhubVIGsMwwFN6%2FrRobcF9CTQ9kXdC6hStk9z11RcBeQC31ejIyTTjOfCQ3Cw3DilMptf9zP%2FnbmoX4eXcDtV6nbA9Hr2wxED7iF2ljbgvSJIWOazNNWFd%2BzZXcW2Pa42bRKRNyptYk7goP4baJitRXjgfjJFzI2cIxz75fmijUA2%2FJ8%2F6IsrX4S5Wlv44kyZZ%2F54xGwB0eQDWHFbjstO1imwMpzM1yd8FJ9ZvQp9WAOzNx4v%2Fl9ueMySUimBZyDwI%2Bis%2B28T7WTScSDRFobEw2aN%2FKQkPgfNARnRjzbuIIHo%2FJZZ7Uxx6J9LryuPly78l4qJDQ8xXXcF1MNbv1csGOqUBAjnfrZYKtw5v5a4vAMYMyuqVM0W%2B%2FQRS5RTaPCrgjJxZ%2FHLRG9GwLFnxKjCPNh0WKdJ4EbVmYqeMYn2lAw20cH0%2FPHZeNFYCxYLbvG62FkcoHX5aPCgXYyvzbszUfk8dtGSUkBGqqKuuHDHCno8AOTPFHKBN425F2O4muIx6p4ASr6wzi0h7uuzvxrVmX4LmWbEn9qygAuGl7NembvsYV%2FgQi9tF&X-Amz-Signature=9c814af4f4742e25519c8f56e25e12fdbf6ca5f08c6931cdb41fbda35b73288f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
