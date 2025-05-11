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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WKXMI7H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIArDN5isYNrQ9Yw3LDDWP7mu3PqQu2wKomj7pMFJRqA6AiAyvDx9cSLLNuQ2OmBgw8OEcdDUIXK5J0aVefeP9kbEyCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQQBB5YSq%2FZwtJJ23KtwDNG2dT0EZH0YE8wc2ZcsIIVDV2Kl6DfGo6TLqGHY5%2FRyDIUARZDMN4extOq38FEVEnRhLzwPb%2Bt%2FB9iZ8EzSfdM6x1ru0JAflzBPZcQbg8BWNHeGPfMz%2FR9lnnPW39BMgsukEqSKkJ0hbiF0s22A2gcx55N0XsKoq7yAE5cIU%2F6hJK6iR9HOhyUBcYhJN9a%2FAOJOkZCvh59uZZfsJQenkC105MfcFeN6S6kieqns26Noq1Tj9BkTiB3jtBwzmJac573zm%2FEpuOq8co%2BkooezQpCxkgDhtkFtityzm%2FWgLRD1HmOfiRFtexB1DnAQ1zZVELxGPOwV35l4%2FS6xPXxM%2B%2BI0bIx0YB11vfPk0setPTL%2Bv7L%2BUcYsSBofSadKdZu6mebdK567dCRURXb06HxQcLw8WZCpOIvdnuZAYQoGc3WMiX4W9OYaH1ySk2Kj5ZoqvoT8shvtO5bwQ8wDg0EEGJDei8lHknnPbERVwIW9XvM0AFeJOJcTO%2BKH2EFPrThfF5O2NhX1diCTnScknVHgsnKrIWAWaMo93MvGKWzb%2BY53nPZtYpQFquEkh0F%2F41YN4KaqpICW31uPagNBf2euf2CXqvUYfvJa7rbZHOzflxFFcHlwXtteA%2FHoJ0L4wkJaEwQY6pgGhiinWiqb5uPXoVmEfFSb%2BLGhu21X8pdiFol1Z6o19EgB%2F1w6J2Aqf0xLQ%2BJjDBat83Qaq7VNxPYYAWh4G312jloQK%2BVKcP0CtM3Q1L3qjgDYnO6MsH%2BcPIBIbCP%2BOEI2YyvWrlL3vUdCRFdutPjO8BssQoJIap4QezLxsN2ZmYuJ%2B4gJ6YkZiGO0ZpJ84XrFJziW%2FPMxAKqPI0POTAEvYbKZNbKQa&X-Amz-Signature=cf6fa77e658465b0b607a626dee7a2eb93a78c031972e9605e6e94b914accdcd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WKXMI7H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIArDN5isYNrQ9Yw3LDDWP7mu3PqQu2wKomj7pMFJRqA6AiAyvDx9cSLLNuQ2OmBgw8OEcdDUIXK5J0aVefeP9kbEyCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQQBB5YSq%2FZwtJJ23KtwDNG2dT0EZH0YE8wc2ZcsIIVDV2Kl6DfGo6TLqGHY5%2FRyDIUARZDMN4extOq38FEVEnRhLzwPb%2Bt%2FB9iZ8EzSfdM6x1ru0JAflzBPZcQbg8BWNHeGPfMz%2FR9lnnPW39BMgsukEqSKkJ0hbiF0s22A2gcx55N0XsKoq7yAE5cIU%2F6hJK6iR9HOhyUBcYhJN9a%2FAOJOkZCvh59uZZfsJQenkC105MfcFeN6S6kieqns26Noq1Tj9BkTiB3jtBwzmJac573zm%2FEpuOq8co%2BkooezQpCxkgDhtkFtityzm%2FWgLRD1HmOfiRFtexB1DnAQ1zZVELxGPOwV35l4%2FS6xPXxM%2B%2BI0bIx0YB11vfPk0setPTL%2Bv7L%2BUcYsSBofSadKdZu6mebdK567dCRURXb06HxQcLw8WZCpOIvdnuZAYQoGc3WMiX4W9OYaH1ySk2Kj5ZoqvoT8shvtO5bwQ8wDg0EEGJDei8lHknnPbERVwIW9XvM0AFeJOJcTO%2BKH2EFPrThfF5O2NhX1diCTnScknVHgsnKrIWAWaMo93MvGKWzb%2BY53nPZtYpQFquEkh0F%2F41YN4KaqpICW31uPagNBf2euf2CXqvUYfvJa7rbZHOzflxFFcHlwXtteA%2FHoJ0L4wkJaEwQY6pgGhiinWiqb5uPXoVmEfFSb%2BLGhu21X8pdiFol1Z6o19EgB%2F1w6J2Aqf0xLQ%2BJjDBat83Qaq7VNxPYYAWh4G312jloQK%2BVKcP0CtM3Q1L3qjgDYnO6MsH%2BcPIBIbCP%2BOEI2YyvWrlL3vUdCRFdutPjO8BssQoJIap4QezLxsN2ZmYuJ%2B4gJ6YkZiGO0ZpJ84XrFJziW%2FPMxAKqPI0POTAEvYbKZNbKQa&X-Amz-Signature=08e844aa2073d8177e54703066defe88d69acb5dd299d5d70011dcd170fd2d12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
