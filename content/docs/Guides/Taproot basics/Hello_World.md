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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBSW74T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIE7uiqfvwBtWRpg5xZkcwuuGHbpcDzs0Jb1BJsB75LpeAiAkC0k7K6EQ%2BR5tKuzY4C4x7aXNw9Wgp4BJxP4DdUr9HSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMozy70II%2B6hkfzFwfKtwDCYnWuTMPL8CePIolkknVR7iLEWbAhtnlQYoyL7TAAlcvmh76kKHhGU1U4mjP7LGkgd%2BDvLGNCEBYciWIF3xlJXIk4Ww71l993Q2MyUiKwNwu8MsChffqFyHfsmNYL6zbj2zhN4rk8R%2Fa5L3TDZAKfiRvhuA4m0Niq3WnsK49Lm9tIHJIuW7NvG2Cg%2BvjXPekh80%2B5UsEiSiYI23gc7PKesDe%2FrhELflUr66FKggn8biCDMfLmbYyL414HinsS6VXhisQOLfbcO7%2Bfd%2FV%2FyUykW71NQPFrDjbwP0ZaTVif4P%2Fr3ritXFa4PvEmjiVpMlhWPAHYNuYQZ%2FSx2HQKdwmBA15jNk8CCrRzTNrU6K3xxn5ZI4yESLWPVaRSZwUPDmj3XyD50s915N7yoNuzn%2Fv3qGZPwPksFTnOcHvv8qyQitJ5mu6edm0ssZfOhQ0vB2enM8E8ggDquzM8F64MFLJ804L4%2FOpW0o27RE5LKjA2BcZnQXw6s%2BOMUSji0KWxzdOuOBQntY29HRNb4w%2FWEuRIJILwkckmAK7dG7Ip06vZr7BdZN7NqWpeZW%2FSXag0P0xc%2FP6BgzL29vZ9XnDcwUyEfhMXFvGg7ZSBCsOidAGPFwA8JJKNcZZcoBFXZ4wnouAxQY6pgEwnq3W1VYb3b4atR2wWkrmGsdfjmm45SaTUvQXe0T2ofskjEZZN411zbg0t9QYiXf1z%2BE%2B%2BZFsUp%2B75duiVkVxfoxiME6ANA%2F9U%2BrawCyw7lbx9l3ruYI8jJZXhc88rAOxvNpiqQKOPWuaDZcjmF4ZtIUf07IF5aZ9Wcampiy9IiSKZc2o3y2J9N7xUI9qD0am5BTv8uPa%2FenDC0qMWt9x0EeCBH5x&X-Amz-Signature=d38305b748abeef431fa4d3583ed7381b49eafb799d344930bb4e6e95766f66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBSW74T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIE7uiqfvwBtWRpg5xZkcwuuGHbpcDzs0Jb1BJsB75LpeAiAkC0k7K6EQ%2BR5tKuzY4C4x7aXNw9Wgp4BJxP4DdUr9HSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMozy70II%2B6hkfzFwfKtwDCYnWuTMPL8CePIolkknVR7iLEWbAhtnlQYoyL7TAAlcvmh76kKHhGU1U4mjP7LGkgd%2BDvLGNCEBYciWIF3xlJXIk4Ww71l993Q2MyUiKwNwu8MsChffqFyHfsmNYL6zbj2zhN4rk8R%2Fa5L3TDZAKfiRvhuA4m0Niq3WnsK49Lm9tIHJIuW7NvG2Cg%2BvjXPekh80%2B5UsEiSiYI23gc7PKesDe%2FrhELflUr66FKggn8biCDMfLmbYyL414HinsS6VXhisQOLfbcO7%2Bfd%2FV%2FyUykW71NQPFrDjbwP0ZaTVif4P%2Fr3ritXFa4PvEmjiVpMlhWPAHYNuYQZ%2FSx2HQKdwmBA15jNk8CCrRzTNrU6K3xxn5ZI4yESLWPVaRSZwUPDmj3XyD50s915N7yoNuzn%2Fv3qGZPwPksFTnOcHvv8qyQitJ5mu6edm0ssZfOhQ0vB2enM8E8ggDquzM8F64MFLJ804L4%2FOpW0o27RE5LKjA2BcZnQXw6s%2BOMUSji0KWxzdOuOBQntY29HRNb4w%2FWEuRIJILwkckmAK7dG7Ip06vZr7BdZN7NqWpeZW%2FSXag0P0xc%2FP6BgzL29vZ9XnDcwUyEfhMXFvGg7ZSBCsOidAGPFwA8JJKNcZZcoBFXZ4wnouAxQY6pgEwnq3W1VYb3b4atR2wWkrmGsdfjmm45SaTUvQXe0T2ofskjEZZN411zbg0t9QYiXf1z%2BE%2B%2BZFsUp%2B75duiVkVxfoxiME6ANA%2F9U%2BrawCyw7lbx9l3ruYI8jJZXhc88rAOxvNpiqQKOPWuaDZcjmF4ZtIUf07IF5aZ9Wcampiy9IiSKZc2o3y2J9N7xUI9qD0am5BTv8uPa%2FenDC0qMWt9x0EeCBH5x&X-Amz-Signature=bc95501700f45088cebc8825eff1898005c25724232afbd26f672cd3001c7791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
