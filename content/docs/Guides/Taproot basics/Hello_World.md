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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISFPFEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI9hKp%2FfLb1LXE0IbarR3jcA3jVesJscTcOC4DRMneSwIgbFB5a3AEanB%2Fj6ZKwPV%2Bq3EXwyTlhmNjdXhat1Xb7pEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMefSvvfvebps2tsmyrcAy8OJSVf5MqG6x4WH7hVF4HKDNKBqBvN6%2BT4lB9Vs7KX%2FWEiKs%2BPzWwNmXvh3eY0m5FWFLJRGpSe5J6A00ChRQ9S%2FdT0moSpQTNFRnBfD1qpdpkf8EXO2yW5csjekUtxSNwQn2N9JpMKij24J6NVSWOoTT53wxq7iB7btAkszxGKn4ldC5iN5p9RWLR1WBY5qeD6ieXc83RL2kPhFDdlG1WskD1wscUq7ukxJlZN8oTald76dffr88A%2B6MhsCeQzNWL6OeVP%2B1WXyL9BpB5ZNz%2FTnmGXL7zPoPHVacDrYd48VQXAF8mKxim0pwV7WmjLkYx3CBx3bt%2FZmanO1aB36QmFXzkvFVnTN4QFeTMO6wrv%2Bopd6ijXAWbqW9AU2KnnC%2B4Xrv2AA9tgMH24%2FIUOzw%2FabIHv%2F7UFRqelsm0TJUPTDpN7A2EM13FPJXyAQTCjJCgVyQ6YI2pw39wMqXQNG9p0ebzRV56E6YJPk%2Bk1O%2F9O219G42k2nnneq09lWGJJz6a1mk50gsGzqgb4iYgtzr4uF%2FVuzJZHqLlP%2B5r0LPHzgmEhrehvdxYz3p%2BrHE8dZNNRgM79DsRHMA0USGKF9fJbOL%2FhAe6tBQAX6mnQu4e9YTsES%2FdJkJA89RqFMK39yMMGOqUBZuTQlMpIseA4rrdE6UfcoSGlmKS9EQw2vfetIGM28uoSDbvPqfyup8gegQlVl7Y0KRwS%2BAgEQ2G%2BWSjfO1jFE5mUyLVlXZUYbnLlT4l5RelXzonqpIaTLhJNDKZm7XEoePRV1O5090m%2FJ0ikxEvvF0e3wGtYvv58Lf9Jgkz%2BIvzvguJl%2B5q3BuZhFTqeDE6UKCF0mz6b5LenePnSoyRYJE%2BFfYI9&X-Amz-Signature=c9ee803961e29dc93bfb63b6d65c63b62a08de575a46389f8994420fc978ec42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISFPFEH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI9hKp%2FfLb1LXE0IbarR3jcA3jVesJscTcOC4DRMneSwIgbFB5a3AEanB%2Fj6ZKwPV%2Bq3EXwyTlhmNjdXhat1Xb7pEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMefSvvfvebps2tsmyrcAy8OJSVf5MqG6x4WH7hVF4HKDNKBqBvN6%2BT4lB9Vs7KX%2FWEiKs%2BPzWwNmXvh3eY0m5FWFLJRGpSe5J6A00ChRQ9S%2FdT0moSpQTNFRnBfD1qpdpkf8EXO2yW5csjekUtxSNwQn2N9JpMKij24J6NVSWOoTT53wxq7iB7btAkszxGKn4ldC5iN5p9RWLR1WBY5qeD6ieXc83RL2kPhFDdlG1WskD1wscUq7ukxJlZN8oTald76dffr88A%2B6MhsCeQzNWL6OeVP%2B1WXyL9BpB5ZNz%2FTnmGXL7zPoPHVacDrYd48VQXAF8mKxim0pwV7WmjLkYx3CBx3bt%2FZmanO1aB36QmFXzkvFVnTN4QFeTMO6wrv%2Bopd6ijXAWbqW9AU2KnnC%2B4Xrv2AA9tgMH24%2FIUOzw%2FabIHv%2F7UFRqelsm0TJUPTDpN7A2EM13FPJXyAQTCjJCgVyQ6YI2pw39wMqXQNG9p0ebzRV56E6YJPk%2Bk1O%2F9O219G42k2nnneq09lWGJJz6a1mk50gsGzqgb4iYgtzr4uF%2FVuzJZHqLlP%2B5r0LPHzgmEhrehvdxYz3p%2BrHE8dZNNRgM79DsRHMA0USGKF9fJbOL%2FhAe6tBQAX6mnQu4e9YTsES%2FdJkJA89RqFMK39yMMGOqUBZuTQlMpIseA4rrdE6UfcoSGlmKS9EQw2vfetIGM28uoSDbvPqfyup8gegQlVl7Y0KRwS%2BAgEQ2G%2BWSjfO1jFE5mUyLVlXZUYbnLlT4l5RelXzonqpIaTLhJNDKZm7XEoePRV1O5090m%2FJ0ikxEvvF0e3wGtYvv58Lf9Jgkz%2BIvzvguJl%2B5q3BuZhFTqeDE6UKCF0mz6b5LenePnSoyRYJE%2BFfYI9&X-Amz-Signature=cfebc86c55a291e080d7d3793c7aa3440c4d80df14958a473ba36b4deccb00c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
