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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSQMU4X%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChstmyYDba4Eq5KEQAahp6PXiXY0kpTlo%2Fhs3sGoXSkwIge4%2FWsGoo8kjLvslkdceqzLZNKnE5VewmHs1OgNR9cxYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODWLWzq5BCztvuT3SrcAw6EpK3MXpgFIgPQpHSFLSmv59pCwlkLoz6tkVLK4Duod2bLw6r2S%2FVY6PSzwlvGgddmNIwdzuuXYEq6QipM7tj61KeUObGG%2BdNpnuc5APUyaA%2BsmGhto6y0DsPXKH4CO57HtVs8QdU8mr1%2BeKiaOV1SZxwLAn0oept86UODWGQFg9tyZPPs1tgbDHig%2Fx0RIxU61i0qmEVBmxCog00IVxNU%2BeR409n0ndaQNpZ9ota03Tj0BukGy7ZH8cg3giqYaoPszNy5ZT6gW3a0PS%2Bx%2F2C5j3tg2KZ6AbBxcHEnFvkpS%2FksaEpj0%2FERbYvQKIGYW5I6fEnPTLYUXw4OowfCDdqklu%2BZ7AkAuUshz5o%2FfQo%2BRZxrcByIV6CIIOpxR7dUALmam2cK7kzrsv4Mcv2u7k2MZaoYemqip2ZN4m%2FauQGItefPU2HlMh%2Bvyee93FW3x5i4kX03l%2B2Uny%2FzXpYAIcrbvxXTU5F%2FxO8noeSyKghbhbQosMestx%2BD3aML0qanWmDbhjPCKtw8rH39AMjxqHFG%2FU3cUSgSQnhDmR%2BZFYYbJGVBW6xN0x9htf4ebZqSqjAxqOk8hriJJjAoTP0noxa8uOcqQW6HZLDyAQ9oeEHvEwPdZppDaj67aJrgMPzur8QGOqUB5wCSWWbqYNy33O5uwu7QUlokaKtqExioKhUzQBzklT6W4lbTbd17J%2BrFJ1N%2FWDyfprjYOXxVAK1LQAUIxyfP5CyqnntKdrq92HcLAzAwWEgeuY1b4hv6yO2KS80QYHrHr4QlQR23x3UOzzkytKMCgCJIJi%2BCcYlhVnvyovITbtTEeJ7RNTvF3HLqtwpuCD8iF1jFVWSPYVlUhfzpl1XQHcmOE6W6&X-Amz-Signature=0b69546af8128405fc8123e5e62250cbc60b769f146d061d7be49fc713986114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSQMU4X%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChstmyYDba4Eq5KEQAahp6PXiXY0kpTlo%2Fhs3sGoXSkwIge4%2FWsGoo8kjLvslkdceqzLZNKnE5VewmHs1OgNR9cxYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODWLWzq5BCztvuT3SrcAw6EpK3MXpgFIgPQpHSFLSmv59pCwlkLoz6tkVLK4Duod2bLw6r2S%2FVY6PSzwlvGgddmNIwdzuuXYEq6QipM7tj61KeUObGG%2BdNpnuc5APUyaA%2BsmGhto6y0DsPXKH4CO57HtVs8QdU8mr1%2BeKiaOV1SZxwLAn0oept86UODWGQFg9tyZPPs1tgbDHig%2Fx0RIxU61i0qmEVBmxCog00IVxNU%2BeR409n0ndaQNpZ9ota03Tj0BukGy7ZH8cg3giqYaoPszNy5ZT6gW3a0PS%2Bx%2F2C5j3tg2KZ6AbBxcHEnFvkpS%2FksaEpj0%2FERbYvQKIGYW5I6fEnPTLYUXw4OowfCDdqklu%2BZ7AkAuUshz5o%2FfQo%2BRZxrcByIV6CIIOpxR7dUALmam2cK7kzrsv4Mcv2u7k2MZaoYemqip2ZN4m%2FauQGItefPU2HlMh%2Bvyee93FW3x5i4kX03l%2B2Uny%2FzXpYAIcrbvxXTU5F%2FxO8noeSyKghbhbQosMestx%2BD3aML0qanWmDbhjPCKtw8rH39AMjxqHFG%2FU3cUSgSQnhDmR%2BZFYYbJGVBW6xN0x9htf4ebZqSqjAxqOk8hriJJjAoTP0noxa8uOcqQW6HZLDyAQ9oeEHvEwPdZppDaj67aJrgMPzur8QGOqUB5wCSWWbqYNy33O5uwu7QUlokaKtqExioKhUzQBzklT6W4lbTbd17J%2BrFJ1N%2FWDyfprjYOXxVAK1LQAUIxyfP5CyqnntKdrq92HcLAzAwWEgeuY1b4hv6yO2KS80QYHrHr4QlQR23x3UOzzkytKMCgCJIJi%2BCcYlhVnvyovITbtTEeJ7RNTvF3HLqtwpuCD8iF1jFVWSPYVlUhfzpl1XQHcmOE6W6&X-Amz-Signature=a375a4250b325f2fa8c795e05c2538d64b19a8efe27c563f15907c3e26da89df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
