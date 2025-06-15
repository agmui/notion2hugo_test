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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WLYTMK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTpromhml59ss9ODI7tqr3pVQDCbG%2FC3PzR1LQ5ONs8AIhAJnjTRAGrWPi9jNkwnXHJf95lmFKJc8hkNXc6XvTiIPeKv8DCE0QABoMNjM3NDIzMTgzODA1Igw8H%2Buj8mbdJG2RXigq3AND9W%2BbeLTEtnO00G2j529cql3W4ISQ%2F%2BqXhCrIKNaO7B%2F4LDXFvYaVL38BYLXmndSPCXZNs0hF%2Fbjd1vOGgfsiH%2BtIhnEgdlmn2jz4vGyiJxnLhUfpGiTjIw%2BXtuR68nWSR%2FUrno0N1hIKzVuq39f4LO6qxnQc92Opk8LjzepqJuxYSvv171Sx%2Fz1wFP7OeiWvndq3z6Horkvbd7tHvvEgeq%2BUsVFefmC49FQp4WDEye%2FS3y%2BRfI1KvJQo%2BOmsQ%2Byqj0ujKhBr4GnYBD8X0cGbO%2FRPs3%2FH2ENtjSjb29oFCeu0RR%2BNBv8KCUVgEbdEdzAdr8aUfwvWj0KvTJrxMByxd0Fwh%2BaiI%2Bu3eJ%2BSKPVBYsyuLMIr7QnXlhVF9tDX2NiiqxvYmV38W9Q0ETbVJSY%2BLzub7pCnI4ro0ZLV6aWv3g8nIz3leQrsgeEXhWIJIdXyy%2BpXUTidIFOjeN%2BETGZ11arUBELd8J21cnMMrUw45%2FUePRTV3vR7c2ziFVVW39m2t69AyEvi49SqHT8I1CtxHaUft%2BEzo9aeZ5HowRJedtQeVpzAEJSazMkZHd37i0vn%2FWmdSZoTuevZV82nyg3YsuYKFBSSZ1Q9soKIBy9yMOXlwaJHgmt9iRx4jDCyz7zCBjqkAWshr%2B7c6HNUI65fASykPCbX2NW5epkAt%2FQHIdW4xpFwM8i0N1Ji4DgXOEyO02YI1BN04NQUVUP0viWIDxkh3M5ByCpxCphD2yjswPU2B2GOLnwEFYKJA9HFcH1yMD38PlY24txifBakzEyxxQKEea0CmhjPeY7b4wKTF1o6iWh9kwC%2FHz3IBARA4jxr4qVGduhGfyzHHtXxkcYltAXuEvEXu0Lm&X-Amz-Signature=000433cd5ada7802fadb91b23fa54e0a26954790c67ed97ae22f92d5e04266e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WLYTMK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTpromhml59ss9ODI7tqr3pVQDCbG%2FC3PzR1LQ5ONs8AIhAJnjTRAGrWPi9jNkwnXHJf95lmFKJc8hkNXc6XvTiIPeKv8DCE0QABoMNjM3NDIzMTgzODA1Igw8H%2Buj8mbdJG2RXigq3AND9W%2BbeLTEtnO00G2j529cql3W4ISQ%2F%2BqXhCrIKNaO7B%2F4LDXFvYaVL38BYLXmndSPCXZNs0hF%2Fbjd1vOGgfsiH%2BtIhnEgdlmn2jz4vGyiJxnLhUfpGiTjIw%2BXtuR68nWSR%2FUrno0N1hIKzVuq39f4LO6qxnQc92Opk8LjzepqJuxYSvv171Sx%2Fz1wFP7OeiWvndq3z6Horkvbd7tHvvEgeq%2BUsVFefmC49FQp4WDEye%2FS3y%2BRfI1KvJQo%2BOmsQ%2Byqj0ujKhBr4GnYBD8X0cGbO%2FRPs3%2FH2ENtjSjb29oFCeu0RR%2BNBv8KCUVgEbdEdzAdr8aUfwvWj0KvTJrxMByxd0Fwh%2BaiI%2Bu3eJ%2BSKPVBYsyuLMIr7QnXlhVF9tDX2NiiqxvYmV38W9Q0ETbVJSY%2BLzub7pCnI4ro0ZLV6aWv3g8nIz3leQrsgeEXhWIJIdXyy%2BpXUTidIFOjeN%2BETGZ11arUBELd8J21cnMMrUw45%2FUePRTV3vR7c2ziFVVW39m2t69AyEvi49SqHT8I1CtxHaUft%2BEzo9aeZ5HowRJedtQeVpzAEJSazMkZHd37i0vn%2FWmdSZoTuevZV82nyg3YsuYKFBSSZ1Q9soKIBy9yMOXlwaJHgmt9iRx4jDCyz7zCBjqkAWshr%2B7c6HNUI65fASykPCbX2NW5epkAt%2FQHIdW4xpFwM8i0N1Ji4DgXOEyO02YI1BN04NQUVUP0viWIDxkh3M5ByCpxCphD2yjswPU2B2GOLnwEFYKJA9HFcH1yMD38PlY24txifBakzEyxxQKEea0CmhjPeY7b4wKTF1o6iWh9kwC%2FHz3IBARA4jxr4qVGduhGfyzHHtXxkcYltAXuEvEXu0Lm&X-Amz-Signature=e13674159fa1eed06ebecf629062d32e9e56d514983c6efafd2738558d042a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
