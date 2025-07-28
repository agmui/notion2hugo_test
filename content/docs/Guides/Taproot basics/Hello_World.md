---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XW6NO7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEFEYKuPXf%2BZYSTQC41uVYTwsLf4FoG8wBHMwwy3ArorAiEA0MEWkGT%2F3B3%2BxKo9jnRwW%2B5KNKxmJ5V7Jqma6JOQmlIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bvc7EQWmzkM5r9jCrcA02A1NbbMyShJx%2B4Hj9Q65ab2bC8pc%2Bv5Qo%2FnoZBAFAeLuE94DASa4n92OMbzP6FDat%2BAdv%2BZI0yez5cZ2wYBUhTl4TYdBXt12Z%2FyY2ONL5QZ%2FwbwmeFAL4CvP3CHI7r80%2BTgtmiHMZZSy4ynhzXmqM8aD6BH8pQD4%2Fh%2FKauyW5KrBV6tJZXJ0y1%2Bs43dyPoQLxmFThoqPhZHfsKOoGc%2BxTo%2FQTh3sz0KiiN5SFFIGS079K43WxIlmJhtrmM0r5hCd0pQnQ%2FWalQA4Oiu8FTJFBWIMLGRHkLnwF5Cyj2tXbHmF5xbdHF5W5qkqPafNtBEJw%2FboWUjKJC04sYF5xMGyQh4P5KJ33sRqiI5TcJKx%2FqOtPiATpe0EbqdFnvBITuMVo7%2BfGJXSupHGX4ohGw6dUyWCu45vqqYhbLqqhTFI3hvlHsK5RpRtWzMq%2Fir%2BkBKiFnYV%2F%2FvWBn2otXfpCbXLfZjxQtcD68QemuXjLYZV%2BjHUwCicF8S3WEpgxkYYXZcbxBZQ%2FbKlVZ3%2Fcdx1pL7etXLXXTKm9twDimcfyxVL8B9cnnq2qbCddq87kvk%2Bqprl%2BjB%2BN4WiYS5z70lE7TB6gF%2BMPeSc6eAxJSCsxtupQfGnJKoae2V3fGNPkxMNLqnMQGOqUBtytsOMruEFLwJZYY3gDhyJ5%2BJPzfiCuAfN2GE04VoMxMfuwoClb4rRLDY2giYdLp6E4yfnz69d5SaLJAxo3oc5EpzY7MI76r4SKFvu9fnPsy1gu9lHmwy0F%2FXQYCYzTsTh156BKb3oPpe%2Fnns25HWsp2u1M1hb9ChkW%2BGOlBnZ3Y2zmFzr80Og0jrYC3SzRPU6hmHRToTPvTPb2AIoUakGW2GGw2&X-Amz-Signature=0756a7c7183f5dc219a55287347949c1c3ca0a9a7f981b2e9812dde82189895e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XW6NO7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEFEYKuPXf%2BZYSTQC41uVYTwsLf4FoG8wBHMwwy3ArorAiEA0MEWkGT%2F3B3%2BxKo9jnRwW%2B5KNKxmJ5V7Jqma6JOQmlIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bvc7EQWmzkM5r9jCrcA02A1NbbMyShJx%2B4Hj9Q65ab2bC8pc%2Bv5Qo%2FnoZBAFAeLuE94DASa4n92OMbzP6FDat%2BAdv%2BZI0yez5cZ2wYBUhTl4TYdBXt12Z%2FyY2ONL5QZ%2FwbwmeFAL4CvP3CHI7r80%2BTgtmiHMZZSy4ynhzXmqM8aD6BH8pQD4%2Fh%2FKauyW5KrBV6tJZXJ0y1%2Bs43dyPoQLxmFThoqPhZHfsKOoGc%2BxTo%2FQTh3sz0KiiN5SFFIGS079K43WxIlmJhtrmM0r5hCd0pQnQ%2FWalQA4Oiu8FTJFBWIMLGRHkLnwF5Cyj2tXbHmF5xbdHF5W5qkqPafNtBEJw%2FboWUjKJC04sYF5xMGyQh4P5KJ33sRqiI5TcJKx%2FqOtPiATpe0EbqdFnvBITuMVo7%2BfGJXSupHGX4ohGw6dUyWCu45vqqYhbLqqhTFI3hvlHsK5RpRtWzMq%2Fir%2BkBKiFnYV%2F%2FvWBn2otXfpCbXLfZjxQtcD68QemuXjLYZV%2BjHUwCicF8S3WEpgxkYYXZcbxBZQ%2FbKlVZ3%2Fcdx1pL7etXLXXTKm9twDimcfyxVL8B9cnnq2qbCddq87kvk%2Bqprl%2BjB%2BN4WiYS5z70lE7TB6gF%2BMPeSc6eAxJSCsxtupQfGnJKoae2V3fGNPkxMNLqnMQGOqUBtytsOMruEFLwJZYY3gDhyJ5%2BJPzfiCuAfN2GE04VoMxMfuwoClb4rRLDY2giYdLp6E4yfnz69d5SaLJAxo3oc5EpzY7MI76r4SKFvu9fnPsy1gu9lHmwy0F%2FXQYCYzTsTh156BKb3oPpe%2Fnns25HWsp2u1M1hb9ChkW%2BGOlBnZ3Y2zmFzr80Og0jrYC3SzRPU6hmHRToTPvTPb2AIoUakGW2GGw2&X-Amz-Signature=b0af833e684356fe1201762c0630ce47385d75ad011657e9463f8880b20275ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
