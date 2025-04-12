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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25TVQNG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICBsQGkpRHZ5daXxQPUZ02hM71sDnqWt0nC9yRfkO7VlAiEAz%2FXvvtPHfXRvyM3zERI%2BJ5g9fQ9UQk%2FN3hmaSP0RE%2B8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv91nr3bUGF6%2ByUnircA5fVmMkU6NTsUoWjL3hCxUM3YIQzJ8UNphkV05tNfeXAnFWh8C2og%2F6nEcOvUye9xS%2FvDFi3GdYAnCya8BG5VRiRhokLlB75cHqXdomeKl9zBg7QoLzcbxdhsO3n1tMTGZKR2SPXKzN0eWS7nySMgNzV3nj8QYPJP7G4gKL2lRUR6JYtRb59qeon3j1FEEK6gS3%2BpzwB6argmHXbkcyByKm6BSQCdbu6YA%2B6Dt8hbA3GGCAbyDDqr7yofItVgUSceqDgo2oQRL0OWZsR%2BN9dtt0hWaX%2Fk9kjqptYaWBTyjJi3a3ciaEExeRQlGkDUNwVN8kKu72smwUQfJEhMpDZ1xogeD7IS3a5euh1I3UY1dwopN40bgtV2qiQBVoGye6uxeeFGwi3LVlqOJBiAxWR3nxBT%2Flmoaun51JNxqHaSwi5VEu27W8dGRoBDw%2BoXnoFTXlEOoIlt%2FCA8LVbyaVqCF%2BORF8KVOoHhGKXEw4xShO5AicUcThqAefCZN2nZnGQaQNKThOhB2r%2BP8a4IcrZaCh7N9OmS5Yh09ts0iuI2s%2FeFQQnywuHhV4t5zalGGsQYoHJVrq%2BbG6KPG9Kin7w52asGBEniAFFtu1bHHkPikEhI8krwBOEIzL9%2BkesMIyv6b8GOqUBC7DzZR9p3qcwm%2B0zdaPvrvpjzvT%2FXmJv5nBTiejj%2Fd5z4Uf8vfeXTM8yMVwV4bD53NP3pu9x3eKASfkLDqO7CluvTT5SqbB73hE7REQTMFHdJUK2malW%2FW4i5HE4LQq2MPOulF7UD9X%2FSCLj8nY0tND8wzkt7Y9rg7nB8mQg1n89XFaVgJtPO8bHEKzMlwGOiS3SjBQkkalc2I98yBazAkHCCIwt&X-Amz-Signature=460c4f1cb84674674e7e835e853491baf8027c4be9bc5842fa9df30dfaddd7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25TVQNG%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICBsQGkpRHZ5daXxQPUZ02hM71sDnqWt0nC9yRfkO7VlAiEAz%2FXvvtPHfXRvyM3zERI%2BJ5g9fQ9UQk%2FN3hmaSP0RE%2B8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv91nr3bUGF6%2ByUnircA5fVmMkU6NTsUoWjL3hCxUM3YIQzJ8UNphkV05tNfeXAnFWh8C2og%2F6nEcOvUye9xS%2FvDFi3GdYAnCya8BG5VRiRhokLlB75cHqXdomeKl9zBg7QoLzcbxdhsO3n1tMTGZKR2SPXKzN0eWS7nySMgNzV3nj8QYPJP7G4gKL2lRUR6JYtRb59qeon3j1FEEK6gS3%2BpzwB6argmHXbkcyByKm6BSQCdbu6YA%2B6Dt8hbA3GGCAbyDDqr7yofItVgUSceqDgo2oQRL0OWZsR%2BN9dtt0hWaX%2Fk9kjqptYaWBTyjJi3a3ciaEExeRQlGkDUNwVN8kKu72smwUQfJEhMpDZ1xogeD7IS3a5euh1I3UY1dwopN40bgtV2qiQBVoGye6uxeeFGwi3LVlqOJBiAxWR3nxBT%2Flmoaun51JNxqHaSwi5VEu27W8dGRoBDw%2BoXnoFTXlEOoIlt%2FCA8LVbyaVqCF%2BORF8KVOoHhGKXEw4xShO5AicUcThqAefCZN2nZnGQaQNKThOhB2r%2BP8a4IcrZaCh7N9OmS5Yh09ts0iuI2s%2FeFQQnywuHhV4t5zalGGsQYoHJVrq%2BbG6KPG9Kin7w52asGBEniAFFtu1bHHkPikEhI8krwBOEIzL9%2BkesMIyv6b8GOqUBC7DzZR9p3qcwm%2B0zdaPvrvpjzvT%2FXmJv5nBTiejj%2Fd5z4Uf8vfeXTM8yMVwV4bD53NP3pu9x3eKASfkLDqO7CluvTT5SqbB73hE7REQTMFHdJUK2malW%2FW4i5HE4LQq2MPOulF7UD9X%2FSCLj8nY0tND8wzkt7Y9rg7nB8mQg1n89XFaVgJtPO8bHEKzMlwGOiS3SjBQkkalc2I98yBazAkHCCIwt&X-Amz-Signature=df62b73a70d5a9cc9ad15cda2bba70bb70838a00c9270b2cd648dfb4b11cb216&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
