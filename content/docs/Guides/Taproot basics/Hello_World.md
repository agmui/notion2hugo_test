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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5MD4SCW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIDf5%2FY1HNaQ34rFX0G%2BeyaVwELROuBaWBxSYFgnXKwIhAIEpVNaKtRmmwc957Yamv3srmBdumLYANHFXHDs97sXAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPfQJIRJw0O%2BGidpAq3AMiD%2FxnUxMscJkiL4UPdARJcMQppxwscJkaFdw0On7KL%2F2%2FuuqURU6NTcgIh1Rqpu65ko69FoIq%2BJyJ7UscvkdRFaXyQr1Z%2BORFiaBU59yI%2BIKonQTzesUmLnfMWBCo5P3eA54ab3VJVqj7v4RrW%2FwgnP4mDgKN0ZbFQ%2B6pqj3x3HArtyazx54nacZH0dOSBmUiKGBtfQ3EJvqyuNlGt4wP6TfbTaSE8ZzVfWehRQCicL5F0%2FiheIDaZMjACxWu5QmDlxPqqG8xd%2BQUI8Fg9au9sjMIOSofbF%2FGeUAfGrEZLaHfHIpIc4pqMt4%2BBHtN%2FE9%2BBkCZ8SkCPhkTyg3p8KxGH3pEi7nkq2zZFwX3lg6EjTIG4dWR508ZUaZC41yQSQV5uLJP3xc%2B2BE4X6zcuAuHVGbUCw0ZC1UN3y5rU%2BcKUDn9vg%2Fb3WZXzJMduCYgP%2BuT%2Fjj5aNiYxPtFkSve%2F6Ok27H8Mov8X%2Bn%2FjSCm7d6u%2BQHHE60yQI6y%2FFXAZd1sk7syhi5eN9HZmkbDAd%2BmoSwnGh8gzi48gJST5AIOvnzDwhxhak%2BzIIedEBFkYgHhWA0JJTBnHzdBnOerJn%2BG3Y5KMNM3tp1KjWEJSUVURln6b0YnYYeo79obAwW1FjCalpzCBjqkAXV5FCYoU0afR%2BxKygmZVrHPQWRbHUOWjJkznOTTUpZDYKhGb2g31uH%2B0by%2FWpQLTlXLdKcsA6zISlAltcgcMR2oU60d0AkJFcKu4sK0QI6WP6GdOLf9ik8HPwZcsuMtrfgEOkECcUvVaD37IKKvAVKit78Tj4s%2FdrOT67AnIedMdjJzEGcrXr8VigovAUnHjImcb2sIF8RUnNrSzqINaL5%2BeQr2&X-Amz-Signature=02e427b43245bbbda927a7ce1663d39375659db9fe35013bef377895b15316ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5MD4SCW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIDf5%2FY1HNaQ34rFX0G%2BeyaVwELROuBaWBxSYFgnXKwIhAIEpVNaKtRmmwc957Yamv3srmBdumLYANHFXHDs97sXAKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPfQJIRJw0O%2BGidpAq3AMiD%2FxnUxMscJkiL4UPdARJcMQppxwscJkaFdw0On7KL%2F2%2FuuqURU6NTcgIh1Rqpu65ko69FoIq%2BJyJ7UscvkdRFaXyQr1Z%2BORFiaBU59yI%2BIKonQTzesUmLnfMWBCo5P3eA54ab3VJVqj7v4RrW%2FwgnP4mDgKN0ZbFQ%2B6pqj3x3HArtyazx54nacZH0dOSBmUiKGBtfQ3EJvqyuNlGt4wP6TfbTaSE8ZzVfWehRQCicL5F0%2FiheIDaZMjACxWu5QmDlxPqqG8xd%2BQUI8Fg9au9sjMIOSofbF%2FGeUAfGrEZLaHfHIpIc4pqMt4%2BBHtN%2FE9%2BBkCZ8SkCPhkTyg3p8KxGH3pEi7nkq2zZFwX3lg6EjTIG4dWR508ZUaZC41yQSQV5uLJP3xc%2B2BE4X6zcuAuHVGbUCw0ZC1UN3y5rU%2BcKUDn9vg%2Fb3WZXzJMduCYgP%2BuT%2Fjj5aNiYxPtFkSve%2F6Ok27H8Mov8X%2Bn%2FjSCm7d6u%2BQHHE60yQI6y%2FFXAZd1sk7syhi5eN9HZmkbDAd%2BmoSwnGh8gzi48gJST5AIOvnzDwhxhak%2BzIIedEBFkYgHhWA0JJTBnHzdBnOerJn%2BG3Y5KMNM3tp1KjWEJSUVURln6b0YnYYeo79obAwW1FjCalpzCBjqkAXV5FCYoU0afR%2BxKygmZVrHPQWRbHUOWjJkznOTTUpZDYKhGb2g31uH%2B0by%2FWpQLTlXLdKcsA6zISlAltcgcMR2oU60d0AkJFcKu4sK0QI6WP6GdOLf9ik8HPwZcsuMtrfgEOkECcUvVaD37IKKvAVKit78Tj4s%2FdrOT67AnIedMdjJzEGcrXr8VigovAUnHjImcb2sIF8RUnNrSzqINaL5%2BeQr2&X-Amz-Signature=f8ce1b6a3ea412754fc503a4a25165d49bcb369997e852daa2d5168a5af39f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
