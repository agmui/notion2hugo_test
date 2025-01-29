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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GF55YO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCVK0Zf8ZAqfx6f33GoEDIA%2BwwfqsfjWCMouTuopn15wAIhAJec1XK3aYPDuhX05KhqKJtKeOUC%2F9RCHf4KVVYnAu2GKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkLERUhzWoPfOOQEcq3ANc7Y06Qr9h3SC2ZolMprESclsoKo1vq3Ujr3W4zDyn6vmEmZf9AeUdPSI%2B6%2FXUkNVzpdhYUZG1Tg0IhZQBHg7IThgrXjvJn4FhhfCI9X%2FL3SDlG9RYhpoAT7ACl3ksVLrYzoh0sL2rLbBoEOfEo9V8oX%2BlappKHnd5amvDI3UTDbCSXsVHRbaEgoRP5C8ibShpVzIApH1VQJjqjyFzhM2gEeJyQaEjdBii0Q5Jh1tPGcOsPJO7IK%2F8bwtGxUTYkF5XbWuylu%2Bwq5sU9y%2BlKDJc9pL%2B0aSO5jLbtJoHkS1sTJ8K8uPNNsJTmb%2FJTXpdFjBy9kgzFVay5A4PENzWWYR5D8KAHOIRxkhNbXL%2BAriMXQD2iaYMOhRYFY0JDzn6m1KlFaz6SgkzwAJdavv5thvuyXnZLpr6U6H1nVBAY7ZiElZFyhDIc8gg42mjXjG4aXihLiHT%2BDstXDIScMPFI1FlqmOrikQXgcfKnnFTKAp%2BlNwv%2F8TC%2BxcL0QHbsTrBnkYctYgz0GFrPnXyHA0cq9eK%2Fn38uahbLgt2KU0zZV61zU4PybRzMtDe65FlI1uTdJKIZqY%2FBCxyL4wl2NZH7GA8%2FXBk4crKEGkoju51auTWxMJghQ6VH3ykh%2BPApTD6u%2Ba8BjqkAYdT8rcU77eFNIoc4J0SJ4Xn%2F9iZtTNRE0tPvnlqPktmIUSnBi6QG2q54NKDR50eA%2FI9QF3hRknTWIENnF1FSo8j%2BXVXRKQUCHM%2FxXG9lztjmwSJsBFz%2Fl57qi5ZActBPzx4gl3UVsg6p3y3RiV1fggZr%2FbN94WV2G8E7xhOGI%2FyubonOPPYh9J4nNQ%2B3kitNdypRHldAR79OAI2Auvde6RWdn%2BW&X-Amz-Signature=eb0ed7190162262fea47b879959bbe7481a351505195f5fd8c3ca33434cb27e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GF55YO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCVK0Zf8ZAqfx6f33GoEDIA%2BwwfqsfjWCMouTuopn15wAIhAJec1XK3aYPDuhX05KhqKJtKeOUC%2F9RCHf4KVVYnAu2GKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkLERUhzWoPfOOQEcq3ANc7Y06Qr9h3SC2ZolMprESclsoKo1vq3Ujr3W4zDyn6vmEmZf9AeUdPSI%2B6%2FXUkNVzpdhYUZG1Tg0IhZQBHg7IThgrXjvJn4FhhfCI9X%2FL3SDlG9RYhpoAT7ACl3ksVLrYzoh0sL2rLbBoEOfEo9V8oX%2BlappKHnd5amvDI3UTDbCSXsVHRbaEgoRP5C8ibShpVzIApH1VQJjqjyFzhM2gEeJyQaEjdBii0Q5Jh1tPGcOsPJO7IK%2F8bwtGxUTYkF5XbWuylu%2Bwq5sU9y%2BlKDJc9pL%2B0aSO5jLbtJoHkS1sTJ8K8uPNNsJTmb%2FJTXpdFjBy9kgzFVay5A4PENzWWYR5D8KAHOIRxkhNbXL%2BAriMXQD2iaYMOhRYFY0JDzn6m1KlFaz6SgkzwAJdavv5thvuyXnZLpr6U6H1nVBAY7ZiElZFyhDIc8gg42mjXjG4aXihLiHT%2BDstXDIScMPFI1FlqmOrikQXgcfKnnFTKAp%2BlNwv%2F8TC%2BxcL0QHbsTrBnkYctYgz0GFrPnXyHA0cq9eK%2Fn38uahbLgt2KU0zZV61zU4PybRzMtDe65FlI1uTdJKIZqY%2FBCxyL4wl2NZH7GA8%2FXBk4crKEGkoju51auTWxMJghQ6VH3ykh%2BPApTD6u%2Ba8BjqkAYdT8rcU77eFNIoc4J0SJ4Xn%2F9iZtTNRE0tPvnlqPktmIUSnBi6QG2q54NKDR50eA%2FI9QF3hRknTWIENnF1FSo8j%2BXVXRKQUCHM%2FxXG9lztjmwSJsBFz%2Fl57qi5ZActBPzx4gl3UVsg6p3y3RiV1fggZr%2FbN94WV2G8E7xhOGI%2FyubonOPPYh9J4nNQ%2B3kitNdypRHldAR79OAI2Auvde6RWdn%2BW&X-Amz-Signature=410c1d3bf793431163c833cd7563164e1d3d39f5cac459d7cff0f04dd3a1b1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
