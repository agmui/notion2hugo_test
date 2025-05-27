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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG6Z2WR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmmAxyLlBRMYLZvkTWJ8Xe7z6oqGEmCP%2FxAmz%2BUG3CbAiEAsFMh2GYAzupw4WEZZ2b5g3J2I2nPu6P5%2Bd5j3pNkiK0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMHjGLvHh410Dj1A2yrcA1eOeVj2uAQ8fG12txNC9Vjv33wBISJbM%2Bztbcvxr0nKzXdoIGzf8HwffCqr9tUW2zosrhME7d9jVhQAOr255s%2F8VIth3QuTluJytm8gWMMlM%2BJ4h49p7Jn4PQU4aDdFYZ3CMM3z4bogKmE2gNPDEoiYP1TRdDQZlINCgtrbXO9hoTfyp%2BalVegTMaaFkosOMN%2FI5%2BeLSYpGHp%2B9EAgb9L8Z%2FP%2FHiP9H5gSEr01HjE49hmQjjTUctiPJ6GId989%2FFPP6TEFAWEZ54iD3AuhiBy%2FNIn6dyk3P9CR4Zi5W4C8uHp4MtlKaLZO4dPWpsfvADCBYeLkeShCahgLbI%2BWV6Xtcym9jdlVyFqJ%2FWAIN1gGyhejsGPmgFk%2BCnCc70ACJJItWkmM15kMJgHsMrCtODc95fIB9GC3KuLKvu%2Bgu%2BjMqmRztcBq61BuWtEVANOtN9yGy85XJhIMrGU55J1Y5Lfw4v5cE1UJPS9iYDEmNCBtWgbBylbiW9kwcwtHqaSjCMebynjiYH2%2Bg6o9TEh6ZgQN%2Fn3k1Qq7e902bEMhVL%2BlDc7k4zTErXGrOdkbFRyn%2Bg4jipyRVtLyKpomAvP%2BpdJgBLVIRGVWcpKvRLrP3yHvfMzDOTBfy0YMrHOFIMMXU1sEGOqUBgqJCJYg7a4m1AkaxW1WIyunsppy9kv8miq%2FQ1Xl8dNQG4jrWNoNz3NzEslNjp%2F7pUfUfTn6xgnRcrP1iFROOx2ElFFcOmF2lRYGNnSt9LcpwGQaqmgb3gP6R3SNc%2F4INo905AeWTAbN8xW7ipWmTUMCxA8iD4yZ6WL5%2F76acoJV5qlKiaMMDztDejfdyRKhNE5hyro%2F1FrlblkcpFdX5bk8tGUyA&X-Amz-Signature=9fdb017284267c0e6d0e5a401c3bf70572fb24422f9256bcee2bbca60a05f410&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNG6Z2WR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmmAxyLlBRMYLZvkTWJ8Xe7z6oqGEmCP%2FxAmz%2BUG3CbAiEAsFMh2GYAzupw4WEZZ2b5g3J2I2nPu6P5%2Bd5j3pNkiK0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMHjGLvHh410Dj1A2yrcA1eOeVj2uAQ8fG12txNC9Vjv33wBISJbM%2Bztbcvxr0nKzXdoIGzf8HwffCqr9tUW2zosrhME7d9jVhQAOr255s%2F8VIth3QuTluJytm8gWMMlM%2BJ4h49p7Jn4PQU4aDdFYZ3CMM3z4bogKmE2gNPDEoiYP1TRdDQZlINCgtrbXO9hoTfyp%2BalVegTMaaFkosOMN%2FI5%2BeLSYpGHp%2B9EAgb9L8Z%2FP%2FHiP9H5gSEr01HjE49hmQjjTUctiPJ6GId989%2FFPP6TEFAWEZ54iD3AuhiBy%2FNIn6dyk3P9CR4Zi5W4C8uHp4MtlKaLZO4dPWpsfvADCBYeLkeShCahgLbI%2BWV6Xtcym9jdlVyFqJ%2FWAIN1gGyhejsGPmgFk%2BCnCc70ACJJItWkmM15kMJgHsMrCtODc95fIB9GC3KuLKvu%2Bgu%2BjMqmRztcBq61BuWtEVANOtN9yGy85XJhIMrGU55J1Y5Lfw4v5cE1UJPS9iYDEmNCBtWgbBylbiW9kwcwtHqaSjCMebynjiYH2%2Bg6o9TEh6ZgQN%2Fn3k1Qq7e902bEMhVL%2BlDc7k4zTErXGrOdkbFRyn%2Bg4jipyRVtLyKpomAvP%2BpdJgBLVIRGVWcpKvRLrP3yHvfMzDOTBfy0YMrHOFIMMXU1sEGOqUBgqJCJYg7a4m1AkaxW1WIyunsppy9kv8miq%2FQ1Xl8dNQG4jrWNoNz3NzEslNjp%2F7pUfUfTn6xgnRcrP1iFROOx2ElFFcOmF2lRYGNnSt9LcpwGQaqmgb3gP6R3SNc%2F4INo905AeWTAbN8xW7ipWmTUMCxA8iD4yZ6WL5%2F76acoJV5qlKiaMMDztDejfdyRKhNE5hyro%2F1FrlblkcpFdX5bk8tGUyA&X-Amz-Signature=5129cb04dc3472c5c049b9e21479c8b762237d33109cc2eedb64a66588a25fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
