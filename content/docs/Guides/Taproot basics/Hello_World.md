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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDW2YS7Z%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDH1qXWIyJfGrnRynXnaSMwGyZTO1ae4Wp5kltmY999zQIgav0jS2vYbAydO2TKSuq977NIIIQPSxFCL%2F3mjc4HioQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLJzpJj4TyLlIHkJ%2FyrcAxrsgIsM4v2YkS%2BCVutXr%2F9Lbm4P7lnQzipqXM3O5i8UTrE3J62SrXYrG3%2BcUorSW1nzDSiP%2BqVnt7nwUhtGcG2igVvEbu66HAYjY%2BMPV9IPm8ktoz6dJuj84hVgm%2FlXLP0EtwzffZ%2FEyInDpynCK6d7eiTSdiMF3rwTvwy1KC7CBjy5Xq1LmfO3OrDxGhQPz0aXX%2FRfHrHK1W4Sv1JRj904L3ykYlUYPt12p3QMGiwcHkdpYJ%2BVh7PM9Z4ub5X4OGMVS1piSKM78ATAonuxSR8c1gKhh1xR8Ma%2FF8qvLoWoFkLjIOPhb2LRs89rB2kP6gaSf%2FrybT2Oji1TqG8tZds9zTJeMZuJD1z9znpEXOtqy4LqMfLjkXtO1Bul8El6PjOF92BlgQ4W9Nvd%2B4jsK6ULPELA5fL591g2Md%2FIK%2BlDZwYCnItE8pfEofyN7Xj7MarX%2BKG7iO87aPwcro6ahEJFVUtEiVq0DnztxAg4N%2F6o8IQ%2FVb%2FpLrfVeLr7bvIhO%2FbPnFB3YcDDail6KbSQLNa%2BWqtILcADWui8VZbLoWEOdp62IQczj6fzoxH1VhAaEotwUxbEQ8EhHA9nDdjRdLuOaWZ0GSqRMhNPb7S9Ri%2By2mZGQiJlEmczHWTDMIuW5bwGOqUBfEyxo2owhJzIoQVIrbCVEAjq5bvtWhCjuGP6mzi99IdcSCz6iuXCxp7%2BVU6O37c%2BDMgrkz5I%2Fx2iII1AChb3f6NuE8grCJaUlFSbQ0XdHMNF0X%2BmMrlae%2BmR%2BB0blo4hr0EE9s6COACQu0u9CVOEfHNXnLL1fG4oGXNGmbIZiMT%2F60y8%2FoMCu3sLrIxYRZCiI%2BsFoMd%2FtoR6h4U31l5Q3RdoertY&X-Amz-Signature=8a25567f127800119d661ee7195d05f26ee4f3f54f207f516d6c5a296d7e3d02&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDW2YS7Z%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDH1qXWIyJfGrnRynXnaSMwGyZTO1ae4Wp5kltmY999zQIgav0jS2vYbAydO2TKSuq977NIIIQPSxFCL%2F3mjc4HioQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLJzpJj4TyLlIHkJ%2FyrcAxrsgIsM4v2YkS%2BCVutXr%2F9Lbm4P7lnQzipqXM3O5i8UTrE3J62SrXYrG3%2BcUorSW1nzDSiP%2BqVnt7nwUhtGcG2igVvEbu66HAYjY%2BMPV9IPm8ktoz6dJuj84hVgm%2FlXLP0EtwzffZ%2FEyInDpynCK6d7eiTSdiMF3rwTvwy1KC7CBjy5Xq1LmfO3OrDxGhQPz0aXX%2FRfHrHK1W4Sv1JRj904L3ykYlUYPt12p3QMGiwcHkdpYJ%2BVh7PM9Z4ub5X4OGMVS1piSKM78ATAonuxSR8c1gKhh1xR8Ma%2FF8qvLoWoFkLjIOPhb2LRs89rB2kP6gaSf%2FrybT2Oji1TqG8tZds9zTJeMZuJD1z9znpEXOtqy4LqMfLjkXtO1Bul8El6PjOF92BlgQ4W9Nvd%2B4jsK6ULPELA5fL591g2Md%2FIK%2BlDZwYCnItE8pfEofyN7Xj7MarX%2BKG7iO87aPwcro6ahEJFVUtEiVq0DnztxAg4N%2F6o8IQ%2FVb%2FpLrfVeLr7bvIhO%2FbPnFB3YcDDail6KbSQLNa%2BWqtILcADWui8VZbLoWEOdp62IQczj6fzoxH1VhAaEotwUxbEQ8EhHA9nDdjRdLuOaWZ0GSqRMhNPb7S9Ri%2By2mZGQiJlEmczHWTDMIuW5bwGOqUBfEyxo2owhJzIoQVIrbCVEAjq5bvtWhCjuGP6mzi99IdcSCz6iuXCxp7%2BVU6O37c%2BDMgrkz5I%2Fx2iII1AChb3f6NuE8grCJaUlFSbQ0XdHMNF0X%2BmMrlae%2BmR%2BB0blo4hr0EE9s6COACQu0u9CVOEfHNXnLL1fG4oGXNGmbIZiMT%2F60y8%2FoMCu3sLrIxYRZCiI%2BsFoMd%2FtoR6h4U31l5Q3RdoertY&X-Amz-Signature=410cde96ce9501d0f01b91cc9c671bbc6829fb892fe39d24daaa9b3919cdf0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
