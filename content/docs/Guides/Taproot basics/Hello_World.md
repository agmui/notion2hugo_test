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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36SZ3DJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICZEi5gwGUWCRq5Vatlhrd8xpjzODGr3CIPFrjpZ7RpBAiEAmnaVZgdk5AlKn6vkzV0twKJT0yeWF5%2FlmFqhf9PgyTYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfLF1jwdCSaRAEIYyrcA7Rssf%2FUtyQ4muOo3Q7G%2FwkZKbl9%2BbVoKv7eBd9jCLPNIMtoUm0Sx29EQw1jpNlTqas38vpcM6o6K01%2BHYiRiXVpk6o%2BEmze5zdwVrXAGudhkBPZd6Nj3hvF%2B6STBcOsYkv1FvtdMAxzdyEHSDbcdWOgaFfjx0H4hPNzhq0gJ00ciMuQyRsY4tzDAps0I%2BKeTUs5oYbDROg0qLvDUmJGnAiX0P0m8I1hdN5nOzrSLOTFwGfm%2B35Eix5KA4Uvj4n5rDH1hN7a7%2FeMw5aDP0waxSFHN6Ryr8ih7N7pOtE8aydLfpH7fnwXkswIkZj8HcMYmIBFNjtGPEeqyQZT8GWpYFACLY1MprrgWSqTUG45WJKoRmSm%2BSM5eAfsfSEo%2B2nnyMZ4Q4EMqB7ERLNs2nbp7T%2F5sK%2FibF%2FyUpvXSkM3rwNOzsrC5fQlEmK9X9abD4g7NRJoJjAmrJL7OH2zbwthXV%2BfC%2B9W4%2FZowCXmDI00V2cA5TyvUGeiH2JdTG6byIDr2s69u7V1WrKtt%2Frbhj%2FIHAcNSW5p7s0faz7Wb3D3v4Ss%2Fsgj6b7AInQqvzf3wY7mMmNpckIs9P1vNw%2BQ0vfiwMQb69SeThKG2ZbhhtoLRHoNcziTeUl4EKgGmq0uMN3n%2BMEGOqUBCUQxr%2FPxiQ2F1eYqANqQ6BjlTAQGld8pkLD8ldGF4x8hyTJLB9Ktx%2FhpmCHengIdnoJq45UhHqKD40s5lgS24RUANiQcat2ydw56cfrvNa%2FJPBqxIsdPLoXJHaKVkcm%2FrGBYk%2FpTr8Vdie6tY6tuN%2BEUc9x9g018z3IvvWOfREyhMb98fEMc7XePwTwDID8qMhgbIAhb7ZE1xDfs92uRMxMUQ%2FDw&X-Amz-Signature=5bf55086322376c926dc1a06ad509a6507a2dbaf629c1b4fe510b73d019e79ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36SZ3DJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICZEi5gwGUWCRq5Vatlhrd8xpjzODGr3CIPFrjpZ7RpBAiEAmnaVZgdk5AlKn6vkzV0twKJT0yeWF5%2FlmFqhf9PgyTYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfLF1jwdCSaRAEIYyrcA7Rssf%2FUtyQ4muOo3Q7G%2FwkZKbl9%2BbVoKv7eBd9jCLPNIMtoUm0Sx29EQw1jpNlTqas38vpcM6o6K01%2BHYiRiXVpk6o%2BEmze5zdwVrXAGudhkBPZd6Nj3hvF%2B6STBcOsYkv1FvtdMAxzdyEHSDbcdWOgaFfjx0H4hPNzhq0gJ00ciMuQyRsY4tzDAps0I%2BKeTUs5oYbDROg0qLvDUmJGnAiX0P0m8I1hdN5nOzrSLOTFwGfm%2B35Eix5KA4Uvj4n5rDH1hN7a7%2FeMw5aDP0waxSFHN6Ryr8ih7N7pOtE8aydLfpH7fnwXkswIkZj8HcMYmIBFNjtGPEeqyQZT8GWpYFACLY1MprrgWSqTUG45WJKoRmSm%2BSM5eAfsfSEo%2B2nnyMZ4Q4EMqB7ERLNs2nbp7T%2F5sK%2FibF%2FyUpvXSkM3rwNOzsrC5fQlEmK9X9abD4g7NRJoJjAmrJL7OH2zbwthXV%2BfC%2B9W4%2FZowCXmDI00V2cA5TyvUGeiH2JdTG6byIDr2s69u7V1WrKtt%2Frbhj%2FIHAcNSW5p7s0faz7Wb3D3v4Ss%2Fsgj6b7AInQqvzf3wY7mMmNpckIs9P1vNw%2BQ0vfiwMQb69SeThKG2ZbhhtoLRHoNcziTeUl4EKgGmq0uMN3n%2BMEGOqUBCUQxr%2FPxiQ2F1eYqANqQ6BjlTAQGld8pkLD8ldGF4x8hyTJLB9Ktx%2FhpmCHengIdnoJq45UhHqKD40s5lgS24RUANiQcat2ydw56cfrvNa%2FJPBqxIsdPLoXJHaKVkcm%2FrGBYk%2FpTr8Vdie6tY6tuN%2BEUc9x9g018z3IvvWOfREyhMb98fEMc7XePwTwDID8qMhgbIAhb7ZE1xDfs92uRMxMUQ%2FDw&X-Amz-Signature=1e39d6f4296d1101bbca0eede2bd7564369b26980d5f75b54f0ce60d9a316d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
