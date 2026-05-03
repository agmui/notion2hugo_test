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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJZUUG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxDnl000R1klShb6Q1FQA5jhVBCfqhH24H%2Bk07Hh71cAiBrXO4LiFFEyPn5VcPDTfhoNxamkPdoWWhNfET9IHnTYSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMXuxIetiPfG7QdACAKtwDYjhalwGC0syuZRIMGwongVjSc3cus2G2bnKLjb81snKw3oFZbwrlRYIC76QCWi%2F8lACgnL2BuDbQSVAnr9EnP0Ax7kXmCr7pHQS3AqdZVw9kyuoPddhk4ChIcDGsZqht%2B28NPpd4SsZWQ%2B9u496zzIH2laeHqlMEnHLbufJjaVzcMwUDT3W3%2F%2BT5AYhJ%2BqjLhGxYEghK9UHrR7hamQ%2FMz%2BP2MtQ4GMnM9ri6aaFaixjZ3ZSbT46qGE2qWJiO2Tj3JwPAMneW1Qkt7YyTy1yKJ4ggHlyQaBrmy4mE6gPQmH2knPjBO9ki%2B1ISjkvYZgigfg9K0%2F%2Fhn%2F5d777V0YYxLOvl0WfQTEzHbc7ldaOWfrAvFortQzyH3EHOjy3gr28OiGic8eZOj7Lxjq8kf6RWsjIGXb4WkCuQpjPgoUkRtP4bS64RM8vky%2FCUrsuhErUhtpktf%2F5naDch07SiKRVkz7C3khHXElNSCQv%2FfqRMOkTzmlBjZ2bY4DrSZ56jxyzjxr%2Fb2DcUvRFVn9Zwiv71YM9AawoevH3tdGFiRUlwXSHzbqrLJFFZy3ASaMVmT44jCi5RAthwqJcn8fqlWfYaUDCKVrWBtfI1h8LjJiV8zIzKKA0DSaurMGLPhicwvNfazwY6pgERgThLJ0XUJYXQA75luMNXU1HHO7zEqRdyKVIMGiodjVf5PBSQDW3iHkW%2Fz6Dw%2Bl7DMupuiHCatIL2Y6Nd8iuIEKCdsPaQ5wK29S%2BJsl%2B6%2BM2Z4A0eOTMtViezeW0M5PkjU563b6LIJdZ14PNHutJwBcxk7%2FKLOsUD0%2F69Jhf9uvR1qkwCBnG1Kh71tbCcIRNGN9cHpcmZo%2BcP8ck67ajemB32827h&X-Amz-Signature=aec9a87586226a796f76c810b97f0d6e116550509b18b46f828a0a79a2216a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VWJZUUG%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxDnl000R1klShb6Q1FQA5jhVBCfqhH24H%2Bk07Hh71cAiBrXO4LiFFEyPn5VcPDTfhoNxamkPdoWWhNfET9IHnTYSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMXuxIetiPfG7QdACAKtwDYjhalwGC0syuZRIMGwongVjSc3cus2G2bnKLjb81snKw3oFZbwrlRYIC76QCWi%2F8lACgnL2BuDbQSVAnr9EnP0Ax7kXmCr7pHQS3AqdZVw9kyuoPddhk4ChIcDGsZqht%2B28NPpd4SsZWQ%2B9u496zzIH2laeHqlMEnHLbufJjaVzcMwUDT3W3%2F%2BT5AYhJ%2BqjLhGxYEghK9UHrR7hamQ%2FMz%2BP2MtQ4GMnM9ri6aaFaixjZ3ZSbT46qGE2qWJiO2Tj3JwPAMneW1Qkt7YyTy1yKJ4ggHlyQaBrmy4mE6gPQmH2knPjBO9ki%2B1ISjkvYZgigfg9K0%2F%2Fhn%2F5d777V0YYxLOvl0WfQTEzHbc7ldaOWfrAvFortQzyH3EHOjy3gr28OiGic8eZOj7Lxjq8kf6RWsjIGXb4WkCuQpjPgoUkRtP4bS64RM8vky%2FCUrsuhErUhtpktf%2F5naDch07SiKRVkz7C3khHXElNSCQv%2FfqRMOkTzmlBjZ2bY4DrSZ56jxyzjxr%2Fb2DcUvRFVn9Zwiv71YM9AawoevH3tdGFiRUlwXSHzbqrLJFFZy3ASaMVmT44jCi5RAthwqJcn8fqlWfYaUDCKVrWBtfI1h8LjJiV8zIzKKA0DSaurMGLPhicwvNfazwY6pgERgThLJ0XUJYXQA75luMNXU1HHO7zEqRdyKVIMGiodjVf5PBSQDW3iHkW%2Fz6Dw%2Bl7DMupuiHCatIL2Y6Nd8iuIEKCdsPaQ5wK29S%2BJsl%2B6%2BM2Z4A0eOTMtViezeW0M5PkjU563b6LIJdZ14PNHutJwBcxk7%2FKLOsUD0%2F69Jhf9uvR1qkwCBnG1Kh71tbCcIRNGN9cHpcmZo%2BcP8ck67ajemB32827h&X-Amz-Signature=78e5e61e26938882ac3a1f7a1d5ee2b924a6b40e2a5f3cde18cce11ab6840b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
