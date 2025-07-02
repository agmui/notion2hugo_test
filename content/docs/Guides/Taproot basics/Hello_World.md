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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQOWG5P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOl7hldL1Syn10UxJLXsmDeN0Bglz5UYrIpW%2FuaMkczAiABrjzb7msHnfPxpQRDDYRxz8lLu8kIJYzjGPbkoTnxuyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5FHnQOTiORi4ZOaKtwDFkXK1SlngHiAhRNrhRrrfs%2FS6Mqrao2K8DQ6xU0ZMi5IN4Pv%2BxEOLGA4ewAoMWzclYypWo9SsgOIqYVtRqoDJA9Xt2tS4EsxnsSreizqHoX4cd8Lt%2Fm%2BvH21ww%2BUFvchBg8kG%2BE3F2NgNr74G3YrrH94hHXlbhWwK0uJB55Z118jnfF9pmOh8XZQjTStM1dSr36nc1HTxfsXqFYQdVa7pVrm%2BUVAka2J5xY7yrhPXZWuBa4eOHUcUD5oIYAwaXLjeSfngcd13%2BERRXyebeNvZPs7xppoyWg%2BHzia6jk%2FALB8nThY1BUfaYa0dDGtHFLqK0ZGgNbwrZ6evR5DjONRa6pPHumKg7KHenGHHeQlA6RpglomaBLh0pLRJQ9v%2B8xlDY%2F0kZSMItazZFic6TwzkdlIK2CG3zeQr4eL9RPvz4oiwGXhElpLbzUq9XXvDFay%2BV2cR2CGZdRpOJkSw2ICVG3LvJvdCXNbkKeqoAAm%2Fy52Yapl%2Fk%2Bw0XmlnoYcAMjf1Uir55Y9hBZcJl3rz4HfwjmPL45eBy7zSu8HApEMM2nDH5PI7MstCaNBSybJv5h57u67s%2Faaujho%2BUwRuWpurPU2wit3rjf6wpEAdyT7aPYH5yw6%2BT8pCrkl2NMwjduSwwY6pgHhQIx2mJIrrIYfvFFonTcVvOaVEpQ3mk0%2B2MUMpIBnJnU9bwp8ttjP0MMGiJOE21jSIiFWBk7b0PJ9CWtiZghoUkTC9N%2BslPvdcbmaNt%2Fbduh%2FhHJCas9bSTKtdetnmiOTtIkIJfkrpda7sjcftCfWZH13E5IOdQw6nVtetLBWmrqXrwFGzUvM8Wy7vwLpQcvHIBbzsvj%2BHiw9ZgQEQ9tcGw4A8svF&X-Amz-Signature=4fe33773e4d29f8fc003490d29ba7f15ad93191d10dd1c5e73c98c8945fc2d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQOWG5P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOl7hldL1Syn10UxJLXsmDeN0Bglz5UYrIpW%2FuaMkczAiABrjzb7msHnfPxpQRDDYRxz8lLu8kIJYzjGPbkoTnxuyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu5FHnQOTiORi4ZOaKtwDFkXK1SlngHiAhRNrhRrrfs%2FS6Mqrao2K8DQ6xU0ZMi5IN4Pv%2BxEOLGA4ewAoMWzclYypWo9SsgOIqYVtRqoDJA9Xt2tS4EsxnsSreizqHoX4cd8Lt%2Fm%2BvH21ww%2BUFvchBg8kG%2BE3F2NgNr74G3YrrH94hHXlbhWwK0uJB55Z118jnfF9pmOh8XZQjTStM1dSr36nc1HTxfsXqFYQdVa7pVrm%2BUVAka2J5xY7yrhPXZWuBa4eOHUcUD5oIYAwaXLjeSfngcd13%2BERRXyebeNvZPs7xppoyWg%2BHzia6jk%2FALB8nThY1BUfaYa0dDGtHFLqK0ZGgNbwrZ6evR5DjONRa6pPHumKg7KHenGHHeQlA6RpglomaBLh0pLRJQ9v%2B8xlDY%2F0kZSMItazZFic6TwzkdlIK2CG3zeQr4eL9RPvz4oiwGXhElpLbzUq9XXvDFay%2BV2cR2CGZdRpOJkSw2ICVG3LvJvdCXNbkKeqoAAm%2Fy52Yapl%2Fk%2Bw0XmlnoYcAMjf1Uir55Y9hBZcJl3rz4HfwjmPL45eBy7zSu8HApEMM2nDH5PI7MstCaNBSybJv5h57u67s%2Faaujho%2BUwRuWpurPU2wit3rjf6wpEAdyT7aPYH5yw6%2BT8pCrkl2NMwjduSwwY6pgHhQIx2mJIrrIYfvFFonTcVvOaVEpQ3mk0%2B2MUMpIBnJnU9bwp8ttjP0MMGiJOE21jSIiFWBk7b0PJ9CWtiZghoUkTC9N%2BslPvdcbmaNt%2Fbduh%2FhHJCas9bSTKtdetnmiOTtIkIJfkrpda7sjcftCfWZH13E5IOdQw6nVtetLBWmrqXrwFGzUvM8Wy7vwLpQcvHIBbzsvj%2BHiw9ZgQEQ9tcGw4A8svF&X-Amz-Signature=5fc007d4448acd7f854cd30d5030f2ff33260f0956e80380e88f1d4218a04392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
