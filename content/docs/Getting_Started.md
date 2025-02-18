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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZ5RCCP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDimA0I0me5nCLAtZoGTuNfkvDcGNmCh93oJ%2FdSRPOyfwIhAPcsfYqdXrBnm1MIBSFxfyxdE%2BB%2BbJ%2F7R50ylBzbk8R6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDEovMZwsUspSfgG8q3AMJHJY08X2%2BBrj8g%2Bz6MNzRD5I1nRAkneyyi2LCChWevnk6cAXDmSwz2hgigqxZ8TcbGUzmSQ%2FAWSY55L0UE3fUVwEJ6ZZygq%2FLxmNb2N%2BqENFl7WRmEK7E6Lt3ZCjVAW3WTXRv77PgOe2Hv8bBMU5oYJjnAwih4HgR8ds3JmZffaO4Rd80hc7sx6hd8S0aU0UmqGuGrBefW4vGpnX%2FzzM4PUx4sPJtl6x2Z9SaL3G3NgEtO1dObUaYvnac1PFvR9xtoVyxCzGO05LWpEdDaTwCkEISfU32Drs3aTg4JirqcZVxaMmnzYmMKdi468C444nMpMWC6cK%2BjlPeyMi5XQSkvu9RvI5%2B1mVE9SUi1zodyYC%2F52%2Bfn4SAMm6z1bAaE9SK7hAOdOEuwKKBMDjoU7k4ilkKbDXUpzfU6jw9nAnym1eu10LSqI5Q6018PQg%2FPD1io6EgPoc1HP4xcbj8mQHXcNdUnxPzUbI8MlXtSZXpK12h03jdf%2B%2BDf5d9hxj8iBz5w4cVytJ5AnOg4cDhxRxauMFwSRnysoHZphctQjwVaq1IcXrSj06QO%2B3yzH2LV%2B7bWMHmPzNMK2Zpi4wekbGRNT5nfIIV2e54FFYho2%2FQQ9K0bAjEhS2rfvAA9TCTm9O9BjqkAUVyf0Kc9T%2B2yCSKpUXbgFJUWU7auo6Ht4cLSQp1krn%2FDCxzEhs%2BrA1HUdV3hPxTPBbX0QnEbzuMkhcq8Mjedlzi9hFEOR3mqJUHNPyqB8zVAa5OsdmIK%2FXbyDkoJKC91PVGl72aM0BtinT5nxcNm1rnNWPXIEJDeaGZ7jU%2FEN2DHgKBBQGo%2Bc%2BpyulzUdSJX6X0qiIYWprWSoXokMVyyNdnIY4K&X-Amz-Signature=334e8a9245dbcad829defbd04b8b09e2821a4181f3b5329c39db5104551a22d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZ5RCCP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDimA0I0me5nCLAtZoGTuNfkvDcGNmCh93oJ%2FdSRPOyfwIhAPcsfYqdXrBnm1MIBSFxfyxdE%2BB%2BbJ%2F7R50ylBzbk8R6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDEovMZwsUspSfgG8q3AMJHJY08X2%2BBrj8g%2Bz6MNzRD5I1nRAkneyyi2LCChWevnk6cAXDmSwz2hgigqxZ8TcbGUzmSQ%2FAWSY55L0UE3fUVwEJ6ZZygq%2FLxmNb2N%2BqENFl7WRmEK7E6Lt3ZCjVAW3WTXRv77PgOe2Hv8bBMU5oYJjnAwih4HgR8ds3JmZffaO4Rd80hc7sx6hd8S0aU0UmqGuGrBefW4vGpnX%2FzzM4PUx4sPJtl6x2Z9SaL3G3NgEtO1dObUaYvnac1PFvR9xtoVyxCzGO05LWpEdDaTwCkEISfU32Drs3aTg4JirqcZVxaMmnzYmMKdi468C444nMpMWC6cK%2BjlPeyMi5XQSkvu9RvI5%2B1mVE9SUi1zodyYC%2F52%2Bfn4SAMm6z1bAaE9SK7hAOdOEuwKKBMDjoU7k4ilkKbDXUpzfU6jw9nAnym1eu10LSqI5Q6018PQg%2FPD1io6EgPoc1HP4xcbj8mQHXcNdUnxPzUbI8MlXtSZXpK12h03jdf%2B%2BDf5d9hxj8iBz5w4cVytJ5AnOg4cDhxRxauMFwSRnysoHZphctQjwVaq1IcXrSj06QO%2B3yzH2LV%2B7bWMHmPzNMK2Zpi4wekbGRNT5nfIIV2e54FFYho2%2FQQ9K0bAjEhS2rfvAA9TCTm9O9BjqkAUVyf0Kc9T%2B2yCSKpUXbgFJUWU7auo6Ht4cLSQp1krn%2FDCxzEhs%2BrA1HUdV3hPxTPBbX0QnEbzuMkhcq8Mjedlzi9hFEOR3mqJUHNPyqB8zVAa5OsdmIK%2FXbyDkoJKC91PVGl72aM0BtinT5nxcNm1rnNWPXIEJDeaGZ7jU%2FEN2DHgKBBQGo%2Bc%2BpyulzUdSJX6X0qiIYWprWSoXokMVyyNdnIY4K&X-Amz-Signature=582d2410e769afede32c22243ff939e589a4f7f6d37777f37ef25097408368c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOUHQHV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAfbHXMxKu4T%2BEoTawk8Jvd%2B3nzB%2Bye3iUmHTZFzpepqAiEAsxo6OCBo8NlCUjyCDVvKMBosdeed3wuHsQCkRzFaakcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuk74AfYSiVO7494SrcA8CO%2B0HvAcCszwhWsFw1Lgxciyk9mWDy9SQuY2E%2F85gWijwGL0J7MgzpUKO2HyhWUEicrOfxUDMoXaSmIyw2vzIR%2BdD%2FACwS7UKzQO4a1u5qy2RzVQklhODxu%2FkAO2jRugr3M9XKXtnzH97V4T%2FKEdIt9d%2F5r28A4SzQlcPboGb59z8ndgXnENH%2Fnn6tEwfKlGD2p6oCClQoHHtTKcsDCY5KAaOwQ9yEDsLx1%2FfNjI7KRTsA69a3u28bMm7Xmh%2FwCRYu40ItPFSBAzNdf9omR8Qs%2BQ7ujeTf3nqAsqS8VvNo8to7ihyPm1AKmHWbNPlHXYVfYzGSBWzAnX3iGmfvCy1JuUIxiXeNid9rz05ZSsXA9Pc7nN92Z0A9Qd0VbUFRl%2FoLbwGBFATBZHXkDSlM3bLexa3OK9nTBoP%2FPhMgg4cB4k5hPzsyn4TeQ6rCwGz7EgfrjA4mEvFIBlUQm6PN19coM4aLchkUFRO9%2BR0rL38p51dYVdHfG%2BcLC%2BpucdjllDOgxchURQBfVpujsq292brvKCyP3PYZK2N%2FoBdXS9R%2F94wngAgY4TmcZmm5NXI%2F%2FlBDjftxAMG7yp0w3OAFThl%2ByugVp0Y6ebXZ%2Fslem9HAL9paHf5osBqB056AMNOa070GOqUB606e0KIf27Fw%2BjN0d%2F%2B70JmtPukaKBezq%2Ftv%2B6nqNiPJwv8JEHxsmJYmmdtKUW8xz63K47YQ60TqAemTCFmyDsuVUAD%2F6vIeQwMMiCYw369TGl6ZUIKxHZH5DTQ%2FhvcGA0A7TO0iS33%2FYJ3Xf7nE8NYs2v9dzelVLfP9b6N3wtgdxvnVeN%2BX7jwopVdUcaOzUsNi8zBBSAkNG5wZyVdmEaIRjd74&X-Amz-Signature=4e17432beae29e0126e64958aa9e33dd3bb868bf7fc1912c05e04e4f60ac615e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYLPSWGK%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD335pCjHH%2BMXrxy9qnN%2Fo8iTZp2ngUZyEop8Uh1eifMwIhAPaVPVeVGKELoij6ll4OQ8TsPG2TCmaz2xfa6x1JL3s1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ7KQ%2BLpCc3aeMBDQq3AOMxUYe9UOEmAor7aNPUALuJmuxH2R0yG47r%2F6evbHBAUEa0%2B52Jx%2B78c6%2BCkWeI9QzutEN2twLZNRNOuZt0r4762TLjhVpHZ%2FPGxfstjIaPt3q4NRm7x96rl6sLp%2BEKQKYTDfeg0XG8pzwMK30GzRT%2FFuKbEIt%2FmkZ28JS98bkbTSSoGgnTiUgytsgtPKOuStSZYsdO7PpYn5tefKwGvapOazcS6Y%2FGH%2BHY6oVhLV56zeo%2FXWlxcdpHuFhDz82ZhCoi1to27v%2F3vkUgEoBNi2KSQUIQBPl8i0titDD5rD%2By7MXVTz1hrolv3LSUkkxPdDWCbifNHW1aV9SnNQv93KSq%2Fdax3KV1ImyGikXDPeISXDN%2FyEGxZZHJebMQdG8n7wTb%2Bt%2F8l%2F3KZgNLd5sJW2igMsFg4jd2E%2FIMDs%2FLZ3UuzHnH1A0cgJp6InUsWmaB7FFAj15S5AWA8gNTtWdVkAtselSGT6fswrduQQ7mDSyNTdnxEl%2Fj%2FGzok%2BPJLprjPs6I75QX4U61BDsHV%2FaLoC09v6jz%2FwKyXGM33CVuKEDH5mqItd0LUAeSD2M1Yop%2B7m1sUzLemmof1V4bQJFYGoeR2hNF3oEfK8IwDhFP6oRSYKFgMLm5D2ydWqWMjD4mtO9BjqkAeE5S%2FK5Y9JQlRYwrCdIUv4p344CKAuxbzhGjEf%2F3xGSvuZ5ZtdsyjeYEJMYJQvbdV4ikLglSX2UcgkDlrd4rlmtGZ3Fo6D%2Bc8WM2%2F5%2BhyuUdTfFDuKts5L5LPBst90riwdCYtx%2FNGE5E3W%2FAdyC0lZJo0KyCZryV3BYXlFNVr6UYrvyUbWpFiCrgNjpgPNHFoMs8tR4Q6UdS%2BidkK58FTquHnr7&X-Amz-Signature=de0276bc8abce9a365edbc5aa34beabc28cd1c672fc42d3866b5352ffbb87b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZ5RCCP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDimA0I0me5nCLAtZoGTuNfkvDcGNmCh93oJ%2FdSRPOyfwIhAPcsfYqdXrBnm1MIBSFxfyxdE%2BB%2BbJ%2F7R50ylBzbk8R6KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDEovMZwsUspSfgG8q3AMJHJY08X2%2BBrj8g%2Bz6MNzRD5I1nRAkneyyi2LCChWevnk6cAXDmSwz2hgigqxZ8TcbGUzmSQ%2FAWSY55L0UE3fUVwEJ6ZZygq%2FLxmNb2N%2BqENFl7WRmEK7E6Lt3ZCjVAW3WTXRv77PgOe2Hv8bBMU5oYJjnAwih4HgR8ds3JmZffaO4Rd80hc7sx6hd8S0aU0UmqGuGrBefW4vGpnX%2FzzM4PUx4sPJtl6x2Z9SaL3G3NgEtO1dObUaYvnac1PFvR9xtoVyxCzGO05LWpEdDaTwCkEISfU32Drs3aTg4JirqcZVxaMmnzYmMKdi468C444nMpMWC6cK%2BjlPeyMi5XQSkvu9RvI5%2B1mVE9SUi1zodyYC%2F52%2Bfn4SAMm6z1bAaE9SK7hAOdOEuwKKBMDjoU7k4ilkKbDXUpzfU6jw9nAnym1eu10LSqI5Q6018PQg%2FPD1io6EgPoc1HP4xcbj8mQHXcNdUnxPzUbI8MlXtSZXpK12h03jdf%2B%2BDf5d9hxj8iBz5w4cVytJ5AnOg4cDhxRxauMFwSRnysoHZphctQjwVaq1IcXrSj06QO%2B3yzH2LV%2B7bWMHmPzNMK2Zpi4wekbGRNT5nfIIV2e54FFYho2%2FQQ9K0bAjEhS2rfvAA9TCTm9O9BjqkAUVyf0Kc9T%2B2yCSKpUXbgFJUWU7auo6Ht4cLSQp1krn%2FDCxzEhs%2BrA1HUdV3hPxTPBbX0QnEbzuMkhcq8Mjedlzi9hFEOR3mqJUHNPyqB8zVAa5OsdmIK%2FXbyDkoJKC91PVGl72aM0BtinT5nxcNm1rnNWPXIEJDeaGZ7jU%2FEN2DHgKBBQGo%2Bc%2BpyulzUdSJX6X0qiIYWprWSoXokMVyyNdnIY4K&X-Amz-Signature=fdc1f8e4ad6fec86f174a3594a513aa631f7e89d1ec8f59044d97a62d1379dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
