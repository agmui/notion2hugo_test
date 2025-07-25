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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6BJHMT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIETqQdwuFKQ8MX%2B6SPZDJ1p8oEtSg9H1K%2B3nRuN2QHNwAiBnwUBKsg1wlvIOzqoKC1mF2VCHuaU0YLoqI1xc4WKypCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMU9YJc12LOme2gVVlKtwD19F%2FWUalLDz5Hfy9In8N1%2FtJmCss9Rrv87T8xY%2BlhupkjuZIrq3Qq7eyl3Zn2i5oTq5BNAVhTiw7JuI4WBgRDlio3wvFmY9BoU%2F6H%2FXHN1aOCYZJvAfptOufhw0m2unRHn3G0BFkmAJY6mofQr25W6vYLsD4bNRXeo1n%2FfkPtFL%2FRvGq0Mk972rn6oeCQsjJLfb5DFufQWNVRZ%2FTjmlgVtDxiRgp4%2Ftpwgoype7F1C%2Bf01eWtVn0uWZSCqPqSJMSvJjdBewqrKhPwp5xXAdi0Z4ALJ3dNuIchBvf0DaJFKLkrtpFN76r7FrbmIHmPRirlLH%2FjkY7PxZhVlJZYPMvQGbfV35gk5Q7y0z9vCGUnLTRp5CuG71lLDAQe6k5HvpopEGxz866oE45LNTPSsq6AdKbGaj%2BuRhS8LbcPoaQ3xBjaR3ASxmGq3b1NH7jmBFdvwDCuWXdg30wKiam9h5WIrt0D%2FSyrcXAY9FQa2%2FgxrSCWHkjxQufjsFkUwDBU5eS5PN1Jb3Vx2U9LWQ3z09kWfwYPu81T4wqYabOYlIl1ZVbinvouGp%2FtIeqbhe8lGKIm6pHVX9foITT4LRqr8E6WEnQc7k%2BgreVZnrFiMWE2O3LM2sNGTFEjA3W8GswntGPxAY6pgHhygVI8E442QBhXDAv7W5OKRdKd1hum9dARpaZpx8YQnCFGrDLnf%2FKPsDOfeNAS%2BL0Xq14gq50bsy1HMsbrW3eT7RTuzOwPCjLiNI%2FgwjmI6SgFurwM2Yw2uiEvqXxnb3kXPGCA2JCOqMyPUFSraN5OWTqXmh0Xio5L1D6mfzm9znLo6k%2BZUXh6S48JsTb9VPptFdzMZQmfGgQRQPLKF%2BrDIkLM8zy&X-Amz-Signature=eb519d27e293734d3eef645837c6023d4294446bb4e1a01558af85faa119e407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6BJHMT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIETqQdwuFKQ8MX%2B6SPZDJ1p8oEtSg9H1K%2B3nRuN2QHNwAiBnwUBKsg1wlvIOzqoKC1mF2VCHuaU0YLoqI1xc4WKypCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMU9YJc12LOme2gVVlKtwD19F%2FWUalLDz5Hfy9In8N1%2FtJmCss9Rrv87T8xY%2BlhupkjuZIrq3Qq7eyl3Zn2i5oTq5BNAVhTiw7JuI4WBgRDlio3wvFmY9BoU%2F6H%2FXHN1aOCYZJvAfptOufhw0m2unRHn3G0BFkmAJY6mofQr25W6vYLsD4bNRXeo1n%2FfkPtFL%2FRvGq0Mk972rn6oeCQsjJLfb5DFufQWNVRZ%2FTjmlgVtDxiRgp4%2Ftpwgoype7F1C%2Bf01eWtVn0uWZSCqPqSJMSvJjdBewqrKhPwp5xXAdi0Z4ALJ3dNuIchBvf0DaJFKLkrtpFN76r7FrbmIHmPRirlLH%2FjkY7PxZhVlJZYPMvQGbfV35gk5Q7y0z9vCGUnLTRp5CuG71lLDAQe6k5HvpopEGxz866oE45LNTPSsq6AdKbGaj%2BuRhS8LbcPoaQ3xBjaR3ASxmGq3b1NH7jmBFdvwDCuWXdg30wKiam9h5WIrt0D%2FSyrcXAY9FQa2%2FgxrSCWHkjxQufjsFkUwDBU5eS5PN1Jb3Vx2U9LWQ3z09kWfwYPu81T4wqYabOYlIl1ZVbinvouGp%2FtIeqbhe8lGKIm6pHVX9foITT4LRqr8E6WEnQc7k%2BgreVZnrFiMWE2O3LM2sNGTFEjA3W8GswntGPxAY6pgHhygVI8E442QBhXDAv7W5OKRdKd1hum9dARpaZpx8YQnCFGrDLnf%2FKPsDOfeNAS%2BL0Xq14gq50bsy1HMsbrW3eT7RTuzOwPCjLiNI%2FgwjmI6SgFurwM2Yw2uiEvqXxnb3kXPGCA2JCOqMyPUFSraN5OWTqXmh0Xio5L1D6mfzm9znLo6k%2BZUXh6S48JsTb9VPptFdzMZQmfGgQRQPLKF%2BrDIkLM8zy&X-Amz-Signature=da1ef26b387f9b8064685d22ee1e61a479d9d8f386f9cd063f54ccfab03541de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
