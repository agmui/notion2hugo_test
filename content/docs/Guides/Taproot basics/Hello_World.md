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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHC7X4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIH193OPm2Y2cCU4PcekC6mqXy2nJ4DdCRnckvY6oXUatAiA0ieO7WvxK%2FUHFJeyJM7RpUuE%2BcLTZEtxK2R1HslZ7ECr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEoxRQC4HpLQTKxGkKtwD59DWPsYahybcjSASDlqnoWwd%2FT%2BZsrBKpDLzKOz4eFq7y06fZFTS4v4XO3H2TxyDI3stgC34Udn6abXVOqD2rtZXcszXuX5LpMI0A3GcMlTQ7b4dpRENwSMmvIWvmA3qBj0q%2FganoyFK4oTo38O7lAdaqYG9PiPYfhG4%2FLANT%2BZcrMUtNR275tyFbR9xuxit7LYkr7qbozs9xIbf8Skq1WbxoUl3%2ByhoLsqzgp4Njg3udjVqOaFfKnGnsNzNK98v2rAxU850TQUqfF5ENJ4oVDvYD%2BPn3uTCr2j0M54SWtMiUE7XQVDVLDzj3brmx4QwbxphWiEjhDq2QjsCLAO1TCx0fI6YRtdn4JpTlEIc9lFO4YRP%2F6ZW%2BVSXsNnNHRSXzHQ40EKjhczGGBmByDJ8TZrezhyPNYOqG85gaazuIPjfvJ9t3YsEJJ5YvU5APcTUn8WhIeOC8UrPi0N%2BKyGcMfOIeetEXVXtmu1%2FYOT9hRoZptsagNV%2BBlA8mjRORYzYLSTU86yZoxes34zAl2cvbh56cE41xDQ4S8CgjXOA8u%2F6GDbkXUWi44OsJmTP7PA6fc4ja49ZSSvIFvjdycJ%2B64%2BKg5ExZyS096Q7h0y0xuOfLgKKliwjaBbZ%2Fn8wg7yOvQY6pgGCmnsiKLa0ykXa632wAaxZLy45aDK3a7V3nuOIuM8BGIipWPyVrCz8fA4tAixavqjHuMAw7d6F2jYq%2FjlZmvoy8597xPRXuYymTwjW%2FX4QfljkuncTgwJ2y6JMgbusVwKzSJRYT5ODv3E6eHxz89x6N1T0PkJzlpfuxe%2F3jIYosUXMEVb7kK3x2T3AA6YENRuFDTUJRKbenUygCteMYeKQ%2FpcWXMDf&X-Amz-Signature=5fb0594ee9ed0c8e16eb8b9a76a90ed49343a04408e97773c9405ba977f7ce9a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHC7X4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIH193OPm2Y2cCU4PcekC6mqXy2nJ4DdCRnckvY6oXUatAiA0ieO7WvxK%2FUHFJeyJM7RpUuE%2BcLTZEtxK2R1HslZ7ECr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEoxRQC4HpLQTKxGkKtwD59DWPsYahybcjSASDlqnoWwd%2FT%2BZsrBKpDLzKOz4eFq7y06fZFTS4v4XO3H2TxyDI3stgC34Udn6abXVOqD2rtZXcszXuX5LpMI0A3GcMlTQ7b4dpRENwSMmvIWvmA3qBj0q%2FganoyFK4oTo38O7lAdaqYG9PiPYfhG4%2FLANT%2BZcrMUtNR275tyFbR9xuxit7LYkr7qbozs9xIbf8Skq1WbxoUl3%2ByhoLsqzgp4Njg3udjVqOaFfKnGnsNzNK98v2rAxU850TQUqfF5ENJ4oVDvYD%2BPn3uTCr2j0M54SWtMiUE7XQVDVLDzj3brmx4QwbxphWiEjhDq2QjsCLAO1TCx0fI6YRtdn4JpTlEIc9lFO4YRP%2F6ZW%2BVSXsNnNHRSXzHQ40EKjhczGGBmByDJ8TZrezhyPNYOqG85gaazuIPjfvJ9t3YsEJJ5YvU5APcTUn8WhIeOC8UrPi0N%2BKyGcMfOIeetEXVXtmu1%2FYOT9hRoZptsagNV%2BBlA8mjRORYzYLSTU86yZoxes34zAl2cvbh56cE41xDQ4S8CgjXOA8u%2F6GDbkXUWi44OsJmTP7PA6fc4ja49ZSSvIFvjdycJ%2B64%2BKg5ExZyS096Q7h0y0xuOfLgKKliwjaBbZ%2Fn8wg7yOvQY6pgGCmnsiKLa0ykXa632wAaxZLy45aDK3a7V3nuOIuM8BGIipWPyVrCz8fA4tAixavqjHuMAw7d6F2jYq%2FjlZmvoy8597xPRXuYymTwjW%2FX4QfljkuncTgwJ2y6JMgbusVwKzSJRYT5ODv3E6eHxz89x6N1T0PkJzlpfuxe%2F3jIYosUXMEVb7kK3x2T3AA6YENRuFDTUJRKbenUygCteMYeKQ%2FpcWXMDf&X-Amz-Signature=30a3438de1f624c5f8750ec39408e6a61ba4d47a5eb29ea5f04e84c766f49a13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
