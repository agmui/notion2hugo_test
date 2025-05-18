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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHXY2TJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK0g1sq2tdYS7CAPF%2FONVLlxYBNBYm4T5KEl9nyoRIWAiEA0rdYBv3FRSa9rFlDxo5sy8DXO2bwQMUorbO9DHJRkooq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOxcYdt%2Buqq3Jv4NGCrcA0tuKFido1%2FdjLnRmA1LHRvrNruzTZ%2BFB%2BtUYlvu%2BVBX8Xjqo1Ll%2FbvvFikp93JQ2r3nyAgAAjPeCYhCxQiEZ11fkI0XLI0MhIGsQ%2FSQust8sDZ8wTIIgHWS43l3d9tMPBB9TIommXQFHAe%2BV8sb%2FwYd%2FxLNDSnIY3M%2FGteUAHopFFsJmOoidIO7oonwiAwLJTZB7n2FP4Wa1m8%2BiQ3pOJHyMhw77TdCWueBu01c6xGgsJlw6D%2FCwRQNzgIjqDTopv1d6PCpK%2BseWxMBWWSDaQGbkQS8agSnVrQgGGAClO4zjI94Dc%2Byu34HeLlZlaC%2F7wbJGkH7F821Nh4ev72s9dV5okQK%2Fg%2FUxik3BDupI9%2FPSkRn%2B%2Bw1xYCLzRG5rNHIQp6gGf5zQIOL4jaUE9%2FmicFFJ%2Bx6HujanvN9cjLu0aOKRTdgShOu07WoqNllZV9692hCwxpeJKgagF5SAqIJX9dLFE%2BtMtw9GduFz17cwx%2BbeLTAv5KwU0ls07Ali%2B32%2F8wBCw1awICdC3oHTYNRTNkxQ5t%2F7Xh1eGGCosxig5RPzNm2axiyHizrXY4ecD%2FzQMSh79SA%2BU5Ig%2F9VlFELTzzw9RBRmkj24I6kDD2PhLrVJEY3qlJN0X6GQCFwMJHnqMEGOqUB6jTBFjgaambvUX8%2FUQS3%2Bs5QH39FRbAwd5EnduPFl4g80chXjlGJIrKcX2iNeAJ%2FemudpGCgZoIltrKOuNOUkRx9kYnOMRMFOhw4V%2FYDPQWutEW6gILgBgWVfxxgKL3iFtIsiQO5A0md2oQMyKVZ%2FUSlHw5724lIvzT00GFWAnH%2BsY4L12Vyyie0aiEzW4F5bUKZrrYpQfhVsc1ijnzFETViK9dA&X-Amz-Signature=c052fa4fff30b3f566df434af48e870330529b6867a30b65f0f923e0b9038bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHXY2TJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK0g1sq2tdYS7CAPF%2FONVLlxYBNBYm4T5KEl9nyoRIWAiEA0rdYBv3FRSa9rFlDxo5sy8DXO2bwQMUorbO9DHJRkooq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOxcYdt%2Buqq3Jv4NGCrcA0tuKFido1%2FdjLnRmA1LHRvrNruzTZ%2BFB%2BtUYlvu%2BVBX8Xjqo1Ll%2FbvvFikp93JQ2r3nyAgAAjPeCYhCxQiEZ11fkI0XLI0MhIGsQ%2FSQust8sDZ8wTIIgHWS43l3d9tMPBB9TIommXQFHAe%2BV8sb%2FwYd%2FxLNDSnIY3M%2FGteUAHopFFsJmOoidIO7oonwiAwLJTZB7n2FP4Wa1m8%2BiQ3pOJHyMhw77TdCWueBu01c6xGgsJlw6D%2FCwRQNzgIjqDTopv1d6PCpK%2BseWxMBWWSDaQGbkQS8agSnVrQgGGAClO4zjI94Dc%2Byu34HeLlZlaC%2F7wbJGkH7F821Nh4ev72s9dV5okQK%2Fg%2FUxik3BDupI9%2FPSkRn%2B%2Bw1xYCLzRG5rNHIQp6gGf5zQIOL4jaUE9%2FmicFFJ%2Bx6HujanvN9cjLu0aOKRTdgShOu07WoqNllZV9692hCwxpeJKgagF5SAqIJX9dLFE%2BtMtw9GduFz17cwx%2BbeLTAv5KwU0ls07Ali%2B32%2F8wBCw1awICdC3oHTYNRTNkxQ5t%2F7Xh1eGGCosxig5RPzNm2axiyHizrXY4ecD%2FzQMSh79SA%2BU5Ig%2F9VlFELTzzw9RBRmkj24I6kDD2PhLrVJEY3qlJN0X6GQCFwMJHnqMEGOqUB6jTBFjgaambvUX8%2FUQS3%2Bs5QH39FRbAwd5EnduPFl4g80chXjlGJIrKcX2iNeAJ%2FemudpGCgZoIltrKOuNOUkRx9kYnOMRMFOhw4V%2FYDPQWutEW6gILgBgWVfxxgKL3iFtIsiQO5A0md2oQMyKVZ%2FUSlHw5724lIvzT00GFWAnH%2BsY4L12Vyyie0aiEzW4F5bUKZrrYpQfhVsc1ijnzFETViK9dA&X-Amz-Signature=7af494fabdc7ba7340f09aec789e2b725e5f08101c5a638b0e745fea13580370&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
