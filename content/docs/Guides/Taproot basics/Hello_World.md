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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGAJEAQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCID6Mjjy1xMEoDrzUIJY2uyhksf3dyem3fJdekCo%2B7gOqAiBH3NZJvk8pHiluyeGEFoDvKSipQl4%2BiJ4k8167OCx2zCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH66syhRlWWAdcWzsKtwDu4MFAgdVIsWRXJE00i3j2R4F%2BsvjrBuDi4o5lUL%2BLZLXMpik2sC%2FIbJXPwUhp%2B%2BUP8shfUrTa6rkhUI64n8nqyasIDPRQXAnbh6aIMAQ2dNQeioeIgL8l5Cig64TpmUwreZPErePVpIVHJ6dTc6mv%2FUfbsz6AM%2F9PXm%2F4oO16qYVfCm%2BIB9SqpNPC2Jx7Xp0BNcHqM%2F%2BVE6kJNfh6YM%2B9CsENtB0FbgK5Ez5gLhDRu0axNnu6Mb%2BrDTW41juCNDT2EdTgRvlJggQsq7LAOzQ%2BpPuG2yhv1gDMQ%2FqCa7rIdOANY%2Baf7YQ%2F6hnlqEHodsJnUdEvezEIKQwsJOlE6HTgSas8mObVxONYerrHhzrLMFmetblR1TR%2BDtQh5V5HVoQNztBIVnBRM3%2FTua86eznD7uYEoVxQOD3Wb5VZ7eivrVQAv7%2F3xso2u%2FiqX2EtkDpKRErEyquapchduL%2FswD8M3wjbVBQC0EPXbcmqfYk9V4APHXjYjzv88jrtQc3ZeO2j1TrJHgG0guMpOceKl4wgRVksaLu%2BcGzwbhjMwG3wlOmDN5y%2Ba0h7A%2F7MaatIQP6XBF%2Buz9trcX9Dbb4K708bqdzQi43UfpTIJStJ%2F5CD2iM7ILb46teIcCYMN4w2bH6zwY6pgHonhFst9jCcvr4DxzdZy3o5hEp5ff5mHGSOegRnSZLz%2Fls2s0%2FyhaMo69XuCxkduC22ed4fzpXm36TwvCSWJ5kwLbZf3UJYjtDEI5DRrsiIzVkS7o2uhVXAE1UUGdRQh0Xqi3aDyrt9uAk%2FftZvEgcdVJbcQmIQpx3oZ8eNwkn4RXRQa0IBuhg6PL%2BTyUp%2F3FRnCa6KIg50oyOGf4UTIraMs%2F%2BJjzZ&X-Amz-Signature=aa2744a3bb698973ec18dbf14c8516f3574b9f8e28a1d61ab1b97d9d4addbcf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNGAJEAQ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCID6Mjjy1xMEoDrzUIJY2uyhksf3dyem3fJdekCo%2B7gOqAiBH3NZJvk8pHiluyeGEFoDvKSipQl4%2BiJ4k8167OCx2zCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH66syhRlWWAdcWzsKtwDu4MFAgdVIsWRXJE00i3j2R4F%2BsvjrBuDi4o5lUL%2BLZLXMpik2sC%2FIbJXPwUhp%2B%2BUP8shfUrTa6rkhUI64n8nqyasIDPRQXAnbh6aIMAQ2dNQeioeIgL8l5Cig64TpmUwreZPErePVpIVHJ6dTc6mv%2FUfbsz6AM%2F9PXm%2F4oO16qYVfCm%2BIB9SqpNPC2Jx7Xp0BNcHqM%2F%2BVE6kJNfh6YM%2B9CsENtB0FbgK5Ez5gLhDRu0axNnu6Mb%2BrDTW41juCNDT2EdTgRvlJggQsq7LAOzQ%2BpPuG2yhv1gDMQ%2FqCa7rIdOANY%2Baf7YQ%2F6hnlqEHodsJnUdEvezEIKQwsJOlE6HTgSas8mObVxONYerrHhzrLMFmetblR1TR%2BDtQh5V5HVoQNztBIVnBRM3%2FTua86eznD7uYEoVxQOD3Wb5VZ7eivrVQAv7%2F3xso2u%2FiqX2EtkDpKRErEyquapchduL%2FswD8M3wjbVBQC0EPXbcmqfYk9V4APHXjYjzv88jrtQc3ZeO2j1TrJHgG0guMpOceKl4wgRVksaLu%2BcGzwbhjMwG3wlOmDN5y%2Ba0h7A%2F7MaatIQP6XBF%2Buz9trcX9Dbb4K708bqdzQi43UfpTIJStJ%2F5CD2iM7ILb46teIcCYMN4w2bH6zwY6pgHonhFst9jCcvr4DxzdZy3o5hEp5ff5mHGSOegRnSZLz%2Fls2s0%2FyhaMo69XuCxkduC22ed4fzpXm36TwvCSWJ5kwLbZf3UJYjtDEI5DRrsiIzVkS7o2uhVXAE1UUGdRQh0Xqi3aDyrt9uAk%2FftZvEgcdVJbcQmIQpx3oZ8eNwkn4RXRQa0IBuhg6PL%2BTyUp%2F3FRnCa6KIg50oyOGf4UTIraMs%2F%2BJjzZ&X-Amz-Signature=a4590527797411536a524fc556b8534ce9e4bd5d14bc046106daf526eaa1cbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
