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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVNKEKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICLYYjg7daHH%2BpfPQ6Q956RngIU8UHSBdX0Zb6DK6%2FfTAiEA3lHpmYuaINjLkc01gVGTazUq7gcvLw9gt9n11UDd0xIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmjGTlsx9Upv9WjUircA8pDt3vHJKhXtp9HrJtdFKYZIzDUillk9r00EebrAmVPKC3j07ujOEx50bfwMxKaz0Z%2F1kesWonvZ4sftGmW8n%2FeRP0dMvAzhrA9Y%2FTNjTgcridc9Ky2R%2B0fgjCPlRUzjrjlOtBJ0Bhd3VQMq%2FV5%2Fla2%2FL6Aw48Tet4ejKmt33%2FWEAGXUkPGULHRD2afw8vqjYQtEDfXTHZ14khy%2BVDZMQN5WLi9h4alwC0Pe9c%2FA5vhOhJlKntmVHozX0uPqLlhGxNdiQE8T6JsyMz78ApxYqvWlU6fxjwd1WPWfZBrttm1vcsw2SqghyTqqg%2FZAjHWeBLknl%2BkMfXSlq66kjVb%2B%2B%2Fj%2FFt%2BHpimOoimy7o7B%2Fx8hzVh%2FFXERLBLGfC3sljV%2BGJsXwwUxHXwEvRgAFt7cqqXdd40OYjOw%2B75NywJuYV%2BT5UjV9YmdgiTpoGOa0T%2F9rA7tc7RQ34B0gHsuL6qJM3Y%2F4z7fuHMy9%2FmrTLr8%2FsYX6cKBsaaqjZ7hBPrLPEOqbzcDWmWf9R1cSSbXelB%2BpWYVqhXgOESHTxFrtU4ffEipNqhQaIXNq1ANlBOunD8AObR%2Bl970%2BZjcrbDy%2F0wMBdNT3gGdHHqUHluuIENHynpLMpZCLawdrPPhuMUMPHWsL8GOqUBO1wiMpLhxCspQnO%2FQEqIrTX%2BvpyOzKwjsO%2FQSn82%2FLNCgzR5IQDNz935dZ6jYUDw57NZJDASkTz9e3VQUbFolHQnFD%2F3Y54sKThbFPmzs1jCrEA39DpI4wQ7v4HBIvSsZnD88PdRrcO83s9qjupXPWJz8TLtfXTD4y0u%2F30nODkwPTtWkb3fulJCAfbjtHYMR1VzA42O8ojfOyu102KuHpmHihbI&X-Amz-Signature=0f2e614574240f0404d620cb0f3eed5e31c7552f745a47eeaff458d0ffc7ada2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVNKEKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICLYYjg7daHH%2BpfPQ6Q956RngIU8UHSBdX0Zb6DK6%2FfTAiEA3lHpmYuaINjLkc01gVGTazUq7gcvLw9gt9n11UDd0xIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmjGTlsx9Upv9WjUircA8pDt3vHJKhXtp9HrJtdFKYZIzDUillk9r00EebrAmVPKC3j07ujOEx50bfwMxKaz0Z%2F1kesWonvZ4sftGmW8n%2FeRP0dMvAzhrA9Y%2FTNjTgcridc9Ky2R%2B0fgjCPlRUzjrjlOtBJ0Bhd3VQMq%2FV5%2Fla2%2FL6Aw48Tet4ejKmt33%2FWEAGXUkPGULHRD2afw8vqjYQtEDfXTHZ14khy%2BVDZMQN5WLi9h4alwC0Pe9c%2FA5vhOhJlKntmVHozX0uPqLlhGxNdiQE8T6JsyMz78ApxYqvWlU6fxjwd1WPWfZBrttm1vcsw2SqghyTqqg%2FZAjHWeBLknl%2BkMfXSlq66kjVb%2B%2B%2Fj%2FFt%2BHpimOoimy7o7B%2Fx8hzVh%2FFXERLBLGfC3sljV%2BGJsXwwUxHXwEvRgAFt7cqqXdd40OYjOw%2B75NywJuYV%2BT5UjV9YmdgiTpoGOa0T%2F9rA7tc7RQ34B0gHsuL6qJM3Y%2F4z7fuHMy9%2FmrTLr8%2FsYX6cKBsaaqjZ7hBPrLPEOqbzcDWmWf9R1cSSbXelB%2BpWYVqhXgOESHTxFrtU4ffEipNqhQaIXNq1ANlBOunD8AObR%2Bl970%2BZjcrbDy%2F0wMBdNT3gGdHHqUHluuIENHynpLMpZCLawdrPPhuMUMPHWsL8GOqUBO1wiMpLhxCspQnO%2FQEqIrTX%2BvpyOzKwjsO%2FQSn82%2FLNCgzR5IQDNz935dZ6jYUDw57NZJDASkTz9e3VQUbFolHQnFD%2F3Y54sKThbFPmzs1jCrEA39DpI4wQ7v4HBIvSsZnD88PdRrcO83s9qjupXPWJz8TLtfXTD4y0u%2F30nODkwPTtWkb3fulJCAfbjtHYMR1VzA42O8ojfOyu102KuHpmHihbI&X-Amz-Signature=0ebc13c53691c98949c6350cb40d14325ebd9ef5f7d9224190d7ec1589d8cb04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7TLB23%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC9vbcaIkzjJY5038fWefx%2Fmn8tqcTedaUGrHEWedDCogIhAPRK0pz5JxvJK7IpAw4RiWXxGYlnR0CpG6w5W%2BS9vDcvKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy49xBXeCr7raW4KYYq3ANBT6PLMNXSexnbXmKx82%2FNjmSPwRHgbCO30MJMhrRwL%2BF5u8cFwApGYxRVHma1ncIBvu34JBPw%2B7VRkca%2FktgDZum8X3RjMEYb%2FWbCZqyGd5vZr9SX65RVhuPTwadrYv32%2BgCC5AK8WTlIDn%2BQ3U4zr29uOEak5zYHmyVxS0C4OwoqBuE2Wlbti%2FbNaerLT4eF15wFumSB1clMfQpUolRyjdO8QsJuKqskfWo6VH6oXJI9cQvj0VCvUMiWli%2B%2FTtQE6AY%2Bs0JATz9OTmazK1dbQoQUAGEgdjOas4r4L%2FMXarDhsdViQCrebC%2BRrMVWaTGes8vwH%2B0UUWKf4q1nWkRGbc4K52dNnXtYDELPV15A5wwkD4srR1W3jIQhbkbiVSc7Uw%2BjmSDK9zYPI%2FRbqvjIxasF8BK1MR%2Bb3VJjha4SRvVJvrTxxvBkzFoyhsVmOhrcFMDp4gDBBp2YCJpdvdHs6xALtyTCy6Rwig%2BxWoWiKnHto0mzv5nG3giSB2gTKIUh6SOzLp2KYjiurSrWkUEFWkm0LynIo1mlHHeNa50ERNUYt8KJfYdoDmMutWA9iUrzCJnR9p5yKDZYBksO7RvUU60iESUuhc3SHcIS%2BWj%2BWqJwRP2tLLnLISoqfzDk1rC%2FBjqkAUbNURBgi52hSj0tuFb5bSmb6nhyQVndQNVW3%2FDjOEdHT1IB9x%2Bu%2FwxcV2udJtZYBL3wVKrsiPsgf797U43Wk%2FLlGr5eb%2BGfUvc6RkkUHzGCh3dVHja8V%2FP7wT0IW498l4ol%2BGPrgcMnjTkm3%2BGVHGN%2Bcue5WiVy5ZrqVHiFe0u8sCQRXnEJozr269j21yZ3LaaZXvQRUuoR4f6Fddg61TRkxWks&X-Amz-Signature=a000f1c220271cedd88f4e6f99bd53c745fa8e136ce03594ce829a9b666bc6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JNCD2X%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHZkSXzVx9h67qMmx58694EqBFW3mrEzf22Fp5ARcTMWAiB1uE2pM0rljgorKNIz6t06MPAml%2FvRViLSgERDK1GNfiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JBjeFWtAJAMewkHKtwDxm32c3YznnH3RY9inOpTG9jfMZypXULpiStXcJgq%2FlColrUZLmn5pA%2FB%2Fzm1MPbgzDDpDU3rN4jnj4wjExUTQCP9wF1irhU6U0zGwxM7MWzsHlmQpq5PpsFJqE8OFiLq8AsjrbFfmaOST0P%2FhEirJ8Zx%2B8B8iAieTmqqFuNM3Asm49qo6g870VhxrUWVnx7iApcENRE9SSBzW0pPmplWTxaSFLG%2B9TDDXQuIrjEl34pMlEABAyt1b4IzsP9%2FEBphL1nnxVz7B8YKQnchIwsLGiIsXlmdVYaZD%2Fk3V9ocWx2u2JtF9GnA9N5feOKtjHzH0I62JsONoL6gY7VZOagSdtmKyc68oaT5ud%2FWZXONo3phf4zE%2FT5BaSbpq5DAGCX1cV1wdU4RIBZQZE07ChrKHgecoIvqBuzUK19Z8k0Z4udAJ8%2BqZTYmgPkOBybmezw95ZQYAsvM1iAoFNhtipUFr0T82wyh0FqtTZHRSTUaYcLGXcVvPJC%2FzaPhJR7fTYVRWzRCXyjBNCp74bWbLNwI%2FR%2FhhM7gkWu8WPrIoS%2Bhi%2F1wpiFKx0Y0DAY7dX7ccBj%2FWL6ayLphm4W2aiN4cFONAipf5MUQYU2%2FCbH68C%2BTs%2B3%2BkCNfdbfaScBwUhYw79awvwY6pgHxP7hOOfuQsiltWs8gjcKfVWsTaxsvWF6FDNus8q1B8%2BdzwzzJK6H%2BEeZybI3MifDmSHJApwU6HBAuGe%2FS9m8MUE99sXlQK1m79T5GPR8GcT9wQaNhs5r6SyE4oBkkCUOoWANm0JFqimZKrCoXbM9CmVVHplDK2gkyT2XSC8jWSWC7QHd0wXgQyhWfHFqTUWbci1DJsMtzrq7E6%2FKtu5co3IMvkPaZ&X-Amz-Signature=f24ae3b69da1ab8cc0fefd3f95a46a5cca57dfe47cf21039b3a307e54216e385&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVNKEKM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICLYYjg7daHH%2BpfPQ6Q956RngIU8UHSBdX0Zb6DK6%2FfTAiEA3lHpmYuaINjLkc01gVGTazUq7gcvLw9gt9n11UDd0xIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmjGTlsx9Upv9WjUircA8pDt3vHJKhXtp9HrJtdFKYZIzDUillk9r00EebrAmVPKC3j07ujOEx50bfwMxKaz0Z%2F1kesWonvZ4sftGmW8n%2FeRP0dMvAzhrA9Y%2FTNjTgcridc9Ky2R%2B0fgjCPlRUzjrjlOtBJ0Bhd3VQMq%2FV5%2Fla2%2FL6Aw48Tet4ejKmt33%2FWEAGXUkPGULHRD2afw8vqjYQtEDfXTHZ14khy%2BVDZMQN5WLi9h4alwC0Pe9c%2FA5vhOhJlKntmVHozX0uPqLlhGxNdiQE8T6JsyMz78ApxYqvWlU6fxjwd1WPWfZBrttm1vcsw2SqghyTqqg%2FZAjHWeBLknl%2BkMfXSlq66kjVb%2B%2B%2Fj%2FFt%2BHpimOoimy7o7B%2Fx8hzVh%2FFXERLBLGfC3sljV%2BGJsXwwUxHXwEvRgAFt7cqqXdd40OYjOw%2B75NywJuYV%2BT5UjV9YmdgiTpoGOa0T%2F9rA7tc7RQ34B0gHsuL6qJM3Y%2F4z7fuHMy9%2FmrTLr8%2FsYX6cKBsaaqjZ7hBPrLPEOqbzcDWmWf9R1cSSbXelB%2BpWYVqhXgOESHTxFrtU4ffEipNqhQaIXNq1ANlBOunD8AObR%2Bl970%2BZjcrbDy%2F0wMBdNT3gGdHHqUHluuIENHynpLMpZCLawdrPPhuMUMPHWsL8GOqUBO1wiMpLhxCspQnO%2FQEqIrTX%2BvpyOzKwjsO%2FQSn82%2FLNCgzR5IQDNz935dZ6jYUDw57NZJDASkTz9e3VQUbFolHQnFD%2F3Y54sKThbFPmzs1jCrEA39DpI4wQ7v4HBIvSsZnD88PdRrcO83s9qjupXPWJz8TLtfXTD4y0u%2F30nODkwPTtWkb3fulJCAfbjtHYMR1VzA42O8ojfOyu102KuHpmHihbI&X-Amz-Signature=0c675add75da644bc55ee39ad55dfe1ae76acaefc686050619c86967227d18e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
