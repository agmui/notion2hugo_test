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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7CAQN2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGCRDRyM6sySoGDyRTb7XIc7IGFUzCpj%2FWE00ECwdDwwIhAL3HaNpM4IQP3baEnPTN59iedtaWGOjvDuSjRi9ggCOcKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlB0PPYWH2pgsGX14q3APU1hQx7fx8bn2JnhtSWbi2PoV2bBmwrU0ghkKaXy1nzE%2FbADsP9mwT3zxyeZeBbETY%2B0viRuQ8HpREVrSpEq6O%2FzbfTxWP%2Fs4IXvfLnxSxQ4D7Y1Z0eBXWfTVS7NSSxaPBsluBMkKLIV5vIGcL9JpjbIpER7Do%2FtGx5A6Y2Nhe7fOSaQMK%2Bqm%2B9B3iPjNkauEWfbl%2B%2F%2BUtX8lryOounAxdse4xf4Mx%2BdrHmXKcG%2FFqo7YzzNzv0RDn%2F8YrcGB%2BSN193teEqYOyVYfgMmuET5kqmKtcuYw6tF%2BRorneeBlRHJ1l0INwau2eo%2FN4UCz4jDxD033VuHTHJGQRpSdW3izWOeXzoyanb07b1HLgVT8%2FXd2lEMQkcE0SIpPDR1gwacMR4MjkEE6j5GeN29bTVIOYlBtV1VknZqV0g3fHFcRXSSx1IGI1ElXi5Cbib7h%2Fe6lbRa5lhwh1Cg5hh46OL%2FH8GbRokcOrFJKvZDPCBRoWoTj%2F6ntx9XbMqbzmijCvfgGn9LRiCCjoGeu7VhifpkM%2FGIq38V56A%2Bl0cwwXMnhvAhcOekpeECV8Z%2Fv10qpBO%2FTEbrd%2BdFOnkolBfiUdoo%2B0LWKYH%2F%2BBJVaKMbzR8k4MuhNepotl5p1JfoEx7zCdnJe%2BBjqkAdUAdVVKHEF8U1rNhlooT2ummE4aEZLlMvvOJN9780XGEVEHicwyiGaV8LEpmjpsdXwJxseeCA50d%2FZHcBaHezc0fZKTCoVRzNOsNa5kbmTLmjWNiOCju8BQXgGa4IYUrMauksplMHY0G2w%2BuVG7%2B8Mf2oU5hdB7%2BVfC33YQmuN3dnQP82Dl6cAGeK0wYmiIXalrEIH2EwfqTFD%2BlgUZs2c2UktJ&X-Amz-Signature=1d4b5bb6d9fb4db6affb0387f9e0fecabaaf90d13498b72ab3a98ea6dfff6d32&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7CAQN2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGCRDRyM6sySoGDyRTb7XIc7IGFUzCpj%2FWE00ECwdDwwIhAL3HaNpM4IQP3baEnPTN59iedtaWGOjvDuSjRi9ggCOcKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlB0PPYWH2pgsGX14q3APU1hQx7fx8bn2JnhtSWbi2PoV2bBmwrU0ghkKaXy1nzE%2FbADsP9mwT3zxyeZeBbETY%2B0viRuQ8HpREVrSpEq6O%2FzbfTxWP%2Fs4IXvfLnxSxQ4D7Y1Z0eBXWfTVS7NSSxaPBsluBMkKLIV5vIGcL9JpjbIpER7Do%2FtGx5A6Y2Nhe7fOSaQMK%2Bqm%2B9B3iPjNkauEWfbl%2B%2F%2BUtX8lryOounAxdse4xf4Mx%2BdrHmXKcG%2FFqo7YzzNzv0RDn%2F8YrcGB%2BSN193teEqYOyVYfgMmuET5kqmKtcuYw6tF%2BRorneeBlRHJ1l0INwau2eo%2FN4UCz4jDxD033VuHTHJGQRpSdW3izWOeXzoyanb07b1HLgVT8%2FXd2lEMQkcE0SIpPDR1gwacMR4MjkEE6j5GeN29bTVIOYlBtV1VknZqV0g3fHFcRXSSx1IGI1ElXi5Cbib7h%2Fe6lbRa5lhwh1Cg5hh46OL%2FH8GbRokcOrFJKvZDPCBRoWoTj%2F6ntx9XbMqbzmijCvfgGn9LRiCCjoGeu7VhifpkM%2FGIq38V56A%2Bl0cwwXMnhvAhcOekpeECV8Z%2Fv10qpBO%2FTEbrd%2BdFOnkolBfiUdoo%2B0LWKYH%2F%2BBJVaKMbzR8k4MuhNepotl5p1JfoEx7zCdnJe%2BBjqkAdUAdVVKHEF8U1rNhlooT2ummE4aEZLlMvvOJN9780XGEVEHicwyiGaV8LEpmjpsdXwJxseeCA50d%2FZHcBaHezc0fZKTCoVRzNOsNa5kbmTLmjWNiOCju8BQXgGa4IYUrMauksplMHY0G2w%2BuVG7%2B8Mf2oU5hdB7%2BVfC33YQmuN3dnQP82Dl6cAGeK0wYmiIXalrEIH2EwfqTFD%2BlgUZs2c2UktJ&X-Amz-Signature=be4624c0a914411a771b0e7e37dc1efa7d55080b8b41288a5e735451afa689ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
