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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AG7E6KK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZF0zEAxAiGnei8itDutMw%2FSC622SJm1tcq77jx1%2Bd4AiEAp8TH2KyeDAFKQSyWAHMfP%2BuNvtqugxWT2cjjwDPM6icqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY5j8WLEVzl43hXZSrcA5BdPWYJ5DIRJvsQvVjJkjkjVmMITJ%2F4jklxg4Of96w2%2BziS6hEZXJE%2B1z7ZwEUDvdKcEahN6MBZz45hLGg%2BpQtTPlANVv6J2zpHuev%2BD6K%2FRAuECZPQWrYnTpPeYQasHom%2B%2FD0EywGH1IocMr4adyin04nkFO%2F8yjR99%2Bx0RuGE8hKEFYA%2BYfNp5em3opOya4la3TyxxTgP%2BgPgegMxWbPmOTEeuBoWkuu4dQZJtDfEpgiLGaR42iL%2BQPaok3zPJgj%2FBmArA0eIu50XXCB%2B%2F%2FSS4UwvP9Jw6C4hcLMOBX304QlXXfyD90frERu8UmepBP4keHU027Wa0dQafmDhQQEXIzwhVWMOQZDsmbD4X1NBAcV8YhFTawvUfrxx24twn6wVde4Lcwwgs5bEYaYc5ttwgobAt7kTDsuXH0FMilh9yuowb5xvCU5278k8Q8TyzPDOaa5uED7oQeb7AiFdttUd37u67KMYbwUK1m1iTYbe%2FWGsWJYWTDpJ9rszGnIfOu0oewNlsKu4KyxJOd05cPPowtKLxvjl3ntDaunNKizKpdDgb0ZAh2MT5FMjjDkDlpIFEnwh%2Bw7zMkL7VnIt1oE51W6DJ9qUUybvurBAKxMRBTIlT%2FB49WSu8VSkMKqUlsMGOqUBpkFOBV42GhdoC3pjiU7tEbwK9L9c51MaZJVBDfXgvOW%2Bv6jUIawi6ZsXmAqiEyyuSFG9QSCLjoOcOUE3%2FTodxkCNhqyCZ%2FYLk2P%2BuTKzH9OjWd6I71Ny5tyQk216lZM1RcVTkzmxW7yMmPirzS7wgTH8fKsIWWOjxCWdYLY8YTVzlNk4LooGjgRxxC1dXaGs7jyx%2FNEto83dnXfaZm812i4posY2&X-Amz-Signature=cf14c04f04d34dc4d23f375eae38b4deb845ee904be415c8c84701a91ec3d3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AG7E6KK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZF0zEAxAiGnei8itDutMw%2FSC622SJm1tcq77jx1%2Bd4AiEAp8TH2KyeDAFKQSyWAHMfP%2BuNvtqugxWT2cjjwDPM6icqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY5j8WLEVzl43hXZSrcA5BdPWYJ5DIRJvsQvVjJkjkjVmMITJ%2F4jklxg4Of96w2%2BziS6hEZXJE%2B1z7ZwEUDvdKcEahN6MBZz45hLGg%2BpQtTPlANVv6J2zpHuev%2BD6K%2FRAuECZPQWrYnTpPeYQasHom%2B%2FD0EywGH1IocMr4adyin04nkFO%2F8yjR99%2Bx0RuGE8hKEFYA%2BYfNp5em3opOya4la3TyxxTgP%2BgPgegMxWbPmOTEeuBoWkuu4dQZJtDfEpgiLGaR42iL%2BQPaok3zPJgj%2FBmArA0eIu50XXCB%2B%2F%2FSS4UwvP9Jw6C4hcLMOBX304QlXXfyD90frERu8UmepBP4keHU027Wa0dQafmDhQQEXIzwhVWMOQZDsmbD4X1NBAcV8YhFTawvUfrxx24twn6wVde4Lcwwgs5bEYaYc5ttwgobAt7kTDsuXH0FMilh9yuowb5xvCU5278k8Q8TyzPDOaa5uED7oQeb7AiFdttUd37u67KMYbwUK1m1iTYbe%2FWGsWJYWTDpJ9rszGnIfOu0oewNlsKu4KyxJOd05cPPowtKLxvjl3ntDaunNKizKpdDgb0ZAh2MT5FMjjDkDlpIFEnwh%2Bw7zMkL7VnIt1oE51W6DJ9qUUybvurBAKxMRBTIlT%2FB49WSu8VSkMKqUlsMGOqUBpkFOBV42GhdoC3pjiU7tEbwK9L9c51MaZJVBDfXgvOW%2Bv6jUIawi6ZsXmAqiEyyuSFG9QSCLjoOcOUE3%2FTodxkCNhqyCZ%2FYLk2P%2BuTKzH9OjWd6I71Ny5tyQk216lZM1RcVTkzmxW7yMmPirzS7wgTH8fKsIWWOjxCWdYLY8YTVzlNk4LooGjgRxxC1dXaGs7jyx%2FNEto83dnXfaZm812i4posY2&X-Amz-Signature=028f68589313f281815a45dfbaf7c12f07ed72508cc785d73eb5ae7d452d7a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
