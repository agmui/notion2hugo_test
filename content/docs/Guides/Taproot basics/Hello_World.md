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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYAQ6YU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpi2qLgGMMov0A8ObaSdno2A3qwSX6Y%2B8u58XiI50O0wIgcKBhc4kCtpYZX25qre7kgHbWEmDQk3UyBlpfZDJBgV0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBAaru%2F69COeHefqCrcA2YX1hausiB2vdr8TkjwF2M5Vtls9J%2Br48%2Ft%2BBo5Qf751r8tqn6gvGJW6uQBa3Rt%2Fx%2BTIDXTPrMmlWKgeflEqjlQiQErcaXTNHA0VYhUzp0RkV0gke4qFKbIOuhgsBPo%2BRTvG%2BY5DF0sGkI9XQhaKYvu8eTfpKbcsH1O9mtqodyAp43fLR2F9BPYOzs78u9ZpoSfk9WHnLaP7J9dkgL41jRgIz9eh5qBNSGsf9Eu1zXoJS4uQaNinmD45o0JdGK1GjZTDXJqPm94OWzUT4vQPQMLiGFv6VyZkdSfOuO2U%2FwxXtqnYiURsDW3cEQei7wVuNOkDcll7v6fnpkTFphu2Tc0ZyXS5kFHzjrwAtSj%2B3s0gpNejpfGA8hT7nJxXEMPwSBYZ%2FR3xyC0w9bgKuOw%2FzdEOIYhbb7F36i18w%2FSREef7WSdehWIRFGnm1RPlHTK77avtlO%2BDZNXNqMmCzONg601lAbDySBBdF%2BolVkOxi01Zs9E4s9JRbOIs3hd%2Bbz8XYkqwG%2F5m%2Bmdz08Tlon%2Bi2%2BqQHhSdoeOjgJGcR9zF55OBhg5XKmX2IbGEX%2FoJkUfbXHpjEwUwROKTbsDyI6jZBmgBF%2FM2CjxLk5zrkKIOHDAPaZFsxHjFGCadXe3MKutscEGOqUBYURlKb8R%2BUCjOK2Tu1L3h9rSh4c1fQK3B2bKrwQJVIMQsHgAWzqSHVb9EAwFb8oegj%2BmJetIzQ4TucYxS5nNIFfk%2FKRpw9EHK5IPaEpQTBVZ0kB5LHOnv%2Fv5jZyDpSd%2BMn6X10gSJOFWPg0uX36woN6%2FyBQKiPraLkUFVXVp2gIO%2BspubRNqRV1hfAvomPI%2BeJDuThvou4PjEDTWh40wAWuXT%2F%2BJ&X-Amz-Signature=fd4f0fbabbfa9483a2b43a6b4039b28ee36713d317de7141c24c40b1f2e61df0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYAQ6YU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpi2qLgGMMov0A8ObaSdno2A3qwSX6Y%2B8u58XiI50O0wIgcKBhc4kCtpYZX25qre7kgHbWEmDQk3UyBlpfZDJBgV0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBAaru%2F69COeHefqCrcA2YX1hausiB2vdr8TkjwF2M5Vtls9J%2Br48%2Ft%2BBo5Qf751r8tqn6gvGJW6uQBa3Rt%2Fx%2BTIDXTPrMmlWKgeflEqjlQiQErcaXTNHA0VYhUzp0RkV0gke4qFKbIOuhgsBPo%2BRTvG%2BY5DF0sGkI9XQhaKYvu8eTfpKbcsH1O9mtqodyAp43fLR2F9BPYOzs78u9ZpoSfk9WHnLaP7J9dkgL41jRgIz9eh5qBNSGsf9Eu1zXoJS4uQaNinmD45o0JdGK1GjZTDXJqPm94OWzUT4vQPQMLiGFv6VyZkdSfOuO2U%2FwxXtqnYiURsDW3cEQei7wVuNOkDcll7v6fnpkTFphu2Tc0ZyXS5kFHzjrwAtSj%2B3s0gpNejpfGA8hT7nJxXEMPwSBYZ%2FR3xyC0w9bgKuOw%2FzdEOIYhbb7F36i18w%2FSREef7WSdehWIRFGnm1RPlHTK77avtlO%2BDZNXNqMmCzONg601lAbDySBBdF%2BolVkOxi01Zs9E4s9JRbOIs3hd%2Bbz8XYkqwG%2F5m%2Bmdz08Tlon%2Bi2%2BqQHhSdoeOjgJGcR9zF55OBhg5XKmX2IbGEX%2FoJkUfbXHpjEwUwROKTbsDyI6jZBmgBF%2FM2CjxLk5zrkKIOHDAPaZFsxHjFGCadXe3MKutscEGOqUBYURlKb8R%2BUCjOK2Tu1L3h9rSh4c1fQK3B2bKrwQJVIMQsHgAWzqSHVb9EAwFb8oegj%2BmJetIzQ4TucYxS5nNIFfk%2FKRpw9EHK5IPaEpQTBVZ0kB5LHOnv%2Fv5jZyDpSd%2BMn6X10gSJOFWPg0uX36woN6%2FyBQKiPraLkUFVXVp2gIO%2BspubRNqRV1hfAvomPI%2BeJDuThvou4PjEDTWh40wAWuXT%2F%2BJ&X-Amz-Signature=0f5cfeca51a3d0d6aa83cb729519c5d869c4b400788232ab37f526ae284d53db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
