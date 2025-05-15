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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4KZGQZF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGmiIjj4TxhgHGZ5KJyWf3S7ItHvG36bDt955CyEJUQcAiB2IFW80IguHGTAo8D%2FqEHj%2Bwr9oJXAXK5spGq9kek%2B6Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAnXN6z3JHKSBH92xKtwDooU3fWk6rbLrg7ZpQ1itY79Q3VXYCQtemFsW%2F%2FW3VFI9z%2BUXJUtMlkU387sXTwEKJE%2B1PWvGC0q33whybNS1k5X%2Fc1uJLdukJTYovB5pqSGmnvpqoWTugMQJXP04t319EBEdLxYT%2FkLWeJYOODphiJtNdnP5%2BebJ9BXf7h1fU%2B%2FOmxILg9FkVcIVw3%2FEYoK7fsy18rE0uH%2F7mSGt%2FgC%2BLMc%2BkGC2b3YCFbkbTbWxHvzhPf44mes8tNcu2m1wNVseOVsVNc9QiTdSb9hyapLUeeDk%2BE1opL7kRATjJq4A5ARYI5B4VsOQRhwCITTHBoGz%2FNwKsKEtY%2BOu6pJT6OLvuki9sD0%2BmCecOnuGprUWT0LmKTmC684kV6hRFxUXsH6NQVCT1%2FN7o11I7PrERAk6OVLiV6QwfK4Qm5MbiQ47XcN9yzJDNwTqeXaM9MrKGxKRhFaZF52SAPGJ4Nwjuxl%2FJQxcRuwtLZnazF0r7y9HqVdodNJsiAh2nrCLlh8FGLLPbP6TM2djLFl0w4HGeIeWZSpTrAIHVivvlNDySQf6d6vxuyK10qG6QM1gfEJIKexVgFWnJ%2BTtDiwHUHVvEbfrWx7BKV8kutZNOhUrZkcTGUnF1xz4QeFHQj4P5Y4w5MiZwQY6pgH7VOfmOG8ykW1d7sbPzvJjo5Mpt9DDKgAPxFJEMI7JQdYvzDGkjUJQqQNnNZKMJLB0jnCzaVAfSkHx4v%2Fn0L4cXHvuvWeg4LKSc1m6TGluC%2FXPhZ2VatKlWUIWq4bZMMH9SSZsBTEHcGeoMObOJa8ro4ggB76rsGUJbknob2Sk2vC%2FTezp2jxaLRzBL%2Fme0kGAFk%2FJwsgrEwuj1yjzQangRfSIKJCe&X-Amz-Signature=5d86385c316aaf2ac70bbbc415a10ee5466bf6c5ab0a3f44ac27386ed25eee03&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4KZGQZF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGmiIjj4TxhgHGZ5KJyWf3S7ItHvG36bDt955CyEJUQcAiB2IFW80IguHGTAo8D%2FqEHj%2Bwr9oJXAXK5spGq9kek%2B6Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAnXN6z3JHKSBH92xKtwDooU3fWk6rbLrg7ZpQ1itY79Q3VXYCQtemFsW%2F%2FW3VFI9z%2BUXJUtMlkU387sXTwEKJE%2B1PWvGC0q33whybNS1k5X%2Fc1uJLdukJTYovB5pqSGmnvpqoWTugMQJXP04t319EBEdLxYT%2FkLWeJYOODphiJtNdnP5%2BebJ9BXf7h1fU%2B%2FOmxILg9FkVcIVw3%2FEYoK7fsy18rE0uH%2F7mSGt%2FgC%2BLMc%2BkGC2b3YCFbkbTbWxHvzhPf44mes8tNcu2m1wNVseOVsVNc9QiTdSb9hyapLUeeDk%2BE1opL7kRATjJq4A5ARYI5B4VsOQRhwCITTHBoGz%2FNwKsKEtY%2BOu6pJT6OLvuki9sD0%2BmCecOnuGprUWT0LmKTmC684kV6hRFxUXsH6NQVCT1%2FN7o11I7PrERAk6OVLiV6QwfK4Qm5MbiQ47XcN9yzJDNwTqeXaM9MrKGxKRhFaZF52SAPGJ4Nwjuxl%2FJQxcRuwtLZnazF0r7y9HqVdodNJsiAh2nrCLlh8FGLLPbP6TM2djLFl0w4HGeIeWZSpTrAIHVivvlNDySQf6d6vxuyK10qG6QM1gfEJIKexVgFWnJ%2BTtDiwHUHVvEbfrWx7BKV8kutZNOhUrZkcTGUnF1xz4QeFHQj4P5Y4w5MiZwQY6pgH7VOfmOG8ykW1d7sbPzvJjo5Mpt9DDKgAPxFJEMI7JQdYvzDGkjUJQqQNnNZKMJLB0jnCzaVAfSkHx4v%2Fn0L4cXHvuvWeg4LKSc1m6TGluC%2FXPhZ2VatKlWUIWq4bZMMH9SSZsBTEHcGeoMObOJa8ro4ggB76rsGUJbknob2Sk2vC%2FTezp2jxaLRzBL%2Fme0kGAFk%2FJwsgrEwuj1yjzQangRfSIKJCe&X-Amz-Signature=302f554adca2d8b438c905971df186726f8fd0b5ce256cb36a7c2dd52fe373a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4KZGQZF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGmiIjj4TxhgHGZ5KJyWf3S7ItHvG36bDt955CyEJUQcAiB2IFW80IguHGTAo8D%2FqEHj%2Bwr9oJXAXK5spGq9kek%2B6Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAnXN6z3JHKSBH92xKtwDooU3fWk6rbLrg7ZpQ1itY79Q3VXYCQtemFsW%2F%2FW3VFI9z%2BUXJUtMlkU387sXTwEKJE%2B1PWvGC0q33whybNS1k5X%2Fc1uJLdukJTYovB5pqSGmnvpqoWTugMQJXP04t319EBEdLxYT%2FkLWeJYOODphiJtNdnP5%2BebJ9BXf7h1fU%2B%2FOmxILg9FkVcIVw3%2FEYoK7fsy18rE0uH%2F7mSGt%2FgC%2BLMc%2BkGC2b3YCFbkbTbWxHvzhPf44mes8tNcu2m1wNVseOVsVNc9QiTdSb9hyapLUeeDk%2BE1opL7kRATjJq4A5ARYI5B4VsOQRhwCITTHBoGz%2FNwKsKEtY%2BOu6pJT6OLvuki9sD0%2BmCecOnuGprUWT0LmKTmC684kV6hRFxUXsH6NQVCT1%2FN7o11I7PrERAk6OVLiV6QwfK4Qm5MbiQ47XcN9yzJDNwTqeXaM9MrKGxKRhFaZF52SAPGJ4Nwjuxl%2FJQxcRuwtLZnazF0r7y9HqVdodNJsiAh2nrCLlh8FGLLPbP6TM2djLFl0w4HGeIeWZSpTrAIHVivvlNDySQf6d6vxuyK10qG6QM1gfEJIKexVgFWnJ%2BTtDiwHUHVvEbfrWx7BKV8kutZNOhUrZkcTGUnF1xz4QeFHQj4P5Y4w5MiZwQY6pgH7VOfmOG8ykW1d7sbPzvJjo5Mpt9DDKgAPxFJEMI7JQdYvzDGkjUJQqQNnNZKMJLB0jnCzaVAfSkHx4v%2Fn0L4cXHvuvWeg4LKSc1m6TGluC%2FXPhZ2VatKlWUIWq4bZMMH9SSZsBTEHcGeoMObOJa8ro4ggB76rsGUJbknob2Sk2vC%2FTezp2jxaLRzBL%2Fme0kGAFk%2FJwsgrEwuj1yjzQangRfSIKJCe&X-Amz-Signature=810c11439b086f6c8ae5b1d628a44afd94076a0ded16d74246ae131dddc37dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYFKE2J%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCVNXzJeLUWiRc7oE8Pfxgf8BI%2F0k9dKU6W%2BsslB4a7igIhANiT5yxI3eM3b%2FfOesWZHUkhvzBd4N1iSAk8F7zPF27MKv8DCDcQABoMNjM3NDIzMTgzODA1IgzYyk6RY%2Ff%2BOpj353cq3AMzq5jmLA9WJeU78ZG8aCUiRHcKnaS%2FFA2OJYd7Xs5WgS7OQBFV%2Fv%2BL4ruATWmBV1So1avA9wKIwZeQn1ewbqknONhz8w2lXUt5TfBAtRXombVEWk1SyTX7l5pg3bMgb4ITLIPlkquGQwkGURkXvzt996QUV8pzboapaENsMGkEvuZvrHapM%2Fw2KKa6CR%2Bdm19JqAwzH28p%2FIAgcrZ0nNwU1WBYWVhWc0ddbKb9COF9jqph2t2nI%2BfgY57n5bkAcgLVQJbSc%2FSMTHwO3AEU5A1LqCKEEKsBU%2Bjl9vH7yfcfzwA51iQv3oYc6IhgQx28Rq8n%2Full99wQtujsUH8%2B1CF%2BH%2FZmpYZ3TSCBuN24uIpM8REZe6n5gfCHwCljgyckFgfnomiqiLYpKHujKjXx88CTJtKNSrJIc5bYfYMwF2zyLtM8YavKDa1ZRAgrHanylmcm74ai9ld8E0ZJAxK0aS8aHkr%2B1V107PNVDiZWkkL4jp%2FzgXNPF7OVRMJX3Nt0RDhU0UYYiXgt%2FQA9PyGrzWt7%2FTmODbmx97%2BJGVX3C7tBCErWpSwPDWBLBAqgS6lhvTxSpkqvFR%2F8oWvwn5QzRu0Qi7EesBShwsi7K6Je1UF5A1rVujst5nR6nbaDkjCiyZnBBjqkAaikCUYxwh4uAazDXMZwVom4IOcEYbAulXGWX%2FEwe8ZG9eKj%2BipCKmWt4KfDpkg5FIWaW0NWnAgecwhWmsEyenJDuCEnI44wwojzaLHfhygWtPIZWQ%2FtTk%2BSfgLD8Z24iwSz0t8A2jBro6971NUB7W1bPvOWhYM3K5%2FCIBvTsXNyoRMEmGyam3s7EQxJndMNG7LRr0h48PeCn%2Bpi3f8ASoXcj%2BpQ&X-Amz-Signature=421189ce3d2282771e6ddb6ca80f1dc5e8f3bca52679729b6b2048361de794f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYNUCRG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGBrmGm2F0OnnaWfxMNh7umOC54JFvQ2ufNyRARNRu1XAiEAzz8IMWaQOvAC80ot%2BCCn7twtQcMV9APg1%2BUKuxlsWpcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOW0mi2a8QzDjWemfCrcA%2BS2yLxj2FsJ5AD4VF%2FIWf08MY7C7JXgS%2B%2Fd54IGbuU9Fku53rY595f7wETGu6%2F29MHqxhYgtD5sB5i2OB6CbJp1pr8ffARPMjYN6OtnsGFTmm%2Fk1Rxdp1SeSMFdalU6rO1Y6OR35Z9dFCe%2BeybZ%2FLVUlVUzKX5SrY%2F%2BNTJBJm%2BcP4flPnybHKJAFO9S8BLPon66FQq4v%2B2tHMbG3sKZl3eV2G%2BJTSDnHH0OXeG96GSnmeV21dWyXB2tnHBfWSqCqFQRUx7dbxYHYwqfDVCJ5C8hnjCw%2BSYr34CMeMMdL2A42gcZWd2bMh6HFk66xGgPHLKFtRl586br88YXsCtflhRK7QHNp1Xbj2VnI2IsNCyE29HJyDIsEQDJf3hcvq5Caku4hiPL456J3F5ZJlAb%2BzHym7IQFh7Ss6rF6Qn%2FW%2BG6wEj4jt%2FwpbZaEW5An8mGhT28yzjO%2BUlabsDr3ko%2Fw5BlhPzUhAihZ4BLfIjDmisPMeED%2BwOlsJ2So9i9cac9ZArzszKm%2FiGFvHxKgOB8mEnukzDq4n%2Fc%2BAC0ZKe%2BDDU2LQAR0r7%2BfxDv5wwrBDR9b6Pk%2Bn50qbbatCT9HJ1icn7x018vahV0luzhKxM91phBhRTrS0JvuyTHQ%2Bj7MLPJmcEGOqUBqEyjf7ebHkOEv8vRx9chHcnvZ4qeYgcB%2BH4Qo%2F78vb9QI5QYAHiIsdXKDuXw6wA8WSED95A7jmrUmNRlFW29kPUfDUUciEeXS6V7VNNcqVFy4y8Kk%2BeO0ivI%2FYbdZxX2RNPNUb%2BlodeeMOrfMCB2nK6uHpvVhWwL2aGMyw2Qf8cN6fpAa3HnEYnTgra1BAz7LLbfD3dL2ptBIut9DvTh%2FpoaXVIN&X-Amz-Signature=4c9fcc09251f4478b684033da5bef0600b32f7fd18d6c3d8319399cdeed6b685&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4KZGQZF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGmiIjj4TxhgHGZ5KJyWf3S7ItHvG36bDt955CyEJUQcAiB2IFW80IguHGTAo8D%2FqEHj%2Bwr9oJXAXK5spGq9kek%2B6Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAnXN6z3JHKSBH92xKtwDooU3fWk6rbLrg7ZpQ1itY79Q3VXYCQtemFsW%2F%2FW3VFI9z%2BUXJUtMlkU387sXTwEKJE%2B1PWvGC0q33whybNS1k5X%2Fc1uJLdukJTYovB5pqSGmnvpqoWTugMQJXP04t319EBEdLxYT%2FkLWeJYOODphiJtNdnP5%2BebJ9BXf7h1fU%2B%2FOmxILg9FkVcIVw3%2FEYoK7fsy18rE0uH%2F7mSGt%2FgC%2BLMc%2BkGC2b3YCFbkbTbWxHvzhPf44mes8tNcu2m1wNVseOVsVNc9QiTdSb9hyapLUeeDk%2BE1opL7kRATjJq4A5ARYI5B4VsOQRhwCITTHBoGz%2FNwKsKEtY%2BOu6pJT6OLvuki9sD0%2BmCecOnuGprUWT0LmKTmC684kV6hRFxUXsH6NQVCT1%2FN7o11I7PrERAk6OVLiV6QwfK4Qm5MbiQ47XcN9yzJDNwTqeXaM9MrKGxKRhFaZF52SAPGJ4Nwjuxl%2FJQxcRuwtLZnazF0r7y9HqVdodNJsiAh2nrCLlh8FGLLPbP6TM2djLFl0w4HGeIeWZSpTrAIHVivvlNDySQf6d6vxuyK10qG6QM1gfEJIKexVgFWnJ%2BTtDiwHUHVvEbfrWx7BKV8kutZNOhUrZkcTGUnF1xz4QeFHQj4P5Y4w5MiZwQY6pgH7VOfmOG8ykW1d7sbPzvJjo5Mpt9DDKgAPxFJEMI7JQdYvzDGkjUJQqQNnNZKMJLB0jnCzaVAfSkHx4v%2Fn0L4cXHvuvWeg4LKSc1m6TGluC%2FXPhZ2VatKlWUIWq4bZMMH9SSZsBTEHcGeoMObOJa8ro4ggB76rsGUJbknob2Sk2vC%2FTezp2jxaLRzBL%2Fme0kGAFk%2FJwsgrEwuj1yjzQangRfSIKJCe&X-Amz-Signature=27e61d1cfcb9bfd36d0a76957b2cb69bd8cb76b5d10def032697c8012cbb4d35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
