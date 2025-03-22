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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM3FIMQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCFvKyOmnDv87wMI%2BE3LrzGUAUuJuHlwG3Dj%2FHD7bIKSwIhAOK7wuiiQMjlebZul61is8agszkEgmETEg3elh1cwF3ZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK25a6Tifl5zHxrBAq3ANWZSKdTlwXv0So%2B2t7XY7tT1MH%2FdHSTABApTjbjUbUhNSEJSd%2Bml28bcdBxrDZRB0A5s%2FthwozKZMc5vUOyaiuCWY0gplu16z2g2eI52LIDSwM0daCahwhzKd0kdA9gE8BEulAx4oYb4duuHdQvzFG8lAPHLBfu69Vv1kLWh76p7EagtprEZ91imStr7rJ32I802RueIx9XqGQ8jfKA%2Fl7hl5roAvKcQOm83RkXrI2WfvTIIYLBzeT55Usn3JJYpQ%2FP%2FFrslOlwp3mPdkAqQDeYGHJf9JSMAwpydX%2FGgeyTR7gEz2HvzkiiuuZ4hdZD59bowkmzKsbkfkHmZH2vd%2FkunU1zLG3au26R8SneEXcXTMdE7ME%2F0yqKxwbNDnJ4DR7eEn7AzekV2zNpjUGRDgtft%2FBilBIsW8l8AkGaVdqUmisPx8gkqiDKPP27p%2BbZXxuLM6qMkbjqnOLHz2YHUrQ4TY1KDXJbwQjE9NHFYEif00eNkx8oooF%2FxN7UOITL6JzLE%2FMXR3ShMZw7kcViN7QyfFIQnMwIiHC5GHmtmvHADska4qwi9ORY6HTBsdDbLBGOUQ6lXUC%2FJHNLj%2BnIP4Gu4GM9pnY4iD0vIf7F%2FOyS9GIq%2FR2myLvTihmyDDY7Pm%2BBjqkATpPYJk3vHspW3foqmeZbaaQ4TXA2zEI12gS46Il7l9fnIwJYO3Tg49h4V4WNhbl3AOckChsRciC80%2B4auLdNbrTV%2BM6vzMErtZRj68WHle8QYL88vhh9QRcPZFZ0QDKirY329LqHEE%2FfwIHNeGpPvDkLoVJ2VdPQRy8byFRrj3E8ErW%2BbuOgkJGz%2BSLnK85121xAF4jE6Eyvvc2HEp7tvQQZFDU&X-Amz-Signature=b7fb679d5f970a65dc44fc580a966d235922fd9f3a5211953d803f106aa69a49&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM3FIMQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCFvKyOmnDv87wMI%2BE3LrzGUAUuJuHlwG3Dj%2FHD7bIKSwIhAOK7wuiiQMjlebZul61is8agszkEgmETEg3elh1cwF3ZKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK25a6Tifl5zHxrBAq3ANWZSKdTlwXv0So%2B2t7XY7tT1MH%2FdHSTABApTjbjUbUhNSEJSd%2Bml28bcdBxrDZRB0A5s%2FthwozKZMc5vUOyaiuCWY0gplu16z2g2eI52LIDSwM0daCahwhzKd0kdA9gE8BEulAx4oYb4duuHdQvzFG8lAPHLBfu69Vv1kLWh76p7EagtprEZ91imStr7rJ32I802RueIx9XqGQ8jfKA%2Fl7hl5roAvKcQOm83RkXrI2WfvTIIYLBzeT55Usn3JJYpQ%2FP%2FFrslOlwp3mPdkAqQDeYGHJf9JSMAwpydX%2FGgeyTR7gEz2HvzkiiuuZ4hdZD59bowkmzKsbkfkHmZH2vd%2FkunU1zLG3au26R8SneEXcXTMdE7ME%2F0yqKxwbNDnJ4DR7eEn7AzekV2zNpjUGRDgtft%2FBilBIsW8l8AkGaVdqUmisPx8gkqiDKPP27p%2BbZXxuLM6qMkbjqnOLHz2YHUrQ4TY1KDXJbwQjE9NHFYEif00eNkx8oooF%2FxN7UOITL6JzLE%2FMXR3ShMZw7kcViN7QyfFIQnMwIiHC5GHmtmvHADska4qwi9ORY6HTBsdDbLBGOUQ6lXUC%2FJHNLj%2BnIP4Gu4GM9pnY4iD0vIf7F%2FOyS9GIq%2FR2myLvTihmyDDY7Pm%2BBjqkATpPYJk3vHspW3foqmeZbaaQ4TXA2zEI12gS46Il7l9fnIwJYO3Tg49h4V4WNhbl3AOckChsRciC80%2B4auLdNbrTV%2BM6vzMErtZRj68WHle8QYL88vhh9QRcPZFZ0QDKirY329LqHEE%2FfwIHNeGpPvDkLoVJ2VdPQRy8byFRrj3E8ErW%2BbuOgkJGz%2BSLnK85121xAF4jE6Eyvvc2HEp7tvQQZFDU&X-Amz-Signature=324eb2279f1f2c0310c3398d4ce410e98788f31937f82375f596941fac4a0f66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
