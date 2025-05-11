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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGB6GE6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8FlbUt4T8mwIlw395uxavGuViQx%2FXnfN18k7VRCQTsAIhAJU8ttvzJOrAakvYzABAWBgRxlYVBYKqHwyKq5ClzBAeKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhuD4YzZdacj%2BwyXUq3AM1S2n5g3hkx08zonxGUygUJgdaXI1dHeqN9TnIwn66ZsUFzLS%2BcMUMxBAvhF46Yfmg8PCaLKz1qrk9%2BDhGj5BoEayGLAWNbVQQxLuMUFTpudX1Z9pwljNo9mHdFIokdMWzOGMpa0Rql9e%2FhHs4z0ElKikfSS7prKbQo%2FfbKRQXf9iXc6Bftw5YoUi%2BZX94bIwCMVcx9rBedWwesqM3CAh%2FTzPvYw2s%2BZqdOdIGvydz0ODVFWL9KC%2BFyOg3q%2BDT5zdEDTXq3AuScX0nSelOIVRm7yaE3JT5F5W1gyOjlBiVWlptM4E1PpEiFKLaC19XPC8ZBLLcXO4neab4nvUrKuNL2IMkoDI3W1Y6MhudSereAV6Y3s7Kva2R0Et3lw1IkvBZXfYQjhZ%2BkqZiK4e6rMltKWXuu8yjvvH0xSJuesD6FO1fdY71td5DBShxzVnOE7dlTTEayfW24GS4qSz7qLgDoq%2B9aa8c3irdhjrBhOPqlu4wYgIXU0QqtiKUaazZ01XhZ135hhrusF2hR9ZvnB7x8WNDoI%2BxRyLTcrUVUobPFPo9fkEEnQFLWyWLivQ0xJ46hWAtCXNCuFqZsH%2FowKYwX%2BJk6FjwvAn8KlTOeDzcJRt3tcJvBbWjQJfVOTCC3IHBBjqkAaihZpz0o8jdYUqgqPboUNl21F9K6zf7jzDZN6zPRpY8i34fHKOR3%2B8ez20nwNrFNAKY0McXsjcLFodLX1qbzwnY3BaiKdGRYnGStA6%2BXQ44%2F%2Bclm7PUIA8ZVjpbFcz9TAFtrg6Ol9PTMz6PU2IL6xOAD3rWtfj%2Fe08jCfPH5MytCWotvq5mz41Pq2PqBVcNUlQjw55fgFlx4A2S3wGwM0pPs%2FpP&X-Amz-Signature=fbcff800e68087ee09a68a8ce37a50d411385765de9e9d1bc8c13240bf2b5ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGB6GE6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8FlbUt4T8mwIlw395uxavGuViQx%2FXnfN18k7VRCQTsAIhAJU8ttvzJOrAakvYzABAWBgRxlYVBYKqHwyKq5ClzBAeKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhuD4YzZdacj%2BwyXUq3AM1S2n5g3hkx08zonxGUygUJgdaXI1dHeqN9TnIwn66ZsUFzLS%2BcMUMxBAvhF46Yfmg8PCaLKz1qrk9%2BDhGj5BoEayGLAWNbVQQxLuMUFTpudX1Z9pwljNo9mHdFIokdMWzOGMpa0Rql9e%2FhHs4z0ElKikfSS7prKbQo%2FfbKRQXf9iXc6Bftw5YoUi%2BZX94bIwCMVcx9rBedWwesqM3CAh%2FTzPvYw2s%2BZqdOdIGvydz0ODVFWL9KC%2BFyOg3q%2BDT5zdEDTXq3AuScX0nSelOIVRm7yaE3JT5F5W1gyOjlBiVWlptM4E1PpEiFKLaC19XPC8ZBLLcXO4neab4nvUrKuNL2IMkoDI3W1Y6MhudSereAV6Y3s7Kva2R0Et3lw1IkvBZXfYQjhZ%2BkqZiK4e6rMltKWXuu8yjvvH0xSJuesD6FO1fdY71td5DBShxzVnOE7dlTTEayfW24GS4qSz7qLgDoq%2B9aa8c3irdhjrBhOPqlu4wYgIXU0QqtiKUaazZ01XhZ135hhrusF2hR9ZvnB7x8WNDoI%2BxRyLTcrUVUobPFPo9fkEEnQFLWyWLivQ0xJ46hWAtCXNCuFqZsH%2FowKYwX%2BJk6FjwvAn8KlTOeDzcJRt3tcJvBbWjQJfVOTCC3IHBBjqkAaihZpz0o8jdYUqgqPboUNl21F9K6zf7jzDZN6zPRpY8i34fHKOR3%2B8ez20nwNrFNAKY0McXsjcLFodLX1qbzwnY3BaiKdGRYnGStA6%2BXQ44%2F%2Bclm7PUIA8ZVjpbFcz9TAFtrg6Ol9PTMz6PU2IL6xOAD3rWtfj%2Fe08jCfPH5MytCWotvq5mz41Pq2PqBVcNUlQjw55fgFlx4A2S3wGwM0pPs%2FpP&X-Amz-Signature=1a7a03fce9d42f5ae6a2b52e4f8f8dff3bdc109ff2d0197276a8243352e0fa6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
