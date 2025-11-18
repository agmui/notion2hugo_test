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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUAZ6JM%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcg0DaDEAyPw8%2FA14ylEoeBqtQBCv%2FCFMJ5iwKDRJT3AiAOdXdryUFqrPnR%2FlYQUNguf1bEn5KkP%2B%2BKIl%2B%2F8GmXryqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7KJpzt086Cwrr4gFKtwDW2QHDkH11jXqXg77Z3F4CnBLDQeh665hQODF%2BOJaVTwM2wpaZCk5K%2Bb410XIFR%2FtLyFMZKMNGkIJyRIWtRQdqp1omwHGVV6Vr1glKpDFcyxcKWSuuJFpnmhTnAgsdCiZ%2BeMcMfoc5gPS6vpTRkUdjqK6ul1lQFm6hlmqL2HyHQwgxuaHzRmmbQBNDTP6U3vPzUrt4oefkbw9gxECesve%2BNRZ6GuigwnmnZg1xhgulDEPgYdBYataWAqjk0JrxPSyHKcQouNzY2aO5KsDxWCzcqhElkWRVpzdDoByuQX7BSK0Ibv9qadw%2BB81IBLeUXRmP383PU2a14PNAsB%2F1K31DnMuqaKQ8FElt2jGVwJLCko1%2FM7qaxk4ga883%2FgNH6N%2FJySiOLqFOdXArkwMWQOosncLVOcZDpyTx9pmJdm6Scg7P9zGch%2FBv1zZ7mx4nKdagt%2BoNM%2B42lL7Hhi%2BIL0%2B9blMBTIyB8qb82ZCTSHbHhhHJV2aFKMqep%2FSSD%2B%2FdA0tcPZnP%2BPq4nPfahG%2BpT%2Bmnoovn5PNNhseWyqCSu61l9F8olSSUvPzcxIfF7qbX0aZGLMtI%2BX08etPX7WbkTXM%2Bg8ZpRCCldcv8iEGrVrMPKW7BeNcDmsHXpUR6kQwkpnvyAY6pgGig1hVkN5Q85s%2BSsZBA9hE%2F7F9HHriRi3btBN4zdxR7LwAKRZFfSqZuSKoqf0NYerI3vR2oorIIGZB7L7kyumyyY5KxpgZNPoHih596bqWjrN7TioAPX3irQ9bz%2Bu7yc4oq7eaR6TpNdaD%2Be4sknIzezuN0pulO9rfoBwZdq4ix%2FloDwrTs%2FCwT3VWzH7ihF6DJyUhrvtm6w6Bpij6cYH8g500X4ZB&X-Amz-Signature=e8c5b607152ac80abefc0fa6fdfca15a955b61186dbbf29255a8966ec39c9364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUAZ6JM%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcg0DaDEAyPw8%2FA14ylEoeBqtQBCv%2FCFMJ5iwKDRJT3AiAOdXdryUFqrPnR%2FlYQUNguf1bEn5KkP%2B%2BKIl%2B%2F8GmXryqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7KJpzt086Cwrr4gFKtwDW2QHDkH11jXqXg77Z3F4CnBLDQeh665hQODF%2BOJaVTwM2wpaZCk5K%2Bb410XIFR%2FtLyFMZKMNGkIJyRIWtRQdqp1omwHGVV6Vr1glKpDFcyxcKWSuuJFpnmhTnAgsdCiZ%2BeMcMfoc5gPS6vpTRkUdjqK6ul1lQFm6hlmqL2HyHQwgxuaHzRmmbQBNDTP6U3vPzUrt4oefkbw9gxECesve%2BNRZ6GuigwnmnZg1xhgulDEPgYdBYataWAqjk0JrxPSyHKcQouNzY2aO5KsDxWCzcqhElkWRVpzdDoByuQX7BSK0Ibv9qadw%2BB81IBLeUXRmP383PU2a14PNAsB%2F1K31DnMuqaKQ8FElt2jGVwJLCko1%2FM7qaxk4ga883%2FgNH6N%2FJySiOLqFOdXArkwMWQOosncLVOcZDpyTx9pmJdm6Scg7P9zGch%2FBv1zZ7mx4nKdagt%2BoNM%2B42lL7Hhi%2BIL0%2B9blMBTIyB8qb82ZCTSHbHhhHJV2aFKMqep%2FSSD%2B%2FdA0tcPZnP%2BPq4nPfahG%2BpT%2Bmnoovn5PNNhseWyqCSu61l9F8olSSUvPzcxIfF7qbX0aZGLMtI%2BX08etPX7WbkTXM%2Bg8ZpRCCldcv8iEGrVrMPKW7BeNcDmsHXpUR6kQwkpnvyAY6pgGig1hVkN5Q85s%2BSsZBA9hE%2F7F9HHriRi3btBN4zdxR7LwAKRZFfSqZuSKoqf0NYerI3vR2oorIIGZB7L7kyumyyY5KxpgZNPoHih596bqWjrN7TioAPX3irQ9bz%2Bu7yc4oq7eaR6TpNdaD%2Be4sknIzezuN0pulO9rfoBwZdq4ix%2FloDwrTs%2FCwT3VWzH7ihF6DJyUhrvtm6w6Bpij6cYH8g500X4ZB&X-Amz-Signature=a30ccc78665e95c3009ff1cfcfb337784d66bd7e2dd9967cf8215121833ed979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
