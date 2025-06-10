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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4LAPS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuZ%2FEqpivNGjr49D8RwP79tJR8JLgDQOiuPIVt06u20AiBhCltJ%2BMd%2F3Hd5M835%2F1a9mul1o3SeGcq0%2FbZMkKjFSCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5h1EDmN1hNyEntsEKtwD26%2FRCq%2FxRiZQd9e9i9vH5svDE%2B0XHJhEc%2BN4JS%2FZjHEY%2Fy7a1yhp%2BeBL9A4xKnhd9JsF5JiUYdKgZGvm2%2FzgHSOu1n4cHUtZD8gU0CzmbDKBLwDYkCSsBgYdIzQOFwLA8lc6QKA3bxv8J1SKmG6js%2BefWhRHJWB2XlHaCBSUoveMxEMnP7zMyXjhxVqPsITnpdQ8xO8XVat6v08TCkG%2Bi2oJe%2FZ%2Fd85zwPdQEXZnecPRR5xFj6TC5%2BnEOCkPfGlN3mhOkO8b%2FdvmX%2FaJHkVMdZSEyfeBsGyDT6Y%2BzfIw9leStE2ytT4BGQSlmKUI8G1oMsdMafpZDoR%2BJ4We6MCRzj1puucEQJgouHaQZjHs0yK3m2fo6c1q1ajMy4w46KaqvFXtLjYff3EdXMLibg1GK8%2FZFp%2FCZ5U8MR0oBS51KRw9ORc%2B5cOVFkBS6oqE8mUekloNtyCntikYQSUrtbBwyw%2FrB8LZUiNq%2BSVgEf%2BxuMj3AP877yBG84fCvHGighsNPUxKGz8rfzLck0B6WPzn4RCx8pwwdYIsksw%2BInZOBEFATQZvuhiqsGtTsEItNFHBZLp0UROhXHcQ8qYcAYFM%2FbJ7mJdZcS%2FFBgAGSmF6kaytGKuKx5hICkmzkP4wz5%2BewgY6pgH%2BJJeEEKINjZA5zjPdwmGeu1Iog7ZicIO6yjLXEhR2Cf4PMP5kJA0JQKQTon5XXaKRRaPRzEmYShFwrqv08l%2BUNurW6Gxsw85UZboW7rsNvU6IEq9SoeWAFsN17YUfADAmkEjsDV1BljGTTSfei5Wtg1RS2G33vKWt7IGN%2Bvrv47ESY9Qoik5qjFVGpFlpet95ql2Q43%2F9e2AI6EkqONA1SZLPGCrJ&X-Amz-Signature=a169e25aa07c3a8ffa2d6bda7aa88d6a874c8c50fc475a336af80e9c25a8f177&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4Z4LAPS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuZ%2FEqpivNGjr49D8RwP79tJR8JLgDQOiuPIVt06u20AiBhCltJ%2BMd%2F3Hd5M835%2F1a9mul1o3SeGcq0%2FbZMkKjFSCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5h1EDmN1hNyEntsEKtwD26%2FRCq%2FxRiZQd9e9i9vH5svDE%2B0XHJhEc%2BN4JS%2FZjHEY%2Fy7a1yhp%2BeBL9A4xKnhd9JsF5JiUYdKgZGvm2%2FzgHSOu1n4cHUtZD8gU0CzmbDKBLwDYkCSsBgYdIzQOFwLA8lc6QKA3bxv8J1SKmG6js%2BefWhRHJWB2XlHaCBSUoveMxEMnP7zMyXjhxVqPsITnpdQ8xO8XVat6v08TCkG%2Bi2oJe%2FZ%2Fd85zwPdQEXZnecPRR5xFj6TC5%2BnEOCkPfGlN3mhOkO8b%2FdvmX%2FaJHkVMdZSEyfeBsGyDT6Y%2BzfIw9leStE2ytT4BGQSlmKUI8G1oMsdMafpZDoR%2BJ4We6MCRzj1puucEQJgouHaQZjHs0yK3m2fo6c1q1ajMy4w46KaqvFXtLjYff3EdXMLibg1GK8%2FZFp%2FCZ5U8MR0oBS51KRw9ORc%2B5cOVFkBS6oqE8mUekloNtyCntikYQSUrtbBwyw%2FrB8LZUiNq%2BSVgEf%2BxuMj3AP877yBG84fCvHGighsNPUxKGz8rfzLck0B6WPzn4RCx8pwwdYIsksw%2BInZOBEFATQZvuhiqsGtTsEItNFHBZLp0UROhXHcQ8qYcAYFM%2FbJ7mJdZcS%2FFBgAGSmF6kaytGKuKx5hICkmzkP4wz5%2BewgY6pgH%2BJJeEEKINjZA5zjPdwmGeu1Iog7ZicIO6yjLXEhR2Cf4PMP5kJA0JQKQTon5XXaKRRaPRzEmYShFwrqv08l%2BUNurW6Gxsw85UZboW7rsNvU6IEq9SoeWAFsN17YUfADAmkEjsDV1BljGTTSfei5Wtg1RS2G33vKWt7IGN%2Bvrv47ESY9Qoik5qjFVGpFlpet95ql2Q43%2F9e2AI6EkqONA1SZLPGCrJ&X-Amz-Signature=bbf8bda74f99a80caee52ff1c8d70f594475d9a2fa65f4571e71320e0f8099d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
