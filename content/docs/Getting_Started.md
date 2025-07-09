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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQZ2JBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMPAqtZFmhdZ1WR16fKE9MmBB8E6a9aY%2B1J5fRFAxx1AiEAuhRSQJDlY3T0hrQwVEoszhM20mXa%2FB%2FHcyhZAqszdioqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfIQTNYR9h5GaWUJCrcA1sQV3ObQ3JY5l%2FqT4hoi%2BKHs2z4%2BSdgpLYxwdPkNFNifrXkbj5w4jubB674L59Ck0a1tLhDSsm%2FYpU96ia8YEmic2mx6rW7izYQhUEcwT5qQI9aQuf1JtDteKjaeRoBd4aHIhSVJzH8ETOsBA3eTgbfS2F0zIC5ExnTq6ChqCUqSLsOjjxyW5eTZyAfIbSiWBGqGw8sDipPaYptCTRchMSSXZ3yR7veGJp9boZSePOeR%2BSH02Qyu3II0pQR9XZacpspDdS7GoXtNanu38YDQUfRwoQjlSNBXh%2BR%2BiSKm%2B1jRL3fmIMtfbBTm7b7Xez9VKd6fGYw2MUqeW0Vw035D3SkXQ8aarNvJ7Hz7rfaD%2FrogM3tHzi3si%2FmX%2BUtKOtJSv6JL5J1lQpWycH3rVumiaFj3PrSF4mT8N0A6e2K9DQU%2F0Q1XyC7guzhOwkX8rTc%2BuU5rB3Hf2ROSTY0oBwhKfWgSrpQYlPCWUNem3X9IRAP4oPvC%2FBzGVtg%2Fyo%2FpumnBIL6R3cL1jeXmlcV910yR%2FTQnFPoWjIUTkYypKXH7aTn1LDewhsRPILZoFfJ0Yhc3JmKg%2F9a6pBS0WCAwzldc3dvso76D6oPjkPupBvxVI11TxtE4leYoI83FRk0MObEu8MGOqUBhhM5ssefu7pwnmW9KDvb%2BsQhgzKiMNGrv8v7gs7%2FlOAzMaW3Dk779FXX%2BGXIFmWs7GP%2Fc%2FxolzdgN0wBDiu2DgtaarnPCBBmU5q%2Bo2EkKDMsZpFVY4hbOfAiAesILnkNdLzhJ5zl9JJJCpJuGIXvL5lBk4wIIT7Im1BZEZM81dzgeTDOIwiYtO4Zk3zHJllXDT6z0VELkrDT2ox177%2Fe9b5%2Bh5dL&X-Amz-Signature=c4e61794381365fd24d7701f44651bdf5b5d501129c2f05cb7866d6543ad72da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQZ2JBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMPAqtZFmhdZ1WR16fKE9MmBB8E6a9aY%2B1J5fRFAxx1AiEAuhRSQJDlY3T0hrQwVEoszhM20mXa%2FB%2FHcyhZAqszdioqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfIQTNYR9h5GaWUJCrcA1sQV3ObQ3JY5l%2FqT4hoi%2BKHs2z4%2BSdgpLYxwdPkNFNifrXkbj5w4jubB674L59Ck0a1tLhDSsm%2FYpU96ia8YEmic2mx6rW7izYQhUEcwT5qQI9aQuf1JtDteKjaeRoBd4aHIhSVJzH8ETOsBA3eTgbfS2F0zIC5ExnTq6ChqCUqSLsOjjxyW5eTZyAfIbSiWBGqGw8sDipPaYptCTRchMSSXZ3yR7veGJp9boZSePOeR%2BSH02Qyu3II0pQR9XZacpspDdS7GoXtNanu38YDQUfRwoQjlSNBXh%2BR%2BiSKm%2B1jRL3fmIMtfbBTm7b7Xez9VKd6fGYw2MUqeW0Vw035D3SkXQ8aarNvJ7Hz7rfaD%2FrogM3tHzi3si%2FmX%2BUtKOtJSv6JL5J1lQpWycH3rVumiaFj3PrSF4mT8N0A6e2K9DQU%2F0Q1XyC7guzhOwkX8rTc%2BuU5rB3Hf2ROSTY0oBwhKfWgSrpQYlPCWUNem3X9IRAP4oPvC%2FBzGVtg%2Fyo%2FpumnBIL6R3cL1jeXmlcV910yR%2FTQnFPoWjIUTkYypKXH7aTn1LDewhsRPILZoFfJ0Yhc3JmKg%2F9a6pBS0WCAwzldc3dvso76D6oPjkPupBvxVI11TxtE4leYoI83FRk0MObEu8MGOqUBhhM5ssefu7pwnmW9KDvb%2BsQhgzKiMNGrv8v7gs7%2FlOAzMaW3Dk779FXX%2BGXIFmWs7GP%2Fc%2FxolzdgN0wBDiu2DgtaarnPCBBmU5q%2Bo2EkKDMsZpFVY4hbOfAiAesILnkNdLzhJ5zl9JJJCpJuGIXvL5lBk4wIIT7Im1BZEZM81dzgeTDOIwiYtO4Zk3zHJllXDT6z0VELkrDT2ox177%2Fe9b5%2Bh5dL&X-Amz-Signature=ee298f2d5721167e91e99a13648ff074497dde51a63393b7ab31b8fd4d1fbc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQZ2JBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMPAqtZFmhdZ1WR16fKE9MmBB8E6a9aY%2B1J5fRFAxx1AiEAuhRSQJDlY3T0hrQwVEoszhM20mXa%2FB%2FHcyhZAqszdioqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfIQTNYR9h5GaWUJCrcA1sQV3ObQ3JY5l%2FqT4hoi%2BKHs2z4%2BSdgpLYxwdPkNFNifrXkbj5w4jubB674L59Ck0a1tLhDSsm%2FYpU96ia8YEmic2mx6rW7izYQhUEcwT5qQI9aQuf1JtDteKjaeRoBd4aHIhSVJzH8ETOsBA3eTgbfS2F0zIC5ExnTq6ChqCUqSLsOjjxyW5eTZyAfIbSiWBGqGw8sDipPaYptCTRchMSSXZ3yR7veGJp9boZSePOeR%2BSH02Qyu3II0pQR9XZacpspDdS7GoXtNanu38YDQUfRwoQjlSNBXh%2BR%2BiSKm%2B1jRL3fmIMtfbBTm7b7Xez9VKd6fGYw2MUqeW0Vw035D3SkXQ8aarNvJ7Hz7rfaD%2FrogM3tHzi3si%2FmX%2BUtKOtJSv6JL5J1lQpWycH3rVumiaFj3PrSF4mT8N0A6e2K9DQU%2F0Q1XyC7guzhOwkX8rTc%2BuU5rB3Hf2ROSTY0oBwhKfWgSrpQYlPCWUNem3X9IRAP4oPvC%2FBzGVtg%2Fyo%2FpumnBIL6R3cL1jeXmlcV910yR%2FTQnFPoWjIUTkYypKXH7aTn1LDewhsRPILZoFfJ0Yhc3JmKg%2F9a6pBS0WCAwzldc3dvso76D6oPjkPupBvxVI11TxtE4leYoI83FRk0MObEu8MGOqUBhhM5ssefu7pwnmW9KDvb%2BsQhgzKiMNGrv8v7gs7%2FlOAzMaW3Dk779FXX%2BGXIFmWs7GP%2Fc%2FxolzdgN0wBDiu2DgtaarnPCBBmU5q%2Bo2EkKDMsZpFVY4hbOfAiAesILnkNdLzhJ5zl9JJJCpJuGIXvL5lBk4wIIT7Im1BZEZM81dzgeTDOIwiYtO4Zk3zHJllXDT6z0VELkrDT2ox177%2Fe9b5%2Bh5dL&X-Amz-Signature=6980874f21ceb278bc0898756bafe1f14ffcc6e3dea4e918929826d493de0a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4LTN2I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFqTAwTxEik7UyFon%2BFcJPE236E4Y2b5epBvtz52v9xAiBU479jsn0ZvKS2SHMW1LEbKsDIBvE6dainC2VXSwlXcyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ2eEaRe6or8LgNrMKtwDa1eO%2BtiaIMqVkT58b5A1WTgYF10b8n%2BkaR%2BecVIDBUIyLCrVvp%2F52%2BYksLcuKWFTG%2FaYTZzV6H1Be77H4%2Fa10eobCKfkHvdn7MqYN9Huz5hwgK4XqIpNDA%2BAYDRfPsY4wJjDd%2BuKXUx7uUlP2Bc5OYaHkIzkPe4jAxO1SBfSnsG9s%2FWFWDFcc2CrtNdnqwMRNcGqX%2BDAyxCvKquzrEpDZTOi6F705%2FXrw4zhoHylPmg5LMToKI6mJVSL9NIzl1nf%2Fs746blpaXk%2B%2FLaj8BtB1xl96dsdwBSCjczOk3TrLBfS%2FCBAOtIAUwpaWVixzFFkun5AcSI3ZLF4oFPcNEejvq2VPhf%2FAVlC0UHLuM7ruxilcu75cKI6ciQhzETnh5A4NLeeQ1cRSH24TrQyjRawTrKt1dybHfEx7VMLH6Rgi33R7FS6myVLv30uCBsZE9T5bioXMR0ag%2FgfPCOl9gX84tgOdm2tuMXJXlaYif6fUEeN5l%2FeA881C3dpUYxMM0YmplUUyO8QLkbjCtiC%2Fc9F3kVyRmFduXbdvpaU7cKX6WNrh%2FN1qUNg3gwkCbIUHv%2FOdD8oWWdeOq0AH5CGnsjyK7BCFDBSM8tfGCd%2FBwUO4paL%2BkIBylmSXcggagow%2FsS7wwY6pgHSMsnFziVoywmoTiVeJaqtnxCCXX3TdEuZan5CcsjsFpLRBd8XrVH%2FKaxp0Yr3JWUEpRgl4teRw7iEYfCSEbQrA9vtiJ2laEs5PUNuiYYe0NFC9Z%2Bj6nn7N9517ULo45n52r2wsDVmak00Lmpe4prWt1seoRfrlxdMXL%2BSPdjSeqyCWh2DrsSEKth1CEcMzYlkboa3MZdnUIds%2FdKVxTC6vC3s0KAJ&X-Amz-Signature=5c011835dc363d871290f39fe3fed59f2dc27fd3d039cb846a1969d26402aa00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJZO6373%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFNTKVbEMmDd%2FWaA4rh%2Ba4KAEJx6O7nZma%2Fp6C2E5e%2BAiEAqgphnaV7PTXim%2B9MGIWHbwAYhaquRTUkMh8I8nlt5J4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzugf6kEQepVF9%2FGSrcA6wfWcVdjxQ%2FhSmRoqXpeLt0CKdsIQjnbzbGgWl43a31C7TJKP7YsxIGIkBdNq1qu5STJaEjFkX16nCXOMoEOSeBYR5%2FjynX%2BO0oNcXJafYHk%2BFBU1dm275mMq%2Bb1v7Dxk2Sccz5AshYnATqzcrwISj7hL74mY9XX5fDKt2mypiMKsOwMHttxqRjI%2FlijgsxiwvbuZI7r2PzIkTvc3VOd%2BPc1LmwZSwFUvHpUJwfdP59jaOV28OHWSoRtRqZiCphO2iyMMYq0YcTTr6m4mu2dRVMy%2Bmu99e88IhBOQ%2Fxa33nVMrD09mWV89MvKzqBAos5Rdz3h%2FMpg%2B5EqTPNx5T1wPD98US9OAYfN7fkUfVWAN%2FIyyavEF%2FdSz9A3PyijcnvFtikHIJww9Fs1vWAU%2B4xzGNRhSK1hsig9nflBIgegKYg%2BbrhHaZAEM2mSIDG%2F6%2Bwy4JUB%2FefkR7yEo8xgFuSkdDaZtC30bSIaGwGCUZTj6drlzfVh9ve69h14099ICrXOsmrRmctI0ogUHx7JfcsLGDpLUEFuWAkpS3CNjJPrL8uK1r7FF0wg733YhwCVYRLA0jxgMs1eiqEXQlQK%2FrVp%2FiB9ntt%2FRLAETYv0PQ4RL%2FQjIPGk14uBQoS14NMLbFu8MGOqUBMg9NYvLAklO%2BFa7c9KZs5Sa%2FMYrvMglkYImVd47VqCAZKjDU6eORXv6iJvnNOTc4xdh4Nas61zT68feZtDJXho01gZXsxkacAnzmfC1pxkwaAiV%2FqzY63%2FX%2F%2FJPYDZJ2%2BiNqZdr9kB%2Bz%2BjcMrzc2EnQ9pINQG%2BS%2Bh06ZkaWaOy0%2ByisUJXS42EVkVtzRFxFTVoEQ4jR8uVFRQiwGsZ%2B5qkg7zg%2BV&X-Amz-Signature=b510227bc01f0e06384a35b84a8c9a9c3e96b96af51d6603248c9969f4df8e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQZ2JBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMPAqtZFmhdZ1WR16fKE9MmBB8E6a9aY%2B1J5fRFAxx1AiEAuhRSQJDlY3T0hrQwVEoszhM20mXa%2FB%2FHcyhZAqszdioqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfIQTNYR9h5GaWUJCrcA1sQV3ObQ3JY5l%2FqT4hoi%2BKHs2z4%2BSdgpLYxwdPkNFNifrXkbj5w4jubB674L59Ck0a1tLhDSsm%2FYpU96ia8YEmic2mx6rW7izYQhUEcwT5qQI9aQuf1JtDteKjaeRoBd4aHIhSVJzH8ETOsBA3eTgbfS2F0zIC5ExnTq6ChqCUqSLsOjjxyW5eTZyAfIbSiWBGqGw8sDipPaYptCTRchMSSXZ3yR7veGJp9boZSePOeR%2BSH02Qyu3II0pQR9XZacpspDdS7GoXtNanu38YDQUfRwoQjlSNBXh%2BR%2BiSKm%2B1jRL3fmIMtfbBTm7b7Xez9VKd6fGYw2MUqeW0Vw035D3SkXQ8aarNvJ7Hz7rfaD%2FrogM3tHzi3si%2FmX%2BUtKOtJSv6JL5J1lQpWycH3rVumiaFj3PrSF4mT8N0A6e2K9DQU%2F0Q1XyC7guzhOwkX8rTc%2BuU5rB3Hf2ROSTY0oBwhKfWgSrpQYlPCWUNem3X9IRAP4oPvC%2FBzGVtg%2Fyo%2FpumnBIL6R3cL1jeXmlcV910yR%2FTQnFPoWjIUTkYypKXH7aTn1LDewhsRPILZoFfJ0Yhc3JmKg%2F9a6pBS0WCAwzldc3dvso76D6oPjkPupBvxVI11TxtE4leYoI83FRk0MObEu8MGOqUBhhM5ssefu7pwnmW9KDvb%2BsQhgzKiMNGrv8v7gs7%2FlOAzMaW3Dk779FXX%2BGXIFmWs7GP%2Fc%2FxolzdgN0wBDiu2DgtaarnPCBBmU5q%2Bo2EkKDMsZpFVY4hbOfAiAesILnkNdLzhJ5zl9JJJCpJuGIXvL5lBk4wIIT7Im1BZEZM81dzgeTDOIwiYtO4Zk3zHJllXDT6z0VELkrDT2ox177%2Fe9b5%2Bh5dL&X-Amz-Signature=1576ef4fc220a84c2bc22d35e2a8f94f0cd098490a3fc2580c92da964aab14ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
