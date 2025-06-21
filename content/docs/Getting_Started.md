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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJ27SIK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vl9RTl7PZafLEtiiP%2BpPwk%2FOoUiQoTxjx0s6YO%2FzTAiAEg%2F1OvljnuL%2Fi3arz6YPdI%2BP0CNdGqtPoujKs%2BzhY0SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8kjBfMa%2FjfQ8qM9KtwDgkdbjwnsgN%2BuyVhiOMQv9a39JUYLHNhSNDuXad0b57x3%2BThzLhGQO850jqD9UVDM0BYkUukybYTA%2B1r0Y%2Bfdvb%2BbjJfuFyRMRRn9ydaKfbB%2Bsk%2F41Kb3KyaFsbvCsVD%2B0WroW3cAR%2B%2FN0S2xwhwDsClBavrnF4P54Tek4IQ0xG57XT1KDNw9KhD7FBW9YwjTlUIdXwzZ71ftECYNx2QITRyEAuTUdSpGT59bLlXkezPhH2vaERoLu5RUhby52HQGs%2BTdXCFHBcawtw%2BIQL1ctWDVocJLylpwzqHCWE9eRYVWKw1bz0u1mp7kaprF1byP8%2BC%2BVhkU4ycEuHa80VoAV8nOkmDcpz2WyOnW3vGlujbL5b%2B18rO5OXppmo6C%2B9CdFpLuigCNrNsojhgCgWncX3gAeWshaxjQS4X3A9LYNMrNqO9y%2B2Om7ox1PChQKV%2FnWWUAieMOBEx66ejKGeQue4bEiZte9g0dOz5uWcwW9wgjbGvF591JWrtHQuzEU16GOxQr%2FTzYNIy3%2FdSqdm4GHR5LUeDN0sP00abljjsQUXgTyEX%2FqOUr7K04PeIzr1DGGkwEOUboghDqz8cRe%2Fr%2FoVjVqyQ4jALkRai5sJk4qyWTAsTupA9E4OvNGBMw%2FLjbwgY6pgEsn4%2FoivWkPv04nPPHgAZPEfyCzvSS9i5VQ46un1WOD%2FbhDs5Rbk8DvirZ7nWUO%2BtFTixvr%2BjdbQt0mxGE5Cc%2Be4XkJrJIYhyChBjIWqj0pnE9AZS%2FCCPr3XxAptbgNQXt6oP49ADmzkt71wQWA5qmpV25HrCdReK3DXZkoJ4DRRN%2BYeHAKAUxPgkVtE1cWUVfyqj2bJQfwicQdj0qh4Lv39lRASG9&X-Amz-Signature=e4ecf19a6a18c16e744a86c023ca74650e108365185c5427bb6b7ded8f7ef970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJ27SIK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vl9RTl7PZafLEtiiP%2BpPwk%2FOoUiQoTxjx0s6YO%2FzTAiAEg%2F1OvljnuL%2Fi3arz6YPdI%2BP0CNdGqtPoujKs%2BzhY0SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8kjBfMa%2FjfQ8qM9KtwDgkdbjwnsgN%2BuyVhiOMQv9a39JUYLHNhSNDuXad0b57x3%2BThzLhGQO850jqD9UVDM0BYkUukybYTA%2B1r0Y%2Bfdvb%2BbjJfuFyRMRRn9ydaKfbB%2Bsk%2F41Kb3KyaFsbvCsVD%2B0WroW3cAR%2B%2FN0S2xwhwDsClBavrnF4P54Tek4IQ0xG57XT1KDNw9KhD7FBW9YwjTlUIdXwzZ71ftECYNx2QITRyEAuTUdSpGT59bLlXkezPhH2vaERoLu5RUhby52HQGs%2BTdXCFHBcawtw%2BIQL1ctWDVocJLylpwzqHCWE9eRYVWKw1bz0u1mp7kaprF1byP8%2BC%2BVhkU4ycEuHa80VoAV8nOkmDcpz2WyOnW3vGlujbL5b%2B18rO5OXppmo6C%2B9CdFpLuigCNrNsojhgCgWncX3gAeWshaxjQS4X3A9LYNMrNqO9y%2B2Om7ox1PChQKV%2FnWWUAieMOBEx66ejKGeQue4bEiZte9g0dOz5uWcwW9wgjbGvF591JWrtHQuzEU16GOxQr%2FTzYNIy3%2FdSqdm4GHR5LUeDN0sP00abljjsQUXgTyEX%2FqOUr7K04PeIzr1DGGkwEOUboghDqz8cRe%2Fr%2FoVjVqyQ4jALkRai5sJk4qyWTAsTupA9E4OvNGBMw%2FLjbwgY6pgEsn4%2FoivWkPv04nPPHgAZPEfyCzvSS9i5VQ46un1WOD%2FbhDs5Rbk8DvirZ7nWUO%2BtFTixvr%2BjdbQt0mxGE5Cc%2Be4XkJrJIYhyChBjIWqj0pnE9AZS%2FCCPr3XxAptbgNQXt6oP49ADmzkt71wQWA5qmpV25HrCdReK3DXZkoJ4DRRN%2BYeHAKAUxPgkVtE1cWUVfyqj2bJQfwicQdj0qh4Lv39lRASG9&X-Amz-Signature=f5942fd485d9b7d5725ace62e4e94f25c0f410ae6bdde1558d7680ebd8378bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJ27SIK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vl9RTl7PZafLEtiiP%2BpPwk%2FOoUiQoTxjx0s6YO%2FzTAiAEg%2F1OvljnuL%2Fi3arz6YPdI%2BP0CNdGqtPoujKs%2BzhY0SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8kjBfMa%2FjfQ8qM9KtwDgkdbjwnsgN%2BuyVhiOMQv9a39JUYLHNhSNDuXad0b57x3%2BThzLhGQO850jqD9UVDM0BYkUukybYTA%2B1r0Y%2Bfdvb%2BbjJfuFyRMRRn9ydaKfbB%2Bsk%2F41Kb3KyaFsbvCsVD%2B0WroW3cAR%2B%2FN0S2xwhwDsClBavrnF4P54Tek4IQ0xG57XT1KDNw9KhD7FBW9YwjTlUIdXwzZ71ftECYNx2QITRyEAuTUdSpGT59bLlXkezPhH2vaERoLu5RUhby52HQGs%2BTdXCFHBcawtw%2BIQL1ctWDVocJLylpwzqHCWE9eRYVWKw1bz0u1mp7kaprF1byP8%2BC%2BVhkU4ycEuHa80VoAV8nOkmDcpz2WyOnW3vGlujbL5b%2B18rO5OXppmo6C%2B9CdFpLuigCNrNsojhgCgWncX3gAeWshaxjQS4X3A9LYNMrNqO9y%2B2Om7ox1PChQKV%2FnWWUAieMOBEx66ejKGeQue4bEiZte9g0dOz5uWcwW9wgjbGvF591JWrtHQuzEU16GOxQr%2FTzYNIy3%2FdSqdm4GHR5LUeDN0sP00abljjsQUXgTyEX%2FqOUr7K04PeIzr1DGGkwEOUboghDqz8cRe%2Fr%2FoVjVqyQ4jALkRai5sJk4qyWTAsTupA9E4OvNGBMw%2FLjbwgY6pgEsn4%2FoivWkPv04nPPHgAZPEfyCzvSS9i5VQ46un1WOD%2FbhDs5Rbk8DvirZ7nWUO%2BtFTixvr%2BjdbQt0mxGE5Cc%2Be4XkJrJIYhyChBjIWqj0pnE9AZS%2FCCPr3XxAptbgNQXt6oP49ADmzkt71wQWA5qmpV25HrCdReK3DXZkoJ4DRRN%2BYeHAKAUxPgkVtE1cWUVfyqj2bJQfwicQdj0qh4Lv39lRASG9&X-Amz-Signature=7fb1c50bc9c39030c874ceb546d1a02e4b78102708a952ee4ab022bb1bff933f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPZSQ7V%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9FoppbeiXmuAA3kMVeDOw7YCtnXPnsJulw0D2%2B4ngFAiEAo7o9gWs3S%2BqFLooOpn3SDycOkkLuSosDjolayWi7xrEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItC3cbw8bnVzkjhircA%2Fa5d1PILN5GtX2oqEL1YhwlDhOPomEhEvG%2BgK0MY8PYg2KG0UVB7Ie%2FbMUDu92Eprsvbj40xSwG6QKR5%2B%2B%2B5khdvwWL5Om%2FoOmWPswv%2BHyv%2F7TrA5zAxt71mMV9YzWeMk7iSZ3IOPeJNoPQRpL3GohqgqZ8Hc6Y1xaeoUCWA1BwrcEoEIZZTua3kclpLv5SBQLspcSmhMSnpTAQVc5LwAzpSue0XBPp2JjknWVw%2BiHFfFmAL%2B4orX22gHOq%2FT3MFX%2FF1dML15vb3iyRWU7nd%2BZXljW5JhPWR4CxjRbmWMqZH7InlFf0Y6OdUDx%2FJetIrQt3bnWOkLcO6T7gEzzcNJ4xPxDDtFYtYhLCYHP757dmKtT0j9LmIIspoaaStTu9hyE0ROVB9VCC4ZQqBwdaHGTIsqAcDOuXkBboiuxN5fVaAh93b1NzdUvFE7uJRmZ8RVbVgQc%2B3M5j8Ax8WR1DInFDSxhZ0SmyH45Yk1mo9w1YwmcWdwIs6HjBnQ2FN8%2F74Vpgo2DAMNzDbWpIUXERQ6OKHE9IDFDB6OcT7oVre%2FkVK8Uh%2FM6oIGdWQjtgJP%2FbOfTe4bfreCyT%2Fe6LDh%2FRWK9FO4A3UXcBCXV1o3RMVPZhFVsTPMmWVtSnRiYbMPaO28IGOqUBmrhb%2B4AqKh26a%2BfoIui8p7zess33MZY3JW0T%2Bglk15l%2FGwF62B0j098PmWLQZr6xZlwTWbe5cJB14XPPhBKU2cm%2FUZ0dRf5P%2FoQAvabp0eaIvdQJI%2BaQ0FoTRqgkArVF%2Fy8rgLIg1ZbWBpSU%2FyrCWHVCM60%2Fsp8LVfqdZEWXxqg5fGE19zA06th%2FWAz8RCmMiRWKloW7mK7QfJd25NDjgwON2ey8&X-Amz-Signature=7d502219ba2eb05ad63bee8ca41e059fef14e8619ba366aa9d1b9b8d5379c7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGAMAXT6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMUXUKJGe0Z77GcYJ12PV4OTqfn5nCoMUIPX4IG63kEAiAo3THsf2X4xsabnRqb3iinW%2FKmBeKqzgz5BKb390l6sCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznVbvUDy25ENGO3UKtwD8%2FduPqukLI5Bkh8wXgs61j56fUPHfZ66R2WtaKxLDzN4GYVgwSNUCR%2BmWuK4ejH%2BxwxkgVs%2Fz%2BZZTeA%2Fz0BV0nzVt2%2F9dj5r8TEndcISIQIZdcnNoTy%2FBjywrtEwOLca2NfvagQ4TDMI%2F9QhFwu2mJnoj8QnrciHGi4umnfOtrT6Q8wNMyn79ADO%2BtfUh%2BY%2BLoOHK926E7%2F8gcaQ1ieAm%2BawFBHLcGMuoXJdBYRZIjm7qhbvxBPFqUo6iiu5pCBc%2Ftikjc%2F%2FKilOyHSw5MiYm6MvPMVPXklmgyXp4FFO4r6bYkBMNZE8Hl1Bj%2FP1hItgR%2Fn%2BvzpQJjoSyeJIfOAxyFhnXP4YSi4dIJGaY0TwEpZ2hfzFU0NIhqamxNoWcY%2BiIpq1zx7BZUfv9NkvKXx2%2B95q0L2JGkeENadST2D9Du2P41x%2FIvQGa94B5yELt4JoThIWBSZLx7GqJNZNftXTo6pAmuQ8eInbLUtXwwE8BrMRGXlonYbEX3KBbe4xwslZOee4crw2IohAd3OSK8WuaPBrubcrsQJg60D8%2F7dxfOpOm%2FHSJv9tuLEnhTRACWOj1M%2FDmAq9Px9iF2a5yvi5CQKKj%2FIRj4O0YfHUJzHaZh3mR2kGhccBWfCY29Uw7Y%2FbwgY6pgGV03jih2v6BgmscrdszPrUc%2Bl1Tw2r6KUUy9ommCfmxdxPYKrfHrTqGoheE51NWsXDP4DNHfxr0J18ZOHE%2Bjhuw4ODkXwRtta0BVaQvcI0PDKvmDexHXp1NZuJ1U5n1z%2BanlKjyJm%2BccnILy7BnrC0zzwWlwvPDhLkLCMjoINiImDH7VxVTDEp%2BK1olUnJC6iU2yqZEcRkfIfsZ0QC%2Bd6K2iPvImJS&X-Amz-Signature=8574056d9c873aecd01d944c2a33e0868592935932077aed7e6dfd881ed2bfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJ27SIK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vl9RTl7PZafLEtiiP%2BpPwk%2FOoUiQoTxjx0s6YO%2FzTAiAEg%2F1OvljnuL%2Fi3arz6YPdI%2BP0CNdGqtPoujKs%2BzhY0SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA8kjBfMa%2FjfQ8qM9KtwDgkdbjwnsgN%2BuyVhiOMQv9a39JUYLHNhSNDuXad0b57x3%2BThzLhGQO850jqD9UVDM0BYkUukybYTA%2B1r0Y%2Bfdvb%2BbjJfuFyRMRRn9ydaKfbB%2Bsk%2F41Kb3KyaFsbvCsVD%2B0WroW3cAR%2B%2FN0S2xwhwDsClBavrnF4P54Tek4IQ0xG57XT1KDNw9KhD7FBW9YwjTlUIdXwzZ71ftECYNx2QITRyEAuTUdSpGT59bLlXkezPhH2vaERoLu5RUhby52HQGs%2BTdXCFHBcawtw%2BIQL1ctWDVocJLylpwzqHCWE9eRYVWKw1bz0u1mp7kaprF1byP8%2BC%2BVhkU4ycEuHa80VoAV8nOkmDcpz2WyOnW3vGlujbL5b%2B18rO5OXppmo6C%2B9CdFpLuigCNrNsojhgCgWncX3gAeWshaxjQS4X3A9LYNMrNqO9y%2B2Om7ox1PChQKV%2FnWWUAieMOBEx66ejKGeQue4bEiZte9g0dOz5uWcwW9wgjbGvF591JWrtHQuzEU16GOxQr%2FTzYNIy3%2FdSqdm4GHR5LUeDN0sP00abljjsQUXgTyEX%2FqOUr7K04PeIzr1DGGkwEOUboghDqz8cRe%2Fr%2FoVjVqyQ4jALkRai5sJk4qyWTAsTupA9E4OvNGBMw%2FLjbwgY6pgEsn4%2FoivWkPv04nPPHgAZPEfyCzvSS9i5VQ46un1WOD%2FbhDs5Rbk8DvirZ7nWUO%2BtFTixvr%2BjdbQt0mxGE5Cc%2Be4XkJrJIYhyChBjIWqj0pnE9AZS%2FCCPr3XxAptbgNQXt6oP49ADmzkt71wQWA5qmpV25HrCdReK3DXZkoJ4DRRN%2BYeHAKAUxPgkVtE1cWUVfyqj2bJQfwicQdj0qh4Lv39lRASG9&X-Amz-Signature=a7d863597d43a8fdfceb8c45885c6a3d2620b6e182bb62ff2d193049cb42dbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
