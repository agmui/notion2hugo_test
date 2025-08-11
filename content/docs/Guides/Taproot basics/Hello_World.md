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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FTKHA4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDevMFU0tB%2BlEAobo4KlIZVwGPEzBE2p%2BxbSo9SsNQR1gIhAJ3FBoqfKlxepseb1UETfsaM7uSnOOxe1rxd%2F5124arHKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyacn5qBcQujUUkx1wq3ANswPuhjh%2B1sdVhUbeRggUp2T9FTQvVhZWjCIM4ha%2FDVjfVotsXOdmIAlOS0a2P58fZDbWrOiLbmeWzGMp%2FYZ3ANu4O3X6WiwDrohxjXPHLpeqd1Ag1MKjaPfgqumINgk5D956QAshXcb0qyOXGkrBaEmK9HK5sznLhGFLKzjNow8HJXC8uSbB0JhqiUURljND5ah0YQ88%2BGd1R6CtrCBTavfAlg8aJVhYNaxd%2BDMzRymOZf5fAWeZiMpkieHd2hHcDnvHv3%2FBoMHUS0eNveJndT23ianaDch3Y5xgV6SKJY80uiGcykQrJJ9dBoA3wc7yFFhnD8kWQ5K6bahJfL5YbAQ5v4OIbKmvj6x40ugIE5pcDKHNTn0Bo%2BrI2pWSDF%2BUAYzCldXoclSikzQ7xW1x%2FwxHdX1F0R3cKHVm6gWiePhmKVsrG1Ju%2F06yqrMVEQEILGBtcDjv5X%2BYP57d5cG0bCSRBCVlCk22eq6Y%2ByzV0PD7ps%2FnrgLio0l11BNoN%2Fjkzd2OOdlhiWdncIyYGN7NR1d5KowFF8bSVfCgobFDQ6nr9I3tbKOl1F7BWFF4WGW%2BIrdnozawwT66cRyT9OiFi92iEGaqz7PbyRocubpzHif2QoOdslWTVhn%2BwSTD08efEBjqkAZXH%2FIMz9j5Np00NC%2BtRYGKYJa%2FgrLv4a47rUrehP0jaHanIaDAMtyyblQZsesrYnGn9QSGt1dHaZu%2FIr%2FdCaTkfHJYlarG62GwaukFlWOTTFEFD4xmN90DcglZoZhFTQwlVsIVM%2FH4cR%2FSAM9pj4lipB%2F7D2k%2BC6gZNTZ4pm52OkMJgJPiGCQ9FLW4WKfSVwQ4N2ihv18VbDY1znER23rfhgd6C&X-Amz-Signature=d1131e7b2c972842fc407f3eadf564bc325c6d6c6c0936349ccbb3e6f2666780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FTKHA4K%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDevMFU0tB%2BlEAobo4KlIZVwGPEzBE2p%2BxbSo9SsNQR1gIhAJ3FBoqfKlxepseb1UETfsaM7uSnOOxe1rxd%2F5124arHKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyacn5qBcQujUUkx1wq3ANswPuhjh%2B1sdVhUbeRggUp2T9FTQvVhZWjCIM4ha%2FDVjfVotsXOdmIAlOS0a2P58fZDbWrOiLbmeWzGMp%2FYZ3ANu4O3X6WiwDrohxjXPHLpeqd1Ag1MKjaPfgqumINgk5D956QAshXcb0qyOXGkrBaEmK9HK5sznLhGFLKzjNow8HJXC8uSbB0JhqiUURljND5ah0YQ88%2BGd1R6CtrCBTavfAlg8aJVhYNaxd%2BDMzRymOZf5fAWeZiMpkieHd2hHcDnvHv3%2FBoMHUS0eNveJndT23ianaDch3Y5xgV6SKJY80uiGcykQrJJ9dBoA3wc7yFFhnD8kWQ5K6bahJfL5YbAQ5v4OIbKmvj6x40ugIE5pcDKHNTn0Bo%2BrI2pWSDF%2BUAYzCldXoclSikzQ7xW1x%2FwxHdX1F0R3cKHVm6gWiePhmKVsrG1Ju%2F06yqrMVEQEILGBtcDjv5X%2BYP57d5cG0bCSRBCVlCk22eq6Y%2ByzV0PD7ps%2FnrgLio0l11BNoN%2Fjkzd2OOdlhiWdncIyYGN7NR1d5KowFF8bSVfCgobFDQ6nr9I3tbKOl1F7BWFF4WGW%2BIrdnozawwT66cRyT9OiFi92iEGaqz7PbyRocubpzHif2QoOdslWTVhn%2BwSTD08efEBjqkAZXH%2FIMz9j5Np00NC%2BtRYGKYJa%2FgrLv4a47rUrehP0jaHanIaDAMtyyblQZsesrYnGn9QSGt1dHaZu%2FIr%2FdCaTkfHJYlarG62GwaukFlWOTTFEFD4xmN90DcglZoZhFTQwlVsIVM%2FH4cR%2FSAM9pj4lipB%2F7D2k%2BC6gZNTZ4pm52OkMJgJPiGCQ9FLW4WKfSVwQ4N2ihv18VbDY1znER23rfhgd6C&X-Amz-Signature=39a9d6e302c41ee0c1298f97aa011967addaea8f1bed6d9c9b4a3db66065d2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
