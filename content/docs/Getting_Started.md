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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSRR7C%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCIjzjH5DUBa1fFjUd2%2FmscF273WjLGfX6TmD1RwKR4OwIhAJwNhxDDRwle2YdPnwAM2ljgfRoARFXACLCC%2F7caSsHMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpozeCrxKzM814kJ0q3AOkFpZmx1X2U4VCy6OGgQIZ1X0ecVJ9HyJbS4%2F6rb4xS%2FWS8fTdHt8ShwQRCSNEXGCS1LE3vVEMYceRUPkJhBcwEAHgX0OF4b2OG5XcGYU8792uHcI12qIAnm0tagahBOg6%2Bd2h6ZGhBSET21KsPKM6QbT%2Bt6zKVZwj5jrCGpqrs%2BBuU%2Fw2MCLqoCxOc0CpXz7dac8LnqS4gdO7JENAU2D0lyzyetppCcniDFqlN4VWglD%2BQOYSZKFKLjiGHOVEpeH78Q2a3Qi%2Bn2uOynI3wr9PrdpoKdXpmouTceeHrlp7j53U%2FSuDgp%2F2%2BitIU8xQeCV9nn8kb3iZfdMZYrq3LHhGzFOzuFXmHUwMHOt4G%2F6QBFINivX4p0keqEl%2Bmmm660rJmegK2AP52usgl1VGXAe7bnIhPAZVybteR8es3tgvetSIhbj2jP8LrNtZGBMI7MX%2Be%2BjJ%2F%2BQGIC2UH8%2FSOiJ0qTThm0mDJ9z8TnR%2BR7e9pB5%2FP8TViD%2B1jRFvIZgfENGUM5p%2BWIQc8v%2Fe7AxuYbdoGFiVSDtdSEDXjgwjF96UcwcjnF4UFH64%2FmXv%2FkZnAbI2f2%2FlMJvmNo4RegqRQ14N%2By4NTyJGIW8EaupcZBITkbEZinqBgePFI3Nm4zCH%2BaHKBjqkAS5LVm5FU9abT4dFWV7J6lQHZ2ghJBNpnulPGSCns7YepmQZr7SYN4v7SlLFGEqhKDo3t3mmjnqgIg%2F3DmPaesulbRvwrNez%2Bj0qQpT6LyyXhRdBwoiI0h5vhUcP%2BhcQW6A5UkfbsBMpWl5A6piEH6YyvjXLbJ%2BTCyFnoe4tW78Ye1YN48oQSu8Wdx7YudBn8jfWvtmGs9QOps5VfEKm30ELEiF3&X-Amz-Signature=7f7abfdbb80f197d40dc79c09278f04d4aaca0bf20000f4993a053135aa23ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSRR7C%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCIjzjH5DUBa1fFjUd2%2FmscF273WjLGfX6TmD1RwKR4OwIhAJwNhxDDRwle2YdPnwAM2ljgfRoARFXACLCC%2F7caSsHMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpozeCrxKzM814kJ0q3AOkFpZmx1X2U4VCy6OGgQIZ1X0ecVJ9HyJbS4%2F6rb4xS%2FWS8fTdHt8ShwQRCSNEXGCS1LE3vVEMYceRUPkJhBcwEAHgX0OF4b2OG5XcGYU8792uHcI12qIAnm0tagahBOg6%2Bd2h6ZGhBSET21KsPKM6QbT%2Bt6zKVZwj5jrCGpqrs%2BBuU%2Fw2MCLqoCxOc0CpXz7dac8LnqS4gdO7JENAU2D0lyzyetppCcniDFqlN4VWglD%2BQOYSZKFKLjiGHOVEpeH78Q2a3Qi%2Bn2uOynI3wr9PrdpoKdXpmouTceeHrlp7j53U%2FSuDgp%2F2%2BitIU8xQeCV9nn8kb3iZfdMZYrq3LHhGzFOzuFXmHUwMHOt4G%2F6QBFINivX4p0keqEl%2Bmmm660rJmegK2AP52usgl1VGXAe7bnIhPAZVybteR8es3tgvetSIhbj2jP8LrNtZGBMI7MX%2Be%2BjJ%2F%2BQGIC2UH8%2FSOiJ0qTThm0mDJ9z8TnR%2BR7e9pB5%2FP8TViD%2B1jRFvIZgfENGUM5p%2BWIQc8v%2Fe7AxuYbdoGFiVSDtdSEDXjgwjF96UcwcjnF4UFH64%2FmXv%2FkZnAbI2f2%2FlMJvmNo4RegqRQ14N%2By4NTyJGIW8EaupcZBITkbEZinqBgePFI3Nm4zCH%2BaHKBjqkAS5LVm5FU9abT4dFWV7J6lQHZ2ghJBNpnulPGSCns7YepmQZr7SYN4v7SlLFGEqhKDo3t3mmjnqgIg%2F3DmPaesulbRvwrNez%2Bj0qQpT6LyyXhRdBwoiI0h5vhUcP%2BhcQW6A5UkfbsBMpWl5A6piEH6YyvjXLbJ%2BTCyFnoe4tW78Ye1YN48oQSu8Wdx7YudBn8jfWvtmGs9QOps5VfEKm30ELEiF3&X-Amz-Signature=aece61dd8afe246b0057a040fd80a42fac78100bf30fa9c02aaa995eddec2075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSRR7C%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCIjzjH5DUBa1fFjUd2%2FmscF273WjLGfX6TmD1RwKR4OwIhAJwNhxDDRwle2YdPnwAM2ljgfRoARFXACLCC%2F7caSsHMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpozeCrxKzM814kJ0q3AOkFpZmx1X2U4VCy6OGgQIZ1X0ecVJ9HyJbS4%2F6rb4xS%2FWS8fTdHt8ShwQRCSNEXGCS1LE3vVEMYceRUPkJhBcwEAHgX0OF4b2OG5XcGYU8792uHcI12qIAnm0tagahBOg6%2Bd2h6ZGhBSET21KsPKM6QbT%2Bt6zKVZwj5jrCGpqrs%2BBuU%2Fw2MCLqoCxOc0CpXz7dac8LnqS4gdO7JENAU2D0lyzyetppCcniDFqlN4VWglD%2BQOYSZKFKLjiGHOVEpeH78Q2a3Qi%2Bn2uOynI3wr9PrdpoKdXpmouTceeHrlp7j53U%2FSuDgp%2F2%2BitIU8xQeCV9nn8kb3iZfdMZYrq3LHhGzFOzuFXmHUwMHOt4G%2F6QBFINivX4p0keqEl%2Bmmm660rJmegK2AP52usgl1VGXAe7bnIhPAZVybteR8es3tgvetSIhbj2jP8LrNtZGBMI7MX%2Be%2BjJ%2F%2BQGIC2UH8%2FSOiJ0qTThm0mDJ9z8TnR%2BR7e9pB5%2FP8TViD%2B1jRFvIZgfENGUM5p%2BWIQc8v%2Fe7AxuYbdoGFiVSDtdSEDXjgwjF96UcwcjnF4UFH64%2FmXv%2FkZnAbI2f2%2FlMJvmNo4RegqRQ14N%2By4NTyJGIW8EaupcZBITkbEZinqBgePFI3Nm4zCH%2BaHKBjqkAS5LVm5FU9abT4dFWV7J6lQHZ2ghJBNpnulPGSCns7YepmQZr7SYN4v7SlLFGEqhKDo3t3mmjnqgIg%2F3DmPaesulbRvwrNez%2Bj0qQpT6LyyXhRdBwoiI0h5vhUcP%2BhcQW6A5UkfbsBMpWl5A6piEH6YyvjXLbJ%2BTCyFnoe4tW78Ye1YN48oQSu8Wdx7YudBn8jfWvtmGs9QOps5VfEKm30ELEiF3&X-Amz-Signature=759030cb908c5b60775b3dd5f437679a0556698f680fecdd4baec318e3d81271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4GASAY%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC2dxlsqeSVwjygx72jJj%2BF9FdmgJ5xY6NAqcVUNI%2BlqwIgZmspuQK3pUuHbM52%2Bai4Z8fN1qQcn8wSdQuuLdjVxssqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIoPL6D%2Fh0Pdj4pSrcA1zgBOZNiMmAfZSmYroG9qq1LiSiFz1j0UTbv48kspY6Zgo7wtLn5ih7srAdBF289YiGQxjI4b%2BBC6zU68cIQAP8mgrs9TkLks57%2F3D38jLNbyeLUOWEgrTC04M%2Ftu1oHxLDXupXFpPWDJS99w7CX9bWIIRfZ%2BNZ5eCPOVvCisUbxSbVHOtcSP%2B5Fds6Fva3lmWz0lrNVi%2Bl400qFqH6VQ3q5ZL3rWyDLuXgmQSRE5LvkHHnoL%2FxWQLQ3gtWZR9JMJGKmcRY2%2FF3cmJ9%2FTWhThOAjaq8tAOw28Ieroc33kMyRBAWOFCm4ZYzAeG%2B9ydisJPEFxvykXMbYdm0cVU2N0PVnzQIw%2FpuMuKAaOTE2aT4ibs06cICsYevwgfibZ4uCNtz7t%2BB7x4iHyNrhC9lWLNDVeWsZ8JSakjVP%2BwT55z8noFn9ZKFjl76Z3QHtWpFyP2dmJ4a1qsncogiyb5hOZ7bp2ApPustlyUrOz3orUgWQvBFzc45Rx8yrNBLXgXoES%2BxTJdZSays91OHZJ38CsteVP1eTpSMYFlDh9pcRuv%2FINV9FzqywcMx49cHE29SeSQnYut%2FCv8V%2FEd8qo%2F1Ls97puk8l0Eh%2FEU5apxtVXxBIlicwaIM6eD2pvGvMPX5ocoGOqUBVppJ44tmaELvEsK1geZKcWuva%2FOvBsct7r09UnaonRaPotxHdzgX4dpj7Okf%2FPDCsYRUjRZsgFo2DKMGCxRSs47U2dqeJaEC84pzmgRlX5J8xWRVfSN%2BC5NOff0q13nhF3j4SYNS%2FbTL7UcYS2CAxC200UC819SCFV6joT5AdkhujuxCBbxFTq8d36jgFp2%2B4k8E7Il%2B4srtY9Qyh8VGUOfy4Mgf&X-Amz-Signature=cebdc1cda7b06567b18972df3e1a7f8d6c85c73802898d6be5a77910dd1798ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SOZSYHO%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDAQhtjOUJUZSsOpUiNCuIe9hZJgXwtjfeu%2FrcqQ5SxqwIhAI86cVz29D%2BvC0CbwU1JzqxF4p%2BpNwQxkQnE0KRtfM21KogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJQAdluv1vtRLkt3oq3AN5dreO5Qwl9pOklIt9oLzbW0%2BhBt%2FasQWLekubv3O1bNdrnuPPJm7NgysuFYXqZWrQM4U0oh7z2wt9He9%2F%2FcDjeB5K5rrwNUHTw9QJBKGvlQwT%2FoOfMNS2JyyHn6aeF1%2FHBplGnwKRGb3oN0SMq9uAzj7MSbbaw5RaxuCaTugXn1lrrI1wLT2eLmg%2FScrTYE0IyBkc65v%2FJv2Fg%2Bz3VKM8sDGiQLJK0EZ3QA57bZnhM2EQrUxVYvE5Nj4OLhjWzojCJzRo8qZVa1CDROx68LbHPvN4JLzzHZbFPfTevmb2SE9Vgv7%2FztIraIdSC4LzQzh9z3yAI2YkUiBWxQBGudciy0iN4Zo1K0QqHFFCd9ftK714q98RMYnyxbGT8FEoWYTWrjxVaeVReaXzKDEqmxPPKOFRJjkTvE3JeqTq2vCM8ZaPhiSCTbIc2Fe0r9roL4zOr6vlWVSi5hlofCoSDVnqzabMOBwlKerOMQATCprXbHMGMaZYZqXJy8V6RvWecHaKatB5pVcp6sKaAkZN%2FcVCDPEllKhMHh6zza5kZh0KIaeAlSEuHhG4d9TnsIzin1L%2BbhADu4AuCVcY6e%2FzRGj4u8%2FDQh6fDKXj4WSOIprj8%2Fh961svgbNwwKO8QDCF%2BaHKBjqkAb1VBGD2HZw1wrpLAlEUdfELGr3NNOpvS4MtFZNmyxQvL84PQR1Z9bioBsqRsOnshbPOp%2Bs1GMxDWcTekT8unM3Ysenb%2B6ZidOz6OisPP4fTgYsHvy3tSY1geeCpokCot3T7P0ppxSRFWMRINpJnxo59EknHBv5A58xmnUEivAw06ngqW%2Bt3vFQxLhEz60yMFchoIlAzmvprS3dVxRr0nsp3ETnM&X-Amz-Signature=d78467e0f92ccbcbea2a3ed2e9b0f98e3e7135b6db8859e4ee079237e85a5b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NSRR7C%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCIjzjH5DUBa1fFjUd2%2FmscF273WjLGfX6TmD1RwKR4OwIhAJwNhxDDRwle2YdPnwAM2ljgfRoARFXACLCC%2F7caSsHMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpozeCrxKzM814kJ0q3AOkFpZmx1X2U4VCy6OGgQIZ1X0ecVJ9HyJbS4%2F6rb4xS%2FWS8fTdHt8ShwQRCSNEXGCS1LE3vVEMYceRUPkJhBcwEAHgX0OF4b2OG5XcGYU8792uHcI12qIAnm0tagahBOg6%2Bd2h6ZGhBSET21KsPKM6QbT%2Bt6zKVZwj5jrCGpqrs%2BBuU%2Fw2MCLqoCxOc0CpXz7dac8LnqS4gdO7JENAU2D0lyzyetppCcniDFqlN4VWglD%2BQOYSZKFKLjiGHOVEpeH78Q2a3Qi%2Bn2uOynI3wr9PrdpoKdXpmouTceeHrlp7j53U%2FSuDgp%2F2%2BitIU8xQeCV9nn8kb3iZfdMZYrq3LHhGzFOzuFXmHUwMHOt4G%2F6QBFINivX4p0keqEl%2Bmmm660rJmegK2AP52usgl1VGXAe7bnIhPAZVybteR8es3tgvetSIhbj2jP8LrNtZGBMI7MX%2Be%2BjJ%2F%2BQGIC2UH8%2FSOiJ0qTThm0mDJ9z8TnR%2BR7e9pB5%2FP8TViD%2B1jRFvIZgfENGUM5p%2BWIQc8v%2Fe7AxuYbdoGFiVSDtdSEDXjgwjF96UcwcjnF4UFH64%2FmXv%2FkZnAbI2f2%2FlMJvmNo4RegqRQ14N%2By4NTyJGIW8EaupcZBITkbEZinqBgePFI3Nm4zCH%2BaHKBjqkAS5LVm5FU9abT4dFWV7J6lQHZ2ghJBNpnulPGSCns7YepmQZr7SYN4v7SlLFGEqhKDo3t3mmjnqgIg%2F3DmPaesulbRvwrNez%2Bj0qQpT6LyyXhRdBwoiI0h5vhUcP%2BhcQW6A5UkfbsBMpWl5A6piEH6YyvjXLbJ%2BTCyFnoe4tW78Ye1YN48oQSu8Wdx7YudBn8jfWvtmGs9QOps5VfEKm30ELEiF3&X-Amz-Signature=b2e59eea771a8e274f11488a26d3a70f880151ccc2522695c75cdac8d8177d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
