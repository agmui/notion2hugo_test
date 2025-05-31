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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIDEXT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvONuDSHmC84Dlqd1%2F%2F1%2Bm3yevzSGRZciEkBKIRsniSAIhAObBzO1%2B23xdG5aESgofjB7Etd9fleDro3Wtyh2pDOEbKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq0zYszS2xQV8%2F2VEq3AOAxsg5IaRH88QBSa0idq6LJ071hjffAU5NojU%2B8LCpzb8fQyD1pd6rGijOkgN3cKGHdEpBrV3cWb%2F0tHJbREUvg0LaI40e3uT6KHb1nYvVyBjbK0FEVSAO%2Fa%2FHWAsC9TedozF0pUH0iYXUfazP33m6Ra5JS%2FoGuEfcx9YlEaxQbRYj7tdmEUqPX3h7mz9pur6oH5Ir3OQRdcglg5AhFpskiXvz87UTnuoPJpDRsshgMfX8APrirPwuYBXhOorbxK6Y9pyeqAfEmPDTsINaKNa0GWYX7ncem9LpXax%2FHIcaQtnRKxQc4zzGRGqgpI16GNSqkl3aEOptpKVsjfd3LQuMwn3WJ8a43tjsXbouhqy9T1J7c%2BjVVWqlvjGtx7nA67KnEZLQzbWZFYsOk62q8QcHDgwHVgZs2q9wXLPY8X5Ldb0O4Vo76xUL%2FIIzC5UizOsC45V25j8e5OFx1ak992doDP8A2N62ojICzh0J9FahlBkEgbRb0liu5b8bJPEBiLqBDWtZKVd6YTkMUPJodOBIFqznIjWTSE4%2BZ7PnInmOIUj7FuN6To58FL9ipSxqrHHQ8dRusCJHtfFmiTuJUi%2F8IuPNI2T7CbP0a7CKyCxooVdG5PHHRyKN%2Fy1iTTCFpOzBBjqkAcqtGAmqRWA6xsA9%2FTKy8%2BFdbQuMMRnWFrHToxq3ixv0g%2BB6v8X1vtluitzlMz%2FgmhXWpRErOdoRBVM1wXaRegOAx%2BdAOoV2JTsanx4hzjpOQNLaNl29rEMM3JObjB8JkzdPJESYpgpNLBTpggH%2B1maAhml978AIDzbAOiCmXP%2BHecgtSRZ0dr6jb652uZ1swj7KyEcOfXdEPXf0k8oCaP%2FKOdrN&X-Amz-Signature=e4b0354267aa76878a900a2601b1d9e9dfd1026c04a1444e5318ee967caf8faf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGIDEXT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvONuDSHmC84Dlqd1%2F%2F1%2Bm3yevzSGRZciEkBKIRsniSAIhAObBzO1%2B23xdG5aESgofjB7Etd9fleDro3Wtyh2pDOEbKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq0zYszS2xQV8%2F2VEq3AOAxsg5IaRH88QBSa0idq6LJ071hjffAU5NojU%2B8LCpzb8fQyD1pd6rGijOkgN3cKGHdEpBrV3cWb%2F0tHJbREUvg0LaI40e3uT6KHb1nYvVyBjbK0FEVSAO%2Fa%2FHWAsC9TedozF0pUH0iYXUfazP33m6Ra5JS%2FoGuEfcx9YlEaxQbRYj7tdmEUqPX3h7mz9pur6oH5Ir3OQRdcglg5AhFpskiXvz87UTnuoPJpDRsshgMfX8APrirPwuYBXhOorbxK6Y9pyeqAfEmPDTsINaKNa0GWYX7ncem9LpXax%2FHIcaQtnRKxQc4zzGRGqgpI16GNSqkl3aEOptpKVsjfd3LQuMwn3WJ8a43tjsXbouhqy9T1J7c%2BjVVWqlvjGtx7nA67KnEZLQzbWZFYsOk62q8QcHDgwHVgZs2q9wXLPY8X5Ldb0O4Vo76xUL%2FIIzC5UizOsC45V25j8e5OFx1ak992doDP8A2N62ojICzh0J9FahlBkEgbRb0liu5b8bJPEBiLqBDWtZKVd6YTkMUPJodOBIFqznIjWTSE4%2BZ7PnInmOIUj7FuN6To58FL9ipSxqrHHQ8dRusCJHtfFmiTuJUi%2F8IuPNI2T7CbP0a7CKyCxooVdG5PHHRyKN%2Fy1iTTCFpOzBBjqkAcqtGAmqRWA6xsA9%2FTKy8%2BFdbQuMMRnWFrHToxq3ixv0g%2BB6v8X1vtluitzlMz%2FgmhXWpRErOdoRBVM1wXaRegOAx%2BdAOoV2JTsanx4hzjpOQNLaNl29rEMM3JObjB8JkzdPJESYpgpNLBTpggH%2B1maAhml978AIDzbAOiCmXP%2BHecgtSRZ0dr6jb652uZ1swj7KyEcOfXdEPXf0k8oCaP%2FKOdrN&X-Amz-Signature=0d226adf9064cdb65377ed669b163b95963635eaee1bca00abf6d4d56f1428ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
