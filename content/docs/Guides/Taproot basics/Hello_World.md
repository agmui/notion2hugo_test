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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAA6VOJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsqQB7vttZ4MCZHg0r2%2FFzUhb%2Fmata47kqKfCXKnoMbgIgT6ILbjllrFJY3fq1t4VaNz79R523bsBcqNOqq6JN%2FcAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAW%2FNVoePGsHB1tzSircA8TIFkgmiqR4yc1%2B2DRazxNO4Rn9bcCkk%2BaAdwIjIUB46C36UB0u3kl7G62AXqfw0Vf8xh10elpHFi1i32Yp93QSSNE%2BByKfSMYECX6K1fAav8zShm1Qc1Uop1FlY%2B4cC%2Bg00doJJZWYMbHgQNQ%2BWpLY%2BCPE0h5JsR%2Fd83Oz8%2FXov93xR0lrAXFQTPheH%2BfFZmn8TIhIp9j76j7W92652pCAYUawczsfNFKqFUpvNJ3zMh8UwbyHQTKaE0xuzuhy4j0JDcPv6kqYwRMdyM%2FB8eWyPwap7pvXtfhPEFgkG5YHYw7xF2MeZkEeOq4X3rK77mrZOM7563SXvf%2FV1luVs3jrubDhpmmtGLhJh4ALpKMvxalAI1L1pEeVVzD2sl5xdK6Pr3r6TnadKN2ryFelzIkg0R5vFJ4WcWSDlcCU%2FFzRDKMcHVz9PJmsib5Bo2MHCRhBB7jn75%2B5Iv%2FRwSI11ls7SFZNSK0LpgvCn5ZHxmw%2FXss595yxPjy2tmNjLJ1v5ouO5Hmlv%2BwwXZ4qQ0hVKbYx9Z9vkK%2B88o6kBRsaJU9NYZgRBWA7Prrh2mWtkMiFgGIp9FNbWFBlCbI7nx0Yn1a1ZR0%2FWvcRH84tzBgYEvEsye4ZB97MINUuBYEKMPfepsEGOqUBT69fbd5vlD415W2wO3VMC0Ob8JjYqGYEZ63M9kbZW19u%2FaZz%2BTfvmvfKHfHfHWwYHKyB%2F4LugZe9YDbY1CBR7shY3CEVx4onrQO5Ur0Pk7UGcaSlhCiG%2FlybFVe%2BVqBcGqCL2TrfuAOqXzGYeC%2FVL4jakagwNe71WMsFfBiJC2aIIIqiwaToxjwtEyEDZtbrSmApMzdfpaqINZ%2B3zT50vATSlklo&X-Amz-Signature=9307feb544ad4851fadcb2c56ec706e5adb7a43397ead4f12c4704f7bb92d8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAA6VOJ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsqQB7vttZ4MCZHg0r2%2FFzUhb%2Fmata47kqKfCXKnoMbgIgT6ILbjllrFJY3fq1t4VaNz79R523bsBcqNOqq6JN%2FcAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAW%2FNVoePGsHB1tzSircA8TIFkgmiqR4yc1%2B2DRazxNO4Rn9bcCkk%2BaAdwIjIUB46C36UB0u3kl7G62AXqfw0Vf8xh10elpHFi1i32Yp93QSSNE%2BByKfSMYECX6K1fAav8zShm1Qc1Uop1FlY%2B4cC%2Bg00doJJZWYMbHgQNQ%2BWpLY%2BCPE0h5JsR%2Fd83Oz8%2FXov93xR0lrAXFQTPheH%2BfFZmn8TIhIp9j76j7W92652pCAYUawczsfNFKqFUpvNJ3zMh8UwbyHQTKaE0xuzuhy4j0JDcPv6kqYwRMdyM%2FB8eWyPwap7pvXtfhPEFgkG5YHYw7xF2MeZkEeOq4X3rK77mrZOM7563SXvf%2FV1luVs3jrubDhpmmtGLhJh4ALpKMvxalAI1L1pEeVVzD2sl5xdK6Pr3r6TnadKN2ryFelzIkg0R5vFJ4WcWSDlcCU%2FFzRDKMcHVz9PJmsib5Bo2MHCRhBB7jn75%2B5Iv%2FRwSI11ls7SFZNSK0LpgvCn5ZHxmw%2FXss595yxPjy2tmNjLJ1v5ouO5Hmlv%2BwwXZ4qQ0hVKbYx9Z9vkK%2B88o6kBRsaJU9NYZgRBWA7Prrh2mWtkMiFgGIp9FNbWFBlCbI7nx0Yn1a1ZR0%2FWvcRH84tzBgYEvEsye4ZB97MINUuBYEKMPfepsEGOqUBT69fbd5vlD415W2wO3VMC0Ob8JjYqGYEZ63M9kbZW19u%2FaZz%2BTfvmvfKHfHfHWwYHKyB%2F4LugZe9YDbY1CBR7shY3CEVx4onrQO5Ur0Pk7UGcaSlhCiG%2FlybFVe%2BVqBcGqCL2TrfuAOqXzGYeC%2FVL4jakagwNe71WMsFfBiJC2aIIIqiwaToxjwtEyEDZtbrSmApMzdfpaqINZ%2B3zT50vATSlklo&X-Amz-Signature=5a21787e661a15964b84eec56c6628f4e0189afee96f35ccddf47fb70661cffc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
