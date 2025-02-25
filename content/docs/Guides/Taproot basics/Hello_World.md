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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCOZHK6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDDeOnpSW5CMjwApO1DLNSDfFJQh5wkWLpdsVCKayNIfwIgD5wrq39ZMquNLd%2Bz1KLNT2JAUQQX9YLCdc2q2bgghOYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJvjLo8bltkk%2BTQLdSrcAzh2q4czeqxBwcMJGhNSRPSs7iwmpOfdHpCwxgI8gzwKrF1G2il1mJ4WZT2iT7cU6EmfWAsx2qjfnLJHJTZB1JPT3Y3wKz%2F72jBx2tls7JLj2JzEsBnJxUVCXfD5RAyXWZyPGR%2FXk5B1LW8EvAxpUdH%2Fqs%2BaghelrfGOaaVgv9zzMteXZm1nFOqShxrIr07fWy95AjMx%2BrpfF4lH81mCksCKeIVuc72lhFmYOcloKedrwaZZE7bSwgAlQtT7PoY9dy5hygJrhcS%2F82pMCESlyXGp6%2BRGfYi8a6pmkXfSz4SggmY1JsVV43KYZD83R15yx1jsKbvy53fAS0WwG%2FrrBVbrDuM5Exlz6kWmXT3Qz0VQ3xXytkMeL436NSIexxx5d3DYQVlbn7jIVRgD5kog9d57TIR3trgcUnClheug9EsEKitl2MED3jzVbwmJpS8I1InTPqUmMZC%2B7uasgGJIcWW%2By3Ql08hxgqHILYhUiRIKw%2F14ZmTRMpsxBQl%2FA2%2BPcFADMtSD6dPfLnNa6bvVqYUeJaoZCmxHHqA8GSSA6B2ei6CdNIOu3vfoR7J6pK8P1EyZJgZzTvzZXnMr8WhTrvXwS0HjaI6iNlgSsxaaJYPfjegPSC0EFG09nj6eMIbI%2BL0GOqUBTU5xPIp5dgd6EpugCvwLpkWA4MM5rx2rKdexJzdWTyiXN2B%2BOjSgJWDWmRXqVDH4uOLk1xtdBA4khm2qVKnIwetTdGs6a5JQDSGz4ni1Ej2%2FgJiHtRNg5cr2uBukPYzOvHVsoy2WdXsVllgsdj0E8KDGCrskMW53SeLbMJmrmAWcAUNDetTGTcdfWn3nsxMI5duokCWsBc6Isr58p%2B1TnqdnEn7t&X-Amz-Signature=096d71feebf046c73691429c16a494acf7159daf55aa18fa6527e091b1dad77d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCOZHK6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDDeOnpSW5CMjwApO1DLNSDfFJQh5wkWLpdsVCKayNIfwIgD5wrq39ZMquNLd%2Bz1KLNT2JAUQQX9YLCdc2q2bgghOYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJvjLo8bltkk%2BTQLdSrcAzh2q4czeqxBwcMJGhNSRPSs7iwmpOfdHpCwxgI8gzwKrF1G2il1mJ4WZT2iT7cU6EmfWAsx2qjfnLJHJTZB1JPT3Y3wKz%2F72jBx2tls7JLj2JzEsBnJxUVCXfD5RAyXWZyPGR%2FXk5B1LW8EvAxpUdH%2Fqs%2BaghelrfGOaaVgv9zzMteXZm1nFOqShxrIr07fWy95AjMx%2BrpfF4lH81mCksCKeIVuc72lhFmYOcloKedrwaZZE7bSwgAlQtT7PoY9dy5hygJrhcS%2F82pMCESlyXGp6%2BRGfYi8a6pmkXfSz4SggmY1JsVV43KYZD83R15yx1jsKbvy53fAS0WwG%2FrrBVbrDuM5Exlz6kWmXT3Qz0VQ3xXytkMeL436NSIexxx5d3DYQVlbn7jIVRgD5kog9d57TIR3trgcUnClheug9EsEKitl2MED3jzVbwmJpS8I1InTPqUmMZC%2B7uasgGJIcWW%2By3Ql08hxgqHILYhUiRIKw%2F14ZmTRMpsxBQl%2FA2%2BPcFADMtSD6dPfLnNa6bvVqYUeJaoZCmxHHqA8GSSA6B2ei6CdNIOu3vfoR7J6pK8P1EyZJgZzTvzZXnMr8WhTrvXwS0HjaI6iNlgSsxaaJYPfjegPSC0EFG09nj6eMIbI%2BL0GOqUBTU5xPIp5dgd6EpugCvwLpkWA4MM5rx2rKdexJzdWTyiXN2B%2BOjSgJWDWmRXqVDH4uOLk1xtdBA4khm2qVKnIwetTdGs6a5JQDSGz4ni1Ej2%2FgJiHtRNg5cr2uBukPYzOvHVsoy2WdXsVllgsdj0E8KDGCrskMW53SeLbMJmrmAWcAUNDetTGTcdfWn3nsxMI5duokCWsBc6Isr58p%2B1TnqdnEn7t&X-Amz-Signature=7ada6a2bf87116a495a767c80197c8546f7ad84f46820460263f1df0a9f80320&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
