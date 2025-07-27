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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCW7MIZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHChU6IH5rq3n%2Ff8rQFr1qzMHuyAdyD6cnfMzF9jx36KAiEAvBEm6D%2BJqqOG9WuayulOcksoIdImKrV%2FS7DectMN1U4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnjHMAPPfcsp87uSircA68rgLeouvNFyTskyH2EuZhmfQDftgYSvyUYaZ9lNhywnkZprnD9VW1OQnhjT2d75cHeTWHtJujWv%2FD6xw%2BQ0HpC15WiUTRh09g%2B6C5M%2BYdngVFmQhEp1PN%2FrNmAIpxYTFSbuCYHvxoZeIvmOIF1HaPB0eeAd2%2FsyJek64KTWOgNn5YyTA65lTpQp16n5OgX9JuS2dhK7%2FewVkWNqHn3ZH78%2BFNajjZmzs2bliDENVAIm1AEtq7zmdlq5%2BQRuJ%2BhLtEF70yYX8%2BfJvovLbKID6n92LgNoEMk9VgOsaAV97AYVnqqg21DNQufz%2BQR9X9lUR2Kp3VPDfQRam8H1v6rJKfP8F%2BUvw39RzrDYr3%2B%2BGY4JCkpk3Z8npOUI%2FOaVItloCc3CI6n1ypz3TgZA5%2FRJg%2FH5HlAw3WFN22WFDlgo8%2BYalIxEqbxEP%2BO%2BLZjtzyMvbjpp%2BZthXRxUfbESu4FuhKpIKu5%2B6doNGIg02QMY3z80PoXImqPPSAPKYeXLJT47mpvs1w4t3LQf8Mx9VYfDHpcbP3faFjuPfv7d4SLTzGtrULaIQSCEWCZ3396%2BhgIqTHx62ECTeu95A8RFnUE5Fl3DfpvUAPve8VqbL2IgvHlurkRrd%2FI5gusnC99MJTKmsQGOqUBNWdVk2ZXcQRKrmNcLNCgkGWN1Ex2snD4t5%2BNlE6FbYJKKkESsgQh%2F2anp7xLwffCa4rJrvwGp%2FFEAGY2x8dcagWnsrL1D0I151A5bMh51cRSuKi0j2V2aIwNnI1hGt9MhVPiedAMhqOZb73OjMFInI384cpzHRYYlCkg7N2r3GYHMnHpcZqJmwC6aRr55q03XgdQXGe5DCunAl5zA7QUHC3%2BCWY0&X-Amz-Signature=345cc54f0216c86176073229f69d1618e62b6e87f4eab8f1a7bb47c8d24a8269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCW7MIZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHChU6IH5rq3n%2Ff8rQFr1qzMHuyAdyD6cnfMzF9jx36KAiEAvBEm6D%2BJqqOG9WuayulOcksoIdImKrV%2FS7DectMN1U4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnjHMAPPfcsp87uSircA68rgLeouvNFyTskyH2EuZhmfQDftgYSvyUYaZ9lNhywnkZprnD9VW1OQnhjT2d75cHeTWHtJujWv%2FD6xw%2BQ0HpC15WiUTRh09g%2B6C5M%2BYdngVFmQhEp1PN%2FrNmAIpxYTFSbuCYHvxoZeIvmOIF1HaPB0eeAd2%2FsyJek64KTWOgNn5YyTA65lTpQp16n5OgX9JuS2dhK7%2FewVkWNqHn3ZH78%2BFNajjZmzs2bliDENVAIm1AEtq7zmdlq5%2BQRuJ%2BhLtEF70yYX8%2BfJvovLbKID6n92LgNoEMk9VgOsaAV97AYVnqqg21DNQufz%2BQR9X9lUR2Kp3VPDfQRam8H1v6rJKfP8F%2BUvw39RzrDYr3%2B%2BGY4JCkpk3Z8npOUI%2FOaVItloCc3CI6n1ypz3TgZA5%2FRJg%2FH5HlAw3WFN22WFDlgo8%2BYalIxEqbxEP%2BO%2BLZjtzyMvbjpp%2BZthXRxUfbESu4FuhKpIKu5%2B6doNGIg02QMY3z80PoXImqPPSAPKYeXLJT47mpvs1w4t3LQf8Mx9VYfDHpcbP3faFjuPfv7d4SLTzGtrULaIQSCEWCZ3396%2BhgIqTHx62ECTeu95A8RFnUE5Fl3DfpvUAPve8VqbL2IgvHlurkRrd%2FI5gusnC99MJTKmsQGOqUBNWdVk2ZXcQRKrmNcLNCgkGWN1Ex2snD4t5%2BNlE6FbYJKKkESsgQh%2F2anp7xLwffCa4rJrvwGp%2FFEAGY2x8dcagWnsrL1D0I151A5bMh51cRSuKi0j2V2aIwNnI1hGt9MhVPiedAMhqOZb73OjMFInI384cpzHRYYlCkg7N2r3GYHMnHpcZqJmwC6aRr55q03XgdQXGe5DCunAl5zA7QUHC3%2BCWY0&X-Amz-Signature=71cba071303b1658ead5b515e2a661bf9dd1825296ca7f523ae2ad9a9eaf66fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCW7MIZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHChU6IH5rq3n%2Ff8rQFr1qzMHuyAdyD6cnfMzF9jx36KAiEAvBEm6D%2BJqqOG9WuayulOcksoIdImKrV%2FS7DectMN1U4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnjHMAPPfcsp87uSircA68rgLeouvNFyTskyH2EuZhmfQDftgYSvyUYaZ9lNhywnkZprnD9VW1OQnhjT2d75cHeTWHtJujWv%2FD6xw%2BQ0HpC15WiUTRh09g%2B6C5M%2BYdngVFmQhEp1PN%2FrNmAIpxYTFSbuCYHvxoZeIvmOIF1HaPB0eeAd2%2FsyJek64KTWOgNn5YyTA65lTpQp16n5OgX9JuS2dhK7%2FewVkWNqHn3ZH78%2BFNajjZmzs2bliDENVAIm1AEtq7zmdlq5%2BQRuJ%2BhLtEF70yYX8%2BfJvovLbKID6n92LgNoEMk9VgOsaAV97AYVnqqg21DNQufz%2BQR9X9lUR2Kp3VPDfQRam8H1v6rJKfP8F%2BUvw39RzrDYr3%2B%2BGY4JCkpk3Z8npOUI%2FOaVItloCc3CI6n1ypz3TgZA5%2FRJg%2FH5HlAw3WFN22WFDlgo8%2BYalIxEqbxEP%2BO%2BLZjtzyMvbjpp%2BZthXRxUfbESu4FuhKpIKu5%2B6doNGIg02QMY3z80PoXImqPPSAPKYeXLJT47mpvs1w4t3LQf8Mx9VYfDHpcbP3faFjuPfv7d4SLTzGtrULaIQSCEWCZ3396%2BhgIqTHx62ECTeu95A8RFnUE5Fl3DfpvUAPve8VqbL2IgvHlurkRrd%2FI5gusnC99MJTKmsQGOqUBNWdVk2ZXcQRKrmNcLNCgkGWN1Ex2snD4t5%2BNlE6FbYJKKkESsgQh%2F2anp7xLwffCa4rJrvwGp%2FFEAGY2x8dcagWnsrL1D0I151A5bMh51cRSuKi0j2V2aIwNnI1hGt9MhVPiedAMhqOZb73OjMFInI384cpzHRYYlCkg7N2r3GYHMnHpcZqJmwC6aRr55q03XgdQXGe5DCunAl5zA7QUHC3%2BCWY0&X-Amz-Signature=a2ecf24cff898c3e835ac5a45779bfd35343375b37a78bde996a4a67fa2b577f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRHERN2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDC4Tt71rDczvTJjRuKlldqMi5vy%2FTjfHY8h4FPbhnRVgIgOP7hB6THmDbaYL7KmJquc8b8wcC2VyU%2FX192IY8pbCIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFa5Ez3eU9OJPP10FCrcA9UVVTrzv%2F6f9wuhtq%2FpJHU0f5CpOmMdOiU9xa%2BZ8Nte5BnGdKBdm5SWgCSiPIJXH3SxzPPACJ0tAO1z9J%2FuS49TaU6jUSVpmXI1aL1UQbX1hE%2B%2FLetaVgmavfL%2Fh3tpmdbGamNyguMbbhluvcAg1MPFu%2BPz4ziLblIBiX3QdHgzN6oIlGMZotogcJeIzIcTZqGK9m%2B6In47J%2FGoj%2FDnUK9p6WtH5lhSxhF8ZhCaKU2r7NTz9VnmC3EdbJXa2BBBZyLINNYx%2BARXJ85CPuKceGm9vfVQYmSUWPPzvxxVHIXBY1ibC50WxYsDNrXK8dXJHL0tW0Gm72BI%2F%2BTrlu3KtjjkPOyfS1%2BoYh6aFHSA5hCymo95Ls5gZGCwKVwUtMZL2slOkAcFxV80fpHvuJsNWDKlx0QWNH7zQaQ17lzu3FuymDX1Ahx66b9zXr8muicx5tTr7gZz20WmjyrPjexGirhzvujp1964Ix7UdPLWsOWxY%2BoAxz0J3LF0XSuJKyxzViSkC2SJexFTPeN48HHXeIbTuBf2D0jZ5%2FHs6mZgdK0WaGgDeX6nUgZ4Xq4f%2BHMoYQx9umlzgQQUqXDYc2dvH3jmr2m06obskhBmOjtZDKzDgJMU%2BPsWl4rEtWRFMLDJmsQGOqUB%2Ffa%2F%2FRi3G8tLC57XMt%2BBnfBHtx9FyMOQdzTkrI21lOH%2B%2FMVIYut7oN8l36pJLjrgBAqIUVT9UgidoR%2FnDckO1Mi0d1xKQ4D3yDcXztVz5p3KGVQ3LeFjYdY792Wd8dego%2FwlbgONg7coTYt9D7oXKVNnXarkLsfhhEpZB0UpY2cRBmUzlvX6MH0uQgSCBqgas7RTemM7vAZHObabmByGhLx7K%2FFN&X-Amz-Signature=fa27247c6493eed9d7d7b938c730b9536d0d0fe2a1a82ec25744581bf45ddad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLWCFWX3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDJES0zcZU2M0TH0xe7a6%2FxPjl3T4%2B1dQxEfba0AlcsTQIhAJOCnRibuPzPWeMMQPdgMjSxUFTYqOImY33A7FOF8RWhKv8DCH8QABoMNjM3NDIzMTgzODA1Igz7YCO4Coqza0H97P4q3AN%2FjiOqILUlBk%2FcbkSSKI68k2ZmpPXqADZCOxriT9tAOAE08Yc5c15MKXjL6w4N6yqwTcsTjSTeENFAjFESNxStXRsbhjj4YpQfl1naCkrIfU3ZXkV4ToQajqBN1l39TJkOYiFloYFy0vmo0rUNI5zGjPQpnxlpJr26lJ8LWFwVuS7pg5Ta8NxPPRSujR1DyM8eSCG8%2Bf6FmmLRIw%2F5NAyOajBXD%2Fsc%2F6NlIDgLr%2BbPeY3Bw8lZFWej%2F5QVFDMmP0dgqSW3CIY2XAAu5NrZRcazu4n0p%2Fpu8eKpqA%2F2xEOJRBUtcj39ALx5FH7eSbAZd3tHxd7Ct5HbRBKCH%2FHnQKnF7M%2Fpt%2BGHj981YU1lMpWYLlDfxWIVQySEai%2BokhiUQ9roGelO7fxsmfb4%2BLUS67w7rH9qoE43WdF%2FhTb1Y9CBWRvq1IRygRsvLjBW%2FIOsnW8ZoZ97HtTXWO9ARdEfseh%2FMTqf2peLR9Re9CiVGHEOYjKldclULgQXv%2F44IMSvCH%2B%2BjxrMcIYo1Bypu9y%2BakpkXeIXnKTRCh6AEJcYetznXJ15x1eQcihOiFS7mDOAGMcttKYBv1%2F1rl7%2BHj3D%2B7SEpWJuLAup%2BoshrNT6jykkSnD52JuOn9Qbna6uHTCAyprEBjqkAcW0hyMuik4tnMPZQxW9hbiY5EhfYjB%2FKiHd7fjaH6Q%2FHZJjU4jXsZSlZvlj1n8r94BC4v9urX8vmLzKIawxkrZiA1MKiNALZ2QMB2w2WTMXQadhGUET8d4YG50UuAmORsvM6I6Gyg66MyrJ8%2BlXVNFGajnik01bdIA21p9mxbYk4B5LpnHbPFegX2WBxBYBG%2FaDugDesrgq4wE9be16AQZVAz%2BL&X-Amz-Signature=974b62472a945ebd31453717140270a13b90b439ab7513014c455900fc675b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCW7MIZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHChU6IH5rq3n%2Ff8rQFr1qzMHuyAdyD6cnfMzF9jx36KAiEAvBEm6D%2BJqqOG9WuayulOcksoIdImKrV%2FS7DectMN1U4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnjHMAPPfcsp87uSircA68rgLeouvNFyTskyH2EuZhmfQDftgYSvyUYaZ9lNhywnkZprnD9VW1OQnhjT2d75cHeTWHtJujWv%2FD6xw%2BQ0HpC15WiUTRh09g%2B6C5M%2BYdngVFmQhEp1PN%2FrNmAIpxYTFSbuCYHvxoZeIvmOIF1HaPB0eeAd2%2FsyJek64KTWOgNn5YyTA65lTpQp16n5OgX9JuS2dhK7%2FewVkWNqHn3ZH78%2BFNajjZmzs2bliDENVAIm1AEtq7zmdlq5%2BQRuJ%2BhLtEF70yYX8%2BfJvovLbKID6n92LgNoEMk9VgOsaAV97AYVnqqg21DNQufz%2BQR9X9lUR2Kp3VPDfQRam8H1v6rJKfP8F%2BUvw39RzrDYr3%2B%2BGY4JCkpk3Z8npOUI%2FOaVItloCc3CI6n1ypz3TgZA5%2FRJg%2FH5HlAw3WFN22WFDlgo8%2BYalIxEqbxEP%2BO%2BLZjtzyMvbjpp%2BZthXRxUfbESu4FuhKpIKu5%2B6doNGIg02QMY3z80PoXImqPPSAPKYeXLJT47mpvs1w4t3LQf8Mx9VYfDHpcbP3faFjuPfv7d4SLTzGtrULaIQSCEWCZ3396%2BhgIqTHx62ECTeu95A8RFnUE5Fl3DfpvUAPve8VqbL2IgvHlurkRrd%2FI5gusnC99MJTKmsQGOqUBNWdVk2ZXcQRKrmNcLNCgkGWN1Ex2snD4t5%2BNlE6FbYJKKkESsgQh%2F2anp7xLwffCa4rJrvwGp%2FFEAGY2x8dcagWnsrL1D0I151A5bMh51cRSuKi0j2V2aIwNnI1hGt9MhVPiedAMhqOZb73OjMFInI384cpzHRYYlCkg7N2r3GYHMnHpcZqJmwC6aRr55q03XgdQXGe5DCunAl5zA7QUHC3%2BCWY0&X-Amz-Signature=49dd5d91adeea59eb4636534dd0abe6707c90f3ffb83299e10a191e50e90bd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
