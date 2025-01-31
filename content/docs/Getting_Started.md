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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PC7XNJN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqAT86Q4IR%2FY5mzzDIt9WhBJ8Nv2U7ZpNMAfTMHqVlmAiEA%2BbHFmI2yGs5iTW7xbKN%2BSdbPCZ35jRPbp8manVmk9KsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJleoNNN%2BgLiS0NM4SrcA1vDR57VnccWQDs47CJjjlOOjySu11TnBQ2HoIhIApKKz8SpGRNhsQMLNli4ucgaygEdxaRUqWGLPIwe6K1C4Zx%2FMM4QVuRq9h7iEQL%2BPzfDQdZ8C8vpnx1i11KpQQHorTGnQoPN3azBKdqplqL7oH%2BNDSuGXvkpjK2L5QdJq0%2BzAf4kb2zx0aFDAiLBKPA4tm7Ot7jZ7SXnjOC9ergnh%2BdpQs4%2B579iVAD0IXJgQb5EEcLC8WT2SXX8pLPEXp0TbuCNG0JOdu3cRpummEvgchDBT6cty8oCQwJ1MQdRK%2F0w8sTKBElEhgDnu9DnjAaKxBn6iiZzHENf%2BD0WD21%2Fa6fmzHZv42YH3aKYAmz78D31jpyg6ewWVGvnDgQ7KRN%2BRhAa6ph7Bw5ucZUXpIxxima4fZ4FBvHad06lcBTaH%2BMkIoQ4rGut2TyznbhjRzCNhjgsfQgtdLhtFc%2Fgu0gM31fVdBEGFQw%2B8%2F8lzBSVqIgKqOpqkGmGtlvUkxsIJxw0cP3Ir9qo%2FKQA%2FJ85s0Njadgv%2B1pcIQYq%2BDBQwp6Rsm7FkAFcOyQdG8SMlnf7r06TAD6Q1vV9fA3IzCLO5bQ1I6JsEVoyDCKAzq%2FrpYztBOgWkmezQgs69Vdm1YU6MIqc8rwGOqUBbEBU4pl%2Fb2EdLrfAyD1Yqi%2FPFVrz8iKQl3FW%2Fkkrhqxj60SKDEV7hkT3%2BjsPBow%2BmxFmV4tJo1d6Rgz7tlfMk0UHe2HT060DOpEVIvHj%2BDw9o6XZ5W1TixGbFVrhiGOJMk%2BYnqXJJu%2FewZ2Uv5IpZdJJzs7tnapA7dIxKkMb7KQeadnq1sgGxBUpCAeXUT437JcYK9zOGDwImxPCS1S%2BWOdfiont&X-Amz-Signature=c00c5b632256850f0a1aaad473304564420daf31ecafdbe747be70139013b31b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PC7XNJN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqAT86Q4IR%2FY5mzzDIt9WhBJ8Nv2U7ZpNMAfTMHqVlmAiEA%2BbHFmI2yGs5iTW7xbKN%2BSdbPCZ35jRPbp8manVmk9KsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJleoNNN%2BgLiS0NM4SrcA1vDR57VnccWQDs47CJjjlOOjySu11TnBQ2HoIhIApKKz8SpGRNhsQMLNli4ucgaygEdxaRUqWGLPIwe6K1C4Zx%2FMM4QVuRq9h7iEQL%2BPzfDQdZ8C8vpnx1i11KpQQHorTGnQoPN3azBKdqplqL7oH%2BNDSuGXvkpjK2L5QdJq0%2BzAf4kb2zx0aFDAiLBKPA4tm7Ot7jZ7SXnjOC9ergnh%2BdpQs4%2B579iVAD0IXJgQb5EEcLC8WT2SXX8pLPEXp0TbuCNG0JOdu3cRpummEvgchDBT6cty8oCQwJ1MQdRK%2F0w8sTKBElEhgDnu9DnjAaKxBn6iiZzHENf%2BD0WD21%2Fa6fmzHZv42YH3aKYAmz78D31jpyg6ewWVGvnDgQ7KRN%2BRhAa6ph7Bw5ucZUXpIxxima4fZ4FBvHad06lcBTaH%2BMkIoQ4rGut2TyznbhjRzCNhjgsfQgtdLhtFc%2Fgu0gM31fVdBEGFQw%2B8%2F8lzBSVqIgKqOpqkGmGtlvUkxsIJxw0cP3Ir9qo%2FKQA%2FJ85s0Njadgv%2B1pcIQYq%2BDBQwp6Rsm7FkAFcOyQdG8SMlnf7r06TAD6Q1vV9fA3IzCLO5bQ1I6JsEVoyDCKAzq%2FrpYztBOgWkmezQgs69Vdm1YU6MIqc8rwGOqUBbEBU4pl%2Fb2EdLrfAyD1Yqi%2FPFVrz8iKQl3FW%2Fkkrhqxj60SKDEV7hkT3%2BjsPBow%2BmxFmV4tJo1d6Rgz7tlfMk0UHe2HT060DOpEVIvHj%2BDw9o6XZ5W1TixGbFVrhiGOJMk%2BYnqXJJu%2FewZ2Uv5IpZdJJzs7tnapA7dIxKkMb7KQeadnq1sgGxBUpCAeXUT437JcYK9zOGDwImxPCS1S%2BWOdfiont&X-Amz-Signature=6a3e7ea67db75c5d42885a47a0ead58567ba7fe13c6a1c35f85e0c8616c55ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDK725V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjMbF%2BoX1QhLcEXztr71BAg5OYOMnwKf8FtbfJjq9cRAIhAOw7LrJ8UhpNJTMgdsBpmvW%2BLroDSPd4dS%2BFSvyPkru0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz76Lk3gk8MHYmeYEsq3AN%2FqpukT6JRrtl9ymLOTbUQtZz9MQYSDLVajsNmgoBnd5ZibfyTm%2FCm%2Fz4fWaWmsHclqow02iniAoPmna7ybRAbWhHXwkmcGNOjZk4dwUXZ%2F0rGVoR0lahZsiiR43DohiHbYTjEf7DKVeLoJYjqQD5GWlPPZWq1yIHA7iFGXMeIcDzGLrsBPzeTzbwlejOLClc6MlY393%2FOZC4ZeJoV7r9qjF73H41ZqbDa6uY7f8Jk9eMihMK9sSPEH1muQthR%2FOgFI0qYoP2U4fZosyPWtJlD8wd1FPr%2BntDARYq2jiYP8%2BTwmeYYZLlGiu46EO9sT3NA43jRyR%2FMpi64%2Fk1dStYkT8pwvLOvGSLPC4exqThO5VG%2BKGP3zBVWHmzfiaGtT5SAHHGZnBx3iG%2FNXyWL%2F4kSAdSdJ4oDxNu%2Bd6b%2BjZiZJMycswq3fDQb0Is3F7%2F27DDyQVx7QPclX9v6bLnem725vJ7YvmtE8OD8vNpIoO6HQ89KP3sH6upj7TYebPUDOZV6z7qCyCxxlMBNd8%2BtZN9D%2FRHVWLWV0P54XY3FluEfgQ%2F2DOAZ1cKB%2FdfKqC6sSYdqk3yWUw6Iyw2XB9snrSCBELmZJjBSip4CRZ1uIXv3kFwivDgGwJo7Kh3VhzCEnfK8BjqkASVrfv8EcqtaZrx6itOrpp8wcLnvTHxEqbBxHLvyS4Hr0D8PjLWnw%2BuZnJ%2BsBALjn5Rkm1GHZzndfq7nIVgWLLxKTbPyDs6kfsNJyycpT5qMCxHtmojJ6boZDGfSRiF1QXso3ecbfdLk9radCCpoS5rhxg8HNLOW6GopM3OpK0RyHLPQyJiqXJCUol%2BYUM7BjeWx74iG%2BbXUxERRfxLMOhNNWxN%2F&X-Amz-Signature=1d5593ecb6841a74b05e4a32ede31f0d09f158b6834f4b7f02468fadd8ca5b80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HRMU3U%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL2yQ%2FpUOnCA03YpmKbdIy5aYml2tkVQHkZqZ6eqC3AAiAn4qtQV%2FBRR7by3JuUYcvKPQD5f%2BqW9xqT%2Fs1UgVgVLSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrWmq3EuDyEzKxdEwKtwDqzcfq2XBBipMbLC3B5E8hsEOGAXLwzS%2FfzgxGQyyjQfIq4gsvbK8Ucik3Vv16ED4NAwN3dLOnTPd2TKDsD6pKvgNLQXbNJ5x1Oo8E%2BFBPGOna7dwqoL3bsaJpf%2B8hFWi0%2F4dMOTg8Cte42c5TVF%2FpDyXsLjTfBKy2NV1JY7RM%2Bep9e%2FCUdGaT8YMOjc542yFZqUSOXkD4hW8IB%2B5QTNMhfxQqdL5Jau%2BrkTJHyqMlPHULPvIE%2Ft4ZU14M8zLoqFjn1k8j54xMBcy1HRzi5uEpqATrw6v68FTUypTvIpEhkmQFBOJNWpd9z9P2yw5vESf1ZIeo%2FZhfN5OCx0fCa9a39wB4c8fgNA1E0w7vHjV1qFZGQr5WghF81fhqL%2BHMI%2BevdljUb%2BA9koGF09T7KUwIuw8OaqCxNcokbPyw257gYruml3OfxP2e3vjbxqhytddWNXrawj8WwANhCNIGAgrDSrLuYf7TZghNSNMODkufFaOPUhfbnOj0Bk4rrBReDuLvfvnpJ72RXlx%2BP1h4a6PHvCpQ3qHmzDw8L9nALo9Lh3epiDYxLrIX4Lcq%2FF%2BzOLvrGIuI5GIm4STXf3r0i2rt1Z5madJ2phuH3H5cv1N21kHWIVYuWuMKw7aLgEwi5zyvAY6pgEGhs5PTwNvyz2QX2biBfUr0SN3qkLAfeqJbDa%2BQm%2BPLKBgoIjM%2BNUeRV5mIZbuFDo3RVuQOs2pOQK41n0Y8df1xs%2BgWN5iit5AOkmt%2BDlid74VRsX6sc7o4tyZNeWChB1z4DlWp%2BFmeisWDPNggW6bcDYl6yIZeK0Xa4R8%2Bs1%2BBph%2FVQE4MAx7VyGoidOzfrtNNl8JiJk1Y9J8nHjyXVy159b6U%2Fkb&X-Amz-Signature=23c747f04f9abb84e04dc978d4254f337e100e105f1f7cf631f14cf729bf0a92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PC7XNJN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqAT86Q4IR%2FY5mzzDIt9WhBJ8Nv2U7ZpNMAfTMHqVlmAiEA%2BbHFmI2yGs5iTW7xbKN%2BSdbPCZ35jRPbp8manVmk9KsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJleoNNN%2BgLiS0NM4SrcA1vDR57VnccWQDs47CJjjlOOjySu11TnBQ2HoIhIApKKz8SpGRNhsQMLNli4ucgaygEdxaRUqWGLPIwe6K1C4Zx%2FMM4QVuRq9h7iEQL%2BPzfDQdZ8C8vpnx1i11KpQQHorTGnQoPN3azBKdqplqL7oH%2BNDSuGXvkpjK2L5QdJq0%2BzAf4kb2zx0aFDAiLBKPA4tm7Ot7jZ7SXnjOC9ergnh%2BdpQs4%2B579iVAD0IXJgQb5EEcLC8WT2SXX8pLPEXp0TbuCNG0JOdu3cRpummEvgchDBT6cty8oCQwJ1MQdRK%2F0w8sTKBElEhgDnu9DnjAaKxBn6iiZzHENf%2BD0WD21%2Fa6fmzHZv42YH3aKYAmz78D31jpyg6ewWVGvnDgQ7KRN%2BRhAa6ph7Bw5ucZUXpIxxima4fZ4FBvHad06lcBTaH%2BMkIoQ4rGut2TyznbhjRzCNhjgsfQgtdLhtFc%2Fgu0gM31fVdBEGFQw%2B8%2F8lzBSVqIgKqOpqkGmGtlvUkxsIJxw0cP3Ir9qo%2FKQA%2FJ85s0Njadgv%2B1pcIQYq%2BDBQwp6Rsm7FkAFcOyQdG8SMlnf7r06TAD6Q1vV9fA3IzCLO5bQ1I6JsEVoyDCKAzq%2FrpYztBOgWkmezQgs69Vdm1YU6MIqc8rwGOqUBbEBU4pl%2Fb2EdLrfAyD1Yqi%2FPFVrz8iKQl3FW%2Fkkrhqxj60SKDEV7hkT3%2BjsPBow%2BmxFmV4tJo1d6Rgz7tlfMk0UHe2HT060DOpEVIvHj%2BDw9o6XZ5W1TixGbFVrhiGOJMk%2BYnqXJJu%2FewZ2Uv5IpZdJJzs7tnapA7dIxKkMb7KQeadnq1sgGxBUpCAeXUT437JcYK9zOGDwImxPCS1S%2BWOdfiont&X-Amz-Signature=7f825d655043d53a66619505743275679f9812d7031b9845186eb110e4e9ef4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
