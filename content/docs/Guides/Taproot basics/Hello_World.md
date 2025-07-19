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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX2KSSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZcyYS575dS9zHnI2KYyxxqjBx%2B1JLm76HXkVv0xqqEgIhAMHvJux22PCUMvpL6iSvd3OSARtayMq11itunCIgcI9gKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoN6DIxYO%2BbXxNcZAq3ANIbenz3w0TwDq5hAoM1F1Val7d12yDF6fswkeoVCP345ng2iZG3oK0urUzLTmrps3qKTT4zj9z3mh%2BVuDr3gaFHDkFqY189zQOR05RcL4cwtJNHzNG%2B8RR%2BJ6mvk49bCkuAgsMf32iYVGyv06WUrOIqHRXpH0wBGAHp1O%2F7kK9Xm64xlGzoVUGDt1uvJiS7HB%2FdUBQi3v47H3m9GlU6AUgH4vLWklo5dtjDtbgOi6fbhgf5Q26FP9hhGVf1YpQlY3tJDIELyNjfq0I24EMLvF5ojrV%2B4ra0FJfNHOU1qBLDSBrpYCmYbfcO0pvH0EXtiFMjL6IwHq35nR%2F3jfkb2E%2BtNiQcXAJ3m0b6tgTOUnX3d4hQNgi3%2Bx7eeFxvl%2BcFdmSYtov5QTyHiq%2BN3GrTS6DYNd0Iw6jGFZLW2QyCg0Tjg9rcqg2uOKG3%2Bj7bwNHG2mvurFQhAnXJ46lr4QxctEa1FkMUVicYRMollymRLpDFuYfL17cXc4Oa4VliaBd5AQdGvgPCwvrYqsByfQOO%2F0NCHfxzxmvJBp%2FxXs5CSt9338Z47pPMohpewqRx8gXP%2FEVLRGLMoR19F9mJmWI0BBM%2F0rYZ8ZDSKeteStLvnraqwX5op1dBdLTgJ81YjCNuO7DBjqkAcP8MP%2FmC5hMnCpvDaOnNau9mR2Lj0iTrrt%2BEW6Bo6CdLW0eCcTzcdUw9uVj8t%2Bp85FPgRBir9TN0HnP5DC5FNjlNwri2hc8VkuWrjRzoz%2B0P%2FKcdkjtA7Kpivy%2FnoIFktL1vEQmtZJZtiJ5kdCOiHjykfqjbR%2FXLjlgvBmCR1UPsXtwH53AxSXiIonOyKLC31muYbWqUteZHf%2BOiJTOsOPq48OZ&X-Amz-Signature=68195a93dfcda74667e1518c428d4160c5fce11b87f882ec7f3b8cd1e01f7bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX2KSSZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZcyYS575dS9zHnI2KYyxxqjBx%2B1JLm76HXkVv0xqqEgIhAMHvJux22PCUMvpL6iSvd3OSARtayMq11itunCIgcI9gKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoN6DIxYO%2BbXxNcZAq3ANIbenz3w0TwDq5hAoM1F1Val7d12yDF6fswkeoVCP345ng2iZG3oK0urUzLTmrps3qKTT4zj9z3mh%2BVuDr3gaFHDkFqY189zQOR05RcL4cwtJNHzNG%2B8RR%2BJ6mvk49bCkuAgsMf32iYVGyv06WUrOIqHRXpH0wBGAHp1O%2F7kK9Xm64xlGzoVUGDt1uvJiS7HB%2FdUBQi3v47H3m9GlU6AUgH4vLWklo5dtjDtbgOi6fbhgf5Q26FP9hhGVf1YpQlY3tJDIELyNjfq0I24EMLvF5ojrV%2B4ra0FJfNHOU1qBLDSBrpYCmYbfcO0pvH0EXtiFMjL6IwHq35nR%2F3jfkb2E%2BtNiQcXAJ3m0b6tgTOUnX3d4hQNgi3%2Bx7eeFxvl%2BcFdmSYtov5QTyHiq%2BN3GrTS6DYNd0Iw6jGFZLW2QyCg0Tjg9rcqg2uOKG3%2Bj7bwNHG2mvurFQhAnXJ46lr4QxctEa1FkMUVicYRMollymRLpDFuYfL17cXc4Oa4VliaBd5AQdGvgPCwvrYqsByfQOO%2F0NCHfxzxmvJBp%2FxXs5CSt9338Z47pPMohpewqRx8gXP%2FEVLRGLMoR19F9mJmWI0BBM%2F0rYZ8ZDSKeteStLvnraqwX5op1dBdLTgJ81YjCNuO7DBjqkAcP8MP%2FmC5hMnCpvDaOnNau9mR2Lj0iTrrt%2BEW6Bo6CdLW0eCcTzcdUw9uVj8t%2Bp85FPgRBir9TN0HnP5DC5FNjlNwri2hc8VkuWrjRzoz%2B0P%2FKcdkjtA7Kpivy%2FnoIFktL1vEQmtZJZtiJ5kdCOiHjykfqjbR%2FXLjlgvBmCR1UPsXtwH53AxSXiIonOyKLC31muYbWqUteZHf%2BOiJTOsOPq48OZ&X-Amz-Signature=11491eb0496dc50a740dfa9765cbc3baec1081e12b4ae2d61975a12392cc1b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
