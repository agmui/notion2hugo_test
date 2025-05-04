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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2BFWZD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCklYgMhu3WgG4pAOWUOFB3Zoc%2FPr6AksGZRcl9J%2BQU3wIgX2ZnhtgY%2FEzxcsAsbJGJr7oHjPSBieomDU75S130640q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDggpo85HIsRYMfRNircA53m97mHs84B20C%2FuLraV0X8amIEA7UCjWetPevsApNLiSCXL4gVCGWm1inHTX6CLHgPTzo8%2BCXOvvMl9p2jcJtv8tCMZunKUHaijNFmaDM6nq51yJqQ21iugsOxdDf%2BZaQb928w7F%2F1XZ4yMMPWdLNS1wb%2Faz8x22BOhCSnjepz%2FXU0JmEZ4qeNuU0dtuFHD3nKJD5ViQa3r6ZQTMci04soTVGUtXG67xyrOLhRCNWC87a0DVCr3uK2f9YHdSaUY8HcQY7SnNv%2B5umfUwrXftpQEFQg6ZaepHzMa4hAbCFrDgVCCc3HD5nBVLx1CqLMqaOfNr4kyNPfbdJYPJbdcBv%2Bj%2BXBIGoH67LRO2fnHxVIqdsit%2Favbg1m5vPZlU0kb8nkq6oaqO3rWOGq5MZNen9akl6xzZSwcaGKOOEwqy7TWQ0TNpxjGmzxLjWTukt6d8nwBHvnImnhm4MjP0b7ul4Yicx5xw0IeJmZa3PglUgXZdvoFqoM2czGDM1I%2BFxZZIXokf12e5Msk8h2gUzZP8AI3wq4%2B2GIfC2PG%2FJSm7Zw8o8pKH%2B80fGNNrvD25gvgDHl2TysaQaBw9DF6Tif%2B%2FUw9Sirid6jDM9BTZ%2F07H1R85Jbgac83dJ5xZ%2FsMOCs38AGOqUBTrg6rWiRA%2Fgx2%2Fdqy5x%2FtEUzag5LGmQTFjaCxvVTJ8fPRXVWYQd8f%2BHj9%2FaGQ%2BReQOBlMNTPctoZ%2Frs95IU4nvk2Qywb%2BlRNoPLjLQ1TYq8n0IJwl3o%2Fdy8BD%2FIGODIgq2N6GpZOu9JaRzqOQQjlTMUM582eIxDNW7P8z%2FP2OMGcz%2FVl5gCYJHYN2%2BV%2BsHJSQPPaDA07tuRTr1RpHGD8eXGyogsX&X-Amz-Signature=16b39416956296037d0bb9381b867ef02c7dfd3d536470efd31bde7b990af087&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2BFWZD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCklYgMhu3WgG4pAOWUOFB3Zoc%2FPr6AksGZRcl9J%2BQU3wIgX2ZnhtgY%2FEzxcsAsbJGJr7oHjPSBieomDU75S130640q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDggpo85HIsRYMfRNircA53m97mHs84B20C%2FuLraV0X8amIEA7UCjWetPevsApNLiSCXL4gVCGWm1inHTX6CLHgPTzo8%2BCXOvvMl9p2jcJtv8tCMZunKUHaijNFmaDM6nq51yJqQ21iugsOxdDf%2BZaQb928w7F%2F1XZ4yMMPWdLNS1wb%2Faz8x22BOhCSnjepz%2FXU0JmEZ4qeNuU0dtuFHD3nKJD5ViQa3r6ZQTMci04soTVGUtXG67xyrOLhRCNWC87a0DVCr3uK2f9YHdSaUY8HcQY7SnNv%2B5umfUwrXftpQEFQg6ZaepHzMa4hAbCFrDgVCCc3HD5nBVLx1CqLMqaOfNr4kyNPfbdJYPJbdcBv%2Bj%2BXBIGoH67LRO2fnHxVIqdsit%2Favbg1m5vPZlU0kb8nkq6oaqO3rWOGq5MZNen9akl6xzZSwcaGKOOEwqy7TWQ0TNpxjGmzxLjWTukt6d8nwBHvnImnhm4MjP0b7ul4Yicx5xw0IeJmZa3PglUgXZdvoFqoM2czGDM1I%2BFxZZIXokf12e5Msk8h2gUzZP8AI3wq4%2B2GIfC2PG%2FJSm7Zw8o8pKH%2B80fGNNrvD25gvgDHl2TysaQaBw9DF6Tif%2B%2FUw9Sirid6jDM9BTZ%2F07H1R85Jbgac83dJ5xZ%2FsMOCs38AGOqUBTrg6rWiRA%2Fgx2%2Fdqy5x%2FtEUzag5LGmQTFjaCxvVTJ8fPRXVWYQd8f%2BHj9%2FaGQ%2BReQOBlMNTPctoZ%2Frs95IU4nvk2Qywb%2BlRNoPLjLQ1TYq8n0IJwl3o%2Fdy8BD%2FIGODIgq2N6GpZOu9JaRzqOQQjlTMUM582eIxDNW7P8z%2FP2OMGcz%2FVl5gCYJHYN2%2BV%2BsHJSQPPaDA07tuRTr1RpHGD8eXGyogsX&X-Amz-Signature=bd86f29a6d0f216c17f54de0a9bfd613c3307c948a1533577926b3e844ef4ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
