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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRA6MIY3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAf4axqaDDkDPFoiAaKaeqOcebjqvj4DdzOgOTEgKfArAiEAtr%2FzBH7oDw1U5IuRuPdLlpFQEvwiS62xtud96TT1taoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdRq1KP8QcKFgpqKCrcA1E9663gwKujTmSng3sXtAeYkSWEnxU2dI1wPT2bCgmYx%2FcZkEMLE1%2Bgfn3ZgM20m8hIMFDdKZebIAs4xg20YuSShkbxC63wQq5r4oW0xStzo7tP06xJdyEBPfYqB5nqQlTWsq20SXj%2BWW7ntw9XxVsNzrD1sOy0zFp%2B%2BLgHDKDV4KK2DAa1uCKaeIU5cuDtH3OiYMS6qGHTwQyUKh3PtpI6mPFOV9ym4z6yBxbadA%2Bg5dlfXclxtnpYnfI%2BpinCCxwRUyQHYthb7%2FWtwRO3%2FTQTlYeYE%2BpNWqtYB5mIKT74bFLdzYnDez0TYyHabkN1QLEbV9ncXplvTGouVtaNh78YrTan2uhNFQhflX2dDuPRCQk3hj%2BejYEhrpx7Q%2B2b7DB9z4ZSyDw6u%2BqtijnosRIo0N8qAOUkgog3r%2Fr5BVtZ0NxErDwUVGstuawtFI66megTdM5mgx0FHpGKiDnqd4BDvNN1jfSIl4KtSKiUZu572qxGRKJu2fddReGe4ZumYHT%2FPUgG5XSd7q%2FzHrqa9bzaBc6Av54qraBWFTQq1JUQIwrhVq6dn2BHiveLaN%2BoSfHREgujPCzW1UNRt0%2B1C3%2FT3TJZZAYs%2B0wH8BKjRCoQUJtWMD0zl%2FEFfE%2ByMOjE28QGOqUB%2FC4jnO9%2BrCOx9CUwbx0TvXW57%2BhWD%2BX0CQvLa1q%2FXO4GCJHmvsPdCM8OSaQ42ruXfquc8FQJfnezZIAxljP5mEKHckdwCVoMlbVkr%2F1rJEng13ddZRKbKZnHyS%2Bos3QDAGoew4aAoyL75SGdg0DLqURWAkaXNYXg2F4KuGaMH3x9QP%2BsU1L3N8z6XFJbMa2cCIekwknhsgRiPgbtl4CJ7JRFsoLk&X-Amz-Signature=ba8d9d31cddc9921fe731bfa5f1243730395216103776f533adf9875d6642aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRA6MIY3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAf4axqaDDkDPFoiAaKaeqOcebjqvj4DdzOgOTEgKfArAiEAtr%2FzBH7oDw1U5IuRuPdLlpFQEvwiS62xtud96TT1taoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdRq1KP8QcKFgpqKCrcA1E9663gwKujTmSng3sXtAeYkSWEnxU2dI1wPT2bCgmYx%2FcZkEMLE1%2Bgfn3ZgM20m8hIMFDdKZebIAs4xg20YuSShkbxC63wQq5r4oW0xStzo7tP06xJdyEBPfYqB5nqQlTWsq20SXj%2BWW7ntw9XxVsNzrD1sOy0zFp%2B%2BLgHDKDV4KK2DAa1uCKaeIU5cuDtH3OiYMS6qGHTwQyUKh3PtpI6mPFOV9ym4z6yBxbadA%2Bg5dlfXclxtnpYnfI%2BpinCCxwRUyQHYthb7%2FWtwRO3%2FTQTlYeYE%2BpNWqtYB5mIKT74bFLdzYnDez0TYyHabkN1QLEbV9ncXplvTGouVtaNh78YrTan2uhNFQhflX2dDuPRCQk3hj%2BejYEhrpx7Q%2B2b7DB9z4ZSyDw6u%2BqtijnosRIo0N8qAOUkgog3r%2Fr5BVtZ0NxErDwUVGstuawtFI66megTdM5mgx0FHpGKiDnqd4BDvNN1jfSIl4KtSKiUZu572qxGRKJu2fddReGe4ZumYHT%2FPUgG5XSd7q%2FzHrqa9bzaBc6Av54qraBWFTQq1JUQIwrhVq6dn2BHiveLaN%2BoSfHREgujPCzW1UNRt0%2B1C3%2FT3TJZZAYs%2B0wH8BKjRCoQUJtWMD0zl%2FEFfE%2ByMOjE28QGOqUB%2FC4jnO9%2BrCOx9CUwbx0TvXW57%2BhWD%2BX0CQvLa1q%2FXO4GCJHmvsPdCM8OSaQ42ruXfquc8FQJfnezZIAxljP5mEKHckdwCVoMlbVkr%2F1rJEng13ddZRKbKZnHyS%2Bos3QDAGoew4aAoyL75SGdg0DLqURWAkaXNYXg2F4KuGaMH3x9QP%2BsU1L3N8z6XFJbMa2cCIekwknhsgRiPgbtl4CJ7JRFsoLk&X-Amz-Signature=829c94b8670f1226fcaa4f77fb5f82d08c074460ab0704e8ae768399ccd22080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
