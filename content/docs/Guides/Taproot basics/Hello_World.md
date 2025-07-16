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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUC5R2X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGVl2xsFGdgdII%2FK69%2FnT0yZlQclC7yeSKpn%2BqbVM1EKAiBbv2YP9QL%2Bd4Q9lit607PvXtmSZ1XiHBHTbLUkkIbHHir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMGhbNKAfWt4i06hvXKtwDT4wyZXYcZyrsQKGo4IuL%2FIrjpVW97UNCAcN5BkURPGmbJ%2FYns6RKz47Phu2ZHULDo%2Fzj21e7I49ALtxDm%2Fwqe9teJXGt7xNuCMG%2FzD0SSCxsYXttm1i1HtJbzbcGqX5pj8Tpn3wbdjhGyCY62q2ClvcuWBEOZtKv78q8BoFaLRXgLw6R38hgQQ%2BF9GWmlate7XfrPoXO1k1hWCxwp65BRTmx8TmJ94Y6XAQeyhlt0m6eav7sMC1DTbfhuHeyXtTdFn1rHflRq3xoL44lwG0TXHORTjtK%2BiCl72dv37xPgEGS0kYPriUQgVqubVVdvWapKPIpMyuad160ESlHpWY9%2FkY0ZVlBVFuWh%2FvtJFkfOqBDSlWi1wxp3LCc3Oex%2FekEc3sL%2BXpL55amHGoIuzhLWASUqKm2JnJXT2O8Wki6frSmMcKPVHlvK7dLgX%2FxZ19H05mrraFEdXtPgpDGU9ONGccbAZoHh%2B3VqKU7GrFAmtsdSdti%2FuZXtY9mSQyUyfJiZ04oFJc7DJ9Y93kX%2B4DhZugLtlCJkkvFxVs8AwJ6U3O%2BfUetMkMiv5J1Ofhghypzveu%2B1Q3Qe3yVJgSJkKNwDaDRcanxlYAUvOO%2BWInM3g1bw42chYHRZMP7hGUwxpPewwY6pgFI6HGiWoXDmjmzXjPwdXioGAvIIs6DGYY%2B7M%2F3oRlGiwE7e8pgpoVCLnRKFdUGP6oWb2j3WwRiCjNyT2%2FseHv6klBZybSvot0T8QnEvzpzmshsHdEtmVLIA70JcIXcz7lxiLDxy7yCAJTSyOZf0XlPy30yswNolNqemW%2FOCEhZPhXdyAZTtz6hAFbfrtg%2B4KKLtuaHvawi6wlmpsTAY0bMq02%2BdMP2&X-Amz-Signature=f7875f9f9bcceb37d2d033473848f84db8ed178a727af18d8ddf39b6f9352851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUC5R2X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGVl2xsFGdgdII%2FK69%2FnT0yZlQclC7yeSKpn%2BqbVM1EKAiBbv2YP9QL%2Bd4Q9lit607PvXtmSZ1XiHBHTbLUkkIbHHir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMGhbNKAfWt4i06hvXKtwDT4wyZXYcZyrsQKGo4IuL%2FIrjpVW97UNCAcN5BkURPGmbJ%2FYns6RKz47Phu2ZHULDo%2Fzj21e7I49ALtxDm%2Fwqe9teJXGt7xNuCMG%2FzD0SSCxsYXttm1i1HtJbzbcGqX5pj8Tpn3wbdjhGyCY62q2ClvcuWBEOZtKv78q8BoFaLRXgLw6R38hgQQ%2BF9GWmlate7XfrPoXO1k1hWCxwp65BRTmx8TmJ94Y6XAQeyhlt0m6eav7sMC1DTbfhuHeyXtTdFn1rHflRq3xoL44lwG0TXHORTjtK%2BiCl72dv37xPgEGS0kYPriUQgVqubVVdvWapKPIpMyuad160ESlHpWY9%2FkY0ZVlBVFuWh%2FvtJFkfOqBDSlWi1wxp3LCc3Oex%2FekEc3sL%2BXpL55amHGoIuzhLWASUqKm2JnJXT2O8Wki6frSmMcKPVHlvK7dLgX%2FxZ19H05mrraFEdXtPgpDGU9ONGccbAZoHh%2B3VqKU7GrFAmtsdSdti%2FuZXtY9mSQyUyfJiZ04oFJc7DJ9Y93kX%2B4DhZugLtlCJkkvFxVs8AwJ6U3O%2BfUetMkMiv5J1Ofhghypzveu%2B1Q3Qe3yVJgSJkKNwDaDRcanxlYAUvOO%2BWInM3g1bw42chYHRZMP7hGUwxpPewwY6pgFI6HGiWoXDmjmzXjPwdXioGAvIIs6DGYY%2B7M%2F3oRlGiwE7e8pgpoVCLnRKFdUGP6oWb2j3WwRiCjNyT2%2FseHv6klBZybSvot0T8QnEvzpzmshsHdEtmVLIA70JcIXcz7lxiLDxy7yCAJTSyOZf0XlPy30yswNolNqemW%2FOCEhZPhXdyAZTtz6hAFbfrtg%2B4KKLtuaHvawi6wlmpsTAY0bMq02%2BdMP2&X-Amz-Signature=b8c58c4e0558d03a7e0c843eaf9ace1543ff984647842207f1a1453d9f354e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
