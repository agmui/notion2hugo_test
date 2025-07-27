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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW33SCZT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCG8%2F%2BNgw8WmwDDgSzabexkrZUl%2FJ8xqpCZ6DjywlogDwIhANQoKeOd8vzh4TQbkXUlVaExs34pTuVsbURjSwYZhYaLKv8DCH4QABoMNjM3NDIzMTgzODA1IgymOwDDsrVRn4UuTnwq3AOWXN7p8BW%2BHCCo4iCWB%2FAXcTGEb21fl5zcuTa6%2F3rxHNRMoqU96bHXqejoZvhs%2Bpw8I7i6Sbsgnqx%2FW%2BqqxUAN3XCL9pPgVzO8VtFMJjdOCYElkZhwwn%2B1ABWBQiOmOJ73dJO33V0nBrQCCIeMTNr9FEaTQWOlkHyk1HaAspk4GuJyU%2FyGf9fa1XWzNtcAwEEKL9jFD0%2FqpzHP2torub3W13mvyVcs%2Ffq1xpyV%2FC5rrFKvigZbyWkMy5nVgCqH76b8AsN5nzCmHJpAyuZA8K8x%2FTqq7z0ygCJEPAlld52%2FwM%2BX1Xz84M%2FgVB00%2FzTO8N6PFmrmjcyKo3wRIvcev4aq0cQBsez3iXx8Bm8gXKhVruvQXf6ZcO9amz2%2FOj%2Fme1FfbFJSu%2BD3RVn%2F1QpmgdpXVpRk4x5dMx16ZjqFWyQ0sIT2H0s6J2GC6sqmQllY4KmHni2RnhZa5vARbPiOSk20ApDfbJDp5ejolqrexiXfmMEq8OzGLG1d0w2NrrBNU9acCRhwrMho8pH2HvBvs0C85Ok4biN2YFeZua2MBE23iFoFyJX7rX3FtA5tEPWosexIb4FAaJhpucPKu5ANrailkIzsye5N6s3X8Tv%2FJeTs1cVOO80DdyrbR29HCzCbpJrEBjqkAX6xQkzfRMTeWQDONhdsucrbcHAHunY5qpJyGWf5pGjn8BpjvyEnhsTaM%2Bx0OXicIW0c0OLVBFqM69HGW0m5cj7wenFHkqLD8ZnbVFbLuzNVxMN2bM3w21K5%2Bng3aqbMNXfNwC3LMOg18FcDLXHHSI9iOx8aMGw6rbVdUE875Ey%2FSlOyYYL%2FPlTws7MgdWnaiQtv6as2L5NTn5ctVZjLfIhtiVoc&X-Amz-Signature=b4162a3f6d84ca4ac56bfc0290bc8f92e5342859b961d7dbe930e83cbe15841f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW33SCZT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCG8%2F%2BNgw8WmwDDgSzabexkrZUl%2FJ8xqpCZ6DjywlogDwIhANQoKeOd8vzh4TQbkXUlVaExs34pTuVsbURjSwYZhYaLKv8DCH4QABoMNjM3NDIzMTgzODA1IgymOwDDsrVRn4UuTnwq3AOWXN7p8BW%2BHCCo4iCWB%2FAXcTGEb21fl5zcuTa6%2F3rxHNRMoqU96bHXqejoZvhs%2Bpw8I7i6Sbsgnqx%2FW%2BqqxUAN3XCL9pPgVzO8VtFMJjdOCYElkZhwwn%2B1ABWBQiOmOJ73dJO33V0nBrQCCIeMTNr9FEaTQWOlkHyk1HaAspk4GuJyU%2FyGf9fa1XWzNtcAwEEKL9jFD0%2FqpzHP2torub3W13mvyVcs%2Ffq1xpyV%2FC5rrFKvigZbyWkMy5nVgCqH76b8AsN5nzCmHJpAyuZA8K8x%2FTqq7z0ygCJEPAlld52%2FwM%2BX1Xz84M%2FgVB00%2FzTO8N6PFmrmjcyKo3wRIvcev4aq0cQBsez3iXx8Bm8gXKhVruvQXf6ZcO9amz2%2FOj%2Fme1FfbFJSu%2BD3RVn%2F1QpmgdpXVpRk4x5dMx16ZjqFWyQ0sIT2H0s6J2GC6sqmQllY4KmHni2RnhZa5vARbPiOSk20ApDfbJDp5ejolqrexiXfmMEq8OzGLG1d0w2NrrBNU9acCRhwrMho8pH2HvBvs0C85Ok4biN2YFeZua2MBE23iFoFyJX7rX3FtA5tEPWosexIb4FAaJhpucPKu5ANrailkIzsye5N6s3X8Tv%2FJeTs1cVOO80DdyrbR29HCzCbpJrEBjqkAX6xQkzfRMTeWQDONhdsucrbcHAHunY5qpJyGWf5pGjn8BpjvyEnhsTaM%2Bx0OXicIW0c0OLVBFqM69HGW0m5cj7wenFHkqLD8ZnbVFbLuzNVxMN2bM3w21K5%2Bng3aqbMNXfNwC3LMOg18FcDLXHHSI9iOx8aMGw6rbVdUE875Ey%2FSlOyYYL%2FPlTws7MgdWnaiQtv6as2L5NTn5ctVZjLfIhtiVoc&X-Amz-Signature=1109b99def53cf16a8b8d6dc4f3845f316386371919439423b064ca46f351146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW33SCZT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCG8%2F%2BNgw8WmwDDgSzabexkrZUl%2FJ8xqpCZ6DjywlogDwIhANQoKeOd8vzh4TQbkXUlVaExs34pTuVsbURjSwYZhYaLKv8DCH4QABoMNjM3NDIzMTgzODA1IgymOwDDsrVRn4UuTnwq3AOWXN7p8BW%2BHCCo4iCWB%2FAXcTGEb21fl5zcuTa6%2F3rxHNRMoqU96bHXqejoZvhs%2Bpw8I7i6Sbsgnqx%2FW%2BqqxUAN3XCL9pPgVzO8VtFMJjdOCYElkZhwwn%2B1ABWBQiOmOJ73dJO33V0nBrQCCIeMTNr9FEaTQWOlkHyk1HaAspk4GuJyU%2FyGf9fa1XWzNtcAwEEKL9jFD0%2FqpzHP2torub3W13mvyVcs%2Ffq1xpyV%2FC5rrFKvigZbyWkMy5nVgCqH76b8AsN5nzCmHJpAyuZA8K8x%2FTqq7z0ygCJEPAlld52%2FwM%2BX1Xz84M%2FgVB00%2FzTO8N6PFmrmjcyKo3wRIvcev4aq0cQBsez3iXx8Bm8gXKhVruvQXf6ZcO9amz2%2FOj%2Fme1FfbFJSu%2BD3RVn%2F1QpmgdpXVpRk4x5dMx16ZjqFWyQ0sIT2H0s6J2GC6sqmQllY4KmHni2RnhZa5vARbPiOSk20ApDfbJDp5ejolqrexiXfmMEq8OzGLG1d0w2NrrBNU9acCRhwrMho8pH2HvBvs0C85Ok4biN2YFeZua2MBE23iFoFyJX7rX3FtA5tEPWosexIb4FAaJhpucPKu5ANrailkIzsye5N6s3X8Tv%2FJeTs1cVOO80DdyrbR29HCzCbpJrEBjqkAX6xQkzfRMTeWQDONhdsucrbcHAHunY5qpJyGWf5pGjn8BpjvyEnhsTaM%2Bx0OXicIW0c0OLVBFqM69HGW0m5cj7wenFHkqLD8ZnbVFbLuzNVxMN2bM3w21K5%2Bng3aqbMNXfNwC3LMOg18FcDLXHHSI9iOx8aMGw6rbVdUE875Ey%2FSlOyYYL%2FPlTws7MgdWnaiQtv6as2L5NTn5ctVZjLfIhtiVoc&X-Amz-Signature=82fa29dcb69edeb628ce7aace2e750799a4038d4a0180b202802a7f27acca749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO6GNI2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDEB46MoZyFN0uFMyf61eyNbqZMwSr59pkXVqVlWftTEQIge1lzaP49WnehaJ1hFBNdl%2BzBMMvj%2FvQUatTW1r9Win8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBSu01QRCixqafkqOyrcA9b762CHVcqY0gIR%2FB3q7Ic3QCYaNgxNvfpbISmGywvM7K0GtavrU%2FMSbupBprfgxeQQ%2BnAwFHBleR0ri9btaq2%2B15fkdDNpp%2FaJ09VPybLUGemjbSj4H4aV2VH75ATvZDwM3rDtSUArMYvHkcAAtdolcEOagl%2FoaPQ8stdO0yTbTmlpAxgsPV7F5NYnSY3laV%2BP69T1QH4BSSSGxsTT7WjfmYnRmykLpB6jQVxrV%2FtABUoEvFIfMAhFsADVqzNRCyzrMkEXVvJI39iAqvFEw4%2BQEUpDzyF%2FtwTB8m%2BTqZkCyZbPjGTyF6kUOWI%2FmPntnQNFvf4PfLyNjjzPRcVVPB4KGyKUD7zvw4mi7CINx8vpznJT7FQcxs9z%2F3%2F6yuET6Ekly0Lu9nbRe4SCT5oo%2BiQ2eQ4P0P8EY6vvAgcridGsaxjIQnJX6UGSMQrMna2i3uOgSkN8s5WTEnffQKRKjN3wfxWoVoFyytUIMbK547WLUn3kCrGmx1MWPjhES%2Fp%2FN4v4FyXHpCWYGnUPzjuC7m1RY8Qdz1x9GOraky%2BBvoP8PGKOHs8BimSmRlyhPpD4qNI2jnpdlggaw4xX2ibYv9nSGZUgXk5bW7ChswB2V1ZLH7vEVVbS7XWTfRLJMMakmsQGOqUBWB%2FbUuZLHhYnPgL2%2FBGR9l1nNTWxr3vb%2BoL%2Bag4Gv0BnhDawNVA%2B%2Ff2eAo%2FSPUjw7KlVS6sOXGlLnXoG8GC1LBcBw6NEYIAyjqs1thXqDGzyBVRkmwp%2Bt1Mm%2B9tQDj0wYoELMJbfLn7O%2F69M8ZwXasy9Z9t%2FCdR9DtX0ny60tOT5VPZJv1SLWBxDX9wrrkcNCN%2B%2Byo%2FLoCsYM%2FC4EeKyHCWDvIa1&X-Amz-Signature=b1f176abbf5491eb379fc4968a93bf9c7544b52bf26908e46ca9719da17059cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDOJR5R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEQBqM0GqgGX5j3kXjYZtwv6ZnLBE6ntyw0QfA0x0CUrAiEAgBdYIs2ESseioxXDcjcY9k4aGKfWI0cXTXCgw3kaxe8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIQFkMOCFEP9yY%2B9kSrcA0LKSUhhRWQVjH1G1juuNDpUTnPPqIHTuH9xWh0QirWZTHCy%2Fyxcg40udGVX66w5nxGiaFkEi7iANhDN7gyV012jkQ4upOXS00fvGhW9h8jAoOvjtEG9o3iL0GET6mrJyGT%2BZuy0CpQ%2Fn6EoIvulzccZQFqvXilyeBGn5g6NrLu6eO7EvTttZkkeZ2Q4R4gBUr5%2FDh45rKvXbjdt0N%2FX2UhP%2FJVXbcV5qlXgCIP43lfd9eVCB7ottR%2BMwZj%2FbOCCxG8IEjYpbP774sUU6Xy9K77%2FwU1y5yNx4Xv5LhLsRuBwa431IsztS4t3rHG%2FqKFnoQNcPLMSknYq%2FsOoTp1WG7oS23RrO7T7tQUIgaZ4F5PPtMilsA2Ueupo5UNbZ9ki%2Fm4urQ1NODP59D9bwgnBxoBUxKHkpuJvHER4tRQOLfihD0zCgps7Gbm8JvkAk%2BgU0W%2Fe9M1tArHDlukf%2F%2FvOCpoTVSdl28suvvoI2GT3oMM4faAcVtc63DaD%2F3JPXAV65oV2jbxMkGCBxonyVsd3Qba2%2BbhOkq76XhNhIn1eUenjOymxJOONAGgHushTh0DVItfSKsVmnbjws4iaOvEEmMM71PJ6ObAY2frXJaIJKMKUjYiMaANaLobsfG%2FXMI2kmsQGOqUB3nN0ACJUwQCOYama0R30Gv%2FM1y3sjfaoJ%2BvofFlQZCR883fABd2Q93iTlRS4C0COSQvPOzhJdhDlO%2B%2BSDrrjtqumnDbKfCohf5TULM%2FbkGe9I%2B44b%2BiphGJiUsG2GRwCBIWkLKfRyACG%2BQgThtO8R01QkmEBQ5DIelV9bfzhzWY7t%2BCv7ufYol57U41F4kVVnMzk80G9F7NlLtaRE11E0ItQvk5V&X-Amz-Signature=fb1b78722aedbb66f50cb560b46c59195bb08c5c63a33d74381acac58002cc2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW33SCZT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCG8%2F%2BNgw8WmwDDgSzabexkrZUl%2FJ8xqpCZ6DjywlogDwIhANQoKeOd8vzh4TQbkXUlVaExs34pTuVsbURjSwYZhYaLKv8DCH4QABoMNjM3NDIzMTgzODA1IgymOwDDsrVRn4UuTnwq3AOWXN7p8BW%2BHCCo4iCWB%2FAXcTGEb21fl5zcuTa6%2F3rxHNRMoqU96bHXqejoZvhs%2Bpw8I7i6Sbsgnqx%2FW%2BqqxUAN3XCL9pPgVzO8VtFMJjdOCYElkZhwwn%2B1ABWBQiOmOJ73dJO33V0nBrQCCIeMTNr9FEaTQWOlkHyk1HaAspk4GuJyU%2FyGf9fa1XWzNtcAwEEKL9jFD0%2FqpzHP2torub3W13mvyVcs%2Ffq1xpyV%2FC5rrFKvigZbyWkMy5nVgCqH76b8AsN5nzCmHJpAyuZA8K8x%2FTqq7z0ygCJEPAlld52%2FwM%2BX1Xz84M%2FgVB00%2FzTO8N6PFmrmjcyKo3wRIvcev4aq0cQBsez3iXx8Bm8gXKhVruvQXf6ZcO9amz2%2FOj%2Fme1FfbFJSu%2BD3RVn%2F1QpmgdpXVpRk4x5dMx16ZjqFWyQ0sIT2H0s6J2GC6sqmQllY4KmHni2RnhZa5vARbPiOSk20ApDfbJDp5ejolqrexiXfmMEq8OzGLG1d0w2NrrBNU9acCRhwrMho8pH2HvBvs0C85Ok4biN2YFeZua2MBE23iFoFyJX7rX3FtA5tEPWosexIb4FAaJhpucPKu5ANrailkIzsye5N6s3X8Tv%2FJeTs1cVOO80DdyrbR29HCzCbpJrEBjqkAX6xQkzfRMTeWQDONhdsucrbcHAHunY5qpJyGWf5pGjn8BpjvyEnhsTaM%2Bx0OXicIW0c0OLVBFqM69HGW0m5cj7wenFHkqLD8ZnbVFbLuzNVxMN2bM3w21K5%2Bng3aqbMNXfNwC3LMOg18FcDLXHHSI9iOx8aMGw6rbVdUE875Ey%2FSlOyYYL%2FPlTws7MgdWnaiQtv6as2L5NTn5ctVZjLfIhtiVoc&X-Amz-Signature=b0fa2b7a0f0b54dbda855e4103083d4ffe0836ba078e37510d925a29775212af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
