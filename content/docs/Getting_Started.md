---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPYIBL6%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOfKIrfEDCSoi%2F6WdARmX7SLM3m94i%2B6y943PBVyIUwIgb97%2FyFoFH8BnmvvtdkUkc3BpVgu389fp2fJxizBsBp4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr9LkMr7huDgOzCHircAys5QrUjydZ7dguvB2BglxHTZTc40TgUJkHXsk3rxYNDvudqfSSxQfWoKBgGkiQyNCjLEMT7DlHFBOnWCiv0uY5bs7nvFcfblK4lYsPEp5zQk%2BofDTH25KCahcVMAz4jQiyfN%2BHWyLOQgVRNId38xrADAK93AbmOW43AW%2FAiAVE8Qj%2FI1t3dVjPKRlu4c0DSGdOzTBM86lsALAy9lvok6fbY8npHa388Rpc9obGNHEit7zGuNiIDkdO2SWQJZm9U6Qarai%2BjnVR%2FT0TGeh3uquLj9X2y%2BLj%2BbZCWBCZ7QXCeZ5gJs8VNm4IXUlsCJfWT8suMsnV%2BbLz63K79V8l%2B5p5m3Z3wI1xIc5xiGV8SmV1Psps18Mg7eg%2FowzKeuJmm6Siouw1e4%2Fw%2BzGlGotISIrhvZpGMGHumjdat3OkNveJdcxmSbWmCTuT1QAFZLZlfbaN5Shp6k5g%2FeCFQxtcMC2B1Q9P59Mx9qtecPZu70w2TGfgx6awXbO4SF3MARFFS4vW%2BUjaMjf9210d%2Bk9dX2ccjahiwfBbdcHueHeIOHVM9m4BZP9Hcma%2F1dzSUe1piO51d2Yg9%2F%2BcvE6ytTDZbkP1jMlIYdCameTGiEWrnhtCTaPKFEnVQvFCtchTVMLLFo9QGOqUBU7dRHBvEAZwxeGJM%2Fp5pjMAMBFXQzfg1e3eXRvNkOI3jG6MpkSST9W%2Bd5iEsBQHBLfIeN5Yo3dfd4ouHT86XIHgeb%2BYuNbcfxPSQuLOcj%2BkRT9bRQzG1Tsd%2BclWrl1DufzWO8g2m6YAE6A4IibFMTgfapfhfnz%2FfJ6Sg5tKc6U6RdiPbkXUa%2B5zOz2GzqiMhbumeJyGTkE2vEVGB2kKMSnS4NeGY&X-Amz-Signature=5ed8d98763571fc1a0190b81b71878b7591f7bba651c7d0ecbe638b33ffea61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPYIBL6%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOfKIrfEDCSoi%2F6WdARmX7SLM3m94i%2B6y943PBVyIUwIgb97%2FyFoFH8BnmvvtdkUkc3BpVgu389fp2fJxizBsBp4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr9LkMr7huDgOzCHircAys5QrUjydZ7dguvB2BglxHTZTc40TgUJkHXsk3rxYNDvudqfSSxQfWoKBgGkiQyNCjLEMT7DlHFBOnWCiv0uY5bs7nvFcfblK4lYsPEp5zQk%2BofDTH25KCahcVMAz4jQiyfN%2BHWyLOQgVRNId38xrADAK93AbmOW43AW%2FAiAVE8Qj%2FI1t3dVjPKRlu4c0DSGdOzTBM86lsALAy9lvok6fbY8npHa388Rpc9obGNHEit7zGuNiIDkdO2SWQJZm9U6Qarai%2BjnVR%2FT0TGeh3uquLj9X2y%2BLj%2BbZCWBCZ7QXCeZ5gJs8VNm4IXUlsCJfWT8suMsnV%2BbLz63K79V8l%2B5p5m3Z3wI1xIc5xiGV8SmV1Psps18Mg7eg%2FowzKeuJmm6Siouw1e4%2Fw%2BzGlGotISIrhvZpGMGHumjdat3OkNveJdcxmSbWmCTuT1QAFZLZlfbaN5Shp6k5g%2FeCFQxtcMC2B1Q9P59Mx9qtecPZu70w2TGfgx6awXbO4SF3MARFFS4vW%2BUjaMjf9210d%2Bk9dX2ccjahiwfBbdcHueHeIOHVM9m4BZP9Hcma%2F1dzSUe1piO51d2Yg9%2F%2BcvE6ytTDZbkP1jMlIYdCameTGiEWrnhtCTaPKFEnVQvFCtchTVMLLFo9QGOqUBU7dRHBvEAZwxeGJM%2Fp5pjMAMBFXQzfg1e3eXRvNkOI3jG6MpkSST9W%2Bd5iEsBQHBLfIeN5Yo3dfd4ouHT86XIHgeb%2BYuNbcfxPSQuLOcj%2BkRT9bRQzG1Tsd%2BclWrl1DufzWO8g2m6YAE6A4IibFMTgfapfhfnz%2FfJ6Sg5tKc6U6RdiPbkXUa%2B5zOz2GzqiMhbumeJyGTkE2vEVGB2kKMSnS4NeGY&X-Amz-Signature=fe1397504d54fc3d6b7301492dbc513ad3dcbf11f72fd6f420e488b11cda67d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPYIBL6%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOfKIrfEDCSoi%2F6WdARmX7SLM3m94i%2B6y943PBVyIUwIgb97%2FyFoFH8BnmvvtdkUkc3BpVgu389fp2fJxizBsBp4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr9LkMr7huDgOzCHircAys5QrUjydZ7dguvB2BglxHTZTc40TgUJkHXsk3rxYNDvudqfSSxQfWoKBgGkiQyNCjLEMT7DlHFBOnWCiv0uY5bs7nvFcfblK4lYsPEp5zQk%2BofDTH25KCahcVMAz4jQiyfN%2BHWyLOQgVRNId38xrADAK93AbmOW43AW%2FAiAVE8Qj%2FI1t3dVjPKRlu4c0DSGdOzTBM86lsALAy9lvok6fbY8npHa388Rpc9obGNHEit7zGuNiIDkdO2SWQJZm9U6Qarai%2BjnVR%2FT0TGeh3uquLj9X2y%2BLj%2BbZCWBCZ7QXCeZ5gJs8VNm4IXUlsCJfWT8suMsnV%2BbLz63K79V8l%2B5p5m3Z3wI1xIc5xiGV8SmV1Psps18Mg7eg%2FowzKeuJmm6Siouw1e4%2Fw%2BzGlGotISIrhvZpGMGHumjdat3OkNveJdcxmSbWmCTuT1QAFZLZlfbaN5Shp6k5g%2FeCFQxtcMC2B1Q9P59Mx9qtecPZu70w2TGfgx6awXbO4SF3MARFFS4vW%2BUjaMjf9210d%2Bk9dX2ccjahiwfBbdcHueHeIOHVM9m4BZP9Hcma%2F1dzSUe1piO51d2Yg9%2F%2BcvE6ytTDZbkP1jMlIYdCameTGiEWrnhtCTaPKFEnVQvFCtchTVMLLFo9QGOqUBU7dRHBvEAZwxeGJM%2Fp5pjMAMBFXQzfg1e3eXRvNkOI3jG6MpkSST9W%2Bd5iEsBQHBLfIeN5Yo3dfd4ouHT86XIHgeb%2BYuNbcfxPSQuLOcj%2BkRT9bRQzG1Tsd%2BclWrl1DufzWO8g2m6YAE6A4IibFMTgfapfhfnz%2FfJ6Sg5tKc6U6RdiPbkXUa%2B5zOz2GzqiMhbumeJyGTkE2vEVGB2kKMSnS4NeGY&X-Amz-Signature=d8c1712c613f2d81d26d74c321118268205284852376f8048e729e98d2267439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7NFJAM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaX%2BFCr%2BOVJ5xuGpthnbrVPzpb4l12U3hdL7mL7%2FiWlgIgNnVL4ZJdr2CWRU3ysTfFg3MkWrkD0RviW8uLGID65J8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4Q%2FUu0bu%2BQirAnUSrcA%2BMbKyRUzIjHtbhw3qGHE7mnLGIj1UgbExWciN8fH1JyVNiN5bDnmEiR7L23G9VETf%2Bq%2FKA7ui8sgLOiXNCbxiFCJmRjZecx53Q2Asxpa3CB%2F4a3Cuiz%2BfQ6JgLrZyvXB8C9iBAHbZg3pYgelx0krUAOiSDhUcG4TN9oLv2EjQ6sSrSFohy2LakCHcq1dGmP6pLpU9I5EDC4Aac2wAAwNe1TrIc36Fm8oVyy9uWTXZrfAJR19pbQb%2FCDizV%2B2qH%2B8nt8%2F%2BDyO8ymcwG2jrjn1sGRfq7OXWEN2gRObTlITl29Hs2%2BV4OOqOJnujiieQ3NXpxbFYLTPc8UaY1QapO7zaEiB1fV6%2FFvRX6n3183TRaZ1kyRP%2FYiSTM3HhhvG6UgttV7FjnWkSKkstwGqnYKKmqxApRrRRslxGSf2nR0T0n8LzUU%2BNoPD9m8V6Omtn16%2FQuAc4buWyPqycMuxLqw1f9SHg77U6JeK7Qd0lWIylRa25KwjsKy9ZuzthH8uqTbeNDsll8dKnAZaFTwcHY2rhMbDgztTXNk8oDyV4p6pdsjJRyybUMJna3Mv9wA3M1GJeF1NFvPlmPN7ue4nbd0l2%2FZifxwlA6LgN6Fzi8PyJ6S%2BG1XeaVn6S8lnBMGMOzEo9QGOqUBB0UgJkpm%2Fe%2BZvUGWFF2YOkuTOuf8TexNMeOJhs8cVqNDUhOy%2F3GPNobsXDn2fVv0dFvlYdwqh3wJZkK2NrPgIkyyqIM59fEOHprFboiMXbchIhcnmlMD5TwzfCP2iBPkWD%2FrjuhNB3NP5P2HddfmEIpknYB4kpScBLMoBmUOEhr4GV1sOkzr2XWEYPb3mv8l7IfuL8e%2BAILoUdluTxMqCZF2Foos&X-Amz-Signature=18091a5a741b3e231c327d16217d8877c91b3aba83b57218ec34b99540790e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKRYVS4%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCM4rgNvOpyqPMjZkDcdLq5f8YsjzQDfQ2OSu31AsEcAiBOHjAWDyareCks3lSy6vf61dMKNtTqTr4yqOJmUqXkhCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM%2BOfqzyqtb%2FFRaqKtwDvoDhlRTgvlXTLv6sCNDaQiOV1akg%2BCGWzigCStbsHSwKY1Z1da0qL4jFwvl1JNxEWAh9sB84Z9CBsP17rfru3bnhO6c4htcg%2F47uxoj5opoPSwAnhTuXYB%2FHjTUW%2FClUhuRlF7VpMygSXb25MqEkNnRtUCe38XdZl6Iyhn%2BkGv5lm9s1fud3Ct4jr%2FH5v14oEvMBCwF1hwzLhpNOTOWP5ePMV7a0pmEaGjaMST1ou8d5CcwApC1ugPL%2F9FPisYmnLaUa6OCOQic0QgkWyp8MjLnAUrCZrTRly%2BWe6cYhHyRbZFxYx9cHWfsTxPD%2BIAX1iuUpBD8YLycUfY2jDOEMOZ3eoYwg1MuqRA9vYBJYFL3SJiMPRGeycsXUHaWi8Tlg64h1LSB%2FmioHMhnzmDIFfDyjRscJYtS9UFPCMdAfROAwZXvIjYGT7DJ8orqwCG0J8HvKKuwwMw%2FINEC8pLJeGOMzr1A3SQBqLnfrMojIXKw%2B1nl6qp6UQ4YH5eaUg%2FiAPpm9ejV2jdIVkW0bvrvSQ%2Bia%2FJvrqp8KDdLo5hN6KBmI7llFEKSpgT01ehapOgvOtzpsyyqNNMdKn6CUmySFKnlKqpzQOmf15enQnwkgi%2FDGlYEpt8BB0C9kc70w9cKj1AY6pgGlYk1xl5yng7BqTJl5nFsIgR1iL1GiWkJt%2FMBUhx0VTifmYcwNtXV7eoIeR1WwWevu%2FFRG%2F%2FX17F9zbsEWD6D0Zhl8Y3ZCnHh7n4Vl%2BBtAOtYmJ%2FBw7qp5hFoRZgIi3%2FdQJewdjsD%2F1dGu3WsFooR9zDCcxuIy6dBYejDMOhMuek9pAIJxP%2FnIqvu060ZQEivH%2FovopPICKhkrfr7rTLAE%2Fi4H0aJ7&X-Amz-Signature=129897ae74abb29bfeec75a2ef44e285cefc59a3440e607c17f2a09a7710ee97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFPYIBL6%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUOfKIrfEDCSoi%2F6WdARmX7SLM3m94i%2B6y943PBVyIUwIgb97%2FyFoFH8BnmvvtdkUkc3BpVgu389fp2fJxizBsBp4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr9LkMr7huDgOzCHircAys5QrUjydZ7dguvB2BglxHTZTc40TgUJkHXsk3rxYNDvudqfSSxQfWoKBgGkiQyNCjLEMT7DlHFBOnWCiv0uY5bs7nvFcfblK4lYsPEp5zQk%2BofDTH25KCahcVMAz4jQiyfN%2BHWyLOQgVRNId38xrADAK93AbmOW43AW%2FAiAVE8Qj%2FI1t3dVjPKRlu4c0DSGdOzTBM86lsALAy9lvok6fbY8npHa388Rpc9obGNHEit7zGuNiIDkdO2SWQJZm9U6Qarai%2BjnVR%2FT0TGeh3uquLj9X2y%2BLj%2BbZCWBCZ7QXCeZ5gJs8VNm4IXUlsCJfWT8suMsnV%2BbLz63K79V8l%2B5p5m3Z3wI1xIc5xiGV8SmV1Psps18Mg7eg%2FowzKeuJmm6Siouw1e4%2Fw%2BzGlGotISIrhvZpGMGHumjdat3OkNveJdcxmSbWmCTuT1QAFZLZlfbaN5Shp6k5g%2FeCFQxtcMC2B1Q9P59Mx9qtecPZu70w2TGfgx6awXbO4SF3MARFFS4vW%2BUjaMjf9210d%2Bk9dX2ccjahiwfBbdcHueHeIOHVM9m4BZP9Hcma%2F1dzSUe1piO51d2Yg9%2F%2BcvE6ytTDZbkP1jMlIYdCameTGiEWrnhtCTaPKFEnVQvFCtchTVMLLFo9QGOqUBU7dRHBvEAZwxeGJM%2Fp5pjMAMBFXQzfg1e3eXRvNkOI3jG6MpkSST9W%2Bd5iEsBQHBLfIeN5Yo3dfd4ouHT86XIHgeb%2BYuNbcfxPSQuLOcj%2BkRT9bRQzG1Tsd%2BclWrl1DufzWO8g2m6YAE6A4IibFMTgfapfhfnz%2FfJ6Sg5tKc6U6RdiPbkXUa%2B5zOz2GzqiMhbumeJyGTkE2vEVGB2kKMSnS4NeGY&X-Amz-Signature=c5a20896462cd2569df2fead946e78341efbc918027b4198be4511a99659b436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
