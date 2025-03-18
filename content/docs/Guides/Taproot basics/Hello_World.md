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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM5VTAY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCVSELurxWKG0JGpgkCn192pdf7gZVnmrl60zMerq1EeQIgSupOwKPn%2BdXSbx2MBNEh9gP0nlomZ9goeApKmulbpJsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLit5MXSELmZRzZDfircA2Lq%2Ft2t2aPahOdmD4ecpMKGTqgxf8eHbt2GB95OwvVMoQ%2FNXqR3tUTgm3wpmFyewgP4GG0Mwk74ow6gwaS9yvdXeVPpWa2AazX3lN2p4kUmtCe5qVHheM4Hsrc3Dmo4Q59IAhvBpef6MaETP69tLnGDN4jsMpZ8%2Fw3A1fBkomQFfmhMxSfI0NXRr%2Fi%2B%2FHv%2BhjX%2BgkZOwYg%2B2YKA5NZW3N7B84ns2aaIZgz3ohIOIXrcFonHsHVC45XE0zkfMo40UMiXaUYHPlikuHkw3K%2BRRhl9a%2FL4ArVNkVUIzNG5n%2Fyv9mj%2BcWrUn0sXEMoHocr57IwUk7LfjbTsRhFqSIP%2B79XDodAq19xA4OLGWaRJzMu6ImCJ4CkfMtmpLegSQV4Wi%2BOjIJ0VqOY%2Bj%2Bz4neL3JGFWOq09obzHXTC70oBGgQrB6RBywtLhmalyEGFct9ak9sIT7d%2B6Mro8v9eC6IqchwpieyIS%2FGDh86SUcBZtb4zuUsS%2Fpezgqi3p0WrC%2BZXejU6j7rXHxAxlnilK6RlAGZ7123WBnZ6cMfDQ2%2F10TNRR4GfdH99eBPh%2FOHrYBI%2BpO2GUC%2Fn5o30FOKOEh5%2By9Kclu3TCS2n4EBvPgGFve3lSrXRUx%2FI36finuejNMJ6W5b4GOqUB5eUVABMWet7UI9p1MXXay7EMAxXxqnTPg%2Biyx%2Fmby5EiqWll1Lv05%2FP0bGdxaExRSO1Kte7Px5%2BlktZI2v%2FUkEmxPH4a5cg7hIIB5WKD40o21acbiWtnR%2FMjC2hkP8sOyu9rbKF%2BQgZTgbmgRV98OIU3Uwiohdce0n%2Bvca%2FN6HTQKty2LI3PbqMf0Lr4REsIXKbJE91By4pTPlp9Y1xPIoJpErhP&X-Amz-Signature=13eb115cdefe9393eb0522b7b630ba96ef8814f1e6033aa7c25178493d82a035&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM5VTAY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCVSELurxWKG0JGpgkCn192pdf7gZVnmrl60zMerq1EeQIgSupOwKPn%2BdXSbx2MBNEh9gP0nlomZ9goeApKmulbpJsq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLit5MXSELmZRzZDfircA2Lq%2Ft2t2aPahOdmD4ecpMKGTqgxf8eHbt2GB95OwvVMoQ%2FNXqR3tUTgm3wpmFyewgP4GG0Mwk74ow6gwaS9yvdXeVPpWa2AazX3lN2p4kUmtCe5qVHheM4Hsrc3Dmo4Q59IAhvBpef6MaETP69tLnGDN4jsMpZ8%2Fw3A1fBkomQFfmhMxSfI0NXRr%2Fi%2B%2FHv%2BhjX%2BgkZOwYg%2B2YKA5NZW3N7B84ns2aaIZgz3ohIOIXrcFonHsHVC45XE0zkfMo40UMiXaUYHPlikuHkw3K%2BRRhl9a%2FL4ArVNkVUIzNG5n%2Fyv9mj%2BcWrUn0sXEMoHocr57IwUk7LfjbTsRhFqSIP%2B79XDodAq19xA4OLGWaRJzMu6ImCJ4CkfMtmpLegSQV4Wi%2BOjIJ0VqOY%2Bj%2Bz4neL3JGFWOq09obzHXTC70oBGgQrB6RBywtLhmalyEGFct9ak9sIT7d%2B6Mro8v9eC6IqchwpieyIS%2FGDh86SUcBZtb4zuUsS%2Fpezgqi3p0WrC%2BZXejU6j7rXHxAxlnilK6RlAGZ7123WBnZ6cMfDQ2%2F10TNRR4GfdH99eBPh%2FOHrYBI%2BpO2GUC%2Fn5o30FOKOEh5%2By9Kclu3TCS2n4EBvPgGFve3lSrXRUx%2FI36finuejNMJ6W5b4GOqUB5eUVABMWet7UI9p1MXXay7EMAxXxqnTPg%2Biyx%2Fmby5EiqWll1Lv05%2FP0bGdxaExRSO1Kte7Px5%2BlktZI2v%2FUkEmxPH4a5cg7hIIB5WKD40o21acbiWtnR%2FMjC2hkP8sOyu9rbKF%2BQgZTgbmgRV98OIU3Uwiohdce0n%2Bvca%2FN6HTQKty2LI3PbqMf0Lr4REsIXKbJE91By4pTPlp9Y1xPIoJpErhP&X-Amz-Signature=e99c80ad09711b5e44f31ecd06270c6955ccf913790f2efb2370e20bc82b4370&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
