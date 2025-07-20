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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTNH6RU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeJ7nzJZTrxHqmcY1ceqW2JIBJlgo%2FmCxzkqPPhnrn1AiB984lH5CM79zcZ%2FJsatoVyuI%2BqeZ%2FQr%2BEKCXWIgwhPMCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pbEG%2B06H5kJPKwOKtwDeZDq8yYVemJdysBAmosMJUA32MBQFvhFSNpBrrnA%2B91vv%2BI2oXciV4PAbp%2FjA4dcxL4U5K29pS85Op8RO5INv%2B00grvODhQ7b%2BNWkdcnkmvnk0ClYKN2V%2FRw7zcEv3J2OAGB9IVJ34lG1tJovE3u1sYQBwtpju%2Ba5fHzil6IxEk4jdjAjcRZFfFHRFhH0Xw4SJH9ItBBDlCD%2BttOg4o2HIBCo097DNPP12zDGITiBwXyOsWEKjqCqRCt%2BU3gfT%2BrzUKlU3541R6ZuMLhx18kwB4rhII%2FVlNqC1%2B0fM7SiBkNZKvpijxEiUKmN4nkj%2FH1IOZG81fJGdlQdEptb9Xvs08sC877ZQWplWZJ1yD1T8jOmMFVrvw82z27om%2BD5emlV2L5DYqffpmXNbk7nIYdBx%2FbZsm3%2FU5PCtL10by0%2FWi8RV7Hr%2FpGhq5pTjkxVgHr5tAqa8Mhn7iW1i2uyT0bDIgRQJWfaKnGSNN2iP6AE%2B4HrfPeXAUgSAhC90FzQuMNQJGzSk39nga5%2BtlogrUEqCNOrpurtldS0z4uqTvUYm410PLuPTxqCahvqisVNz48xrzPgcaMoNkzZewyTIQyrZrH1mRmeLhwNgjERD7ocJK9wT5L9EUiGV2EBS8woeDzwwY6pgF9EAbD8isccmhEOZygFoFuV6zuExqIk%2FDNs8YU0FY7FmEk08DszbG8Se%2B56F0velF%2B8s165wXXetE9TVvWqfyu1SfcYWhpaqzljM5AY2HiSHnJjVHiJKE9HrFxCxF%2F0vlJQ3aAfHHmsCbRmSq4%2Fa8psQWhvHFs13HTllL0h1IwueYal7KXYd5FjFoGO%2FUV%2BYG8zlqhUS8KqskM2plF8vvAb8gPVEMB&X-Amz-Signature=3160934598085d7744c74f3ed8a741030558d2bb47dcf1bea7a2fb8559a589bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTNH6RU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeJ7nzJZTrxHqmcY1ceqW2JIBJlgo%2FmCxzkqPPhnrn1AiB984lH5CM79zcZ%2FJsatoVyuI%2BqeZ%2FQr%2BEKCXWIgwhPMCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pbEG%2B06H5kJPKwOKtwDeZDq8yYVemJdysBAmosMJUA32MBQFvhFSNpBrrnA%2B91vv%2BI2oXciV4PAbp%2FjA4dcxL4U5K29pS85Op8RO5INv%2B00grvODhQ7b%2BNWkdcnkmvnk0ClYKN2V%2FRw7zcEv3J2OAGB9IVJ34lG1tJovE3u1sYQBwtpju%2Ba5fHzil6IxEk4jdjAjcRZFfFHRFhH0Xw4SJH9ItBBDlCD%2BttOg4o2HIBCo097DNPP12zDGITiBwXyOsWEKjqCqRCt%2BU3gfT%2BrzUKlU3541R6ZuMLhx18kwB4rhII%2FVlNqC1%2B0fM7SiBkNZKvpijxEiUKmN4nkj%2FH1IOZG81fJGdlQdEptb9Xvs08sC877ZQWplWZJ1yD1T8jOmMFVrvw82z27om%2BD5emlV2L5DYqffpmXNbk7nIYdBx%2FbZsm3%2FU5PCtL10by0%2FWi8RV7Hr%2FpGhq5pTjkxVgHr5tAqa8Mhn7iW1i2uyT0bDIgRQJWfaKnGSNN2iP6AE%2B4HrfPeXAUgSAhC90FzQuMNQJGzSk39nga5%2BtlogrUEqCNOrpurtldS0z4uqTvUYm410PLuPTxqCahvqisVNz48xrzPgcaMoNkzZewyTIQyrZrH1mRmeLhwNgjERD7ocJK9wT5L9EUiGV2EBS8woeDzwwY6pgF9EAbD8isccmhEOZygFoFuV6zuExqIk%2FDNs8YU0FY7FmEk08DszbG8Se%2B56F0velF%2B8s165wXXetE9TVvWqfyu1SfcYWhpaqzljM5AY2HiSHnJjVHiJKE9HrFxCxF%2F0vlJQ3aAfHHmsCbRmSq4%2Fa8psQWhvHFs13HTllL0h1IwueYal7KXYd5FjFoGO%2FUV%2BYG8zlqhUS8KqskM2plF8vvAb8gPVEMB&X-Amz-Signature=620c21d0477792c3a47562bd495add57b6f0d36d1b94cf9e9da33e3d72a29069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTNH6RU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeJ7nzJZTrxHqmcY1ceqW2JIBJlgo%2FmCxzkqPPhnrn1AiB984lH5CM79zcZ%2FJsatoVyuI%2BqeZ%2FQr%2BEKCXWIgwhPMCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pbEG%2B06H5kJPKwOKtwDeZDq8yYVemJdysBAmosMJUA32MBQFvhFSNpBrrnA%2B91vv%2BI2oXciV4PAbp%2FjA4dcxL4U5K29pS85Op8RO5INv%2B00grvODhQ7b%2BNWkdcnkmvnk0ClYKN2V%2FRw7zcEv3J2OAGB9IVJ34lG1tJovE3u1sYQBwtpju%2Ba5fHzil6IxEk4jdjAjcRZFfFHRFhH0Xw4SJH9ItBBDlCD%2BttOg4o2HIBCo097DNPP12zDGITiBwXyOsWEKjqCqRCt%2BU3gfT%2BrzUKlU3541R6ZuMLhx18kwB4rhII%2FVlNqC1%2B0fM7SiBkNZKvpijxEiUKmN4nkj%2FH1IOZG81fJGdlQdEptb9Xvs08sC877ZQWplWZJ1yD1T8jOmMFVrvw82z27om%2BD5emlV2L5DYqffpmXNbk7nIYdBx%2FbZsm3%2FU5PCtL10by0%2FWi8RV7Hr%2FpGhq5pTjkxVgHr5tAqa8Mhn7iW1i2uyT0bDIgRQJWfaKnGSNN2iP6AE%2B4HrfPeXAUgSAhC90FzQuMNQJGzSk39nga5%2BtlogrUEqCNOrpurtldS0z4uqTvUYm410PLuPTxqCahvqisVNz48xrzPgcaMoNkzZewyTIQyrZrH1mRmeLhwNgjERD7ocJK9wT5L9EUiGV2EBS8woeDzwwY6pgF9EAbD8isccmhEOZygFoFuV6zuExqIk%2FDNs8YU0FY7FmEk08DszbG8Se%2B56F0velF%2B8s165wXXetE9TVvWqfyu1SfcYWhpaqzljM5AY2HiSHnJjVHiJKE9HrFxCxF%2F0vlJQ3aAfHHmsCbRmSq4%2Fa8psQWhvHFs13HTllL0h1IwueYal7KXYd5FjFoGO%2FUV%2BYG8zlqhUS8KqskM2plF8vvAb8gPVEMB&X-Amz-Signature=4ecc89034659ca407647c3a8006e85a0031e61942a25db053fa0743b5b04ac89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67AL5H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvaMYYo03TU4SLcM8GLVkE9u%2BJiUjk3q6Vjv%2B5sxzHqAiByu0nUm3cPDqGDW8yDTrGM5WvagxzUQTlckdZVyanqYCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNOIGyHWw9jB8EWKLKtwD%2B%2Fh7DN%2BTSWzMyYIQAZ5aag%2F2K8Xq6et8zdoxFzgEfAx%2BkIHrFHpqdtBUSdKshH80h%2FHvNamHeXt7Qmm7O9gmaSmu5OC1I6612Bvn08Eqe2P5c9tcvYZjjmLVcpWYvqU4ppsNq5Wvc6fHbxVDEZSOZu33Gok%2FHmaHSeEPnu3yFzWLftSkGdLUjWiq5DVF2FgpkGArpq1xiu0f6NSO4fJJMRNHHampsiGsmU5OvZslIopsCLCX2h%2BXtE4zNn9pAuic8ennYyvi39eh7db2J%2FDwIXxzPW9ORZf6Tpu15ZSFktY1G9oyVe5E3c7jjMAyqtV1FH7YzxU7xKfpfRoKZ5ULSqkwS6UkVPzOEkFG%2FWOXKCtxIG%2FTy1gyuXJGLc%2BXfFWIBXiyw2WQatts%2BNzvZciyEe2iCgw4OwgSgxWW7gSNLVqRuyw1oO8RQmzuYZIFwxltEhEeP0VRPgnVA3CInjuqSJzudln1uBQOzU2mQUxqunWvRfkUa98gj6H7QkOA%2F8D2BB52UeQ%2B%2FJ0aG9uQrYByjn%2FSPmfHnqZYuKfHwLsleQXwQvzwT%2BZKxYPLkFQF16Iu81Rpt9DU01g6brgUGR77qPgW7%2BTtJPwS0vZu0PYkyDG%2FJhIGdtB3z63BBnQwoeDzwwY6pgG7mPmCAxXduy5NgbRKcdgfbwNCJFP516lRIsKP3LXo6y%2B9idi4k%2Bu8Swy6Gjq7AFP2jHrnqL6z%2FPPj0fxBsVN5JzIGdrCd9Ldy9SxC1I0bc1HQOBSke27suIpCy66f9fRb846W%2F48mv53ELCcIHnr%2FDgAYEV457E9J6garUSEzl5YKjDQlE2RtC2PfGOdxGB1ghl4llbQofN2Pz8TKn%2BNGkYTuU%2Fh1&X-Amz-Signature=c9452218527003e5bd47d75701e2ec1ec942d0c15eab13286d16c87f6d040db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEXEF7L%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS%2F3%2BTt3nvWGTpB1sfvalANghCqXrzEL8NvRy4g8X9PAiEA3cPYyMV91JNMnaR%2BZi9zec4o7ygr9asXNK%2BIHIQcaqQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3J%2FK23rNSiDulShyrcA3WOMAWocSygaMQHFuUJrFJOVRiTykPCZB3gM46BaRotVg%2B10NwWHxONhaTy8RUt18xIYT8JEnYY2ESX%2FeJHNzuicXjtkpnGnZGTVPacgKknK8zPKAfwb%2FLoFpAOguUtq35fNoMOUaDrczMGdWRPfngP76mkPvRRsn1JUuvE5ouh3TlC8975407yOddmW5dGjfoVor2BAusXSN3oJW0obaYjaUrknEccXeQqhprZ20Z%2B%2F1UwxBWY9hnoXTPUGwnnY4eC8BcTM7KfsRGd%2BLmq43TEl4foOip2ZYcycc7fMGz9uxDjc7XlrEOPUSbAxnM%2Bdqam64hSFDSPaf9y3yoy9jhtPd%2Fm881Vj3QPhcNRPSJ7noWkAha7%2FJN%2BLqQ48tktyGV8Ewbn%2BYlE0Dqr0BE6de8Jm2%2FHlRPm6JjXxFoP2VaT7NsYfsnR5qX3BC7FFo8YBoSQEMvvoYlV7KHbx4VO8nQjYEG%2FJeR%2FVsZvrdh5qRsDRHIdMsNDXrPu0US%2FxmvHQ6ceTYJVTHM0jdrPlwI%2Fzub6gr29ko%2F7F1j7G%2BMZmZkYA1OE2%2BBrmWMrIuxm2qNugZ2o9xCz3iAuS3z6WbO2kFK5w9VSZpKblCR%2BXZtYgdKdsr%2B007m1%2BjmwVP%2BTMILf88MGOqUBxAJwL0qNf2MYWJb%2BV9Sx6dBTLrydgSbYjO6m4r0RAHMDqlBxdETWLDSdaxWKwtJEmnHXrLR72pO%2BZU1LFcFEInaFx4gNNsrUuJoC4wd82HURApw7lbWNDLRCDGu5IJazg5bLZDP4%2FB8N9HOP30MuLJn1IS9KpzSeoieetuAXT5abXNictBW3PWNKA0j7V%2F%2FXArRofA4uIcdvT9vlAlEFNKSEerwT&X-Amz-Signature=2f43ef6f49f18820b6c9778034717ea3dcc9877cbc2cbddc8e236df01174060a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XTNH6RU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeJ7nzJZTrxHqmcY1ceqW2JIBJlgo%2FmCxzkqPPhnrn1AiB984lH5CM79zcZ%2FJsatoVyuI%2BqeZ%2FQr%2BEKCXWIgwhPMCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0pbEG%2B06H5kJPKwOKtwDeZDq8yYVemJdysBAmosMJUA32MBQFvhFSNpBrrnA%2B91vv%2BI2oXciV4PAbp%2FjA4dcxL4U5K29pS85Op8RO5INv%2B00grvODhQ7b%2BNWkdcnkmvnk0ClYKN2V%2FRw7zcEv3J2OAGB9IVJ34lG1tJovE3u1sYQBwtpju%2Ba5fHzil6IxEk4jdjAjcRZFfFHRFhH0Xw4SJH9ItBBDlCD%2BttOg4o2HIBCo097DNPP12zDGITiBwXyOsWEKjqCqRCt%2BU3gfT%2BrzUKlU3541R6ZuMLhx18kwB4rhII%2FVlNqC1%2B0fM7SiBkNZKvpijxEiUKmN4nkj%2FH1IOZG81fJGdlQdEptb9Xvs08sC877ZQWplWZJ1yD1T8jOmMFVrvw82z27om%2BD5emlV2L5DYqffpmXNbk7nIYdBx%2FbZsm3%2FU5PCtL10by0%2FWi8RV7Hr%2FpGhq5pTjkxVgHr5tAqa8Mhn7iW1i2uyT0bDIgRQJWfaKnGSNN2iP6AE%2B4HrfPeXAUgSAhC90FzQuMNQJGzSk39nga5%2BtlogrUEqCNOrpurtldS0z4uqTvUYm410PLuPTxqCahvqisVNz48xrzPgcaMoNkzZewyTIQyrZrH1mRmeLhwNgjERD7ocJK9wT5L9EUiGV2EBS8woeDzwwY6pgF9EAbD8isccmhEOZygFoFuV6zuExqIk%2FDNs8YU0FY7FmEk08DszbG8Se%2B56F0velF%2B8s165wXXetE9TVvWqfyu1SfcYWhpaqzljM5AY2HiSHnJjVHiJKE9HrFxCxF%2F0vlJQ3aAfHHmsCbRmSq4%2Fa8psQWhvHFs13HTllL0h1IwueYal7KXYd5FjFoGO%2FUV%2BYG8zlqhUS8KqskM2plF8vvAb8gPVEMB&X-Amz-Signature=58dad273f4e1e33d0946f3bf03d3240de7a23e813a57a437049804203570266c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
