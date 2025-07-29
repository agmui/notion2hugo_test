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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIWQKTO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCIZzoW7SJnCgIV54I6gef6j1RV5QNZh%2B7hNhm%2FihXNEAIgHXbB9A6vUIb%2BhstYtAgG5D6GXoUE%2FaDSk6VWHhNe07oqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2ByU3T%2FjkSwYaU2CrcAwjwCXTzaXgfFQk57iGSRVyZ8UPMakQsAkKx6G7Lqo5Dh3WOPEYexhh5Z5LGwk7In%2BY8DtjVjaIkTy6FFE3pC%2Bw0Oey24h5W%2BYO3vv3FGKcTIgZDnNpQDicdkqZTAAyNHYfEWCpINwpSx8cjORxGtXySAuXRTThqjSoO1IMW3h3wIkELmmW03LMqzRlfyg9kwiD61E1L2rSxmp30XsignPNRZVbQ77kgVJFU6teVx44YF4czHAOXQGopB0dTEJRosSbTot7sfmascG%2BsRIh%2Fz0smTh%2BiQG8X1joGGGcsVHjgclCHPk4PhcqGhcuEvgljjeGVmcpCDILshlRs1r4MFUhbDf7UuMfukkscxorVgHI7bH0HJBiGCQ%2BnxKl4VgsdzC1COxvbD%2BXWjMt8n%2ByxTbntmSF1V7f26nYFaN9AeWYDk7CLL0EK48JT0vnp4W5wkNXau%2BR7kJf3bXKeHvYphA5sRg2t0KBIOnJqemmJqB74fKhC1YxJLwQWQuosbcXJnbHPE%2FUTS%2F1UHsYylgPOWMY2QVyjcHMBkjdAm9nVlOLUaQCegwrM4o%2FARWHE%2FAeVA%2BC%2B3TTaIquTxqw0mvhngy%2FWbfWo6%2FVXCRe5gZvMDvFm05vL2MiP9%2BSTKk2IMOixosQGOqUBAqYKCIY3eFkkjxlSU8RfPVlvjrWJomLvOUaWOIs4%2Bfwto67nsSe%2B0WL1FBY3PB3vjTtLpcKpjeLHPSkPxbzKLIWGa6i5R5Jt8vycFxDOnyCmBhxN7l6kNkruyHjwatr%2FH0p6Mjl2CWLk4Zbj%2Fao9eeFP50QXUvNLA%2Bu8YS8h0zlHBpswoIbpxHhSlK8t%2FnqF9bZ1ZWp%2FKT%2FgQxCrQX4UPc4FFQai&X-Amz-Signature=6e10384108df1147398560bcfda223f66e70049cda713e3d9554890423802ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIWQKTO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCIZzoW7SJnCgIV54I6gef6j1RV5QNZh%2B7hNhm%2FihXNEAIgHXbB9A6vUIb%2BhstYtAgG5D6GXoUE%2FaDSk6VWHhNe07oqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN%2ByU3T%2FjkSwYaU2CrcAwjwCXTzaXgfFQk57iGSRVyZ8UPMakQsAkKx6G7Lqo5Dh3WOPEYexhh5Z5LGwk7In%2BY8DtjVjaIkTy6FFE3pC%2Bw0Oey24h5W%2BYO3vv3FGKcTIgZDnNpQDicdkqZTAAyNHYfEWCpINwpSx8cjORxGtXySAuXRTThqjSoO1IMW3h3wIkELmmW03LMqzRlfyg9kwiD61E1L2rSxmp30XsignPNRZVbQ77kgVJFU6teVx44YF4czHAOXQGopB0dTEJRosSbTot7sfmascG%2BsRIh%2Fz0smTh%2BiQG8X1joGGGcsVHjgclCHPk4PhcqGhcuEvgljjeGVmcpCDILshlRs1r4MFUhbDf7UuMfukkscxorVgHI7bH0HJBiGCQ%2BnxKl4VgsdzC1COxvbD%2BXWjMt8n%2ByxTbntmSF1V7f26nYFaN9AeWYDk7CLL0EK48JT0vnp4W5wkNXau%2BR7kJf3bXKeHvYphA5sRg2t0KBIOnJqemmJqB74fKhC1YxJLwQWQuosbcXJnbHPE%2FUTS%2F1UHsYylgPOWMY2QVyjcHMBkjdAm9nVlOLUaQCegwrM4o%2FARWHE%2FAeVA%2BC%2B3TTaIquTxqw0mvhngy%2FWbfWo6%2FVXCRe5gZvMDvFm05vL2MiP9%2BSTKk2IMOixosQGOqUBAqYKCIY3eFkkjxlSU8RfPVlvjrWJomLvOUaWOIs4%2Bfwto67nsSe%2B0WL1FBY3PB3vjTtLpcKpjeLHPSkPxbzKLIWGa6i5R5Jt8vycFxDOnyCmBhxN7l6kNkruyHjwatr%2FH0p6Mjl2CWLk4Zbj%2Fao9eeFP50QXUvNLA%2Bu8YS8h0zlHBpswoIbpxHhSlK8t%2FnqF9bZ1ZWp%2FKT%2FgQxCrQX4UPc4FFQai&X-Amz-Signature=f9c66c37a1611785a1324e3659c8636cc87d0d0c235240b270302fa7e2c90487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
