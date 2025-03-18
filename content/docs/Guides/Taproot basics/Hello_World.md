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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZK7EXI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDfYthZ3dIG1yasVbYLNaA695CGSYUO9NZ8%2FjL4SQj2DAIgaatV8q25vTv2d0L5BJKxdRXL7Hif%2FYQEyTpZ3%2BAr2xkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJWtnQLAYN%2F%2Bff3agCrcA9menL8i1Aa0WXA%2BweFTUVA38VK7gWYn5BRZKh%2FJaqFBtaJta3KeRp8ORcrideyGiU6h4tpKJMwHNvbFPi50EoCkGoOwTYkIw%2FTa0T2Ex%2FIzxwm4WWzonyBKHpvUuNBZItcIEN%2BXETwnzmMlDoGADut7aqGmAalu8clMffmgN%2BBgncq15jJBpVGtEPNocG33IB8dITaYyJh7bIBELEPsnzo4D%2FX1Agae03u0DNR6hqETnqRj8oLobv3rtBQrEQl6PQRLx3pO3YQ0y%2F2fUG31EV8C4vfOvC6of19QiuyqVxvTbHsXOUL6EHhZPFQXInm4kwK5GAA8Qg47UGFP%2FCebSPhr4czOxfIIUVUDJzHZdcu%2BhxWrTZ0HZqjzXypsjiR7LBK%2FmZRRKiLxK%2Fm7i%2F8Ell23vrnjCE%2BwHKNRMk9LbUOZ8bv5i%2Ffjs%2FNZT1kHC6dOY%2Fl%2BfcKFEbwHhQ4vj9r23L1nn6HPJ4xEQy23%2BRMCXBr%2BqxzReCjMw5sK74IHi%2FEo8PmquAYKK%2BcMg2XdLAUHOnuZBW6Y4kKNNIzbRS7GENE%2BnSpLs901vAZCKUpfpPKuyrAlM8DIYshJN4fkhDDod5%2BnmrdhC%2Fbn5GLuqcQrYzE8QfFKTy5qlr%2Bmk%2BbfMInz5r4GOqUBY6iuSIxHQfuYuT94oVjdElQKCKD3H7Dc7BXPCHLSy9Jy4KXNS%2BCTz1A5h8xs9q7OP6BTgvIXldUuCCB6ah7%2BfdTmAgReiROUEHMss2y3zzwm1JrtZCXf5l2SzV1%2BOnx2R6WK5uSGU2bg3kDL%2F8LajS9rW%2FaJVoZlQqilir4qd7vnXj%2F%2BHA5Oqs8bpFfQG%2BUMH5VEThClzXr0yAbCjZQlB58rtmz2&X-Amz-Signature=e98c4bf392484da2b5eae7c731d83344ebd24a2511ef47f8b971e364ae0ae7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZK7EXI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDfYthZ3dIG1yasVbYLNaA695CGSYUO9NZ8%2FjL4SQj2DAIgaatV8q25vTv2d0L5BJKxdRXL7Hif%2FYQEyTpZ3%2BAr2xkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJWtnQLAYN%2F%2Bff3agCrcA9menL8i1Aa0WXA%2BweFTUVA38VK7gWYn5BRZKh%2FJaqFBtaJta3KeRp8ORcrideyGiU6h4tpKJMwHNvbFPi50EoCkGoOwTYkIw%2FTa0T2Ex%2FIzxwm4WWzonyBKHpvUuNBZItcIEN%2BXETwnzmMlDoGADut7aqGmAalu8clMffmgN%2BBgncq15jJBpVGtEPNocG33IB8dITaYyJh7bIBELEPsnzo4D%2FX1Agae03u0DNR6hqETnqRj8oLobv3rtBQrEQl6PQRLx3pO3YQ0y%2F2fUG31EV8C4vfOvC6of19QiuyqVxvTbHsXOUL6EHhZPFQXInm4kwK5GAA8Qg47UGFP%2FCebSPhr4czOxfIIUVUDJzHZdcu%2BhxWrTZ0HZqjzXypsjiR7LBK%2FmZRRKiLxK%2Fm7i%2F8Ell23vrnjCE%2BwHKNRMk9LbUOZ8bv5i%2Ffjs%2FNZT1kHC6dOY%2Fl%2BfcKFEbwHhQ4vj9r23L1nn6HPJ4xEQy23%2BRMCXBr%2BqxzReCjMw5sK74IHi%2FEo8PmquAYKK%2BcMg2XdLAUHOnuZBW6Y4kKNNIzbRS7GENE%2BnSpLs901vAZCKUpfpPKuyrAlM8DIYshJN4fkhDDod5%2BnmrdhC%2Fbn5GLuqcQrYzE8QfFKTy5qlr%2Bmk%2BbfMInz5r4GOqUBY6iuSIxHQfuYuT94oVjdElQKCKD3H7Dc7BXPCHLSy9Jy4KXNS%2BCTz1A5h8xs9q7OP6BTgvIXldUuCCB6ah7%2BfdTmAgReiROUEHMss2y3zzwm1JrtZCXf5l2SzV1%2BOnx2R6WK5uSGU2bg3kDL%2F8LajS9rW%2FaJVoZlQqilir4qd7vnXj%2F%2BHA5Oqs8bpFfQG%2BUMH5VEThClzXr0yAbCjZQlB58rtmz2&X-Amz-Signature=353ebf98ec6afed0598b3ef6b585e76152e4aecf8de15fa27826bad068ec8d52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
