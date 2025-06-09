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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGSS2JW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLd42VWlcrCQ5eigdwQXlFI%2Fp%2FIkv8F0EyPz1x10Q3DAiBCrQ4UW2C89a64vL7UNA0vJefnVb0eOQxBYnsgBx%2FJJCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8gekiyKJq7pXXVZKtwDz4wT0YBndKSdXHZgeJNubl2Hyu%2FXBC1Fm5c20XIkfssAUiTboyJi9v%2Fr15APSdqangYjKNmo8a2RcAefKKKStpcAr7Cgezn7i1M2KK4BzdA%2B1zkC1lEXmGZul5kyiIXLRjMDuerGi520es5W6Lf%2Bu83SmUF%2Bn9o%2B5g7qc5duzAz0f3DbTD3KeTFeA8wmrolfpGGfd9XROS53xCZZDl7ncKtPY%2F%2BGWDgWyX45n9rMEl%2BUWfPXp7EhvTSOL72OuNf0KUdrlU%2FpqYPvlt8PrEzrxli%2F05sw127pXezyOtnmlMs41J%2FS1WxkbVc%2BFUZ%2FYqCdwbCOtALbSADZj8b2bZcKm%2FuWGCK%2F2gL7MF13s5kGQpcfWO0v3TdwO8d5RTKS5AjSmhXUwrsy2f9YRWsDnfPOhuTfVyUwxz5zRIF2PDltLAWoehn1eK%2BQ5ZcMhgtcbdREThaa1136XOqUQEgyVBcNLe72kwzeAGp8U3D535qCpB3WoCK5VeqeEsjjAkHw0X%2BdTURdvai46dM%2F86HE7OhGN%2BMV9bVuD2AsuSGlwkXOuQOJ7fPS%2FW%2Bsa2ZYhlj1iAVU9dJ1wkPz9mTOOflOP%2BCKtLqGgH5pblpHxCPIYiCcuNiOEV0BE3HYEmd9d8QwqZacwgY6pgEM%2FxwQeoe91kAou4fqo8BDBuBu9G9QS%2BV08diNnT8%2FIfxu9GVJSoHaTpiOkckA8vy4w8pGqY%2BoCVygjI4FtYw%2F0BMkwV013L%2BT4fool%2Bneg5CQ3uWE%2B%2BfWIlUIZXxLet700XF2PP0mPdDhY99gnC1zXjsjZRlBZy%2BO6LPYTvHgCwlHiJT%2FW%2F1K63U7oCbRw6IUmfETn%2FjWdfhd0GrP4%2BI45kM1sso6&X-Amz-Signature=8660746a5454e233e1fc52ca0477609dfa3607622106be894b3d20d7c248e1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGSS2JW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLd42VWlcrCQ5eigdwQXlFI%2Fp%2FIkv8F0EyPz1x10Q3DAiBCrQ4UW2C89a64vL7UNA0vJefnVb0eOQxBYnsgBx%2FJJCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8gekiyKJq7pXXVZKtwDz4wT0YBndKSdXHZgeJNubl2Hyu%2FXBC1Fm5c20XIkfssAUiTboyJi9v%2Fr15APSdqangYjKNmo8a2RcAefKKKStpcAr7Cgezn7i1M2KK4BzdA%2B1zkC1lEXmGZul5kyiIXLRjMDuerGi520es5W6Lf%2Bu83SmUF%2Bn9o%2B5g7qc5duzAz0f3DbTD3KeTFeA8wmrolfpGGfd9XROS53xCZZDl7ncKtPY%2F%2BGWDgWyX45n9rMEl%2BUWfPXp7EhvTSOL72OuNf0KUdrlU%2FpqYPvlt8PrEzrxli%2F05sw127pXezyOtnmlMs41J%2FS1WxkbVc%2BFUZ%2FYqCdwbCOtALbSADZj8b2bZcKm%2FuWGCK%2F2gL7MF13s5kGQpcfWO0v3TdwO8d5RTKS5AjSmhXUwrsy2f9YRWsDnfPOhuTfVyUwxz5zRIF2PDltLAWoehn1eK%2BQ5ZcMhgtcbdREThaa1136XOqUQEgyVBcNLe72kwzeAGp8U3D535qCpB3WoCK5VeqeEsjjAkHw0X%2BdTURdvai46dM%2F86HE7OhGN%2BMV9bVuD2AsuSGlwkXOuQOJ7fPS%2FW%2Bsa2ZYhlj1iAVU9dJ1wkPz9mTOOflOP%2BCKtLqGgH5pblpHxCPIYiCcuNiOEV0BE3HYEmd9d8QwqZacwgY6pgEM%2FxwQeoe91kAou4fqo8BDBuBu9G9QS%2BV08diNnT8%2FIfxu9GVJSoHaTpiOkckA8vy4w8pGqY%2BoCVygjI4FtYw%2F0BMkwV013L%2BT4fool%2Bneg5CQ3uWE%2B%2BfWIlUIZXxLet700XF2PP0mPdDhY99gnC1zXjsjZRlBZy%2BO6LPYTvHgCwlHiJT%2FW%2F1K63U7oCbRw6IUmfETn%2FjWdfhd0GrP4%2BI45kM1sso6&X-Amz-Signature=f47673282fd95df9ffc80291e3eabb69b3c97907d6134e76a95520c169fd24f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
