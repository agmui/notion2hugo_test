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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYLM3WX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZtgna9eLLzkSFMO%2FMnK8yss7EGzqAcZK1PAfPnsYOAiEA6LhjTy7mhY8YWZy6DSdHoTEvQ6YKC6IpncwbN8XST1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkC5Us0IxXr1v6RTircA8%2BlV%2FVQ5ElGUk3nWN%2F6SHPomRPyLniqOzckC1fWqbQ5S%2B3%2BeFQ6Y%2FZKNWtTgCBlObK749IDgnzgvKOQXPSBnzyA0ysIKV0%2BOewZ%2F7v5BDcNz9Gnn3RQouB6js7GE9uzgSCIpvjSshWrUAS%2BaZ1lfGAqxUIrwGhU2QSuetQ4aabRLUYFaOUUGCeJ8u2RCA8qmD0ENToqFxs2MNBFZO18J2wbCN3B6a%2Bd2KSB8tnmDJEl6s6IwEVJC0Z%2FA%2FZB%2Fsq9PxG18OUDKhDbZv4pLnNQSgIGsTnUIWKI8bgrjcT%2BX5M%2BPpLGre8o7s2SHYyd56babsFpJfDDwCPEoHE66lHZaMz42u3LhrfakO6x96f8QBT7xvoPD4IeCZyZyWkgTdeBq%2FsYojeupxFDqH25I28HDghoi2TlPgZEFX9SiLrJ15jt%2FxrGgKSyDWX7K8eZO%2B3bvBSWqaubQ5xtzSiH%2FwmHyIwLgMdoea7tbXHtbO%2FGksFp9fFVopfJMVAqEQE63GZRci3Hc3ov4uAjjq6A9Jjs%2BPDi0z8PLEvNv9WjRof6EZ97RxwuwwyUl03V%2FR5qD4L%2B4KOMIABA%2F53UBjm4W1wVbXKeug5i5BJZRXY%2Fj0TrjU47KKQanhxILRt1ucSvMPKT8cMGOqUBvShlhdkyC1MDKKRQ6SY6ddZWZ1iPVauF%2B2Nm0148G0g%2FwdGvCFcRckgNfCuAAYtig1X%2FbNnVevSkND4wUKjOsAA%2BJemGVQNYkbdjfzo0bDoMrwGOuFAyn0vlHmMGqAZTKrzprV5Y%2BWkcdNEnr6GhNNhu%2BrNHgbv6cjdWq%2BgwUrseX%2FrMbHndBHeCYe8mrQwqLhi7Z%2FZbg%2FqR7%2BCotqz%2BcfUOBwJV&X-Amz-Signature=bc450b04fe55ad0ded04bf0472a0babe745f38fada6167b918072c169cbc308d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYLM3WX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZtgna9eLLzkSFMO%2FMnK8yss7EGzqAcZK1PAfPnsYOAiEA6LhjTy7mhY8YWZy6DSdHoTEvQ6YKC6IpncwbN8XST1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkC5Us0IxXr1v6RTircA8%2BlV%2FVQ5ElGUk3nWN%2F6SHPomRPyLniqOzckC1fWqbQ5S%2B3%2BeFQ6Y%2FZKNWtTgCBlObK749IDgnzgvKOQXPSBnzyA0ysIKV0%2BOewZ%2F7v5BDcNz9Gnn3RQouB6js7GE9uzgSCIpvjSshWrUAS%2BaZ1lfGAqxUIrwGhU2QSuetQ4aabRLUYFaOUUGCeJ8u2RCA8qmD0ENToqFxs2MNBFZO18J2wbCN3B6a%2Bd2KSB8tnmDJEl6s6IwEVJC0Z%2FA%2FZB%2Fsq9PxG18OUDKhDbZv4pLnNQSgIGsTnUIWKI8bgrjcT%2BX5M%2BPpLGre8o7s2SHYyd56babsFpJfDDwCPEoHE66lHZaMz42u3LhrfakO6x96f8QBT7xvoPD4IeCZyZyWkgTdeBq%2FsYojeupxFDqH25I28HDghoi2TlPgZEFX9SiLrJ15jt%2FxrGgKSyDWX7K8eZO%2B3bvBSWqaubQ5xtzSiH%2FwmHyIwLgMdoea7tbXHtbO%2FGksFp9fFVopfJMVAqEQE63GZRci3Hc3ov4uAjjq6A9Jjs%2BPDi0z8PLEvNv9WjRof6EZ97RxwuwwyUl03V%2FR5qD4L%2B4KOMIABA%2F53UBjm4W1wVbXKeug5i5BJZRXY%2Fj0TrjU47KKQanhxILRt1ucSvMPKT8cMGOqUBvShlhdkyC1MDKKRQ6SY6ddZWZ1iPVauF%2B2Nm0148G0g%2FwdGvCFcRckgNfCuAAYtig1X%2FbNnVevSkND4wUKjOsAA%2BJemGVQNYkbdjfzo0bDoMrwGOuFAyn0vlHmMGqAZTKrzprV5Y%2BWkcdNEnr6GhNNhu%2BrNHgbv6cjdWq%2BgwUrseX%2FrMbHndBHeCYe8mrQwqLhi7Z%2FZbg%2FqR7%2BCotqz%2BcfUOBwJV&X-Amz-Signature=5889c31552718141b599b773ec64f0209288bd226e31580cae8eae6d4353adc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYLM3WX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZtgna9eLLzkSFMO%2FMnK8yss7EGzqAcZK1PAfPnsYOAiEA6LhjTy7mhY8YWZy6DSdHoTEvQ6YKC6IpncwbN8XST1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkC5Us0IxXr1v6RTircA8%2BlV%2FVQ5ElGUk3nWN%2F6SHPomRPyLniqOzckC1fWqbQ5S%2B3%2BeFQ6Y%2FZKNWtTgCBlObK749IDgnzgvKOQXPSBnzyA0ysIKV0%2BOewZ%2F7v5BDcNz9Gnn3RQouB6js7GE9uzgSCIpvjSshWrUAS%2BaZ1lfGAqxUIrwGhU2QSuetQ4aabRLUYFaOUUGCeJ8u2RCA8qmD0ENToqFxs2MNBFZO18J2wbCN3B6a%2Bd2KSB8tnmDJEl6s6IwEVJC0Z%2FA%2FZB%2Fsq9PxG18OUDKhDbZv4pLnNQSgIGsTnUIWKI8bgrjcT%2BX5M%2BPpLGre8o7s2SHYyd56babsFpJfDDwCPEoHE66lHZaMz42u3LhrfakO6x96f8QBT7xvoPD4IeCZyZyWkgTdeBq%2FsYojeupxFDqH25I28HDghoi2TlPgZEFX9SiLrJ15jt%2FxrGgKSyDWX7K8eZO%2B3bvBSWqaubQ5xtzSiH%2FwmHyIwLgMdoea7tbXHtbO%2FGksFp9fFVopfJMVAqEQE63GZRci3Hc3ov4uAjjq6A9Jjs%2BPDi0z8PLEvNv9WjRof6EZ97RxwuwwyUl03V%2FR5qD4L%2B4KOMIABA%2F53UBjm4W1wVbXKeug5i5BJZRXY%2Fj0TrjU47KKQanhxILRt1ucSvMPKT8cMGOqUBvShlhdkyC1MDKKRQ6SY6ddZWZ1iPVauF%2B2Nm0148G0g%2FwdGvCFcRckgNfCuAAYtig1X%2FbNnVevSkND4wUKjOsAA%2BJemGVQNYkbdjfzo0bDoMrwGOuFAyn0vlHmMGqAZTKrzprV5Y%2BWkcdNEnr6GhNNhu%2BrNHgbv6cjdWq%2BgwUrseX%2FrMbHndBHeCYe8mrQwqLhi7Z%2FZbg%2FqR7%2BCotqz%2BcfUOBwJV&X-Amz-Signature=1d8507eae94ff3461ce360613aa8f1efa6a1be95e91da7f08b5acfec109f1a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYB52JHI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4dvlfFtV2Q1OpSiC6klAszHQ0cNfVk%2FCIfxJfSTO40AiEAgheIPg2OpyE4Ue0jsQfh8vdDPZcqV7PW9vOY5rDcp68qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5Q4Qq%2FzMAxQKDFLCrcA3eCJC4G64d6e6HbvqPfLZpIuuYfRlHawEq68CiKY9peY70iTghXkVTZmT4F12o21Z%2FpvTKe48fZkDiUj7sI%2Bv64uKUaiqT2vPAc7aw9ipRNT9oNI6UN38Os9pC7NSUznZzzRUme7yB%2FzZTpi5NDxl%2FXpZiycyZDRUQJyYbftLgJAZkPjKC9fj1dVJygESe4tYNd%2FqpcL4nyEfvNQBsEJ%2Fp3TWeKwVwAJ3CXE0xnl58lhmdQ9oonBp77TwyTarplZU4c1MOLnssLyS42ngiNAejOgnZkV2bc6%2Bxwj0OczFHQsnwGWrzsZo6mKSeYqPR08pC5o0iBO9Pyn3mNNLks%2F%2B%2BXFP%2BW6MTWl%2BNISFmc%2FtE2g27Dy2cKT%2FU1L%2BB6KPwj8362XexrM7%2B2sW0NcvgOUNGG3nuk3nfyMyGTL%2Bg8UFrRmgFfBK87a5Ye7vnVxf7ysTys6NUO5VBxtWu1tvdI3yaoEaMQUatDbr2wwUp4IxoP1vR%2BgvOV7dD2kk2uxpmhUbVl3tY63qVGImZAvmiIPef0aEFEVNQYI3Mv0BjrOsxarA%2B%2Bl2NMxbooI4OIYoHSovoLJheLMmj4rerGUNglUfhShYV7A9ldpivTURZEKB%2FTT4IaHoNJ68jXPaqQMOaR8cMGOqUBEfR7JtRw0A4peV%2B61JMtCziJ2hsJwqDjkKPTLMjH2KTmvJKmFVr13hTVatyBa7gkVsyZGlVtKcA5BXof4P5DZS1QbfV%2FBhFgsffCllFxuM1zPPYa%2FZDEimoRKn3hVsmxGkycjEghVCNjhABFbduLwkNFba5jFGtSo50Egdi36u1pwUaQHfDq2UnWwwZgJG1%2BkCwuMxV3GtmXfaI1CXZeXZOva4K9&X-Amz-Signature=3116257b4120d6ea8ada7669e030ca7e4a6df4fed18baf1f2ec683161ac6123f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYTDNNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRywektstePJ5rO1zZxOQ9Eu778gGaAPaALuZq5frd%2FwIgHmVoWaraV7oh4AL%2FeixIDbmGIjvvnynZp0OA5ZZDiFMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyu87d8rYQpfMCY0SrcA6YtIWWeMVGtW9MdJDA0EEtB2Cin6oVZ5rLZo5mlMoUu9vwyVcaVyHEtr7mdw7OyqbYsbDo4%2FJ%2BNOnHV6VF8mGkcoennd1SHl%2FH8hY87t28S1Z%2FPAA7CO1q8QcRQ0KB7zKzIpFGC539k7g%2FBS08NTWkSBIPXhU48oy61KbzvpFFmsOAwiV%2BcevoGxewrp9TDDYv7LHGB6NAZU%2FjTPErhJRp6cHn7tWLPLm9EImsK9s%2FNJV062Wp%2BMCJq785VvrkfFd%2ByqoXA%2F9x6RlnHea6ZY%2FZrwZBkHpQfaDMo5Uwu97LAQnWFYA1sMchs0ZVTsQGKqNVdGil%2Bb1bdTJE9wI2wEW%2Bxe80TRIgyZvrWDhEU5eXlUUFzZen1KXVVaMyO415SnaFjXb4bZ53zcD9mBZB6Wm6n8tBwoDcsp7f03gamPprIUcdqGqRX6l%2Fv1SbXTB7mloew4nVUJ%2B%2F%2Bru99CgKeeW0%2FS5nHn1NCZsUXR7Du4kaTuXKgnA%2FzxRCB3n770JralTiFRy1pDGiDvraYE5kb951b0lig6ME9dk%2FPOvd%2FfCletQQwPuAWVTlWBSkvAn%2BMcVpEnCapA9%2FVx6uYHsVSDTXJCLRDDCqr6OJzxyQH1UTpn2Hbt6d%2FYIslKY7VMO6R8cMGOqUB%2BqdEfNvs2u63FKb%2FZRiTf4Zk81jzOdUKLLKd4ta01kA%2BBezHMfd0t6HfA6RQEqWdiZacV%2FK1fdskUloEE7jcGONPzzvG0plrkcaMiuV25BFGZUSjGyyPp8kqismJikLjjYe1yz2J2EjoA1McHZ0jFniVEmr9zLRb0Qfud6FwOLSKUzFRIvlbXS3waF1L3j1tuX2W11eLJRkxOKrbEm7V6dBgkcyG&X-Amz-Signature=8ffc257070cb5d0dbd8f8c97581026320380df4aa78046e845c81e69889b9afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYLM3WX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwZtgna9eLLzkSFMO%2FMnK8yss7EGzqAcZK1PAfPnsYOAiEA6LhjTy7mhY8YWZy6DSdHoTEvQ6YKC6IpncwbN8XST1QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkC5Us0IxXr1v6RTircA8%2BlV%2FVQ5ElGUk3nWN%2F6SHPomRPyLniqOzckC1fWqbQ5S%2B3%2BeFQ6Y%2FZKNWtTgCBlObK749IDgnzgvKOQXPSBnzyA0ysIKV0%2BOewZ%2F7v5BDcNz9Gnn3RQouB6js7GE9uzgSCIpvjSshWrUAS%2BaZ1lfGAqxUIrwGhU2QSuetQ4aabRLUYFaOUUGCeJ8u2RCA8qmD0ENToqFxs2MNBFZO18J2wbCN3B6a%2Bd2KSB8tnmDJEl6s6IwEVJC0Z%2FA%2FZB%2Fsq9PxG18OUDKhDbZv4pLnNQSgIGsTnUIWKI8bgrjcT%2BX5M%2BPpLGre8o7s2SHYyd56babsFpJfDDwCPEoHE66lHZaMz42u3LhrfakO6x96f8QBT7xvoPD4IeCZyZyWkgTdeBq%2FsYojeupxFDqH25I28HDghoi2TlPgZEFX9SiLrJ15jt%2FxrGgKSyDWX7K8eZO%2B3bvBSWqaubQ5xtzSiH%2FwmHyIwLgMdoea7tbXHtbO%2FGksFp9fFVopfJMVAqEQE63GZRci3Hc3ov4uAjjq6A9Jjs%2BPDi0z8PLEvNv9WjRof6EZ97RxwuwwyUl03V%2FR5qD4L%2B4KOMIABA%2F53UBjm4W1wVbXKeug5i5BJZRXY%2Fj0TrjU47KKQanhxILRt1ucSvMPKT8cMGOqUBvShlhdkyC1MDKKRQ6SY6ddZWZ1iPVauF%2B2Nm0148G0g%2FwdGvCFcRckgNfCuAAYtig1X%2FbNnVevSkND4wUKjOsAA%2BJemGVQNYkbdjfzo0bDoMrwGOuFAyn0vlHmMGqAZTKrzprV5Y%2BWkcdNEnr6GhNNhu%2BrNHgbv6cjdWq%2BgwUrseX%2FrMbHndBHeCYe8mrQwqLhi7Z%2FZbg%2FqR7%2BCotqz%2BcfUOBwJV&X-Amz-Signature=b8142c34371933145c6e15c0d877652d3c3b5263c209932902b33d85e565ed2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
