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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3LQXEB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG6kedAbj3wKpyE4czcD2k4%2B4AzWxGkGGUdlNqdeiDEZAiAuI23%2BuRn6CuT1v%2BMooEIdX6MwdSiYbIF%2BQCsUCMDeVyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQrOcWu%2FNeBT1NE1KtwDIzfGyPwmgc5YmIKf6cPNb4wTN60uFlIc016gs%2BIFtl%2Ff%2BXYlZ%2Bwq%2B0pQ1w4IqWMeS0vE1TluSn4UodCoOAJRhjc3VlgayIwyVMX6IaJeJryJ2KGFcvu4n%2BPeFL9qLeTLrZ2n7tahSRczDyrryxxWPYrA4iz2CFGnMlrC8D%2FmM8KXhAn%2F%2F6dXPeoGJ1hoq20Ne4gA86IpXkOohM%2BOvID2dwF4xnRAq54g%2FvZaCAtPjcSWdMAwdlVPWDsbrflCCmTyJJK6fwvWYVOIeo3H2YFWvVg8d6u2Hj7w4YnqtjS%2FC1eYnbz%2BmWGlMU43tJhRmrovh%2B%2B4crrFltWyBfNAcEWpAJxFLcg9cJZY0YMMB%2FqyQShIwrpNZv6SIeP6REOf1OVXYXI6yis9F5hpkvHPQo86i8F8TJppSac305s%2BgWA8BKvGAOP5T8QpmonV97QKwEGppkvEj%2B34Ms1QhTlP56a11i8ljHZPdnqVW2kXWTPbPrDU2Kdmje7ZH8ySuKpq10MntEnFTsQtLOsFJoqYTH5R%2B7%2BuXhN48Ch6XkGGXCLQzF2s5h4kfiesP%2Fgwa6%2FUYEQS5tbBWogOG6xDxYyIGyfSWVdyE2gJdhZxWidb4tNSxrOZCLuy2l6Z1M6dg4Aw0Y%2BcvQY6pgFsR6MX8Lg1UamtB41U0sIgaNkjFUAGOAB7IKm5P5Vtm9qp5homkTe7pOAg0VHOc0xZTcXTuAQdSZvgosau0V6LA0trnBkiqKcgmz%2FqYCbBu%2BNpNVuxvBCjkwijArnBpFU1eJipgeq4bT%2FqP62nr8IgLYHsxL3PODnL7HRPCUUApO8VFxbTJdOFaECfU5GXzgkIe5sWE0%2Bo6XSOjoX46wJbyjQaNWi7&X-Amz-Signature=0cec3469887460c6e3b625c01ee0fbafab0c3d33bf3b37888dfd9844550a7822&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3LQXEB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG6kedAbj3wKpyE4czcD2k4%2B4AzWxGkGGUdlNqdeiDEZAiAuI23%2BuRn6CuT1v%2BMooEIdX6MwdSiYbIF%2BQCsUCMDeVyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQrOcWu%2FNeBT1NE1KtwDIzfGyPwmgc5YmIKf6cPNb4wTN60uFlIc016gs%2BIFtl%2Ff%2BXYlZ%2Bwq%2B0pQ1w4IqWMeS0vE1TluSn4UodCoOAJRhjc3VlgayIwyVMX6IaJeJryJ2KGFcvu4n%2BPeFL9qLeTLrZ2n7tahSRczDyrryxxWPYrA4iz2CFGnMlrC8D%2FmM8KXhAn%2F%2F6dXPeoGJ1hoq20Ne4gA86IpXkOohM%2BOvID2dwF4xnRAq54g%2FvZaCAtPjcSWdMAwdlVPWDsbrflCCmTyJJK6fwvWYVOIeo3H2YFWvVg8d6u2Hj7w4YnqtjS%2FC1eYnbz%2BmWGlMU43tJhRmrovh%2B%2B4crrFltWyBfNAcEWpAJxFLcg9cJZY0YMMB%2FqyQShIwrpNZv6SIeP6REOf1OVXYXI6yis9F5hpkvHPQo86i8F8TJppSac305s%2BgWA8BKvGAOP5T8QpmonV97QKwEGppkvEj%2B34Ms1QhTlP56a11i8ljHZPdnqVW2kXWTPbPrDU2Kdmje7ZH8ySuKpq10MntEnFTsQtLOsFJoqYTH5R%2B7%2BuXhN48Ch6XkGGXCLQzF2s5h4kfiesP%2Fgwa6%2FUYEQS5tbBWogOG6xDxYyIGyfSWVdyE2gJdhZxWidb4tNSxrOZCLuy2l6Z1M6dg4Aw0Y%2BcvQY6pgFsR6MX8Lg1UamtB41U0sIgaNkjFUAGOAB7IKm5P5Vtm9qp5homkTe7pOAg0VHOc0xZTcXTuAQdSZvgosau0V6LA0trnBkiqKcgmz%2FqYCbBu%2BNpNVuxvBCjkwijArnBpFU1eJipgeq4bT%2FqP62nr8IgLYHsxL3PODnL7HRPCUUApO8VFxbTJdOFaECfU5GXzgkIe5sWE0%2Bo6XSOjoX46wJbyjQaNWi7&X-Amz-Signature=5ce1ea50fc3f2b79ea180959b2b0807b1b5a20a9623688f32cec8c832ae6ca3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
