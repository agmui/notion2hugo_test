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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGW2R56%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGUBmFLbdWacL8RgkLlVmo61yabrcog4dnsa7cgqHNAKAiBCFudOcZzT2Gj3tL7Nk4NEeaf8InkmhH%2BhIyzMpEv9IyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOGXyRcqwN%2B%2FDj22aKtwD%2FA2qtRZ%2BIhUdHU27W1A%2B1V6%2FV4bzpE%2BfOg1IVVn%2FcNumU0IQZeCPartm0llm%2FD0ejss60RGNNK7%2BJOncp1M9pf2YIfsng%2FETX5mNQk1U1NLjJnuWuCPd79qbLInwBELD7EAfdorFhXnfTYsPT87V2bY7U0aSwiy2%2Brj53GtBFjp3p2s48aCB78f2jqEnm%2F6GE9AEZE%2BIOEtGQUXn7pXrOh6EpAO78dgT83jareLDEmhCfMN0ZUf4J3o5SzkbjgmVlmt4x8ClA%2F5yrPqKqRukn47bWN9JWj%2BnLdtb%2F6jVo8qm%2Bm4Wq9%2FauVTbKYoHSwUokbBzSqxKeywtlUOCVnlHmPtJbKcvdlvW3W7H4kmTSyMN3pBrH3rAbqXLY0Lb1Bn76p3gZifevS%2BHztDhmXP5zH0ZDZQdc3kamTYAAE2kTe4BWEVMz72N9aZqbAUYEG1vBxT62uAiuRa5XnJ10LBCuLMNhutdZW%2Ba0%2BjPDvhjVc1SC7rZ%2BfSBWKMZX2AFyP%2FfJmSko82Jadw%2BDUNq2dyTpl8fldEK7ftm7AwpAI%2BUh2sbiMQzDra%2Bcy0k29gwCkfs%2BR%2F5a%2BhdXBUAVSShDDkfAT8%2FUWLm47tIXqu2tjgzD3AyuB5Ks8jofFZyjEIw9Mm7vgY6pgGQu9myP8M9ThD5Eqp%2B1av7zgorR8h3BSBSjlWOvmSnpUDW4ZYvOTUYRM4gXcYKfKc%2FTbGqAwXNr%2FDAdN57Nf0bVAcsMQ9RXsnM4hTLmOVkYzD7ErbsPkDjzkgmgNcus9ia%2FTgKdOQc6Ci7abLCmDmhqnwqbAiuALEIA%2Fz9hkN%2BBSFXfR6eOzradoFMPgeuH78v58X7BtZZCTsmtYa6%2FQk2UspMvnwP&X-Amz-Signature=a5c1e1cb1dc76556ea2336c8a275e093dc88be5b84bd0ea7d3c902989cedfa53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGW2R56%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIGUBmFLbdWacL8RgkLlVmo61yabrcog4dnsa7cgqHNAKAiBCFudOcZzT2Gj3tL7Nk4NEeaf8InkmhH%2BhIyzMpEv9IyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOGXyRcqwN%2B%2FDj22aKtwD%2FA2qtRZ%2BIhUdHU27W1A%2B1V6%2FV4bzpE%2BfOg1IVVn%2FcNumU0IQZeCPartm0llm%2FD0ejss60RGNNK7%2BJOncp1M9pf2YIfsng%2FETX5mNQk1U1NLjJnuWuCPd79qbLInwBELD7EAfdorFhXnfTYsPT87V2bY7U0aSwiy2%2Brj53GtBFjp3p2s48aCB78f2jqEnm%2F6GE9AEZE%2BIOEtGQUXn7pXrOh6EpAO78dgT83jareLDEmhCfMN0ZUf4J3o5SzkbjgmVlmt4x8ClA%2F5yrPqKqRukn47bWN9JWj%2BnLdtb%2F6jVo8qm%2Bm4Wq9%2FauVTbKYoHSwUokbBzSqxKeywtlUOCVnlHmPtJbKcvdlvW3W7H4kmTSyMN3pBrH3rAbqXLY0Lb1Bn76p3gZifevS%2BHztDhmXP5zH0ZDZQdc3kamTYAAE2kTe4BWEVMz72N9aZqbAUYEG1vBxT62uAiuRa5XnJ10LBCuLMNhutdZW%2Ba0%2BjPDvhjVc1SC7rZ%2BfSBWKMZX2AFyP%2FfJmSko82Jadw%2BDUNq2dyTpl8fldEK7ftm7AwpAI%2BUh2sbiMQzDra%2Bcy0k29gwCkfs%2BR%2F5a%2BhdXBUAVSShDDkfAT8%2FUWLm47tIXqu2tjgzD3AyuB5Ks8jofFZyjEIw9Mm7vgY6pgGQu9myP8M9ThD5Eqp%2B1av7zgorR8h3BSBSjlWOvmSnpUDW4ZYvOTUYRM4gXcYKfKc%2FTbGqAwXNr%2FDAdN57Nf0bVAcsMQ9RXsnM4hTLmOVkYzD7ErbsPkDjzkgmgNcus9ia%2FTgKdOQc6Ci7abLCmDmhqnwqbAiuALEIA%2Fz9hkN%2BBSFXfR6eOzradoFMPgeuH78v58X7BtZZCTsmtYa6%2FQk2UspMvnwP&X-Amz-Signature=f2c2ae840f4b719eb36b306d64decb227e68ff58db218e99d2473a09c107db8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
