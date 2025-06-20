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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMMTZIG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvKVcx3SmH4RxIM8jDA%2B50ewLJSmHaHQ%2BbqaC6EXzAoAiEAo7UF%2BlEFGHGQ6YloSZIWQC0ZIW6OY176z7wGuyC3sjkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvdCMPDOB6cRWPWCrcA5eKlmec25TbblckSaD0P4JnbnEUY%2Foy4vBUgafG8t6bLb%2FIYC4J%2Fv9BvEVCl%2Fn%2F%2BM527iqKg2WiOpfqxOFBEX2H6WJqVfudLvYK28CAmhUO5GEeo9%2BSeze1jqAKwCqN%2B4qAwdVhEPLDY1fcBWY%2BLtH9s1X21MuXdlGRlP92%2FOIUVPE4AgPZS7Z1Y729TbH%2F8%2Fw7ZllQn%2B5noMea0PC2KxwpG%2B9kO6ThqBuyTsJOzvKF3fvHxPZ0BMHrgT0GK928oM4dy%2Fl5Gy68I8VwOwebWygQyNubCqessL5B90FtydRjtMkxFwaLVL%2FQZXH5b%2BIgPwuX4STo7QoRNxvnn13eTHhcYU4hVAxh%2FsB0zQghpYJbq6d41dHuIp5WxgSgXLE%2FDC2XTvD5IjYF2dcZyTdodlIjajEatVLp5jllRa5AXgDdhLRDNctiPtLl1FIp0u7nwLUuYdQso%2BBVdsf01nyEVxRYAxiL03KdaGNMwifVLIMHLCrU%2FFk6XBFJTumpSsORQLq8jItZ3TepHbJQEuFtVCDBWYFd3qHn8WeJcNcSvpRtPPk6xLPAQtJaUFatWpjyyBFUbQBFjY1YCZFroEuh6DNeHLRfQpfbDf7%2FTQWX%2FQNGkNXHlq%2BUSy%2F8%2BeZ7MIy908IGOqUBhmmyGx1D9tnqXwzeDLBIniLSek3RtyybEa5wu0hZeaiQgg04s5fSHAAURtA9F0lY6Rus5BH341EMRjAQiZS1qx5AIXoh6ut1pXHT9wPVYLIW%2F7xoVDPxCZcqJrTKo7j51MtesIN5aTGqGFFohmeUzJJJcOsrKqMlAR6lKK041wQ%2B7y50lGEAbvlJ5OjubBeDhvQ3VE%2BuQDdoIE%2FwH1fDEhje89Hx&X-Amz-Signature=aebf8740eb99cf1d13358981e62d600a2e8e13ee2b7edfddc3313aa361c61d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMMTZIG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvKVcx3SmH4RxIM8jDA%2B50ewLJSmHaHQ%2BbqaC6EXzAoAiEAo7UF%2BlEFGHGQ6YloSZIWQC0ZIW6OY176z7wGuyC3sjkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvdCMPDOB6cRWPWCrcA5eKlmec25TbblckSaD0P4JnbnEUY%2Foy4vBUgafG8t6bLb%2FIYC4J%2Fv9BvEVCl%2Fn%2F%2BM527iqKg2WiOpfqxOFBEX2H6WJqVfudLvYK28CAmhUO5GEeo9%2BSeze1jqAKwCqN%2B4qAwdVhEPLDY1fcBWY%2BLtH9s1X21MuXdlGRlP92%2FOIUVPE4AgPZS7Z1Y729TbH%2F8%2Fw7ZllQn%2B5noMea0PC2KxwpG%2B9kO6ThqBuyTsJOzvKF3fvHxPZ0BMHrgT0GK928oM4dy%2Fl5Gy68I8VwOwebWygQyNubCqessL5B90FtydRjtMkxFwaLVL%2FQZXH5b%2BIgPwuX4STo7QoRNxvnn13eTHhcYU4hVAxh%2FsB0zQghpYJbq6d41dHuIp5WxgSgXLE%2FDC2XTvD5IjYF2dcZyTdodlIjajEatVLp5jllRa5AXgDdhLRDNctiPtLl1FIp0u7nwLUuYdQso%2BBVdsf01nyEVxRYAxiL03KdaGNMwifVLIMHLCrU%2FFk6XBFJTumpSsORQLq8jItZ3TepHbJQEuFtVCDBWYFd3qHn8WeJcNcSvpRtPPk6xLPAQtJaUFatWpjyyBFUbQBFjY1YCZFroEuh6DNeHLRfQpfbDf7%2FTQWX%2FQNGkNXHlq%2BUSy%2F8%2BeZ7MIy908IGOqUBhmmyGx1D9tnqXwzeDLBIniLSek3RtyybEa5wu0hZeaiQgg04s5fSHAAURtA9F0lY6Rus5BH341EMRjAQiZS1qx5AIXoh6ut1pXHT9wPVYLIW%2F7xoVDPxCZcqJrTKo7j51MtesIN5aTGqGFFohmeUzJJJcOsrKqMlAR6lKK041wQ%2B7y50lGEAbvlJ5OjubBeDhvQ3VE%2BuQDdoIE%2FwH1fDEhje89Hx&X-Amz-Signature=1e9d94ba6407cc2f394583cc5bdc627456138e0132f8960b4bc63bc3f96f9412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMMTZIG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvKVcx3SmH4RxIM8jDA%2B50ewLJSmHaHQ%2BbqaC6EXzAoAiEAo7UF%2BlEFGHGQ6YloSZIWQC0ZIW6OY176z7wGuyC3sjkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvdCMPDOB6cRWPWCrcA5eKlmec25TbblckSaD0P4JnbnEUY%2Foy4vBUgafG8t6bLb%2FIYC4J%2Fv9BvEVCl%2Fn%2F%2BM527iqKg2WiOpfqxOFBEX2H6WJqVfudLvYK28CAmhUO5GEeo9%2BSeze1jqAKwCqN%2B4qAwdVhEPLDY1fcBWY%2BLtH9s1X21MuXdlGRlP92%2FOIUVPE4AgPZS7Z1Y729TbH%2F8%2Fw7ZllQn%2B5noMea0PC2KxwpG%2B9kO6ThqBuyTsJOzvKF3fvHxPZ0BMHrgT0GK928oM4dy%2Fl5Gy68I8VwOwebWygQyNubCqessL5B90FtydRjtMkxFwaLVL%2FQZXH5b%2BIgPwuX4STo7QoRNxvnn13eTHhcYU4hVAxh%2FsB0zQghpYJbq6d41dHuIp5WxgSgXLE%2FDC2XTvD5IjYF2dcZyTdodlIjajEatVLp5jllRa5AXgDdhLRDNctiPtLl1FIp0u7nwLUuYdQso%2BBVdsf01nyEVxRYAxiL03KdaGNMwifVLIMHLCrU%2FFk6XBFJTumpSsORQLq8jItZ3TepHbJQEuFtVCDBWYFd3qHn8WeJcNcSvpRtPPk6xLPAQtJaUFatWpjyyBFUbQBFjY1YCZFroEuh6DNeHLRfQpfbDf7%2FTQWX%2FQNGkNXHlq%2BUSy%2F8%2BeZ7MIy908IGOqUBhmmyGx1D9tnqXwzeDLBIniLSek3RtyybEa5wu0hZeaiQgg04s5fSHAAURtA9F0lY6Rus5BH341EMRjAQiZS1qx5AIXoh6ut1pXHT9wPVYLIW%2F7xoVDPxCZcqJrTKo7j51MtesIN5aTGqGFFohmeUzJJJcOsrKqMlAR6lKK041wQ%2B7y50lGEAbvlJ5OjubBeDhvQ3VE%2BuQDdoIE%2FwH1fDEhje89Hx&X-Amz-Signature=aa42cc62bbbdf3596e252fb4766a67b8623d3d2153cae3844483e78dbd52afe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBIY2NE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuTos5lrvcI4J92Y%2Bf53GhyoDHtglfEbQlOFZIY9mV6AiAIcCqcW%2FBRGAZYUMReJDeygwKQMXN0k6Q%2F%2B6KUX0q9MiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjHG0F7UU%2FqnsoghKtwDZ8cV8E5S1SH%2FioyM6nRXVCCXw7iUB3ZCMKYyO3JobJ6n3l0q5N%2Fn8HAjl%2Fwmdp2s%2FWCaDTENgaWmJaLD%2B%2B0u8lu2iYJbhpPQ40Uc0LOeP85SnPl1Y6V%2BC3%2BjpiG1%2BmwoHcXlIbWdzjvzvwKcJCiVQlSxtYacRItRZ6extX%2F4ENvMtCgAzN1HIoBMySeNlfCs%2BIoao5Oml1rxhawULbGQXy84YhLBCFlINv%2Bw%2Bl7xOpToDS9HK9nlaDpAA1qf5Cv%2BCKBNeUaDJnGhUVaNkJ%2BPNP8Qk5ogDASL%2BhItZTXKtpyODy8FhqxTB5o7jIAiI8N27BTQ3SQavvOgvZY5oT5zpL5mR0x8JYql2s579OFVPUxxvRLMKGugMFjNLxq1AHACB%2FH%2B90zJkrdkHcf4Q8Lldap45gvxbu80iIwbdhKtQAXw6Tpa6ZFmwDLPhso1VRwoFbDx3i10CUuUyMg0cUGdiSRII2bL%2BYd1ldUC22YXp973JwVBZdmcWR4GLmoq1l83HarCUPSshiDPEaEH5nu9h%2F39e8y9FEQRPp338ytat34hXzwPZbwJpgZKWH2RQZcNYO57f50lJi1Ys0f4FebnmnFd6V46rKlT8SqNa19CXpff2rXQxWXPU5yFJKEwjeDTwgY6pgHU0oojb05tlA%2BYiFfg4z%2BkH4S76fObgA1gJ5pZio3Gy%2FLk6Z3agFYifvFeeotdeTn8cc7OadeTB%2B7Cqw14tuYiAGNwQIU%2BrPeQ1JmdQHRdrU8MIU7bUWfmPHoF%2BRrxIGZKDxYRPZT9P4wAp01w13R72UGQoqTWNAItcnatlemQQomlMeSB%2FXNWENPSKvFBUwn%2B9nJ%2Bx9of4CZFn26agfGKEeo1tGvV&X-Amz-Signature=a2ea68c827c11abdeb765ba1694a0adbfbde7e7816de41023cf6aefa40b70c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZLUMO2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGZ4dz1rbcool9ZOLCCt5DasQvVI4iILvEwyrHPYedrAiBT9e2L6eqedCUiQovk%2B07sG6QgiT20b8OY%2Fy35zTRJGiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zaI2ssvte5AndXaKtwDl3zybRFqsMCriFBwa2uzdpZX4BCj0p1m2JUIu1LbHnQ5wO3RzEphVRQydUJYXfzdpc%2FRCJqrBK9hIfnMl3Sgr%2B2QL%2Br5%2Bd7%2FuG2REwscshLGoflF%2FXokiLg2cbxBq2Lntx0Wfb5%2Fw7kcqAPEPDJWX4IjahbCU6dx71bQMeaJXmTCN4kMwFRK8UHuJQAZceQZzl8sFvSyx6du8d2t%2B1yi9dD0fzDSRGzETe2cLqHAbTE0sC2kd4hYyfPHp9sSjcVjMw6rkqP5Hz917EZCLbHmK0wJUm0DwICNeUA%2FChdZqc3KuBKoeW27YSM6h924Pr3basztJRl0FSGVyNyL2%2BZak4gXSczGeiecb0MOEnLOxjFvgPsxodAiJseZWdX0UHcA8dBQ%2Fx90weIYlpjms2zBHRCAP5iGegmn5sh4N%2BWRLvpegGtHpoyPpApOm1fMUH0LlRR3ffrgYX5eeYmOFWZo3gX4FR97LXGwBit8PIMFE1evAnCEJm7km95XLCVMp8fRo36esB3tPdKpqU85WM0Plf%2Fw0aO7FvQEuGY9ho%2BluHDaTetrxJUjJrrckiR%2BmUjpqAzlM6QYbqjyobZiCXjpk%2BbQmjN4qWgIE6%2FU2sApi4uBhA7Mm9iDXG5G9h4w3P%2FTwgY6pgHFp5mxBDsWQP3frnpCYbjWJTUQGV9s1AP4fNPvRB7sCgBJYZ8mR68%2BkGpUxIG7AuF%2Bb3aNSJ4IiK%2FDTtjDHZ8IhUyBa47vjaYgUEwAgj5MDXLKE4NkJe7L%2FHQ3aljvI9AvqNJctzvbf2iPhTJwFqjk4vP9Hs4umUb44pbTBYYhJ3%2BbCvXU97Hhd9%2Fk%2BuBU9OIt1%2BxIX9m15OkkM8k4q7t0RqVGi2K2&X-Amz-Signature=fae174f12f792c2f2696a62cdb36f916f332698c79c3bde897a02377d4a7a85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMMTZIG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvKVcx3SmH4RxIM8jDA%2B50ewLJSmHaHQ%2BbqaC6EXzAoAiEAo7UF%2BlEFGHGQ6YloSZIWQC0ZIW6OY176z7wGuyC3sjkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvdCMPDOB6cRWPWCrcA5eKlmec25TbblckSaD0P4JnbnEUY%2Foy4vBUgafG8t6bLb%2FIYC4J%2Fv9BvEVCl%2Fn%2F%2BM527iqKg2WiOpfqxOFBEX2H6WJqVfudLvYK28CAmhUO5GEeo9%2BSeze1jqAKwCqN%2B4qAwdVhEPLDY1fcBWY%2BLtH9s1X21MuXdlGRlP92%2FOIUVPE4AgPZS7Z1Y729TbH%2F8%2Fw7ZllQn%2B5noMea0PC2KxwpG%2B9kO6ThqBuyTsJOzvKF3fvHxPZ0BMHrgT0GK928oM4dy%2Fl5Gy68I8VwOwebWygQyNubCqessL5B90FtydRjtMkxFwaLVL%2FQZXH5b%2BIgPwuX4STo7QoRNxvnn13eTHhcYU4hVAxh%2FsB0zQghpYJbq6d41dHuIp5WxgSgXLE%2FDC2XTvD5IjYF2dcZyTdodlIjajEatVLp5jllRa5AXgDdhLRDNctiPtLl1FIp0u7nwLUuYdQso%2BBVdsf01nyEVxRYAxiL03KdaGNMwifVLIMHLCrU%2FFk6XBFJTumpSsORQLq8jItZ3TepHbJQEuFtVCDBWYFd3qHn8WeJcNcSvpRtPPk6xLPAQtJaUFatWpjyyBFUbQBFjY1YCZFroEuh6DNeHLRfQpfbDf7%2FTQWX%2FQNGkNXHlq%2BUSy%2F8%2BeZ7MIy908IGOqUBhmmyGx1D9tnqXwzeDLBIniLSek3RtyybEa5wu0hZeaiQgg04s5fSHAAURtA9F0lY6Rus5BH341EMRjAQiZS1qx5AIXoh6ut1pXHT9wPVYLIW%2F7xoVDPxCZcqJrTKo7j51MtesIN5aTGqGFFohmeUzJJJcOsrKqMlAR6lKK041wQ%2B7y50lGEAbvlJ5OjubBeDhvQ3VE%2BuQDdoIE%2FwH1fDEhje89Hx&X-Amz-Signature=4679f3f328f2841581add0552f5c4d8f47b278889a653d81825d87fa016b35eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
