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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6WLBUH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDPoEOJ1Y6jDOXS0N4Hwkt%2FQRNIxhqzUTiygL2XhIk2HwIgXwk4jO84Y4wHy5ygrq1afGUckTRRPR5%2FGiP0Il4o9tcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfcE7sSQZ4aQZlb4CrcA2WE%2FwQXdje5UsmZXlETJT4G6xDZ0As50vY%2FVBijDV%2F6LHMsFYdX6P%2FnRSYgd%2FrI9LINljSBpKTYEPObyvsnPdLgyTyrWbBTzE64%2FzhMIYjmTexn9ivqvXvtUrzKituqOIMK8ua0Oq1j27eAH3AnCLYWDLaXXp5iTwq7quobuNmLYrGBMvEn39PNZl%2BH2FgM1QwEgXQMBQkn%2B9IhAYSmL4uWXhJcCzUfKIrc04KgNhSRTJH9q9JaXiAuqJD81AteqnN8hQy9FOJYWKs6F90VxEo5sHZqzACZGhCQm3MQ1h3njfHyBXStMTdVa7AvXoIDTfJEXPl7yAlEUO2vkw0pw8Mk9OmASGnt%2BqoKbkaT2X%2FmocdZaKDz45yOreZHbACBnYIe6ddCid7NFUb8lHbreu4D4lKIMc3T1GsHccGIMsXqS2vUndhmxxUQTuYGszUIl2DTMt3STmWkXOs2i64hHXBh4iaAwCsFK2MzDyR4rxzjRqHrzNMdCNdZmPhO2DoIVp5MWFodx7SldpH8%2B4M48CRx0XCO7Katoe64TaE%2Bi0xEF4PqEndCaIdXOUQw6oUOBcA9lGzgk98lv7hd5Q%2FBhMTosx%2FyY9%2B9DVbyAbMBe%2F%2BxIneepthq7mCaomoOMNXr7swGOqUBzyVDrBM4GebjasIKFETuBtq%2BC%2BuHzBFgRiMAbkNChxsWwEhwWWIC2KzbyurJ67fuoCgdiwHWJFRoufKozn9T5Q3B80aIcoxHZv1%2BOInt5xgbpbPqCcWZScWRquR7Rv8zcTc7iu9x2AHLNjgABrC%2F6fJHWpQ%2FM2qYU0tDxlEQkdROFVNV1y6sKPXY2s8rg0yr%2FcrJxBC48Ca7lWBUGOwFuxBKjp6v&X-Amz-Signature=fb1bfd474d1d47dc345104cd5c2764567536fcfcae92eb41845dbf222b3d5dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6WLBUH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDPoEOJ1Y6jDOXS0N4Hwkt%2FQRNIxhqzUTiygL2XhIk2HwIgXwk4jO84Y4wHy5ygrq1afGUckTRRPR5%2FGiP0Il4o9tcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfcE7sSQZ4aQZlb4CrcA2WE%2FwQXdje5UsmZXlETJT4G6xDZ0As50vY%2FVBijDV%2F6LHMsFYdX6P%2FnRSYgd%2FrI9LINljSBpKTYEPObyvsnPdLgyTyrWbBTzE64%2FzhMIYjmTexn9ivqvXvtUrzKituqOIMK8ua0Oq1j27eAH3AnCLYWDLaXXp5iTwq7quobuNmLYrGBMvEn39PNZl%2BH2FgM1QwEgXQMBQkn%2B9IhAYSmL4uWXhJcCzUfKIrc04KgNhSRTJH9q9JaXiAuqJD81AteqnN8hQy9FOJYWKs6F90VxEo5sHZqzACZGhCQm3MQ1h3njfHyBXStMTdVa7AvXoIDTfJEXPl7yAlEUO2vkw0pw8Mk9OmASGnt%2BqoKbkaT2X%2FmocdZaKDz45yOreZHbACBnYIe6ddCid7NFUb8lHbreu4D4lKIMc3T1GsHccGIMsXqS2vUndhmxxUQTuYGszUIl2DTMt3STmWkXOs2i64hHXBh4iaAwCsFK2MzDyR4rxzjRqHrzNMdCNdZmPhO2DoIVp5MWFodx7SldpH8%2B4M48CRx0XCO7Katoe64TaE%2Bi0xEF4PqEndCaIdXOUQw6oUOBcA9lGzgk98lv7hd5Q%2FBhMTosx%2FyY9%2B9DVbyAbMBe%2F%2BxIneepthq7mCaomoOMNXr7swGOqUBzyVDrBM4GebjasIKFETuBtq%2BC%2BuHzBFgRiMAbkNChxsWwEhwWWIC2KzbyurJ67fuoCgdiwHWJFRoufKozn9T5Q3B80aIcoxHZv1%2BOInt5xgbpbPqCcWZScWRquR7Rv8zcTc7iu9x2AHLNjgABrC%2F6fJHWpQ%2FM2qYU0tDxlEQkdROFVNV1y6sKPXY2s8rg0yr%2FcrJxBC48Ca7lWBUGOwFuxBKjp6v&X-Amz-Signature=3b8b0fe2a1d11119b53c6f35663b6bd14a8cb76f3c2b9b2af2b45611039a5bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6WLBUH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDPoEOJ1Y6jDOXS0N4Hwkt%2FQRNIxhqzUTiygL2XhIk2HwIgXwk4jO84Y4wHy5ygrq1afGUckTRRPR5%2FGiP0Il4o9tcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfcE7sSQZ4aQZlb4CrcA2WE%2FwQXdje5UsmZXlETJT4G6xDZ0As50vY%2FVBijDV%2F6LHMsFYdX6P%2FnRSYgd%2FrI9LINljSBpKTYEPObyvsnPdLgyTyrWbBTzE64%2FzhMIYjmTexn9ivqvXvtUrzKituqOIMK8ua0Oq1j27eAH3AnCLYWDLaXXp5iTwq7quobuNmLYrGBMvEn39PNZl%2BH2FgM1QwEgXQMBQkn%2B9IhAYSmL4uWXhJcCzUfKIrc04KgNhSRTJH9q9JaXiAuqJD81AteqnN8hQy9FOJYWKs6F90VxEo5sHZqzACZGhCQm3MQ1h3njfHyBXStMTdVa7AvXoIDTfJEXPl7yAlEUO2vkw0pw8Mk9OmASGnt%2BqoKbkaT2X%2FmocdZaKDz45yOreZHbACBnYIe6ddCid7NFUb8lHbreu4D4lKIMc3T1GsHccGIMsXqS2vUndhmxxUQTuYGszUIl2DTMt3STmWkXOs2i64hHXBh4iaAwCsFK2MzDyR4rxzjRqHrzNMdCNdZmPhO2DoIVp5MWFodx7SldpH8%2B4M48CRx0XCO7Katoe64TaE%2Bi0xEF4PqEndCaIdXOUQw6oUOBcA9lGzgk98lv7hd5Q%2FBhMTosx%2FyY9%2B9DVbyAbMBe%2F%2BxIneepthq7mCaomoOMNXr7swGOqUBzyVDrBM4GebjasIKFETuBtq%2BC%2BuHzBFgRiMAbkNChxsWwEhwWWIC2KzbyurJ67fuoCgdiwHWJFRoufKozn9T5Q3B80aIcoxHZv1%2BOInt5xgbpbPqCcWZScWRquR7Rv8zcTc7iu9x2AHLNjgABrC%2F6fJHWpQ%2FM2qYU0tDxlEQkdROFVNV1y6sKPXY2s8rg0yr%2FcrJxBC48Ca7lWBUGOwFuxBKjp6v&X-Amz-Signature=0612f9ae12bfbc3945146a1569026878987669b8b543625c50683eb6da984a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBGBC4TW%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEqot4ho0Qu7RaqdEdAPwTp%2FRSGYN75dAfuo9bKm%2FdRrAiEA55ybW1XWRJbmrzr8xE3kiyeuncxptzjZ17a1kOO%2FnEIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHElx4cO7d5v6iPFpyrcA1x1qhbn2d%2FM55s3OZvyGqRhn7CykB9deGiAEueq5HxkP5%2FOLXWnnYuC4zIl4E2F7ooo89bT8e4nmpzRDnSpzW2rgiu2T20VKd9poTeoppfAk06URx5cwgSX37W3g4267aeHTes0yjMHUgMVa9Y9oa25nSoV1oZaiK9X53HBU3r3aj0R%2Fx47KjJzif%2Fl9Jsuxu8zk49rKHghEHkT7tkKf3iNe7AJfZidFsTnYwIWAbm9ACfeVmpH2LQ4uvvVKhMBWVXvFP9QbnXXS00SJiyswyHMUX4Y1AajVUgB%2FtcR%2BLUf9q9ye%2FqQKhIdquOWLlEv%2FKO2ImqaXaFGJXtmVQE%2BSpkGia%2BDNIs81zhl6e6G%2Fh9HYILjfzfkbiOP2K4OhElv9dcePZ0EXE0Fbpkj5DrwBbOTlSEcA45B70Cr6QdQl6U%2FKcbdTkUepcvzC7Tl7TrIzykhImGpzS%2BvDOQ7OWgrEusLGSW86RRRWpQjIsjCBLHBUUl7yBqsHcpIrtJVN%2B1bvv%2BODiMYuukzIXHeyKFTrfW6CGeIh3RGTnSOhZxhHi1%2FpCEs%2BXPaHJ0UQVRyC0wKOaFixwCzKyZyHD%2FYXTds8DLyXIu%2BL9uevQyLFoVy1fG6cJ0JS8axTQGmcFLtMKnt7swGOqUBJi6u4E1pq6QFYBk41W4d9ROUy2vzonJiNRNEag7LK5mbvxtYSIbsVzaQQKE5FlLPxgPj7YwsRS4YyqesbS6YS5jZzdQX6O6r%2FN%2BAzAdy0S5unJH4oSEXlgmXvPIgb%2FJhfVIHH6NpGL8vMMorcW%2B6jq7ixN6URGlGeb4y35IS%2B5ZAMo2EsSSCbgKQaVSoxWT0mZQqW9OV10Dm7gJemwm5fgynlkxb&X-Amz-Signature=7b5b88a493112da89ff9e9ad822cc86fe055d5a0e26d3426d24552a854718db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJXMPJFX%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIE3OvUCgL1h2MTHFDe1nQASfZyOVEuX%2F3P%2FSaSLWMOB1AiEA%2Bm2t7Cg0gj6v2Pdya17E5UlR6IqdWLffOTi%2FTNzhZ2gqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGygZ76ZV2nFjuNJhSrcA%2Bo5a03%2FQic8DAGSFky7OglvdgA2pJtw4UIib5fG8RhyHuS9a7Bvj69TKsnv7Oz0l%2BgMiOy1TWdRqxixwnHSQ1zV8NKbIefit4brBiuS4xxS0c0Jb%2BrMuwzfpwnHRKjaMlH7SZeRZXaeRVipKcmMIlYyZk5pEGLv9L%2FhOH%2FhEgDbcKYysLUDHklJ5ls%2Fmmcv4GJcJMnMncU%2FcNT4xN%2FERrnXuBzhFJEx3kKzgLSvuwj8qNMhGB6DOsSlKzcQpx4BtINH2iMcywbsxibq2s0l8574rY7klicLWFoPTswadkxt9aNr6kHENooSgA%2BagfY9xPjnUa1e4NNqZAhFH0PXyh8lCXRB0NxsI9W4gMWurnkL7OwTHXo%2F84X0vP5unS0j0OmHR4zi%2F8%2Bs4lc5atrRYjMkfoJ7sx2JJONF2Eu3l%2FzZw66A%2FXzbzSfTDRMB7s7ENhVF4g%2BfQSrA3DLl0r4xVUAVi6jsJ7YuF4jFwbDQzpAxVA1tUIgHhFt7WpEYraQ5DcDakkoIPOSrxA6GhF5BqtvoO5HZZ4dev4SjbaA7wABcfezP26W8ASnP3XTH1ckt3HpZVCu1nxaUhiUC11PcN9d3H3WePbTtRuQraN5thDTmSR9bz9PSZ7fG6cHQMNzr7swGOqUB1WB1nu288pgznEnpRrTa3j7473lWBFMsuIIUjQu9iQaBMNqtgqQPlovevXs14eIkAjYqgdeQ0xm4YCfp%2BLg9PMSP74yLfr3vaOX%2B5B5MyJCSNptKJ9yAdF0V57a6xYJyO92MvuKqfssrn6%2BOdXOa2atWvbBCCMhEbipu9cQLk%2FTkmfunJtNWCr4NXuAwG%2FZP34vPKccjdJre2gNKXwFvgN4sasBi&X-Amz-Signature=3bb7f459305ff1b3bf85b2285672d3313096c5a5b3bb77675674c32f1d03044f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6WLBUH%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDPoEOJ1Y6jDOXS0N4Hwkt%2FQRNIxhqzUTiygL2XhIk2HwIgXwk4jO84Y4wHy5ygrq1afGUckTRRPR5%2FGiP0Il4o9tcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfcE7sSQZ4aQZlb4CrcA2WE%2FwQXdje5UsmZXlETJT4G6xDZ0As50vY%2FVBijDV%2F6LHMsFYdX6P%2FnRSYgd%2FrI9LINljSBpKTYEPObyvsnPdLgyTyrWbBTzE64%2FzhMIYjmTexn9ivqvXvtUrzKituqOIMK8ua0Oq1j27eAH3AnCLYWDLaXXp5iTwq7quobuNmLYrGBMvEn39PNZl%2BH2FgM1QwEgXQMBQkn%2B9IhAYSmL4uWXhJcCzUfKIrc04KgNhSRTJH9q9JaXiAuqJD81AteqnN8hQy9FOJYWKs6F90VxEo5sHZqzACZGhCQm3MQ1h3njfHyBXStMTdVa7AvXoIDTfJEXPl7yAlEUO2vkw0pw8Mk9OmASGnt%2BqoKbkaT2X%2FmocdZaKDz45yOreZHbACBnYIe6ddCid7NFUb8lHbreu4D4lKIMc3T1GsHccGIMsXqS2vUndhmxxUQTuYGszUIl2DTMt3STmWkXOs2i64hHXBh4iaAwCsFK2MzDyR4rxzjRqHrzNMdCNdZmPhO2DoIVp5MWFodx7SldpH8%2B4M48CRx0XCO7Katoe64TaE%2Bi0xEF4PqEndCaIdXOUQw6oUOBcA9lGzgk98lv7hd5Q%2FBhMTosx%2FyY9%2B9DVbyAbMBe%2F%2BxIneepthq7mCaomoOMNXr7swGOqUBzyVDrBM4GebjasIKFETuBtq%2BC%2BuHzBFgRiMAbkNChxsWwEhwWWIC2KzbyurJ67fuoCgdiwHWJFRoufKozn9T5Q3B80aIcoxHZv1%2BOInt5xgbpbPqCcWZScWRquR7Rv8zcTc7iu9x2AHLNjgABrC%2F6fJHWpQ%2FM2qYU0tDxlEQkdROFVNV1y6sKPXY2s8rg0yr%2FcrJxBC48Ca7lWBUGOwFuxBKjp6v&X-Amz-Signature=1063b4ce78203f256c107f1ba3041bd5fc9ac7428b40032561f81d23c5e5864b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
