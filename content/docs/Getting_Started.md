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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALVC7HN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2dMhq93xHmlUhB5BMhreAEfmGp3HkfUvmXLSe4w5yqAIgWdse6ikxIhRKVyKyDWxe6gO6OrMbOwuSBHL9tNDGRKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7IHpBWdXVoD0MpNCrcAzhV9cJ8C1SboebNowmJDnhsrm%2BAx9mCwCm8vE0cd%2FwfAK1UZ2i20uPI1YQPZK5%2BPbMJWRbJO6l4EOgnHPA%2FkPDBFA2pLCvpqH%2BTEJ9l1DE5xyfST1RKW%2Bcik5KTUOq1NLHuHKffGUV4e5vw3ci6ha268KAC7fMbfRjDmX5k9teyYyzYOvu0ovYTVet7V%2F4Fo4ara5Y58%2FLQTN3dsfaRknE0xqutBGaQkK5SmpcWWihgmdUJ2Fe%2Fu0SdsR%2B2avtJENXOTEAnyyVaF9wNnr1yOWs%2FlHRfa%2FrCJmY0KezrSPDleh6kiA2yOCLp3OgHjdqUw4rlL2miM1ZRt8Ic4LMdbclTeNADRfWxqB7fGz%2BO0E5uepPL1NqMAfXSUhjzYHkVio190VYj9z7g%2BY0mrgpSoav04hRRuPCKx45o6uu8hRHLcIqhwTj3C4PvapRG003I54r7DstTBPR7tVCQ604QM%2BuOTd%2BcrhdXKXPQxOtCbjSVqYC%2FuE%2B%2BexEY5KH1iyqlf9sKFNSkcL55eVr%2B83psD%2FNNGy8RLAqE3P0W6pQH4sN6Gti3HYABxHYX%2F6Dx6eN19LbYQreUPstefl5ABP46Xj3uiYm7h5kyNXVl9ADoukQCQ%2BJdROkjVOPsaYPoMPLX270GOqUBdm%2BgwsneuQKyYohTIzn3U2TQDwzTwF%2Fy7R5LpbgfKdIEgWFX3fbrm8Bcpy8Vy%2FVGjkcNwL6xFSkCOQLR9YhICJqLWgYTdb1U2lrmDbaGrfLMh3ksiiq66CvUmxr%2FKMC2sIXYikHSEjrRizrqyFS6EUcSSMd4nHQsESKewl3%2FnEC9ZT3RfToIqpanhI8sneuz3tM6Hlwmy1Ruvro%2B0P4Tys%2BQiAaR&X-Amz-Signature=a5c16ceca5ac8fdf56ebe6b90d66b865db7843d9495dd0353ef5c1a7ac341410&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALVC7HN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2dMhq93xHmlUhB5BMhreAEfmGp3HkfUvmXLSe4w5yqAIgWdse6ikxIhRKVyKyDWxe6gO6OrMbOwuSBHL9tNDGRKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7IHpBWdXVoD0MpNCrcAzhV9cJ8C1SboebNowmJDnhsrm%2BAx9mCwCm8vE0cd%2FwfAK1UZ2i20uPI1YQPZK5%2BPbMJWRbJO6l4EOgnHPA%2FkPDBFA2pLCvpqH%2BTEJ9l1DE5xyfST1RKW%2Bcik5KTUOq1NLHuHKffGUV4e5vw3ci6ha268KAC7fMbfRjDmX5k9teyYyzYOvu0ovYTVet7V%2F4Fo4ara5Y58%2FLQTN3dsfaRknE0xqutBGaQkK5SmpcWWihgmdUJ2Fe%2Fu0SdsR%2B2avtJENXOTEAnyyVaF9wNnr1yOWs%2FlHRfa%2FrCJmY0KezrSPDleh6kiA2yOCLp3OgHjdqUw4rlL2miM1ZRt8Ic4LMdbclTeNADRfWxqB7fGz%2BO0E5uepPL1NqMAfXSUhjzYHkVio190VYj9z7g%2BY0mrgpSoav04hRRuPCKx45o6uu8hRHLcIqhwTj3C4PvapRG003I54r7DstTBPR7tVCQ604QM%2BuOTd%2BcrhdXKXPQxOtCbjSVqYC%2FuE%2B%2BexEY5KH1iyqlf9sKFNSkcL55eVr%2B83psD%2FNNGy8RLAqE3P0W6pQH4sN6Gti3HYABxHYX%2F6Dx6eN19LbYQreUPstefl5ABP46Xj3uiYm7h5kyNXVl9ADoukQCQ%2BJdROkjVOPsaYPoMPLX270GOqUBdm%2BgwsneuQKyYohTIzn3U2TQDwzTwF%2Fy7R5LpbgfKdIEgWFX3fbrm8Bcpy8Vy%2FVGjkcNwL6xFSkCOQLR9YhICJqLWgYTdb1U2lrmDbaGrfLMh3ksiiq66CvUmxr%2FKMC2sIXYikHSEjrRizrqyFS6EUcSSMd4nHQsESKewl3%2FnEC9ZT3RfToIqpanhI8sneuz3tM6Hlwmy1Ruvro%2B0P4Tys%2BQiAaR&X-Amz-Signature=6a4165d044a6cc10e3dc557070b18be8f14827fb0be1e5646f54e56347581d01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFO2UVM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArA97veoJ%2BJmA0WI8l9DbqxpQvTag%2F8ksrcBtqque7uAiAkU%2B3%2BP0c8rR2m0hgQL6hUtRkbLUrBJRtKTDWlNSYzCyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMZktXfTQ1eSIR0lKtwDS9pThQNl8ElZHj12eWVDkqQ%2FSy%2BIIeyBxCLyByx3gjw3yIogZ48510i%2FgtKL%2FBNBnQxMLQ0fmViu0gFW6PPVvd5CDsn2pci%2ByghdbmVMkAmKZb4g5Ss7mc%2BZELBWjD3yAdgvqYdYiS0WOcFljaq0RvmM6ODQ6O2jf34NLjYi5EvbXgGFIsnMmtJxzApcLdCkGLQpkvKlbfIT15eWSpnOKLhav%2FfIJgG6ZmGzLytKYy6Lz99EeBnrmrY6UCkGQ94aIY9qw%2FLRiKcQpyenX6AYJbMYyeLJKNxRa0bvM2sB2TQdAbgdFqDhVQQ5IaPqPdqe4uh34%2B4Y2UgDXwB8PObmq9B%2FF30WcaR2Dmcl5CSDQBWKQPjIvT75nzHTtVvByhGQGYlBEFjlqc1QZUuQNHplXxSYKcJlKInO88LpAC%2B3%2ByR0AdGDGUFym8k%2FTTDlkaUWPzRqxwiIF7hUjAwgUUkLRFlQ2IcSGUFpNhCPyKRqAaFcp2T9TRwijD9HVwS2g8Zsfb0NVYK65Tt891RbeGZNfVOdHZmsCNCxeWgI1JqW4ncTx0OVpT5oVdOprLJhoA9xh%2FgG4%2Fo%2BgtjpL1kK7i0qT6xbDwbuAqqo7oVrkK2aTP0cm7pVWv8Pnnjq7Acw29fbvQY6pgH8EL81wSNFk6%2BnEVenRqPSK5g2OaqsSDT1a9TpGA5venUSq7VJpzULTq9ze7MR%2BFPR415iDnuxDs4DjNL%2Bmfi%2BGZklIMO9tbryDEgViGbNwl35VlcxydPGt%2BoWE0B6NOkYaOSxevYaUQhKwdly26qw9mYx49IRVRok97EFsKpjPZRo%2FwlsSax90rf3dpz%2BDbWI9r8SYqZ7fveYcJpWkzILbPx7Dpfz&X-Amz-Signature=d432f393ec13de6153d13d089bf1674a99b877d8e1f3f7692b70730fbbf65c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545AMOCV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQz2OSd9sptxp9uU0L0DZ9P1VRSyF0FPRnVMlL8GBdoAiA0DNTwipKvCJ023yrbfo3ZOSKaMv4Hr5tqEGVv4P6YRCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyRC3IO8CmI0uhDDKtwDO0Ih9UNZGBseyvi2xiE6zPjOkCxhmbq%2Bb8vW0%2BVhqGkVJEkMCeVkxOhINbDK2%2BIc8GKw%2Bwy6DmSUfFsje5DQcTbdnMbdIiRKB65xMwz1DfA%2F9Eg15dhCGuB9WL9rUJ4m0F5paJ8ftAS%2B6llmpXnKOk5KPNorjNqui3O4UdjjgqB%2FssKNkeW6TNVa4p3HPs9RFHqSMmRlEaDcS4CR5%2FAUL8RTAp6IFxWWMyytYm0PagQY1SDltP1eZpPsmf0kYBqlAfgHKLgiwnrBYG94L2AccCTMKxtAtKiU13LW%2FOBJeirZBJ0ekCJ43DBAavSbgI4ec3x2CtOv3pFwXraPyFkNLQ4s7PfgCawK%2Fr6VrIPYnNDd6ZZOAqMGbIOVbUnCji0OrUH82KI7AW8SQ%2B5VIgZuCpAyBDUDguMvsY09DY%2FdAHqqcpPxR0y%2FPWeZklDd0L7NpMLcMcV%2FifvCUrgN8KIagHsgPviFt0YOWM%2BdBCS4b7C6WZ4BpezwqtmUYOHr60Ew5Gk0uYjiq0ACFEg4%2BkP8wk25cgXPUqxfSwmfvk0CEasYS1CwL6C70M1awnlsWpwKaYRfnWnhQaJV%2B%2FZO0S5F9YgyrcXvD4z6Q1fIMEPxzee2ywR8B2SikIzI7L8wi9nbvQY6pgEjdR9YEFZ%2FFztAE3eMnSQEf6gTCZOHO95g8o0Z2FcY3txoc71g%2FzprO3M1AbeE7U3VovghrNouIjfYaK8XRTObHyBE%2Bxq39rownacvUDBqtnkTD9dgx4sYNr49KbX6kuXt2nHLUi41zsaiVQHUReC85x%2Bbqs3iEZOzuuLANpM1y5zD3VxCR9kxH6wdsx7hzKyqzaReOfK0D9k73eT7z6vWwjxjaxSW&X-Amz-Signature=9c79ff382f2223039daae55ae7c282fe0b50fc7e2da32e8b5421c61b4b5a5ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALVC7HN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2dMhq93xHmlUhB5BMhreAEfmGp3HkfUvmXLSe4w5yqAIgWdse6ikxIhRKVyKyDWxe6gO6OrMbOwuSBHL9tNDGRKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7IHpBWdXVoD0MpNCrcAzhV9cJ8C1SboebNowmJDnhsrm%2BAx9mCwCm8vE0cd%2FwfAK1UZ2i20uPI1YQPZK5%2BPbMJWRbJO6l4EOgnHPA%2FkPDBFA2pLCvpqH%2BTEJ9l1DE5xyfST1RKW%2Bcik5KTUOq1NLHuHKffGUV4e5vw3ci6ha268KAC7fMbfRjDmX5k9teyYyzYOvu0ovYTVet7V%2F4Fo4ara5Y58%2FLQTN3dsfaRknE0xqutBGaQkK5SmpcWWihgmdUJ2Fe%2Fu0SdsR%2B2avtJENXOTEAnyyVaF9wNnr1yOWs%2FlHRfa%2FrCJmY0KezrSPDleh6kiA2yOCLp3OgHjdqUw4rlL2miM1ZRt8Ic4LMdbclTeNADRfWxqB7fGz%2BO0E5uepPL1NqMAfXSUhjzYHkVio190VYj9z7g%2BY0mrgpSoav04hRRuPCKx45o6uu8hRHLcIqhwTj3C4PvapRG003I54r7DstTBPR7tVCQ604QM%2BuOTd%2BcrhdXKXPQxOtCbjSVqYC%2FuE%2B%2BexEY5KH1iyqlf9sKFNSkcL55eVr%2B83psD%2FNNGy8RLAqE3P0W6pQH4sN6Gti3HYABxHYX%2F6Dx6eN19LbYQreUPstefl5ABP46Xj3uiYm7h5kyNXVl9ADoukQCQ%2BJdROkjVOPsaYPoMPLX270GOqUBdm%2BgwsneuQKyYohTIzn3U2TQDwzTwF%2Fy7R5LpbgfKdIEgWFX3fbrm8Bcpy8Vy%2FVGjkcNwL6xFSkCOQLR9YhICJqLWgYTdb1U2lrmDbaGrfLMh3ksiiq66CvUmxr%2FKMC2sIXYikHSEjrRizrqyFS6EUcSSMd4nHQsESKewl3%2FnEC9ZT3RfToIqpanhI8sneuz3tM6Hlwmy1Ruvro%2B0P4Tys%2BQiAaR&X-Amz-Signature=e05e37fcc717bb26424aafce3b076be754f4c97771a766a7eba5b855b832ffaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
