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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LEPW5H7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTgaaoKlfBteMw%2BGtaezRJW%2BU7hfhe5Woi6m4JeibrAIhAOT64yjg6hcPrcNcD99q6Nm7KNcjIIff4K1QCL6x1UL9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJvOeCYBd90TJHdL0q3ANlFH711iZB0X8tgvYqLFCl4fxZ5mfRw44QHuriY94WtPveZkRNXGcsxwyU88OKExyswj%2FJg3EPHASS6QG7H3b0li%2BK5w4DJNH%2BBUgLb0Xb7v2l8NzgzAmBBDjvx%2FJZNDz91ZiSZkpwpHCfZl4U2WOTKotAHq4cBCYoFcllRLyYFl%2FE0EJD5p6NBnoVL5fF%2F%2FWsc%2FRSkRiuPmrXmH7AqwCr1vkNGey2vvunT07tr61ctKmAEH7%2FhkRwKVnp2GdKQmQ9TJwasxOL%2F4zzIXv9XGJ1GV22RaOUf0JBQguJzAiPJ0vsBjmqFnJ3w10Wd1jg5qLXIj9ts9%2BMjIXpb0%2BhN9naSkuxFNyqh%2Be77MrDGRMwLBBliHpUoVOCouqfDpXWyv5vO0nlQen3VneGf0iqlIVFJfPAm3GbtelQ3uu1mUsA36Cv%2BBbifGMnbSKhVihuJvcd0DYRLRgGGn%2F8boMWIM90wGs8WqS1NmBk7TpbOxzM4iQOLNmHQMjpj67UQcDPHGCi4yxRZ0mYAdckwXJokfFjVcn056rlk4hNS%2Bz1vMKAMFWR7uHTHD%2FwrFYdPtjZCYAwNffFnYA1AP55GDQETbQMw3%2Bh9Gt1H%2FS%2Banlo9C6uhge96Dz3irWxkZ47qDCc9MrCBjqkAc8RbKHKjbs5PbNozeBRmODK7Xc7wNCAAVfznNuHuEsocBb0yNpPeKfbScBQpeq5mi6nyfMysVz4Rtuv74G1qNpB9g25YjlaB1vSHwZSM%2FfsCY0loh%2FFgPF0TtPkdcPQH3SmUteHZ1c4%2Fj8pGi%2F5ZWq34zd%2Flg1HpfNQSJaH%2F6e6Q2OCmQw0I9qgX%2BVv7FnfPydKpYGudxB2xVaxUJs2oTWADax4&X-Amz-Signature=81e12edae3fa4c6ffaa6113dc1c0501c1a4e00aace536a1f11999eee98a1a92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LEPW5H7%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T150929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTgaaoKlfBteMw%2BGtaezRJW%2BU7hfhe5Woi6m4JeibrAIhAOT64yjg6hcPrcNcD99q6Nm7KNcjIIff4K1QCL6x1UL9KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJvOeCYBd90TJHdL0q3ANlFH711iZB0X8tgvYqLFCl4fxZ5mfRw44QHuriY94WtPveZkRNXGcsxwyU88OKExyswj%2FJg3EPHASS6QG7H3b0li%2BK5w4DJNH%2BBUgLb0Xb7v2l8NzgzAmBBDjvx%2FJZNDz91ZiSZkpwpHCfZl4U2WOTKotAHq4cBCYoFcllRLyYFl%2FE0EJD5p6NBnoVL5fF%2F%2FWsc%2FRSkRiuPmrXmH7AqwCr1vkNGey2vvunT07tr61ctKmAEH7%2FhkRwKVnp2GdKQmQ9TJwasxOL%2F4zzIXv9XGJ1GV22RaOUf0JBQguJzAiPJ0vsBjmqFnJ3w10Wd1jg5qLXIj9ts9%2BMjIXpb0%2BhN9naSkuxFNyqh%2Be77MrDGRMwLBBliHpUoVOCouqfDpXWyv5vO0nlQen3VneGf0iqlIVFJfPAm3GbtelQ3uu1mUsA36Cv%2BBbifGMnbSKhVihuJvcd0DYRLRgGGn%2F8boMWIM90wGs8WqS1NmBk7TpbOxzM4iQOLNmHQMjpj67UQcDPHGCi4yxRZ0mYAdckwXJokfFjVcn056rlk4hNS%2Bz1vMKAMFWR7uHTHD%2FwrFYdPtjZCYAwNffFnYA1AP55GDQETbQMw3%2Bh9Gt1H%2FS%2Banlo9C6uhge96Dz3irWxkZ47qDCc9MrCBjqkAc8RbKHKjbs5PbNozeBRmODK7Xc7wNCAAVfznNuHuEsocBb0yNpPeKfbScBQpeq5mi6nyfMysVz4Rtuv74G1qNpB9g25YjlaB1vSHwZSM%2FfsCY0loh%2FFgPF0TtPkdcPQH3SmUteHZ1c4%2Fj8pGi%2F5ZWq34zd%2Flg1HpfNQSJaH%2F6e6Q2OCmQw0I9qgX%2BVv7FnfPydKpYGudxB2xVaxUJs2oTWADax4&X-Amz-Signature=cc43a97aae6fb77ccf5d229a468d5c1740ea78f31143f942979c6b1556a9144f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
