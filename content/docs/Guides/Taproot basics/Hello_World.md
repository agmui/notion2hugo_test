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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMMWDG6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeGeQSd%2Bq5JoVPcyHsel%2FMokAiBqt9L9L0bS7kmHq0QIgPmU%2BuFzvtdEcq3JzUnvZqyUwrQV0BB%2Fj7qRJX3SYOyEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJjGTnp6STcSR9IFrSrcA1Pm4Tu5rfwAOmR56wiW4jbOyBr6d2XMVezpbD7eeMmSM3ZRBX6dw6d0UeC4v%2BmsSSTfoQrVrHESeenLgJ3E2lzs3Vq0M16EQG59eQ1Y6UTIaDx4gEntxoUYL96JqAWS%2BW99GkRQnLOP7HxjwCdd73My92hhXvOCMVbZ%2FhuNx9jNHYas6mFE6QSgd8OFJGIEtWxmiF5gfItZVKPEPClggPaECtRME8eva1%2BH%2Bz8sxlnNXh3ZyO8wCiarOCJx%2BwqoeKnMlBWaTddx%2F%2FYbUzKoAyPOgGyDW5szb9FZCl8ZsouTpe%2B6OHvamm6V4SZ7vGTTS%2Brx%2BFd9iebbEpzK1z4QklNoJKzvRWbN1gRbERwjUf54uaKMYr0INW0zJzREkaQOggsUxBuenYTH%2FpAICyrXpg6bHpwwHy7xZp7rGZi%2FUme7XgFJGnSzybbbSUvLJfHjOd4165NK8cTF9XiWj9zerrxw%2FeEdYWXYXDf1GQ%2BBeFtaonl9J6fVRXDPpJcOrW%2BygxaVeE4f9hl7K19EetEOvN8k4vRBuOAHjFh2QWKhWp%2F2h1JLoAwEgXbbSe1ZreysLKESLCNxU2Spj34Z%2BO9GXzw%2FhqJcaGHc527oRJs%2FEhQDGBBf0CFd65P5bfihMM30y78GOqUBc6F2k0VZSjtz99aLRIn6ugn4gqO5I8dNed%2FBfuGmwxLbkpdfVjy0UxswJDYJ6XV0eAUZsWUzllIrIqUMOY1KezBXA5uBBJMiax17xCRzz%2FP%2Bk23jK1s5K8wF8DXid2pGvGJqEGvOFKxuH6tXChPGMv2NB29a5pfvvVpoKmODlBW9kvneuwiA8b4gIIqS17SuL0kblBd%2BuCnL7gocoKxU0tMze93t&X-Amz-Signature=b8125f286c2c6091820344392932aea9fdfb76088175e86020bffa40104edfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMMWDG6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaeGeQSd%2Bq5JoVPcyHsel%2FMokAiBqt9L9L0bS7kmHq0QIgPmU%2BuFzvtdEcq3JzUnvZqyUwrQV0BB%2Fj7qRJX3SYOyEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJjGTnp6STcSR9IFrSrcA1Pm4Tu5rfwAOmR56wiW4jbOyBr6d2XMVezpbD7eeMmSM3ZRBX6dw6d0UeC4v%2BmsSSTfoQrVrHESeenLgJ3E2lzs3Vq0M16EQG59eQ1Y6UTIaDx4gEntxoUYL96JqAWS%2BW99GkRQnLOP7HxjwCdd73My92hhXvOCMVbZ%2FhuNx9jNHYas6mFE6QSgd8OFJGIEtWxmiF5gfItZVKPEPClggPaECtRME8eva1%2BH%2Bz8sxlnNXh3ZyO8wCiarOCJx%2BwqoeKnMlBWaTddx%2F%2FYbUzKoAyPOgGyDW5szb9FZCl8ZsouTpe%2B6OHvamm6V4SZ7vGTTS%2Brx%2BFd9iebbEpzK1z4QklNoJKzvRWbN1gRbERwjUf54uaKMYr0INW0zJzREkaQOggsUxBuenYTH%2FpAICyrXpg6bHpwwHy7xZp7rGZi%2FUme7XgFJGnSzybbbSUvLJfHjOd4165NK8cTF9XiWj9zerrxw%2FeEdYWXYXDf1GQ%2BBeFtaonl9J6fVRXDPpJcOrW%2BygxaVeE4f9hl7K19EetEOvN8k4vRBuOAHjFh2QWKhWp%2F2h1JLoAwEgXbbSe1ZreysLKESLCNxU2Spj34Z%2BO9GXzw%2FhqJcaGHc527oRJs%2FEhQDGBBf0CFd65P5bfihMM30y78GOqUBc6F2k0VZSjtz99aLRIn6ugn4gqO5I8dNed%2FBfuGmwxLbkpdfVjy0UxswJDYJ6XV0eAUZsWUzllIrIqUMOY1KezBXA5uBBJMiax17xCRzz%2FP%2Bk23jK1s5K8wF8DXid2pGvGJqEGvOFKxuH6tXChPGMv2NB29a5pfvvVpoKmODlBW9kvneuwiA8b4gIIqS17SuL0kblBd%2BuCnL7gocoKxU0tMze93t&X-Amz-Signature=7265bb9a8a24b0efc9cb9619b742db1ad4358323bd800a4db0569d7ce7e5ccb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
