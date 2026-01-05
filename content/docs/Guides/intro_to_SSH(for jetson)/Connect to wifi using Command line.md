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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6EEP2A%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCbOJfu%2FtL2O%2FzLCFHA%2Bg5gFSba0JWMYYruPWgs8cOynwIgbQG%2BHhot7qan1v7%2BAo4lFECXo0jtKEl%2BR86gz3WpdDcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCYP504CfAyUdcJufCrcA7RirAJsDCopRboSWy%2Fd6l3cYaiNjjwAza2%2Fkf82xHgND9PI5hyy2MlEuDVLpmsvPhfOXx8KCLrhzNXGBRmB9fqh7Gvpt5vOLhS0FvW%2BLvnlN4kTYre6och08uGsN2QPa5LymIuYLRRo5EUM3DtUfB3oP0vHUbaDW6XX9QOQQFwins3QdH4fWQODqgl%2BY0f6dOC1HL2ESUA3ucs%2BFHGVS9qkxouV%2FN7Mi8aZfCHd8MR2Znn7peKKEWd9Ha%2FxWg8ItKitGgrKMNPTZ5lVJbR%2BS9K48I5cSVEjbE1Xe7sCGp7M7mMrO8yYCvoi8H9rW8AROutGptQB9PNxyZeE6JSCPMN%2BLwn9UD56dmqaEmPpz0yjR3IGbm3Z8XWNwnW7sQ%2F9cY1BFBUiM9pDgJ6xT3Lp2%2FfZYEkm2sS4xwJw8YQvz3ufIFArU5C6uBhfbBCOrxxJG25TOtBO8SZVt3nt2Un%2Bk30KZVQFPAOgmcjxo55Vljbv5UFel%2F5vUMfZ6LpQ9Y60hYdUs7nbFHBuJPZ%2F8o8au4EmCayxdubOhnAoIo5b57NRtZw%2FCgxmmye%2BSCL48ZZ9020ta5c3S8pSkzG19OtjYhDsePLz1SNUV5AnUd0t9rcO3clZ0YhT567%2FewQnMOql7MoGOqUBl3f2FaDnogeBZ9LROVRk5RbvlhP1U%2FHM02Om09ozb%2BEm7PvXywZ%2FkAYQEffSVlE%2FI9tgKqtEsxYMaR26TO86c5DCHRAqJzyjhIlzMZV7atlcEwwsQ%2B3BauNzxK9b4zm%2F4yqwhbalcN7q0NBM6hjA%2BTswnp%2BZr1NMlIxvro5ejI%2Bi2C3RIbRry72woSUb98JDp4T6814lwcukS8prMeejJutoTYfa&X-Amz-Signature=b84959e07de3951ae183143808eedb2adeb8ef85174ebd380742951c5fa92f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
