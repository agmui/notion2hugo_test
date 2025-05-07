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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT3KX55%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ65XxEQ4sQYZxfRvbH677CoEDv3RZVr4TOaikJNlcTAiAPGG57bgmT8iUy%2F%2FOQcnqNi%2FZnHhU82gQkg9ZtU95rPCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMthEdfTdghjSqjcjgKtwDfgZvUHC6LXEzLnT1ZPjpaswOQ16ltuZtGhY4ntKGxEtZlIvzuinOpspbk%2BZ6faW7vomlamLgezWgyWkm3qMBmh0VKG0idhXWOmhxZUTOJzPkurCi9gTCTUqhR4ZLkLiZ0yBcRLe9yQ015jJLaKwMJUUkT7bSa6CxRj2tGYc%2B8QAfU6KVf9mLfOwyaqIQTqD8b0Rf4TlgKFOoc8piUnrWsQdKDDyCn8w1ZmK4v8rJvgDr4Zj3JRuA5BzM6gWfkOv%2FqDiKSBztkSiO77tdkbMU34gfpS2x5lhTNxKKKEjwuG3%2BO1D%2F8W5ItDN0naPJbyZoAESnJKvYQT9EkWNTlxFwab9t%2FLwkU463pSCBrL5DMfqsjqkDBn2LgQeLrfAE46I2Tf6EZdYoTSFhitaP8Cdqd%2Bv%2FfbT8O%2B3gTag5SWWIFDgWm7OXkYpRQEDyCQPnH%2FNISE0gVECxk72E7Mfymhl5myQ%2BnAtBGNxrcpCev05%2FLYnhCV8an0iT6jLDA8TWKZ0Sg2ptNtfOQ%2Fo%2Bjx8%2B6%2BAuuHRcyJFCJCPY%2BZVWUIQoQJRdoPISET%2B8GzVVa6tjqy4efrdN0uE4IDBZ2UrYLqkezwijVFktts2Ho9gMP4plGmRSwPv%2FGnpAIcMIz4kw4rDswAY6pgEeeMqLNOsE3NUakGKscmkztcERYO5iMWdR9ytgoIvTfSpcq13eIBobph3SnL7rOd9%2B12ZLCvfK%2B3N6AdIsdmWd2nY9zavF9H%2FDRJsLu3pi746RGnnbUiLu3O8AzSTEntTUSUxy6k0TvRpCAH288HcL6jonh7QIYMCIysaF2AUTt5k2tqoPuPQVVoMTMkcAyLJFBzJ%2FCRExRIMkFK9dBNFiNpkW61pc&X-Amz-Signature=19d2920d32ade59c57283af80fb2f30d786f326abc8707dfb656abd7f5a29b82&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT3KX55%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ65XxEQ4sQYZxfRvbH677CoEDv3RZVr4TOaikJNlcTAiAPGG57bgmT8iUy%2F%2FOQcnqNi%2FZnHhU82gQkg9ZtU95rPCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMthEdfTdghjSqjcjgKtwDfgZvUHC6LXEzLnT1ZPjpaswOQ16ltuZtGhY4ntKGxEtZlIvzuinOpspbk%2BZ6faW7vomlamLgezWgyWkm3qMBmh0VKG0idhXWOmhxZUTOJzPkurCi9gTCTUqhR4ZLkLiZ0yBcRLe9yQ015jJLaKwMJUUkT7bSa6CxRj2tGYc%2B8QAfU6KVf9mLfOwyaqIQTqD8b0Rf4TlgKFOoc8piUnrWsQdKDDyCn8w1ZmK4v8rJvgDr4Zj3JRuA5BzM6gWfkOv%2FqDiKSBztkSiO77tdkbMU34gfpS2x5lhTNxKKKEjwuG3%2BO1D%2F8W5ItDN0naPJbyZoAESnJKvYQT9EkWNTlxFwab9t%2FLwkU463pSCBrL5DMfqsjqkDBn2LgQeLrfAE46I2Tf6EZdYoTSFhitaP8Cdqd%2Bv%2FfbT8O%2B3gTag5SWWIFDgWm7OXkYpRQEDyCQPnH%2FNISE0gVECxk72E7Mfymhl5myQ%2BnAtBGNxrcpCev05%2FLYnhCV8an0iT6jLDA8TWKZ0Sg2ptNtfOQ%2Fo%2Bjx8%2B6%2BAuuHRcyJFCJCPY%2BZVWUIQoQJRdoPISET%2B8GzVVa6tjqy4efrdN0uE4IDBZ2UrYLqkezwijVFktts2Ho9gMP4plGmRSwPv%2FGnpAIcMIz4kw4rDswAY6pgEeeMqLNOsE3NUakGKscmkztcERYO5iMWdR9ytgoIvTfSpcq13eIBobph3SnL7rOd9%2B12ZLCvfK%2B3N6AdIsdmWd2nY9zavF9H%2FDRJsLu3pi746RGnnbUiLu3O8AzSTEntTUSUxy6k0TvRpCAH288HcL6jonh7QIYMCIysaF2AUTt5k2tqoPuPQVVoMTMkcAyLJFBzJ%2FCRExRIMkFK9dBNFiNpkW61pc&X-Amz-Signature=e61c6f1acaea7b07f20c90149dfe8904aa513ba1427950b7bfaf279b87c66f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT3KX55%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ65XxEQ4sQYZxfRvbH677CoEDv3RZVr4TOaikJNlcTAiAPGG57bgmT8iUy%2F%2FOQcnqNi%2FZnHhU82gQkg9ZtU95rPCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMthEdfTdghjSqjcjgKtwDfgZvUHC6LXEzLnT1ZPjpaswOQ16ltuZtGhY4ntKGxEtZlIvzuinOpspbk%2BZ6faW7vomlamLgezWgyWkm3qMBmh0VKG0idhXWOmhxZUTOJzPkurCi9gTCTUqhR4ZLkLiZ0yBcRLe9yQ015jJLaKwMJUUkT7bSa6CxRj2tGYc%2B8QAfU6KVf9mLfOwyaqIQTqD8b0Rf4TlgKFOoc8piUnrWsQdKDDyCn8w1ZmK4v8rJvgDr4Zj3JRuA5BzM6gWfkOv%2FqDiKSBztkSiO77tdkbMU34gfpS2x5lhTNxKKKEjwuG3%2BO1D%2F8W5ItDN0naPJbyZoAESnJKvYQT9EkWNTlxFwab9t%2FLwkU463pSCBrL5DMfqsjqkDBn2LgQeLrfAE46I2Tf6EZdYoTSFhitaP8Cdqd%2Bv%2FfbT8O%2B3gTag5SWWIFDgWm7OXkYpRQEDyCQPnH%2FNISE0gVECxk72E7Mfymhl5myQ%2BnAtBGNxrcpCev05%2FLYnhCV8an0iT6jLDA8TWKZ0Sg2ptNtfOQ%2Fo%2Bjx8%2B6%2BAuuHRcyJFCJCPY%2BZVWUIQoQJRdoPISET%2B8GzVVa6tjqy4efrdN0uE4IDBZ2UrYLqkezwijVFktts2Ho9gMP4plGmRSwPv%2FGnpAIcMIz4kw4rDswAY6pgEeeMqLNOsE3NUakGKscmkztcERYO5iMWdR9ytgoIvTfSpcq13eIBobph3SnL7rOd9%2B12ZLCvfK%2B3N6AdIsdmWd2nY9zavF9H%2FDRJsLu3pi746RGnnbUiLu3O8AzSTEntTUSUxy6k0TvRpCAH288HcL6jonh7QIYMCIysaF2AUTt5k2tqoPuPQVVoMTMkcAyLJFBzJ%2FCRExRIMkFK9dBNFiNpkW61pc&X-Amz-Signature=5cafbb164eeff703b673b92f81b687d5d22241629a5a1e4515638252295ba877&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6KGNK7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Q8jSgbZCIdIqR47QCoksmGmsjrmMtiSvoukG6E8zMQIhAJSpy9qLjTCDP601mlY1CSzjrQQwnJ40iVaD4GNJT1x%2FKv8DCFoQABoMNjM3NDIzMTgzODA1IgwRIr%2F0auKws%2BN%2Fy6wq3AOKr9fvjtd%2BcgvzW%2FyuzmxmurX35GR0BQUsAb6YezB%2FtxbH72yQJDMVvEnGYl3amBsfo067TIbkjpRe6wHD9hEPDHqmOuDQhGoKSfgsmk9axh870f7e1WfEh4ozV%2BJeusEZ7gJxIegsP%2FuqGOWc2lcqGLSbBL%2Fae0d3a1QTEjIsLKdPMWE5TrHUzKd0wJDIDeNqojKtRA03cSiT1oAu%2BlTArOqB%2ByhPGk1AXgyRqkC4nnl%2FAIfdS3N6iaBwW%2FhGhhat3kb3MSmNeMfXTo3ybiehUDTryWwmnWnX%2B1hzFES%2FI2F0jto%2B4jBtnsnW3N6VHniebPS%2Br%2FciXtwMcaLIL9ZcSob0UGurkE%2FQBU0kH7Z8R3tBbgZvPQ0frPfG076B7%2BFjBvg47yucxlbYR98OZl%2BWXD0rL3mUHfK08FO6gldyQvRJCgnGAx7KClrxYEEg6CHjlya58FwoGZg%2B5ZW%2B4yjYJHWaOel9UfBBjRu6mYb0R8G%2BGymZmiL%2BAMBuAd8JRT0nma9vQG29%2Fq8tHFfV3plZCh45ZphKB46JJcQnaikRUN6Jrt3FK%2Fwc74BUwyK%2BcnNRVKuP2G0eL%2FW0JKaUpADa0AziqyFxIDsfJ5h4HofxLpq1r05h15lmKRioOTD0sezABjqkAYuHpVhm6zNrw920XndOKgGGBMje28dcEVRAVNO6%2B08PECIaePYN3LZMCk7QOolxVX73f30DDC7mAeeWvowBG7b6V4AKdoaQMrFnHtaZ3BLL0jDlnY8QQ50CGjp5MsrEdXbAr%2FrLg7Nxx78NC9TuByMhotiUGJmWNCdXiQ%2F%2BwAXZE5lY84ojCYDwj50TJHR%2FAVOa7b%2BthTkNWYcYT06N9307mI8u&X-Amz-Signature=e070fb6f19958d19c8555ef073ac3d6c1287f2ff915da6f5fda33b69bd5318e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DCG5EDE%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTxDI9nr06MBTwB0Uyw3GByY6luSAYmNa6aBAn1uI1VAiEAt0djS6hwfzPuKjmdSbSIZHKeK0cV2jrKiE1HNHfRGiwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKnkvWnGjFZ0VEBPTircA9bPs1ZD%2BD0CujchbTCvdllgXCnYevE5YcUp0nF%2FAsK0nBiZuTVnBjMKwIQaEW4%2FsB7UGSjQy3c74i7s5UseRNqlNmEnLQ6UXgrog7X6vGCYJLwinnJvhdR6hoCPPRezOZ0JCtLVucNhfAM0ZrEZrh9d9LvqwGyKbRL6CXv3n1WXjPNfjFBud2HtDpbhQedKsc7iovHa%2Ff8kVmTQV6b%2Bf8zYQn5yZZwkGP%2BFgtYzqvCWdsfLDlH7ii5IbUN0p3Rmy7ExVXbqgY0oqrq0a4hxCXrXoLDfK8AxVN3zQIbVNMzyXthhp3VedDUMVdlOZLgS1%2BIp53bFH3ts7pdGBO1w%2BZX9Oty4oLeactciIIJewCRiuLYuAcuEWG08idpEu6bGcH2s66epj84NfmYm1IeJD5yA4j3a4zXuKdSxo4TdQQT3y19mwTZsQSH38uUcHn4cp0oLdwqotKrG5YBeTHlKO45iJGykMVD66kiYBwZuGnH6IA4iT4zq0OWqRuU3U4Hf79ZHgh%2BPgw9UCN%2BMmc6061GbdeVJEFO%2FNzQw4u5Yf%2B%2BfRtjMMgR3ExHcobwc%2BazS7YoknDRzJ13Hi%2Bu%2Fx6rzT0gTFMi9o%2FSUykwLumk9yuV9fbmniN3vUGHGS%2BuzMKmy7MAGOqUBkzIHtsnAw7NUh6Xf8v0jZy67SYuM9BJWV9GDlWJRS3gpO4ot4Yak2vkuACn6Pj%2BEfp4d53YtFHZ%2FGe0MnP9lz92EDaEDBlYUp1yqy%2FFJxTRtDuBsZTyRxu1eKfyLqsutxGnoiaMEKN%2Ftgd5seIjc7CCOneODwQZdERRuJ1%2FodBWr8DLIQ%2Fo5Qoio9tA2nBjKlw%2F%2F5bCNwzVkqBblumgsUhxZFgFB&X-Amz-Signature=47df62ce673f6fd997dc84de1c4ea95f49d7773bd38c3e610d4ff7bca6a9ede5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT3KX55%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZ65XxEQ4sQYZxfRvbH677CoEDv3RZVr4TOaikJNlcTAiAPGG57bgmT8iUy%2F%2FOQcnqNi%2FZnHhU82gQkg9ZtU95rPCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMthEdfTdghjSqjcjgKtwDfgZvUHC6LXEzLnT1ZPjpaswOQ16ltuZtGhY4ntKGxEtZlIvzuinOpspbk%2BZ6faW7vomlamLgezWgyWkm3qMBmh0VKG0idhXWOmhxZUTOJzPkurCi9gTCTUqhR4ZLkLiZ0yBcRLe9yQ015jJLaKwMJUUkT7bSa6CxRj2tGYc%2B8QAfU6KVf9mLfOwyaqIQTqD8b0Rf4TlgKFOoc8piUnrWsQdKDDyCn8w1ZmK4v8rJvgDr4Zj3JRuA5BzM6gWfkOv%2FqDiKSBztkSiO77tdkbMU34gfpS2x5lhTNxKKKEjwuG3%2BO1D%2F8W5ItDN0naPJbyZoAESnJKvYQT9EkWNTlxFwab9t%2FLwkU463pSCBrL5DMfqsjqkDBn2LgQeLrfAE46I2Tf6EZdYoTSFhitaP8Cdqd%2Bv%2FfbT8O%2B3gTag5SWWIFDgWm7OXkYpRQEDyCQPnH%2FNISE0gVECxk72E7Mfymhl5myQ%2BnAtBGNxrcpCev05%2FLYnhCV8an0iT6jLDA8TWKZ0Sg2ptNtfOQ%2Fo%2Bjx8%2B6%2BAuuHRcyJFCJCPY%2BZVWUIQoQJRdoPISET%2B8GzVVa6tjqy4efrdN0uE4IDBZ2UrYLqkezwijVFktts2Ho9gMP4plGmRSwPv%2FGnpAIcMIz4kw4rDswAY6pgEeeMqLNOsE3NUakGKscmkztcERYO5iMWdR9ytgoIvTfSpcq13eIBobph3SnL7rOd9%2B12ZLCvfK%2B3N6AdIsdmWd2nY9zavF9H%2FDRJsLu3pi746RGnnbUiLu3O8AzSTEntTUSUxy6k0TvRpCAH288HcL6jonh7QIYMCIysaF2AUTt5k2tqoPuPQVVoMTMkcAyLJFBzJ%2FCRExRIMkFK9dBNFiNpkW61pc&X-Amz-Signature=81fb0a64d92270aca885ec71212aed9044f9b4096f26edad6369f0627b0f295d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
