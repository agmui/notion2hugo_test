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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFLLQNG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2TFURgsD5ESjFB3lquu83N%2B9HFoN2qTBvqL050rkpgIgIQyxtwdGqipr51ECOJhM9PZJrSq8YO8GN%2Bk7HCej%2BxQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPus1PJFVLuMBPNG%2BSrcA5P%2B6Vt4%2B7%2FMVXGcVaoN9IxIByNxWOjlpapChz6Jfbx0iu%2Fr%2BfRhplGUUsByK2T4%2FSfiUoKAdEhNUbzng4J37jPmnniSAL%2BVfEsM1Bu1HnqjSI%2B1Y%2F3AgvUzdBFTM71QyxKGR4KV9frEIooHdbaeh0cRGWZlCmakwoRvHOnMxDJaNbA9yJEIC1HkJNHFaSTWIYJtXWDwl9%2Bc9v%2F1GYG8X9PgbtrL%2BfMHvWajTadv3wjMnqp8NYNyIehN9nZLnxGwemGvsO%2BsBJLPiyuHvi6RFgkelULsEFsEp3yrTYzyc2GJcAWTzCyMGakZpIlbVblrOiBRfi31nYWk%2FqIi86ul1JlgDv3q1wGx3p%2F3wWqKM0Ne0LzqiYYSG%2FzfvDTqhRm0Li%2F1uHtmO8I%2BsY8oxUmPLvAW%2FfFt7gcTvuX%2BGt8lBu16PGjckpIFL%2FN7CTWLvHq302efUCetsCDumRDUqItkC3NTdG0PThXyxCACp6De497dPyS8EP5SyqO%2B4BfMhnawyVaBLBe3AVoopNonYPMuRPO1jUp%2FLC8y8%2F7Z7wFk1bvw0%2FD0yL4a9jgSUCR226sO2%2FgdHSjnsgShOrr8a0BY1FdZ5mnMzJadkmhBM%2Fs0rn5nOYi6qTkMr1ybAx5DMOPc%2Bb8GOqUBdj5LidHqogDSrh%2BjoZaHhnYOgW3IVtInWER%2B4mhZ5M1kSbKoKp%2Be2oojKDYXdgHJu%2FLnfqNs090S6dm8yiOBmIJJO3vP%2BbEdUTx1YWFY7oJaC900ZTDoYdKJYsFx0DrojbK7MOYbkH%2BeOU41E0xkoS0SPfNVmepa78aL%2Fs%2BTszOJUt4%2BmYFhrSZijSeVHBIfxQCAUNbqopA7ubZHzL5KD9To%2Flfe&X-Amz-Signature=092e63e4c824d8fe0a270e67dacd32da91efd9ea422f22ef83ac5180a284a03c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZFLLQNG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt2TFURgsD5ESjFB3lquu83N%2B9HFoN2qTBvqL050rkpgIgIQyxtwdGqipr51ECOJhM9PZJrSq8YO8GN%2Bk7HCej%2BxQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPus1PJFVLuMBPNG%2BSrcA5P%2B6Vt4%2B7%2FMVXGcVaoN9IxIByNxWOjlpapChz6Jfbx0iu%2Fr%2BfRhplGUUsByK2T4%2FSfiUoKAdEhNUbzng4J37jPmnniSAL%2BVfEsM1Bu1HnqjSI%2B1Y%2F3AgvUzdBFTM71QyxKGR4KV9frEIooHdbaeh0cRGWZlCmakwoRvHOnMxDJaNbA9yJEIC1HkJNHFaSTWIYJtXWDwl9%2Bc9v%2F1GYG8X9PgbtrL%2BfMHvWajTadv3wjMnqp8NYNyIehN9nZLnxGwemGvsO%2BsBJLPiyuHvi6RFgkelULsEFsEp3yrTYzyc2GJcAWTzCyMGakZpIlbVblrOiBRfi31nYWk%2FqIi86ul1JlgDv3q1wGx3p%2F3wWqKM0Ne0LzqiYYSG%2FzfvDTqhRm0Li%2F1uHtmO8I%2BsY8oxUmPLvAW%2FfFt7gcTvuX%2BGt8lBu16PGjckpIFL%2FN7CTWLvHq302efUCetsCDumRDUqItkC3NTdG0PThXyxCACp6De497dPyS8EP5SyqO%2B4BfMhnawyVaBLBe3AVoopNonYPMuRPO1jUp%2FLC8y8%2F7Z7wFk1bvw0%2FD0yL4a9jgSUCR226sO2%2FgdHSjnsgShOrr8a0BY1FdZ5mnMzJadkmhBM%2Fs0rn5nOYi6qTkMr1ybAx5DMOPc%2Bb8GOqUBdj5LidHqogDSrh%2BjoZaHhnYOgW3IVtInWER%2B4mhZ5M1kSbKoKp%2Be2oojKDYXdgHJu%2FLnfqNs090S6dm8yiOBmIJJO3vP%2BbEdUTx1YWFY7oJaC900ZTDoYdKJYsFx0DrojbK7MOYbkH%2BeOU41E0xkoS0SPfNVmepa78aL%2Fs%2BTszOJUt4%2BmYFhrSZijSeVHBIfxQCAUNbqopA7ubZHzL5KD9To%2Flfe&X-Amz-Signature=6d586718aef14806bebb9ec37d06b3abb661919f58d56c53a940baaa7533e9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
