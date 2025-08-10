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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URV6SCHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kC4E1Y5HSqrM5ne1jG4IYVFdhJIJHR3WWW1WgiUfWQIhAKIfIwyyW1VUYhmRdit4pJJuLvbPdyOybQn9LwCZh6YNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCC1Nmx8%2FEZ1XnIbsq3AMFGrFadFYGGLEiSBVXvSpqpgUAdFZgJsOtspKjXS%2B%2FmsN26Y8qeqgb%2F%2B76KBG1VAVZVl7YD%2F9rsYweiWgut%2BvRfJvuv8lAUc0VAgjIyb8h5Cn3eAiJoWgNHyMG3GISsZnAdO%2BjWS7u%2FFU0FTN07T1nip%2Fcz1X0%2FKvGdA46V%2BVBEYKe7lOqHcdg7nmJYI8sGvlVcsqWwcZ722mfjVRtjZGqzHJ4O%2B0tDfT5PekHNPTmiV45t2WVMX6aOIEmI%2Fx3jiSgr0NwcuMf9D4ydBnoibUnQJI31gbZU63ryFsiHGGUGNUfqJ08O%2F%2Fs22Fr9BS2%2F0gSVBnN%2BjAXpXe8v2ZRwLB1BdPIy%2FwuKSOTyymtxkTzprejdMSjSZZjxocQ503CtTbCR%2F0%2F5WmfGREMl4Rzf1luVb4vhontSyOqsaizIKqgXd1XUth41Qlf07UEt5xULf8RC44CKa4%2B6EfA8Y6vtU7%2F%2BqlRwVrB1CfAGddVBzY8%2FkgBxvlag70dXp5kvxAQOgZtLGMUq8utYhr5UfyM3bEjEQzXCEcoLnH45k6YwE3WlgaHfMVmFPBnTgblFl8w5y7muRQ9VwxOdblTZddbKNyhz9DJ7uErxN0U%2F9pdGIs9WBWrUsK%2BGWozsvxyuzCjs9%2FEBjqkAXwFRkiQPb4Vt5LJRO%2FToFvjNJ6ie%2Bd5DzdrsfzlIJ9VMJEfrcm4h2JHaz0jReY0t13S2xyui8nnR3CCdlK6dgaoM%2F4ILSmPb4v5RON62tbaD4Dh9s8Y6JtJK1nMsoMeXKedu%2BCn37DMVseURx7027kugSbuvMlKNLhM%2FjnySHwLkzXVTPoMu2Md3%2B%2BneDG14IVdcpuXWwWwiKFMMFfdhAT%2FlK9o&X-Amz-Signature=17cc93b79e243c948caa386a86e3b316b740967b3f4e4d04c37ec1bd38c8dc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URV6SCHM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kC4E1Y5HSqrM5ne1jG4IYVFdhJIJHR3WWW1WgiUfWQIhAKIfIwyyW1VUYhmRdit4pJJuLvbPdyOybQn9LwCZh6YNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCC1Nmx8%2FEZ1XnIbsq3AMFGrFadFYGGLEiSBVXvSpqpgUAdFZgJsOtspKjXS%2B%2FmsN26Y8qeqgb%2F%2B76KBG1VAVZVl7YD%2F9rsYweiWgut%2BvRfJvuv8lAUc0VAgjIyb8h5Cn3eAiJoWgNHyMG3GISsZnAdO%2BjWS7u%2FFU0FTN07T1nip%2Fcz1X0%2FKvGdA46V%2BVBEYKe7lOqHcdg7nmJYI8sGvlVcsqWwcZ722mfjVRtjZGqzHJ4O%2B0tDfT5PekHNPTmiV45t2WVMX6aOIEmI%2Fx3jiSgr0NwcuMf9D4ydBnoibUnQJI31gbZU63ryFsiHGGUGNUfqJ08O%2F%2Fs22Fr9BS2%2F0gSVBnN%2BjAXpXe8v2ZRwLB1BdPIy%2FwuKSOTyymtxkTzprejdMSjSZZjxocQ503CtTbCR%2F0%2F5WmfGREMl4Rzf1luVb4vhontSyOqsaizIKqgXd1XUth41Qlf07UEt5xULf8RC44CKa4%2B6EfA8Y6vtU7%2F%2BqlRwVrB1CfAGddVBzY8%2FkgBxvlag70dXp5kvxAQOgZtLGMUq8utYhr5UfyM3bEjEQzXCEcoLnH45k6YwE3WlgaHfMVmFPBnTgblFl8w5y7muRQ9VwxOdblTZddbKNyhz9DJ7uErxN0U%2F9pdGIs9WBWrUsK%2BGWozsvxyuzCjs9%2FEBjqkAXwFRkiQPb4Vt5LJRO%2FToFvjNJ6ie%2Bd5DzdrsfzlIJ9VMJEfrcm4h2JHaz0jReY0t13S2xyui8nnR3CCdlK6dgaoM%2F4ILSmPb4v5RON62tbaD4Dh9s8Y6JtJK1nMsoMeXKedu%2BCn37DMVseURx7027kugSbuvMlKNLhM%2FjnySHwLkzXVTPoMu2Md3%2B%2BneDG14IVdcpuXWwWwiKFMMFfdhAT%2FlK9o&X-Amz-Signature=3a35a60f8989c43d80682a179c3b2183f84f4a74b5fb0549fd4f4d4598d4d34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
