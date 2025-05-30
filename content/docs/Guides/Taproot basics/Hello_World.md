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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DFCMQD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE30WM1UPN%2Fvet0E92wuhzSxCNSeVIcToXpAYg0rk7A1AiEA3sP%2BMBRJJagG45fBjiwOOTp5qGMdM3VQlXqsS0M4RZwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eOk%2BhSUeISXJxiSrcA89J%2FSv%2Fd419D2Y3WmjfRDlrtuDTYBbs%2F8DjJsj8OrQuSYXniYlvwJoWBoYoGTuJ7mBHLLsIUq9X84nbH1jlzyI2J6DAFItdJtqxtsrhSVcn1FEjyCkGDU8wKyKcbchhhqwSMvAXQ%2BYHpYegUEXi%2F2q3p317AVCIVMjAVPkkRqTsuYAJ%2F%2BRyV1uT%2BHE%2FLfsO%2BEpiM4SN%2F%2FLhCV%2BttWuEyNW%2FbxvcniNv%2Fc2%2Bgi1nVbko9pa4GpzgB7N%2FQTqnGCQwzcg5fWsPRU01QD4hwjco5n%2FtPLOmd1CJFV7ZJ5V3%2F%2F3zJ%2FATQQW7sGzXPhuvrWpRmgvGP69NC%2BxisryO%2FNdO4fAmVooTIRJy9FUgt49OZf%2FfV0RITh%2F4ZfTYSp3QNaMPljidKkDLogw6wi7p06sO8e%2FcZLnOvz64YQ13fZH7fUb9sWjgLk%2Fuyt%2Fic5SveDi3o7pAYuAJ0fBhQeo4At0nixUAer8OOqx9s%2FNcEn6GCRuGvibLZ%2FXG2doI2JOBlV1TNbGXeiYA%2FFsPEf7hQ%2FH4XqLA%2Fb7qGqOVrpenAV45i%2FACgrqOOEqBq%2F2%2BqiURbNWLPzzbA5Px53qWLICqNzUxEwpE2ZqZMUwAotP4IAjFjTy%2F23oldmDkWCmbQOGsMJj958EGOqUBo%2F%2BNa9U2vX%2BHE1H%2Fv9e2%2B1xD8HJoYN2sWibsz2jfBnzdY6LV%2B5hmJViC0w%2F4W0uWaKM7Cd7WFAa6WzIs97ZLKcyJbc4%2BUIcECnL0uS90rRlOGDQQh5529q8HYsML0iuqHm%2FPDXUYa0f%2FxauZr05Z1Xw0kYk6jhU217ktPLQhvxcUcTQy8JkgcwyGryfSEls56kZNQFiKFm%2BdjquJoBSUnRs3sW4q&X-Amz-Signature=eeb20fb51ceb95b79fb9b1d2247c57e8095a14749192083df51744dd0216f034&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DFCMQD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE30WM1UPN%2Fvet0E92wuhzSxCNSeVIcToXpAYg0rk7A1AiEA3sP%2BMBRJJagG45fBjiwOOTp5qGMdM3VQlXqsS0M4RZwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4eOk%2BhSUeISXJxiSrcA89J%2FSv%2Fd419D2Y3WmjfRDlrtuDTYBbs%2F8DjJsj8OrQuSYXniYlvwJoWBoYoGTuJ7mBHLLsIUq9X84nbH1jlzyI2J6DAFItdJtqxtsrhSVcn1FEjyCkGDU8wKyKcbchhhqwSMvAXQ%2BYHpYegUEXi%2F2q3p317AVCIVMjAVPkkRqTsuYAJ%2F%2BRyV1uT%2BHE%2FLfsO%2BEpiM4SN%2F%2FLhCV%2BttWuEyNW%2FbxvcniNv%2Fc2%2Bgi1nVbko9pa4GpzgB7N%2FQTqnGCQwzcg5fWsPRU01QD4hwjco5n%2FtPLOmd1CJFV7ZJ5V3%2F%2F3zJ%2FATQQW7sGzXPhuvrWpRmgvGP69NC%2BxisryO%2FNdO4fAmVooTIRJy9FUgt49OZf%2FfV0RITh%2F4ZfTYSp3QNaMPljidKkDLogw6wi7p06sO8e%2FcZLnOvz64YQ13fZH7fUb9sWjgLk%2Fuyt%2Fic5SveDi3o7pAYuAJ0fBhQeo4At0nixUAer8OOqx9s%2FNcEn6GCRuGvibLZ%2FXG2doI2JOBlV1TNbGXeiYA%2FFsPEf7hQ%2FH4XqLA%2Fb7qGqOVrpenAV45i%2FACgrqOOEqBq%2F2%2BqiURbNWLPzzbA5Px53qWLICqNzUxEwpE2ZqZMUwAotP4IAjFjTy%2F23oldmDkWCmbQOGsMJj958EGOqUBo%2F%2BNa9U2vX%2BHE1H%2Fv9e2%2B1xD8HJoYN2sWibsz2jfBnzdY6LV%2B5hmJViC0w%2F4W0uWaKM7Cd7WFAa6WzIs97ZLKcyJbc4%2BUIcECnL0uS90rRlOGDQQh5529q8HYsML0iuqHm%2FPDXUYa0f%2FxauZr05Z1Xw0kYk6jhU217ktPLQhvxcUcTQy8JkgcwyGryfSEls56kZNQFiKFm%2BdjquJoBSUnRs3sW4q&X-Amz-Signature=212232230816de15ad4c09473d87d973731b5476fce2b19c209da2415b2ae8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
