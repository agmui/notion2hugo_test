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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4N2UA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeS1Psy0q2vQxiU5zVqOMSeAY3V3CuESfLWPiu4k0QQAiA8q7ny63OmCuq7YptCmOTHr2I7KYSjxuxoEH8E5%2B%2BsYCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMj2rU5z3VtHdst2vrKtwDdql1JM%2Bk7T20ExHN3m7hiznLNTKKiTsp9FQz0wWd92zgI6wHcdAvH7wE5LKF8%2BqJyC%2BCU7WywBHvewOPVAJkNdefxKvwaJvRjUYShfLXjN8BGPGFRr71TuFmgR1IDGatj5d2qQ7exBeG9jeMX3a0wNW0yYhjwcE%2BmhQVDe9NRqkOB1NKT6lYJvp6EzRIvUDyzHGQ1%2F84gRVEb7XEI9eBxZ3D2mG7JLD0ReN9tyXhuFj5dQ84ELJRtS4SNQcrvr5VmQtdX1lxxS8PXzXuL81Aeh%2FLWzWBeqeCdOa3GfyK2ZqlrVcOHoZWrMdzopTc32cWjYntGAXxkYYIMhM0nfv4zkSPJOWQFyqdGPgIG9aUG3RAyMzYNcP9yTcvQzRp3LsifOwtf53FnflRgAxZShWILnclFr3nm%2F12PgFh31ePT1NmG%2BNjv7hNePL1FvrbQ4wyMeYhSd0O3uYmaWR4Ny5mV9UsXr29LrjmmVQva7yb9ZtNdwxRZzoTFhsggFIOk1skEDmd%2F9msfGJaJzT%2B4RjOCzDSFjtes7aeC2r9ZGWv1vR4ZgRmHc2HGwmcVKeAXfgf9wkNbA62Yd4OFV%2Fv84sVtEMao6hjkMp1dQ2H9UPdrCRN8CK5XcxtAL4YWHwwmdKavwY6pgHweRvaGh8M4nIST5FiGL%2F9pfyulGM5xL9%2FI5QbiE1ja5eSA9cgRAQ3ynKuNFtNdPX3FPb%2Bw1Gpfj258%2Fvktx1cIKJJfqr5DdQ9av4bOb0RQLbmw0q6IB3bwomRNXzYhRf%2BS6sYZjYQPzR0jlUQZfA08ZvskE4i26OjNu4INC%2Fzku91UiEsXeBSSOOJu4B05wT1FGr9KE0TEKqRYfwQd8INKQnd033s&X-Amz-Signature=d4af38fe0dd752925903878b2dbbaa4bdc6653f9054efe4217b2d6b5a4c5db05&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YN4N2UA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeS1Psy0q2vQxiU5zVqOMSeAY3V3CuESfLWPiu4k0QQAiA8q7ny63OmCuq7YptCmOTHr2I7KYSjxuxoEH8E5%2B%2BsYCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMj2rU5z3VtHdst2vrKtwDdql1JM%2Bk7T20ExHN3m7hiznLNTKKiTsp9FQz0wWd92zgI6wHcdAvH7wE5LKF8%2BqJyC%2BCU7WywBHvewOPVAJkNdefxKvwaJvRjUYShfLXjN8BGPGFRr71TuFmgR1IDGatj5d2qQ7exBeG9jeMX3a0wNW0yYhjwcE%2BmhQVDe9NRqkOB1NKT6lYJvp6EzRIvUDyzHGQ1%2F84gRVEb7XEI9eBxZ3D2mG7JLD0ReN9tyXhuFj5dQ84ELJRtS4SNQcrvr5VmQtdX1lxxS8PXzXuL81Aeh%2FLWzWBeqeCdOa3GfyK2ZqlrVcOHoZWrMdzopTc32cWjYntGAXxkYYIMhM0nfv4zkSPJOWQFyqdGPgIG9aUG3RAyMzYNcP9yTcvQzRp3LsifOwtf53FnflRgAxZShWILnclFr3nm%2F12PgFh31ePT1NmG%2BNjv7hNePL1FvrbQ4wyMeYhSd0O3uYmaWR4Ny5mV9UsXr29LrjmmVQva7yb9ZtNdwxRZzoTFhsggFIOk1skEDmd%2F9msfGJaJzT%2B4RjOCzDSFjtes7aeC2r9ZGWv1vR4ZgRmHc2HGwmcVKeAXfgf9wkNbA62Yd4OFV%2Fv84sVtEMao6hjkMp1dQ2H9UPdrCRN8CK5XcxtAL4YWHwwmdKavwY6pgHweRvaGh8M4nIST5FiGL%2F9pfyulGM5xL9%2FI5QbiE1ja5eSA9cgRAQ3ynKuNFtNdPX3FPb%2Bw1Gpfj258%2Fvktx1cIKJJfqr5DdQ9av4bOb0RQLbmw0q6IB3bwomRNXzYhRf%2BS6sYZjYQPzR0jlUQZfA08ZvskE4i26OjNu4INC%2Fzku91UiEsXeBSSOOJu4B05wT1FGr9KE0TEKqRYfwQd8INKQnd033s&X-Amz-Signature=b9312e21891c82ce4dc3f3fdd2b4d1ce89d6ae49678f24d0d7c0da300819e496&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
