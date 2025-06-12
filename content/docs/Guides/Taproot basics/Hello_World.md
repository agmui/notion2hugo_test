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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSQIE2O%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDgw300M%2Fv3C3TEjTxYDHB0O9SdDZIftAmluySINuxNBgIgJ4295nkEuDKMGwx1jD7N9dEkA%2Fsmq4AH3zVwB2v7RfwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIKMjmyVkhtqL4LpSrcA4nb7hqhO6IyAB4uO6tyidKx%2FYDBwArwaroqR%2BDQJkjTYqpjaHIo0tYiosajZUfy2eW8nYAtwhJi0WT1xgxBQQAoK6%2Fi%2BAhzGBe9FFO1oKaAdb%2FKhOnqQJ87MDWORYtnp5%2Bgkh%2B87ODe7mD2j4CTNLv6kF9vrcyfn76zZFuX%2BhwuXqw8qDZOaatZTiQOXBkizp2ncjcPPreJ5q9e0D3UlnvjzRaGjlSnBQbq8vci40w2v5JLbXy9ZEpTVXb46X%2FZjAuhDPJK7MZtAKpaaj2J%2B2ZWxuzX%2BZqR4qIQU3oD%2FFIXaoGVsg%2BFTws6JbANyYIv54AU4g%2FyQwjU7NbT%2BRvVLSG1%2BKHUX3LAdCEwKtdy7yfDy8%2FO37qe9Jh6DzjuRuw2Tt7pu68FpXlBhjs3PIYxJ4WKbbN3jSB2mqkZu%2BA2z%2BQWBzx%2BPnVl2n8rciwxqQjjNLdLuJwFh0CFmIbD75yJM6S0RtUYZK8W2pSgMoz0uadsNE0e0AbGtG79WQQ7r5HuSXffDGGmPuXyT%2F%2BpjeWGtjhdh17nVhTfyLuqwDpRI9wS69QEa9JdcsoyA%2B9qbqNjO007vZ6Pp2iB35y9Dqo2utvYVfb06mDUJwjlcopBFuFYd%2FNDxTaOEwQ93%2FmiMPnBqcIGOqUBwYy0r8F%2F%2FbGMnQzaOKPssHFvWQzWsW0OJadFn2XagWQvsKMyPNdVgBAheD%2Bq7%2F0lSDz3Wgwkl26QdA2ia%2B2gO4eoxWDCKalswpY871PEP4FRbHBgdklOkIz7HyMADqIljKmOHwFAU1N6qNospX3ZZkix8rSGdpdPpQXgQQI%2BnLe%2BwvJdXRi%2BHPZIlwLEVO%2BX0ig1Yd8sAZzIclSGeZtW8YNHw%2FN2&X-Amz-Signature=40805200151d49bf466aaecf5054a022a04e93eec24e2c0c2800a96047d118d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSQIE2O%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDgw300M%2Fv3C3TEjTxYDHB0O9SdDZIftAmluySINuxNBgIgJ4295nkEuDKMGwx1jD7N9dEkA%2Fsmq4AH3zVwB2v7RfwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIKMjmyVkhtqL4LpSrcA4nb7hqhO6IyAB4uO6tyidKx%2FYDBwArwaroqR%2BDQJkjTYqpjaHIo0tYiosajZUfy2eW8nYAtwhJi0WT1xgxBQQAoK6%2Fi%2BAhzGBe9FFO1oKaAdb%2FKhOnqQJ87MDWORYtnp5%2Bgkh%2B87ODe7mD2j4CTNLv6kF9vrcyfn76zZFuX%2BhwuXqw8qDZOaatZTiQOXBkizp2ncjcPPreJ5q9e0D3UlnvjzRaGjlSnBQbq8vci40w2v5JLbXy9ZEpTVXb46X%2FZjAuhDPJK7MZtAKpaaj2J%2B2ZWxuzX%2BZqR4qIQU3oD%2FFIXaoGVsg%2BFTws6JbANyYIv54AU4g%2FyQwjU7NbT%2BRvVLSG1%2BKHUX3LAdCEwKtdy7yfDy8%2FO37qe9Jh6DzjuRuw2Tt7pu68FpXlBhjs3PIYxJ4WKbbN3jSB2mqkZu%2BA2z%2BQWBzx%2BPnVl2n8rciwxqQjjNLdLuJwFh0CFmIbD75yJM6S0RtUYZK8W2pSgMoz0uadsNE0e0AbGtG79WQQ7r5HuSXffDGGmPuXyT%2F%2BpjeWGtjhdh17nVhTfyLuqwDpRI9wS69QEa9JdcsoyA%2B9qbqNjO007vZ6Pp2iB35y9Dqo2utvYVfb06mDUJwjlcopBFuFYd%2FNDxTaOEwQ93%2FmiMPnBqcIGOqUBwYy0r8F%2F%2FbGMnQzaOKPssHFvWQzWsW0OJadFn2XagWQvsKMyPNdVgBAheD%2Bq7%2F0lSDz3Wgwkl26QdA2ia%2B2gO4eoxWDCKalswpY871PEP4FRbHBgdklOkIz7HyMADqIljKmOHwFAU1N6qNospX3ZZkix8rSGdpdPpQXgQQI%2BnLe%2BwvJdXRi%2BHPZIlwLEVO%2BX0ig1Yd8sAZzIclSGeZtW8YNHw%2FN2&X-Amz-Signature=9a51c62d1fa63108a5264b5c10fbf54f32ee23cec2339074b163f6d011b022d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
