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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63KUSTD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpoabZBz6q27zjT5DffMcfPoKB2ibVXJZ5mWxXlVvcTwIgQ5KNOkiFepsmshjDCuHhLjt7Tpas7ryh7Ui5beo8cFYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF%2FZEPh%2F%2BsZH5q3VnCrcA87QZYrbIs22a2kJ2cUy9FNUIgk6p%2FIu8KJ9wCYbTp7Q3cAXYAH2wUnJ7P4op2pMUfouzwYkxPoHJa7oWIol3mKM66TYMQJ48tdQRIH6T6Y12Kehjnr%2BQaCQjJpq03AcL7fdZ4M%2BYJSSaMI5OWC3ETJkF%2BmHOGgJhROC7ARgRcD%2FwlKDuW1Pnx4rpeG%2FlVHs3YeAG%2F3K1KwX1wnnMuyWh1VQwlnxhCdiXGxK4NdU1UO1TWlNgD7gI1JingaY14ukQEpWlxO9%2BaFmeV4zuHIBelz7tPg03zBR4XUQAk29xVlOehARkaDVjXKWB%2BSu3FcnycDybfkVfnx%2BBgz%2FzE7tTyh%2FMiCxiPt2DHmZukkRsJAqcPOlm4NnBE0oxthzdeTmXVmwGK3a%2FIj%2FYlIihNqYyYTZQNqtdclcUxm1eui8pTJ2%2BBsDzBiT9xnoBXG6EsP3IMUGSmXCSwc%2B4xnq2Tnt9qKWpo9fnN2ARxFMbQ%2F0ruzrPuTdGJHqhIa%2BBQhlrrfI3uubrXI324fX%2FL%2Fh7tjC5vuz4JUZmAECSxSmDFApCfpxeV6scPDPziTM529%2B%2F2Ejc%2FD1i5tA7LXmtlxArY0cAsR2SgiJ33kJPV%2FMjZOME2Y3foH%2F0JASBq0nmEN7MIO088AGOqUB%2BuCehJYiJNNxLEn6dMxcDW40kf7p41HL4GjJJk0nSBCAHRQscz18xl%2FcvFv8ThwDugKOWnIkH6FWU2X6UnV91yoJRrGWs4heiQYWBn6Xjb4HJPmrvqeOju9JA%2FOWuC%2BSQ8NNyP%2BIHna%2B0956P%2B9TL%2BGmyQGrmeBkoga0dzjC7Xe3mHC44p7wWd%2F%2BzY2WBHfQeGljdcMUN6Rszyz1BiLxim5L7BkW&X-Amz-Signature=afad39b42a84ad58c5eb4f229c01f5a511001a415e35f8b4a0d9c92bd1f7faae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63KUSTD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpoabZBz6q27zjT5DffMcfPoKB2ibVXJZ5mWxXlVvcTwIgQ5KNOkiFepsmshjDCuHhLjt7Tpas7ryh7Ui5beo8cFYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDF%2FZEPh%2F%2BsZH5q3VnCrcA87QZYrbIs22a2kJ2cUy9FNUIgk6p%2FIu8KJ9wCYbTp7Q3cAXYAH2wUnJ7P4op2pMUfouzwYkxPoHJa7oWIol3mKM66TYMQJ48tdQRIH6T6Y12Kehjnr%2BQaCQjJpq03AcL7fdZ4M%2BYJSSaMI5OWC3ETJkF%2BmHOGgJhROC7ARgRcD%2FwlKDuW1Pnx4rpeG%2FlVHs3YeAG%2F3K1KwX1wnnMuyWh1VQwlnxhCdiXGxK4NdU1UO1TWlNgD7gI1JingaY14ukQEpWlxO9%2BaFmeV4zuHIBelz7tPg03zBR4XUQAk29xVlOehARkaDVjXKWB%2BSu3FcnycDybfkVfnx%2BBgz%2FzE7tTyh%2FMiCxiPt2DHmZukkRsJAqcPOlm4NnBE0oxthzdeTmXVmwGK3a%2FIj%2FYlIihNqYyYTZQNqtdclcUxm1eui8pTJ2%2BBsDzBiT9xnoBXG6EsP3IMUGSmXCSwc%2B4xnq2Tnt9qKWpo9fnN2ARxFMbQ%2F0ruzrPuTdGJHqhIa%2BBQhlrrfI3uubrXI324fX%2FL%2Fh7tjC5vuz4JUZmAECSxSmDFApCfpxeV6scPDPziTM529%2B%2F2Ejc%2FD1i5tA7LXmtlxArY0cAsR2SgiJ33kJPV%2FMjZOME2Y3foH%2F0JASBq0nmEN7MIO088AGOqUB%2BuCehJYiJNNxLEn6dMxcDW40kf7p41HL4GjJJk0nSBCAHRQscz18xl%2FcvFv8ThwDugKOWnIkH6FWU2X6UnV91yoJRrGWs4heiQYWBn6Xjb4HJPmrvqeOju9JA%2FOWuC%2BSQ8NNyP%2BIHna%2B0956P%2B9TL%2BGmyQGrmeBkoga0dzjC7Xe3mHC44p7wWd%2F%2BzY2WBHfQeGljdcMUN6Rszyz1BiLxim5L7BkW&X-Amz-Signature=9afef69254e4fb8f5c7a36d9f190a025f5263549db85d6593f264d4237934315&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
