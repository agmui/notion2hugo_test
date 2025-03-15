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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPM6QMR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqd9dHb3F5WV23wf%2F4K6w0KiDEpve0rSIdpIUJzKANkAiEA0B8ykxPy5I1osU00DX3JhmXuh2Ev%2F4Xxr8I81Kncscsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKqeC1GaOB2q7UTduyrcA5P5hI5ViMT6saXItjTW6giHbJOcP5G1pjXO2V4Wv9rIo4Od6m%2FTgOs%2B1J9dzk7d8aIjQKbAisjaKoPHbiPQZM6DMfaKIiuhPtEBIAwn6sNzcGEEjg6rUjWumwWKx%2Flf%2FqpSvKFfx%2BdSm2leG1aNeeDh8uwbg%2BlwWdI3xQ6hHi8HU7PGpVOsdkjAHp3HaL%2F1P7dpcYXW2bhA5lAPFmyClxL9y%2FlqRfmo%2FSQV1QqxARE3noLW4JKWDniWj%2FAE%2BiBq4mD0y3Di0qZ21YHBRf%2FxA9k%2BDmTqSIYvjnsksWv9k9h34e4JaYZEMobmj1K4FTZffJyhs9FxgG3opp%2BeVEyB5%2B4kHDtGdqXJXWFx8%2F7q5Iy2DAUSHfmWek60v32Lj2KUdbo0p1dmpZH9hrVd6oUzeJoWQXYZ27XVU8C1GBP7HEudW7NcQfyYoroz9%2BchGOVBv4TZANRmg7ZzaCnCzQuhSOcVsZN%2BdDzAQvc2s2rH7Z37X%2B6koOQtlrpfPL6BKHoxlkGg6RBI3qyQhESEzsI6SRWasb2CgfePJeu5piAsUTOmTeoieQXfW%2FBO6j%2BA3wjwfb3CPTApHv6kh0Ij36%2Btl20gdLG1XsRdcd2GY46%2FT2xjLrFzPEtYpyja9L1%2BMObu1b4GOqUB2QTiIRZ32BScBrXWqMmlFBwp8ZKRApugY9xrImK%2BYYWjTaIdhmWh2MHtOqVvrhM1vGTi5puSJCX2U%2FYWlb%2B7Ro22G9JVasbRLjk%2FsfMi8EsvpY%2FqPDg%2BPDdn6KDPp9cunB9%2F7CuRT7ObNwgiQ4Zjv%2Fr%2Bs3tIXiyFXpzPTdNq1yV%2BtHKiq35xFU3NSbafwja8m7glnlvNCLgWI84Jxkd40lVew3rJ&X-Amz-Signature=b9caa7621ee733faa857fa436c257b96653b8ff2fcccbcf8d56f13d910b49be0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPM6QMR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqd9dHb3F5WV23wf%2F4K6w0KiDEpve0rSIdpIUJzKANkAiEA0B8ykxPy5I1osU00DX3JhmXuh2Ev%2F4Xxr8I81Kncscsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKqeC1GaOB2q7UTduyrcA5P5hI5ViMT6saXItjTW6giHbJOcP5G1pjXO2V4Wv9rIo4Od6m%2FTgOs%2B1J9dzk7d8aIjQKbAisjaKoPHbiPQZM6DMfaKIiuhPtEBIAwn6sNzcGEEjg6rUjWumwWKx%2Flf%2FqpSvKFfx%2BdSm2leG1aNeeDh8uwbg%2BlwWdI3xQ6hHi8HU7PGpVOsdkjAHp3HaL%2F1P7dpcYXW2bhA5lAPFmyClxL9y%2FlqRfmo%2FSQV1QqxARE3noLW4JKWDniWj%2FAE%2BiBq4mD0y3Di0qZ21YHBRf%2FxA9k%2BDmTqSIYvjnsksWv9k9h34e4JaYZEMobmj1K4FTZffJyhs9FxgG3opp%2BeVEyB5%2B4kHDtGdqXJXWFx8%2F7q5Iy2DAUSHfmWek60v32Lj2KUdbo0p1dmpZH9hrVd6oUzeJoWQXYZ27XVU8C1GBP7HEudW7NcQfyYoroz9%2BchGOVBv4TZANRmg7ZzaCnCzQuhSOcVsZN%2BdDzAQvc2s2rH7Z37X%2B6koOQtlrpfPL6BKHoxlkGg6RBI3qyQhESEzsI6SRWasb2CgfePJeu5piAsUTOmTeoieQXfW%2FBO6j%2BA3wjwfb3CPTApHv6kh0Ij36%2Btl20gdLG1XsRdcd2GY46%2FT2xjLrFzPEtYpyja9L1%2BMObu1b4GOqUB2QTiIRZ32BScBrXWqMmlFBwp8ZKRApugY9xrImK%2BYYWjTaIdhmWh2MHtOqVvrhM1vGTi5puSJCX2U%2FYWlb%2B7Ro22G9JVasbRLjk%2FsfMi8EsvpY%2FqPDg%2BPDdn6KDPp9cunB9%2F7CuRT7ObNwgiQ4Zjv%2Fr%2Bs3tIXiyFXpzPTdNq1yV%2BtHKiq35xFU3NSbafwja8m7glnlvNCLgWI84Jxkd40lVew3rJ&X-Amz-Signature=9013a296d8dd60e4c61872855621dff75e87f5c8c0d3abb454ce9faa7170defc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
