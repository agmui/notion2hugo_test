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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQM23WBO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDP1tgdsbbAgSsJsQ2%2F%2BSpIPjK1khUOHHArsar%2FmqwBLAIhALFcv4JS5sSUS6XFEMl3afnKaQqhkTF6pu%2BE5me7VXo%2FKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7hneR%2BZ0dYC%2BV4zEq3ANCeFJ68WjHl%2FGVaExYdqFyWDOeyESSppEsrTmUqYZ%2BcqbKV0yeFznww6nlxc073of54wkM8kP3wn62scA0zglGyT0CUSGguoP42SVdiLRfKYDBKiOa4c%2FuXKxHKJhLPqA4hJQZhMxVBWN2izdQLD9Ufq6QUjn%2FVyji7BwABhKVFmwa28ljgK%2FkN%2FbC57a7Uk5vTPGcPXqObWWWQ3r%2FXMYTRGaIuOAJr4yOYjYEO3o2h2im62HBQ7JFyQdj4rsOuUexeSRMi12wMdWRLL7%2Fp2eKyZDklzug2eixR4qrNyxdUnPNnE26RGhO2ZbsQj81bYB1zcR7OPv7HB7w894P9CRXusnzp6hsT%2Bfm5k1w0cCmkgzCHfGjPwO05gu3u0CwaNBIU1zcamEBSrHCzBKxvMfoJHWp4tyEFvvhDzDqjm8ab1jhrK8ID4N1%2FtypFAALNHAJa0D7pzdQv8kh59g2CyJXgygu5f39%2B9SFnK6F8S1Vy7bFNtOqzDAJJF8z69PxLQ83RMnh%2F7vYTiL9spD2bnf5MO7vjguFAL55LktPthX%2F972bUubYiWrwChbFTYjldfoX6hyGR91aQTfpFD29duROSCCuNDFoMwl5FLa6UfKqY8fTmnXO%2BVT61QjdxzDj2tO9BjqkARDb2mOAsB6gBq3inA9G19cC9E%2BctLzJODGs6f11OBu%2Bt%2FzdCY8J8GbiRDhL05VPafNIw4Vi4bzp6Ss3579383f3fcJptxmSNuLBtQnmxb0vCn%2FXIa3zh2cfOyJDyo7OZksuXq9su4Lpz2d3HIdpdF1CSY0mEhDBUDlLNs%2FrhO%2BpjdsxAvcTzzBfN9pGSsDlVxTZs67NU6xvEvoeVpT85TjTT1Kq&X-Amz-Signature=7a17aef742aed4f20a7b5e612a4c0c476fc963b1da661d703ec04ade113e5533&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQM23WBO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDP1tgdsbbAgSsJsQ2%2F%2BSpIPjK1khUOHHArsar%2FmqwBLAIhALFcv4JS5sSUS6XFEMl3afnKaQqhkTF6pu%2BE5me7VXo%2FKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7hneR%2BZ0dYC%2BV4zEq3ANCeFJ68WjHl%2FGVaExYdqFyWDOeyESSppEsrTmUqYZ%2BcqbKV0yeFznww6nlxc073of54wkM8kP3wn62scA0zglGyT0CUSGguoP42SVdiLRfKYDBKiOa4c%2FuXKxHKJhLPqA4hJQZhMxVBWN2izdQLD9Ufq6QUjn%2FVyji7BwABhKVFmwa28ljgK%2FkN%2FbC57a7Uk5vTPGcPXqObWWWQ3r%2FXMYTRGaIuOAJr4yOYjYEO3o2h2im62HBQ7JFyQdj4rsOuUexeSRMi12wMdWRLL7%2Fp2eKyZDklzug2eixR4qrNyxdUnPNnE26RGhO2ZbsQj81bYB1zcR7OPv7HB7w894P9CRXusnzp6hsT%2Bfm5k1w0cCmkgzCHfGjPwO05gu3u0CwaNBIU1zcamEBSrHCzBKxvMfoJHWp4tyEFvvhDzDqjm8ab1jhrK8ID4N1%2FtypFAALNHAJa0D7pzdQv8kh59g2CyJXgygu5f39%2B9SFnK6F8S1Vy7bFNtOqzDAJJF8z69PxLQ83RMnh%2F7vYTiL9spD2bnf5MO7vjguFAL55LktPthX%2F972bUubYiWrwChbFTYjldfoX6hyGR91aQTfpFD29duROSCCuNDFoMwl5FLa6UfKqY8fTmnXO%2BVT61QjdxzDj2tO9BjqkARDb2mOAsB6gBq3inA9G19cC9E%2BctLzJODGs6f11OBu%2Bt%2FzdCY8J8GbiRDhL05VPafNIw4Vi4bzp6Ss3579383f3fcJptxmSNuLBtQnmxb0vCn%2FXIa3zh2cfOyJDyo7OZksuXq9su4Lpz2d3HIdpdF1CSY0mEhDBUDlLNs%2FrhO%2BpjdsxAvcTzzBfN9pGSsDlVxTZs67NU6xvEvoeVpT85TjTT1Kq&X-Amz-Signature=f47b3302c96e78fec9c81242236fc1e8c01a775b07090b4fb92ea69705acddd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
