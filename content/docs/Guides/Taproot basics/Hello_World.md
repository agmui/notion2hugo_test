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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMDFYWZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDRORKnlWX5uArpDeoYQjWZJs4MDiJkEoXKuyFmSlQ2hQIhAJxUcrwDg36ks1LqQ8NxxKCYLf6soe28Gdxjmt5ScAbqKv8DCBAQABoMNjM3NDIzMTgzODA1IgyuVg47zaYCHZOK9nEq3AOGBxoiHelDC9991l76G%2B3YVHiGIcYGC%2Fyvv7YcuN7Cnm6ULpMMfoKYYBZJRaa24A%2Bm5yq8L0K8LI5Uw27doVaMm6UaGgfc6Gvr%2BGgvYO9Tg0rUiwgBsMNaF8T9nHSfvQv057JpkzJ76eXjVbn4RUs1WcSIvTZ3f9uQ%2FUgwVCMJxWTQXI%2FzaClk3oO4TKLAII1UyT38EFZfiE4nC6rb66PKtshu2I1Ilmm%2FiUGWimE8nrpXANPh7prDqh9vtYUbFqOjwHhuHbCE%2B5owtZfzeuk67v1fcy%2BzaRmsgPSBuGlYpsNka8onU%2BIjle3TOAjTCVw775kzfQS0tgiQM3dnNUUEsNpbP1P2GjcoqkSgg9dD1k81RqlTWxzL9jbPGYEpD0tpKpP%2BnHFfgbHf1fJso%2BGbgvb36OxZtI3Xi4TnHPbyCfTjJAHIp0i4vOT8Mo1ZxfrXUt9DTidrHuHFAE%2ByHPaUKiCsTN7oHYf5NDQShKwfxh%2BJxjs1ZTMS%2FxhzULCauOwk71BidNCksAfvMsoYATLoSrANX2q31eNglLyTb9CKUnYqBbESdVI9I%2B%2B97qCzeQo6o%2BPvYAk6XUFXFqB80lKXhR3RLtXG9K5UqieU24OTFVCEaGpflFHlLZGXiTDr38XBBjqkAaiWnOml6wffOC8QfdCWpqOKEZieAGcNjy2r2W0tOdqm%2FPYoc6LIbM95xLUe%2FcMkpHND6sCWmHfY9MK2aB08ydidHVq%2BZ3tRLHUOFaqmPI%2BxXS7Vv9VuimOm54otGUNrTZGrBxkXab8SiAY5xBNOSCKYqH533JuMwB65bHHz5SktGqc0%2BCW0I73AgcKf1k3vatWm%2FQMgi0gb2h1dvsRpgt%2FMyJ2b&X-Amz-Signature=e1851b6e8868c27de8784f3aece75371857010c352f5c7d69915b6affce50f82&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMDFYWZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDRORKnlWX5uArpDeoYQjWZJs4MDiJkEoXKuyFmSlQ2hQIhAJxUcrwDg36ks1LqQ8NxxKCYLf6soe28Gdxjmt5ScAbqKv8DCBAQABoMNjM3NDIzMTgzODA1IgyuVg47zaYCHZOK9nEq3AOGBxoiHelDC9991l76G%2B3YVHiGIcYGC%2Fyvv7YcuN7Cnm6ULpMMfoKYYBZJRaa24A%2Bm5yq8L0K8LI5Uw27doVaMm6UaGgfc6Gvr%2BGgvYO9Tg0rUiwgBsMNaF8T9nHSfvQv057JpkzJ76eXjVbn4RUs1WcSIvTZ3f9uQ%2FUgwVCMJxWTQXI%2FzaClk3oO4TKLAII1UyT38EFZfiE4nC6rb66PKtshu2I1Ilmm%2FiUGWimE8nrpXANPh7prDqh9vtYUbFqOjwHhuHbCE%2B5owtZfzeuk67v1fcy%2BzaRmsgPSBuGlYpsNka8onU%2BIjle3TOAjTCVw775kzfQS0tgiQM3dnNUUEsNpbP1P2GjcoqkSgg9dD1k81RqlTWxzL9jbPGYEpD0tpKpP%2BnHFfgbHf1fJso%2BGbgvb36OxZtI3Xi4TnHPbyCfTjJAHIp0i4vOT8Mo1ZxfrXUt9DTidrHuHFAE%2ByHPaUKiCsTN7oHYf5NDQShKwfxh%2BJxjs1ZTMS%2FxhzULCauOwk71BidNCksAfvMsoYATLoSrANX2q31eNglLyTb9CKUnYqBbESdVI9I%2B%2B97qCzeQo6o%2BPvYAk6XUFXFqB80lKXhR3RLtXG9K5UqieU24OTFVCEaGpflFHlLZGXiTDr38XBBjqkAaiWnOml6wffOC8QfdCWpqOKEZieAGcNjy2r2W0tOdqm%2FPYoc6LIbM95xLUe%2FcMkpHND6sCWmHfY9MK2aB08ydidHVq%2BZ3tRLHUOFaqmPI%2BxXS7Vv9VuimOm54otGUNrTZGrBxkXab8SiAY5xBNOSCKYqH533JuMwB65bHHz5SktGqc0%2BCW0I73AgcKf1k3vatWm%2FQMgi0gb2h1dvsRpgt%2FMyJ2b&X-Amz-Signature=67311d193976ce59b05a63d6c9b5a3593b2299b5f25024b44e6f6aec442453f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
