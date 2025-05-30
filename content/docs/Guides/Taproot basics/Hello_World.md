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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJTA4RQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4QVOAj%2BerQ5sSvpe8hUB0PDBSvm%2BJ3Jz2TWJnn7cnkgIhAMkZOuraKqzL3VPK7M27mzGPM5gOFive1m5wkiGmhOZsKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOcBZRUilAVjbES00q3APy3HXU4X0rEiX5Ybeu7%2F%2BGwZmMhS%2Bm5y4gmqNQRvtbKaRvf7qrEaJF0jyRIXoceJM2GSTOsXPIGLL00vgpOrQZo2pDx9DF34YRQ8miANjb86mAVPcu3Y18ZPXRpTbl7qYAtn9xwf5O%2FRhjEXYA5ZJyBlvnI%2B%2BMTHnRPqbe2JHlIIPbHUAUMAVUn7RzZCY2uGbyv7zUzwktjm0kL3SSGSa6F9zJrgDRtdgJKu7vW3nkknfRwumOXaiRdIxON4hZ6ygSst5b3OHTeXi2oTN2C6Tz0QT43Hcvcs3nB5lMEglndNtXk80HjLSzVLd9WKIe9mdjYlYFwZ78t251xLqyBBXrpAzoK9QIztSz8uEZj1%2Bindc%2Bb3FP3wpiVNCqa1TpKOjP%2BTf25hRzkO%2FFOJC1mNEUa9puhXJPyW4wKXyAPgXpD66sQVatJqAd8lJT%2FMvj%2BhILEnss0bxCqcb9%2FmCI32D84huBHXRXyXUUNOnj1xgQ14Pu15bNuPxTQAlKdbrHfbU5az4kz7G53L%2BHd982r9wDBSUX1%2BlfYztZyEfyBgdV0aJIad0fvKkbWfHI1Jk%2BPBGIlKcr3jifS4SGw82%2BcVx9QR6NcEhs6fcAi0xYw20CtxadQJIZOGXiTo3dnjCz3eTBBjqkAas7Bhrh6iH%2Bd0p1kXiPn35hd%2FhJi29Dlqs35ROzo8adyDiw%2B%2F%2FWsfU%2Ba94MIAUs4UE1cMntaJhySLPR%2BovEzrgIOWL0elN8TFK3hvrf6iL24rPqIdrVBGvrlQZ3oM2L%2BL4E1JjtpHlKo7CACQ6DYj320HUechO%2FWRs0qYBZI9rIpui1t5cK%2BQ%2BrJUzuFkL1MlB%2Fg5KDbTdJSQJyuuKLdsjyX9yv&X-Amz-Signature=6fb597338c294d32f204cf96c6d40e513950fe0c9177ef1135175d419b7eb27a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJTA4RQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4QVOAj%2BerQ5sSvpe8hUB0PDBSvm%2BJ3Jz2TWJnn7cnkgIhAMkZOuraKqzL3VPK7M27mzGPM5gOFive1m5wkiGmhOZsKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOcBZRUilAVjbES00q3APy3HXU4X0rEiX5Ybeu7%2F%2BGwZmMhS%2Bm5y4gmqNQRvtbKaRvf7qrEaJF0jyRIXoceJM2GSTOsXPIGLL00vgpOrQZo2pDx9DF34YRQ8miANjb86mAVPcu3Y18ZPXRpTbl7qYAtn9xwf5O%2FRhjEXYA5ZJyBlvnI%2B%2BMTHnRPqbe2JHlIIPbHUAUMAVUn7RzZCY2uGbyv7zUzwktjm0kL3SSGSa6F9zJrgDRtdgJKu7vW3nkknfRwumOXaiRdIxON4hZ6ygSst5b3OHTeXi2oTN2C6Tz0QT43Hcvcs3nB5lMEglndNtXk80HjLSzVLd9WKIe9mdjYlYFwZ78t251xLqyBBXrpAzoK9QIztSz8uEZj1%2Bindc%2Bb3FP3wpiVNCqa1TpKOjP%2BTf25hRzkO%2FFOJC1mNEUa9puhXJPyW4wKXyAPgXpD66sQVatJqAd8lJT%2FMvj%2BhILEnss0bxCqcb9%2FmCI32D84huBHXRXyXUUNOnj1xgQ14Pu15bNuPxTQAlKdbrHfbU5az4kz7G53L%2BHd982r9wDBSUX1%2BlfYztZyEfyBgdV0aJIad0fvKkbWfHI1Jk%2BPBGIlKcr3jifS4SGw82%2BcVx9QR6NcEhs6fcAi0xYw20CtxadQJIZOGXiTo3dnjCz3eTBBjqkAas7Bhrh6iH%2Bd0p1kXiPn35hd%2FhJi29Dlqs35ROzo8adyDiw%2B%2F%2FWsfU%2Ba94MIAUs4UE1cMntaJhySLPR%2BovEzrgIOWL0elN8TFK3hvrf6iL24rPqIdrVBGvrlQZ3oM2L%2BL4E1JjtpHlKo7CACQ6DYj320HUechO%2FWRs0qYBZI9rIpui1t5cK%2BQ%2BrJUzuFkL1MlB%2Fg5KDbTdJSQJyuuKLdsjyX9yv&X-Amz-Signature=1d7e49ccbaf634c45b3d7a5a967346f449de3bb3c11bb3fe24f218be2b8b49d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
