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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBTKM46%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8uqqm6gSnFCp8j%2FY3I5RA7rARwDg%2FxJlShZjhLyINyQIhALtjfqI%2BiFHsq19VXm2k8GVehOVYIUrixcszkUQ%2B2bp6Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyyTh3hKYX4aWTsUmQq3AM8VEWmR2ZXhhhtxlJETA478tNApIP9YZQSvJcEXF%2BCzssVEyMuNBhmlFsEmEYTt2bmK4845QFjtjU08591eSoc6SPqvn2I%2BU3b5orByCWu%2FYq%2BwbP9bWhfi%2BmTYk96rwu%2FlQiLb%2BAYb9rZtAsiKgNKNYzLaRd7jEWWxmj2t%2FeBo0RT4AG6kTWnptsrx08hjmWxO3NiO9epxKCXMqipKDvjBAzMgtwRjfIliOMTFBeS7B5UZq4KCFHY1qMw7VGY6KNfkKsZQSz3DY92JfsHYN05s2AmoP1K5FgY6MDx4g%2FGC%2FI0dRue%2BRBVjxBUNlJwXM%2F7Ekdi2VKkCqjZXIxGv9OMCVN4qxuTUamZysF1pqVBDmQNnZYk5Bu6CEaeEwLEcMMHaarYteMcor4zqMjQv%2FjwLK3I2RSKkxkEgCuMnscMjdM1vmQDb2vd7VUx0FhbMe63qBgrbSJDdmeCPA5Peps8WA768bH0y%2BR7ROtGt8qDRWKlloodFbO0z85w2SHGcgLEf31v8Fj44%2FZwupNqLnpzmcq1tl8RMh%2FYsl2wvLvMT4yXXavk7G6jFXcUeKUUywSgv9TKAQDgDmaEjZvLesRdetag20tcET%2FDVE9cAkWi2cdDD8V%2F2XE5SYiTzTCi9trBBjqkAaLWERYZfSWpg3LTTU%2BvHh0FfGEKTYLkQT%2Br%2F6p8T02bynNJYGiOYLBINNTNK5cuPhFgKQcBIaV2AxuV1j7e1PNmqRmceZgusea0uXo7Klz10aOnnBSe7iaNPqoV9XkcwlM0urgHQDCHVtaAbJ%2Fkx%2FQdC3S%2FTie34ZU4faHJbHSql2YhvhbcrO1GNufAOJKcmAYmwTQqdhmBny%2F7YrVUbzaUejrL&X-Amz-Signature=9be6795594e770e57f697d08f075e7288247930c0ecd3524e153fc55935a6390&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBTKM46%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8uqqm6gSnFCp8j%2FY3I5RA7rARwDg%2FxJlShZjhLyINyQIhALtjfqI%2BiFHsq19VXm2k8GVehOVYIUrixcszkUQ%2B2bp6Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyyTh3hKYX4aWTsUmQq3AM8VEWmR2ZXhhhtxlJETA478tNApIP9YZQSvJcEXF%2BCzssVEyMuNBhmlFsEmEYTt2bmK4845QFjtjU08591eSoc6SPqvn2I%2BU3b5orByCWu%2FYq%2BwbP9bWhfi%2BmTYk96rwu%2FlQiLb%2BAYb9rZtAsiKgNKNYzLaRd7jEWWxmj2t%2FeBo0RT4AG6kTWnptsrx08hjmWxO3NiO9epxKCXMqipKDvjBAzMgtwRjfIliOMTFBeS7B5UZq4KCFHY1qMw7VGY6KNfkKsZQSz3DY92JfsHYN05s2AmoP1K5FgY6MDx4g%2FGC%2FI0dRue%2BRBVjxBUNlJwXM%2F7Ekdi2VKkCqjZXIxGv9OMCVN4qxuTUamZysF1pqVBDmQNnZYk5Bu6CEaeEwLEcMMHaarYteMcor4zqMjQv%2FjwLK3I2RSKkxkEgCuMnscMjdM1vmQDb2vd7VUx0FhbMe63qBgrbSJDdmeCPA5Peps8WA768bH0y%2BR7ROtGt8qDRWKlloodFbO0z85w2SHGcgLEf31v8Fj44%2FZwupNqLnpzmcq1tl8RMh%2FYsl2wvLvMT4yXXavk7G6jFXcUeKUUywSgv9TKAQDgDmaEjZvLesRdetag20tcET%2FDVE9cAkWi2cdDD8V%2F2XE5SYiTzTCi9trBBjqkAaLWERYZfSWpg3LTTU%2BvHh0FfGEKTYLkQT%2Br%2F6p8T02bynNJYGiOYLBINNTNK5cuPhFgKQcBIaV2AxuV1j7e1PNmqRmceZgusea0uXo7Klz10aOnnBSe7iaNPqoV9XkcwlM0urgHQDCHVtaAbJ%2Fkx%2FQdC3S%2FTie34ZU4faHJbHSql2YhvhbcrO1GNufAOJKcmAYmwTQqdhmBny%2F7YrVUbzaUejrL&X-Amz-Signature=ccc3940922127a67607319d9289cd5c6e234eb2a506dbf74a98eab03857ba84f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBTKM46%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8uqqm6gSnFCp8j%2FY3I5RA7rARwDg%2FxJlShZjhLyINyQIhALtjfqI%2BiFHsq19VXm2k8GVehOVYIUrixcszkUQ%2B2bp6Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyyTh3hKYX4aWTsUmQq3AM8VEWmR2ZXhhhtxlJETA478tNApIP9YZQSvJcEXF%2BCzssVEyMuNBhmlFsEmEYTt2bmK4845QFjtjU08591eSoc6SPqvn2I%2BU3b5orByCWu%2FYq%2BwbP9bWhfi%2BmTYk96rwu%2FlQiLb%2BAYb9rZtAsiKgNKNYzLaRd7jEWWxmj2t%2FeBo0RT4AG6kTWnptsrx08hjmWxO3NiO9epxKCXMqipKDvjBAzMgtwRjfIliOMTFBeS7B5UZq4KCFHY1qMw7VGY6KNfkKsZQSz3DY92JfsHYN05s2AmoP1K5FgY6MDx4g%2FGC%2FI0dRue%2BRBVjxBUNlJwXM%2F7Ekdi2VKkCqjZXIxGv9OMCVN4qxuTUamZysF1pqVBDmQNnZYk5Bu6CEaeEwLEcMMHaarYteMcor4zqMjQv%2FjwLK3I2RSKkxkEgCuMnscMjdM1vmQDb2vd7VUx0FhbMe63qBgrbSJDdmeCPA5Peps8WA768bH0y%2BR7ROtGt8qDRWKlloodFbO0z85w2SHGcgLEf31v8Fj44%2FZwupNqLnpzmcq1tl8RMh%2FYsl2wvLvMT4yXXavk7G6jFXcUeKUUywSgv9TKAQDgDmaEjZvLesRdetag20tcET%2FDVE9cAkWi2cdDD8V%2F2XE5SYiTzTCi9trBBjqkAaLWERYZfSWpg3LTTU%2BvHh0FfGEKTYLkQT%2Br%2F6p8T02bynNJYGiOYLBINNTNK5cuPhFgKQcBIaV2AxuV1j7e1PNmqRmceZgusea0uXo7Klz10aOnnBSe7iaNPqoV9XkcwlM0urgHQDCHVtaAbJ%2Fkx%2FQdC3S%2FTie34ZU4faHJbHSql2YhvhbcrO1GNufAOJKcmAYmwTQqdhmBny%2F7YrVUbzaUejrL&X-Amz-Signature=8582a8439a23a7f3180f01a5665e11d99c94ace98fa24073643aa07b9a0e4936&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFGVLFH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOvcriR59Z9XffV41qK1AFK9ji38nRAIsoVNkP28R26AiBSJuh3olk%2BZct%2FQo7u0Ir%2Bfy6bgAO%2FtWt5xWNrmMy4eCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMPkOi6jzFGK%2F4FPFtKtwDINJ9TTKnMbgHhvor9ZwHAm3%2F3PyakcfuKA3%2FGDvdMuWUPPkroKmwSrZJzFFJivsr7tgTMA%2B6RWXUi89VSVarmsD%2ByRYxuGNg6O5df80%2FZwi8csNLWV7Iv35PKii4dfK%2B5F4Gt6JwX6JDZOln5uwa7lNnf%2B%2BGAxrCB0xKQnfIdBqxcN%2BLvaPyfBGzsl1Uel%2FxtiPgHCPPNaGFTDTPSL9oQO1sIvOc7LuJZFhI5XcEFHJ9gVqZ2EoBxRb5MwzpYwV%2FLoKRjANnFPZelrE%2BBH8tvPqkUYJiQnydTf36u1%2Biwb%2FnT%2Fwe5Nf4REhk5FQR%2FNFpNy%2BLSlaLnW%2FFmoIeBnZKmpeIHqOCIQYXecbVa3yY84TX44hxuSrwc5S9XK3KOtdsylJXL4APT2s0L7GEgg%2F4rs72ZAluOsuXyv6r%2FJyymKisz0CIAspjUP%2B6go0cpNjXISfwnWTfMWwVBED60ClRbDbbmnvzCiKyN5UgPOucf%2FPuwUpaRg5QZgpL8a64Zl5exxyIk7%2BSh0HtajA8p%2FzP5DxbJJBDZ6lrz%2F6OX5LfxkqgVMvX7uTmXsC93X96GRPgq84efqXoczz5M%2B0aueVanrpsK5RKMzlx0pTgIjY%2BFbcf0HaH2A%2FzvdXlRrswq%2FXawQY6pgH%2BliJqQG6GMQvXiCpo3kAC456%2B%2FkmTi7ycVF31qDkyol2wyfYUeWHafxoE%2BQPDd1T9s9ZmDlwtG7sYsHypaEbpFSY9JuQ0MUrVfm0XcIWx7Hn7NiDqiUqMz37hFSAH8qeHFgOSekqP8ew2RAepw8V%2F%2BhWXUGX08HP9SjaJJurc1YM1%2FXnQy6%2FnS78lwMSEX8CblcboYMRv67K6OO%2BXAOVcu79Q5z2v&X-Amz-Signature=289a0f759fe89e1cc959d115584c5e87480e764aed6a6360e2ee79b6031b879c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCY6TBQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN782JwKw59rwOIzkzQ4IolUy%2BsgIKyWMMDIptit3CEAiEA52NAyhQS1U1hB8oREqjK6NI7Kj%2FzGX6j%2BNsASRTiMoQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNXyrW8v2EICwa1SOyrcA%2BrZNk%2B6Fq0%2F5wkygDb83Yv%2FnAMCRvFksHr8dAP3nEFxYI5MUJCkldxn%2FF%2BjLeX88LgQC%2FnhPX1iQxuoApOapEK8IB8ZtSX2b%2BxxaLzey%2BBGdwZzeddgeVtOsOc3XllFcV6nyDnu1WZ5pDl%2BT%2BJKl6%2FUNX5n4%2F9ZSSwFcaB2BU2jSRLmvG8ZVIBthuV26IqN3gxCB8DTBrlfFc7hrMwCbajazuQmul6blEZV3FG2ras%2B9FF%2BRtP2tCLCqUiVRaL%2Bpvt2%2FkNSQIcwnQxIy1nhWX8UyGWY8FLdgaS4AH2z1kjM2GkRb2jVNv0tBKwVqU9ZEy83PDMzb3S4UbLD9QrA97KL2aDLgmvEmaZg1%2Bgl9%2BEN1I9WX5Fc6aadK3NMMKlxtoXAxPPtIfTMTvT0E169xYtRCrRdP%2FzW3P9OlPPDuLuxqsjQ9DtjWQjezv0WOF5%2BvX6Er3kPcBrkeG0n9wpkOhXs6Nbo3xOMdp1o9W65lkVSikYramKuz69JVXSAF6HiuG15wkYKyfluQbcf4wgQJCHjMwTnAIHeQBpfwsjkkGWaqQFhUI0H6rlVuNlvo0mrAG%2BWtkUI6xQdHURQQGxrKifs3K9n0r5mdSAbP6LZgo3raYqNG%2FKYynMSj%2BLvMOz02sEGOqUB6ku27IFA%2BdAOdZEzbO2XFusPKhFwFf6%2B3cN7UM0I4nPUj8c%2Bplw0aDpHAPP79dA7zaoz3lZTaACbVw0aAG0WWTce7%2BHupeQUmsWQsB17nIdlzd27kFS10HW%2FFmtbCEhBdHY%2BgIlna%2BnYbg2djX0QTRPzWPs1OYy0prsFPiE7rPivQtEn9z3FKAAQB99N9qvnsVVB5wK51gxJwwcbf%2BVL2HOXjxgZ&X-Amz-Signature=c5b44573f4591b23f37a7539271308ef15b5a8b703ba0ad6801d89a86cba8ced&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SBTKM46%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8uqqm6gSnFCp8j%2FY3I5RA7rARwDg%2FxJlShZjhLyINyQIhALtjfqI%2BiFHsq19VXm2k8GVehOVYIUrixcszkUQ%2B2bp6Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyyTh3hKYX4aWTsUmQq3AM8VEWmR2ZXhhhtxlJETA478tNApIP9YZQSvJcEXF%2BCzssVEyMuNBhmlFsEmEYTt2bmK4845QFjtjU08591eSoc6SPqvn2I%2BU3b5orByCWu%2FYq%2BwbP9bWhfi%2BmTYk96rwu%2FlQiLb%2BAYb9rZtAsiKgNKNYzLaRd7jEWWxmj2t%2FeBo0RT4AG6kTWnptsrx08hjmWxO3NiO9epxKCXMqipKDvjBAzMgtwRjfIliOMTFBeS7B5UZq4KCFHY1qMw7VGY6KNfkKsZQSz3DY92JfsHYN05s2AmoP1K5FgY6MDx4g%2FGC%2FI0dRue%2BRBVjxBUNlJwXM%2F7Ekdi2VKkCqjZXIxGv9OMCVN4qxuTUamZysF1pqVBDmQNnZYk5Bu6CEaeEwLEcMMHaarYteMcor4zqMjQv%2FjwLK3I2RSKkxkEgCuMnscMjdM1vmQDb2vd7VUx0FhbMe63qBgrbSJDdmeCPA5Peps8WA768bH0y%2BR7ROtGt8qDRWKlloodFbO0z85w2SHGcgLEf31v8Fj44%2FZwupNqLnpzmcq1tl8RMh%2FYsl2wvLvMT4yXXavk7G6jFXcUeKUUywSgv9TKAQDgDmaEjZvLesRdetag20tcET%2FDVE9cAkWi2cdDD8V%2F2XE5SYiTzTCi9trBBjqkAaLWERYZfSWpg3LTTU%2BvHh0FfGEKTYLkQT%2Br%2F6p8T02bynNJYGiOYLBINNTNK5cuPhFgKQcBIaV2AxuV1j7e1PNmqRmceZgusea0uXo7Klz10aOnnBSe7iaNPqoV9XkcwlM0urgHQDCHVtaAbJ%2Fkx%2FQdC3S%2FTie34ZU4faHJbHSql2YhvhbcrO1GNufAOJKcmAYmwTQqdhmBny%2F7YrVUbzaUejrL&X-Amz-Signature=f7dc431452483d5e3fba27e2c0022c3695e4dbed339cebe3d5c3b15d45539e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
