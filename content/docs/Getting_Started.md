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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQ5PW63%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjyC4V7bX3L57AufZJsTe6SSdVkylKYfTmvnMR03KHKAiEA%2FJO1P1%2BXGEBPe50MOZnma29lIgE%2BSqFZlXHC%2FhjffGMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs3PESBLA%2FII7V66CrcA9iyRKv0vql5aJIhBs1K1pMVSNPKN7LfhMondH2cg9vkAgBMATFOYKMqJXOiHl1RoqOHCRz9HUZHJqQSZOjAcCs0as5T7cu2n%2F25V6bRvZd1CwRQDMiBQ3zN7GEFjkk%2FwCF7I1AJOIG8Ra6dTFR8yoE0B1%2B5BghZheiaSqkT3gwiL2YfB0laxbHA%2F23%2BbSjRejgBUVwlZjQW4wX5bs2n0s8NX4dgjQlM4q0%2F%2B4bJ648dzPJHZdMu6G7NjCh35ZxN305K%2BuvpDxODv2wZxEQX%2FsBgKtFeXkjkmWwMkBfW8JqFf4t8YBBrme09oLGU3N2RxwdjmNqLdn9MgvQbQu%2BftneRoU0fToZsa6wiwkxUK53lNEh2cpY4xPWmej9%2F3JwqrK9iUTIfH1k6DDoXby79y4fdk1jcbcXk5WazcvH0IDu0YR24pdytj%2FSCvT9kHRFk5ZthDwv4EnzVhUTkKkI7R3gqdriehpjR%2F9ScfZq8gvB3a9Q%2F4KLaD1xSuImOeoVYarcfm%2BUywjJ4BSe0pRa%2BzTm3mgrVpBKxIRe%2FaHK5FYY9f7Q96Br1GKgnRzkk0zC32T%2BBegZ25QId4WYfxPAG0XW5QB%2BdXufEkUZ%2BJW4p0taJtZy4mhgLtnZtUWEeMJD%2BvsMGOqUBdzfc4mrPJvLr5Vo2tUf3JnxOabM9EeEnpE7%2FHbjYcjTGGfCIUUkQyEAxa2mFJjVt0T0680RpWboS37mc5oCTyen575xZVOh%2B6D6diocgkVnGiJkW4coGCmu7OsAKQ7jLmES2teocWt9dpQ%2BZXM%2BkxcBPgeQw9hEUG4A29Rxh0PYUrOQ1Bvi30MJFekgdfgrflYbXBI7p%2Fd9YVLK4j%2FHJGGbOjJHa&X-Amz-Signature=57edaa33a1400940f7c6f8cc19fc259cfc2ba7f3dffdd601b2ee3e1eade0a4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQ5PW63%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjyC4V7bX3L57AufZJsTe6SSdVkylKYfTmvnMR03KHKAiEA%2FJO1P1%2BXGEBPe50MOZnma29lIgE%2BSqFZlXHC%2FhjffGMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs3PESBLA%2FII7V66CrcA9iyRKv0vql5aJIhBs1K1pMVSNPKN7LfhMondH2cg9vkAgBMATFOYKMqJXOiHl1RoqOHCRz9HUZHJqQSZOjAcCs0as5T7cu2n%2F25V6bRvZd1CwRQDMiBQ3zN7GEFjkk%2FwCF7I1AJOIG8Ra6dTFR8yoE0B1%2B5BghZheiaSqkT3gwiL2YfB0laxbHA%2F23%2BbSjRejgBUVwlZjQW4wX5bs2n0s8NX4dgjQlM4q0%2F%2B4bJ648dzPJHZdMu6G7NjCh35ZxN305K%2BuvpDxODv2wZxEQX%2FsBgKtFeXkjkmWwMkBfW8JqFf4t8YBBrme09oLGU3N2RxwdjmNqLdn9MgvQbQu%2BftneRoU0fToZsa6wiwkxUK53lNEh2cpY4xPWmej9%2F3JwqrK9iUTIfH1k6DDoXby79y4fdk1jcbcXk5WazcvH0IDu0YR24pdytj%2FSCvT9kHRFk5ZthDwv4EnzVhUTkKkI7R3gqdriehpjR%2F9ScfZq8gvB3a9Q%2F4KLaD1xSuImOeoVYarcfm%2BUywjJ4BSe0pRa%2BzTm3mgrVpBKxIRe%2FaHK5FYY9f7Q96Br1GKgnRzkk0zC32T%2BBegZ25QId4WYfxPAG0XW5QB%2BdXufEkUZ%2BJW4p0taJtZy4mhgLtnZtUWEeMJD%2BvsMGOqUBdzfc4mrPJvLr5Vo2tUf3JnxOabM9EeEnpE7%2FHbjYcjTGGfCIUUkQyEAxa2mFJjVt0T0680RpWboS37mc5oCTyen575xZVOh%2B6D6diocgkVnGiJkW4coGCmu7OsAKQ7jLmES2teocWt9dpQ%2BZXM%2BkxcBPgeQw9hEUG4A29Rxh0PYUrOQ1Bvi30MJFekgdfgrflYbXBI7p%2Fd9YVLK4j%2FHJGGbOjJHa&X-Amz-Signature=b6a15adde5038f8381d4d490c5f3a031f95aeec2ae60d5200dc96c9f85bb45d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQ5PW63%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjyC4V7bX3L57AufZJsTe6SSdVkylKYfTmvnMR03KHKAiEA%2FJO1P1%2BXGEBPe50MOZnma29lIgE%2BSqFZlXHC%2FhjffGMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs3PESBLA%2FII7V66CrcA9iyRKv0vql5aJIhBs1K1pMVSNPKN7LfhMondH2cg9vkAgBMATFOYKMqJXOiHl1RoqOHCRz9HUZHJqQSZOjAcCs0as5T7cu2n%2F25V6bRvZd1CwRQDMiBQ3zN7GEFjkk%2FwCF7I1AJOIG8Ra6dTFR8yoE0B1%2B5BghZheiaSqkT3gwiL2YfB0laxbHA%2F23%2BbSjRejgBUVwlZjQW4wX5bs2n0s8NX4dgjQlM4q0%2F%2B4bJ648dzPJHZdMu6G7NjCh35ZxN305K%2BuvpDxODv2wZxEQX%2FsBgKtFeXkjkmWwMkBfW8JqFf4t8YBBrme09oLGU3N2RxwdjmNqLdn9MgvQbQu%2BftneRoU0fToZsa6wiwkxUK53lNEh2cpY4xPWmej9%2F3JwqrK9iUTIfH1k6DDoXby79y4fdk1jcbcXk5WazcvH0IDu0YR24pdytj%2FSCvT9kHRFk5ZthDwv4EnzVhUTkKkI7R3gqdriehpjR%2F9ScfZq8gvB3a9Q%2F4KLaD1xSuImOeoVYarcfm%2BUywjJ4BSe0pRa%2BzTm3mgrVpBKxIRe%2FaHK5FYY9f7Q96Br1GKgnRzkk0zC32T%2BBegZ25QId4WYfxPAG0XW5QB%2BdXufEkUZ%2BJW4p0taJtZy4mhgLtnZtUWEeMJD%2BvsMGOqUBdzfc4mrPJvLr5Vo2tUf3JnxOabM9EeEnpE7%2FHbjYcjTGGfCIUUkQyEAxa2mFJjVt0T0680RpWboS37mc5oCTyen575xZVOh%2B6D6diocgkVnGiJkW4coGCmu7OsAKQ7jLmES2teocWt9dpQ%2BZXM%2BkxcBPgeQw9hEUG4A29Rxh0PYUrOQ1Bvi30MJFekgdfgrflYbXBI7p%2Fd9YVLK4j%2FHJGGbOjJHa&X-Amz-Signature=9c0b40fd7467f5724dfcca9e47874686f9fe39bc4e9b81b4bfde2b9b33e0666f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRB4L4RM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmZ1Lt32ehpPrd0Rt%2BS6HCOafIWYtXXogyH3EpjjZpOAiEA2kpzupjN1Ri%2FUKwF1uj8kf0n5mMYoqqfxqWDGfzyzZYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsG%2FGdxuUsxuogaiCrcAyTKk4vxgXJ6yFF5xwciVSqwHyiKuroWaRk0%2FeejXcZFUcr2VkxSHT9OzB1New%2FF9rqM%2FAhZXXRz3qHSclfoUqwApU02kypmbA7J4lKvMJU%2FDQjiyqjLtmVPSaWsZ9Cv4%2B9oy%2FCvphsP1Eml4VeXXTPpXKKJggVTpUIs3azTbDIBV6GKfk6uw9MD7RvV3ceNHU8KBqEjVQL%2Ba37dn54HLnPmqlzU51wV%2FtxnGxMEP3WsHVccahs%2B1X%2FRSEeXE%2FGR9iChA8nMABLCVpddEgBGnJFodVi5Wy1HpL9o7RhsQHnpIaKifya5ECwbdMuZf5o3lWBlO6tq4vVrOu9Znfq%2FEb5tu8rxKmvhS9cHLXEpH1OEQz20%2BWrcKqsu6TSIgB3gjd%2B4pSSx5pMpXWq4yY1Z1cB5z8dS4XDI2LNma07Ck513VNPyQ7V7iWgEnsea4qU3Jwo52%2Be1mn56PRaOzU4wPGvW6JIgFo3mXGEglAp8OsS0AcWSJE2BfB5DJcO4cce%2FNebCMX8NFwXagA6wt5hJVqSFmoZN9i2ljiV2tQ0zH8bmqsImaR1OltrWp7yFKv18lDTBuJk%2BG%2FbyGr6o7uJuFDkjpHulSkBNTiKsTZ8aUQmX9K0EMB9Z20CTX14IMMP9vsMGOqUBGrlrTgKFy3LRQtklbulcCQyOO6eKNzpYQHc2Sz9tHu4tNv9EK%2FdScpTevHzQ31fOmbjatp8qExPE5aOgGJpCXh1h%2Fp%2BuAFMujEkQGtMmX1I%2B1g9AEMzZsiT%2Ffp%2F0s28rNzA0S71vYu41iyZ%2FoOvmiO97vQih9%2Bm5YqELvTvQfl21qFbMDzACMtFHS7jePrDxxZl4kVS4KKLXAWGWTLalAvk7Ice6&X-Amz-Signature=5fdc45ef1a5f1908aa22f9b4af91e6b48256a9f4fcf2ec46624fe292237f8371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36WULJB%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBl5JJd4FVtl%2FhYBOjV7RHnc39YJwfqPikPV5ITETnV1AiBkPk8XSf62%2B2ey9j1r4RkFNR9J20Z%2Bv2qfPVo9Ynb9ayqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFwO2%2Ft62cLWhOfgKtwDHv82tKrwcXvbaTj1K8UAaTmbtdGpfyfPO6O1OBYcbxQDyNTEacWbf7cPF9hPzzeomGMWRv68fIa1c8tHsPKn%2F%2Fcet0qRZWZkoJeY%2FUB0tqzVKUWIvQtbDJBB64Et8gpIfZ0LbeUYRzy3D%2ByvKPbNRWh%2BP4FMtQ2wR%2BLVRzibLnZgjSgoPcDwUt1YLwAVAeSCT%2FJo8BF9phm5l%2BREhwN4v904LxYdDwMtNG1rzSf25f%2FIrT%2FGAO7aeIIj%2BSSZ0nFB3EkQZbVSUQ34tMIDlDikDyJDFJnWQXy%2FTYXm74UuTEXfNoQYOdkRM%2FpBV5fGZvmAeUtIxnT%2FQMd7Kt5XN%2BrIzMptkK9JwIzItz7DjjBNQ%2FSuwQbfpMdtwWZE8ZvBSCLvk1C5Dkp%2BbM8N4pSfwpfv2tzpH8pIa4zbnMUWum5nYzWi91RCVMusiPTmG%2BTwGgXJi0upZyz4zlNHBbCie7aC8orELV9YGqiIi2qV8hu5kz8DrcZAoq0slnSNr24z4sHM6dNpZBg9UTXJHnebsPeyG%2FIF1pRk1trFmZX76t6rMKArJgAH%2BSWqerFOP%2BkttglGxAJb8O3FoVPn3ypwTL0ilimo%2BHwWpsGz0rVIzm4CPiWR1GLYUKemomfPIwEww%2F2%2BwwY6pgEEs%2Fr%2Bnb4FX%2Ffbr7oEgptlHk%2FcRmOcgGQZGgydF1%2Fwoe0RMGvolytd7gCz75TR4m%2FnELij3wqPAieGPwUYNMmNgs8oDQQjX2u4MEj2Mv%2BOhAdA8YCn22utwnLogKNC8gGs%2FfIeCuKAc4%2FXD0VO6buriQtUHV9acfNV%2FdOMa3U%2FKOWsxFfaXSz3xwx3kHaujvWwxKhQ2ewjAY3Q3KZvy19Wt1xEGSZ7&X-Amz-Signature=5f4a728370a09a8339ba6bd88ea4f963fba12abde42c4785984ea911063ae2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQ5PW63%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjyC4V7bX3L57AufZJsTe6SSdVkylKYfTmvnMR03KHKAiEA%2FJO1P1%2BXGEBPe50MOZnma29lIgE%2BSqFZlXHC%2FhjffGMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs3PESBLA%2FII7V66CrcA9iyRKv0vql5aJIhBs1K1pMVSNPKN7LfhMondH2cg9vkAgBMATFOYKMqJXOiHl1RoqOHCRz9HUZHJqQSZOjAcCs0as5T7cu2n%2F25V6bRvZd1CwRQDMiBQ3zN7GEFjkk%2FwCF7I1AJOIG8Ra6dTFR8yoE0B1%2B5BghZheiaSqkT3gwiL2YfB0laxbHA%2F23%2BbSjRejgBUVwlZjQW4wX5bs2n0s8NX4dgjQlM4q0%2F%2B4bJ648dzPJHZdMu6G7NjCh35ZxN305K%2BuvpDxODv2wZxEQX%2FsBgKtFeXkjkmWwMkBfW8JqFf4t8YBBrme09oLGU3N2RxwdjmNqLdn9MgvQbQu%2BftneRoU0fToZsa6wiwkxUK53lNEh2cpY4xPWmej9%2F3JwqrK9iUTIfH1k6DDoXby79y4fdk1jcbcXk5WazcvH0IDu0YR24pdytj%2FSCvT9kHRFk5ZthDwv4EnzVhUTkKkI7R3gqdriehpjR%2F9ScfZq8gvB3a9Q%2F4KLaD1xSuImOeoVYarcfm%2BUywjJ4BSe0pRa%2BzTm3mgrVpBKxIRe%2FaHK5FYY9f7Q96Br1GKgnRzkk0zC32T%2BBegZ25QId4WYfxPAG0XW5QB%2BdXufEkUZ%2BJW4p0taJtZy4mhgLtnZtUWEeMJD%2BvsMGOqUBdzfc4mrPJvLr5Vo2tUf3JnxOabM9EeEnpE7%2FHbjYcjTGGfCIUUkQyEAxa2mFJjVt0T0680RpWboS37mc5oCTyen575xZVOh%2B6D6diocgkVnGiJkW4coGCmu7OsAKQ7jLmES2teocWt9dpQ%2BZXM%2BkxcBPgeQw9hEUG4A29Rxh0PYUrOQ1Bvi30MJFekgdfgrflYbXBI7p%2Fd9YVLK4j%2FHJGGbOjJHa&X-Amz-Signature=b96864e0bd8985c8d4543749e17c1d3bbeaac5cf35f9632c346900b28e32a251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
