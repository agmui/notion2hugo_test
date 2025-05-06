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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOQ4ON%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxNT%2BmHy7zj511B0Tx0HpnQDz5BucEXov0kuMcj4tsPQIhANHI6TKPQ%2FnQTAi%2F7y7yYzNBu7isMNV6ps9OlcQ33%2FijKv8DCEwQABoMNjM3NDIzMTgzODA1IgwStPsyzOsVlURKKY8q3AMWWOYix%2B8LxU2zc6BkV66SZyq%2BnUr5dctRazHMMPrIgaPxVM95fco04jY2qbx%2FpA3vzBeO9wDV6L8H1REhoYwnlXdP3Fs8xerVR8iJ0wsAFDNY7Irder9pJbZLYvljAKP%2BI7jS7KTmUmXEccA5d2D4mc%2B9OB4S8QG7Zmvgp6uLP7FM2yMPTqxHNh5v6JMzvnvke%2BO00NHv8HhzsMO1raSl%2BcA%2FrVGiBjHZEwKkpwUTf2hSi40mH29Dt7evyqE8vX2IF%2B%2BRcIIoH1qpltOAS4LZPw5DtnjriZEASx7S7%2B6cn0HsNTB8y4KseCmz4vPQiGFHMPkatG3Z3UFnJRhkD504NyhVsCBm4DVU%2FP2daaKHEDxDYzg0h20TWuHi7RvCsYl6Js%2B6frdzZ9vG0KCK4sGU8mA1UK3yUQ0ZvxFZ4xzKd43oOBWtAQ6bx%2BpjsUzad1IKIr2AaIGynIAGToJdsZplfH8PwozD2Saxce2%2BjK79SB6Tqp9yfX46cnmfzoF8x5%2FRK1RRU4CUxOhM9buTuVKl3cxqXcB0FYh3fBF%2BAvOHzC1D5YDsNnpBTf65sLD7xIiRM77Srq1ELkCYdRDRGpzfD0EhWwI4SZGayq8rd2hLxukzVAxXha8ZWb7fuDCztOnABjqkATZqCGWvrif601gFLQPyul1LIWebl4%2FzvyTmxB9X5hkTtaUr7gTWPOhvcSMtG9HlpKsMs%2Bh7sXs7uV8AD%2Bu9pkv65BuykFj2O3YwglDme3vxVEVYhRbUwT2F2YKF0EZsWvUlEPD%2BRESQCKwOPOkrTQvbDJsKzTR8dTtfkQ%2B6p1QyvDSRvM0ADW0G%2FriyPSYh4bDs51Tp6lmJZsyy9V2Xcd2XcavX&X-Amz-Signature=7098006acff60f0ce453dceb4c5bc020bef9c5b8f01ad2e72b09e816ac41c873&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOQ4ON%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxNT%2BmHy7zj511B0Tx0HpnQDz5BucEXov0kuMcj4tsPQIhANHI6TKPQ%2FnQTAi%2F7y7yYzNBu7isMNV6ps9OlcQ33%2FijKv8DCEwQABoMNjM3NDIzMTgzODA1IgwStPsyzOsVlURKKY8q3AMWWOYix%2B8LxU2zc6BkV66SZyq%2BnUr5dctRazHMMPrIgaPxVM95fco04jY2qbx%2FpA3vzBeO9wDV6L8H1REhoYwnlXdP3Fs8xerVR8iJ0wsAFDNY7Irder9pJbZLYvljAKP%2BI7jS7KTmUmXEccA5d2D4mc%2B9OB4S8QG7Zmvgp6uLP7FM2yMPTqxHNh5v6JMzvnvke%2BO00NHv8HhzsMO1raSl%2BcA%2FrVGiBjHZEwKkpwUTf2hSi40mH29Dt7evyqE8vX2IF%2B%2BRcIIoH1qpltOAS4LZPw5DtnjriZEASx7S7%2B6cn0HsNTB8y4KseCmz4vPQiGFHMPkatG3Z3UFnJRhkD504NyhVsCBm4DVU%2FP2daaKHEDxDYzg0h20TWuHi7RvCsYl6Js%2B6frdzZ9vG0KCK4sGU8mA1UK3yUQ0ZvxFZ4xzKd43oOBWtAQ6bx%2BpjsUzad1IKIr2AaIGynIAGToJdsZplfH8PwozD2Saxce2%2BjK79SB6Tqp9yfX46cnmfzoF8x5%2FRK1RRU4CUxOhM9buTuVKl3cxqXcB0FYh3fBF%2BAvOHzC1D5YDsNnpBTf65sLD7xIiRM77Srq1ELkCYdRDRGpzfD0EhWwI4SZGayq8rd2hLxukzVAxXha8ZWb7fuDCztOnABjqkATZqCGWvrif601gFLQPyul1LIWebl4%2FzvyTmxB9X5hkTtaUr7gTWPOhvcSMtG9HlpKsMs%2Bh7sXs7uV8AD%2Bu9pkv65BuykFj2O3YwglDme3vxVEVYhRbUwT2F2YKF0EZsWvUlEPD%2BRESQCKwOPOkrTQvbDJsKzTR8dTtfkQ%2B6p1QyvDSRvM0ADW0G%2FriyPSYh4bDs51Tp6lmJZsyy9V2Xcd2XcavX&X-Amz-Signature=ec14f932a31c9b722462c66f142e2b8dfcaee12c3b0bcd5f6074fd4ad6111286&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOQ4ON%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxNT%2BmHy7zj511B0Tx0HpnQDz5BucEXov0kuMcj4tsPQIhANHI6TKPQ%2FnQTAi%2F7y7yYzNBu7isMNV6ps9OlcQ33%2FijKv8DCEwQABoMNjM3NDIzMTgzODA1IgwStPsyzOsVlURKKY8q3AMWWOYix%2B8LxU2zc6BkV66SZyq%2BnUr5dctRazHMMPrIgaPxVM95fco04jY2qbx%2FpA3vzBeO9wDV6L8H1REhoYwnlXdP3Fs8xerVR8iJ0wsAFDNY7Irder9pJbZLYvljAKP%2BI7jS7KTmUmXEccA5d2D4mc%2B9OB4S8QG7Zmvgp6uLP7FM2yMPTqxHNh5v6JMzvnvke%2BO00NHv8HhzsMO1raSl%2BcA%2FrVGiBjHZEwKkpwUTf2hSi40mH29Dt7evyqE8vX2IF%2B%2BRcIIoH1qpltOAS4LZPw5DtnjriZEASx7S7%2B6cn0HsNTB8y4KseCmz4vPQiGFHMPkatG3Z3UFnJRhkD504NyhVsCBm4DVU%2FP2daaKHEDxDYzg0h20TWuHi7RvCsYl6Js%2B6frdzZ9vG0KCK4sGU8mA1UK3yUQ0ZvxFZ4xzKd43oOBWtAQ6bx%2BpjsUzad1IKIr2AaIGynIAGToJdsZplfH8PwozD2Saxce2%2BjK79SB6Tqp9yfX46cnmfzoF8x5%2FRK1RRU4CUxOhM9buTuVKl3cxqXcB0FYh3fBF%2BAvOHzC1D5YDsNnpBTf65sLD7xIiRM77Srq1ELkCYdRDRGpzfD0EhWwI4SZGayq8rd2hLxukzVAxXha8ZWb7fuDCztOnABjqkATZqCGWvrif601gFLQPyul1LIWebl4%2FzvyTmxB9X5hkTtaUr7gTWPOhvcSMtG9HlpKsMs%2Bh7sXs7uV8AD%2Bu9pkv65BuykFj2O3YwglDme3vxVEVYhRbUwT2F2YKF0EZsWvUlEPD%2BRESQCKwOPOkrTQvbDJsKzTR8dTtfkQ%2B6p1QyvDSRvM0ADW0G%2FriyPSYh4bDs51Tp6lmJZsyy9V2Xcd2XcavX&X-Amz-Signature=c50804e87d3458d60f2cd4d9584f7dbd7104fbcb6b730c96fde277fd1fe05909&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346YGXI3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH%2FjIs0dlmG76Y32V0nVMdo%2BZg0TiCqPJsJyiarrrESAiEAgBJq6eNOcVUfXQdhspI%2F%2Bp2butukNE4XESQVEJ64C38q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIioFuZ4aXn5TtAsjCrcA%2FJHFUU%2FXMSIGmEbbUkzHFfn4sWy3HHs%2FeiyiIgKzjmF6XDVUCPdfGuFu%2FZroKJ6Svizk6JK0XPa9NenBPqhfTHqTp%2Fcwrdfp5SStxfJu59lm%2BGaOQ77neR%2FNPbAyLoGa23bXsyGidjw6o9ymTk01lUf1%2BfPvMwTDtKpYFiSF8h%2BrCKxxcBGTNXik3yu5qlvY6kTdmLczLs5wcsOUcIMWG3ZAqNLGrJTCOeyBB3mzJqfanHF1gtWaS96qoSWQIaen8PW8dNDeqvTh8z0PHMuVfNaWC34Irm1SOGti99m2l%2Bm1SrvDfE6Df4rOxKvJaCJdrUUyRPEQVIU8eL2C%2Fn54%2BFWfzsblobHd6ovjZnoh3qZRMHsduS9fTjI7KFvpLx0hzlYGDab78OpdO1bXZ0JmPRvoukMk%2BePxsWSDAsSyHpGCMkuk0EiWFgenYWGfjWChrEyuYD7vhwFY%2Bm3bmy3u7CpwTB1JcLPPn7n%2B0kPUE4eFrBeC2wUA64Emuc6q3atYjIQ8ty9PnuATIn378A93mkseifnqlAak1Th0%2Fbbo6atbHEfudcYcB1VFIqwuNUj0eA5zV1BcGFBIbaq9uIpZXYtd%2BVjny4PkffxOk%2B6RE3Su84a%2FCSFCtx6hQNaMMmz6cAGOqUBArorzaW9LDC%2FiWCyUiEW8944Bf7S6rX2Fcrv4r6EideSdWTr99aFHTdNDdNX7SzDpYG7W9s2KSzCdjJxNX3gtog5YxR5%2Bt4lDzjWbUm7DFTh2B6foasphPl3CEf02kYlwfcnxAWupxkWqRTgT%2F81dw86Blx3yKtOy3vFbMyPelIR6RsUFA5tfJt81lT7IKBzFQGQK7C63wKMNVvfL4aD%2BPqC%2Bw0D&X-Amz-Signature=7845499a338ab7ee0f1eddf37780e34df267da5bc3802ca37ffef944502cde6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZLMUF4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlI7JBNzLmyqL3q6MYP8lWCshjy894KjMt4Veo8JX7pAiBfh%2F9ptuIa0YqoL83JIxeRCU7UCHpYdLJhh0m8uaUOLyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMTbtzzd2fTL3iKgtAKtwDpsmvmLSiZMV1kmxBS9oPCZzdESrmgSNH2dQNsRJKiwYqsn%2BCvP25Bo3tZqqK4exvg%2FkRF5oty2lyz6jtXReO8PKBS5WxOdR8kaSU8cf7YHdPSZmjv8GmpBlNyW8Ir3dfd115i5vZ6QxL47TeI%2F%2B3CGwswGT%2BtFKPzm5paeU%2F%2F7Hc4JTAers5woErbEq9ia6%2BSrfj0n3wM8ReSYiA3A0P5x3%2FZ%2BDWBzAIrOkV2j4NqFmzMReE%2F1XCt50YGc3OABKYbgRx1Rn9%2FJNFiqymKo7ExDWVsv2Twa%2BWA9UXTBMNEQFJKt0hX9loPI78exANdh1NSIlvBRGsvZ2scIBGd8uLBLfEvUKMBYk5n3TjW%2Fl9eRP17f7TiJV%2FcaIKyyHcdiWJVBRj9NImHRqnfD1QAVvdFQS83hdnd9kS9%2BI3fZkPrxWRUp9NIpgKAVs9ibZxbpciOtqGier8VAKhN8Hx5nAiQ7z3ITjgbDb4JKdCuicvY%2BELqYvNuhhqHWJfUYH2ZwgWmvjON4KVi1D3BH7WFNzi1%2BZw28QMTLMWYohlyIUg3pkTI6X9Ykg1H3ZnC4WVrPWbseAA3Z9ZkefThwMk4o%2FqVGdqj4OH5ZE4LcPwGtVLzGa%2Fa%2Bn5Jut%2BXr8hOAkwlrTpwAY6pgFQrkaSws%2BI2tp7VdExq%2FL%2BWMs3WJltPDWLsqsoYJLtrMa2PkGtJ5kQV4CP7jxg3Di7JdeVBUZXMokgMkD9k8kBrk9K6Zl7MsfoCyIA%2BItuDPJ3GU4kRDfevderF%2FQorRXEp8mg6PiHnoEMz6OjBxGaYmG9k27KZfLXLfg%2FuNRqWU34vyIXeqR4iOPwtJidnmrJEdhjBYwnoLJfRwXfiBeZCoiBhzmZ&X-Amz-Signature=165847706a65846795e60bd4e91a64f01a93f8160d0cf1cabd4c698e59d1f7da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOQ4ON%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxNT%2BmHy7zj511B0Tx0HpnQDz5BucEXov0kuMcj4tsPQIhANHI6TKPQ%2FnQTAi%2F7y7yYzNBu7isMNV6ps9OlcQ33%2FijKv8DCEwQABoMNjM3NDIzMTgzODA1IgwStPsyzOsVlURKKY8q3AMWWOYix%2B8LxU2zc6BkV66SZyq%2BnUr5dctRazHMMPrIgaPxVM95fco04jY2qbx%2FpA3vzBeO9wDV6L8H1REhoYwnlXdP3Fs8xerVR8iJ0wsAFDNY7Irder9pJbZLYvljAKP%2BI7jS7KTmUmXEccA5d2D4mc%2B9OB4S8QG7Zmvgp6uLP7FM2yMPTqxHNh5v6JMzvnvke%2BO00NHv8HhzsMO1raSl%2BcA%2FrVGiBjHZEwKkpwUTf2hSi40mH29Dt7evyqE8vX2IF%2B%2BRcIIoH1qpltOAS4LZPw5DtnjriZEASx7S7%2B6cn0HsNTB8y4KseCmz4vPQiGFHMPkatG3Z3UFnJRhkD504NyhVsCBm4DVU%2FP2daaKHEDxDYzg0h20TWuHi7RvCsYl6Js%2B6frdzZ9vG0KCK4sGU8mA1UK3yUQ0ZvxFZ4xzKd43oOBWtAQ6bx%2BpjsUzad1IKIr2AaIGynIAGToJdsZplfH8PwozD2Saxce2%2BjK79SB6Tqp9yfX46cnmfzoF8x5%2FRK1RRU4CUxOhM9buTuVKl3cxqXcB0FYh3fBF%2BAvOHzC1D5YDsNnpBTf65sLD7xIiRM77Srq1ELkCYdRDRGpzfD0EhWwI4SZGayq8rd2hLxukzVAxXha8ZWb7fuDCztOnABjqkATZqCGWvrif601gFLQPyul1LIWebl4%2FzvyTmxB9X5hkTtaUr7gTWPOhvcSMtG9HlpKsMs%2Bh7sXs7uV8AD%2Bu9pkv65BuykFj2O3YwglDme3vxVEVYhRbUwT2F2YKF0EZsWvUlEPD%2BRESQCKwOPOkrTQvbDJsKzTR8dTtfkQ%2B6p1QyvDSRvM0ADW0G%2FriyPSYh4bDs51Tp6lmJZsyy9V2Xcd2XcavX&X-Amz-Signature=5c3517ece51ba7896da0efb7685e033e875fb417ab45f7e6110160eb2db0ba27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
