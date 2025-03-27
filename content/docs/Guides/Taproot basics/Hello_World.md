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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY646B5X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkfvEtYxQbNVTjh314UBMNBpVslsKUbq4hN1ou6Z6IZgIgDmfBCBDSJpXp8EX1rcyz2TdfCJxdi0BVGJXzXaIMsn8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJMzY62IspEmlVS7UircAy6CWvEmYk%2FBh9FEr%2FLbDxwI5mwwizpArTzkGnPT4ZGcl6VFJZBsc8EUUWG1CgEe7FEv6vgg0FeuHHUjB3uMiJEwSgvRWNODuYx5GVPURNYVxD281no8CRbaHZ5iOYHEQ6JTnSAaluNd1bXSKPJWN4tINEemf5xre77mcoMo92xskYz6W8B4R%2B9nOMvE3eKhuy44CqmNupdpJUoOA0yHdvIgeoQ6Od4LoEUFtnWOL6oy7EHuXRUYiVYLXynqhz16B6kvQI7BlsHwA1%2FIyBOrISXWKyKqLsUk%2B1b5lLupuk0Kez2mXOO1lUkpq725pJ3QhBAV9fQ%2BeHBMnlrQ23vi3Ay%2FmEMOXSFHq31KLcTt1ZEAU9pAWsmonOA7KTfVq%2FXN90g%2BmI%2F4HWbW%2F3DnAzes%2F9pA9f0RUOfu9C6I0xIyNklZchr%2FZkeQbmCe7EYX54NZsE769QUPAVPA6M5R6nTqZUXLrO8Qf%2FqbQtfBdAr%2F0Mru40PqzMlG%2FpviRYwmN1CeZFbpPqUwcGX47TL2a9GE3Eq4MMYh7IihcaWVDHwxFKLEtRkKsOrtq2OAf%2BqwiIbbtP7kCJQhwonojPu9h4VTlHoVkzwM8GkHdqRWjWmN6LnRWkswcJvTzRCOwq9gMI%2BUlb8GOqUBEeBZRZVdGQ9nOCGwD9qRO5wamzdrYBGXTtlukrnT2IRfE01mjQ6m7Gcrx9HAGLRVPpo4K5NACgz44ZeCnsIv8EedFuc%2Fj6kvMjBvGMD3D2r1GC7O57%2BAQ5U6t54gBlHNIAopifFbnFVuBUSPMUNYrGU7%2FfvzQMjij5r7IO%2Bg5knMGRGjxrbnLmuKl7BRnA25P2Q4cGGMQ37TTSNl7UUfySaVx4%2FN&X-Amz-Signature=af844a4d333dd3f9b0a197d0553b910328ad4aa7bdc3ec33c75bfb1bc2e08615&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY646B5X%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkfvEtYxQbNVTjh314UBMNBpVslsKUbq4hN1ou6Z6IZgIgDmfBCBDSJpXp8EX1rcyz2TdfCJxdi0BVGJXzXaIMsn8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJMzY62IspEmlVS7UircAy6CWvEmYk%2FBh9FEr%2FLbDxwI5mwwizpArTzkGnPT4ZGcl6VFJZBsc8EUUWG1CgEe7FEv6vgg0FeuHHUjB3uMiJEwSgvRWNODuYx5GVPURNYVxD281no8CRbaHZ5iOYHEQ6JTnSAaluNd1bXSKPJWN4tINEemf5xre77mcoMo92xskYz6W8B4R%2B9nOMvE3eKhuy44CqmNupdpJUoOA0yHdvIgeoQ6Od4LoEUFtnWOL6oy7EHuXRUYiVYLXynqhz16B6kvQI7BlsHwA1%2FIyBOrISXWKyKqLsUk%2B1b5lLupuk0Kez2mXOO1lUkpq725pJ3QhBAV9fQ%2BeHBMnlrQ23vi3Ay%2FmEMOXSFHq31KLcTt1ZEAU9pAWsmonOA7KTfVq%2FXN90g%2BmI%2F4HWbW%2F3DnAzes%2F9pA9f0RUOfu9C6I0xIyNklZchr%2FZkeQbmCe7EYX54NZsE769QUPAVPA6M5R6nTqZUXLrO8Qf%2FqbQtfBdAr%2F0Mru40PqzMlG%2FpviRYwmN1CeZFbpPqUwcGX47TL2a9GE3Eq4MMYh7IihcaWVDHwxFKLEtRkKsOrtq2OAf%2BqwiIbbtP7kCJQhwonojPu9h4VTlHoVkzwM8GkHdqRWjWmN6LnRWkswcJvTzRCOwq9gMI%2BUlb8GOqUBEeBZRZVdGQ9nOCGwD9qRO5wamzdrYBGXTtlukrnT2IRfE01mjQ6m7Gcrx9HAGLRVPpo4K5NACgz44ZeCnsIv8EedFuc%2Fj6kvMjBvGMD3D2r1GC7O57%2BAQ5U6t54gBlHNIAopifFbnFVuBUSPMUNYrGU7%2FfvzQMjij5r7IO%2Bg5knMGRGjxrbnLmuKl7BRnA25P2Q4cGGMQ37TTSNl7UUfySaVx4%2FN&X-Amz-Signature=ebebc0f8d74bff780cca13105117220e0487d407d7799625d8475edf85e7dda5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
