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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSIYCT2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYmKD4CGlw1zGOQNTmHAsOhK8Jck3hSf8m8tSuMjY7XAiButSPtQpSaIMeHe4tp0Q0A0cho01twV5jBnV0H5cQrtyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rs7OQuGIDAC8fzeKtwDYvUMYO2dvRLfbj34TT7A3t4pIkt3d8S2pNztFN%2BMt7xJGU2h1k2oEoXkcP722g358MWX%2BCkvrWTYkQY5F0m1XqeN7rX64ZN3BP6f3ckiBWE41LNA2R7L0okjQjITA6zhqqbwbUrXQ17MQU5R1a3PGyxgeNzH2V5MuWzsTzBdOnNB5r011JIrS%2FvzgfH3E%2ByhhoUo%2BLYoX6v8hNBMVWL5A0BAfjFRIT3XSuiVHBNepMD7v05CxFkVdaz%2FePSmgJic28zSw7HRs2ImegTa52SedJm5uN7v1H1EntuwFlUnVPhUJl9UIN5MYSsxHGhtkSlYMK9RVDmwh9uhfXIHHXfb6pypdtCUFFnzI4uTcLFt72oxa0L%2FGxp9OiNOAgFzq5BphNCDWUzYAZyB9UHELwsnTV5rFFupKQtr3k8m4sCJwNzjXQ33OJ88q3aQMm7H1XBkDTppRihNTtOEeMcyTYpSzlKGbYlTXgLn4JA4O7UpL1PFmSeWLrakBQ4t%2ByIBP5U1FwYqssgUrzm42At2n0CXuSpRtCBGGFsEHgqsYvU3tBDA3VN0nuwh4wxhhBjTlxXXoLXSZCMLpit9bpNPCRkU%2FRp9ijMb6%2FX4%2FQ%2F7HprBf187Y7CVAiyfwuQ6l18wrZqdwgY6pgHCZU2q6Q7ZOgwN4NoiS08HfOry%2FHsmSqOVfnpF9W%2FrYpwSOQPKGmIi%2F9bLcVwnFA1quuxjoyf9g00P%2Bnu%2FsxwDxbtANpRO5sNLR9AhmdkZPWpnM3ggQitL7daSx1BHAl5kifTLYbuadGlW2%2FAS1DJWofv%2BCZ1QgpYJxUsD7d8wN1%2FWthhDNCzqFJif0KtzdGS1IVP17YCMMG1CkDVOnyfAODDlQdhm&X-Amz-Signature=5b45dcf3e27f0fe5a347c512bfff1033568c588b93a52c794c15b2a2e3728509&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSIYCT2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYmKD4CGlw1zGOQNTmHAsOhK8Jck3hSf8m8tSuMjY7XAiButSPtQpSaIMeHe4tp0Q0A0cho01twV5jBnV0H5cQrtyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rs7OQuGIDAC8fzeKtwDYvUMYO2dvRLfbj34TT7A3t4pIkt3d8S2pNztFN%2BMt7xJGU2h1k2oEoXkcP722g358MWX%2BCkvrWTYkQY5F0m1XqeN7rX64ZN3BP6f3ckiBWE41LNA2R7L0okjQjITA6zhqqbwbUrXQ17MQU5R1a3PGyxgeNzH2V5MuWzsTzBdOnNB5r011JIrS%2FvzgfH3E%2ByhhoUo%2BLYoX6v8hNBMVWL5A0BAfjFRIT3XSuiVHBNepMD7v05CxFkVdaz%2FePSmgJic28zSw7HRs2ImegTa52SedJm5uN7v1H1EntuwFlUnVPhUJl9UIN5MYSsxHGhtkSlYMK9RVDmwh9uhfXIHHXfb6pypdtCUFFnzI4uTcLFt72oxa0L%2FGxp9OiNOAgFzq5BphNCDWUzYAZyB9UHELwsnTV5rFFupKQtr3k8m4sCJwNzjXQ33OJ88q3aQMm7H1XBkDTppRihNTtOEeMcyTYpSzlKGbYlTXgLn4JA4O7UpL1PFmSeWLrakBQ4t%2ByIBP5U1FwYqssgUrzm42At2n0CXuSpRtCBGGFsEHgqsYvU3tBDA3VN0nuwh4wxhhBjTlxXXoLXSZCMLpit9bpNPCRkU%2FRp9ijMb6%2FX4%2FQ%2F7HprBf187Y7CVAiyfwuQ6l18wrZqdwgY6pgHCZU2q6Q7ZOgwN4NoiS08HfOry%2FHsmSqOVfnpF9W%2FrYpwSOQPKGmIi%2F9bLcVwnFA1quuxjoyf9g00P%2Bnu%2FsxwDxbtANpRO5sNLR9AhmdkZPWpnM3ggQitL7daSx1BHAl5kifTLYbuadGlW2%2FAS1DJWofv%2BCZ1QgpYJxUsD7d8wN1%2FWthhDNCzqFJif0KtzdGS1IVP17YCMMG1CkDVOnyfAODDlQdhm&X-Amz-Signature=261751b26a20dba5dcefdfb3f35132baab287a8a351315ec15824258a5814fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSIYCT2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYmKD4CGlw1zGOQNTmHAsOhK8Jck3hSf8m8tSuMjY7XAiButSPtQpSaIMeHe4tp0Q0A0cho01twV5jBnV0H5cQrtyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rs7OQuGIDAC8fzeKtwDYvUMYO2dvRLfbj34TT7A3t4pIkt3d8S2pNztFN%2BMt7xJGU2h1k2oEoXkcP722g358MWX%2BCkvrWTYkQY5F0m1XqeN7rX64ZN3BP6f3ckiBWE41LNA2R7L0okjQjITA6zhqqbwbUrXQ17MQU5R1a3PGyxgeNzH2V5MuWzsTzBdOnNB5r011JIrS%2FvzgfH3E%2ByhhoUo%2BLYoX6v8hNBMVWL5A0BAfjFRIT3XSuiVHBNepMD7v05CxFkVdaz%2FePSmgJic28zSw7HRs2ImegTa52SedJm5uN7v1H1EntuwFlUnVPhUJl9UIN5MYSsxHGhtkSlYMK9RVDmwh9uhfXIHHXfb6pypdtCUFFnzI4uTcLFt72oxa0L%2FGxp9OiNOAgFzq5BphNCDWUzYAZyB9UHELwsnTV5rFFupKQtr3k8m4sCJwNzjXQ33OJ88q3aQMm7H1XBkDTppRihNTtOEeMcyTYpSzlKGbYlTXgLn4JA4O7UpL1PFmSeWLrakBQ4t%2ByIBP5U1FwYqssgUrzm42At2n0CXuSpRtCBGGFsEHgqsYvU3tBDA3VN0nuwh4wxhhBjTlxXXoLXSZCMLpit9bpNPCRkU%2FRp9ijMb6%2FX4%2FQ%2F7HprBf187Y7CVAiyfwuQ6l18wrZqdwgY6pgHCZU2q6Q7ZOgwN4NoiS08HfOry%2FHsmSqOVfnpF9W%2FrYpwSOQPKGmIi%2F9bLcVwnFA1quuxjoyf9g00P%2Bnu%2FsxwDxbtANpRO5sNLR9AhmdkZPWpnM3ggQitL7daSx1BHAl5kifTLYbuadGlW2%2FAS1DJWofv%2BCZ1QgpYJxUsD7d8wN1%2FWthhDNCzqFJif0KtzdGS1IVP17YCMMG1CkDVOnyfAODDlQdhm&X-Amz-Signature=f307e593b4fcd0087b6fd975c875e4a22ce9f71d5aed39c80dd0e16e8748567d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESEY5XQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxY6Xs%2B8al%2F965VD%2BkwtipwJzPKDxDrZSTluBX%2B%2FrWwAIgA7o6btWcxvh4tRJGNNLacCHNgIWUP1o5hgNtBQM5%2FYwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwkrMm%2BN6rtrUWYyrcA9a5dB%2BsRVYr6gBCqQEzWAiNyZi4qn2ukSF0TawYX46i%2FtYEd6jELjVQk0hY2dkp2tMa%2F3f2yyUgoai6QBJFMwZcLbSAdY4lhJlXqqRmovm%2FPRa%2FsGs01DgfoWTSBvFFX4XJFimRQ4%2Btaj02%2B64mWrGVD%2BBsxBD8bXxiJdG2jmRUXUC42QJ4IZwZYp%2FlQE%2Ftowpj3BCxAnWrx6qVp2lwWBT97RV92t0qqMHT6rWjgLk%2FUZ9fxrJxt7WZBJX%2B0mCfFaKrGsiJ5U17ZpaZbrmnGUYSrUUkLoJO%2Bz1%2BQtr%2FfG7%2BzsOCwDMCxjATGlx8aZawNwAl6dTIe2L24mp9B93glWKfFYK6pRmCC9hcbrBQduKxSdb9XAzLsMZW8y5Szy4Ma2uYkA2agLjljuvrPkEJjBIZWlvlNIt59rXK6U7lysCqoe4liWFiOfa2QJvLyjw8ecQQ7Er62UVJlRbYk%2BmODzqWLeSrADH5G4v3kqg2UNiETVWH2Xd0gv3NI1ZnwnZKYrjN38eQwRpxu7QsStrbyOSwxgR2fAO69qA6H8VI8JB24NE1nveb6t2p8cr6wiBk4rXkWte%2BfOwp2qYg7bABSa7apMaX7Ltn2Ep815EulH178z8Fe8hcsR6m040RMLaancIGOqUB9ugaQFQTLtBxZYyMBwKMRRnOjPlcuJzwIuAJJ6mmkRfonkbvhD%2FKJPmICU1onLyBKqQuOmTr7ibEizwlP8IICBuh3BrgxNkox9Kh%2F953cAmdOY%2FBkGWmbJ7AtvDTso6OY2sN1dCtZH%2FoQ7TrPtqpI8KvvH0EoVT052OmKQjkTCUAVCVzMdFTgXKoHxt0O3hCKiSHPImfhjxI%2FIdpWCzz0%2BK9LM6Z&X-Amz-Signature=99b0e3debd9c682e6057919909318cdef4d9275232cc7b50b402d45ee7dd19c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDI6GVV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDccMSPa%2BoIjep7v8GxdLU68CYGMVfVUIV5QH0lemJkIwIhALuUruDirxFrtNEvTjI2REubRr1p0tXamhiN71Hfb9wNKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjnYRbkMljyu3EfTIq3ANepzy%2BmgU0EckOhbHsrg36YjFVrZ3YSj%2BTttpiBbAFIOTJlqypfJsRq18ojbI6EvJaaS6mpHOV1mU4fRJGU5IdSor4L2P59N%2F5vC2iBzLNjvYZXT673ohLYFnIyo8wTDK4WA8vl5EFEHXiX5kdlZFE%2FJHbTgptzyzni2DF%2BIG%2Fruiv7IH7zogq%2Bh9oy3ajp1f3y2M7r6IOh1D5nqPebJNXF8kPIwwcApImiQNfXfDrsVufP6s3XeDvdoHr6ceqGjq9H80a9Rr4KmIlRfE%2B7k8M50kyBpgHXISRLtffiQ3MrC8%2FnvleFX71SA6N3LCDwMd%2BO4i%2BQWXj3rnsol63o8DTxCB%2BeqDWHYry53W0VsJD8yvz1hRMiGnwRn0nGs4%2FASUGXviCYV3ho8en2OEbTJW5Hgt7xOVD6M%2FMGRwTv5j%2FNzIgRFX%2BL1JmgUNpMm6IsVIdWGxBqUSBaScn%2FjcjUNhcFz5ZfZcLAZVCBLcyS1DHHs4vwiZ5a%2FYeIz6ofievMbvoSjYM1N5snFrmtQKf5dSJv7vpsiZTvl%2BTVjLhjd2HJyumRtC8B8mg1DMmhax1H1pvVM4TBb%2BzxiB93BQNUBfnyDJYRXsGagvteRcCtJAnFuQJ1YqdDkAxN554qzD3l53CBjqkATFY7EEEzKGOUU6c3uT8w1XcD90lIKr19ORcViKZKxcR%2BI1jsDgwfkh8xVfgpqVY8PXCG%2BydJzPd4aKBY78ZEsSRuBLouKZMAFzXl2Rwjhb2KarA8Fa%2B3hEkUlYBEmLp2z02eFmwq%2BPmwsPQsIohls%2FVoeuNANZWCnPoIsXRuLH1YO6l8ue%2FBQ72FXOtukKF2uxPrbUG1apUW4EEcRPL2XSEN2DV&X-Amz-Signature=5fd01e19ae5cb51ebf92774b7c9a74074d5d9e1e0a1e39554e5c883f06ce2ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWSIYCT2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYmKD4CGlw1zGOQNTmHAsOhK8Jck3hSf8m8tSuMjY7XAiButSPtQpSaIMeHe4tp0Q0A0cho01twV5jBnV0H5cQrtyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9rs7OQuGIDAC8fzeKtwDYvUMYO2dvRLfbj34TT7A3t4pIkt3d8S2pNztFN%2BMt7xJGU2h1k2oEoXkcP722g358MWX%2BCkvrWTYkQY5F0m1XqeN7rX64ZN3BP6f3ckiBWE41LNA2R7L0okjQjITA6zhqqbwbUrXQ17MQU5R1a3PGyxgeNzH2V5MuWzsTzBdOnNB5r011JIrS%2FvzgfH3E%2ByhhoUo%2BLYoX6v8hNBMVWL5A0BAfjFRIT3XSuiVHBNepMD7v05CxFkVdaz%2FePSmgJic28zSw7HRs2ImegTa52SedJm5uN7v1H1EntuwFlUnVPhUJl9UIN5MYSsxHGhtkSlYMK9RVDmwh9uhfXIHHXfb6pypdtCUFFnzI4uTcLFt72oxa0L%2FGxp9OiNOAgFzq5BphNCDWUzYAZyB9UHELwsnTV5rFFupKQtr3k8m4sCJwNzjXQ33OJ88q3aQMm7H1XBkDTppRihNTtOEeMcyTYpSzlKGbYlTXgLn4JA4O7UpL1PFmSeWLrakBQ4t%2ByIBP5U1FwYqssgUrzm42At2n0CXuSpRtCBGGFsEHgqsYvU3tBDA3VN0nuwh4wxhhBjTlxXXoLXSZCMLpit9bpNPCRkU%2FRp9ijMb6%2FX4%2FQ%2F7HprBf187Y7CVAiyfwuQ6l18wrZqdwgY6pgHCZU2q6Q7ZOgwN4NoiS08HfOry%2FHsmSqOVfnpF9W%2FrYpwSOQPKGmIi%2F9bLcVwnFA1quuxjoyf9g00P%2Bnu%2FsxwDxbtANpRO5sNLR9AhmdkZPWpnM3ggQitL7daSx1BHAl5kifTLYbuadGlW2%2FAS1DJWofv%2BCZ1QgpYJxUsD7d8wN1%2FWthhDNCzqFJif0KtzdGS1IVP17YCMMG1CkDVOnyfAODDlQdhm&X-Amz-Signature=9c43056b4413a4d7a1fe6f52fa7f5a806660672c6a3755f5b510321011243e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
