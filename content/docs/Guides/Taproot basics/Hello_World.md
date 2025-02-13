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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4DLNXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFg9%2FT%2B2fr8OP7yCeugNshJU2gj0Ugnu5Whk83W9%2BQPAIgHwrl7h0gFJStGRqzLnxaVRQ5Ky8YlskCZ%2F%2FMMBqjMqUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOk%2FVlexxxjgbhV%2FNSrcA39yRjEzf%2B%2F%2Fgr9W0%2BE9JFT9QXiAdk4ct8yvepySvB%2Fh1XxvY6GPIAQAVH7fwIGLCXTk5kVwgSX%2BDJpApAx92W3slBaLAngokwqWZbicu%2FF3qf98hLtbpGnignvSAZ3i%2FOStiXvDMP7ZBRaPcVXSt55hHqZouoIG6nspVewsCaPzZor%2FIgaj44PC7nfc%2BX%2FNqQh5Vbuv8%2F7cimZO4K6qqNIV7uawyAw75mUI1Reh%2Ft1K61m0TfVSAOdNlwFZvZ%2FfCdtnb6cxWSEuFp4O%2FoW2GrX7VE2SYeymq8uBpedMpJYzTJFMVFCYP8ufNh%2BnaoYKS0jApKDgwCvnBf1%2B76GCEIdR%2BORLCEZLKITOJAuYWX3%2F84MvCa4wHvBg1J60jhCBA2ZEmNSr2tf8DWTSYt4powtiDdySju2sSrCM%2BuzrhmsHGMGDSLTVvM8XSzRF%2Bga3n%2B%2FEuuS42YOIw0AflSklFq%2FNecNK%2BMH463HlPATvxSJEM8hSl%2B%2B3IgHuKw5potVnRLFdhtU0pF2tZsMA5wNohJNcAGHCoDhVv0ArmIgvvg6GNph3KYNaMwlss0S4zf%2FYfRZ0AeyZzYwHT%2FPBf1pe%2FpQH8a1lIu89%2BB9y%2BydD7HmObkvT4eozQ48kcoHnMKjet70GOqUBUKWYcGLy7Zvb%2BkUGT8euZQIVi36mJGjRr%2ByolOXQSaRmUy82qP2lpgdd36nd8aNUDwqmP7P%2FxNNGCZJUPNAsFv4GkyIwd3sHuLKhT%2BaVDPetpxjkdyMTfV3VPqNP301iIyLfAdz8joSC46O9RJYWIOFhoygmF8DZzztbbNx9ayxeD0UMocHOG07M66d2EjCkMoYG5JQ%2Fkb4fkXsz1MdgnnKzM5ZY&X-Amz-Signature=673b406d23850012cef9b63d39a5df3f4635542e955680bf4797789073b33320&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4DLNXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFg9%2FT%2B2fr8OP7yCeugNshJU2gj0Ugnu5Whk83W9%2BQPAIgHwrl7h0gFJStGRqzLnxaVRQ5Ky8YlskCZ%2F%2FMMBqjMqUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOk%2FVlexxxjgbhV%2FNSrcA39yRjEzf%2B%2F%2Fgr9W0%2BE9JFT9QXiAdk4ct8yvepySvB%2Fh1XxvY6GPIAQAVH7fwIGLCXTk5kVwgSX%2BDJpApAx92W3slBaLAngokwqWZbicu%2FF3qf98hLtbpGnignvSAZ3i%2FOStiXvDMP7ZBRaPcVXSt55hHqZouoIG6nspVewsCaPzZor%2FIgaj44PC7nfc%2BX%2FNqQh5Vbuv8%2F7cimZO4K6qqNIV7uawyAw75mUI1Reh%2Ft1K61m0TfVSAOdNlwFZvZ%2FfCdtnb6cxWSEuFp4O%2FoW2GrX7VE2SYeymq8uBpedMpJYzTJFMVFCYP8ufNh%2BnaoYKS0jApKDgwCvnBf1%2B76GCEIdR%2BORLCEZLKITOJAuYWX3%2F84MvCa4wHvBg1J60jhCBA2ZEmNSr2tf8DWTSYt4powtiDdySju2sSrCM%2BuzrhmsHGMGDSLTVvM8XSzRF%2Bga3n%2B%2FEuuS42YOIw0AflSklFq%2FNecNK%2BMH463HlPATvxSJEM8hSl%2B%2B3IgHuKw5potVnRLFdhtU0pF2tZsMA5wNohJNcAGHCoDhVv0ArmIgvvg6GNph3KYNaMwlss0S4zf%2FYfRZ0AeyZzYwHT%2FPBf1pe%2FpQH8a1lIu89%2BB9y%2BydD7HmObkvT4eozQ48kcoHnMKjet70GOqUBUKWYcGLy7Zvb%2BkUGT8euZQIVi36mJGjRr%2ByolOXQSaRmUy82qP2lpgdd36nd8aNUDwqmP7P%2FxNNGCZJUPNAsFv4GkyIwd3sHuLKhT%2BaVDPetpxjkdyMTfV3VPqNP301iIyLfAdz8joSC46O9RJYWIOFhoygmF8DZzztbbNx9ayxeD0UMocHOG07M66d2EjCkMoYG5JQ%2Fkb4fkXsz1MdgnnKzM5ZY&X-Amz-Signature=58200d40e0a1b9c0424641e14f0578760713ad9eac04e94f86a4a78c35090f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
