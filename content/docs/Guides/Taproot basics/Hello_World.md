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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBHWBWV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYREPEY%2BQ6z63trJkX4%2BjDQY2qZ3F8dlkECiy6jo5qlAiBuOO6h83l3ShcuSakjDSHZCraVRWejCykW3Tkiu2Llsir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMzbqM%2Bq%2FlgRUil08hKtwDKb9f8kvcRAyeCM%2BPlL%2Bp9xnztK%2F3fFAb39uYebV869MzhD7h5qxMR0UMjOY6T8JhSr5bOrEF8koFq8VqjZ5%2BHz11opmhYIqTdsr6ziUTFq4%2BdROZk0mdXLIARyiXZjOltUmlS2u1FFq2NanoGhm7BojxftTC%2BZ%2BxuiXx1ohwaR4umDUdMbc7L2oxAbuJvNUslEIdIPwrggLpT%2BZf2TmoEIQqVSefpslJLMegkAaKs2GkqV3ciFlRNUWCbyKqTunPIc4dld%2BmvQ7aMjQXUrSB2k96iQAPu3pC%2FTm8xBjV40jFPeeuWQTv4Ep%2F2C7pAnsa6kZe%2B7tfJIKJFgzYIdN0Lvkes3LjbWmAxGq3DnSVWmExd%2FJN%2B%2FHptwE%2Fb%2BEoNsF1oKGpkOi0Z0XcL%2BxFNv7WG%2FZ4LG1h5zLAnWYhK%2FAwfT1hODPqlo6xVkI6OV%2B3U17MQS2P4P2jBeZCjPH9mOHJoIJJAnGcpw7BbNPi4s35iyF%2BpEZ4RhbEMKAdCXItEeGYBk09S8m4grJRUpUkqnVCS38ROeYLd4NSDqnBST2%2FPmnQyB03OcXSG9Svo3FaleNKcVw2%2BV8DrYadGd7p8tjI4ngoY2Z8cAnUGP9PNUeAhDHyHrtvazVGkJHhTF0w%2FIawwAY6pgE8%2FezFO4jFvng4RCK3sns523wWmjP9cjKU4xVRUfnfRQ4fg6%2FvXvx0N%2Bj0TGWPcw0Za5upMgRTiBG%2BfklOTPG1i%2FiCOWYBWErgUYGKGY04R9UmdOLTYayg2X63DgtCJz0pYI7XybtbNNhpKOTa9d3r8wBL1oe6pIK8F5kzAYAaVNDpLoy9mYInWFnU%2B0S12atEWNcZSYm70yQIcAK6awV1FzdVScgj&X-Amz-Signature=c1d02ef14070facf64773a9d27588c972af2909dfe6a9378c4180a8ed54bf1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBHWBWV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYREPEY%2BQ6z63trJkX4%2BjDQY2qZ3F8dlkECiy6jo5qlAiBuOO6h83l3ShcuSakjDSHZCraVRWejCykW3Tkiu2Llsir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMzbqM%2Bq%2FlgRUil08hKtwDKb9f8kvcRAyeCM%2BPlL%2Bp9xnztK%2F3fFAb39uYebV869MzhD7h5qxMR0UMjOY6T8JhSr5bOrEF8koFq8VqjZ5%2BHz11opmhYIqTdsr6ziUTFq4%2BdROZk0mdXLIARyiXZjOltUmlS2u1FFq2NanoGhm7BojxftTC%2BZ%2BxuiXx1ohwaR4umDUdMbc7L2oxAbuJvNUslEIdIPwrggLpT%2BZf2TmoEIQqVSefpslJLMegkAaKs2GkqV3ciFlRNUWCbyKqTunPIc4dld%2BmvQ7aMjQXUrSB2k96iQAPu3pC%2FTm8xBjV40jFPeeuWQTv4Ep%2F2C7pAnsa6kZe%2B7tfJIKJFgzYIdN0Lvkes3LjbWmAxGq3DnSVWmExd%2FJN%2B%2FHptwE%2Fb%2BEoNsF1oKGpkOi0Z0XcL%2BxFNv7WG%2FZ4LG1h5zLAnWYhK%2FAwfT1hODPqlo6xVkI6OV%2B3U17MQS2P4P2jBeZCjPH9mOHJoIJJAnGcpw7BbNPi4s35iyF%2BpEZ4RhbEMKAdCXItEeGYBk09S8m4grJRUpUkqnVCS38ROeYLd4NSDqnBST2%2FPmnQyB03OcXSG9Svo3FaleNKcVw2%2BV8DrYadGd7p8tjI4ngoY2Z8cAnUGP9PNUeAhDHyHrtvazVGkJHhTF0w%2FIawwAY6pgE8%2FezFO4jFvng4RCK3sns523wWmjP9cjKU4xVRUfnfRQ4fg6%2FvXvx0N%2Bj0TGWPcw0Za5upMgRTiBG%2BfklOTPG1i%2FiCOWYBWErgUYGKGY04R9UmdOLTYayg2X63DgtCJz0pYI7XybtbNNhpKOTa9d3r8wBL1oe6pIK8F5kzAYAaVNDpLoy9mYInWFnU%2B0S12atEWNcZSYm70yQIcAK6awV1FzdVScgj&X-Amz-Signature=310fa7f76b727b893abf8870955b0314224af13d96ade46a7c549904b6464923&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
