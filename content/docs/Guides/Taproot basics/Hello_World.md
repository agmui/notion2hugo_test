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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPORV4E6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCThVsd9XupXwS%2BmqpLPmHTCkPa4RDirOm7DdrNPg1urwIgZ42FWlpQvy5CRse0l0mpBq37ihdtJS%2BadH08PrNKRMYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIDJGx8%2FdpQbfTixIyrcA95VJBToMpi9m5uWP%2FWGdYLcVhgDFrXaIGhhYTHwgm1vecZqQxG0CjI0iotjsRrEaHy8x%2BsCZozO5JqEbXdVsowduUEWK%2BQo9hRgwBd9JL8JV%2BnSG0JlHy8E%2F%2FGej7jPC9bSsy5vtzJOn5i06bMhLrgbFBIIoKKlE6GKy1Z0CNeLRS0VbeKcreS3KS43ia88M0t1aashpMY91ar6ZOM28dy59gQvFOCG4mamhYBsFhL7VFUU%2BKBrZTmCh0%2FwCtqzXSXllA0yUDnEq051WzRrZYGhGFoFwrZh9Pf0gtQH6gHD335Fcf8BHSnsFjgRVXagzLuy%2B6Z8BRg0KuiMSFti4Ia9fUlRzO%2B%2Fx9V4pNsNYXv2DwhVbuONiSMRTS5cQcjH3HAkcdk0iNUYoO65r%2FjPTsUb5J2P13uLJgmaxDhyax%2BqOq6aMV4KhsNtXQrx6q7jW9oUsK4aQJEhhGCBy7UwboGESpPvX%2B%2FmsOENfMh1%2BsQViHvOMhNU6pmnd9oScsycnsLS6Hso7xGvVbQT0pXHzI16XJwdH%2B3DSZCzw72PkLDfgIiP%2BaqCCt2oRoi9glmbs5j%2BYO0gDN6qNROOuVPZ%2F59h%2FeIaQVy2gwwswMMFlDkaX7Eel9wtRHmkilBqMLjinr8GOqUBeDRG1BOGXPR044IkmcT1ZXTAcbPiizzCZKjISXUplZqLTSzIGkGJSNgQU9N8%2BBPLI4eKOSmBKjmM5M3mDulHDFJYoQPT3F%2FcFUwqcVCpp7%2FXGy5jqhP3T%2BGfoLngquYXe%2Fmm3qAIJ3hUCCEtAU5Lutz9OCD2%2BG2UPP03Tv8WOAfLVTkZUbvD4xp2i4lyXtjEifyE3bnaWP4SkTnN0RDtfPhPRVNW&X-Amz-Signature=902aca4dc0428b17aee4049522c957170d2f5578ddf27e762edf28df181dee05&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPORV4E6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCThVsd9XupXwS%2BmqpLPmHTCkPa4RDirOm7DdrNPg1urwIgZ42FWlpQvy5CRse0l0mpBq37ihdtJS%2BadH08PrNKRMYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIDJGx8%2FdpQbfTixIyrcA95VJBToMpi9m5uWP%2FWGdYLcVhgDFrXaIGhhYTHwgm1vecZqQxG0CjI0iotjsRrEaHy8x%2BsCZozO5JqEbXdVsowduUEWK%2BQo9hRgwBd9JL8JV%2BnSG0JlHy8E%2F%2FGej7jPC9bSsy5vtzJOn5i06bMhLrgbFBIIoKKlE6GKy1Z0CNeLRS0VbeKcreS3KS43ia88M0t1aashpMY91ar6ZOM28dy59gQvFOCG4mamhYBsFhL7VFUU%2BKBrZTmCh0%2FwCtqzXSXllA0yUDnEq051WzRrZYGhGFoFwrZh9Pf0gtQH6gHD335Fcf8BHSnsFjgRVXagzLuy%2B6Z8BRg0KuiMSFti4Ia9fUlRzO%2B%2Fx9V4pNsNYXv2DwhVbuONiSMRTS5cQcjH3HAkcdk0iNUYoO65r%2FjPTsUb5J2P13uLJgmaxDhyax%2BqOq6aMV4KhsNtXQrx6q7jW9oUsK4aQJEhhGCBy7UwboGESpPvX%2B%2FmsOENfMh1%2BsQViHvOMhNU6pmnd9oScsycnsLS6Hso7xGvVbQT0pXHzI16XJwdH%2B3DSZCzw72PkLDfgIiP%2BaqCCt2oRoi9glmbs5j%2BYO0gDN6qNROOuVPZ%2F59h%2FeIaQVy2gwwswMMFlDkaX7Eel9wtRHmkilBqMLjinr8GOqUBeDRG1BOGXPR044IkmcT1ZXTAcbPiizzCZKjISXUplZqLTSzIGkGJSNgQU9N8%2BBPLI4eKOSmBKjmM5M3mDulHDFJYoQPT3F%2FcFUwqcVCpp7%2FXGy5jqhP3T%2BGfoLngquYXe%2Fmm3qAIJ3hUCCEtAU5Lutz9OCD2%2BG2UPP03Tv8WOAfLVTkZUbvD4xp2i4lyXtjEifyE3bnaWP4SkTnN0RDtfPhPRVNW&X-Amz-Signature=737b0049842f8813fd8ae4889d9aac5706e2fcbf9740b04063f8f01123232aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
