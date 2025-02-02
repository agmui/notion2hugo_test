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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2GYH6S%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67wMF%2FoQMG3S5Hp2NF7C0r7aK9l2%2F%2BA8RI0evwYVpeQIgIeA7ug3WKuBuZIMD1eou6D0nCNHXo7kSNrShbs3bI0QqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXuSNyjgC8FF5J2wircA2kBQ164TmLCmq%2FYtRxEvHPHgYAFq2saOR%2FqJCLxDbCGTBf9XNdpyk3r7cECFWQ5uLRgcCpYh4Uaq0gPL5y%2F1njyHktq1Y8fSh7wT42iwq1FHmAJClxdGAzH2cAncEtc6jkSoWjBB%2BmQbq0on6n%2BF0i4sF8hr6AG7A5%2Bq7uC%2Fteogtgb6ZOCenXlgEzEkcHEjGgBDsWR%2Bbg%2F0MeiG6zeFgahSgacrTMZx15p8ej1U7S8io4kPvl%2FvzVmLIxE7vvHkp%2BnRJv6Yf0KdayrpcYoCJke1HOzVl49ZC8%2Fann56UIMfN9LdesDTyYf8BQAzdXujW8NvU%2FQayy7FuEkvr77LdLUSPsk0NxxyhOVF7cWoh1D0pTVGZT9h6v4Rc14Y%2BgCCDhKdkZfQFNxgJKBzxgKtse3NM6zvJnYVhff5ORXYKmeasCRrDr8hV%2FuUIgfOMtdfxw6DGwmyTmOYSWSVq5A%2B2MR7NSIsgmv7Do689icDCuRFv8VtuXRS7Qx71SDKcWtzxhUauUagsEG4B6xtconXFsZ1j0PTvpJ5fSYWzjYnZMdb15tiheCtna7qzeH3W4STsn%2F3nNIW3LoXPza3WumyXx2dArECIlF7ZcAsnD2Ez8hXnvJuAVWippSrZUoMLLC%2FbwGOqUBZTxMDGuliiCLAZbspQtuVZhZjiCjMdeGZqtXohPxUfyLwaUMvOypBihkpARrWZYSNQfZ0GUDw%2Bj2p30Ksd4OwPfrnBbL6%2BI1q15h8ygBhQh25b6ldlMkMMJ7t6HbEJfx4cP2buLwM34pWG6TEmMOaTACgAA9UBrSstn%2FK3Zl3f6YEyplaG2CQkDe2OcYRkySYtSLUXF%2BIlADL6Vo1y2aj0t71phw&X-Amz-Signature=139f1528e00fc255e173eef30a7121d73c6bba5812220b59d8d695770fc25f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q2GYH6S%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC67wMF%2FoQMG3S5Hp2NF7C0r7aK9l2%2F%2BA8RI0evwYVpeQIgIeA7ug3WKuBuZIMD1eou6D0nCNHXo7kSNrShbs3bI0QqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXuSNyjgC8FF5J2wircA2kBQ164TmLCmq%2FYtRxEvHPHgYAFq2saOR%2FqJCLxDbCGTBf9XNdpyk3r7cECFWQ5uLRgcCpYh4Uaq0gPL5y%2F1njyHktq1Y8fSh7wT42iwq1FHmAJClxdGAzH2cAncEtc6jkSoWjBB%2BmQbq0on6n%2BF0i4sF8hr6AG7A5%2Bq7uC%2Fteogtgb6ZOCenXlgEzEkcHEjGgBDsWR%2Bbg%2F0MeiG6zeFgahSgacrTMZx15p8ej1U7S8io4kPvl%2FvzVmLIxE7vvHkp%2BnRJv6Yf0KdayrpcYoCJke1HOzVl49ZC8%2Fann56UIMfN9LdesDTyYf8BQAzdXujW8NvU%2FQayy7FuEkvr77LdLUSPsk0NxxyhOVF7cWoh1D0pTVGZT9h6v4Rc14Y%2BgCCDhKdkZfQFNxgJKBzxgKtse3NM6zvJnYVhff5ORXYKmeasCRrDr8hV%2FuUIgfOMtdfxw6DGwmyTmOYSWSVq5A%2B2MR7NSIsgmv7Do689icDCuRFv8VtuXRS7Qx71SDKcWtzxhUauUagsEG4B6xtconXFsZ1j0PTvpJ5fSYWzjYnZMdb15tiheCtna7qzeH3W4STsn%2F3nNIW3LoXPza3WumyXx2dArECIlF7ZcAsnD2Ez8hXnvJuAVWippSrZUoMLLC%2FbwGOqUBZTxMDGuliiCLAZbspQtuVZhZjiCjMdeGZqtXohPxUfyLwaUMvOypBihkpARrWZYSNQfZ0GUDw%2Bj2p30Ksd4OwPfrnBbL6%2BI1q15h8ygBhQh25b6ldlMkMMJ7t6HbEJfx4cP2buLwM34pWG6TEmMOaTACgAA9UBrSstn%2FK3Zl3f6YEyplaG2CQkDe2OcYRkySYtSLUXF%2BIlADL6Vo1y2aj0t71phw&X-Amz-Signature=1d37533f2e9d8a2c106c17cb1f42b518715a7ce05bd06171e64107cbdd27cbef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
