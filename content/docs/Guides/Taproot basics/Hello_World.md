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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQQCQGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyUyqrjJtL3hyHsMF6%2BlZgUV3Yaa8CAZHc8XEZd8OnlwIgEKmWCxsbGpfpWU8I6bzeFB%2Flj5B2qxzu%2BsY1SfShOtYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHJZ8sY1s1A6UpaDCrcA6t8aCxuzEoSbczFqv6R60ZhfG6slgqyMlrvsEmNwCeIc7eAD0QcJrYzwEQnFbPh7dPMAnxRdgAZVttOqBJMpf%2BtYy2Pz%2BUE2M8DiBa5Jmi0jhbnkJMtJC4RQ7NL40L7rgizhRDOmgbaCQrUjLojhf40GqhiWq9z7zQ2eGLfQITJu9a8IxVMUtOZD7ioECSAW1lyPO7MQPBEW8MAWKjLm3F2bDQF2JD4ityWhIzz%2BwqkZFCwnctwMOUO08b7kUj0gjltIf0laWvxPjXfP3Mo0KeCGylH77N0zkqXPtdSglny6hLpWEVorX0H4%2FGCb4RTJTN6%2FQxBQaWo7kI6jFCBxk23JH1t8PGF0kl5QLFosz%2B6liWe%2F2pixh%2FIyQZiYkf75q6GThyZfaUAu%2F%2FdlT%2FLpLibdRboyRedw6%2FzcpMrMxIxo92rzpq2MNqvhGiv5to1PKoNBYIkyNM7STYvAreHUOp2XCW3sThEKgMQpjLWpdg3AXqDPJx%2BaSXX%2FXH87DrQYDfVWgYh8LI%2BrTWllfyzFEz688ffu%2Bi2SjGP%2BM1wgbCvnEbVzaQ7Ew2JPAhgCwGRKwiopVsucgJtnSyLwDq3POX%2BXoP0FcJ97AMXzK6X1pT2cjko4oPyZnoGeZO4MI3FgsEGOqUBYBePS8DGv95kilF6IDl%2FK7dPfNCwoY1KxPEzL4OjBEvRkmnMyEh67iQ84SzYz9HoaAG5WgaflmRHi%2Fvop%2Bx5l0YUlz5KGEB9OIPui9Fln%2BOGfYZ3fidMSKoW0p70o1%2BWkCt%2Fpjj8Qz0CeEwcjCwkf1vaJCh8yg3vFPx785aZmtk1Qw%2BfaajWVNTM3p8I8CAC4OwsOu6E4Ys%2FwGCM9%2B4OtV7TnaY2&X-Amz-Signature=c58e3befe0e6bb7c9de250af19820e8040be4b720c5160006fc7506bc7285ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUQQCQGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDyUyqrjJtL3hyHsMF6%2BlZgUV3Yaa8CAZHc8XEZd8OnlwIgEKmWCxsbGpfpWU8I6bzeFB%2Flj5B2qxzu%2BsY1SfShOtYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHJZ8sY1s1A6UpaDCrcA6t8aCxuzEoSbczFqv6R60ZhfG6slgqyMlrvsEmNwCeIc7eAD0QcJrYzwEQnFbPh7dPMAnxRdgAZVttOqBJMpf%2BtYy2Pz%2BUE2M8DiBa5Jmi0jhbnkJMtJC4RQ7NL40L7rgizhRDOmgbaCQrUjLojhf40GqhiWq9z7zQ2eGLfQITJu9a8IxVMUtOZD7ioECSAW1lyPO7MQPBEW8MAWKjLm3F2bDQF2JD4ityWhIzz%2BwqkZFCwnctwMOUO08b7kUj0gjltIf0laWvxPjXfP3Mo0KeCGylH77N0zkqXPtdSglny6hLpWEVorX0H4%2FGCb4RTJTN6%2FQxBQaWo7kI6jFCBxk23JH1t8PGF0kl5QLFosz%2B6liWe%2F2pixh%2FIyQZiYkf75q6GThyZfaUAu%2F%2FdlT%2FLpLibdRboyRedw6%2FzcpMrMxIxo92rzpq2MNqvhGiv5to1PKoNBYIkyNM7STYvAreHUOp2XCW3sThEKgMQpjLWpdg3AXqDPJx%2BaSXX%2FXH87DrQYDfVWgYh8LI%2BrTWllfyzFEz688ffu%2Bi2SjGP%2BM1wgbCvnEbVzaQ7Ew2JPAhgCwGRKwiopVsucgJtnSyLwDq3POX%2BXoP0FcJ97AMXzK6X1pT2cjko4oPyZnoGeZO4MI3FgsEGOqUBYBePS8DGv95kilF6IDl%2FK7dPfNCwoY1KxPEzL4OjBEvRkmnMyEh67iQ84SzYz9HoaAG5WgaflmRHi%2Fvop%2Bx5l0YUlz5KGEB9OIPui9Fln%2BOGfYZ3fidMSKoW0p70o1%2BWkCt%2Fpjj8Qz0CeEwcjCwkf1vaJCh8yg3vFPx785aZmtk1Qw%2BfaajWVNTM3p8I8CAC4OwsOu6E4Ys%2FwGCM9%2B4OtV7TnaY2&X-Amz-Signature=690f4d65ca26058676ccd2ae9cdbc6ebb8864d65c5a0f3e6b9aebfa6898429ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
