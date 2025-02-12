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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECE6MFX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKDDkmVJKaD44WdhkdHJueSeZCuUgAw%2B5kQ%2F3jeMVxEAiEA6WLXQQre2rf5b0Zl%2F%2Blk7SS%2F3EVNKEdLGwNByRsnVjoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvayWAtGeCS9DA7syrcA%2BCe9uKnIh2D59SDxcpOg58kb91RPXLnjO6jEvrOJ60n0jdFGghCPVi96y6J0wMa2%2Bx5MJpD7nwIQAw7WYc5DLpvRbqdfkr4Z2EXsBzhvUOJENcbUzyhu5OuqVl5MMz76DURIjZWe%2B0%2F0WP7kLu3yIDda%2BTOrqFiFQFfUPLZioRXkEFUV2EIyJj4WZY8z%2BWLSxQEVyLSQD4O%2BHc%2FhNkdawX4f6j3cRhvrTB%2BPqBBXT7WkfP4ToDALxF%2BZurefujb1ckdwRtKnajd2cKR3GXf3Zf682Ju%2FG8%2FLpSw5%2FNItFSvD04QCzLSKq6W2YtC6CZ1yzWlxVJQR2iASFEj90qApkILNoDmDiAGXZ6%2Bkzdyd9JbHdWVW0P4IFMMLZLze13J6kjgKuPeykRA1ty2dVPf6xO6cXxeJpzDtDnK1GU3r3bI1nmdqflH449lgNuFmNxkHpMzKkoevHvCnJjACWFv7lCQyKMtFbJZBw0GIidF21BgyeS0gAxRDdDPEWLEwICjgv8R4zVZNtnQJhXPBZaYcWnpdp18uQYfEeuEqwvDlcbUP3hxVts%2Fsql%2Bj3Ws2L2T3ZGxfkK1SQj8Cig7qOCuGK3B1w3twud2NUzysplUN42lSaxfFdOty7mXqRZYMNeqsr0GOqUBy4sD76Y8nTUg5KWXyPHVpIlk%2BSpLgckpe5h21RmScIcIFjyCKQIApPzX51aefR8hs5EWVlK6qFxmcjkUf%2BjQkCSnTMO7GuJCR9bem%2FNAuWDunu5PnxhuuR%2BpjvKJpjlJFu455QLL%2BKpCDhxzkbx8R5rcQNt3A6pfpb5X9H%2FuU%2FtvUq204XREIZcaH73drd%2Fu38qcXd2Gzcs%2BL7LUEB3sqjAf1w9v&X-Amz-Signature=a1d053d33fe38c70172ba82e425392f21cd3c1bbb0282f072983da6f1d312e18&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECE6MFX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKDDkmVJKaD44WdhkdHJueSeZCuUgAw%2B5kQ%2F3jeMVxEAiEA6WLXQQre2rf5b0Zl%2F%2Blk7SS%2F3EVNKEdLGwNByRsnVjoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvayWAtGeCS9DA7syrcA%2BCe9uKnIh2D59SDxcpOg58kb91RPXLnjO6jEvrOJ60n0jdFGghCPVi96y6J0wMa2%2Bx5MJpD7nwIQAw7WYc5DLpvRbqdfkr4Z2EXsBzhvUOJENcbUzyhu5OuqVl5MMz76DURIjZWe%2B0%2F0WP7kLu3yIDda%2BTOrqFiFQFfUPLZioRXkEFUV2EIyJj4WZY8z%2BWLSxQEVyLSQD4O%2BHc%2FhNkdawX4f6j3cRhvrTB%2BPqBBXT7WkfP4ToDALxF%2BZurefujb1ckdwRtKnajd2cKR3GXf3Zf682Ju%2FG8%2FLpSw5%2FNItFSvD04QCzLSKq6W2YtC6CZ1yzWlxVJQR2iASFEj90qApkILNoDmDiAGXZ6%2Bkzdyd9JbHdWVW0P4IFMMLZLze13J6kjgKuPeykRA1ty2dVPf6xO6cXxeJpzDtDnK1GU3r3bI1nmdqflH449lgNuFmNxkHpMzKkoevHvCnJjACWFv7lCQyKMtFbJZBw0GIidF21BgyeS0gAxRDdDPEWLEwICjgv8R4zVZNtnQJhXPBZaYcWnpdp18uQYfEeuEqwvDlcbUP3hxVts%2Fsql%2Bj3Ws2L2T3ZGxfkK1SQj8Cig7qOCuGK3B1w3twud2NUzysplUN42lSaxfFdOty7mXqRZYMNeqsr0GOqUBy4sD76Y8nTUg5KWXyPHVpIlk%2BSpLgckpe5h21RmScIcIFjyCKQIApPzX51aefR8hs5EWVlK6qFxmcjkUf%2BjQkCSnTMO7GuJCR9bem%2FNAuWDunu5PnxhuuR%2BpjvKJpjlJFu455QLL%2BKpCDhxzkbx8R5rcQNt3A6pfpb5X9H%2FuU%2FtvUq204XREIZcaH73drd%2Fu38qcXd2Gzcs%2BL7LUEB3sqjAf1w9v&X-Amz-Signature=12273685612c72fd956f30c4044d25923fa4a27ac9ba94053a51528bc3a2690b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BALD5WB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnfFMGouVH0bK8eoQPhoBBRKYgsEzwIxF8wvUoxpWOVAiEA0C5nnfc3NJUeG%2BAFkTateQ0mYMgXO%2B4h5NN7%2BmuIBgoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAHhXnQnQBLJIpnISrcA%2FMZoOVVjFJe3NwsfYpjRpSF5maya7JjGMfPAhWKRatAP%2FWw%2BnVpnx1AdTYt%2BGa%2BRde0Swu7HlhOTFY2N9DO5vqQAcZt4lgx9ggaq0h5PeMZ3DZr4OpDogFMvB0JM1jWEPgrxT17dZukVYpmRDUKx2YkQoE4kJzOAdbF1qkm0vCOQMucG6fV0r6gyv8SKavLfYJfCWpkfw9q2CdvpGqFpSX4sJutP5aGMcQ%2B5CZwpm8CFXtXrwtoEXHVYhvZCgkVO6bCHo%2FBQmEMeZ%2BJOmTS4o8Qe4iWV8e2cm8AkAWICrHEuncxEKw4D5X9Dr13dpeHpee3wgDuYRfHjf8IObOQ9MW12P6bAbl02uMkHqCzJMD%2F7k%2FgxpMJx66XnFHaXSiphpzyOyir3gQbs%2BZtGUnw%2FX3j64iNyHZfzv59k0lDaveNW5Pj6GNcm0tpWMJgG8MelC8F1wPG9XSMP8Z1%2Blb%2Fj8zzxsvFU%2B5qD7svJovWHOXOcnKEDE2jR9BMOl9v6cIXI4TIsMwVQqA%2FSLXddjnA8Q7swsnvecvonqZ9n8%2BOqFt3jqcDyk6FDody1Fe9tA%2BEZ0ffi72ntARaOs7%2B6DvNyVnGiHkfri52U9h3YBXoaGrP49qJCYbNyQZioNOMMMCusr0GOqUB2mxU8DmSFqleVV1JcWF2D%2FMIzI4k1Irf9vOAg7SYn2eQcE6gJSeCzzwVdv%2Bt%2BISd3P9RM8cBkhy9thA8J2qdZzoVhenQFpC8iKX%2BB56dBbX9pqtioXVCLvu5UQjhyUYuboIAI06XFHRL0tK07caxl%2FTf9Qj%2FvYB2rkf23Sx8LZrcNMW2mFmOzozcielWasAxpPez8aYxKqVHIcSi8J4x0M84pVgE&X-Amz-Signature=c29a1d67556451d0874632fa8e550accdf1e5071c3b21c704de195e087c3308b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGYDYKC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGnSM8esAeDOx%2FNiiZZEFyzGcpWQ43dmRYwaMqJCArJAiEAwM5QSvsXNiD5N74wnaj13pOn%2Fre8NZWNOjN5Kz8AQTEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdlCCR4QEXyO89slSrcAxqF9IdHKcBS4lUyvpZMhUA%2FG7R9gsc1NYXE%2FO2e4GJedlBUaTy5V4arczTS6BU8PZBpjX13%2BDz42KDSAAALhIQIElbyCHLcaRP47maPeL6QniRQChvgw75CZJnGywQSuVz3e4A64zSF4j9b0HUKCgVuX4A4o9z4xC8m1rajrK2%2BQFZStrf88QD57C4YVeBsTr6%2BhVgBbViJOp747bdwif0i8ZnDCaYLEF3IP%2FPCeQ5jFOc1sF00kskVlKTficAxkaJTNlwB%2FLrmrjWPW8W%2BgROlr4XvdjtVaxpwXfOJ1wmzTtoB6vudwfGNG%2FqMyqt6xOi%2FcNEEDvUVPSLQDx8M3i7V80ueHmC4Y6srzv1GTBVaFoZmuW91Kvmshffs%2FNCmJIpY8ZpStCH%2FXUYcUTnTXWT2ZhFeyrYlwVtSgG9Or7ClM70Mangwqu221vb7j0DvCA5wocAPEp0lGZ99jvOWCrkLq5cgLNanjZRqMtlmhtis4GOSGBYQ1iifcrjg7WdmkwDAQMgsDUuDGdQfRxJaVNdyvDOXIDrFXCE0TOyZs%2Fm9CYdleL84g%2FB2zJNgM16MmNbpGPwN8T%2BcVMEgwQ0tV3auOHkQOYyFCu3KMfisZAz9hDFP8e%2BD54TEnkw3MOiusr0GOqUBNhM4BLMg60%2F11RsFDhCbRdcLFDptjyp1pJ%2BnuV0v4TFIL72%2BHbpE%2BYtH5kCQJxnXNTXseoZNi%2F5rZBXG%2FnB7P2bZHEYoXkxLIqmMxVQMXgnPpLjhlyHteulH30Wo%2BClXhItPkKxirU%2FMZDywoqHNe3MaPQ4gSX9r0RPFA%2BoZxiWC8I2FYUNqJL7SVLvZOG4sI22%2Fech3Z%2B4ecoOY66YSKmq4yC%2BX&X-Amz-Signature=4910bb6c82eaa97953826bc05004d94e8474bbcdfeac3f2e823157a2b94b0287&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECE6MFX%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKDDkmVJKaD44WdhkdHJueSeZCuUgAw%2B5kQ%2F3jeMVxEAiEA6WLXQQre2rf5b0Zl%2F%2Blk7SS%2F3EVNKEdLGwNByRsnVjoqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvayWAtGeCS9DA7syrcA%2BCe9uKnIh2D59SDxcpOg58kb91RPXLnjO6jEvrOJ60n0jdFGghCPVi96y6J0wMa2%2Bx5MJpD7nwIQAw7WYc5DLpvRbqdfkr4Z2EXsBzhvUOJENcbUzyhu5OuqVl5MMz76DURIjZWe%2B0%2F0WP7kLu3yIDda%2BTOrqFiFQFfUPLZioRXkEFUV2EIyJj4WZY8z%2BWLSxQEVyLSQD4O%2BHc%2FhNkdawX4f6j3cRhvrTB%2BPqBBXT7WkfP4ToDALxF%2BZurefujb1ckdwRtKnajd2cKR3GXf3Zf682Ju%2FG8%2FLpSw5%2FNItFSvD04QCzLSKq6W2YtC6CZ1yzWlxVJQR2iASFEj90qApkILNoDmDiAGXZ6%2Bkzdyd9JbHdWVW0P4IFMMLZLze13J6kjgKuPeykRA1ty2dVPf6xO6cXxeJpzDtDnK1GU3r3bI1nmdqflH449lgNuFmNxkHpMzKkoevHvCnJjACWFv7lCQyKMtFbJZBw0GIidF21BgyeS0gAxRDdDPEWLEwICjgv8R4zVZNtnQJhXPBZaYcWnpdp18uQYfEeuEqwvDlcbUP3hxVts%2Fsql%2Bj3Ws2L2T3ZGxfkK1SQj8Cig7qOCuGK3B1w3twud2NUzysplUN42lSaxfFdOty7mXqRZYMNeqsr0GOqUBy4sD76Y8nTUg5KWXyPHVpIlk%2BSpLgckpe5h21RmScIcIFjyCKQIApPzX51aefR8hs5EWVlK6qFxmcjkUf%2BjQkCSnTMO7GuJCR9bem%2FNAuWDunu5PnxhuuR%2BpjvKJpjlJFu455QLL%2BKpCDhxzkbx8R5rcQNt3A6pfpb5X9H%2FuU%2FtvUq204XREIZcaH73drd%2Fu38qcXd2Gzcs%2BL7LUEB3sqjAf1w9v&X-Amz-Signature=0c2f39af099fa71a4ba0e7bed1942da8b79a29c4e544686b7c31496fc85b29b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
