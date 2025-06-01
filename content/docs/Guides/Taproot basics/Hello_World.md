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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJW3VEI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICQgT7KyqNGf8Z7uN5CaammzoELTyGQ1V0%2F5TleiEFJxAiEA2wwnFV1cuZpAPnzN9U4MrQ%2B7QvrJlg84sTTbJcJF%2FskqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC4uhTmQHQHPT2ONSrcA%2FPsq%2Ft416aCE4NoCkjpDRrDURRfjsRWVdflTlEz64N6KFlKrv4sHNRCM8K9MUwskN7sWyqYEdP5wJYIAbLJMz9njtmWqpaPml4Ok%2BU8n1Uiz6E0dsqthz%2FYKRjqeRik76miwjLlZNDvZYqN4Dw4tHzmAW4PsAg0xysTSXdZ6lk0Z9K5lnpsj25pPWe16r8FlH2%2FzLDHP67e0aPqLBN%2FOKrmZOSVUA%2BZIeZTWsARUn%2Fj2Q%2BSQGiDe4IQWLwmZrodQTin5S8F2SrE0jwuNMy6GN3iP2V8tfYUq6GsOUQ7uQloNNiwHeV4Rhwar3XYR3rSHmjgUgUdI73Viz4iM62wCb0GrUkwOjZgPOvQ9jWd6MeNRcXu75XqZZTxqKVSh9AO6M9kIcw1haGK7XmY8%2Fw51sM%2BIXFd08IP%2BbdhS6hWjxa6JouELjHw59rGhjkgYJf%2FZ6Qv1BC7B79rhXH%2Bs%2BZAxdsL456FE4OY36QboLnY6KjKTHZ1D0fNaCOjmHWbqZEwWFLU938Fbz%2FcVmoQLEAIPln6EMZ7unvnMxx5I%2B04nNEsRG%2FMq6Vft9RQjlYDRFR9dwCD2iNsDGSBYwOCOhAUJF1dCwuxXjSnGKNz7IBHbwukuoBY7O3%2FHOrAPHvzMIuy8cEGOqUBIENUwC7wr9mq45baVs5zU6noEmDF70xssfnpH5lIhEtA9F8UncOWfhy%2FLAGIhXsYMOXVW8QkSZGFenuwJFTL1IqpvrnhkXBMFYczINr%2BEtxJTDSsFn%2F%2BHMnabU7I5PjtZf9eBMNT27lsl5aQ9Gzqe4ZHGhqaPmmQMdG%2BVe2QCqSs47U19kPqzRnWTvs0jOxyyNoi2%2B3QO0k7yNs6nwWelH1weEf7&X-Amz-Signature=42b87d5dfc4b7b42bdc69def86f2348130dd9187a3b8ccebd71ae042f8d980b0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJW3VEI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICQgT7KyqNGf8Z7uN5CaammzoELTyGQ1V0%2F5TleiEFJxAiEA2wwnFV1cuZpAPnzN9U4MrQ%2B7QvrJlg84sTTbJcJF%2FskqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC4uhTmQHQHPT2ONSrcA%2FPsq%2Ft416aCE4NoCkjpDRrDURRfjsRWVdflTlEz64N6KFlKrv4sHNRCM8K9MUwskN7sWyqYEdP5wJYIAbLJMz9njtmWqpaPml4Ok%2BU8n1Uiz6E0dsqthz%2FYKRjqeRik76miwjLlZNDvZYqN4Dw4tHzmAW4PsAg0xysTSXdZ6lk0Z9K5lnpsj25pPWe16r8FlH2%2FzLDHP67e0aPqLBN%2FOKrmZOSVUA%2BZIeZTWsARUn%2Fj2Q%2BSQGiDe4IQWLwmZrodQTin5S8F2SrE0jwuNMy6GN3iP2V8tfYUq6GsOUQ7uQloNNiwHeV4Rhwar3XYR3rSHmjgUgUdI73Viz4iM62wCb0GrUkwOjZgPOvQ9jWd6MeNRcXu75XqZZTxqKVSh9AO6M9kIcw1haGK7XmY8%2Fw51sM%2BIXFd08IP%2BbdhS6hWjxa6JouELjHw59rGhjkgYJf%2FZ6Qv1BC7B79rhXH%2Bs%2BZAxdsL456FE4OY36QboLnY6KjKTHZ1D0fNaCOjmHWbqZEwWFLU938Fbz%2FcVmoQLEAIPln6EMZ7unvnMxx5I%2B04nNEsRG%2FMq6Vft9RQjlYDRFR9dwCD2iNsDGSBYwOCOhAUJF1dCwuxXjSnGKNz7IBHbwukuoBY7O3%2FHOrAPHvzMIuy8cEGOqUBIENUwC7wr9mq45baVs5zU6noEmDF70xssfnpH5lIhEtA9F8UncOWfhy%2FLAGIhXsYMOXVW8QkSZGFenuwJFTL1IqpvrnhkXBMFYczINr%2BEtxJTDSsFn%2F%2BHMnabU7I5PjtZf9eBMNT27lsl5aQ9Gzqe4ZHGhqaPmmQMdG%2BVe2QCqSs47U19kPqzRnWTvs0jOxyyNoi2%2B3QO0k7yNs6nwWelH1weEf7&X-Amz-Signature=17017804634a3212294d20fe4030fceba8a8401092b8686564c246edf0bbc8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
