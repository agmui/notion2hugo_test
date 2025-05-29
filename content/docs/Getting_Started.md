---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHIHXHJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9igQPkjIP%2FD30g%2Bq1VdeKtI2saOywFPteK8lMldYUtwIgYbh2P%2FhcVeTCgdAxytDaK5kVXvxkeWpimoo9eCG3GJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B6KznjpMJmvUcNGCrcA%2FRgJqzXzwgBI9I04TkJBAeVD8PVqsbhu%2BTKYpstrHshSqrDHWWksL4I1Y%2BSI9%2BODjT1%2FEX5iHpqrPBh7P3UiDvrXPpwBV%2BMSiiC2a%2FkgzYhH2Sd9RdoAkvXfLlMAMJxuW1t4FXYfPshkfk65t7bM36wNEkq47nKGt5BLGncamXgLaq0yfiX2c8O4boEWXVtptabHY3Uo5wx29AqMb4LKp3fAhr4J7N1qWGsaHwsY4E8QT3EmYgH1W2%2FlKAOp%2FSHuppxByeIVZgnd7I0CGSKe2tSnc9XJUBTa3BJsODRStcc%2F9upialeBiy2BmvVVORtfNen95YzPPvlkuXjJOurrmRKvqOMY9VNAnCOFO18gf1jV9v8WGacPPojsAdpdt6QMwcxslpJB4uvZzolo9M2dux23n1tveyebnQlJrqSDj8T%2B1H2oPW5h9oLaL3wvQFLC7ZPh27bQVJjkFhdDOq2ocfe93lNGrm6iQsgNi4zc%2FU%2Fjlx434246Bn%2BiMfFnXD2gWYQ9V9vQU9iSEps554pJ2WxDG0%2BW93tOx5QZJehqIA%2FS3fAz50p3ORt6fa9Hi3z5%2FL%2Brjmy%2BKHbUxE88I1bDwGGvlc9m6Vs0EKsFPqbcQPuFl2LVyzyKzR1s4iNMOri4sEGOqUBz2pYkNCi67H6CTr58nNQzqJwm%2BI3TTMMivvzyHPcnMGSAYrPQd1%2Bt7oa8U7SR2skeECtcYRWnpQDMCExg6vKISLa%2BCpydxNuJ8mbPQ%2F0Kq5of%2FEzKPvfeMceiEWwa2XC4UxBVTQSFL86H6shbPBz3jaOX1kqefw8p3CgtbIaIs9jXqH%2F0Keqhe%2Fy0ID8SwZo%2BuLQfIWQKn2NaUFRBihzNSGNL%2BlD&X-Amz-Signature=63837ef478d991d75d685d3f865686ede1c812d3924b5f5ea029ee5dcededc20&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHIHXHJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9igQPkjIP%2FD30g%2Bq1VdeKtI2saOywFPteK8lMldYUtwIgYbh2P%2FhcVeTCgdAxytDaK5kVXvxkeWpimoo9eCG3GJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B6KznjpMJmvUcNGCrcA%2FRgJqzXzwgBI9I04TkJBAeVD8PVqsbhu%2BTKYpstrHshSqrDHWWksL4I1Y%2BSI9%2BODjT1%2FEX5iHpqrPBh7P3UiDvrXPpwBV%2BMSiiC2a%2FkgzYhH2Sd9RdoAkvXfLlMAMJxuW1t4FXYfPshkfk65t7bM36wNEkq47nKGt5BLGncamXgLaq0yfiX2c8O4boEWXVtptabHY3Uo5wx29AqMb4LKp3fAhr4J7N1qWGsaHwsY4E8QT3EmYgH1W2%2FlKAOp%2FSHuppxByeIVZgnd7I0CGSKe2tSnc9XJUBTa3BJsODRStcc%2F9upialeBiy2BmvVVORtfNen95YzPPvlkuXjJOurrmRKvqOMY9VNAnCOFO18gf1jV9v8WGacPPojsAdpdt6QMwcxslpJB4uvZzolo9M2dux23n1tveyebnQlJrqSDj8T%2B1H2oPW5h9oLaL3wvQFLC7ZPh27bQVJjkFhdDOq2ocfe93lNGrm6iQsgNi4zc%2FU%2Fjlx434246Bn%2BiMfFnXD2gWYQ9V9vQU9iSEps554pJ2WxDG0%2BW93tOx5QZJehqIA%2FS3fAz50p3ORt6fa9Hi3z5%2FL%2Brjmy%2BKHbUxE88I1bDwGGvlc9m6Vs0EKsFPqbcQPuFl2LVyzyKzR1s4iNMOri4sEGOqUBz2pYkNCi67H6CTr58nNQzqJwm%2BI3TTMMivvzyHPcnMGSAYrPQd1%2Bt7oa8U7SR2skeECtcYRWnpQDMCExg6vKISLa%2BCpydxNuJ8mbPQ%2F0Kq5of%2FEzKPvfeMceiEWwa2XC4UxBVTQSFL86H6shbPBz3jaOX1kqefw8p3CgtbIaIs9jXqH%2F0Keqhe%2Fy0ID8SwZo%2BuLQfIWQKn2NaUFRBihzNSGNL%2BlD&X-Amz-Signature=42bd9dc30625a7f572cdf30f8c5d1fadc1c903c048e9aa3ab0699abc12391ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHIHXHJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9igQPkjIP%2FD30g%2Bq1VdeKtI2saOywFPteK8lMldYUtwIgYbh2P%2FhcVeTCgdAxytDaK5kVXvxkeWpimoo9eCG3GJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B6KznjpMJmvUcNGCrcA%2FRgJqzXzwgBI9I04TkJBAeVD8PVqsbhu%2BTKYpstrHshSqrDHWWksL4I1Y%2BSI9%2BODjT1%2FEX5iHpqrPBh7P3UiDvrXPpwBV%2BMSiiC2a%2FkgzYhH2Sd9RdoAkvXfLlMAMJxuW1t4FXYfPshkfk65t7bM36wNEkq47nKGt5BLGncamXgLaq0yfiX2c8O4boEWXVtptabHY3Uo5wx29AqMb4LKp3fAhr4J7N1qWGsaHwsY4E8QT3EmYgH1W2%2FlKAOp%2FSHuppxByeIVZgnd7I0CGSKe2tSnc9XJUBTa3BJsODRStcc%2F9upialeBiy2BmvVVORtfNen95YzPPvlkuXjJOurrmRKvqOMY9VNAnCOFO18gf1jV9v8WGacPPojsAdpdt6QMwcxslpJB4uvZzolo9M2dux23n1tveyebnQlJrqSDj8T%2B1H2oPW5h9oLaL3wvQFLC7ZPh27bQVJjkFhdDOq2ocfe93lNGrm6iQsgNi4zc%2FU%2Fjlx434246Bn%2BiMfFnXD2gWYQ9V9vQU9iSEps554pJ2WxDG0%2BW93tOx5QZJehqIA%2FS3fAz50p3ORt6fa9Hi3z5%2FL%2Brjmy%2BKHbUxE88I1bDwGGvlc9m6Vs0EKsFPqbcQPuFl2LVyzyKzR1s4iNMOri4sEGOqUBz2pYkNCi67H6CTr58nNQzqJwm%2BI3TTMMivvzyHPcnMGSAYrPQd1%2Bt7oa8U7SR2skeECtcYRWnpQDMCExg6vKISLa%2BCpydxNuJ8mbPQ%2F0Kq5of%2FEzKPvfeMceiEWwa2XC4UxBVTQSFL86H6shbPBz3jaOX1kqefw8p3CgtbIaIs9jXqH%2F0Keqhe%2Fy0ID8SwZo%2BuLQfIWQKn2NaUFRBihzNSGNL%2BlD&X-Amz-Signature=2d807ac838b0c0418075d52e842fab3bbf085b1d2687c2ef3819853b2152d92e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGKFN6L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BFe9fB7UTR1d9VSlysZKeSAUhk8PEup%2B0Dp%2BhzeUp8AiA2QP6KHLBvIpDVt8Ivik8VbqHfQ20eLYNpH2M84X74jCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyaXS4Md9PVL4PeRZKtwD1U2HRDMUoGVPZxPzVplg99s367x2vnun%2BXdjgGy5mHVceukBICy4MgHjcSTd9sDAlJ4lm9Io8hELMYHQEnio5vxu9H%2BlCg34p%2FV5wI5M%2BLtlrJFChP%2BEdrxDcKSgz0y8yvOY5K7KMHaZ%2FR%2FPj2vfI1eZXt%2Fu0PeO4rh%2FvZCXDM0YyUeZRpvhgNyYRfrM%2FUJRuYkmPhVHcyJSU%2Fo0Fs1wvLLeRxEJccyRfJu5NagqSWaX9qERhb2L5%2B6tjNiNf37RssqTO2aiObnA%2FuTM%2BMmQVH3AjKmpGXfycoBlXzhBFVMU3%2FeboFlbcKx7BK9pu%2BzHjmtuHpGfktZHJ9129HgxKiVocriRWx0LY%2F9smMUToW6fNwozd68sQoZD0dI6fNuQt%2BC6sxFNn31tMG4a114Un1H4XJ7KNXY3G5tqay57VwF4Jrb8rL5wBVJ2D8ZhCYTiPSDWwBIan%2Fj%2FS87YJ1pgcBMNtdBT62VITkXaO1zcH%2FQ%2BQYGynI5UjkFIHLmJS9KFcyViEpV08j1EcFVBB3CTxet5udL9rmKD5tvxKviYDdk9mEUXzNI1se3NSqznNUGdNfS5b0vAZOUtMp7CdyfxTNT0GKFbqDbJhiUSPf0XepIfYVF8YynRAaCNy1cwiePiwQY6pgEbr8I%2Bo5aIddgDf05wUkZzUm7EOYL4eoYikdKrVyDieUWUTsWQIrlZijmMEXcdRf4N%2FS4FFMyVV1jPEy9LT72XsEzdQtbclylXp2HFLKj5lFH%2FGkEjqBTzBlLV58AncdzFLaD00N5ZM%2BuamHjmZr0X237z2Xo0s%2FbBSVvg2Zhv0P19bntjaV7d66gqpQRqPsmI%2B%2BsacOqsLzZyxm5kalvnOsoMLgyy&X-Amz-Signature=c6c3de189a8490cc50f4f79ddd24c47771e5001790aa41d568e0f70e01584b07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z74EUQQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyB4Oa8u%2BiNgKfRoCl%2FBeTDrFtAJxxBOhubaaF%2BG1%2FRQIga4ykwxcfoqX8wvT5GgovN5PseyEmyxiWdgg89dpJZlkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJW0GcIfQPGhZ3R6nCrcA3EUxl%2FGR%2BtiUZE38d4469Ft4InC7BST4pykN4arzRh20Gmn67kgIodTPD%2BnSHyFwHIxOrp8zeAy%2Fn5MAPG%2B2Z4YkhAR4JqyyBUQDd1OdUQj%2FyUONw2XuFwmeVtv2WE8dKsILtX2RvHV70NiyrxYKBqEyGNwK8uc1aWlhOVIrT7%2Ftf9uk8G3Pss1ch6jNveQQKmFxE8aaGed10FvwcsPnW9O%2FzHbgCe4C0NDSEaRy1z3V%2FRmBxP1sCVtqaHepY6Sl9JNuLBPEb3BQcfgkEX0UXJs4%2FY3ze%2FfkUdfkc32%2BN6YwXAat%2BoOhfpYb7o0mGYve8fQ2vg0yt8W%2FhZzIDnU7he8T1mCBnVIugO1aitQeTMmsJ0EnQOS8rix%2FUf8Hg91KcQxUv9Q1NR9prvt5d7iHsRpPl2jxQQuXxP%2Bu2Y42VOv9CiDFN2Eo2FC2%2FHZBS0qbTsIFDSf2ua8bC%2FUXXRnyQ18BimJKUumZ6lbUhQRfYlBZGxFcGe7D9cSvxjnim7Fe40Po43SieYM2V9RTSsy0M4iViBPPzpTHPMGDGNBqV1C2pY5kKviERNB%2BfMPCLI0yTx9HR2rlRayOxKRcYgY4709fVraE5ASopDrzNLPdp1SynQa3oHeteuIaw1LMO7i4sEGOqUB5Nl8MQQSQsJw4m8fXRP4IDHj8dHVmd7W2ZKaSIknrQ%2FPFR%2FjICnmvDIX1iVNM7gGBMM5Ik%2FUtP4sCHVGyB8rCU0DYJ8xSsCLwvQ9xyhJUjLhzQ4651W0V%2BuXr8ThcttX%2FimOo9iZs1gYgEAfre1JXaWakTJMmsT8W%2F8yCo7G8%2FeCZwC7kreYRRyXDOcl1GPHXDQ21tRG4FDsI%2BsK3Y2rG8sqhR01&X-Amz-Signature=bfd63180b20daa9d515b9b6f84cc1e6b532b3b1c7e5c7ad597c0d4f03ad01941&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHIHXHJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9igQPkjIP%2FD30g%2Bq1VdeKtI2saOywFPteK8lMldYUtwIgYbh2P%2FhcVeTCgdAxytDaK5kVXvxkeWpimoo9eCG3GJcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B6KznjpMJmvUcNGCrcA%2FRgJqzXzwgBI9I04TkJBAeVD8PVqsbhu%2BTKYpstrHshSqrDHWWksL4I1Y%2BSI9%2BODjT1%2FEX5iHpqrPBh7P3UiDvrXPpwBV%2BMSiiC2a%2FkgzYhH2Sd9RdoAkvXfLlMAMJxuW1t4FXYfPshkfk65t7bM36wNEkq47nKGt5BLGncamXgLaq0yfiX2c8O4boEWXVtptabHY3Uo5wx29AqMb4LKp3fAhr4J7N1qWGsaHwsY4E8QT3EmYgH1W2%2FlKAOp%2FSHuppxByeIVZgnd7I0CGSKe2tSnc9XJUBTa3BJsODRStcc%2F9upialeBiy2BmvVVORtfNen95YzPPvlkuXjJOurrmRKvqOMY9VNAnCOFO18gf1jV9v8WGacPPojsAdpdt6QMwcxslpJB4uvZzolo9M2dux23n1tveyebnQlJrqSDj8T%2B1H2oPW5h9oLaL3wvQFLC7ZPh27bQVJjkFhdDOq2ocfe93lNGrm6iQsgNi4zc%2FU%2Fjlx434246Bn%2BiMfFnXD2gWYQ9V9vQU9iSEps554pJ2WxDG0%2BW93tOx5QZJehqIA%2FS3fAz50p3ORt6fa9Hi3z5%2FL%2Brjmy%2BKHbUxE88I1bDwGGvlc9m6Vs0EKsFPqbcQPuFl2LVyzyKzR1s4iNMOri4sEGOqUBz2pYkNCi67H6CTr58nNQzqJwm%2BI3TTMMivvzyHPcnMGSAYrPQd1%2Bt7oa8U7SR2skeECtcYRWnpQDMCExg6vKISLa%2BCpydxNuJ8mbPQ%2F0Kq5of%2FEzKPvfeMceiEWwa2XC4UxBVTQSFL86H6shbPBz3jaOX1kqefw8p3CgtbIaIs9jXqH%2F0Keqhe%2Fy0ID8SwZo%2BuLQfIWQKn2NaUFRBihzNSGNL%2BlD&X-Amz-Signature=25da0f92f78dea0ff0569c12a8b9956a72efc3c2cec748029bfa96b241ed0d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
