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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUSKICT%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUAxwGlOH1t6pgQAIE1wwvG24Z%2BasYhgtvMIUOPqCdPAIgE3SCA%2Fk22G9KkckH3VCfq92QOAI8FHV5waQk3viHL7EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoG%2Bx8yabe5unae3CrcA1ijF1ZKqKMROQw4gXq%2BZzO3btVNhYvmwpkkmb2%2FcFb%2FLNmie3wkaUYClc6c9Bq2zhnFgTY1PfLaMuiBVwQLAVLLiKLLf5G3dA0HJVYr5fzSGnFns1mPVa2tO7%2BvRqz3cNIwic1Z6f67iAr1n95JXcmCd4CMRZoJ%2BZ%2BK%2BBEnrGvLBYAxJOGGEli%2FEzXpS6c5%2FfzXU9Q%2FioxmJK7hoEFomPV0zCXPtsBo1S0PLCSBs5ByO5ZAW8a34podtmNEi6E9G6feUbdNyKBEWjT88tHaX%2BsHlhXzBxBX7%2BsQNA%2Fq9ToDxrGcab9emk97R4IP2RKUU1t9VjBpeRn0rp5hLXjGokRG6YuTMzk1MS0z0MY3ILSYqdEmVRujzCKpuj7TymJS%2F6qOmnG5NrCra0FMbXOV2DaEW9lZnBlOHsm5CJFgsh5PI350CFPF6MexS1OsTJ4aNbQGHRP5jrJOXuL79U3uDaisl%2F9rJRUol0H4j6ZbUpv5xEvbOjopHIdjOd6mfjjx1oapGWUSDa%2BTBPtjedBvrVoUhniDPPY7UMMrPlvCibDR4pUrr2iGWfKnJLjqkyc1%2F%2Fp9EsBvI9YEJJyPBskurNlOwuLjDOVvM607nxNaVdDpxv8O0dlrRdNfPURKMOLjqtMGOqUBYcjn1JTkHxye78zGEYU0dieLJM0XTecIsxsxShstvCj7BYN01iGiovLk2y59LPNSuZb0cQVD%2Ff3CrkRhaYcaeUWjOy0MWO%2F0zVLtUWhtLqhvSQkYih2FyxXUsmcbVF6rH%2F%2BkPd9Py%2Fg%2FTr4Cgz0jwofewH6ME8LqCAtfzWyGpmbvGzAnnGd4WDXsg63IwwrI7Rdl3pWj95ap7wLt%2FgBIeqAAPfL9&X-Amz-Signature=b2fd6126e58d6b4ab22f7929b3722b09bddf3ad8e270a6eed7d5ef5d927bc259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZUSKICT%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUAxwGlOH1t6pgQAIE1wwvG24Z%2BasYhgtvMIUOPqCdPAIgE3SCA%2Fk22G9KkckH3VCfq92QOAI8FHV5waQk3viHL7EqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoG%2Bx8yabe5unae3CrcA1ijF1ZKqKMROQw4gXq%2BZzO3btVNhYvmwpkkmb2%2FcFb%2FLNmie3wkaUYClc6c9Bq2zhnFgTY1PfLaMuiBVwQLAVLLiKLLf5G3dA0HJVYr5fzSGnFns1mPVa2tO7%2BvRqz3cNIwic1Z6f67iAr1n95JXcmCd4CMRZoJ%2BZ%2BK%2BBEnrGvLBYAxJOGGEli%2FEzXpS6c5%2FfzXU9Q%2FioxmJK7hoEFomPV0zCXPtsBo1S0PLCSBs5ByO5ZAW8a34podtmNEi6E9G6feUbdNyKBEWjT88tHaX%2BsHlhXzBxBX7%2BsQNA%2Fq9ToDxrGcab9emk97R4IP2RKUU1t9VjBpeRn0rp5hLXjGokRG6YuTMzk1MS0z0MY3ILSYqdEmVRujzCKpuj7TymJS%2F6qOmnG5NrCra0FMbXOV2DaEW9lZnBlOHsm5CJFgsh5PI350CFPF6MexS1OsTJ4aNbQGHRP5jrJOXuL79U3uDaisl%2F9rJRUol0H4j6ZbUpv5xEvbOjopHIdjOd6mfjjx1oapGWUSDa%2BTBPtjedBvrVoUhniDPPY7UMMrPlvCibDR4pUrr2iGWfKnJLjqkyc1%2F%2Fp9EsBvI9YEJJyPBskurNlOwuLjDOVvM607nxNaVdDpxv8O0dlrRdNfPURKMOLjqtMGOqUBYcjn1JTkHxye78zGEYU0dieLJM0XTecIsxsxShstvCj7BYN01iGiovLk2y59LPNSuZb0cQVD%2Ff3CrkRhaYcaeUWjOy0MWO%2F0zVLtUWhtLqhvSQkYih2FyxXUsmcbVF6rH%2F%2BkPd9Py%2Fg%2FTr4Cgz0jwofewH6ME8LqCAtfzWyGpmbvGzAnnGd4WDXsg63IwwrI7Rdl3pWj95ap7wLt%2FgBIeqAAPfL9&X-Amz-Signature=0aaac885d43b3123d0a278cdd7cf34b5106e6db25bfd0d4993902384e6284aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
