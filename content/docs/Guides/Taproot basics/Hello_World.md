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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSHUK6A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIG%2B%2Bd6M7rES0IsnhKkdbv2zCqj1R1ZWXqkVPI1%2BRvxiuAiEA%2BS7xXubkqzeHIvrzuuWKFh39UWTwupcSldwh5KpoxtcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WQf36hIfWI7NLkCrcA%2FMrsdR8lMOlbQFf7%2Bpu3NxRwxCYD8wXR5xAYPtNLQtOoDpHK7eA8xwXiRt8%2BOacTu67RDL62bEuHf9%2FFHyCa1%2BHO%2Bgnd5zvEGqr1nknUWmiimdQ%2BpMJbWBbK8LYVRhRr6EW7ORftKUYe66irJEmfMjK%2BctBVdwlLDcIUz9Ef72NYqKwS992OwBWdWEoGD%2BoyDJlZoCFow0PPM7gwDwTBjuOK%2FSn3liSTMKl2AynCZY4xnUPZf%2FFu1EXLSGxKr4GpbHxuV6JcqVzkERX4AzJKChpRsy%2BCwzBqu%2FWXeVjDX8X13n0sb6QCP1WGP0cY3vb8qWBSZy8n4Fw4aqll8ce2wRiGT8hQjXF6qj3vzNxx1QbpTFuBalHUHlAdRsjq%2F1koLgQ27j%2FrnamVxSGzKuXXwsn0K1Y1U2yP9JZJsF5%2F0fdbcxOYlocTuB%2B4LZ9JIy0XEzcuOgUA%2FTcZTx2erLMAY0aUuaaHwhw%2BW%2BnvxY9Vr8GAXZIohjVhvKAtwTWIzCDQToZ4H9OWfpmZtdChffnw7UHhaFcQi%2FgtUiIKoJPpqRO7vqGtYz5aKFQZYFMtdO7NhnRQVuENXUm9eqtkwUBtLrq%2FM%2Boe6cEyt3A1pb0gTjbhYocIA6XzQsl9kuuMIDX4tEGOqUBxybVO6EBQkwn5oJEYQU6wom9JdCoZz77WADLRDObT%2Fi%2FaJ0Bf5LMxebA%2FGUqDhH7jLcLKNflhI8PHHyjvf639eLKMs5fIutzqCiLGPiLfLBqJ2hEG%2Bj%2Bd%2Fip7GaXWis7yUnC%2FgDFtNoAPh8Zjf1%2BUofGl9pbqUanChcR%2FMmNRgWgUAgxvRfJa284UgaeLvDmiSVPYd%2Fh70wHUTDXulN5iELFHImB&X-Amz-Signature=a50dbe220d3cf077a2486a17aabc8c2f696b7c3ac8b81868c840c2deaec10545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSHUK6A%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIG%2B%2Bd6M7rES0IsnhKkdbv2zCqj1R1ZWXqkVPI1%2BRvxiuAiEA%2BS7xXubkqzeHIvrzuuWKFh39UWTwupcSldwh5KpoxtcqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WQf36hIfWI7NLkCrcA%2FMrsdR8lMOlbQFf7%2Bpu3NxRwxCYD8wXR5xAYPtNLQtOoDpHK7eA8xwXiRt8%2BOacTu67RDL62bEuHf9%2FFHyCa1%2BHO%2Bgnd5zvEGqr1nknUWmiimdQ%2BpMJbWBbK8LYVRhRr6EW7ORftKUYe66irJEmfMjK%2BctBVdwlLDcIUz9Ef72NYqKwS992OwBWdWEoGD%2BoyDJlZoCFow0PPM7gwDwTBjuOK%2FSn3liSTMKl2AynCZY4xnUPZf%2FFu1EXLSGxKr4GpbHxuV6JcqVzkERX4AzJKChpRsy%2BCwzBqu%2FWXeVjDX8X13n0sb6QCP1WGP0cY3vb8qWBSZy8n4Fw4aqll8ce2wRiGT8hQjXF6qj3vzNxx1QbpTFuBalHUHlAdRsjq%2F1koLgQ27j%2FrnamVxSGzKuXXwsn0K1Y1U2yP9JZJsF5%2F0fdbcxOYlocTuB%2B4LZ9JIy0XEzcuOgUA%2FTcZTx2erLMAY0aUuaaHwhw%2BW%2BnvxY9Vr8GAXZIohjVhvKAtwTWIzCDQToZ4H9OWfpmZtdChffnw7UHhaFcQi%2FgtUiIKoJPpqRO7vqGtYz5aKFQZYFMtdO7NhnRQVuENXUm9eqtkwUBtLrq%2FM%2Boe6cEyt3A1pb0gTjbhYocIA6XzQsl9kuuMIDX4tEGOqUBxybVO6EBQkwn5oJEYQU6wom9JdCoZz77WADLRDObT%2Fi%2FaJ0Bf5LMxebA%2FGUqDhH7jLcLKNflhI8PHHyjvf639eLKMs5fIutzqCiLGPiLfLBqJ2hEG%2Bj%2Bd%2Fip7GaXWis7yUnC%2FgDFtNoAPh8Zjf1%2BUofGl9pbqUanChcR%2FMmNRgWgUAgxvRfJa284UgaeLvDmiSVPYd%2Fh70wHUTDXulN5iELFHImB&X-Amz-Signature=dea6b85ff3b1fb8ae8521342adf4a590b3b4a3c5bfb74626ccba56aec2b43a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
