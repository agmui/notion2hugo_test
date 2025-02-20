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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZR7VDWA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsI9z9GMihxQZTyeIPeW6lhGiKQFXzWMp179N6b9Np%2BAiEA%2FON7%2F%2BN2ngnD%2FlfQ3uJz9gm2Wo3FYvTT0K4gtqKPjrgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJraHaAT8%2FEXWZ4o0SrcAwBNIX0AsraFKtFn4C787xzmQ5NIlZ9Bxu%2FGLM9pH250MWyXjhMag1AQRFTTcI8OlESe8vqEJM5pltrdthq9cgP7ItEg7V4qArdxvKfReBR7HEhxpefZ3WDH9RtechZI7bDfkkNzdvGtx5uzklCsKSaPpSB%2BT%2FwGN4Qi4Mnx2Sjq5oxtn8ufUqL%2F3s4HFZITnXjaUDWfZbjoWUCDU7VjygiJ3Nrk0QTDRxPFI3jWvQ%2B785dd3eUkW1E7Q1M6EqgjPb19dPSZsFjRT4zdc4F2f7YViQCx34V9JTz9KoPahf0cvSSIDBrQnK74Ke%2B5pVecdpR7MeWG4ZhI5GZElXc8cUdXV572Jd2oFcuehRYkJTmVH9eW8zZUUhqhjvzCnSwG3LovAJvNd4s4npq094R2gl1uL%2FNimv8E5O8AQEHB1kjBzHqoWui7pgov3t%2Bi8Fv5KFqTeBWgi8oVIrAdlHZtrcOxp5DmeUNlUrICMmtXSPwc2CdjSrxo11RoncNcGTPrqPE6z328bTw%2F8ypxVN7joRPI17JrXyq63quVIy5XuToAsF2K%2FzP%2BIvwtCorG1T0i4GBR%2FqLrrScl6OIjaN%2BQf1vH%2FwXSQTnOuX3%2FWKuTGkfnPygRF1z5nYTAjDw3MMPn2b0GOqUBmlM2pMUGNYkEzQtP1i27eBzFBYU1E5oEGfv0qu73NX%2FRw0TGHeRFeEIAn56exbxbHoNul0kfZQUDtO2SdXvNrzWtZ9bnXJcReqIHVfvC2rFJM6dX071ICxVZaEEoG%2Fa0Q%2BSrN%2B3LSoe4sb%2B0dyXe%2Bb0%2FlRxW96n9r2M2%2BxRO0UqJW%2FsGA62k08a%2BWDDebqi2DnbZfe5PGYV%2FAKpO7FA0M2FpUtUP&X-Amz-Signature=8a976db8028aaf40bdcc142e83bc24f38d3160d4b220b00fb013a1296fdbdbd0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZR7VDWA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsI9z9GMihxQZTyeIPeW6lhGiKQFXzWMp179N6b9Np%2BAiEA%2FON7%2F%2BN2ngnD%2FlfQ3uJz9gm2Wo3FYvTT0K4gtqKPjrgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJraHaAT8%2FEXWZ4o0SrcAwBNIX0AsraFKtFn4C787xzmQ5NIlZ9Bxu%2FGLM9pH250MWyXjhMag1AQRFTTcI8OlESe8vqEJM5pltrdthq9cgP7ItEg7V4qArdxvKfReBR7HEhxpefZ3WDH9RtechZI7bDfkkNzdvGtx5uzklCsKSaPpSB%2BT%2FwGN4Qi4Mnx2Sjq5oxtn8ufUqL%2F3s4HFZITnXjaUDWfZbjoWUCDU7VjygiJ3Nrk0QTDRxPFI3jWvQ%2B785dd3eUkW1E7Q1M6EqgjPb19dPSZsFjRT4zdc4F2f7YViQCx34V9JTz9KoPahf0cvSSIDBrQnK74Ke%2B5pVecdpR7MeWG4ZhI5GZElXc8cUdXV572Jd2oFcuehRYkJTmVH9eW8zZUUhqhjvzCnSwG3LovAJvNd4s4npq094R2gl1uL%2FNimv8E5O8AQEHB1kjBzHqoWui7pgov3t%2Bi8Fv5KFqTeBWgi8oVIrAdlHZtrcOxp5DmeUNlUrICMmtXSPwc2CdjSrxo11RoncNcGTPrqPE6z328bTw%2F8ypxVN7joRPI17JrXyq63quVIy5XuToAsF2K%2FzP%2BIvwtCorG1T0i4GBR%2FqLrrScl6OIjaN%2BQf1vH%2FwXSQTnOuX3%2FWKuTGkfnPygRF1z5nYTAjDw3MMPn2b0GOqUBmlM2pMUGNYkEzQtP1i27eBzFBYU1E5oEGfv0qu73NX%2FRw0TGHeRFeEIAn56exbxbHoNul0kfZQUDtO2SdXvNrzWtZ9bnXJcReqIHVfvC2rFJM6dX071ICxVZaEEoG%2Fa0Q%2BSrN%2B3LSoe4sb%2B0dyXe%2Bb0%2FlRxW96n9r2M2%2BxRO0UqJW%2FsGA62k08a%2BWDDebqi2DnbZfe5PGYV%2FAKpO7FA0M2FpUtUP&X-Amz-Signature=2fe667c65a4b59231f06421beba63011cf6c373c8469ab681bd9ee12d71b0fef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
