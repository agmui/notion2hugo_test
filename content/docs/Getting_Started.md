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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U753WRU4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFFKZd1cjKS7npzdRpAtJdvdu%2FZ3gqYQUOc2xn1xy2TVAiB%2BMvhOexacOw6vzt6HTjVGQgr4VYh%2BI4lmONeJC4H%2Bnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMR0eReDkJv6GtPG8dKtwDJVF%2B4tNIXLhGQJy6WsAe%2Fp%2FU5Dr0NZih4gXmZXHVCfUb2XMLZJHpZsBAbzTZeH6PrSi7lOmJ0Uzpwt9pcYqktDBlvpxo34ku5I593jay1uqBwMI0n95AyAD2tYo8mPR8c%2F3p0x3oXX5E9aYkMHJ6Fi9bu42FNs4SA3PUEdZfSXTsqEtx6j1q%2B%2BFrFZv1jwQFllnNjVYahz%2FvkaNni4hM3J9mHBxX7tZLJWfInMZ1gbCYAXoM%2F99PhBaAOdQe9Q9GoOBg1xmmp%2BDN0Wnv0JYu3DxiqOrSkR%2BeRi8krnN2IVhIYJB5K2TfHrPrPMsIhBavc0dKQLzljOdcDtRe4y1RI5DPn%2BTr5T%2BCyhGOi514JHj7ZampCjReht20hMbZBLfd2fgbmgAKM56v4FFcr6qMUia%2FUMzWo9t%2BTbx8Jyxgp2xewmsxR9gC7yra1fRjAg67O3AzuYKcBT1C2cKnIFGyaKbxlqIfu%2FZUFYoLaLbXcKb4C5Iw36B8ZI6Q%2BO7gztQ6gLcvUhU%2B%2F8XUklTO7oxRlb5XQyuJH%2B%2BzKzvDerXViBFYdNsL3NR67GZoPfM8qy53wnuQ984m%2FPHQW2rQfmX0tkT5AkeikBMxJZeiD1FrvbUu8%2BCHd%2B3bUcNu6Nsw3J3PwQY6pgFIUL0efEPAJ2U4cicdq1TMXAjQbf%2BjzBzukU9JVaq2oqwEJTCqoq9e9%2Fm7IllRKCi1wpjotYH8XFtHb4WbmfbFBvoZhN4D3gPmcCXuZoFmv0YkoV9jGZVkBtSpFuPE%2BJPZv294GK7JCf71%2F4RJCXyQZr0ciZ%2B%2FtInH72%2BoRdrjOGtQ7JsyK%2BHReCrgOdzxA%2ByIp7wW5GkYK77EQ3iS7zXjxjp6I3bz&X-Amz-Signature=44f74b976a9012ab6aff2d0d9727b3337386e457af72691ffd263b666aa321cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U753WRU4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFFKZd1cjKS7npzdRpAtJdvdu%2FZ3gqYQUOc2xn1xy2TVAiB%2BMvhOexacOw6vzt6HTjVGQgr4VYh%2BI4lmONeJC4H%2Bnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMR0eReDkJv6GtPG8dKtwDJVF%2B4tNIXLhGQJy6WsAe%2Fp%2FU5Dr0NZih4gXmZXHVCfUb2XMLZJHpZsBAbzTZeH6PrSi7lOmJ0Uzpwt9pcYqktDBlvpxo34ku5I593jay1uqBwMI0n95AyAD2tYo8mPR8c%2F3p0x3oXX5E9aYkMHJ6Fi9bu42FNs4SA3PUEdZfSXTsqEtx6j1q%2B%2BFrFZv1jwQFllnNjVYahz%2FvkaNni4hM3J9mHBxX7tZLJWfInMZ1gbCYAXoM%2F99PhBaAOdQe9Q9GoOBg1xmmp%2BDN0Wnv0JYu3DxiqOrSkR%2BeRi8krnN2IVhIYJB5K2TfHrPrPMsIhBavc0dKQLzljOdcDtRe4y1RI5DPn%2BTr5T%2BCyhGOi514JHj7ZampCjReht20hMbZBLfd2fgbmgAKM56v4FFcr6qMUia%2FUMzWo9t%2BTbx8Jyxgp2xewmsxR9gC7yra1fRjAg67O3AzuYKcBT1C2cKnIFGyaKbxlqIfu%2FZUFYoLaLbXcKb4C5Iw36B8ZI6Q%2BO7gztQ6gLcvUhU%2B%2F8XUklTO7oxRlb5XQyuJH%2B%2BzKzvDerXViBFYdNsL3NR67GZoPfM8qy53wnuQ984m%2FPHQW2rQfmX0tkT5AkeikBMxJZeiD1FrvbUu8%2BCHd%2B3bUcNu6Nsw3J3PwQY6pgFIUL0efEPAJ2U4cicdq1TMXAjQbf%2BjzBzukU9JVaq2oqwEJTCqoq9e9%2Fm7IllRKCi1wpjotYH8XFtHb4WbmfbFBvoZhN4D3gPmcCXuZoFmv0YkoV9jGZVkBtSpFuPE%2BJPZv294GK7JCf71%2F4RJCXyQZr0ciZ%2B%2FtInH72%2BoRdrjOGtQ7JsyK%2BHReCrgOdzxA%2ByIp7wW5GkYK77EQ3iS7zXjxjp6I3bz&X-Amz-Signature=0e17baf076a806cd2259adb680ecf338e0d6fc11e801201f1ce5dc0266b1c796&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U753WRU4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFFKZd1cjKS7npzdRpAtJdvdu%2FZ3gqYQUOc2xn1xy2TVAiB%2BMvhOexacOw6vzt6HTjVGQgr4VYh%2BI4lmONeJC4H%2Bnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMR0eReDkJv6GtPG8dKtwDJVF%2B4tNIXLhGQJy6WsAe%2Fp%2FU5Dr0NZih4gXmZXHVCfUb2XMLZJHpZsBAbzTZeH6PrSi7lOmJ0Uzpwt9pcYqktDBlvpxo34ku5I593jay1uqBwMI0n95AyAD2tYo8mPR8c%2F3p0x3oXX5E9aYkMHJ6Fi9bu42FNs4SA3PUEdZfSXTsqEtx6j1q%2B%2BFrFZv1jwQFllnNjVYahz%2FvkaNni4hM3J9mHBxX7tZLJWfInMZ1gbCYAXoM%2F99PhBaAOdQe9Q9GoOBg1xmmp%2BDN0Wnv0JYu3DxiqOrSkR%2BeRi8krnN2IVhIYJB5K2TfHrPrPMsIhBavc0dKQLzljOdcDtRe4y1RI5DPn%2BTr5T%2BCyhGOi514JHj7ZampCjReht20hMbZBLfd2fgbmgAKM56v4FFcr6qMUia%2FUMzWo9t%2BTbx8Jyxgp2xewmsxR9gC7yra1fRjAg67O3AzuYKcBT1C2cKnIFGyaKbxlqIfu%2FZUFYoLaLbXcKb4C5Iw36B8ZI6Q%2BO7gztQ6gLcvUhU%2B%2F8XUklTO7oxRlb5XQyuJH%2B%2BzKzvDerXViBFYdNsL3NR67GZoPfM8qy53wnuQ984m%2FPHQW2rQfmX0tkT5AkeikBMxJZeiD1FrvbUu8%2BCHd%2B3bUcNu6Nsw3J3PwQY6pgFIUL0efEPAJ2U4cicdq1TMXAjQbf%2BjzBzukU9JVaq2oqwEJTCqoq9e9%2Fm7IllRKCi1wpjotYH8XFtHb4WbmfbFBvoZhN4D3gPmcCXuZoFmv0YkoV9jGZVkBtSpFuPE%2BJPZv294GK7JCf71%2F4RJCXyQZr0ciZ%2B%2FtInH72%2BoRdrjOGtQ7JsyK%2BHReCrgOdzxA%2ByIp7wW5GkYK77EQ3iS7zXjxjp6I3bz&X-Amz-Signature=db3a8df8506aefd1e889244857fc7e65e3b71e8ecddb4031323706d3406c9957&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654GIYWWO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDcEfl%2Blw%2F6GVQu8h8rU2pZB%2BAluPy1kef9oxGHCKBrHwIgcRDxxp%2FMVphzwqhmzjCMCk2Ec7%2F%2FHXNKFlsMUsEt1kEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNb9rXFyGNJJ6cOeGircAxx5f5c2uYhLFuY%2FAEMWaEdoUgxO8g55k%2BrXQXWUeh3Molz0X3%2BtK%2F9fLnq3gn%2F8t6mGYVyQqEL6A6Y025idbwZIJfO1Oz0e8yfmeyIjayPh7t7beXmS85oQbr1iqFOclrsyfhRXpD9BXbkPcccj5SA%2F9tUDuUG6wTOtqU1VtNVtOn6wTS9RGrNF81sixXqEHOMD2qATiJS6Kngwce1hDewjTx7SFaF9%2B7CFQlNEnhXz6eaglRKRyKBCrMMe%2BARt6hhRujMC3raGn8sCLLLOJUN4DL%2FsJNT2IJ92RBcfyNmnnMQvnsn5QIGRqfE%2FDyS%2BoaWJnhFVqf5GL5nZA05R5W3xKcyTJdD8jsBTxs%2FB8qt1x%2Bhxpn0oFsddw00vB4i9y5uhOG5dbo52H8s8hIGHjpRpNZ8BX4QtxVaim8uU%2BvzT19xD%2Bwzd74QHAzD6yQFmPYE4SYr4ORbpbO4UbEecTpPkbmBCjXzbCfOzXKTfj%2BGVMmZ%2Facx8Gg0RAT9Ih8%2BpPMEtWdlQgklFDOUN8G8b8D%2BuACPoAVz9rIFnR0lCmgEbO4lBPPiXxIu%2BNoRpqV5j97v3swF0PlkHJGAxPPHf9CsfS09uA9NKYZSn8WtXqnm%2BwCac%2B8oF1HnLkyoAMOqez8EGOqUB5q3oRU9wezZoKqegh7PT%2BKCNu34sNeKaKwk2CnEc7qPwdo6HZsaTBHyM1GSRWDhFLBFP9kBw3xBC9KhRErka8Ovhgk0FhUe4wvxQCVA3c7ZRYpPmcyCQMpSD34Tzq3MjIab0jtudaoylAwHsxuOONtXiXA3mXvZmy9vzPDnNZYcGNV5a6oG%2BN15280W1LAXB0gUQKyWMuzkZR8MCbM%2BqHDQXif6e&X-Amz-Signature=a287e4eeb2b191986efc73d162d0edb3c28b9786389514a323d746f35b636a46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IWHU5T4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDjjB2p5fvzmnuWz11rpP%2B0A0Hvlr5FU0tdZfhi3umFkwIgfYQPfwKVcAjSeHr8f8oS6buaW%2BCS9wVEIvYqm3svAxQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKOUO7YNmv2ap0mKjCrcA89%2FpYMF7OYLyQT5Mdol97C2jeOovf9X42VNMOmiwUebZ6JR04p75d%2FSCDpl1omh6UtQ3K3ROQ08P9z9kdBqstUIqhhdJBBZIxi6ysgAbPqZjc1E89NMi9dUqnkqHhH3%2B6npy6QQryU1dXt5NiMpVx2hx0nRz3IJlsW%2BGIP0pY0ME6Fz%2FV9bEyX%2FqcasD2zWUij8kXssGbhUZd0qNQsBWQlFJjWxVjl1d4B%2Bzsh9ah%2F0VnAgDA7%2FY98ZhGlf5oRGYxBwpGCjfr4CFRer9Bs3Xy8tW3NpMyzNTB6fCEAseik5lYfKSRSqaMHAkGz6k3FWBmux4jYkMcxTX5OVCUHogOE4C%2BFPc6QQg0bNUs4gw2xX49nV3r3UcYTnqd1%2FIWWWLGvVkUyxgm3pR18Vq6t93HOwj4bUWdXmftANBYim4Nq7DyJUUCVjYD43bKz64nytLrFA%2Bkr38wC2hgjnUAlOLzN4i979mR%2FxFwCuA3pPL5lfW1kDQnhh%2FZyaGMtbCh61Bg6Vs5OhZ%2BpR5nMvGEU1bBFc%2BERp0Z8RnOfPgqepFOcF5Pt0XPaE8YeQ7OQwMHLsAAeKRom4aLqc5TWghL8QFvW3z2Y7eJaGjCwgwUQa7mn4pauTpsbvMIkX9NnEMIyez8EGOqUBsWot2rv%2FEPEhDbzjr6bnuY%2BtBN9X%2F1GWkKXpm%2Fv1yhzrq1OFFsvP6h3UIrRcphV3Ebv2atW7%2B%2F3dikWikL%2BV2BtCXeIb0upwIby9KiFygraMRaJRJeeL15UXMiXmOA09OZtJod0R%2BTq9Wjn9pNsgB1Iy6IJQFGAF3RgZJhrpmjFlrH2jabVvniy%2Ftn8TPSsvp14%2FGlLW01jknToOruw4pKNmw2dG&X-Amz-Signature=79617c9bdde7b8841a99cd700290ce348bce723247dbc94027e08f00adf13941&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U753WRU4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFFKZd1cjKS7npzdRpAtJdvdu%2FZ3gqYQUOc2xn1xy2TVAiB%2BMvhOexacOw6vzt6HTjVGQgr4VYh%2BI4lmONeJC4H%2Bnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMR0eReDkJv6GtPG8dKtwDJVF%2B4tNIXLhGQJy6WsAe%2Fp%2FU5Dr0NZih4gXmZXHVCfUb2XMLZJHpZsBAbzTZeH6PrSi7lOmJ0Uzpwt9pcYqktDBlvpxo34ku5I593jay1uqBwMI0n95AyAD2tYo8mPR8c%2F3p0x3oXX5E9aYkMHJ6Fi9bu42FNs4SA3PUEdZfSXTsqEtx6j1q%2B%2BFrFZv1jwQFllnNjVYahz%2FvkaNni4hM3J9mHBxX7tZLJWfInMZ1gbCYAXoM%2F99PhBaAOdQe9Q9GoOBg1xmmp%2BDN0Wnv0JYu3DxiqOrSkR%2BeRi8krnN2IVhIYJB5K2TfHrPrPMsIhBavc0dKQLzljOdcDtRe4y1RI5DPn%2BTr5T%2BCyhGOi514JHj7ZampCjReht20hMbZBLfd2fgbmgAKM56v4FFcr6qMUia%2FUMzWo9t%2BTbx8Jyxgp2xewmsxR9gC7yra1fRjAg67O3AzuYKcBT1C2cKnIFGyaKbxlqIfu%2FZUFYoLaLbXcKb4C5Iw36B8ZI6Q%2BO7gztQ6gLcvUhU%2B%2F8XUklTO7oxRlb5XQyuJH%2B%2BzKzvDerXViBFYdNsL3NR67GZoPfM8qy53wnuQ984m%2FPHQW2rQfmX0tkT5AkeikBMxJZeiD1FrvbUu8%2BCHd%2B3bUcNu6Nsw3J3PwQY6pgFIUL0efEPAJ2U4cicdq1TMXAjQbf%2BjzBzukU9JVaq2oqwEJTCqoq9e9%2Fm7IllRKCi1wpjotYH8XFtHb4WbmfbFBvoZhN4D3gPmcCXuZoFmv0YkoV9jGZVkBtSpFuPE%2BJPZv294GK7JCf71%2F4RJCXyQZr0ciZ%2B%2FtInH72%2BoRdrjOGtQ7JsyK%2BHReCrgOdzxA%2ByIp7wW5GkYK77EQ3iS7zXjxjp6I3bz&X-Amz-Signature=8f4d845afa8a956c0d280d5e42a7999d59077dca180e18218e8343db27088cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
