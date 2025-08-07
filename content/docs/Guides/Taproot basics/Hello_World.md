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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVXKR5R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC5Maz3aUGFuExWic0LgGwMQPCMoIj7J0uTlang9b33%2BgIgNgrMhPRqvIjf1KBzJd9EBBQaYYjn3MnIKs81q3ZkujAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnziQHt7xjXM30cPCrcAwMXj7H4LD2cqjZ08f1V4sBKnb9fwCgY0QEc7KLdGsBd0ho1ivUtLJfMldOSTepipdvwmad3bUJcfYNpEJnnSDWUtAQyl%2FqCiwfQIMoDbB2ji50Gg69yWRup01qAVhnr9QUW0ZXawiXIatBFu7csvHB2uE7ZCwHgX1BojxGKbS9a875LLBQIgopWJAPyxbOyWzvI9sHwefrGn2aia9sFDKr8DsWbZUUVFo7lOlTAiEgynZDZHlCmJ%2BuZXvbeTu%2BQkXm0BveESr2F3ZH3o3IEo%2BakEVe1W3aBkCDNAXsNpWferEoXhGezwZZtrq2B%2FxYx09r4dbmeBq4odY8UIkpZCBEUOk2s9yjWZWI29q6nmxhW0%2FlZqw06%2BXGab7DpqQEy58UkkcHpOuBeTtfStXl0ytaAhFQHzS6fLtTJzmjb6U7j5QjyHoES54Smc8xSDiN7Mv8u%2FAivwfy6Zr8bRUlaUfsZgYhNxPh4AA8JogNG2TZYp0nkUem5qaFyoycL10O5QJlygyQ8F%2Bb4yrjkkP2AXxFdj6VWPiJH6ltTtmqKcJ8e3rqjyKCLw2EOTxJa9MnWyNjCehk6cHYw%2BxvQGOgupMgm7xO31J%2BKiT5hVkMfD%2FJ4Abd7TeEAau37%2BK6OMMzk0cQGOqUB47JRjNfDUUYvHpySrw4mvyzjNg8dHCf1NLKlvkXQdhIfKlAchU9gu%2BHrfRCOmrwBvWLB5n4agHW1jEmDVBdxznmLSpnqoHe3L4N9%2BsmjaMNPPqOAgsdi8kOb72OkaEBPwGftr5bozrj561nEu%2Fgtr3bGnnf0r9EQ1DErctqY520W9%2FyrxxApfDbCHpK3HUN8TOwgwKDZv1dAmRLgl69XP93ovfpD&X-Amz-Signature=3de95c8bdd1bdf53dacfda32e0418b927b15659136759b014f6ec015619c49ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVXKR5R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC5Maz3aUGFuExWic0LgGwMQPCMoIj7J0uTlang9b33%2BgIgNgrMhPRqvIjf1KBzJd9EBBQaYYjn3MnIKs81q3ZkujAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnziQHt7xjXM30cPCrcAwMXj7H4LD2cqjZ08f1V4sBKnb9fwCgY0QEc7KLdGsBd0ho1ivUtLJfMldOSTepipdvwmad3bUJcfYNpEJnnSDWUtAQyl%2FqCiwfQIMoDbB2ji50Gg69yWRup01qAVhnr9QUW0ZXawiXIatBFu7csvHB2uE7ZCwHgX1BojxGKbS9a875LLBQIgopWJAPyxbOyWzvI9sHwefrGn2aia9sFDKr8DsWbZUUVFo7lOlTAiEgynZDZHlCmJ%2BuZXvbeTu%2BQkXm0BveESr2F3ZH3o3IEo%2BakEVe1W3aBkCDNAXsNpWferEoXhGezwZZtrq2B%2FxYx09r4dbmeBq4odY8UIkpZCBEUOk2s9yjWZWI29q6nmxhW0%2FlZqw06%2BXGab7DpqQEy58UkkcHpOuBeTtfStXl0ytaAhFQHzS6fLtTJzmjb6U7j5QjyHoES54Smc8xSDiN7Mv8u%2FAivwfy6Zr8bRUlaUfsZgYhNxPh4AA8JogNG2TZYp0nkUem5qaFyoycL10O5QJlygyQ8F%2Bb4yrjkkP2AXxFdj6VWPiJH6ltTtmqKcJ8e3rqjyKCLw2EOTxJa9MnWyNjCehk6cHYw%2BxvQGOgupMgm7xO31J%2BKiT5hVkMfD%2FJ4Abd7TeEAau37%2BK6OMMzk0cQGOqUB47JRjNfDUUYvHpySrw4mvyzjNg8dHCf1NLKlvkXQdhIfKlAchU9gu%2BHrfRCOmrwBvWLB5n4agHW1jEmDVBdxznmLSpnqoHe3L4N9%2BsmjaMNPPqOAgsdi8kOb72OkaEBPwGftr5bozrj561nEu%2Fgtr3bGnnf0r9EQ1DErctqY520W9%2FyrxxApfDbCHpK3HUN8TOwgwKDZv1dAmRLgl69XP93ovfpD&X-Amz-Signature=2273b7b519431e4bb26ecb1c175a6bb4f68d7171f855571af0335d274dc94145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
