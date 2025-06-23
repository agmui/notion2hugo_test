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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5UGINUB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFnfzRCoZi55kp4zsq5iE5wOXTXziEsqnwp92hDh7yWoAiAzFIapzPIgyOubgirwnqJn%2Bx3n2DanwGqcxDKnnjDgHyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMWxpMr%2BuOxXq1CjShKtwDSz5BcgN1Tm%2F8er9v9RzDfI3O8cXbmtMw5mWtuM0q1t2pgQ9xPUv0pYGnEZpe0ljvFW2nvHgrxSogfQD8wXWm6LDF3WUL3iEz5jSNMrkBEtQMbsgRewzXm3Uikf5nrZ782MiTSMyJun2ijLsdlu2qxT7KDHHlzQs7flcaB2dgNmANPPgcgNEZxUuxKalOHRgFfMNay2Jwzg0sYBOHIKhPC1QGRHKhmSPvk5I4VFyhxMCI2ibzrCjEQ9xxWXHQinA1tr8NW3Zl6yJXb2eCxzld%2BDTEBAuZiU1zTYoXREh3ZkvrjQQfz5PhhNhN71HTsORhibKxNuaSeIs92CwnzwzKrWqVuQfMaAoOF0oLUf41mnCZRCmrZkqKNXxgBztwsaroeU7KrImJH29YMM48CzO%2FS98i651wB07eo3pTmyF5QjUVqH9t0DsS4f%2BDCQA4EI5lBAg7LH2UWxzKDSOXj1a2nEIvGN5jGRdzXlMqAWpqmnb94KsKbKH4DnVraKreLzqkFN9dIs4HINvpAWEY4kNCYlPBkLBx1nBm8PEd6nsddW6yB3ty2MpmwSjCvKujJRHODtLWcTw7N%2FmuL%2B8nO0vHSdjqR2BUjMiA1W86qudNWOlSeAkd4vdVOwum5EgwmrTnwgY6pgFKxYpjNLElsRnQ0V1O%2FI64nyXVz8ATlFP%2Fg97p7KImTRudzNsh3WdJSfMunBS7YqsMk5ke27c4hiL2DssfuyGAJcQoKr5KpDfdMqTv0%2Fnb2TyvqocN%2BuRErJoF0L5rmKdRn9%2B4%2BlmgyanWYdAyqQ2qfeTewWU4UW%2BzIHpeCS8IawaI4HdegHmgQ6YDmW3hA8CW84MKBqtteYX4wuiyMOQodjWj0two&X-Amz-Signature=b1d849ee330a125e4ce40f5c046c45eaccdb3f610a7f86fc156d151978f25c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5UGINUB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFnfzRCoZi55kp4zsq5iE5wOXTXziEsqnwp92hDh7yWoAiAzFIapzPIgyOubgirwnqJn%2Bx3n2DanwGqcxDKnnjDgHyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMWxpMr%2BuOxXq1CjShKtwDSz5BcgN1Tm%2F8er9v9RzDfI3O8cXbmtMw5mWtuM0q1t2pgQ9xPUv0pYGnEZpe0ljvFW2nvHgrxSogfQD8wXWm6LDF3WUL3iEz5jSNMrkBEtQMbsgRewzXm3Uikf5nrZ782MiTSMyJun2ijLsdlu2qxT7KDHHlzQs7flcaB2dgNmANPPgcgNEZxUuxKalOHRgFfMNay2Jwzg0sYBOHIKhPC1QGRHKhmSPvk5I4VFyhxMCI2ibzrCjEQ9xxWXHQinA1tr8NW3Zl6yJXb2eCxzld%2BDTEBAuZiU1zTYoXREh3ZkvrjQQfz5PhhNhN71HTsORhibKxNuaSeIs92CwnzwzKrWqVuQfMaAoOF0oLUf41mnCZRCmrZkqKNXxgBztwsaroeU7KrImJH29YMM48CzO%2FS98i651wB07eo3pTmyF5QjUVqH9t0DsS4f%2BDCQA4EI5lBAg7LH2UWxzKDSOXj1a2nEIvGN5jGRdzXlMqAWpqmnb94KsKbKH4DnVraKreLzqkFN9dIs4HINvpAWEY4kNCYlPBkLBx1nBm8PEd6nsddW6yB3ty2MpmwSjCvKujJRHODtLWcTw7N%2FmuL%2B8nO0vHSdjqR2BUjMiA1W86qudNWOlSeAkd4vdVOwum5EgwmrTnwgY6pgFKxYpjNLElsRnQ0V1O%2FI64nyXVz8ATlFP%2Fg97p7KImTRudzNsh3WdJSfMunBS7YqsMk5ke27c4hiL2DssfuyGAJcQoKr5KpDfdMqTv0%2Fnb2TyvqocN%2BuRErJoF0L5rmKdRn9%2B4%2BlmgyanWYdAyqQ2qfeTewWU4UW%2BzIHpeCS8IawaI4HdegHmgQ6YDmW3hA8CW84MKBqtteYX4wuiyMOQodjWj0two&X-Amz-Signature=4f0ebd700584d0bcbdb6f14449d7fdab9cd34ca1bc8f5654b667901a4ad44a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
