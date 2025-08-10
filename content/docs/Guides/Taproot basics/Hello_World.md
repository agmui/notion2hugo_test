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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4VIDAN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYsspR4U%2BmJTZfbVGjwUx2AF3uP2RRBeFd%2FOTD2e76yAiAomnsvXfPN1vK8dAO2U4kUCJQDmpsW1ZsipfAM%2BEiMSiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FO6lEoOGuIpMXIMKtwDSyRR0sLYO0ee9pkjilFDQuIOJ4NOAj%2BRDcPP%2BNns%2BCEPSg9vt3HPoXuUN6Ai9fnacoL%2BhK%2F7Ko6aGplzBRhz8O6HO8qR7yKu%2BUB7OTVAt%2BhNgH6wAoSIzHjxxdhTfxPTH0kRcBtPJEVy4CApi33RzD8wzTGiTcystM9ehB%2BjRkE9dzz3CowcnSEJJxNOCBm6acttHdOKBvA5lF8Bsy03AgQ2LYbqRqNifDPPrmthRqC9FvkoQAHJ0q6Xc53bWEzKR%2BxDMyi1KflIyof9pKxUywLqZyiX3RtW0LBP1%2FwUmYgujhpT9LLvtnEfoxUhSFTAkTFM8BH2%2BJxr3sJIbOVBvuzrJKDTB7u%2FxctaySaSmMf68SDtpam%2FFRBKRD6X9Ao13yn8PKrmcQIhON3Mr98g%2F4rONmSPN%2FKlinFfEm5fI5YoKLKRm26M5enuOmOuRiL8VxEGBq3ML%2Fs9ObiSDjYMxtwx99OIgpORxvPATFqPPPxogTEGZn3upJpS8Z94mfRBrwMkCvWKazG90YYi3exHx4k5S52Fjb5ChvR7NiVrUN9cnDbkIqpZSodlk11QFu9P7v6VpEkmYC6sQ1hZ7bVF%2FwIu%2FEtYlmyOpC1DUqfaAvPTMHBYdyLpNEmKklMwyrrjxAY6pgEhAbxOaDpxlOUPHkJqH64ooj7LHNsnZG%2BLZ1UaRLdQdqeLF8re5dUyMWxN6%2BNS0Rxq2LakIBf%2FAGKWqFYgAqhTigIYcoFXZUindlF25DT2ESifhzdoRdJpsmDnTcXaJ42RGJ1NDt19zERmDqa0BmdI%2FyQsyTwSQ2jYucpq29iYj9zoXx7YOnBDshwvI%2BpKK0mu4m0aD12jhfKv6ocORHJZSHzvl%2BED&X-Amz-Signature=2d860edab811d2153a640dd84688861a1b525749a2a91c86f64bd81ba983099b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4VIDAN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYsspR4U%2BmJTZfbVGjwUx2AF3uP2RRBeFd%2FOTD2e76yAiAomnsvXfPN1vK8dAO2U4kUCJQDmpsW1ZsipfAM%2BEiMSiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FO6lEoOGuIpMXIMKtwDSyRR0sLYO0ee9pkjilFDQuIOJ4NOAj%2BRDcPP%2BNns%2BCEPSg9vt3HPoXuUN6Ai9fnacoL%2BhK%2F7Ko6aGplzBRhz8O6HO8qR7yKu%2BUB7OTVAt%2BhNgH6wAoSIzHjxxdhTfxPTH0kRcBtPJEVy4CApi33RzD8wzTGiTcystM9ehB%2BjRkE9dzz3CowcnSEJJxNOCBm6acttHdOKBvA5lF8Bsy03AgQ2LYbqRqNifDPPrmthRqC9FvkoQAHJ0q6Xc53bWEzKR%2BxDMyi1KflIyof9pKxUywLqZyiX3RtW0LBP1%2FwUmYgujhpT9LLvtnEfoxUhSFTAkTFM8BH2%2BJxr3sJIbOVBvuzrJKDTB7u%2FxctaySaSmMf68SDtpam%2FFRBKRD6X9Ao13yn8PKrmcQIhON3Mr98g%2F4rONmSPN%2FKlinFfEm5fI5YoKLKRm26M5enuOmOuRiL8VxEGBq3ML%2Fs9ObiSDjYMxtwx99OIgpORxvPATFqPPPxogTEGZn3upJpS8Z94mfRBrwMkCvWKazG90YYi3exHx4k5S52Fjb5ChvR7NiVrUN9cnDbkIqpZSodlk11QFu9P7v6VpEkmYC6sQ1hZ7bVF%2FwIu%2FEtYlmyOpC1DUqfaAvPTMHBYdyLpNEmKklMwyrrjxAY6pgEhAbxOaDpxlOUPHkJqH64ooj7LHNsnZG%2BLZ1UaRLdQdqeLF8re5dUyMWxN6%2BNS0Rxq2LakIBf%2FAGKWqFYgAqhTigIYcoFXZUindlF25DT2ESifhzdoRdJpsmDnTcXaJ42RGJ1NDt19zERmDqa0BmdI%2FyQsyTwSQ2jYucpq29iYj9zoXx7YOnBDshwvI%2BpKK0mu4m0aD12jhfKv6ocORHJZSHzvl%2BED&X-Amz-Signature=069ded683fdc7702e975134be63e45b6c2a66ede7f049d0bd3906f451bd917a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
