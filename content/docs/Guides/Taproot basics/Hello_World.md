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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7OT2RG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC%2F8T%2BQ7pv27mHinFLg9U2RebvXeQwfO6I8aCx1DHZ48AIhAKWefMVgV2OqfCv4YYWVtEHA%2BwypW1V0UIEDhWF89TTGKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTOKdcJTpTers6%2Btgq3APHNIHv5rv9skJK4KYctsf0FCadCYhDwtMclZy0BWXrtKOROF6AfFz%2BYF7M1ZkrP%2BMcG6j9GmCTS34VZ1gUMr5r6y0M1woRoqCs7XSI8KSsgoMCtJAl92er69QJal%2BGWoOB%2Fk9VNWfsCbAyYqhpaddtEm0tqVlutWQBbcamPodFIMZm0p0D0f0URZ6S67itAaJK67Si2vbuflpPCWYZDz035pZqO1oNEsleMUdYT88cZ00I37RTenXh8wxHiJA8BvHsTuDhWdHSX4%2FAOZqlzpLXNzizvrcSiBFjy3%2BPgl8idHIerR9SAo0BDjTUEJkNhHQOi8J0dz14j2BcWDWsJ%2BGgRJRk9q84jF%2FkSSXtPR4U9BYHpt4H%2B9gh1MT0BF6ZJxXa7%2BVHFrqKjFfUd09mUuSpZYTGJDkpexhvX1jMQ%2F9XMuJjZmZw9Cx5osyaOKhtDMsTxqVETF8Nux%2BMQLRm30n4vp3ux%2B4SMw8LhJxfK9yTb4nSrz8usUtlyGSgEV%2B13bEwB3419r40%2BG5ygGigoeEzW%2F%2FVKS0O5qbTYb7QvOwgHMLEvnRoDFkMU%2FfJjyoea6Sv8RMrjwwKFHVf%2BUUSxhNOpKQiwm4OFa3qz5c26CbxdS6nhgqz96ytdgI4qzCw77K%2FBjqkAXDZRfp5nisKOUjQ1xVei%2FxTUvbTbUvGmAYiaQn4La%2FOLOv5LrmiRZ853dtXvG9DEDMrWmo6I2hNrjDF2p%2FKtgM8AxAtiDu8LnLgo4feDSVdm89lm8UKW2CdodLZCZ6lGE6tTuV%2Fcj2rfBr0cS5QyzZZrnp%2FQwcEN3bPapl9YS21yhP2FIO3hNJh61nM1ncoYiDu3hs7ZE%2BjpnnuNsIwSn87%2FknA&X-Amz-Signature=0440e5730c7d361d852c5ed438a4484b75699a3c3deabf6915289830a08e4af8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y7OT2RG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC%2F8T%2BQ7pv27mHinFLg9U2RebvXeQwfO6I8aCx1DHZ48AIhAKWefMVgV2OqfCv4YYWVtEHA%2BwypW1V0UIEDhWF89TTGKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTOKdcJTpTers6%2Btgq3APHNIHv5rv9skJK4KYctsf0FCadCYhDwtMclZy0BWXrtKOROF6AfFz%2BYF7M1ZkrP%2BMcG6j9GmCTS34VZ1gUMr5r6y0M1woRoqCs7XSI8KSsgoMCtJAl92er69QJal%2BGWoOB%2Fk9VNWfsCbAyYqhpaddtEm0tqVlutWQBbcamPodFIMZm0p0D0f0URZ6S67itAaJK67Si2vbuflpPCWYZDz035pZqO1oNEsleMUdYT88cZ00I37RTenXh8wxHiJA8BvHsTuDhWdHSX4%2FAOZqlzpLXNzizvrcSiBFjy3%2BPgl8idHIerR9SAo0BDjTUEJkNhHQOi8J0dz14j2BcWDWsJ%2BGgRJRk9q84jF%2FkSSXtPR4U9BYHpt4H%2B9gh1MT0BF6ZJxXa7%2BVHFrqKjFfUd09mUuSpZYTGJDkpexhvX1jMQ%2F9XMuJjZmZw9Cx5osyaOKhtDMsTxqVETF8Nux%2BMQLRm30n4vp3ux%2B4SMw8LhJxfK9yTb4nSrz8usUtlyGSgEV%2B13bEwB3419r40%2BG5ygGigoeEzW%2F%2FVKS0O5qbTYb7QvOwgHMLEvnRoDFkMU%2FfJjyoea6Sv8RMrjwwKFHVf%2BUUSxhNOpKQiwm4OFa3qz5c26CbxdS6nhgqz96ytdgI4qzCw77K%2FBjqkAXDZRfp5nisKOUjQ1xVei%2FxTUvbTbUvGmAYiaQn4La%2FOLOv5LrmiRZ853dtXvG9DEDMrWmo6I2hNrjDF2p%2FKtgM8AxAtiDu8LnLgo4feDSVdm89lm8UKW2CdodLZCZ6lGE6tTuV%2Fcj2rfBr0cS5QyzZZrnp%2FQwcEN3bPapl9YS21yhP2FIO3hNJh61nM1ncoYiDu3hs7ZE%2BjpnnuNsIwSn87%2FknA&X-Amz-Signature=3aa73a6f8c31af108e7fb45458a5e9affb83022d8e78cd950a269b60e30480bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
