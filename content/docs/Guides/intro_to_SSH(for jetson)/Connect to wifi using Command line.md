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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJIYNVD%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDlYPGEWNQ02D%2BNieK%2FCp4k7hwMepJsjwhd%2FHHrMgYXaAiEAgz8ze5GKxrlu7PAi2YI6Vd6vXN8%2FwulDFgPrmYiQ3vkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyx5Hc9QRLbKm%2FLUSrcA6s2WuQOGgJx%2FCvOVFNwq3F7MV60m2FX2Lmj71GN%2BeTvKaZFhTuUXtVLdkLXzz5Ttl2B3tz8Ki3fPESOFBQJ8KfOoEJjZ6RwgZmEf9QHWFSoszzttrcOOfFanCiQJ9uzhMj%2B%2B9FNntcbbQfQQ0uUO310kFk7n0WzclOCPvLPN2Kjrad4vO9CriRtIoTz1yUKPqT302M%2Fv1Z6sCO7zTl0jk89ouEomQqr6jCb58zyiYJbMG2fkQWxR1ZxZnY7e9PjtyY5Cvy9JDA56BwmNsMsj9THL10pvzhjsZHnZZgKZQRPJ37FPERpi6qaSr2MkEZ0S5oifyis8tS2FZxFhvbsrtLDCBRCLWxdxtx8hvAtvt45M1LNU1OXi31bBLxgZOukv7WSTjPbkBNb%2B5VZDlILUKj3xMCOG4cJymrAmf13Gswb7AtGF%2BmRPM2dKW2FbDv7TvXX8m4IkaVnTzMpI0GNVEmEsVLmw3uUzwssMvigNYzwZ0HfamlJeoer7F8YXQt0%2F7eS5iwtDfNyikFzoyc6UoCgkcE9Yjk9Yc0T8MNU3Nr4qyZZQ3aKNcrZ%2B8APsv2wBFz0Rv5VPE4P%2FPEEUWNEak%2FGADNR5e7j9xqtrsWZFZp0ogCB7p%2BCBBUD5JcXMOaLg8YGOqUBrNKjjHCKyPd5Z7UJYvRAWxKlpievV5SaxZQAHEBE4Q4RlIYlM6MEczKKCclW6UGdOco2OpJrxa8LWH1XVDVgkkkWlrvlr2bzVHcIBquWLCBaDKl5U5OyyknM9orXJoy%2F3IBcBWMtzL1RwdPb%2FTNC16DaFfNTMAix2LUth0Lg3%2BKmRBtrpbgG8gDy2goJwTAULrAGDTSxcUWApqLFIoPEegYUvjxw&X-Amz-Signature=f2ac09d94b31bd1a14e1c2bb8e9fe9959cf8a7c3bc5c413d8dee0c00606a3010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
