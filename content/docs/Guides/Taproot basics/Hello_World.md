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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIPD2GJ%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCWv%2B7ZM7%2BnEszuy6UeP7S36AijohipMYiFlbJ5wd36JgIgOQa1iheW%2FSrer4mf43OnqxydjVT7vEanb3nzGIHpCsgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMflY2WVFGX%2FG%2BRJyrcA24AsK%2B5wc431nOUvekIspOiMZ3aJo%2BQxbyUQ6iyOuHPJ0gjohiNkx7uXYvFD88xQd6wuZYIJVY6edE5ZxuWXl43KRI%2BpZdAYeqlDICpCTxr34iOrfaBLxTbEzng9c1eJ%2BTLwDtm6dwYRV6wJi91oy3q0eUwvs9gbT2ldMJZO8pX6zO04EtvSh0NLrbiX1syunjDEPoXJ3Dnpj1ezkYIvxENAjm9SbSzS03gI1Vr3PRCwl63aAK4L1jnQwrzMcG7EloDztGkKX7aHnN1M02XfbkgExIoOLiBwX8WYmI%2FnNt9OYXYL7CLEzF2jcVZO8nRTO3ePz7dudJ5GTi2vK222oFeu%2BmfStSZMcLtM7DW8NBwxIo6LGKPFhb2lVtpQuQ%2FLdBWWDLHUiFenLZKsOGpQnXmkz4Y4%2FcdyS%2BLRNrEtNUJ8T1hiAQr5QV3RVtAniJDwu9DKWsu8tkXbVQq7i2RHfgKO2sPJSd9liPRCQqPnzTRff3I%2FPfrKvGolWVzHqzb1vnB4DZdnVNzDXg7E45cJW7qTcNnzfXLooH4O2DBODZLKQsTxL0WG47r5WgJlLTlHcU7RUy7nbQW%2BEJu1b%2FOngYugXtFASqUqNbgFtdvZgfTx0XK8vi4mrK%2Fri8wMKrorc0GOqUB8EQpXBS%2BUWJEB3tX0CG097MVnDbEIokwjCmPi%2BzslMJ%2BK37P54JiJ%2Fk4Dois1leBGZHKwVF4Qr1MGMsPVxP9%2BFB82068Pfva4SCz3FhMXeGFh8S6PUQjJMSgYTFcK%2FXMor8VBgf6v3H2NlMg15szIvEBYduwI4c8uPA1GMeV4nJgDoUXIOZ9HssWucU8s2e3vqLHotI4jhcb5f6j1fob%2BqZ4LGT%2F&X-Amz-Signature=9e30c3cbdc6da65d2bd5c8abcbb907197d1b5ea79efbe471fb251cc89f0c3159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIPD2GJ%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCWv%2B7ZM7%2BnEszuy6UeP7S36AijohipMYiFlbJ5wd36JgIgOQa1iheW%2FSrer4mf43OnqxydjVT7vEanb3nzGIHpCsgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMflY2WVFGX%2FG%2BRJyrcA24AsK%2B5wc431nOUvekIspOiMZ3aJo%2BQxbyUQ6iyOuHPJ0gjohiNkx7uXYvFD88xQd6wuZYIJVY6edE5ZxuWXl43KRI%2BpZdAYeqlDICpCTxr34iOrfaBLxTbEzng9c1eJ%2BTLwDtm6dwYRV6wJi91oy3q0eUwvs9gbT2ldMJZO8pX6zO04EtvSh0NLrbiX1syunjDEPoXJ3Dnpj1ezkYIvxENAjm9SbSzS03gI1Vr3PRCwl63aAK4L1jnQwrzMcG7EloDztGkKX7aHnN1M02XfbkgExIoOLiBwX8WYmI%2FnNt9OYXYL7CLEzF2jcVZO8nRTO3ePz7dudJ5GTi2vK222oFeu%2BmfStSZMcLtM7DW8NBwxIo6LGKPFhb2lVtpQuQ%2FLdBWWDLHUiFenLZKsOGpQnXmkz4Y4%2FcdyS%2BLRNrEtNUJ8T1hiAQr5QV3RVtAniJDwu9DKWsu8tkXbVQq7i2RHfgKO2sPJSd9liPRCQqPnzTRff3I%2FPfrKvGolWVzHqzb1vnB4DZdnVNzDXg7E45cJW7qTcNnzfXLooH4O2DBODZLKQsTxL0WG47r5WgJlLTlHcU7RUy7nbQW%2BEJu1b%2FOngYugXtFASqUqNbgFtdvZgfTx0XK8vi4mrK%2Fri8wMKrorc0GOqUB8EQpXBS%2BUWJEB3tX0CG097MVnDbEIokwjCmPi%2BzslMJ%2BK37P54JiJ%2Fk4Dois1leBGZHKwVF4Qr1MGMsPVxP9%2BFB82068Pfva4SCz3FhMXeGFh8S6PUQjJMSgYTFcK%2FXMor8VBgf6v3H2NlMg15szIvEBYduwI4c8uPA1GMeV4nJgDoUXIOZ9HssWucU8s2e3vqLHotI4jhcb5f6j1fob%2BqZ4LGT%2F&X-Amz-Signature=8820019404a855712f2cd9b450e53d061201bc8c6c4d6484063bfed1dd5cbacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
