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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJ2SILW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuEfIzBRpy%2B4uBHdizSD4CGeC30hn2Zqh2S5hjltnM%2BAiEA59O%2F7K9HHb6iVGKJWCUtpf%2F7Hr22NUNMy%2F8ImOKoQnIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPJqzcELC8UP442sZircAznuAJe4XnhP4pqLqAsQq7z2l50Q4pUZePbbNZeCH%2F9XNyAih6c%2FlMFhpVcsMEBilC24XDSZhQ18TA7GWqUNWg1LQ0b1lbHLYpD%2FvWpHM9l%2FTBNYTT%2FgWkEerzYjGjyNv34%2BeKWmgl9VaGUkKTNo70PPpuAbyiWPY4OkZ0R5nKPalkuJNRcG8y6dEB%2BtUJ0VQBwT8MOxuj1uLPcKBVs1Qoggj4%2BxMocFqWo9mvWSi6wUrEGCAkrZ1pQgTI%2FJwveynNDG7TGl%2FQamT1BMfwCKUu5f3tZpge8agbr4UUzmMmeOAJ2wgY5TgbQJaO%2BisUBJoO%2BebgurQu%2FGhL0EM1EUcSYBOClIWP9k1F2DPl4LBxmnJu%2BR0xu24%2FDgmgJNZQkPusoQrOny1Yx1bR0%2BIMB%2FaNRYLhm5DpNESeiUcSVuws2GBchJ0Lv2xIMy7oQXraZwUvOGMP1WzW1Ope00yhBfg2XEy2mdPo2XPme4se078Q35jCA%2FJfEU%2Bmp0J5VXBnFS%2FGz1%2Fk2cd3vxocFN4VU4U7UakU1r0KsWI4klx5NeCe63R%2FZwRf6Jmdy5VteFZ5aOuc7VlCD0ItKk21Px2lEZ7O5O43RVGExbGixcsYzgTUo1%2FuIjxtRSMVKzbxfXMIKG078GOqUBlTY39zW7Ab0wU%2BUzOxXmBEbA%2F61yo6fao3VFjHICC%2FglXQ4FN6ZAwnfgGvMHPgJ7C5aDmN%2BYWW62Wu%2F%2BDZzHyc9yycay8D9UiQCxsA2d8Iz37exmJviPRwICcPsnTeOSiPrdHVE6ECtCszx%2FurOsFBned3DuDss0uchkiliBDl54qo6zM5hpEL5BpbQ%2Fj8%2BUj7Pvo8wOP70slipS1rPWb8tMAhTz&X-Amz-Signature=ca7f1699e73f3ee626a6aab2418906bb916f5a85ec2b01889857636646d4e5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYJ2SILW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuEfIzBRpy%2B4uBHdizSD4CGeC30hn2Zqh2S5hjltnM%2BAiEA59O%2F7K9HHb6iVGKJWCUtpf%2F7Hr22NUNMy%2F8ImOKoQnIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPJqzcELC8UP442sZircAznuAJe4XnhP4pqLqAsQq7z2l50Q4pUZePbbNZeCH%2F9XNyAih6c%2FlMFhpVcsMEBilC24XDSZhQ18TA7GWqUNWg1LQ0b1lbHLYpD%2FvWpHM9l%2FTBNYTT%2FgWkEerzYjGjyNv34%2BeKWmgl9VaGUkKTNo70PPpuAbyiWPY4OkZ0R5nKPalkuJNRcG8y6dEB%2BtUJ0VQBwT8MOxuj1uLPcKBVs1Qoggj4%2BxMocFqWo9mvWSi6wUrEGCAkrZ1pQgTI%2FJwveynNDG7TGl%2FQamT1BMfwCKUu5f3tZpge8agbr4UUzmMmeOAJ2wgY5TgbQJaO%2BisUBJoO%2BebgurQu%2FGhL0EM1EUcSYBOClIWP9k1F2DPl4LBxmnJu%2BR0xu24%2FDgmgJNZQkPusoQrOny1Yx1bR0%2BIMB%2FaNRYLhm5DpNESeiUcSVuws2GBchJ0Lv2xIMy7oQXraZwUvOGMP1WzW1Ope00yhBfg2XEy2mdPo2XPme4se078Q35jCA%2FJfEU%2Bmp0J5VXBnFS%2FGz1%2Fk2cd3vxocFN4VU4U7UakU1r0KsWI4klx5NeCe63R%2FZwRf6Jmdy5VteFZ5aOuc7VlCD0ItKk21Px2lEZ7O5O43RVGExbGixcsYzgTUo1%2FuIjxtRSMVKzbxfXMIKG078GOqUBlTY39zW7Ab0wU%2BUzOxXmBEbA%2F61yo6fao3VFjHICC%2FglXQ4FN6ZAwnfgGvMHPgJ7C5aDmN%2BYWW62Wu%2F%2BDZzHyc9yycay8D9UiQCxsA2d8Iz37exmJviPRwICcPsnTeOSiPrdHVE6ECtCszx%2FurOsFBned3DuDss0uchkiliBDl54qo6zM5hpEL5BpbQ%2Fj8%2BUj7Pvo8wOP70slipS1rPWb8tMAhTz&X-Amz-Signature=b4c5d1ab1402fd506680ec49970c2f4e5a4d3144b7b5f431c3b369b25eea5c39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
