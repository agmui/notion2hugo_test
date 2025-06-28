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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK6KFO6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxbK688HRltvoX5I%2BE3ErdnCTf3GhvrMs72J6LD%2FxKLAiEA%2FVQmc1DOLGzmVN25oimS%2B8YLvIfz9kXAyjlkZ0eSiNsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc%2BWvV5ywwlMQcIQSrcA01IiSNROjGRwq%2Bg%2Fqhlo3IVD%2FJUX7POFAdJV21rnK25dDuxIBX5DQiu%2BEAPZnlhRq4Q1V%2Fk5bF2kQi0XBf%2F%2FfQvFLzgFSj6r7hl8DdF5%2BnlWDG0PoO1ivGJHx4E%2ByI1OjryVfeqDB%2B1Qnu1VaPUAo5rO5z3Z8ydC%2B985zQ2cHT5cFAtts3tZNS07%2F6ay6n9eMM4ahg%2FOdBonQeg9gEsfPQ6RhaYu39JlcYSTf%2BYTJOljArMnjZ7XLfbr4hEzP%2Bh69WZUdT5i0ckqe62d3fyN1Bt4YqRuJGtZpIfewUm%2BK9mm0jsK6I0kgwcsAhyKkLE0ahuCbLkscvmiwSAvPQxb8yQHFbv%2BKCmKrMRNkE%2BQm2LMP0uGWgLqaLDebjw1TD8dJpWrO6V%2FnEM4fN2EDN9t9Q%2BdfhA01JmaAuCUjr9jbVaRPuzilBHbz5MdJvOy5VMoahWlZuj0PLLeGvbgQtWFtv3Ha7og7fu4dfIUn2EMvjH5sXDtRn8sFPkvckw%2FANAmvq4Z7AdyCBJYtMHLGqLlIzCsdAKbryVXIbHGuCmj71LXrw995OFRe47NycFz0%2FY9F6YQrcO1%2Fm2nu5Nl%2FNFZwP9Gn5moarQGT4EGmRGbzYKa8JaZuiAgMdDMa2BMLGh%2FsIGOqUBuJ0pDhtY6lCT5PmLQS%2FnzBOFTFDJw%2FVVGWNG%2BN5DYqIlvMsT76QPx4lLPuP0ArMZ7apMOOrD%2F1qumqvQj74yKDPif8XD%2FTI6XpyizY3yB2ZZD1YXJV93yiiwhrE9YXuyOR%2BGnSwHU22Q9L21wrdbiV7mjVdpNBC%2F9%2BOC0J0z1Xqm4ocYPHqTnmNTRJo3U1CSz9yOy%2FhVv7HQhAyOTsiKEqI%2B818s&X-Amz-Signature=4accdae4e0871384cf6bc1108c3e321a9ad2ac3d758d94a36cec797db67254ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK6KFO6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxbK688HRltvoX5I%2BE3ErdnCTf3GhvrMs72J6LD%2FxKLAiEA%2FVQmc1DOLGzmVN25oimS%2B8YLvIfz9kXAyjlkZ0eSiNsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc%2BWvV5ywwlMQcIQSrcA01IiSNROjGRwq%2Bg%2Fqhlo3IVD%2FJUX7POFAdJV21rnK25dDuxIBX5DQiu%2BEAPZnlhRq4Q1V%2Fk5bF2kQi0XBf%2F%2FfQvFLzgFSj6r7hl8DdF5%2BnlWDG0PoO1ivGJHx4E%2ByI1OjryVfeqDB%2B1Qnu1VaPUAo5rO5z3Z8ydC%2B985zQ2cHT5cFAtts3tZNS07%2F6ay6n9eMM4ahg%2FOdBonQeg9gEsfPQ6RhaYu39JlcYSTf%2BYTJOljArMnjZ7XLfbr4hEzP%2Bh69WZUdT5i0ckqe62d3fyN1Bt4YqRuJGtZpIfewUm%2BK9mm0jsK6I0kgwcsAhyKkLE0ahuCbLkscvmiwSAvPQxb8yQHFbv%2BKCmKrMRNkE%2BQm2LMP0uGWgLqaLDebjw1TD8dJpWrO6V%2FnEM4fN2EDN9t9Q%2BdfhA01JmaAuCUjr9jbVaRPuzilBHbz5MdJvOy5VMoahWlZuj0PLLeGvbgQtWFtv3Ha7og7fu4dfIUn2EMvjH5sXDtRn8sFPkvckw%2FANAmvq4Z7AdyCBJYtMHLGqLlIzCsdAKbryVXIbHGuCmj71LXrw995OFRe47NycFz0%2FY9F6YQrcO1%2Fm2nu5Nl%2FNFZwP9Gn5moarQGT4EGmRGbzYKa8JaZuiAgMdDMa2BMLGh%2FsIGOqUBuJ0pDhtY6lCT5PmLQS%2FnzBOFTFDJw%2FVVGWNG%2BN5DYqIlvMsT76QPx4lLPuP0ArMZ7apMOOrD%2F1qumqvQj74yKDPif8XD%2FTI6XpyizY3yB2ZZD1YXJV93yiiwhrE9YXuyOR%2BGnSwHU22Q9L21wrdbiV7mjVdpNBC%2F9%2BOC0J0z1Xqm4ocYPHqTnmNTRJo3U1CSz9yOy%2FhVv7HQhAyOTsiKEqI%2B818s&X-Amz-Signature=b1062dd33c4e7ce4a998756a516afc29ed4cc1b0c44a2ea2a0550679c656368d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
