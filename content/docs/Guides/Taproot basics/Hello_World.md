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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=f3cc6592cd7bc9a24f0c8d8fd52b581e13a579eccaf3cc54df3166b69ae9786e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=9377c712d7ea7bf1b00a6239abd4c4557c3be3ad4184aca01854fdffc23aac6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
