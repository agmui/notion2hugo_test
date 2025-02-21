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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZSCWTR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkftNJvjBqVjZXJUwI0n0QNAInkaj1HoFDAl3%2B2o7nXAiBihqiJvl%2FKb7PkWetjbkzGZorKh7WM8VFgYWgeQj5aXCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9p5wsRgEVYJ%2FVCTdKtwDGyVbK4fA5z1xeRNdy1BlFbyvPWq0Czn3zJUEjUF%2FuHZalFqxT0qpEDCqFTJifTD04z5jn4um8Lzja6Ex6l8fxXYV9r%2F%2B462xmXrUldnglIKz%2BtHIOcm84nWdFNvubjdVQFgLhl%2BxX4n48AOewcT1xNBeeyjFl3OMkqknLpNB0t7wOoYK16fXr0PdGQl75AnZchBUETlNqck%2FZttLPkT6WqxBX9Wsr0xKksAXPWM5F1J7b7RzkAprimjExc4xMKqw70nyBdKJXKA9q8bKHPDLPKTbl6oD8r03UjM1kzgndQf3B4ov31S8I%2Bu%2FbWHnoEOS2SBCRA8nldKO4GPJaHbe2y1v8YACYFOTrEmds4l9pQVGcQ%2B%2BxUbAT8AFpZTHQxOXwFLL9KMRg5cvh4sWCFW3WcPJ2j0ynXKMoBolvH5jTRLBY26Dg86%2B8LGxpZmtTllQ7kRI0iNcUoF89nnQDK4e7PPSGkzZUIjLvUme1bg%2BuKfbptNB0%2FNTSYHIMBnDXdxZFX2G1d3KuWA7i3vW4jSJuPgSLiLgRG7qELPt9QqrNlxarYzA19K2f%2FQjhJvzKN9ggm3bzBt9RcxvtTspKICghMeqDrEYku0kxz1oXmfLmo6lWFy49sP07EW3uEQwpqDivQY6pgGRsnprxT6qmy9%2FYsDqMEXX%2FTehb4pchkcBRZLxhMGsydaLApwa%2FGzsHAb1Uun6e2WzWGT7WcHvijuQYQOD6APuFXEO9mawVRpdMJ5P81Xay7VySUDlqIsuDkFZ8LzPdTdmCtNE1hWgSSqlIYFbN4lyWz%2FfOaGpMu2to04Br2J8rw%2BWt8s%2BHvoV%2BHSKAdMJpQzempwWYxqf8PiNvcNhQlW%2FSXiWkeIA&X-Amz-Signature=489d878f9ab9434907223997f9af1f08861062fc4e1cc9a12b2a29fb9a96a18c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZSCWTR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkftNJvjBqVjZXJUwI0n0QNAInkaj1HoFDAl3%2B2o7nXAiBihqiJvl%2FKb7PkWetjbkzGZorKh7WM8VFgYWgeQj5aXCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9p5wsRgEVYJ%2FVCTdKtwDGyVbK4fA5z1xeRNdy1BlFbyvPWq0Czn3zJUEjUF%2FuHZalFqxT0qpEDCqFTJifTD04z5jn4um8Lzja6Ex6l8fxXYV9r%2F%2B462xmXrUldnglIKz%2BtHIOcm84nWdFNvubjdVQFgLhl%2BxX4n48AOewcT1xNBeeyjFl3OMkqknLpNB0t7wOoYK16fXr0PdGQl75AnZchBUETlNqck%2FZttLPkT6WqxBX9Wsr0xKksAXPWM5F1J7b7RzkAprimjExc4xMKqw70nyBdKJXKA9q8bKHPDLPKTbl6oD8r03UjM1kzgndQf3B4ov31S8I%2Bu%2FbWHnoEOS2SBCRA8nldKO4GPJaHbe2y1v8YACYFOTrEmds4l9pQVGcQ%2B%2BxUbAT8AFpZTHQxOXwFLL9KMRg5cvh4sWCFW3WcPJ2j0ynXKMoBolvH5jTRLBY26Dg86%2B8LGxpZmtTllQ7kRI0iNcUoF89nnQDK4e7PPSGkzZUIjLvUme1bg%2BuKfbptNB0%2FNTSYHIMBnDXdxZFX2G1d3KuWA7i3vW4jSJuPgSLiLgRG7qELPt9QqrNlxarYzA19K2f%2FQjhJvzKN9ggm3bzBt9RcxvtTspKICghMeqDrEYku0kxz1oXmfLmo6lWFy49sP07EW3uEQwpqDivQY6pgGRsnprxT6qmy9%2FYsDqMEXX%2FTehb4pchkcBRZLxhMGsydaLApwa%2FGzsHAb1Uun6e2WzWGT7WcHvijuQYQOD6APuFXEO9mawVRpdMJ5P81Xay7VySUDlqIsuDkFZ8LzPdTdmCtNE1hWgSSqlIYFbN4lyWz%2FfOaGpMu2to04Br2J8rw%2BWt8s%2BHvoV%2BHSKAdMJpQzempwWYxqf8PiNvcNhQlW%2FSXiWkeIA&X-Amz-Signature=2abbab370692edfb5d19d9a4f2e4ce59dceb953be9a832d59164d66739444c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
