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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRPDF7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEuJF01YFCOPq1QRIam4tE%2FUrPmCpxLqWjf262xreVncAiEApu2i8GtKHnUZg6b9YxA%2B0DkkuSUt18tDPb4W%2Bt%2B6Qt8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDES2AzmGVdyXHcHz%2ByrcA4IrdU4Rdie2RPPukT8xxwnv7kLuPJVamRxWQWjZii1VTd4mNorqFWN4ZBewvqqm%2FgJkH5Q33l55i%2Bb4s5JAV87sTbolAGsIwIipP5RbCJ3W3jt6oimDtfRvn4vt70Sh8H7%2Fs8nJo2OA3vOCAwhpror43z2X9Z6r7AqF9w3TivqDY5Vy9Km%2FcyY4PD5TvhoQCmxbaRNMQwrEUOPky%2BGHPhbGIVB4QqclaLIwkvc8pDf8ru6loidUOgiXkqbSTz22DG3ZeKRqreEtWux8NeW7L4K%2B1AVwrGYoTCSHfP0PraSNG1c6uN8%2FQ8IoT5rtfODRay35HUS5eQ2kSqZX78RclSQU2lO6hB1Yt%2F%2FaMKHvzcF%2BICATBdASy0XJ7fbUajL4QuBvTRntGlfDQL9yhe5FUb6NCp05V88ZIC75fW1cxboROHxgRUK2P5N4A4zABgi01Ej2h6qViHo2fVebgva8lqXvTrTfbD4tT6KsUpnhbX%2FqJOqIR0Kt96AVdAbJ5Douy4%2BmTX7e9oCaR6fmXF0qfpp55tXoGEFjZdnXQM0Oao7JDlUpiQyjiIkzJBgHVNY6n%2FFbpBBvHgq6n5vziQI76A1wmY9z8dP4YKlY4H%2B%2F4ArvTLYXqTV0vcDKD2o8MP7bob8GOqUBUgDMevamxIlkH24rxoy5pzsnnmYhB2GOG0%2FFIn7jvu2T%2FZzBqmqRbELNmw3nrdGMHWym38bvMC0TaseBqCdGcMczZ%2BJTPhGeFZ%2F7Cyk0XLQhp77lDdOWkMgADDmDgt5Wpu3%2FagGdp%2FbUiQl80MtbA4jBZiEVMyDfYKvQqXZw7ALJMT0w%2BBLZEFokQOg4Bgu%2FETMGdOq2Dk7gWsuPzIVF8zjCFxpq&X-Amz-Signature=d60f766fc3712bbd7f1bab6334b16c4437dee7c4a61832d3f065dfb752c35fde&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRPDF7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEuJF01YFCOPq1QRIam4tE%2FUrPmCpxLqWjf262xreVncAiEApu2i8GtKHnUZg6b9YxA%2B0DkkuSUt18tDPb4W%2Bt%2B6Qt8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDES2AzmGVdyXHcHz%2ByrcA4IrdU4Rdie2RPPukT8xxwnv7kLuPJVamRxWQWjZii1VTd4mNorqFWN4ZBewvqqm%2FgJkH5Q33l55i%2Bb4s5JAV87sTbolAGsIwIipP5RbCJ3W3jt6oimDtfRvn4vt70Sh8H7%2Fs8nJo2OA3vOCAwhpror43z2X9Z6r7AqF9w3TivqDY5Vy9Km%2FcyY4PD5TvhoQCmxbaRNMQwrEUOPky%2BGHPhbGIVB4QqclaLIwkvc8pDf8ru6loidUOgiXkqbSTz22DG3ZeKRqreEtWux8NeW7L4K%2B1AVwrGYoTCSHfP0PraSNG1c6uN8%2FQ8IoT5rtfODRay35HUS5eQ2kSqZX78RclSQU2lO6hB1Yt%2F%2FaMKHvzcF%2BICATBdASy0XJ7fbUajL4QuBvTRntGlfDQL9yhe5FUb6NCp05V88ZIC75fW1cxboROHxgRUK2P5N4A4zABgi01Ej2h6qViHo2fVebgva8lqXvTrTfbD4tT6KsUpnhbX%2FqJOqIR0Kt96AVdAbJ5Douy4%2BmTX7e9oCaR6fmXF0qfpp55tXoGEFjZdnXQM0Oao7JDlUpiQyjiIkzJBgHVNY6n%2FFbpBBvHgq6n5vziQI76A1wmY9z8dP4YKlY4H%2B%2F4ArvTLYXqTV0vcDKD2o8MP7bob8GOqUBUgDMevamxIlkH24rxoy5pzsnnmYhB2GOG0%2FFIn7jvu2T%2FZzBqmqRbELNmw3nrdGMHWym38bvMC0TaseBqCdGcMczZ%2BJTPhGeFZ%2F7Cyk0XLQhp77lDdOWkMgADDmDgt5Wpu3%2FagGdp%2FbUiQl80MtbA4jBZiEVMyDfYKvQqXZw7ALJMT0w%2BBLZEFokQOg4Bgu%2FETMGdOq2Dk7gWsuPzIVF8zjCFxpq&X-Amz-Signature=adc6616c810f8530e820675252ca9180f0092a0c30960629b6e26cd5be63693f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
