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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWOATA4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCbCAFCweQfR%2BR%2F50Zym2NeeZGidEtEGHlM9IgFd3iHLQIgbQqe9gvAuswu7G2ZXRRS64MvyWp18LhY%2FDk3nEOlGZMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPCKfPLH6h80VG8rqCrcA%2BYmbDDOBRNF4AlTDogdVXZQn1RPY71G6P6ChFW8WcIaEGSxBEPGeR5sXgA8DlB31mXKwuSqPZ41RCFOBAty6AiL73zCqndPoVapEaMQTfFhHN8OtKxl%2FxqeUEH1HT9FPwdhxUESDCAWTzMOsZcodNVsQcizVTem8LrVW2uvK6CzYEmK9PmAUFViBZJOm7qBAfIL6JMmdl6jgMMrCPEbvJ0VGJkhz7%2FFN70cH1%2BTAepsRVSE6TFYbX4fPUvk711smIy5vx9t%2FEFb%2B1wkV2cH%2F3RGYhUfvP6%2BzIa%2FeGlDZKYcHfVqJlV2bK49AX2s1e7i9IYuR4kql6lx%2BYuUIPXqtOVTQ%2FzDxv6yfjRVqdCXjzmWiRzu1wvtpWJxvC106n3J1I5S%2FjWFruBgMFFHYT8PCgS8xJdYKIBLaXaQaftb00sTV8F0jNwAnzUX8aTzjXc9IUYOlN%2FCcj6XW%2BXPKrZFx%2Bt6H%2FjtjPwMJ7ty%2FbxIroTZtZGCLp6I%2FO72FovJJ0J0jSBeDrpEPlsjsZ7%2F%2B0XMCxyt%2BCjHFfPArAAgxyHz5k%2F5CVVmDOFpd7jHFSqSFtHeFidrSzQZFWwvgIzf25%2B9yTjUKUhYGZ%2B%2F4hVxHVtRR6O5uC0NXsck7xPXkWG5MIOx2MMGOqUB%2BBHD4BiCY9frFojEHvuMXEXj0tZYz9nWrRsG65gxuPNnpvNgLCAAKrihf7SUxFKm09b2SfwMjjVs7H%2FaJ21K2zlr4%2FRyqhTI7TumyVRIaKTbog0W9xxqYjdFHD6duryJ9XyZbudHnPNd2dIL5k%2FFCwd4OnnAG41ovSqy1MSniJnViafUl3aCctfvduGhvXtzTmD5UjeXbV52Qij0382WDwudqpqV&X-Amz-Signature=771e427954ca72cd81c80961ecbc8a634a0936bbb80369b42eea5dba25b29aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWOATA4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCbCAFCweQfR%2BR%2F50Zym2NeeZGidEtEGHlM9IgFd3iHLQIgbQqe9gvAuswu7G2ZXRRS64MvyWp18LhY%2FDk3nEOlGZMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPCKfPLH6h80VG8rqCrcA%2BYmbDDOBRNF4AlTDogdVXZQn1RPY71G6P6ChFW8WcIaEGSxBEPGeR5sXgA8DlB31mXKwuSqPZ41RCFOBAty6AiL73zCqndPoVapEaMQTfFhHN8OtKxl%2FxqeUEH1HT9FPwdhxUESDCAWTzMOsZcodNVsQcizVTem8LrVW2uvK6CzYEmK9PmAUFViBZJOm7qBAfIL6JMmdl6jgMMrCPEbvJ0VGJkhz7%2FFN70cH1%2BTAepsRVSE6TFYbX4fPUvk711smIy5vx9t%2FEFb%2B1wkV2cH%2F3RGYhUfvP6%2BzIa%2FeGlDZKYcHfVqJlV2bK49AX2s1e7i9IYuR4kql6lx%2BYuUIPXqtOVTQ%2FzDxv6yfjRVqdCXjzmWiRzu1wvtpWJxvC106n3J1I5S%2FjWFruBgMFFHYT8PCgS8xJdYKIBLaXaQaftb00sTV8F0jNwAnzUX8aTzjXc9IUYOlN%2FCcj6XW%2BXPKrZFx%2Bt6H%2FjtjPwMJ7ty%2FbxIroTZtZGCLp6I%2FO72FovJJ0J0jSBeDrpEPlsjsZ7%2F%2B0XMCxyt%2BCjHFfPArAAgxyHz5k%2F5CVVmDOFpd7jHFSqSFtHeFidrSzQZFWwvgIzf25%2B9yTjUKUhYGZ%2B%2F4hVxHVtRR6O5uC0NXsck7xPXkWG5MIOx2MMGOqUB%2BBHD4BiCY9frFojEHvuMXEXj0tZYz9nWrRsG65gxuPNnpvNgLCAAKrihf7SUxFKm09b2SfwMjjVs7H%2FaJ21K2zlr4%2FRyqhTI7TumyVRIaKTbog0W9xxqYjdFHD6duryJ9XyZbudHnPNd2dIL5k%2FFCwd4OnnAG41ovSqy1MSniJnViafUl3aCctfvduGhvXtzTmD5UjeXbV52Qij0382WDwudqpqV&X-Amz-Signature=ae557452d60fce0df8141664831a6e3bbd2dfbc15984194ceeec8c7ed34d6c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWOATA4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCbCAFCweQfR%2BR%2F50Zym2NeeZGidEtEGHlM9IgFd3iHLQIgbQqe9gvAuswu7G2ZXRRS64MvyWp18LhY%2FDk3nEOlGZMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPCKfPLH6h80VG8rqCrcA%2BYmbDDOBRNF4AlTDogdVXZQn1RPY71G6P6ChFW8WcIaEGSxBEPGeR5sXgA8DlB31mXKwuSqPZ41RCFOBAty6AiL73zCqndPoVapEaMQTfFhHN8OtKxl%2FxqeUEH1HT9FPwdhxUESDCAWTzMOsZcodNVsQcizVTem8LrVW2uvK6CzYEmK9PmAUFViBZJOm7qBAfIL6JMmdl6jgMMrCPEbvJ0VGJkhz7%2FFN70cH1%2BTAepsRVSE6TFYbX4fPUvk711smIy5vx9t%2FEFb%2B1wkV2cH%2F3RGYhUfvP6%2BzIa%2FeGlDZKYcHfVqJlV2bK49AX2s1e7i9IYuR4kql6lx%2BYuUIPXqtOVTQ%2FzDxv6yfjRVqdCXjzmWiRzu1wvtpWJxvC106n3J1I5S%2FjWFruBgMFFHYT8PCgS8xJdYKIBLaXaQaftb00sTV8F0jNwAnzUX8aTzjXc9IUYOlN%2FCcj6XW%2BXPKrZFx%2Bt6H%2FjtjPwMJ7ty%2FbxIroTZtZGCLp6I%2FO72FovJJ0J0jSBeDrpEPlsjsZ7%2F%2B0XMCxyt%2BCjHFfPArAAgxyHz5k%2F5CVVmDOFpd7jHFSqSFtHeFidrSzQZFWwvgIzf25%2B9yTjUKUhYGZ%2B%2F4hVxHVtRR6O5uC0NXsck7xPXkWG5MIOx2MMGOqUB%2BBHD4BiCY9frFojEHvuMXEXj0tZYz9nWrRsG65gxuPNnpvNgLCAAKrihf7SUxFKm09b2SfwMjjVs7H%2FaJ21K2zlr4%2FRyqhTI7TumyVRIaKTbog0W9xxqYjdFHD6duryJ9XyZbudHnPNd2dIL5k%2FFCwd4OnnAG41ovSqy1MSniJnViafUl3aCctfvduGhvXtzTmD5UjeXbV52Qij0382WDwudqpqV&X-Amz-Signature=c8f0b2dbea2e87589b1f09ef063acbfaeb207e602550a6e72ffdc0073a2e3b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JG3DYIT%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCTw%2BlDDKg3RheryWeXDfJWKpe6BB6mMPHtx%2FVjgq0qAAIhAPLlhwKjK4uKwgcJ%2FbcVhI0L0kooo3xF4NMgwKf8kjPEKv8DCEIQABoMNjM3NDIzMTgzODA1IgwEYdtmkOBfBXvD45Yq3AMWDYCW6RYsOwM2yMbmaY8HPpb4ugBPysY8px9w2riQ8Z0EZTw3bLxrCtuEY1qJFiDH5HxtVCkvdMZy5WO%2BQUAYv59prr2Nh32pAuP6UlWFVYaqIKqjvA6F%2BYXyopmBY4BJW%2BSy5KSY3yFv%2BKOJjv5rIhRo3wiGC6%2B%2BEZdmR7F1p2pAA0O5k95FVb4b3GC0STIDritNxffqrKC6WqtddlvPkV1Bv13yS5Cdo4mxOqHRvQGjmnxBiNBU%2BYM9EpcC7KMUQpyGmSLp38KMOq1hUBJyZ8Z3sFVBoWo8zt7wvG81Qeo8Ms9A04OkLn%2BLQ4zkw7OZrbumS18EHmL0F0A2KGTdinXnOUCZZT%2FAo5v0gHMzfiwsof6CWMze4J1M8XLzgexXM6C33SQN1qKe232CBWd28rnzQlb8A5FA5JKrkUOTAVBUcL9472zDwf859ZHVSdUviE6nkX2j7E5sLgpJUPKCwAXmY%2BjX5GNA7IGLnIsfPoro9hb%2BbJ70NqiHpaDWPT1vgQSGESfbzwGm38Bdux7vH6MOBJxYRL8Sc2tRGYwX1zlH4rtPVXkXfKyw5oYTSuce1ioecn22LtlAyJ5RlCBYD2mu03v70%2BZiasUikSMfDmgmryR3HtA5xLLnXDC1sNjDBjqkAU%2B1Gh41cvrjfzoz%2FdOOD4Csw6o4Dm8jHZdbnyCw7NTuF3xU%2FoqB4F%2BJ6Vykx9tIDmmf15pMWDp7dwfqXfS%2BdqUsm1tLfSIM2w2q%2Bu%2FdtMlEJ%2FhlIKCAPDLEVwgjGM3shezdwgIKg0xkZtf9HThRZarclm3CFH9S1ZGJm%2FO3nPyd186HmRXL3nsNbcfal%2BukGIDPg3uPt97uDmz6DWp67Gh7a1ex&X-Amz-Signature=aa12057badff5c8e437b62093713b5c47036c49191e4c70bdaae7c8e898a8345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ABH3VPG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIG%2Fd8JNfU1cuys3X8hhqAEnEQMZ4PZwqkUkFG1ad8aryAiBOn8QXYASPE%2Bq1CHyW0Sk2QMkmCmSdKwv0zAmpA6N%2BjSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMoeEns01%2F5NJaB0n%2FKtwDqL27rbqoiEiNORZf2eJ1JE7i3bS1JXpadBE4GaolCS2wGQKr2gdFvdC9ZTilbxSH3eJA6GQlcQku1uRHKAg6U9tivKdueDuQavh%2BeVoj9drijDqnkdk%2By%2B63NGsqnU9WK6wTf87qZ2nqIA54W4AL6Wh6u%2Bl%2BD1dwIWwdkLJAhtudd1HDMP5pkJHIJnqqV5xAjUErMqMZ9EM1Mn7YllzUZ2qk2pGViinYGmjhtFFAsKeOvtVXjJSDaUVrw3JTW%2Bxgc2dEzXrblwt4oHRyi3hYxiqaeUe9A1Lk3tDmfR7FDfMNY4eFajSslKD2Uy04xuC4c4aIegS8bxxV484a0NW74h7aAnI%2B33FdVkwjvL91WbyVW9946t5YFRszACOw8uZ7QAqW%2F0xqz%2BPnkE5iiUb0ZMBHBbM4Ll5VBEjv4ftnYGf76jrpDYPeMvjsm0rh1a%2BIXdE4uLDz2M77U4V5TRPsBfPMdOS%2FI8TRfvuIWDre7crJV4k2B90nDkSzxMmORdo1Hc6rWEoFUEBVMzLEWolg0xLj8qg%2F6rqh4I%2B9g1igGcOfDS3%2F5jg3JO%2BgpzEqwI5fJNyJx%2FL0dXW3GhIVfOS6qYSQ3vAZ2EkCWkuHWMUeKGKOzYtmmnad%2FuJDBnkwxrDYwwY6pgFKsxtlSKYUXcXvGloFUIgwT8qlAPmcpUU5dSu1AB%2Bb9wokzM%2BieYGVZ4%2BN2R0DAJPw4t0eGFFWNFsOlZKTLW2ZdbWStkPshF%2B92dVa1jhxAN7TQjMrTT4mSkXNbReryX%2Fp2rtW9hvTeG6dmBU3Nqoog%2BCfTflVk5qYty9YqDhxTd%2FuNKBbJ3lUD0PAQKrGH3GtAbEciflSAAPDB4axg4fB0mKdclhu&X-Amz-Signature=9bf3175d95e70240fd93bb6a63b317aedb0f732a83652777c01f79aeff0c93b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWOATA4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCbCAFCweQfR%2BR%2F50Zym2NeeZGidEtEGHlM9IgFd3iHLQIgbQqe9gvAuswu7G2ZXRRS64MvyWp18LhY%2FDk3nEOlGZMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPCKfPLH6h80VG8rqCrcA%2BYmbDDOBRNF4AlTDogdVXZQn1RPY71G6P6ChFW8WcIaEGSxBEPGeR5sXgA8DlB31mXKwuSqPZ41RCFOBAty6AiL73zCqndPoVapEaMQTfFhHN8OtKxl%2FxqeUEH1HT9FPwdhxUESDCAWTzMOsZcodNVsQcizVTem8LrVW2uvK6CzYEmK9PmAUFViBZJOm7qBAfIL6JMmdl6jgMMrCPEbvJ0VGJkhz7%2FFN70cH1%2BTAepsRVSE6TFYbX4fPUvk711smIy5vx9t%2FEFb%2B1wkV2cH%2F3RGYhUfvP6%2BzIa%2FeGlDZKYcHfVqJlV2bK49AX2s1e7i9IYuR4kql6lx%2BYuUIPXqtOVTQ%2FzDxv6yfjRVqdCXjzmWiRzu1wvtpWJxvC106n3J1I5S%2FjWFruBgMFFHYT8PCgS8xJdYKIBLaXaQaftb00sTV8F0jNwAnzUX8aTzjXc9IUYOlN%2FCcj6XW%2BXPKrZFx%2Bt6H%2FjtjPwMJ7ty%2FbxIroTZtZGCLp6I%2FO72FovJJ0J0jSBeDrpEPlsjsZ7%2F%2B0XMCxyt%2BCjHFfPArAAgxyHz5k%2F5CVVmDOFpd7jHFSqSFtHeFidrSzQZFWwvgIzf25%2B9yTjUKUhYGZ%2B%2F4hVxHVtRR6O5uC0NXsck7xPXkWG5MIOx2MMGOqUB%2BBHD4BiCY9frFojEHvuMXEXj0tZYz9nWrRsG65gxuPNnpvNgLCAAKrihf7SUxFKm09b2SfwMjjVs7H%2FaJ21K2zlr4%2FRyqhTI7TumyVRIaKTbog0W9xxqYjdFHD6duryJ9XyZbudHnPNd2dIL5k%2FFCwd4OnnAG41ovSqy1MSniJnViafUl3aCctfvduGhvXtzTmD5UjeXbV52Qij0382WDwudqpqV&X-Amz-Signature=ac7765c9af67d4fa330a4e8bb589b2d2e2dbef9794b16081557b1af352220d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
