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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RU5RMXV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDrwKy8syZL8gmzjHbAync3TJzblNkeQuhreFLpMzC3wwIgCgyMvs5zqg7pxPbe2dTo%2BIFAJpBLWNpc3ReRWoji17sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNhHzE0Jl%2BfCFeOKircAyKr3928BQKLvhs82ffGuNFB5aCQnE0HNP3zzskpfR1SC1d3G393ACo4Nr6LJ0B4MfvoGvK%2FtoDBXTeAtMF2eWQdQj%2FXk11i8HtvL7h8hP%2F1UMNo9mFi1o%2BNGABSi%2FovgjFHZAuHUhrCISQ1k2hMVp0r2hzi4NepUabq5O8SqdCh5hK3IQUCRK1FlqTYc4NxP%2B2g7zJimcVlVrHQewxPE34xlghGPg3RtaDIa%2FlBbeA5TSdbtWmkvKWeHthnDL2E3q6SbrSqpz3QXtJNQg00pux4eto4zFnu2CaIvLluzoYSKG%2BvytditlzLYXxBC3%2FrUqIowAUloF5DuNY5m3sL2RqEAJrx44hB2r0DHqIYsaVcxeQl%2B8agxPRuc7nCceFgF8RaZVJCHJ3SyRxliV5La%2Fz09E1P%2FNd6C3HJnG7XHq6cA%2BAVJb5yR2OlY9%2BKqwb7Lb%2F4EDDBFsCaAyRjV2m7AELGPA8iFKR1Ogjs8wIjGVxg40iPgxOWwF0KH8k5t7GNS9hSZOvt5BBQhCmOzKLdRrvqSJ7FalefpM9itvgnwjQy9lvr%2Fkg4F%2B5miSvn04vQcLezS2kCOggAE5VscOlWMCUfS%2BaFY4R3n9cZ%2BeTuopb3sXMONakfEu%2FobhheMNr4xMEGOqUBUWJjSnzyoMoHF4gaeOz%2BaMq4wkVhx0OacW%2BW9XHeJSHuGbP9ilO%2BMoqv9HNlZbAJHZlH5PD1WANMWitH8Tu5SzOLFNP7Wmklgwos98FS7ygJL6%2B5AN23Zi2aG7%2BX1RWepWDoQb%2B4rBBteljAcf61O9RlX5mzkXA6o6nBc3Y8FZKcBNnEXm6533nEYgmPqBFWcCwj67eQmWmttfcypySaHAI1JW4x&X-Amz-Signature=86b5f3700df66c5b48603b1bfbcd8d09e39c1f5086730ac873bbe479c10d9784&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RU5RMXV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDrwKy8syZL8gmzjHbAync3TJzblNkeQuhreFLpMzC3wwIgCgyMvs5zqg7pxPbe2dTo%2BIFAJpBLWNpc3ReRWoji17sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNhHzE0Jl%2BfCFeOKircAyKr3928BQKLvhs82ffGuNFB5aCQnE0HNP3zzskpfR1SC1d3G393ACo4Nr6LJ0B4MfvoGvK%2FtoDBXTeAtMF2eWQdQj%2FXk11i8HtvL7h8hP%2F1UMNo9mFi1o%2BNGABSi%2FovgjFHZAuHUhrCISQ1k2hMVp0r2hzi4NepUabq5O8SqdCh5hK3IQUCRK1FlqTYc4NxP%2B2g7zJimcVlVrHQewxPE34xlghGPg3RtaDIa%2FlBbeA5TSdbtWmkvKWeHthnDL2E3q6SbrSqpz3QXtJNQg00pux4eto4zFnu2CaIvLluzoYSKG%2BvytditlzLYXxBC3%2FrUqIowAUloF5DuNY5m3sL2RqEAJrx44hB2r0DHqIYsaVcxeQl%2B8agxPRuc7nCceFgF8RaZVJCHJ3SyRxliV5La%2Fz09E1P%2FNd6C3HJnG7XHq6cA%2BAVJb5yR2OlY9%2BKqwb7Lb%2F4EDDBFsCaAyRjV2m7AELGPA8iFKR1Ogjs8wIjGVxg40iPgxOWwF0KH8k5t7GNS9hSZOvt5BBQhCmOzKLdRrvqSJ7FalefpM9itvgnwjQy9lvr%2Fkg4F%2B5miSvn04vQcLezS2kCOggAE5VscOlWMCUfS%2BaFY4R3n9cZ%2BeTuopb3sXMONakfEu%2FobhheMNr4xMEGOqUBUWJjSnzyoMoHF4gaeOz%2BaMq4wkVhx0OacW%2BW9XHeJSHuGbP9ilO%2BMoqv9HNlZbAJHZlH5PD1WANMWitH8Tu5SzOLFNP7Wmklgwos98FS7ygJL6%2B5AN23Zi2aG7%2BX1RWepWDoQb%2B4rBBteljAcf61O9RlX5mzkXA6o6nBc3Y8FZKcBNnEXm6533nEYgmPqBFWcCwj67eQmWmttfcypySaHAI1JW4x&X-Amz-Signature=54477b5f31e7358fddf9a2734eb89036c7649fa34fdf905075372f90ef527c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
