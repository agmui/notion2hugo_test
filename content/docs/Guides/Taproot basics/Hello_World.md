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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6HFZZD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCum23AmYJC0qgcQfqedzFyinQrHHtLqjPd%2BLlqdsKewIhAOYsJo%2B8HjFibPZTrV6prVOQDIwCLFJWaODyD8H90uXkKv8DCDEQABoMNjM3NDIzMTgzODA1Igz7FJrFKFh4FVDUBAQq3APj4iTOVhmIQd%2FMVJLdzcGzdojSAVWenrU%2BzXX8Pg74xHmM1s6CagVyH8zM4U7%2FldlFvEHNRR7fg0TM5IjUGpggPazx0a%2FdsZmE2ks72pe7ZiOukAwM3u0HsF074EAmCEpsmdUfpP4aeBShGYmiHBvL2QC3B5ec4qO%2BvsJf7i1k9SIhyXDFMDwsrxlt8ISkCY%2BNm0V2I%2BrHyngIRBD%2BkzTfHpz2zjfABlv8PM%2FX5q3Hn0bohWrfPuxc20Vwt5HfqhZ40lS9HX2vgEi83n1Qgk9P6FrLt%2FdRDbvw%2BZIMFHyCPColcDU2bpsqgxv%2BDm17kNR91ZijCwlr9T2EOX4JlLDKdHnE42B%2BaW0cRWMxDnyj8tLIbBgmjJ4tkI%2BZRBKLMu4%2FBNS6%2BSZiudwP%2BYWSJHZyXSQ8V9YlosO1g1y2bP4Spyw9EsAZz2wn3wIm1jbEp5hNahOrpWJhq2UQyRxIiCaLBtxC15NSQSnZYTXekjTv7eYJAPSoQV1ZVcRrDwfeDg2ooPXzTry7ZeGbiGVYh2bagC54dnelhl%2BFdBmN8Ttavg7vt0lekLIng77Fhr4si6TD%2BdEbcBQ9l5ZysU6ZZ0Et6O9ig0zxZ9461BAjm9Hb3bxse1Yow6eVvisY2TDJhPq%2FBjqkAS4xcqtspxuIaM2nHZx1PcQiu9U1lLPL4RqmiQjc9iRQ4j2cwNisU5G5kMI791QuBWTU7PwWBxjKnbXV30qvmT1pqhvUAPiGDxk44Kds6RfXvOj6MRkdbRZM4CkbUIy85pwrQCAokSOTyCbVh%2Fh8xeRVZgSdV%2BxtDtAsoIDrUzfEnOlgVRNlCIP3L5h5Lu4nTM2uj4hrLZjJn3jBiCSjTYkXKLqW&X-Amz-Signature=6c0973c988b6819f6925adc14efecb94688756393b46684aa1add582dcefb32a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6HFZZD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCum23AmYJC0qgcQfqedzFyinQrHHtLqjPd%2BLlqdsKewIhAOYsJo%2B8HjFibPZTrV6prVOQDIwCLFJWaODyD8H90uXkKv8DCDEQABoMNjM3NDIzMTgzODA1Igz7FJrFKFh4FVDUBAQq3APj4iTOVhmIQd%2FMVJLdzcGzdojSAVWenrU%2BzXX8Pg74xHmM1s6CagVyH8zM4U7%2FldlFvEHNRR7fg0TM5IjUGpggPazx0a%2FdsZmE2ks72pe7ZiOukAwM3u0HsF074EAmCEpsmdUfpP4aeBShGYmiHBvL2QC3B5ec4qO%2BvsJf7i1k9SIhyXDFMDwsrxlt8ISkCY%2BNm0V2I%2BrHyngIRBD%2BkzTfHpz2zjfABlv8PM%2FX5q3Hn0bohWrfPuxc20Vwt5HfqhZ40lS9HX2vgEi83n1Qgk9P6FrLt%2FdRDbvw%2BZIMFHyCPColcDU2bpsqgxv%2BDm17kNR91ZijCwlr9T2EOX4JlLDKdHnE42B%2BaW0cRWMxDnyj8tLIbBgmjJ4tkI%2BZRBKLMu4%2FBNS6%2BSZiudwP%2BYWSJHZyXSQ8V9YlosO1g1y2bP4Spyw9EsAZz2wn3wIm1jbEp5hNahOrpWJhq2UQyRxIiCaLBtxC15NSQSnZYTXekjTv7eYJAPSoQV1ZVcRrDwfeDg2ooPXzTry7ZeGbiGVYh2bagC54dnelhl%2BFdBmN8Ttavg7vt0lekLIng77Fhr4si6TD%2BdEbcBQ9l5ZysU6ZZ0Et6O9ig0zxZ9461BAjm9Hb3bxse1Yow6eVvisY2TDJhPq%2FBjqkAS4xcqtspxuIaM2nHZx1PcQiu9U1lLPL4RqmiQjc9iRQ4j2cwNisU5G5kMI791QuBWTU7PwWBxjKnbXV30qvmT1pqhvUAPiGDxk44Kds6RfXvOj6MRkdbRZM4CkbUIy85pwrQCAokSOTyCbVh%2Fh8xeRVZgSdV%2BxtDtAsoIDrUzfEnOlgVRNlCIP3L5h5Lu4nTM2uj4hrLZjJn3jBiCSjTYkXKLqW&X-Amz-Signature=95dfaba323a81799a19251a813532823e01799f082b2b941f1ddcedde4052744&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
