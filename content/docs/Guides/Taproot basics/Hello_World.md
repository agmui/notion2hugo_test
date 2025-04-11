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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWC62ZTM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDsxlK6bjnsdm5ciY25fm%2Bkgsx%2FwXe20sAN2wUMh4Jq7AIga0Yol4nNuoeWFsLqeo2A08vvWMr7UawkeKhgAAYAxxsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfoNcbeGXua3CbhyrcA62rxeYmu8C0O4bQI7Vhm8gA4vSVDrZXzZ4zBm0klfv%2Bj4UOFJXzBFXBCr3pPYLd1UGdhx8tQR6NrnM0O0pUYbTEQO0PqpFmQyoYMTNrdoXPRIT%2B4hCDsbJJoT9S1XmIKhD32iZY0XfEqHSh4QXiLLeTgLqOYOhdmhN2I%2BfGAPsW%2Fg4sQk3A5HF54%2Bt31Kk7xD2B3nyMYRegW%2FTMeMRE%2FVcJdtrab5bc9r%2Bl2Aq9%2B1Y8VPO%2BVoxvhlLQsZ2WsIKCMT4tlbe74%2BBFRPXyhd06Wu9GHNvalKNA68CaUs9yzOfwt5E7CYy5XE5bxwbT5zEWGrq1PyMKpHL6LJDhZZ8oExBm3rpEdg5qbung6zMH7c%2FMKCFq03WkUnMka2VC%2FXScy07TrN6gwxAcOHBRXe%2FnLJ%2FxLdLUlo6DaKFjMdC3JzHy1Qi6LSBfVT941v2TxXxGUq5pPJaznQfUv4soTNMjO7XILny5qgxPcIJOCNINpUhpHKN3rBOifrIZfLOnXN6VdSl7iS7qyxOI5wD6DXN5pic6G68lZes6Qr6F9OOjeeCFWSD13svi0YFOZCUjBfGeYKqJxA%2FsJSMLlASzTxAJtAgBDKWzWfP8ha5QKPIs7Gry0O92jfL%2Bjq44vZvnMKa15L8GOqUBqtTYdQTWObw0u4KbsF%2Fk6aIrOnomb5fPsXOxQlVDbfdJywj1l6sXkSnT%2B3Bb66w4%2BWUHq1OHHhGHkDDjxX3tAf4WoQ38vPmo4myYjeOOy8eikq4JOQGdQv7%2BNXwB0iCodmAnhQBeTH0XY5ej2lqLt1lSBqO8A71ctZBLkanWf7otfBbFt1wwLggUnxEWjZNQtbsmV8jTDET9hKPvyFAKnTaNleGG&X-Amz-Signature=4f49a2839992de0fd4a5ddeb656d99908a03305d0cbd2f705e12a5a7839c9e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWC62ZTM%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDsxlK6bjnsdm5ciY25fm%2Bkgsx%2FwXe20sAN2wUMh4Jq7AIga0Yol4nNuoeWFsLqeo2A08vvWMr7UawkeKhgAAYAxxsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBfoNcbeGXua3CbhyrcA62rxeYmu8C0O4bQI7Vhm8gA4vSVDrZXzZ4zBm0klfv%2Bj4UOFJXzBFXBCr3pPYLd1UGdhx8tQR6NrnM0O0pUYbTEQO0PqpFmQyoYMTNrdoXPRIT%2B4hCDsbJJoT9S1XmIKhD32iZY0XfEqHSh4QXiLLeTgLqOYOhdmhN2I%2BfGAPsW%2Fg4sQk3A5HF54%2Bt31Kk7xD2B3nyMYRegW%2FTMeMRE%2FVcJdtrab5bc9r%2Bl2Aq9%2B1Y8VPO%2BVoxvhlLQsZ2WsIKCMT4tlbe74%2BBFRPXyhd06Wu9GHNvalKNA68CaUs9yzOfwt5E7CYy5XE5bxwbT5zEWGrq1PyMKpHL6LJDhZZ8oExBm3rpEdg5qbung6zMH7c%2FMKCFq03WkUnMka2VC%2FXScy07TrN6gwxAcOHBRXe%2FnLJ%2FxLdLUlo6DaKFjMdC3JzHy1Qi6LSBfVT941v2TxXxGUq5pPJaznQfUv4soTNMjO7XILny5qgxPcIJOCNINpUhpHKN3rBOifrIZfLOnXN6VdSl7iS7qyxOI5wD6DXN5pic6G68lZes6Qr6F9OOjeeCFWSD13svi0YFOZCUjBfGeYKqJxA%2FsJSMLlASzTxAJtAgBDKWzWfP8ha5QKPIs7Gry0O92jfL%2Bjq44vZvnMKa15L8GOqUBqtTYdQTWObw0u4KbsF%2Fk6aIrOnomb5fPsXOxQlVDbfdJywj1l6sXkSnT%2B3Bb66w4%2BWUHq1OHHhGHkDDjxX3tAf4WoQ38vPmo4myYjeOOy8eikq4JOQGdQv7%2BNXwB0iCodmAnhQBeTH0XY5ej2lqLt1lSBqO8A71ctZBLkanWf7otfBbFt1wwLggUnxEWjZNQtbsmV8jTDET9hKPvyFAKnTaNleGG&X-Amz-Signature=1e6b12b549a4ea4cf6571f8945ed75d1734a33a66e45aaae406f7cd0ea09bb99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
