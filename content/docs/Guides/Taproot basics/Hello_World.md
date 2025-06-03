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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOX4XKQE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDVgDlG46GNrcHUuLGCAJhNcSdz7LBPyd4HnaMalvw0mAiEA1J7lk54c3TgnHp2Nysx7EgPtqfxRI7%2B1op4%2FLNdK8tUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDPt%2FldxXQ0YNaQgrCSrcAxeNiVKvd27oLGA%2FUyO9qd9%2BBG%2FGHaGrkCPAfALqEjgBOHqWUQ0VKxBCe3lfvEnXwL1s5wyM5yneZeeW4E%2B%2BOzxJOr4wXV989lTTnyRZqLs5PlByN%2Fyuqbt1LE%2F7y804vDNYN%2BfLeUCrsNE5l2TjjMlbHjqxd%2BJAu3E4K3fs9vGO7krg0YCxz9Njn5Yq8cgKZf0inHpQpxzDPrT2iYixBcKFXWoSJBNWiQvI5nEKpHexo%2Bo8lGMsiVPCPSk5U%2B2JDSK%2BKvmeAnsfjLSviymSXJ6kW6t8nLq3EP1fCELUpDS6fJxgQUzb%2B%2FnqF66EMqY6yy%2FD72lZyq9exBfiSs7WUnuqrgIHm61nD1KIG7oesBjPllSq5VmU8UNkzTvCFqr3Hat4H3QK6siYGm8KPPoPL7%2BRLzxhaUa8H3t7cu6iAyhCmf7zm8I9Xf8hKGQPTJKX%2Boi0lLGsXJFffRKfTJS8w7ZS6fdVaIHS4NvYBkIpxGvBaopAeNMVZYIgIp4ZDp5S8DnBiHwa01eZUPPCGrglDJ4HceR2LjT9U8l8syRBb3f6ZOVmEGgBj2G7iMHqmQ7b2hv1nXoZ2nwgV7AGwS29QF2uvzBvQFm5k3%2FMG3hvp7Im4Wxk%2FgFTcUxOMab7MMmF%2FcEGOqUBs3MaOmAb2i4wdiQFv5W58xy9dcSeMdJF7KzDq0l08t6b%2Fp4gIGMWXZC0oEFSb7yOB2JXjoH3B7%2BFmNwyIFe9aa97QaLDd6EggvtaCyRXfLNQcKQBNNgM38ruPcVFiQ5BDnbUnBjGp9SHefaeJsaAa1t8OERs5R1cJfeH9qua0PhuLxqZA%2FBtMfiJxQPJb%2FtnbDp3tUeBQh0RH3jvBig2QprTB9Ih&X-Amz-Signature=b6b3ddfd6c4a75a295c035c0d521bdc47e6df69bbb4cba80e661aa89d28a1b50&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOX4XKQE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDVgDlG46GNrcHUuLGCAJhNcSdz7LBPyd4HnaMalvw0mAiEA1J7lk54c3TgnHp2Nysx7EgPtqfxRI7%2B1op4%2FLNdK8tUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDPt%2FldxXQ0YNaQgrCSrcAxeNiVKvd27oLGA%2FUyO9qd9%2BBG%2FGHaGrkCPAfALqEjgBOHqWUQ0VKxBCe3lfvEnXwL1s5wyM5yneZeeW4E%2B%2BOzxJOr4wXV989lTTnyRZqLs5PlByN%2Fyuqbt1LE%2F7y804vDNYN%2BfLeUCrsNE5l2TjjMlbHjqxd%2BJAu3E4K3fs9vGO7krg0YCxz9Njn5Yq8cgKZf0inHpQpxzDPrT2iYixBcKFXWoSJBNWiQvI5nEKpHexo%2Bo8lGMsiVPCPSk5U%2B2JDSK%2BKvmeAnsfjLSviymSXJ6kW6t8nLq3EP1fCELUpDS6fJxgQUzb%2B%2FnqF66EMqY6yy%2FD72lZyq9exBfiSs7WUnuqrgIHm61nD1KIG7oesBjPllSq5VmU8UNkzTvCFqr3Hat4H3QK6siYGm8KPPoPL7%2BRLzxhaUa8H3t7cu6iAyhCmf7zm8I9Xf8hKGQPTJKX%2Boi0lLGsXJFffRKfTJS8w7ZS6fdVaIHS4NvYBkIpxGvBaopAeNMVZYIgIp4ZDp5S8DnBiHwa01eZUPPCGrglDJ4HceR2LjT9U8l8syRBb3f6ZOVmEGgBj2G7iMHqmQ7b2hv1nXoZ2nwgV7AGwS29QF2uvzBvQFm5k3%2FMG3hvp7Im4Wxk%2FgFTcUxOMab7MMmF%2FcEGOqUBs3MaOmAb2i4wdiQFv5W58xy9dcSeMdJF7KzDq0l08t6b%2Fp4gIGMWXZC0oEFSb7yOB2JXjoH3B7%2BFmNwyIFe9aa97QaLDd6EggvtaCyRXfLNQcKQBNNgM38ruPcVFiQ5BDnbUnBjGp9SHefaeJsaAa1t8OERs5R1cJfeH9qua0PhuLxqZA%2FBtMfiJxQPJb%2FtnbDp3tUeBQh0RH3jvBig2QprTB9Ih&X-Amz-Signature=12106560e4b02b0319152bba93f97a624e33fd23b5c06b66e0a59f94352fa554&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
