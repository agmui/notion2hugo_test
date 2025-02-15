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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJQNU36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCZmGLa%2B12PkbybwKL0aupCXL8C7hXQqm1W96DAxPJgMQIgbgnpoN4U1e6EV1bg45bL4m9UjboAjqBn5IgNdKB%2Btosq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKZFV0rz7t93rAvbGircA06fMQgUKEEO9BzNs54oNv43WHr0TteNcV0wpX1ksKTPYJHkJrH1StABLEVUBX0JoFtKtvvdPS%2FE9MdaAziSLj53%2B4STRcngYt7cRn7GBIFBuczReXzOKmlHWW44ZcuUTe3OY%2BNa9m0rMMKxUf0XnbSpttwRzs%2BQThAEO48RI7mwvTkHbIsMCOBHp9lRsw4I4%2Bn9BnfX4UFLLrznYYFQ9Gb%2FNAeqFpZOFzBZHsbV9I3F6TldtxrvA%2Fzx13XMgj1ZKR9K9Ik%2BKNHuKYrnmPnMtuS9f5mASwt2BaPmXKRewrp3YYdOv2%2BzZ89S2zK0DCR6gNdmJjOEVKcLnftzqi5oziv7c0abNMcyXsvamOpnSrViaqp5JO6McELUCZluArhTAiQsds6vGXOnQ5u5DYWE0%2B1m3znx2%2FEesg%2BY882W81yKslf9VNxQK4jL4Rbuwkdotm4vpkHx3oLArP0RW0DoXJod0JLOKT9JEKJu2LavHzPrEzFkZBlnzHtOj059AjV8Qpw1WqG%2FdFuHeMY7mfEBKPVucZm%2B0wli54StOP%2FcLzwX1ZscyQHgqvQKUj0x%2F9%2BXjjlfZF4hOBFrP3WY9IlfQL0GZzhcRGoqKyjBP%2FgS0LtY5N0BkzJ%2F2MXVcCRnMOazv70GOqUB289412xG4%2FQEX4ErPXz4KKkIBqP6dTV0tvIJHV%2BGgyDeGfVsdvUThLpUOHio7jeZNcIXmkuyIKYlzfD4x%2FOiHzMCPI%2Fbit3SBteSfmFev1sSoaBppuf6NLJlGGEQ7eyskaeE0Rhw07PKNeKWWAWgnV%2BK7sqHNsD7xwZ1MVNyYhwTPJZQZdLTM0Lrv%2BSoGflv3O%2BJE5t1jrXFuIeeCHiEArk10AH7&X-Amz-Signature=088fdf632440650db66bc89d789cafe6d42828650b26edf7b9ec3b187b77fd74&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJQNU36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCZmGLa%2B12PkbybwKL0aupCXL8C7hXQqm1W96DAxPJgMQIgbgnpoN4U1e6EV1bg45bL4m9UjboAjqBn5IgNdKB%2Btosq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKZFV0rz7t93rAvbGircA06fMQgUKEEO9BzNs54oNv43WHr0TteNcV0wpX1ksKTPYJHkJrH1StABLEVUBX0JoFtKtvvdPS%2FE9MdaAziSLj53%2B4STRcngYt7cRn7GBIFBuczReXzOKmlHWW44ZcuUTe3OY%2BNa9m0rMMKxUf0XnbSpttwRzs%2BQThAEO48RI7mwvTkHbIsMCOBHp9lRsw4I4%2Bn9BnfX4UFLLrznYYFQ9Gb%2FNAeqFpZOFzBZHsbV9I3F6TldtxrvA%2Fzx13XMgj1ZKR9K9Ik%2BKNHuKYrnmPnMtuS9f5mASwt2BaPmXKRewrp3YYdOv2%2BzZ89S2zK0DCR6gNdmJjOEVKcLnftzqi5oziv7c0abNMcyXsvamOpnSrViaqp5JO6McELUCZluArhTAiQsds6vGXOnQ5u5DYWE0%2B1m3znx2%2FEesg%2BY882W81yKslf9VNxQK4jL4Rbuwkdotm4vpkHx3oLArP0RW0DoXJod0JLOKT9JEKJu2LavHzPrEzFkZBlnzHtOj059AjV8Qpw1WqG%2FdFuHeMY7mfEBKPVucZm%2B0wli54StOP%2FcLzwX1ZscyQHgqvQKUj0x%2F9%2BXjjlfZF4hOBFrP3WY9IlfQL0GZzhcRGoqKyjBP%2FgS0LtY5N0BkzJ%2F2MXVcCRnMOazv70GOqUB289412xG4%2FQEX4ErPXz4KKkIBqP6dTV0tvIJHV%2BGgyDeGfVsdvUThLpUOHio7jeZNcIXmkuyIKYlzfD4x%2FOiHzMCPI%2Fbit3SBteSfmFev1sSoaBppuf6NLJlGGEQ7eyskaeE0Rhw07PKNeKWWAWgnV%2BK7sqHNsD7xwZ1MVNyYhwTPJZQZdLTM0Lrv%2BSoGflv3O%2BJE5t1jrXFuIeeCHiEArk10AH7&X-Amz-Signature=12989a5595e5b4350c3c0cf1afa7d58f039bfbbb9bd4e37eca340aadf4b185c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW5TPQY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGjEaWDzh58HddjH1E5dsaeonGhX7G%2BNBO5cKeBYYeIBAiEAnPG5lzM%2FrXXbMYI44g86GnYVSa43ICW4CX%2BlUE591BIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDC6VrTxCH89UzC9S8ircA9ygaLKovV%2Fl%2BpcSywxVv73e9g7hLqkVpRkLXjjwSLnybG0qjaGOj6NJcb7qiQqFKWUY4TgdNyfKLFAK3Md8RHG5n09uaKhkC9j%2FAeg1hTC%2BCeN38%2B6gWWGOzvygJ8VUTBM8l0se7QxiIw6M0jyWdtjpQtaJT00K6pRwB2aPSZ%2FNQQaqEe2Vk3kesDGpzvF%2FCV64UX332%2F%2FWB9CO7LnpQkBTmd%2BAEgCPomlwWm7geIsozYh3HDHBuZcsIbXrLm1bfCy6rkzwLCGCm%2B5sK25j%2By6O55i%2BGSNtjrN6mB2Q2ik3YzBmr8n7YnEGnIS215zNNrI6Rp7F8nIb%2Fl%2FhfJ2x8OSGzgkFc%2FLHVpzaOUm5hyhq1scRJxI81lNQza%2Bz%2BFAB9hPIFWC6GWfcZgR1ozwcsrnRn9gAeiYBpFCygIHDMiYEF1nWHQo%2FtukZbPqkaI%2BaayqemUuIkW7%2BCeSF0vPBJo1U6BXNCS%2FBe0N6NK7snfsR%2FynwTQitTNapIvrPfW09yG5RsCcqjNi7DKqBRmQ7k%2BIZgh9KrOdqmLTt1o5GWN0wM9v%2BJ%2FLUQnlPAYzao3OU20AD0rhDCrSYtxF5GITDH3mo%2BWhNGENCGyYYFE%2FfD8sixMR6XBvAtm%2FusSCvMPyzv70GOqUBecmy01ZFNtjLF6HEr%2FdrevoLW7fVlkaCMG%2Fs5JGg20axE2sgwYEw3K36VorEbpdQugZlO2xEk%2BZ5u5Ch0PyvhgcwW7A%2BKVog4CXtyLXEbM5F1NWD0UhqWPBCDoaeDj%2FpDVpY6pN6pJlX8KMRx4US3TMnSrUfUOAnq7JTyoXBZvURKHrGpWP%2BS3NXTfxstmqAONS7BgmzWraxRWiWfIE7Hhp7Kxrb&X-Amz-Signature=6ff8c5586e01db8ac6d53835128fda0377383c023db9b634feb985d45244dcbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7RAZG4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3GOZx31qWdj%2FHUgZPkiIsDGAbiPN2m4t2A%2B%2Bzfzg7AwIhANhjXCIAg91fSuFhSsg%2BlQtoRDfBQAWwaxq2MJKFZ%2BgCKv8DCDkQABoMNjM3NDIzMTgzODA1Igx3m7GHMaod8RMBAPYq3APcunN%2BSgywJxm%2FvQNhTB8L9GSL0CxSwWJSTjR9AErYQMeuLa1kI4cWvzQ%2BrdbJTfSj5dBRt4BFc%2BRCPd%2F%2FL23O9qNadlloL9m5M9eZx8AWO0o62GqBstaDEEKpqTiu7w3wFnsyXIGD7FuMPVXu%2FbiMtz%2FdrKfVRY%2F0KZYCldLXLn1zbHOs%2BkmoLwK8BU72GrQrvq1wcLmZG3lw73xBFNUBUsxywXssFDdWmmBYxlGCHqgxwyRCQqLPPzemj2zSLkL%2BJlkyU8E4bHpK5cM1YrieJP4feMYDW0DikAm6mQlF4QO26edJ8JBu0%2FVIh0boFil1L5XK9gJYuiumTFDrIrpSkBMvqcZgLG8WVN7D4XmObqt%2B8xF5LE9IpPqpLP5oiNxM8aRDdZB3rkIcnCOjXd%2FW5huNBWYZmTbPU58UIpkpHjGZJbKEmfMnxNJKaUmKcO79EX4XMJl14jGhiWir6eIXprg%2BCSQJwY5E%2BBHs7WrtM5p5xyAPZ14Yj5VT0GwXDuk1UeYRWT7oikokpHqJU42Z3KvrNlkqNcNDdxqnWHo52IYN7dOJDr0EwGhbOHZrMoZyVEcIHbvvXztEYjgf8lMuDLPhwIJ%2F%2BHYj%2BC2klXd1JxzBlSuvrDKvn4Pf9TC9tL%2B9BjqkAfNrJ9plceJnBNQmQ%2B1WgOKux45yeXPqM84eQQBhUYRpCQnlm2d0dzUGhLEW%2BwxKWeRhcUB6O778AfEki7gfHHur9l%2BQj731FDH368SgutSCBCGZnHK6tvrdKBFzuorfnE8Jh%2FJSKTriMlh3M%2FN0BsiCbWCcUJ%2FfaCMVfRO1w056UydvTNeEmag4aJkE%2F6dszkFUYB1XmvE1CN1entdH8qxHLHuh&X-Amz-Signature=481e2a776fd19b092ea2f198ca5626506d33e23bf30ef23ee8533fc72102c5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJQNU36%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCZmGLa%2B12PkbybwKL0aupCXL8C7hXQqm1W96DAxPJgMQIgbgnpoN4U1e6EV1bg45bL4m9UjboAjqBn5IgNdKB%2Btosq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKZFV0rz7t93rAvbGircA06fMQgUKEEO9BzNs54oNv43WHr0TteNcV0wpX1ksKTPYJHkJrH1StABLEVUBX0JoFtKtvvdPS%2FE9MdaAziSLj53%2B4STRcngYt7cRn7GBIFBuczReXzOKmlHWW44ZcuUTe3OY%2BNa9m0rMMKxUf0XnbSpttwRzs%2BQThAEO48RI7mwvTkHbIsMCOBHp9lRsw4I4%2Bn9BnfX4UFLLrznYYFQ9Gb%2FNAeqFpZOFzBZHsbV9I3F6TldtxrvA%2Fzx13XMgj1ZKR9K9Ik%2BKNHuKYrnmPnMtuS9f5mASwt2BaPmXKRewrp3YYdOv2%2BzZ89S2zK0DCR6gNdmJjOEVKcLnftzqi5oziv7c0abNMcyXsvamOpnSrViaqp5JO6McELUCZluArhTAiQsds6vGXOnQ5u5DYWE0%2B1m3znx2%2FEesg%2BY882W81yKslf9VNxQK4jL4Rbuwkdotm4vpkHx3oLArP0RW0DoXJod0JLOKT9JEKJu2LavHzPrEzFkZBlnzHtOj059AjV8Qpw1WqG%2FdFuHeMY7mfEBKPVucZm%2B0wli54StOP%2FcLzwX1ZscyQHgqvQKUj0x%2F9%2BXjjlfZF4hOBFrP3WY9IlfQL0GZzhcRGoqKyjBP%2FgS0LtY5N0BkzJ%2F2MXVcCRnMOazv70GOqUB289412xG4%2FQEX4ErPXz4KKkIBqP6dTV0tvIJHV%2BGgyDeGfVsdvUThLpUOHio7jeZNcIXmkuyIKYlzfD4x%2FOiHzMCPI%2Fbit3SBteSfmFev1sSoaBppuf6NLJlGGEQ7eyskaeE0Rhw07PKNeKWWAWgnV%2BK7sqHNsD7xwZ1MVNyYhwTPJZQZdLTM0Lrv%2BSoGflv3O%2BJE5t1jrXFuIeeCHiEArk10AH7&X-Amz-Signature=c25fb5655ee761fe7e43471174105afc6fb3f837c5bf6764c25f5a9e505f712e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
