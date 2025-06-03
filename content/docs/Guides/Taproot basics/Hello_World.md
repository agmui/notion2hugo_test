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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYLTAI7P%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEcblWweMu2o4UJpj8K%2FaumfqeOr7g%2FngXc4q3Dwiw1GAiBhW%2BOpkPbaRnWfEwe9TvmtK8S0R3ncAc31qIeh2g9JFiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrUQTpQDDAYnJTsMKtwDsLHeVqS9TRRfcLqVVM%2Fhx%2Fyk0aBuJ5fjw0tO0HlyoBwjJfLzFSOeLn1F%2BdCQ94n9qrMg6jT1ygrD652w34TEaxPdHeF%2BAVYEoDdzm7xVHLNje71CLC4x3%2Fd2xNyWl6yZ%2FEFjIShSRcK7otBQ7XQtHBQ41p8ZpYkpr4kFYPp9aPxKV9vwdMFpTwS%2B8ET4GCBz7vSLaDGxJNHFawSyxHh3pxKfROKfmTGWx5emCcxwJAvFFj3RoNbPWM4FF4fCFIxfzFICwcSgsSaGssANF0LraJE2Bu7gra5KVnwBXAY169Nh8sc92m6kuRDXKJj5rDxQPiHgOlnl%2FuSysa%2FrcFZFb67kjHFNMTfIOKkoU0ASLvZzdL7RnTP%2BlIiCtCiSUoWts2IMZmArh0VCF7l%2FhEVsXIGsWaD977OTroen3am3OvYLxQuX6nEeWNSWJ6%2F43AcC4JZ%2BLtux%2FqW3pO0qDvD2wAAQcfW6vAxQUjTDOGvslOuAcLG0vJNMtqobVR3YdN3ohdWCkJRD6OChnUSIyokMUTnr8LwaJObZdJfTxVx%2BGgV1xm2SYuxqFZMXcCgeWp4NaOAw4zmbWqdWFXGRkDEyQrExOZuy53Os9TT%2FueY%2F2WKINlRxBa91O4PxnOgw34H6wQY6pgGQMZ9uQUHl%2Fsnr%2F%2BrW4reQ3STj7%2BlGtRGGKRxmbS3eg8M7d0OQUMDz00MXbjx2QGGfIGhN9mXLDn73Dx4jtt3Wr%2FeWhEKhVZp2bMCMQM%2FiTZOyjPfCQnzIa1KtesFJxwXVPd4Nc4GOQtq54iuFkHIWh3EwrNxZ2XVr6YsIPBQPD9%2Br8DuoWJVVXWB7LcTH3nS7Ot%2BmmU8JP3tRd7GlYHSQK%2FFDsoJl&X-Amz-Signature=43857afb27cad6dbb798f3ccc8a0ddc48519906535748cc3db23460036215b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYLTAI7P%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEcblWweMu2o4UJpj8K%2FaumfqeOr7g%2FngXc4q3Dwiw1GAiBhW%2BOpkPbaRnWfEwe9TvmtK8S0R3ncAc31qIeh2g9JFiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrUQTpQDDAYnJTsMKtwDsLHeVqS9TRRfcLqVVM%2Fhx%2Fyk0aBuJ5fjw0tO0HlyoBwjJfLzFSOeLn1F%2BdCQ94n9qrMg6jT1ygrD652w34TEaxPdHeF%2BAVYEoDdzm7xVHLNje71CLC4x3%2Fd2xNyWl6yZ%2FEFjIShSRcK7otBQ7XQtHBQ41p8ZpYkpr4kFYPp9aPxKV9vwdMFpTwS%2B8ET4GCBz7vSLaDGxJNHFawSyxHh3pxKfROKfmTGWx5emCcxwJAvFFj3RoNbPWM4FF4fCFIxfzFICwcSgsSaGssANF0LraJE2Bu7gra5KVnwBXAY169Nh8sc92m6kuRDXKJj5rDxQPiHgOlnl%2FuSysa%2FrcFZFb67kjHFNMTfIOKkoU0ASLvZzdL7RnTP%2BlIiCtCiSUoWts2IMZmArh0VCF7l%2FhEVsXIGsWaD977OTroen3am3OvYLxQuX6nEeWNSWJ6%2F43AcC4JZ%2BLtux%2FqW3pO0qDvD2wAAQcfW6vAxQUjTDOGvslOuAcLG0vJNMtqobVR3YdN3ohdWCkJRD6OChnUSIyokMUTnr8LwaJObZdJfTxVx%2BGgV1xm2SYuxqFZMXcCgeWp4NaOAw4zmbWqdWFXGRkDEyQrExOZuy53Os9TT%2FueY%2F2WKINlRxBa91O4PxnOgw34H6wQY6pgGQMZ9uQUHl%2Fsnr%2F%2BrW4reQ3STj7%2BlGtRGGKRxmbS3eg8M7d0OQUMDz00MXbjx2QGGfIGhN9mXLDn73Dx4jtt3Wr%2FeWhEKhVZp2bMCMQM%2FiTZOyjPfCQnzIa1KtesFJxwXVPd4Nc4GOQtq54iuFkHIWh3EwrNxZ2XVr6YsIPBQPD9%2Br8DuoWJVVXWB7LcTH3nS7Ot%2BmmU8JP3tRd7GlYHSQK%2FFDsoJl&X-Amz-Signature=27873018ff83e67fb6df522917f647c7d15edba7c9fc780a38a55a015032a12d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
