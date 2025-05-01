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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDHR6C3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD3XT1JfvfRxe%2FUf97kzhPVt%2Fe6GNqMfKhUQ7MnKWgPBAIgBM7OI3MDnB5mDElDUzf5Wk%2BC5ZZ%2BPpXGIlNmJc3OcLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdo9o9HuytHGRvDqircA8B%2BBTJJ0YK8n5WiVUGMgczyvNIATK7J8KOl9gS0UmWD3%2FW6C1HuK4uJKlcYQ1YKACtvvy4KoiepTBBqSnyeC6DDxpYqyEk98ZraD1H2mmkeg8%2Fz00Go1qyqYCM7LP0cx2cX4VktBFgsX6xCndyq4%2BGkfAkUZdflnnfAuTHkkfy2T4%2F65Ji%2Bk7ePA9KfSg3O4cWrcAaU8PML1GJreX1i1QOqliOeIUiwL%2BuQH77RNHPQ5nqsEU0%2FWirdFRq4ryEP%2F4q33vnuC%2Fnr6ojVUFVM9L2KaotI%2BljZyV4%2Bq9lRyvvRIsvV6Umgv7mnGjvJY%2Fsnd%2BvBsswGIz6r47Tj8J%2FHSxq1DnJqvjQO2y3ZV80UUm9CmimKE5eSYEHv13dgfUirFQIMgE1yjV1VGuIXYI6Ji0dYaz8BbEIeNH4n7Y4pYthhAAI9DSNliT7T%2B4VMxtY%2B764EPDoiXV2WSPJi6xKlMazasos4xu51zk9G6UhtHZZR4xKeQN0mj%2FhsNE1N41uh84XGide%2B2Nu749Xz67OqsHedZQVvEv3%2B1Ko2KcurGPLPvJ2Wq15Ff%2BcjEu7bMLb%2B2DLYBEp56wSZg6LHnBSsu1itwgz24kpkxscXiVCEjrh8ahxnNUZaIxhQfBTiMLTay8AGOqUBi8Z4sDwA3rqeOk4yok6YLysM60vXlYT2TAGvjOw5s7QVnIfkKIZlr5W8jOzabLnSjoA0JGNehGNB5%2BL97n2ywZxkgqRgZ8HeKCcrI%2FwYyGZJVNf2epeDLQJDzES%2FjDpak0e5o9Gba5TBvV5H63JXxoiF%2B97CfdQCd8bY%2FKIqjivMfZ0Cz2RvEoNCRTn%2Fzr33N5vC8EQcC52dWr4qfWRHoXrs%2BHV%2F&X-Amz-Signature=25fef7223fe88e7474706381f9605cc467bb2b03fb7febfd1246fcff6ba26578&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDHR6C3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T041438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQD3XT1JfvfRxe%2FUf97kzhPVt%2Fe6GNqMfKhUQ7MnKWgPBAIgBM7OI3MDnB5mDElDUzf5Wk%2BC5ZZ%2BPpXGIlNmJc3OcLwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdo9o9HuytHGRvDqircA8B%2BBTJJ0YK8n5WiVUGMgczyvNIATK7J8KOl9gS0UmWD3%2FW6C1HuK4uJKlcYQ1YKACtvvy4KoiepTBBqSnyeC6DDxpYqyEk98ZraD1H2mmkeg8%2Fz00Go1qyqYCM7LP0cx2cX4VktBFgsX6xCndyq4%2BGkfAkUZdflnnfAuTHkkfy2T4%2F65Ji%2Bk7ePA9KfSg3O4cWrcAaU8PML1GJreX1i1QOqliOeIUiwL%2BuQH77RNHPQ5nqsEU0%2FWirdFRq4ryEP%2F4q33vnuC%2Fnr6ojVUFVM9L2KaotI%2BljZyV4%2Bq9lRyvvRIsvV6Umgv7mnGjvJY%2Fsnd%2BvBsswGIz6r47Tj8J%2FHSxq1DnJqvjQO2y3ZV80UUm9CmimKE5eSYEHv13dgfUirFQIMgE1yjV1VGuIXYI6Ji0dYaz8BbEIeNH4n7Y4pYthhAAI9DSNliT7T%2B4VMxtY%2B764EPDoiXV2WSPJi6xKlMazasos4xu51zk9G6UhtHZZR4xKeQN0mj%2FhsNE1N41uh84XGide%2B2Nu749Xz67OqsHedZQVvEv3%2B1Ko2KcurGPLPvJ2Wq15Ff%2BcjEu7bMLb%2B2DLYBEp56wSZg6LHnBSsu1itwgz24kpkxscXiVCEjrh8ahxnNUZaIxhQfBTiMLTay8AGOqUBi8Z4sDwA3rqeOk4yok6YLysM60vXlYT2TAGvjOw5s7QVnIfkKIZlr5W8jOzabLnSjoA0JGNehGNB5%2BL97n2ywZxkgqRgZ8HeKCcrI%2FwYyGZJVNf2epeDLQJDzES%2FjDpak0e5o9Gba5TBvV5H63JXxoiF%2B97CfdQCd8bY%2FKIqjivMfZ0Cz2RvEoNCRTn%2Fzr33N5vC8EQcC52dWr4qfWRHoXrs%2BHV%2F&X-Amz-Signature=9d2b4269dc0d6f911816b737a8cd5369981ea37a2d4b18a8105fa5a7606632b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
