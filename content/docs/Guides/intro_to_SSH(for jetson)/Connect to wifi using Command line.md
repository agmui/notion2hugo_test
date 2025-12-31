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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZZ5I6D%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIn9xX2TKqnrSbvRfdB%2FSj%2Bbyc4y4PkJCZY0nPCm59wgIgKosB6luWxupRexBeTluiZ9fBJbvvq95F55w1G5ynKQUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhU180cAjStFf5VwSrcA7aTiFG8D56LSgFkm%2FUUmUXpDaAVTgFTsRbh%2FNuuMaH1H79QsD4rJeM8ANkiMxuDJOaAGCgHomkjlC16aCnB59x%2FhTpXTX1AqrbFRX0AR4k8ST1Eyh6j7KgETyXz9QrGyEY1hlpuZcehrbscccCeA5rJmUrF5JfBbPgliaufiDvNXnTj5s1aLXHCJMU%2FHrjnZssbOiL7iotaS5Ee%2BRdg6rpg7D3vahTeeFlE5bhc5H0JLVGBBbSRc7kTMfZhg8HrRNYdvL08IHWQ0dGRWWf2SC4k2W6gIPZh5ml8kFxERizMmUvjalDyAcjYLjgH1SU1zWss0EZAN5mskPv7uGwpW%2BC3Ey66A493dvCaVwdHhG%2F2w6ibMOTdV%2FuT8pZMZYe8xxSmGcSET1yPTN%2BLBOxzMWPah15WiGSiLbX%2BBA25dY%2BZ51V%2ByeBBepox2pn%2BbTv%2BaVICjtYo8U58FPYB93q4VmAJtzmeJS4kC46kvTqJfbR%2BUhzreP9BVNl1OASDusdqs3mwJXJNBaLY2Lc7n4xGxkzoNL8Zug%2BbEHmuFNN9WHBo5wq4hZoiN82kg0i5LDG5UP4%2Fm1C0%2Fj0rx4MMIjUchidM6xGEmyYh71jIvKTFsoI6xk8%2Fc3z7gGWwmlJmMPrs0coGOqUBKJbyfAtcvlPlLvv5k2CIU85XykJz1Ca2OghrvDZoaM%2FFEBBRSXpGslvr%2BSBY2ox5%2F9eqPIdIN6nIfXuJU0CHv0KyV9vU0FmFlDnWk25JUdWtEFwZK7ulUv74o6%2FAVPPK5UIV928ASbk1GvxYCpD2zfY8dbUO08UYkwxpmJD%2BNx7jDrNrwZQOYa2Y2W%2B8L9kQD1LVAhV%2ByXHffNdZbnUffFVeD5Y4&X-Amz-Signature=9c0341175ef5acb249c0a617570509cf5bfafa0bf03da36347e0832df2b39e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
