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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NIVS77%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk6QLLGEHOBE%2Fjyohy5iC3OIFfubhkfaqO%2BFxkwzZa2gIgIP1NaH0tI%2F%2BpxV7J%2BYATb4aSdqvpc6UQUY9yURf0%2Bz4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGa%2BtFSRE7hSI4F9XyrcA9OW3VschVYLzYKFCeTFY3XwtZYTajMIY7udicvmELbwg1dTg3Pl%2Fez1b12Bf01JzqpkQqVonLLGBotTeJmlBoJHxl9gFFOvU%2FmRNQ619VO9EFE82JqllVB6DdawPj6e2jhQS32g7ZDrko9CNtwt%2FUuZmwhH5tb8DNSWiknidzYFXuDMkruqZFkod0UVJaMJqZ4ahC4lXqocdBQQqw9zgAaZtVcmFLoHupquJLlzvqd86eDVS4Vx4SFi97yDyDCWg%2FpAznmGTdRuUfQ0LTACEfbTJmyVoPtDdMb0NNaUML2EIoDphv9MonykvbbLXHWHYWwiWwO8DK689qrqFZtuQrZrifOYK%2BcU7WerSy7wJ41RAYZpNjjf2FF6oh%2FEMlGSqLv25IzRAz1zPrnY%2FLUfhU0pambiCOtqDejGBgI84ZftTL8Fzb44RmrvW8Cu%2FQ2cg%2B6MnU4FaEbmxDStxGWoCL%2FBmoKfQmQld12yY%2BbH9S00tyOyVfbHIOJezGNRiIoQ0JMnu1p6Pr%2BFo4m6t5F5iIGsp%2F7auPEviKEgvNjBY%2BxgmSruba3%2Bi9grqrKVtmNUpedoR8Ndy1CrOxA5H4DfrBkNECWJv%2Ft5XYtheGuSyCzMUw%2BsM1YXDReOoPCPMNKmj78GOqUBug%2FbMI3JGjHQMJp3dKzluQrxQhJOp5mEernWQoDH%2BGYJU9LnSY1O75yORZ308SDtvhFWIwwyHDFz%2B21aDfx4yyybhRAYlSyhDKk%2FzuvFI3EFoeyN5NSIx88Ex2x4z4%2F%2FLJIIM%2FnhweTvS1mDLqM%2BVO67fgEa6BvjVy3tuZ%2F3anoA6n7hfdJJ3jNrBWbCQH7Ndgajb8zKu8L2JXbV5RzxX0fWHRkQ&X-Amz-Signature=86611e3c65e6f6bd86ea82d435344d9caae9a7f47efe6adedea4ac6605720ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NIVS77%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk6QLLGEHOBE%2Fjyohy5iC3OIFfubhkfaqO%2BFxkwzZa2gIgIP1NaH0tI%2F%2BpxV7J%2BYATb4aSdqvpc6UQUY9yURf0%2Bz4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGa%2BtFSRE7hSI4F9XyrcA9OW3VschVYLzYKFCeTFY3XwtZYTajMIY7udicvmELbwg1dTg3Pl%2Fez1b12Bf01JzqpkQqVonLLGBotTeJmlBoJHxl9gFFOvU%2FmRNQ619VO9EFE82JqllVB6DdawPj6e2jhQS32g7ZDrko9CNtwt%2FUuZmwhH5tb8DNSWiknidzYFXuDMkruqZFkod0UVJaMJqZ4ahC4lXqocdBQQqw9zgAaZtVcmFLoHupquJLlzvqd86eDVS4Vx4SFi97yDyDCWg%2FpAznmGTdRuUfQ0LTACEfbTJmyVoPtDdMb0NNaUML2EIoDphv9MonykvbbLXHWHYWwiWwO8DK689qrqFZtuQrZrifOYK%2BcU7WerSy7wJ41RAYZpNjjf2FF6oh%2FEMlGSqLv25IzRAz1zPrnY%2FLUfhU0pambiCOtqDejGBgI84ZftTL8Fzb44RmrvW8Cu%2FQ2cg%2B6MnU4FaEbmxDStxGWoCL%2FBmoKfQmQld12yY%2BbH9S00tyOyVfbHIOJezGNRiIoQ0JMnu1p6Pr%2BFo4m6t5F5iIGsp%2F7auPEviKEgvNjBY%2BxgmSruba3%2Bi9grqrKVtmNUpedoR8Ndy1CrOxA5H4DfrBkNECWJv%2Ft5XYtheGuSyCzMUw%2BsM1YXDReOoPCPMNKmj78GOqUBug%2FbMI3JGjHQMJp3dKzluQrxQhJOp5mEernWQoDH%2BGYJU9LnSY1O75yORZ308SDtvhFWIwwyHDFz%2B21aDfx4yyybhRAYlSyhDKk%2FzuvFI3EFoeyN5NSIx88Ex2x4z4%2F%2FLJIIM%2FnhweTvS1mDLqM%2BVO67fgEa6BvjVy3tuZ%2F3anoA6n7hfdJJ3jNrBWbCQH7Ndgajb8zKu8L2JXbV5RzxX0fWHRkQ&X-Amz-Signature=044a5104dbe5fd7f1dd3a1f2e348a8f6f78c8352ce1e9bc705e87ecf2af3df77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2IMJNG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWsOv0sa41LTjVeOTAOR2kl1X6ltnTn8h38FkOb6NFTAiEAztKrsczeDehsAwM8Z0noYk%2FjdpYqI227RQ18QzGKNTsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDm122umUH5B%2FWD5QSrcA0pkpVhpi88CGuYu0OahZJJje6lTy8iBnizFrEp70OX005MjRWrDCDkjoWJNeNj8bzgm5d7UJEhXa7bL%2F3hbDZJonjNlZmFvZcBcvgWZmm64bAQ%2Fh0fBOqxl0Jq1l7aGymg3td4oNBpvBm6q%2BGJw2HyNUukOWtVSgA5xzgN3G6lg49sxSTrrIZuK5JrA9bDVp8su8GStp13V2DlmSJdEGuDGhPYPhQbpx69l%2FIdA5KoaiypucNKZt1MjETPM1nTezLXI2XyD5f%2BmGS2I81uZRwOvJYtBNqwFq8TzZU3%2FTW7GNCZS%2FMKzbEI6HvKZV7ogP35O5D%2BuxmAWG5VPZrVBvFda4cC2BjNx0%2BK02FCu4gDIsnmbw6V7hx9SbzClV6IPs%2Fm2yfig0f966KFQRzD9bbDMw%2Bj9gwdV0vmHYt0MaAwAKsruWjwH2NXDzKetTjD%2FvEnWWA%2BnZxThJhjpnu0U4LeoNZJEhxQoiJ7%2Bz9kqDsRx%2F5xlFw4lzn20OKM4FOyf0pEfPZXbXJrnWz2V69oy8k4BJwODJlNKjzAqREXH6zUGRo0YHj7vPwARGz4%2BjdH6Jp28JAwIBC4E2SZlT4BYEwb%2B8CW8NrnCEKTkYsp0aqeHomm8aC%2FPqBAeENJDMLOnj78GOqUBaclpMvLkPzLDoZfXWgQVxrJwBiiTRYQGLPRGARzeHJ8wDKOOjoMrS3irHh%2FxHU1px%2F7aiYY63ab3bqlN%2F6%2BmkD6IWS58B%2Fwx5suVbie9ZIfoYtMngvRK23SczqHnmMCrAdUcbBziar6Q4JvVyrw7D8mbEuwwTPJXpQhPlvGG6r74yfQq%2BB3Ig8F6rdoGhFHEc7oudet0jFdogbqiWmwEmdoHsMeI&X-Amz-Signature=67ed9fa6e0692ef7f33faacc3876d87604be314b9b0eb14e1bb2981826bacaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMP23HB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ctSj2K%2Fptxo2ATTvlIrpJSgE%2F7Ist039pJb%2Fh17CsAiBcIfRjor8vfAyNnsxiJFVvVye8sz1mnAltdHXWJOwYBir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMIDflGJ5QbgL8IbKgKtwDA90jHLAFUZg%2B%2B9yPIxRcgk4ySy4wJBYT74NddyXLGpqy0v2fKGVQSy9br5sCIurXuyyuGAcfi8juJYGk2g%2FFy2nl%2BrgttiQs3kvth2kEz4NgO7ua6rsgpB1%2FiK7DfDQMwxOfw98utz2netMf5YoXPY3DAkhKdm4tXwgcTVdWjcFyIzgMl2wyzj2vYj8P9ATtnU53y7ykZOfSIykvf%2F%2F4b%2B%2FqbHwS4kofQpb0uZDOoG9lwtPx9gNBhDavWtVKdrInLTlGfTHLMjAqqQT7vFRSjfrZekKK%2BAdwkdZTj5yjO8daS7uqMojjJA1KSsQL%2FLeVV%2F7hJBpWl1JpoFG5KbCxLp5Jcw4Ymw6qOavKwWUuo3q9m%2BRRZTKARDnkzVkrTVvU8rMLUuZRpsd3CIRBfxD2wLGiAZA2E3x16CaHi1w%2B2Gl5m1SnpAc%2FOq3vQh9taHMjaseX%2F9UGE6mL1PhrZeLoXUpXsUIKbB79Gp98QQD2%2B%2Bgp5wULX20HtKq3SIno5RRWvffwVymxS354px4nir%2BxT0tFEceD61ju1%2BzC%2FHiErYaZFnriVk8NX1nl5Jw4GjShRfIaiteA7gWO%2BdMXQU1U4MVa5b8CrDdzInScqQIlRan4lQeEObNoCOlnAKgw6aaPvwY6pgEnihTyY%2BKJB%2B7bJI8RY3lLId2a15oST36%2BG8MMt9fDg351aWx0yv6jRARAgrWroEi1YdArcuJNh3HUO0mwpiXXpjcX8WNytthlxA5pmg4HlmVRJ90NeXN%2BKP6SPQQn2Ri6%2BqasIH23GP8wX5uEzDwftUGTdUMTnEOcvPrp%2FEuxAffl6w6Q5tGmD5ZjtoK7oKUmWdqDkskTTdSIZs4JnoZSf4YaR%2FLp&X-Amz-Signature=56abf9e02142d293d77daa0ffd9a4b3fa4b60cb3b7db21b153c8f858eb5f9d03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NIVS77%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk6QLLGEHOBE%2Fjyohy5iC3OIFfubhkfaqO%2BFxkwzZa2gIgIP1NaH0tI%2F%2BpxV7J%2BYATb4aSdqvpc6UQUY9yURf0%2Bz4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGa%2BtFSRE7hSI4F9XyrcA9OW3VschVYLzYKFCeTFY3XwtZYTajMIY7udicvmELbwg1dTg3Pl%2Fez1b12Bf01JzqpkQqVonLLGBotTeJmlBoJHxl9gFFOvU%2FmRNQ619VO9EFE82JqllVB6DdawPj6e2jhQS32g7ZDrko9CNtwt%2FUuZmwhH5tb8DNSWiknidzYFXuDMkruqZFkod0UVJaMJqZ4ahC4lXqocdBQQqw9zgAaZtVcmFLoHupquJLlzvqd86eDVS4Vx4SFi97yDyDCWg%2FpAznmGTdRuUfQ0LTACEfbTJmyVoPtDdMb0NNaUML2EIoDphv9MonykvbbLXHWHYWwiWwO8DK689qrqFZtuQrZrifOYK%2BcU7WerSy7wJ41RAYZpNjjf2FF6oh%2FEMlGSqLv25IzRAz1zPrnY%2FLUfhU0pambiCOtqDejGBgI84ZftTL8Fzb44RmrvW8Cu%2FQ2cg%2B6MnU4FaEbmxDStxGWoCL%2FBmoKfQmQld12yY%2BbH9S00tyOyVfbHIOJezGNRiIoQ0JMnu1p6Pr%2BFo4m6t5F5iIGsp%2F7auPEviKEgvNjBY%2BxgmSruba3%2Bi9grqrKVtmNUpedoR8Ndy1CrOxA5H4DfrBkNECWJv%2Ft5XYtheGuSyCzMUw%2BsM1YXDReOoPCPMNKmj78GOqUBug%2FbMI3JGjHQMJp3dKzluQrxQhJOp5mEernWQoDH%2BGYJU9LnSY1O75yORZ308SDtvhFWIwwyHDFz%2B21aDfx4yyybhRAYlSyhDKk%2FzuvFI3EFoeyN5NSIx88Ex2x4z4%2F%2FLJIIM%2FnhweTvS1mDLqM%2BVO67fgEa6BvjVy3tuZ%2F3anoA6n7hfdJJ3jNrBWbCQH7Ndgajb8zKu8L2JXbV5RzxX0fWHRkQ&X-Amz-Signature=cd458b21b4ca49e484ded7a74b094377749d8d3075951270a785abad7909e110&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
