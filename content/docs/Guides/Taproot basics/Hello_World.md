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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIGAAZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCHk2gcMNujvumsLUvZ1hEQcVXXN2VbpErBiTkuVquLAiEA54A5qW2HyrIsDRbRxsRjYd%2FaSB3p1FY4ox2pzBjtIhgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGVrOdzfeeIV2yOYqyrcA7wGWmWDmGQ8YPzUhr7FOXEnCdDhM1IGbCkKoyFxRrkrb9A9S1pugAI1f5hO6q1afZr%2B4TJFZzemmSAiYX%2BZOwdWtj0ywkerXTOxlEGnK%2BJTXw8eoA1VAPgKHIvZ82wlKms6lo%2FopKE6Opb02ckhi7LelT1eLYCK47akhAAPm9pPFiLLGDP%2BYkMrkEHhL59MU%2B8A4b0Q7zFy0mrmmAtx9TB%2FOXKQ9fdr5bNLlbkJVmLvmjWIdSpOm5%2BQ%2B6HGyvKp1cbhg36o3VfvZJ42ZQYLQ3APqXYLwWxKe2E8BnwJEh7DQ8l1eTEDAzwGVkdqwTVoEGeYZS7ayoLORtL8dprlhBLcOK5AHFt%2BIUciVIJ1xQmof%2FJ%2F%2F3F9n5cJCRzvgEzDOCq7VVicOE%2FDqpJjvErUvZzX8JKB3D5uLPXUWKpbV6JoX2VTtdieXnTy0AadDYdFj%2BJ4Yl%2F%2FAaVICEgXXEcraOM7yMdtZETaIISejoAj2ot3HlTf%2FkuYzAgoJ43aw4Bod5OPxnVHkRYIUCtDPEtZHSo%2Ff9aMyO8GFAMWcpnkOJ7B5V%2FrIlowNYTW%2B%2B0Pny7aF7c4iNyxGyWnSFoB9SJTgbTGYToaGsatKSYZ%2BHv%2BVG5Uxi%2BF4QzlozwAmKiDMKiT2r4GOqUBffqy5yWelY3K7OclzQlewIqiDng8RxiHsjJeEQ%2BBJ5u6BH4GybIvMUK3yYbphqaJkDPx%2FJKiyCsZMejzDJBontohO2cwfhMd6yzaz7wUFVP1zKAu7WdvBOK%2FhB4oKv4t6pAHvdRAqWEuQ7Hflo30QwNfZOzVRjGMRpzhkSVhoKCvN6f%2FdMjDe0O0qwDYaZHSoQpDUe6nb18EZvu%2B3lY%2FQ4gv5ZyL&X-Amz-Signature=cb6805b9f40dcc95f522735b7796741c69d9ea6fa7fe9aca51c19774a2221f17&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MIGAAZW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCHk2gcMNujvumsLUvZ1hEQcVXXN2VbpErBiTkuVquLAiEA54A5qW2HyrIsDRbRxsRjYd%2FaSB3p1FY4ox2pzBjtIhgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGVrOdzfeeIV2yOYqyrcA7wGWmWDmGQ8YPzUhr7FOXEnCdDhM1IGbCkKoyFxRrkrb9A9S1pugAI1f5hO6q1afZr%2B4TJFZzemmSAiYX%2BZOwdWtj0ywkerXTOxlEGnK%2BJTXw8eoA1VAPgKHIvZ82wlKms6lo%2FopKE6Opb02ckhi7LelT1eLYCK47akhAAPm9pPFiLLGDP%2BYkMrkEHhL59MU%2B8A4b0Q7zFy0mrmmAtx9TB%2FOXKQ9fdr5bNLlbkJVmLvmjWIdSpOm5%2BQ%2B6HGyvKp1cbhg36o3VfvZJ42ZQYLQ3APqXYLwWxKe2E8BnwJEh7DQ8l1eTEDAzwGVkdqwTVoEGeYZS7ayoLORtL8dprlhBLcOK5AHFt%2BIUciVIJ1xQmof%2FJ%2F%2F3F9n5cJCRzvgEzDOCq7VVicOE%2FDqpJjvErUvZzX8JKB3D5uLPXUWKpbV6JoX2VTtdieXnTy0AadDYdFj%2BJ4Yl%2F%2FAaVICEgXXEcraOM7yMdtZETaIISejoAj2ot3HlTf%2FkuYzAgoJ43aw4Bod5OPxnVHkRYIUCtDPEtZHSo%2Ff9aMyO8GFAMWcpnkOJ7B5V%2FrIlowNYTW%2B%2B0Pny7aF7c4iNyxGyWnSFoB9SJTgbTGYToaGsatKSYZ%2BHv%2BVG5Uxi%2BF4QzlozwAmKiDMKiT2r4GOqUBffqy5yWelY3K7OclzQlewIqiDng8RxiHsjJeEQ%2BBJ5u6BH4GybIvMUK3yYbphqaJkDPx%2FJKiyCsZMejzDJBontohO2cwfhMd6yzaz7wUFVP1zKAu7WdvBOK%2FhB4oKv4t6pAHvdRAqWEuQ7Hflo30QwNfZOzVRjGMRpzhkSVhoKCvN6f%2FdMjDe0O0qwDYaZHSoQpDUe6nb18EZvu%2B3lY%2FQ4gv5ZyL&X-Amz-Signature=dbfda497c349adbeee1b407fb198b04b2424deb5c4ea06a74a3cf53f850d86c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
