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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOZW5W%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCDQXFNtgbcBvF55R13GJmEzFKacF74OJBJbDE8W%2FLQZAIgK0PD1p3ItYasXy3Jxw1YJJuDcMmJoLD18TQFg2EMJyAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHm1HT2BXKGPZ3OgNCrcA4J5V0zcV3m0NS31YfBlaiBWdX7DGXqQ2XneUmqUlI7XQNgdTpQslU0w75LhnQ2sr1r2kmyobQufZ3vUGMTQuiItlGU0V7SaP%2Bswf9hXQkoCk7HVgyt0uYwBMPLWVkSFiIKXymwBroqTnpdVuBWG6dpTSryOdzb8cNBevPtZdO%2FCAL5SodJvPxlcqP%2B%2Fd0va8LwvLbW%2FgowjqehTziK7ezEPzoxd7tUDt0k88s%2FfClKovLR67iGzg4fZ6uA99nK8eznjo417ewxS1QpiSNtf%2FVxQSnEZ7q8gelwFqNdy%2BAj5uh5x0Dc7ldmby9n8ahsY%2FbZukDzQP9oUIH7c2IGj1ox1eylehOPEDmGohP6HhQrhZ0SQA%2FWnWocnJQeuiOz%2FFM5JY9%2FKnryYZSdbboHL8BtS13Ow2jseyNn%2FzkaZbInNlqYoTDjfKNVyFt4zdEEwp%2BcgztFTEOfOdNK4ot8Fp%2FX8Sq0jHzrCtvvaZ1YS%2BJDxXXeVoZGaF%2FhU0B8mIBbrINky%2FW2S9kVFJ3AD7dtlTSJfePQbxtjDd3IjNdXDWgonsW31g8NXvxgANlA9a73%2FLcHL4kJGRCDIZiOoaERWK4PvRZ6xGdGQN7ls684Xk5jk3OaSFf3RdI3OcJ1zMMOTh70GOqUB3Yf58%2B8qawboZoi2hPRY9Ia6KbbmZqK4wThMBpVPl9Jk0a%2FZjNqkFHwDzsam2YRAd43NGZXf76QJhiOellDacJ7ITY%2FIEvxqbTVTBnYRaq7%2FfhEWLGe%2BPXbSGhF20yM%2F6c%2F3R3eSaQOni7YDva%2FINm%2FWt6eISVKtUpjVlrTyuZeGAjgkw3sbOkUQGOFtSdNM%2BHJX4cCD3R%2FS6w7P8vY%2FTdyidJo2&X-Amz-Signature=3a5a3de4e64457e525e750d01c351e6b2f891f65554f3b6c48c74be546bfa8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDOZW5W%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCDQXFNtgbcBvF55R13GJmEzFKacF74OJBJbDE8W%2FLQZAIgK0PD1p3ItYasXy3Jxw1YJJuDcMmJoLD18TQFg2EMJyAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHm1HT2BXKGPZ3OgNCrcA4J5V0zcV3m0NS31YfBlaiBWdX7DGXqQ2XneUmqUlI7XQNgdTpQslU0w75LhnQ2sr1r2kmyobQufZ3vUGMTQuiItlGU0V7SaP%2Bswf9hXQkoCk7HVgyt0uYwBMPLWVkSFiIKXymwBroqTnpdVuBWG6dpTSryOdzb8cNBevPtZdO%2FCAL5SodJvPxlcqP%2B%2Fd0va8LwvLbW%2FgowjqehTziK7ezEPzoxd7tUDt0k88s%2FfClKovLR67iGzg4fZ6uA99nK8eznjo417ewxS1QpiSNtf%2FVxQSnEZ7q8gelwFqNdy%2BAj5uh5x0Dc7ldmby9n8ahsY%2FbZukDzQP9oUIH7c2IGj1ox1eylehOPEDmGohP6HhQrhZ0SQA%2FWnWocnJQeuiOz%2FFM5JY9%2FKnryYZSdbboHL8BtS13Ow2jseyNn%2FzkaZbInNlqYoTDjfKNVyFt4zdEEwp%2BcgztFTEOfOdNK4ot8Fp%2FX8Sq0jHzrCtvvaZ1YS%2BJDxXXeVoZGaF%2FhU0B8mIBbrINky%2FW2S9kVFJ3AD7dtlTSJfePQbxtjDd3IjNdXDWgonsW31g8NXvxgANlA9a73%2FLcHL4kJGRCDIZiOoaERWK4PvRZ6xGdGQN7ls684Xk5jk3OaSFf3RdI3OcJ1zMMOTh70GOqUB3Yf58%2B8qawboZoi2hPRY9Ia6KbbmZqK4wThMBpVPl9Jk0a%2FZjNqkFHwDzsam2YRAd43NGZXf76QJhiOellDacJ7ITY%2FIEvxqbTVTBnYRaq7%2FfhEWLGe%2BPXbSGhF20yM%2F6c%2F3R3eSaQOni7YDva%2FINm%2FWt6eISVKtUpjVlrTyuZeGAjgkw3sbOkUQGOFtSdNM%2BHJX4cCD3R%2FS6w7P8vY%2FTdyidJo2&X-Amz-Signature=cc294a65dfd445510af64d875bdccd8cb1ff3fe29e5a5b16341950a3b6a3e41a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
