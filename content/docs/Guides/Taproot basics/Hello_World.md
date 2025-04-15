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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GY7K7OW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfUe00UCAHyjhMWk%2BUUaHhvpYvFy5IfeiL2RxLzgkstAiEAngk8A%2B9lpTc1lcDX9Is%2Fy53FZwAzRs%2BI14O416eIQrwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHhtTV%2Bq3Lm9298VjircA%2B%2F%2BBEJSLzYHkYXA0ViSxGzJhwx5mhfGOUe14PWcYMr4hHOjdAxnhwZOoNKix82hiy40FI0CYYjM4wvdOYY%2F3BS8Qe7DRb9tktfYnm5AUpoElQoTgmje%2BgDWJxRC5zzCFjMxjpaqqn5KpVT5eMVnC40%2FepyN0VNVsLOLy5%2FkdeDeCwZp5lUskA9AGbv2O7eJPqYDilUgPonKxmZ5WpZ1%2Ft1CB6h8q2FXu7IJkppYljNWR0g%2FQGsuQ4f4vUMPw35xkzhnasII1XEBAzYXOMPOy9%2Ben%2FdR7%2B5VzEEJ4%2Bd61DtcywyKD42RN3kuSS8QtyzKhgVSQeH%2F1qyTfIy9FMl9gyClSTv60BxuGMot6BMs0Ezivuecwg74DaHulVvMCZ56a2AAn1Vcbc0xcZ46b0Ah3XVmiBzRXLym8yAuyeiGwGFXOAHSABhnfebEXZ1jTbhv8CDK7EHkvAL3TFiRO3ZvO9hczRbUY3vPli6hNTLUh%2Bxcp3aKEpybfUdEPJ4rkLM6wIVpWYkN51Ga8OEnYrr9pRAxb10S4lUmombYSU9qbqGOdLHyTUsxbZ3ws6qJEtgMG3FzGQQ0Wf78zI00B4S9IdE76VIQl78Y5cNGQR8T7iLiJoUPNu1ikPu3YWhWMK%2Fp978GOqUBUOwqgiJOF2he7QRGhZQkiL63BQY1%2B4E%2FSRoW7nZZlMOu708MrAQGRFQfv9ES8lDX1kdDzvndQugU2t1LwIiSgK9J1gHk%2F5i3vd3BrgJOyrq%2FuKBpZYdOaXZIhcDpgV7vd7AL9Tlyw7%2B12saPpojRkEWk70kklPyfooMW4CaKMqzouT89B%2FZzPJ%2BxS3rqt4JfVDiT2CflfuyifQRNkysLjw8r5Kq0&X-Amz-Signature=852ce40450dbad23c22dcb837e2bba35efcc39ed223a26498278346fb6da1300&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GY7K7OW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfUe00UCAHyjhMWk%2BUUaHhvpYvFy5IfeiL2RxLzgkstAiEAngk8A%2B9lpTc1lcDX9Is%2Fy53FZwAzRs%2BI14O416eIQrwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHhtTV%2Bq3Lm9298VjircA%2B%2F%2BBEJSLzYHkYXA0ViSxGzJhwx5mhfGOUe14PWcYMr4hHOjdAxnhwZOoNKix82hiy40FI0CYYjM4wvdOYY%2F3BS8Qe7DRb9tktfYnm5AUpoElQoTgmje%2BgDWJxRC5zzCFjMxjpaqqn5KpVT5eMVnC40%2FepyN0VNVsLOLy5%2FkdeDeCwZp5lUskA9AGbv2O7eJPqYDilUgPonKxmZ5WpZ1%2Ft1CB6h8q2FXu7IJkppYljNWR0g%2FQGsuQ4f4vUMPw35xkzhnasII1XEBAzYXOMPOy9%2Ben%2FdR7%2B5VzEEJ4%2Bd61DtcywyKD42RN3kuSS8QtyzKhgVSQeH%2F1qyTfIy9FMl9gyClSTv60BxuGMot6BMs0Ezivuecwg74DaHulVvMCZ56a2AAn1Vcbc0xcZ46b0Ah3XVmiBzRXLym8yAuyeiGwGFXOAHSABhnfebEXZ1jTbhv8CDK7EHkvAL3TFiRO3ZvO9hczRbUY3vPli6hNTLUh%2Bxcp3aKEpybfUdEPJ4rkLM6wIVpWYkN51Ga8OEnYrr9pRAxb10S4lUmombYSU9qbqGOdLHyTUsxbZ3ws6qJEtgMG3FzGQQ0Wf78zI00B4S9IdE76VIQl78Y5cNGQR8T7iLiJoUPNu1ikPu3YWhWMK%2Fp978GOqUBUOwqgiJOF2he7QRGhZQkiL63BQY1%2B4E%2FSRoW7nZZlMOu708MrAQGRFQfv9ES8lDX1kdDzvndQugU2t1LwIiSgK9J1gHk%2F5i3vd3BrgJOyrq%2FuKBpZYdOaXZIhcDpgV7vd7AL9Tlyw7%2B12saPpojRkEWk70kklPyfooMW4CaKMqzouT89B%2FZzPJ%2BxS3rqt4JfVDiT2CflfuyifQRNkysLjw8r5Kq0&X-Amz-Signature=f582afef9c580d79d73a94f67d7f4c0261d65992a4ebe65f06e1078034b902ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
