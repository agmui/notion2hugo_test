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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KMHHYHB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDBQOT9rcFLn5MAisw8caQ5bSV979yfXSGnSr7ioBACOQIgM1u8dSfwfmHT7PLuVAF%2F8FCglSZQgVSBZB3c7fTRAF0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGmfi9Yj6ROxGchzUyrcA%2BK6vS7c6Q%2FTKsKO7z0dOVrSaEBN%2B3KTCLfU%2FQxss%2B0ENQ7AeCK7%2FiOiuvNPkoJEs739MInbwn599pTz5jjSPOTNynE%2FEqRdIEy34qKKFkeBSmhwTm%2F6IDwGyIfi4m3Yz9QwZrl49LNJVCQcPtMSECCLxXiUMS01pUfeV8lVaAE1%2BLtjzFVZzfnXP1ockDz53ZefD9rLiltjcDQfCF3evFLNPyczQmM2fzlsQuHWSvfw9TjlteA17perMfafreR9n4LO3t9%2Bd%2Fsv2oK%2Fvlbu0v467P3J7rM3xY3GIM5BavWitC7n9fwj%2FQhfpnVPtnCWY4S9eoJ2OOsCfhMdSxBsqPFxbZx%2FuQXpdAooETtqG1UVd%2B2Ng75O%2Fj6fxMURRhDgLcmmxvmAEC5%2FEMp2j2cluTKTWt%2FuJg%2FvouCzWsXHXYYJz%2BFNYAYbuVgtNG0VCfxZZ%2FW5i46qmZxUdm%2FuSTCmesJ7rsbLqCTI3KixY2y%2BcdoFZ7STOog5lXfzQlkBuNGLuE92UfT2MDPOYpF9TzzYZm2BsIssk1iNtS%2BNQc2clT66b24C5q6L%2FxpKEpbvkvhgIr2ByXJB%2FE9PWuBXiN33hEtAKjXHfRZNl23yw4E3Z%2F5wHI9JMmUQhwuNgPl%2FMMS68cIGOqUBB4ghaPKQLYASfl6BPVaOR6j%2BqAGhXTtIMQrJxSdaJqUjTsD1ZqBItT5qp2Pgsyqt2GZyh3le7P0xTVZzyt7FRdzi9IS4uc%2FIqsDsGXF8ayllgBepzwrh6U2X6UF9NnmFLlrEAuluzhQrCQGtx8NiWbes3mGghryA%2FfZ3z6LbED%2FwnESRhVc4owaRCB16yAF9krnoE%2Fbi2VVwaP8Jw%2FBjodL3araH&X-Amz-Signature=36b471389515e0e49ac5ff54e08f867ba409baba4faf7884788c84b09b41e62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KMHHYHB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDBQOT9rcFLn5MAisw8caQ5bSV979yfXSGnSr7ioBACOQIgM1u8dSfwfmHT7PLuVAF%2F8FCglSZQgVSBZB3c7fTRAF0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGmfi9Yj6ROxGchzUyrcA%2BK6vS7c6Q%2FTKsKO7z0dOVrSaEBN%2B3KTCLfU%2FQxss%2B0ENQ7AeCK7%2FiOiuvNPkoJEs739MInbwn599pTz5jjSPOTNynE%2FEqRdIEy34qKKFkeBSmhwTm%2F6IDwGyIfi4m3Yz9QwZrl49LNJVCQcPtMSECCLxXiUMS01pUfeV8lVaAE1%2BLtjzFVZzfnXP1ockDz53ZefD9rLiltjcDQfCF3evFLNPyczQmM2fzlsQuHWSvfw9TjlteA17perMfafreR9n4LO3t9%2Bd%2Fsv2oK%2Fvlbu0v467P3J7rM3xY3GIM5BavWitC7n9fwj%2FQhfpnVPtnCWY4S9eoJ2OOsCfhMdSxBsqPFxbZx%2FuQXpdAooETtqG1UVd%2B2Ng75O%2Fj6fxMURRhDgLcmmxvmAEC5%2FEMp2j2cluTKTWt%2FuJg%2FvouCzWsXHXYYJz%2BFNYAYbuVgtNG0VCfxZZ%2FW5i46qmZxUdm%2FuSTCmesJ7rsbLqCTI3KixY2y%2BcdoFZ7STOog5lXfzQlkBuNGLuE92UfT2MDPOYpF9TzzYZm2BsIssk1iNtS%2BNQc2clT66b24C5q6L%2FxpKEpbvkvhgIr2ByXJB%2FE9PWuBXiN33hEtAKjXHfRZNl23yw4E3Z%2F5wHI9JMmUQhwuNgPl%2FMMS68cIGOqUBB4ghaPKQLYASfl6BPVaOR6j%2BqAGhXTtIMQrJxSdaJqUjTsD1ZqBItT5qp2Pgsyqt2GZyh3le7P0xTVZzyt7FRdzi9IS4uc%2FIqsDsGXF8ayllgBepzwrh6U2X6UF9NnmFLlrEAuluzhQrCQGtx8NiWbes3mGghryA%2FfZ3z6LbED%2FwnESRhVc4owaRCB16yAF9krnoE%2Fbi2VVwaP8Jw%2FBjodL3araH&X-Amz-Signature=89d26fbed455d5184cc2d45d1e0bf72339dc4d5884c75947f5d884f2964277ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
