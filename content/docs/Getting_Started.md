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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BORN4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3zmkCfCb8MHDCl6sVJKMFy1Yg%2BwNIsVnUulB0MaD0gIhAO5VBN5uz7CQdtU77N4h8ofMAw7ZNomwNUmj9uU3RmvdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1i1vLj20wqz8F9sq3AOvT0nC6g4NeFbm9I5y4Jsrlr8bP48z7%2BM7cfkWoo7hY4T%2B6K3QW6hA5DWMQp7pul3BYbyvzIIXb3mgiTaUXWakma%2BL1M3YOuMclXV2EmYVMfKuZiLx2T10N2ct0LcxBOWEH51qXyX3r%2Bw0My4nNZctiuoM8%2Fl5q%2FxukLLkC%2Bb2u4LbeTl5WIoIdeiabscEf9vMsZyTyZxB5eieFYSXJ32kvPejanL5ZjRC0XakRBPb9kvuMBT38Z6cUTH3TLji5xl7kNpvrMsL0TvB09mmZ6l%2FXUTGHk%2FVPZGOJWnyivaFD09CG7STy26aj%2FNt5n0u9%2FjdjcoWe7lS%2FVPv74i%2FETmQ0paD%2F0QAYwrQb5TJy7V7E37JHVmVVvPKvhfM07r6h3yhMofKCVhCY7mBqCeloJI1f%2BhKbul8UF0Sk1thg985OEJg1%2FzGMFJxzcMAGt%2Bz04C5BfLOixb0LtEC3%2B2UjN5zTip2boK0VLLWCcLRfv%2BAqLfbT7WFowOMCtzqMzq1JHNVJdF2OkS7z8X7gsJdfL65DAjs3PFmCHnQDxX0pwHHEE7%2FsyQ0EJvmfm0vmHb5ybw4ngk0BARBYsvKOjMJ7i0TEum1Oi7irjt%2ByL1sN9CTcyHh5Y%2BhfOJwHTHrwzD%2Bh9HABjqkAfp1ID%2Bgh%2F3npXuo0%2F3daWEy7G7SFGRRkWIYuNU8BUT%2FOjbzJLvHzJ5nI5XpGXQGYH763mX7rzvP5oAYYz4YYs9BDusqY1qNLuzFoDQGKTyhg103EEMBe718JkJlAI1NZuZvcOYNT%2BCVBNydT6xtzWg2WpQixdynSiTdKivc98aY1r0O3pnR5reLXYIge3XbvluXXSh7Isfq7TiAJUZVvjnmveqw&X-Amz-Signature=fdd9e6aa737c571f050fd90f581ebeaa8252791a5542deaadab70924a99e9ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BORN4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3zmkCfCb8MHDCl6sVJKMFy1Yg%2BwNIsVnUulB0MaD0gIhAO5VBN5uz7CQdtU77N4h8ofMAw7ZNomwNUmj9uU3RmvdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1i1vLj20wqz8F9sq3AOvT0nC6g4NeFbm9I5y4Jsrlr8bP48z7%2BM7cfkWoo7hY4T%2B6K3QW6hA5DWMQp7pul3BYbyvzIIXb3mgiTaUXWakma%2BL1M3YOuMclXV2EmYVMfKuZiLx2T10N2ct0LcxBOWEH51qXyX3r%2Bw0My4nNZctiuoM8%2Fl5q%2FxukLLkC%2Bb2u4LbeTl5WIoIdeiabscEf9vMsZyTyZxB5eieFYSXJ32kvPejanL5ZjRC0XakRBPb9kvuMBT38Z6cUTH3TLji5xl7kNpvrMsL0TvB09mmZ6l%2FXUTGHk%2FVPZGOJWnyivaFD09CG7STy26aj%2FNt5n0u9%2FjdjcoWe7lS%2FVPv74i%2FETmQ0paD%2F0QAYwrQb5TJy7V7E37JHVmVVvPKvhfM07r6h3yhMofKCVhCY7mBqCeloJI1f%2BhKbul8UF0Sk1thg985OEJg1%2FzGMFJxzcMAGt%2Bz04C5BfLOixb0LtEC3%2B2UjN5zTip2boK0VLLWCcLRfv%2BAqLfbT7WFowOMCtzqMzq1JHNVJdF2OkS7z8X7gsJdfL65DAjs3PFmCHnQDxX0pwHHEE7%2FsyQ0EJvmfm0vmHb5ybw4ngk0BARBYsvKOjMJ7i0TEum1Oi7irjt%2ByL1sN9CTcyHh5Y%2BhfOJwHTHrwzD%2Bh9HABjqkAfp1ID%2Bgh%2F3npXuo0%2F3daWEy7G7SFGRRkWIYuNU8BUT%2FOjbzJLvHzJ5nI5XpGXQGYH763mX7rzvP5oAYYz4YYs9BDusqY1qNLuzFoDQGKTyhg103EEMBe718JkJlAI1NZuZvcOYNT%2BCVBNydT6xtzWg2WpQixdynSiTdKivc98aY1r0O3pnR5reLXYIge3XbvluXXSh7Isfq7TiAJUZVvjnmveqw&X-Amz-Signature=f1ba3d49915cbd954c8b222b0f687180ba3f80588de9536b1085064cc18542e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BORN4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3zmkCfCb8MHDCl6sVJKMFy1Yg%2BwNIsVnUulB0MaD0gIhAO5VBN5uz7CQdtU77N4h8ofMAw7ZNomwNUmj9uU3RmvdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1i1vLj20wqz8F9sq3AOvT0nC6g4NeFbm9I5y4Jsrlr8bP48z7%2BM7cfkWoo7hY4T%2B6K3QW6hA5DWMQp7pul3BYbyvzIIXb3mgiTaUXWakma%2BL1M3YOuMclXV2EmYVMfKuZiLx2T10N2ct0LcxBOWEH51qXyX3r%2Bw0My4nNZctiuoM8%2Fl5q%2FxukLLkC%2Bb2u4LbeTl5WIoIdeiabscEf9vMsZyTyZxB5eieFYSXJ32kvPejanL5ZjRC0XakRBPb9kvuMBT38Z6cUTH3TLji5xl7kNpvrMsL0TvB09mmZ6l%2FXUTGHk%2FVPZGOJWnyivaFD09CG7STy26aj%2FNt5n0u9%2FjdjcoWe7lS%2FVPv74i%2FETmQ0paD%2F0QAYwrQb5TJy7V7E37JHVmVVvPKvhfM07r6h3yhMofKCVhCY7mBqCeloJI1f%2BhKbul8UF0Sk1thg985OEJg1%2FzGMFJxzcMAGt%2Bz04C5BfLOixb0LtEC3%2B2UjN5zTip2boK0VLLWCcLRfv%2BAqLfbT7WFowOMCtzqMzq1JHNVJdF2OkS7z8X7gsJdfL65DAjs3PFmCHnQDxX0pwHHEE7%2FsyQ0EJvmfm0vmHb5ybw4ngk0BARBYsvKOjMJ7i0TEum1Oi7irjt%2ByL1sN9CTcyHh5Y%2BhfOJwHTHrwzD%2Bh9HABjqkAfp1ID%2Bgh%2F3npXuo0%2F3daWEy7G7SFGRRkWIYuNU8BUT%2FOjbzJLvHzJ5nI5XpGXQGYH763mX7rzvP5oAYYz4YYs9BDusqY1qNLuzFoDQGKTyhg103EEMBe718JkJlAI1NZuZvcOYNT%2BCVBNydT6xtzWg2WpQixdynSiTdKivc98aY1r0O3pnR5reLXYIge3XbvluXXSh7Isfq7TiAJUZVvjnmveqw&X-Amz-Signature=a2636378aedcc1bf51ce7735acf8cf346f1315b3a6ab0a440a14f027a653507a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGFNMP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID4mUEN4YISG68ura6Ky29%2FGsNT%2FXgcbRDO2XBwC2toXAiEA9NHR%2B2TtmhQolanKWoLEb%2F11CPjKpw1i2YZFE%2FxQhFUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcSeCTjqb1i93Qr%2BircA6wPFJXTBVmhjghrCWqaSaFcpH2LX2wnjqiZdREljx7cs1Y0yICVxUpFk89ylMVVm8%2BnIYibMSpO5zwiq9wRDMThf7ApOAn0mqmhTBQkQx2SrOcTEFGabLLgiw7ra1NvjlU9vfwJOgP9Xe9gF%2B3fpAaToyXU7wbs%2B0LqEgMLwsNO9lT%2FdIJa8ZQl%2Ffy%2FcvpSqjR2nLv3Nb2lQwdWZEsY%2B692jJJ9XGzBNdU1sAOCvLU4CA0rQ%2BQB28DcrwaqMIb6dCbcs7FvEnZQAGZxQMnSwI893vl1DFCg1MxnSNFv0LpE%2BykZQEj6h23IwXDG6umqWlVM82s1sMo0XDJ4j2bq2hClo4ucpIoAKhXM1ScFJTfyAZL4ML92wRftZQvHoJotCvJGt1%2BvWjuKa2NAlxyQhw92uQDXw%2FBf5u8uY9MPluWCNEOrOyd7etKinCZIrVlF7sQ1pE7Z9TFYyhHOirVeoqIoqcERSFT5nRgzlW12Y2dLiSKpTv8GinSXvGUPaQsGTHkHLtC5yIUspgYt9dn%2F8AzM4cAnb6GC%2FWayr0nLFE0rtPhRdxjojJl0EhaXNzXuPk4or59RkNdCFQgnizMHlterimO6ZXUA5lSHGohWHKCVUG08drzdBc8hJo24MOGH0cAGOqUBuAe4evyLGraD%2FsZn8PH12W4WTnETDOI6MijfK2P6WmGBD%2BldJJ7TYJiLOGHiti8cipy%2F28GgBIM8vgPP3KZmU4Sv00%2BNcq3Lj%2BkAkdPih276i%2B6tGqRi%2FPx27L%2BoqQdEJ8KkPFZna42SNLmySAoMEaSEJsoL5JrEke2E1G1uzKC0uZrjFlrvfP9ITjioYDRvj4JwttZrAZnSCPu7dZPV%2B4b5HBy%2F&X-Amz-Signature=268e5d829cba568841884052b5e6976e41524de5b13b540d55dc32d77ce8a8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUSJ3E5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICZJ%2Fy%2BmtevwOXMNJl11JU13N2N9l08wW11HJZcrliF2AiAlgdwQC2V4q1lKrvXG0XWqY5fwMq7DdOBQ6wPe%2BcUt9CqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUbWSNyEolD7Hp22KtwDEJwrinKygCT2HuyfBpqMVA9zShsr8NZ1Vqn%2B71DQzTx%2BS99eKO9p2EmcguDZXpQM96hHkRLPSvLwFZdI7HAiCUDgQPm7Pj7hJ18mSDD1D0E6CQURGRzGPuG9uzm7NsyNTi2ina0L%2BmhH4HhrrXidSWWHF2zv6tVdN%2ByvKHl0hrtrgYmMg600V6dYXYrijwzexHKC%2FTCT25N3OeAo9HxGp%2BkpdR%2B24v%2FpAfF%2BvbuzhZeNIeP0C3wpwcQ39u0N%2FMVvJv8Lkt6fH3WFR9ycDYbKi%2BsuAobo9vKuNGMvrMLZiTOMaXG%2BZVmPubizhU6YCQkQ8ItTp%2BAl2DzU%2BWNAlmXGzDmPm6yi30eQZEthPL1MmOjw7d2pmmI%2BHvqp9iUU2U87eEuT0okJL2FB2REMmE6icvrS4CBFm5sadIG%2BPzXvwrTRw0A%2FTsrBdXB56b6qaymF3Ro1F%2BeKRFLSMHIJnFaCxrM%2BRNl%2FzE7O74N%2FJoPfl7iB%2FGoI1TNgKd7ZvN0FxauPZ5BLv7difvaV0H7EyyVWuvZp%2FQiaPyCRBGQnej1oUq1OLF7gVqg0o7DnwDQ1i%2BdJXS%2FiQwokH4c9x9Sek0VpsP3rVRUKjP92HQN6gVE%2BGJi%2FuuEOAaZCfM8S9aswzofRwAY6pgF5LCcWdaW8JoQMU2ngUbpam1wlSmQvEyE6x%2BXxZ9jzMGsqXTgLZrlD5ef%2BmrmN5H7qnBRK7wSYDj23rHy%2BgCcAfvVknLQyYg7G9ih%2BoN358DuRVuX2g90caHAD76%2FrBFicVI6geA1E8DkDm4u31aOlb1R0zeHA84z3lEzYkMv7M0iWe52GRJx2sNlG04cQBvJil285HnsmQYC7ec1FifTTQO87UqKh&X-Amz-Signature=d03efe3ca344df1e177f3a967a19488362b7a6bf96c1f830f1027cbd4d118edd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663BORN4W%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCo3zmkCfCb8MHDCl6sVJKMFy1Yg%2BwNIsVnUulB0MaD0gIhAO5VBN5uz7CQdtU77N4h8ofMAw7ZNomwNUmj9uU3RmvdKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws1i1vLj20wqz8F9sq3AOvT0nC6g4NeFbm9I5y4Jsrlr8bP48z7%2BM7cfkWoo7hY4T%2B6K3QW6hA5DWMQp7pul3BYbyvzIIXb3mgiTaUXWakma%2BL1M3YOuMclXV2EmYVMfKuZiLx2T10N2ct0LcxBOWEH51qXyX3r%2Bw0My4nNZctiuoM8%2Fl5q%2FxukLLkC%2Bb2u4LbeTl5WIoIdeiabscEf9vMsZyTyZxB5eieFYSXJ32kvPejanL5ZjRC0XakRBPb9kvuMBT38Z6cUTH3TLji5xl7kNpvrMsL0TvB09mmZ6l%2FXUTGHk%2FVPZGOJWnyivaFD09CG7STy26aj%2FNt5n0u9%2FjdjcoWe7lS%2FVPv74i%2FETmQ0paD%2F0QAYwrQb5TJy7V7E37JHVmVVvPKvhfM07r6h3yhMofKCVhCY7mBqCeloJI1f%2BhKbul8UF0Sk1thg985OEJg1%2FzGMFJxzcMAGt%2Bz04C5BfLOixb0LtEC3%2B2UjN5zTip2boK0VLLWCcLRfv%2BAqLfbT7WFowOMCtzqMzq1JHNVJdF2OkS7z8X7gsJdfL65DAjs3PFmCHnQDxX0pwHHEE7%2FsyQ0EJvmfm0vmHb5ybw4ngk0BARBYsvKOjMJ7i0TEum1Oi7irjt%2ByL1sN9CTcyHh5Y%2BhfOJwHTHrwzD%2Bh9HABjqkAfp1ID%2Bgh%2F3npXuo0%2F3daWEy7G7SFGRRkWIYuNU8BUT%2FOjbzJLvHzJ5nI5XpGXQGYH763mX7rzvP5oAYYz4YYs9BDusqY1qNLuzFoDQGKTyhg103EEMBe718JkJlAI1NZuZvcOYNT%2BCVBNydT6xtzWg2WpQixdynSiTdKivc98aY1r0O3pnR5reLXYIge3XbvluXXSh7Isfq7TiAJUZVvjnmveqw&X-Amz-Signature=060fa073daca9e364a869621374628b5f58524d956583433ec7614beac9ef72a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
