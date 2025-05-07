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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEERS63G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtqdBzlEgbph8oRWVpGrE3BN8QmNvkimNO7rc6EXc%2BCAiBfaaHoZdSmlVYX6Ugy9e2LEwW7uQQPDGAjCoV80cijqir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMoATWFXd0p7QKxLg8KtwDXUbl5mVuDJI1a2CRwCMMRSfWqbA6yiwDR%2Fw4%2FGKpjztIGVqNK8GY%2BKfZYMm3%2BlABhAV9ZwwxXkUGukjo04bb%2FfnD0BJ4kLTqjK6iA10DMVho0A96aIlySKrIp%2BKqCdfRO6KmRWOgJRnYK0TvwasM8tyO8V1YnTO45NJZVaYD9FDjFSvpJhi%2Brpj1aOiMsbdabIBfeHRjzDDVIPy%2BBrPbtSwsjZdQF1YEszqD3y%2Fh71hSU7djFz%2FvFwlWc9hR0mbluu6ClUBAGtPKrpZpYinW0nBbEM0tbB1S8SEG0%2F82lB6qwXTzU9hk%2FOp2rxQjOAao3QWeZrqRJlWHMwYOPDTiqyYHy4PWAbnK3Yjq78MPxpabGbTOfo1HnLQRzW7ehVj5spk4IzwS77l8irHxgwQl3pNXbh1WqhH5oCgDA56%2FzhlKuKh61L8l9PvPUYVf760ma3nCE4%2BkGCUmqoVG1qOHRgqfz7%2FXwxcf%2Fwc5Vz9P1kht3W0o31Ivi3u68EK89B4A6qjrekkZ0wL0%2FXVETeIDDKkArnfvdU9GQzzksqywyTzfwHiBdG47FLLGdUnkhOo9hamZH80vFJSBxJRqhThLmhTSbrYevNkAUyA0rcXy6xPd84t%2Bi6lEHwFcB%2FIwgZzuwAY6pgHGrHhcm9XlST7IBhWi3hkPA1%2F3UFxpr2KA%2ByYIqhQXCi5fITAUH3TnIMQNlSSAQlf3DDu0WyHL9ZfyRJTS9%2Fz1Gg3oGb7ln%2BNrs2qMKvVyfJCSj23AUckYzSKKhot7AVOuiVtH%2F3M9NxFRf3uvYBhTeMUYePpzxb9BpvPpKdq2pJcQyNgVEF%2FxZFC3aT9xSyfgum4gWewZMzHzfn1CeSIKdeSkW5HS&X-Amz-Signature=a3d94096703bddd70b1039d1a627179914739dcb9a47eef9e8786811b1dc2a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEERS63G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtqdBzlEgbph8oRWVpGrE3BN8QmNvkimNO7rc6EXc%2BCAiBfaaHoZdSmlVYX6Ugy9e2LEwW7uQQPDGAjCoV80cijqir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMoATWFXd0p7QKxLg8KtwDXUbl5mVuDJI1a2CRwCMMRSfWqbA6yiwDR%2Fw4%2FGKpjztIGVqNK8GY%2BKfZYMm3%2BlABhAV9ZwwxXkUGukjo04bb%2FfnD0BJ4kLTqjK6iA10DMVho0A96aIlySKrIp%2BKqCdfRO6KmRWOgJRnYK0TvwasM8tyO8V1YnTO45NJZVaYD9FDjFSvpJhi%2Brpj1aOiMsbdabIBfeHRjzDDVIPy%2BBrPbtSwsjZdQF1YEszqD3y%2Fh71hSU7djFz%2FvFwlWc9hR0mbluu6ClUBAGtPKrpZpYinW0nBbEM0tbB1S8SEG0%2F82lB6qwXTzU9hk%2FOp2rxQjOAao3QWeZrqRJlWHMwYOPDTiqyYHy4PWAbnK3Yjq78MPxpabGbTOfo1HnLQRzW7ehVj5spk4IzwS77l8irHxgwQl3pNXbh1WqhH5oCgDA56%2FzhlKuKh61L8l9PvPUYVf760ma3nCE4%2BkGCUmqoVG1qOHRgqfz7%2FXwxcf%2Fwc5Vz9P1kht3W0o31Ivi3u68EK89B4A6qjrekkZ0wL0%2FXVETeIDDKkArnfvdU9GQzzksqywyTzfwHiBdG47FLLGdUnkhOo9hamZH80vFJSBxJRqhThLmhTSbrYevNkAUyA0rcXy6xPd84t%2Bi6lEHwFcB%2FIwgZzuwAY6pgHGrHhcm9XlST7IBhWi3hkPA1%2F3UFxpr2KA%2ByYIqhQXCi5fITAUH3TnIMQNlSSAQlf3DDu0WyHL9ZfyRJTS9%2Fz1Gg3oGb7ln%2BNrs2qMKvVyfJCSj23AUckYzSKKhot7AVOuiVtH%2F3M9NxFRf3uvYBhTeMUYePpzxb9BpvPpKdq2pJcQyNgVEF%2FxZFC3aT9xSyfgum4gWewZMzHzfn1CeSIKdeSkW5HS&X-Amz-Signature=aa4d65531c66e9720a7b5d4b2c57cddc349beebe3f08e0a32309dc5165727112&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
