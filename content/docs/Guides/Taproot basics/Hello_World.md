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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TWOLT4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2Fc%2FKyireVNEW9fwDGQXLOfBPYxxsgHia0RhiHpJHsQIgD%2FdaTXR%2BhhMj%2BJBW20BBZqx1Ti%2FUf9sI50pShNNH2MEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLizRocoKh43Wb7XhSrcA7p4hV%2BHR%2BvDifl0A5lhlwv1wL4sBGk%2FXSQSO4bkctDbzh8N%2F6%2BQWD6WXR6f5haPkBeT9nRo1k5fsfMruZzfUapiekeWy3Dnzc7soiTlvYB8vj5j2YT6ce891UxTmr7PTuULiU8fMGjRPuf4AiwXng4e7ggteK9ZtDSPHtXlDzMJGJfXOTV0jhk%2Fr%2BqS2swZCzQWHxH2nHA%2BeyuhS%2BDowEfUG1Bnweslhcb%2FUQtZhiLnQp7AAZsKvydMfxGCx2YX8TY8u3GxRVekW4JYACjEfUr%2B7dFWH0uF6OE6CYgAHrpzWAaxSaz9Z7VCTZMh%2BdQwDCTcL0vjy5XJHqMHf1jBwzYUlXafLM4Njtm35eEX%2BAivaim%2Bj4yTQ8WOSL8OLjr51EIa1PsURGPGAljVYPaV2cL3jTQRuaV1I9djpo4vcJEvG71r%2B3To17AskGiIl6Nb3YjLOJLruOi2xCwN1FyXh2qBp4DHzaSf2zT0NHjhTJomAMa6oJeH5wxlGdQSnaOD2BOAu1Ez5NQIP%2BGoHykcrrTfHHZriH2BJvSF%2FLY8%2FqeV2Nfz%2By51yVqnPYq080FROhq77rEGbCni%2BGIqjBIP8hOAFHRPvR3zijPoFhUKxPy8gP85%2BCKBpVIiI%2FhfMLqiyMMGOqUB2awqum0DsSb46FmQNU%2B2J9lrMYXuSmTaAjuxSpt0lgqPVOAWmz%2FVInCn%2Fr6xMfy7nuTv05S68BzyC%2F9K0PCbEeL6H6dMXkSUVZU6W0288MTYRarixO0g3EcUWHV59IYy1VwKBLD6%2Fxok9HILz7Z%2FdJmJXYWdf5hye0Zvb2oqLRq%2BXBKGwu0EvMpl0UVmb%2Br1ASqYr4w%2F7VclCvgninwBuvohgLCZ&X-Amz-Signature=6e1f5e71f9e222148c6c9767f904bf3320c2d514b9810985e3008d521a948bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TWOLT4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2Fc%2FKyireVNEW9fwDGQXLOfBPYxxsgHia0RhiHpJHsQIgD%2FdaTXR%2BhhMj%2BJBW20BBZqx1Ti%2FUf9sI50pShNNH2MEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLizRocoKh43Wb7XhSrcA7p4hV%2BHR%2BvDifl0A5lhlwv1wL4sBGk%2FXSQSO4bkctDbzh8N%2F6%2BQWD6WXR6f5haPkBeT9nRo1k5fsfMruZzfUapiekeWy3Dnzc7soiTlvYB8vj5j2YT6ce891UxTmr7PTuULiU8fMGjRPuf4AiwXng4e7ggteK9ZtDSPHtXlDzMJGJfXOTV0jhk%2Fr%2BqS2swZCzQWHxH2nHA%2BeyuhS%2BDowEfUG1Bnweslhcb%2FUQtZhiLnQp7AAZsKvydMfxGCx2YX8TY8u3GxRVekW4JYACjEfUr%2B7dFWH0uF6OE6CYgAHrpzWAaxSaz9Z7VCTZMh%2BdQwDCTcL0vjy5XJHqMHf1jBwzYUlXafLM4Njtm35eEX%2BAivaim%2Bj4yTQ8WOSL8OLjr51EIa1PsURGPGAljVYPaV2cL3jTQRuaV1I9djpo4vcJEvG71r%2B3To17AskGiIl6Nb3YjLOJLruOi2xCwN1FyXh2qBp4DHzaSf2zT0NHjhTJomAMa6oJeH5wxlGdQSnaOD2BOAu1Ez5NQIP%2BGoHykcrrTfHHZriH2BJvSF%2FLY8%2FqeV2Nfz%2By51yVqnPYq080FROhq77rEGbCni%2BGIqjBIP8hOAFHRPvR3zijPoFhUKxPy8gP85%2BCKBpVIiI%2FhfMLqiyMMGOqUB2awqum0DsSb46FmQNU%2B2J9lrMYXuSmTaAjuxSpt0lgqPVOAWmz%2FVInCn%2Fr6xMfy7nuTv05S68BzyC%2F9K0PCbEeL6H6dMXkSUVZU6W0288MTYRarixO0g3EcUWHV59IYy1VwKBLD6%2Fxok9HILz7Z%2FdJmJXYWdf5hye0Zvb2oqLRq%2BXBKGwu0EvMpl0UVmb%2Br1ASqYr4w%2F7VclCvgninwBuvohgLCZ&X-Amz-Signature=1f63c45088655dc99ab0eb6d26555b520cea531d57ac93ea96433b3d87ed542b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
