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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMUENBK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDOgI6LTVTjR3KO7O6HLlU8JiS%2BjU%2Bnw6LG1JdB24W6IQIhALqJk%2BSmsrXu7ACrwtAmiNNksaJw5vWSsRktT%2BFANyL%2FKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydXhqzQb9%2BWyXEIHEq3AN2cflA%2Bw3GtWY6Msn0qCxfXY9JLqqNQD6dj5Ra3Y0IlN%2BVJtNQgaJdyce7C0GkV92wNcDufuUXRljhqUcUnWu0Nj7KkKqsXiaRQQ%2FP3rcxur0tNzwH19EQDmAyShk9leXNZlR01rtiJvxiqPc6%2FoSMwF2TLfnnQ53zFgsxddLJK5v%2B9UL5QhT00aeQ3TuoJhOEnRmjWaAE3DglRzD7ShnlSfGkbY5xE8UERowWvbS%2FKMdD4iFBht9r4gJhufnFhikHkZemB3%2FjMieSfnS0R9DfYShSI74uSlsKefDEijCvz6Dctf6lWBz9TQAccNFPy0Bmo1YnctB6gkDFSQqN2C8XAL5zIIXdMN%2Fpn4eXhnmoE3VlBHg4xxuiMt7YKiOpYOxJxTZ9BS3%2BFQR6Dv3YEJzPHq5NppIoZC4NzNwiyidGVKgxNGCUpVq13PsL4zRTtRH60gxP5RZ%2Bkn%2B8SgN2hoDywzFEAFlMXP41jH83CV6o1%2BkxYlBx6xa8tQ52VUlOySve6IIbEvHAwnhGjj7ecHwD%2Fd2pOTktZHLkSSrguk%2BtpIgUv5oFDi%2B7w6tQtaj4%2Bjc0eA%2FSKvqNmVx7jLAmzAHKW%2FhoyzkEX5JdXG6%2FyNcRN1GufK%2BztZ0bpqMgRDD%2BktnEBjqkAbSi1Kpqn6btAB1ry2X8FmqIMlkT3qoF0WDiOlF7UXOYrCiFHIP0%2FQiVkOwWyjIPJMO0S1DzDpr24BHNwYzzlj2NqF%2Bxm6gbZj8ONoDwLyKBD2AlzewsO2FcqBrYKwdGyiAJfqCFYkks3rWeRuiHG1yNPHExlQ4IbggWk7f48ne%2B0yw6XSoYT7HANK2zb7RsBW75%2BHFTaekKzqD6jTCTOJCoT8IM&X-Amz-Signature=4986483da231bedc43efc118145930c99083c38cebb99fc9e8f896aa66596a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMUENBK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDOgI6LTVTjR3KO7O6HLlU8JiS%2BjU%2Bnw6LG1JdB24W6IQIhALqJk%2BSmsrXu7ACrwtAmiNNksaJw5vWSsRktT%2BFANyL%2FKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydXhqzQb9%2BWyXEIHEq3AN2cflA%2Bw3GtWY6Msn0qCxfXY9JLqqNQD6dj5Ra3Y0IlN%2BVJtNQgaJdyce7C0GkV92wNcDufuUXRljhqUcUnWu0Nj7KkKqsXiaRQQ%2FP3rcxur0tNzwH19EQDmAyShk9leXNZlR01rtiJvxiqPc6%2FoSMwF2TLfnnQ53zFgsxddLJK5v%2B9UL5QhT00aeQ3TuoJhOEnRmjWaAE3DglRzD7ShnlSfGkbY5xE8UERowWvbS%2FKMdD4iFBht9r4gJhufnFhikHkZemB3%2FjMieSfnS0R9DfYShSI74uSlsKefDEijCvz6Dctf6lWBz9TQAccNFPy0Bmo1YnctB6gkDFSQqN2C8XAL5zIIXdMN%2Fpn4eXhnmoE3VlBHg4xxuiMt7YKiOpYOxJxTZ9BS3%2BFQR6Dv3YEJzPHq5NppIoZC4NzNwiyidGVKgxNGCUpVq13PsL4zRTtRH60gxP5RZ%2Bkn%2B8SgN2hoDywzFEAFlMXP41jH83CV6o1%2BkxYlBx6xa8tQ52VUlOySve6IIbEvHAwnhGjj7ecHwD%2Fd2pOTktZHLkSSrguk%2BtpIgUv5oFDi%2B7w6tQtaj4%2Bjc0eA%2FSKvqNmVx7jLAmzAHKW%2FhoyzkEX5JdXG6%2FyNcRN1GufK%2BztZ0bpqMgRDD%2BktnEBjqkAbSi1Kpqn6btAB1ry2X8FmqIMlkT3qoF0WDiOlF7UXOYrCiFHIP0%2FQiVkOwWyjIPJMO0S1DzDpr24BHNwYzzlj2NqF%2Bxm6gbZj8ONoDwLyKBD2AlzewsO2FcqBrYKwdGyiAJfqCFYkks3rWeRuiHG1yNPHExlQ4IbggWk7f48ne%2B0yw6XSoYT7HANK2zb7RsBW75%2BHFTaekKzqD6jTCTOJCoT8IM&X-Amz-Signature=8fd0e9727cbeada25c40c3a282556c5d801b179f407f668ec6b0929dfae2cb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
