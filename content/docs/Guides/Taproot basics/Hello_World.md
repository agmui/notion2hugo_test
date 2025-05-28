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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4LMTUW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDOq3sJLAJlL0kX0jg5SeJxGZzKAz86DdtyG%2FHs9o5GQIgeEanf6yRt5rFDpgk0OCEsyLX%2BOskohxkhJQ1gmb3RnYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOC1WV8YlHfzTn%2FamSrcA2qBGMJdsVDLBLfzADvFfi8ZAU7I3LGuYB5Pv3gzcf%2FxAx9dwi6wUoLhhRoMVDzKHqy5yX58prlKgHovaTdw3FiKgQ0qJsX8Gbk8HD30NgOvQHc%2F%2FrwTbY40siaNQTyl0zL5bcpKiJSk0UXrCPmPCnXDCjKNat%2FUpGpHpkNMaOhtyYurSJ%2FuSqM4EhWgtI9X6NuYuX9ePNHQZiMpUJbgAlWYdQKlm4v%2FGRmDdU%2FW%2FYgYrWF905F4LPIqJ5C3Nq%2Bf4cPTNTcADKmgAXmYb3WbjHeNHOXJ3kAjgT6Qn1PonIxK2ltCtN9ZzV%2FMlEUWkhThXnzi1T%2B0KQoFFXZVjVFnQbeYgwMAj3oOoYuqbip61WjJvUnGNbvDCI5enQdJbOU%2FO0ZkoxdcoJ9CUkqEyrjQcjrXrS8wIEhkuHe8mOifv91d6RPmrDeMf2IqNhKQ99CYPIXpPYvlzat9Z9SKG4aVYPFWlzR4mu4SE4uhaEOWnnsbcNkRw2LbUODJSBn9h3FFua3zhGsZ3bb%2FsKiblluuhN2FXsZH08hxOr5xGOkOCYM%2BHJGrb4MZfb%2Bhfwmh2ga9sI7bWQD%2BA9fh5ICReGnDxWhEJzeb7SsvsYKw4jbn1Wt3BdLCsesi615OBTB0MNiQ3sEGOqUBvBMiGeH9LBMbMRAr5EVUBL6DwKl4gYxjZAOM%2Fw97b%2Bf%2Bx%2BRyqDziwu7emZ7qWJcml5dK8%2Fclhgn4nO4t6fs2GncK7YUCI6sasnYeh6SFSFVAO2P6OKzr4Oz7RJ5kEhAPk7NAQ42Nw6Madz2V%2FPxSKJ0mLaGqo4%2F29aLDRt%2BSBbwCuBemU6yw6g7MD7FBibwanbbivtdoiwDdHDOMIjuKEQ1sUuUJ&X-Amz-Signature=1016a8eb46507d7c68411aff1ff0dd77b3e7f04486218ff51c2e2f919019fe96&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4LMTUW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDOq3sJLAJlL0kX0jg5SeJxGZzKAz86DdtyG%2FHs9o5GQIgeEanf6yRt5rFDpgk0OCEsyLX%2BOskohxkhJQ1gmb3RnYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOC1WV8YlHfzTn%2FamSrcA2qBGMJdsVDLBLfzADvFfi8ZAU7I3LGuYB5Pv3gzcf%2FxAx9dwi6wUoLhhRoMVDzKHqy5yX58prlKgHovaTdw3FiKgQ0qJsX8Gbk8HD30NgOvQHc%2F%2FrwTbY40siaNQTyl0zL5bcpKiJSk0UXrCPmPCnXDCjKNat%2FUpGpHpkNMaOhtyYurSJ%2FuSqM4EhWgtI9X6NuYuX9ePNHQZiMpUJbgAlWYdQKlm4v%2FGRmDdU%2FW%2FYgYrWF905F4LPIqJ5C3Nq%2Bf4cPTNTcADKmgAXmYb3WbjHeNHOXJ3kAjgT6Qn1PonIxK2ltCtN9ZzV%2FMlEUWkhThXnzi1T%2B0KQoFFXZVjVFnQbeYgwMAj3oOoYuqbip61WjJvUnGNbvDCI5enQdJbOU%2FO0ZkoxdcoJ9CUkqEyrjQcjrXrS8wIEhkuHe8mOifv91d6RPmrDeMf2IqNhKQ99CYPIXpPYvlzat9Z9SKG4aVYPFWlzR4mu4SE4uhaEOWnnsbcNkRw2LbUODJSBn9h3FFua3zhGsZ3bb%2FsKiblluuhN2FXsZH08hxOr5xGOkOCYM%2BHJGrb4MZfb%2Bhfwmh2ga9sI7bWQD%2BA9fh5ICReGnDxWhEJzeb7SsvsYKw4jbn1Wt3BdLCsesi615OBTB0MNiQ3sEGOqUBvBMiGeH9LBMbMRAr5EVUBL6DwKl4gYxjZAOM%2Fw97b%2Bf%2Bx%2BRyqDziwu7emZ7qWJcml5dK8%2Fclhgn4nO4t6fs2GncK7YUCI6sasnYeh6SFSFVAO2P6OKzr4Oz7RJ5kEhAPk7NAQ42Nw6Madz2V%2FPxSKJ0mLaGqo4%2F29aLDRt%2BSBbwCuBemU6yw6g7MD7FBibwanbbivtdoiwDdHDOMIjuKEQ1sUuUJ&X-Amz-Signature=746130360a9c905d1b9a91254c08a35fae952a01ef5819ac38d3e2dbfa7035bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
