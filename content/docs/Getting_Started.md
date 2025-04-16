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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MCBWV3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChoVZnepSsLZH48Rptoafp1yYSIVzkPiqyjjr%2BQ3zPTAiEAtbNSp91lteCBxS%2F5h1EL7fWY7y1fYXJsDgGFRkRsfx0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOY5J95vRgTmBWjmNSrcA8DJcmJ4XT3%2B%2FtEfrhcxMGU9EvQtlmVtXfNlf7rDgf2tbPoE0gqDd38uQwL89h2C05R%2BtlYsBLyzXZkBFBTnnLZhVpnPTj2rCPq281Jxjk%2Bxylr2o5CviSmcztpgXYB95uwLvvnDS44UMSVxEdkWX64iKgXCA0fw6Sny12JixCIfyoRWoeK%2BKLMxMZwMfIY3UAjQ2jQqo65oC56D1NFkCTO0l3O%2F4IYT6Va049AnFGJ47jNgYLlbwOWYKdTlMWQaoKT6ZxVyIhr6MZzx7BcBAQl5ej6E%2BhSjd%2FM3M6cWO4NhvmbCGAZcxXQPC63apB4oGI81zcFoDk2eQQmd%2BjnRCbRNfZ2gfxjxc27ZoX7k%2B5ofF5%2BBJBnbW6bu0pAvPHtnLV%2F78CyYG3z3l7jdW3g1VpYqdUT%2FKzvjZtpygeFQl%2BufGpKOCft263%2B%2FUx%2BdyHhhq3B5k6sIZWpwybVj6DPvYniGT7T923MqharF%2Ff0eWes6%2FgvElnVjCDismSV3tMWzV4aiW0hJW6XiV9TBo4xkQc77rWqu%2Bo6%2FSGjR3BJUEK4rBpHc17p0RzPC0mRTyhLamqq0%2FEa6n1sH6xhFmu1NAW5gjtIYDEiL0P7zOl%2BXIqPiW2av%2BlDDAkmN374wMMfg%2Fr8GOqUB6KKI4T9rCuwKDRYfDFn05i%2BubWR74KXc4KAIYE2%2BhyVsp1466652TEg%2BDaFyGzn2bdDTCLmppi2FF9TEc0mTFshQcKtzJ5PWE5lk78w9tICK3m17nkEUlSqwF2UAZh5PmI%2F%2BcXCbnY%2Fo6FX7VcrpatluH%2B1%2B%2Fa8f70bMk7s%2BdVh4t03W%2FtvgluAt%2F6JzcwTtHcTh2kCMS3XQFJwlMGMr5EjmYsm9&X-Amz-Signature=a584584774638a9bac55d1ba8db5fc009e50bbfee3e5f1fe6d3f27223597300b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MCBWV3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChoVZnepSsLZH48Rptoafp1yYSIVzkPiqyjjr%2BQ3zPTAiEAtbNSp91lteCBxS%2F5h1EL7fWY7y1fYXJsDgGFRkRsfx0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOY5J95vRgTmBWjmNSrcA8DJcmJ4XT3%2B%2FtEfrhcxMGU9EvQtlmVtXfNlf7rDgf2tbPoE0gqDd38uQwL89h2C05R%2BtlYsBLyzXZkBFBTnnLZhVpnPTj2rCPq281Jxjk%2Bxylr2o5CviSmcztpgXYB95uwLvvnDS44UMSVxEdkWX64iKgXCA0fw6Sny12JixCIfyoRWoeK%2BKLMxMZwMfIY3UAjQ2jQqo65oC56D1NFkCTO0l3O%2F4IYT6Va049AnFGJ47jNgYLlbwOWYKdTlMWQaoKT6ZxVyIhr6MZzx7BcBAQl5ej6E%2BhSjd%2FM3M6cWO4NhvmbCGAZcxXQPC63apB4oGI81zcFoDk2eQQmd%2BjnRCbRNfZ2gfxjxc27ZoX7k%2B5ofF5%2BBJBnbW6bu0pAvPHtnLV%2F78CyYG3z3l7jdW3g1VpYqdUT%2FKzvjZtpygeFQl%2BufGpKOCft263%2B%2FUx%2BdyHhhq3B5k6sIZWpwybVj6DPvYniGT7T923MqharF%2Ff0eWes6%2FgvElnVjCDismSV3tMWzV4aiW0hJW6XiV9TBo4xkQc77rWqu%2Bo6%2FSGjR3BJUEK4rBpHc17p0RzPC0mRTyhLamqq0%2FEa6n1sH6xhFmu1NAW5gjtIYDEiL0P7zOl%2BXIqPiW2av%2BlDDAkmN374wMMfg%2Fr8GOqUB6KKI4T9rCuwKDRYfDFn05i%2BubWR74KXc4KAIYE2%2BhyVsp1466652TEg%2BDaFyGzn2bdDTCLmppi2FF9TEc0mTFshQcKtzJ5PWE5lk78w9tICK3m17nkEUlSqwF2UAZh5PmI%2F%2BcXCbnY%2Fo6FX7VcrpatluH%2B1%2B%2Fa8f70bMk7s%2BdVh4t03W%2FtvgluAt%2F6JzcwTtHcTh2kCMS3XQFJwlMGMr5EjmYsm9&X-Amz-Signature=d4196498f6d3c7d385dec9a98c3e1ed61de8bbf1eb51d6de02b80d387724b13a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PJ4QWHM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPgPs3V3ewhexPvbJ2L4AHFFdfx%2FWxVuKoqreXFenrpwIhAIdsLe47Jt7WFd3XqhdUEQGFBxGc7JAuzv%2FD%2F1fA314oKv8DCEcQABoMNjM3NDIzMTgzODA1IgwZUsM6AiOVvAJ2f3Mq3AMZRtoChvngvzWyYcB5cAB2cIs1tpWrvKWlb8CBm9fzHUO2sP1xqlfxb5CvXzb86%2BzeN%2BKXPvjIdKTfImC7LCXWj5VR%2F3Gz9CEDOuEzS7x5aUjN5eWecLkqnGt6W4TFFiYkdUvMgSC%2Fr%2F%2FslbOcU3y2S6h38xHA09f6PEXurhIcrLSH0kbwN3d%2BzXsy9lUPN%2BVR%2BG7EpZPjfiJC14l06BDzd%2FHb0wFHUQKWIXORpLr%2FUWp%2BfSom7JuZj%2B3JLP2bXHz6HxSSKSYRG7m960C2DZJxHgWpDqg2EqP6Of6Geuc6kEHbsq1NarMRW3VlVe%2Ftfyy4YEojYAnQZyM3x7dklZm7wPWAms%2F%2BSLrkvPgBaC9PP9bSfHxhZjlpTHwByBYOy%2BPdQ3Qz0ujpzT94aBAyS7MvY4C6lwMOaR740p1lNT%2FL1EeDS1zyz%2BSoxK0gzWNKcfjNF862TEkBGOh17V%2Fuc%2BlCrbChuolBe9nLiF5ZoYrKq%2B3v1u1PMd4XxuwbMmBkSKKHYIQNex9ogSXzGHqY5YXajGQ58GEiUpst6Kny0jLdvcMj%2BfzAy8Kkg9mVlGJ%2FgDlO9y3Rz1ac3ZJnLjIZSld9u59tPtIX3AsIeuBYoqZlJtkZ4wvS4eMi3pgixTDI4P6%2FBjqkARkLxAThVgPpS%2BJkknLkcU5pPA%2FlBxMiIHqDWAHXC6c099ryLec%2BSWpGH0R3oDwOgdq2Ij5YwAQJHezF2%2Bj6Okzpv4X2lw9bZ5XCQx247cMa2tj03MJ3nmEYiSsY4aTZjD8fw%2Ftn6xbAqtXRcmVGlGH4Bz7GWxHENnmf0RBHf88%2B%2FngHa6Y1xTWAWNhwmDEkPDjQWZONUFtQLm24Klx8jG17Rmcg&X-Amz-Signature=b7ec0f056f04359c78e3ca7bc57414db761f5520e348bd2e667b123ae5e9b743&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQBF6KDT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMhkixi4guVmTexpA9yY82Fnwv3B9TjPn81bz7H%2BL70AiAh%2BarIPhRPCTrTbzfSdd7N8ISL7HXsXM41A0N026D6%2BCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMYTHgvErVP%2FFhKDzfKtwDCTgXMvUWkAHXYtJNKMvQIoYhv0VkZMN9t7YNnejba%2BOpxeEXbTzBG%2Fa%2B0o4XCqQIPFFRQU4JAirGTmjrmC2GlUcSWJpJXuV7v6KO8VL2NlGbyB1ERFbIWbPqbtWXyIlNTCATVndx%2FmJNwoFkHJCgmihvgc6MRSJbIwcm7U%2FWgFXWuawUQsAi%2FkbHnpNMRFLD4Lnu98JUpmcxm61Hd%2FOstsXIkNGtj4j0g6gTjCVH%2FfVQZKfvTN1VUBy%2BGTQlKffa6awwYWeJkXorl6yVFD0%2FmmIJ2IV8qamqHSnWFIopzxdAMSB0yNcXeo6Z1eQ7JdDljVsPPHuKbKlVl%2BOxVoaUdvJMQDNg7rZwLzEsKQHS3O9C4lQGM2h5gmfjZ6stbeHWz895yLER74h7H2vwO5xs05GbfJhJGkoKvs5VCCvPLJ%2FVfl715ghBVZv5YduQUGb7ryFBNPi0GMn54aNmAdtzdRTMkuhkn%2F%2FOb6j8TeYVRyKmttxoleljNDnFem47TeCWtHpSacN%2FCZr13jHu512kavgyGfT9Y9jt%2Bi%2F13odmri0%2F5ONIGZsJPGDxlWOCuTYPfZVkzaAEtBA2HNdAAem2I%2FIzYibAlly%2FG3EBMTCnw%2FFBwVGuGyoDM9Caa94wgN%2F%2BvwY6pgHlVhAwDmjVZz6HG2OUP30DKfiMYMaDneQOjoDkHcLg01vVBlnfxDP6hiKbwb%2FGTMenvIrduRE0IaxLZNFFjQZfo12IfpBSjMhTnkA0OSA%2Frja3I3ZGsHcHEXMET%2F6csQDtg1hdagPi%2BLC3Yb%2FKbhKKNhLcP8GnSfIpPh3g9VC38KBKD85j%2FaQJdb%2BO7p%2BBnXReYFh6xVa43KVX%2FGiRp6tjArxlZFff&X-Amz-Signature=98a001e76522a5bc5dfcade867ea2ef3d9a0d45f06f7beb313e63a79b3311385&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622MCBWV3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChoVZnepSsLZH48Rptoafp1yYSIVzkPiqyjjr%2BQ3zPTAiEAtbNSp91lteCBxS%2F5h1EL7fWY7y1fYXJsDgGFRkRsfx0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOY5J95vRgTmBWjmNSrcA8DJcmJ4XT3%2B%2FtEfrhcxMGU9EvQtlmVtXfNlf7rDgf2tbPoE0gqDd38uQwL89h2C05R%2BtlYsBLyzXZkBFBTnnLZhVpnPTj2rCPq281Jxjk%2Bxylr2o5CviSmcztpgXYB95uwLvvnDS44UMSVxEdkWX64iKgXCA0fw6Sny12JixCIfyoRWoeK%2BKLMxMZwMfIY3UAjQ2jQqo65oC56D1NFkCTO0l3O%2F4IYT6Va049AnFGJ47jNgYLlbwOWYKdTlMWQaoKT6ZxVyIhr6MZzx7BcBAQl5ej6E%2BhSjd%2FM3M6cWO4NhvmbCGAZcxXQPC63apB4oGI81zcFoDk2eQQmd%2BjnRCbRNfZ2gfxjxc27ZoX7k%2B5ofF5%2BBJBnbW6bu0pAvPHtnLV%2F78CyYG3z3l7jdW3g1VpYqdUT%2FKzvjZtpygeFQl%2BufGpKOCft263%2B%2FUx%2BdyHhhq3B5k6sIZWpwybVj6DPvYniGT7T923MqharF%2Ff0eWes6%2FgvElnVjCDismSV3tMWzV4aiW0hJW6XiV9TBo4xkQc77rWqu%2Bo6%2FSGjR3BJUEK4rBpHc17p0RzPC0mRTyhLamqq0%2FEa6n1sH6xhFmu1NAW5gjtIYDEiL0P7zOl%2BXIqPiW2av%2BlDDAkmN374wMMfg%2Fr8GOqUB6KKI4T9rCuwKDRYfDFn05i%2BubWR74KXc4KAIYE2%2BhyVsp1466652TEg%2BDaFyGzn2bdDTCLmppi2FF9TEc0mTFshQcKtzJ5PWE5lk78w9tICK3m17nkEUlSqwF2UAZh5PmI%2F%2BcXCbnY%2Fo6FX7VcrpatluH%2B1%2B%2Fa8f70bMk7s%2BdVh4t03W%2FtvgluAt%2F6JzcwTtHcTh2kCMS3XQFJwlMGMr5EjmYsm9&X-Amz-Signature=cbfb53314529906924e671d01a502ef6e3604cb2fd60c463a08f851506b3ff99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
