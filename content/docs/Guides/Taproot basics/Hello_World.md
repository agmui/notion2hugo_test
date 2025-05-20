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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITC46ZM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdDytchRbZM8H6ghYJKf1bdCrSp1Dcd%2FIOXBW1WbfD6AiEA1vtvHA%2FSfleKzypEiv0CZtIEiMktW0XU9lJPDXo5jiQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO1gRnmlro8wTZcdCrcA00UWTSFgfYLyZuWr0M%2FFbFiNsxhsUCwv9qFVSTVycFxq1v4rqoOSnUWlb%2BLmKTfdViDYznPYat7h7U9vkDQ1Ipnm3mjEvkMhk7kFMoMOP4744lQ6IFFlhGiojTImKvyc8436E9KMdu8EGJ06cn3tJXecA5YfPy2XtbOM1zd2DfcdJVWNd7w9daW6EC28Xl48tUSJfLrU1rtbE32I9cYFvdX7uNoE16EaLxfFjrdQYgJDuV8LqtlxVLyqj8ha8%2BFBaNxeXPpLSICBS6tXxFoPIRmLM5IXFeW2TOnSRSYb2br%2B3HGq9RU7jezAq378ONrnfwdwrGiomlaV4Gv9tHn4VmW%2FSBWXVxXY5Jl0gRaxlDPuEFWHRZ99de0pSkR7nqG6pxzyuEc16is2wng6Xzpu72NHoXsOEJz7SEvxEFJbuA0GZnY9NXczFDMv5YeX3NGOhymJDxfn8vV7hZOmjvA8Nt5rtv5M%2FhKw%2F%2F9RL9N81qJBMzSqtJmP4Hlf%2FJvEcyFeLrVlkU8TFWTKrOifpgoDSKlEEaPs4EaKD0kTAMPkZ0bPQuIBZBEgRr%2BMMNrcy1b7EZ3vrvcBqrhjM743I2eXkHFldrVY1OHaQyjxp5L9QK9BamSF5ogaKUc8nB3MN%2Fir8EGOqUBHXLwNumvl%2Fi5q00J9e3iin%2FsqAn77%2BR1EAHV%2F4XixgqkPQk2sTVPz676Xb3ZnrzHbPzhJDosV4TNBclH4dD3F2MTe2ejl0ThUCWZlakXAcnInfhmbNIQnD0sc9tmc%2BO%2FvzkLI5hJkIGdPcrcuDFFycR%2B0XUyHgQ9Bz%2BvOUR2C6VTvgBqxYH0pDhReAGVYbwlA%2FGyGiT0R7xzQsNXVR5u7BszxXrS&X-Amz-Signature=9a39003ae380336f94f3dec45e761de099840be569cf28d4c37c791013ab7038&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITC46ZM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdDytchRbZM8H6ghYJKf1bdCrSp1Dcd%2FIOXBW1WbfD6AiEA1vtvHA%2FSfleKzypEiv0CZtIEiMktW0XU9lJPDXo5jiQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO1gRnmlro8wTZcdCrcA00UWTSFgfYLyZuWr0M%2FFbFiNsxhsUCwv9qFVSTVycFxq1v4rqoOSnUWlb%2BLmKTfdViDYznPYat7h7U9vkDQ1Ipnm3mjEvkMhk7kFMoMOP4744lQ6IFFlhGiojTImKvyc8436E9KMdu8EGJ06cn3tJXecA5YfPy2XtbOM1zd2DfcdJVWNd7w9daW6EC28Xl48tUSJfLrU1rtbE32I9cYFvdX7uNoE16EaLxfFjrdQYgJDuV8LqtlxVLyqj8ha8%2BFBaNxeXPpLSICBS6tXxFoPIRmLM5IXFeW2TOnSRSYb2br%2B3HGq9RU7jezAq378ONrnfwdwrGiomlaV4Gv9tHn4VmW%2FSBWXVxXY5Jl0gRaxlDPuEFWHRZ99de0pSkR7nqG6pxzyuEc16is2wng6Xzpu72NHoXsOEJz7SEvxEFJbuA0GZnY9NXczFDMv5YeX3NGOhymJDxfn8vV7hZOmjvA8Nt5rtv5M%2FhKw%2F%2F9RL9N81qJBMzSqtJmP4Hlf%2FJvEcyFeLrVlkU8TFWTKrOifpgoDSKlEEaPs4EaKD0kTAMPkZ0bPQuIBZBEgRr%2BMMNrcy1b7EZ3vrvcBqrhjM743I2eXkHFldrVY1OHaQyjxp5L9QK9BamSF5ogaKUc8nB3MN%2Fir8EGOqUBHXLwNumvl%2Fi5q00J9e3iin%2FsqAn77%2BR1EAHV%2F4XixgqkPQk2sTVPz676Xb3ZnrzHbPzhJDosV4TNBclH4dD3F2MTe2ejl0ThUCWZlakXAcnInfhmbNIQnD0sc9tmc%2BO%2FvzkLI5hJkIGdPcrcuDFFycR%2B0XUyHgQ9Bz%2BvOUR2C6VTvgBqxYH0pDhReAGVYbwlA%2FGyGiT0R7xzQsNXVR5u7BszxXrS&X-Amz-Signature=9b7a3bb9420c6cce087f466a8d3b760f2b4c270689200d4f31d81f29e9268b80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
