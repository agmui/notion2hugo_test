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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUXY54FH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDviUw7jMk58dCJvtMdqjTPy%2B%2BdG%2B1E0cxRChYDxWAwswIhAPk7IgLfH4A6L1emGgq%2BhGgjITNkFY%2BPw3mLE8MuyhnuKv8DCHgQABoMNjM3NDIzMTgzODA1IgzrJLFQZVYZBE7uTyIq3AP1AhF%2FaXlqxTkAg21%2B9Q77fOgaH5ume%2FCc4w9m6Tp1u7AkZOCHUvUyZLYKKGkn4t4jGwvx740ti2YOu2FVPfW6OWehf3SKylAZa4JR6AQNDb%2BuologcVlzuMBYKKyWWxIN7t6DI6O9HX16bqlOu58lwEzd9p3teErXQTTadLJOoR7yASWULX3h6daXp0j7%2BvMd%2FmC5c5nRaWe%2BMWpSKGnGzEWq9rD%2B8vTEd8rGsn1Ckuyo8HeTSXoERvexxAh3ouURm8eUX%2FMPXEZdmsLRAjevhmwaL%2Fh34iHUZfCDyBQEyWjPHQNkpdOuHRVDBjdQPabsZTZnXZTONUso2y%2FeW2Ek1eNztBOtW3rwA5EcdhRrZvi2FbERQJwYzVm53rLxyyR9029%2FhOjzhf%2BlHEJB36d1h080XW53hDsReujA9tXvntLnLm%2FXIQ6uEDvD%2B%2BLjE2kTWubcz%2BI0mG0WRmDmYSkelJuLLBceV9xz1XO5kDQJqGlnhKmh%2B4YBHGNixkhbFc%2F1PNk2Fj8Q6PgugzjZ7N5SILL0rbzLjEkcyhZykJPkQVc%2BPY2I0Yzkg24kQNjY3mZOx9zxiZ62HcADT8b25Dmtexp8onutSPWd%2BkhOfLeEw%2F%2BbZl4hmKnJf7UnKjDanpHCBjqkARwRrs1peG8AoRbvSUFNSErfbGgdCKiRDTI1hBv7Qy5%2Fp8YS3fsCQ1uV2JgrmPA1sfnUF4NJkupyBBDiMFoEFMpMFfVqgjopykEMbfypPuPBGKp8mX5WW2WoRdPyByDyL2duvrBJQ9tL6F0nHyTv5SulSfXHdg5DkX%2BNw4IlwoE7bp4S%2F4khGSudOzmFRL9dFA1wYJi653R3hnmYDSgSImwx8KLz&X-Amz-Signature=a677c735f9814654eb65737dc5fc16bf8454ecf44a81620ea388be59d389fcb0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUXY54FH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDviUw7jMk58dCJvtMdqjTPy%2B%2BdG%2B1E0cxRChYDxWAwswIhAPk7IgLfH4A6L1emGgq%2BhGgjITNkFY%2BPw3mLE8MuyhnuKv8DCHgQABoMNjM3NDIzMTgzODA1IgzrJLFQZVYZBE7uTyIq3AP1AhF%2FaXlqxTkAg21%2B9Q77fOgaH5ume%2FCc4w9m6Tp1u7AkZOCHUvUyZLYKKGkn4t4jGwvx740ti2YOu2FVPfW6OWehf3SKylAZa4JR6AQNDb%2BuologcVlzuMBYKKyWWxIN7t6DI6O9HX16bqlOu58lwEzd9p3teErXQTTadLJOoR7yASWULX3h6daXp0j7%2BvMd%2FmC5c5nRaWe%2BMWpSKGnGzEWq9rD%2B8vTEd8rGsn1Ckuyo8HeTSXoERvexxAh3ouURm8eUX%2FMPXEZdmsLRAjevhmwaL%2Fh34iHUZfCDyBQEyWjPHQNkpdOuHRVDBjdQPabsZTZnXZTONUso2y%2FeW2Ek1eNztBOtW3rwA5EcdhRrZvi2FbERQJwYzVm53rLxyyR9029%2FhOjzhf%2BlHEJB36d1h080XW53hDsReujA9tXvntLnLm%2FXIQ6uEDvD%2B%2BLjE2kTWubcz%2BI0mG0WRmDmYSkelJuLLBceV9xz1XO5kDQJqGlnhKmh%2B4YBHGNixkhbFc%2F1PNk2Fj8Q6PgugzjZ7N5SILL0rbzLjEkcyhZykJPkQVc%2BPY2I0Yzkg24kQNjY3mZOx9zxiZ62HcADT8b25Dmtexp8onutSPWd%2BkhOfLeEw%2F%2BbZl4hmKnJf7UnKjDanpHCBjqkARwRrs1peG8AoRbvSUFNSErfbGgdCKiRDTI1hBv7Qy5%2Fp8YS3fsCQ1uV2JgrmPA1sfnUF4NJkupyBBDiMFoEFMpMFfVqgjopykEMbfypPuPBGKp8mX5WW2WoRdPyByDyL2duvrBJQ9tL6F0nHyTv5SulSfXHdg5DkX%2BNw4IlwoE7bp4S%2F4khGSudOzmFRL9dFA1wYJi653R3hnmYDSgSImwx8KLz&X-Amz-Signature=377c49428781c8a70ac6f1a754760323c1a96d4f869e0692f19cb5383a547c50&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
