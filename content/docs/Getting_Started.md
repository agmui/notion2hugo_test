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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWZIV4S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYjlcFokb3u8qrmJMNyZJJF8Khl2duRF9xcRvp7pVm%2BQIgPgTzdcLLMfzAz5i2JISrgCkKolOLk%2B22EwLigFBTDocq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFKHJxJ%2F3mKfV15SJircA5wV5G9G5ZqZgcM8FB%2Fv7O4QfLZt4qqSKqO45ah0hyMKBvWsN0D5z1XYa6jhPAxCA1xINUJI3%2FBrj0a9RStCGwNX1TVzOzU5kJfZM1OmCyQ1QUzahqYaGaoqvso%2BbnMgN02G2visTDfr0TMfeT1%2FBXvq2aBTVxwWJ1olzcaEF%2BKDapolAtuaOFjKhMpi1xNh4Vu%2BP8PISqx1s7MzsHm9%2FLfYiHVtGLXvi05RwQjEagyyIleSf0nQ7SpbW%2BEFAnavyRkwkIINpeNEyatWA8IqNLygrtipzYmUfTHkduBMgm%2BYi1WBbrqmwxVZh4LaPChlH7IU9fjz6PtQ36pT080369FKbh7ubIYN5so4DLBFzNu8%2FGIXNwgx%2Bhx3U89r5PIXjAqeQme2qBQ68mXPP4oofb%2FUD4SHC5cX7Sxlt3iDK3xBEJVxh8kTKd1f%2BG1555EBNrujn56kLHItH7YaaWtNWw3Tgyl3KPHZyB3lqAY77%2Fxbhb%2BrbmY9yz3BSuS8LeLtEWbO07mnBoD0IIBBAQ4F4tghTPk4Sz%2Bx2U8wkWU9eOczdQav1xbXD5Dy1SNjB%2B5yxO8TO9nUjUo8Mli%2Ba%2FB5t2S4BBFFg7K9MdDiJrwMbzgdH39vf2vUwSlJYGChMKH58MQGOqUBBtz9qQuDPP4FC%2F1YpvP%2FM5%2FsaDJxJagew1F2AF5mC6eqVDBcqT5J%2BrNBdd4CzXV3ekb3aK546TPoRJc1%2FML881A8L2WNVB0jjLOGJpOi4bW7tN5n09MZ4lY0cGopHn%2FzZIESVmKkFjU4ugGhdB5aShkbq%2BSc5K9I8MDJrSvPZczf2yip4h3Fcn4XxeIWRGs0YM8h6gpLMJnWApe6gVMFEHxRbWUQ&X-Amz-Signature=ea5b29a3ed4bfc1409826deac924a72b5d25f592fc4040a5bcd45ccab37ae6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWZIV4S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYjlcFokb3u8qrmJMNyZJJF8Khl2duRF9xcRvp7pVm%2BQIgPgTzdcLLMfzAz5i2JISrgCkKolOLk%2B22EwLigFBTDocq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFKHJxJ%2F3mKfV15SJircA5wV5G9G5ZqZgcM8FB%2Fv7O4QfLZt4qqSKqO45ah0hyMKBvWsN0D5z1XYa6jhPAxCA1xINUJI3%2FBrj0a9RStCGwNX1TVzOzU5kJfZM1OmCyQ1QUzahqYaGaoqvso%2BbnMgN02G2visTDfr0TMfeT1%2FBXvq2aBTVxwWJ1olzcaEF%2BKDapolAtuaOFjKhMpi1xNh4Vu%2BP8PISqx1s7MzsHm9%2FLfYiHVtGLXvi05RwQjEagyyIleSf0nQ7SpbW%2BEFAnavyRkwkIINpeNEyatWA8IqNLygrtipzYmUfTHkduBMgm%2BYi1WBbrqmwxVZh4LaPChlH7IU9fjz6PtQ36pT080369FKbh7ubIYN5so4DLBFzNu8%2FGIXNwgx%2Bhx3U89r5PIXjAqeQme2qBQ68mXPP4oofb%2FUD4SHC5cX7Sxlt3iDK3xBEJVxh8kTKd1f%2BG1555EBNrujn56kLHItH7YaaWtNWw3Tgyl3KPHZyB3lqAY77%2Fxbhb%2BrbmY9yz3BSuS8LeLtEWbO07mnBoD0IIBBAQ4F4tghTPk4Sz%2Bx2U8wkWU9eOczdQav1xbXD5Dy1SNjB%2B5yxO8TO9nUjUo8Mli%2Ba%2FB5t2S4BBFFg7K9MdDiJrwMbzgdH39vf2vUwSlJYGChMKH58MQGOqUBBtz9qQuDPP4FC%2F1YpvP%2FM5%2FsaDJxJagew1F2AF5mC6eqVDBcqT5J%2BrNBdd4CzXV3ekb3aK546TPoRJc1%2FML881A8L2WNVB0jjLOGJpOi4bW7tN5n09MZ4lY0cGopHn%2FzZIESVmKkFjU4ugGhdB5aShkbq%2BSc5K9I8MDJrSvPZczf2yip4h3Fcn4XxeIWRGs0YM8h6gpLMJnWApe6gVMFEHxRbWUQ&X-Amz-Signature=c969ef60b56fcf7c06afe8edc279e8b6a7ea6bf5a73e5b05f67fac252d365b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWZIV4S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYjlcFokb3u8qrmJMNyZJJF8Khl2duRF9xcRvp7pVm%2BQIgPgTzdcLLMfzAz5i2JISrgCkKolOLk%2B22EwLigFBTDocq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFKHJxJ%2F3mKfV15SJircA5wV5G9G5ZqZgcM8FB%2Fv7O4QfLZt4qqSKqO45ah0hyMKBvWsN0D5z1XYa6jhPAxCA1xINUJI3%2FBrj0a9RStCGwNX1TVzOzU5kJfZM1OmCyQ1QUzahqYaGaoqvso%2BbnMgN02G2visTDfr0TMfeT1%2FBXvq2aBTVxwWJ1olzcaEF%2BKDapolAtuaOFjKhMpi1xNh4Vu%2BP8PISqx1s7MzsHm9%2FLfYiHVtGLXvi05RwQjEagyyIleSf0nQ7SpbW%2BEFAnavyRkwkIINpeNEyatWA8IqNLygrtipzYmUfTHkduBMgm%2BYi1WBbrqmwxVZh4LaPChlH7IU9fjz6PtQ36pT080369FKbh7ubIYN5so4DLBFzNu8%2FGIXNwgx%2Bhx3U89r5PIXjAqeQme2qBQ68mXPP4oofb%2FUD4SHC5cX7Sxlt3iDK3xBEJVxh8kTKd1f%2BG1555EBNrujn56kLHItH7YaaWtNWw3Tgyl3KPHZyB3lqAY77%2Fxbhb%2BrbmY9yz3BSuS8LeLtEWbO07mnBoD0IIBBAQ4F4tghTPk4Sz%2Bx2U8wkWU9eOczdQav1xbXD5Dy1SNjB%2B5yxO8TO9nUjUo8Mli%2Ba%2FB5t2S4BBFFg7K9MdDiJrwMbzgdH39vf2vUwSlJYGChMKH58MQGOqUBBtz9qQuDPP4FC%2F1YpvP%2FM5%2FsaDJxJagew1F2AF5mC6eqVDBcqT5J%2BrNBdd4CzXV3ekb3aK546TPoRJc1%2FML881A8L2WNVB0jjLOGJpOi4bW7tN5n09MZ4lY0cGopHn%2FzZIESVmKkFjU4ugGhdB5aShkbq%2BSc5K9I8MDJrSvPZczf2yip4h3Fcn4XxeIWRGs0YM8h6gpLMJnWApe6gVMFEHxRbWUQ&X-Amz-Signature=8e77afe5376f02d84a11ad373b635d10519147604810da343c96c05de3834732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3DVC4D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjMNbHsPVIikMDDW2ZM0FTPXDsIXoMwUuFu8NxtPetWgIgdvNzEZXTbPHq59qcmw1VE3xQr6zlIhgLnKvKGP%2F8O0gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBW%2FioZKVjry19AjhSrcAy3AXRodzz7y8CwSsk3fMoVx4ZHTOkp%2FGxDzrJwc1ioicOuVx9aq1z0QW%2BR1DDTDRkQZWw%2Fe85RnCJtPN7eaUFSR6WOqbM60w80hWu92SgZlOts0XwDd4tem337NYOIjCvnnk%2FduUm75qDTlIkuBciNVItu2lb5DSnZMjaEJV%2B9ck1mfSoBaSjiqGHclXf6ug08bvtdLiY1Ky1yIE7v8GjKXw1QDukkqP5Zl7iz51J0mSiBTWS3n3Gmt6pdmRr8jxyIB2YA1L5g%2FN2vOcA%2B90mPyiFW1CZGMY4J5FCKrmJw42Ge7PDwIe6hnTwQ8LGxAPG86x%2FYwL69KMWTFUfIAl79GoNv7RfpymJNrYKdZBSx09LIRD5aCetZTwpy%2Bms72g1FxFBHL7v65GeGsTokCWEPs2OoJBMeBi69YIw3gdfJpzR8uiQy1SkkOyLMF%2BpC0t0zhtfKKF3fQ1RLACUcb63U5LfbFNr9e6wh%2FeAuNuZwltSxC6JFPzPhUoQ%2BJNLO08gbzC6p90mbq4lZWtcs7NuHNfsanp9%2Fq4F95rgTY4%2FuMP%2BvxM4mdVy%2FPrNWs%2F5OBIbWdXq8c3H1cKQy7pqXIC7m%2FVFKKkjJiHtr1T7Vm%2F261CWZi7dQ%2F4JDkbuOoMIz48MQGOqUBtnvwKEooNX8FMuIy1F3hSJ9lK9z%2B10vDFcQVQf74JALfxE3%2BXW%2FMAxdeBPny1Z0vmNTFoXd97kpeCrIPz4JwUmG9Gkctpcon9kLaxwuTQAxyBkTzAxZ6PP1KCfOv%2FEelh%2BhyzBwZ2aUkbrxXBgMymeZFEgO5C5tUjweap9MczLPxg6eWbYqzFJA0Rfbuvb%2BJcA9t%2BpJ9c81r4pasNj73Z%2BTl3fKX&X-Amz-Signature=56d7954560bec832fe43541b3e7b4a39843b216cdcb911a8cd0d51733d71a421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73DEGTC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuxEI3uKOrFN8HVsG2OeLnYegEKHCL0%2FLhxg3aHmsV6QIhALqRITNy3PjKSbHSK8DLoSlSuJjDozcthNhVReJkaOnrKv8DCCgQABoMNjM3NDIzMTgzODA1Igx%2F1cVnFGAbF5GgpE0q3APlVRqw2kpq9R9jYSRJuFkKbljqxgRmLi4wJULU0cqB4Jqfgg3xawc4bcq24dh0sQpHQPlErDnyfr8RwdAAYtWbygqijW%2BoA53CLSQj%2FMpjVJxFmqHgifHW1RkDq5d49sHD9skT24cH8PgeFQzi1AE7zLnKFvzQCIyX9sGawuYRa%2FnUOFqs4iRunRgT%2FpmTodcLrncTx%2FSV88GXhHNbzS8RBeHw8xakHwWPNqfUnv%2F1LqH43G76fzCbXVFT8YoLlwe4QFKQ1%2B654r3YR0nOeRlEn9BWUjY76QOyyUV%2FY9AXb%2F%2F8Na6sOR72w4hFGcBdChAd1Bt6j1iTQcijRZTLRES2P572sOEYm4tmEh%2B0HIyCyBnzovqjQZqO4n5%2BHo76weA4iaIjYJB8srfHQf5oEki%2FPb%2Bfjl%2B8iwMz1GfTFyfOzQviHLQUu2e%2FdTVzi8TjMIl8FYe4X%2BpMGB%2FbcotEx6NMNQJuUWSPEjkj1eyFvUZXYWIxA1EMp02TSl3JV%2FlqTqXq06D%2FeD%2BIxDL1oMKy352dXMfEU7xEjsA9hAqPsh3MKYwyyk75oq5T%2BzL94K5Rvpjpp1cWU9XiEdlqZX3goQEczJhegZDG2ttLczmQ9N1CR%2BSDdYmbDy1s%2BmSAzTCs%2BfDEBjqkAWIdMcORuFD3C%2FCX3mrZcgdsuiq79PPLtoLHB3F8nwTArdvMtjLQgCo4HhbtaRqE8sicV0E3aICAfbpmfXt%2BeP43Dvm69BRGiOXGaD%2FcxDH256BR0mA0DOVHMQEzf1JC%2BxdGaYVFMg40Er0scyuWNWHCi1BN%2Bj5ARmGFJwm8h62PjyeqJwqHZAga0wLXdYRtHJhCWkdlcW2FCJ7gvoJGH5h8JRMC&X-Amz-Signature=3fc2cb31e87d44a912100adf1b2115ac8c60f75ef4a2ec6f8ca5bda6b41ee91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWZIV4S%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYjlcFokb3u8qrmJMNyZJJF8Khl2duRF9xcRvp7pVm%2BQIgPgTzdcLLMfzAz5i2JISrgCkKolOLk%2B22EwLigFBTDocq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFKHJxJ%2F3mKfV15SJircA5wV5G9G5ZqZgcM8FB%2Fv7O4QfLZt4qqSKqO45ah0hyMKBvWsN0D5z1XYa6jhPAxCA1xINUJI3%2FBrj0a9RStCGwNX1TVzOzU5kJfZM1OmCyQ1QUzahqYaGaoqvso%2BbnMgN02G2visTDfr0TMfeT1%2FBXvq2aBTVxwWJ1olzcaEF%2BKDapolAtuaOFjKhMpi1xNh4Vu%2BP8PISqx1s7MzsHm9%2FLfYiHVtGLXvi05RwQjEagyyIleSf0nQ7SpbW%2BEFAnavyRkwkIINpeNEyatWA8IqNLygrtipzYmUfTHkduBMgm%2BYi1WBbrqmwxVZh4LaPChlH7IU9fjz6PtQ36pT080369FKbh7ubIYN5so4DLBFzNu8%2FGIXNwgx%2Bhx3U89r5PIXjAqeQme2qBQ68mXPP4oofb%2FUD4SHC5cX7Sxlt3iDK3xBEJVxh8kTKd1f%2BG1555EBNrujn56kLHItH7YaaWtNWw3Tgyl3KPHZyB3lqAY77%2Fxbhb%2BrbmY9yz3BSuS8LeLtEWbO07mnBoD0IIBBAQ4F4tghTPk4Sz%2Bx2U8wkWU9eOczdQav1xbXD5Dy1SNjB%2B5yxO8TO9nUjUo8Mli%2Ba%2FB5t2S4BBFFg7K9MdDiJrwMbzgdH39vf2vUwSlJYGChMKH58MQGOqUBBtz9qQuDPP4FC%2F1YpvP%2FM5%2FsaDJxJagew1F2AF5mC6eqVDBcqT5J%2BrNBdd4CzXV3ekb3aK546TPoRJc1%2FML881A8L2WNVB0jjLOGJpOi4bW7tN5n09MZ4lY0cGopHn%2FzZIESVmKkFjU4ugGhdB5aShkbq%2BSc5K9I8MDJrSvPZczf2yip4h3Fcn4XxeIWRGs0YM8h6gpLMJnWApe6gVMFEHxRbWUQ&X-Amz-Signature=02468843311066075a135569aa4a214fb5500dc1d3ed6ba83a76b7ab4a84c35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
