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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCWHMH5%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMLvITEEHJ5B8LuDXcVncp968RqYMDC%2FddEho42JW5EAiArkkWhE%2BQ0jhYzVgh2wXi5Egqby%2BRM%2FJK%2FHarV%2Fp%2FKkiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcL%2BQG6TKhmbxEZ8KtwDLhlrqVS4MvxfpYEOwIru1aSzPpQr70RJk0ZSjY2L9S%2Bo5VhsbqCN6Qii8WkFeVnmEHK0zLmZAy8SaN0ldOVUG%2FEo%2BOvkRSvPZzXOiRV6AGfIpSdvpGC370WTUTDnJUE1IysysUKIHt3CUJKjiiVeN%2FTjOwwhtlJi%2FZ6SwUF34kYa8%2FVew1Hiu%2F%2FVj2AJdRTQSH16qG8Mo%2B1b3egEE8MraAEbPxyu0DD3tjNO0yMmoHfzXnxG%2BY6l2OWE2U2cV8IXvoBEXEDetnuVnkioRqZdYdmx%2FJI0g1x9gm15dHUcqu5ztxKch6qIMgH8E8%2Bv3RARP2PuA%2F97tzV8qi688V%2FCvTEv%2FvcOfWShmFSMAWaIScpvsMxMGzQxhjnOcTpbTs3lAOI01IcN6utiiErkuamC%2BFNnMpck3M%2FDQtdg28k41Yaj4tj5%2F3ILvj1lRzu21tyHLgrz8LeTP1D%2Ff4DruphAAxRq9zzm%2B7G3vX9mPou%2FeXiUk9ElXUcv08AWLEMOY7v0JrVSzgFrlZ10aHaZYsf0mVH2uxAt6%2FcnqpnIfsdusIOb0xAP3xomjU2DxFw8xvERhNbhRGFuKhaIfG2ke1nsvVn6AxfB%2B5JR48ZlZNymlHNy7Tbdz2DPu%2B3qVwUw%2Bbi10wY6pgFVdTKRfVAuZ0tmfnuhjfe58dwcUB7hUa0bgpYI%2Bx1YrM%2BIm6Uwt5CFwy%2Bzd6yn5P8bZo6qfXBdeReY2XMnk15LNVmoLipw0bqWtUmUHzS9V%2BxzjkD3er67My0UjCFMGLAhKDb1e4ORfBAj%2BPqiNRWRkLw8QGJgiuVwFaZJOS52hgov%2F4qwEjcN799I92AyuGSK83yK4WdEdWtqlCHhWDCJWLYpox2e&X-Amz-Signature=6c71630aa3915f136710ecbce5c724fc14dd4fc32e13c9b80a372aa79c190741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCWHMH5%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMLvITEEHJ5B8LuDXcVncp968RqYMDC%2FddEho42JW5EAiArkkWhE%2BQ0jhYzVgh2wXi5Egqby%2BRM%2FJK%2FHarV%2Fp%2FKkiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcL%2BQG6TKhmbxEZ8KtwDLhlrqVS4MvxfpYEOwIru1aSzPpQr70RJk0ZSjY2L9S%2Bo5VhsbqCN6Qii8WkFeVnmEHK0zLmZAy8SaN0ldOVUG%2FEo%2BOvkRSvPZzXOiRV6AGfIpSdvpGC370WTUTDnJUE1IysysUKIHt3CUJKjiiVeN%2FTjOwwhtlJi%2FZ6SwUF34kYa8%2FVew1Hiu%2F%2FVj2AJdRTQSH16qG8Mo%2B1b3egEE8MraAEbPxyu0DD3tjNO0yMmoHfzXnxG%2BY6l2OWE2U2cV8IXvoBEXEDetnuVnkioRqZdYdmx%2FJI0g1x9gm15dHUcqu5ztxKch6qIMgH8E8%2Bv3RARP2PuA%2F97tzV8qi688V%2FCvTEv%2FvcOfWShmFSMAWaIScpvsMxMGzQxhjnOcTpbTs3lAOI01IcN6utiiErkuamC%2BFNnMpck3M%2FDQtdg28k41Yaj4tj5%2F3ILvj1lRzu21tyHLgrz8LeTP1D%2Ff4DruphAAxRq9zzm%2B7G3vX9mPou%2FeXiUk9ElXUcv08AWLEMOY7v0JrVSzgFrlZ10aHaZYsf0mVH2uxAt6%2FcnqpnIfsdusIOb0xAP3xomjU2DxFw8xvERhNbhRGFuKhaIfG2ke1nsvVn6AxfB%2B5JR48ZlZNymlHNy7Tbdz2DPu%2B3qVwUw%2Bbi10wY6pgFVdTKRfVAuZ0tmfnuhjfe58dwcUB7hUa0bgpYI%2Bx1YrM%2BIm6Uwt5CFwy%2Bzd6yn5P8bZo6qfXBdeReY2XMnk15LNVmoLipw0bqWtUmUHzS9V%2BxzjkD3er67My0UjCFMGLAhKDb1e4ORfBAj%2BPqiNRWRkLw8QGJgiuVwFaZJOS52hgov%2F4qwEjcN799I92AyuGSK83yK4WdEdWtqlCHhWDCJWLYpox2e&X-Amz-Signature=de098b2fb9f772d38721730734b894fc2fe296842dce0779c87101d5fd503f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
