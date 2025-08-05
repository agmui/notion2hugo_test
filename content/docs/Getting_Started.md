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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5OL7H2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDBdF%2F0cvEkUefCW1aO6YjU4elABN%2BAC%2F%2F2gztoqlJVZAiEAkRMRI1W41YYlojejLz%2BB8X%2BeTC1cAiNy8ObekLdiTHwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMm6T7iXcGHmgY0A8CrcA8ygjiL7lieDN8w0EKydhMiQAJanzM4Dk2FqvuxWG7ySHCKwP0A9CSk3lWMIWFyvFiMG0vovHOJTqw%2FyDjzDCh8t88ecAH%2BJucJqOKY5ZjuywUSPpiwnjIeeCqE0hDJj67CdjAxkgWQUVaepU8awaXYyI%2Fod%2BAhoo3WrlKedReS4lk9sSAr%2FVaEeka3omqebOmJo9TvNbS18QfQacPynb0IfqrAOKxQ5R6GIjJpJ0QctjtdFmldTS3sOaEg9Fgloym%2B7VskLH3YfiPTewLxYthiYPFUx%2BiesGccyUXn1qX0qqzOxfXvWxvfxX5p4Oac7xwuk31SpIgImlkQuv2AN94FUwAkx0rQ7A179qiDZOOt1j4CyvS%2B0Loc3pZOOugvrl4SBEjHafwaYmoDiYjHTSwiMd%2FrAnd%2BhO3ZcJIFx%2FLrVhPTQzOmxJMl6Nc2hrq74mjNnvc9FmdsiKOlV48kIUPb0p9k8NMGOIGsDjqN5fW4rvkkmC%2Bhs5uzXvN%2BlA11eCpavU954LHtaeW6EN7TcGx3bsMDUZC86buQrn7nPzDZVMIhKCxjC3pZOYx%2Bv5S0B4TQQkY5hXzDizaHHmd1jH0%2F2eryXiQkcR6yMAFScB4%2B4MODJs7TivwN8M7RfMMrbxsQGOqUBCZiTreQlEyu2tF%2BQqUFf1fL5Nclv8Geg7cfFsFG0VShfrXH4OCfDz6Hr5so1hqyaRO3Aa0DuS2%2B7IXwdVp5uGG5x9aB9fOOU3k7fpc77NWAWEgT4T9B7DBGgQjkqNg4bnPRoVEEHWkm8U7Jo%2FDgEDKksWr7lKO%2BtY4%2BkB0KxFdRmCGKpmXYT1s%2BWYtPChmJC33mvycUBVEg8iva%2BnOTzVF9khERy&X-Amz-Signature=4ee8a7bce9c8f86896b4360a78021fa15eb995e8de067c644cd43ed91983fb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5OL7H2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDBdF%2F0cvEkUefCW1aO6YjU4elABN%2BAC%2F%2F2gztoqlJVZAiEAkRMRI1W41YYlojejLz%2BB8X%2BeTC1cAiNy8ObekLdiTHwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMm6T7iXcGHmgY0A8CrcA8ygjiL7lieDN8w0EKydhMiQAJanzM4Dk2FqvuxWG7ySHCKwP0A9CSk3lWMIWFyvFiMG0vovHOJTqw%2FyDjzDCh8t88ecAH%2BJucJqOKY5ZjuywUSPpiwnjIeeCqE0hDJj67CdjAxkgWQUVaepU8awaXYyI%2Fod%2BAhoo3WrlKedReS4lk9sSAr%2FVaEeka3omqebOmJo9TvNbS18QfQacPynb0IfqrAOKxQ5R6GIjJpJ0QctjtdFmldTS3sOaEg9Fgloym%2B7VskLH3YfiPTewLxYthiYPFUx%2BiesGccyUXn1qX0qqzOxfXvWxvfxX5p4Oac7xwuk31SpIgImlkQuv2AN94FUwAkx0rQ7A179qiDZOOt1j4CyvS%2B0Loc3pZOOugvrl4SBEjHafwaYmoDiYjHTSwiMd%2FrAnd%2BhO3ZcJIFx%2FLrVhPTQzOmxJMl6Nc2hrq74mjNnvc9FmdsiKOlV48kIUPb0p9k8NMGOIGsDjqN5fW4rvkkmC%2Bhs5uzXvN%2BlA11eCpavU954LHtaeW6EN7TcGx3bsMDUZC86buQrn7nPzDZVMIhKCxjC3pZOYx%2Bv5S0B4TQQkY5hXzDizaHHmd1jH0%2F2eryXiQkcR6yMAFScB4%2B4MODJs7TivwN8M7RfMMrbxsQGOqUBCZiTreQlEyu2tF%2BQqUFf1fL5Nclv8Geg7cfFsFG0VShfrXH4OCfDz6Hr5so1hqyaRO3Aa0DuS2%2B7IXwdVp5uGG5x9aB9fOOU3k7fpc77NWAWEgT4T9B7DBGgQjkqNg4bnPRoVEEHWkm8U7Jo%2FDgEDKksWr7lKO%2BtY4%2BkB0KxFdRmCGKpmXYT1s%2BWYtPChmJC33mvycUBVEg8iva%2BnOTzVF9khERy&X-Amz-Signature=2c332e81dc70a0aa60319941cc175b78a63ab6c24d79f10e98170b2f85b99b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5OL7H2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDBdF%2F0cvEkUefCW1aO6YjU4elABN%2BAC%2F%2F2gztoqlJVZAiEAkRMRI1W41YYlojejLz%2BB8X%2BeTC1cAiNy8ObekLdiTHwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMm6T7iXcGHmgY0A8CrcA8ygjiL7lieDN8w0EKydhMiQAJanzM4Dk2FqvuxWG7ySHCKwP0A9CSk3lWMIWFyvFiMG0vovHOJTqw%2FyDjzDCh8t88ecAH%2BJucJqOKY5ZjuywUSPpiwnjIeeCqE0hDJj67CdjAxkgWQUVaepU8awaXYyI%2Fod%2BAhoo3WrlKedReS4lk9sSAr%2FVaEeka3omqebOmJo9TvNbS18QfQacPynb0IfqrAOKxQ5R6GIjJpJ0QctjtdFmldTS3sOaEg9Fgloym%2B7VskLH3YfiPTewLxYthiYPFUx%2BiesGccyUXn1qX0qqzOxfXvWxvfxX5p4Oac7xwuk31SpIgImlkQuv2AN94FUwAkx0rQ7A179qiDZOOt1j4CyvS%2B0Loc3pZOOugvrl4SBEjHafwaYmoDiYjHTSwiMd%2FrAnd%2BhO3ZcJIFx%2FLrVhPTQzOmxJMl6Nc2hrq74mjNnvc9FmdsiKOlV48kIUPb0p9k8NMGOIGsDjqN5fW4rvkkmC%2Bhs5uzXvN%2BlA11eCpavU954LHtaeW6EN7TcGx3bsMDUZC86buQrn7nPzDZVMIhKCxjC3pZOYx%2Bv5S0B4TQQkY5hXzDizaHHmd1jH0%2F2eryXiQkcR6yMAFScB4%2B4MODJs7TivwN8M7RfMMrbxsQGOqUBCZiTreQlEyu2tF%2BQqUFf1fL5Nclv8Geg7cfFsFG0VShfrXH4OCfDz6Hr5so1hqyaRO3Aa0DuS2%2B7IXwdVp5uGG5x9aB9fOOU3k7fpc77NWAWEgT4T9B7DBGgQjkqNg4bnPRoVEEHWkm8U7Jo%2FDgEDKksWr7lKO%2BtY4%2BkB0KxFdRmCGKpmXYT1s%2BWYtPChmJC33mvycUBVEg8iva%2BnOTzVF9khERy&X-Amz-Signature=d680a8a3793462ab69da9ff8b848cc0c2086dac7b8e7f3baa36ad66cb27c4097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUB3RKZO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD00biTCbKmeT3p6%2BGzzYjLDpqzrbvxtDo2rJ0VwpXt3QIhAOgN1M%2FTx%2FeMA49S6JG%2Fipk%2FrWCzPpMqgygbeccAoN9NKv8DCFgQABoMNjM3NDIzMTgzODA1Igx5l5ubKVf5U6IhY%2Bgq3AMLQ9eiF5I%2FE9zuig3qEC%2BXzI9iYXl2cCKRa0g16nC0kVSxzP28mktbBYQVbCLJSCdghI%2FLaA57HT5%2BYhnVCkc1mtHrAT6O0GVeSurxsntvQtWuifrxHy%2FWhNXmJXOicGTX9BsVn675v2AVCuUNJpqjSVtHfcrE63YAb1nBGgYvW0yKtHP6Zn6AaMhLznk4Hy9MIL3bgfZ6XhcbO%2FvMgbq9S3FVXjIfeqNdV8t85SUKlLKLgYffS9xwgK9vrrTJ7HPZHLVVcZXtqoKEL%2BHsEI5pC%2F%2FajEnRNEh%2F0%2BDW%2BElSXa0fjPI0nH%2FIsLlyHOKerRuNoCuEyOJ697Rk%2Bhz8ZW%2BYwMkPCjJ%2FkAn%2BqJEfsAnsDPvPxRmEN3XIbL0PnkmopBltDcLs%2FHyBdrV8Bjn2utTaZs7q692Z9eP4UWmAHKYEXVMOTeT8JHPA43JA2%2FxIz5sUyDGMuLL0Hj2kzUR3KfdGSu6NZ3U%2BpyraQ2wIDkrVnwmDv9LGlAayVMo28t%2FujRza65wsaxgMKqudgrM4bh%2FhsgnbctRPmi2Unic40l%2B1uSyobnxYgOUCM3RPpVaDYg2OqvxZ%2BRDO8UFt0P61y3CX3CjfWSL9bFDfqtB%2BEkkEK2T4SXyaf4TSX3mp1DCA28bEBjqkATDbfiR4eF7LAApoyxCY8gpddWLe4QR05Qk9b%2FqDOlUY2zIiN2aW%2BhKSh%2BnuNTjXa4yR4sUHkXXGdub%2BJDh%2Fz%2Fdjqw%2F8zXXSAUpI2wJ0MAKV1tABXpG3Cp39ubTpJpIAIvQSllM0BzAnlHgQR5E%2F2nXsxJRavFP0pkG%2FUd4xV7qK4UOjppgOoe%2Fmj09HD0cBtPoSqEUrcplYK9mwc3Z%2BthhLVtGq&X-Amz-Signature=520e3f820edcff29e713308be7807fadbf18fce04ebe8544fda39e15f6f1cc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AKRBBDU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHtWEEylvjrGsy%2FzwfCcshfADbRvPNKXUWsGWNsSAW4EAiEAgN%2FAYY3jWK9UOUmu9jHzrUPdSS0JFskK3w1awGLpb%2Bcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDN8Q6FFTxti1o8x1myrcA9GtkNcggko48AKfuyjuD%2BiWBrb1zeV%2F6hGTLusIwetQrhap5%2BSjp%2B%2B%2BgYSZiaJAY4xcf8nscOtFWrBYzDmUkpF%2BqRIisAihcEHgCgrqL1HieEzUsF8jicTfCj9AXaO6nFdLuLBNZp9lJyltPCtR6l5gnFaV2upNy8tY%2BKXBztGcv2OpCAjvgPp6Ehs2Cq2vxsdNWPDhK0gitiuW27DKE9lPITrmivIPFZi0MUla8fYhiXQ1A3EIj8pw6REBGDibuMAFLKtI5RrzrweM05OxMZkrVR6pWLeh0rXo95QBMOpTH4THzb2t%2BwhAjU3JZmluYihl0MF1LwNSKraNeyatkvS%2Bc3A%2FMkwQU%2Fr8QD2sEjhV4Nyi6rnwW2uYasldRV3PRGqCZdJntfG1XX930F5bnxSs6hujrBRwW1H%2FQAZTNGkrnK3kLqznJVWh1Niv5vBvPCHCAnM%2BBxlLWs8Jjnx7ZG5Di38M4KBAaYv0M97LdbEs%2Br9j4Ern1jj0e3il%2FApU2p9yHYu%2Be%2B%2F3d6i3z0fQnYeOTaBJqgQ2%2F1Sehi7ee9ZX7Pm7aZWYTy1CD02ethnnnydxmY05ATyGJLM8747b4RiPaeP4oRXQyrlTAuldZSamfjFOg254Opq23HaQMOTaxsQGOqUB2uigDoF%2F4qyWE4WlGdUJ7BP%2BxtVtAkP1pDYpyh3sqh1ktzhC42DDzPHNCTeJ8fyLbExJZHbH%2FrH3uXViF%2Bvdw%2FLyt%2FFsu3v4zoW8uKHYdX1ItOxWJ7u2Qte4%2BTp3xotMWoacBXU8zhj1feq6CG%2BHI6Rb2bthsbzF2youoOfoenpFk5Up48XUL%2BgXJuf1OWkjRhnrzXooIRbzZueKdOM%2FSb1bKLN0&X-Amz-Signature=3810785b29e6e6049d207663cb5000d53888213d8dc37cb3aca2076c00e58902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5OL7H2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDBdF%2F0cvEkUefCW1aO6YjU4elABN%2BAC%2F%2F2gztoqlJVZAiEAkRMRI1W41YYlojejLz%2BB8X%2BeTC1cAiNy8ObekLdiTHwq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDMm6T7iXcGHmgY0A8CrcA8ygjiL7lieDN8w0EKydhMiQAJanzM4Dk2FqvuxWG7ySHCKwP0A9CSk3lWMIWFyvFiMG0vovHOJTqw%2FyDjzDCh8t88ecAH%2BJucJqOKY5ZjuywUSPpiwnjIeeCqE0hDJj67CdjAxkgWQUVaepU8awaXYyI%2Fod%2BAhoo3WrlKedReS4lk9sSAr%2FVaEeka3omqebOmJo9TvNbS18QfQacPynb0IfqrAOKxQ5R6GIjJpJ0QctjtdFmldTS3sOaEg9Fgloym%2B7VskLH3YfiPTewLxYthiYPFUx%2BiesGccyUXn1qX0qqzOxfXvWxvfxX5p4Oac7xwuk31SpIgImlkQuv2AN94FUwAkx0rQ7A179qiDZOOt1j4CyvS%2B0Loc3pZOOugvrl4SBEjHafwaYmoDiYjHTSwiMd%2FrAnd%2BhO3ZcJIFx%2FLrVhPTQzOmxJMl6Nc2hrq74mjNnvc9FmdsiKOlV48kIUPb0p9k8NMGOIGsDjqN5fW4rvkkmC%2Bhs5uzXvN%2BlA11eCpavU954LHtaeW6EN7TcGx3bsMDUZC86buQrn7nPzDZVMIhKCxjC3pZOYx%2Bv5S0B4TQQkY5hXzDizaHHmd1jH0%2F2eryXiQkcR6yMAFScB4%2B4MODJs7TivwN8M7RfMMrbxsQGOqUBCZiTreQlEyu2tF%2BQqUFf1fL5Nclv8Geg7cfFsFG0VShfrXH4OCfDz6Hr5so1hqyaRO3Aa0DuS2%2B7IXwdVp5uGG5x9aB9fOOU3k7fpc77NWAWEgT4T9B7DBGgQjkqNg4bnPRoVEEHWkm8U7Jo%2FDgEDKksWr7lKO%2BtY4%2BkB0KxFdRmCGKpmXYT1s%2BWYtPChmJC33mvycUBVEg8iva%2BnOTzVF9khERy&X-Amz-Signature=63af25c747a963c06525876d1fe41eb9e250d1fbb5f1b4837dac41af06d78313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
