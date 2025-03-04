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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA7ZVWI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLkHmiOygcfwF3PTxSC97E7dt9mQK4o6KaznHO2%2BVwmAiEAm7XsIbSKndwElEas0%2BnPdec9JS1Ta4LW6i%2Ba0psxPFsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgvadwlVpicv10qPircA6OHi%2FnXt3X2roTPMvacrw7K9Gp%2F61ZnA9wZ5IWGBv0BUgxTy5vtT9z5cOXQmrzDC%2FD8C74YkdYT3dEo98%2F5GLg0FDMUYz6odEa0EIE2feUmXyGPlEqvbsaeH%2B0xQzfS%2BzefKzA0mmCKcMlJOd9nhiW7Yt4Q3aI2vT8eK%2BnIdDgRonwcudvQkLpxL%2Bc8id1WRC0Ngn0ssYD7ZuGyVfio1e1wyNgOHwkk7KCyYbQt1WXr%2FPGI%2FaIPEmdyQ2ejQPiy1K3UdepBS2GghmwS6KapdkSrCOCobg8bg1meUdgmI2goU724uqkQr51oPJ4QrG2BcQ0vtFN43p9QrHjn8ux2T3lfS7IoBWLBlJ0sz3Sw57Mhnt6OGVPQ%2BhmWEp9Ezj03ofnjb7rcOpNBjN78lepk6neQ4AoRGrp3nuy5NAhw2BFYgdO04P5IK3tVp%2BrSXnHS5%2BzP0WS5nvlZBtlRpK9xRdOVMOCgTkfvLczcRV5KB%2B5hRmMP0Qz%2BfrLdaGhOhcAgad5y9K8idZrkM1saoko%2F3%2BBi7Q%2FjKw62GQPVNMxyUKMQTNXJ42vMWEK6hl9Z56cIzQhqXyDZ0whW70rwjOR%2B9N9F852XHyIH5B4kge2i6xgXsdzUfgF7%2BKd5bJgHMLf4mL4GOqUBeBjO1lUvwjqcfq6INrv6tDky3CahDAXJtlGDevWSmAxQ0ChuGRbCxHYmgB03NvzhRmrVfmkKKRbgzUpaYa2yzNcXGQdTifg1WrnQcLhc9cCPrEyryyeMfvA%2B9lVieS49mxEN5mF4zW%2BhGkrO%2Bb1T9vTq6zlq%2FkrkwgGo6fYOPPDgwrPDbOimr%2BSwcdZ2OhVXUEmzRqtFXXPwtBgAMAISFY96fq14&X-Amz-Signature=249ee6b650d40ce644abfe1beabf6d9715c516989c781c9682249fb169b5d5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA7ZVWI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLkHmiOygcfwF3PTxSC97E7dt9mQK4o6KaznHO2%2BVwmAiEAm7XsIbSKndwElEas0%2BnPdec9JS1Ta4LW6i%2Ba0psxPFsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgvadwlVpicv10qPircA6OHi%2FnXt3X2roTPMvacrw7K9Gp%2F61ZnA9wZ5IWGBv0BUgxTy5vtT9z5cOXQmrzDC%2FD8C74YkdYT3dEo98%2F5GLg0FDMUYz6odEa0EIE2feUmXyGPlEqvbsaeH%2B0xQzfS%2BzefKzA0mmCKcMlJOd9nhiW7Yt4Q3aI2vT8eK%2BnIdDgRonwcudvQkLpxL%2Bc8id1WRC0Ngn0ssYD7ZuGyVfio1e1wyNgOHwkk7KCyYbQt1WXr%2FPGI%2FaIPEmdyQ2ejQPiy1K3UdepBS2GghmwS6KapdkSrCOCobg8bg1meUdgmI2goU724uqkQr51oPJ4QrG2BcQ0vtFN43p9QrHjn8ux2T3lfS7IoBWLBlJ0sz3Sw57Mhnt6OGVPQ%2BhmWEp9Ezj03ofnjb7rcOpNBjN78lepk6neQ4AoRGrp3nuy5NAhw2BFYgdO04P5IK3tVp%2BrSXnHS5%2BzP0WS5nvlZBtlRpK9xRdOVMOCgTkfvLczcRV5KB%2B5hRmMP0Qz%2BfrLdaGhOhcAgad5y9K8idZrkM1saoko%2F3%2BBi7Q%2FjKw62GQPVNMxyUKMQTNXJ42vMWEK6hl9Z56cIzQhqXyDZ0whW70rwjOR%2B9N9F852XHyIH5B4kge2i6xgXsdzUfgF7%2BKd5bJgHMLf4mL4GOqUBeBjO1lUvwjqcfq6INrv6tDky3CahDAXJtlGDevWSmAxQ0ChuGRbCxHYmgB03NvzhRmrVfmkKKRbgzUpaYa2yzNcXGQdTifg1WrnQcLhc9cCPrEyryyeMfvA%2B9lVieS49mxEN5mF4zW%2BhGkrO%2Bb1T9vTq6zlq%2FkrkwgGo6fYOPPDgwrPDbOimr%2BSwcdZ2OhVXUEmzRqtFXXPwtBgAMAISFY96fq14&X-Amz-Signature=f7b6bdaab42b92e79d98a32dfd7ca9585e4bb4130483cb8bc8ab7319358f965a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
