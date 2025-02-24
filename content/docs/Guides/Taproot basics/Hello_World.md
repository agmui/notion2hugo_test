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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ABXHPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjhCW03WfNqcKMqfhQV1Bc6OpnahnJ6rsRlIYgfYZDygIgc3xLql3aWnSxhYGgEIB2UPusM38aF%2BJ9XQN%2FKOKSh8sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIeOBynnKz60mVkssSrcA1oOv29OEuw2dQaSzej9F94kzE7VFJT6fFCx2fQT4e%2Bid8SqEZXLQZsL19EQyXxnZCf3LEWDoxZXQo2mTB724wzFDOEJXYlk%2BLSSx1vgPkHsZiYN6AunwFfbp%2F%2Btup2L9jPsnoq%2Bq3tZeEcGbmSebQ2RUTSdDgi0adHk0guSyuCA6aIxtRZoQ7Bea5uVPY%2FjWy%2BnIxQVoqwcd8QkgIex0h1fFKFQOlQM9YhmBHT51DYE7lrGm0loGM%2BcKCaHuME9Cmj6w3kFXG8za3%2Bh%2BEo4hAwkIjhVLpZQ3zYZa97Z4DirgkmiNSTwp2rzOjoG7Rq%2B9kl2QIxzicu3ra5L0Xw9F6nZlHc5lBVbKS%2Fn%2FY0pOJ10rRvITe3HGXhSV%2Bc%2BBVvbh%2FZogE0jBG1QQvnBWQbpwTYWXQ9owtvrRUpnHR7nQASbNbnMhnRqGQctHFoB5YvB8JpPJikzJhqGAAmZ2%2FdwdUudHP7N13MQDli%2Bd6eso2UG8myArWFJCPYYz7pbN54PAZ1uQbhphQGXXzVsMjuVz544jrQj4rHYsjrpxjE1%2FLiGvfsSfBPnsyVoXxugvUyXI1LQwzCaFonuYnaNcL9IvsSmnbI7fastdzdgTgEOrbzmqq2UhOIeFYHqF3FDMIXr8L0GOqUB%2BsYNz9zvKNLn7HCVAXtV9rR7rJ52eGoEhWurGOq7LEugXUZcnZllL1HExanGfHFWj0hVJaw4hLRGUJunie6b1ibM%2FewJtcVi4d0rOm1%2BRiwiM1Qs0ukm6WT80MzBDZHvk5VwKgiOh2d6I0zU%2FwqFWb5FPdvbjK43pkZFBuumyLMSEkjQyo6BUAsMISr%2F4Qzd%2BCJjmCy0KxEI205KLDGJ%2BQCRUCp7&X-Amz-Signature=54a0781ef5f37faf53b528690e31aeeb22b603dbdd1d2861c7c9456aee939372&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ABXHPH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjhCW03WfNqcKMqfhQV1Bc6OpnahnJ6rsRlIYgfYZDygIgc3xLql3aWnSxhYGgEIB2UPusM38aF%2BJ9XQN%2FKOKSh8sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIeOBynnKz60mVkssSrcA1oOv29OEuw2dQaSzej9F94kzE7VFJT6fFCx2fQT4e%2Bid8SqEZXLQZsL19EQyXxnZCf3LEWDoxZXQo2mTB724wzFDOEJXYlk%2BLSSx1vgPkHsZiYN6AunwFfbp%2F%2Btup2L9jPsnoq%2Bq3tZeEcGbmSebQ2RUTSdDgi0adHk0guSyuCA6aIxtRZoQ7Bea5uVPY%2FjWy%2BnIxQVoqwcd8QkgIex0h1fFKFQOlQM9YhmBHT51DYE7lrGm0loGM%2BcKCaHuME9Cmj6w3kFXG8za3%2Bh%2BEo4hAwkIjhVLpZQ3zYZa97Z4DirgkmiNSTwp2rzOjoG7Rq%2B9kl2QIxzicu3ra5L0Xw9F6nZlHc5lBVbKS%2Fn%2FY0pOJ10rRvITe3HGXhSV%2Bc%2BBVvbh%2FZogE0jBG1QQvnBWQbpwTYWXQ9owtvrRUpnHR7nQASbNbnMhnRqGQctHFoB5YvB8JpPJikzJhqGAAmZ2%2FdwdUudHP7N13MQDli%2Bd6eso2UG8myArWFJCPYYz7pbN54PAZ1uQbhphQGXXzVsMjuVz544jrQj4rHYsjrpxjE1%2FLiGvfsSfBPnsyVoXxugvUyXI1LQwzCaFonuYnaNcL9IvsSmnbI7fastdzdgTgEOrbzmqq2UhOIeFYHqF3FDMIXr8L0GOqUB%2BsYNz9zvKNLn7HCVAXtV9rR7rJ52eGoEhWurGOq7LEugXUZcnZllL1HExanGfHFWj0hVJaw4hLRGUJunie6b1ibM%2FewJtcVi4d0rOm1%2BRiwiM1Qs0ukm6WT80MzBDZHvk5VwKgiOh2d6I0zU%2FwqFWb5FPdvbjK43pkZFBuumyLMSEkjQyo6BUAsMISr%2F4Qzd%2BCJjmCy0KxEI205KLDGJ%2BQCRUCp7&X-Amz-Signature=94323319f21f2f85f16035302ca2a0de1f0cc3c14f9b7df20a5fa1a22a212042&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
