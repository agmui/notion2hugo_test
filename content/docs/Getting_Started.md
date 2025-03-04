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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZECJ5VFB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYnPPKGD%2B0Z4UB9DALEtdEF5iKBEXfticLPgJ8E8qZAiEA8dV8c4aomZjqWqYStc%2Fwi1aImvw9v0p5wivEaVU4zxQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTwzsWIOBytymNzlyrcAw9I6JWj5vU1Ct7%2BXCIsasmFLWUnDNnhGV6PS1HdNMKGqPNoEna8ZZIy7q1mkRT7%2BjyQOttAdZ3lDOYR%2Bgc6LqaufLhkQeGs9a%2BaCuFhNSythtgc64cWcm3R1UYf8L6I4QoC0FuhJkzjjQyqVb%2BuwAwgJHKsrh2RUSdTdAvt2Y3OjLMmY6Nm82y%2BuNiibLSFQ0c%2F7LJBL3iZdMvSVpjPiJJ9aUvBdwmQlJKga6CeY7u2J8nilN%2FVsPygbWgMVhVznXCTHNtQePtJkVT3yZoi2Ht4qDOFQvlRu39ytW5RKM2%2BIAvCHTj1YTiAk6mTi2YgrZ4XfsuolJF64Sz%2BBHEElS%2BtU07BC18XmBcp6MYOAlrC8fn2R2WnnlQXMt4dN4B2T6BE%2Feqp4a0J2GuTTh0z6TJrNzLJU1L8KcIVY49Pz5pLauWJrLgg1p6BJHRWTZ5%2FoEL8G6%2Bzx6yuduWvQTGJf8GwzJ%2F0Buke020a7j5qEkkKNuP2iD%2BJf9s1C4RT0vmodnK4Qg9Tehmav5wIbGpLFtvsk09QINSfAJCKrt36LnCZYaRnFCD%2B%2BoM3hdJEWxCV5OJhPG%2Bk1z8dldd%2Fa11GI7mZXWae0PtR8fRe3YsUbvqe%2BVSes9o4Etk8MRP8MJb4mL4GOqUBubpW1D5DWgfsgQOUs1Lf1gVM2QD%2FSFM6L9aLNyqWXUmab9E7B6JemWGc47F%2BPUQAsOQqPJaVcLkJRomiHnNeifRqCWhicOReZBGWa2NPqZTZVT0NHxNaDIbUPUHU7b0eHIALT0JQnewIRcEy8aaPfA%2FrNZ3mY4kMUsyYLYgFR4YnV6AYA3HeyPZSmVC5rhFWo%2FHKks5sjhczZNSnda9vELe7iK9Y&X-Amz-Signature=8472d480fc61d5cb633a35f5b406cd9f5709b455f621db51242af96842d91e01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZECJ5VFB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYnPPKGD%2B0Z4UB9DALEtdEF5iKBEXfticLPgJ8E8qZAiEA8dV8c4aomZjqWqYStc%2Fwi1aImvw9v0p5wivEaVU4zxQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTwzsWIOBytymNzlyrcAw9I6JWj5vU1Ct7%2BXCIsasmFLWUnDNnhGV6PS1HdNMKGqPNoEna8ZZIy7q1mkRT7%2BjyQOttAdZ3lDOYR%2Bgc6LqaufLhkQeGs9a%2BaCuFhNSythtgc64cWcm3R1UYf8L6I4QoC0FuhJkzjjQyqVb%2BuwAwgJHKsrh2RUSdTdAvt2Y3OjLMmY6Nm82y%2BuNiibLSFQ0c%2F7LJBL3iZdMvSVpjPiJJ9aUvBdwmQlJKga6CeY7u2J8nilN%2FVsPygbWgMVhVznXCTHNtQePtJkVT3yZoi2Ht4qDOFQvlRu39ytW5RKM2%2BIAvCHTj1YTiAk6mTi2YgrZ4XfsuolJF64Sz%2BBHEElS%2BtU07BC18XmBcp6MYOAlrC8fn2R2WnnlQXMt4dN4B2T6BE%2Feqp4a0J2GuTTh0z6TJrNzLJU1L8KcIVY49Pz5pLauWJrLgg1p6BJHRWTZ5%2FoEL8G6%2Bzx6yuduWvQTGJf8GwzJ%2F0Buke020a7j5qEkkKNuP2iD%2BJf9s1C4RT0vmodnK4Qg9Tehmav5wIbGpLFtvsk09QINSfAJCKrt36LnCZYaRnFCD%2B%2BoM3hdJEWxCV5OJhPG%2Bk1z8dldd%2Fa11GI7mZXWae0PtR8fRe3YsUbvqe%2BVSes9o4Etk8MRP8MJb4mL4GOqUBubpW1D5DWgfsgQOUs1Lf1gVM2QD%2FSFM6L9aLNyqWXUmab9E7B6JemWGc47F%2BPUQAsOQqPJaVcLkJRomiHnNeifRqCWhicOReZBGWa2NPqZTZVT0NHxNaDIbUPUHU7b0eHIALT0JQnewIRcEy8aaPfA%2FrNZ3mY4kMUsyYLYgFR4YnV6AYA3HeyPZSmVC5rhFWo%2FHKks5sjhczZNSnda9vELe7iK9Y&X-Amz-Signature=6185bbaa4495d7f657ab1fe8465361c6b1c7c7acc8d9dba345b9b42ea63e4dca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDVRQJN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF3pUzFsGyRoO86NfwRbToZL22XABWXc%2BeSMUkrj1m%2BQIgVKTKFDmepVIIwBaZIgkNGed19jZYjytq8iX9asphU4wqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnZqO8SFrTqESDdmircA4cI4e7I5YNepCXj698JfG9MbDdMcYmOX4W1IC0yx8%2BtFhAhUPq4x4TGNoqyxn%2FeFJvFkLNWVQgWIWXFeJ4Qqq4mGbAWi3j2AZIEbs%2F5QSXJH4e%2FqPcXiAXmvC9sBrl3keEQsongF9sbc1n8UB%2BMtJdI%2FAXD3NIBQBvLBJXOqYASL0BT7AUCrHPcY7CyONMvRulNwyCvA%2BKQdi0MjO4HSOYjkr0jMvTWOhPTPyaTmafjtHV1Df1YyzQoCD%2B5%2BdqLdpbN1909WQMBiAyYXYgfWT4ieK0wf4k96JLE2tIeZpuAPgwHwBQOX2d6S6CAdj8NC1JxQqy6G2o8NawdbmvIuhQbYvvAR%2B4VQB38tXw%2Fbtzydqyw6a3EqwO18bpkPmXJ2JP%2BVA635qSlVmyEGs1xHIsHxLhhirnXQtlQCb4vlDEgFEQ6ZT4MZPZL4qD3se5wwlrbCeIfAH0zPqYXaXEq8cPWI25kLxH5LbHaDx6QotIvq8JGS2tmdjhQfaV8yta8tB%2BAmAVMoI13NkqBSZM8PCGM1AZTOvqGCU%2FEnujq95ZdU1whBbNZj8a7hwHfmOZixLXVy8zIPjw5C1GaNEL%2F%2BCp%2Ffq1fYdb5GKEVrMP9xc364cd964KhuH8O2l97MIT4mL4GOqUBWiMuA%2FZ%2FcMiG6F7VjA6jdvTOHfpaN4Y5Ph%2BEid7f2f840QbYxXdUWuOE2ukIPXy0z9we2T%2Fp8TKniqGb7ZyzL3oGJIzl2fSjDa1xrcPEE59ifXLAmGacjDdExcCezsWNdzkkeM6Qnq%2FjeLaLcAeYovt2oIvg9I6HeZi7FXOk%2FDnaA38tkn%2F9lyGEEoQZlUu8uIBPWQOWg4rPWTeBG%2FHEEbZ1vdcO&X-Amz-Signature=de57ef746aa50f0de6c66376ac9aae97153c942e6d60f1fb8f0174a77d73d8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWHUU4H%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPWnbzoGHZfVXYLUJawnnChhsYcjUL4gR1%2BdvFok3pAIhAPdO2OdCBe2k1uy8938kqCCAz1IdNgqXVmYFJv52cA72KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzowjLVSBtIO0k8B9oq3ANhH1GygKTg7e5e7Q6SemHAQJ4Dp6qvDT1qMG6osPG8P6uwx6zmKIGI8dXOTHTeL93czG9KNzp73qhXLoVch%2FnUOuIKQ9P9roZSei89L0a5bnL0omx8MynOmCdXSBRl1PyhAq0HSrlXo0tgr5wvDmkrs%2BUsqbLrNsIQ4D8T7CPSyH7pnnIhGeRe9npBiIYsC9ZKLJHNHBU%2FaFPeYBT32hntuRIPUn1i2h0RGzNbhCGMuRwilQXUZ0bZCld833lyqicw4XKgJF66rzt2JWLVzat%2BS3ThIvCqAs%2BF8CWv4tFbOqzBARprJH4xCZZd6eNS8AjEO7TQaBcSjUX%2BW6Jm5dfS8iYu3qGe2qnjXLkLt%2FW3sOYdbeZdssSqpwd18fgvyzzocQnQHzc1jopNs50ym5cvlvyioUOLhLHzGC3cTOZq5TfaKd3ZRXC2m8Fok17UNssVlRJi9Av2kB6%2FK8xGmHIJZQXVFr97w3UMMkbxiMQeB0Xg3MwY3JO3oF9AxxYicIPf3tjpdVZ2wX4ge7%2BwEiqWzNAHxXrTOmQv1NAnnK2JBgI4gKoUZDr0teM20B7wkXK8RHTtK7DgCkGWpTnwrWIvPwgrk%2FLlXX%2B47XVHlIO2TApVibNhfrqh8zKPmjC2%2BJi%2BBjqkASrZmhIrmmpQlIPphaqf9vosEV%2BfClmhxYP%2F0kYFl31%2B297eb2H1XC6IGoZ6e%2F4fwuQhwzw9xsyoTJt%2F3jMA4dGZW1OtJkx4iXvaqMAc%2FhEe9vNImeK5xNRNqPpJbPX8q%2Ft144ORcGExDFdDHhYtgYTmCIhlUAhykFGPnnGzfy8Eyim9%2FkYDxj5ILzzbToB8JJVqWyvOVzILEh%2FYPeMManDVGEX3&X-Amz-Signature=5a7a8abb7fee4b269ae4b2dc9b1440cdb5c8c1f3a2cb3d54f1ba485a129410ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZECJ5VFB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAYnPPKGD%2B0Z4UB9DALEtdEF5iKBEXfticLPgJ8E8qZAiEA8dV8c4aomZjqWqYStc%2Fwi1aImvw9v0p5wivEaVU4zxQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTwzsWIOBytymNzlyrcAw9I6JWj5vU1Ct7%2BXCIsasmFLWUnDNnhGV6PS1HdNMKGqPNoEna8ZZIy7q1mkRT7%2BjyQOttAdZ3lDOYR%2Bgc6LqaufLhkQeGs9a%2BaCuFhNSythtgc64cWcm3R1UYf8L6I4QoC0FuhJkzjjQyqVb%2BuwAwgJHKsrh2RUSdTdAvt2Y3OjLMmY6Nm82y%2BuNiibLSFQ0c%2F7LJBL3iZdMvSVpjPiJJ9aUvBdwmQlJKga6CeY7u2J8nilN%2FVsPygbWgMVhVznXCTHNtQePtJkVT3yZoi2Ht4qDOFQvlRu39ytW5RKM2%2BIAvCHTj1YTiAk6mTi2YgrZ4XfsuolJF64Sz%2BBHEElS%2BtU07BC18XmBcp6MYOAlrC8fn2R2WnnlQXMt4dN4B2T6BE%2Feqp4a0J2GuTTh0z6TJrNzLJU1L8KcIVY49Pz5pLauWJrLgg1p6BJHRWTZ5%2FoEL8G6%2Bzx6yuduWvQTGJf8GwzJ%2F0Buke020a7j5qEkkKNuP2iD%2BJf9s1C4RT0vmodnK4Qg9Tehmav5wIbGpLFtvsk09QINSfAJCKrt36LnCZYaRnFCD%2B%2BoM3hdJEWxCV5OJhPG%2Bk1z8dldd%2Fa11GI7mZXWae0PtR8fRe3YsUbvqe%2BVSes9o4Etk8MRP8MJb4mL4GOqUBubpW1D5DWgfsgQOUs1Lf1gVM2QD%2FSFM6L9aLNyqWXUmab9E7B6JemWGc47F%2BPUQAsOQqPJaVcLkJRomiHnNeifRqCWhicOReZBGWa2NPqZTZVT0NHxNaDIbUPUHU7b0eHIALT0JQnewIRcEy8aaPfA%2FrNZ3mY4kMUsyYLYgFR4YnV6AYA3HeyPZSmVC5rhFWo%2FHKks5sjhczZNSnda9vELe7iK9Y&X-Amz-Signature=fce84b384be41bcfec612afe02e86c02e868fa4935e8dd0929b51cb8d5752b19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
