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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGTX7OP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCwAG3wMJY%2FgyJvwy5mQ8CabxziigWb8hLKdXmzL7ucZwIhAK4ffJQ9BvXKwHqmAkAoR2WVXUsqQ8K288YmQOLC0FIqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyH0l9wmqy6khLwvsq3AP3PYSMgHM%2BoASi4M6NcOrwsEIFswH%2F80wHqIzudI6UYCzIJHJCFrSGb7RfvUjvzl9dZlQdCANRqpHpYqwTb5MmfJXb24FNaP5zey0QeLVZ8TOUPd80j6gc1wh3bxfnRjXcx5qOOHKc49iSjKHei8F1daxfJimb3QFm7IKT2AWiJUNlOs4ABeLEsN%2Fu%2BixM1zeZnF0Psm9SuXHNwVHn5Xe22L0Fa%2Bg7TsvKWj0KlVFd4Y%2BMXfNiApB1zDBeFyUY2OdBOAbaU3W67rxbqfpIBTBoxIs2NnCdGa%2FoHuLNHBFPeCG2%2F8rLWoL%2BOJkuNJp0z90ysBJbswtguBltG%2B9pGVVDJPjrmGRgeFqhexVWRyW%2FTDNEfe5QuE9OziiMz6beBXEwWS6l2u163wTJOCb2HdETPMtAIEvVqyzo%2FcyGuGE7xCBJ4OsWB0B%2BOacP7CBj95xwBq%2Ftcbe7onZuXpEB7UNUyYTgdygmdBD%2FlnGWhIZp%2Ba8tUoogVLB7bY3UQhjkcWSPc4b39iy386KdIWz2BndSsnpFx8N8q69VsePxxrnYPazhg%2BxyinvWMu0XvOTmViRajfSElxz%2BO%2FY3XkUW4ARw3N%2BLWElfd948aJy56UrCBpTSE%2Ba3fFUTLjtIITD1j%2FXBBjqkAch6xwHfbphUkiZqebyECrg5hTaPRbubSz8Q1XtB3AaerDnxtE%2FN1hXmCUk9N9jMy4pikcfZieV%2FOr4BuTH2b1Uv6tCey6TptxmITw3hrbSf4DGKtO%2F95KeT3OzNVrnRDPtmz8maD%2BiSaQmqlgBvlstaczNZbdrIB9YTYWtlwBL9uXauZ5rcTqS%2BoxRoOPTZdE5%2B0po22xj8VrCdQqNq71%2FXGrci&X-Amz-Signature=871a8f738daef43b53f16be3616864e3469d70ad0bad5cf65301b096180530aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGTX7OP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCwAG3wMJY%2FgyJvwy5mQ8CabxziigWb8hLKdXmzL7ucZwIhAK4ffJQ9BvXKwHqmAkAoR2WVXUsqQ8K288YmQOLC0FIqKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyH0l9wmqy6khLwvsq3AP3PYSMgHM%2BoASi4M6NcOrwsEIFswH%2F80wHqIzudI6UYCzIJHJCFrSGb7RfvUjvzl9dZlQdCANRqpHpYqwTb5MmfJXb24FNaP5zey0QeLVZ8TOUPd80j6gc1wh3bxfnRjXcx5qOOHKc49iSjKHei8F1daxfJimb3QFm7IKT2AWiJUNlOs4ABeLEsN%2Fu%2BixM1zeZnF0Psm9SuXHNwVHn5Xe22L0Fa%2Bg7TsvKWj0KlVFd4Y%2BMXfNiApB1zDBeFyUY2OdBOAbaU3W67rxbqfpIBTBoxIs2NnCdGa%2FoHuLNHBFPeCG2%2F8rLWoL%2BOJkuNJp0z90ysBJbswtguBltG%2B9pGVVDJPjrmGRgeFqhexVWRyW%2FTDNEfe5QuE9OziiMz6beBXEwWS6l2u163wTJOCb2HdETPMtAIEvVqyzo%2FcyGuGE7xCBJ4OsWB0B%2BOacP7CBj95xwBq%2Ftcbe7onZuXpEB7UNUyYTgdygmdBD%2FlnGWhIZp%2Ba8tUoogVLB7bY3UQhjkcWSPc4b39iy386KdIWz2BndSsnpFx8N8q69VsePxxrnYPazhg%2BxyinvWMu0XvOTmViRajfSElxz%2BO%2FY3XkUW4ARw3N%2BLWElfd948aJy56UrCBpTSE%2Ba3fFUTLjtIITD1j%2FXBBjqkAch6xwHfbphUkiZqebyECrg5hTaPRbubSz8Q1XtB3AaerDnxtE%2FN1hXmCUk9N9jMy4pikcfZieV%2FOr4BuTH2b1Uv6tCey6TptxmITw3hrbSf4DGKtO%2F95KeT3OzNVrnRDPtmz8maD%2BiSaQmqlgBvlstaczNZbdrIB9YTYWtlwBL9uXauZ5rcTqS%2BoxRoOPTZdE5%2B0po22xj8VrCdQqNq71%2FXGrci&X-Amz-Signature=514ed1dce66571aca834e6ba05427d68c1f5f88b95224d6d3db598b662da5e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
