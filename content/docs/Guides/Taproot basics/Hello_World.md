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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDCIBOX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ34mkEmk%2F%2BPlguYjBUZvE4T%2BAbbH30oUAQ%2FAsTUy1IQIgRAYeKTTIIDcsLqlnd0LGdGNANFgSOvPHBkOtiUuIADAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEb24EEJCJOZ10U4hSrcA8cFyQjJIOK5j0qw5X8GyEiD55xsZ%2FPT5oTzEWIPUwN5cAGk1smUCOhNj6tqeJrW3qqz0sCJaA9DNQt5TqeV%2BHnB5y8YGjlQxQhnkXiNr7gRdF%2BKYYQd%2Ffphc21Vqc6D8mweKR3547TphFdNF1%2BRLf4BtCdffl8H548WNAn%2F89%2BaJcKh8Z2voeqvFmaLstRm%2FFSS%2BYCUugTfp5l%2BEuqq3hYHbR90cmdfrDDUMN9nK6Paq1X9VFXeQ5xdnuVb6N3qOkcxQ0kCgOTVb3mkRS%2Fdojlc6JOZNy4W%2Bf2X%2F41dNPAXZJLHHZ3CWOZJ%2F0UVyfzpegYXz5F2ySdOzdNaiGcQM1OSmIXOJO7XB2dAFS7ccsIBjp31EfUstRoFJ8f2ynInATUAsT7TtbBfS1oyOyzJ2lHVFoALPXoilqp%2FeVEvFmAgUPWoeBmRE4TiuxLZQz22Nq0f2S9zTLywF5mkL%2BFdqSFDY39bXU%2BagSRC6JbLIxRcnihyzKr6s37DKqL2%2BOz8c937cWaqTo0g5Rp%2FjTUcbgm%2Fu%2F8oSVABQSt5VpbAa0roZNzAOBAX8DdAhA8N%2BPowlIuz5OTu6v8MqUei6OIa4zCTCY98Okfvu1YN3ebXNSkBtCW2HJEFy1rUs9YiMNDp8cQGOqUB6jTJmhUWpKSSu7y4t8QZnSEI8KuvMkjWNsWmEVbY%2FfbXUPQ2plImsBPlGSDrBflqQ30w1z3cVfBO3Y5YfISvJ5%2FrszA5v6i7eImyV9xWtaiJ%2FZummTmA86LtjWX%2BQr9hY73h7tHJSPzcS%2FynH3eipGZdoRS0m9KbgCZeoQ0bc2%2B4CBJNc5zaWtBgvXOkehI4jck1fK7zECcBbn9c%2Blgc7R4XK8%2Bc&X-Amz-Signature=2374d9e6c006e9dd4d9a9fbe9dc19c1ec89c131b23f0b74311dd28251b8dbabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDCIBOX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ34mkEmk%2F%2BPlguYjBUZvE4T%2BAbbH30oUAQ%2FAsTUy1IQIgRAYeKTTIIDcsLqlnd0LGdGNANFgSOvPHBkOtiUuIADAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEb24EEJCJOZ10U4hSrcA8cFyQjJIOK5j0qw5X8GyEiD55xsZ%2FPT5oTzEWIPUwN5cAGk1smUCOhNj6tqeJrW3qqz0sCJaA9DNQt5TqeV%2BHnB5y8YGjlQxQhnkXiNr7gRdF%2BKYYQd%2Ffphc21Vqc6D8mweKR3547TphFdNF1%2BRLf4BtCdffl8H548WNAn%2F89%2BaJcKh8Z2voeqvFmaLstRm%2FFSS%2BYCUugTfp5l%2BEuqq3hYHbR90cmdfrDDUMN9nK6Paq1X9VFXeQ5xdnuVb6N3qOkcxQ0kCgOTVb3mkRS%2Fdojlc6JOZNy4W%2Bf2X%2F41dNPAXZJLHHZ3CWOZJ%2F0UVyfzpegYXz5F2ySdOzdNaiGcQM1OSmIXOJO7XB2dAFS7ccsIBjp31EfUstRoFJ8f2ynInATUAsT7TtbBfS1oyOyzJ2lHVFoALPXoilqp%2FeVEvFmAgUPWoeBmRE4TiuxLZQz22Nq0f2S9zTLywF5mkL%2BFdqSFDY39bXU%2BagSRC6JbLIxRcnihyzKr6s37DKqL2%2BOz8c937cWaqTo0g5Rp%2FjTUcbgm%2Fu%2F8oSVABQSt5VpbAa0roZNzAOBAX8DdAhA8N%2BPowlIuz5OTu6v8MqUei6OIa4zCTCY98Okfvu1YN3ebXNSkBtCW2HJEFy1rUs9YiMNDp8cQGOqUB6jTJmhUWpKSSu7y4t8QZnSEI8KuvMkjWNsWmEVbY%2FfbXUPQ2plImsBPlGSDrBflqQ30w1z3cVfBO3Y5YfISvJ5%2FrszA5v6i7eImyV9xWtaiJ%2FZummTmA86LtjWX%2BQr9hY73h7tHJSPzcS%2FynH3eipGZdoRS0m9KbgCZeoQ0bc2%2B4CBJNc5zaWtBgvXOkehI4jck1fK7zECcBbn9c%2Blgc7R4XK8%2Bc&X-Amz-Signature=a57dba7b881c97084afaea4408d82586443dc105a1261003b844a2a80ce7912a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
