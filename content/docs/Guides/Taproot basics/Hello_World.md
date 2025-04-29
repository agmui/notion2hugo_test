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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGHWD6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZx2JuZLwqmyU8VDVtICdHZMeRXXdQidIXR9oDOSeB1AiAzWEiBqCoRMaw5oCrB2G0vUUKw9IdjklFHfDaNB3LRhCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpovE2LbWinRdye2KtwDhEH2VZX96oXjhbS6uTEnc5zs5F6t0HxBEemL%2BWgATfDEFj7XaQXk0msC0ebgt6W0Yl0fx4RRyLWihBRx7I0tgSilyOPpizBNYsdYVPjBAXQPQi9GBmleBeIDn%2FAnErWI4eCTUtN4sOmyI%2BXMufyBoSf%2B4%2FDQHzQ%2FtaeUG4Ye25BUS7Q%2BZYxaU6nuxrUeOlKg%2FlOGuGDLQKNjjtZ1l2ulQhwHsh9SDnClqY%2Fe0n32pmaV7B95G7rpgWpjR%2FVXpRoXXYEXNmRq%2F5vZxCNC3JkhnalphsOiGZc5%2FMWaycjp8dWRNJ9HcTCRRNn97tpUjiQT4Xg%2BzICTyYjOSz%2Fdg0gklUCXF7Q4umGRWyWk2sBv1l2udJWvt1WQ5eC5qFUrRZVjTLv1T82oy440D8jfncFmYUdD8tYJXqvCK2lsy2EMXi92NgyGxChwcKvOHq1Nl2MlaeFDd7Otkl2jmmhwCldYV5WV4L25FEgiSLpBNeFvaeuCLC8Wu79s3rs6TMczakQw%2FCtb8WUDmljpcat02ggVhZ%2FrlbzC8TgT8szvAizwlDKG7qvr4MB3hNqBwVCWyshCEQiVN32aE%2FMQaKfCT2Gx2%2BW6yEvN0%2F5IUl6uh2o05hqbpByqxYVE8%2FWsGkswp4zCwAY6pgHrb59jN4yZbMcFN%2BLVgPiL27Oht79ezeXd7YpN1xm4WVA%2FOHMDRBSPyZjfhF9PFlGNnNgAmBGkElOONgdCGTEfZG%2Bco7DJmihHeol4B3KTo3Xr0kiH3m6dj%2BJcLPnipb4QbEoTlTBX06jzviJKv%2FgwO2IkSWPRTzHAwV0snFeSTN1RxmKwtnR4k5%2FMQC8W%2B%2FYRNZR7lXcI3beIKTS8YrId001YsFRs&X-Amz-Signature=78802edd84ccd13ea1caf214ad74d66fdb2da182e6ebd000ad55989ef0c8f7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGHWD6V%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZx2JuZLwqmyU8VDVtICdHZMeRXXdQidIXR9oDOSeB1AiAzWEiBqCoRMaw5oCrB2G0vUUKw9IdjklFHfDaNB3LRhCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpovE2LbWinRdye2KtwDhEH2VZX96oXjhbS6uTEnc5zs5F6t0HxBEemL%2BWgATfDEFj7XaQXk0msC0ebgt6W0Yl0fx4RRyLWihBRx7I0tgSilyOPpizBNYsdYVPjBAXQPQi9GBmleBeIDn%2FAnErWI4eCTUtN4sOmyI%2BXMufyBoSf%2B4%2FDQHzQ%2FtaeUG4Ye25BUS7Q%2BZYxaU6nuxrUeOlKg%2FlOGuGDLQKNjjtZ1l2ulQhwHsh9SDnClqY%2Fe0n32pmaV7B95G7rpgWpjR%2FVXpRoXXYEXNmRq%2F5vZxCNC3JkhnalphsOiGZc5%2FMWaycjp8dWRNJ9HcTCRRNn97tpUjiQT4Xg%2BzICTyYjOSz%2Fdg0gklUCXF7Q4umGRWyWk2sBv1l2udJWvt1WQ5eC5qFUrRZVjTLv1T82oy440D8jfncFmYUdD8tYJXqvCK2lsy2EMXi92NgyGxChwcKvOHq1Nl2MlaeFDd7Otkl2jmmhwCldYV5WV4L25FEgiSLpBNeFvaeuCLC8Wu79s3rs6TMczakQw%2FCtb8WUDmljpcat02ggVhZ%2FrlbzC8TgT8szvAizwlDKG7qvr4MB3hNqBwVCWyshCEQiVN32aE%2FMQaKfCT2Gx2%2BW6yEvN0%2F5IUl6uh2o05hqbpByqxYVE8%2FWsGkswp4zCwAY6pgHrb59jN4yZbMcFN%2BLVgPiL27Oht79ezeXd7YpN1xm4WVA%2FOHMDRBSPyZjfhF9PFlGNnNgAmBGkElOONgdCGTEfZG%2Bco7DJmihHeol4B3KTo3Xr0kiH3m6dj%2BJcLPnipb4QbEoTlTBX06jzviJKv%2FgwO2IkSWPRTzHAwV0snFeSTN1RxmKwtnR4k5%2FMQC8W%2B%2FYRNZR7lXcI3beIKTS8YrId001YsFRs&X-Amz-Signature=525a3ae748fca23f43cc64e9397c60aa338010f8e43cd2edebfe1f7bd2010c08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
