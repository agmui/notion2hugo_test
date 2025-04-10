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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7GNT6I%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDBkh%2FYTzkgko4iFvzmbYD0t4rQtGS0gmwUHxj7YScNlwIgNjLMv6FYGVP43nHePc4pnatJCfjDw%2BwIZedQ%2F81osuoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRXty0%2BgsNjhfHGgCrcA9JCC4B4kQ%2BhWR9LuY0BRERNuLl1uN8Qj0X3NHLfD4uF%2BrsTGUlR6OUNChqLEYZ7UTKwZre5Ji5yuhb89u0e2z8PO2W25DSqqiJDRnUAOMvFoxyx8ucEX4qePQW1Sex2JOurB%2FalvuYCfkHZClF70zZUkc9Voey%2FXnjPOpIPNaTcfv5EqsnhN4j19PSV8nYKgt45ee3qz4G2mSpk0AmprMeOcRw5%2BKE2FlKXnOuNJdXO93erC6FSJbB8leuUvkubnw1Q3ahV6LvMAYjJSUkk22QjnSM%2Fo4GEnVAoSMgFSOoZbBL0JUIMDGvZG0OOaoZmMoqpqrOHnEPQ4N1ojoOU%2FlWnSUkMaK6njtsV%2FVMYPVc1j6OmuGU0W4SI3FfmCnSerIphCTogsI1FVJDWN6TEuZXIhPaO0xSAnEaCwAV%2Fgiscuk99OVbRFvb2sRU8U0iW544EDIqRTWF5sltcM%2B%2B%2BuWEEePYl3HKWUsuASCCASOaOLtoNPGWfQIzSyD38zfWAvuyC6IByPA0ZB1dqsCWQGYVIUalb%2FxzSqU0JZ4q4zLjMU41C2d7%2BwUUxZeInolpEOxJ8oAYExlge7Xq6LSGF6OQZTpLG15r0U30YO0sTGQoRHkq0qT8xCJWn5JfPMJ%2B%2B3r8GOqUBOSFuNSTHyNhEAAh0mZs5%2FbdDVHYC0LSqiZ%2FRzShCbFujBAE%2FRG9Cs%2By036Vfygg7qAN1QwF9o7aGdWnlN0KWIAwIxdVi1V7C75YsQtiwJJeSmAnr0sEmfCXrTLSmqw7AVNx%2FRm0pOfb9Z04v3XlD91eNYJ89SfUZQj9MoWXRsTcLNCNL0HQDqegmdnqYiYm6vMToiqAB1qFX2eTQUvS7ZvzHPxk%2F&X-Amz-Signature=870b2ff5871ba2e7009e840469987bb073a39587b6e7be9a760d60f529ebb347&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7GNT6I%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDBkh%2FYTzkgko4iFvzmbYD0t4rQtGS0gmwUHxj7YScNlwIgNjLMv6FYGVP43nHePc4pnatJCfjDw%2BwIZedQ%2F81osuoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRXty0%2BgsNjhfHGgCrcA9JCC4B4kQ%2BhWR9LuY0BRERNuLl1uN8Qj0X3NHLfD4uF%2BrsTGUlR6OUNChqLEYZ7UTKwZre5Ji5yuhb89u0e2z8PO2W25DSqqiJDRnUAOMvFoxyx8ucEX4qePQW1Sex2JOurB%2FalvuYCfkHZClF70zZUkc9Voey%2FXnjPOpIPNaTcfv5EqsnhN4j19PSV8nYKgt45ee3qz4G2mSpk0AmprMeOcRw5%2BKE2FlKXnOuNJdXO93erC6FSJbB8leuUvkubnw1Q3ahV6LvMAYjJSUkk22QjnSM%2Fo4GEnVAoSMgFSOoZbBL0JUIMDGvZG0OOaoZmMoqpqrOHnEPQ4N1ojoOU%2FlWnSUkMaK6njtsV%2FVMYPVc1j6OmuGU0W4SI3FfmCnSerIphCTogsI1FVJDWN6TEuZXIhPaO0xSAnEaCwAV%2Fgiscuk99OVbRFvb2sRU8U0iW544EDIqRTWF5sltcM%2B%2B%2BuWEEePYl3HKWUsuASCCASOaOLtoNPGWfQIzSyD38zfWAvuyC6IByPA0ZB1dqsCWQGYVIUalb%2FxzSqU0JZ4q4zLjMU41C2d7%2BwUUxZeInolpEOxJ8oAYExlge7Xq6LSGF6OQZTpLG15r0U30YO0sTGQoRHkq0qT8xCJWn5JfPMJ%2B%2B3r8GOqUBOSFuNSTHyNhEAAh0mZs5%2FbdDVHYC0LSqiZ%2FRzShCbFujBAE%2FRG9Cs%2By036Vfygg7qAN1QwF9o7aGdWnlN0KWIAwIxdVi1V7C75YsQtiwJJeSmAnr0sEmfCXrTLSmqw7AVNx%2FRm0pOfb9Z04v3XlD91eNYJ89SfUZQj9MoWXRsTcLNCNL0HQDqegmdnqYiYm6vMToiqAB1qFX2eTQUvS7ZvzHPxk%2F&X-Amz-Signature=6f098a78f12e881f5b6b2734a2bfce841fdfb423410d7c4706dda0b08bda59ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
