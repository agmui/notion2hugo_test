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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFVNYXB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1bZWGTWnPicgA1kcUxpUal9dMgv5PgTZlrvw5mp1peAiEAx80MkV8ohwr8a7te3E3tx%2FrH067xAFF5MKpAWkOvMWQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBfCQthwmsDIWWluzircA15RW%2F45tttxL8kzExHod%2FVssA4%2Fath%2F%2FjyD9AxUbke1N5IwqMFH8YFGP132VSMu8CdIRnSYmIbGFFz4o0XY5DDEwcyUc1u1AVwLcHMqL1aEDMkRBZk7M2Dm1uqm8tByOHGHxgu%2FoqbU8jfz0x8jWPnnaBgtayo3t3uzni9ooJrXGfWM0vqAwKEY%2FmXsl2G%2FB9ZEXz4zwp8ghVSHi0NmSV8gstTppr9aDn%2Bw%2FRgvfD2d%2F0dIJWLud3miW%2FzbnzIGTnjW9H0kugq7nw5xuPDvqU%2Bd33TWmLJEjg8sbvzUgY6Tf0D6jymY4cSNC2eMsOVXuB0vN%2Fkae7t6wTxB9I2aWbFlPsMH3oyP%2FySVOwKoPVZby4PinCzGd54vyXQbK%2BAj%2F10bN3KONznF8FSlpZgl8w31h7iRs3JU0Em1lZ3ioGnXVT2UbaBnTmRM2MMA0nM7R3Gu0pCi7j9JZ%2BCS6%2FLI7DeJ5O4i0sXzdYBp7BNI8f6Pz3UXXIHngL4pd6q7wUEvHUJ2E3nyIyiBMlgNvagy4Q1mg1Wrn3J2WG06E2Md81nu1od4oJnQCkycdBFdI%2FQQUKAfBwU2pkuPrxHLUloVNwSLIA3aXV8m8Kta90M9tdvl4%2F6qfgmw0E1fF8dQMPzXwr8GOqUBU7KysY3MjpRbWVPAqoONfnRAYcNSioIWvVk5fADLipbfjHJtC%2BOOMWRgpqlyr%2BY5HeKLqho4uwJd%2B2pUwHS1SAZeugx%2FZ7ne3BB%2BX1u4o5KiU7eZxYxdTkT8hwgnQBF2uTdLUTCl2VQ95%2Bdpg922ikomtrUqzuUNcSuZd4wFDCtJApaVr%2BQbyCnTNAZ6nbBB5MwEJjyBbr9KmyVZBu%2FhUxvFyPJh&X-Amz-Signature=2b52c940e4d33b626f20a8df939f4c6d2449a630b71544796911177035c8ae3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFVNYXB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1bZWGTWnPicgA1kcUxpUal9dMgv5PgTZlrvw5mp1peAiEAx80MkV8ohwr8a7te3E3tx%2FrH067xAFF5MKpAWkOvMWQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBfCQthwmsDIWWluzircA15RW%2F45tttxL8kzExHod%2FVssA4%2Fath%2F%2FjyD9AxUbke1N5IwqMFH8YFGP132VSMu8CdIRnSYmIbGFFz4o0XY5DDEwcyUc1u1AVwLcHMqL1aEDMkRBZk7M2Dm1uqm8tByOHGHxgu%2FoqbU8jfz0x8jWPnnaBgtayo3t3uzni9ooJrXGfWM0vqAwKEY%2FmXsl2G%2FB9ZEXz4zwp8ghVSHi0NmSV8gstTppr9aDn%2Bw%2FRgvfD2d%2F0dIJWLud3miW%2FzbnzIGTnjW9H0kugq7nw5xuPDvqU%2Bd33TWmLJEjg8sbvzUgY6Tf0D6jymY4cSNC2eMsOVXuB0vN%2Fkae7t6wTxB9I2aWbFlPsMH3oyP%2FySVOwKoPVZby4PinCzGd54vyXQbK%2BAj%2F10bN3KONznF8FSlpZgl8w31h7iRs3JU0Em1lZ3ioGnXVT2UbaBnTmRM2MMA0nM7R3Gu0pCi7j9JZ%2BCS6%2FLI7DeJ5O4i0sXzdYBp7BNI8f6Pz3UXXIHngL4pd6q7wUEvHUJ2E3nyIyiBMlgNvagy4Q1mg1Wrn3J2WG06E2Md81nu1od4oJnQCkycdBFdI%2FQQUKAfBwU2pkuPrxHLUloVNwSLIA3aXV8m8Kta90M9tdvl4%2F6qfgmw0E1fF8dQMPzXwr8GOqUBU7KysY3MjpRbWVPAqoONfnRAYcNSioIWvVk5fADLipbfjHJtC%2BOOMWRgpqlyr%2BY5HeKLqho4uwJd%2B2pUwHS1SAZeugx%2FZ7ne3BB%2BX1u4o5KiU7eZxYxdTkT8hwgnQBF2uTdLUTCl2VQ95%2Bdpg922ikomtrUqzuUNcSuZd4wFDCtJApaVr%2BQbyCnTNAZ6nbBB5MwEJjyBbr9KmyVZBu%2FhUxvFyPJh&X-Amz-Signature=6fdc1f2b7e1b01f9ef0127a453c8757291315542272af35907152abfbd387f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMZNXSR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSNyWXIZgSy%2Fx86AWa3KQcMbusesHtzNBIAE2muOhrAAIhAMpfk0xCfyZXxrsLef%2FaInlgylDgLE176TlbHLF%2BpxgWKv8DCCUQABoMNjM3NDIzMTgzODA1IgxNz%2BnyGzagjxVLdNIq3AN%2Fi9b5LpmRvc0X9pGBCuTDqIViPbqqqq1naEhgewzyhE9o9F51Uq%2Bu10g2kvLZaa9T4%2B9gUYKJNxx0DjLx561inTSLTAZ6JvZijxrgX%2BoTaF8UjZS5OfQ0Ydf763BH%2FHzyWw17c87lIhI%2Bnlze%2F%2B6C%2F0%2FNTRuvw9BjScvjLG5iE1INMoCF5pAM4wPezbhrUEIzLn86ouF1eyNQ1fFQduAe1qNy9PKCUiXRstq%2BMhaWWXNwPKeT4u9kqROcQ4wFGklMyMMCJNqDAj%2F9vRAskLpelyD%2B9Cp9E9YofuKudQggWeVnV6221%2BQBKyCffEgwfuSx%2F%2FupHgxhBa3uJuvLJmfhnVhbwxcEpFcU8gDSdTV5H09wG64ryDOPFzxqzumxlFS7f1qkQmhXb0CAxzRI3Z%2FH7VsEOQ2iszrzBmEWO3fUc3HW2O%2B5YBqrE0xIGYcohAMGHTQlMrPY6i7Fp7bsuLN1FB9jDu0mLEp5noKSyx2umhWL97aIueB3sOpnR9PsXMiyGudY7BYLB3vcpgHGfu%2FYiFqtSyzmkFjyMn3LPgz3Xwc8GfvBP8bCq6LNL4ELUN8zXtrj5%2F4D33Es2xiLZ2gGkK82MPpb%2F5rp6eREt3iUnBnTjT%2BO5rQ%2BiWh6izD918K%2FBjqkAZnS6gyrEjyitSaOm5q%2B2S3BhbOTAeMJIiJUvdEF1%2BP%2B3Jtf43J4vpkWXpuyWPRwntWWQC7ZClItyqRmVchd9FGbA0TZ3BLgO1HQbRVRALqnJmzmf6jWelBOS4IWdFJtf0Y%2FzQqfKWD2INLY00Adf5%2FvfTGioho6CEU6FboEIl6%2BbXF3Hii4ykZoLP7EeIu%2F0EqYJ4Y2EoatsQgG9siFWGHhMA5o&X-Amz-Signature=852e65d61ea5a66d4035d75c39378faf42afd53e0d2bb8f6a374eded8225968d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HNCK2F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtfF9HEELUUn4lkjW3mZ2tsxbZ0VLSnjhW%2BOJPphoXlAiEA%2BLhWcuYO%2FDGg0KutxoW%2FMnkboAowV2cS5Mxzjw64Rk8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJPULiz%2F7Bo0Sb%2F2ASrcA1Nbb7cRVenoGcquC9wjQnznYGoUfI18rQmSBlP78fkPSXoCggxerv1Vra5%2BDXwzvOiH%2Bi%2FZtHE2AXWRf7gFKw6BweKPA%2FSnxZMINjpITn8nsMkswB7p6UEiuUeqLjq29jEXRCheAG1kSBlDmOIRuSg9KuHsUidFNIsBwt4DKijj0RZfKT5Mw3EbtcgH3173M5kgCJfiUYSHTUQX2RR56Pki3E2vbIsPUzk%2Bj8oJTv7ULKjoS9xWch4nV5nSDEfiNNGnSBoo6Rf4I8U2zoSkebb%2BC2v2rCmDp%2Bjmc4wXxTMOZPAlNqmtobrgb0MQF%2BDq2hfyeQU%2Fr4yLL4OceAnnGX35uhb7hir5vsA90JmpEzoepZwB%2FsPgWNCZpVWaUlVqPMo69qARkHgVEKtNyZqi36L4KblVzv782Cag6RVbla05a%2F2nROCP4MZX0ExoW0k5tubGnDDFrZBw%2BsQ5gajy0K0LtVX6HCSs82%2FWu%2FYN%2F6XkByv5AVFCB%2BIqjjDoOFZlfr8K1%2F7PfXnT61wjGEY839IA8yqgXEVKdUYe6HmE5etWCD0D8Hk20YfqYqfoKqTY9QMeB0DRtyWOLAkK4UL6V%2BPwgp37gfR89LnGL1gc4M4ozAJ8u5BPR36kOh2IMOjXwr8GOqUBDEXmY%2FFLMZN6%2FzPp%2FoWkOx45%2FbeV4l6X%2B98vWQM6FMsPCVg0jN353Scb3grIetkoUqnZ9jbQJZD0qQ5Sja0m9Sw7pOy18uluOeKatquk1Ao1jxOesl6t%2BzDKGCVs%2BNNRI3I46FWOAL46HFHht2Tb%2BDkO7%2Bu38fXK6QRHRQa9MAgRedSy%2BEXlI%2FsVCVzO3Zc0mJnEdzZRQR0qn0u142lkLdBca1pk&X-Amz-Signature=8282b1c911c451bf9d79dde50a6f075d92aed841904a8b5d0ee4b75170a11393&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFVNYXB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1bZWGTWnPicgA1kcUxpUal9dMgv5PgTZlrvw5mp1peAiEAx80MkV8ohwr8a7te3E3tx%2FrH067xAFF5MKpAWkOvMWQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBfCQthwmsDIWWluzircA15RW%2F45tttxL8kzExHod%2FVssA4%2Fath%2F%2FjyD9AxUbke1N5IwqMFH8YFGP132VSMu8CdIRnSYmIbGFFz4o0XY5DDEwcyUc1u1AVwLcHMqL1aEDMkRBZk7M2Dm1uqm8tByOHGHxgu%2FoqbU8jfz0x8jWPnnaBgtayo3t3uzni9ooJrXGfWM0vqAwKEY%2FmXsl2G%2FB9ZEXz4zwp8ghVSHi0NmSV8gstTppr9aDn%2Bw%2FRgvfD2d%2F0dIJWLud3miW%2FzbnzIGTnjW9H0kugq7nw5xuPDvqU%2Bd33TWmLJEjg8sbvzUgY6Tf0D6jymY4cSNC2eMsOVXuB0vN%2Fkae7t6wTxB9I2aWbFlPsMH3oyP%2FySVOwKoPVZby4PinCzGd54vyXQbK%2BAj%2F10bN3KONznF8FSlpZgl8w31h7iRs3JU0Em1lZ3ioGnXVT2UbaBnTmRM2MMA0nM7R3Gu0pCi7j9JZ%2BCS6%2FLI7DeJ5O4i0sXzdYBp7BNI8f6Pz3UXXIHngL4pd6q7wUEvHUJ2E3nyIyiBMlgNvagy4Q1mg1Wrn3J2WG06E2Md81nu1od4oJnQCkycdBFdI%2FQQUKAfBwU2pkuPrxHLUloVNwSLIA3aXV8m8Kta90M9tdvl4%2F6qfgmw0E1fF8dQMPzXwr8GOqUBU7KysY3MjpRbWVPAqoONfnRAYcNSioIWvVk5fADLipbfjHJtC%2BOOMWRgpqlyr%2BY5HeKLqho4uwJd%2B2pUwHS1SAZeugx%2FZ7ne3BB%2BX1u4o5KiU7eZxYxdTkT8hwgnQBF2uTdLUTCl2VQ95%2Bdpg922ikomtrUqzuUNcSuZd4wFDCtJApaVr%2BQbyCnTNAZ6nbBB5MwEJjyBbr9KmyVZBu%2FhUxvFyPJh&X-Amz-Signature=e3b8b88681fdf65e0701150615622284013761928d995765d5d82c7903f8fefb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
