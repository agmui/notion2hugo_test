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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ROCNR5%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5%2B0QUD7UpilBoukiRpxWSWjNv%2BWlInAvDoRYAnRLqbAiAIbrXU%2Fu4Dac5BewKISpkJ1ryz%2BCweN3LDADcXeG4%2Buir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMAnLggMWqVQWY%2FnEIKtwDexF3ROgdh3s9cHrW6UJMiqRzVANlrqisDF%2FRTDxOFuvTVS9ibd88rz9%2FZuFeH8Q500b%2BcuZ9drAfPhgjUcT0eKZaNkZhy%2Bd7KezjqAu%2FmvGtSOBbIDmq3bFS%2BjbaGXfhuL7lSnR3XeoJYEcKYdykis73HZaUGm8%2BWMv%2FzGvQ70l7yJh4XvBkMEG61Pi%2FRP%2BCH0rZXM1ACG08m3POJVc3v%2FzJfDDUm4Xn%2FrVbp%2BrejRuZcZ1AnttsHtzxiJqa9nYDl85WgEhXfxtwUNcgdMImuSHWzBGjA9NKjYuG1741iv79vI1Gbr6QAtY5VNPd5vvADSpCY%2BQPlt%2F1HwkQfGd%2BA%2Fp%2BfL5IDtNcL5%2FOg4On6f5VAonN%2FY6YeXJsz2VdsLTu1CYd5D82B1UK5g8gyc4TQZ7NS%2FkQEoJ2q8Zu%2Fcuj1LsBt86ucmdCXosVopOFHHMpez377hNVPbIrYznhu3qGEY0vNGSwJz6qi2iCcSWnDiEppFHi2cKiEtSmVKvGplbBdliOxJoSdKZC22wWn0oRRzfmM7i7v2k5wsXuETqTAHtI9XEypOVCuHvzdrt3LgQvPQFNaEiV29Nc%2BDI2YvHK79U2TLeCBOxvHVCIKn6i7GLXYEYUGasWTd0H50QwwZywywY6pgF%2FgkW58HCWvPhkNsSSK%2FY1B5%2FVQPan8MZyuJlDwsncYIQA9KVNogLhpn9z1rgUYs2Usu25xYqTGx6OIwc29IWv7YB6hmjsqZLEayogjMGszKNGbwqfamZWA659edFoFPxg1Tc%2BrgGiw1USGkaDFiI1vI1mKisMfya8CRTnVHpwer2vvDAz2y%2BB9uc%2FNRJd3y7SmSf2Dg1HtvrDGgnVFRaQpvUBSVF%2F&X-Amz-Signature=b5547a3a6cfb016c3d8a73f7b67c96fe679564bff6548f69eb2363a6c3dade0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
