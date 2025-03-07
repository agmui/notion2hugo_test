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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVHRXRK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKemfC%2Fxz5dT0%2BOShO3g0uno2z6%2BP2LDknB8s0GtgX0AiAwL4MQKn6U8tlc5%2F6b34yiId3hWbOxgARCfN2Zrl0jyCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMK%2FsiGqr%2BHBQNpJ8oKtwDGBthnssqdEA8ffFadWW9JSt%2F2pY2vPVbtvlkBV15%2F4nG2HRRkXe5AKhxTu32p%2FNxjzekNH63i7hji36mgjEYZY2Y6QE6QTPEuiO%2FqGm3OQeamDbmq%2Fjt2nl2tUEZSaMDoaggbjxGpGWbWNOJCGZBfAauCeYNN7uwU%2FVlHcK3xr8XUebgSl5fhK0CjNTofVHoSPT8RXGOL0k2po9vjdF4BFuBKVpjMg1JBYYF16lNguW2YJW2Ce892lUhBk0QOQrcileGm3XbMDKPD1doA1EMdkh6KlXKdBhyiixrC4J9NTzaoViuDPoXcn1qTIlz1%2FjCTfIPpZuyYNNjbqutxJH5ICVEabxmyCWYON1BIXL4R9lehIiZV1ZW7XsxZjVeTL2K4ADBBrRsWS4onRhkyp4ggbankREtehjI%2FH9iyG8rQARjROOyVtsjYoe%2B0xWSacFpoOkavhnmLKA%2BGeQO6T1zdAV4X%2FGAOBy31yn46ICkqMondIlKhCCWn83HO%2BdbJ4KNmE6dFBGTBFeXMC1EzQS5UaUMViBTtnosWOKowBb1Uljkh5Wxd%2FAxPpv0MnQBmHXSr%2B83gmvMLYXBlFBTtOMrVumelPeBFqYLMHshBIqmQsQqAQO6DWFU1d%2Bw3S0wy4ervgY6pgG5IPR8whKbbZXeUC%2Ba%2BjhI0DhnMz%2B4Xh0Z14HjgbPvf%2F%2B1NgZE2%2FkUZzvg7CPhl3SuY01WFIVXIyGxz67%2BHSDR2oC%2FtzrntdtDcK9qZn%2BE3v%2BuY2dMOq5f1MWROrhDiNinzajPrx9HBfZQi2MkfAueOVh0TiB4OCmWIfHg4DJWvlZuGQRBc3BVf%2BmC6Pc3IHJ30Gmd0vd2oB%2B%2Bitq9f2mvJm5UkmVc&X-Amz-Signature=dc97398a241e479a3840e1f9b84737c5dbec34bb2f7343e9b3c537c511e274fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVHRXRK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKemfC%2Fxz5dT0%2BOShO3g0uno2z6%2BP2LDknB8s0GtgX0AiAwL4MQKn6U8tlc5%2F6b34yiId3hWbOxgARCfN2Zrl0jyCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMK%2FsiGqr%2BHBQNpJ8oKtwDGBthnssqdEA8ffFadWW9JSt%2F2pY2vPVbtvlkBV15%2F4nG2HRRkXe5AKhxTu32p%2FNxjzekNH63i7hji36mgjEYZY2Y6QE6QTPEuiO%2FqGm3OQeamDbmq%2Fjt2nl2tUEZSaMDoaggbjxGpGWbWNOJCGZBfAauCeYNN7uwU%2FVlHcK3xr8XUebgSl5fhK0CjNTofVHoSPT8RXGOL0k2po9vjdF4BFuBKVpjMg1JBYYF16lNguW2YJW2Ce892lUhBk0QOQrcileGm3XbMDKPD1doA1EMdkh6KlXKdBhyiixrC4J9NTzaoViuDPoXcn1qTIlz1%2FjCTfIPpZuyYNNjbqutxJH5ICVEabxmyCWYON1BIXL4R9lehIiZV1ZW7XsxZjVeTL2K4ADBBrRsWS4onRhkyp4ggbankREtehjI%2FH9iyG8rQARjROOyVtsjYoe%2B0xWSacFpoOkavhnmLKA%2BGeQO6T1zdAV4X%2FGAOBy31yn46ICkqMondIlKhCCWn83HO%2BdbJ4KNmE6dFBGTBFeXMC1EzQS5UaUMViBTtnosWOKowBb1Uljkh5Wxd%2FAxPpv0MnQBmHXSr%2B83gmvMLYXBlFBTtOMrVumelPeBFqYLMHshBIqmQsQqAQO6DWFU1d%2Bw3S0wy4ervgY6pgG5IPR8whKbbZXeUC%2Ba%2BjhI0DhnMz%2B4Xh0Z14HjgbPvf%2F%2B1NgZE2%2FkUZzvg7CPhl3SuY01WFIVXIyGxz67%2BHSDR2oC%2FtzrntdtDcK9qZn%2BE3v%2BuY2dMOq5f1MWROrhDiNinzajPrx9HBfZQi2MkfAueOVh0TiB4OCmWIfHg4DJWvlZuGQRBc3BVf%2BmC6Pc3IHJ30Gmd0vd2oB%2B%2Bitq9f2mvJm5UkmVc&X-Amz-Signature=b305bf2a1a64edcf3147dad408f815ffefd0da886b16c37f0c8e89af0f1ee751&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBHO7IYA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcFTACPvbqQ7L%2FJgGoFY9jv%2B7nSc7G5Z4utDHLVds95wIgXjxzIykz9Txt3kwtE4xRu0IPNMP%2Bzp6M5oIPZplJPjYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEGgZBTTGDCp2OVQSircA%2BqgXdceccHTL947yK6hOoPRRBzd%2BxpFFSYoHNwkH7qxyeEQ%2BjhqPhg9KubXWwaI3wpiI%2BrVlm7D%2BCJEYbtdJDWTZaHY19sdvqyNVuXVDQseuOHjQ4MQPjiRkNCMZBoQJqMoQ%2Bm8bB6cq8R5x10ufP1EHlKd8fyIZIggm0qIh6m%2Fi2NBdc5wSAOHTlT3zVjSS65cKgXjHMPCD3Cb9MifrBNc2ButnXAGTHW2QDnn5KJOw3NVLFrp2kh86ObaWfLMshOVukRyBoNi3rDN9uVJxU285BQRD8iSWxZIvOgF1fzMhGESevqQxCwGUEgIyJD%2F%2F0IF4HDhAmkDBAD9j%2BD4myWdZjHxuwCpsGgdyZggDleMSP1GtDAMIvO4b8%2F2HNe5Wd8WZVK%2FY7DDDqkAQMySN0YdvXy%2FiT%2BEA8KpyRMsUevxXGsTbrqdyR8cIkzj%2BNJeEX96cw%2FeUW2ZmGvYbYSebl2iTCv5boNgeFqIoUeM8npdVZOQH9JwNMmXLeoIQKZTo38nlTKbDPEvnxSKi95zIwmuDoGgX9OKldrGWOAaoLSLhbhkz%2FIdwY5AAe%2BkfMfDZDYkQfOrDE39fSXHFQlL%2FVD9Iqg31IManerwQEKEhZlxsHfq5Ddt9OxAv1PJMNqHq74GOqUBZSEolCCVJIMWPhvjj9TnCLO4DNffIb4Ub5vMjZqpVQL%2B07C0A8K8N6NQlU4z16Q%2BErTEzU0GwUhIqLKeHCQPj%2B6TqcMEx595axFwQg%2BRIhn0aAAVtp%2Fc6XrUn2DuX6x2qTKiNluahZndadxmg7kKCfCAkR%2FjpW%2FD%2B1WfzAnVZIP%2BP9TXTxUlDbCkV%2F2ZNu9neSOl1GdJ7rc2UqPn1Ja%2Fmfn1dJTC&X-Amz-Signature=9a42b93b66419748dbd7a6d0ba481867baeec6680e73afca83e83a8876aaf39f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPGKBKU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwFAIP%2FCKy4vk60CToPQfu6HRv94zG4KxIZxSDd%2Fw7wIhAJ4PQ%2FFSAZERjYRinfdfpzafg0ZufIcyqhjbr4ipscp0Kv8DCEMQABoMNjM3NDIzMTgzODA1IgyVwxvwE40Bvq3zzt8q3ANeU%2B7VNPwhTCefW5qyRww4tquly1c%2B%2BzcJXPfYWCDpDsxcT21OkQX%2B9ycaBMOUPHIROORR4UHY55cTTqGXOZie0rysMjlfylCIxRvCtKKv771T67xsN3au0BcXgqzc%2BR07u1%2BwhxuAEt7ebeQi%2BQj%2Be034d6jGT30X4xtKbxmHMv2eKHWQwOsqT1RAIHkXezo6n3J8j2z4VWN1WOytL1x1bwPGcd1p3HfXVsI1TG7KRWAmb8XJDuvAEQpNfVdD4nn%2F%2FAHWpt7w6Tri3I%2FCuJU7Chd3dM2ft1fWeo1j3O1aYceBvlrHHROU%2FujVnzcrftY%2FhORKwuG9M35jBRX6P7RXGrlpI7xJoM1gbvPTox93S%2BdUwB2HTt6miSYuBUntA2h5VUxtcrwgohp4ZS6nq6qWcE33oCdhus26eml%2BD5vc1TWD2p8o%2B5brXmZxB5LexBgtDHUf1EiHCu%2BizkcjS5AtC7RCMtMepCIljCql1jSBr2fr7pdGOXQhm6e7rMBiTeMNYFDeTaAMjfIsclB5OZ5DmNAgROJjrhSRkVUi2WxSpoaBfIHascSEn%2Bf5JyJIdnu9c%2FFZTpO%2BI9QXZOjXsrrsMLC9Du8yT5eQDBJVlcku3v%2Fe5cTZna%2F2L9o3vzDPh6u%2BBjqkAZV7nl50%2FUa%2B6UdwfwhbkKFmM0wbCX%2B4nB9VnUHMPDFN1jcWcKXKajk3xb%2FQJUpiUtrPrX4ogMNokm5Q2LDxl%2BNRcAbI%2FaScvFWxykKDlohd0GkwQ9fqXlJdnNcTkhozdShQ7HyI0PRoX%2FnIY6GRYZMzbnFAafrzn6nHDcMDVWHEFJ4bdimYKhS6SkzwuUSa1M7iELTlou0EI5ll1GUJ2PL%2BAzIp&X-Amz-Signature=06bd7936f2c2f79a3f02dba5c9ec279aa23bf3096357166bc75da98e6feef503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVHRXRK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKemfC%2Fxz5dT0%2BOShO3g0uno2z6%2BP2LDknB8s0GtgX0AiAwL4MQKn6U8tlc5%2F6b34yiId3hWbOxgARCfN2Zrl0jyCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMK%2FsiGqr%2BHBQNpJ8oKtwDGBthnssqdEA8ffFadWW9JSt%2F2pY2vPVbtvlkBV15%2F4nG2HRRkXe5AKhxTu32p%2FNxjzekNH63i7hji36mgjEYZY2Y6QE6QTPEuiO%2FqGm3OQeamDbmq%2Fjt2nl2tUEZSaMDoaggbjxGpGWbWNOJCGZBfAauCeYNN7uwU%2FVlHcK3xr8XUebgSl5fhK0CjNTofVHoSPT8RXGOL0k2po9vjdF4BFuBKVpjMg1JBYYF16lNguW2YJW2Ce892lUhBk0QOQrcileGm3XbMDKPD1doA1EMdkh6KlXKdBhyiixrC4J9NTzaoViuDPoXcn1qTIlz1%2FjCTfIPpZuyYNNjbqutxJH5ICVEabxmyCWYON1BIXL4R9lehIiZV1ZW7XsxZjVeTL2K4ADBBrRsWS4onRhkyp4ggbankREtehjI%2FH9iyG8rQARjROOyVtsjYoe%2B0xWSacFpoOkavhnmLKA%2BGeQO6T1zdAV4X%2FGAOBy31yn46ICkqMondIlKhCCWn83HO%2BdbJ4KNmE6dFBGTBFeXMC1EzQS5UaUMViBTtnosWOKowBb1Uljkh5Wxd%2FAxPpv0MnQBmHXSr%2B83gmvMLYXBlFBTtOMrVumelPeBFqYLMHshBIqmQsQqAQO6DWFU1d%2Bw3S0wy4ervgY6pgG5IPR8whKbbZXeUC%2Ba%2BjhI0DhnMz%2B4Xh0Z14HjgbPvf%2F%2B1NgZE2%2FkUZzvg7CPhl3SuY01WFIVXIyGxz67%2BHSDR2oC%2FtzrntdtDcK9qZn%2BE3v%2BuY2dMOq5f1MWROrhDiNinzajPrx9HBfZQi2MkfAueOVh0TiB4OCmWIfHg4DJWvlZuGQRBc3BVf%2BmC6Pc3IHJ30Gmd0vd2oB%2B%2Bitq9f2mvJm5UkmVc&X-Amz-Signature=2264021db530b573e14d505a27bb545334d59f3512cd0a372120d81b9deed456&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
