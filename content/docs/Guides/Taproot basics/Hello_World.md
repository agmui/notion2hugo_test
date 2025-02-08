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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSHEPRQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICIHQRbzPf2hBxMVE1EnlWN4Md2nUkf%2FS%2BwNRhEffak8AiEAsdA1sLtoKsmH3GQeg3TJR3LoZb%2FRD8v5Fns36eA6krUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAe22lKNtDpRt5bVCrcA1pOFSa%2FbYSqTskk0iY7g85DpoTHVcrXI%2B6rXwgMn7qkmefNJtcvnMJhWdhZpxmX4kEbiTX9Wy0xPZkwQEpI4RCSY4FiDAjcnJ41samE1udlD7Dyj8bYtmwA2v6wgh%2BZDR0bYauP7MH2xVLwnOANHPSKn0oS%2BZpsoVoWTdRuXKDALR0ePtzLvm2hbY3CKfoazzcVSpf0ezHNkIa1Jop5Cd%2FyfyXjrydyV%2Bt2IkNKtXduXs1tKvSGyzMN%2BlgOtWfa6vQ70IZPxyZPNIy%2B%2B36%2F2OLLOhTqkAfdX679lC1eqPYPIle66K1pvJdKc6i4JzUvvMzWqGGuaDPefbXLMAeUJ7rTOL2WKknWWYhRDaGXynPWYqhLG0G5xKa6NGBoQz2Bf9yR5XjXRkqW0SnmhMEDHDbNByY%2BBy%2B55bDlZrd%2Ffwbua%2FrJhrHfCU37pBERHvpYapOb8xqDMBea1uIWfzHQvLI78coBu6VN37DM1T5koSFBGgxlAf%2BI01bcYvVUgYjDvU0SDrD%2F57ncKs8lNI%2FJdQBzppSTnwydDbr%2FyTw%2Fxz8Cq1XA1CrXPYRPOiFkTcvw0vOHXMpljQd3yPgSZVZNChRDOnpG2ULl%2F%2BY9AM66u1%2Fh4vNPbJynBGEwuuoDMJeYn70GOqUBVIkW11fl%2BL5W4wCu9HZBsVuDhXLGstmnZ9fFtCNygFvT1xuoNGcKgUluOvn5SfM%2B4A1oa1J7tkWGz%2BXPFK%2FqE7LPmTue6ufxHDVbXPlq0mQcWMt6fFsLXr6QQgCfgb4lBtfyq4NdWgUdmsJ1CUOUW6jIT5tZiqtFNEYURVseVo2JNYZLM3W1jObv5AAP%2Bf39ibDnNQvPlZBnZUKJ2K5HBrd9tA34&X-Amz-Signature=ce999f1c29ead6e1d769b0705e8c1ac7b79cb8a9619bdb86c50c408877b6ea8b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSHEPRQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICIHQRbzPf2hBxMVE1EnlWN4Md2nUkf%2FS%2BwNRhEffak8AiEAsdA1sLtoKsmH3GQeg3TJR3LoZb%2FRD8v5Fns36eA6krUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAe22lKNtDpRt5bVCrcA1pOFSa%2FbYSqTskk0iY7g85DpoTHVcrXI%2B6rXwgMn7qkmefNJtcvnMJhWdhZpxmX4kEbiTX9Wy0xPZkwQEpI4RCSY4FiDAjcnJ41samE1udlD7Dyj8bYtmwA2v6wgh%2BZDR0bYauP7MH2xVLwnOANHPSKn0oS%2BZpsoVoWTdRuXKDALR0ePtzLvm2hbY3CKfoazzcVSpf0ezHNkIa1Jop5Cd%2FyfyXjrydyV%2Bt2IkNKtXduXs1tKvSGyzMN%2BlgOtWfa6vQ70IZPxyZPNIy%2B%2B36%2F2OLLOhTqkAfdX679lC1eqPYPIle66K1pvJdKc6i4JzUvvMzWqGGuaDPefbXLMAeUJ7rTOL2WKknWWYhRDaGXynPWYqhLG0G5xKa6NGBoQz2Bf9yR5XjXRkqW0SnmhMEDHDbNByY%2BBy%2B55bDlZrd%2Ffwbua%2FrJhrHfCU37pBERHvpYapOb8xqDMBea1uIWfzHQvLI78coBu6VN37DM1T5koSFBGgxlAf%2BI01bcYvVUgYjDvU0SDrD%2F57ncKs8lNI%2FJdQBzppSTnwydDbr%2FyTw%2Fxz8Cq1XA1CrXPYRPOiFkTcvw0vOHXMpljQd3yPgSZVZNChRDOnpG2ULl%2F%2BY9AM66u1%2Fh4vNPbJynBGEwuuoDMJeYn70GOqUBVIkW11fl%2BL5W4wCu9HZBsVuDhXLGstmnZ9fFtCNygFvT1xuoNGcKgUluOvn5SfM%2B4A1oa1J7tkWGz%2BXPFK%2FqE7LPmTue6ufxHDVbXPlq0mQcWMt6fFsLXr6QQgCfgb4lBtfyq4NdWgUdmsJ1CUOUW6jIT5tZiqtFNEYURVseVo2JNYZLM3W1jObv5AAP%2Bf39ibDnNQvPlZBnZUKJ2K5HBrd9tA34&X-Amz-Signature=efb858b7f7c0c93020f5a06ffd1debc8d90a8537118d546c52f2a8cb3d9433a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
