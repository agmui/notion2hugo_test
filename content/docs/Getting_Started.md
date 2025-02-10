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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRFXABM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyMN82Gc7ovidiK7BseOOYdK5mLiOaLmgjcNFX4RgyUAIgRhXYku0%2BfHuFNmP8%2FcvIti9Wc07AIoTmNfA0fYJyxGcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFSqFnuF3pZX29kwircA9fFdlLkmG5b2YMRZhG8RWy8VHAoofS2VrU0ToT17JnJBXHse0H%2BiXoGcMEdpTz4TneMV%2BsWBIl7102XshdS3kjIoHKBT6bnGgyoAa7HWWZ2aF5lAzgJTudIGyyOjZ04mx3icO%2BfbcW0YybQuqyiezpSpNb5teynsuGYlKKdkLGQDank3ukpphVEBY5GChVaSJd55ERm9KUm6rtz4EMDpTM8TSOOP9BHQCipHKvgd1zU5UHjtUpAKYnMYJBJTZm7CIpCoIBbjKi8Rye8Bup5M0ZcIbXk%2FdSr2K2l%2B8Ic1sz4aGDcyG1uD6Xx8R7HEfWgtitxNRONhOE4UqwpOqdZzWQ7AxCPobbqZDm4JA0hTZIiU5Zmr1fGjQs0Eazb3GeylZon1Rnyrks1XOSQ2j37t59kbDd3czL%2FlJQ%2F0PDZByBPCSfL6uAICdC1CeRdUH2eh%2F9jLyOlglkueW8vkvNIQhMRv1NeDIxoq%2F%2B4f24uOFnazWNggrPyXtmUJT6ldvpmvubWPUm8B9bxik4yq7DFdURjBGZVb%2FTnwVThzjDfsDw28JqPQ%2BR9Fi5MBCiUuPqyqam8XZKDHCWGwDqazlVaRck9PgTGlOcf%2FLy7MuYCukAYZcV%2FLNivs9xLNF9RMKWEqL0GOqUBSA%2BTcsC8ZnRKiUEwNq9iwgjCusMOiI%2FHuMrA7dqEWcUTFY99Mkmk46ACWHRfmlo1PAKpi%2Bc6mhiIL5DWJrnemqUuUgl41niK3uCYsq4SrLvcgeTUHa6sVtRJzxuzc9kaASiqwH3p%2FsV4ceLKODIQMtuR9VWtiKBlgR5lnAfvVEgHPnNLp%2B75PwavhR5QPhSeAvxNJZljfY73OcGwohphubty2FC1&X-Amz-Signature=9be847bb1c4974245ad829bc81d67feb569ca463d5f2b45ea71867eb142a661c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRFXABM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyMN82Gc7ovidiK7BseOOYdK5mLiOaLmgjcNFX4RgyUAIgRhXYku0%2BfHuFNmP8%2FcvIti9Wc07AIoTmNfA0fYJyxGcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFSqFnuF3pZX29kwircA9fFdlLkmG5b2YMRZhG8RWy8VHAoofS2VrU0ToT17JnJBXHse0H%2BiXoGcMEdpTz4TneMV%2BsWBIl7102XshdS3kjIoHKBT6bnGgyoAa7HWWZ2aF5lAzgJTudIGyyOjZ04mx3icO%2BfbcW0YybQuqyiezpSpNb5teynsuGYlKKdkLGQDank3ukpphVEBY5GChVaSJd55ERm9KUm6rtz4EMDpTM8TSOOP9BHQCipHKvgd1zU5UHjtUpAKYnMYJBJTZm7CIpCoIBbjKi8Rye8Bup5M0ZcIbXk%2FdSr2K2l%2B8Ic1sz4aGDcyG1uD6Xx8R7HEfWgtitxNRONhOE4UqwpOqdZzWQ7AxCPobbqZDm4JA0hTZIiU5Zmr1fGjQs0Eazb3GeylZon1Rnyrks1XOSQ2j37t59kbDd3czL%2FlJQ%2F0PDZByBPCSfL6uAICdC1CeRdUH2eh%2F9jLyOlglkueW8vkvNIQhMRv1NeDIxoq%2F%2B4f24uOFnazWNggrPyXtmUJT6ldvpmvubWPUm8B9bxik4yq7DFdURjBGZVb%2FTnwVThzjDfsDw28JqPQ%2BR9Fi5MBCiUuPqyqam8XZKDHCWGwDqazlVaRck9PgTGlOcf%2FLy7MuYCukAYZcV%2FLNivs9xLNF9RMKWEqL0GOqUBSA%2BTcsC8ZnRKiUEwNq9iwgjCusMOiI%2FHuMrA7dqEWcUTFY99Mkmk46ACWHRfmlo1PAKpi%2Bc6mhiIL5DWJrnemqUuUgl41niK3uCYsq4SrLvcgeTUHa6sVtRJzxuzc9kaASiqwH3p%2FsV4ceLKODIQMtuR9VWtiKBlgR5lnAfvVEgHPnNLp%2B75PwavhR5QPhSeAvxNJZljfY73OcGwohphubty2FC1&X-Amz-Signature=41e5dd7fe486b28835f8e6e718642007f84891a369b1cf45203f6ddaf11c9e80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYANYWW7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI57zkCJfc5wZc%2FdjTaDXsq9W%2BSIof%2FX3fw247Qap%2B%2BAiBXaBH7SwmZmOdFNZ7YPhBfPM8RshixeZ4d3cz5AoRfNiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2hN52ilaYIfc4nZdKtwDYk6gClFaOJlMaoG168gl3SrqQSgNo3WgQRTbXWMrH3xuP9Y30HUxaY46PiekY0y2z%2BN4CLYifpj0Lsc3tGKKuYb0vhy%2FTNY7R1dqrEUq0A4lYCueU4onFrF4vqRy9F3FHt1MArs9ybAxKfoylO%2FCmsiVlzWXhQlDoV3L%2FVhwTBS6KJLrbUucqX%2BNlDfcuEwrlqk38g93ZDyZfdONiskcqHF%2BGYLJwBZKtGhDDaK6%2B6pcN%2B16%2FndVsI98b1qw5tpph6JzAn1ocXRV9CMH8z7x%2FOPDnRKOCNJ4S5huPl8RHoJx8Ln4SYtKltX75hL4xHogw3Fz864VVbrs8bn2HORR%2BimvwVz19P62w%2FPuYV8doYWpvZ8km3wSKfXsRe5P05jNg16J1amFIuNBKYXLtNryKE0sCJbG394k3Du3XiWC7g6S4cMEilbFr6yiqxeueeNoYqA2lf%2B3yo4Yo8AMVSiXTeXs4njxiTgarvVveY1XpmPLyJLG%2FGjfnG7wJxIO1ofvc7mghEZd%2Bf%2Bny04tEF%2B%2FdIhW83arx0wsYVkGUmWUyPeRIxBjQZj8NAdjU6V1lfTMKJCbGbVQqu6sMgktZsOTUvzCFAMvtsHPuPmrUwjtm7fGlAJdpaIGQCzh5QwwqIOovQY6pgGL9ZDBDb9%2BLKyDe%2FcbdWEcZG030HWMvZe8XvO9fmwJQ7tQrZuDtCVTV83NP3LLUISspWBdlpOFJObSDwELdn7LJemh0A8ZR9QzpTFkwhkT0oDVvlFKXTRzwsOapauEOntm3Y7Am2z1IGtg5mYz7jLxICHO6jPE7fnRtokIirZAwbJY%2Bz%2FpdG2jEwBbP%2B1MxXKSmKdxbqdWjeHk6xS%2Bl0q0dOhwAryd&X-Amz-Signature=468be3904b99ebf01d27b17050ed3c1fc401878f5d0673f86b1d622b5b641110&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW7EZKR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDO8cjgwTOjs68zT1NYdNeZ552NpiHdHpBPDKJEUzyQcgIhAJ8XLf%2Fz902pzkL5Meo4P%2BjbvqDXs3wH47EDu%2BCB8eF1KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkZcnZTud2acsR%2BCAq3AM4PmLFhdUL4AyRlXFN25pwyB2CTyWyKg3C6kMRsvv8l%2FPngA5rTjnDPL8zp6lNlCeXnP2AeTMlCPsN3KQZYNUOGcLXLFXEPqA9dCvy9HzlcJKQDQxteP5mr8ZuTbqfmCgkKWFi6%2BGvPRHzySeASmHmYyiZSCvDmhU67FSU%2FQMiQ0Kn2GpGjHEK7edFJ4Y2tm1Se%2BkAKJK4l8gce0ksi06XsRunyDi%2FYx1HwhwkHfRMTSiYQ5B%2BKATX1kY4tg2PgFcXELzh76KSwCHu9w8u%2BvOxgT1UULTeHuHxKWaguoBjLLQoveaABARCS8aTWg%2BzPbes3JuypI4I3MnV4UiUamqQwx0q%2Btyjibax%2F8dnBaVrBLs1xiUeONB7NWWfUmw627uhSuCyS26XwgetS5j%2Fk%2Fxl%2BuJhcl0ARjyQp%2B1BlA2YwNE2OZaGLDHGsnkBunho16r7K1siEgM1g2vnMjC8CAVOLjQdEFOB3O2gp%2F60L3Gdzji7h2S3eEcJsV2Wjt%2F4vau31i%2BkswB7vythmcG2Ac3t5tR98NjPVUcruLuKcgkO5cTNcBDl04bg9YruIch2%2FEa4BPrrUKqWevqxaXjgkgvmARvBGKu9446Vp75coBl9hgzaADVIzrVVmPCCXjCbg6i9BjqkAbnRanvHDcS%2FS8dfUPLhh8lRjIsdffu4teJadaTNwekalDuRVybB3WNvTgZ2vEoM38dh%2F6dXIHbOPVBTgYmzj5xCcwyd0hCn9rLfc77ZHyY586IB4KKAGdGIeK4ZSzWXsHhkfg2aY8Op8T3Sz0bLF5yu2xvqxkczadeGPT3T9%2F3MsHs7obQ5bxhjbFygkYl5FtDwHKWUgAU01aNZjsrYlRi9mHr4&X-Amz-Signature=129edab47d6f1c152727e1b2126424e21f72c6a002724159fd00c92867f0d61f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRFXABM%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyMN82Gc7ovidiK7BseOOYdK5mLiOaLmgjcNFX4RgyUAIgRhXYku0%2BfHuFNmP8%2FcvIti9Wc07AIoTmNfA0fYJyxGcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFSqFnuF3pZX29kwircA9fFdlLkmG5b2YMRZhG8RWy8VHAoofS2VrU0ToT17JnJBXHse0H%2BiXoGcMEdpTz4TneMV%2BsWBIl7102XshdS3kjIoHKBT6bnGgyoAa7HWWZ2aF5lAzgJTudIGyyOjZ04mx3icO%2BfbcW0YybQuqyiezpSpNb5teynsuGYlKKdkLGQDank3ukpphVEBY5GChVaSJd55ERm9KUm6rtz4EMDpTM8TSOOP9BHQCipHKvgd1zU5UHjtUpAKYnMYJBJTZm7CIpCoIBbjKi8Rye8Bup5M0ZcIbXk%2FdSr2K2l%2B8Ic1sz4aGDcyG1uD6Xx8R7HEfWgtitxNRONhOE4UqwpOqdZzWQ7AxCPobbqZDm4JA0hTZIiU5Zmr1fGjQs0Eazb3GeylZon1Rnyrks1XOSQ2j37t59kbDd3czL%2FlJQ%2F0PDZByBPCSfL6uAICdC1CeRdUH2eh%2F9jLyOlglkueW8vkvNIQhMRv1NeDIxoq%2F%2B4f24uOFnazWNggrPyXtmUJT6ldvpmvubWPUm8B9bxik4yq7DFdURjBGZVb%2FTnwVThzjDfsDw28JqPQ%2BR9Fi5MBCiUuPqyqam8XZKDHCWGwDqazlVaRck9PgTGlOcf%2FLy7MuYCukAYZcV%2FLNivs9xLNF9RMKWEqL0GOqUBSA%2BTcsC8ZnRKiUEwNq9iwgjCusMOiI%2FHuMrA7dqEWcUTFY99Mkmk46ACWHRfmlo1PAKpi%2Bc6mhiIL5DWJrnemqUuUgl41niK3uCYsq4SrLvcgeTUHa6sVtRJzxuzc9kaASiqwH3p%2FsV4ceLKODIQMtuR9VWtiKBlgR5lnAfvVEgHPnNLp%2B75PwavhR5QPhSeAvxNJZljfY73OcGwohphubty2FC1&X-Amz-Signature=5636d1044a6131eeb6f72c2f7c2242e20ec39e096dda9cccb2e384d0cd66e430&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
