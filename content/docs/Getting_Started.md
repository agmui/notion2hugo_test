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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAZKS4M%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz%2FLBh63d%2FhBJfg2eSQefnMcFxYLQPQUbtLVmfJxLC9AiEAhZVqrpP7XlgtvnkDj1jlwYtevDsfWoW%2BRx4KEg47WNkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2IdmwW%2BlRbhFoikCrcA8GzERmq2jxh%2FLXUXfP3tFLleDQugGbLpxosihDxkYFUc%2FfcGaqSnti7UUGFZk9Oz%2FItHwsoqzbHcoYLVVsYugyJlwMfNq7PTolaborb0vBGZmgY%2BpDqaZV78b1WO8vQxg%2BDcWplGR2dRKi5KhvDy%2B4xFErJReT7RyD5Fl%2BQLjpvYP2tRbRWRapIPGbpqDN4%2FK2ysGgMGsj0lVbLfHNQCRalDws9AN34afLkJr1nAr7gPIczi3EDDCESxMu9qoi5SqtNmHI2vzB9UiQzudYIQzKUi6Yzlnqdr%2BFpl3gFOexPGTvjE4I%2FcdTphGWZc6TxJ6EoyxkRNNdlRFdSYHwbBBb%2F46w3%2BQ3moY25RvaDDkJKgrf%2BWz35TYHQCsvjoec5SLg67sAgy9puod8ItgpTOaYYhbtKzgyR4AUNhnPIgTuQM8Dr2k5au780l0LrRfPOYii%2FgP9lYBTeMTbvaCwLnI0uRRfNtgahMjZ81zmJWtHCuJnxDhIEsB9pmkosWl2ol6AoKaDlROWsOjQl3CFjNfGUPawDW2mIn1Ci8YFy7QMJURCYXr%2F10SzCxdwl%2BeHd6H13px5%2BnX6KDnYbA6xVu5U%2BIahhr%2BkeExw1pLgP4RSBJvquRBqgyntPFH0tMNTAgL0GOqUBXZIaXK%2BaeXIJAhTvmL1%2BZDfnmUU3DqTPP6d67lYrs3FNYQWF6nZZxxnu%2FjbowMrb9NEBDZv7H%2B%2FYxuuoDMvhLSbw05CfHD7T8szgE%2Fgkc2bjuSxxfe50NlMvv84aoMxC1dHGvbWBoleD9pRdHLWOPvdjfWkInWYTHbt6gGSnnXBFd9jss29%2Bb8Qf%2BW6pg1jhD%2FjM%2FNOlP6x3kyVKjapWiLoR5e7i&X-Amz-Signature=b093a58ece6169ad1af954b7500e8a36aed819119b2a5ce6ee07f5e082160a51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAZKS4M%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz%2FLBh63d%2FhBJfg2eSQefnMcFxYLQPQUbtLVmfJxLC9AiEAhZVqrpP7XlgtvnkDj1jlwYtevDsfWoW%2BRx4KEg47WNkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2IdmwW%2BlRbhFoikCrcA8GzERmq2jxh%2FLXUXfP3tFLleDQugGbLpxosihDxkYFUc%2FfcGaqSnti7UUGFZk9Oz%2FItHwsoqzbHcoYLVVsYugyJlwMfNq7PTolaborb0vBGZmgY%2BpDqaZV78b1WO8vQxg%2BDcWplGR2dRKi5KhvDy%2B4xFErJReT7RyD5Fl%2BQLjpvYP2tRbRWRapIPGbpqDN4%2FK2ysGgMGsj0lVbLfHNQCRalDws9AN34afLkJr1nAr7gPIczi3EDDCESxMu9qoi5SqtNmHI2vzB9UiQzudYIQzKUi6Yzlnqdr%2BFpl3gFOexPGTvjE4I%2FcdTphGWZc6TxJ6EoyxkRNNdlRFdSYHwbBBb%2F46w3%2BQ3moY25RvaDDkJKgrf%2BWz35TYHQCsvjoec5SLg67sAgy9puod8ItgpTOaYYhbtKzgyR4AUNhnPIgTuQM8Dr2k5au780l0LrRfPOYii%2FgP9lYBTeMTbvaCwLnI0uRRfNtgahMjZ81zmJWtHCuJnxDhIEsB9pmkosWl2ol6AoKaDlROWsOjQl3CFjNfGUPawDW2mIn1Ci8YFy7QMJURCYXr%2F10SzCxdwl%2BeHd6H13px5%2BnX6KDnYbA6xVu5U%2BIahhr%2BkeExw1pLgP4RSBJvquRBqgyntPFH0tMNTAgL0GOqUBXZIaXK%2BaeXIJAhTvmL1%2BZDfnmUU3DqTPP6d67lYrs3FNYQWF6nZZxxnu%2FjbowMrb9NEBDZv7H%2B%2FYxuuoDMvhLSbw05CfHD7T8szgE%2Fgkc2bjuSxxfe50NlMvv84aoMxC1dHGvbWBoleD9pRdHLWOPvdjfWkInWYTHbt6gGSnnXBFd9jss29%2Bb8Qf%2BW6pg1jhD%2FjM%2FNOlP6x3kyVKjapWiLoR5e7i&X-Amz-Signature=ea47eb8a4373fb530754592bc9846e283c7ed3b2a53e83c8528168874d754077&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPG64WMQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBsI0xizCcHYgr2osVJHEF79gBdv9GNaf%2FZPKRuL6%2FgQIhAOvNn6%2FMj1xg%2B8SuNQj8eaV7K1RxuZRRVbXdXoUpYXwZKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEntqLYj3D%2BzSvotAq3AN4E3WOPwAwUBIg81HPgrjd7AXsnCJpNz3SKZbv3p9Euw2qIm4pPUpU8j5gzF%2FiGxU08r87XkqXJj8vJ5nJBiNjB023oJ8S7IEFrIotN9grpLnMGCYpVGgtzD66YI3ITCe1BH0IUde7yXgfxPkHPhrcbX8hlkoBRZ%2BZkx5Y6dTt2ACRpmYao46NoHRM%2BezDVG0cVlq8PclWrxoQlG7B0na3LXcdGuQCHi1XjGviyHQiniNNAPBDxEpFYZRE%2FVxYDHBTyoUcNM4fvY2tLfBeTKTIApa35ScRKRWm8ULtYtggFZnsFRdiLCovE8gXmlE8lfoZEvWafv7vooaz9FrXyTAPeOOIz7LqfDoPPLlM1hP2bGtZ0jYT1TNqE2E8JOzMnJ6WOIlewlIRTqs0PDNQNR%2FwuTz3DsKqagL5TCzzS9RIcyZR5tIfPl%2FZ5Ut73TrnmHa7gQ0S9sR0MRi%2Bm%2FUhiBJx2TKzEP52kdKHcROK4FH5nkMbQMT3OJ7Fgk0sAaiGUqnt5WAv%2BGCOLY7rGhAy00iYxIEL81M8ZA88CiQc7jnyPF8z83FPFS9HDF2dk5evZ6l6KocF1%2BP4rHI63XO7Toz%2BbPS42a1J2j%2FwogfNk80Tej3qnMgoXBpVjil12DDTwYC9BjqkAatqX5guG53wDWHsdFucDVCMDfxDUvW8IkEAeTXsjqbFCKKkv%2BGUxmTK4uRWkZyvJVpCs3bjGkntUlu7CQOCTvB458Gf6wBfagmxBfdWbf3e9b%2Bw0u9RJC3OcpBbh1NA54VIyj2FBMs511D%2FT6PHWPUWH5C0qQa1gB5jd7i1A471%2BiF1TR%2FUJYKvJxDmO3EC2rG8NTGeLYOh%2FP773M44TU6iMorq&X-Amz-Signature=3ddadbb56d80b4495c230428f82e733f92207e6e5cef4d5e65dbd0dc38e29f14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTH7KYSK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FA4rwhoYvG3tDuCZR49lDHdLxD0Oa8qUwyZ90us%2FodAiEA39Fo%2BH9lOs5SipKuCnUXviGDlKv%2FqeO3fOcLOGfA6oAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4vEdlN3qDCtvto9yrcAxRtA6d8IYKKKpWgWBDjvtGx1y%2F%2BsgDBltLVze6mogq4QCPGQRwUeHZ5VIQ2r2uls0Ack0RShBeYhGG63kct1KBefGGOJ9giMn7ALcELhgVQ4KMorf1R9OHAm2ZdkGdZCp7TB6Cl57h0%2FojWMYQotb6HBkFeEcSgl1rG2txLF1tqF4RdYYL0AWXbBe92m3ubKcr0DJn2B9AqkJUTq1cB1pDC3MbyIEZ5nfRX8Z1GyVLINaaeoT1jUSsft0AV4u%2FAbtHQ1fHVApBm4rPJwYXijGJ8NvDTHc7E%2B4E2QcAhTxhqcyXbzVM1pz%2F1rItviX34D9gzutHpgm3TGdaItD2O0auBBRr6l07BGowGx496yYKS72tNqzh%2F2YZnDrJrICKgurRx6jfFl%2Fl165nteuMQPbEQGJ5iXA0NpnuzQeuYkDr%2FtEzRLdVqJCCtEcRsE%2BMtsHGyfqhPISvppvHvrKmWC3pvC%2BJzWlgfOKNPfortoAdC3%2BRmNuRIXqZgnzG1X7UcHYdAy2l9I6LcWr218MTFn6%2FpeXWUKvsUclEATcwc1dlXd4atBvPdyrGtdoR%2FyjZCDUBCpVsHWpxYJoXHJxIjZxxGszwPfP0T4XWJh0%2Bca4XMbFvMSi2WFp46LZeQMOXBgL0GOqUBlbe4L%2FVvyFB8qgcWXpOfhOa0S6pmGXyEekmAGaz%2FQ916lW6lp4wiN7pqQGoL%2BPkLZLbSJzDfrlNfy6jEarTvTo%2FPpaMufbvjJptHWzchTjqOtzXrxCdkiOHKwav2sIRyOthUqnN1iXWMWQdQ5UCkh5ih7j4%2ByXrNiQRiu2ZqDJAsIAbZcgjfeScK3N5GNNPdn3eAele5l3iFc9MZ852CNmwqgj42&X-Amz-Signature=19bb8a6ecb929bb0bfaec6d94f710cf69fe01d2bbe45dbb70ac7e2d37565fbba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAZKS4M%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz%2FLBh63d%2FhBJfg2eSQefnMcFxYLQPQUbtLVmfJxLC9AiEAhZVqrpP7XlgtvnkDj1jlwYtevDsfWoW%2BRx4KEg47WNkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2IdmwW%2BlRbhFoikCrcA8GzERmq2jxh%2FLXUXfP3tFLleDQugGbLpxosihDxkYFUc%2FfcGaqSnti7UUGFZk9Oz%2FItHwsoqzbHcoYLVVsYugyJlwMfNq7PTolaborb0vBGZmgY%2BpDqaZV78b1WO8vQxg%2BDcWplGR2dRKi5KhvDy%2B4xFErJReT7RyD5Fl%2BQLjpvYP2tRbRWRapIPGbpqDN4%2FK2ysGgMGsj0lVbLfHNQCRalDws9AN34afLkJr1nAr7gPIczi3EDDCESxMu9qoi5SqtNmHI2vzB9UiQzudYIQzKUi6Yzlnqdr%2BFpl3gFOexPGTvjE4I%2FcdTphGWZc6TxJ6EoyxkRNNdlRFdSYHwbBBb%2F46w3%2BQ3moY25RvaDDkJKgrf%2BWz35TYHQCsvjoec5SLg67sAgy9puod8ItgpTOaYYhbtKzgyR4AUNhnPIgTuQM8Dr2k5au780l0LrRfPOYii%2FgP9lYBTeMTbvaCwLnI0uRRfNtgahMjZ81zmJWtHCuJnxDhIEsB9pmkosWl2ol6AoKaDlROWsOjQl3CFjNfGUPawDW2mIn1Ci8YFy7QMJURCYXr%2F10SzCxdwl%2BeHd6H13px5%2BnX6KDnYbA6xVu5U%2BIahhr%2BkeExw1pLgP4RSBJvquRBqgyntPFH0tMNTAgL0GOqUBXZIaXK%2BaeXIJAhTvmL1%2BZDfnmUU3DqTPP6d67lYrs3FNYQWF6nZZxxnu%2FjbowMrb9NEBDZv7H%2B%2FYxuuoDMvhLSbw05CfHD7T8szgE%2Fgkc2bjuSxxfe50NlMvv84aoMxC1dHGvbWBoleD9pRdHLWOPvdjfWkInWYTHbt6gGSnnXBFd9jss29%2Bb8Qf%2BW6pg1jhD%2FjM%2FNOlP6x3kyVKjapWiLoR5e7i&X-Amz-Signature=e9340c3e61cd63781b7339a6e8b1d8ae7cba28a6d98264b682e330c71c284d47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
