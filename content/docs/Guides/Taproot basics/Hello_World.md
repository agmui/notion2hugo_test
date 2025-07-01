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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCJK2DA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXDBS3CdvXcBvpIYsU%2Byp6mXfxsrgdlLAu2YLwEIQRJAiEAncSoz4fZrRcIWuC0HCyRJtn599el%2Fjl3gyXFDam4FiAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqTu%2B9BExKEyOscESrcAzMNm8e8kFOvj1SY6G0Xw1sF%2BchKDZqYcYLxv%2BpDy6R7KMnLiTHAobAlvQ3NbL6Rh8pkdgTnRWe9%2F1Gb%2BdkmifFlakbIYfJYBF1z%2F9d07OeHGNjhUsfixsxpwS5AzNNXggFHGo41WMmVwgRKMm6ZahZrfLtUFU24wnTrFr7JU%2FBafRSlmS9k7A1LMljXNUSa4zCpBeErQfTgH3sGTiMOh3cSPEbXdTIbhAnde02b%2F%2FTtlm%2FtrGRdEghkKe4MjeMOSFHM7%2F1qA4p%2F1RGIdHfzZ0qpFU8ypHFhq8l9ii%2BF8Yiwlz5fczwpAdfG7ltemyBXJUzmGf8udiL5gPiFBS1Av3Iif5GUSsEd7hUtGTy4z9MKFE%2F7IFc5R3DCB7x3wDKv0NONhZUd2HT3F2TV5D0Rlb9bQ%2By3QwyxTlQL36iMlivCfILXS9oBL65UEYVEYIq01YVyvHL427ln3xkvxEf%2Bv2%2FL6gmu%2F3MFn6egDbZbhbVwZMqi2HQbHLSeZJKpsIJijWQQzZhdmSOeCiM0P7fV01VOWEN3dgDOmJk5OQRdNVzGynpP559mCsLEw4n8NlG8glfsz421mAK%2BZw6Je%2B1A6JzHPlDrkCLu%2F%2BRCo1UrYsaj9GNIPryTKbXY7yRBMNfIkcMGOqUBbirdEFyPrEuVfGjiVhw3RQf1fBxag%2FcnNx0sBaZdkGLa23CzbYQ9xu3zTsuv1yhGpHnJnu%2F5YVMEQUtUxTGOv36CZz3S%2BTpKW19CscQ2sSWuyKwm16h0lRi1JRRfy5V8pr%2FCgLAVNGkf97sJ20wJTrPTljx2SMn0LCDriBe4EQzKarKrNT8zgqYwoiplDx6bskWvxKRlr5OEG90RcnfQMhFOsq%2FI&X-Amz-Signature=2def848166806e9fbf31763053cb90c1d3b34325731f55e4a42c4a0637d2c5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCJK2DA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXDBS3CdvXcBvpIYsU%2Byp6mXfxsrgdlLAu2YLwEIQRJAiEAncSoz4fZrRcIWuC0HCyRJtn599el%2Fjl3gyXFDam4FiAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqTu%2B9BExKEyOscESrcAzMNm8e8kFOvj1SY6G0Xw1sF%2BchKDZqYcYLxv%2BpDy6R7KMnLiTHAobAlvQ3NbL6Rh8pkdgTnRWe9%2F1Gb%2BdkmifFlakbIYfJYBF1z%2F9d07OeHGNjhUsfixsxpwS5AzNNXggFHGo41WMmVwgRKMm6ZahZrfLtUFU24wnTrFr7JU%2FBafRSlmS9k7A1LMljXNUSa4zCpBeErQfTgH3sGTiMOh3cSPEbXdTIbhAnde02b%2F%2FTtlm%2FtrGRdEghkKe4MjeMOSFHM7%2F1qA4p%2F1RGIdHfzZ0qpFU8ypHFhq8l9ii%2BF8Yiwlz5fczwpAdfG7ltemyBXJUzmGf8udiL5gPiFBS1Av3Iif5GUSsEd7hUtGTy4z9MKFE%2F7IFc5R3DCB7x3wDKv0NONhZUd2HT3F2TV5D0Rlb9bQ%2By3QwyxTlQL36iMlivCfILXS9oBL65UEYVEYIq01YVyvHL427ln3xkvxEf%2Bv2%2FL6gmu%2F3MFn6egDbZbhbVwZMqi2HQbHLSeZJKpsIJijWQQzZhdmSOeCiM0P7fV01VOWEN3dgDOmJk5OQRdNVzGynpP559mCsLEw4n8NlG8glfsz421mAK%2BZw6Je%2B1A6JzHPlDrkCLu%2F%2BRCo1UrYsaj9GNIPryTKbXY7yRBMNfIkcMGOqUBbirdEFyPrEuVfGjiVhw3RQf1fBxag%2FcnNx0sBaZdkGLa23CzbYQ9xu3zTsuv1yhGpHnJnu%2F5YVMEQUtUxTGOv36CZz3S%2BTpKW19CscQ2sSWuyKwm16h0lRi1JRRfy5V8pr%2FCgLAVNGkf97sJ20wJTrPTljx2SMn0LCDriBe4EQzKarKrNT8zgqYwoiplDx6bskWvxKRlr5OEG90RcnfQMhFOsq%2FI&X-Amz-Signature=56bf79659eb487d8d97c02cd82fc4979c99496dc364d88a34e768a872e0c33b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
