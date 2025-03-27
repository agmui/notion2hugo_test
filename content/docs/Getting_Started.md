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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W3GTEW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQXIJXFug9cgiCCzbyyGZJHqA2%2BoVin4Y8RW9%2BWN0mvAIgYSd5unHfYb6PsdSoInJls2cH%2FIVi7lZX4hlzG%2Brd340q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE2i1OG%2FpBvO1%2BnCFCrcA6lPCLF1Kem9M3WIEVGccVo7rnOd12XgVS4LWi57DnSEwI6MYuG37yg9YYZQV5%2Ba1XwlDoxF%2BjgUKisFWblTVg5a4hm15wrtTupCF2Q4rhc1pwDmrjRp1xyklviKhEsviv4OV7F%2FZZBs1heXCoHaEqtf5dzY%2BrCmaEIYteHpw6kQBIOJ7FtqbeYKu37Ihe1cqC82vsLVDfqeZQk%2BZ3iXYKn2mvWggJJJJ4MByq973xNqSl0II%2FedsSocyrxKRbRMURWy%2B8pwHDPcE6FWDZjyI5bpEGIQhwYS0vioCFwW25myMk7qpFoocI6dKB4PdOvJM%2FU2odHzxrqPzxf3rSGmDeyh8%2B7OkHo%2FBKttJk3%2FjYxhYSk0ZEnWAeRzQIvu2CzXuiW2IAEIgcrYoUCoa83T5QtgNVb%2BAOwESk%2FGnaOq6G2WFABbJ%2FsezbnWU%2BjZteYu3Vo6v0C8AYikQ1dBxxZytkFL4V1zch7hcnmp7FsQOo1uOE8xAkOzP8CCe%2FjmBzq5LKLMprHNCZa3mFhOfIikmwvE8pGSFyXq1ESARWCL0YLBbrSoz7gbyfItUXMM22TK3rP9V1KsJ5r66R6w%2FW7MkZJaXLoCRrQPb%2FfwEtp1gm9WI1bu8SXx4%2BB%2BqcaTMKOGlL8GOqUB6EZHCnlb%2BE38D6FU15Wch4j5TO3JHSdl0dgIsMr8zAzGnfseNw6vrk4WSEwgWCR3caVfjEfhLQsqez36JtOJvNF3I1YPh39C00Uj2N3eMltOyhdCoS0QbbHigu5hA2TY31DKGHizbYSzb035z9h%2FB9iwBnCeKCQxmVVCgFF%2FjpiQAPeKGPx1dLwe5yP8BAiTrkmr4Nz8ZtREH%2F7kUoUEcjDN0XUU&X-Amz-Signature=a131fbe7d96cf164a837ba7de06d85635b674a8f86a2280b50fc932196ddc84a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W3GTEW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQXIJXFug9cgiCCzbyyGZJHqA2%2BoVin4Y8RW9%2BWN0mvAIgYSd5unHfYb6PsdSoInJls2cH%2FIVi7lZX4hlzG%2Brd340q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE2i1OG%2FpBvO1%2BnCFCrcA6lPCLF1Kem9M3WIEVGccVo7rnOd12XgVS4LWi57DnSEwI6MYuG37yg9YYZQV5%2Ba1XwlDoxF%2BjgUKisFWblTVg5a4hm15wrtTupCF2Q4rhc1pwDmrjRp1xyklviKhEsviv4OV7F%2FZZBs1heXCoHaEqtf5dzY%2BrCmaEIYteHpw6kQBIOJ7FtqbeYKu37Ihe1cqC82vsLVDfqeZQk%2BZ3iXYKn2mvWggJJJJ4MByq973xNqSl0II%2FedsSocyrxKRbRMURWy%2B8pwHDPcE6FWDZjyI5bpEGIQhwYS0vioCFwW25myMk7qpFoocI6dKB4PdOvJM%2FU2odHzxrqPzxf3rSGmDeyh8%2B7OkHo%2FBKttJk3%2FjYxhYSk0ZEnWAeRzQIvu2CzXuiW2IAEIgcrYoUCoa83T5QtgNVb%2BAOwESk%2FGnaOq6G2WFABbJ%2FsezbnWU%2BjZteYu3Vo6v0C8AYikQ1dBxxZytkFL4V1zch7hcnmp7FsQOo1uOE8xAkOzP8CCe%2FjmBzq5LKLMprHNCZa3mFhOfIikmwvE8pGSFyXq1ESARWCL0YLBbrSoz7gbyfItUXMM22TK3rP9V1KsJ5r66R6w%2FW7MkZJaXLoCRrQPb%2FfwEtp1gm9WI1bu8SXx4%2BB%2BqcaTMKOGlL8GOqUB6EZHCnlb%2BE38D6FU15Wch4j5TO3JHSdl0dgIsMr8zAzGnfseNw6vrk4WSEwgWCR3caVfjEfhLQsqez36JtOJvNF3I1YPh39C00Uj2N3eMltOyhdCoS0QbbHigu5hA2TY31DKGHizbYSzb035z9h%2FB9iwBnCeKCQxmVVCgFF%2FjpiQAPeKGPx1dLwe5yP8BAiTrkmr4Nz8ZtREH%2F7kUoUEcjDN0XUU&X-Amz-Signature=d85b07c770931b4353bc0a2a88458d66baee8d01adcb86b78f4b6f71dee8527d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVRPA3JI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuJJDQ9zdfX5QsRsbNijPoyY1Prcq5ZRK1xR3K0W10VQIhAMV9sPlmA7evqW10OGRfu77aMx0KSk4vq1eSRH16KQQJKv8DCEEQABoMNjM3NDIzMTgzODA1IgxEsiVC%2FTFiHqU0yZAq3AMJI7msqOIm1qioBae5wt5tk2vM74BFa5CZdGG5DLrSBshjq0zPFtlx24mM63DqlWuYBaFjJDIOEs6Hu6XPUoKAqj6jg0yUNksECRTFkMH7Pb7mIT3wQ42GCTeiQR6xE1X%2B707E3vmkHBLSNxaQS1P0WZsTurcGQJjBCn1P6YfNbIvzNep33pWr7Ipmsdft7l%2BP5TgcfistLuCcI6%2BP489TGskQckSw4zcy7kYZQyCTndlIVYcARxH7ApFWzcsT%2BWQFFtGkmLEnm%2FUB3RdqtP2BjMyFW0UjrIImtTQr0Eai0dxgKts6p7fY5J83cUh2EeoghGJA9nj4ZaRQKgj5WHY%2Bgs%2BW05ANHk9VwzKxqhb9vnWBJp4lXEyKgIBFvsCmxF%2F%2BwoPjRYpuVHNnMWxq7QdWGNlNKNbD6pb1RomARC68f6%2BWOnZbTVqi0KaHGAgCpAsUJCQPPyeJYqYTkB4vIqrQIiygLb6JawEuXC2KAKkxtOuuW7cV2LFD6UKnvV3OM3k2fKomMyA9sEAcrhVV41YfWWa%2FfhWtSiSuNYH3Z9iC5hsZPCOua%2BhNSyuexxl4zNy1aXmZ%2FvCZmrc4QkqJR%2F%2BeNzH%2FGPlz9EwCyY41OVlWf0ord7SngSAXXknhmTChhpS%2FBjqkATLrz%2B4Hfg%2BnfDUTzqY3mIUpl6eaIy3Lm7IAs8MVJwKNRAM%2F0ASjBVmt%2B62UqYSaHM5BnYxi8ptpGJ7mYy8M4PnPYRVy%2FpovRap4PX5B2HE4Ki4ZM5%2BOmwVUzVeqF0RBiDo4T7eqFSJrUMUyBNPQ2w%2FQxl8DdKDEolIyVOhxLYII%2FfXGRkfVbqMcGGaTlx9v0lYFBjygLfMSBRa3AlENrFdXHfmi&X-Amz-Signature=46b254b328b74f0af783ee9c0da016b1531b7f5df339db29edc6c1870fdc097b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU56V3NI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKWOvVlY79k42qVPcuBUgfRoZDvB0ViqnIZ3x772pOQQIhAIGsPLuIvB7RB8O5XvSrnJFsIlSh78u1pbBxud1ju%2Fo4Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxG6aB3gYJhn7SdWEUq3ANaNtQQO4tWmQDPnbyxLSdG44GMugoy7pP2NVEF5KtBw%2BSyp9%2BatMn9pB3hDqPyCmL%2FrZ01u0%2FwXAwW3Kk4ZfyBSl1txkRc5HM%2FFF4gOXic7uGEgxvJHmuotDkhQWZDpeAqwjYzCQQF45CEBAGfRfTAOHEs9H%2FUus89DKduLNWFjzl3xMU%2B4NSQn1TxWihavrPte4UROS0IpJrpgYGGF%2B%2FQCNgiIP28t%2BgWXVzj%2F%2BHQlosfuQ946ZQsr2VooKvbNHHnYsIdKSCVnSEcczIoL5yq79BK%2FL2nGgVuXzOhy78eR%2BvWiiXB6UAXWDzdJT8DRjXqG8W77OYJM%2BDtlFPUmLMFjR%2BiZWPFqMQ1Vxir%2FPswcyTJt3wviQmzqpSOewtjPys67%2Fk2NB010kJAozJT7q%2FOrwm9%2B3cI6ZS657OKTTGMWv1CwcxP39yeZTRp9bjmH%2BjlW4uNb0bCuSOPsd%2BgGq%2Fn%2FcleyIdvBl4WFmwcAdiNbvZ0S0ZevLbXCjEfWi%2BoSfokHtK7j3RK17e6Txm130enjNXjncZubdK%2F8gP1nZlEnd0V3EPsCks47i10eSSt9wDaQrTsL94M%2BrzOMnP1mXicK3F3t%2Fh4xUERE6bgD1zBIzN%2BVS0W5PMugLiLLzC2hpS%2FBjqkAdTFp%2BlOOS%2Fr29eEx7B2SA3f2N16ThyCeHuvLU18BFPUePqOVojqQ59Uqu35XyrTF8UXwg6%2BSibVnZCSEK7YPQ8JIIetsocs6gs7rAAsAFcnJWVmdGPVy0F%2FgXGw4rrTAzTFCPC6Dq5%2BzDrhB%2Bk%2BLpyCa0WcgsmGzK8zmL8IDEx6492hUDVcVr72n1lg8eM1pO4Vcx7m5vlpvpg44ViDaYCx5LBR&X-Amz-Signature=007bd57d6451713a994b5296723769c14be521a38ebdeb3026566083c8aad640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W3GTEW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQXIJXFug9cgiCCzbyyGZJHqA2%2BoVin4Y8RW9%2BWN0mvAIgYSd5unHfYb6PsdSoInJls2cH%2FIVi7lZX4hlzG%2Brd340q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE2i1OG%2FpBvO1%2BnCFCrcA6lPCLF1Kem9M3WIEVGccVo7rnOd12XgVS4LWi57DnSEwI6MYuG37yg9YYZQV5%2Ba1XwlDoxF%2BjgUKisFWblTVg5a4hm15wrtTupCF2Q4rhc1pwDmrjRp1xyklviKhEsviv4OV7F%2FZZBs1heXCoHaEqtf5dzY%2BrCmaEIYteHpw6kQBIOJ7FtqbeYKu37Ihe1cqC82vsLVDfqeZQk%2BZ3iXYKn2mvWggJJJJ4MByq973xNqSl0II%2FedsSocyrxKRbRMURWy%2B8pwHDPcE6FWDZjyI5bpEGIQhwYS0vioCFwW25myMk7qpFoocI6dKB4PdOvJM%2FU2odHzxrqPzxf3rSGmDeyh8%2B7OkHo%2FBKttJk3%2FjYxhYSk0ZEnWAeRzQIvu2CzXuiW2IAEIgcrYoUCoa83T5QtgNVb%2BAOwESk%2FGnaOq6G2WFABbJ%2FsezbnWU%2BjZteYu3Vo6v0C8AYikQ1dBxxZytkFL4V1zch7hcnmp7FsQOo1uOE8xAkOzP8CCe%2FjmBzq5LKLMprHNCZa3mFhOfIikmwvE8pGSFyXq1ESARWCL0YLBbrSoz7gbyfItUXMM22TK3rP9V1KsJ5r66R6w%2FW7MkZJaXLoCRrQPb%2FfwEtp1gm9WI1bu8SXx4%2BB%2BqcaTMKOGlL8GOqUB6EZHCnlb%2BE38D6FU15Wch4j5TO3JHSdl0dgIsMr8zAzGnfseNw6vrk4WSEwgWCR3caVfjEfhLQsqez36JtOJvNF3I1YPh39C00Uj2N3eMltOyhdCoS0QbbHigu5hA2TY31DKGHizbYSzb035z9h%2FB9iwBnCeKCQxmVVCgFF%2FjpiQAPeKGPx1dLwe5yP8BAiTrkmr4Nz8ZtREH%2F7kUoUEcjDN0XUU&X-Amz-Signature=abd2e0fc6e8a0ee735170148ef32a189ddf7db6795b975eeb3de9b69dc16cbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
