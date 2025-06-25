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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQMFAKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDfSK1ovwcglvny9S10vODbLziG77KLBnCuh7e8W5qJ2wIgWSfRfXCstRoceg80%2ByJV2LQloyjs1fZs9Jntvk5WjQwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOHcvB7bIgA5B3iksyrcA5pHCGyZbzf3Hiff9AWln4fyRxBipgy15B%2B2yyAnVE8558kTnYtbTn2jK7M23Jht%2BBqhHV6Nn%2F1pS5LpXNtdsLngd9Oa1Xqu6qEYmq92c%2FytPmZiUiRo5yqaWfdaWmoXqRF984wseo2wcFj2SbGvowKWJqUDL9LhIvGfU4GEA%2FMkEsujc39yzf2lDDjsfdWb3oM%2FvXCB%2Bol8oyVFz0TX%2BvVLx8gtB%2Frc5wPYDmT2TVBsHMqAtZyMRL%2BCcnEOQf6imNMJkgOOsWQTInxFyKpXGGv1lNTh6B0%2B0hvYgL8jugRAErOZTVR3YR4RtMdL0br26g2wsPZ7dpVRcVee41VdiGUe1uXvXk38aqJFVRDa5EYyIPsyZEa3E7qHXS1EGbHUoiabllj%2BEoN%2FqmTioh0gwZbZ9C6Sdi8B387k7K0bH2OvZ49tt2xct3wz2P1LWMSRXAEeXgdQDyu4Y2EBtfVehfpgLFkim73QOpE5MTtoOUNACbePWJ2MkH%2B56kNvVx%2B6zD1%2FPJ5pNejkmOB%2B%2F72EGVDbHkUYD0sDb4lIrRIJ9VSxxZubW4kQNu00PIOlwZGYQNnDTcApja54%2Fd1MI3Uh4GGW5R1rlyPbgzzJB%2FsKTWOblxu99fGGOOHg3xm1MN%2Fv7MIGOqUBo0VIz6aVu2nyNnv1mmpqfTzDFcXYA6EAJT%2Fb3btNkmRqdnHk39huSpnlq9jBPivVcyyxfmIsMj%2B7H3nD%2FV1DUCSZATNTvjT8%2FSXs5C9Mj0nmhqMmqjPtA%2B12Te9h7YPHfxKOQYhFDEGE%2B5fdSRDKd9%2FlfTRGO%2B%2FzGJtRUOQmT1DBpL%2FCL0fMxgTkPNV%2BfxDOZhhCBKn0CPcZOLyIAD0XMFFVYJC8&X-Amz-Signature=07e851224dbbc76a6c2850775f0645f17f6b3d6ba96b1e24bd9127f5172c6dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQMFAKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDfSK1ovwcglvny9S10vODbLziG77KLBnCuh7e8W5qJ2wIgWSfRfXCstRoceg80%2ByJV2LQloyjs1fZs9Jntvk5WjQwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOHcvB7bIgA5B3iksyrcA5pHCGyZbzf3Hiff9AWln4fyRxBipgy15B%2B2yyAnVE8558kTnYtbTn2jK7M23Jht%2BBqhHV6Nn%2F1pS5LpXNtdsLngd9Oa1Xqu6qEYmq92c%2FytPmZiUiRo5yqaWfdaWmoXqRF984wseo2wcFj2SbGvowKWJqUDL9LhIvGfU4GEA%2FMkEsujc39yzf2lDDjsfdWb3oM%2FvXCB%2Bol8oyVFz0TX%2BvVLx8gtB%2Frc5wPYDmT2TVBsHMqAtZyMRL%2BCcnEOQf6imNMJkgOOsWQTInxFyKpXGGv1lNTh6B0%2B0hvYgL8jugRAErOZTVR3YR4RtMdL0br26g2wsPZ7dpVRcVee41VdiGUe1uXvXk38aqJFVRDa5EYyIPsyZEa3E7qHXS1EGbHUoiabllj%2BEoN%2FqmTioh0gwZbZ9C6Sdi8B387k7K0bH2OvZ49tt2xct3wz2P1LWMSRXAEeXgdQDyu4Y2EBtfVehfpgLFkim73QOpE5MTtoOUNACbePWJ2MkH%2B56kNvVx%2B6zD1%2FPJ5pNejkmOB%2B%2F72EGVDbHkUYD0sDb4lIrRIJ9VSxxZubW4kQNu00PIOlwZGYQNnDTcApja54%2Fd1MI3Uh4GGW5R1rlyPbgzzJB%2FsKTWOblxu99fGGOOHg3xm1MN%2Fv7MIGOqUBo0VIz6aVu2nyNnv1mmpqfTzDFcXYA6EAJT%2Fb3btNkmRqdnHk39huSpnlq9jBPivVcyyxfmIsMj%2B7H3nD%2FV1DUCSZATNTvjT8%2FSXs5C9Mj0nmhqMmqjPtA%2B12Te9h7YPHfxKOQYhFDEGE%2B5fdSRDKd9%2FlfTRGO%2B%2FzGJtRUOQmT1DBpL%2FCL0fMxgTkPNV%2BfxDOZhhCBKn0CPcZOLyIAD0XMFFVYJC8&X-Amz-Signature=ff9f903c59ac81040c4cddf15e75362ffadf1e87728dc9592d394b11b0788182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQMFAKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDfSK1ovwcglvny9S10vODbLziG77KLBnCuh7e8W5qJ2wIgWSfRfXCstRoceg80%2ByJV2LQloyjs1fZs9Jntvk5WjQwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOHcvB7bIgA5B3iksyrcA5pHCGyZbzf3Hiff9AWln4fyRxBipgy15B%2B2yyAnVE8558kTnYtbTn2jK7M23Jht%2BBqhHV6Nn%2F1pS5LpXNtdsLngd9Oa1Xqu6qEYmq92c%2FytPmZiUiRo5yqaWfdaWmoXqRF984wseo2wcFj2SbGvowKWJqUDL9LhIvGfU4GEA%2FMkEsujc39yzf2lDDjsfdWb3oM%2FvXCB%2Bol8oyVFz0TX%2BvVLx8gtB%2Frc5wPYDmT2TVBsHMqAtZyMRL%2BCcnEOQf6imNMJkgOOsWQTInxFyKpXGGv1lNTh6B0%2B0hvYgL8jugRAErOZTVR3YR4RtMdL0br26g2wsPZ7dpVRcVee41VdiGUe1uXvXk38aqJFVRDa5EYyIPsyZEa3E7qHXS1EGbHUoiabllj%2BEoN%2FqmTioh0gwZbZ9C6Sdi8B387k7K0bH2OvZ49tt2xct3wz2P1LWMSRXAEeXgdQDyu4Y2EBtfVehfpgLFkim73QOpE5MTtoOUNACbePWJ2MkH%2B56kNvVx%2B6zD1%2FPJ5pNejkmOB%2B%2F72EGVDbHkUYD0sDb4lIrRIJ9VSxxZubW4kQNu00PIOlwZGYQNnDTcApja54%2Fd1MI3Uh4GGW5R1rlyPbgzzJB%2FsKTWOblxu99fGGOOHg3xm1MN%2Fv7MIGOqUBo0VIz6aVu2nyNnv1mmpqfTzDFcXYA6EAJT%2Fb3btNkmRqdnHk39huSpnlq9jBPivVcyyxfmIsMj%2B7H3nD%2FV1DUCSZATNTvjT8%2FSXs5C9Mj0nmhqMmqjPtA%2B12Te9h7YPHfxKOQYhFDEGE%2B5fdSRDKd9%2FlfTRGO%2B%2FzGJtRUOQmT1DBpL%2FCL0fMxgTkPNV%2BfxDOZhhCBKn0CPcZOLyIAD0XMFFVYJC8&X-Amz-Signature=a6a4adada26050e56f506d3a49ecd468acc410ba73076f8a66ef4391a3e0d749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBKA4ZC%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEobnBtv0lIvDjLuKa7o2%2BMiVjhh%2BpfYcZh9U3AZLwjKAiEAiKHS7pG2Z%2BrK6K4M%2BLBNdXbliRhNoCLRjBmqoKT190sq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGcgnnZ2579djMaCBCrcA6jClfZ7OkdtZgxbTb%2Bak%2FksyLx9XG%2B5U0Q2UJnZdd%2B96AuTVIA2D6v9FFMEA%2BQSPZMfPabZ11Kpiiy2ID3KzfdqmhrJIcGyT5DpCt2mXUmbvxCmm9eQELuUa1H7oazyNscm5s5Wa3KVwQQor4LTTlFEdqTCTkoEsTyitTzhN0HEJVuoaEQ3Pd9000AcXJujyzu2J%2BCbYQJmv7xBcvCrGqlgv8cibfOu1fUvs8EmqWptHvEJwDy%2FvUado1HlkBNqddwe4pyjqCTDcmqFR7x3Dn7VDHdZBxQg029T6WI1c0umMDhPZg%2FLJbKkwzdTv3B3f0Qwcr0fZleo%2FMJ%2FXNlSY9KMjrLeuSjUZ0i6sEjgstudur%2FysheI8GNJWEqKj13EUT%2FFUpZkTUqhQJV3CgjPFV7rZSiTfxV0QJiCasgtbTHcFf0OAw5MoHkqneSL9V1cwuGrFR4AC6EnyLS0aj3y0nOE4f2IKJ49zNfiXRGcR2e7ztKZ%2BErpzF%2BnPX4JdfMSsPEx2PGyCvK515E6rSDES2Ssn9NgQ8uYqsd7gLmu1f7f%2FL4jnhLP5%2Fy286kl1M73O4NWEFNGs4dZAdqan8sFoPR3wE437yw47FwSv1BySns7bStBDzpkY%2FtOXg4XMN3v7MIGOqUBkJQAMxbCDvi05wODctCFfD3J%2BC7%2Bj%2FiipyuAmJXu4PjWhG7YEY8pSnfMnc5z7BeX93PgCNueFwkYJNa1Q3bwNItmDdWiWSatsE1gWW%2B9esnyrs72gIu3gnFIAoxhbuFEf13mjWen6OV5OB3ZBQb9%2Bq42%2Fs0QIaSDQcdVUpWmZD35axQZSM4PCYskM0aiwkSpgeabdGaxaUsfcCj4TKIIwmSafF7J&X-Amz-Signature=ef675e8f678cfbb199d4c98caf25a47c7f311476a2d204874939c5c50c536ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TARD2RLU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICpm%2BYoug4OUYHzCiIl3zNIYNt1NffQgiufrDZTU1V%2FEAiBvidsnjO%2BayOn7zZM7xgD8F2iMzMCnMs07GqDk53nViSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMMHKMWHlCMJO%2FlgZXKtwDYYt5l5qho%2B8%2FjID8Yd9JGWuEW1g6lIEv7O3x6L4yEYSsHtHoCXnnyUtcPgNoRCxnN3Qm%2FSILSiSXngclQXczVzwLk%2BAhfO9F1aLDLD81vHHIdxXQ%2FhgkqKu33UZigf9gjRMO%2FRPbk3qWt%2Fgs9j0I0zJCeVopbwYuw2USQmub6MSj8gaFObFJ8UvmQ868JunyVdhTsTqPKfqJqCcw0Fhx8WBOYtYjOxFB3MzNVhrC%2BFTTzIjNyLM19n%2FY5PYX%2FrXm1g7Z8kjvouw9m4NlL7NePiZUgyZ21Sy0KKutmyh1fpsDIwwx7hGlsc5VGLPcF%2BrtNsEuQbv0a1AJ1XnOkvznsolnLKxh1l85ghpBDMq5b8RMdqjIfp9lV89%2BOcNri9MTtmj6cmr%2FYNboGb%2BiKI64of35uXyl7LETFT94NFpe%2BKAw3uecnF2Wn6WVjad5%2FIB0N0T51YD5QzUyTzrO8Mx35%2FxmSmAuPhEmL8msYf4fKxnTJhWglEdjnlUgSvn0ykKNQhrFsS1NitFTF%2FMpPrP5sob453D8nrB649yPej0kPvdDlxXNEitI2iytSoJ%2BaZ34QXXXdjKVnQwm2iA2Fo4BRcAR9hiTQ8yt%2F4jZA9ERvs5AkOKYkM4KH70h%2BDAw2O7swgY6pgEbHM5PDTPZfGQ%2BDqvu3G4mgYZ1Nayuu3AT%2FFiGTmPlurrii4YEXIBF0br8Mo78okMpuGlCQFYZXySANRG8y8PxF4WF0UsJi6xsuuw1DNBqugul%2Fg7tRshQsPX9tEoUuhsBUJmXqJVOqQhlkqzmlYsqAQf9vi7IiKvOU0K1qKLTKuQldj8jFDmKcMHA70YEBMKKCLRkD96jeOPVYnfyOLDin3FJCvN%2B&X-Amz-Signature=66e8c30ea9a41a0d6893e6539ceefe03c4b1602bc837cc320ceda5daca75861e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYQMFAKQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDfSK1ovwcglvny9S10vODbLziG77KLBnCuh7e8W5qJ2wIgWSfRfXCstRoceg80%2ByJV2LQloyjs1fZs9Jntvk5WjQwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOHcvB7bIgA5B3iksyrcA5pHCGyZbzf3Hiff9AWln4fyRxBipgy15B%2B2yyAnVE8558kTnYtbTn2jK7M23Jht%2BBqhHV6Nn%2F1pS5LpXNtdsLngd9Oa1Xqu6qEYmq92c%2FytPmZiUiRo5yqaWfdaWmoXqRF984wseo2wcFj2SbGvowKWJqUDL9LhIvGfU4GEA%2FMkEsujc39yzf2lDDjsfdWb3oM%2FvXCB%2Bol8oyVFz0TX%2BvVLx8gtB%2Frc5wPYDmT2TVBsHMqAtZyMRL%2BCcnEOQf6imNMJkgOOsWQTInxFyKpXGGv1lNTh6B0%2B0hvYgL8jugRAErOZTVR3YR4RtMdL0br26g2wsPZ7dpVRcVee41VdiGUe1uXvXk38aqJFVRDa5EYyIPsyZEa3E7qHXS1EGbHUoiabllj%2BEoN%2FqmTioh0gwZbZ9C6Sdi8B387k7K0bH2OvZ49tt2xct3wz2P1LWMSRXAEeXgdQDyu4Y2EBtfVehfpgLFkim73QOpE5MTtoOUNACbePWJ2MkH%2B56kNvVx%2B6zD1%2FPJ5pNejkmOB%2B%2F72EGVDbHkUYD0sDb4lIrRIJ9VSxxZubW4kQNu00PIOlwZGYQNnDTcApja54%2Fd1MI3Uh4GGW5R1rlyPbgzzJB%2FsKTWOblxu99fGGOOHg3xm1MN%2Fv7MIGOqUBo0VIz6aVu2nyNnv1mmpqfTzDFcXYA6EAJT%2Fb3btNkmRqdnHk39huSpnlq9jBPivVcyyxfmIsMj%2B7H3nD%2FV1DUCSZATNTvjT8%2FSXs5C9Mj0nmhqMmqjPtA%2B12Te9h7YPHfxKOQYhFDEGE%2B5fdSRDKd9%2FlfTRGO%2B%2FzGJtRUOQmT1DBpL%2FCL0fMxgTkPNV%2BfxDOZhhCBKn0CPcZOLyIAD0XMFFVYJC8&X-Amz-Signature=6ec85949d5054af65afcc65a917b70d5251c10fbedd4d102e145777ee869149b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
