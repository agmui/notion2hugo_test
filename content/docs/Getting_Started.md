---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBVDBW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHqB6vkA3DsAhNOx3zGhyQouVpiLko7RiUjQn%2FzcpZ%2F1AiAQ7p5E4qmGPNtOSCsnL1QJ%2BGHiApGOrC5m5SIZWwnhJiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RWfKgjSA99TQdegKtwDa5R%2Fykjn5edKrW1EpCK82bur5OXikZjngqhteDCM90vAgc%2BHaRuTjOM8wWUuiNuV%2FdWEpktTH9CtU1xhxSPCboCLXTWWEKOkx7xG6xKpcAW%2F2%2FVoWAxD%2BuvODrG8CLyCejrgGoBkto5uqnWYFD7ZOBgvmGSmMkiAeukpBqwAwdZA%2FSmzE5QThYPP%2F9mJQd%2BuU2StQ767yvp4moNAAJZyHZrAUwNn9Lr2%2B0ZpvuM4wr6sspIqFa9Uc3e2XU0G%2FGXB0pcrj5lgkYhvWS37QMQjlAPeed1Dl7frSjbsu%2BhYi4L1WoF94K9vePzqYQtFF4SFmDvOAqq8H0kq5Wt9KYbMj0k39JXDLr%2BbkVLICYfydp08j5fgtANBqMnRwkz2aZoPETVdnHscEeFrci6StsLK7MG0e0gzKE6U15eRwEpvm9RM1ywJqYaMp43nXKVcb6WxEO%2BY24YmpF2JMtXx%2BH%2FQ3is%2FAtuG4OYxgZNMZPydmbGJPhZdUxmLZceJhi7aLDzYpH9V%2BsigkWiVTY2tEvqAIbMHRh8WNMi%2BE6pd%2FMMfXEj0gVOsTcc9zME0t73QdG0GsApHV5aIqN9VxYfqcUtOInktoB9ekbViMfGRtNuRw7mQoWsSPUPpDUS1jAIwsMeNvgY6pgEin%2FzJayBmmC7s0qldu%2BXDx%2FFr699NYN5tm5qPZDsxU%2F6lyCvgbragMjaWwXelOT4WjHd%2B4dzxIepikEXgNQ5hpOkp0CDmirv3QILwFB6JatWI4LjYiW%2BMWmj3rFIDTuy8t43fpzHosLs49H7WjG9Y5g2aQgnhC4E9zHNx6%2FWDnfzVgpPs%2F7UGrPb7x4CNA4MNmM9Co1hD%2FRQi00C4iFzIMdG%2FboBg&X-Amz-Signature=a8f93b5eb1bf2af7430526856766b7780966b26318b4ab7c731a67162abd582a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBVDBW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHqB6vkA3DsAhNOx3zGhyQouVpiLko7RiUjQn%2FzcpZ%2F1AiAQ7p5E4qmGPNtOSCsnL1QJ%2BGHiApGOrC5m5SIZWwnhJiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RWfKgjSA99TQdegKtwDa5R%2Fykjn5edKrW1EpCK82bur5OXikZjngqhteDCM90vAgc%2BHaRuTjOM8wWUuiNuV%2FdWEpktTH9CtU1xhxSPCboCLXTWWEKOkx7xG6xKpcAW%2F2%2FVoWAxD%2BuvODrG8CLyCejrgGoBkto5uqnWYFD7ZOBgvmGSmMkiAeukpBqwAwdZA%2FSmzE5QThYPP%2F9mJQd%2BuU2StQ767yvp4moNAAJZyHZrAUwNn9Lr2%2B0ZpvuM4wr6sspIqFa9Uc3e2XU0G%2FGXB0pcrj5lgkYhvWS37QMQjlAPeed1Dl7frSjbsu%2BhYi4L1WoF94K9vePzqYQtFF4SFmDvOAqq8H0kq5Wt9KYbMj0k39JXDLr%2BbkVLICYfydp08j5fgtANBqMnRwkz2aZoPETVdnHscEeFrci6StsLK7MG0e0gzKE6U15eRwEpvm9RM1ywJqYaMp43nXKVcb6WxEO%2BY24YmpF2JMtXx%2BH%2FQ3is%2FAtuG4OYxgZNMZPydmbGJPhZdUxmLZceJhi7aLDzYpH9V%2BsigkWiVTY2tEvqAIbMHRh8WNMi%2BE6pd%2FMMfXEj0gVOsTcc9zME0t73QdG0GsApHV5aIqN9VxYfqcUtOInktoB9ekbViMfGRtNuRw7mQoWsSPUPpDUS1jAIwsMeNvgY6pgEin%2FzJayBmmC7s0qldu%2BXDx%2FFr699NYN5tm5qPZDsxU%2F6lyCvgbragMjaWwXelOT4WjHd%2B4dzxIepikEXgNQ5hpOkp0CDmirv3QILwFB6JatWI4LjYiW%2BMWmj3rFIDTuy8t43fpzHosLs49H7WjG9Y5g2aQgnhC4E9zHNx6%2FWDnfzVgpPs%2F7UGrPb7x4CNA4MNmM9Co1hD%2FRQi00C4iFzIMdG%2FboBg&X-Amz-Signature=09314fbd0219274173cb2984a764abebd35214b38e9df6018e02806e4f9bf0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPSBDFU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCyiB2ClURDnoF2S7%2FWfYbNTf6%2FS3FKq%2BojtlC%2BLHo5fAIgLjbvcpKWT85lFOWdcQM7bhIntgpr%2BFRxCES28pyRcn0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG9Fyu25JW86T%2FuVSrcA6fWzM1balhb5jfN2dFSXIGwwGCCB7lpsbMqQlbPAFad%2B%2BM%2F5kLVhupobV57yIkV377gwAa3F%2BpjX%2BgapccuWHZqyRyk53hIBzZEdTo%2Fme5vfCOuiZxr7tlm3GYJKU3rXmuv3EEJaPshvRwQL0vcTjKr6EEeky8YpdqKTaHUZjKHoPnxS4ahuYlgOdFdIjV5l1nLIcU8F1mhseXXmXn0IbwY5ThGt%2BYGfF%2Bcejt2eo9gtlhzjx0727lV6ROwp4HAn7T6fVy5CNBRro6G4TVmZlJFwWA7pWS4iq%2FtJfX%2BGCxmQtEFZX7LCLSBtC4F9MrIeGmRIJXA%2BolMiCW2%2BjX23EnqXI5wtbgCoAOaad%2Bx92Dhvm%2Fhnak2UhLCwDrCbpojnwcFsJ0y%2FewG5YEbAXR%2FfQHChIpnaQ2RjiLQ%2BcOYb9AZXozH8rYA%2B2bsofQaiQIOcSNvDUG%2Fyvx23OLc8%2F%2FMpOg4Z3Gl98wTLaZ1YnDSMf6wLF%2BN%2FQ33p%2Fo1DzokJvds7LFTaI8olq23oxR6lwXdFww2veKg5%2BPE%2FBNxwgcjhQhYDNqPOepVvSEUZnljq4QYGnyRpUOeznAc0%2BX2GUsPqvarIfbhHH2XKDx3SXth%2BbXE8vqej%2B19Rtj6BAMvMPfGjb4GOqUB1nciHOPXBNnO35HPu%2BlEEbvQG0imr9zqg3f%2BTOfGuMFgN8rpEnoAKfueGWh%2FvOw45eji4VihcwaiJl5%2FPKxai%2BMXELNjMNNuM47WYYVcaYCI8bo75p3TPE3FUirSd53%2FrUveD0upN0Yuc35%2BkZMGo1rkmvuE8B94JCWJ4i7LmN3tk63dR8VxhL3Lj3yLu7JMGLCDJOI8%2Bq8%2FMVLjwCBn5ST2VeT9&X-Amz-Signature=943649186c6444e5c410fc4be99fea46abf36c7944c2d4b20865f5cf26c3ad8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZAAWWB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH4BttHOzqEo05MpJonVTTQ1bZfdXWTqqtUGc4Lm70aYAiEAlso9%2B%2F95wVUfn1KiR%2BPGz3QE2a4%2BGlg8fUxSSvhvrtYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTQJuBJIZM%2BG8MkpSrcA0hx8QALjIyHa5USC8OlHaKHv1ESEkv%2B54puACzMOgJtZFELv1%2Fh8xe%2Ftmy%2BpEjkXCgBgmrpqjUfGy0BI8iw%2F%2F%2FvKUSpFlCjcGRzLgnoL5kpk1l8hfrepOIet0t72GFPcg1Tu1l8TStETghkImqutteM%2FxQ9TJpxHFiYC%2F7uBStmhKVFsL25VZl9HXs3ufaXCaE4CVzeufF683hnhufb6yrCwEDiJ2NMK5WWq3rHmdV%2FczKwfUrMA%2FO9whol47jfo3gKg858n3TBOpCP%2B3X9WOfervFhX3OEZqSV8FidU%2FcAHcNyzyLl7DmmKP4mEB6uFYPiEEC4TLIUGXQl0BrOvLVBA86cIIR7ptKk6EBIYLdtvHFRjAB7C7PKpi6ZtImKutD1RDRavW%2BELasl4e8Dm7RpGPyx6%2FAO7zeg3XPPOie%2Bk1vHBd%2BcYOehLQe8MKk3zGr1bCQZvwfwSqmsu36Ef%2BUCFz3Fqx%2BlFmjFovnnpaNlj3K3yRoPvGNFqq9lnPd2eWkjmvHE%2FgsxHOdrS2jOfhAQRnJU0eQuwj05nS5eZI%2FsZso8TlRrjWuIVspv8TikzUiy0%2FIrVuFCdwYWUNcBBdz4Q9xRSfUjKvGVarfuji7b7TxNfnVHRF7cXvJGMMHHjb4GOqUB7oGCBI6cadZbZiCEAXrGWNldYuKt6%2BptgdDJzliqg6amSoS2e0cOW2TE4sdoIKXQbnXaotqFXl8I5FzhFZHAgmirNYoJw%2BZKTmPFcwH%2BvC5qynRiC5JvkrQiosCfAA67xN2UNPQDx0p9EaJtgahQ8Vx6mAYSuOiIvhetZ%2FDuVr%2Bsx6%2FhWrcR1dkfkn5OTb3nikRd9xp%2FTdjI8gJ78hL6ILqtAuBB&X-Amz-Signature=546cbd238d29e853fd43353da764ac1d6b5a962ea7f99f64ef7bf0f567776950&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBVDBW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHqB6vkA3DsAhNOx3zGhyQouVpiLko7RiUjQn%2FzcpZ%2F1AiAQ7p5E4qmGPNtOSCsnL1QJ%2BGHiApGOrC5m5SIZWwnhJiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9RWfKgjSA99TQdegKtwDa5R%2Fykjn5edKrW1EpCK82bur5OXikZjngqhteDCM90vAgc%2BHaRuTjOM8wWUuiNuV%2FdWEpktTH9CtU1xhxSPCboCLXTWWEKOkx7xG6xKpcAW%2F2%2FVoWAxD%2BuvODrG8CLyCejrgGoBkto5uqnWYFD7ZOBgvmGSmMkiAeukpBqwAwdZA%2FSmzE5QThYPP%2F9mJQd%2BuU2StQ767yvp4moNAAJZyHZrAUwNn9Lr2%2B0ZpvuM4wr6sspIqFa9Uc3e2XU0G%2FGXB0pcrj5lgkYhvWS37QMQjlAPeed1Dl7frSjbsu%2BhYi4L1WoF94K9vePzqYQtFF4SFmDvOAqq8H0kq5Wt9KYbMj0k39JXDLr%2BbkVLICYfydp08j5fgtANBqMnRwkz2aZoPETVdnHscEeFrci6StsLK7MG0e0gzKE6U15eRwEpvm9RM1ywJqYaMp43nXKVcb6WxEO%2BY24YmpF2JMtXx%2BH%2FQ3is%2FAtuG4OYxgZNMZPydmbGJPhZdUxmLZceJhi7aLDzYpH9V%2BsigkWiVTY2tEvqAIbMHRh8WNMi%2BE6pd%2FMMfXEj0gVOsTcc9zME0t73QdG0GsApHV5aIqN9VxYfqcUtOInktoB9ekbViMfGRtNuRw7mQoWsSPUPpDUS1jAIwsMeNvgY6pgEin%2FzJayBmmC7s0qldu%2BXDx%2FFr699NYN5tm5qPZDsxU%2F6lyCvgbragMjaWwXelOT4WjHd%2B4dzxIepikEXgNQ5hpOkp0CDmirv3QILwFB6JatWI4LjYiW%2BMWmj3rFIDTuy8t43fpzHosLs49H7WjG9Y5g2aQgnhC4E9zHNx6%2FWDnfzVgpPs%2F7UGrPb7x4CNA4MNmM9Co1hD%2FRQi00C4iFzIMdG%2FboBg&X-Amz-Signature=881fa2ed2240774a379ae1d0c46eb4694ce204cda1521b920e722c82a528c9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
