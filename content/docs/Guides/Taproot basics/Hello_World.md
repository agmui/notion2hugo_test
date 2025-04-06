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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVAE6XKU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBURJbhJv%2F%2FNj8Bp6QkYuenIprE1%2Fb4hjnFZZe3Mkj0mAiBPudffav3Mh4vLouwe5BWV1RXYNl9SmIYAZOSdlhOqCyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM83C6iG6q4UkZ8%2BOOKtwDj%2FjBU9KUHBPOqvkC32d2Pc89yjLzxXKUvCn42%2FxlgHFikeEYG62jPhBPd%2FOieIBVmUobA7h9NCZm3WXJHFEathlpGKxVdgeyLQZTfR96faLbE0W7RVNqb9qFKvpQIe2Wit40YHCrsmkIg8vuKbmVMawyo%2BHzoeQn0K%2Bo7PVkQpjl6LiJ6H25uW43vq7cLBdp6Pgndy%2FrnXunLlGzCqjwriGF5yr6zQGATGEbWfkolzKQxgPAEcNfyILIcQOUlq%2FcClq7b6kCE4ZuIdHrXyMhPWiW4%2F8NWgs0vi5%2BuEmGPwUmDAAi634N66p%2BWeKnfZGj8OuhBw1XzhC95O8BYSg2iMqJpAiQBG19zxzdqb8PWhtkwxMWzA22%2FfUwsya4gVPcwxHu9gbp%2BAVzMndh%2FmBQfdwHoJAhhlsqkK0AYzE867DpF80hPW14qNRxezncjkNpV5DlMGS8qBQJEKwObfmE7tmMF1QWSK8XM14IIDbZ0UxVRmVseKSmmAWYlTGC%2FnOdA9jA5uTk58bjXlLqK9T9DFKZznvhAj%2Ft1YFNXzgdrdCvtHlJxxtfHjr3M85RJ6KCNhkNyNAmOJ4YyazVqrlRbGpmSgBHnPk%2FbHu2qU6ntjGVh%2B3CYzkNmx1rxVYw4J3LvwY6pgHcKqrqRFF2G6dt4qCBpShKkzaC6ipSrgwUhQCW0TQSq%2F%2BKC3gKA%2BpNJFSfy1grBhuxCXoXUxiBsq8%2BTPPmjrbVEpLYP1TRDp1doUrbPKPG4FApJsOkuFAI2MJ%2FMEPSbqbOuyJS%2F4A4XdZTS36AI4Npdlp2OSbptJv%2FFtMFKmz2OoCzluc7CDELcA6Mu0%2Bre19p7lYfdRUaJj%2FE2NiZ2X%2FjzYSPZwUW&X-Amz-Signature=58ed7a9dd450ba5a2ea23e64821f4ee5d01abe9bb8cfe4bbbc74a3fc2deb3fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVAE6XKU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBURJbhJv%2F%2FNj8Bp6QkYuenIprE1%2Fb4hjnFZZe3Mkj0mAiBPudffav3Mh4vLouwe5BWV1RXYNl9SmIYAZOSdlhOqCyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM83C6iG6q4UkZ8%2BOOKtwDj%2FjBU9KUHBPOqvkC32d2Pc89yjLzxXKUvCn42%2FxlgHFikeEYG62jPhBPd%2FOieIBVmUobA7h9NCZm3WXJHFEathlpGKxVdgeyLQZTfR96faLbE0W7RVNqb9qFKvpQIe2Wit40YHCrsmkIg8vuKbmVMawyo%2BHzoeQn0K%2Bo7PVkQpjl6LiJ6H25uW43vq7cLBdp6Pgndy%2FrnXunLlGzCqjwriGF5yr6zQGATGEbWfkolzKQxgPAEcNfyILIcQOUlq%2FcClq7b6kCE4ZuIdHrXyMhPWiW4%2F8NWgs0vi5%2BuEmGPwUmDAAi634N66p%2BWeKnfZGj8OuhBw1XzhC95O8BYSg2iMqJpAiQBG19zxzdqb8PWhtkwxMWzA22%2FfUwsya4gVPcwxHu9gbp%2BAVzMndh%2FmBQfdwHoJAhhlsqkK0AYzE867DpF80hPW14qNRxezncjkNpV5DlMGS8qBQJEKwObfmE7tmMF1QWSK8XM14IIDbZ0UxVRmVseKSmmAWYlTGC%2FnOdA9jA5uTk58bjXlLqK9T9DFKZznvhAj%2Ft1YFNXzgdrdCvtHlJxxtfHjr3M85RJ6KCNhkNyNAmOJ4YyazVqrlRbGpmSgBHnPk%2FbHu2qU6ntjGVh%2B3CYzkNmx1rxVYw4J3LvwY6pgHcKqrqRFF2G6dt4qCBpShKkzaC6ipSrgwUhQCW0TQSq%2F%2BKC3gKA%2BpNJFSfy1grBhuxCXoXUxiBsq8%2BTPPmjrbVEpLYP1TRDp1doUrbPKPG4FApJsOkuFAI2MJ%2FMEPSbqbOuyJS%2F4A4XdZTS36AI4Npdlp2OSbptJv%2FFtMFKmz2OoCzluc7CDELcA6Mu0%2Bre19p7lYfdRUaJj%2FE2NiZ2X%2FjzYSPZwUW&X-Amz-Signature=11ef673d3fce68085fea91a22a9b504610afe89bc7df62cc429b26a07b13d201&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
