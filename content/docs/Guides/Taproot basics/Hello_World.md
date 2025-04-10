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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEGJYUZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCG0IFhBqVvsQ1Eyk93LqCKZ49GOstlVsCsY1UCVrB%2F5gIhAJ1zrsvpdDaoORfbYsLRBp%2FhQ%2BnRebm6%2F3CpIviSxWTjKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRNYRdTkTj3EFCk6Uq3AMaRQ6X%2BQYmsx0Ec6u5HBvj0z56biRan7FIYGVk%2FG1bBpYtr4yfh0gGF%2Fv0nKU8bNxIpZgbzNE%2BjwreU%2BOdN22hPcnhC8DuOpaYLFSPLVo9P7LMJynQwpwFCHgXT6n2CD%2BzR4aK%2BsbhRmJeoN1Qh0K6dihDLDyXoKp2qmOW1DsCceW0iyTJmcNAX0e1%2FR%2BksH64um5quD0zz7d%2FDDtph4RwJYRvdc%2Be%2BvvXyrKN9QM0uRlgHzdbx%2BJFrCwXO6xYltyEJuev1daY1qKTln7lh19NM9RtmW%2BWHsp7PEUfbFke6UCfjAvuztuys42yTSp7dhIXUNqhW8p%2FNAVgN2lfD0u8ght2BUJN%2BGQZWiHH8oLQ0d3K9AWtU6x%2BPnr2AHBpnlTkKoqrkfwCJW2yuS19WB%2BAJtqytHP83NRp%2FelyWFNc5a1RhokyMbjbyu8ABk4bz%2Fwh3BQhNKLGUcAKuBGde1Ymjdzr3KPr3smvaheHCaOH%2BOZLiMn0w0SNlDgKkPexOr1qBOeBs7VIGJe%2BNPlcjuFpczvcT%2BICrbOjjVuDeb656AtYvlNu7jiwE74%2BBxfvTCjWa1G6Pss91H69kNcFtTGHr8ZNgpG%2FtDpBaj1HRW27mkeE6GIywjdHiLa%2BQTCD79%2B%2FBjqkAZ2hKrCYzp2gOqVwbCWsruaVMCTbyuWGzuuMbkllHm0jeK%2B4XPuGef3Rmg73rgvAwTQb4xDZYU0rALRwKY5M1BlbxVChEHVLkowz%2FFJyk4k9UH8U%2FURXtLZmWZTE2Jdj%2FcD9aHrqzMiw%2B%2BnBD1iTiBQ6a27%2FkVu1oeSCTJzAntU2Mkkq54qqz5LdlDTA%2BFtVRw6ZKqd0XJ9bpndW%2BbuM21DE1pHG&X-Amz-Signature=2a27284eaf621093c41a87c5c2cdb025e6844ea8bd70324b5e29600d92956e31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEGJYUZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCG0IFhBqVvsQ1Eyk93LqCKZ49GOstlVsCsY1UCVrB%2F5gIhAJ1zrsvpdDaoORfbYsLRBp%2FhQ%2BnRebm6%2F3CpIviSxWTjKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRNYRdTkTj3EFCk6Uq3AMaRQ6X%2BQYmsx0Ec6u5HBvj0z56biRan7FIYGVk%2FG1bBpYtr4yfh0gGF%2Fv0nKU8bNxIpZgbzNE%2BjwreU%2BOdN22hPcnhC8DuOpaYLFSPLVo9P7LMJynQwpwFCHgXT6n2CD%2BzR4aK%2BsbhRmJeoN1Qh0K6dihDLDyXoKp2qmOW1DsCceW0iyTJmcNAX0e1%2FR%2BksH64um5quD0zz7d%2FDDtph4RwJYRvdc%2Be%2BvvXyrKN9QM0uRlgHzdbx%2BJFrCwXO6xYltyEJuev1daY1qKTln7lh19NM9RtmW%2BWHsp7PEUfbFke6UCfjAvuztuys42yTSp7dhIXUNqhW8p%2FNAVgN2lfD0u8ght2BUJN%2BGQZWiHH8oLQ0d3K9AWtU6x%2BPnr2AHBpnlTkKoqrkfwCJW2yuS19WB%2BAJtqytHP83NRp%2FelyWFNc5a1RhokyMbjbyu8ABk4bz%2Fwh3BQhNKLGUcAKuBGde1Ymjdzr3KPr3smvaheHCaOH%2BOZLiMn0w0SNlDgKkPexOr1qBOeBs7VIGJe%2BNPlcjuFpczvcT%2BICrbOjjVuDeb656AtYvlNu7jiwE74%2BBxfvTCjWa1G6Pss91H69kNcFtTGHr8ZNgpG%2FtDpBaj1HRW27mkeE6GIywjdHiLa%2BQTCD79%2B%2FBjqkAZ2hKrCYzp2gOqVwbCWsruaVMCTbyuWGzuuMbkllHm0jeK%2B4XPuGef3Rmg73rgvAwTQb4xDZYU0rALRwKY5M1BlbxVChEHVLkowz%2FFJyk4k9UH8U%2FURXtLZmWZTE2Jdj%2FcD9aHrqzMiw%2B%2BnBD1iTiBQ6a27%2FkVu1oeSCTJzAntU2Mkkq54qqz5LdlDTA%2BFtVRw6ZKqd0XJ9bpndW%2BbuM21DE1pHG&X-Amz-Signature=6894ce0e2a46262896ff6c0bd9b63617e814d86e649e1b9170629ef2c3737095&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
