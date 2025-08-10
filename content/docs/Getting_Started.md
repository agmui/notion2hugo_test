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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRTZCCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUUEMl2flUtVbS8QXv%2BYAHqJ9wUlfv2Bq2KpeBIYYCAiBuaxYmX%2BJ96T64KIYxvpNZYUak5VWV2ChUaZGhxqMGUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PZ9COtB2sDE8pcxKtwDwVea9X69iZgIzZK%2BN%2FDKd0%2BwhIZO4FaULdTjkulgR3Q80ceypRhGrfxyAVrGG1Vvna2f%2BVMgNiuMZef6D2jpRQ7la8PxCOPHtZZSSzEJVzFwzh%2F%2FeQkKS6KCq4EctCDRlfxRmOPBDKc5v2mhnWx468oG2VvHucj1zUa%2BQhz2mMJ%2B39Zf9gl9Jd3IgE1V3NQhBglAwsnMWS39D2wlV2EDQJagSXS%2BMdHm6IBTth8CK%2FE6iddgIR2nvIiVlEKIzZtETf7WFRFMsS3izwYa0lpO2ZdzCgfRrMW2U%2BsdliMF%2FEnRJ6Hq0SzGdT%2BNN0AMp2%2FImFv6wzyOd0EnTW%2B3S%2BllF5r43%2FMvOTANSj47S4IHKL80PPESEJ37c%2BfrhCHf1Ki0CIk9XSPFCGhihDyb58E6l9U3M8Ao7TOdMONyAsaJoHXui1SOs793HNXb%2F7xv7R%2BJa53UDdWLuhabYr8a8bo%2BLLLyIh1Fbe%2Fl2G9f5X862QbXlg8VzLRGFzq9txQ8z5wLmLPHZcGp7WIIlQgwSVRNBs62EIq2WBgMOd2FBAX9OFyvxZl0ihDv6cQ4dDfKGL3qvnKUXQui19Rj8QwMXpQvV42lL%2F3wSh0%2BCqP9mtwudq5b%2Bc6IBNOneSIl6vMw4b7ixAY6pgGFNr0CfoVbHPnEkRbIWukybmEYXimuwHOhrY3Dv%2BYQga1cDLkddvBmNDE%2FOgHuF0Y8wSbQ4bE5w9PrYomvfQeX1YYdmJpqHO4OeyOwjnO5rWKEHNYHipOAstYiI3derTQ22XNCLLw6JfnnAf3SXMf1gMyhOGsJ%2BiYdm19h%2FCrWVk5YQkCIrTfeL%2Fvp1v%2BwHfFu6yc04QEwnooP%2BQX6ReTZHIVDcktO&X-Amz-Signature=29001193feab987de4272f593e237a486cd0efa509d875557ce94f9d3a3f59a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRTZCCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUUEMl2flUtVbS8QXv%2BYAHqJ9wUlfv2Bq2KpeBIYYCAiBuaxYmX%2BJ96T64KIYxvpNZYUak5VWV2ChUaZGhxqMGUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PZ9COtB2sDE8pcxKtwDwVea9X69iZgIzZK%2BN%2FDKd0%2BwhIZO4FaULdTjkulgR3Q80ceypRhGrfxyAVrGG1Vvna2f%2BVMgNiuMZef6D2jpRQ7la8PxCOPHtZZSSzEJVzFwzh%2F%2FeQkKS6KCq4EctCDRlfxRmOPBDKc5v2mhnWx468oG2VvHucj1zUa%2BQhz2mMJ%2B39Zf9gl9Jd3IgE1V3NQhBglAwsnMWS39D2wlV2EDQJagSXS%2BMdHm6IBTth8CK%2FE6iddgIR2nvIiVlEKIzZtETf7WFRFMsS3izwYa0lpO2ZdzCgfRrMW2U%2BsdliMF%2FEnRJ6Hq0SzGdT%2BNN0AMp2%2FImFv6wzyOd0EnTW%2B3S%2BllF5r43%2FMvOTANSj47S4IHKL80PPESEJ37c%2BfrhCHf1Ki0CIk9XSPFCGhihDyb58E6l9U3M8Ao7TOdMONyAsaJoHXui1SOs793HNXb%2F7xv7R%2BJa53UDdWLuhabYr8a8bo%2BLLLyIh1Fbe%2Fl2G9f5X862QbXlg8VzLRGFzq9txQ8z5wLmLPHZcGp7WIIlQgwSVRNBs62EIq2WBgMOd2FBAX9OFyvxZl0ihDv6cQ4dDfKGL3qvnKUXQui19Rj8QwMXpQvV42lL%2F3wSh0%2BCqP9mtwudq5b%2Bc6IBNOneSIl6vMw4b7ixAY6pgGFNr0CfoVbHPnEkRbIWukybmEYXimuwHOhrY3Dv%2BYQga1cDLkddvBmNDE%2FOgHuF0Y8wSbQ4bE5w9PrYomvfQeX1YYdmJpqHO4OeyOwjnO5rWKEHNYHipOAstYiI3derTQ22XNCLLw6JfnnAf3SXMf1gMyhOGsJ%2BiYdm19h%2FCrWVk5YQkCIrTfeL%2Fvp1v%2BwHfFu6yc04QEwnooP%2BQX6ReTZHIVDcktO&X-Amz-Signature=723ff879ce2656bcc92c260610ef477ca0075561ff52ebb01a37a2c6d880da89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRTZCCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUUEMl2flUtVbS8QXv%2BYAHqJ9wUlfv2Bq2KpeBIYYCAiBuaxYmX%2BJ96T64KIYxvpNZYUak5VWV2ChUaZGhxqMGUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PZ9COtB2sDE8pcxKtwDwVea9X69iZgIzZK%2BN%2FDKd0%2BwhIZO4FaULdTjkulgR3Q80ceypRhGrfxyAVrGG1Vvna2f%2BVMgNiuMZef6D2jpRQ7la8PxCOPHtZZSSzEJVzFwzh%2F%2FeQkKS6KCq4EctCDRlfxRmOPBDKc5v2mhnWx468oG2VvHucj1zUa%2BQhz2mMJ%2B39Zf9gl9Jd3IgE1V3NQhBglAwsnMWS39D2wlV2EDQJagSXS%2BMdHm6IBTth8CK%2FE6iddgIR2nvIiVlEKIzZtETf7WFRFMsS3izwYa0lpO2ZdzCgfRrMW2U%2BsdliMF%2FEnRJ6Hq0SzGdT%2BNN0AMp2%2FImFv6wzyOd0EnTW%2B3S%2BllF5r43%2FMvOTANSj47S4IHKL80PPESEJ37c%2BfrhCHf1Ki0CIk9XSPFCGhihDyb58E6l9U3M8Ao7TOdMONyAsaJoHXui1SOs793HNXb%2F7xv7R%2BJa53UDdWLuhabYr8a8bo%2BLLLyIh1Fbe%2Fl2G9f5X862QbXlg8VzLRGFzq9txQ8z5wLmLPHZcGp7WIIlQgwSVRNBs62EIq2WBgMOd2FBAX9OFyvxZl0ihDv6cQ4dDfKGL3qvnKUXQui19Rj8QwMXpQvV42lL%2F3wSh0%2BCqP9mtwudq5b%2Bc6IBNOneSIl6vMw4b7ixAY6pgGFNr0CfoVbHPnEkRbIWukybmEYXimuwHOhrY3Dv%2BYQga1cDLkddvBmNDE%2FOgHuF0Y8wSbQ4bE5w9PrYomvfQeX1YYdmJpqHO4OeyOwjnO5rWKEHNYHipOAstYiI3derTQ22XNCLLw6JfnnAf3SXMf1gMyhOGsJ%2BiYdm19h%2FCrWVk5YQkCIrTfeL%2Fvp1v%2BwHfFu6yc04QEwnooP%2BQX6ReTZHIVDcktO&X-Amz-Signature=ebc16d06ec2ce99619f07e601e01c1c95caf22e96d64af56d7355b2efd800ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CU57VA4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8EULuxKwCf94Gcx8mYnmBfLCPhHwJKB2u3a%2FsZjJ6AgIhAPUiMuBkUc4F4eCDn9Tg6LBnUT5m2RvU3WBFFuvObqYFKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbcDnw%2BnPRoFS%2FuHsq3ANMfox%2B%2B4NiB%2FzgtJGJEaGDasIVknkWX%2FEg62UG7kbPakpUgXizDqzQNWuRT6xDsi9uYkLFBe6DlSKVeagv%2Fn3p5sAlPiMAy2xYSOi0hbdMyokJ0UeRHdTcPj0QFWaTQOAijIpGhnmQB5qSj5a4fdJ6qnHFeKrfY%2FF2gg9uOJp9YDKPlhh8P9kaR%2BD6TjtKZRUpe6tZ%2F6q6qJhIiK75JteLOxAauRNbYCm9E8Xu9EIl4gt5obS20R%2Bn2VqzzksQUkWOxCeAUTXolX5ntOlFEthIHr9KFpypC2gBfd1g87ozvgLfykxBhnIqmwcB24eqWBJHDZ88Ue7NLkY36yczokFg%2F5xAg8HyFYHgx8B7F9wDzWP%2BTMAx7paL0ZGtWyrXAQ4wptUY3UCYXx3xc0yshTUtgRKAna9v2KupWzX9Vfguf4FXzFHRBXy6uW3got9s%2B64WQ1A2dkqM6ZSYR7aHsgzVR4aTsrmoXO1zzXXs6lXd3Z20ysVD5CjRay6z%2F%2FrxriIif76qEqLzEA73oi5KXjqi0lw6AV0FCrnVfdqjUdxALP3JXqIZkGSkL6v7xwe8rRG5P5z%2FxFAvstkByv9Kc%2BYpCOKL11R3ODIwzKjW7%2FpxgCdWz41HtdQqKrP9iDCWv%2BLEBjqkAYsn3etuR3Kq%2FlpP%2F6W4Mp4GhprH4y8E2CFfmP%2BswJrAz9FRMwRtKZ5ITxQDYFMSatGsrn1l06SWOSC56Bd40Ltf0duSvAVIL8YMazdTgD8bWOyHzCf315fBFB2smQm209kjUmcWlTev7GlFtCeLYg03ch1wh4%2B29h25bMQu0dmHoOxifbb8Z3zBbAfI0hSusQrFGkjMiJIKwKnPjC1xsUPAffeB&X-Amz-Signature=5db280441930c121d25be38907177a047587cddc29c75555a279a012d4a3047f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEUXVDPY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIkySwptLE6swVlke6XrnPtk%2Fm%2BaEQBidwoGTR1Wu%2FgIgZ77Y4RXaLBQTFP2xJzljzt4QrwEVHtKX0vIQKO5WBogqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0jZnRng4xReWyFOCrcAzooru70h9RrWd0cXsd0kp%2FTHy%2F4YQY1F%2BoFGKhUj4jG0qAjDsbFegfP1ttrIiEyeFD2wOw0oHUabbJpQgdV1%2FjyxITsN8tJ9wJ1xkb6ZpeI08rIkS%2F0XHZunOcOxWjXWWZywhNchxkICkCDi%2Fv7Ke%2BRBVXJ0a%2Fvf2neg0Pwg%2FzfXvtPd2dHbdn7L%2Bv9ExFg8pBBVqwW8dozE6eY7hlTsvjg6l1if7guZpSA09xKlt40jk5wlAEQ2Cw5p1Cij0q4rhLJp1ap%2BwoeP4BbpjS6G04DQPRupn%2FyIahi1JTXsHH517x3Lj1ypJPnyNH5AEa5qLHo3R9cGhXq%2FiHRhJKvtcV83LHqG2ytg5GzK5Q0ZhdxnH2XfP8qowCsUR0FoD6dMpe2humpEEN%2FKuJEeoi62gAGuZl0wr6vjnzCHjvuBQAe%2Bn6P1Cn0CaKiMXVs2%2BkLMFfm1D6jO2wNWEAQzH%2FtpD0RDlc9esGXdfnyTA3WwfsdMmaQ0K2AVdzt4Iz9hERIX3qkc7AaOkHnITF6FgkE4aaqKI1LWanXluRwqSVKeSkKqscDJPB4j%2BS8Vk5sI%2FTFKwjjGK0QwYs%2FfDRq2UYymQXLIildDAhTZfYGnvw75Uq6EFFg6r355lO45PvlMMO%2F4sQGOqUB9nPyeU8Jg1oIRyo5GjXq6GuFAmZiDBhUs9pn%2FM0e9UZDS1eoftmuDtX6fb%2Fk8QzNgfM2VQIFXiiaucOILjTF6epMmao9%2BH%2BuY%2BofsOPhwvUgQm6OK8NUndtwN4LkD6XBZfTjw%2B8Tfer6oVd6DLl3WcQ0zoNt2xj3%2BqvraNGjIx7K7zAE5bhrRXVjRg1m0Cm019lDwPWFzSmTyKOUThf%2FBtnUntLS&X-Amz-Signature=5f729d218439a67cda0b0622eb402419b7674f86ee039e8d84fbc60d34e89300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRTZCCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUUEMl2flUtVbS8QXv%2BYAHqJ9wUlfv2Bq2KpeBIYYCAiBuaxYmX%2BJ96T64KIYxvpNZYUak5VWV2ChUaZGhxqMGUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PZ9COtB2sDE8pcxKtwDwVea9X69iZgIzZK%2BN%2FDKd0%2BwhIZO4FaULdTjkulgR3Q80ceypRhGrfxyAVrGG1Vvna2f%2BVMgNiuMZef6D2jpRQ7la8PxCOPHtZZSSzEJVzFwzh%2F%2FeQkKS6KCq4EctCDRlfxRmOPBDKc5v2mhnWx468oG2VvHucj1zUa%2BQhz2mMJ%2B39Zf9gl9Jd3IgE1V3NQhBglAwsnMWS39D2wlV2EDQJagSXS%2BMdHm6IBTth8CK%2FE6iddgIR2nvIiVlEKIzZtETf7WFRFMsS3izwYa0lpO2ZdzCgfRrMW2U%2BsdliMF%2FEnRJ6Hq0SzGdT%2BNN0AMp2%2FImFv6wzyOd0EnTW%2B3S%2BllF5r43%2FMvOTANSj47S4IHKL80PPESEJ37c%2BfrhCHf1Ki0CIk9XSPFCGhihDyb58E6l9U3M8Ao7TOdMONyAsaJoHXui1SOs793HNXb%2F7xv7R%2BJa53UDdWLuhabYr8a8bo%2BLLLyIh1Fbe%2Fl2G9f5X862QbXlg8VzLRGFzq9txQ8z5wLmLPHZcGp7WIIlQgwSVRNBs62EIq2WBgMOd2FBAX9OFyvxZl0ihDv6cQ4dDfKGL3qvnKUXQui19Rj8QwMXpQvV42lL%2F3wSh0%2BCqP9mtwudq5b%2Bc6IBNOneSIl6vMw4b7ixAY6pgGFNr0CfoVbHPnEkRbIWukybmEYXimuwHOhrY3Dv%2BYQga1cDLkddvBmNDE%2FOgHuF0Y8wSbQ4bE5w9PrYomvfQeX1YYdmJpqHO4OeyOwjnO5rWKEHNYHipOAstYiI3derTQ22XNCLLw6JfnnAf3SXMf1gMyhOGsJ%2BiYdm19h%2FCrWVk5YQkCIrTfeL%2Fvp1v%2BwHfFu6yc04QEwnooP%2BQX6ReTZHIVDcktO&X-Amz-Signature=424190139b0c9bd68765622fd9c19bd462d87468e2d59bd9c649438576c992f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
