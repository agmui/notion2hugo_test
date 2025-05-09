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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLYL2HCX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2B8zitnf4aJ9Wohz8atC3zKLtugBf75vtIYPXgGX0ywIgZymrAQcdGX7TuntdLpiCp1TPTPBe1x%2BICgIkuxxKdmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv%2BMcE2jv3EhG9PsircAzQyVzc1c7v%2BYyei%2B4fAgNjOLQ3Cw2k9WOHfg4%2Byxw2fy%2BZLeKcPSpaJ8iJ17ARTmM73fBbHGNxhzA8ukFy8gWoFbvKmyR0jkUhh5Uzd%2BNZ%2BhWXhBr3M0dhFNkaOn6%2B8G0Rvejf0VdWAkarMlacYo92bMwmXdcsueQiCS5MXHnjL2iCpyh%2FpTd9TkKJGAPrTk3qNVfiLqQuglywmUyQXyGkYrzsQUeID565%2Bmy5sBupj3BsuyfWVvtT6UVj8pOrh%2BzQDNRFTahbsKphtwNwIQA%2Fs5NHWAGslEFanez2b3hZIzF9ZQQXU6VHBQbD9U0qHQFd%2FkSsUQ%2B8B91WUgU%2F%2Fw4TmocM%2FjTIE8FDAYMLaiIqe6GwmLkmkZQzSB%2BKOv6Gw9uFZ20XHX1zSGuXshoEJ%2B8sm0ELFG%2By994jr0GflWvcjocppOWPjq9Ott0Y%2BJ9NbmfDjS5SotJ0TNtvWXLizi0%2BTNZgb4FdecDIVxRyYPkHgadhhhyhvPZ1rphkrhs4ijIQ3UNdu2kfAwiMbGVoNr%2F%2FfeAxUnf1XbcbpIDAfyJdXlBOzgk%2FJ6FdEjzCRgxvvwD0YeeGHzkPQG5fzUvQ1p32dymLoU%2BJdbke4ByqgNGPK3NYdsLASEg8qfZUWMOOr%2BcAGOqUBKJcmvwVkeQsyUEd3w5f7GX7vHpuJrcT3294Un0IA5A9BFU6Ut3iBXCnAFGiAB5X8%2BhwEMUS%2BOjItUcAA%2Bgh2XTjCiuoQjGys9x5RrZr%2FlL7SkmyU4cwzGsJOaoT7iVP%2BK4Q3krr7BccpCYTk3KMCQh%2BA8iQbC%2Fa1C3NjJdjgdfhNLtAsEf1zS4Q9oTPXfbBdKHKgeAlroIrUgeygcftPRRgYtIhr&X-Amz-Signature=047a3e324665d2b522e19f3bc6c3c67ab6dd6b505e05598f4385ffb4afdbeb74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLYL2HCX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2B8zitnf4aJ9Wohz8atC3zKLtugBf75vtIYPXgGX0ywIgZymrAQcdGX7TuntdLpiCp1TPTPBe1x%2BICgIkuxxKdmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv%2BMcE2jv3EhG9PsircAzQyVzc1c7v%2BYyei%2B4fAgNjOLQ3Cw2k9WOHfg4%2Byxw2fy%2BZLeKcPSpaJ8iJ17ARTmM73fBbHGNxhzA8ukFy8gWoFbvKmyR0jkUhh5Uzd%2BNZ%2BhWXhBr3M0dhFNkaOn6%2B8G0Rvejf0VdWAkarMlacYo92bMwmXdcsueQiCS5MXHnjL2iCpyh%2FpTd9TkKJGAPrTk3qNVfiLqQuglywmUyQXyGkYrzsQUeID565%2Bmy5sBupj3BsuyfWVvtT6UVj8pOrh%2BzQDNRFTahbsKphtwNwIQA%2Fs5NHWAGslEFanez2b3hZIzF9ZQQXU6VHBQbD9U0qHQFd%2FkSsUQ%2B8B91WUgU%2F%2Fw4TmocM%2FjTIE8FDAYMLaiIqe6GwmLkmkZQzSB%2BKOv6Gw9uFZ20XHX1zSGuXshoEJ%2B8sm0ELFG%2By994jr0GflWvcjocppOWPjq9Ott0Y%2BJ9NbmfDjS5SotJ0TNtvWXLizi0%2BTNZgb4FdecDIVxRyYPkHgadhhhyhvPZ1rphkrhs4ijIQ3UNdu2kfAwiMbGVoNr%2F%2FfeAxUnf1XbcbpIDAfyJdXlBOzgk%2FJ6FdEjzCRgxvvwD0YeeGHzkPQG5fzUvQ1p32dymLoU%2BJdbke4ByqgNGPK3NYdsLASEg8qfZUWMOOr%2BcAGOqUBKJcmvwVkeQsyUEd3w5f7GX7vHpuJrcT3294Un0IA5A9BFU6Ut3iBXCnAFGiAB5X8%2BhwEMUS%2BOjItUcAA%2Bgh2XTjCiuoQjGys9x5RrZr%2FlL7SkmyU4cwzGsJOaoT7iVP%2BK4Q3krr7BccpCYTk3KMCQh%2BA8iQbC%2Fa1C3NjJdjgdfhNLtAsEf1zS4Q9oTPXfbBdKHKgeAlroIrUgeygcftPRRgYtIhr&X-Amz-Signature=cf0225402170242554b60cbfa13f12bb2da69d8c211aa7f753c862c28c9df2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
