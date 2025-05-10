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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWNQB4V%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5E17yizuHxr0vPC7jffAFE5%2FS8DfCVA9V0g2RtDhwIhAOvj20lnno0%2Fn35ALuci6vjoA3Evla%2BOWUVaZkN8nhR2KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWsOkrUmOPjnxVPiMq3AOsylYT0HMpJZt%2FqQz1x4GGzVJXDym47HpZKAdcpPV2vmoigzTaDc5Dqyx4q1KjdiM1%2FLE6E1PT4ub3Sue5AzMgmM6WHKkBoBkpUZcZpapx1fwYHkc%2Bq5VY84V8ZQdjXmA%2BWLCAdtv3VVEtXev0NbvkkW3XL%2FpnEzdDs5cLCFY328UL%2F06DZlIqnymbwPx97CgSTxYQzc5aGL%2F4du48Oh6d1EGoY2VsM41h8VVTtJOptG5TcMiw0Z1P6%2FrTNLmbaIMgbfGwg7GkvR70hMrBI6bqdOEVgaI6WZYONhIr6l%2FPuLlRcUJp%2B7nk68Lfz2wFv8bpO58j1QFKX3YOYhkiKlgzs4DqmCW0QzjtWFPfGfFj6Ep2zgYed8nRTFWBgxfComsJvs5tcIgs%2BXl5gBmu8NI7lholeedxZ4iP7P8DZV%2FJYB8Eg4GwJyqvF69XtncO%2FoqDrwH%2FnQYCQ7Bxqkr3BtuNf7jg1KTFLB%2BmCeX%2FKMqCwiKigcjrm%2FMF4%2FHjVH1RFKDOZebADU8rqu7yVCwHQnfQO5OSGe67l6iJ3NZObx9jqPqf5B3qz2C1XEM0E9jdT5DYqkTRfOGTk8pMPyES5DSUzK6ceQev9C7OPIWpUgEneAwqLGnMtLyh1SMF4jDnj%2FzABjqkAWPSuiwi1mpQBpP%2FL4VQ%2FEwDBxeSBHRlGI605MgZqSBAkCRM%2F0UgqjdJNe6DBVbTuE7RQcZzKuk3O4LcGHqonUusBlzL6WB8ym5vlDGVXcvYZ80xW23ugsl8BWRG2yFxmyGzbIhSIXL5JZXS1FWaRe7fl6us2aSVteMOaD0wysy0uu%2FJbf2ob3oIF%2B%2BZ0tHft3fcKgfACRbdMWa2oyVoBMIohdBA&X-Amz-Signature=bd388260a654474b26c2fceb6385e353f0a880eb64e6ce5c996eaa076d0ccc16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWNQB4V%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5E17yizuHxr0vPC7jffAFE5%2FS8DfCVA9V0g2RtDhwIhAOvj20lnno0%2Fn35ALuci6vjoA3Evla%2BOWUVaZkN8nhR2KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWsOkrUmOPjnxVPiMq3AOsylYT0HMpJZt%2FqQz1x4GGzVJXDym47HpZKAdcpPV2vmoigzTaDc5Dqyx4q1KjdiM1%2FLE6E1PT4ub3Sue5AzMgmM6WHKkBoBkpUZcZpapx1fwYHkc%2Bq5VY84V8ZQdjXmA%2BWLCAdtv3VVEtXev0NbvkkW3XL%2FpnEzdDs5cLCFY328UL%2F06DZlIqnymbwPx97CgSTxYQzc5aGL%2F4du48Oh6d1EGoY2VsM41h8VVTtJOptG5TcMiw0Z1P6%2FrTNLmbaIMgbfGwg7GkvR70hMrBI6bqdOEVgaI6WZYONhIr6l%2FPuLlRcUJp%2B7nk68Lfz2wFv8bpO58j1QFKX3YOYhkiKlgzs4DqmCW0QzjtWFPfGfFj6Ep2zgYed8nRTFWBgxfComsJvs5tcIgs%2BXl5gBmu8NI7lholeedxZ4iP7P8DZV%2FJYB8Eg4GwJyqvF69XtncO%2FoqDrwH%2FnQYCQ7Bxqkr3BtuNf7jg1KTFLB%2BmCeX%2FKMqCwiKigcjrm%2FMF4%2FHjVH1RFKDOZebADU8rqu7yVCwHQnfQO5OSGe67l6iJ3NZObx9jqPqf5B3qz2C1XEM0E9jdT5DYqkTRfOGTk8pMPyES5DSUzK6ceQev9C7OPIWpUgEneAwqLGnMtLyh1SMF4jDnj%2FzABjqkAWPSuiwi1mpQBpP%2FL4VQ%2FEwDBxeSBHRlGI605MgZqSBAkCRM%2F0UgqjdJNe6DBVbTuE7RQcZzKuk3O4LcGHqonUusBlzL6WB8ym5vlDGVXcvYZ80xW23ugsl8BWRG2yFxmyGzbIhSIXL5JZXS1FWaRe7fl6us2aSVteMOaD0wysy0uu%2FJbf2ob3oIF%2B%2BZ0tHft3fcKgfACRbdMWa2oyVoBMIohdBA&X-Amz-Signature=20a460fa3ae71aba40e8b44e31701a679dc71207e8862eceb0c6e460d33715f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWNQB4V%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5E17yizuHxr0vPC7jffAFE5%2FS8DfCVA9V0g2RtDhwIhAOvj20lnno0%2Fn35ALuci6vjoA3Evla%2BOWUVaZkN8nhR2KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWsOkrUmOPjnxVPiMq3AOsylYT0HMpJZt%2FqQz1x4GGzVJXDym47HpZKAdcpPV2vmoigzTaDc5Dqyx4q1KjdiM1%2FLE6E1PT4ub3Sue5AzMgmM6WHKkBoBkpUZcZpapx1fwYHkc%2Bq5VY84V8ZQdjXmA%2BWLCAdtv3VVEtXev0NbvkkW3XL%2FpnEzdDs5cLCFY328UL%2F06DZlIqnymbwPx97CgSTxYQzc5aGL%2F4du48Oh6d1EGoY2VsM41h8VVTtJOptG5TcMiw0Z1P6%2FrTNLmbaIMgbfGwg7GkvR70hMrBI6bqdOEVgaI6WZYONhIr6l%2FPuLlRcUJp%2B7nk68Lfz2wFv8bpO58j1QFKX3YOYhkiKlgzs4DqmCW0QzjtWFPfGfFj6Ep2zgYed8nRTFWBgxfComsJvs5tcIgs%2BXl5gBmu8NI7lholeedxZ4iP7P8DZV%2FJYB8Eg4GwJyqvF69XtncO%2FoqDrwH%2FnQYCQ7Bxqkr3BtuNf7jg1KTFLB%2BmCeX%2FKMqCwiKigcjrm%2FMF4%2FHjVH1RFKDOZebADU8rqu7yVCwHQnfQO5OSGe67l6iJ3NZObx9jqPqf5B3qz2C1XEM0E9jdT5DYqkTRfOGTk8pMPyES5DSUzK6ceQev9C7OPIWpUgEneAwqLGnMtLyh1SMF4jDnj%2FzABjqkAWPSuiwi1mpQBpP%2FL4VQ%2FEwDBxeSBHRlGI605MgZqSBAkCRM%2F0UgqjdJNe6DBVbTuE7RQcZzKuk3O4LcGHqonUusBlzL6WB8ym5vlDGVXcvYZ80xW23ugsl8BWRG2yFxmyGzbIhSIXL5JZXS1FWaRe7fl6us2aSVteMOaD0wysy0uu%2FJbf2ob3oIF%2B%2BZ0tHft3fcKgfACRbdMWa2oyVoBMIohdBA&X-Amz-Signature=d22bcc2768c98e12decc091ab97d28a14a7e97d72d0055db47f7bf87716246ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OBQRIWS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYJwDDlrluFqQbeKHFebioVvN7rafXdyIY6fa6JbrwWwIgZ7SHvYWsWVyEP5ntwiDBkPtR1aGZrfWdTecgP6vqZCgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLHC76bgabQCyfuxCrcA%2FFI3gF8odMtRceyGTs5C4QRrec5vsYReO9SUQXKTxpU7JaogGydEP0%2FF6%2BjO%2BQrLgn6AfPCLpUGFL%2FlUzBDgffu354zyGbNTK35KZh0%2FZTf%2BwVUNF%2FW6nkmtxAkGmpmFGaGrpxhqBufh34Sm3rOMk1LW8ryGAmjrl3cwhmupHHRp%2BykEOd94vcgXKPPjnnUO2JVZYITd0cFsH8unILhOVDMZ%2BKzyg%2FupPEIkuzcKIWhAfCxFSvgVJeYKVBLRSfkBebXAOi3AL6lmAOwFPNnuFL5dcSy9zNQe%2FazVTTQPvRFEzfBV54W6jv%2BfkoYKlPCiAlrkonW%2FgPItgNVzBEaRvayOrEMHrcPpdO4rjUmcVlDuqGqfpV30%2B9z%2F1kVzzkM3YeAgji8p1ECBWfKlq8L5CE58RGi39FyrLrxUZpTLquOmQXrpcOtgFNxtf9dJ0CPD4NsKYGow%2Fh%2FmFVZwAB1DxMqbUp2z1g%2BJr03EoRQsb%2B%2BHM83E9a5PfH64EgCCGxGka1f0FlvhrFiM2vtCagkL2jjfqm1YjMtU4lWIOiYMvyL5NjYXFxDNVm%2FT1a0dIHY%2B94oFATLsY16A3RtCILf5H6w287qOJUU%2BFG7CY3P00fhNsCsQcJLVBKRMX%2FcMN6P%2FMAGOqUBqYBHUSc7hLdpxUA8v1QXffZU9MeIqah%2B34nlBjDHKo6Yc0E44GtWx0io%2FISTQpMvGkkz9NaVlR6OpGD9JeFbImkV6X1RmofCOD6GVmFmEFIGo%2F4n4jnF7DQJkBVDJtsJ4c6oq3doOP8OCcAs4%2BRap3eEhTFbHoar8VTxHtVtlj%2Fq7gsPKEUs98v%2FCIG3reNepdAzFEcNHg6rZIjPrtgH8u%2BRa5wq&X-Amz-Signature=e20529ea0ebf40c43300358272add03942a0842e176178989f5e9e8598966130&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFP2EAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FFidhvXgQDXS3o65MjzNKKT%2FLyDbcTMFOVqC59rmmCAiEA0qL7zyyCjZ3spujEAGB1RodTvCsM5dlCqZ1F6DhR7uMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAvwpmjGOKpqZ179CrcA%2BE52YbQ4%2FjtMS%2BRGtgKJjZh38ndk7QPRhZvL%2FRlWVwXxzknqBffIetmLxk%2B17mzGfNusWNKNWsMQNf0fgQEqbLCJdc8Zdu5OavRWAormHLAjx0BkQJEYvx5hfmrOuwtaZBbYcJQRQtVEbZJYxYUhzNAjHWnsE%2FnuAm6K9S6%2FxYKCPrFKXhFapVtg%2BMktoMR%2Fr3JJU4JEZCUjPSm5uSKk89jmSOI%2Bki86yIL%2Bk1DL1SQcMfBPbG73lbfRVAkUn61TNaXLw918GuIhHDceGfXiFlearVtzR5wUn%2BbY99SQ5126ETex5CsGoB7xpqPkNwsIhm0YUy%2BJYyTyrtkEb0CkkuGVWAODZiP0wd%2BO68NPLcWgBD%2BsmjDXm8X6%2FaKD99GlY%2FUW58hXJrH%2FCDd%2FC0K%2FjBsuudZCoTCwGFG6uJ0Wz%2B0kEJRwCrYjx2oaJaZsnRS49q%2BnfzOCQ5gGOipXKf5vLE4yelqtNtU4exY2NUPQ0jak7D9iwiS9H7xc8hIAfCCWRNADsAm%2FlSuQsthU2uleX5whmq0i03p%2FTuyTBNFa9nzUSBgPGb2a0vLLdERiLAZ%2FJu7M8%2B3KMMmLMutS0JpjZWvxT8znYwv%2FfFq0bauknCi8Nql9B6MCjVpSSVWMP2P%2FMAGOqUBF0Bh%2BHY2DRDR7KW5zFnYB5gCvSc8KXv2m4GhCo315p9FcBB18B4kwhjxZLR527zxUCP2%2BygS701qs5S1%2FPzr%2BCvhZV%2Fg0kXaiHoULQN0pUHd8Wr3%2B2gi4v3s%2BMWxlH2WxbbpLuHRkjxgBv1RoGvDZw41JuaIwKvSDCj7qjfQFkSqJqsYYQAT3pINv5VpUXo6HxqplBGLVtT%2FP3g3cNtZkPPQQdZl&X-Amz-Signature=5b8ce377765dc40e565e13ce15e16c84de3b70d2ae6210eb1b1e08d4da1cea13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWNQB4V%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5E17yizuHxr0vPC7jffAFE5%2FS8DfCVA9V0g2RtDhwIhAOvj20lnno0%2Fn35ALuci6vjoA3Evla%2BOWUVaZkN8nhR2KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWsOkrUmOPjnxVPiMq3AOsylYT0HMpJZt%2FqQz1x4GGzVJXDym47HpZKAdcpPV2vmoigzTaDc5Dqyx4q1KjdiM1%2FLE6E1PT4ub3Sue5AzMgmM6WHKkBoBkpUZcZpapx1fwYHkc%2Bq5VY84V8ZQdjXmA%2BWLCAdtv3VVEtXev0NbvkkW3XL%2FpnEzdDs5cLCFY328UL%2F06DZlIqnymbwPx97CgSTxYQzc5aGL%2F4du48Oh6d1EGoY2VsM41h8VVTtJOptG5TcMiw0Z1P6%2FrTNLmbaIMgbfGwg7GkvR70hMrBI6bqdOEVgaI6WZYONhIr6l%2FPuLlRcUJp%2B7nk68Lfz2wFv8bpO58j1QFKX3YOYhkiKlgzs4DqmCW0QzjtWFPfGfFj6Ep2zgYed8nRTFWBgxfComsJvs5tcIgs%2BXl5gBmu8NI7lholeedxZ4iP7P8DZV%2FJYB8Eg4GwJyqvF69XtncO%2FoqDrwH%2FnQYCQ7Bxqkr3BtuNf7jg1KTFLB%2BmCeX%2FKMqCwiKigcjrm%2FMF4%2FHjVH1RFKDOZebADU8rqu7yVCwHQnfQO5OSGe67l6iJ3NZObx9jqPqf5B3qz2C1XEM0E9jdT5DYqkTRfOGTk8pMPyES5DSUzK6ceQev9C7OPIWpUgEneAwqLGnMtLyh1SMF4jDnj%2FzABjqkAWPSuiwi1mpQBpP%2FL4VQ%2FEwDBxeSBHRlGI605MgZqSBAkCRM%2F0UgqjdJNe6DBVbTuE7RQcZzKuk3O4LcGHqonUusBlzL6WB8ym5vlDGVXcvYZ80xW23ugsl8BWRG2yFxmyGzbIhSIXL5JZXS1FWaRe7fl6us2aSVteMOaD0wysy0uu%2FJbf2ob3oIF%2B%2BZ0tHft3fcKgfACRbdMWa2oyVoBMIohdBA&X-Amz-Signature=f8bb6d9dd132c02ae982a1c16bfcac0dfcf150a889cc3d023a0edbad346e48f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
