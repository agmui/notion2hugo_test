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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OLMWLFT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRx2qXn2y27MwO0pWZpGqE75jJ%2B%2BiNS4n3ZFc3vOpQAIgKsHt2JRz3PHuktQYnxJHr9%2FibBgfuP%2F3u4lNT1wZ5bIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODPmQkGTicJcVCF%2BSrcA1i9ZzQ12NZ79U57h3Psi3WZNJb9LvzMxE6zF8MWao7185iZkhBC2nRD9bRLl46N%2BOhIX%2FAsRmAWFFtpd1XmKVCX2L5dvCNvnjNTyl1Tf6z0HMOvSVabnqDFor62B6lTHgBXMeU8edR6z7UKt1aj6ZHut5%2BlrgaIHJZV6uePFmhSXmu0vwRExAmPrGbAFFmSo0rYLyoTVeVs0vFih9ZmX1OdbjdGFHOJaCFYQemhkg9yEEzMTc9oXefRZMkyuGZ92s6Sv0QVDapYpyN2qYAusDdwf6HYfYuADUBnl8XLYAa5p9EZKW4OW0RU%2F5WtdxAprnwlFgt4icy%2Bt9jku3tuNCjQmrD5NiETo809gfFw%2B2V0MIjI1BKUlcZQldr4GdfjoeGRrE1scMplxsrPMmJN33gRH5aAeKhetl8MOBHsyEHpC8P7dM0y20cmiVTBtwimFwD0%2Fb7Yjtn1qMCI0maUPH9J5lljIPXbcCmO5S0wcwwGnf5qI5wyxSBVu0unQpArSeH44swZ3ZrXiSS8rQvAS0S7T9ZhgL%2F6SgyHlXopQ6KF7Ds9ychSFISwgHLisDnsMsRDcUlGt%2FznnF3zhC4LuE6Z7feagIqnjMmXatUynmmc2rr896Pa1JnfndayMJWOzr4GOqUB1adHUNjXPEcUhNd%2Bx2Q6zpKzHZM9A%2B7OvLV%2BumA2S4uELDAB%2FPST4UtFwiRZ4xNYeE0KJ6K6fxGiKN1T7hF5HxZbgpNf81bsnpFtLzuXN3f3QMc4E4kAtYhTHEf%2FG2t9amtXZ0u6oOEgVCBJ7Ae0gb3yib6FeRVH6JFfc6cSV%2BOajd4gCb5PdxncWCesqZMhF6tNjiqLJPLZSNg2TlrJom5eX9%2F4&X-Amz-Signature=83003d175366ba3cd559eafef4cb4986e7d57c74d48538c44368491b39e5070d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OLMWLFT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRx2qXn2y27MwO0pWZpGqE75jJ%2B%2BiNS4n3ZFc3vOpQAIgKsHt2JRz3PHuktQYnxJHr9%2FibBgfuP%2F3u4lNT1wZ5bIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODPmQkGTicJcVCF%2BSrcA1i9ZzQ12NZ79U57h3Psi3WZNJb9LvzMxE6zF8MWao7185iZkhBC2nRD9bRLl46N%2BOhIX%2FAsRmAWFFtpd1XmKVCX2L5dvCNvnjNTyl1Tf6z0HMOvSVabnqDFor62B6lTHgBXMeU8edR6z7UKt1aj6ZHut5%2BlrgaIHJZV6uePFmhSXmu0vwRExAmPrGbAFFmSo0rYLyoTVeVs0vFih9ZmX1OdbjdGFHOJaCFYQemhkg9yEEzMTc9oXefRZMkyuGZ92s6Sv0QVDapYpyN2qYAusDdwf6HYfYuADUBnl8XLYAa5p9EZKW4OW0RU%2F5WtdxAprnwlFgt4icy%2Bt9jku3tuNCjQmrD5NiETo809gfFw%2B2V0MIjI1BKUlcZQldr4GdfjoeGRrE1scMplxsrPMmJN33gRH5aAeKhetl8MOBHsyEHpC8P7dM0y20cmiVTBtwimFwD0%2Fb7Yjtn1qMCI0maUPH9J5lljIPXbcCmO5S0wcwwGnf5qI5wyxSBVu0unQpArSeH44swZ3ZrXiSS8rQvAS0S7T9ZhgL%2F6SgyHlXopQ6KF7Ds9ychSFISwgHLisDnsMsRDcUlGt%2FznnF3zhC4LuE6Z7feagIqnjMmXatUynmmc2rr896Pa1JnfndayMJWOzr4GOqUB1adHUNjXPEcUhNd%2Bx2Q6zpKzHZM9A%2B7OvLV%2BumA2S4uELDAB%2FPST4UtFwiRZ4xNYeE0KJ6K6fxGiKN1T7hF5HxZbgpNf81bsnpFtLzuXN3f3QMc4E4kAtYhTHEf%2FG2t9amtXZ0u6oOEgVCBJ7Ae0gb3yib6FeRVH6JFfc6cSV%2BOajd4gCb5PdxncWCesqZMhF6tNjiqLJPLZSNg2TlrJom5eX9%2F4&X-Amz-Signature=0db325338acc443785160af7f7b77b825925ae576c1b80d7f750547fec425a55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
