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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFG2SDT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICC4LRiMjqFgbfrpRaBBsTy5U0Fm2TtICJ5OSuJnsoUwAiEAtRYCDu3PfEYCrnUt2yzXZsLooT5ZkhvuAW7EtBMLV%2Boq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLQUyNotp3Gm6YZdsircA8vD62UzoIcWJyV9RwlddQZHFAcmmGrv46Gc%2Brh7amICrc0pLNMYXZ9H%2FjqGvXsmimQewjvm8U%2Fjy3xjj%2FoR%2FVsYJxak9b7%2BNjp5Ap6ICbIz53c%2BdgGGpyEPxKDIHZxWu6rNGG0BG603rtUMUdoZ46yBKlYOrLC%2BW4aKXUJEwJAbI52poyUL3Fb5eKKC4u%2FiE68gTDSiVtLEUdJ8qbB5Ka%2F2qtXAmxp1Na%2BOp9jqeg%2Bo9B%2BI1yiFZO2pb1nQp5ZmqzDZ4wHRnWF%2FrpHffB1ktzZQrSGgzMGxr5zKJLigqEBAfnXAADoboXh6QstFI7txYL63Dv9JqPadI%2FM4QJ6EJUGDWBy7CUKbioqKtbXTx7Cqzwmzg2iTp7wgrUJdfxeNtPqovNikdAlRxrufTYdgsR5gg%2BpcWcVypToWxi1IrbYjVt8ac73ma1Y7zDM6IUR%2FF%2BoU87Bim60HJdLWQCA3CtcRaNHjbpnGgLdv%2FzLESRoZaG94%2FrzZnN2XrTzzy%2FWx7h7PuwEqk%2Bh2LTM1uipIcEXn3aKal2lNuXTDwCOsA3mc%2BKoWBX%2B3Evpne%2FDb00YkZf2a7p3TcEmknW4eoeSpSuWtEUupCwcgNIbvQD3Lr6HXBLsNwnvqIdAacjr9MPmfrb4GOqUBEHCJpvUjbWEDyOmHF6gQIpJaOWxfcK1Ah4xhFQWQIY3mBBHE%2BSxNBKLisyQOC1YX%2BLaaBdP%2BtjUeB1q6wWFT%2BMtVWSrB4dcnX4FQnJSslSStHlmY6vpX7GBOozBLfwSfQTaCtS1xS3vv%2FAbhQQqopX%2BSs1gvLlJMIUQXQpmQwU8BX%2BWDNv3ovXFlQhkvv2%2BvpC1Y5MFiGtv5tCcn3ci5LMsSmZgI&X-Amz-Signature=79e25f6c33fa6c84c747f99c6609bce2c31f4dc8a8e06b12ff898c3506dca6de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFG2SDT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICC4LRiMjqFgbfrpRaBBsTy5U0Fm2TtICJ5OSuJnsoUwAiEAtRYCDu3PfEYCrnUt2yzXZsLooT5ZkhvuAW7EtBMLV%2Boq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLQUyNotp3Gm6YZdsircA8vD62UzoIcWJyV9RwlddQZHFAcmmGrv46Gc%2Brh7amICrc0pLNMYXZ9H%2FjqGvXsmimQewjvm8U%2Fjy3xjj%2FoR%2FVsYJxak9b7%2BNjp5Ap6ICbIz53c%2BdgGGpyEPxKDIHZxWu6rNGG0BG603rtUMUdoZ46yBKlYOrLC%2BW4aKXUJEwJAbI52poyUL3Fb5eKKC4u%2FiE68gTDSiVtLEUdJ8qbB5Ka%2F2qtXAmxp1Na%2BOp9jqeg%2Bo9B%2BI1yiFZO2pb1nQp5ZmqzDZ4wHRnWF%2FrpHffB1ktzZQrSGgzMGxr5zKJLigqEBAfnXAADoboXh6QstFI7txYL63Dv9JqPadI%2FM4QJ6EJUGDWBy7CUKbioqKtbXTx7Cqzwmzg2iTp7wgrUJdfxeNtPqovNikdAlRxrufTYdgsR5gg%2BpcWcVypToWxi1IrbYjVt8ac73ma1Y7zDM6IUR%2FF%2BoU87Bim60HJdLWQCA3CtcRaNHjbpnGgLdv%2FzLESRoZaG94%2FrzZnN2XrTzzy%2FWx7h7PuwEqk%2Bh2LTM1uipIcEXn3aKal2lNuXTDwCOsA3mc%2BKoWBX%2B3Evpne%2FDb00YkZf2a7p3TcEmknW4eoeSpSuWtEUupCwcgNIbvQD3Lr6HXBLsNwnvqIdAacjr9MPmfrb4GOqUBEHCJpvUjbWEDyOmHF6gQIpJaOWxfcK1Ah4xhFQWQIY3mBBHE%2BSxNBKLisyQOC1YX%2BLaaBdP%2BtjUeB1q6wWFT%2BMtVWSrB4dcnX4FQnJSslSStHlmY6vpX7GBOozBLfwSfQTaCtS1xS3vv%2FAbhQQqopX%2BSs1gvLlJMIUQXQpmQwU8BX%2BWDNv3ovXFlQhkvv2%2BvpC1Y5MFiGtv5tCcn3ci5LMsSmZgI&X-Amz-Signature=ec66dc03c4065c40734f86ac546cdf5f117bb1e1044f40fe2bfce0348928472d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
