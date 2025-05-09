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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTEKLJN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLfiblw%2FI1d2pCUu3ojT68llsTtjMNcEDOFUVZaMMQAiEA7MY4p4OMMlakIAbSMZJnUCEd0TWeYu2%2FYWc4CBorQjIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWxZGPpelsOU4GatircA8rLJ9%2FdpJDGNH8dniWAo1euu2S9s25mzz15ELKmPhnEC1Qby9hZSFJRqL4Rgby5IkA97R3qoNXvOGEv3S6gGhqw0Gec%2B4aCrIlhwSg%2Fbm97z%2ByfOXOs%2BtIdh4i76cJZtINxHjQuy6gN7B2P%2BZUI%2FOjGnbauPUtiuRsLJI845Hn1KXhuy9S0bK8SCDgE0rszyCxyIn6XABDGcV0nJfPX5lw%2FoGQ1MykYaUPmVRhOjjsjcAWC51mnNtX239%2B%2BKX8oq8UhsAtVBPQEgPyi9TL3c%2F%2BWveJeRFAjbgZWUUFz9CA8JUAT6L%2BCeunh%2FXSIh0kaoOTROYVXVvOe9XcGr6h1Hq1Rnc7tJumSlPeBLqXxr9SQuK9hweZHWkneykvOu1wIHEfRFstxRwmA3Mj%2FfZKeF3HHDs25PseCeIon8YlQDF50tr1DYA809LzioieQ%2FAv22ZfTcli1rKxnHSilIRsyuH6mXwR7bAeLocGCiqlPJmDvGjVmI0fAx4LsZXlczIRaMEBf271r%2FnCRJNOz7Om3TZUOrjwWMrdUyPhKXa1FpMg5wCcXGv4%2BsvXaaiecYBOFegrJHwHvZvCUkQR7%2BLjT3MJ1H86bkTUv0tzceRbFyua3W%2Bbq%2F7gKpuxwBV3%2FML%2Bc98AGOqUBY9VoJf9QONVJKN594vZ7lvTM3jV4OtyY2x4zEi0RmrOTgLkuW6Qik%2BXLrNT7bnkIzvfjxertDyy%2Flo%2FvB4kNx3Hs1TCxHCZHSqChfbq9qiAISYG3tauKQzbK5zmxsU08p7YolDLaub7M3YnlHCBwZ3CBF7S2Z%2F3ioUK%2FAnaHHCgfE2Nm4lIeWSiO1c5cVAzz4BpkmN79vTJD1GHy4iH7NvSnY2jD&X-Amz-Signature=e1a8e0182db4b756f5b61d28fedaf68806d0f567ab5dbe0d9191390889660ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTEKLJN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFLfiblw%2FI1d2pCUu3ojT68llsTtjMNcEDOFUVZaMMQAiEA7MY4p4OMMlakIAbSMZJnUCEd0TWeYu2%2FYWc4CBorQjIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWxZGPpelsOU4GatircA8rLJ9%2FdpJDGNH8dniWAo1euu2S9s25mzz15ELKmPhnEC1Qby9hZSFJRqL4Rgby5IkA97R3qoNXvOGEv3S6gGhqw0Gec%2B4aCrIlhwSg%2Fbm97z%2ByfOXOs%2BtIdh4i76cJZtINxHjQuy6gN7B2P%2BZUI%2FOjGnbauPUtiuRsLJI845Hn1KXhuy9S0bK8SCDgE0rszyCxyIn6XABDGcV0nJfPX5lw%2FoGQ1MykYaUPmVRhOjjsjcAWC51mnNtX239%2B%2BKX8oq8UhsAtVBPQEgPyi9TL3c%2F%2BWveJeRFAjbgZWUUFz9CA8JUAT6L%2BCeunh%2FXSIh0kaoOTROYVXVvOe9XcGr6h1Hq1Rnc7tJumSlPeBLqXxr9SQuK9hweZHWkneykvOu1wIHEfRFstxRwmA3Mj%2FfZKeF3HHDs25PseCeIon8YlQDF50tr1DYA809LzioieQ%2FAv22ZfTcli1rKxnHSilIRsyuH6mXwR7bAeLocGCiqlPJmDvGjVmI0fAx4LsZXlczIRaMEBf271r%2FnCRJNOz7Om3TZUOrjwWMrdUyPhKXa1FpMg5wCcXGv4%2BsvXaaiecYBOFegrJHwHvZvCUkQR7%2BLjT3MJ1H86bkTUv0tzceRbFyua3W%2Bbq%2F7gKpuxwBV3%2FML%2Bc98AGOqUBY9VoJf9QONVJKN594vZ7lvTM3jV4OtyY2x4zEi0RmrOTgLkuW6Qik%2BXLrNT7bnkIzvfjxertDyy%2Flo%2FvB4kNx3Hs1TCxHCZHSqChfbq9qiAISYG3tauKQzbK5zmxsU08p7YolDLaub7M3YnlHCBwZ3CBF7S2Z%2F3ioUK%2FAnaHHCgfE2Nm4lIeWSiO1c5cVAzz4BpkmN79vTJD1GHy4iH7NvSnY2jD&X-Amz-Signature=7e41dccc7f31aa13159b4c01700f15ed727a2cb8ff24fb425a8715c3670cf24a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
