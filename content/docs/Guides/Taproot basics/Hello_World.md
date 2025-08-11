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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBIS37E%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD86oREDz%2Bbby61D7j58Hmb%2F83bBGBe2GZv337h6YsBuQIhALx4YhhXzXMn4L2CAtyLX%2BdNuIpOmRoyc53DAVd5ocMnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX8DiN6uBv9xjLFbMq3AObLGbGxjEW55wg9YMmJ6DRaz8bUCNu8ervzRYwH55u8uzA2Zg1TXtm5iBF2wQ1SFjJ3lxMrG6nPBOa%2F4T7hgIS5vkabQcvwc%2B4uNc73XUNaX03NsPzamdT%2BMZnS%2BHYnD0CnKpPUHp4RVbUxKTInxiYx%2FNpluWgf7eHX8PCffTxvu%2Fx02qpIWBI9g%2BzjBzjkLYLOkr7w%2FEGX1%2BYfS90gP1CukXgJ9FNAwf64WlFS5hnNS%2FlmMowprhKrbCaWXPmIAupt%2Fr4MpfnQGnOOkR1j3e4A4BueAAGC%2F%2BUCyyzkiCt4Je3vJ5YX%2FcAGMJ0bPPQpzUqfKqthd5mMNPo24gP9ioG8BMCAFqguhazOKAdiwDVVI%2F2rMMFLzZtdCnlzhTaOqD7A0DLnE2L04%2B94NyehWlJaeJbWh86FKIr2NM0gfAc2YwKwhTDWbTBoIENvCKtJyvbNI6yrHp2IWpejJLXloD1lDqMrxPDy3fYl%2Bo8A4HPwvhsFD%2BMkaNdvrwpR9TAynDKOrxnM7cIKv12e7WC29Xcnfwv1ilCyu0Q2XMf7kZE7Zf0X%2FImX%2FcdH2ATxz7k2TbUBf8qwhqcRd6pfTjIHydszqM%2BKQiTuFnX6cJEQNb2iFfVHI1v8uucxwoJFzDeneXEBjqkAXKMSEISJmOSBX8wE2tBUWY0GNsJCvim0lrhhKibTxpAo2Vvl%2FpDmUuSxZX7V9hev9pOdzVX3E0sUXkgbsU7S7wPp%2BrCCy%2Fh%2FIkmxTKAWWgh8c8%2BNYSYsUDSKY6xUvSrKc4pRpVBkIFi79ov%2FWW9ElG0uACxbz7HCQjcVHyFhjzOk%2BHl%2BLu5bnVnPR4v1iuJSATv%2BkbFgIF%2F3asra1GJMQA9OcET&X-Amz-Signature=3d85d6f79d32fcf3662c6fc40efc722e993b2e280cb00a4e8011b78edf1ed186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIBIS37E%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD86oREDz%2Bbby61D7j58Hmb%2F83bBGBe2GZv337h6YsBuQIhALx4YhhXzXMn4L2CAtyLX%2BdNuIpOmRoyc53DAVd5ocMnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX8DiN6uBv9xjLFbMq3AObLGbGxjEW55wg9YMmJ6DRaz8bUCNu8ervzRYwH55u8uzA2Zg1TXtm5iBF2wQ1SFjJ3lxMrG6nPBOa%2F4T7hgIS5vkabQcvwc%2B4uNc73XUNaX03NsPzamdT%2BMZnS%2BHYnD0CnKpPUHp4RVbUxKTInxiYx%2FNpluWgf7eHX8PCffTxvu%2Fx02qpIWBI9g%2BzjBzjkLYLOkr7w%2FEGX1%2BYfS90gP1CukXgJ9FNAwf64WlFS5hnNS%2FlmMowprhKrbCaWXPmIAupt%2Fr4MpfnQGnOOkR1j3e4A4BueAAGC%2F%2BUCyyzkiCt4Je3vJ5YX%2FcAGMJ0bPPQpzUqfKqthd5mMNPo24gP9ioG8BMCAFqguhazOKAdiwDVVI%2F2rMMFLzZtdCnlzhTaOqD7A0DLnE2L04%2B94NyehWlJaeJbWh86FKIr2NM0gfAc2YwKwhTDWbTBoIENvCKtJyvbNI6yrHp2IWpejJLXloD1lDqMrxPDy3fYl%2Bo8A4HPwvhsFD%2BMkaNdvrwpR9TAynDKOrxnM7cIKv12e7WC29Xcnfwv1ilCyu0Q2XMf7kZE7Zf0X%2FImX%2FcdH2ATxz7k2TbUBf8qwhqcRd6pfTjIHydszqM%2BKQiTuFnX6cJEQNb2iFfVHI1v8uucxwoJFzDeneXEBjqkAXKMSEISJmOSBX8wE2tBUWY0GNsJCvim0lrhhKibTxpAo2Vvl%2FpDmUuSxZX7V9hev9pOdzVX3E0sUXkgbsU7S7wPp%2BrCCy%2Fh%2FIkmxTKAWWgh8c8%2BNYSYsUDSKY6xUvSrKc4pRpVBkIFi79ov%2FWW9ElG0uACxbz7HCQjcVHyFhjzOk%2BHl%2BLu5bnVnPR4v1iuJSATv%2BkbFgIF%2F3asra1GJMQA9OcET&X-Amz-Signature=53f1ce781d122ed3541f829ff8f39dd1b30eedf655793f4c5e3d2538f52c1335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
