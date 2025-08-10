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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6V4VRMW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5YMbw7OhPWE39BNQl4lFBX0hY4p0J9x%2Bpx1Nsw8sFvgIhAJXrvChhLWMSMwiOysCWjoM%2FkaF6tr51PzQdqyhrzIaPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRZsyCTNC%2FYVzEroq3ANPtsADQvWxVPy5TFaVvQr0bDymhaelLsHMB46am4QpVX0EOKi9O09%2BZO2i7Y1a8tLuEwWzWppuMNV%2FEO5BcSPUTiMr0GptdB4xElHMEwOtovGzPxx6RBT%2BzyHqAbBsyAdQsLDez5skijTjug5ezpKGk7kcOGcccvg%2BxW2yXrOSTAp1tF%2FplWKB2GcAa13E04I7SOPTLL5k7no4R2FNt7%2BPjXC9GYV6cccrUftTuJ89B1e0rOAR7rj0ERO92CclpQvxdgU5mjDjDAWmvTUo2E4EnLsuxZCi3%2FEoFjjmgESnQ0RZxsEuAW%2FVhKgcUTTtXqGyKYY2tq8mN%2BbyxwTTzbkGzx0lW6bkGAvNy5i3nBxb%2F8CP2yybFohdEyJdVTplZHDwOeluvEGlvAMO6r8PquMnTJcRQx3NXlaP11mUJa7KZF%2FyBpIBiZJ462ACyEDnJS%2BsNZpauklHZlr7QQXWkOTzyIFAitpka4A5%2BWt%2FbBnerU5qTusSOIsMyl%2B4Ro9y1VZKOJAseww63EViLb2jXqrf5CHTn0RMMVZoS%2FMEYIf3R7gycc9AmIYSmAZUX9r6Z3i8laWyGQBSkOrAgCUXBVaGDGSLOSY%2B8PKt%2BIpgxTEWlpmFQi1%2FulfxTkbvSDCVuuPEBjqkAYQcy8oCPu8qfHIYnnlwNxR7IhxAibKEA718SKm4BRSLnT3L8Rb8P4Z2pEgbb6PowBSFaAM9yE%2BoK7junGjhfIdaEP%2Fx20FEYTpLYUIfIbDZNxNGMAWt4xuxW%2F7GvT6jUt4ZycGqMSo5dKKsVVTTMHuH1J0yrjuqWwGzp2%2FUbVo5mgmKc%2B0%2B7VSZpFVIArSGgCbZTB7Psfe3AKcjk7htixZZR43S&X-Amz-Signature=9ecb72ebeaf084ee6d30ff91351f54312e14f63dd37a649c9dc757e055cac50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6V4VRMW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5YMbw7OhPWE39BNQl4lFBX0hY4p0J9x%2Bpx1Nsw8sFvgIhAJXrvChhLWMSMwiOysCWjoM%2FkaF6tr51PzQdqyhrzIaPKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhRZsyCTNC%2FYVzEroq3ANPtsADQvWxVPy5TFaVvQr0bDymhaelLsHMB46am4QpVX0EOKi9O09%2BZO2i7Y1a8tLuEwWzWppuMNV%2FEO5BcSPUTiMr0GptdB4xElHMEwOtovGzPxx6RBT%2BzyHqAbBsyAdQsLDez5skijTjug5ezpKGk7kcOGcccvg%2BxW2yXrOSTAp1tF%2FplWKB2GcAa13E04I7SOPTLL5k7no4R2FNt7%2BPjXC9GYV6cccrUftTuJ89B1e0rOAR7rj0ERO92CclpQvxdgU5mjDjDAWmvTUo2E4EnLsuxZCi3%2FEoFjjmgESnQ0RZxsEuAW%2FVhKgcUTTtXqGyKYY2tq8mN%2BbyxwTTzbkGzx0lW6bkGAvNy5i3nBxb%2F8CP2yybFohdEyJdVTplZHDwOeluvEGlvAMO6r8PquMnTJcRQx3NXlaP11mUJa7KZF%2FyBpIBiZJ462ACyEDnJS%2BsNZpauklHZlr7QQXWkOTzyIFAitpka4A5%2BWt%2FbBnerU5qTusSOIsMyl%2B4Ro9y1VZKOJAseww63EViLb2jXqrf5CHTn0RMMVZoS%2FMEYIf3R7gycc9AmIYSmAZUX9r6Z3i8laWyGQBSkOrAgCUXBVaGDGSLOSY%2B8PKt%2BIpgxTEWlpmFQi1%2FulfxTkbvSDCVuuPEBjqkAYQcy8oCPu8qfHIYnnlwNxR7IhxAibKEA718SKm4BRSLnT3L8Rb8P4Z2pEgbb6PowBSFaAM9yE%2BoK7junGjhfIdaEP%2Fx20FEYTpLYUIfIbDZNxNGMAWt4xuxW%2F7GvT6jUt4ZycGqMSo5dKKsVVTTMHuH1J0yrjuqWwGzp2%2FUbVo5mgmKc%2B0%2B7VSZpFVIArSGgCbZTB7Psfe3AKcjk7htixZZR43S&X-Amz-Signature=ee300aba9908c3d22e22abc56e4910a4ea9f11ae1f8b986e5b51aa191d8b031c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
