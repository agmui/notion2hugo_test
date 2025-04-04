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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHLPMOO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENVSYRMjoonOx%2F8Ts8bYW89ETZuDFpIadTg5FnTueUSAiEA6cTHdnUunn4eLqhX1JRofladXFOPayj%2F%2FP1VwC3%2FUhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqOuPrOptHVpoNuhCrcA8bIUZkW1Bzml4bJkzpd%2BtI5hDe1%2BUCTw75IcoQllgzKPPM9l0HZvJi9NSwreXb5i2f9oCcA7irbq4VzyLFh326O%2FxCFhVlkD0x3%2B1MrQn5LBZLauswqflnc5eEZ9m1o58%2FhoVMCFmNrdD4mhHDIsIMMOoYHhzNoCqbfU66OpNEWqjZG2D5WLEG7eRKpvPlekZTGn1YeKP2S7VORymuSTL62%2BlLB27OMkGkBD7Nky4vgjLX1jMOySz9dGEnaXWAcR56BiPrhzaUSfO%2BAalzfRC6YbTvVvihBsYOLSn4xP4au9rrB7TPLrF9SlNjIxSaWlvEXrwHvOBxy2NYdKPO%2BzbFs3%2FG9YdgkJokIqNprACwPuih41kcvlUfRSF24SB2AYbpAw72h%2B3zrs9HeNGpMh%2BtrPhAOyY8Dk805C3WnBXouqhtcC9AzKZM91gzwCDttqCIyf4RjLjYjCOkDO7fa836FjAczvEeCXfAVMYKVEbBb9l3zOdNtrcQVK5tX%2BM9dWBKjq4UimmSf18qnN8L0tk268Vr1G99V%2BQIKeWZdxJ%2BrwUY4x0gwmjV%2BGqBS3BWjnNNlh9GnLRdoROte94Hggv6avDKFF4rXE4jWAxCfe9aNv4rCHRWM7C71xZ%2BoMJbFvb8GOqUBZhBfDRqS7COoGBlVyBbe1EvxhTgJwNrCY8V9ZbrRPVLeTpYc8LvS9SBRzHCGIQA4yDoP0txNwqteDj%2Fgz1dRPW0QRq9cIHHJh6wQ5mcMpJ5mN1v59GaulPm0olWrJU6hozeO7ajZIrua%2Fu148%2BI2cFr6ydIqQ3Cu502Uz2%2BMTW1OKkslydyASRMYSvYps88GWNxQei8PA47Uxx85g3iFV%2F3em0lS&X-Amz-Signature=6bf6ce45fd6f047de52ff349fc16ce73ff5f437a7729a74eeea90acd0a6dff1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHLPMOO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENVSYRMjoonOx%2F8Ts8bYW89ETZuDFpIadTg5FnTueUSAiEA6cTHdnUunn4eLqhX1JRofladXFOPayj%2F%2FP1VwC3%2FUhEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqOuPrOptHVpoNuhCrcA8bIUZkW1Bzml4bJkzpd%2BtI5hDe1%2BUCTw75IcoQllgzKPPM9l0HZvJi9NSwreXb5i2f9oCcA7irbq4VzyLFh326O%2FxCFhVlkD0x3%2B1MrQn5LBZLauswqflnc5eEZ9m1o58%2FhoVMCFmNrdD4mhHDIsIMMOoYHhzNoCqbfU66OpNEWqjZG2D5WLEG7eRKpvPlekZTGn1YeKP2S7VORymuSTL62%2BlLB27OMkGkBD7Nky4vgjLX1jMOySz9dGEnaXWAcR56BiPrhzaUSfO%2BAalzfRC6YbTvVvihBsYOLSn4xP4au9rrB7TPLrF9SlNjIxSaWlvEXrwHvOBxy2NYdKPO%2BzbFs3%2FG9YdgkJokIqNprACwPuih41kcvlUfRSF24SB2AYbpAw72h%2B3zrs9HeNGpMh%2BtrPhAOyY8Dk805C3WnBXouqhtcC9AzKZM91gzwCDttqCIyf4RjLjYjCOkDO7fa836FjAczvEeCXfAVMYKVEbBb9l3zOdNtrcQVK5tX%2BM9dWBKjq4UimmSf18qnN8L0tk268Vr1G99V%2BQIKeWZdxJ%2BrwUY4x0gwmjV%2BGqBS3BWjnNNlh9GnLRdoROte94Hggv6avDKFF4rXE4jWAxCfe9aNv4rCHRWM7C71xZ%2BoMJbFvb8GOqUBZhBfDRqS7COoGBlVyBbe1EvxhTgJwNrCY8V9ZbrRPVLeTpYc8LvS9SBRzHCGIQA4yDoP0txNwqteDj%2Fgz1dRPW0QRq9cIHHJh6wQ5mcMpJ5mN1v59GaulPm0olWrJU6hozeO7ajZIrua%2Fu148%2BI2cFr6ydIqQ3Cu502Uz2%2BMTW1OKkslydyASRMYSvYps88GWNxQei8PA47Uxx85g3iFV%2F3em0lS&X-Amz-Signature=2d83431ae4a04ec7d3701f45fb02e53a6a35c784a0f21cfbb0f607465b8b0421&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
