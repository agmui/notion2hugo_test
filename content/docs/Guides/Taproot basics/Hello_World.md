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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RITNSDK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9a6mZ5CZINovC2WVzxcY6wySyewXnvx%2F%2F9tKT%2FRthPAiEAovLRmjHvbCjQl0DYAA62WxCxndoB8RT64tFVA%2BUO83wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ20iEo%2BcgBcuyDNSrcAwywn9Mag6e1Sqji2apUSe01nXfbhAWrCYbP9a%2Fql0Glz8cDPfHOFzN8uNGrx0OuuGwS5BXXGvrdILGbRTSXXvzagUG25krtaAi%2B4djevsGhbg8UD4%2BRyh1B0oJOEq2Lqe5ksghHk39mt2CKK7Anhxndfviw1B1Us79l4OV1d54OIil4MKBl%2BRYOWS%2Bl0iwSFI5qlIp9wNGm45JRvRtTLMLW57wzZ2bVO3uy6QZsS5R5JNjsvXaggqKRzzQtqnYCj0Zb5k1aAWOcx8h4OuaA3X0DfGOf4Q9DTcBQW04t7VsNIXzXWGFZBe2JzL2dpubxX9UHlPVnPlCKr9ZOvsNMkIIbxEuLVB7LYlnhYVxyOHJrHLqk%2Ffcqfmda7yZXv3Lx9WrGaQUZ5ztnIjnG0vYb4aoj3JiUz8xgW5RJ551IGR6ElbKUeQPWrTzDtRiHSnmpHOb2Hf5MwQlC9EU%2BLRlxcziiwh%2BPLgQF%2F%2FhKRV6toFKA2HURrSaWXBfzb0Sn4LZaa1C00hZumMMYq%2FZ3IukaFVxkFrFINXWn1Un0i5gOhkM2W60boQOqRzev%2FUbzth7k54j5VkaRdvjTU8hVQjd%2FXt5uTOsiOqixgFAzcSewt%2Fj4ATOE%2FDueKFK8CkL5MOrH9sAGOqUBbcFUm%2BS59%2BvThsT2zXWhpCMYREtWGEDdXu2SGcno1LTteUfaOHAzr1ZoX5JQP3P0340FulbchB7ZR7%2F7b%2F%2FJ1AOXLjhvI3GMw2uzIQjpXWKCuG7BO1deuERkTvi6JrGE0KQFTbwJDSX1YGPmcLdhNsCyVk%2B0mOYiErUpCA13MzDrJplSbstdNqH2pVAqe9oGRMwBwFeuItqWoin9Ky2%2F1yHNxtvD&X-Amz-Signature=e6da29607f613ca2975ef67950a836035e9a340e5a15ff7f1e5b68b016ec3a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RITNSDK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9a6mZ5CZINovC2WVzxcY6wySyewXnvx%2F%2F9tKT%2FRthPAiEAovLRmjHvbCjQl0DYAA62WxCxndoB8RT64tFVA%2BUO83wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ20iEo%2BcgBcuyDNSrcAwywn9Mag6e1Sqji2apUSe01nXfbhAWrCYbP9a%2Fql0Glz8cDPfHOFzN8uNGrx0OuuGwS5BXXGvrdILGbRTSXXvzagUG25krtaAi%2B4djevsGhbg8UD4%2BRyh1B0oJOEq2Lqe5ksghHk39mt2CKK7Anhxndfviw1B1Us79l4OV1d54OIil4MKBl%2BRYOWS%2Bl0iwSFI5qlIp9wNGm45JRvRtTLMLW57wzZ2bVO3uy6QZsS5R5JNjsvXaggqKRzzQtqnYCj0Zb5k1aAWOcx8h4OuaA3X0DfGOf4Q9DTcBQW04t7VsNIXzXWGFZBe2JzL2dpubxX9UHlPVnPlCKr9ZOvsNMkIIbxEuLVB7LYlnhYVxyOHJrHLqk%2Ffcqfmda7yZXv3Lx9WrGaQUZ5ztnIjnG0vYb4aoj3JiUz8xgW5RJ551IGR6ElbKUeQPWrTzDtRiHSnmpHOb2Hf5MwQlC9EU%2BLRlxcziiwh%2BPLgQF%2F%2FhKRV6toFKA2HURrSaWXBfzb0Sn4LZaa1C00hZumMMYq%2FZ3IukaFVxkFrFINXWn1Un0i5gOhkM2W60boQOqRzev%2FUbzth7k54j5VkaRdvjTU8hVQjd%2FXt5uTOsiOqixgFAzcSewt%2Fj4ATOE%2FDueKFK8CkL5MOrH9sAGOqUBbcFUm%2BS59%2BvThsT2zXWhpCMYREtWGEDdXu2SGcno1LTteUfaOHAzr1ZoX5JQP3P0340FulbchB7ZR7%2F7b%2F%2FJ1AOXLjhvI3GMw2uzIQjpXWKCuG7BO1deuERkTvi6JrGE0KQFTbwJDSX1YGPmcLdhNsCyVk%2B0mOYiErUpCA13MzDrJplSbstdNqH2pVAqe9oGRMwBwFeuItqWoin9Ky2%2F1yHNxtvD&X-Amz-Signature=af3c8570c13768e5c1d84bc78094310f3812683e9e8ff8b45cf9cd095b3d07ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
