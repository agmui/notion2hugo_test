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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ILRB6F%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9YWi4KptJMgdV1fRYOlw7C6iJYFjMDIYow0DraYIBAIhAMOBFqsBKDGeqVIB7yCshyNzXGP5pnSNUHRB7gG6fGvaKv8DCH4QABoMNjM3NDIzMTgzODA1Igzzf7U4MpkZAZ9BLuUq3APhuPdPkORsFkks9mPA2%2FzJFppZGFhqQSBH1mkgXHdFnEGt59lF1E2YsXoCKw9E7SdvcRHtjR1Mx6RHS1c%2Fzoke7LxEMEYcEzDfeC2fIumxdWC4Du6aURaFAFY0abYplwHyLXC50sGWzHdhXLN019o3Xt4WkcCQM6LeIXHCUCpnV6PDnh488XQn4DmNJZf6nUH2mwQuRnpvvaEf6XQ%2FwKBXpU1tsRoEzMeu7Xl9aPZe8ojMThnkYteD1wqHLH50w4ql2J%2F%2FTyU4GeGrsPxh1k3CkBTGuLbK%2BKJDzP7ng6ergrlQUpCyKpqh9Q%2B7kt2n%2F4sEDziccghUP2o%2FfqCTrPwYIj%2F7PwzF2Hgns%2Bw%2FMkheNjeJpceZHxp4SaS1lqoh%2Fi%2BYOP3DQ4WgdeO7kGW34QG3Vs%2FlOPqMDaw4Rcp0XRTlIpcmBDYu6PI1K9OQqj4tjdZcx09mP1who%2BOGyFYRaUJuP9%2BrINWQCjcXM5VFcpiqeR3ISPcrdP0Ilj9AhsCSWyq%2FEchEP%2Bi1KFMR4tJBfBjRTVm6UXkIDmfwJcZFbQ7UYpvaEOyNqsszhYQt%2FAI8Fg7Jg3O5kTpV8KdV6HI8dvCtaawq2Cy9Uw0MFSSjhoMPG2D7gdq%2FfRFl1NYVPjCx3anIBjqkAc9hkWPApXaRjaLGU1FGjP905eobFhTvzOkyMQWjiVkEvWZy69hwzZHqWQ9y2kmwnbxMb1F%2FZJKzeKqi1D8233gave06oq%2FTmdJZNug1Pvket7QvD76Xd6ENz90j81LVNG1HSst7oq8%2Bx8g%2FAcT3VaFoCbcARaYloVMLbwqRd2BamIp3Zs6MLy%2Bb6IQA5vL7gGJFXMaGUc0yT6lyyjMMwhME4E%2BP&X-Amz-Signature=2bcd0e57ae8b421735280d08507b965339a2f50cd5cfe43004dad215a6343ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
