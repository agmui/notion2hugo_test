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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZYIONT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCH2lDmYcu2v8jJww5PrO9KdOcN5y9iIq2s09TXWpurYACIQCFBDrGW4w4NeFQEZeSnkep3vCrGw950xlwxD9SiMtmYir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM7uT7LdaU%2B5Kj5AjZKtwDzhMPSoMXOWfVamXtCwMEaPVjl2eUj1SgLhl%2BTG8Hy4CgYBSYPWVh7EX%2Boi1t6tb5VatIuZ%2BqoPlTzLEsXC1igJiYBI3%2BHE4p6Fxwq92YXgtGex6z9l6uSbjN6tVvZlFIIvqRwgKqJ0r0rNMQ9KfX5Eevp5lJ0AL6%2F2LsM5i786Elsoh68VWtGeLRp9iWH23E2XNqrrUiWYB4tTZE16sGf5xD0WCh8wQMqQm5rHXmrTDHh91ggQ%2FZUhci0S4mG1dyhHllT8axzNaKie5ZdEVR3LSADUbACo17PQ72CybGJIDRJtnEbGCdupIwLFK%2B7BZpjLty8wf2BBSIVxa%2BcdVtEnhT8j4FuUm3Lo%2B%2FTeIcDZyb8%2BZev%2Fptc1ltGizBDW%2Fomtk1%2FI3uEWLqql62EmKKm94Fzm7SaAt1oxbWTGB0KvB1%2F73TFBkZWhrcP6zZTwA88%2BNZ0gNO7wkRtdoXxvApV%2BRKZH9HR%2BPcQA6l%2BylV%2FGlxRfEATX39dB6ixk7HeN2gWtGo%2FZOdYnPyZW814GW2rw%2BPa4cgcUPdQhM4EhLwlqtv3CeJphHtupjFEjWoEOyRHA87qQ4IAB9bINxIaVmtOnYy%2FbtGC3G6x%2FcsZIg7W6Y34ckatlBP3UaQFbswhd3qwgY6pgFhtAICk3XtP7hsOnCBo66eNdFCtgioN5nd6HyS%2FvFFnOpBKYII%2BKAb8NOZppWgHjYFbWca9DN3mw4gIcvTresB%2F3mzkEUS4OdwIHnqFoIUPgYD%2Fo9UrLiIm3lyIMlDECviE%2B3XxDvt2sWpSeycfrKYFgrLahM8%2BhcieeuAliikGmpiDPZkjwioaSVMKfiMi7tRCLtK%2BJXHYefNoQVWWnOyPA10psez&X-Amz-Signature=9f11e4ffe2796ad5701814aabb722dc59cd6be35bf64a1fa53489696b14d4f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZYIONT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCH2lDmYcu2v8jJww5PrO9KdOcN5y9iIq2s09TXWpurYACIQCFBDrGW4w4NeFQEZeSnkep3vCrGw950xlwxD9SiMtmYir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM7uT7LdaU%2B5Kj5AjZKtwDzhMPSoMXOWfVamXtCwMEaPVjl2eUj1SgLhl%2BTG8Hy4CgYBSYPWVh7EX%2Boi1t6tb5VatIuZ%2BqoPlTzLEsXC1igJiYBI3%2BHE4p6Fxwq92YXgtGex6z9l6uSbjN6tVvZlFIIvqRwgKqJ0r0rNMQ9KfX5Eevp5lJ0AL6%2F2LsM5i786Elsoh68VWtGeLRp9iWH23E2XNqrrUiWYB4tTZE16sGf5xD0WCh8wQMqQm5rHXmrTDHh91ggQ%2FZUhci0S4mG1dyhHllT8axzNaKie5ZdEVR3LSADUbACo17PQ72CybGJIDRJtnEbGCdupIwLFK%2B7BZpjLty8wf2BBSIVxa%2BcdVtEnhT8j4FuUm3Lo%2B%2FTeIcDZyb8%2BZev%2Fptc1ltGizBDW%2Fomtk1%2FI3uEWLqql62EmKKm94Fzm7SaAt1oxbWTGB0KvB1%2F73TFBkZWhrcP6zZTwA88%2BNZ0gNO7wkRtdoXxvApV%2BRKZH9HR%2BPcQA6l%2BylV%2FGlxRfEATX39dB6ixk7HeN2gWtGo%2FZOdYnPyZW814GW2rw%2BPa4cgcUPdQhM4EhLwlqtv3CeJphHtupjFEjWoEOyRHA87qQ4IAB9bINxIaVmtOnYy%2FbtGC3G6x%2FcsZIg7W6Y34ckatlBP3UaQFbswhd3qwgY6pgFhtAICk3XtP7hsOnCBo66eNdFCtgioN5nd6HyS%2FvFFnOpBKYII%2BKAb8NOZppWgHjYFbWca9DN3mw4gIcvTresB%2F3mzkEUS4OdwIHnqFoIUPgYD%2Fo9UrLiIm3lyIMlDECviE%2B3XxDvt2sWpSeycfrKYFgrLahM8%2BhcieeuAliikGmpiDPZkjwioaSVMKfiMi7tRCLtK%2BJXHYefNoQVWWnOyPA10psez&X-Amz-Signature=9015d342e17f59a4f60d1692361a28640e7569b02b4389a0397e11890dd2e502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
