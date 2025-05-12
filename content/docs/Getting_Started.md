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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PPX74K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoziNX6s5EKCxbOXGLk0xhNPZBF2j06G1FGAC2sOpC3gIhAL%2BbVZbhBZrdnSqzaMSOIUg6DztyDq0QGWo9eiOgB223KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPxi6VZJeSigdpGlYq3AMSGFPIre4ue8KY28j%2BLRGkC6OxrNeSRQTqV1QhMxX8H5za%2BqYZOffGwM6L0THa%2BE8OdFCVMVfqR6tC9O9cyCuHkTR401YiR9qbBOlq18HHy0TPGX8GrLTkUlhN7EWIQ7IJlRJDDB%2FXTFCQmDbYo2WDYNo7nL4o%2BOI6jxj2sPzN9c577T%2FqDarxFDKuQkNdHCZsvp25OQre7LJy325vXf3E5ZqP6A34AV3ANP%2F5PjL1n3U2BCdgAxXkaJmxlJZpJ12qupXmGJCK%2Blu%2FvCrnaF6lvHx0K8LoNSiqmXgDPZ4RZkxNJ8J02xg26DN4VZziYaQa%2Fq8y8Kc5%2F1Kmbsq8oMXBk5OTRMbWSlbkPVsYOQtMPnW6O5tgqiSSJ18hOQ8VO5eOO2SQ4EbpsPng5vAguBO4Zs1Xzht%2Fb2Uehw1GI4uYqx58ZN6YBsYrP2OsH455EzQKlzA1AhsTHsPgH8fxNN3xTHjpOQdCQcZl9Kxyou4ZXCIkMhtUpAE0DPqPCcmiL6AlW6yY0qF5u9iiO0ieDes6JUFlLKGjakMRBCKG04OtdaYwX3W3lfYp32IEtq4abz2PjVMvc5Fhtmzpln6AK3E%2B5qot%2FRM88Fn0Nv0Ba6RMwlYzakkGQygoBAqsWzDj94nBBjqkAXGchKUeTAhugkEbDAlcgfM6wGG9DfIInQebRaTvIZy1JdLVfRoe2TMsTjiD1J%2Fiqq35Ap2iJlYLXTWyfi%2Fh9GTl8l5qdq1mIyg7pv8QldXDqdkNxxT4v9M1nSCTYHHsxgAUVeR2c127mjtPBdU8GrS4ddpoErfUpKt64zpg0TOzLBwggP91tUvDuXJG3ACW8KbAE5Vlvx3SiISPOSDANP3eA52x&X-Amz-Signature=493c6f06df0c7d74207c708dd8721b382e6e861ff8b633ac444dc09047f22fca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PPX74K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoziNX6s5EKCxbOXGLk0xhNPZBF2j06G1FGAC2sOpC3gIhAL%2BbVZbhBZrdnSqzaMSOIUg6DztyDq0QGWo9eiOgB223KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPxi6VZJeSigdpGlYq3AMSGFPIre4ue8KY28j%2BLRGkC6OxrNeSRQTqV1QhMxX8H5za%2BqYZOffGwM6L0THa%2BE8OdFCVMVfqR6tC9O9cyCuHkTR401YiR9qbBOlq18HHy0TPGX8GrLTkUlhN7EWIQ7IJlRJDDB%2FXTFCQmDbYo2WDYNo7nL4o%2BOI6jxj2sPzN9c577T%2FqDarxFDKuQkNdHCZsvp25OQre7LJy325vXf3E5ZqP6A34AV3ANP%2F5PjL1n3U2BCdgAxXkaJmxlJZpJ12qupXmGJCK%2Blu%2FvCrnaF6lvHx0K8LoNSiqmXgDPZ4RZkxNJ8J02xg26DN4VZziYaQa%2Fq8y8Kc5%2F1Kmbsq8oMXBk5OTRMbWSlbkPVsYOQtMPnW6O5tgqiSSJ18hOQ8VO5eOO2SQ4EbpsPng5vAguBO4Zs1Xzht%2Fb2Uehw1GI4uYqx58ZN6YBsYrP2OsH455EzQKlzA1AhsTHsPgH8fxNN3xTHjpOQdCQcZl9Kxyou4ZXCIkMhtUpAE0DPqPCcmiL6AlW6yY0qF5u9iiO0ieDes6JUFlLKGjakMRBCKG04OtdaYwX3W3lfYp32IEtq4abz2PjVMvc5Fhtmzpln6AK3E%2B5qot%2FRM88Fn0Nv0Ba6RMwlYzakkGQygoBAqsWzDj94nBBjqkAXGchKUeTAhugkEbDAlcgfM6wGG9DfIInQebRaTvIZy1JdLVfRoe2TMsTjiD1J%2Fiqq35Ap2iJlYLXTWyfi%2Fh9GTl8l5qdq1mIyg7pv8QldXDqdkNxxT4v9M1nSCTYHHsxgAUVeR2c127mjtPBdU8GrS4ddpoErfUpKt64zpg0TOzLBwggP91tUvDuXJG3ACW8KbAE5Vlvx3SiISPOSDANP3eA52x&X-Amz-Signature=60411baa15abd2cb416430d1a2e8522bd78ad647b5ed64837ac7c6d8953b228e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PPX74K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoziNX6s5EKCxbOXGLk0xhNPZBF2j06G1FGAC2sOpC3gIhAL%2BbVZbhBZrdnSqzaMSOIUg6DztyDq0QGWo9eiOgB223KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPxi6VZJeSigdpGlYq3AMSGFPIre4ue8KY28j%2BLRGkC6OxrNeSRQTqV1QhMxX8H5za%2BqYZOffGwM6L0THa%2BE8OdFCVMVfqR6tC9O9cyCuHkTR401YiR9qbBOlq18HHy0TPGX8GrLTkUlhN7EWIQ7IJlRJDDB%2FXTFCQmDbYo2WDYNo7nL4o%2BOI6jxj2sPzN9c577T%2FqDarxFDKuQkNdHCZsvp25OQre7LJy325vXf3E5ZqP6A34AV3ANP%2F5PjL1n3U2BCdgAxXkaJmxlJZpJ12qupXmGJCK%2Blu%2FvCrnaF6lvHx0K8LoNSiqmXgDPZ4RZkxNJ8J02xg26DN4VZziYaQa%2Fq8y8Kc5%2F1Kmbsq8oMXBk5OTRMbWSlbkPVsYOQtMPnW6O5tgqiSSJ18hOQ8VO5eOO2SQ4EbpsPng5vAguBO4Zs1Xzht%2Fb2Uehw1GI4uYqx58ZN6YBsYrP2OsH455EzQKlzA1AhsTHsPgH8fxNN3xTHjpOQdCQcZl9Kxyou4ZXCIkMhtUpAE0DPqPCcmiL6AlW6yY0qF5u9iiO0ieDes6JUFlLKGjakMRBCKG04OtdaYwX3W3lfYp32IEtq4abz2PjVMvc5Fhtmzpln6AK3E%2B5qot%2FRM88Fn0Nv0Ba6RMwlYzakkGQygoBAqsWzDj94nBBjqkAXGchKUeTAhugkEbDAlcgfM6wGG9DfIInQebRaTvIZy1JdLVfRoe2TMsTjiD1J%2Fiqq35Ap2iJlYLXTWyfi%2Fh9GTl8l5qdq1mIyg7pv8QldXDqdkNxxT4v9M1nSCTYHHsxgAUVeR2c127mjtPBdU8GrS4ddpoErfUpKt64zpg0TOzLBwggP91tUvDuXJG3ACW8KbAE5Vlvx3SiISPOSDANP3eA52x&X-Amz-Signature=50fa7cdb13ae82504cb364e06c6d7df7697d7bfff60d09a2111a9b7c984f2a60&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HH4ZAFB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDSfMokMyJ3sxrRyiNBgxhfzmCe7T5xPtF2IIYMcwDTIAIgRm7A8t3Cxpo2U11hdriAGr3VMubKYNos8lnDou%2FUNEIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb8xdV%2ByELjJPv4ZircA708IAjBiI7VDrn5tyfnp5LyJYGf62s%2FqvB1DgJnMvLd7MHXkrySgNekpH0Te8habSbKI%2Fzj%2FOhDzgFkB%2BvGaIL9vQjvOBaa6%2FNfMj8Zj0u7Zl6BnuIPVXnUl%2FxZi2sNxcOfwW4vZQJxAMEk2UCAXOTIn8LuqX9YRHqXE3ZOQxm%2F%2BWZ3BUxyQ7u%2BKgH3YCy2hkI9KcFoQSiChep4gB8dkU%2FPDyWSieHUCejNsz5Bj4JDDBTUddv9fGEuEDbu4BqNnNzgPmEW1q8vYVFlvPedAmbxDSz5HIJIZ%2FdTzom1oIZskRcrmRvIgLkKIJFJeg%2FMh03WzmQZ8RZipypFih%2B1w0vHAB2sd6sB%2BfmcvDBsAjqbln2RdAHqwJMqmqk%2BkHuwuoms8HLmuPcopt1BXhvM9liTdOyWfhwq5VHbKfKtxiUQDsekYW3vjjFZT9bgCXh5SJ%2BavDLFBL70nZkycNfLtkWtE5kVW5RrB1nrGZANG2BJrKsOMfhtclkDA6dR%2BGgJp8fZWE78bIjl5En5OpaORAcfUQWDD9ycGEra0bW5OerzLXO8JyIMsOXlyM2TCxF9XEuj2InDv7yhrudVNhcZMXAp812fSB5W8M9Y61AhJ5st5qywYKKB%2BxOtjb%2FZMJv3icEGOqUBfbMIXXE5sF6fVMSb6MgNVUk5I2RY1Vf69DncWMw%2FE4rjwpFXiPzU3u7uZqSMzki04HGES6b9CEcAXFtoeZ5nu66oxJGCc%2BQ8Fm4Csxc5BJAxaVMlht1W0m9owTI7qpB0W85guSvAkXX4rrY1KHBToWRsLMHiJYHWD8qmDJznydoYpkb1bD7cz7YD2s8OnVFmsegTEdbXmMtscndh2h3ExZpimbC6&X-Amz-Signature=95fa807ed64417de05b9253989641e091eed886c691fff7e5e88221bbd78f9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKPKD4Y7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCHHrqhtA5%2BhNtGK9C84YRRYgxs%2BXIg4JZbAXRylaFqUQIgAgXh8amj7xVW2nWhdjDScRypmBeJjV3k9K0sJQJG1U0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCpPIQ%2FRPF3%2B0ID4ircA1SIK3zE3KR%2FY2VJKr469eklfT7vvavqopeHZICgCuPWwNr1jdoWZ3AQ4SX%2FzJuSiByRx7ys0UCGeIeCk6ZIrz%2FKRvVL%2Bx3%2FxPdTAXiYfDWm%2Fb7Kjgl2cwbP7sDy2EYho08nRKkU8RD9gy90WPSGhI3NDYNXngpVIMkR0XEDSfHVI%2BITG8GojgBFBujW8ATW1U1mvYXpEJCrxxE8%2BDme5I5NsexrDh4H2ebbzFXylvxnjDFgz9uEsYEtLXS4RQ9z3CBBiprvqvfG5e7o79KD1AV26fTHwAugvr015TcbOQb5JLi3bXEaMjRjub3h2uolR%2FTjwMq9%2FYqHfvigbnqfYUKshIBfSJx6C%2B9Zzd9V4zNimWsfkjnD%2BeTu4qI7QE6Gy%2FfsloVIi0IlyOZdjdPlpfeVxmm%2FA0qbtlWJTYsJd0I1mjQ8En8Cu3DzOI6NU9zzWcbHZQg5zR2q8ACMnycvKgJxPr9JkhgiTKZRNxEglneZOCCX8ojxMemM4yc7OwfOjfkJjDYz1JZzcEEw70f32ZoITe6eU90jE7SLJPFUpZepIpr7QZrx5j1cSG5SvvPLduhHSwBZbFiVM%2Bl258eNUqi4tJ6PlC%2B1qVbRgLxOg%2FXpOPHGyQYtYI4YkQFVMLD3icEGOqUBACDMekmZfKT8ZkMB6T2k%2Fm8mQ6EtUAhmI9dpiHG8lGneorcapUUaSL01hIv5W%2BgtH%2BYHyR%2Fss3d4yTRjwE5D1%2B3lA7m4EH98KGw6Pl8n4ePVCoNw%2FEMMt8ORy%2Fx9NyZfcSmkoescSNv5etMQAWtUbBCpSCiruvhVJh4EGLzafZuVkdHmTOOwt0wR06h7GmikOm0aIW8CUk7cD6fMfyv6LwWa2WvH&X-Amz-Signature=8dddcf8f88a10a9982f44a6ae802d6da13faaf63bd75feb254f39d73e6c3358f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PPX74K%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoziNX6s5EKCxbOXGLk0xhNPZBF2j06G1FGAC2sOpC3gIhAL%2BbVZbhBZrdnSqzaMSOIUg6DztyDq0QGWo9eiOgB223KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPxi6VZJeSigdpGlYq3AMSGFPIre4ue8KY28j%2BLRGkC6OxrNeSRQTqV1QhMxX8H5za%2BqYZOffGwM6L0THa%2BE8OdFCVMVfqR6tC9O9cyCuHkTR401YiR9qbBOlq18HHy0TPGX8GrLTkUlhN7EWIQ7IJlRJDDB%2FXTFCQmDbYo2WDYNo7nL4o%2BOI6jxj2sPzN9c577T%2FqDarxFDKuQkNdHCZsvp25OQre7LJy325vXf3E5ZqP6A34AV3ANP%2F5PjL1n3U2BCdgAxXkaJmxlJZpJ12qupXmGJCK%2Blu%2FvCrnaF6lvHx0K8LoNSiqmXgDPZ4RZkxNJ8J02xg26DN4VZziYaQa%2Fq8y8Kc5%2F1Kmbsq8oMXBk5OTRMbWSlbkPVsYOQtMPnW6O5tgqiSSJ18hOQ8VO5eOO2SQ4EbpsPng5vAguBO4Zs1Xzht%2Fb2Uehw1GI4uYqx58ZN6YBsYrP2OsH455EzQKlzA1AhsTHsPgH8fxNN3xTHjpOQdCQcZl9Kxyou4ZXCIkMhtUpAE0DPqPCcmiL6AlW6yY0qF5u9iiO0ieDes6JUFlLKGjakMRBCKG04OtdaYwX3W3lfYp32IEtq4abz2PjVMvc5Fhtmzpln6AK3E%2B5qot%2FRM88Fn0Nv0Ba6RMwlYzakkGQygoBAqsWzDj94nBBjqkAXGchKUeTAhugkEbDAlcgfM6wGG9DfIInQebRaTvIZy1JdLVfRoe2TMsTjiD1J%2Fiqq35Ap2iJlYLXTWyfi%2Fh9GTl8l5qdq1mIyg7pv8QldXDqdkNxxT4v9M1nSCTYHHsxgAUVeR2c127mjtPBdU8GrS4ddpoErfUpKt64zpg0TOzLBwggP91tUvDuXJG3ACW8KbAE5Vlvx3SiISPOSDANP3eA52x&X-Amz-Signature=11435be1d991d9b312c91b2c7591b558dce64365d0701ac2984dc51e6c389d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
