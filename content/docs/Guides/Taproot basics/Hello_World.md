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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DZWX45%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCTKkhqih%2Fj6lr0wS5rv3V9pHZg6YLCENqa9D67tINEiQIgI7N%2FqFvg8xH4fpXu94ZUvtUUIjOLnpoAomD%2FDrRXEK4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHwIt%2B2Q%2BKkMsSH8QCrcA1njjlsUNthX9wjIIsQPEITUfq4Tj9wogoKMXaNpYqipAjMDyNykTlIWZpg3CjpD6UKmtzPq4c4fJQt%2Fh1LbSwNUNcJIJPbHpUK7V9%2B3L7KHCexHv1NujPuuMLW19k1PvcVBJiGKt%2B3ZK3RZSq82ckgDzRn3kscdhQN8m3kmD4nvFxRl0R1TFR%2BBGdO18Z9IXs7JAGkwJLsk%2FXqOf%2BxAlWlYCPse38p2ELGad1o00kBToQVplfPiWBjiQf51yFAw4t35o6BEqbGC5CDBLhJ1pxay2C43Tle%2Bz3ZqUyHIAVF6TBXTj92yNjhy%2BxJD0xxyG9cCWx4JVak%2FBOsCZvqHYeWjO7FPDMUGDs4vpXwB6wT%2BQPlFGWYa%2FAdt6GaMByCP%2FI94xoVqhrt1qfAVEmUEp%2FXDrFL%2FplNGMuuPaDJJaBEkJBW84CxGqHQM5%2BzsSDHjvf%2BitS9lPI4UFnap9YUEjbLqzn17fi7%2F6xxAD32WOcFytsj572YGtBjBfK64NT4itpSd%2B89Koj5XgC%2FICVbKhQT7ZQBXagUPFfGOe8cNzv4cYvNfRxfAb4Eg%2FB4duhMvz4aQeeNbzMOdKtesgeBazWctsJ6M8AMcSqtNN1i5%2FIKFFm7xPc1FOydtpHGaMLbpy70GOqUBojnfYuVp43jI2WRo2y3S5%2FaQqo%2F43uZMLARANn27nvMTvkrKx5yNCZlgEvHM7vk9KQ8616KhEioBopoMax4QbVgHDECy1Hssnd9OuD%2BiTHjaEnKixXax9iAxnyAQvdLbw6pRQbL%2Bw0AEn1g7PWJR66Z7OYkCoMNmQ5Mr9M67WVceIfjrsWHhQbt3HW0VcPg7nc5KWuGyCdSDIyBQD2FTnk0Q5GTw&X-Amz-Signature=c17d06c5b61a9e3350768f50b107ec9ca4ec2eaf6f0c70c1fcecd892452baf72&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DZWX45%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCTKkhqih%2Fj6lr0wS5rv3V9pHZg6YLCENqa9D67tINEiQIgI7N%2FqFvg8xH4fpXu94ZUvtUUIjOLnpoAomD%2FDrRXEK4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHwIt%2B2Q%2BKkMsSH8QCrcA1njjlsUNthX9wjIIsQPEITUfq4Tj9wogoKMXaNpYqipAjMDyNykTlIWZpg3CjpD6UKmtzPq4c4fJQt%2Fh1LbSwNUNcJIJPbHpUK7V9%2B3L7KHCexHv1NujPuuMLW19k1PvcVBJiGKt%2B3ZK3RZSq82ckgDzRn3kscdhQN8m3kmD4nvFxRl0R1TFR%2BBGdO18Z9IXs7JAGkwJLsk%2FXqOf%2BxAlWlYCPse38p2ELGad1o00kBToQVplfPiWBjiQf51yFAw4t35o6BEqbGC5CDBLhJ1pxay2C43Tle%2Bz3ZqUyHIAVF6TBXTj92yNjhy%2BxJD0xxyG9cCWx4JVak%2FBOsCZvqHYeWjO7FPDMUGDs4vpXwB6wT%2BQPlFGWYa%2FAdt6GaMByCP%2FI94xoVqhrt1qfAVEmUEp%2FXDrFL%2FplNGMuuPaDJJaBEkJBW84CxGqHQM5%2BzsSDHjvf%2BitS9lPI4UFnap9YUEjbLqzn17fi7%2F6xxAD32WOcFytsj572YGtBjBfK64NT4itpSd%2B89Koj5XgC%2FICVbKhQT7ZQBXagUPFfGOe8cNzv4cYvNfRxfAb4Eg%2FB4duhMvz4aQeeNbzMOdKtesgeBazWctsJ6M8AMcSqtNN1i5%2FIKFFm7xPc1FOydtpHGaMLbpy70GOqUBojnfYuVp43jI2WRo2y3S5%2FaQqo%2F43uZMLARANn27nvMTvkrKx5yNCZlgEvHM7vk9KQ8616KhEioBopoMax4QbVgHDECy1Hssnd9OuD%2BiTHjaEnKixXax9iAxnyAQvdLbw6pRQbL%2Bw0AEn1g7PWJR66Z7OYkCoMNmQ5Mr9M67WVceIfjrsWHhQbt3HW0VcPg7nc5KWuGyCdSDIyBQD2FTnk0Q5GTw&X-Amz-Signature=94eb1847c97e8063f9033bd1391c4ad4816abbdca3caebe840ba89dd35c91c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
