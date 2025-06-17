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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K37GUDE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BaW1AYtoVxbTVYnKkE3tDeJ3XsZexxcTKTGpTMMDQwIgWKT8Mn0kSgNLE7GROavipxlv1d0DJfgBHPhlfcEfn3Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB7pFtw4XJCbXg6AkircA2tym64LLPwFMhBNFglceDttrx5ZenX7jBO8C6Dxrew7vXOCSC%2BYmT8bLNoABt3KQz9r2M9Wt7y5FkOuVOdRRuhe%2B8DwCrzTOIDBKquzD0Bf9jaP1lan0gWeC%2BJCckk1aKvln34x2y5%2F3OEV6mjy1Orf3OHAAlJTxUQBKr5bR2Ct1gvudbwRxDOoMrZY1WCP1rXx5b%2BffeXKKYyVj33EbBpJaokZkdu4iGvY68kmeWzAh3DQ%2B1v1IJZGAzC4OLncXFLIhLp9GfZp1gx4NHIS8H6CRkz8vtgSyapyH7rLnpDiBfjRpFkwJk2fcnbcibxWFDsRB%2BQ%2B6%2FRKR5P3NTleB%2Fjcyg%2Br5yKB4Cr%2B6haclOgRCQq7PEsazpmTzvMG31fR0V9FwYSi%2Bu8oAmPUc07ayyezXbe%2FMMEdLwVgW%2FO%2Fzhli%2Bl1AU%2FyKxuBlxRWy7ZQZ6G74VRulv7fIRHLNr%2B1Gcsad6oGuJ8vBKrbw5OSCHOV4nh6LQPcg7VQ0U%2Bk9u6cCMgZTsDZ8I0iDRZKGz%2FJqSSYUYbs8RJXOLIKzAN2f1%2BjUuVNedGrX%2BYiz2FE%2FLJQUT0HIZsAjbC1b2oFuJ5ydzg40AqsWLxhqU441EwL0l79OFF0o4empuWSE7toIMLy1xsIGOqUBRDSUgbPL77Njxsw1266hASM8MG%2FlqgXQO6RELyMePRAzfmzwdlo8qeoasTEOKOeLlddJVg1gVgyhUuMM8hLhmJAbJlYoNzncJ%2Bjx0w%2B7Zq2HL59t2hCYkx3YL4CJ8FB73r6y0viKa%2Bupo9eNedwiT%2FRNs4fH7rT6m52zQy8DdN7NwouJzgQDzV%2BbzZqqasSVp1g3HS4sfVSF6huHkszH6u7Hq1x9&X-Amz-Signature=db788a7ab95649f72afded5fc13e67d5475dfe15f65b1374914f5dbe318ccc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K37GUDE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5BaW1AYtoVxbTVYnKkE3tDeJ3XsZexxcTKTGpTMMDQwIgWKT8Mn0kSgNLE7GROavipxlv1d0DJfgBHPhlfcEfn3Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDB7pFtw4XJCbXg6AkircA2tym64LLPwFMhBNFglceDttrx5ZenX7jBO8C6Dxrew7vXOCSC%2BYmT8bLNoABt3KQz9r2M9Wt7y5FkOuVOdRRuhe%2B8DwCrzTOIDBKquzD0Bf9jaP1lan0gWeC%2BJCckk1aKvln34x2y5%2F3OEV6mjy1Orf3OHAAlJTxUQBKr5bR2Ct1gvudbwRxDOoMrZY1WCP1rXx5b%2BffeXKKYyVj33EbBpJaokZkdu4iGvY68kmeWzAh3DQ%2B1v1IJZGAzC4OLncXFLIhLp9GfZp1gx4NHIS8H6CRkz8vtgSyapyH7rLnpDiBfjRpFkwJk2fcnbcibxWFDsRB%2BQ%2B6%2FRKR5P3NTleB%2Fjcyg%2Br5yKB4Cr%2B6haclOgRCQq7PEsazpmTzvMG31fR0V9FwYSi%2Bu8oAmPUc07ayyezXbe%2FMMEdLwVgW%2FO%2Fzhli%2Bl1AU%2FyKxuBlxRWy7ZQZ6G74VRulv7fIRHLNr%2B1Gcsad6oGuJ8vBKrbw5OSCHOV4nh6LQPcg7VQ0U%2Bk9u6cCMgZTsDZ8I0iDRZKGz%2FJqSSYUYbs8RJXOLIKzAN2f1%2BjUuVNedGrX%2BYiz2FE%2FLJQUT0HIZsAjbC1b2oFuJ5ydzg40AqsWLxhqU441EwL0l79OFF0o4empuWSE7toIMLy1xsIGOqUBRDSUgbPL77Njxsw1266hASM8MG%2FlqgXQO6RELyMePRAzfmzwdlo8qeoasTEOKOeLlddJVg1gVgyhUuMM8hLhmJAbJlYoNzncJ%2Bjx0w%2B7Zq2HL59t2hCYkx3YL4CJ8FB73r6y0viKa%2Bupo9eNedwiT%2FRNs4fH7rT6m52zQy8DdN7NwouJzgQDzV%2BbzZqqasSVp1g3HS4sfVSF6huHkszH6u7Hq1x9&X-Amz-Signature=9efb2b167df271ea6a25fdd7c8f89eb9a15dd9ffa9616d43aa82e6ea813da211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
