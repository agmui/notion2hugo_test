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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQQ4JGI%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDd9P0aNnkIb4kKdPmtwL%2BHpS7UeGlJmXPjY84PTvRKnwIhANo1bSuS6GHkA7ObXJV7ZgPPkBDOHGDkFQEqu0Wr0BXPKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjcQM9yUegkapArDEq3AO998UGwrjswztrG2l%2Fx2Rg6ZbmNVQAUx1eG1p8b3c0jxQwU3RQdkW3b4lQHn75V2U57t%2BDNZvVD6z3iNikrCTFKv%2B9ErOxRmfzSDYJobuPg4dc5Z9oITJM%2F9jhSSAMZx1uGHRGw7nEqY%2Bl69JFsfH4FDTZL1q7BUgb5rC%2FBDSQCYs6rchcrR%2BiErtBajkLTgNEi%2BkAFxZeh1Tr8MgBcsXVEGuXKkoTGwIaUDLfiFXvWT3Q71OptoEmAXR3usPp1V1axiZzqfGy7j%2FU4ykRJm%2BApQnpWoRkLX0fyknM8CcR6Rst53gxyEFocW0ytMZfk3P23vYdlhEuB4VpCaFGf8IMXTRXlYzZu7FAzrD5ExRb4sTTR8Sb2kjR3NxpE7ygF%2FZrDwWRbxdwYE%2BQvtJ3MwZHLXqmZivWgfsoYRQrA9sXO2dwq2qQTvVrbpOhnyZuqoi7cvpX%2FLXnkjxPu6JFjOrAcJ%2FZWhbIwIZBs2mbhnLuz0ktMXK%2Fw2uXFNoHJEgz9WDwUU96aNsb6%2BWmqK5aFDk3Q5By4AxSa5UjVuK8Kgy9uArbgK9bRuppJSaqroaHNOuXYq32NgTJZBVIc%2BkTvrFitEqJL9yPFt%2Fx4dAFdsbU2%2BkCfTKbNEm2PdZtADC60rTMBjqkAY0Uyx1LMayLwZcRi2EUz%2Bbdmix2Gg%2Be9Gdz1rjrcxMU3Jxik%2B3%2BKY05Di2vhCnuQabV37%2FfXivm6vkpxFJO8Io0AKu6av3zU%2FHCLGLIQ0uvZVrff9FmOqlbE2aJxPWYkkXLPrNJWypX2ckN4jpFuFS3TerAw2EE3jER5S4yghbDeI%2BYWTcSsh9vEkjoBomtxt8bd1ongBJ6ienGt7xsN5Fe9dCp&X-Amz-Signature=98305c47593af714f6eb2c3259b23daf20dece69b18008ea100489d7b093d0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQQ4JGI%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDd9P0aNnkIb4kKdPmtwL%2BHpS7UeGlJmXPjY84PTvRKnwIhANo1bSuS6GHkA7ObXJV7ZgPPkBDOHGDkFQEqu0Wr0BXPKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjcQM9yUegkapArDEq3AO998UGwrjswztrG2l%2Fx2Rg6ZbmNVQAUx1eG1p8b3c0jxQwU3RQdkW3b4lQHn75V2U57t%2BDNZvVD6z3iNikrCTFKv%2B9ErOxRmfzSDYJobuPg4dc5Z9oITJM%2F9jhSSAMZx1uGHRGw7nEqY%2Bl69JFsfH4FDTZL1q7BUgb5rC%2FBDSQCYs6rchcrR%2BiErtBajkLTgNEi%2BkAFxZeh1Tr8MgBcsXVEGuXKkoTGwIaUDLfiFXvWT3Q71OptoEmAXR3usPp1V1axiZzqfGy7j%2FU4ykRJm%2BApQnpWoRkLX0fyknM8CcR6Rst53gxyEFocW0ytMZfk3P23vYdlhEuB4VpCaFGf8IMXTRXlYzZu7FAzrD5ExRb4sTTR8Sb2kjR3NxpE7ygF%2FZrDwWRbxdwYE%2BQvtJ3MwZHLXqmZivWgfsoYRQrA9sXO2dwq2qQTvVrbpOhnyZuqoi7cvpX%2FLXnkjxPu6JFjOrAcJ%2FZWhbIwIZBs2mbhnLuz0ktMXK%2Fw2uXFNoHJEgz9WDwUU96aNsb6%2BWmqK5aFDk3Q5By4AxSa5UjVuK8Kgy9uArbgK9bRuppJSaqroaHNOuXYq32NgTJZBVIc%2BkTvrFitEqJL9yPFt%2Fx4dAFdsbU2%2BkCfTKbNEm2PdZtADC60rTMBjqkAY0Uyx1LMayLwZcRi2EUz%2Bbdmix2Gg%2Be9Gdz1rjrcxMU3Jxik%2B3%2BKY05Di2vhCnuQabV37%2FfXivm6vkpxFJO8Io0AKu6av3zU%2FHCLGLIQ0uvZVrff9FmOqlbE2aJxPWYkkXLPrNJWypX2ckN4jpFuFS3TerAw2EE3jER5S4yghbDeI%2BYWTcSsh9vEkjoBomtxt8bd1ongBJ6ienGt7xsN5Fe9dCp&X-Amz-Signature=0b1c894580f1a735185914ed7096bca9d81923eba05c40ac09abb63d386aa37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
