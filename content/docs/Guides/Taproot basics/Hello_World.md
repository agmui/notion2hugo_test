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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6CEAZS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBMfTfGwvsrRoePvVDKpA5%2FZAC3QRVDqJ%2BL0FWUM0XlKAiBRGHwNsYbCVAjC5Akqj2JCyt8aJVB9kaNL5PguDKsyUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMAgMjQzqCdj8dYN%2FXKtwDlKsVyl2lCxiT6Pxg6NCl8guRHcVGY1YGmDd01MxYs%2BEWRpferzKhcxBfD6PLK3%2FKvNZQrSrotllQbRVnM7t%2FUZxveGcnI6W3v7oFR9F8avWMXj06CdwG367s9FKz25p26Qu%2BjGQJE5QqVziAid31WZS6Kc0NAjmTgVBowWE5abyfaNyMs6oWK4xnv2Mvb4N7%2FGdMdCrsEEJwi%2BZlxQpyoKNwiLuMTQ%2BOSwnbVj%2BN97oqtvVEIsVbVX2ubQmclxTD06o%2FkEDN%2BqpJK%2F3IVNvhT5nLUbltngchmhMBZAmJVYO9WJDTxmtF2BafqmV%2FNdTyY6cpFb0Y%2FOQucRTNr0sIN4fX9WiEGZBMcZ4RNTL5aZs1tcM7PoSbmYG0Cq9zrXAMbUmaJhaTZdRe%2BgPoexemxm9iZn42a69FgiDasw%2FuWjV66JL86p%2FOgMwl9FsqH5%2FB7PPggHYQZ648%2BxswETGJ4CRqyOWY9Mas6SG11T1fgrCPvx77RcUV0W%2FBM3b8Ho9yHTlCrd%2F%2Fq88VrdDiZ3A647OB0fwdjWLNsTqf7ARzpa7%2FYbhz5avV3tGB3TLm91rw8UhWyYF%2BDCMCZmZXbMNXgP1NwTyhOLXUJM7rkWD9w6NbJPKsGjW7Og6dT8cwlYLCxAY6pgEs22iSy%2Bvr0YiV0kmCVNq6zLuOckSY6fKqV8mND3rVqFeKNGyuYWGxx5%2FOcabcQ4xz8mDzJADRNpWKntfKwAXvSCMXOR70uvijuq7AYKHiXEqwrNoV%2BA%2BcwQ5VbboIF2mGgt1CJzcMios%2BbJGh0kG%2BDaeOltennKkmXsAa7UWLkoZ1ZwzRipRmOceHX48Nr9SpiDvkIU4lFzc8P5k9k%2BlBlAITuhKl&X-Amz-Signature=3cdd765aa147f88ecedc07c01a7ecc7f6d7c24eae1986830e54b6d91f4774644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A6CEAZS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBMfTfGwvsrRoePvVDKpA5%2FZAC3QRVDqJ%2BL0FWUM0XlKAiBRGHwNsYbCVAjC5Akqj2JCyt8aJVB9kaNL5PguDKsyUCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMAgMjQzqCdj8dYN%2FXKtwDlKsVyl2lCxiT6Pxg6NCl8guRHcVGY1YGmDd01MxYs%2BEWRpferzKhcxBfD6PLK3%2FKvNZQrSrotllQbRVnM7t%2FUZxveGcnI6W3v7oFR9F8avWMXj06CdwG367s9FKz25p26Qu%2BjGQJE5QqVziAid31WZS6Kc0NAjmTgVBowWE5abyfaNyMs6oWK4xnv2Mvb4N7%2FGdMdCrsEEJwi%2BZlxQpyoKNwiLuMTQ%2BOSwnbVj%2BN97oqtvVEIsVbVX2ubQmclxTD06o%2FkEDN%2BqpJK%2F3IVNvhT5nLUbltngchmhMBZAmJVYO9WJDTxmtF2BafqmV%2FNdTyY6cpFb0Y%2FOQucRTNr0sIN4fX9WiEGZBMcZ4RNTL5aZs1tcM7PoSbmYG0Cq9zrXAMbUmaJhaTZdRe%2BgPoexemxm9iZn42a69FgiDasw%2FuWjV66JL86p%2FOgMwl9FsqH5%2FB7PPggHYQZ648%2BxswETGJ4CRqyOWY9Mas6SG11T1fgrCPvx77RcUV0W%2FBM3b8Ho9yHTlCrd%2F%2Fq88VrdDiZ3A647OB0fwdjWLNsTqf7ARzpa7%2FYbhz5avV3tGB3TLm91rw8UhWyYF%2BDCMCZmZXbMNXgP1NwTyhOLXUJM7rkWD9w6NbJPKsGjW7Og6dT8cwlYLCxAY6pgEs22iSy%2Bvr0YiV0kmCVNq6zLuOckSY6fKqV8mND3rVqFeKNGyuYWGxx5%2FOcabcQ4xz8mDzJADRNpWKntfKwAXvSCMXOR70uvijuq7AYKHiXEqwrNoV%2BA%2BcwQ5VbboIF2mGgt1CJzcMios%2BbJGh0kG%2BDaeOltennKkmXsAa7UWLkoZ1ZwzRipRmOceHX48Nr9SpiDvkIU4lFzc8P5k9k%2BlBlAITuhKl&X-Amz-Signature=e4c97b455bee60f2156652a1a5cfec4cab7952b991cbca55ba3f38199d96652c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
