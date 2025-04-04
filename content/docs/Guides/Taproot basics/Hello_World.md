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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPA5EHT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX%2BRkOkQ7iVrd2enBQ7AJ%2Bi2Z6Pr3RKKguUj1Y4VRzDAiEAo8Ys4dT9shLoz4Y95z5F5qISFJiyAxziqZFbBekQRB0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe1m4sBl5XxMHRxlCrcA54r615ubzVTsm11LZIFprXD%2F0im7d62vjYFrtCSBZZx9XPKVlkAhOtb2s47IKGZ%2B%2F0O9%2BikbXaKWjIj7P%2BBFAA2o6vIrAnyQZ%2F3XenvSx1AiWKMOyw5%2FzAAa%2BsAWx%2BCMHqRYqbmFbm%2Fqj15xiWqn2CXaHHyk9w1e6MXf%2FjLJpH%2Fo00mBaliFPq894LX%2FfGC6glVnNCPbOtGxGlrAYfF21Cph1PJMahYF9pSRXl5DrGNXEY9KR%2BudIbN8Agwm%2FqGf28UYUjEwlMs1BkqmmrHkv7e3Qwwe3zA9p%2F8XaIiWAtwtT6GTvC%2BNaXkdLwGxUQ0L1ZO11ZBvqjIL6cLKz7t4bwWH8FtvHMqYOVfL4XtRDQxgyHtNlXaXabyRUqf1AH2cKCKaFMaHy7vXQuYCkAPoUSD8MGluyOaqoduqKTbuST24v6XO8OdK8%2BPtnG777181TSO1f8Nv%2FPugJiC5t3eeOb9wM0roOQ%2FBFwEEhvCvEup1WXx5t1xVL3YJdA%2Flw8n6KElCFSLqUp1MjHOx%2FFKHPRpeDFJddvDAzbLYEhvumY9yacI7Uovh2oBPFx7F7OzOKte0wiFo73rnjQUcdCs8%2B412ZNESOVIF2ADrC13xbuOTt%2FEgp%2B9ph%2FLuBfXMKzovL8GOqUB4aOXLYlvYlE1trRfMECfjwqNzSbJT9scrdyRki17OeRPPwsoMG0NjVJQ40kZy%2FfWe4EBVckpHUtaL5rvG%2F8ag%2F%2BXNPDCep1yTJk2N5bboO4MrjSe6VMvRCM0yjTtXKIiJ6c6mO2jTILDdTFDfHsS3OFFGEslZd6fi3wmNx0Z5c3lQ5vkZyMsGnaz9jZEHWHmGm5j4Qbloho5feuHajHwZdqcgd8H&X-Amz-Signature=d9dc405f10a1cb3b2dbc1797082d334c7e60694cd16ed4b261f3e269ad0f4437&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPA5EHT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX%2BRkOkQ7iVrd2enBQ7AJ%2Bi2Z6Pr3RKKguUj1Y4VRzDAiEAo8Ys4dT9shLoz4Y95z5F5qISFJiyAxziqZFbBekQRB0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe1m4sBl5XxMHRxlCrcA54r615ubzVTsm11LZIFprXD%2F0im7d62vjYFrtCSBZZx9XPKVlkAhOtb2s47IKGZ%2B%2F0O9%2BikbXaKWjIj7P%2BBFAA2o6vIrAnyQZ%2F3XenvSx1AiWKMOyw5%2FzAAa%2BsAWx%2BCMHqRYqbmFbm%2Fqj15xiWqn2CXaHHyk9w1e6MXf%2FjLJpH%2Fo00mBaliFPq894LX%2FfGC6glVnNCPbOtGxGlrAYfF21Cph1PJMahYF9pSRXl5DrGNXEY9KR%2BudIbN8Agwm%2FqGf28UYUjEwlMs1BkqmmrHkv7e3Qwwe3zA9p%2F8XaIiWAtwtT6GTvC%2BNaXkdLwGxUQ0L1ZO11ZBvqjIL6cLKz7t4bwWH8FtvHMqYOVfL4XtRDQxgyHtNlXaXabyRUqf1AH2cKCKaFMaHy7vXQuYCkAPoUSD8MGluyOaqoduqKTbuST24v6XO8OdK8%2BPtnG777181TSO1f8Nv%2FPugJiC5t3eeOb9wM0roOQ%2FBFwEEhvCvEup1WXx5t1xVL3YJdA%2Flw8n6KElCFSLqUp1MjHOx%2FFKHPRpeDFJddvDAzbLYEhvumY9yacI7Uovh2oBPFx7F7OzOKte0wiFo73rnjQUcdCs8%2B412ZNESOVIF2ADrC13xbuOTt%2FEgp%2B9ph%2FLuBfXMKzovL8GOqUB4aOXLYlvYlE1trRfMECfjwqNzSbJT9scrdyRki17OeRPPwsoMG0NjVJQ40kZy%2FfWe4EBVckpHUtaL5rvG%2F8ag%2F%2BXNPDCep1yTJk2N5bboO4MrjSe6VMvRCM0yjTtXKIiJ6c6mO2jTILDdTFDfHsS3OFFGEslZd6fi3wmNx0Z5c3lQ5vkZyMsGnaz9jZEHWHmGm5j4Qbloho5feuHajHwZdqcgd8H&X-Amz-Signature=0eb7bff0b05d4a4b0953950e1ab42e324621d8e8a57a5cdcb6e3cb45b00dead7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
