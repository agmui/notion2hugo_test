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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5M7OXW6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGj%2BWHp2%2F9buSM%2FmojtPjLnTidjO1tgGZ3y0ritSwtd7AiAxRwXno7pWo3buQvr5qksOJG6aME4HyHLcZh7oI%2BqAkiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwktn6dDr50a8hdSjKtwDu4qDOgQ43qYretvBB%2BzsCWbhGup3LqGkK1TUi1zUN3KFxj9%2BSFy7d1UOv%2FnVgZ2KzWlsJK7iVBUAHTlt5KFKkbiWMxGqdzArkEOtKYM%2FM%2FizLX1cuoK4cWKtzBQ5TOEZ2IxUhwTf62yziXWIMf1OiwAfFqMG2nAQqcuVf51VMVD8Wm87DQd94%2FQrpKvfiY6AvunqZr91oR8AZR7OFJkEC0BJm8eKmdLvROL7e%2FpF7Fji2XSrVn9fz%2BkZpGC2swm8TGxpkGvxSgy%2BcjNqw6Bhx7u7KZ1qPNsKzOegZQY523JN0wGnxH9Yd2g%2B2huLICjcZzgsdI3jYcNzx2kMCu8qsDtOW6FKM3jfmZ4vqj9if64V3XBEtjXM%2BeZIXc1RHYYULM31zD2H1Dj07cLJqjbZwEa701DlV9gc3AjsK9432p4bOO1hrXqFj4cUjl3swkNh%2FLyf1LEBdkqUe503g%2FlfVPwT5mmjChTnfWnwEoBcmeiIoeBjBY5yJB7m86wJ4vGAwwNoKm%2BuxSm%2BHKsjQK4NCSY%2BDrWb3DUEt5taQhDsBgtcltptXzsFpFSc5jmRRaJzUJL8BbriIyzGJZs2Gtms1EG%2FEyiN8s42QvUCe%2BDS8r%2FpVVH5dZvEb5Zj7C0w1%2B%2BjvwY6pgGWc96LTMqUCJBIX2%2FKZ7fBPl17Z6AJJT149LIR5MIaBLpNOmINsp2uzJy%2Bddoz%2FVItFedE06ZTZH86BIbGe4Xb3eojtRoLfJa1810NAy2uF8eMnJ4nbPC9WilTW6Ud6YsCQLEtHe2Z2EQ0wmF4JycY%2Fq9e4hBhtlbxniv0RYiTAPsHkAQu8FHRPCwj31so7DaHnRlCCCjyxQOjT6OrXp8NtLI51iP1&X-Amz-Signature=91db0d1f6ea44201c317f46f88afaaef8d87b2e8105eade153815c1539b26121&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5M7OXW6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGj%2BWHp2%2F9buSM%2FmojtPjLnTidjO1tgGZ3y0ritSwtd7AiAxRwXno7pWo3buQvr5qksOJG6aME4HyHLcZh7oI%2BqAkiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwktn6dDr50a8hdSjKtwDu4qDOgQ43qYretvBB%2BzsCWbhGup3LqGkK1TUi1zUN3KFxj9%2BSFy7d1UOv%2FnVgZ2KzWlsJK7iVBUAHTlt5KFKkbiWMxGqdzArkEOtKYM%2FM%2FizLX1cuoK4cWKtzBQ5TOEZ2IxUhwTf62yziXWIMf1OiwAfFqMG2nAQqcuVf51VMVD8Wm87DQd94%2FQrpKvfiY6AvunqZr91oR8AZR7OFJkEC0BJm8eKmdLvROL7e%2FpF7Fji2XSrVn9fz%2BkZpGC2swm8TGxpkGvxSgy%2BcjNqw6Bhx7u7KZ1qPNsKzOegZQY523JN0wGnxH9Yd2g%2B2huLICjcZzgsdI3jYcNzx2kMCu8qsDtOW6FKM3jfmZ4vqj9if64V3XBEtjXM%2BeZIXc1RHYYULM31zD2H1Dj07cLJqjbZwEa701DlV9gc3AjsK9432p4bOO1hrXqFj4cUjl3swkNh%2FLyf1LEBdkqUe503g%2FlfVPwT5mmjChTnfWnwEoBcmeiIoeBjBY5yJB7m86wJ4vGAwwNoKm%2BuxSm%2BHKsjQK4NCSY%2BDrWb3DUEt5taQhDsBgtcltptXzsFpFSc5jmRRaJzUJL8BbriIyzGJZs2Gtms1EG%2FEyiN8s42QvUCe%2BDS8r%2FpVVH5dZvEb5Zj7C0w1%2B%2BjvwY6pgGWc96LTMqUCJBIX2%2FKZ7fBPl17Z6AJJT149LIR5MIaBLpNOmINsp2uzJy%2Bddoz%2FVItFedE06ZTZH86BIbGe4Xb3eojtRoLfJa1810NAy2uF8eMnJ4nbPC9WilTW6Ud6YsCQLEtHe2Z2EQ0wmF4JycY%2Fq9e4hBhtlbxniv0RYiTAPsHkAQu8FHRPCwj31so7DaHnRlCCCjyxQOjT6OrXp8NtLI51iP1&X-Amz-Signature=f3f591356e322842cf14032542ca7130c71e2a8ed8cdc0ee3c883f3bd6577af0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26TG4EX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEENukwyAmQPXRYj%2FtYVxenWy%2FmCchrpfTB%2BKVmU7S17AiEA1RfaAjSw5NOs%2B1PN4UEN6b%2Btm09W3rE2DdVvgqsVRh0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQ2nxiWYzHbTE7T0ircA4RDOk9f87L9Dj1tZ3V0ancg6xCPjtvS03OSL8TDtQSTZeWFDBjNAKfzRegprV5Ye1YZgWcPVmfSub4SzefiSV%2FKxqnXppSoxAYMdP7sbwoKspk2XF7ZFivMe9CNHtIi%2BKJ2KL08k%2FZEw6l4AleiRjsndxq4UDBcl%2BU%2B8028V8IvhGXZd1m%2FezpomMYp2zUWutTBIZzEVXnVrkbe0OQ8Jtmd5YLy7onWdzUor5CaMCHNppUc79dhmuCl0i3e62nMrylko4F7GcD1pEnq30YD2UiOUhOB9%2BlWlVkgceJTPqAGFxs3sDZZ%2BpkPJ2EFe6gpUQ31SmlAGU78%2BMTABFE6VgWFaSTY2erF6evzvrNGNsazdCZTg%2Bea1%2FWCN2Vz%2FN3QKpswJJvEkCJTbJtsfvFrUt%2BVyVXLm2lqi7GtRGYRcIsvo6DnKZ5lZv00Squ7lb9MRlU3NCp6cG%2F%2FVbz2V%2FqHL4r3pgY3TsJ6synaBT90ePEF0xnTtRmIjWAcJq%2F9x9nsYJSLpvE4J0T0EqxQmiaL8%2F7%2FWku8kbYVR0DGx9Hv3e4r%2FjdeDAX7W8%2FMMbzc%2BxRkl5QBHk5VsG%2BXy1rWgONVjXh9bp8xT%2B2prZ7sAd6jW1e6khbabFxMOLil8RovMNnvo78GOqUBXr4%2FnLDxFYAnj9k6deg1yfZ0YJjGgAYIJyLEaB6jevcXwTRG5aSF1mpn7wNi0yGgkcvt01yKiM2GHb7859DG0q8JQjoNO5IT9DhRKx3xAC8Y5LHyzl6n5Y3vmbE5Yb3CFxfMYjzaAPsdW3iEJFNBVhenEYEqUWwM24g7dbg4tgz2Nhd165AGQou16LFjNO%2FxsNr788bKo96xGgaW3BwTCnF7mxdf&X-Amz-Signature=173804bdbe89e8e27e34b003e06ea8f7883fce400a84eefec8792af5669851a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLBVBDEA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCIk4HWfL4b%2B1INo3Gip%2Fpqi9UR8%2B%2FknaOBbfk4FYCy7AIhAJLLF3qbWaYEwlTts9eROXZSOV2XLrdyHvVyrCrlanjLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6lnrgjaf3SAULmrcq3AMDhxUuIHCQ6CAexp8fFjYxin2p1TE5oU5p2orpJxE2wYYd9SuZsWsvd%2BO5IB4pUIOxnKajTXpDKWVm0GM4GnfR15%2BO1ai%2FWjybOYlr8gcbHpokY9KFMiYbjAuFaMIY3wi7txjbBzISHA23pRwHxZrIyCuL33JYhmgS9dM01td63FzD1J4WtHH0QcKJxPsALcuby%2B%2BAYrSP3PrrMJhhlbERSbcGIpSLykwgUNkY7xpcGlQD3RP7SuahA4BPJj1nZV3ThLBSClYMqBHCvaUCzJD5j7hIjAhtTyZoAwoepwOkECDd1qZfm0wDwEn66N%2BSTHE%2BbP%2BnXM7pt07g1JoIhp5hw84tuV1LU6LxDiqEi6t6rWX9LYwP2bcgnO4Mi5N2%2B9wpiGnwOj6uvCbZeawFs7BUjySyzj928IDtHRRoudha8LiXGT4X0enyxsVUtdV7ifCIsGqm6FNU8BpqjmGGDfwXpBzAzMTSP%2BPTPiXVPUwo6Ux%2FBdmplBE%2B5sYcU66fZIZhmBy978i%2FwTod2d1QtGAxUobMTN0Sjz334hMbOq%2FOh2xT5%2FqTHU7FgtlIyRplZXJx8jhfW7WCXt4UxhJzrpMFgTEkgrx1HBS2IYsBwOWGdfIjgTYzzGgBRQ3y4DDl76O%2FBjqkAdt1HW4AG%2B7TeuSsZ2hewi2tuxPiys%2BLCtfvXCYP5W0vGzslWHlxWPayt5RisJ0WewonJ3uVEcPQc0A0zIoMNUhwpBxYd%2FOlr1ogCYbZxWlVPdtxShd%2BoAMjxZL748YyeTzeFkl4fGi%2FFwhQ3ERcDqpMDYNS62HD%2B1YjG%2Fuvs7DyQeTqAc8l2gEVxWFF7MRwi%2FNsNpjKMCAWqlR8Tht1uutHbcb8&X-Amz-Signature=3cff1e40c5d9141a90e285a2f4eb23df9ba8e03e252efc10958f68d053e9d71a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5M7OXW6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGj%2BWHp2%2F9buSM%2FmojtPjLnTidjO1tgGZ3y0ritSwtd7AiAxRwXno7pWo3buQvr5qksOJG6aME4HyHLcZh7oI%2BqAkiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwktn6dDr50a8hdSjKtwDu4qDOgQ43qYretvBB%2BzsCWbhGup3LqGkK1TUi1zUN3KFxj9%2BSFy7d1UOv%2FnVgZ2KzWlsJK7iVBUAHTlt5KFKkbiWMxGqdzArkEOtKYM%2FM%2FizLX1cuoK4cWKtzBQ5TOEZ2IxUhwTf62yziXWIMf1OiwAfFqMG2nAQqcuVf51VMVD8Wm87DQd94%2FQrpKvfiY6AvunqZr91oR8AZR7OFJkEC0BJm8eKmdLvROL7e%2FpF7Fji2XSrVn9fz%2BkZpGC2swm8TGxpkGvxSgy%2BcjNqw6Bhx7u7KZ1qPNsKzOegZQY523JN0wGnxH9Yd2g%2B2huLICjcZzgsdI3jYcNzx2kMCu8qsDtOW6FKM3jfmZ4vqj9if64V3XBEtjXM%2BeZIXc1RHYYULM31zD2H1Dj07cLJqjbZwEa701DlV9gc3AjsK9432p4bOO1hrXqFj4cUjl3swkNh%2FLyf1LEBdkqUe503g%2FlfVPwT5mmjChTnfWnwEoBcmeiIoeBjBY5yJB7m86wJ4vGAwwNoKm%2BuxSm%2BHKsjQK4NCSY%2BDrWb3DUEt5taQhDsBgtcltptXzsFpFSc5jmRRaJzUJL8BbriIyzGJZs2Gtms1EG%2FEyiN8s42QvUCe%2BDS8r%2FpVVH5dZvEb5Zj7C0w1%2B%2BjvwY6pgGWc96LTMqUCJBIX2%2FKZ7fBPl17Z6AJJT149LIR5MIaBLpNOmINsp2uzJy%2Bddoz%2FVItFedE06ZTZH86BIbGe4Xb3eojtRoLfJa1810NAy2uF8eMnJ4nbPC9WilTW6Ud6YsCQLEtHe2Z2EQ0wmF4JycY%2Fq9e4hBhtlbxniv0RYiTAPsHkAQu8FHRPCwj31so7DaHnRlCCCjyxQOjT6OrXp8NtLI51iP1&X-Amz-Signature=6352eed932ae6430c9edf18568309ca29d285035fb63473ce327cc1a88952e9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
