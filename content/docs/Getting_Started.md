---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UU2VFG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeSmnIVUhAnTzsHRJ1WkSqz2ceJBJU01Db9D8QifmyVAiEAkT0Vj9O69h3jAyQwwnu78%2BaCA6H1IUCuON9A%2FFMyyisqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXDdqAjPIhLaEtpqCrcA336ogrzJq%2B8%2B3ZchOwlqCQdb4NpC%2BTSNpt9xREakiogDl7tLLZjMEK56XovEq%2B6kZLLRWCzPdlwtv4I1X82jQw%2BTeM7NCfIY4RJ8kmFwt%2BWsPK29YlqZGQJOpbqQwpTQ702Q%2BwXgRKSrjNhXmR1zLVsgOHJV2p%2BrAgClrrCFFTvKzufMJOYcwhmfMBodGteKr9%2Fmf6eUM0rchFzallj9NPkjwcypF8vlhW3fTtBzTEDilTKjfi5NRDAOsxtn6MIA24HjqOOdyCLA6CoGCT90U7okG1So2HvjQEnDbsz5mamcTgmUhrixHMR3OXWPpXa4cq8plu4c2PKywi6OaRtdVYjANqDb4KORlPJ6HNGbawIawGx%2B5uIu5gzD2oo3e2L%2FshEZLmT7ixAeZDEUg6trrOuOm3XA6Uc6%2BzZvhPduKYXlCmfHLeXev3%2FVldUri0bKyhIoY%2Bpz2lHov5QGp8v63HFoHgUVwVB4dptNpCZM4y39j0hD7rvH%2B%2FGpgOfC3TBF4TGBUI3q1OXWC3%2F%2Bv9AEUpHBatX3t4%2BMBbX4rChiNinPK2raBl76sKbuoWtkLSAZ2RuEBqaAt2VlrCSWvNRH7NR5RwsJmVjK5TSQeBLJHN%2B5YxtekrthgWVsTwKMK6nlsUGOqUBGJZlVoEctx8F3qdmXV322fihijuzFNN9eNTWOXMOxxrANyZk9GGVd0sxEKGeF8W0WfxdWPeylCPpVMGEZOMaqYLagWAX1WyfNAQR5ZM4XGntTNLMR8BqJv4nHnKR8s22EYLfs%2BOlW2V2E5gLjDuj2QjEBTRTNb1pXGxoCOXw2ZFAMQNYJYBG19CjsIeIju1c4%2FjN2q8ETL7BgwBTaIWtEDjwqwni&X-Amz-Signature=478bf8666dc1b8fecc38c6c770b85322420cd2fbe967453f9cad6524c21cd173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UU2VFG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeSmnIVUhAnTzsHRJ1WkSqz2ceJBJU01Db9D8QifmyVAiEAkT0Vj9O69h3jAyQwwnu78%2BaCA6H1IUCuON9A%2FFMyyisqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXDdqAjPIhLaEtpqCrcA336ogrzJq%2B8%2B3ZchOwlqCQdb4NpC%2BTSNpt9xREakiogDl7tLLZjMEK56XovEq%2B6kZLLRWCzPdlwtv4I1X82jQw%2BTeM7NCfIY4RJ8kmFwt%2BWsPK29YlqZGQJOpbqQwpTQ702Q%2BwXgRKSrjNhXmR1zLVsgOHJV2p%2BrAgClrrCFFTvKzufMJOYcwhmfMBodGteKr9%2Fmf6eUM0rchFzallj9NPkjwcypF8vlhW3fTtBzTEDilTKjfi5NRDAOsxtn6MIA24HjqOOdyCLA6CoGCT90U7okG1So2HvjQEnDbsz5mamcTgmUhrixHMR3OXWPpXa4cq8plu4c2PKywi6OaRtdVYjANqDb4KORlPJ6HNGbawIawGx%2B5uIu5gzD2oo3e2L%2FshEZLmT7ixAeZDEUg6trrOuOm3XA6Uc6%2BzZvhPduKYXlCmfHLeXev3%2FVldUri0bKyhIoY%2Bpz2lHov5QGp8v63HFoHgUVwVB4dptNpCZM4y39j0hD7rvH%2B%2FGpgOfC3TBF4TGBUI3q1OXWC3%2F%2Bv9AEUpHBatX3t4%2BMBbX4rChiNinPK2raBl76sKbuoWtkLSAZ2RuEBqaAt2VlrCSWvNRH7NR5RwsJmVjK5TSQeBLJHN%2B5YxtekrthgWVsTwKMK6nlsUGOqUBGJZlVoEctx8F3qdmXV322fihijuzFNN9eNTWOXMOxxrANyZk9GGVd0sxEKGeF8W0WfxdWPeylCPpVMGEZOMaqYLagWAX1WyfNAQR5ZM4XGntTNLMR8BqJv4nHnKR8s22EYLfs%2BOlW2V2E5gLjDuj2QjEBTRTNb1pXGxoCOXw2ZFAMQNYJYBG19CjsIeIju1c4%2FjN2q8ETL7BgwBTaIWtEDjwqwni&X-Amz-Signature=71c0491ad2e7e633e41c9617dc394aeb61fb9e27bd96c86d3ecf6fc73e2bb2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UU2VFG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeSmnIVUhAnTzsHRJ1WkSqz2ceJBJU01Db9D8QifmyVAiEAkT0Vj9O69h3jAyQwwnu78%2BaCA6H1IUCuON9A%2FFMyyisqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXDdqAjPIhLaEtpqCrcA336ogrzJq%2B8%2B3ZchOwlqCQdb4NpC%2BTSNpt9xREakiogDl7tLLZjMEK56XovEq%2B6kZLLRWCzPdlwtv4I1X82jQw%2BTeM7NCfIY4RJ8kmFwt%2BWsPK29YlqZGQJOpbqQwpTQ702Q%2BwXgRKSrjNhXmR1zLVsgOHJV2p%2BrAgClrrCFFTvKzufMJOYcwhmfMBodGteKr9%2Fmf6eUM0rchFzallj9NPkjwcypF8vlhW3fTtBzTEDilTKjfi5NRDAOsxtn6MIA24HjqOOdyCLA6CoGCT90U7okG1So2HvjQEnDbsz5mamcTgmUhrixHMR3OXWPpXa4cq8plu4c2PKywi6OaRtdVYjANqDb4KORlPJ6HNGbawIawGx%2B5uIu5gzD2oo3e2L%2FshEZLmT7ixAeZDEUg6trrOuOm3XA6Uc6%2BzZvhPduKYXlCmfHLeXev3%2FVldUri0bKyhIoY%2Bpz2lHov5QGp8v63HFoHgUVwVB4dptNpCZM4y39j0hD7rvH%2B%2FGpgOfC3TBF4TGBUI3q1OXWC3%2F%2Bv9AEUpHBatX3t4%2BMBbX4rChiNinPK2raBl76sKbuoWtkLSAZ2RuEBqaAt2VlrCSWvNRH7NR5RwsJmVjK5TSQeBLJHN%2B5YxtekrthgWVsTwKMK6nlsUGOqUBGJZlVoEctx8F3qdmXV322fihijuzFNN9eNTWOXMOxxrANyZk9GGVd0sxEKGeF8W0WfxdWPeylCPpVMGEZOMaqYLagWAX1WyfNAQR5ZM4XGntTNLMR8BqJv4nHnKR8s22EYLfs%2BOlW2V2E5gLjDuj2QjEBTRTNb1pXGxoCOXw2ZFAMQNYJYBG19CjsIeIju1c4%2FjN2q8ETL7BgwBTaIWtEDjwqwni&X-Amz-Signature=d5099f60c02df71973535af4e25620b277bf129afd66ffdbafef67bd8e2bfaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WITTRD6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0%2BsaeWbFU6AVbmWvq9%2Fyww9zZxbI%2BfsSyfaV9ZhI17wIgHIm7TjV2snEDSGc2f1MmYaqRRmPneKzcUXBgCFeNJR4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjio3dE6clVQrIUZircA6Rslx93atpsihtmSjPUOIeE2sLzD%2Bi1k5kbi4Ysoy%2F%2Bd3WFem%2B81Nbv3sY%2FAdZKqaDYQmmKrEPIsIqtxfZB1AJgrXxvM3%2FZQE3xQQlT2KimlkOllqxPQlMRy9fQd5304NkoG3xxOMDuN1BU1NnByZ3REmQfUV%2Br5inf56N66jPJ7fmcdUD0dGc669LL%2B5praTpN4aAr8cx6YmR490AO9T3Ri1DB83kOMgdvPgLQXepk%2BXwuUVmQig6kvlD7i6cjc6AIUlUABLwW7NDI7zrODFVb673kjZCWuEdcJFha7FxGNmqo1VQUuHYfSM1A206iliORtvckeCJFUHWIkJFZh0d%2BYgOzVyiFHPdDj2h2%2B4zO2YL%2FvXz8swWbyECToR%2FRL4sUzAS6hcxdQwnXDe7%2Bb%2FGvIbfiGtzW%2BgqReui%2FN3D8elinsqGVOB24neFlQAFi8FT1sNlSybYdJOTC6O69JoN%2BqCdYaJ%2BzZQmmaH4WkI%2B5JcuMFJS7%2FPxEJ6f%2By6KG2IzG7r2YbqmVYI4inX5XF3coU7jULHWt6ZD8QASIOZRxiTECYfDVZoDxR%2BjIwMNg0uthB%2FhomrMQYxN2HCgfSRHFfyr0ApzrtFuvpvvq5JAUwIvg8n0p7kwsYpi5MOGnlsUGOqUBjtRRbFVXYvd5yIKXOMI5HsTmL11QVwInZrJNGqd%2BsD3VKKqUlXacIgo08Uhu8CM8fN6gArpQQuJknrBSACAa%2F%2BPenMbLMkqbIzns2%2F5i67loPCANeaSFayhM08OmPWGrA6PF%2FIon1T6R%2BnTcr2uCiplJsH2dFEz5t3j6uEMPrWpGm6kIhfqrLk1k%2FDPHlzNGkNBqrl3SD7aBqWFCUNlOZLhS%2BbaP&X-Amz-Signature=4eb03482d803a67b695321e3249d94ca074f233a7916994276f772cb278dd483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOF6EML4%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNu6yw8T8BUxc4pLU1YmnuJ4lOiM0HMHzU5OxVqoIGQgIhAPPFV9H8u%2FobDk2EfIxwFSq5txikaE3gVA95ZgwXe%2FzwKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPou0xVgOKIGEJgvsq3ANbJxvxyuaY56A44EPfE48EfeRT0c1%2FmqX9S6LhsAwCrYVoUfdr6EqhxMuWdWzZ6J815DliV0Ks2phS2RPE%2BP1JaVbceU0Vhc3t7LEPc7ZEKFkHCztYIkz2WspcY4ZEAeV753vetNFzgbGNga0dtl%2FDqjIp61L9f9xmAkvG%2FxC4OZ6nKAWudMVPZ%2Fs8ByrACqyxA2nFQyohbEwnfgnlYfsK7I5F%2FkjOx9kIwzxFJSx%2BffgBngmY6OKDi%2Fdaj7MAnacWTfsv8QUHCsl1D9rKfZQCXjnxUdAP9gRgd%2Fons8cz1RRyQRHGsOTGBTmaR33pR%2FmHbGW9xg%2FkOGsEqUEADfyxQoCUIIfusDt5%2B67YlX0mCO74W0sZd8tUd5CkIU0ywaIl7Ne4TYtI8gTkaDDlYJIPbSQnNQIbVJ%2B2nFxsQGUyHSbVPqTTShw5vx0fWJGI8jRzXi5zn7fzy48hnoETNCfGxEwoQQMJ69zLBCuy4EUn3%2F%2BBlWkCJ5Bof4%2Bbw5oSQh8hrw8WeAjozyRggmHKT5Qp39KYvb2B8EeCaB6E6%2B14igSwXMgYapKHppUcKbAlU%2BFEsYblf9i3tgxrf2EQLLD8tCOoCvoOAaHg7AqukWIq4mimUgtWk5OdgsAfSTDfppbFBjqkAXjCrU%2FY6K19mA1eNPRdfTEQdrmp%2BFl3FolpQfoVsSVKBC4%2F27UUms%2B4A%2F0pyxPaew5I7%2ByFx2V4ZO63mWFbJdFdUvNK%2BXuj6zDwAPtQHBzsu9LiXD%2FcZ%2FOY1B1s2qt%2FzsBi2XTqUdefm9kFuVxI%2FRzS7UgFJFH3Tqpx1oE00N8XYHhxpwSHkYL7IBULsSqtqnnEOChj2wLH9dNWYXBtv3vej41l&X-Amz-Signature=5049b693234aeb383b2cb18d194490923a7c14251d069e47a02a2110bfded3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4UU2VFG%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeSmnIVUhAnTzsHRJ1WkSqz2ceJBJU01Db9D8QifmyVAiEAkT0Vj9O69h3jAyQwwnu78%2BaCA6H1IUCuON9A%2FFMyyisqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXDdqAjPIhLaEtpqCrcA336ogrzJq%2B8%2B3ZchOwlqCQdb4NpC%2BTSNpt9xREakiogDl7tLLZjMEK56XovEq%2B6kZLLRWCzPdlwtv4I1X82jQw%2BTeM7NCfIY4RJ8kmFwt%2BWsPK29YlqZGQJOpbqQwpTQ702Q%2BwXgRKSrjNhXmR1zLVsgOHJV2p%2BrAgClrrCFFTvKzufMJOYcwhmfMBodGteKr9%2Fmf6eUM0rchFzallj9NPkjwcypF8vlhW3fTtBzTEDilTKjfi5NRDAOsxtn6MIA24HjqOOdyCLA6CoGCT90U7okG1So2HvjQEnDbsz5mamcTgmUhrixHMR3OXWPpXa4cq8plu4c2PKywi6OaRtdVYjANqDb4KORlPJ6HNGbawIawGx%2B5uIu5gzD2oo3e2L%2FshEZLmT7ixAeZDEUg6trrOuOm3XA6Uc6%2BzZvhPduKYXlCmfHLeXev3%2FVldUri0bKyhIoY%2Bpz2lHov5QGp8v63HFoHgUVwVB4dptNpCZM4y39j0hD7rvH%2B%2FGpgOfC3TBF4TGBUI3q1OXWC3%2F%2Bv9AEUpHBatX3t4%2BMBbX4rChiNinPK2raBl76sKbuoWtkLSAZ2RuEBqaAt2VlrCSWvNRH7NR5RwsJmVjK5TSQeBLJHN%2B5YxtekrthgWVsTwKMK6nlsUGOqUBGJZlVoEctx8F3qdmXV322fihijuzFNN9eNTWOXMOxxrANyZk9GGVd0sxEKGeF8W0WfxdWPeylCPpVMGEZOMaqYLagWAX1WyfNAQR5ZM4XGntTNLMR8BqJv4nHnKR8s22EYLfs%2BOlW2V2E5gLjDuj2QjEBTRTNb1pXGxoCOXw2ZFAMQNYJYBG19CjsIeIju1c4%2FjN2q8ETL7BgwBTaIWtEDjwqwni&X-Amz-Signature=69f6efb7fc27ba5e523e3ca200a5b7b2201e958de979f7d8de9983dcdd800a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
