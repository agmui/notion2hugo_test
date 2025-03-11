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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATT4T4U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCw6Rn7Ku7q2aeacoCscyqE40dQFiPCAH1Q7juoLGZblwIgG1k1e4PZs1VCXB%2FCHGBTrarF0bY2qYQWjjBdffW6bZkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdY0vCKELJlP%2FFkyrcA5Z3URqN9a8u%2FWAniyyYcP2LUp0LkavQgBB%2Bgq20MzqjyL5VlqcOuv5W7fiCjbR1ntj6XYWicbjmkWDQg8vZ%2Bt6aKFC7Jh9uY2oMGhjKBcruikGtE8KaNZbEuNxhmlvMY96Vp22PsXLQUO1eheq0DJ1s4a2%2BLq943fkMAzpSZRYsx88ixEFnjiI0ff3FRkQ5xFWt3A5lbdMb0TgRzUm2xDgo8cVF1SHocygFm4KURppCbaP8avwOdX9hhyu1kcj%2BvOuCqZEp9I8P%2BK1vKFJi3sUrKE5f5uPA4cJ8S4MHIpu51tOq%2FoeuyeZhhI9hAF0EYRdtPTR7DGGuuw9%2BqChVR6RnZkHB4yD3myrXRkGnUrIQUrXvv42sORxvjaZyVBOAAFwg0vEG3R6UtgrhHRA0aTa69qvsW8sN1hPHqrqUdnT2Uxvd5bNVmWo8EStiSUzQ4jongoX3uWCWZwwJURfhoAfgCqhfh4HAlcaNAHGhrbSTrIIyHAei%2Frr774XPLHpnXCembWRlf8nuga3umfg1RtRBu%2FmRVoVRl4R%2FOIU88fXOH%2FC7hP7N%2FcYkXqBMug8Wp14jf9XF3ycvDatHipGHOzYHMNZ3OHPxHycdCbuzH6gG7OnIVWldZStw4FviMNyYwL4GOqUB8vgeLPN8%2Bu%2BoC7UzapFUFpKAVhyD6ad9oYFyW4AR3mPu45jljMRUa0FyaRZ1aQSiLeXq%2BYFGVPz%2FBYFArXFCudx%2B%2B72t225KzZmz%2BosKgbi76xxNQ8TK3clUWkZY34jwFOo3O2cbXe9gdoaDXPJgqXcxHBz6MpN%2BbCIuGFgbZTW%2FK97k8hE7p83FocyGqHUrEWUdHPjsJsTjOFFp5OiAH0Kura6r&X-Amz-Signature=998b847324ecae75d3a0ad192e9e6d25692150f04a409872ff9b06eaadbe2eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATT4T4U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCw6Rn7Ku7q2aeacoCscyqE40dQFiPCAH1Q7juoLGZblwIgG1k1e4PZs1VCXB%2FCHGBTrarF0bY2qYQWjjBdffW6bZkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcdY0vCKELJlP%2FFkyrcA5Z3URqN9a8u%2FWAniyyYcP2LUp0LkavQgBB%2Bgq20MzqjyL5VlqcOuv5W7fiCjbR1ntj6XYWicbjmkWDQg8vZ%2Bt6aKFC7Jh9uY2oMGhjKBcruikGtE8KaNZbEuNxhmlvMY96Vp22PsXLQUO1eheq0DJ1s4a2%2BLq943fkMAzpSZRYsx88ixEFnjiI0ff3FRkQ5xFWt3A5lbdMb0TgRzUm2xDgo8cVF1SHocygFm4KURppCbaP8avwOdX9hhyu1kcj%2BvOuCqZEp9I8P%2BK1vKFJi3sUrKE5f5uPA4cJ8S4MHIpu51tOq%2FoeuyeZhhI9hAF0EYRdtPTR7DGGuuw9%2BqChVR6RnZkHB4yD3myrXRkGnUrIQUrXvv42sORxvjaZyVBOAAFwg0vEG3R6UtgrhHRA0aTa69qvsW8sN1hPHqrqUdnT2Uxvd5bNVmWo8EStiSUzQ4jongoX3uWCWZwwJURfhoAfgCqhfh4HAlcaNAHGhrbSTrIIyHAei%2Frr774XPLHpnXCembWRlf8nuga3umfg1RtRBu%2FmRVoVRl4R%2FOIU88fXOH%2FC7hP7N%2FcYkXqBMug8Wp14jf9XF3ycvDatHipGHOzYHMNZ3OHPxHycdCbuzH6gG7OnIVWldZStw4FviMNyYwL4GOqUB8vgeLPN8%2Bu%2BoC7UzapFUFpKAVhyD6ad9oYFyW4AR3mPu45jljMRUa0FyaRZ1aQSiLeXq%2BYFGVPz%2FBYFArXFCudx%2B%2B72t225KzZmz%2BosKgbi76xxNQ8TK3clUWkZY34jwFOo3O2cbXe9gdoaDXPJgqXcxHBz6MpN%2BbCIuGFgbZTW%2FK97k8hE7p83FocyGqHUrEWUdHPjsJsTjOFFp5OiAH0Kura6r&X-Amz-Signature=844e5391e040242612380d56842194e8ab0017f3c000ee655e3e6b2306a6e2b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
