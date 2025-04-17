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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRINMENC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAclFqq4Wc6bOQrFnoeAfEYvIJSqvWx%2BozkVEdilfbWAiAXh8q1nLT2usRYj2Scy%2FaYRQWHxWxjZXCY%2BrlCdlCWmCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmIwgcjYHvnuzu7M%2FKtwDnrbiFx%2Ff4SDCiXaSBbmZiPAFoGwtl5c5%2F5vV1GL7vaQKkbZxVg%2F10AbJMAvSTKapkHAJMWO1RC9VHRUjtjyM6fcwr%2FQHPwyY6mc0JZ54FhjX9iWgL%2BGdO0nCnrSLazNAbbYmwYT62KDjaVKbFPkxajSBUiJBBOw2n9v%2FqEKViHidzifQMEtTD9Z361EkYFX83TOpNQZqzkKdmc7WFMamyernmkrDoj%2B4%2Fb%2FaoyjhrNdtHIuhHWuxYQ6S3B3BXm9mbggZsAUEbFpnFxb%2Bbh5a2Ln5aR%2Bti7f5b%2BbDMTYYQ4Hk9vpyimIuyUzYDuB4MnXnq176WTLz78gxuwUh%2BzUkkJ9FOkFHOHQJzWjDHgyaiw%2Fzv07SnIuXgFc1nzXN1M9lz1wb1EUfJdgH5pSO3suTSbPFD%2F5J2QT091fP5nJtyv8OqTysHfVpKe83TqTahmm5H3sBQZLnFY1REIMj8fjei3KLNBSb9GaHXgrCnFz5tba2wpeNMoKyshg54%2Baya7clml6X%2BmTzm3cwkebfiwWLUy70pWM9phYhTxMjwufi0KhP8d5axwbMcKSVHj78su1lSD2Y6LrGOuOvA7PRpini8yCPUBaObdx7DP1XAGdfRWpNfddqvoW%2BT%2FIaiO8w0JSDwAY6pgHeSGnqz9sQrqUw1oE%2BcVMPWVEFYzCH7RT4vO%2BO4fTWjewC1aIJO2Lm%2BQPOhwppPkD4LHOwfbJ0Pu0lFM%2FkXaOx3u4Lcayr30mDsfbGeIQA0VorSyF%2BQjx4vyE7p5WGwEDu0aUyB7Fjc33pB3wf2FGZQLt%2BEQIXRYtKKlV%2BsaJv4akr2YFCQHQ8s7fgX5N0AEaREaM%2Bd%2FyMbKfxemadHQtcqa67ms9s&X-Amz-Signature=456a8ff27530dec8d429e99d2124c807b03ddd9574ba8b6ccf55f5e27a6d8de3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRINMENC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAclFqq4Wc6bOQrFnoeAfEYvIJSqvWx%2BozkVEdilfbWAiAXh8q1nLT2usRYj2Scy%2FaYRQWHxWxjZXCY%2BrlCdlCWmCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmIwgcjYHvnuzu7M%2FKtwDnrbiFx%2Ff4SDCiXaSBbmZiPAFoGwtl5c5%2F5vV1GL7vaQKkbZxVg%2F10AbJMAvSTKapkHAJMWO1RC9VHRUjtjyM6fcwr%2FQHPwyY6mc0JZ54FhjX9iWgL%2BGdO0nCnrSLazNAbbYmwYT62KDjaVKbFPkxajSBUiJBBOw2n9v%2FqEKViHidzifQMEtTD9Z361EkYFX83TOpNQZqzkKdmc7WFMamyernmkrDoj%2B4%2Fb%2FaoyjhrNdtHIuhHWuxYQ6S3B3BXm9mbggZsAUEbFpnFxb%2Bbh5a2Ln5aR%2Bti7f5b%2BbDMTYYQ4Hk9vpyimIuyUzYDuB4MnXnq176WTLz78gxuwUh%2BzUkkJ9FOkFHOHQJzWjDHgyaiw%2Fzv07SnIuXgFc1nzXN1M9lz1wb1EUfJdgH5pSO3suTSbPFD%2F5J2QT091fP5nJtyv8OqTysHfVpKe83TqTahmm5H3sBQZLnFY1REIMj8fjei3KLNBSb9GaHXgrCnFz5tba2wpeNMoKyshg54%2Baya7clml6X%2BmTzm3cwkebfiwWLUy70pWM9phYhTxMjwufi0KhP8d5axwbMcKSVHj78su1lSD2Y6LrGOuOvA7PRpini8yCPUBaObdx7DP1XAGdfRWpNfddqvoW%2BT%2FIaiO8w0JSDwAY6pgHeSGnqz9sQrqUw1oE%2BcVMPWVEFYzCH7RT4vO%2BO4fTWjewC1aIJO2Lm%2BQPOhwppPkD4LHOwfbJ0Pu0lFM%2FkXaOx3u4Lcayr30mDsfbGeIQA0VorSyF%2BQjx4vyE7p5WGwEDu0aUyB7Fjc33pB3wf2FGZQLt%2BEQIXRYtKKlV%2BsaJv4akr2YFCQHQ8s7fgX5N0AEaREaM%2Bd%2FyMbKfxemadHQtcqa67ms9s&X-Amz-Signature=47baba66adff9af8eda1b850a97af08e706999a7ae9ae29891813c1471568aab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
