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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72AGE4O%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXoppd%2BPX%2FR1V4wwljJwYrNc62qwLzQOMPV%2B014aA7SAiBMQHmwm2%2BDKw3v%2Bu6qFkomYttW6Vsh6ec80ZNB5ZdGAiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHeHBXYtqYjgFXKVgKtwDKt8yafmJV9hhDyM8aiGii3qQ4tOgy4ldh%2BFJgelAntbsF1ghQ1QCqRrX6YjZEQJjSniyRPwm65EmOfYEFtN3zXguTjTag13El1qQChq4QQ0kQTC5ByPwSDrKHYRssbIxeUA%2B35YsVNl8t56ypkxm1F67bBpdIEIa7Ne3tcG%2BDhudnKFnqFQJU2k7Tp8NGJbACms%2FQc7ONIEW1a%2F8WlFXZql%2B0k5PDKGrBfzMhaW4ONjXMnJT%2BM3SnUHH4Lq%2FHuijyPh%2BpT9XT9185j%2BnE6LPnSjkitZ9UaBKFy%2Fu%2BiyvDcU5MUiTe3NM4M6%2Br%2B4PoUPlmpLSRyCwO5BHqWV%2FHsMrc3bUavW2Yw36owklwDZr4t3Fi1DwI0bOz0gEhfhnzMneNXz6L3MRQCFhaLVQASc3zhzq3aZWynlLtAga%2FXYfgdsMek7Qw52Gaj6ug9GHPUsICTBHsBRCoLxa6li6MHizxn9G03JV3J5Nkzess9Eg%2BLgAAosJ%2Fwr5FXuNd4Y8KOKj0%2FwDCE3%2Bmz58E08HffvLWmjAaZ6llMt0pbdM3I%2FiV2jjFKanOq%2B3YDU8mqAtymJFpFRs7iawhBPDU%2BXkBch58Gtrrb%2Bu5TXvR8eTI6wzMtL9PGNO5EKKyRmELKkw4%2BDT1AY6pgE53IvGZjjOGJaSr134SvgnYeKDT0jtvWpiww%2FjmAoONfjzdjsBnJXHEIIu6qSNr1x7JOq55mtoTyokj%2FkxMh3vWIqbBP1u83rrq5dGmTy3kcaA7w5SRRhwo6DxgLj9m9V8G%2B0%2BpxFANTABCdgJAtpcjwoD8kkyhKRlVEMgv0tip%2FvzVQRabSDeQFWMRBRB9CjvgfGHEEPvf7AHEyP7kYJ3iMGfecYo&X-Amz-Signature=43dec207929199909bbfadc9680d781f11c70b495c35d32d3fbc03fb720ed56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
