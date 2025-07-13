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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGENDQ5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVm3OINre4F7OYImFxQGjISZPMyr9hOTiAjfKCKk9yaAiANsXzBwetH3j9wLdnii0Va6WapL5yMNZ19aI4RWDDblyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTTj1xbv35Y6rFe%2BKtwDju9p2KxSYUzpwOcTB3%2Bhbw%2FZe2HVPgyWn6DUvlTbfIq3lEyz4XJZKKKBG2KK8rFA%2BkDkuIMZsmfQbGnlVtkUJgI3A%2B5m30ytXWd6nYRz5ELTE%2FBNmplJDU0w8CgzZ%2FKlYeKb6B79EIL7p2zhPW9PiowZr1SOw0tr267epiXRNcifz5WhqcJJPqajVSnJywP3AifkPLy68d3oeeKULCQ37ZsaMWU2nWt%2Fhm0jKTPou0XDpRc3rT7NiHlNio%2BySYsyXeeyKcRbVVRLa6p7Wt6%2FiZ7xIRwp%2FPybkt8vtrIDdITE7LgMvnSY%2BwqM%2FhnkOHXMaBvSuXN3xxc8rX2Digo3fpt6htk5qFOZ1J0dT6mc87JVm8xx44rJbkpBG7eLgszf7WEKIV8Jk%2Bs8Co9nLmlBK8IYqtaL%2BAbLIwe76BfWGK5%2F1SyEkEq1GXRQ78ipUQc1qghroPfH7BYrNLseTHl9n6Lyx33OZ8T33VWoqTBevXy864dnE5STciQ%2FSbEtcYlX8L24ac19v4vZPu3rZWefZ7Uoh8RXG1eKIfdH2yZCvGm5so3Si8Q6YVQmVeTC2SZNPuSvapwdFBbOtScp883q8xacxVn1%2FXWbs4XAvO4lPrp%2BQq39uFuIcZ6nOO4wiIHMwwY6pgG8DI5blIfvDW2%2BQvU7aU6BLXlvAvpTXxXweq1bj9aNfZwNZJZRuXRolfGRlo6IblTRf5JPJ95zigQjCjgitfWo8SfIMPpPJ5qwVwzQ5MwbrxtEjwJFJQp0G1Ctijs8bp0FB1exqbPVpqMfvsriCNUJLWRRD%2BFr2PHtVBuGtKuZP2rat5EIvtv%2BBYfLbcs5WgVncFsKwENYiDxTmY8K3Oh85J2qjaGD&X-Amz-Signature=39cd43a73dc8c1bec4626ce191587e3446f9ec3ec676c45a04d7e2061d34d6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGENDQ5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVm3OINre4F7OYImFxQGjISZPMyr9hOTiAjfKCKk9yaAiANsXzBwetH3j9wLdnii0Va6WapL5yMNZ19aI4RWDDblyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTTj1xbv35Y6rFe%2BKtwDju9p2KxSYUzpwOcTB3%2Bhbw%2FZe2HVPgyWn6DUvlTbfIq3lEyz4XJZKKKBG2KK8rFA%2BkDkuIMZsmfQbGnlVtkUJgI3A%2B5m30ytXWd6nYRz5ELTE%2FBNmplJDU0w8CgzZ%2FKlYeKb6B79EIL7p2zhPW9PiowZr1SOw0tr267epiXRNcifz5WhqcJJPqajVSnJywP3AifkPLy68d3oeeKULCQ37ZsaMWU2nWt%2Fhm0jKTPou0XDpRc3rT7NiHlNio%2BySYsyXeeyKcRbVVRLa6p7Wt6%2FiZ7xIRwp%2FPybkt8vtrIDdITE7LgMvnSY%2BwqM%2FhnkOHXMaBvSuXN3xxc8rX2Digo3fpt6htk5qFOZ1J0dT6mc87JVm8xx44rJbkpBG7eLgszf7WEKIV8Jk%2Bs8Co9nLmlBK8IYqtaL%2BAbLIwe76BfWGK5%2F1SyEkEq1GXRQ78ipUQc1qghroPfH7BYrNLseTHl9n6Lyx33OZ8T33VWoqTBevXy864dnE5STciQ%2FSbEtcYlX8L24ac19v4vZPu3rZWefZ7Uoh8RXG1eKIfdH2yZCvGm5so3Si8Q6YVQmVeTC2SZNPuSvapwdFBbOtScp883q8xacxVn1%2FXWbs4XAvO4lPrp%2BQq39uFuIcZ6nOO4wiIHMwwY6pgG8DI5blIfvDW2%2BQvU7aU6BLXlvAvpTXxXweq1bj9aNfZwNZJZRuXRolfGRlo6IblTRf5JPJ95zigQjCjgitfWo8SfIMPpPJ5qwVwzQ5MwbrxtEjwJFJQp0G1Ctijs8bp0FB1exqbPVpqMfvsriCNUJLWRRD%2BFr2PHtVBuGtKuZP2rat5EIvtv%2BBYfLbcs5WgVncFsKwENYiDxTmY8K3Oh85J2qjaGD&X-Amz-Signature=957ae79bbe00299c7a9995f5b113af382f4d24648b75212fede5de4a08e2cee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
