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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726I53PX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDH4Cf%2Fmwg9qVbO0Zz74R48RLS7sQp7skPVHdp4hPpgqAIgXyTxM4A1gUw6nQ0YOjsCg1dRJp2uNW7h5RG1BDQAGTEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPESfAGk0HQ5znkXeircA2fA%2F73KKhtLTZprTDeKYAnqUslk9MKzT6Go867hVVsSrJ3pVtUpRymIIikueIMtc%2B2wLGpEjWF%2FoALEJXoUP3ZHAW9ZSOdLgqbVR4uQG7PDSw1dSOIY9qab8APu85IvUy7I5vx4Eejk4jCu%2BM3iN5B0eEgEJYslr06E6eWl%2BfaeSFw8MAOj0xNfacnRRH9HzCMifkad2pDBh3hKD2ivqb06bRhGTSh7lE20VMjQQUu0uiz4FZaOiTlY%2BNrM3RHtZrJDEV1XaGK73L0Aanj7mITVI4W7YrfemLWJ47LYfa4mfgDXaMv9ylgpY9zTawce%2FI34TuDJv5OeJC6XIW591esxGP%2BEiHVJhEGIi7Dzu9hI%2Bu08ct8b%2FBox0fMPQOu3u%2B%2BkR9oON2pdv12wjjs7T39BXkdYin4Omza1WOaqFs5q6x8T6XAbnsXwozLXzapk08KiFEnkOQJc7k8YjaI3izymleoX6WSIXhnc0QVpz3SNN%2FJwpMsaE01zR%2B8qRSCQu3VJ%2BbBEQXrgnFOX3IdJ5fN9x0mmebK4laaoB7xhc0sDNqFxf1JlLSs1%2FlJoHYNOE04jQVXq4pNRn6%2BZ2iSmaBHQxYL4LqVfMag%2F1B3FkL5G3kvcnFRTIPeU%2FwAaML2mzr0GOqUBqUIFdfoGY5P7isnVwFv0K%2Fwp6NDiEzAiyYqXwcz8A32%2FrS5TX1VIorPJKtpu12wkgHRaKHAKU4JekDr3GGmXPLTCCChz%2Fmoa%2FpTSGsY6Vre8OiZYgIG2RJfaBZ2kaYS%2BSIkq5Tq9GHOKmlEF%2FSWbG%2Fb9%2BnX4FLCtLNeUdiUuumrH5QNysU7SzoIJw4e5P4ndAALPh19v7VWBsG5Kq4xNrhlUJiru&X-Amz-Signature=7aee2f629d4754f58e25f89104d6c48bc7e563454eee4d3446d151c634721578&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726I53PX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDH4Cf%2Fmwg9qVbO0Zz74R48RLS7sQp7skPVHdp4hPpgqAIgXyTxM4A1gUw6nQ0YOjsCg1dRJp2uNW7h5RG1BDQAGTEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPESfAGk0HQ5znkXeircA2fA%2F73KKhtLTZprTDeKYAnqUslk9MKzT6Go867hVVsSrJ3pVtUpRymIIikueIMtc%2B2wLGpEjWF%2FoALEJXoUP3ZHAW9ZSOdLgqbVR4uQG7PDSw1dSOIY9qab8APu85IvUy7I5vx4Eejk4jCu%2BM3iN5B0eEgEJYslr06E6eWl%2BfaeSFw8MAOj0xNfacnRRH9HzCMifkad2pDBh3hKD2ivqb06bRhGTSh7lE20VMjQQUu0uiz4FZaOiTlY%2BNrM3RHtZrJDEV1XaGK73L0Aanj7mITVI4W7YrfemLWJ47LYfa4mfgDXaMv9ylgpY9zTawce%2FI34TuDJv5OeJC6XIW591esxGP%2BEiHVJhEGIi7Dzu9hI%2Bu08ct8b%2FBox0fMPQOu3u%2B%2BkR9oON2pdv12wjjs7T39BXkdYin4Omza1WOaqFs5q6x8T6XAbnsXwozLXzapk08KiFEnkOQJc7k8YjaI3izymleoX6WSIXhnc0QVpz3SNN%2FJwpMsaE01zR%2B8qRSCQu3VJ%2BbBEQXrgnFOX3IdJ5fN9x0mmebK4laaoB7xhc0sDNqFxf1JlLSs1%2FlJoHYNOE04jQVXq4pNRn6%2BZ2iSmaBHQxYL4LqVfMag%2F1B3FkL5G3kvcnFRTIPeU%2FwAaML2mzr0GOqUBqUIFdfoGY5P7isnVwFv0K%2Fwp6NDiEzAiyYqXwcz8A32%2FrS5TX1VIorPJKtpu12wkgHRaKHAKU4JekDr3GGmXPLTCCChz%2Fmoa%2FpTSGsY6Vre8OiZYgIG2RJfaBZ2kaYS%2BSIkq5Tq9GHOKmlEF%2FSWbG%2Fb9%2BnX4FLCtLNeUdiUuumrH5QNysU7SzoIJw4e5P4ndAALPh19v7VWBsG5Kq4xNrhlUJiru&X-Amz-Signature=b730467ad5f05581aa54491c3e86ad8472d95412f286a00f0694f3b995e96939&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
