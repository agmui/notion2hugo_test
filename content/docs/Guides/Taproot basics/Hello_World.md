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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THR6YDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHWccwlo8%2BLO73i%2FzweyaqtnEgrc6Gd7Q8GxZbaCjZlNAiEAyhAWUq4hHNHp8BIwkepeAswheKtS4gEMwMH9zgnoBIAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnKfaO2UGjHn1PaVyrcA6%2FL12Ks3GI0LQocUILGu6XsfCnAlCGuN1O6wvo%2BU2kmRzehc4Dwh886z00J%2FtmvHM9HDD0HwdCUQ%2F0TwwZHntV3bxD54vv6NXCcu54zRZYAeML5eYJxP5bHlY9iaey2jVJ4Eyyt38a2I4FJkQBBdU%2Bo%2FjR%2BPdMULWy1snrGGI9tFWDvcc7VRmXKEVSNvxPBYxJY6Pn2U%2FpCyRlE3ILH9FmmjM6JSqycMYXCMl7IkyOgBmCCeEmVKwh1Wi13%2FmbB30yql7sXswYim2T5OSb44XVqZnQvkfokwX8iTjf2rQUkyTxAFAQwxkTNSLnYX9Qb8dqWWdMvNHAXARItphdEtQN6zEEM85VtuyUQKqOKsBb8jon7ZKPTbnJ%2FikoxtE0So%2B8AsjuJjRzZoQjnkjwxmhzE6f%2FpJFgnmPXPhZE8xBTy7Swjkuj4SlWY66zxaCx1KUt6TC8OTOSgSwyOMmEvcp0EcjCitxhDlr%2Ffr7H%2FobrjoNafJVwi1szYG64D%2Fdzb6zGVbgo814F%2BOcOznnBPoBi8YVQK2c1pNb0Dm9g29IXefVY6hVI827ZDHfx%2B1ZchgRE%2BM9XkVoUji%2FY%2BWke5tcI6bYSegk9g3t%2FD0eHxoA1w%2BFpfLjagoex5sS8pMLqbxL4GOqUB9hvRAa41HAQ6nk%2FveGu5ZbTEdliwPSv8wUsLF7%2B8TFghP9uNGnUIi4j%2B8EMmYa9JKxAidmF7Nc0VJuN%2FkqJfl5WlK%2BU6BQx84aOeEfsrgiTtDKvSBK4G8bvj%2BXaDlH9ELMxzoVDEb4FaZ7Sf2fc5TmY8wgVJ27%2Bo%2FEPmOWNvfVrgEzXpss41FuYqFWU2FTFiUO38fDnSa%2FFuMh9l2x9CgRUx9%2BdG&X-Amz-Signature=7a8ba0c0eec25645371f64419c857346b095ace62636712959afaabc50fe4dff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THR6YDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHWccwlo8%2BLO73i%2FzweyaqtnEgrc6Gd7Q8GxZbaCjZlNAiEAyhAWUq4hHNHp8BIwkepeAswheKtS4gEMwMH9zgnoBIAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnKfaO2UGjHn1PaVyrcA6%2FL12Ks3GI0LQocUILGu6XsfCnAlCGuN1O6wvo%2BU2kmRzehc4Dwh886z00J%2FtmvHM9HDD0HwdCUQ%2F0TwwZHntV3bxD54vv6NXCcu54zRZYAeML5eYJxP5bHlY9iaey2jVJ4Eyyt38a2I4FJkQBBdU%2Bo%2FjR%2BPdMULWy1snrGGI9tFWDvcc7VRmXKEVSNvxPBYxJY6Pn2U%2FpCyRlE3ILH9FmmjM6JSqycMYXCMl7IkyOgBmCCeEmVKwh1Wi13%2FmbB30yql7sXswYim2T5OSb44XVqZnQvkfokwX8iTjf2rQUkyTxAFAQwxkTNSLnYX9Qb8dqWWdMvNHAXARItphdEtQN6zEEM85VtuyUQKqOKsBb8jon7ZKPTbnJ%2FikoxtE0So%2B8AsjuJjRzZoQjnkjwxmhzE6f%2FpJFgnmPXPhZE8xBTy7Swjkuj4SlWY66zxaCx1KUt6TC8OTOSgSwyOMmEvcp0EcjCitxhDlr%2Ffr7H%2FobrjoNafJVwi1szYG64D%2Fdzb6zGVbgo814F%2BOcOznnBPoBi8YVQK2c1pNb0Dm9g29IXefVY6hVI827ZDHfx%2B1ZchgRE%2BM9XkVoUji%2FY%2BWke5tcI6bYSegk9g3t%2FD0eHxoA1w%2BFpfLjagoex5sS8pMLqbxL4GOqUB9hvRAa41HAQ6nk%2FveGu5ZbTEdliwPSv8wUsLF7%2B8TFghP9uNGnUIi4j%2B8EMmYa9JKxAidmF7Nc0VJuN%2FkqJfl5WlK%2BU6BQx84aOeEfsrgiTtDKvSBK4G8bvj%2BXaDlH9ELMxzoVDEb4FaZ7Sf2fc5TmY8wgVJ27%2Bo%2FEPmOWNvfVrgEzXpss41FuYqFWU2FTFiUO38fDnSa%2FFuMh9l2x9CgRUx9%2BdG&X-Amz-Signature=c2a4e757293cc963153bd3c19d24e729da25b52c107eb3b526452d2303b82528&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
