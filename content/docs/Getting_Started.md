---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDN2DN4%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1%2FUBr4jIhVsv7Wda6e9UdDGccW%2BcenuIcXwBdSX%2BY1AIhAPShYnX6tDbWIffoeZt8m3ZAtFPObU%2BNNrnXMBhbw6QgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaCDjOTM47ZGRWws8q3AMDA6ZM%2B7BDHHm%2FcBAJ8OB4DGx2JHO%2FOvRa3jdAjXw9lp1TrCjJcfE%2Bi4t0xXEI9igWIa7x3lYLmcJNeA9Xl%2B2dAqtfS8WQI%2BtRGsnXHGkjYHEhGhO9OJwXO3imVI8FsfIljTkvpAQfixCEk7SfWJV%2FP1eX4aQbLzmJ2VbLck9ZbEmUZ4UYaV6o3rQT%2B%2Fdxrs%2B2BZjy1MkogFHpDPk4nWlZn5A17%2BtvUak3957aVUohx%2B975Tm0ezVQoB4kc3aDt6CCEt%2FK8uqc%2FL6aYLuxqCdpV8ZH2sAJHjQ8sHRQ9ktNnETkqa2Ij67mn9j2U2dbDm98H%2FrLx18Z5wyGwqkEhBqz6SoqNC0pOvMuoF8txdUCQARayGe2O%2BnJR61o68V6aoqDGIUHJNaw89mM6PSHZElbRMkWZKOVcW3gWyJ8JpmpMpd8z%2Fum558wZc7cpAJJa5hPMUgPXeSueU73FzmsObrDACvPvamfsaY6KxvcrE26xqRXpz3O%2BzviZ%2FiO75wE1nrVFqNl6WchIfBLwh3cEFLAkKgAQyTQOVAmzS%2Bey3r1r0fb3xr4kvFGq4vCXVfEglQ5Vk5vgSx%2BNCX4Sre%2BWc%2BN4yUDIZaSLv8bGK2iT5YiCiHGlv87Ux9K6D3UsTDisfnTBjqkAVjjofIb0e8eL3KkvChOyG3JbUHVfGHC3jDbw5I4QaXYYhsM54ZCTsLxCheQiTYW8BDKvvtHfx%2FM15TgHoHvYiZbyRys6yRBb5PwiUdVTfD8zc5iK4gUz3bgy8urLCAY1dvqKgSHnqB3vdAMXUP%2BzZtRjcPbUZcSF2zpIfuwKjRAicJahp424WsWG9f9gFHNgsbUbmNWEP%2Fk21vR%2FswpnhpDGzdi&X-Amz-Signature=0855e32222506f4061afdecedb0e59ceeeba9012c05aaf5a2a58d40dddc1be53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDN2DN4%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1%2FUBr4jIhVsv7Wda6e9UdDGccW%2BcenuIcXwBdSX%2BY1AIhAPShYnX6tDbWIffoeZt8m3ZAtFPObU%2BNNrnXMBhbw6QgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaCDjOTM47ZGRWws8q3AMDA6ZM%2B7BDHHm%2FcBAJ8OB4DGx2JHO%2FOvRa3jdAjXw9lp1TrCjJcfE%2Bi4t0xXEI9igWIa7x3lYLmcJNeA9Xl%2B2dAqtfS8WQI%2BtRGsnXHGkjYHEhGhO9OJwXO3imVI8FsfIljTkvpAQfixCEk7SfWJV%2FP1eX4aQbLzmJ2VbLck9ZbEmUZ4UYaV6o3rQT%2B%2Fdxrs%2B2BZjy1MkogFHpDPk4nWlZn5A17%2BtvUak3957aVUohx%2B975Tm0ezVQoB4kc3aDt6CCEt%2FK8uqc%2FL6aYLuxqCdpV8ZH2sAJHjQ8sHRQ9ktNnETkqa2Ij67mn9j2U2dbDm98H%2FrLx18Z5wyGwqkEhBqz6SoqNC0pOvMuoF8txdUCQARayGe2O%2BnJR61o68V6aoqDGIUHJNaw89mM6PSHZElbRMkWZKOVcW3gWyJ8JpmpMpd8z%2Fum558wZc7cpAJJa5hPMUgPXeSueU73FzmsObrDACvPvamfsaY6KxvcrE26xqRXpz3O%2BzviZ%2FiO75wE1nrVFqNl6WchIfBLwh3cEFLAkKgAQyTQOVAmzS%2Bey3r1r0fb3xr4kvFGq4vCXVfEglQ5Vk5vgSx%2BNCX4Sre%2BWc%2BN4yUDIZaSLv8bGK2iT5YiCiHGlv87Ux9K6D3UsTDisfnTBjqkAVjjofIb0e8eL3KkvChOyG3JbUHVfGHC3jDbw5I4QaXYYhsM54ZCTsLxCheQiTYW8BDKvvtHfx%2FM15TgHoHvYiZbyRys6yRBb5PwiUdVTfD8zc5iK4gUz3bgy8urLCAY1dvqKgSHnqB3vdAMXUP%2BzZtRjcPbUZcSF2zpIfuwKjRAicJahp424WsWG9f9gFHNgsbUbmNWEP%2Fk21vR%2FswpnhpDGzdi&X-Amz-Signature=577900a78200442665323e61a5c94a25e29dac4d907d482e64446d834906c333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDN2DN4%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1%2FUBr4jIhVsv7Wda6e9UdDGccW%2BcenuIcXwBdSX%2BY1AIhAPShYnX6tDbWIffoeZt8m3ZAtFPObU%2BNNrnXMBhbw6QgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaCDjOTM47ZGRWws8q3AMDA6ZM%2B7BDHHm%2FcBAJ8OB4DGx2JHO%2FOvRa3jdAjXw9lp1TrCjJcfE%2Bi4t0xXEI9igWIa7x3lYLmcJNeA9Xl%2B2dAqtfS8WQI%2BtRGsnXHGkjYHEhGhO9OJwXO3imVI8FsfIljTkvpAQfixCEk7SfWJV%2FP1eX4aQbLzmJ2VbLck9ZbEmUZ4UYaV6o3rQT%2B%2Fdxrs%2B2BZjy1MkogFHpDPk4nWlZn5A17%2BtvUak3957aVUohx%2B975Tm0ezVQoB4kc3aDt6CCEt%2FK8uqc%2FL6aYLuxqCdpV8ZH2sAJHjQ8sHRQ9ktNnETkqa2Ij67mn9j2U2dbDm98H%2FrLx18Z5wyGwqkEhBqz6SoqNC0pOvMuoF8txdUCQARayGe2O%2BnJR61o68V6aoqDGIUHJNaw89mM6PSHZElbRMkWZKOVcW3gWyJ8JpmpMpd8z%2Fum558wZc7cpAJJa5hPMUgPXeSueU73FzmsObrDACvPvamfsaY6KxvcrE26xqRXpz3O%2BzviZ%2FiO75wE1nrVFqNl6WchIfBLwh3cEFLAkKgAQyTQOVAmzS%2Bey3r1r0fb3xr4kvFGq4vCXVfEglQ5Vk5vgSx%2BNCX4Sre%2BWc%2BN4yUDIZaSLv8bGK2iT5YiCiHGlv87Ux9K6D3UsTDisfnTBjqkAVjjofIb0e8eL3KkvChOyG3JbUHVfGHC3jDbw5I4QaXYYhsM54ZCTsLxCheQiTYW8BDKvvtHfx%2FM15TgHoHvYiZbyRys6yRBb5PwiUdVTfD8zc5iK4gUz3bgy8urLCAY1dvqKgSHnqB3vdAMXUP%2BzZtRjcPbUZcSF2zpIfuwKjRAicJahp424WsWG9f9gFHNgsbUbmNWEP%2Fk21vR%2FswpnhpDGzdi&X-Amz-Signature=1a72766e34fa2046017d35f882a77cc77c7f8af36a7a58afaded21c49ad04f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI5KAOVA%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDuZV20Q2sSIDqY5iqYVTIwcT%2BibLYr5L%2Ft%2FHHjEZ69mwIhAJPNDN33FrYkdACKyvOE9%2FZwJYD4NLj0Gdzz4GsmnOAdKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHzs8BPHQ5pB2uBRQq3AMrfKtH%2Bpyfm6SRZA6IlsUuXc61CJWErw2lqW%2Fp66HyMxr6P3o5z%2F5rA6SozKGGMeoum3mbj8CA8HsN4Xmf%2Bx9MZFqtAc38mA0Y4DedhZ5eSxSQPc8p7NS8nDxbBA%2FGjAIvASKhVBaM4Bd3%2FRKVIrnHYuAoqgR0v1cA88139XhGtLP%2F1haW0GlgPQpY60l7p2gmDptnSkTpmbYkBbCODLiwGi%2F2HwywhqHCAzeBJ6TfnONHndplwj2rKQca2zq8XTjqmb2BYL2k5K3zqsXZvItnFixvNlrFvZ3ZrFC5Id2gYLyAQjbme3zALGVFMk7Rs21%2B7FGQng7%2FmxW67MQjjvMItTM1Vdx%2B0cs8kgnDztvTttWyUIh0rE7jOZbATlDcqBwb4A5vltLv3GjBoKWsOjpVAOgB2rEPTuGM79Se8z7k%2B4fJaVpJuABY2l%2FuDuOGZ5rXsNAwPEnaFmEjlptpc7%2F3jZnYBozQaMEsZOePypkpwEc5PZn%2Bb7S1cs2D2xZl38HuhAX%2B7UaKB3yV7czyb9YKifNGcxMOyH66aJnP1%2B6RoKZ0a6tPwTpy1EdBqgyOOEE%2Fb7iDFh4Htja2KYDCNc7WuEpFL7oWOElaichGbRJvRM8gMpxBnrBF2ZicajD0svnTBjqkATFf%2FD7252FDBKJ27lCcLqNMstzlCuYSDN1Mf9bApWvaMjeExJ%2Foop%2BpohhyEuBJgXQGSllC1HnfuccMCYRGMvEH59V%2Fymr2lP7srHT9uy4KRi5wXhDjmJlfck3el7v9NHRSVQ%2Br5n78bmMOFdmVmD2phMkH6m3qC4jKroFAyGxYxjF9GkP3JZRenMnRehySQQ6p8ydOWMXaphLrjw4H6HW8uPyD&X-Amz-Signature=772c405fed4966abed25629399352ecbd11a7962cd681e540de004810a64c6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBRDAS5%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCICjsGR2RTLKwfavp6yb4KGdi2uZOjCSWMQhQ8yp2cd2zAiAZQwDZCfTfQi3DFF%2Fq%2BgvG39RadahrFEJRQQQAFTtl5SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm3QlpTJuj1rSz1NPKtwDqKsc3lhbjhilQb9m8oz2Q6y2AokyUzXGewcinuRZPgkWnPaU21nhzljIAXOlwWLOf6sWSttwB8vwMqyGfhR6NfkYeL%2B%2FdkXtVTFqhQGTttxWSdIU6A1ZrmSsUmpdREfM1gZzt8vcS9vhAb4QtMR87pnlOOxLX76B8vds%2BUI0aCdSrAiM5uIKUSoTCXRy%2BVOY8AM4jtLu%2BwPdCAClmHEKkSYWRbwrDEDPX6Quunnfelmzr5Jpavt7jQE5SABkrdr%2BzU%2F5IEiaPV%2BpfOSlBXEkt5fXZ2WbJ%2FUztiJTyHFTyMenpckY2LVTGNmvEf0H5XroHI%2FVe9e54PyT6ZCsByAOq0fl5XCWtv7cSt5923kYdFzjkGmBDj1cA%2B6UR22QwBjcbZJr0kXowH24kx9ZY9fl7wB0um%2FZtw42Hy3rKcRbfGtd70qcJC4dqjiUMukamAry1oAPgDooVIQnqnTCUiEjMKUHOedc5BzUdkqxrrTYIWpp%2FVHTGA2LcMOuyGWlx8QabnQGnPoM7gfwKPe1PSJ0ciyD2MjqQ9TBKTPnvTqHzy6OYbp%2FJI1EalncnHUZKu1qff8zkbcz1Mnx8bkHBPDYAp79bKjxjTyhrUHGzS4UG4xa1X8hP%2Bd%2FP6NUaB0wkrL50wY6pgGJIyoquAnDW%2F2bCslZhFS5DBdBNbV2%2FR8BKaw5oP8l%2BcYijuCn5ZRneiCcHQc2SDwhg7%2BsFjBWq02JFK3L%2BcJ1342TZJkE6meRRPsMrb%2B%2B%2FJulEK2MVBNfxZck%2FoUtwUXBXcybk8Ppx4orWdDWC%2B03FuP4ywCARX%2ByUoWJh9D%2BqXQPl5LfNDNoJL63SpI2iBO9pX6OsmAKjivgcOsX9ehaDyLuhd2Q&X-Amz-Signature=f7ab2d72b96dd59c4156a70e1ca86d3a87158818903b9a0d1c3519f73057ec44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDN2DN4%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC1%2FUBr4jIhVsv7Wda6e9UdDGccW%2BcenuIcXwBdSX%2BY1AIhAPShYnX6tDbWIffoeZt8m3ZAtFPObU%2BNNrnXMBhbw6QgKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaCDjOTM47ZGRWws8q3AMDA6ZM%2B7BDHHm%2FcBAJ8OB4DGx2JHO%2FOvRa3jdAjXw9lp1TrCjJcfE%2Bi4t0xXEI9igWIa7x3lYLmcJNeA9Xl%2B2dAqtfS8WQI%2BtRGsnXHGkjYHEhGhO9OJwXO3imVI8FsfIljTkvpAQfixCEk7SfWJV%2FP1eX4aQbLzmJ2VbLck9ZbEmUZ4UYaV6o3rQT%2B%2Fdxrs%2B2BZjy1MkogFHpDPk4nWlZn5A17%2BtvUak3957aVUohx%2B975Tm0ezVQoB4kc3aDt6CCEt%2FK8uqc%2FL6aYLuxqCdpV8ZH2sAJHjQ8sHRQ9ktNnETkqa2Ij67mn9j2U2dbDm98H%2FrLx18Z5wyGwqkEhBqz6SoqNC0pOvMuoF8txdUCQARayGe2O%2BnJR61o68V6aoqDGIUHJNaw89mM6PSHZElbRMkWZKOVcW3gWyJ8JpmpMpd8z%2Fum558wZc7cpAJJa5hPMUgPXeSueU73FzmsObrDACvPvamfsaY6KxvcrE26xqRXpz3O%2BzviZ%2FiO75wE1nrVFqNl6WchIfBLwh3cEFLAkKgAQyTQOVAmzS%2Bey3r1r0fb3xr4kvFGq4vCXVfEglQ5Vk5vgSx%2BNCX4Sre%2BWc%2BN4yUDIZaSLv8bGK2iT5YiCiHGlv87Ux9K6D3UsTDisfnTBjqkAVjjofIb0e8eL3KkvChOyG3JbUHVfGHC3jDbw5I4QaXYYhsM54ZCTsLxCheQiTYW8BDKvvtHfx%2FM15TgHoHvYiZbyRys6yRBb5PwiUdVTfD8zc5iK4gUz3bgy8urLCAY1dvqKgSHnqB3vdAMXUP%2BzZtRjcPbUZcSF2zpIfuwKjRAicJahp424WsWG9f9gFHNgsbUbmNWEP%2Fk21vR%2FswpnhpDGzdi&X-Amz-Signature=1cfaea1c97b97809d5783cca587180b4252601a39e4d30996c687b85cf3ebac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
