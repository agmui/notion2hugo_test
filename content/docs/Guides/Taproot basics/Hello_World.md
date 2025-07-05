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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLNZ4W7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCxzmyhID3Zk9x%2FsJrSn38qFPl99UZtqCzUq2b5ii4GhgIgZFYaNKv2oO8yvvWwkVN0wNnM2xPwLjncve6Wlqlp0z8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHASWj9xgNagSmzWvyrcA3dVln9mu2nmjkS4So91koAXoBPgYfDCQTqxmkJaW6ChTkZq0YO5qHw9sEPkf2Y2NRnyWSJEYS7cTAR5%2BpaaBkSOELO7KvMDRs%2FJ%2FtUppBTrATVdoJgjtdn%2B4F0IeD26IeLC5VNH%2BcOIxqaA4UkK8GtkqUtsM3%2BFnqN9uGlLglcDvxepb7ieVToOpDs6WjBKQrximt2K8SQG7bGGwhD9tfDs6i8ku7r4QvDJ2QKNIAVI5JsYa%2F4K8Z3KFaJ2yMRo6hRF0673LLagPipXt5M1g%2FqK%2FT20kUd21XAvNj%2BMmUo1un2JSI%2B6GIt8oQ5S4fCkZR%2B3Rv5DEPRrQ5P8gM7wlsuE6lDzTJGrg3CGDla2MAiZFVkaiF5l0fI1lsGvlq5ywEMHbU2ystcHRD6L66kYDuZGBsz%2Fx0nz8XatJlKNIVkev0N1CjRwEYDVIRqxNVSsIekuAVb9Y0duqjoC8EhFg8b2cS2dxQGeiYfjBrz0KS3LpusMP2LMF%2FY%2BIiILc6QsZan1JLvQhcybf8n5z0go6Cc5GUmPseaQLbmlqUQVlAarzp9v%2FZcIKPgoumx1AvD%2F5H8V4wXJ4b4zfSSjNDCs7uCB3K23uWJBO3H3vXot9A68qFFxCa5YAHzviNCuMOXCpMMGOqUBPQqzqPh4tCkNnzGV9riNs2KwZcDSF%2F%2BQqFClNPFEOJrOO5YI2AO9JJWYLHB51eklINF7I64GsoG%2FWcdhPemKLYjefAQNRllOSi3OoJesS3h0J%2FIbcCHmJ9FBhzr3jazHTQsRh1PTIcjqtfHR%2FVcD%2FRhHNRCgylmJ0yjMR0AQWZdul7QYwX02zJFnGBX4NGR%2BAymwet4BLUgbZyUvPP69vLmg3Mq4&X-Amz-Signature=18770a757574bea6cab87545f77260e38f59125e104e4e273c81053e061313e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLNZ4W7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCxzmyhID3Zk9x%2FsJrSn38qFPl99UZtqCzUq2b5ii4GhgIgZFYaNKv2oO8yvvWwkVN0wNnM2xPwLjncve6Wlqlp0z8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHASWj9xgNagSmzWvyrcA3dVln9mu2nmjkS4So91koAXoBPgYfDCQTqxmkJaW6ChTkZq0YO5qHw9sEPkf2Y2NRnyWSJEYS7cTAR5%2BpaaBkSOELO7KvMDRs%2FJ%2FtUppBTrATVdoJgjtdn%2B4F0IeD26IeLC5VNH%2BcOIxqaA4UkK8GtkqUtsM3%2BFnqN9uGlLglcDvxepb7ieVToOpDs6WjBKQrximt2K8SQG7bGGwhD9tfDs6i8ku7r4QvDJ2QKNIAVI5JsYa%2F4K8Z3KFaJ2yMRo6hRF0673LLagPipXt5M1g%2FqK%2FT20kUd21XAvNj%2BMmUo1un2JSI%2B6GIt8oQ5S4fCkZR%2B3Rv5DEPRrQ5P8gM7wlsuE6lDzTJGrg3CGDla2MAiZFVkaiF5l0fI1lsGvlq5ywEMHbU2ystcHRD6L66kYDuZGBsz%2Fx0nz8XatJlKNIVkev0N1CjRwEYDVIRqxNVSsIekuAVb9Y0duqjoC8EhFg8b2cS2dxQGeiYfjBrz0KS3LpusMP2LMF%2FY%2BIiILc6QsZan1JLvQhcybf8n5z0go6Cc5GUmPseaQLbmlqUQVlAarzp9v%2FZcIKPgoumx1AvD%2F5H8V4wXJ4b4zfSSjNDCs7uCB3K23uWJBO3H3vXot9A68qFFxCa5YAHzviNCuMOXCpMMGOqUBPQqzqPh4tCkNnzGV9riNs2KwZcDSF%2F%2BQqFClNPFEOJrOO5YI2AO9JJWYLHB51eklINF7I64GsoG%2FWcdhPemKLYjefAQNRllOSi3OoJesS3h0J%2FIbcCHmJ9FBhzr3jazHTQsRh1PTIcjqtfHR%2FVcD%2FRhHNRCgylmJ0yjMR0AQWZdul7QYwX02zJFnGBX4NGR%2BAymwet4BLUgbZyUvPP69vLmg3Mq4&X-Amz-Signature=e433aebbb42d18642d4375b6dca84b464ea8ca0316bde0fdaa8ff5e2f1a14867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
