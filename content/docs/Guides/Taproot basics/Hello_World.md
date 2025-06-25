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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WL64LU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIE3rf8442xlG6wqTHS0Vm2CLy5FaBQ8Xtz9I1sfxuC6xAiAbyOBg5MM46bv2BUe1PWYdAnUYbJ%2F89j6R1XxXeKtYbyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMtzX4QzbLBbXuK1xRKtwD86NoCqUTPFbcdrzqqQIH3jq%2FyZvk4rT7qYWDKegLXBd34L%2BEFR%2FYe3vD1yZMuKaQu79SeOf70GGEToemDhIG1BUn1oNApGgGeZBEYDdz9agrJMmGDDcAoflmxHE%2Bs8YzGhBTsEjWTmYHtH4uCw%2BatuinufCsNgnhFxsyyoRZ7PYeGny7S0OwUT9b8ndNzp5N0DhR%2BSwxTn%2BjYje0%2BatUy5p2EWkh0S55wp0Afx%2BdYC3IyIrftyI1LTGvXJE3Y%2FDd234UKOn4i7z5fHSGnV5Q2zNHgU%2FXs36J4Q3eNAgxSuCfQvr1KEdOhsua0GDJiH6iaBFv5VcmcU1qXKWYO8C%2B0RMD3V304yxuNXkppAB1WV%2FzudT1qAzpDlUIXGJA0%2FLIOboO1952hsfCi8y%2BN1HgX9MmAJxY9hktgxJcBAgYCUPlgytEOgsN3oXLJOeQFit54AiuVk%2F7u%2Bklw2%2Bfh9EHGVo5s%2F4GmbLcAAYfAh7EjJ9VIUurFyCEks5eo9MCnEmweUFMs3IO8n0Ft%2Fwd1flCpFTtGKbUWMKnDwjwlftBVSbbc2qIRTHLgVJXCsGfY0lBd%2BqRmrWJ%2B4bswzb%2BYvk%2F6nRxF36UeLXHpuOp8qL8eeDgcYNbNHpk1B%2BFlNswqu7vwgY6pgGankL7H1Dr0%2BNml3Str47mjSx4CPN3U49%2F8kHoDzLE0sPmbzhisryGL09Mrq36e2zWjJ7TEELtNXxhPUBNEL%2BUbg8ZizM6e%2BdLxmXpfEA%2B%2BP%2FtKSdd6ec0IrIFtLXu65KQimJRhXrOIfkjq3H7h3g4PBUAL%2Bo89q7KbX9nJ1SDKUrCXbNM0UK%2BidLhg3npYt1BfwfYQdAVyyKSOziYpWoZOYpqrUCo&X-Amz-Signature=318218c1786896d6a22baec93da98aa8a085195c006aabb9bed94d5bdd72b351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WL64LU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIE3rf8442xlG6wqTHS0Vm2CLy5FaBQ8Xtz9I1sfxuC6xAiAbyOBg5MM46bv2BUe1PWYdAnUYbJ%2F89j6R1XxXeKtYbyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMtzX4QzbLBbXuK1xRKtwD86NoCqUTPFbcdrzqqQIH3jq%2FyZvk4rT7qYWDKegLXBd34L%2BEFR%2FYe3vD1yZMuKaQu79SeOf70GGEToemDhIG1BUn1oNApGgGeZBEYDdz9agrJMmGDDcAoflmxHE%2Bs8YzGhBTsEjWTmYHtH4uCw%2BatuinufCsNgnhFxsyyoRZ7PYeGny7S0OwUT9b8ndNzp5N0DhR%2BSwxTn%2BjYje0%2BatUy5p2EWkh0S55wp0Afx%2BdYC3IyIrftyI1LTGvXJE3Y%2FDd234UKOn4i7z5fHSGnV5Q2zNHgU%2FXs36J4Q3eNAgxSuCfQvr1KEdOhsua0GDJiH6iaBFv5VcmcU1qXKWYO8C%2B0RMD3V304yxuNXkppAB1WV%2FzudT1qAzpDlUIXGJA0%2FLIOboO1952hsfCi8y%2BN1HgX9MmAJxY9hktgxJcBAgYCUPlgytEOgsN3oXLJOeQFit54AiuVk%2F7u%2Bklw2%2Bfh9EHGVo5s%2F4GmbLcAAYfAh7EjJ9VIUurFyCEks5eo9MCnEmweUFMs3IO8n0Ft%2Fwd1flCpFTtGKbUWMKnDwjwlftBVSbbc2qIRTHLgVJXCsGfY0lBd%2BqRmrWJ%2B4bswzb%2BYvk%2F6nRxF36UeLXHpuOp8qL8eeDgcYNbNHpk1B%2BFlNswqu7vwgY6pgGankL7H1Dr0%2BNml3Str47mjSx4CPN3U49%2F8kHoDzLE0sPmbzhisryGL09Mrq36e2zWjJ7TEELtNXxhPUBNEL%2BUbg8ZizM6e%2BdLxmXpfEA%2B%2BP%2FtKSdd6ec0IrIFtLXu65KQimJRhXrOIfkjq3H7h3g4PBUAL%2Bo89q7KbX9nJ1SDKUrCXbNM0UK%2BidLhg3npYt1BfwfYQdAVyyKSOziYpWoZOYpqrUCo&X-Amz-Signature=4a625b7c0fd1804411ca86d2bf316662d7ece5d1ee06dea47c0e07e648317415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
