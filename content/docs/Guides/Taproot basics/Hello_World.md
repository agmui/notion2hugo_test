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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWUJCXE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFkBwXOWbs6ysX%2BAQ%2BKqrFFXFJDK%2FS6cm2D%2B1Mo0%2B0QAiEA%2FtlaabL0V60iwp2JGclA1FFMbHds30SBUfbe0uckP8Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMDhOlov4%2BSuq7frQircAyMnvoy2%2Bi13WXEL8%2BLBePiIIQbIbfKYt3N52zApnkfn29WIzAS7L%2F4NjTfM4LYd9X4wA7F0hk%2BQWbqblj87o0rZaWVDnHO7R%2BQZbGHM%2B5MeehTFCHwa1fIk03m9jlC29A2toY6uqk1WyvUJT23LBv8pzri2MYKV4t1L6f8eY%2B96V%2BgF8V%2BcHEL9xXZjOLeHs6iJVF1m%2FrjujGZxcQFhfOKJ%2FDn%2Fd50BgOpwdZXrQCpPM5NwFjk%2FSBp2Tx4ZZiLiA17xa%2F%2Fgsr5DMX2gfQzZaJMtVbbTYRDNrEEY4Vd35OLt1qUaLamIB7KJHeMhiVS7%2B3JYcH3fuToNWyE768TaHHiH%2F1cIgX05P0aXBM%2FhkgFvKwymiFe2j3DnjTbYrcojk35kyitcobB5x%2FxnvkY%2F3r6UUfuwy0Yl1rGyL9QkiydgA0aZHbA%2Fxh3w8u%2F%2Bk1116Xh8tiTyp5SuTyswsPQaTd09MJLo5bQVoEyziC6AeF%2BhsrEKVhYqb07j8WDc%2Fj4JwJgUAr3Xp6khuiytsYltDoJ2fYWqmcQWEhsFpqkl%2BGzDP1pid80k%2FFe9yGc08kW6vhwfOH%2FI%2BNYVMw9Ip6jKkCYO9GIfnGeMQKmF5CZxR8VQhXtvBJj6nmPZ%2BoZNMPLaj78GOqUB%2FSqpqYqPHrFzb1xjnUs5JxwKNhBTikaca9hZs1Am4cr9yiayy2NaYan0x4pbErjLIDDm8vSCED0q2Ec9pZUoEpLw00iaF87%2FgmesLj5fDasBBklTWS67NbPZU0BFG73S1Q0UYBiPk35CBBj4NP6clfTgIlMqBV3gv4xGdGcPzAs0RuHUpJfpRzPbnACO4RHWu74WSXSMCWTgppJZhRdLISJiMddm&X-Amz-Signature=fa21b85c0697d790cbac0dfab75e30225ef8ea748f57e04fc46f9ad6eb594b81&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWUJCXE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFkBwXOWbs6ysX%2BAQ%2BKqrFFXFJDK%2FS6cm2D%2B1Mo0%2B0QAiEA%2FtlaabL0V60iwp2JGclA1FFMbHds30SBUfbe0uckP8Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMDhOlov4%2BSuq7frQircAyMnvoy2%2Bi13WXEL8%2BLBePiIIQbIbfKYt3N52zApnkfn29WIzAS7L%2F4NjTfM4LYd9X4wA7F0hk%2BQWbqblj87o0rZaWVDnHO7R%2BQZbGHM%2B5MeehTFCHwa1fIk03m9jlC29A2toY6uqk1WyvUJT23LBv8pzri2MYKV4t1L6f8eY%2B96V%2BgF8V%2BcHEL9xXZjOLeHs6iJVF1m%2FrjujGZxcQFhfOKJ%2FDn%2Fd50BgOpwdZXrQCpPM5NwFjk%2FSBp2Tx4ZZiLiA17xa%2F%2Fgsr5DMX2gfQzZaJMtVbbTYRDNrEEY4Vd35OLt1qUaLamIB7KJHeMhiVS7%2B3JYcH3fuToNWyE768TaHHiH%2F1cIgX05P0aXBM%2FhkgFvKwymiFe2j3DnjTbYrcojk35kyitcobB5x%2FxnvkY%2F3r6UUfuwy0Yl1rGyL9QkiydgA0aZHbA%2Fxh3w8u%2F%2Bk1116Xh8tiTyp5SuTyswsPQaTd09MJLo5bQVoEyziC6AeF%2BhsrEKVhYqb07j8WDc%2Fj4JwJgUAr3Xp6khuiytsYltDoJ2fYWqmcQWEhsFpqkl%2BGzDP1pid80k%2FFe9yGc08kW6vhwfOH%2FI%2BNYVMw9Ip6jKkCYO9GIfnGeMQKmF5CZxR8VQhXtvBJj6nmPZ%2BoZNMPLaj78GOqUB%2FSqpqYqPHrFzb1xjnUs5JxwKNhBTikaca9hZs1Am4cr9yiayy2NaYan0x4pbErjLIDDm8vSCED0q2Ec9pZUoEpLw00iaF87%2FgmesLj5fDasBBklTWS67NbPZU0BFG73S1Q0UYBiPk35CBBj4NP6clfTgIlMqBV3gv4xGdGcPzAs0RuHUpJfpRzPbnACO4RHWu74WSXSMCWTgppJZhRdLISJiMddm&X-Amz-Signature=08429d3bdeeec83dd1a78f64e77b365f0650d9c2a5b7738ff89fc9660da6932e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
