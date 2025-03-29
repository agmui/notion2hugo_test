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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HK6B2W%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICPrxdOSr%2FkO2ApvaljiS91j%2F4U1YU43Q%2Bskjl9qqw3AAiBiUbKECtynkps3eosXEnWxfbV6KcjP3BGo0zIZeUM%2Fuyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMe6MgaAAkF5HF0oypKtwDFtTuXotJclZdOUkarSpRBNBYlj1cwIlRY9taWA%2BkWYaquxNIw9QQ2lDxiYLlcxNccIspVhZ7hvjRl19mLPEF3aqtSpyCm5zbv6CxdPQe2ISDwX4%2BufVWDvIuHhNXbSglBPWQdYq5VZSsmB6HhAf1oeyZlTlEkn2NxEMRfIFxQjOmRx9i4IfXz1k9EAwmoWeAlW8WaX22ggvEw%2F6lxbxs6hwl2AQxkz2%2Fk4QGRzqnEDtxZUO4KCJp0oEjOopB8U2XnjCVE1%2FepwzcEmu4dG3gwhIyJYs57J%2Bq9IEPo8UcXqHyLs5JNx%2BPZAWPmdh7Tfc9c92ZSHdAclPGvEu7H0xoAYkTS6%2BXiV5wKGNVa8BHNOZtwI86LHhhkSZYfJZ9OzD3yl4nDuC00m7YLT%2FMwWHqd5Tq9ctkuiX4k8judiR18twFdXJM%2BDH3Um9eYpFXFkUIyOwqvPyVWcwEICoUXD4rwdkl57gE9aYI%2BiBdf8gvIBAOqBn40DffhL5Ilk1r3rXkk5VcCUP%2FCyjHYu1hyGwu1jgIRucs0a9jXIoSjthL4mzSlxhil9M3sHNqbOjhyPnAum6H7swLaQjdfr68i0dfvIecX4rQLkskdBLvKgfLVmB4lA%2FVqyy9mpoSVVMwzt%2BcvwY6pgHUHmJJWk2U%2FltK1ux%2BzkOhgbkvqEgh0QmWHyDMV7%2B8Cf3hHfF%2F86GuQJeT0YH8Z%2F8RVWldagGKxS%2BqI1f24L4mpfam3yeSUZS9A6W%2FXLP5hxVvGHqsqKG7RvsJgp%2B1xiSZbpOD4W2MZcTn3SCzRYfEkQs7nwd0ZXmqgnuHj4cv%2FGox2aBDWHPbwwgoDALF7nDufhOmMOcgzIs%2Fppto%2BA3GLI8HNmeT&X-Amz-Signature=9419d8e75276d810a19d284d2df4bd614290a8cc558776fab48e38822651f59d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HK6B2W%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICPrxdOSr%2FkO2ApvaljiS91j%2F4U1YU43Q%2Bskjl9qqw3AAiBiUbKECtynkps3eosXEnWxfbV6KcjP3BGo0zIZeUM%2Fuyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMe6MgaAAkF5HF0oypKtwDFtTuXotJclZdOUkarSpRBNBYlj1cwIlRY9taWA%2BkWYaquxNIw9QQ2lDxiYLlcxNccIspVhZ7hvjRl19mLPEF3aqtSpyCm5zbv6CxdPQe2ISDwX4%2BufVWDvIuHhNXbSglBPWQdYq5VZSsmB6HhAf1oeyZlTlEkn2NxEMRfIFxQjOmRx9i4IfXz1k9EAwmoWeAlW8WaX22ggvEw%2F6lxbxs6hwl2AQxkz2%2Fk4QGRzqnEDtxZUO4KCJp0oEjOopB8U2XnjCVE1%2FepwzcEmu4dG3gwhIyJYs57J%2Bq9IEPo8UcXqHyLs5JNx%2BPZAWPmdh7Tfc9c92ZSHdAclPGvEu7H0xoAYkTS6%2BXiV5wKGNVa8BHNOZtwI86LHhhkSZYfJZ9OzD3yl4nDuC00m7YLT%2FMwWHqd5Tq9ctkuiX4k8judiR18twFdXJM%2BDH3Um9eYpFXFkUIyOwqvPyVWcwEICoUXD4rwdkl57gE9aYI%2BiBdf8gvIBAOqBn40DffhL5Ilk1r3rXkk5VcCUP%2FCyjHYu1hyGwu1jgIRucs0a9jXIoSjthL4mzSlxhil9M3sHNqbOjhyPnAum6H7swLaQjdfr68i0dfvIecX4rQLkskdBLvKgfLVmB4lA%2FVqyy9mpoSVVMwzt%2BcvwY6pgHUHmJJWk2U%2FltK1ux%2BzkOhgbkvqEgh0QmWHyDMV7%2B8Cf3hHfF%2F86GuQJeT0YH8Z%2F8RVWldagGKxS%2BqI1f24L4mpfam3yeSUZS9A6W%2FXLP5hxVvGHqsqKG7RvsJgp%2B1xiSZbpOD4W2MZcTn3SCzRYfEkQs7nwd0ZXmqgnuHj4cv%2FGox2aBDWHPbwwgoDALF7nDufhOmMOcgzIs%2Fppto%2BA3GLI8HNmeT&X-Amz-Signature=1d7cedd3c19be50125ad951f092a020e425a75b451c755b42e32d7c7b3dd1fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
