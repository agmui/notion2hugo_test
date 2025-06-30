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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQA34DB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BlSw8ocrXFBwNZNRBpMlTyWkwKTM%2B5j45orTjDWDnGwIhAJQiTnFOruF1OQbZuAc584rNeGEr8r8qSZxcQBdgmVf8KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU3zmeUR3Soa2nZZMq3AObmk6tNCidogWKk3nE%2BEFT0eoPVNRFfYCD3CzCOG%2Fqq9Dxqw9goEwyJz0LsngGFShz12Xwws6utD8jQrXAWp7p17W19McACot%2F0ZdFSKlUccsb5KUUBkC3rgj%2Bd2FIey7o6lMBF0UEawdj3I0LpUz3OVXVkPswdz2vVtq1q1cRtaR%2BmwxkfI5x8gK87irPbayfFLZTMx2OcE1rwRMr2cEWlssBtTDJyfgd4xbMCpQUSCpeTyUVv7kS055Ii2a6KnEREvAgM1O5lpnkeC%2FVfzz0qM%2BFO6R%2B5uFLeXXgY%2Fk%2BgHiOi%2BGJa%2BSWh%2BSRw8ENkXacSLUkWaRICyFMSrpMp3Wi%2FkUx24%2BkKg2t0IY2A6bbeY15BLfhs33ZU6mk5Z6hdVxeuyvah9GmUZNyP61an6qJxUtVu1kfmWyOTTw9ougZgxyItOjTzJgjZcjqzY9YqdlbkMQvbZF8IxoRlvZ1geBrBUFNqAlbjOEEFwbaFOnKeps1tcfq0Rx7PGeqO2lMV%2B%2B0z3qolh%2BeCKwgxFho5YnWEDhM4BtHO7oU%2F4%2BHg4O%2BCqRBIZhvTopD7XzpO0uciiQ%2BSEuruySZWkKffMbGq228g5P%2BpDl3yh4DQI9C2lmxQ8kYCBHdXeWew6XEJjCSo4vDBjqkARby7%2FP7TVDBEhcH5SXTmCzgr3jPPruUAr2QhKNlCh6S6XYAkIQiEaYhKJAb6OP1PWYNfPju%2BJ%2Bc8q62Cj7t5xHCM31PQBbkSI%2BtqtQMn67a9Dqx7cnbfr4KYtC5NyH7%2BY3NfZkIdmIWurJdtqAeIdezANkS2OiNOnYNopArlIS0aUx%2BSxn3Ni7pZcYTFrTGjABHj2l68%2Bw7f3Nz1%2FIpli447pP6&X-Amz-Signature=f1214f924d5b8d0a80daa135640bb5a2046802ed824d184966f579ab74eba25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQA34DB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BlSw8ocrXFBwNZNRBpMlTyWkwKTM%2B5j45orTjDWDnGwIhAJQiTnFOruF1OQbZuAc584rNeGEr8r8qSZxcQBdgmVf8KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU3zmeUR3Soa2nZZMq3AObmk6tNCidogWKk3nE%2BEFT0eoPVNRFfYCD3CzCOG%2Fqq9Dxqw9goEwyJz0LsngGFShz12Xwws6utD8jQrXAWp7p17W19McACot%2F0ZdFSKlUccsb5KUUBkC3rgj%2Bd2FIey7o6lMBF0UEawdj3I0LpUz3OVXVkPswdz2vVtq1q1cRtaR%2BmwxkfI5x8gK87irPbayfFLZTMx2OcE1rwRMr2cEWlssBtTDJyfgd4xbMCpQUSCpeTyUVv7kS055Ii2a6KnEREvAgM1O5lpnkeC%2FVfzz0qM%2BFO6R%2B5uFLeXXgY%2Fk%2BgHiOi%2BGJa%2BSWh%2BSRw8ENkXacSLUkWaRICyFMSrpMp3Wi%2FkUx24%2BkKg2t0IY2A6bbeY15BLfhs33ZU6mk5Z6hdVxeuyvah9GmUZNyP61an6qJxUtVu1kfmWyOTTw9ougZgxyItOjTzJgjZcjqzY9YqdlbkMQvbZF8IxoRlvZ1geBrBUFNqAlbjOEEFwbaFOnKeps1tcfq0Rx7PGeqO2lMV%2B%2B0z3qolh%2BeCKwgxFho5YnWEDhM4BtHO7oU%2F4%2BHg4O%2BCqRBIZhvTopD7XzpO0uciiQ%2BSEuruySZWkKffMbGq228g5P%2BpDl3yh4DQI9C2lmxQ8kYCBHdXeWew6XEJjCSo4vDBjqkARby7%2FP7TVDBEhcH5SXTmCzgr3jPPruUAr2QhKNlCh6S6XYAkIQiEaYhKJAb6OP1PWYNfPju%2BJ%2Bc8q62Cj7t5xHCM31PQBbkSI%2BtqtQMn67a9Dqx7cnbfr4KYtC5NyH7%2BY3NfZkIdmIWurJdtqAeIdezANkS2OiNOnYNopArlIS0aUx%2BSxn3Ni7pZcYTFrTGjABHj2l68%2Bw7f3Nz1%2FIpli447pP6&X-Amz-Signature=8081c3427503469fb374417646ed851281df592d2f670768ead3bb0887e97b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
