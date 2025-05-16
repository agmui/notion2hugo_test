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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQHJE3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhNlBGIHNs0KTRBc1ZtiJ0HoD%2FsaEkuKcvKx6bvo3owIgGjU2F1zDHw68Od24U9gY%2FTZ0VIRrpGop1Krw2W%2Bayp0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPOyhGH3xUy3Qu0ECSrcAxwCOUhBtyQjCEmWyxjSxzqbBxzSBOiqgOAFzoG0A6TjvgM9I1IP5qN3Z0%2FwKv2R0JXDHPIO82%2F3QtueCb1d9itgc8caWGGkt94uNmTgap3jurKhhOS1laIL3YflB4PMr9xX4TkovYS27kLBiOvoje3%2Bpgat9jNjC6LmqHozOQJx3d8etyY%2FzYRKlTF%2B8nf%2BJpEuu51iIcGTIauqxdpB9Mhn6dp2oQhpgg9SfqjwWpeTsXZGDpv3hXbKNB%2BaOqXbGJ7Vtp6cAnFL5XQs3pDYTafBXmlQsHL%2B0BOziGLxhnHA4YAt%2BL%2FJTsKMuQMjRLJaGFFBRIi5R%2BIynUiJ98rapEJeYPc8D7WMeM1Tx0di2PHF%2BN6q2%2FMoHZe9cvgBjae6RSi8peplVwbcRMFNFf8yuORoyUnXmuE8OIjPVv3jZmAyw9Bmd7c4oEClOMadcu2zmhO4A4GpOH38KLB9QFULboVPshoXsXIcXvgQHzXngTZiRUyheJulifXngCDRIBd7HKJl6mVOTt5Qp0BT7VuXBRqvtbGfRx0hIcMN8UnJsvengZ4OjBfqRYtz0XQqq3MbDeCXKe4mJXGitQa3Xj%2BVvg3%2BV8Pm2UbGYd1KUmsYLroBtsHa41OTCQ6T%2FobGMMz1ncEGOqUBoImemZgQsb5iFnYZDBM5vXQitRcmLiKHADtYWpVZS%2Fi5KO9SyfcHaWlnleL3%2Ftbe3vBJLxVaqSHqOAMuisWKEbz7hbUNlN%2F0w1O991E1lDPXvNDlFrBgaHAdpypG5qdqs2VBXY8feugau35lZ%2FCMGSexfuO%2BlNlxvTsV5ChqdOL3GYxvuKsPl5wFfXZ9gL16ck8wacaRvDaF0LinVOPu3NL1iIVf&X-Amz-Signature=6bc634c4c730ab7047e48ca8edef6d593d6e0075c4bf09fdd611f7f6546e5b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQHJE3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhNlBGIHNs0KTRBc1ZtiJ0HoD%2FsaEkuKcvKx6bvo3owIgGjU2F1zDHw68Od24U9gY%2FTZ0VIRrpGop1Krw2W%2Bayp0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPOyhGH3xUy3Qu0ECSrcAxwCOUhBtyQjCEmWyxjSxzqbBxzSBOiqgOAFzoG0A6TjvgM9I1IP5qN3Z0%2FwKv2R0JXDHPIO82%2F3QtueCb1d9itgc8caWGGkt94uNmTgap3jurKhhOS1laIL3YflB4PMr9xX4TkovYS27kLBiOvoje3%2Bpgat9jNjC6LmqHozOQJx3d8etyY%2FzYRKlTF%2B8nf%2BJpEuu51iIcGTIauqxdpB9Mhn6dp2oQhpgg9SfqjwWpeTsXZGDpv3hXbKNB%2BaOqXbGJ7Vtp6cAnFL5XQs3pDYTafBXmlQsHL%2B0BOziGLxhnHA4YAt%2BL%2FJTsKMuQMjRLJaGFFBRIi5R%2BIynUiJ98rapEJeYPc8D7WMeM1Tx0di2PHF%2BN6q2%2FMoHZe9cvgBjae6RSi8peplVwbcRMFNFf8yuORoyUnXmuE8OIjPVv3jZmAyw9Bmd7c4oEClOMadcu2zmhO4A4GpOH38KLB9QFULboVPshoXsXIcXvgQHzXngTZiRUyheJulifXngCDRIBd7HKJl6mVOTt5Qp0BT7VuXBRqvtbGfRx0hIcMN8UnJsvengZ4OjBfqRYtz0XQqq3MbDeCXKe4mJXGitQa3Xj%2BVvg3%2BV8Pm2UbGYd1KUmsYLroBtsHa41OTCQ6T%2FobGMMz1ncEGOqUBoImemZgQsb5iFnYZDBM5vXQitRcmLiKHADtYWpVZS%2Fi5KO9SyfcHaWlnleL3%2Ftbe3vBJLxVaqSHqOAMuisWKEbz7hbUNlN%2F0w1O991E1lDPXvNDlFrBgaHAdpypG5qdqs2VBXY8feugau35lZ%2FCMGSexfuO%2BlNlxvTsV5ChqdOL3GYxvuKsPl5wFfXZ9gL16ck8wacaRvDaF0LinVOPu3NL1iIVf&X-Amz-Signature=87b414c900be7ccfe43b7498719cb87ec861d9689f2c6fce332da44066e33069&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQHJE3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhNlBGIHNs0KTRBc1ZtiJ0HoD%2FsaEkuKcvKx6bvo3owIgGjU2F1zDHw68Od24U9gY%2FTZ0VIRrpGop1Krw2W%2Bayp0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPOyhGH3xUy3Qu0ECSrcAxwCOUhBtyQjCEmWyxjSxzqbBxzSBOiqgOAFzoG0A6TjvgM9I1IP5qN3Z0%2FwKv2R0JXDHPIO82%2F3QtueCb1d9itgc8caWGGkt94uNmTgap3jurKhhOS1laIL3YflB4PMr9xX4TkovYS27kLBiOvoje3%2Bpgat9jNjC6LmqHozOQJx3d8etyY%2FzYRKlTF%2B8nf%2BJpEuu51iIcGTIauqxdpB9Mhn6dp2oQhpgg9SfqjwWpeTsXZGDpv3hXbKNB%2BaOqXbGJ7Vtp6cAnFL5XQs3pDYTafBXmlQsHL%2B0BOziGLxhnHA4YAt%2BL%2FJTsKMuQMjRLJaGFFBRIi5R%2BIynUiJ98rapEJeYPc8D7WMeM1Tx0di2PHF%2BN6q2%2FMoHZe9cvgBjae6RSi8peplVwbcRMFNFf8yuORoyUnXmuE8OIjPVv3jZmAyw9Bmd7c4oEClOMadcu2zmhO4A4GpOH38KLB9QFULboVPshoXsXIcXvgQHzXngTZiRUyheJulifXngCDRIBd7HKJl6mVOTt5Qp0BT7VuXBRqvtbGfRx0hIcMN8UnJsvengZ4OjBfqRYtz0XQqq3MbDeCXKe4mJXGitQa3Xj%2BVvg3%2BV8Pm2UbGYd1KUmsYLroBtsHa41OTCQ6T%2FobGMMz1ncEGOqUBoImemZgQsb5iFnYZDBM5vXQitRcmLiKHADtYWpVZS%2Fi5KO9SyfcHaWlnleL3%2Ftbe3vBJLxVaqSHqOAMuisWKEbz7hbUNlN%2F0w1O991E1lDPXvNDlFrBgaHAdpypG5qdqs2VBXY8feugau35lZ%2FCMGSexfuO%2BlNlxvTsV5ChqdOL3GYxvuKsPl5wFfXZ9gL16ck8wacaRvDaF0LinVOPu3NL1iIVf&X-Amz-Signature=f69770b8facfac28c7a68ca41be120b3bbd0221f3877c3698f7eb643b1db6222&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6PGMWY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvdtp%2FyKG2kqpoY3OhsqtZkymHU4H%2FD8qcMgAuEdEqQgIgYWrA2N%2B8abFBIlvCc8DVIBsY5ZXICe9fDrQTzY5vyWcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNBvIrEsceZL3Y88xCrcA6usp4lVSPPG8vkEDyek2DA09zxM6x1NxeQIxjrowfwU2hWHUGtxFA4nQT7YcnZI2fIwkhnkoM4ySg0rx6MLm%2FOQLWxh2WRRJ8DiZEZuESE0WzhYmP%2FDkDei587UncPiiW%2FAOynf6O6e0IRg9PeYopGdQPF%2B9l8OvcLb7Z4nhz6D0WSeN%2FyHwAzZ0PVdPuReB2v7hIBsH43YTKSagKxrLY3KggPB9lgqjp6iGWZwajxvphAak360TJIYbzL5RfuYInADWtP%2B658itDVK%2FmdtiojkksduGoSkDg1%2FfQAWpY%2F4LUmJRs7Zf%2B4ayavO5VH1eceUcwYEr0iFdYnVPLPMjD%2F%2F2xb1SvYXw%2B57sg8qKWBhc8SN6O2%2FmiApZMdJrOzrHqCVQk5LFwD31glyZvzMQW9z84dsRCuxMAvoPakqnT2%2FFcNzMPRjBVlonb8y9L8QCVj3QnLAxHGcRyloMtRp4rr5YVERSQBRyydJnJeGluMavwXAW%2FiEW4G80tT4I1qJgmiM7z4TB%2FsSN2Juh%2FwxBZS8GPlfqURTwt1pYVzNxwVcSREzpg9WliA3gS0%2FskJcihSrTxbGuLZcFVoc1jrWkrLxIhFQn2BdyExWiso55xbuUrYk%2BwcBRQinTR86MIn2ncEGOqUBsGQ4aYvb6AxmDXd4wCmgiUpT7A103TAigh1d3kbH6R%2Fa7lI0pu%2BV4vodAnQlA6PpyLheg63Z%2FH79mL56oNRWL%2FVCXxjRlBVjOL2TrTO4sxHaRCFtmlKm9iMQ5X%2B5QoDTBZQxjrLoEoF2PCUbCWQdUdKWSv1gc%2BFAD4JpCmjnqYdNYPrrelgqQhKLuaMd0vNtsLCuHaV5Zd9Bjadbygx0X4NJ%2F6BS&X-Amz-Signature=89f4645b6e27efbbbd008732f61a6365be5f97b15ac78ca1f1b6103226f7b3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ32OC7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLeaXP9KQTbJXvC%2BE1PAaD0wa3ZZ2wCmCHYzwFenlefAiAYu9ReoOq6O9gGnSe3axUTyN4mo3uuORwVAakxLlRZiyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMTesec5y9Zod4po6QKtwDD4AHRCnTI%2BSKhkn0TNK5JNL2ZEdJHxjWb8aebRrogUutM1AtEx8qiwjQZrlPekGXKGSuKl4CicrwluhUHeWYszQsLhsM8WvmcwPsOjV53RZ5YaUA%2FLg7OIZ8QJ%2F%2FUjHUlKDhupj9fLo8NhX9GNb6cRBuTwBC7fUI5AjDhNH%2BzAZbHqAXGKmYK7BGknXcCVIRfUMa5kUQww3FnbOUqvdUQqEZd768dEkSRzFPrnXMK5PUw2HaMDNZKQzIiH5oGJRJGMeUWHSecmDk9Qa%2Bsr4qJXlLmjW4NyOxniAG5fVGC3AHP0EZxJauku%2BwhyZ%2F9mf3MuA1u8SxkOy6dAsyROJ%2FbcND71jalTfBZ1%2BQ2BLE2NoXzIWDpumK%2BepcJt5hdL5UyciVyMgo4xzmSNGOPZ8QHp039GsIHMJyazEc2NPTbT2pAGUFDVQ%2BagsdoMZgiGG8XtF7JF%2BVfLEZo7XFLYcMixMe34MzeYn7%2Bjx14LbILDliv9uJs7A04rYJbCcERIDjeRdtsxBeJoraLAkphRgTzB0pESZFexUtsyKR18Mn7yeBJUA55wv%2B7GRhE1N%2B3bryemAJRr7ouiNlCKxvVJ4xMojfB%2FV%2F0s6WtvVw61H%2Bk28TppGgr0klVlpoRKQwrfadwQY6pgHp1iMsrhhtOVAa3mSrfcr%2FTevntTcec7JASFoXuiDIw9Qcpfv9pklAK8GfD6jya4ZTydfd6IrHlGwC%2B3bvsf196rjv09rnJQotnerGqFD0I3yalSoRCtmVFMvIALlPm8bF8SqAQdHQ54QCzY8MFEgu%2BcsGKNB0ZeYa1XYnQXbOyrL8n9dp9WCZPeaZ68kCnAJSKRsGFeKC8ZGlUZC8z51dIkmm4vog&X-Amz-Signature=4eb5785b434c7e0a88aea995346e7c195a27016525a8d2f446c9d0e2f5b4ff43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQHJE3V%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEhNlBGIHNs0KTRBc1ZtiJ0HoD%2FsaEkuKcvKx6bvo3owIgGjU2F1zDHw68Od24U9gY%2FTZ0VIRrpGop1Krw2W%2Bayp0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPOyhGH3xUy3Qu0ECSrcAxwCOUhBtyQjCEmWyxjSxzqbBxzSBOiqgOAFzoG0A6TjvgM9I1IP5qN3Z0%2FwKv2R0JXDHPIO82%2F3QtueCb1d9itgc8caWGGkt94uNmTgap3jurKhhOS1laIL3YflB4PMr9xX4TkovYS27kLBiOvoje3%2Bpgat9jNjC6LmqHozOQJx3d8etyY%2FzYRKlTF%2B8nf%2BJpEuu51iIcGTIauqxdpB9Mhn6dp2oQhpgg9SfqjwWpeTsXZGDpv3hXbKNB%2BaOqXbGJ7Vtp6cAnFL5XQs3pDYTafBXmlQsHL%2B0BOziGLxhnHA4YAt%2BL%2FJTsKMuQMjRLJaGFFBRIi5R%2BIynUiJ98rapEJeYPc8D7WMeM1Tx0di2PHF%2BN6q2%2FMoHZe9cvgBjae6RSi8peplVwbcRMFNFf8yuORoyUnXmuE8OIjPVv3jZmAyw9Bmd7c4oEClOMadcu2zmhO4A4GpOH38KLB9QFULboVPshoXsXIcXvgQHzXngTZiRUyheJulifXngCDRIBd7HKJl6mVOTt5Qp0BT7VuXBRqvtbGfRx0hIcMN8UnJsvengZ4OjBfqRYtz0XQqq3MbDeCXKe4mJXGitQa3Xj%2BVvg3%2BV8Pm2UbGYd1KUmsYLroBtsHa41OTCQ6T%2FobGMMz1ncEGOqUBoImemZgQsb5iFnYZDBM5vXQitRcmLiKHADtYWpVZS%2Fi5KO9SyfcHaWlnleL3%2Ftbe3vBJLxVaqSHqOAMuisWKEbz7hbUNlN%2F0w1O991E1lDPXvNDlFrBgaHAdpypG5qdqs2VBXY8feugau35lZ%2FCMGSexfuO%2BlNlxvTsV5ChqdOL3GYxvuKsPl5wFfXZ9gL16ck8wacaRvDaF0LinVOPu3NL1iIVf&X-Amz-Signature=0f04550cb06b00c82fdadc0ec89e85fc15e5cb9d8cbc99a23813ae3d66b6941c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
