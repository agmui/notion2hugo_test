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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OX7W2E%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtMkW4AypYyPV3%2BaFKZaH%2B5YEMuss5g6%2BCpb8lwywBPAiBQq02un75ccmH1VvN9BAV3ZSKRfKvpPQWbX2wmuxo60SqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZLn39nohfoZKR8FcKtwDclYf6u83vIGEs7TWt8%2FVSRIhIFnekxVergCheK2kKSC5ON%2F4jRUJ6P1UIgp%2Bio5HqACQ1Ko8gOGzavisHsZrGMbtTZA3oUl%2Fu4TNqQ8ECJR37pVJgbxA9B8e%2FYSwMRgugeemPbS16vFQL5taveDnaQl0DkVdRoBBVLxW%2BIeEfobBzwuoTmNAkU%2Bgp55Zj4SHyyHpOa3N9uS%2Buet%2FLzUFfinwfbp53csQQKoNkfCXrmsUqK5up7X0GuAStINxt4ffBAKCw7i%2FchtnXZc21v4PPV3bkGelkGFxciocIGlQwDATM5VsN9Q4hjnOzlx6G5uQEWbwwJb3P2zVZG0xvAk5SQxSPCMsgFmnRTeg49%2FGxUMC5rk2j%2FmHsFaSHKEYUA4jfwy0CEZ8ZIS4qK1awc64P3yNquLb0VrVTan2L%2FN4YrBwajGxPhWfq30Ksqngts2x0i8rGklPhUwuMnMwLahMct8OD7BKeIbCXTDMnE464p%2B3EOzM%2FGbUDn8aUxL6w9bShMbFm0ku0dJZccXONo0XL2Z7W6mOe2d6%2F1a%2Br2mmaeZk3Din8ecZUUuUffhnuNRkMNYgl%2BzJIPt33T1U%2B6ToYH9OyiOmUZJcGMp%2BgCJRM%2FLJjAr3hq1%2F5EglWMUw%2BemHwwY6pgEkxmCFU6jSlyeJVB%2FHJAt%2FJ4nGkUeXaX1oi%2FwJuktFhhS2xT1KQGOFqez%2Bau9zkVIg4huHBVqjnjer18jNm7HT6rqS7sbooF4IdMrZlAKcz2OI9gVTJY3iJ4X4lu%2Bdh%2FyzBP9yz7G%2FmqnHQEXPt19l9%2FKAP3sbwWK41y4iK1ETuew7mBWqrtIn8jHTgwdQtQQ6mBZgs04jWvM6alVA9F28E25QrqeU&X-Amz-Signature=e59e96bf1a1e15f1963fba08d02f9bcc4b10f35e06abfd29e17e7bb2ad616e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646OX7W2E%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtMkW4AypYyPV3%2BaFKZaH%2B5YEMuss5g6%2BCpb8lwywBPAiBQq02un75ccmH1VvN9BAV3ZSKRfKvpPQWbX2wmuxo60SqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZLn39nohfoZKR8FcKtwDclYf6u83vIGEs7TWt8%2FVSRIhIFnekxVergCheK2kKSC5ON%2F4jRUJ6P1UIgp%2Bio5HqACQ1Ko8gOGzavisHsZrGMbtTZA3oUl%2Fu4TNqQ8ECJR37pVJgbxA9B8e%2FYSwMRgugeemPbS16vFQL5taveDnaQl0DkVdRoBBVLxW%2BIeEfobBzwuoTmNAkU%2Bgp55Zj4SHyyHpOa3N9uS%2Buet%2FLzUFfinwfbp53csQQKoNkfCXrmsUqK5up7X0GuAStINxt4ffBAKCw7i%2FchtnXZc21v4PPV3bkGelkGFxciocIGlQwDATM5VsN9Q4hjnOzlx6G5uQEWbwwJb3P2zVZG0xvAk5SQxSPCMsgFmnRTeg49%2FGxUMC5rk2j%2FmHsFaSHKEYUA4jfwy0CEZ8ZIS4qK1awc64P3yNquLb0VrVTan2L%2FN4YrBwajGxPhWfq30Ksqngts2x0i8rGklPhUwuMnMwLahMct8OD7BKeIbCXTDMnE464p%2B3EOzM%2FGbUDn8aUxL6w9bShMbFm0ku0dJZccXONo0XL2Z7W6mOe2d6%2F1a%2Br2mmaeZk3Din8ecZUUuUffhnuNRkMNYgl%2BzJIPt33T1U%2B6ToYH9OyiOmUZJcGMp%2BgCJRM%2FLJjAr3hq1%2F5EglWMUw%2BemHwwY6pgEkxmCFU6jSlyeJVB%2FHJAt%2FJ4nGkUeXaX1oi%2FwJuktFhhS2xT1KQGOFqez%2Bau9zkVIg4huHBVqjnjer18jNm7HT6rqS7sbooF4IdMrZlAKcz2OI9gVTJY3iJ4X4lu%2Bdh%2FyzBP9yz7G%2FmqnHQEXPt19l9%2FKAP3sbwWK41y4iK1ETuew7mBWqrtIn8jHTgwdQtQQ6mBZgs04jWvM6alVA9F28E25QrqeU&X-Amz-Signature=3ce32678d902500eb778b23d2c0f7b9f6e3b28d15f3049d18c45b5573a4fe915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
