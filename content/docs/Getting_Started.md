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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISLDARO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFob5OBx%2Fvq4hhln9xo4PbWA%2BZ8f2Gl85RB9UWYrd1OFAiEA%2B9yJyWOmjVD1wcLw%2BejlSeTyRiLHKOXQv%2BnlpCmWvyEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzvmDWVmnQ%2FhCnw4yrcAzVFBxV5uxLSiU7s%2FhPfSSaXRh2ygu9N1KzL2ZrspKrHNL6NNwN0EQIRmED0P28tzID5EGSvO9tI2x1JRVXOKbWqoveiuCvudAyhOABqfzHRWyYffKNadi%2BERVhhBaiSTRo5yFP7zhyFhMDVxj92e7qFYtrjJgfYH2CzHz3UpuVAA%2FVSkX8p97LSYgPsGw45h2FflJnsJZqZpavlN1%2Fkj%2Fu%2BCjzZLzY7qyv4Vv0adq1VrIQ0VTZ0FIinEA%2BYDeKOMIYggPULwn5it1r031lzeGjDvRqyJlMkH%2B20fRBrD5dl63k0w%2BL1pZFSIjHL8sfQYjXDHA9bEyQcRTGQOBjv7jhF3RvbFebelZzOGuDETogJDtqx0EiTDdw%2Fmw0VThOHaJ1Qk%2BOah%2B7wlxaxyrNTN2UxA5jeOk1WgBw6MjealJ%2Bs6Fjw9avUbUViRwO0rFwDFf1HdrIyDvl%2F2gYxDR1jt0mNLwp3qmEfoIZDz%2Fej9q16qenyY3OcY3aKy1NomuxvhaoQe8CblBkGab0X%2F2xb4TZIqjLLNVtOZV2w2vz6uCM6yY6V%2BahlJAv0u0yNo9RYd4murdzfWAmg%2BBvElEgregCm7hNlXh8UXck2ney0%2BUL%2FYO3wTi0Ty1YEyolnMMX%2FuMIGOqUBPz2wrAK10hDwzGIWt2slveG5BNWK5A62nTiEORO0x5giCAzJbZ%2FZOVSdt%2BCVcKFl%2BvS0efhXwDii28PUdqc8%2FhYYQ3PvrP8tkeRAl8Hkn40alC8I3O02nzQ8hAXIEgz9a3IG1hvF10Mec9770T88aJCkfMfptPCfGvU6IW0WIjsh7%2BnOuOfuhCN%2BDStSbpEAvsDjFTguAvGW4YRP62AFUZvgYc59&X-Amz-Signature=caa1f2563c19dc8580b048d75a057ca42fd642ab5d8a18cba46c60378cba8366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISLDARO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFob5OBx%2Fvq4hhln9xo4PbWA%2BZ8f2Gl85RB9UWYrd1OFAiEA%2B9yJyWOmjVD1wcLw%2BejlSeTyRiLHKOXQv%2BnlpCmWvyEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzvmDWVmnQ%2FhCnw4yrcAzVFBxV5uxLSiU7s%2FhPfSSaXRh2ygu9N1KzL2ZrspKrHNL6NNwN0EQIRmED0P28tzID5EGSvO9tI2x1JRVXOKbWqoveiuCvudAyhOABqfzHRWyYffKNadi%2BERVhhBaiSTRo5yFP7zhyFhMDVxj92e7qFYtrjJgfYH2CzHz3UpuVAA%2FVSkX8p97LSYgPsGw45h2FflJnsJZqZpavlN1%2Fkj%2Fu%2BCjzZLzY7qyv4Vv0adq1VrIQ0VTZ0FIinEA%2BYDeKOMIYggPULwn5it1r031lzeGjDvRqyJlMkH%2B20fRBrD5dl63k0w%2BL1pZFSIjHL8sfQYjXDHA9bEyQcRTGQOBjv7jhF3RvbFebelZzOGuDETogJDtqx0EiTDdw%2Fmw0VThOHaJ1Qk%2BOah%2B7wlxaxyrNTN2UxA5jeOk1WgBw6MjealJ%2Bs6Fjw9avUbUViRwO0rFwDFf1HdrIyDvl%2F2gYxDR1jt0mNLwp3qmEfoIZDz%2Fej9q16qenyY3OcY3aKy1NomuxvhaoQe8CblBkGab0X%2F2xb4TZIqjLLNVtOZV2w2vz6uCM6yY6V%2BahlJAv0u0yNo9RYd4murdzfWAmg%2BBvElEgregCm7hNlXh8UXck2ney0%2BUL%2FYO3wTi0Ty1YEyolnMMX%2FuMIGOqUBPz2wrAK10hDwzGIWt2slveG5BNWK5A62nTiEORO0x5giCAzJbZ%2FZOVSdt%2BCVcKFl%2BvS0efhXwDii28PUdqc8%2FhYYQ3PvrP8tkeRAl8Hkn40alC8I3O02nzQ8hAXIEgz9a3IG1hvF10Mec9770T88aJCkfMfptPCfGvU6IW0WIjsh7%2BnOuOfuhCN%2BDStSbpEAvsDjFTguAvGW4YRP62AFUZvgYc59&X-Amz-Signature=ec4080d1bb6dc2af7a60d73208710327e8ab49c4a9e013163c5c1bb86c1bc25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISLDARO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFob5OBx%2Fvq4hhln9xo4PbWA%2BZ8f2Gl85RB9UWYrd1OFAiEA%2B9yJyWOmjVD1wcLw%2BejlSeTyRiLHKOXQv%2BnlpCmWvyEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzvmDWVmnQ%2FhCnw4yrcAzVFBxV5uxLSiU7s%2FhPfSSaXRh2ygu9N1KzL2ZrspKrHNL6NNwN0EQIRmED0P28tzID5EGSvO9tI2x1JRVXOKbWqoveiuCvudAyhOABqfzHRWyYffKNadi%2BERVhhBaiSTRo5yFP7zhyFhMDVxj92e7qFYtrjJgfYH2CzHz3UpuVAA%2FVSkX8p97LSYgPsGw45h2FflJnsJZqZpavlN1%2Fkj%2Fu%2BCjzZLzY7qyv4Vv0adq1VrIQ0VTZ0FIinEA%2BYDeKOMIYggPULwn5it1r031lzeGjDvRqyJlMkH%2B20fRBrD5dl63k0w%2BL1pZFSIjHL8sfQYjXDHA9bEyQcRTGQOBjv7jhF3RvbFebelZzOGuDETogJDtqx0EiTDdw%2Fmw0VThOHaJ1Qk%2BOah%2B7wlxaxyrNTN2UxA5jeOk1WgBw6MjealJ%2Bs6Fjw9avUbUViRwO0rFwDFf1HdrIyDvl%2F2gYxDR1jt0mNLwp3qmEfoIZDz%2Fej9q16qenyY3OcY3aKy1NomuxvhaoQe8CblBkGab0X%2F2xb4TZIqjLLNVtOZV2w2vz6uCM6yY6V%2BahlJAv0u0yNo9RYd4murdzfWAmg%2BBvElEgregCm7hNlXh8UXck2ney0%2BUL%2FYO3wTi0Ty1YEyolnMMX%2FuMIGOqUBPz2wrAK10hDwzGIWt2slveG5BNWK5A62nTiEORO0x5giCAzJbZ%2FZOVSdt%2BCVcKFl%2BvS0efhXwDii28PUdqc8%2FhYYQ3PvrP8tkeRAl8Hkn40alC8I3O02nzQ8hAXIEgz9a3IG1hvF10Mec9770T88aJCkfMfptPCfGvU6IW0WIjsh7%2BnOuOfuhCN%2BDStSbpEAvsDjFTguAvGW4YRP62AFUZvgYc59&X-Amz-Signature=78a27e5f554116160f965fcffab9ccb29f58d69ea29ccc5113a2d30cd52ad044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E67CBU6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCejjVV64Se90GysbzZMfbce68vj2k%2Bl7SFMwZBD33DKAIgOTLYhNg7WhIQod7Mjfr4VLsIsOuDnR38RIXHrLdheLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGwcblAN9zOL1rVEECrcAwEzEecmgYP%2FiCQHijpzXYmFhahh16AZzhD%2Fg%2Fg7rnbwtg6YWoiy3op2vYbubGYM6eN2fCCTa6TQC34j6IDenv4%2Bp5ib6C3vbwr5tMxkYFGV%2Bf2qrQ6Y305NluClLdouLb7%2BeTo05Qux6IF90KETrt902oLuAF8VIIi%2Bj7asrDUdgI9F8t%2B0n%2Fs9AR3hXVVuz1z3OQw5n8u5J9rdHdOibMNhaHJzikDmavVX%2F3PPbzrDcqLKoHxAE7JLD77hjuDFAifpU6j3%2BCe0wdeUKqZ1e7SvGbrDazVJsK1Oe9tmMcpK6rGwM%2BRcYAsQfIMwWvJC5BAGUeaz9KMrQV%2BWIp01NiDKVp2JnWWSECZaNOQxgWVgxFyqBCGseX7%2B9vAXVxciGbU7FIn0k7g77TS%2FF7yjg577J8eHnWtvVcwLKP40wMwdWhePaaFFOd2iPMe8mp7%2B3hEJbX3PvVq9UgyHwkHxjF9Yqf2fGHwH29Y1VEwTO52mMt%2F2a0mI5ViRO9xKQe3VP4%2BPfEh%2Bn4G7t2818Bps3EzHN4fLOOVkk1BOqQsJKxLGDYMtkhqBr7rkfXqGBt9FRez8KZ%2BkqfFwYoAEXXz2oEKWfO%2B%2Fie8HCNdGee5ztMlqTzBxnISxkKdylEUuMPz%2BuMIGOqUBPB3dm2Plr2IqYU3RCGYkcVUwgsHULFh7F6NORgeQK1AW44Uhimb%2FVuz%2B5pX%2FqrJDH4G9UZRLSUWvxDQIHlw25JJ0FWvj%2FtDwuuQp1dzyS1yEpS1z8XpqTNxHIj5BveI0r36tDTfFs2DYQSWX5vFYCxX1UkNd4x1zWHQGs9R0YyVfju49zU1A38WQV4MGfTm19Upo8hLGO0bMLp9FqZZ5A7S1NRz5&X-Amz-Signature=06d45197e6f5eebd843ab93955e59efb62cc7973e80e5004582e049efe774778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOYUOYZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICHAUHO%2FMDyfSZ%2FihitH14RtDZUHuRY28O8M4Ztpt8hDAiEA8lrJCh251VogA1A6cdRez6xzAVFW3QB1jgr3x2d0WFsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPmXO15iEzvZKIXsNSrcAy%2F7F%2FvElE3QPzKvZsylu9lsBr55uNVbwUGo8ZsQZpXy7GNM0Rluh3xCTrRuwKo8K%2FLtUeTpGgfLCinFQFiWK7aRKkiBQjiXBJ9z3WVCLtxcGKP0kMebT7LYs7Z4FPlxs30Z%2FfmogZRxpKmtGH0MZ2JQhI6Thi%2FAVKwAyxTnGoUlTohFELDE06Roi7PFCZGG1eNUWmvYBAsZu9lQ7tSVQ7dfptORBai3q%2FVZNN9%2FBxpb8mNq5jDHeLKZpMUiAAlPgBUXb5okLqN%2Bt%2BwvegdICDwFQ7anixAdCTX%2F6JO2O18kIodmYxtup3BXIdCTJe2K3R7wY99F%2FaxfS%2BCxsIbAbXNeTgvv5HhJCU4ESpgh7OKukDZ6wUkcBIaE6N%2FckWQUNNIE7aUK3KhW8r%2BKlU7OSfxqX%2BRLhKvUONtK1XfivQdvS90hjdqOHUfJsFkNLTH2xTAI3bD6VoOHqvQdcxQGteH8NTfKx9YMDsFKXIlngwKN6WYU2psxQOYEoGLzok339JscofDfgnSVwlrx0QLpsJG%2FOLBT0%2FCA%2BD7vilme4nOBkMLziqh0NbFnfmyBTJj%2BBBqHT5vQ8KfzE6Iko4li9r7e%2B%2FbpaeAgu3PkWrNBaTZoWinVo1eyaeiV5GYkMJf%2FuMIGOqUBqcoPGMW0sUd7VxvNLA9VNiEiJ%2BSt1OHHs6%2F7vhbQXow264i03%2BbXj2JJ3OtCV4oK8mOJKu7gkDu6BIsRiJNsh%2B124nLihxHp2jk%2FTHl4nnPZqY46z3CRF6jq5MKh8WQPSA4Tit2goM6SzWS3HLnU5homqUCWyud3QcJpn8KdruWWnyH1gpOjKf34NkSAfM7ZTI%2BU%2B8NG2uZF3dRLV74YmWz3L%2BRa&X-Amz-Signature=642591dab3d28733be585dfebe8f0cf6d9e955eeb5297af411d7db9119bb95de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISLDARO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFob5OBx%2Fvq4hhln9xo4PbWA%2BZ8f2Gl85RB9UWYrd1OFAiEA%2B9yJyWOmjVD1wcLw%2BejlSeTyRiLHKOXQv%2BnlpCmWvyEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzvmDWVmnQ%2FhCnw4yrcAzVFBxV5uxLSiU7s%2FhPfSSaXRh2ygu9N1KzL2ZrspKrHNL6NNwN0EQIRmED0P28tzID5EGSvO9tI2x1JRVXOKbWqoveiuCvudAyhOABqfzHRWyYffKNadi%2BERVhhBaiSTRo5yFP7zhyFhMDVxj92e7qFYtrjJgfYH2CzHz3UpuVAA%2FVSkX8p97LSYgPsGw45h2FflJnsJZqZpavlN1%2Fkj%2Fu%2BCjzZLzY7qyv4Vv0adq1VrIQ0VTZ0FIinEA%2BYDeKOMIYggPULwn5it1r031lzeGjDvRqyJlMkH%2B20fRBrD5dl63k0w%2BL1pZFSIjHL8sfQYjXDHA9bEyQcRTGQOBjv7jhF3RvbFebelZzOGuDETogJDtqx0EiTDdw%2Fmw0VThOHaJ1Qk%2BOah%2B7wlxaxyrNTN2UxA5jeOk1WgBw6MjealJ%2Bs6Fjw9avUbUViRwO0rFwDFf1HdrIyDvl%2F2gYxDR1jt0mNLwp3qmEfoIZDz%2Fej9q16qenyY3OcY3aKy1NomuxvhaoQe8CblBkGab0X%2F2xb4TZIqjLLNVtOZV2w2vz6uCM6yY6V%2BahlJAv0u0yNo9RYd4murdzfWAmg%2BBvElEgregCm7hNlXh8UXck2ney0%2BUL%2FYO3wTi0Ty1YEyolnMMX%2FuMIGOqUBPz2wrAK10hDwzGIWt2slveG5BNWK5A62nTiEORO0x5giCAzJbZ%2FZOVSdt%2BCVcKFl%2BvS0efhXwDii28PUdqc8%2FhYYQ3PvrP8tkeRAl8Hkn40alC8I3O02nzQ8hAXIEgz9a3IG1hvF10Mec9770T88aJCkfMfptPCfGvU6IW0WIjsh7%2BnOuOfuhCN%2BDStSbpEAvsDjFTguAvGW4YRP62AFUZvgYc59&X-Amz-Signature=5fe4c3ae966fbca97aee151cdec1a13819783bef0a56d0e53e258522fd84783e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
