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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGQHELB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBNhm3S%2FOEVB%2FoOyJl3ael%2BR6ALscs9QOPmYlvaPJGPjAiEAplSgw%2FVKCIDDdaaQiK0AyXuZRLTyMxdUWybpOUQgKIwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnimV0W%2FUk%2BiRXl%2FCrcA0umQJReRUmtWbYJw2Y7Ik9pFIO3KBcmCUT7dxt9julgFYw1mi4Bs3yyDZKLayxfeD%2FW7W0IyJv1AsuzaruIouDiE%2B5%2BNvezppeBqSOiKWEDYGyi1YTjQcOerAiL2sqoP6utavamfHzzc3KXgtvut2G3rr95Q%2BsUH5RElHcyBQ2oAKlTShuvn8XtUvmcgaDp8ylhsAzalEgzHFl1KEjKS%2F21bSBEa5qiEs%2F80jle%2BqwXVeNfjla%2BJMRmIpwMJX%2BVrz7Wg01gaLjQnpEP7IfKg7RCyml2hPcTKHVQg1NkS0Y%2F3sZZuM%2Bu9GTRkuFWOtvJ6g9Qam5gBxU1GEjNKvs7ryaPNZ80VvcoJLqIsiRlEkTnROxQqQSRn28zgTsntkGowD2iyvaRIDIgKYi4Z3HMs9B1M%2F54e1%2FY1FNkc2bCtDwvWgQ468eF7Y6HtPdmi47ERVRuZJC4aAT%2FrOelVC78An6mZSn9ertAzPGr%2BBT0uG09FBhHUVqZSImwNyhD9dE%2BR2oZhN2TARuWPzY2BjCRaQ4%2B5U8UtG%2BN2k6nstNeO0XRVyYNDlsArBK3rr%2B%2F6SKaxHR28cLsFrBD1qOVRDTNUVB%2FtfEGLNDwdp0sDsFQCmeAnzFGKej%2B%2B3Lu6nBPMLrMkMAGOqUBK6QWMcZ1S0qsaX8MoufiFQ3HWMkHbH%2B9TPHPFBVliHATxHps4HhoBXOBaC3vQgzaBSykNI43BkdPu04y9EjGcNmtYRhXM1H95nAgdMo7faeXPLR11UYsTuhLR3YNwSjPa4iMcm1XkXdaTFjnhF3BPELRa5R%2BfgbptBbp%2FirS6Ucq7jDgsb6mXGGoeEoN7vPYYeWPvCmYRnpu%2FGy3TWGB1OKtSVdU&X-Amz-Signature=3db5bf16a43c2b0bfff18c18421e1e1faf87d7bdf3a294a53f9ea24a8ed49cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGQHELB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBNhm3S%2FOEVB%2FoOyJl3ael%2BR6ALscs9QOPmYlvaPJGPjAiEAplSgw%2FVKCIDDdaaQiK0AyXuZRLTyMxdUWybpOUQgKIwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnimV0W%2FUk%2BiRXl%2FCrcA0umQJReRUmtWbYJw2Y7Ik9pFIO3KBcmCUT7dxt9julgFYw1mi4Bs3yyDZKLayxfeD%2FW7W0IyJv1AsuzaruIouDiE%2B5%2BNvezppeBqSOiKWEDYGyi1YTjQcOerAiL2sqoP6utavamfHzzc3KXgtvut2G3rr95Q%2BsUH5RElHcyBQ2oAKlTShuvn8XtUvmcgaDp8ylhsAzalEgzHFl1KEjKS%2F21bSBEa5qiEs%2F80jle%2BqwXVeNfjla%2BJMRmIpwMJX%2BVrz7Wg01gaLjQnpEP7IfKg7RCyml2hPcTKHVQg1NkS0Y%2F3sZZuM%2Bu9GTRkuFWOtvJ6g9Qam5gBxU1GEjNKvs7ryaPNZ80VvcoJLqIsiRlEkTnROxQqQSRn28zgTsntkGowD2iyvaRIDIgKYi4Z3HMs9B1M%2F54e1%2FY1FNkc2bCtDwvWgQ468eF7Y6HtPdmi47ERVRuZJC4aAT%2FrOelVC78An6mZSn9ertAzPGr%2BBT0uG09FBhHUVqZSImwNyhD9dE%2BR2oZhN2TARuWPzY2BjCRaQ4%2B5U8UtG%2BN2k6nstNeO0XRVyYNDlsArBK3rr%2B%2F6SKaxHR28cLsFrBD1qOVRDTNUVB%2FtfEGLNDwdp0sDsFQCmeAnzFGKej%2B%2B3Lu6nBPMLrMkMAGOqUBK6QWMcZ1S0qsaX8MoufiFQ3HWMkHbH%2B9TPHPFBVliHATxHps4HhoBXOBaC3vQgzaBSykNI43BkdPu04y9EjGcNmtYRhXM1H95nAgdMo7faeXPLR11UYsTuhLR3YNwSjPa4iMcm1XkXdaTFjnhF3BPELRa5R%2BfgbptBbp%2FirS6Ucq7jDgsb6mXGGoeEoN7vPYYeWPvCmYRnpu%2FGy3TWGB1OKtSVdU&X-Amz-Signature=ed2e2da6a594fce29683063233e266d2bb7dc140fe32a112c4b0bae87f61ec9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
