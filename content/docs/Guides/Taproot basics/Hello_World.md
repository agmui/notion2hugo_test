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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXSAXHC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7I156bPrBrNMjR%2B5Q51yBPN3PMG4w%2FGa5ZoKBMHMKHAiBQbUG7meCopD%2BHU79DmPTgsiQlr5ZFmMQTCObBDOGE8SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzh%2ByNeEfM2snOXlKtwDnae6tYZtL2lu4iCGDi5ZEoAicQy%2By%2FKnJugXpQLmZ9ORr7rmbLEaWZzA%2FWo0nWZSFG92Tkb29zBJN0Fqn1VqdWbHV83Xnyeb0GDVMU4P7mJ50MJQvj8d8pW0it223b39yCKfLQi79Y8dozl2tsz9ScIOdUvyy7yKH3OQ%2FFnhOHANkOha92zmKyyjpC17zDQIzB2ZE75T8of0Allh32hSvxmMBVVrii63G%2FKFeYFIngwo%2FESfpU4KoP7xRt5Zmb8xb%2FZ3ZDTrSv9uBaxr%2B68sFPUuDazhF3qrgSnRKgFPuzVx3M9qaKNGKHYuOg1J9pbY29t%2FuRydRVfVQQ9y1adTuyzAkq6wSsP9r11ks6fyxzX%2B3u4A254X1%2BqHcl8xTk%2BiU7dYsL%2BzMtP9s0L7PnGiSgWIBmEJtbuuoIV1Ww4gh0pRIT1gSDd98w%2FSvERCuQHR%2BFJjJ17Fi4Ai9wumMtu9kuXdqmgi9SNUPzra7obOLK3mOQk5BY0E5TjJfznTVLWV%2FahDnF89Bb7fW8WVqPCklNLpNsZoBtsjP6kSv2SMTXBkoWjLsdfBwT6KAn43ALRw0t5yuIr3C4Wzkhly8r%2BcNN4nwPKf6uDa9EyjsPDKA2czEL1oR58YMpFOjfQwy43evQY6pgG68Fb5kwhJrODCU5IUT9LZ0SV6K%2Bh3ioekSrLbehyKf78UisrUJOHZwE20ldj8Zjy%2BehTIpzn2k52gerU%2Fc6fSgJ8nN4PV5deaNjtJtS8%2F%2FpGzMhQ35%2FMDDX7Mzwtb3x4e%2BpQO55lNX71Cx%2FuM1%2F6jNwUu0yI2UIHmv1wYuSPIGuLHRgpW78W%2BhGik8Ce5Ooyi4kb2RORzUzOpsCHHJAPoVIJNda7q&X-Amz-Signature=c7dabea52f859cb02080250fc52166b1d924867ad4aeda8ebf945c6805d79c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSXSAXHC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7I156bPrBrNMjR%2B5Q51yBPN3PMG4w%2FGa5ZoKBMHMKHAiBQbUG7meCopD%2BHU79DmPTgsiQlr5ZFmMQTCObBDOGE8SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzh%2ByNeEfM2snOXlKtwDnae6tYZtL2lu4iCGDi5ZEoAicQy%2By%2FKnJugXpQLmZ9ORr7rmbLEaWZzA%2FWo0nWZSFG92Tkb29zBJN0Fqn1VqdWbHV83Xnyeb0GDVMU4P7mJ50MJQvj8d8pW0it223b39yCKfLQi79Y8dozl2tsz9ScIOdUvyy7yKH3OQ%2FFnhOHANkOha92zmKyyjpC17zDQIzB2ZE75T8of0Allh32hSvxmMBVVrii63G%2FKFeYFIngwo%2FESfpU4KoP7xRt5Zmb8xb%2FZ3ZDTrSv9uBaxr%2B68sFPUuDazhF3qrgSnRKgFPuzVx3M9qaKNGKHYuOg1J9pbY29t%2FuRydRVfVQQ9y1adTuyzAkq6wSsP9r11ks6fyxzX%2B3u4A254X1%2BqHcl8xTk%2BiU7dYsL%2BzMtP9s0L7PnGiSgWIBmEJtbuuoIV1Ww4gh0pRIT1gSDd98w%2FSvERCuQHR%2BFJjJ17Fi4Ai9wumMtu9kuXdqmgi9SNUPzra7obOLK3mOQk5BY0E5TjJfznTVLWV%2FahDnF89Bb7fW8WVqPCklNLpNsZoBtsjP6kSv2SMTXBkoWjLsdfBwT6KAn43ALRw0t5yuIr3C4Wzkhly8r%2BcNN4nwPKf6uDa9EyjsPDKA2czEL1oR58YMpFOjfQwy43evQY6pgG68Fb5kwhJrODCU5IUT9LZ0SV6K%2Bh3ioekSrLbehyKf78UisrUJOHZwE20ldj8Zjy%2BehTIpzn2k52gerU%2Fc6fSgJ8nN4PV5deaNjtJtS8%2F%2FpGzMhQ35%2FMDDX7Mzwtb3x4e%2BpQO55lNX71Cx%2FuM1%2F6jNwUu0yI2UIHmv1wYuSPIGuLHRgpW78W%2BhGik8Ce5Ooyi4kb2RORzUzOpsCHHJAPoVIJNda7q&X-Amz-Signature=18e06295d1df8accee83cf5cd6939a49ea092763423c00c6e98fabfc755a5baa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
