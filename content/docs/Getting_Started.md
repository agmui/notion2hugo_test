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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HQL5QP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0b5fBALDxvTn9PfdJp1T%2BMEJ%2FSxS2CgzijSdhSIakQIgQNnlpM0MspczR9z4jFrR2jakFykLmyahfX7XnC8pPJAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLeKItMiLNeX%2FBxIFCrcAyNg2%2FvcdfTayNJWtUY7YdpnDM9IvopsX36KFNqWG8ustBTNVxSWi4kqhPTiSd7t4bKFAtssw%2FNskgHUaYC7ckgbIwCazfGWmsAZdVIi4WpWOiS4E8cMVSq9AMznNyGgkPdwlrJrIgyaHXkw8fdUdYeAQPHL8%2F4%2FlMcxv4VUJ9pUDkJD2f1E05%2BVMRYeB1w0%2BbXph0Rcgxp1P1Az%2B706ICyJ4ja7NRkUVHBLeJ%2BJOb4G0ici3AFq9xOj%2BJBvw1Kxav0MM0BlqdPVm1natnHsomPevKVtMaubL5lDs75NmISplCSEHf%2FLg0fzheaFipMj0tHE2bMb7iiqyuChy1tvamnBmJBmGKrVgNZw%2FKS4na2UcAKRk322avfA%2Bk7%2FxGtnz6w3EP04JSz6ZcMFp8nmZniKqmMrxcgf57bFwf5ubY4Z%2Bq2FeenGzRiS1iEyMndXBYaJkVVoHOqdxSsn3ZixH0wVKqhF3PFkYNsEeOM9OXVKxv2G39sCh1Xx%2BxHR5v1ZEGw5626k5Hum41%2FrT4Ss0A7b%2Bu4fy0fCBhvNGCDRgV2WInD%2BAE7JezQuKl%2FY76IwPgJfUOI760AIilKMDRrIeIQjW7e4jy%2FpFMzzaEkNe7tkOx7JMM0NnjuZe7XJMIf7jsIGOqUBgOqztSZp4N%2B6qkdGvWrBu%2FQXsGl23NfGolk0H3wQH0XGj1uiVJsGhh%2BDGHAjp1EcmRmyZA5z8321jDXyPRkyyRpWPs7H1ICHp2y%2FTfHsfz1MDsf4aZ%2FF8zXXrQrveEXTFZLzBEbKPiT5JBmPThu9KrA8FF9gMLCmxkjF%2FuIaR0Y1wRSXguY%2F26v%2BFMhO677rhaxbYpCJQnn0MuPTUPFeGek4qSMa&X-Amz-Signature=a1844c5a915c00ea8e4a01f4f396caf3811f9f9f0fae7710d747894d9e7aab55&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HQL5QP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0b5fBALDxvTn9PfdJp1T%2BMEJ%2FSxS2CgzijSdhSIakQIgQNnlpM0MspczR9z4jFrR2jakFykLmyahfX7XnC8pPJAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLeKItMiLNeX%2FBxIFCrcAyNg2%2FvcdfTayNJWtUY7YdpnDM9IvopsX36KFNqWG8ustBTNVxSWi4kqhPTiSd7t4bKFAtssw%2FNskgHUaYC7ckgbIwCazfGWmsAZdVIi4WpWOiS4E8cMVSq9AMznNyGgkPdwlrJrIgyaHXkw8fdUdYeAQPHL8%2F4%2FlMcxv4VUJ9pUDkJD2f1E05%2BVMRYeB1w0%2BbXph0Rcgxp1P1Az%2B706ICyJ4ja7NRkUVHBLeJ%2BJOb4G0ici3AFq9xOj%2BJBvw1Kxav0MM0BlqdPVm1natnHsomPevKVtMaubL5lDs75NmISplCSEHf%2FLg0fzheaFipMj0tHE2bMb7iiqyuChy1tvamnBmJBmGKrVgNZw%2FKS4na2UcAKRk322avfA%2Bk7%2FxGtnz6w3EP04JSz6ZcMFp8nmZniKqmMrxcgf57bFwf5ubY4Z%2Bq2FeenGzRiS1iEyMndXBYaJkVVoHOqdxSsn3ZixH0wVKqhF3PFkYNsEeOM9OXVKxv2G39sCh1Xx%2BxHR5v1ZEGw5626k5Hum41%2FrT4Ss0A7b%2Bu4fy0fCBhvNGCDRgV2WInD%2BAE7JezQuKl%2FY76IwPgJfUOI760AIilKMDRrIeIQjW7e4jy%2FpFMzzaEkNe7tkOx7JMM0NnjuZe7XJMIf7jsIGOqUBgOqztSZp4N%2B6qkdGvWrBu%2FQXsGl23NfGolk0H3wQH0XGj1uiVJsGhh%2BDGHAjp1EcmRmyZA5z8321jDXyPRkyyRpWPs7H1ICHp2y%2FTfHsfz1MDsf4aZ%2FF8zXXrQrveEXTFZLzBEbKPiT5JBmPThu9KrA8FF9gMLCmxkjF%2FuIaR0Y1wRSXguY%2F26v%2BFMhO677rhaxbYpCJQnn0MuPTUPFeGek4qSMa&X-Amz-Signature=45291d07966106afd7f6d02df53a7c789669d685c657f83a389f03b5db1c4ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HQL5QP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0b5fBALDxvTn9PfdJp1T%2BMEJ%2FSxS2CgzijSdhSIakQIgQNnlpM0MspczR9z4jFrR2jakFykLmyahfX7XnC8pPJAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLeKItMiLNeX%2FBxIFCrcAyNg2%2FvcdfTayNJWtUY7YdpnDM9IvopsX36KFNqWG8ustBTNVxSWi4kqhPTiSd7t4bKFAtssw%2FNskgHUaYC7ckgbIwCazfGWmsAZdVIi4WpWOiS4E8cMVSq9AMznNyGgkPdwlrJrIgyaHXkw8fdUdYeAQPHL8%2F4%2FlMcxv4VUJ9pUDkJD2f1E05%2BVMRYeB1w0%2BbXph0Rcgxp1P1Az%2B706ICyJ4ja7NRkUVHBLeJ%2BJOb4G0ici3AFq9xOj%2BJBvw1Kxav0MM0BlqdPVm1natnHsomPevKVtMaubL5lDs75NmISplCSEHf%2FLg0fzheaFipMj0tHE2bMb7iiqyuChy1tvamnBmJBmGKrVgNZw%2FKS4na2UcAKRk322avfA%2Bk7%2FxGtnz6w3EP04JSz6ZcMFp8nmZniKqmMrxcgf57bFwf5ubY4Z%2Bq2FeenGzRiS1iEyMndXBYaJkVVoHOqdxSsn3ZixH0wVKqhF3PFkYNsEeOM9OXVKxv2G39sCh1Xx%2BxHR5v1ZEGw5626k5Hum41%2FrT4Ss0A7b%2Bu4fy0fCBhvNGCDRgV2WInD%2BAE7JezQuKl%2FY76IwPgJfUOI760AIilKMDRrIeIQjW7e4jy%2FpFMzzaEkNe7tkOx7JMM0NnjuZe7XJMIf7jsIGOqUBgOqztSZp4N%2B6qkdGvWrBu%2FQXsGl23NfGolk0H3wQH0XGj1uiVJsGhh%2BDGHAjp1EcmRmyZA5z8321jDXyPRkyyRpWPs7H1ICHp2y%2FTfHsfz1MDsf4aZ%2FF8zXXrQrveEXTFZLzBEbKPiT5JBmPThu9KrA8FF9gMLCmxkjF%2FuIaR0Y1wRSXguY%2F26v%2BFMhO677rhaxbYpCJQnn0MuPTUPFeGek4qSMa&X-Amz-Signature=d7a942da431ab28ca115891af7742029730d18b869e50fd8408cfb167fe4ddc0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWCUCFB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8BY8YfU8lNdXTf44ZKcrpZMiMKMmxn0bMuHohMCirKAiApoADGfI7ymxqNkb7%2FxdEpELCmLg2CWGU1Ya6t9r%2BIDir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvDf5rz5fHln7LSp9KtwD2xF6i6Fl%2Fww4Ot8CPTSpFPk2D32xq87K%2BqTK33TjNqKKNVZCmqwFOcKG%2Bi1whAdcLKhCWwZcld%2B8Ua8VNzFZeMWFKLFdLfgCMKwazqsHxS6Is643PsPP1NGSD0EUs2sEBXctVo9NsuTBHdLLq%2BY%2Fy1rgosQAxhOyiBSHaDN0E1RZ9kW9XW%2BuXvCVnbaZzILuC1gp99cLNaaV7LL99JfOXuCxGurqsV20%2FpG1xF0MENHdB9qTRjN%2Fqd%2BpmTxx35j%2FUQDOLIgLeNuJcqad6XfOLuaWthnrSxXohdDXr4OFqdVY%2BfRLFCpACYlBjNNAOVwWxBNZAFtubWApBHfh1EtcqKkhqltIn6s3aa5MshrlJsIfcPVTZNAblLtnZBlX6ykFtszsYb5MbeVftJenZ2%2B605XVfnqQlXw9ws6LpGDktXBm0%2FuAb9AZ6Nw99SsgEF1x%2F%2BDnECONAPMya%2Fl2iCdI10zapvq2PLuiM0md9oZbrEGKVPn1xDV%2B6XaP%2B5LAtUnDF6fwaK0NOWpWFNXkNpWNcpNxWbComisJfNcOtsH2nQCjK31dva5CVOjbNYhE7cikp5sU9Rkyl8X6n04J%2BQZhnRSQRa1w81Zc32YZ%2BNmP73I7ObtNfNx09duzsD0wjPqOwgY6pgHTDvsXAGIuxqWEZV8b0wyCEI1Qcymq1xluMRsZDaj5KJEJRHSmb0gy803RA3NNxHYJbw5hDgbwEjxi9xStdgJrfI6XvETTw%2BUqYDjwOAgp7GgQocgSg26MhgftvnT2tbyVA3SlBRO47kZrPGDfyH7EinG3w%2F7xIiMi%2BVy7iWsj62%2BsNVPvl5ejm8TrTVrM9HMr7KzYxc8zyrrhDOq9k1njLlInwH8x&X-Amz-Signature=fb1ef518f2d11d25ed64dcbcb4a6ca1a0ac6b1109a147c327af17734cd741a81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAT5NCM6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJH9QeK1M2I54W4BuftfWZE37eGUidX8ZTKItTgURTlwIhAKaDkuI3UMgmbHbzuTnQQz7L88ns6k7wiQlr2NLkLL%2BwKv8DCG0QABoMNjM3NDIzMTgzODA1Igz4vCRKV3XxYX0nT%2FAq3AOqh%2B4UlJ1D8g0xOyJg1ywm9nFRB8tJXOPtE58pJ%2FfAG9B94y9qjqwfv6sOyLjUpg%2B0r2IQxxV000F8NzVFQQFusppso%2Fog32PpMprxMK7jrZWZee4iUylQsm%2Bzd4kFcTIRrF4h%2F3TTvhIByNDRClWXWtqbkFFgYp%2F%2FhtJsfGU7MNplZs1qxvhR%2FyvsIxSJ%2BDjUqaocXRIlg%2Fm%2BtzvtNy7FuD2WLSmkzxmeKSFgeHU0av9o5MqWX1PxopUyyQLUDorVF0kpwDj0xbVcuWd4xFAV4de3%2FLz%2BoLFwxqSuslqna3%2Bj9wHJ9yYEblw8YiYkXGTsqca6p2xrjddU3B9%2BwI3O3qxdE9%2BkMYQF7q%2BhnVcZL%2BSti8a83pgvEBrhwY30mDwyVqvbsVSqybjgQazXUoQ5K5LnZGNlftvFgyGuNw5mJkLPzXlVMmnib%2Bk%2BU3kGYagRPyDrrLDyNsFQukkR5e7VFFGrC4RKX4zEye6sqNl99c1SHqik0etgpVurcO2v6kiC5KA116BbvQ6wnw685xPL%2BM8YWESCSmDcYrU30SFPuHFRIJ5OgUNLiuCmjaY4zwsFJ5FX2jtkg0dDRnLPKJjO1q9s8A%2FyngYLZl0gs%2BJclBb%2BcvPWEc0kFNwvnTD8%2BY7CBjqkAWYXQZ55Bn89ySvjUdBTBLKKxhzSbVGuclqG2KheYioiVbV4T6CFMIOzN5kmzzD%2BqmEwtu%2FFvK3jplUNs5IKW0FtMCAOF4AX7TSY4bqJY68T6HDhXQ6tGvoEvZlNgov%2FL3JHTsYBCHAJarjkQMK75TpGZrbJgoLKBcBxofk%2F57t3cjETTwX9X%2B6Yn8V%2FAInJICOcjCsL3rWZfqRHB4gHZt48iLDi&X-Amz-Signature=951eb5b2f126acbbb63246cf2ae0674ebe9bbd71edfaea7011403991982f5dac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HQL5QP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0b5fBALDxvTn9PfdJp1T%2BMEJ%2FSxS2CgzijSdhSIakQIgQNnlpM0MspczR9z4jFrR2jakFykLmyahfX7XnC8pPJAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLeKItMiLNeX%2FBxIFCrcAyNg2%2FvcdfTayNJWtUY7YdpnDM9IvopsX36KFNqWG8ustBTNVxSWi4kqhPTiSd7t4bKFAtssw%2FNskgHUaYC7ckgbIwCazfGWmsAZdVIi4WpWOiS4E8cMVSq9AMznNyGgkPdwlrJrIgyaHXkw8fdUdYeAQPHL8%2F4%2FlMcxv4VUJ9pUDkJD2f1E05%2BVMRYeB1w0%2BbXph0Rcgxp1P1Az%2B706ICyJ4ja7NRkUVHBLeJ%2BJOb4G0ici3AFq9xOj%2BJBvw1Kxav0MM0BlqdPVm1natnHsomPevKVtMaubL5lDs75NmISplCSEHf%2FLg0fzheaFipMj0tHE2bMb7iiqyuChy1tvamnBmJBmGKrVgNZw%2FKS4na2UcAKRk322avfA%2Bk7%2FxGtnz6w3EP04JSz6ZcMFp8nmZniKqmMrxcgf57bFwf5ubY4Z%2Bq2FeenGzRiS1iEyMndXBYaJkVVoHOqdxSsn3ZixH0wVKqhF3PFkYNsEeOM9OXVKxv2G39sCh1Xx%2BxHR5v1ZEGw5626k5Hum41%2FrT4Ss0A7b%2Bu4fy0fCBhvNGCDRgV2WInD%2BAE7JezQuKl%2FY76IwPgJfUOI760AIilKMDRrIeIQjW7e4jy%2FpFMzzaEkNe7tkOx7JMM0NnjuZe7XJMIf7jsIGOqUBgOqztSZp4N%2B6qkdGvWrBu%2FQXsGl23NfGolk0H3wQH0XGj1uiVJsGhh%2BDGHAjp1EcmRmyZA5z8321jDXyPRkyyRpWPs7H1ICHp2y%2FTfHsfz1MDsf4aZ%2FF8zXXrQrveEXTFZLzBEbKPiT5JBmPThu9KrA8FF9gMLCmxkjF%2FuIaR0Y1wRSXguY%2F26v%2BFMhO677rhaxbYpCJQnn0MuPTUPFeGek4qSMa&X-Amz-Signature=dd7d5f307962895e6aded845aae234b6b29e3f9a80fe02d36965e962c76ebaca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
