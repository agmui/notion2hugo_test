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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLXX2CVG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSwzGdVE8RC6VNgKbQRkBE8trpSufIg%2FuUCvB6MKuQOAIhAIG62D1lM59IqC2h1ovVLZCROvLSY5Q%2FgYy7Vgda5cr9Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzotuvDCQ6PnAcAQLAq3APmqqi47Gc0LQyd9VImIyYIH65vhMit%2F1EgAlLCCF6NM2IDndDsvM%2BbKMqdFnS7y491AzNkEPJop%2F2jqJ%2BdXk4LZ1ycBOykiKX%2BG%2BTnjVB%2Fr3Dwrq3swqwB2xo9OMZhtyRyJ51tMRntmjE%2BLAoTBx7RpZ4OFyBT7Ih4CdtKdTiqpGZ2XzLVShisqZXUOKrzggZlD4QB9UPr2hDpgpS55iccG6Jm9SRvmoDYT7grmvocbyRxWhzdDQuJrcn2ccVYki7yzt2VZEWG0EnxoV%2BwJtI46k5GicAFDfgghBeO7vC953MBDqe9JJTWw8upNc5GOM3BJhbo0lDbJ9zaoA8kOKqxYWyyyTf2yVzrWALrjNVlZCLoiQcasykN55e5ww8GfMz11XY03acY6ABV7%2FMbGXFzKPdT%2Fp31YcF4y0fJLus023nw2GFCiYtEBlDXNa3BYZWhPld768y3C4IlugxpIFXx0c7u7uP9vx5kM14X8O%2FCugDMqpO4iVmxr3tEB5RW3K1Xn8Oqp%2FDXDlG8EYym9Lubm56oRclUp%2BnOmS5wKdYv1Is%2FfWCoTl0TaBMZYnw3jNVxJfS1u0PAM5GlfRXmzdOZ5mTYf9OKJFDrU0H3NetAKBsau5na%2BKVmtbQTlzD6irS%2BBjqkAYZJHUVOx8qS%2BzPzqGt8XO5MBzl2me2Y9U3rmyte%2FIbMtcTfYD5dwGjcmFgjY3Cx0P4JIgXoHGG%2FisX3hui55PSUez2eKX1Ax8DU42QmSOAOUGwSjgz8J5dV4vaKx3ZJyWNOAHJFB4AzX%2BC2imqnbf15YvINz3M9HFM9P1vTmY9lDog1vXlgzTv67yP0j6MZnWln%2Bd%2B%2BsDVeqq6Gb1OrCoDsEtgH&X-Amz-Signature=7e5e1bd673833232f73c233739d158f3a5d40d16988c264774f2ca6ce846e73e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLXX2CVG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSwzGdVE8RC6VNgKbQRkBE8trpSufIg%2FuUCvB6MKuQOAIhAIG62D1lM59IqC2h1ovVLZCROvLSY5Q%2FgYy7Vgda5cr9Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzotuvDCQ6PnAcAQLAq3APmqqi47Gc0LQyd9VImIyYIH65vhMit%2F1EgAlLCCF6NM2IDndDsvM%2BbKMqdFnS7y491AzNkEPJop%2F2jqJ%2BdXk4LZ1ycBOykiKX%2BG%2BTnjVB%2Fr3Dwrq3swqwB2xo9OMZhtyRyJ51tMRntmjE%2BLAoTBx7RpZ4OFyBT7Ih4CdtKdTiqpGZ2XzLVShisqZXUOKrzggZlD4QB9UPr2hDpgpS55iccG6Jm9SRvmoDYT7grmvocbyRxWhzdDQuJrcn2ccVYki7yzt2VZEWG0EnxoV%2BwJtI46k5GicAFDfgghBeO7vC953MBDqe9JJTWw8upNc5GOM3BJhbo0lDbJ9zaoA8kOKqxYWyyyTf2yVzrWALrjNVlZCLoiQcasykN55e5ww8GfMz11XY03acY6ABV7%2FMbGXFzKPdT%2Fp31YcF4y0fJLus023nw2GFCiYtEBlDXNa3BYZWhPld768y3C4IlugxpIFXx0c7u7uP9vx5kM14X8O%2FCugDMqpO4iVmxr3tEB5RW3K1Xn8Oqp%2FDXDlG8EYym9Lubm56oRclUp%2BnOmS5wKdYv1Is%2FfWCoTl0TaBMZYnw3jNVxJfS1u0PAM5GlfRXmzdOZ5mTYf9OKJFDrU0H3NetAKBsau5na%2BKVmtbQTlzD6irS%2BBjqkAYZJHUVOx8qS%2BzPzqGt8XO5MBzl2me2Y9U3rmyte%2FIbMtcTfYD5dwGjcmFgjY3Cx0P4JIgXoHGG%2FisX3hui55PSUez2eKX1Ax8DU42QmSOAOUGwSjgz8J5dV4vaKx3ZJyWNOAHJFB4AzX%2BC2imqnbf15YvINz3M9HFM9P1vTmY9lDog1vXlgzTv67yP0j6MZnWln%2Bd%2B%2BsDVeqq6Gb1OrCoDsEtgH&X-Amz-Signature=a5160b9708f3eaab840edce08e54923abe3085702d0058379063841d999fe787&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
