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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJYE5WP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BkKmLWjmbOTIN2WVG4OrEIfkf6BuYELaaSoJuq27PyQIgPBzWKlKaLIkmqcevrX%2FTkv9z8r3piyVqVTVDzdHXPscqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZQ1qL56K8%2FrrSbircA9pPFU0uu7JLb7UYCHwc0z%2FOn%2BZrJeU%2FxQEVvC%2FJxbXybUOuKbvKZ6HlPxhpaMC5udQgn1BJS1S6cyA7537RELJoCxOi7u7AwGTJ9N7g4%2Ba8heMcB7eu3LphG7ASnKjRK%2B%2FsMCe6MwURqWWKSGVMvGyDIaw8n2KCKe2tSi21lwl%2FgcUydZgiGf4FEq%2Bf8jAfnHANk0qeaCTKsR98gBCc47K8xw6VN22e%2FBfUpyqutdw2eGZpTZB43l6Qq4X85Y5vPyhcUPPiQHicSW7m4HhfvQd2WTDTUQCRnzmwmWOYzUBgb7YhdMDVu%2FA57SQkrMX8shvTgmtwinKX2tt8aHtW5v%2F4ssXAVtnStT5uZ%2B7d40EEY414cSOKG6%2BKhlpNCnLjrv%2BL8sDFGCotckWDrMQwqb3EgGN8mN850SILHpvkWFtvR5tSDCMLTFVrFf2n9swRi7SIlS5ExfSKZZ16gR5RlB6yhxAY%2Bl8t3rrRJp0UEt%2B4MFS%2FwK1S3OjC8VUAdRJnPYv0HcO4%2FqVtfBTacng2v3WvmZL5DrdCuj7WLJgy0PSOr1A26%2F4jdYqAVzP12Z12pnIInKE5XkOQ8QfS9QYS6bIsK51%2FJg1npoUsWz6FBstpQyjYBNSlEEST4bW9MNbHuL8GOqUBi8h0J19ZqDld3gs3Ed1Rlbm2re9s5ZuoaArgtWTP%2FvxpZte92RhfHNjhatqsLJfao%2B%2FTVX9yqoMkEWDeVMqpyHznxCw6MdXTVGz7QnGksmtMn0fKaPgGjbbcvvy7xdQv%2BWL%2Ba7c0U9oIcm22JMnZNlLt5XmknpwXcnHmeKxK7gZtUcPGEYgJwor4zO%2FVdwWLxXFUpG%2FTgVenrAhFptDx6OQklhnb&X-Amz-Signature=2c1e29513f97bbbbe3e958e7792f61e5e326c40e5a81c5f39f8c524b745ff287&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJYE5WP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD%2BkKmLWjmbOTIN2WVG4OrEIfkf6BuYELaaSoJuq27PyQIgPBzWKlKaLIkmqcevrX%2FTkv9z8r3piyVqVTVDzdHXPscqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZQ1qL56K8%2FrrSbircA9pPFU0uu7JLb7UYCHwc0z%2FOn%2BZrJeU%2FxQEVvC%2FJxbXybUOuKbvKZ6HlPxhpaMC5udQgn1BJS1S6cyA7537RELJoCxOi7u7AwGTJ9N7g4%2Ba8heMcB7eu3LphG7ASnKjRK%2B%2FsMCe6MwURqWWKSGVMvGyDIaw8n2KCKe2tSi21lwl%2FgcUydZgiGf4FEq%2Bf8jAfnHANk0qeaCTKsR98gBCc47K8xw6VN22e%2FBfUpyqutdw2eGZpTZB43l6Qq4X85Y5vPyhcUPPiQHicSW7m4HhfvQd2WTDTUQCRnzmwmWOYzUBgb7YhdMDVu%2FA57SQkrMX8shvTgmtwinKX2tt8aHtW5v%2F4ssXAVtnStT5uZ%2B7d40EEY414cSOKG6%2BKhlpNCnLjrv%2BL8sDFGCotckWDrMQwqb3EgGN8mN850SILHpvkWFtvR5tSDCMLTFVrFf2n9swRi7SIlS5ExfSKZZ16gR5RlB6yhxAY%2Bl8t3rrRJp0UEt%2B4MFS%2FwK1S3OjC8VUAdRJnPYv0HcO4%2FqVtfBTacng2v3WvmZL5DrdCuj7WLJgy0PSOr1A26%2F4jdYqAVzP12Z12pnIInKE5XkOQ8QfS9QYS6bIsK51%2FJg1npoUsWz6FBstpQyjYBNSlEEST4bW9MNbHuL8GOqUBi8h0J19ZqDld3gs3Ed1Rlbm2re9s5ZuoaArgtWTP%2FvxpZte92RhfHNjhatqsLJfao%2B%2FTVX9yqoMkEWDeVMqpyHznxCw6MdXTVGz7QnGksmtMn0fKaPgGjbbcvvy7xdQv%2BWL%2Ba7c0U9oIcm22JMnZNlLt5XmknpwXcnHmeKxK7gZtUcPGEYgJwor4zO%2FVdwWLxXFUpG%2FTgVenrAhFptDx6OQklhnb&X-Amz-Signature=6c7e7c5f66d1558c06bb52754cdaa5273edc774d37fa3883e5a8a5180a4ea170&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
