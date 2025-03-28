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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3HT54Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMq1U8U%2BDT%2BsMedmAW6d5FmToJr72zc%2BapQVb%2BfrmwgIgWUhgOElbZn2LRPt5bOzbMR3cEzKhh8jth%2FYYQwlRoREq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEy34Cao1VhfyuaOByrcA%2BPfag8XCGnM8lfaoJM792MTY0pOTgmzT6GYXkbuw2DLzA5iVnmG3W8zbOjwz5BNpekxY6pH%2B4Q%2FtwKljImv6FudnMU%2FNYAL3N4%2BRyNC5DGuZ8VRQZFS6Aju5qhaCj4Tzj2p5BIdC%2F4qV%2B1Ia80Xngwc8ltYBlPXwfcgBj5Y9kbGGQqF72N1%2BkCWbF%2FVYct47CLOGnKFp6C2YrsRNeS6q0iwM3gFlJW3sPojcHr2uuKSHF9SXFn8fLks4a5kqKh2iWkAFMgTQPRpiyt2VqkNgLGSNzeE71v%2F8rT9x9RxnPHCMfV2aQRKQ%2FrMD6hgpdNdk1eG0Tf4pGkPpIv0q7wk11tKS5fTQJJJrM443cWKgVrkcnLYQBJ6gTdvkj4Teu7EhYNT9KB6BeFDtwyletoIDlcNKMOZqF7Rg4lpXDbBUQxi4jST85DEQQ7Sk0w6DMVYhWpfBS3g%2FdmUwEk%2B28Re0yrlsMv8vYrwu2GJcgSxRBN490pAi%2B482LQTJDUxqwhw18MeicW%2FWMLonX%2BolPnT11GonExbcTHryov97RAjv5l%2BM77m3K7szaHFXQC049jrBU%2BFVHatQEJ%2F14BgSIqTS%2FQmRcuqtXZo64bEFT8hOEDaJ%2B4PLgk4r3BASelrMNeUmr8GOqUB70JruXqPQ1evat9nIzYNDUuL7y6VymLD4ogmvr3byvESefuaLGHm%2FdG8PA0bj0cIZwjZNxERZGP88M4aC0fZxVp6lkKavcu2F%2FDKBbd6qdgjlOfhBWl82UpsNMgGeb%2FXeJIWT91RWzH76nO08H%2BCU5WTUMH8P9Y9t3jXX6H9C0rvUCIXF0PjSqS8s8YC2Chje4Tu%2BbP8yV4piP8pzfuqggreHa%2Fr&X-Amz-Signature=611cc1d77a7679d7fb5d30a69a268834a06bc430055db52643f9afb87caacaca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3HT54Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDMq1U8U%2BDT%2BsMedmAW6d5FmToJr72zc%2BapQVb%2BfrmwgIgWUhgOElbZn2LRPt5bOzbMR3cEzKhh8jth%2FYYQwlRoREq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEy34Cao1VhfyuaOByrcA%2BPfag8XCGnM8lfaoJM792MTY0pOTgmzT6GYXkbuw2DLzA5iVnmG3W8zbOjwz5BNpekxY6pH%2B4Q%2FtwKljImv6FudnMU%2FNYAL3N4%2BRyNC5DGuZ8VRQZFS6Aju5qhaCj4Tzj2p5BIdC%2F4qV%2B1Ia80Xngwc8ltYBlPXwfcgBj5Y9kbGGQqF72N1%2BkCWbF%2FVYct47CLOGnKFp6C2YrsRNeS6q0iwM3gFlJW3sPojcHr2uuKSHF9SXFn8fLks4a5kqKh2iWkAFMgTQPRpiyt2VqkNgLGSNzeE71v%2F8rT9x9RxnPHCMfV2aQRKQ%2FrMD6hgpdNdk1eG0Tf4pGkPpIv0q7wk11tKS5fTQJJJrM443cWKgVrkcnLYQBJ6gTdvkj4Teu7EhYNT9KB6BeFDtwyletoIDlcNKMOZqF7Rg4lpXDbBUQxi4jST85DEQQ7Sk0w6DMVYhWpfBS3g%2FdmUwEk%2B28Re0yrlsMv8vYrwu2GJcgSxRBN490pAi%2B482LQTJDUxqwhw18MeicW%2FWMLonX%2BolPnT11GonExbcTHryov97RAjv5l%2BM77m3K7szaHFXQC049jrBU%2BFVHatQEJ%2F14BgSIqTS%2FQmRcuqtXZo64bEFT8hOEDaJ%2B4PLgk4r3BASelrMNeUmr8GOqUB70JruXqPQ1evat9nIzYNDUuL7y6VymLD4ogmvr3byvESefuaLGHm%2FdG8PA0bj0cIZwjZNxERZGP88M4aC0fZxVp6lkKavcu2F%2FDKBbd6qdgjlOfhBWl82UpsNMgGeb%2FXeJIWT91RWzH76nO08H%2BCU5WTUMH8P9Y9t3jXX6H9C0rvUCIXF0PjSqS8s8YC2Chje4Tu%2BbP8yV4piP8pzfuqggreHa%2Fr&X-Amz-Signature=59a3e367df3a7a39aafa2f978b6d447883de4b1bb859fee45ccb2d437ee2858f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
