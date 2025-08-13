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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQPLU7A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYGl4ZdHMrS0DeJ%2Fj1%2BlgBQdPI9Y9ZlovNHOwUkk537AIhAIn73bHgFUaai5r0BWKTHkTNYSO%2BpsqBeSaVau0quZSiKv8DCCcQABoMNjM3NDIzMTgzODA1IgzE3td01T1qdFW8LGEq3AMH8qp1JhKC7S5AZc%2BD4f9CPC%2FIucJCWKw2VRxT2QHqyR84pdffRhERb7N5B9G4EcE7tKaEUrDLUtbvjrluVkBAfhxhDI8D%2BJWs1QhBxJ%2Bn2fxDaczKVhgbhSoSixs1cyZfM3qF9carns1KuGSTHN9bSseBhaoUE9msNOsGuluKe24gCKR8UKbitO6bab0wIE2SPCqBKyleXBKTD1NHrjzGJ0u6gwK55HG6eDnUtoMT1yIqHGTaMLxn5lQScRCgFAy20E2rhciubIHKLQre5y2%2FpP7C9sTLGdhC5rrcGxpLHF4kJ5duPeSArtx%2BjFbXORZBN%2B2pZYG8eXxOSItIFQEFttijDhGOyrHPfgJGxJBNNI%2BmzWs1O9axwccbyx0OnkMXsTlxPtRfmiC1As5aVyYhclCaDCnzbFqKsJffktovT8aVG5aJaW62ZL0lpTny8tcWHhCm%2FDP6CQJsbjyJBZG1zOWC56iBXJ%2B4N9qJJITkhGezzU1XhxPKdwDdyk0OXX0GA4ujqUSa8Qhld9Uh7N4G30HK4irt7ZTFYRgQ45EBItAjTEXfwwtP2g4Njus4y8eXAZBGO%2BDG%2FlWbgrwFovxJalFL6QNQHPmKi5KfsDjb9TQRy5%2B0gdbtfWnkGTDF0PDEBjqkARuFzC6yxypN9l0tmm24a4%2FvXfBp3g2cSnvZ3MYkocxHB37nV13E63X4pzhyIoLS%2Ff%2By%2Fz2AWmPvqTmJN6CmDtq%2FJMjAmwSfPIRZcKWRwFsuMr5SnhLY6G0LbES6nM2uaQxRVqgCxYAE5tz02OkUSkHHVLn616CIHLmOmtefO3eazxNfRXhF%2B3Cv%2BqZK3k3r%2BB55Bc4FIrGNyyi2rmF25Eaasmbk&X-Amz-Signature=184bfb0fd8b9e94a1b4dfbe7fff17c8c371db8c0819814e5be0e075c56cc4e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQPLU7A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYGl4ZdHMrS0DeJ%2Fj1%2BlgBQdPI9Y9ZlovNHOwUkk537AIhAIn73bHgFUaai5r0BWKTHkTNYSO%2BpsqBeSaVau0quZSiKv8DCCcQABoMNjM3NDIzMTgzODA1IgzE3td01T1qdFW8LGEq3AMH8qp1JhKC7S5AZc%2BD4f9CPC%2FIucJCWKw2VRxT2QHqyR84pdffRhERb7N5B9G4EcE7tKaEUrDLUtbvjrluVkBAfhxhDI8D%2BJWs1QhBxJ%2Bn2fxDaczKVhgbhSoSixs1cyZfM3qF9carns1KuGSTHN9bSseBhaoUE9msNOsGuluKe24gCKR8UKbitO6bab0wIE2SPCqBKyleXBKTD1NHrjzGJ0u6gwK55HG6eDnUtoMT1yIqHGTaMLxn5lQScRCgFAy20E2rhciubIHKLQre5y2%2FpP7C9sTLGdhC5rrcGxpLHF4kJ5duPeSArtx%2BjFbXORZBN%2B2pZYG8eXxOSItIFQEFttijDhGOyrHPfgJGxJBNNI%2BmzWs1O9axwccbyx0OnkMXsTlxPtRfmiC1As5aVyYhclCaDCnzbFqKsJffktovT8aVG5aJaW62ZL0lpTny8tcWHhCm%2FDP6CQJsbjyJBZG1zOWC56iBXJ%2B4N9qJJITkhGezzU1XhxPKdwDdyk0OXX0GA4ujqUSa8Qhld9Uh7N4G30HK4irt7ZTFYRgQ45EBItAjTEXfwwtP2g4Njus4y8eXAZBGO%2BDG%2FlWbgrwFovxJalFL6QNQHPmKi5KfsDjb9TQRy5%2B0gdbtfWnkGTDF0PDEBjqkARuFzC6yxypN9l0tmm24a4%2FvXfBp3g2cSnvZ3MYkocxHB37nV13E63X4pzhyIoLS%2Ff%2By%2Fz2AWmPvqTmJN6CmDtq%2FJMjAmwSfPIRZcKWRwFsuMr5SnhLY6G0LbES6nM2uaQxRVqgCxYAE5tz02OkUSkHHVLn616CIHLmOmtefO3eazxNfRXhF%2B3Cv%2BqZK3k3r%2BB55Bc4FIrGNyyi2rmF25Eaasmbk&X-Amz-Signature=fb4ce06afcadfa81c6aa1215f8171d1e1173fbcf2812cfc870008000ba78557e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQPLU7A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYGl4ZdHMrS0DeJ%2Fj1%2BlgBQdPI9Y9ZlovNHOwUkk537AIhAIn73bHgFUaai5r0BWKTHkTNYSO%2BpsqBeSaVau0quZSiKv8DCCcQABoMNjM3NDIzMTgzODA1IgzE3td01T1qdFW8LGEq3AMH8qp1JhKC7S5AZc%2BD4f9CPC%2FIucJCWKw2VRxT2QHqyR84pdffRhERb7N5B9G4EcE7tKaEUrDLUtbvjrluVkBAfhxhDI8D%2BJWs1QhBxJ%2Bn2fxDaczKVhgbhSoSixs1cyZfM3qF9carns1KuGSTHN9bSseBhaoUE9msNOsGuluKe24gCKR8UKbitO6bab0wIE2SPCqBKyleXBKTD1NHrjzGJ0u6gwK55HG6eDnUtoMT1yIqHGTaMLxn5lQScRCgFAy20E2rhciubIHKLQre5y2%2FpP7C9sTLGdhC5rrcGxpLHF4kJ5duPeSArtx%2BjFbXORZBN%2B2pZYG8eXxOSItIFQEFttijDhGOyrHPfgJGxJBNNI%2BmzWs1O9axwccbyx0OnkMXsTlxPtRfmiC1As5aVyYhclCaDCnzbFqKsJffktovT8aVG5aJaW62ZL0lpTny8tcWHhCm%2FDP6CQJsbjyJBZG1zOWC56iBXJ%2B4N9qJJITkhGezzU1XhxPKdwDdyk0OXX0GA4ujqUSa8Qhld9Uh7N4G30HK4irt7ZTFYRgQ45EBItAjTEXfwwtP2g4Njus4y8eXAZBGO%2BDG%2FlWbgrwFovxJalFL6QNQHPmKi5KfsDjb9TQRy5%2B0gdbtfWnkGTDF0PDEBjqkARuFzC6yxypN9l0tmm24a4%2FvXfBp3g2cSnvZ3MYkocxHB37nV13E63X4pzhyIoLS%2Ff%2By%2Fz2AWmPvqTmJN6CmDtq%2FJMjAmwSfPIRZcKWRwFsuMr5SnhLY6G0LbES6nM2uaQxRVqgCxYAE5tz02OkUSkHHVLn616CIHLmOmtefO3eazxNfRXhF%2B3Cv%2BqZK3k3r%2BB55Bc4FIrGNyyi2rmF25Eaasmbk&X-Amz-Signature=e5050bdc08e3bb6d388a2535f5e211b14a5ed611c0867057527caebb594f6f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBV5JLH7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSGZJraAIU7RUNnzmvHcWLe%2B8qGSmF8iHqyZTnWcoMTQIgB%2BK2i3%2BzZ48v9bbx9JztUWk0hi9xyvSjYcV6kyy8TwYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKIYqZX6jYqp5QHx4CrcA%2FgOTBS0ZYdQpKDJh8fFO6D5rnRoNH3D48HRE9ErX%2BIHOYZqGFZk3ewkbQlLaab6cSyOmc4kLF6WLvlm2kPFUg86GhTsb2woydWRcIo1yhGckrhY8q%2B5CIzMY7xAlEFhiLLoT%2BgMi90O%2BTgwL4hden%2B7Q9quYmpRv5yrZCqSLlLBm56gG8uE4hChKXuPDnze9wV0kiKDNGKWEeR%2FNt8suRzMkl84RXDYFlEuniNknUKbzkiQ4UXFw5ki9u7QOXHLbmw3NihI1a4suAuCUVgfyy9rvj%2BblFRx555LaFn6CHdNswq7kesd6pD5nH1zuVSbNZ38Qn%2B35TMwCxPzXe2tDhRu4lqnYUsE172FytstPUY%2FLxVcntBYyzNQUGro9aSTfLwCWYshYi30pgWi5VJEeqQP6O0K%2FpAiDFFqvtjtW1xHPY4m7d0UG%2B%2F4NQi87Pvy1rGXxFG5ZexaQfyErAujawfrbWFrWWRtVHeqIJ1%2FQf7YiOu0FIR5pA4PeX4BUFy4QvrIARVBotxkeNuZAzXtjBRbdF9rfrUWqQddj0eXSg0rSh8G8NUX283kM1GG8Vj2sQxflTi0%2F2hvhPKpSKlJbHhmGRf%2Bql4LMZQLaSZgR61tBQ3avkF12fFk3imwMILR8MQGOqUBPGxpgJT6gQx6jqyrc7FAitPOqrG1%2BV3OWX4hKzayCWXJFHFWC65uhWBhLNuR6VfBDxYU2RsB5EUFYU%2BclmgqCokvFL0yEbuYfT8Yno%2F7fEyQQAU2T4E9kD9T9tlVAMBBNWesmb6RGV5iTsKS%2B%2BJA%2FBFf5Ziq8pdGMDIvqjMgSOrjvDrCU%2FIe5S4aTOy98A%2FYL9W%2FNmFWq6Bcr2nsMcTqjBZu4PDY&X-Amz-Signature=3546f1a9700406c97f8a93dbbbdfea17e065cce422dc168601adffb8238a031e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNX6LBHO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuEl6tIP8YY5MX6BNg%2F5dBBEkMVd0DTlrT7rUAOYr%2BtgIhAO2HoKoB94OUgB4hH%2FJ5kowqY9N656jc67tkhStWw41UKv8DCCcQABoMNjM3NDIzMTgzODA1IgwSRBprmEfZbvdoUZAq3AOLV5eSSCxsG8ImHD0rE9AkGWd8eslFWspJxvy7gMiPF7ks3rUDnb2tiIpTvjAvIT42OtvyJV%2B8mjRSjYKkCYkIsUe3hbnWCyIVtijprJfgUhkt38EjBAQjH7CQuLbLAjk%2FTocM8QGpEIYdQ1GYPhsVJr%2ByYL7hVbUdBDGfjBIaydFGCNOwrYaOoSOAZD3852AN89xVczGMLbGOVxY5WOpv9dM48DTrWLYKKSFH4XrbU3RipmD1rbOZcNQtOKNIj3Wq89yWR7TVxQB0Uz%2FxikU%2BagiD5z27ImTOXINeSS5MaUw4dqk2StBnjkPO%2BMYhz7Erajpv%2FoZaS%2FFTgjd12OrbEoOZZIDbs1qOSt7F8EQ6ukioO%2BbNfwrtP0v9GgbwfUF6AV3VOcGiwAIlGK6BPbIevmDHjU3bx1sSrhltauizmTtjDgXdOgvo%2FKD2KttQhDxpMYcp8OBMFow6AJBFnF%2BKj1%2FF9cgJorWG51FU4YuMgu%2F2XvkmmbJZ0fXhTsc0ANDa7qlVZ%2BLRPTTcIgxXqCAi%2BEmSvSAG9nscXm0aya7QpkmQUp0flskGNHO%2BA0%2BnZxEkz6lJR3Q87oQqE9euTUBQDfs7twyHqZtpxG1YC8f730s4iVWVAuEO29h6EjCt0fDEBjqkAc4jxNDQN%2BU1criBA3lxnJdaOgmBjKKpMW6iv1U%2BVHhcaXazAccLYYpK1XhUFMul7ZC%2B%2FpQHvuJzAHftLBdzeEpzKRRjxt58Cjtl7peeraqF%2BqMACnDfQpEJ9sQjnepXkBesdaIMGEoPwni2W2cmjpayFpupkjd3jKQT5%2FOAubkirEWJfrGSa9TUFEW2OU%2FmFolYg98Gg7LRrSYxwMwMnaIr8RCb&X-Amz-Signature=c3ea902edfd2493649ea0e82d6711cfbd92ea2554da490492411b02b44e2cfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQPLU7A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYGl4ZdHMrS0DeJ%2Fj1%2BlgBQdPI9Y9ZlovNHOwUkk537AIhAIn73bHgFUaai5r0BWKTHkTNYSO%2BpsqBeSaVau0quZSiKv8DCCcQABoMNjM3NDIzMTgzODA1IgzE3td01T1qdFW8LGEq3AMH8qp1JhKC7S5AZc%2BD4f9CPC%2FIucJCWKw2VRxT2QHqyR84pdffRhERb7N5B9G4EcE7tKaEUrDLUtbvjrluVkBAfhxhDI8D%2BJWs1QhBxJ%2Bn2fxDaczKVhgbhSoSixs1cyZfM3qF9carns1KuGSTHN9bSseBhaoUE9msNOsGuluKe24gCKR8UKbitO6bab0wIE2SPCqBKyleXBKTD1NHrjzGJ0u6gwK55HG6eDnUtoMT1yIqHGTaMLxn5lQScRCgFAy20E2rhciubIHKLQre5y2%2FpP7C9sTLGdhC5rrcGxpLHF4kJ5duPeSArtx%2BjFbXORZBN%2B2pZYG8eXxOSItIFQEFttijDhGOyrHPfgJGxJBNNI%2BmzWs1O9axwccbyx0OnkMXsTlxPtRfmiC1As5aVyYhclCaDCnzbFqKsJffktovT8aVG5aJaW62ZL0lpTny8tcWHhCm%2FDP6CQJsbjyJBZG1zOWC56iBXJ%2B4N9qJJITkhGezzU1XhxPKdwDdyk0OXX0GA4ujqUSa8Qhld9Uh7N4G30HK4irt7ZTFYRgQ45EBItAjTEXfwwtP2g4Njus4y8eXAZBGO%2BDG%2FlWbgrwFovxJalFL6QNQHPmKi5KfsDjb9TQRy5%2B0gdbtfWnkGTDF0PDEBjqkARuFzC6yxypN9l0tmm24a4%2FvXfBp3g2cSnvZ3MYkocxHB37nV13E63X4pzhyIoLS%2Ff%2By%2Fz2AWmPvqTmJN6CmDtq%2FJMjAmwSfPIRZcKWRwFsuMr5SnhLY6G0LbES6nM2uaQxRVqgCxYAE5tz02OkUSkHHVLn616CIHLmOmtefO3eazxNfRXhF%2B3Cv%2BqZK3k3r%2BB55Bc4FIrGNyyi2rmF25Eaasmbk&X-Amz-Signature=9e11538b0fe9c19661eed598fbfdbfaf68f60b6518c79be4f9eae704cfb3e304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
