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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=9f5c3b4650be95cd76caead1aab9ec91a5a5e3d2a9386dbd70fe453d383431f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=c1f8033a739e815a0c5d7484c17c0af4b2dcfd6627632f46ab5fd4b67bd2d2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
