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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DBKE2DF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFDgOsH8idS43Zo2wPdsF1rBl6lKGV4Wpuo9Qn4nQG%2BaAiAZkPH7aKnHpL4PY745FUVWom1t2hdXeW3NAWGrwVKtyCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMDpk7CST6GUx9KFHsKtwDtPi9Xhuz%2Brr391QttVrXXQEdy%2BBIAkXW5K3p2rPaqRZ1CCmgpWgy2%2FtTJn6%2B6S2CrddXxdLZw0MraV5aid35lNotsvUAgpUNIrenPEui5bRm5TfuOK8RQZJi%2FIKy8qpJ2Ts6TY%2Bo5DquMc0OxMKKxFH%2FR2UYw3Ukhkh%2BNofz9UgFR3b45zuqfRXFEnlQqFvZTgwdRCvz1He4EbFwhSZmrthZZ6RM4Gst%2FchRtANgmj7krCOMN%2Fwdk7nTRKw7FC%2B09wnI5kJyZ7wXD0Z5st5hYMg9kN4q90kY49TvUdCOHI%2FzffZ2Oyt9%2BUhFeZd%2Fv5efFAEFcRalrnc8CAsUvPG2qJrn0%2FbFvgEU381mqtpYT7ihTRp9Cmp2Y5sFeKsypapPvCuXFXEFaqCT1TAtkpquu%2Bc7t0jzgp4po%2BGGoUVlpC5NMD8LFlQHM3pJKUNicHZ7MD4y5itn7PHi%2B4k4OO7nX%2Fh37CVUqYSORvO2PXuTL01RFW%2B%2FrZZ%2BBBUef6A2UnvGxMGc6knUU4rzCCC5QCPdmXoRu%2BoHiqMw2DA%2Bi7fJBiv9%2FVYPWwjjxgMrCUo7mxameelcDCEllwZS3jY7%2BobfM4YzqD5qxypFzs%2BqX3oQDcLD%2F2XUcV8i8reoeVMw686PzAY6pgEbLM36lPapgKS5vT1b%2BfhoWSLHREHZG%2Fx9XbZBeg9jGHFJxg%2Fir04KTbPK0gw%2BjwXdVmH5w9BdKua6W9s0tMIThMDIA8QJFlrJKJ0b1GvGSrC2EVeP8863DIpC4Fpimzqz5o6zJYybuqb0GGc6RJwFjSdrlyAsVrzjPlcpQl75WKopXPwiwt2gXrhbsxCZMDkaO7CCciSvTEdySsaGFBHP31qQ1UcA&X-Amz-Signature=d4b40702671ee9b3806042861736c321d294d6620c565aab3376bca71b9d7853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
