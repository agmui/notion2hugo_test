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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YY7VPBT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjGLBtEnXf1Zs4AydQzr3xQQV%2BAJ1%2B4ZuBHu9cvkGxDAiEA6S2YpsQI4lTVz6uxPqhqkn8Ikkpa6MT%2FZbSzrzJLM1kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOInv%2BRe9EdVsMvEjyrcA1z6SQXFnFNqwjZqR7LMJgsrOnIvFLXsSuQqaWbQB7f0Mj2GO%2B8i%2BacoY2nLPqUbOiSubNn%2F%2F%2FQZryOhxTsp7Qi%2FMt62TiKfsC9RLqprPhGN55iFvd539B2wbO3lqJzi4M%2BaAs05ANhIbc9hbHWEM7ceI3n06Iv4pAJH0qRkEpyTqjaNyB7Lz4%2BdEsUXwON2cFsbfvP7Jd2%2Bv99amOumEPD2sX%2FccbTHFIAF1uMmoWepfqMy40iQwK6k5MbmWetQckn28xXea5j6tjsWY3CfLC6UNR9hHSGjSr6Bvu6GIJiHrJPkQ%2FE2Egigls4SrOvcX8CeADh%2BdBtOzLb727dWULRPeu0Z798XRbarNPlMGlB59Loi5jhVkyRg5lO2rmfA4palKn6CLvf8ZzsjGSXzc3FBK2aUjPaUl3lTE7JuUJEtkF0I4phyOWsdixB%2B8R%2BajE%2F0zvElfWcH08E2VTKKKqN8PDvLmMK%2Ftf%2BOD09GaTUGuMbNxLI6HLHKubqsTYASqfFTl%2BSF6Dfy85BBs2wp8bPu8pqqvenKfl3k0EYJV7UvgFUYCW3mng6t%2BgQm28hPCc6zTSrPDsm5sAhlUlTGL%2B%2FSFHhw1fgShhLCJ%2BBb8aElsTF8Fu2upSEyq84YMPHP5sEGOqUBXsEJmUaMmB8MGlcJhTp6FG%2F%2Bx0StctCbr86PDebnjqA9eQMY8LKM9ao1ST5cc8Nyoq5zPBxdUXRwUpFgOTB0UA8K7OVOXRef2nZbX5S%2Blvqu1f5fZMh%2FHhHGMXU4Y8s43Wk%2F8Xz4TdE3u1SLDBhHrzwHvOKaFDmQ%2Fi5c78OD%2BhYoZi6V0jTJIVR3t%2BQg7UgUI4nWK2h3vi3qu%2BQQsBHzMPXAa5lJ&X-Amz-Signature=5a89b6c4f82d7942fa6237546e33aa718440ef120bdaf9e2b4f412ec1c33455b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YY7VPBT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjGLBtEnXf1Zs4AydQzr3xQQV%2BAJ1%2B4ZuBHu9cvkGxDAiEA6S2YpsQI4lTVz6uxPqhqkn8Ikkpa6MT%2FZbSzrzJLM1kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOInv%2BRe9EdVsMvEjyrcA1z6SQXFnFNqwjZqR7LMJgsrOnIvFLXsSuQqaWbQB7f0Mj2GO%2B8i%2BacoY2nLPqUbOiSubNn%2F%2F%2FQZryOhxTsp7Qi%2FMt62TiKfsC9RLqprPhGN55iFvd539B2wbO3lqJzi4M%2BaAs05ANhIbc9hbHWEM7ceI3n06Iv4pAJH0qRkEpyTqjaNyB7Lz4%2BdEsUXwON2cFsbfvP7Jd2%2Bv99amOumEPD2sX%2FccbTHFIAF1uMmoWepfqMy40iQwK6k5MbmWetQckn28xXea5j6tjsWY3CfLC6UNR9hHSGjSr6Bvu6GIJiHrJPkQ%2FE2Egigls4SrOvcX8CeADh%2BdBtOzLb727dWULRPeu0Z798XRbarNPlMGlB59Loi5jhVkyRg5lO2rmfA4palKn6CLvf8ZzsjGSXzc3FBK2aUjPaUl3lTE7JuUJEtkF0I4phyOWsdixB%2B8R%2BajE%2F0zvElfWcH08E2VTKKKqN8PDvLmMK%2Ftf%2BOD09GaTUGuMbNxLI6HLHKubqsTYASqfFTl%2BSF6Dfy85BBs2wp8bPu8pqqvenKfl3k0EYJV7UvgFUYCW3mng6t%2BgQm28hPCc6zTSrPDsm5sAhlUlTGL%2B%2FSFHhw1fgShhLCJ%2BBb8aElsTF8Fu2upSEyq84YMPHP5sEGOqUBXsEJmUaMmB8MGlcJhTp6FG%2F%2Bx0StctCbr86PDebnjqA9eQMY8LKM9ao1ST5cc8Nyoq5zPBxdUXRwUpFgOTB0UA8K7OVOXRef2nZbX5S%2Blvqu1f5fZMh%2FHhHGMXU4Y8s43Wk%2F8Xz4TdE3u1SLDBhHrzwHvOKaFDmQ%2Fi5c78OD%2BhYoZi6V0jTJIVR3t%2BQg7UgUI4nWK2h3vi3qu%2BQQsBHzMPXAa5lJ&X-Amz-Signature=923f2578587939fe97eece92eb4c2306f0560fdab810490a3086b48d799fa25c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
