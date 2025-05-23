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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XQWI4H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDBcl077AplkW6yDYxN4uc2JExaOXMbZsf4uus%2BJFOIBAiBQwV1JvyGpkJo40ucyW8f%2B5fgR3rOX1YFg8d8Y6bnM1SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiC9u74sbKYS%2BRoSeKtwDZg99s%2FVK%2FMRhPvu9fMAsoNfQz2uX%2B8Y3WbkFM0G9YwbJS%2BRjQ2YNsAiQ7IAquCZ6I79NX6eWM2RjPi9KPzFTYTfDnjilEeG8mCIJFlXLH9y4VmrKc0eJxPqICMv9hQcyJb0vqrzIHvyE%2BN1gThsLiM58suPV80znkYdD6zQt5m83bgSzhluRu%2BVW7PsgVBPIXgwlxyW9ssncgCXAaLeipPbT%2BA4fcFOD5NlKoW6HOhok7I3ZV7MJl4tLKU63H1gW0oYZq8L%2B259PJGr3I%2F2hIwQjb9EQQAqAulnwLQKr0xWGHCshJhSny6bWkGDDpFZXyCwSO6Oq8kfnAOa2G4bthBgqXqjcnZNpYPQPA%2BNDiIasXQz8p7T7TfEXO6FdsUYZB9uY28GshiL5c2ic%2BJuNADVreCa5BXHbOr9OCaI0Ml9952IkxPMjsH4lrO%2FkFK7uWAasNBHvgaO4L%2B3FbOkJxk7oEPwQxEgi2ORTQotOBw5NPHHU%2FXwMKc40khdQznDdMuxyvtQhq8Uo6Fht4cUAAxupCfj8OJ%2BqvApLT6HS%2FDCf9GIlb0Exc9dTb53kOCQ87jbjGVf2LJ47gRESTgnG1okoOzjXwFRMbUKzfwEjJCBG0nCpl%2B59V%2FM0Kmgw8KHDwQY6pgHwju9xo19EWxeE8TbANNPfYk0LfA8ta6bKkTSpXY4snbUmmpvysHl%2BTSapThGcnYr3JQihfVZqHEBWz0x8pqjnaQcJPrOe2xzC5xujDlCJ%2FuwkjxfK7XCtw9haaUFHy0jc1VXSBa5Inp4Y3%2Bo9MDskjtsZ%2BoFdOT4cmcpljG0TgUQbW%2B2CjJ0NTD5JeTZ%2BNvD%2BbuPLQqS2PGt3FWidry1PC8ThRMYt&X-Amz-Signature=33730d7180e58b8408025d0c2a8357aa3360c9d14d6e107b17890051d6886e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XQWI4H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDBcl077AplkW6yDYxN4uc2JExaOXMbZsf4uus%2BJFOIBAiBQwV1JvyGpkJo40ucyW8f%2B5fgR3rOX1YFg8d8Y6bnM1SqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiC9u74sbKYS%2BRoSeKtwDZg99s%2FVK%2FMRhPvu9fMAsoNfQz2uX%2B8Y3WbkFM0G9YwbJS%2BRjQ2YNsAiQ7IAquCZ6I79NX6eWM2RjPi9KPzFTYTfDnjilEeG8mCIJFlXLH9y4VmrKc0eJxPqICMv9hQcyJb0vqrzIHvyE%2BN1gThsLiM58suPV80znkYdD6zQt5m83bgSzhluRu%2BVW7PsgVBPIXgwlxyW9ssncgCXAaLeipPbT%2BA4fcFOD5NlKoW6HOhok7I3ZV7MJl4tLKU63H1gW0oYZq8L%2B259PJGr3I%2F2hIwQjb9EQQAqAulnwLQKr0xWGHCshJhSny6bWkGDDpFZXyCwSO6Oq8kfnAOa2G4bthBgqXqjcnZNpYPQPA%2BNDiIasXQz8p7T7TfEXO6FdsUYZB9uY28GshiL5c2ic%2BJuNADVreCa5BXHbOr9OCaI0Ml9952IkxPMjsH4lrO%2FkFK7uWAasNBHvgaO4L%2B3FbOkJxk7oEPwQxEgi2ORTQotOBw5NPHHU%2FXwMKc40khdQznDdMuxyvtQhq8Uo6Fht4cUAAxupCfj8OJ%2BqvApLT6HS%2FDCf9GIlb0Exc9dTb53kOCQ87jbjGVf2LJ47gRESTgnG1okoOzjXwFRMbUKzfwEjJCBG0nCpl%2B59V%2FM0Kmgw8KHDwQY6pgHwju9xo19EWxeE8TbANNPfYk0LfA8ta6bKkTSpXY4snbUmmpvysHl%2BTSapThGcnYr3JQihfVZqHEBWz0x8pqjnaQcJPrOe2xzC5xujDlCJ%2FuwkjxfK7XCtw9haaUFHy0jc1VXSBa5Inp4Y3%2Bo9MDskjtsZ%2BoFdOT4cmcpljG0TgUQbW%2B2CjJ0NTD5JeTZ%2BNvD%2BbuPLQqS2PGt3FWidry1PC8ThRMYt&X-Amz-Signature=d9badbb18584ae446ec8f94c947d3c4ae9e00586fa310964cea9b8db0a0b1c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
