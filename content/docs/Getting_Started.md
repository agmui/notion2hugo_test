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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVO4D7WM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDa4z%2BlHazmp7tmK2LCIjMUMGapkuUAf0pBSkvSAfEXAIhAORQEpmboQSfhua2cnWsgwCrpwVHhMVbG8i2rPACxO2DKv8DCDEQABoMNjM3NDIzMTgzODA1IgzqHH4cll7GM96DQa4q3APfJJ8OMq4sZgCDUGwq75PfyP2WadEioZ2q4H9jYkg0DSuPDFL1DvWTWnUNGdUWkvqWLHkZjp7FpO6NZHgvHvuAIyahm6LGMyLzn4o3ip5ZhWKoeTz3Ge%2FKlJROHd1FW7HZkMZKA6H4ab6ydc%2B2WYM5M2eOeKKzTSrFWcGF3ke1bNLUo9tYtsaHFM8bi8PkXpFRepXQl9YdF8bXkqOIiabXAdyQGe48PBidVNdSUkO2pnUOl9oO7%2Fqq6UKYDnEsCMB9N8lPeEkmk2I5vtU0T78V17vzfB23hY7gMXA%2BUk6XbfPqALo99J40i1dz1i7MLNv0%2FDbYYjKzoR0oal5b3hlT9%2F9gRcHqDUrBV3XSCBCSjTXjIraRhDLTtwFqbOv8oiyaDth4VPF79FYUCbrzT74kluwTKqhkWC3BcaTnLcSF1plMInR8tsoGL%2Flb2vrqrn6VewdICBiX7vmmT3DI8eMX9Eij9T88Pn2%2B5l02ZVS270gWLobbjNwMz8mac9Ilfc%2FUGUVevIgvBQEqbrWLmjjS%2BgyMR5BIIc6SXUg7eL5mC%2BGbcYSpv2rLwXaCltkW9m8CLmHmec3q%2FTQmCUgGzXXUGDovv2YoQisQRunEZzOCZq9XHn8dcWe8c0k5bjDYkOvCBjqkAe3Ln5D0MJoheqh4Ek9%2FhY%2FlWPpUlRZkmTHfSEZFuTA%2BPz5mrUhCMIHUNAG0A8xDw%2F3jN9tkTY%2ByoxKy8prp3vhyQ0fKt4UrFWa3G%2F99iK%2Bv620I%2F5SjF%2FeVV2cN%2FrU7Nh%2FKHIEZ0wy5eDuWbMsPL5CHG5qNzE0YJN5eEfs3ggz1KhhIpWsW%2F%2B8vFIn7tEq6DJoJV9R1I9jgs7Yno6PKdRidmf5G&X-Amz-Signature=a7795359c6f72aa523f97a91a256018bac205b649abbdb916d84c284ef17326c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVO4D7WM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDa4z%2BlHazmp7tmK2LCIjMUMGapkuUAf0pBSkvSAfEXAIhAORQEpmboQSfhua2cnWsgwCrpwVHhMVbG8i2rPACxO2DKv8DCDEQABoMNjM3NDIzMTgzODA1IgzqHH4cll7GM96DQa4q3APfJJ8OMq4sZgCDUGwq75PfyP2WadEioZ2q4H9jYkg0DSuPDFL1DvWTWnUNGdUWkvqWLHkZjp7FpO6NZHgvHvuAIyahm6LGMyLzn4o3ip5ZhWKoeTz3Ge%2FKlJROHd1FW7HZkMZKA6H4ab6ydc%2B2WYM5M2eOeKKzTSrFWcGF3ke1bNLUo9tYtsaHFM8bi8PkXpFRepXQl9YdF8bXkqOIiabXAdyQGe48PBidVNdSUkO2pnUOl9oO7%2Fqq6UKYDnEsCMB9N8lPeEkmk2I5vtU0T78V17vzfB23hY7gMXA%2BUk6XbfPqALo99J40i1dz1i7MLNv0%2FDbYYjKzoR0oal5b3hlT9%2F9gRcHqDUrBV3XSCBCSjTXjIraRhDLTtwFqbOv8oiyaDth4VPF79FYUCbrzT74kluwTKqhkWC3BcaTnLcSF1plMInR8tsoGL%2Flb2vrqrn6VewdICBiX7vmmT3DI8eMX9Eij9T88Pn2%2B5l02ZVS270gWLobbjNwMz8mac9Ilfc%2FUGUVevIgvBQEqbrWLmjjS%2BgyMR5BIIc6SXUg7eL5mC%2BGbcYSpv2rLwXaCltkW9m8CLmHmec3q%2FTQmCUgGzXXUGDovv2YoQisQRunEZzOCZq9XHn8dcWe8c0k5bjDYkOvCBjqkAe3Ln5D0MJoheqh4Ek9%2FhY%2FlWPpUlRZkmTHfSEZFuTA%2BPz5mrUhCMIHUNAG0A8xDw%2F3jN9tkTY%2ByoxKy8prp3vhyQ0fKt4UrFWa3G%2F99iK%2Bv620I%2F5SjF%2FeVV2cN%2FrU7Nh%2FKHIEZ0wy5eDuWbMsPL5CHG5qNzE0YJN5eEfs3ggz1KhhIpWsW%2F%2B8vFIn7tEq6DJoJV9R1I9jgs7Yno6PKdRidmf5G&X-Amz-Signature=0fa8e54ae9df593a13dbc8173d23bf12a54958e1b4d5a3f93ac29ca10fb1b0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVO4D7WM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDa4z%2BlHazmp7tmK2LCIjMUMGapkuUAf0pBSkvSAfEXAIhAORQEpmboQSfhua2cnWsgwCrpwVHhMVbG8i2rPACxO2DKv8DCDEQABoMNjM3NDIzMTgzODA1IgzqHH4cll7GM96DQa4q3APfJJ8OMq4sZgCDUGwq75PfyP2WadEioZ2q4H9jYkg0DSuPDFL1DvWTWnUNGdUWkvqWLHkZjp7FpO6NZHgvHvuAIyahm6LGMyLzn4o3ip5ZhWKoeTz3Ge%2FKlJROHd1FW7HZkMZKA6H4ab6ydc%2B2WYM5M2eOeKKzTSrFWcGF3ke1bNLUo9tYtsaHFM8bi8PkXpFRepXQl9YdF8bXkqOIiabXAdyQGe48PBidVNdSUkO2pnUOl9oO7%2Fqq6UKYDnEsCMB9N8lPeEkmk2I5vtU0T78V17vzfB23hY7gMXA%2BUk6XbfPqALo99J40i1dz1i7MLNv0%2FDbYYjKzoR0oal5b3hlT9%2F9gRcHqDUrBV3XSCBCSjTXjIraRhDLTtwFqbOv8oiyaDth4VPF79FYUCbrzT74kluwTKqhkWC3BcaTnLcSF1plMInR8tsoGL%2Flb2vrqrn6VewdICBiX7vmmT3DI8eMX9Eij9T88Pn2%2B5l02ZVS270gWLobbjNwMz8mac9Ilfc%2FUGUVevIgvBQEqbrWLmjjS%2BgyMR5BIIc6SXUg7eL5mC%2BGbcYSpv2rLwXaCltkW9m8CLmHmec3q%2FTQmCUgGzXXUGDovv2YoQisQRunEZzOCZq9XHn8dcWe8c0k5bjDYkOvCBjqkAe3Ln5D0MJoheqh4Ek9%2FhY%2FlWPpUlRZkmTHfSEZFuTA%2BPz5mrUhCMIHUNAG0A8xDw%2F3jN9tkTY%2ByoxKy8prp3vhyQ0fKt4UrFWa3G%2F99iK%2Bv620I%2F5SjF%2FeVV2cN%2FrU7Nh%2FKHIEZ0wy5eDuWbMsPL5CHG5qNzE0YJN5eEfs3ggz1KhhIpWsW%2F%2B8vFIn7tEq6DJoJV9R1I9jgs7Yno6PKdRidmf5G&X-Amz-Signature=6733b5b52014edfe64254b4515bba484e7b1de28f1de05a3c6f1220489270986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHK5AOD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGvPqZiMZm8fBjy%2FNLaUISxcwyrEDjYwBgofMeUWVjuIAiBhG0uLUfGyPwzKJlOvY37TMuRbIPT79rbE29Pws7HpEyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMdM8CEiyP5%2FwImIyJKtwDClEshM0V4QTpgsZQiZDZ%2BsYvpvsZBL0VuAY%2BaG1Kd7klzuDJ3n93mr8dkv5wbQzSZaXObJTmP0B2GAwaTN4QS%2BRnio%2BZ8Dz%2FIKxhikfZAIYTgj7R8jRDEbi63anX7OkkS6EV%2BAqrsuICC3yMIfksPFU3Y0pIPS%2FeJKpmcH6rNDsVRSJqnYuuVUG2MCmQCFpB4Kxmj4bttb7UYyp3SG2ZWUPBbIRNDDFsC5ynqoYucZAWJpHLEInBFdbP0Veij0jKLbHcA6LwYz%2BRE2DNOrHHY36WLqQj2IypRFqenCNXWG4UOmtHqdjxVDeZC%2FKQMaQ0Ov2pvWwSkoKtjegDOzvAmmKobxKOzrvf6450UWOT4a3tgxi%2FcplgyHjDtxTnSb1GXUxlo%2FntcI6qkEu4ijH%2BmRDiDwR5BEIsTNolrRChoBl2BUxRbGHPeGSaGt0in45IqcKz8MmV%2Frmc6Pp3QRHD2HhJZM7sfkVT0RrpFdVxbS26ZBirev0fwlVrNTTpKQCqIST0j5cV5ByWwQOsqyauuCLogk1AngVvHCuTWhVX1zfrpcV4R801cFDk4rW%2BX1TrApf27KJ%2BuUIVJGNkhFtnV7DDTum4fhOqsHeCG5p63e%2Be5LYmrmF56i7f9Isw3I%2FrwgY6pgERdR7Hj1fAt0f7bAXgLBLbkdbdMtxuMLbCAGyEF%2BYR%2ByR86491hLRwyuEOAUD31RoXAyWBajUtDCK2cbiR4enBiPi6KjKOmEd7e86FD0JoO3fDReWEkFhRxREOL%2Bv3hL8Gb2QbgUewrvMd8Qh0HeLYYgEl3lHZG6zWSpGuL0F5CgCpdHG2dsZfDnjNTuMeIgBaHLTnEFOMZcZN9t11UeSNVStWgrPV&X-Amz-Signature=db23e40a35717734e1a86eae56cd6c99ebf4ef5bc28cd0d34b8f6d26368d9e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOGW37N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD207qkoKBe3j7ADFc1GoxjxRFty9e84ds9ZdgjZvD5LAIhAJD13TYjiStKBHWRoaIbbeyNvZQ17uN5yfMkqNLnV3N%2BKv8DCDEQABoMNjM3NDIzMTgzODA1IgyYZLgo00HeID8asaoq3ANyUXXcUXgIsl7ZmAqpvhUaHaQgvhSKu60alWTZtYiByc44xQFM91CJIMxQEnQ3ZI03Xufjej85S2MSHS65%2FUBZNXCJynPRp%2BebzwWfATc9dXlQouG1Bmxk%2BKE5nhN7P0gxQ6B1w1yqS2HnuGfyxhs2NYmQCeNSfnTW%2BEnrKKe25wHTHOxY0f%2BXl1U5Y%2Btw%2BngdpXr8VbUh6dGZ1F8DCODsQ8IMKnJsg5WNi4%2BXhgpU%2FU2%2Ft0V4kLaLr7Gl5urHgUmgip4bBuu3sh6ZodGld6EZmCN6XF0pofwvMBKJ17SL9efUuTSA52WjuBAsL4eX7OlXDDp%2BELClxIa01kOiWyzvAEF09W7eETlho21%2F9B5QmRXFFCLL9y8W1iLKk5plOIjXrCUntg8Ug9TQGS3EDrrHnIOlnR%2Fw%2BR1T2R%2Fs%2BsmeugC20J3FvnwEHJ3lk5PBJizl73Ln4K3C1MGR80kKK88tnS6ajo5Hoq85Zh5boiV0bff4x6UZujAxF5nozZEa1ZEyhck67Un3qvRouIifqY9rTm%2FfuOfT0WIMlpTYLQRv2%2FSdAvr52VFLGGafmFZfjQHkvwL9vRGlsGnmjyFQYVdeCUZQQsCk6NYXLSWUw1Hliz3M3byslyJ1samkejC0kOvCBjqkAbxMF0%2BdzwYwhOSJgIiMOtazdwW5jvdwDp66qAMhpKgb7rjYKZEkHBSznaQpXjBjg9HHcg9Nos5WTJumHjMFS0UIzqlw77yzyprZ9yod%2FcdwnCwjTsrsiye8vyNKmuVtskudAb1wOUmWrKj0HPfin9tnENJmjWaH%2B0%2FS3z9NIBUzakSC%2Fje%2BvkoEJ6T6hJwSCCzvSRCTq2hz296OZvZJni0wsFhX&X-Amz-Signature=b860a203976541527adaa717355a6828971b04bd093dd97fe5feb621c6c64aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVO4D7WM%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDDa4z%2BlHazmp7tmK2LCIjMUMGapkuUAf0pBSkvSAfEXAIhAORQEpmboQSfhua2cnWsgwCrpwVHhMVbG8i2rPACxO2DKv8DCDEQABoMNjM3NDIzMTgzODA1IgzqHH4cll7GM96DQa4q3APfJJ8OMq4sZgCDUGwq75PfyP2WadEioZ2q4H9jYkg0DSuPDFL1DvWTWnUNGdUWkvqWLHkZjp7FpO6NZHgvHvuAIyahm6LGMyLzn4o3ip5ZhWKoeTz3Ge%2FKlJROHd1FW7HZkMZKA6H4ab6ydc%2B2WYM5M2eOeKKzTSrFWcGF3ke1bNLUo9tYtsaHFM8bi8PkXpFRepXQl9YdF8bXkqOIiabXAdyQGe48PBidVNdSUkO2pnUOl9oO7%2Fqq6UKYDnEsCMB9N8lPeEkmk2I5vtU0T78V17vzfB23hY7gMXA%2BUk6XbfPqALo99J40i1dz1i7MLNv0%2FDbYYjKzoR0oal5b3hlT9%2F9gRcHqDUrBV3XSCBCSjTXjIraRhDLTtwFqbOv8oiyaDth4VPF79FYUCbrzT74kluwTKqhkWC3BcaTnLcSF1plMInR8tsoGL%2Flb2vrqrn6VewdICBiX7vmmT3DI8eMX9Eij9T88Pn2%2B5l02ZVS270gWLobbjNwMz8mac9Ilfc%2FUGUVevIgvBQEqbrWLmjjS%2BgyMR5BIIc6SXUg7eL5mC%2BGbcYSpv2rLwXaCltkW9m8CLmHmec3q%2FTQmCUgGzXXUGDovv2YoQisQRunEZzOCZq9XHn8dcWe8c0k5bjDYkOvCBjqkAe3Ln5D0MJoheqh4Ek9%2FhY%2FlWPpUlRZkmTHfSEZFuTA%2BPz5mrUhCMIHUNAG0A8xDw%2F3jN9tkTY%2ByoxKy8prp3vhyQ0fKt4UrFWa3G%2F99iK%2Bv620I%2F5SjF%2FeVV2cN%2FrU7Nh%2FKHIEZ0wy5eDuWbMsPL5CHG5qNzE0YJN5eEfs3ggz1KhhIpWsW%2F%2B8vFIn7tEq6DJoJV9R1I9jgs7Yno6PKdRidmf5G&X-Amz-Signature=d5bed45cf3ee04f566ab1d87c8f89fa4efa396c344b12e87a0382c33c2faa4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
