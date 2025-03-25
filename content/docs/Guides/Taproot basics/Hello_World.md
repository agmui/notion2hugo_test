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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX2N4YU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FGcJFezaNinwpbHhb2b0GO818EV7pIgblPwlTJWmHAIhAMkN%2BYjZIzKCRUv8yEnfW%2Fhomi4U6Rc7ataILu0mTtyKKv8DCBIQABoMNjM3NDIzMTgzODA1Igwi63L1WXmIvWLh6RMq3AOy2yECtmWRxfnn8ugI2mryRfZwKlijrverG%2BNi5Qa%2FZnpP0LUSw0gRHsGYTEvIUZtJHOKSD38bRw%2F7gjA5iNsZpr%2BctEi1hf6sjsEM7JXTwAbhI%2FkrB59wkTH8SITk3lC1JqvPK2E%2Bv7A3yw4TqKswwtU%2Fx31DVveg8BfCPr45ygQtdGa2BDkau17xX%2FCmz2tQgXPIWyn4nP9NXdvVpvElQoc9hPYLZ5SvqH%2Ft4r0qrjGU5N%2Bf35rC8kxtz1eyZYBLZra4q8svNXvSvNw12md%2F2HIORhk2ui6ivJQLHF7fhqDhZ9D2rxT6ptgC7ueaRphqEmjhDH2jAlWWv7g5Gv7DnuwqF0gV69kHWklgGLWXjVDDZI0x2opjOIHWXBLVj5wHsEFZPAbgm5DxEKJbY%2F586jG30O2C%2FRG1rzh4e%2FQhQKQp1VyOdRe5V0acruRw9fdy%2Bfu23VUyJ0MXB15t3%2BX%2FTD70O6F8IDnhmNZXI6aV%2BpBrVz6mPLOLRSKu2KsKl7TaFtZMORisbqhWexR455pBkqTrEqaP3L5pQyEMcU7xJtdC%2Fijp6X9ZZ9jO621oJX2i24ExdTlvqmXBO7jJgoorLcwod%2BANNE9JonViaJZYAoDF5ZnnVd540X2yYzCJ7Im%2FBjqkAW8uChhyAkP13j7JFUYkEqKGI4Rbctv%2Bpg%2FbAErv3HY6p416%2BJRcnZyNQo29SxbEBvk7iZY1WHSegdWaF%2B0yFQWaeDPVddXbr0IsxoxKo4NYJHXbxg3QQ%2FBFfUQRjXdmxP7Yf6uR6A7nPMwwBE5ngXqMo2ewuNFyNiOnHZaYpsDQQcQx3WqpEzKb2TECStp5U3eoH95wUsL%2F9FlCMb8mXOttLthc&X-Amz-Signature=1a2a53ad65c66a3e00b2bdf3fabf35c1040e49133faf027b83edbb3fb51f65f5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX2N4YU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2FGcJFezaNinwpbHhb2b0GO818EV7pIgblPwlTJWmHAIhAMkN%2BYjZIzKCRUv8yEnfW%2Fhomi4U6Rc7ataILu0mTtyKKv8DCBIQABoMNjM3NDIzMTgzODA1Igwi63L1WXmIvWLh6RMq3AOy2yECtmWRxfnn8ugI2mryRfZwKlijrverG%2BNi5Qa%2FZnpP0LUSw0gRHsGYTEvIUZtJHOKSD38bRw%2F7gjA5iNsZpr%2BctEi1hf6sjsEM7JXTwAbhI%2FkrB59wkTH8SITk3lC1JqvPK2E%2Bv7A3yw4TqKswwtU%2Fx31DVveg8BfCPr45ygQtdGa2BDkau17xX%2FCmz2tQgXPIWyn4nP9NXdvVpvElQoc9hPYLZ5SvqH%2Ft4r0qrjGU5N%2Bf35rC8kxtz1eyZYBLZra4q8svNXvSvNw12md%2F2HIORhk2ui6ivJQLHF7fhqDhZ9D2rxT6ptgC7ueaRphqEmjhDH2jAlWWv7g5Gv7DnuwqF0gV69kHWklgGLWXjVDDZI0x2opjOIHWXBLVj5wHsEFZPAbgm5DxEKJbY%2F586jG30O2C%2FRG1rzh4e%2FQhQKQp1VyOdRe5V0acruRw9fdy%2Bfu23VUyJ0MXB15t3%2BX%2FTD70O6F8IDnhmNZXI6aV%2BpBrVz6mPLOLRSKu2KsKl7TaFtZMORisbqhWexR455pBkqTrEqaP3L5pQyEMcU7xJtdC%2Fijp6X9ZZ9jO621oJX2i24ExdTlvqmXBO7jJgoorLcwod%2BANNE9JonViaJZYAoDF5ZnnVd540X2yYzCJ7Im%2FBjqkAW8uChhyAkP13j7JFUYkEqKGI4Rbctv%2Bpg%2FbAErv3HY6p416%2BJRcnZyNQo29SxbEBvk7iZY1WHSegdWaF%2B0yFQWaeDPVddXbr0IsxoxKo4NYJHXbxg3QQ%2FBFfUQRjXdmxP7Yf6uR6A7nPMwwBE5ngXqMo2ewuNFyNiOnHZaYpsDQQcQx3WqpEzKb2TECStp5U3eoH95wUsL%2F9FlCMb8mXOttLthc&X-Amz-Signature=ee0abb7c7456ea3df4b91a6b2a4fa155a1f997dc2eef4cd0f4423e830cfb3b39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
