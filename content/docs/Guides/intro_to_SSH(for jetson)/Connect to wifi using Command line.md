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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7TMN5N%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbTnH3bxXTPvsjJ5u3ZVDrwyJd9rAlMhDHSQovFSWYnwIgfi5GSg3eQ%2FAApN6Vy7hiomjC2DnT1FkK3T36Bblxha4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNNLWhLYaeRVNMLOCrcA%2BJ5BwKGFoZYSBtFhFNWB3PcMzzqRdNdZBse%2FEBjH8TyiAtuk6rhaouRiGPZRWtl%2BxmDz9d1hQ6cVb7JFss5%2FjrDHEQ8LInZvBRjJM3M7qEVzpNh388GNOinjLthAADVi%2FmU%2Fcv%2BsOaWO8CX%2FZ1%2FOYFOpwf1%2FrqWNLZZN0iQQZhskznySMtwoUupfHdW05CPRWhkZgWlvarAf0rh8FAW9Saf5%2FECONkOaCvyoyJ%2Bz3L5UnpXf5pgcPP4kekpzgYDbbOvB8lHUPnGtLG3V00jr%2FKWryj7L2Zhh7NQuh1VZuI0w%2BT1ZsZm%2Bi83sbG7mJmZyXMiyousjfDlnAns7rwRc%2BV2h2N2hWV9WY3z9Ia%2FHdTdFgeC68Yg%2B89O%2BgiWXUjCaczyb64hLyrcucPd0rIhKB%2FzEN%2BcYSpD4vdTUeSqP07mUQREtUrXpU%2BhkpMLn2xwjCc%2B28fS6KarriyYxAky506w0Zg876mi%2Bs9Pk%2FjnfmncCFXfKEVbQRfCoJbBa0QGSaGIk19Qk631h33gyZwe0st68%2FcQcD7GLwSGh5fwMoHEBxFX3rHmEgCB0CN8QPctfVP0e2AYsj6DnJ%2F90Nee0q7xXXooXqZqNE%2B2%2BOCq4wguENl4t8nOz2jb0KPyMLXW8NIGOqUBSq%2FhYN6SiRZuTBr2TYJ5lUulgwQrtYgIfH80Zc4j%2FDj3rQ52Qgmrf6sCBBOGc1klVroGES9OHzL9Vc3kiVDJStKNVDgItSMbuGiQkBy4OBEbYUD7SzrDC8ETttqXJq%2FMSfkxifM0miYYxFTcjnz9okcVGzr5oWboDsFjCWP5KN2P8MENHnhYNy0KcFJSZabOeOCh28XM1c4QYEaSU3dAhAE8P8zG&X-Amz-Signature=0d4dbdca1004958e1b13bed2a31462eb187906898bdd752e4bb932c9bf0557a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
