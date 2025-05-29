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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNEY6YC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHOi7F732hqrI956LCmLoLAOaFxqcK0uvqM5rzwHEkVgIgBQEqmKwfn5RKiUFr4pTkHFqFK2hBw2KZeAdufjI4NpAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FyZgZy3Rl9AD%2F7QircA%2B5J9EJYU286Dtpm2BBkHB3ZV7UAXDlMlR0%2FPHqTmVGX78kc1FHDdH%2BqMoIFIPhBP1a3Pf31Yq6U7n7if0ItNw2ysQRIfLQ8dPExPKXJQJW2P7iZ5RUt1KziULg3%2BmU4jTWLAMUxm3TiZbWp3x8cIrSRgw4qsOmyI8Nbs8pzOSuIViAo%2BhaBPJZqSApAZSU62Kwug3B7mqQdkY7NZeis65osHuSiWvJX%2FqhkM59iWJZVx0v6MXX%2B01PyZEkDf0DVjmC9BH7HYdmj8nXNZKud4vQPCVIhL%2BwxaXpr12E0G3U6XPg%2BnvZfofQUmxajuY15QCeWoV6%2B4bNE8mXMMQBvDunVDKjmj1yKUnhkKoEYYtb6qWmDEQzn7U3mPIV7F5sVKv3Wg%2FsnnAhvWquSqYwWKP9dzIsf09jlCN8jl40fjjDFajXJUyVKufo5ojoGjAZlKVU4XO%2F8eHx7tV18WohGDtNLvQJNJy0xP%2F%2FMYtTnMdoWoAdcv3Fy36Wc9llkvtfJb5jB2WHRGKFHnh52cjvEqsQ7RM9zBx7S4FXTquyahslAqVg6%2B8JOwb369r25F26KaA4AN%2BInMCgmPGT0gBOmXa7M5cLnb%2BdMfWTOtL5VxPyqIt7cmjMJObW1wVyoMKb938EGOqUBaPUOGGfVkTyDTGaU4oEvtjxAEs2GHaekV4Q9ezBSM%2BhBiMx%2F7ASmHJB0Q0ubYt%2FUzV3Tg0w5ioa6YRGgUBr9Ewx%2FVGFGk%2BqD%2FFSPWmxYw0G9RevVwdM8L4bER9JrtyTKLSks%2FzyOw7a%2FbTCQOM3r19nCWYzPJwcf%2BBWxLKNAtNEPIrZXLAD8Rl3GLT1A2xSYAf5mUK%2BfdoPdI3F4cokgC2IMxAYV&X-Amz-Signature=fc799030e766c7239202c2d66956333c17711e46fff79d3dc8d66cde7c4e79e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNEY6YC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHOi7F732hqrI956LCmLoLAOaFxqcK0uvqM5rzwHEkVgIgBQEqmKwfn5RKiUFr4pTkHFqFK2hBw2KZeAdufjI4NpAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FyZgZy3Rl9AD%2F7QircA%2B5J9EJYU286Dtpm2BBkHB3ZV7UAXDlMlR0%2FPHqTmVGX78kc1FHDdH%2BqMoIFIPhBP1a3Pf31Yq6U7n7if0ItNw2ysQRIfLQ8dPExPKXJQJW2P7iZ5RUt1KziULg3%2BmU4jTWLAMUxm3TiZbWp3x8cIrSRgw4qsOmyI8Nbs8pzOSuIViAo%2BhaBPJZqSApAZSU62Kwug3B7mqQdkY7NZeis65osHuSiWvJX%2FqhkM59iWJZVx0v6MXX%2B01PyZEkDf0DVjmC9BH7HYdmj8nXNZKud4vQPCVIhL%2BwxaXpr12E0G3U6XPg%2BnvZfofQUmxajuY15QCeWoV6%2B4bNE8mXMMQBvDunVDKjmj1yKUnhkKoEYYtb6qWmDEQzn7U3mPIV7F5sVKv3Wg%2FsnnAhvWquSqYwWKP9dzIsf09jlCN8jl40fjjDFajXJUyVKufo5ojoGjAZlKVU4XO%2F8eHx7tV18WohGDtNLvQJNJy0xP%2F%2FMYtTnMdoWoAdcv3Fy36Wc9llkvtfJb5jB2WHRGKFHnh52cjvEqsQ7RM9zBx7S4FXTquyahslAqVg6%2B8JOwb369r25F26KaA4AN%2BInMCgmPGT0gBOmXa7M5cLnb%2BdMfWTOtL5VxPyqIt7cmjMJObW1wVyoMKb938EGOqUBaPUOGGfVkTyDTGaU4oEvtjxAEs2GHaekV4Q9ezBSM%2BhBiMx%2F7ASmHJB0Q0ubYt%2FUzV3Tg0w5ioa6YRGgUBr9Ewx%2FVGFGk%2BqD%2FFSPWmxYw0G9RevVwdM8L4bER9JrtyTKLSks%2FzyOw7a%2FbTCQOM3r19nCWYzPJwcf%2BBWxLKNAtNEPIrZXLAD8Rl3GLT1A2xSYAf5mUK%2BfdoPdI3F4cokgC2IMxAYV&X-Amz-Signature=8a1944e890161864b243cb3ee37100da2201b0bf75c3e4fc95a46b0084de9c52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
