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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7NXVCR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3oGjP1CIGIxYIbQ5bGovoPpUvsccldWUgq5ZQyBukVAiB8tjF6CJi1NW%2B3W9ynq53ersnEmmx7TKRJ0S9b5LtlPir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0YWc0RSdvEDPUM5xKtwDTVXbtoB%2BHlytp0UGfSGe3cdKtrE4Gcz3KsspCT5lc%2BsfdKTDRHuqP1krUooTiiYp4sHt5dn%2BI8KV1nY2xtjyOPp6bIBkRn0K5Tsaeq2LcKj%2Fr1eLm9hCVpqpUPeXHJeCYJICNBenBNcHlsDqpao7jUwCf%2F2f8pDzFRwoe6%2BU8e3u6L7h%2BFiYaVeyMQHmNjGAH7i3Rev%2BCM%2Bz9AHt%2BErGuQafc1%2B3xsscD5kmf2MkhXTh5nGntcAspUtCP%2BgoGO7bvx1NtH1zyTg2ZsJOmYNTloTxTCZswRqG3B7pGYBdKl13AxSoGoFXSK%2F1FNlD7avM8%2BWzk1bFhEruqWNSPgc%2BVm5H3HoKe%2BWSl6m%2FMhgEpx2kgkD9%2Bo%2B%2B4Vo1LUmBx%2FXWr46sIDEXNL%2Ful5UUOALkA9fBkbsZOspibkrHUo%2BGRmhRi%2Fo7gqJdcikirJfAbDvZG%2BLGEzw5WTFA4MeuJGDmUCc9XmTIDPAsfnm1eYwMDfLB%2F4tHorN6uvKJGrbx4MsJt1SOgv5IQPMXm%2FUtYejZC10bNfnzGJDDxPfWceS0wyo5ajCITcxF9w%2Bx9yw7lluLdsFPyuB0rfvZl0mFEvK5ENdIj5AV%2F3%2FTHHSthuVHKbewQaXuOuLl6P5iOJ0w4PzyvQY6pgEh%2F7yYTdg0TuGjh8AjNDirhCfDVG%2F7A0XZHbQa7ubmlaSiLxOCbrvhSS74KFAEqR0PWDEVXntuRd8BU5HqnZMSgKTdJTFxTp6eGtTBIh772eu0PUwmUIyzBjxtpvt66jhlS3LbO3pCpuNBXMXIkR5sYjML6vqTTj%2FLNkEH9jZaa6TxRMuN8JbHi9JmnGGdml5YyYA7I6O9n5o4kqek5CKqenIeY%2F7i&X-Amz-Signature=a0a4434f9f936e8eae4cd32ceef266796de37ac8cc249f8436925a869d601668&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7NXVCR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3oGjP1CIGIxYIbQ5bGovoPpUvsccldWUgq5ZQyBukVAiB8tjF6CJi1NW%2B3W9ynq53ersnEmmx7TKRJ0S9b5LtlPir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0YWc0RSdvEDPUM5xKtwDTVXbtoB%2BHlytp0UGfSGe3cdKtrE4Gcz3KsspCT5lc%2BsfdKTDRHuqP1krUooTiiYp4sHt5dn%2BI8KV1nY2xtjyOPp6bIBkRn0K5Tsaeq2LcKj%2Fr1eLm9hCVpqpUPeXHJeCYJICNBenBNcHlsDqpao7jUwCf%2F2f8pDzFRwoe6%2BU8e3u6L7h%2BFiYaVeyMQHmNjGAH7i3Rev%2BCM%2Bz9AHt%2BErGuQafc1%2B3xsscD5kmf2MkhXTh5nGntcAspUtCP%2BgoGO7bvx1NtH1zyTg2ZsJOmYNTloTxTCZswRqG3B7pGYBdKl13AxSoGoFXSK%2F1FNlD7avM8%2BWzk1bFhEruqWNSPgc%2BVm5H3HoKe%2BWSl6m%2FMhgEpx2kgkD9%2Bo%2B%2B4Vo1LUmBx%2FXWr46sIDEXNL%2Ful5UUOALkA9fBkbsZOspibkrHUo%2BGRmhRi%2Fo7gqJdcikirJfAbDvZG%2BLGEzw5WTFA4MeuJGDmUCc9XmTIDPAsfnm1eYwMDfLB%2F4tHorN6uvKJGrbx4MsJt1SOgv5IQPMXm%2FUtYejZC10bNfnzGJDDxPfWceS0wyo5ajCITcxF9w%2Bx9yw7lluLdsFPyuB0rfvZl0mFEvK5ENdIj5AV%2F3%2FTHHSthuVHKbewQaXuOuLl6P5iOJ0w4PzyvQY6pgEh%2F7yYTdg0TuGjh8AjNDirhCfDVG%2F7A0XZHbQa7ubmlaSiLxOCbrvhSS74KFAEqR0PWDEVXntuRd8BU5HqnZMSgKTdJTFxTp6eGtTBIh772eu0PUwmUIyzBjxtpvt66jhlS3LbO3pCpuNBXMXIkR5sYjML6vqTTj%2FLNkEH9jZaa6TxRMuN8JbHi9JmnGGdml5YyYA7I6O9n5o4kqek5CKqenIeY%2F7i&X-Amz-Signature=be5c0ff1432bec328a0b5c70982a8fcae7311842ce29288df31795b29556617f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IETAGI4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKU6i9boBjX5uhRpg1GUyQj%2BoiFsGVPv%2Fhn9K8m%2FN3%2BwIgTDx7ZpaaCU2dI6Xz2H7ogcFNdXPM%2FghjeUoFllfiXPYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPsQCQc1Rq3pxamVcyrcA%2BvZZQXsnPItM3KcgBPn4BiOu7la7KIKDfnY5humNlCA4aPkjHANZbr3yazP12Jymz3zkQ1BFrKDp1T%2BoTGwE0%2F0HUVLUTQWqdLHhbTeH%2BCeJ2SF0ef1IS4yyCtHrHX3Kf6%2FMXiT%2BJ0OhO1OaqSrRsA4JY0SbG6YxH7DKTJJVfQjBTbJk6HqEz3dpt8T7ueLz1SVLQtSZQZuW%2B6H70r7civ54xxKqJX6tj3tza4es8gME%2BdPPH3vUACivuOc0lfnhqE9YO30pCZYi7fLPaXG07ESL9ctBSn5Al9EIMSrucDJuKNjsiyI5pqSF6pJ0hH%2BeHieyKUcTZUsw4JLcM5UuyuP1pU7EJ9nQP6F8jNuDMo7xQToGW%2BnJ8A%2FrdsbnVu9gWvyqePpES4cOsxj2xg3Vw0cJKJZoX3AOSz3mcRLGHTuhCrawvN7ZuY4UIevzSFR2XyTFEmNJ%2Fz4ID2xQDRKQCQL6cd7Js8IAdzb7dDFiHbqorP1dK3AdnS72tWxwkwXbrUenLEgwCxBujupzk6Veef35N6bguxf6Q4x9YU243kwumS96JqDpUB6hGdIhpKIiTwgo5%2B7kh6RSrpgnVBqy8yjpqKYqcRAmkkYg0PXRLit4qI9iGeQ%2Fne5VATbMKH98r0GOqUBP9exAuEjrlAIFnHe%2F6JKk%2BAWKUC1xl7uF29ulU9CT%2BgHee%2F7S4eAOyhZB7IrWl%2Bge18eA1KGzBlnH3BOTrpDKGJbEPl%2FLI36sgZ8BWxQCAMLyT2fOuG10hSsk%2BCGrSuGwGB9W6xjF4nNa8EWujtzfNByW9MxjkrWe8yQyHzgSe8cqF%2B5OFj9IMHqmMT234X%2BSGbFshZcwX195Tkh%2B1%2B3h5Ir3CcM&X-Amz-Signature=cfc93a651b41ed222a2cc217adaf059f1ba87802e04bf89d40e401539a5ed625&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSM64GG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhIR94ddqAb5zeJTikuaC8Q0ZtfWQjDeggQnmaPzkJRAiAtoEBEi7CBdBF%2FjPGFGcuoefVj8q7OORtJyPIxrUQtkSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMLi2Wzm7uNDKKBbjvKtwDlqjsZqwl4WEmT9nVD9RnYyyQxwRcsBHbCDZ1N%2FsDH1%2FOaPKdwlZngc1g6F8FXLDjn6xXxxZLMn8DEDSrswXbbeJB%2F68XHbwg7CpDijFhmjd%2FVu%2BPdYvVpSwNMRjzjqt0pk%2BlDCvMxMQqVNu7AFv3pKFowEDXzw3MvNGh5XbkRyDKvNZ9Yi39lPqmcbUpcvMc4R7xoRm63H6r2xxmncBkUWxOdTdAp6PvdNg927DUXvchZkhP0TgXas7Y3EJZ2%2BX28vy550npFjKMeqarD1LlOonDrmPQHCdJfV91dILTLrBjbAgkvIkQyGDbqhd6i5x%2FUr1IZY9OLBXF6IeYBlSZeCxeFL4Rw4C3exwA5BqaWcl8vCwBIpKhWQuwo1EeFunc%2BDi6%2F9mlnuu%2FiiII2c8GrxWd0sZwIZozoRw5sntdZ5y1v2F%2F%2BAR%2F0vRAkmylHdX244JodW%2BMqIJqRv%2Bf%2F95UVScghOuZ%2BZRShC6GzUT%2Bv9uAvrCQzPdUR7pmHXoz9PEiuzB1M7YVQJwX34w3wIzpmC4LkSmjo2fcR2l3sJi09uwqll1iO0W%2BGcexqxjG3wlt8eZNixcKzCxniJvlD6Ex1ekyfrBVRvOjsziLIAKvaShX98CbOnvpTvylyhYwyfzyvQY6pgE44m9fpBK1ZXCDUaDofqf42ZfwNjeUq0GsCs8pzhhWPO50Dpvk6fRrQN62iCW7xLPUyjeilZs5qGXrE%2FRyQKMRNypybUrdWMHUBQ0VJDAgvUmk5GnPFtFWbafXgGg%2FewOkEv0unJn3k2AgZCwQIzu6p5fdYAadXmTGkEMlRasM71cfKMSJQzst9iuZve6nQ7y13iaEdnrxM8i294vEOPURI0mlE3%2Bj&X-Amz-Signature=bd18ae638899436563ae68b0a7f241200c7aed85f8dfc2310b47d8c53b7ab2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7NXVCR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3oGjP1CIGIxYIbQ5bGovoPpUvsccldWUgq5ZQyBukVAiB8tjF6CJi1NW%2B3W9ynq53ersnEmmx7TKRJ0S9b5LtlPir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0YWc0RSdvEDPUM5xKtwDTVXbtoB%2BHlytp0UGfSGe3cdKtrE4Gcz3KsspCT5lc%2BsfdKTDRHuqP1krUooTiiYp4sHt5dn%2BI8KV1nY2xtjyOPp6bIBkRn0K5Tsaeq2LcKj%2Fr1eLm9hCVpqpUPeXHJeCYJICNBenBNcHlsDqpao7jUwCf%2F2f8pDzFRwoe6%2BU8e3u6L7h%2BFiYaVeyMQHmNjGAH7i3Rev%2BCM%2Bz9AHt%2BErGuQafc1%2B3xsscD5kmf2MkhXTh5nGntcAspUtCP%2BgoGO7bvx1NtH1zyTg2ZsJOmYNTloTxTCZswRqG3B7pGYBdKl13AxSoGoFXSK%2F1FNlD7avM8%2BWzk1bFhEruqWNSPgc%2BVm5H3HoKe%2BWSl6m%2FMhgEpx2kgkD9%2Bo%2B%2B4Vo1LUmBx%2FXWr46sIDEXNL%2Ful5UUOALkA9fBkbsZOspibkrHUo%2BGRmhRi%2Fo7gqJdcikirJfAbDvZG%2BLGEzw5WTFA4MeuJGDmUCc9XmTIDPAsfnm1eYwMDfLB%2F4tHorN6uvKJGrbx4MsJt1SOgv5IQPMXm%2FUtYejZC10bNfnzGJDDxPfWceS0wyo5ajCITcxF9w%2Bx9yw7lluLdsFPyuB0rfvZl0mFEvK5ENdIj5AV%2F3%2FTHHSthuVHKbewQaXuOuLl6P5iOJ0w4PzyvQY6pgEh%2F7yYTdg0TuGjh8AjNDirhCfDVG%2F7A0XZHbQa7ubmlaSiLxOCbrvhSS74KFAEqR0PWDEVXntuRd8BU5HqnZMSgKTdJTFxTp6eGtTBIh772eu0PUwmUIyzBjxtpvt66jhlS3LbO3pCpuNBXMXIkR5sYjML6vqTTj%2FLNkEH9jZaa6TxRMuN8JbHi9JmnGGdml5YyYA7I6O9n5o4kqek5CKqenIeY%2F7i&X-Amz-Signature=ee6f918a565add89f4ec0dd0445f94816ff106f949c742cbcf4aa91f57d3374b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
