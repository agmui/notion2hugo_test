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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKH7FWN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAncIa2lec4R%2FMvNuweWlStm6GCnW9DRZy2eFXUNP6FLAiEApu9AQ36SvjcaW3eemwnziH66dVOEwpDvvbvTUH9kmrwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGcp8rVZ%2BesQlk3S9CrcA6MGS0Zrh4P27BWeu5dyYKIrbKoJSQx8LfCRRqYlJ21PXmNRxfat0jnQ6VJm%2Bk%2BKKn%2BdY3YNMDdeju0u4eAR871eaB7v9dRb23N4WXsWTNCcwIye4X4%2FNvZz5DXclP4PDgz9C93tedyo2Pliz8vPwQ01ADWfFBhbLQpPE5mYHG2WniYSn2nFiN9BpkWRAtehW6X%2BzCXX2f8%2FN1c%2BpMUlnpcjzGaq%2FjVkK%2F92AF4nyqB2IhqTTdV1Z3RJhuaGsYNWgFUGLtOL2tgh80k1H6E1MS00AxbOkxRENwuVtrV11bjYvIYHRpiAhiUGt2dqBaUuoXKUBDDYifd3zX0bKlekQ0gGmdQSc7SZ944%2FgAgrTFpTkcYhp1J5jgsQMqkQUwRl5QWTGDVHHaULF9QNwSoUh6GuZvRAD3CL6fybSRrEnQrYs60H7hUM4yXEqcBShOvUlDGYKPBrOn1GqILigtTz1XrKvQ5xOP9Z5msAKLqDJueeAohkydfEbZw%2FhMrH6V3jpo2nN2JZmjRqJcmAdHiK8gBh58iXi0i6PkaNzg3tWwbXXNCh8jmmjowQxQVd2sYda7IFahyd4IcaU5ILDyasGBQZgbqNFEIi%2FGmVyp3uRB8A79enWsci6ZCOB0RmMM3x7r0GOqUBqFiJCzZj9SxHWOnEN%2BNhU3rgTZf6JVn9qaBkwV6cCG9NkHjgRoZX5UU376zWNHYHLaM5a3kV7XNnWRn%2FtLmduAyIfTdX4XBY3OiCh2%2B7mo9gyTmlXl6T3UNstQwWttHcjfJe6FTruTT3C86lx4O8wkpfIiAlr%2F%2FveCb0t2AJWuE3L%2FqmvsLttRqKVPrK1eQliymYpiTJi6YxyGJ3M0I%2F48WKmUfH&X-Amz-Signature=ef3eb48cced6b2995dea33a942e1a1e3063f76b93cb877d131749ef3745e9251&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKH7FWN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAncIa2lec4R%2FMvNuweWlStm6GCnW9DRZy2eFXUNP6FLAiEApu9AQ36SvjcaW3eemwnziH66dVOEwpDvvbvTUH9kmrwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGcp8rVZ%2BesQlk3S9CrcA6MGS0Zrh4P27BWeu5dyYKIrbKoJSQx8LfCRRqYlJ21PXmNRxfat0jnQ6VJm%2Bk%2BKKn%2BdY3YNMDdeju0u4eAR871eaB7v9dRb23N4WXsWTNCcwIye4X4%2FNvZz5DXclP4PDgz9C93tedyo2Pliz8vPwQ01ADWfFBhbLQpPE5mYHG2WniYSn2nFiN9BpkWRAtehW6X%2BzCXX2f8%2FN1c%2BpMUlnpcjzGaq%2FjVkK%2F92AF4nyqB2IhqTTdV1Z3RJhuaGsYNWgFUGLtOL2tgh80k1H6E1MS00AxbOkxRENwuVtrV11bjYvIYHRpiAhiUGt2dqBaUuoXKUBDDYifd3zX0bKlekQ0gGmdQSc7SZ944%2FgAgrTFpTkcYhp1J5jgsQMqkQUwRl5QWTGDVHHaULF9QNwSoUh6GuZvRAD3CL6fybSRrEnQrYs60H7hUM4yXEqcBShOvUlDGYKPBrOn1GqILigtTz1XrKvQ5xOP9Z5msAKLqDJueeAohkydfEbZw%2FhMrH6V3jpo2nN2JZmjRqJcmAdHiK8gBh58iXi0i6PkaNzg3tWwbXXNCh8jmmjowQxQVd2sYda7IFahyd4IcaU5ILDyasGBQZgbqNFEIi%2FGmVyp3uRB8A79enWsci6ZCOB0RmMM3x7r0GOqUBqFiJCzZj9SxHWOnEN%2BNhU3rgTZf6JVn9qaBkwV6cCG9NkHjgRoZX5UU376zWNHYHLaM5a3kV7XNnWRn%2FtLmduAyIfTdX4XBY3OiCh2%2B7mo9gyTmlXl6T3UNstQwWttHcjfJe6FTruTT3C86lx4O8wkpfIiAlr%2F%2FveCb0t2AJWuE3L%2FqmvsLttRqKVPrK1eQliymYpiTJi6YxyGJ3M0I%2F48WKmUfH&X-Amz-Signature=ea74ef0154dfc5f3c8b707ed2b7a44ee11a8d2d4ac9f4e93203ab13e403e9bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOGRU7F%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdrUTn4%2BgAQFHg9LZvmlaorxuhwzYCjLYEgvG%2Bb2h%2B8AiB3hlm%2BVkbqFWd5TYdTisPG5yxg6hV%2BzLWIQQljciMXRCr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM7Ckyr9J%2FqI1gGMCwKtwDMLi3M9BJQHcMeTnVks%2FCJ2rwbPDQu%2Bp2d0hXmbzxQdtHe%2BnGxoLu%2B9gWVjn%2F47W6m7CZCAZjx4K1%2FkvX9sVfUTI5nIqRC5lv%2Bk9gc%2BQFrTD1VxD8gmbPeCqhfy6sowBRwDT0Ra0AoH%2BQmQ4pvAu6Jg2m2xeOUJsqw4jc9AnepBK7T8Zyi5vcGfDwum%2F%2BmnuZvcWTzzK3GV15lmP5wapnod7wfU3FBg9YvvANxNa6uEjtMtoBX8XPUQwHVRLiTJP2OScakpthTSD4dPdZtsoomnkPAKO5B8qSpzwtiiwNGw2BXyWgmfBx%2Fnp98z0eYPIqWwFOLot5yUYboLIy71mkqxR0wuWuInH%2FaWRJUO1DuzniequVal3dI0AZUCqQ7grbbWloDzLDVRYtcSjizjb33xKFDIvhoCViGJsHDc8qXDH%2BlT%2Ft0kASucg4bE6pESzMtQsCQh2zspSH81ONRGXG4D8AgvjlXrT4w%2ByTpruSUS0OIqPbDF0iAN4yA8u7147aSY%2FkK%2Bd7Ku8uIwoS6nw399OD1sjNQXY5LnD3VfnjOtq8i5fbyA6L79eh8bw%2FwhLND4xRcza1pMastO974nFXR821SV%2BxoVKuCDwfYy5g4T1aHaURcT9phpZc%2FlMw0fHuvQY6pgG%2BeN91xZ0zimNGowVep%2BFnjvxVnB1soIEDAv2BRe85g5%2BFFoDU%2FOPcujhr6ixvbHaKLNxm%2BmLnBDyzc1dWXtY0tMRML23t0OcjeV16w3LYWXcSO3Nni7DuNOpPIGXKznbMM4%2FUDKdT7udvkxHntEOTvjUzWsfaKZxVRvr98cQ2NQolUWkOLXKquH6XI5UnVP49Wl%2FzTKm7YQUm%2FCqZAW%2FPyeNiLRRu&X-Amz-Signature=5b9eaa75c55d93761dcf4649640c71be6b69c2d83c8860db98155462abf5546d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMPNJ6E%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VbkYN%2BuoROFcFsEPlsMmBb%2Bqdl3rHkU0TdtxV68i8wIgOT3yiFTK46%2FHaRC722gMu78wfGHa2SnAZMrqkeFkqIsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAam19Gqrlz27tfC4SrcA1tjXQwEAHzCZ7HU%2FKnVyWCWalfw2lDvC98lqj%2BRcgjqHZL6aNcJNJOuL7YgUVRJpqIHT9UTZoIOVqvusrKO00Ik9mMag6XGTyviYxp%2FkDYuLkCP1kNPw15whRtEFl5b5BX%2FlUtrRANm0DxBDHYUFcNPxNWCCFHhMJepa%2FWCaBJwgjW8IRJK3InYdW9ME0pAvbUMT1559AFmSiDW740Tprolhkiw4wEq4%2F7%2Fam0dlqUlvBXJIf3zNbEGF7X66TfTG%2B%2BKVvbaDd5YEFFnwJ5E1TxEkqKSHfGYd9X%2BDqgsERIXcHzXrRDLMUjr7T8vTGUzrwhKsQriOT6ifZyXKGh80ew1oPPgbz1Avc8xluboeICXufNhazhQxKODss17mGSzYg9l44I0Qic6c7Alxgw47EXGme64r7xmFVW9amuuDQ7r28Kg04JKqycHpWvNHUCZZrzRPFxmt6ohpmODhe4Cl3g1rqeWyK3MQA90NJ%2BlV2pvDUYMvGJQ7ZVRk55U8vDF7Eiv3KkhkslQapTuNFQpSxBd%2BsDH1GT5%2Finqovp%2FJowIr0qXPpJpryUzi9yZQplXFLElF3NLHKF3iLfFLybwdRdIYKrNuhsPgUJd2ec3Fcc4R0jvyBe3ZajZ4tCdMPjx7r0GOqUBNc3PIULTV%2BWFjT%2Bbj7zN2NTADC0pCDI4Yp4O%2BebXVro0KD%2BaTWYSoIZnHc9mAkS8XZG%2F8eePrwxzki0Z1b9mUN83nSMTdHFZaTOoBdegwiqG6L%2Fe9qQtSWMYFIXP1rAyR%2Bp5hM2EDBjd%2FbaUeSbPIovYXdAe7hKoZ2QKCp5CW4ZjGictYPvNow%2FROOV7Y48FQLU6xKMucrETMh2YWyDs7MHXw3Dk&X-Amz-Signature=2a2c1a0e7c042c77ba5810e72ec8ecc79f38fc9e1f2e79b2b3cdcdbd24ffb1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKH7FWN%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAncIa2lec4R%2FMvNuweWlStm6GCnW9DRZy2eFXUNP6FLAiEApu9AQ36SvjcaW3eemwnziH66dVOEwpDvvbvTUH9kmrwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGcp8rVZ%2BesQlk3S9CrcA6MGS0Zrh4P27BWeu5dyYKIrbKoJSQx8LfCRRqYlJ21PXmNRxfat0jnQ6VJm%2Bk%2BKKn%2BdY3YNMDdeju0u4eAR871eaB7v9dRb23N4WXsWTNCcwIye4X4%2FNvZz5DXclP4PDgz9C93tedyo2Pliz8vPwQ01ADWfFBhbLQpPE5mYHG2WniYSn2nFiN9BpkWRAtehW6X%2BzCXX2f8%2FN1c%2BpMUlnpcjzGaq%2FjVkK%2F92AF4nyqB2IhqTTdV1Z3RJhuaGsYNWgFUGLtOL2tgh80k1H6E1MS00AxbOkxRENwuVtrV11bjYvIYHRpiAhiUGt2dqBaUuoXKUBDDYifd3zX0bKlekQ0gGmdQSc7SZ944%2FgAgrTFpTkcYhp1J5jgsQMqkQUwRl5QWTGDVHHaULF9QNwSoUh6GuZvRAD3CL6fybSRrEnQrYs60H7hUM4yXEqcBShOvUlDGYKPBrOn1GqILigtTz1XrKvQ5xOP9Z5msAKLqDJueeAohkydfEbZw%2FhMrH6V3jpo2nN2JZmjRqJcmAdHiK8gBh58iXi0i6PkaNzg3tWwbXXNCh8jmmjowQxQVd2sYda7IFahyd4IcaU5ILDyasGBQZgbqNFEIi%2FGmVyp3uRB8A79enWsci6ZCOB0RmMM3x7r0GOqUBqFiJCzZj9SxHWOnEN%2BNhU3rgTZf6JVn9qaBkwV6cCG9NkHjgRoZX5UU376zWNHYHLaM5a3kV7XNnWRn%2FtLmduAyIfTdX4XBY3OiCh2%2B7mo9gyTmlXl6T3UNstQwWttHcjfJe6FTruTT3C86lx4O8wkpfIiAlr%2F%2FveCb0t2AJWuE3L%2FqmvsLttRqKVPrK1eQliymYpiTJi6YxyGJ3M0I%2F48WKmUfH&X-Amz-Signature=06a104f0a5d2f47355808863984bf0706dfa5b7a6f09323abf64b0444d41382d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
