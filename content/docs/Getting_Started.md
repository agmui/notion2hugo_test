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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGZ3J6U%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCsDQEfHFmKOFG3wj2T3h9tEwMW4t2psp5Dr8PdZaa8lQIgOQ7bV7mndb9LWm1RKRkKBlIp8PoCamM408hk39SH96cqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD6Y27MgI6oQm%2FXcSrcA9zelKBl3oM2MPdf3W3iZwpH19Ue3rc3x%2Bati0AzKhqlMuWWhf9dZTgUU0jee7stXiDdyA0m3NhDuVEtr%2F5TqotM5VCYK%2Bn6Rd4qV%2B6DnmyzVB2XzMQqPz2D3yW7%2FpseHNRcpoO3Qc18mXpF60lal3eRpzI%2BOXKMnBaGq8knWuku8nrPk3pcdBfWLiK4wzWaV5N7cQpaBcnaPPlDCVkAGqwvZ28S6ZsSvTjvT46by8Q2yNFYYD0jqyBIMoot0tRSJ%2BM2BN6QHoOP4WfSf9eXNha7EU6vTQ4VQ2DYzcJ7qNL5ORv8RuXAdhdP8aV7tII%2Bl88VvLUiCLA9AZ%2FfUE16cqmeKPu%2Bn26Ug8VutRkxeg1GvvWzajA58KD89MJbCvywJE2nidPbmG8A%2Fzmz%2FswmG90xZ0tkJQX%2FGGXMn7WX5nDQmouqElKi3DY1RpK4j8n51x2Ijc%2FWmVyHKuLTsRTIKM9%2FoSUFynM7MCEq3p4USeg0C5%2FJlXodboriXbo7%2BP8Z%2FbexEMMyCqUpZKY1IwDMtftDEC2O8M1mmdNVq6CpgGuFs8q6OrunNC16Ccd6LZOvG8pFyLAPpJs7N%2FO%2BaoHUB0Ppkzr1Rbw%2Bnl%2BooykTBZZIDzuCRZ4TMm8xn3hSMO%2Bm8r4GOqUBja%2B0FuelJ4L4gasM%2F%2Fg8tUqIHZzpNCJwk4cDrIfQRJmwwSA6U4W7I%2BAoSJOxYlFwDKk%2BP03DzRp7Vtu64j23%2Fmxrb2CaQicZZMNd%2FGQBqbvNrLIxk5gcJNMVa65FwAIXO8XZ9Kw%2BEExC10zMTRI3Hr9D4pPXZhsF5sX4RQqwYMC9rZxHzF1%2FpXVO3xTUmmxrVIC9XgHbjdhfVljJwPFZ2gF8eS6m&X-Amz-Signature=5e6a2ed4287450cd42016d1e3802d1d5f1a4e46f9d3d869d8c40e0d82a94b817&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGZ3J6U%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCsDQEfHFmKOFG3wj2T3h9tEwMW4t2psp5Dr8PdZaa8lQIgOQ7bV7mndb9LWm1RKRkKBlIp8PoCamM408hk39SH96cqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD6Y27MgI6oQm%2FXcSrcA9zelKBl3oM2MPdf3W3iZwpH19Ue3rc3x%2Bati0AzKhqlMuWWhf9dZTgUU0jee7stXiDdyA0m3NhDuVEtr%2F5TqotM5VCYK%2Bn6Rd4qV%2B6DnmyzVB2XzMQqPz2D3yW7%2FpseHNRcpoO3Qc18mXpF60lal3eRpzI%2BOXKMnBaGq8knWuku8nrPk3pcdBfWLiK4wzWaV5N7cQpaBcnaPPlDCVkAGqwvZ28S6ZsSvTjvT46by8Q2yNFYYD0jqyBIMoot0tRSJ%2BM2BN6QHoOP4WfSf9eXNha7EU6vTQ4VQ2DYzcJ7qNL5ORv8RuXAdhdP8aV7tII%2Bl88VvLUiCLA9AZ%2FfUE16cqmeKPu%2Bn26Ug8VutRkxeg1GvvWzajA58KD89MJbCvywJE2nidPbmG8A%2Fzmz%2FswmG90xZ0tkJQX%2FGGXMn7WX5nDQmouqElKi3DY1RpK4j8n51x2Ijc%2FWmVyHKuLTsRTIKM9%2FoSUFynM7MCEq3p4USeg0C5%2FJlXodboriXbo7%2BP8Z%2FbexEMMyCqUpZKY1IwDMtftDEC2O8M1mmdNVq6CpgGuFs8q6OrunNC16Ccd6LZOvG8pFyLAPpJs7N%2FO%2BaoHUB0Ppkzr1Rbw%2Bnl%2BooykTBZZIDzuCRZ4TMm8xn3hSMO%2Bm8r4GOqUBja%2B0FuelJ4L4gasM%2F%2Fg8tUqIHZzpNCJwk4cDrIfQRJmwwSA6U4W7I%2BAoSJOxYlFwDKk%2BP03DzRp7Vtu64j23%2Fmxrb2CaQicZZMNd%2FGQBqbvNrLIxk5gcJNMVa65FwAIXO8XZ9Kw%2BEExC10zMTRI3Hr9D4pPXZhsF5sX4RQqwYMC9rZxHzF1%2FpXVO3xTUmmxrVIC9XgHbjdhfVljJwPFZ2gF8eS6m&X-Amz-Signature=9fa9c949e0748678c2a54383aed6cb4f1d7a357e89de46be56c5006add667d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOUHHXKX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC33KiallTonjcmtZ%2FiYjy%2FY%2F2Y50iN7wuNA7Qh1ijjjQIgdUdEH%2FTPAWuaqYgvE4Wg6Ipa6rgcnGb3EFG2PzDtdb4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAccwzKlou1C1QgHDircAyh0Er96DJ0MkeXd7CRp7SPaJjQytgWtuz7l2Fv5CqhIN5AWbRfScJZZ8YDu8yEQWWc1jj17AmT0wG7tSd09xuJlNmId8BxWWR1bOuOtDGdu%2FI4NTrQu2jI%2BIOwqWsWxoZsU657QJRryVJjIwt%2ByVcq7jA3TblQJcsENlWg9%2FEpP0R0ZjrFlBFpyE8G%2F6PGwi3FPqJi%2Bw39Ks7EEaAuR2cueklyRaH78b2QEKupZI8SVa74hmMl8Pd%2FjUQd1z6N3jwZzBnWgmwE9pttjo5%2FfBXB961%2BnGRV7hB6Ll1yWbKkezmYKcEZJ0HhV8MClOpNm5wicqwPJOy5DRBATDyeJ8sHobrQ1snbJJJcPgk5xoNrhT6uGCI6gJdBCbuT%2FOVpRtNVZwxhG6XiRIF7HxsD0ZFpuG%2Bz2JJR5sgiZjQyJJrZEhxLszBWmWP46Vlvv%2B6h0rwe%2BZKuHcLEXbfQKEnubAxZTMfAm4u5dCjwCVP2OjpijaZX04IN1bhKbBr0Dn94AaiXXurz5ggG5xybkt%2BPiCMTVkK%2BB3AhrVAORJJvu3v%2Bn24sHAxI77dLf1P0lnMrf%2FoCNKGAnPNseAKhUnTmxaNatawNn5DLvqt7CrvxjqaUwNyhLdIEosz1FiEuUMKSn8r4GOqUBVpP6FIvrcSCI5pPaXj76L1d1h5qJ0B548jBkWxzO6GjJ6wBjcQRC8hfN0PbZ3Sy9axiLHlEsuXz9vAdYPDnL8u68mn2F3IQRUbDqyFaHmS6bDa1g7WPMtoqNv%2FKdNZgvKwTtbPLSBcPKs2iJATYDAeqU3JTDjRKkZ6rZaa5%2BrIzCuABaAMIAQaTYumyG%2BFHkX%2BY08tU6GerSHIhg1hTWNCC15N5%2B&X-Amz-Signature=3e7b9f334cb5979bed4a8602d6a86d6560754b1a33603719bf55ddee4ffbc1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFGVZWK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGT4e8UAqwNdZlubcLqkFZZkFs6utWbOwCd6XvpOGNYeAiB7bMGDI2zhP1TqtA%2BbRlwdS27GgdvGFWdxySz08dG3ESqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2FWI2e3vrNEtp2oAKtwDJ03YXTLpu7e%2F8XQmqo9NyT2az6GFLg1U09iUtGlHb%2FW0DcSXHb32ZsLl8J9MYTmRh8rgGBZuyHLEuCvXGMz9i4XE5pCOk%2B4C0SjtH6CaTgvQvKyy5ffCi2ZNLFVB5uHvez5ecRjX07b1rTFOUOWwubeTo1vpAJFmFf0c5FWgPgJ3Dtgmvt4fyh7WIZwSa%2BJKoIiiKt9dcopG4v%2FkDUSJCcWyDuN5NatBNiOBisUR1vw8kdJ8MTqnngKOo3oju2n5Wag8fKwcY9H166IQMERCrMgES9CvsakDii4oydDb5V8gkWM8AYHc9%2BvwVAUwiPVcSU99jjMW0t2sa42u8sZ4I2Pwd8r5V3zqaH9tv6Zq8Xih5rVEeFSidP5%2F1KVKq1Sxkf%2F3JKd%2BccwXzAOl1VWaHk43OBlWaXJ5jg1gYNJtf6cPztJr0CH37U0AlGkONGSTArtzow2r2vxw3bywjsWgZQZnXs4EVUbh6tL%2FlW6HsBO0bvAhmeSFdnl6lZZY9EI5xLFhT8koRkdv0RnAibSJ3NXjQuoGD7%2B2weUJ0ZczGm%2FVvcadgyg%2Behn6t86fqJoT1LjoAM1kfrIv9vZ6DTXpAbUG13I3I5MpA3OuLPUQeVKld0XrswvlQqeNljUwnafyvgY6pgEFuxo8A4BC7QaKbsYtnrzmpq8zUS7MiaANrsj5RNs35pTsVLIWudPHS0sUVS%2B1cZ22uZxpzoMxDPnnNavtDUsOGF%2BqHht1EOArx0YqEHvl0bjzpcfVXZk4CPDFNm6fNx0S%2BMivRx4tb1CWD7zd8ukiyu%2B5t5nBF%2Bw6D5eYe%2B5GAZkxt1lKzlNZQ8enK5%2F%2FlS3%2FUokVCUq1DQyOtCFIQVzHxJZF3rAG&X-Amz-Signature=72d1bb47e557d66bafe1e24f911fe0a65d50c5d5edb59d2c12409ca81259e5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGZ3J6U%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCsDQEfHFmKOFG3wj2T3h9tEwMW4t2psp5Dr8PdZaa8lQIgOQ7bV7mndb9LWm1RKRkKBlIp8PoCamM408hk39SH96cqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD6Y27MgI6oQm%2FXcSrcA9zelKBl3oM2MPdf3W3iZwpH19Ue3rc3x%2Bati0AzKhqlMuWWhf9dZTgUU0jee7stXiDdyA0m3NhDuVEtr%2F5TqotM5VCYK%2Bn6Rd4qV%2B6DnmyzVB2XzMQqPz2D3yW7%2FpseHNRcpoO3Qc18mXpF60lal3eRpzI%2BOXKMnBaGq8knWuku8nrPk3pcdBfWLiK4wzWaV5N7cQpaBcnaPPlDCVkAGqwvZ28S6ZsSvTjvT46by8Q2yNFYYD0jqyBIMoot0tRSJ%2BM2BN6QHoOP4WfSf9eXNha7EU6vTQ4VQ2DYzcJ7qNL5ORv8RuXAdhdP8aV7tII%2Bl88VvLUiCLA9AZ%2FfUE16cqmeKPu%2Bn26Ug8VutRkxeg1GvvWzajA58KD89MJbCvywJE2nidPbmG8A%2Fzmz%2FswmG90xZ0tkJQX%2FGGXMn7WX5nDQmouqElKi3DY1RpK4j8n51x2Ijc%2FWmVyHKuLTsRTIKM9%2FoSUFynM7MCEq3p4USeg0C5%2FJlXodboriXbo7%2BP8Z%2FbexEMMyCqUpZKY1IwDMtftDEC2O8M1mmdNVq6CpgGuFs8q6OrunNC16Ccd6LZOvG8pFyLAPpJs7N%2FO%2BaoHUB0Ppkzr1Rbw%2Bnl%2BooykTBZZIDzuCRZ4TMm8xn3hSMO%2Bm8r4GOqUBja%2B0FuelJ4L4gasM%2F%2Fg8tUqIHZzpNCJwk4cDrIfQRJmwwSA6U4W7I%2BAoSJOxYlFwDKk%2BP03DzRp7Vtu64j23%2Fmxrb2CaQicZZMNd%2FGQBqbvNrLIxk5gcJNMVa65FwAIXO8XZ9Kw%2BEExC10zMTRI3Hr9D4pPXZhsF5sX4RQqwYMC9rZxHzF1%2FpXVO3xTUmmxrVIC9XgHbjdhfVljJwPFZ2gF8eS6m&X-Amz-Signature=4182079eff129bed96048515a5ea0459fda95774516c62b79f8e908f229b3ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
