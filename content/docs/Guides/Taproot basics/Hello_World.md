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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AB4WDLO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEDsrgwQR%2Fyy4j4Jb1hkYBoZB8cVyHOTUmjUxBZizJuNAiEA%2FG0i6PXsVLTZV1wyh9R6kRomNqe4UHEQpgPqJNcq1WAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMhassiNzpMHmOz16CrcA2KY2s4zt9cqdSBgPasSTS7DNhCJfF7bOwHNo2zcUtmxeg8M7yzOjeEeWzxvYcFJvQCnXE97Phuqtik%2FX8lzZYgTXcAFYLM8KtFCsKxMBeRwf%2Fnr1M47JVX1lLT2zdyNdCLyVcqH3VXq3NvqcIoBj51gUg2txZnh4mIn%2BVir4bU7K19Uz3SLgmIJI1ubUx9tpiBs7ZYr59igxzGneJLIbMudMzK9aAkVF%2FvC8V%2BtG1dAh4alG9dl6vzw6piBNli7%2Bv3HMTAeguCTML5HEJJZvp4V%2FjbVQ3ppxoxXhI0RIxmbrzoeHtNIMdZXLkqozQzZoCbvQTZKvvgHar2N6IrMAnPOE1YOfNPvF8w0oQlZ0hn9QIW%2FvC8mezgG7eO1nNBuizsf7Wc%2FHYbtmX66MfwyKHdzxBpNHtuzE4BNMCOrYci7n12TT2LuIcBwILFaExl94tav5noXNUuIqLiOkI8B5zlf1C6KqlmICMAkFDL80qEHZQ%2F8vU30P%2BCOGzvJQuFXZoAp%2B9zAcYcpzCbiIZxnEj%2FnksSikVODbtXSYXFA4VN1JwT1B2zuNuEMkJ5RPtCk75kYxzjxAXFlUGV2wc3AGGygHu%2FjU4cGbiR2maQaSf2l%2Bd8JzGGI2n%2BW8J3IMNmE1MMGOqUBSUPvqpI85rrofintVTrF7bjUCKnH9lC051W8lhcmxTrrXDna3V1rgIp2qWxQglEVZpWiqL0LJun6MRN0d9pjwIX0EL%2FHIA1ECol8CXJsj%2FrUn87nl6Ca9xQ5Y5txusZm%2B8GIWX0SKbn%2FFmVZGb24IxqH6zxwdCE1UvcI26iaMvrAUw%2F8WB7tsmN5hgV2KyX3amVHcBsX7dvMqhv6uJxLsKjQzkCH&X-Amz-Signature=e97d9c207fcb535291dc747a5d1504bdf85bf68504706bb1076dc1999b8490cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AB4WDLO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEDsrgwQR%2Fyy4j4Jb1hkYBoZB8cVyHOTUmjUxBZizJuNAiEA%2FG0i6PXsVLTZV1wyh9R6kRomNqe4UHEQpgPqJNcq1WAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMhassiNzpMHmOz16CrcA2KY2s4zt9cqdSBgPasSTS7DNhCJfF7bOwHNo2zcUtmxeg8M7yzOjeEeWzxvYcFJvQCnXE97Phuqtik%2FX8lzZYgTXcAFYLM8KtFCsKxMBeRwf%2Fnr1M47JVX1lLT2zdyNdCLyVcqH3VXq3NvqcIoBj51gUg2txZnh4mIn%2BVir4bU7K19Uz3SLgmIJI1ubUx9tpiBs7ZYr59igxzGneJLIbMudMzK9aAkVF%2FvC8V%2BtG1dAh4alG9dl6vzw6piBNli7%2Bv3HMTAeguCTML5HEJJZvp4V%2FjbVQ3ppxoxXhI0RIxmbrzoeHtNIMdZXLkqozQzZoCbvQTZKvvgHar2N6IrMAnPOE1YOfNPvF8w0oQlZ0hn9QIW%2FvC8mezgG7eO1nNBuizsf7Wc%2FHYbtmX66MfwyKHdzxBpNHtuzE4BNMCOrYci7n12TT2LuIcBwILFaExl94tav5noXNUuIqLiOkI8B5zlf1C6KqlmICMAkFDL80qEHZQ%2F8vU30P%2BCOGzvJQuFXZoAp%2B9zAcYcpzCbiIZxnEj%2FnksSikVODbtXSYXFA4VN1JwT1B2zuNuEMkJ5RPtCk75kYxzjxAXFlUGV2wc3AGGygHu%2FjU4cGbiR2maQaSf2l%2Bd8JzGGI2n%2BW8J3IMNmE1MMGOqUBSUPvqpI85rrofintVTrF7bjUCKnH9lC051W8lhcmxTrrXDna3V1rgIp2qWxQglEVZpWiqL0LJun6MRN0d9pjwIX0EL%2FHIA1ECol8CXJsj%2FrUn87nl6Ca9xQ5Y5txusZm%2B8GIWX0SKbn%2FFmVZGb24IxqH6zxwdCE1UvcI26iaMvrAUw%2F8WB7tsmN5hgV2KyX3amVHcBsX7dvMqhv6uJxLsKjQzkCH&X-Amz-Signature=48c795773b424081083e708740eb7d6ff1505696c427f75e847b86a43cf34fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
