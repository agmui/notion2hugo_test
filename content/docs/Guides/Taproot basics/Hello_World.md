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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RPPSL6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDPt3AgVxzuePJkYluiLQJpHVan%2BZIUgRoxWTIaynbd0gIgVccr6AEWBWn3P5J1JTk0CkeYhUbJQVmmGeG2lO%2BZ8mMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU%2FP5VLYv7JA6D05yrcA2ujXQen3pfaXGcQv9UGJJS0ljwUh6VYM0l1ZqRQN60LlcBVudeymvP%2BH1gFOM1zjnqaqwcG4Gts4w6%2BSlrz5Kd7Qw38agqdEUcQOWDYRh0rIyvJH3qC7nJ%2FKFcY1mIdjGAxRknQTO7xL7v5ToUxLQgC8qTPk1HWlNUkjW9rpZeXffqB3gNdExuRhQeoZ%2BGOVQHJjIGsPTxU2loLmPBdRsAWwscUvcum11COHaPqEjNcvxKczPsUPFfElwSfmMXiUsd4K8Mvtq1MA7rwNyblmT4VXienXMDx2erXAH3iA6lEGbPYxrwXDbSrxjP8jP5acU4jBpvqJ4xRKfGUZmenOnYc5yy3iiseln%2F5QLRv%2F7YNuczuaUgqoGuylxIJsQNp4tyf0GwwclKTAkWH%2FTO2FcP6XjsSyq%2BEGEawIGHhO9Ex0IuWjBhWgJxWCG5dnlk0PVOBBVjlEA1nas7a6V6P4v1paeyvUja%2BR1CXB3eP4lzLZEzf9399Due8u5lIiCCvd1DBpuhTC99TQ1B9ABQcv041vYb31DHnDQNLGLgeqitageW%2Fjw0nnA8SXIf9pHLtus3jn0SKqv3ZRwQT4UHv91pUQsaSCN1rkQSr9rCdDRKIB3P%2FxdKQpke9UjrwMM6TqcIGOqUBj5f6Zrenvr%2BZwwGry37j3RGDQLhYbAKR9JaiteE2dGngDywlj1c%2BYxOGoisoDYmJ%2BFPRi2BHpUD5EC40fTY1uhVC96uu4usjVwB0beY1IcBqoHIRlufGDMsadAk%2FNFG40sjKkv5atliyTpMufqjA6bVwMOo4Rg2MkBSrEXztMZ6GtGZcN7v8Y23%2F4IzhnT1vE3Cl0DUiNyztl%2FvLp%2FXdxawxxV7d&X-Amz-Signature=82bc4cc5ff548b0c89863ca017b4877ed5e24d3ae8c55d612ae00099ea2d0bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RPPSL6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDPt3AgVxzuePJkYluiLQJpHVan%2BZIUgRoxWTIaynbd0gIgVccr6AEWBWn3P5J1JTk0CkeYhUbJQVmmGeG2lO%2BZ8mMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU%2FP5VLYv7JA6D05yrcA2ujXQen3pfaXGcQv9UGJJS0ljwUh6VYM0l1ZqRQN60LlcBVudeymvP%2BH1gFOM1zjnqaqwcG4Gts4w6%2BSlrz5Kd7Qw38agqdEUcQOWDYRh0rIyvJH3qC7nJ%2FKFcY1mIdjGAxRknQTO7xL7v5ToUxLQgC8qTPk1HWlNUkjW9rpZeXffqB3gNdExuRhQeoZ%2BGOVQHJjIGsPTxU2loLmPBdRsAWwscUvcum11COHaPqEjNcvxKczPsUPFfElwSfmMXiUsd4K8Mvtq1MA7rwNyblmT4VXienXMDx2erXAH3iA6lEGbPYxrwXDbSrxjP8jP5acU4jBpvqJ4xRKfGUZmenOnYc5yy3iiseln%2F5QLRv%2F7YNuczuaUgqoGuylxIJsQNp4tyf0GwwclKTAkWH%2FTO2FcP6XjsSyq%2BEGEawIGHhO9Ex0IuWjBhWgJxWCG5dnlk0PVOBBVjlEA1nas7a6V6P4v1paeyvUja%2BR1CXB3eP4lzLZEzf9399Due8u5lIiCCvd1DBpuhTC99TQ1B9ABQcv041vYb31DHnDQNLGLgeqitageW%2Fjw0nnA8SXIf9pHLtus3jn0SKqv3ZRwQT4UHv91pUQsaSCN1rkQSr9rCdDRKIB3P%2FxdKQpke9UjrwMM6TqcIGOqUBj5f6Zrenvr%2BZwwGry37j3RGDQLhYbAKR9JaiteE2dGngDywlj1c%2BYxOGoisoDYmJ%2BFPRi2BHpUD5EC40fTY1uhVC96uu4usjVwB0beY1IcBqoHIRlufGDMsadAk%2FNFG40sjKkv5atliyTpMufqjA6bVwMOo4Rg2MkBSrEXztMZ6GtGZcN7v8Y23%2F4IzhnT1vE3Cl0DUiNyztl%2FvLp%2FXdxawxxV7d&X-Amz-Signature=8c2906bb5ae43cb09be191613381954495bc59e42689fea86c2b5937c5b229e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
