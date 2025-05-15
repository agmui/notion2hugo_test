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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27DVA7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFGH8bY7PkA1egVmZoBQKeLpcSLSAIUL2hc7WQFuWwWyAiAdD%2Bu3OvMIu0faHjru9zcdFTWW%2BacsD9q8CD7Q2Obovyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMJ56ObDNm9ZWpHFCNKtwD9kdMhA9D%2FvX3g3niJJqRpGG17GIEMXEBoe%2FQ04BuRnPdEqGvRrM5A9cZzbq7JfHtOz5ZCBS9nE3NV2Oi7X72fcVwdSIq59tVrGbidmdZxYB%2F1lwjmg8tws18mwBLYXU51MreIgM2gZMdy14EGq7Z45Bk%2FY20JI9BWKdRtHra02uyCyCwV%2FQzDCwgvCC95cDGsHPXXT7PCCpf1Er94HJ4MaPbqLgejKFGUrm44b%2BvL%2Fg7vHehHUAksmEZDW5HjC5HUbMcS6763%2Fcg3CHoZ%2B8%2BX4va%2BkloB4o4dc1bFDlS9AHTEoZbeTmh2RVhhxV2LC3PEFarHU8memgBDKQvOEX%2B6QmVreTYoi3qJ%2FymQR%2BatfaOjv3C2ujwoMXhspnBJxzLg5DNjiDBJJINEthuPhnOl8zneYXAkVvx9FAlgXMcaI8yKGuz%2FTOMzf3h7X%2FhVSYco7wJ2yW192oJ8kVz7dkbMZsc1RSA9GtHpEo3Cwma1gyWCIZ7YCsFS%2FJjcQhbsBKFUhAZ%2F90smOzRkUIAqgYdf%2FFOer6nsDOdjcDI9RwPB28lkqAZz9dmRUNa3txJsuzNszW5qOX4XNeCZhARE6kcKojahuuysvzYKqrFCpcE1sy1Zw1CaxCLuWKdCrUw5bmXwQY6pgHAjuoZO%2FZ8ongdVV%2BzLMrg1waVfhA30BZzzSj9tKN1O802puc4RSRqtvw7KXBLkoiON2eV%2BQKP3By0CVzVremzWXQY%2B05nuIwYvGmpBijLL1WwpyUBCjxlfcYDbp0FKwYcf0g1Oz1Pl4en%2BT9syhu8Repq4lA%2BHh8VBwl7arEQSdN5vXV1TlNOhmTS0zqw9JT0v3Q%2FVDUI9ElR9x3uw1foJtD09g%2BD&X-Amz-Signature=3133738bc16cc8d1d11084d7da93a7e3843638638a6f85bf1bc0eb2022fe53e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27DVA7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFGH8bY7PkA1egVmZoBQKeLpcSLSAIUL2hc7WQFuWwWyAiAdD%2Bu3OvMIu0faHjru9zcdFTWW%2BacsD9q8CD7Q2Obovyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMJ56ObDNm9ZWpHFCNKtwD9kdMhA9D%2FvX3g3niJJqRpGG17GIEMXEBoe%2FQ04BuRnPdEqGvRrM5A9cZzbq7JfHtOz5ZCBS9nE3NV2Oi7X72fcVwdSIq59tVrGbidmdZxYB%2F1lwjmg8tws18mwBLYXU51MreIgM2gZMdy14EGq7Z45Bk%2FY20JI9BWKdRtHra02uyCyCwV%2FQzDCwgvCC95cDGsHPXXT7PCCpf1Er94HJ4MaPbqLgejKFGUrm44b%2BvL%2Fg7vHehHUAksmEZDW5HjC5HUbMcS6763%2Fcg3CHoZ%2B8%2BX4va%2BkloB4o4dc1bFDlS9AHTEoZbeTmh2RVhhxV2LC3PEFarHU8memgBDKQvOEX%2B6QmVreTYoi3qJ%2FymQR%2BatfaOjv3C2ujwoMXhspnBJxzLg5DNjiDBJJINEthuPhnOl8zneYXAkVvx9FAlgXMcaI8yKGuz%2FTOMzf3h7X%2FhVSYco7wJ2yW192oJ8kVz7dkbMZsc1RSA9GtHpEo3Cwma1gyWCIZ7YCsFS%2FJjcQhbsBKFUhAZ%2F90smOzRkUIAqgYdf%2FFOer6nsDOdjcDI9RwPB28lkqAZz9dmRUNa3txJsuzNszW5qOX4XNeCZhARE6kcKojahuuysvzYKqrFCpcE1sy1Zw1CaxCLuWKdCrUw5bmXwQY6pgHAjuoZO%2FZ8ongdVV%2BzLMrg1waVfhA30BZzzSj9tKN1O802puc4RSRqtvw7KXBLkoiON2eV%2BQKP3By0CVzVremzWXQY%2B05nuIwYvGmpBijLL1WwpyUBCjxlfcYDbp0FKwYcf0g1Oz1Pl4en%2BT9syhu8Repq4lA%2BHh8VBwl7arEQSdN5vXV1TlNOhmTS0zqw9JT0v3Q%2FVDUI9ElR9x3uw1foJtD09g%2BD&X-Amz-Signature=bb3783d0ee63a5dce8c841510a9e62f12c0995f6427705a1dce530c52953b77f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27DVA7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFGH8bY7PkA1egVmZoBQKeLpcSLSAIUL2hc7WQFuWwWyAiAdD%2Bu3OvMIu0faHjru9zcdFTWW%2BacsD9q8CD7Q2Obovyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMJ56ObDNm9ZWpHFCNKtwD9kdMhA9D%2FvX3g3niJJqRpGG17GIEMXEBoe%2FQ04BuRnPdEqGvRrM5A9cZzbq7JfHtOz5ZCBS9nE3NV2Oi7X72fcVwdSIq59tVrGbidmdZxYB%2F1lwjmg8tws18mwBLYXU51MreIgM2gZMdy14EGq7Z45Bk%2FY20JI9BWKdRtHra02uyCyCwV%2FQzDCwgvCC95cDGsHPXXT7PCCpf1Er94HJ4MaPbqLgejKFGUrm44b%2BvL%2Fg7vHehHUAksmEZDW5HjC5HUbMcS6763%2Fcg3CHoZ%2B8%2BX4va%2BkloB4o4dc1bFDlS9AHTEoZbeTmh2RVhhxV2LC3PEFarHU8memgBDKQvOEX%2B6QmVreTYoi3qJ%2FymQR%2BatfaOjv3C2ujwoMXhspnBJxzLg5DNjiDBJJINEthuPhnOl8zneYXAkVvx9FAlgXMcaI8yKGuz%2FTOMzf3h7X%2FhVSYco7wJ2yW192oJ8kVz7dkbMZsc1RSA9GtHpEo3Cwma1gyWCIZ7YCsFS%2FJjcQhbsBKFUhAZ%2F90smOzRkUIAqgYdf%2FFOer6nsDOdjcDI9RwPB28lkqAZz9dmRUNa3txJsuzNszW5qOX4XNeCZhARE6kcKojahuuysvzYKqrFCpcE1sy1Zw1CaxCLuWKdCrUw5bmXwQY6pgHAjuoZO%2FZ8ongdVV%2BzLMrg1waVfhA30BZzzSj9tKN1O802puc4RSRqtvw7KXBLkoiON2eV%2BQKP3By0CVzVremzWXQY%2B05nuIwYvGmpBijLL1WwpyUBCjxlfcYDbp0FKwYcf0g1Oz1Pl4en%2BT9syhu8Repq4lA%2BHh8VBwl7arEQSdN5vXV1TlNOhmTS0zqw9JT0v3Q%2FVDUI9ElR9x3uw1foJtD09g%2BD&X-Amz-Signature=81264e7ac7c501437023f1ab630b259f54fd055a7074e42344400e34b1fba9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA5R5RU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDAGVGaprERmbwgPVGOj%2Fa3WHB2G3zrmzb%2BSeStlNdM8QIhALNyUpfdcQoDs1UEN7bPtLGSD4tccKCFntG195WUK2psKv8DCC4QABoMNjM3NDIzMTgzODA1IgwNPnYUHnzw6%2B0FDqEq3ANmloI0e1HD2Isi11OUzwOJxIidiRBY1YE53GxFyu3BV2iQxBdnA6UvQS0Zf286CA%2FsQi5ImICSDQoG1n1qek0GyCuDW1D7pXogkz3arJgOVNUZKcOrZVMQo1cwXmVUsijPhGV50%2Fx6nya3g7O%2FAjvc5tGdx0HqKlo%2BEX0XT%2Fq%2FXx6ChZooxdlhj83s3DxOhpqg1iF%2BoZyAYKq1WBqxZBij6hsBf0xc6aDmi53sZgoRHPX%2BWnMGlhcxS2GzWzfiNpE0Abx%2BIavkKs9B4eUlGa%2FRaFGmCEWAFOiDOddvcpTFL%2BkMs6RQLSoVI7%2F6k5U8XKJYReuGL7ES60aI0WU52JI1%2BAaNkvsM%2FKUYpn0NsHeq87%2BT%2F47vCIx6fnNGUat9XiDKvZYUL0%2Bge2DVM7YXjZuUXZiXOdjgjc2L3BxMSffVjRo2KkgPsm2390D9W2ozN%2F9BcNifhXQcpUdPghU4L0IeKLhpCREHXdeMRLaq7YMoCuSlSiRiwtr2y4S9V7EfHAHFdJae3q5ULbu7xO4l%2FIv0CO6fPOG5%2FUTczvf2%2F8Rf%2BhlRjv%2FXCziJ9Ce6wuIrvhPiINad35RH6Fqka0egp60EEyUvZlmPrSfGaQpjhvbXOjDusI3KDKo1wz%2BA8TDvupfBBjqkASuWWIqb7BL2zQ4AoIq9qS9foPdHbCOBu1eVQD5fr7xNNhdzXk7YBigMw8UWEmKNzbVdHFQO5JYxMmoMYcuV9gsKEfc2zoN6n68XL0SYN7iqpd6pRa%2FE0NpcE2GHVeHPiDCH92VFD%2FOxLyuIziUxg8utsPNwdCD7c2EV4PimOiJy%2BMu%2FwvrrzSkmewF6auJmObenHDhgn6opAdcewGA1RySwqsjW&X-Amz-Signature=43cb717efaf8c5521b6736f78751cdee998dacd0fceb01d6b7cc0db8b90ba9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZWIT6B%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAIohO37m3X4ZIbyHdWdQW9xaaEnFXT33PNYvZ14AIMBAiBqe%2FTE%2BSBsQGpj3N1HcscVnzyUzmh9prJe%2Btf5F%2FUDdCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMCEJhH049jQs6wZJaKtwD3t5fHNemrWsRdDDJzxKsB51ZViGCmYXZOAaP11mjnSoValbwEczjcC%2FrwzUAg5VSiciNKZ5FbjjBpcK4hGZe%2F6LNYzCO5JBOSvxRBu%2BuN%2Bs%2F%2BqtEiqIcdXNYEB%2F6IyApZ4xQNe38Njx7p9D7r6bMeoFi8N%2BKSrtZj6E3lnQ06so4K2Ax2MebWyiMeUnhM%2Bo3dE3BKUMeCOoZ39xpAvvlZbpZKfSRmbGXDjWaLioQnz0VOjPOg9Bh6%2Fg4hwtgEhf1TTyY7Pxv5WwrqZZBrfJp6uU5TmDEn5g5fFBj8OhXd8MCIo80%2FLvIrRhMRYByrnR3A6u62U7eJAUKHgqXv7v0LndZDr197uJiBp97I35G0icqDlVNrw6ACcLG4v1zcil6PprpOCQgxP90jL4n9WZgvc4744imWrHpis0m%2BB5pfr9niHfpMkQzVhIj9XwzeUUmHYwxEVvpjQs67EkXXarLcGjDIUuq321at%2F5oP%2BP4dKxXW%2BYSnQ9P7ehmE%2B6sTgoCe8xtPTrziAhV619pD5dubez24p3qHL3%2BdBgX1bivaWm9mPrteFJS0dx%2FP%2BuN7w4qiWuXDCU930aG0oBW4F%2BOQl9DUuD%2BbMgmLurHvYuDptasgwYDbqkIAD%2BzVWow%2BLqXwQY6pgEzYxN2sgf5fecQ3V4ZLdXZXLBLa3KKuEuxpw56Tdky7KLRd%2BJmX4ItDEVrf0Zc93IAs9gf7W3CKlfLD78WX3ZmLTbDWT2eGbgGeeF0We3SZ9AlOIqlVDBfGHC1vo3xBfK1Or6Y0EEaEw%2F%2B7s%2F%2FONomQSU%2BQ%2FmVkQziUliBLHBPd6%2FSHxwaHqcz60%2Ba1NuBFqvshcO11%2F63eMpNS6kleIAD30N8zBbj&X-Amz-Signature=ba58a3ed039b3518e7ab42d464a8dc87147152c85ddbe43b761cc4ad38f5bf0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W27DVA7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFGH8bY7PkA1egVmZoBQKeLpcSLSAIUL2hc7WQFuWwWyAiAdD%2Bu3OvMIu0faHjru9zcdFTWW%2BacsD9q8CD7Q2Obovyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMJ56ObDNm9ZWpHFCNKtwD9kdMhA9D%2FvX3g3niJJqRpGG17GIEMXEBoe%2FQ04BuRnPdEqGvRrM5A9cZzbq7JfHtOz5ZCBS9nE3NV2Oi7X72fcVwdSIq59tVrGbidmdZxYB%2F1lwjmg8tws18mwBLYXU51MreIgM2gZMdy14EGq7Z45Bk%2FY20JI9BWKdRtHra02uyCyCwV%2FQzDCwgvCC95cDGsHPXXT7PCCpf1Er94HJ4MaPbqLgejKFGUrm44b%2BvL%2Fg7vHehHUAksmEZDW5HjC5HUbMcS6763%2Fcg3CHoZ%2B8%2BX4va%2BkloB4o4dc1bFDlS9AHTEoZbeTmh2RVhhxV2LC3PEFarHU8memgBDKQvOEX%2B6QmVreTYoi3qJ%2FymQR%2BatfaOjv3C2ujwoMXhspnBJxzLg5DNjiDBJJINEthuPhnOl8zneYXAkVvx9FAlgXMcaI8yKGuz%2FTOMzf3h7X%2FhVSYco7wJ2yW192oJ8kVz7dkbMZsc1RSA9GtHpEo3Cwma1gyWCIZ7YCsFS%2FJjcQhbsBKFUhAZ%2F90smOzRkUIAqgYdf%2FFOer6nsDOdjcDI9RwPB28lkqAZz9dmRUNa3txJsuzNszW5qOX4XNeCZhARE6kcKojahuuysvzYKqrFCpcE1sy1Zw1CaxCLuWKdCrUw5bmXwQY6pgHAjuoZO%2FZ8ongdVV%2BzLMrg1waVfhA30BZzzSj9tKN1O802puc4RSRqtvw7KXBLkoiON2eV%2BQKP3By0CVzVremzWXQY%2B05nuIwYvGmpBijLL1WwpyUBCjxlfcYDbp0FKwYcf0g1Oz1Pl4en%2BT9syhu8Repq4lA%2BHh8VBwl7arEQSdN5vXV1TlNOhmTS0zqw9JT0v3Q%2FVDUI9ElR9x3uw1foJtD09g%2BD&X-Amz-Signature=fbdfd22e2caa8af687f9f732f231b6ada1a47449d11c1b519cc75a38fe0c0050&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
