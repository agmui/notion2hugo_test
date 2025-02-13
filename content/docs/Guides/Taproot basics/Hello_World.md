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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5BNH5F%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoWoHYGz1hIO8jhxY0wgQapekR3qySku2z%2FBejjk7WVwIgXVxYMZrTB2Jdttp0oH%2BQIcbrIFVORTYxKEfxvMUBDPgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO7TXeQjMkagwjf0SircA2SGg8q%2FnxT9IoijIZ5b0aeEEdyQlJ%2BhBD%2F6kL3eoTCpJGK0XmUMM6eXdnBNkXQrezpMfzv7omid96r3IgKdcjR6azKIQ7ZjT2Ziq%2Bdk7mIAe%2BELKcqGT%2B36VO7%2BehEvRGbQNAYy2D60i3m7I2a3mAV0iKWxCRRTrL0xEjKcydn9MUmI25AC1f9VMPq2hmKtwb%2FUxh2wg9WwIqtEdlFmiD1%2FBwoureXccxAnqxkwfVoJUaK10pntB47Ve%2BMER3sUANrkf1qS52MzioDIBSxpIBOzXxywjhZwyTyC8hU7ELjBd3FSEjM9KkPTxx0wk9I52Th1aXTZ0DmSeMLT72vHtQuHcY5FdEUeSETI3tOYKB59ikv24ixQMSr0JnxPTreTe8GNK19yO16xDsEXFUgpBevtgmFUrzlbAIHQ8VZCMHCBUA66dNKuS3dVN96L3AqPV0hs0rarSt0nDPm%2BhsMPR5pFMzdad%2B58%2BH2daeBo8GDicV8ySu937v7wWe5%2B38LzPMedc9TRr%2BGJfFn9CNm5GrCfaBwO8D1k2rRKWGg3QHSDCy%2BQUNOn8IKxSXlSUMlvFHt9HOIlJjqV1Gq3B1Uy26kVQ4S9SPP%2B5hi%2BGOHgbuCz8%2Bh77SLmUpHhkFu%2BMKGHt70GOqUB79IK0DeBqRv9pWVcolmzYDPxj1bcWoipMrPqaBKi9UerJra6DwJKUmrK%2Fpsgl6pgUfEsx8zPggMoghWSVreBau6BEk%2F%2FjBKBJ1pnwdn%2BAjDksND2xb6vxGOruv2m0puDA5Vkhd%2Fv2e6QytN8%2F5n3aoAk7W2ogOzcJYMB3CnizHmACJtsqAloVMQVQ8%2BDKyFrn5dGiCdBa4ijlgV6WlWxdZ7gQaID&X-Amz-Signature=a2e6dd0f9f6a945b50f8d4f49fe7352ccd0e414b830d8fd764be82522d802567&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5BNH5F%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoWoHYGz1hIO8jhxY0wgQapekR3qySku2z%2FBejjk7WVwIgXVxYMZrTB2Jdttp0oH%2BQIcbrIFVORTYxKEfxvMUBDPgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDO7TXeQjMkagwjf0SircA2SGg8q%2FnxT9IoijIZ5b0aeEEdyQlJ%2BhBD%2F6kL3eoTCpJGK0XmUMM6eXdnBNkXQrezpMfzv7omid96r3IgKdcjR6azKIQ7ZjT2Ziq%2Bdk7mIAe%2BELKcqGT%2B36VO7%2BehEvRGbQNAYy2D60i3m7I2a3mAV0iKWxCRRTrL0xEjKcydn9MUmI25AC1f9VMPq2hmKtwb%2FUxh2wg9WwIqtEdlFmiD1%2FBwoureXccxAnqxkwfVoJUaK10pntB47Ve%2BMER3sUANrkf1qS52MzioDIBSxpIBOzXxywjhZwyTyC8hU7ELjBd3FSEjM9KkPTxx0wk9I52Th1aXTZ0DmSeMLT72vHtQuHcY5FdEUeSETI3tOYKB59ikv24ixQMSr0JnxPTreTe8GNK19yO16xDsEXFUgpBevtgmFUrzlbAIHQ8VZCMHCBUA66dNKuS3dVN96L3AqPV0hs0rarSt0nDPm%2BhsMPR5pFMzdad%2B58%2BH2daeBo8GDicV8ySu937v7wWe5%2B38LzPMedc9TRr%2BGJfFn9CNm5GrCfaBwO8D1k2rRKWGg3QHSDCy%2BQUNOn8IKxSXlSUMlvFHt9HOIlJjqV1Gq3B1Uy26kVQ4S9SPP%2B5hi%2BGOHgbuCz8%2Bh77SLmUpHhkFu%2BMKGHt70GOqUB79IK0DeBqRv9pWVcolmzYDPxj1bcWoipMrPqaBKi9UerJra6DwJKUmrK%2Fpsgl6pgUfEsx8zPggMoghWSVreBau6BEk%2F%2FjBKBJ1pnwdn%2BAjDksND2xb6vxGOruv2m0puDA5Vkhd%2Fv2e6QytN8%2F5n3aoAk7W2ogOzcJYMB3CnizHmACJtsqAloVMQVQ8%2BDKyFrn5dGiCdBa4ijlgV6WlWxdZ7gQaID&X-Amz-Signature=712f9a0230f05cbb7001fb5e5a2bcbc4820c382c37e39b894640b0a9cf6e26fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
