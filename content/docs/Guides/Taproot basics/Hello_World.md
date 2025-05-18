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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDO7MA2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4X1Zu173i1ENgqOiXxWq2%2Fg8A2j2uKmbzmmzMKVMJLAiB3VMsjFK7iforoOifv0JpcuEkg5PgNaC0JnVAvfDh%2Bsyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMy4kFg3p1HqLzjHUvKtwD%2FLJQ28Lj06z2OcljdKq752fNixQXAXTHGF2N82etCarOXNfnhVItBwtsVDInCH9ONCNSCqKy6jwI3egO6r302bF%2FTyFlEWjbH4LyBy%2BdaNlw%2BH%2Fr69Do4qzVMUZQUynrMsiYHmUbZi7xnSGXMn1o9jnQ2AfnTO51StY5%2FXe2uGQQuZGFqkBIdhydLv6Y4UGHd9wSdAJ0WlnxhdTxnHTdyZh3hMQ3aXim6tXfqpgkuIUDz10UoQh0U0ADaTnYKtgJkRUw3sL5DyxAYZGC4uzNu9gJKfv049SvgtyY6MtXvedwPLbD2xz7YBHVTIJL4eKv3Zhxx2xGrYCpQs8%2F%2BLluprpyXHJdVcoVDCdIAXtoJ%2Bg4OGbt5kyreQt1laChcbj%2B3Cfqmj9y%2BkDN7LBJ7An3P%2Fx66eTugg3glteLtb4NZ2sHQyHsjx9VnGSMOQ%2FlelELp2DbNQiu1x%2Bpz1MiU5ekZgqb%2Bon8MgOuH9bT2InVR6qKqkGIIcwjsO9hbbtddiwQ4Axh9Yl6iEB4XxUVzj6c2bTXaxSrxy8M18vtadSbZkWX6wImHNWBDYCO2V1FquCzRhSflxrI8IcJ7xs4GeIGkLfBgIQvgHjjgyiNRHWGEo3GSOxRMQY6WrZlmQEwqdekwQY6pgEcBgI1rExRJT4kAFs%2FOJerWTwVzzbNYMIg6F2ArTonChgTLJKXXaeAsv6ExGu2P6J7nGoRkiw398j2T4aUrMHSIATs5Ek2E1gilceb1s8zY93tL0xZN1NQM4VOebVNJdQqdfAzyajUabrV7qzUk58zEVYmDqA2Cz%2F8RoqpuIVN1ZVOxwAKNw0d0rkz8s1YE4hRgpSF%2FZwzBMfCSeh4hnBeq1f%2BP1mt&X-Amz-Signature=50a00a9b567fa48831b1ee0445c29560f6182a1386d0c37d4a8e9ddaa3f72da2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVDO7MA2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4X1Zu173i1ENgqOiXxWq2%2Fg8A2j2uKmbzmmzMKVMJLAiB3VMsjFK7iforoOifv0JpcuEkg5PgNaC0JnVAvfDh%2Bsyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMy4kFg3p1HqLzjHUvKtwD%2FLJQ28Lj06z2OcljdKq752fNixQXAXTHGF2N82etCarOXNfnhVItBwtsVDInCH9ONCNSCqKy6jwI3egO6r302bF%2FTyFlEWjbH4LyBy%2BdaNlw%2BH%2Fr69Do4qzVMUZQUynrMsiYHmUbZi7xnSGXMn1o9jnQ2AfnTO51StY5%2FXe2uGQQuZGFqkBIdhydLv6Y4UGHd9wSdAJ0WlnxhdTxnHTdyZh3hMQ3aXim6tXfqpgkuIUDz10UoQh0U0ADaTnYKtgJkRUw3sL5DyxAYZGC4uzNu9gJKfv049SvgtyY6MtXvedwPLbD2xz7YBHVTIJL4eKv3Zhxx2xGrYCpQs8%2F%2BLluprpyXHJdVcoVDCdIAXtoJ%2Bg4OGbt5kyreQt1laChcbj%2B3Cfqmj9y%2BkDN7LBJ7An3P%2Fx66eTugg3glteLtb4NZ2sHQyHsjx9VnGSMOQ%2FlelELp2DbNQiu1x%2Bpz1MiU5ekZgqb%2Bon8MgOuH9bT2InVR6qKqkGIIcwjsO9hbbtddiwQ4Axh9Yl6iEB4XxUVzj6c2bTXaxSrxy8M18vtadSbZkWX6wImHNWBDYCO2V1FquCzRhSflxrI8IcJ7xs4GeIGkLfBgIQvgHjjgyiNRHWGEo3GSOxRMQY6WrZlmQEwqdekwQY6pgEcBgI1rExRJT4kAFs%2FOJerWTwVzzbNYMIg6F2ArTonChgTLJKXXaeAsv6ExGu2P6J7nGoRkiw398j2T4aUrMHSIATs5Ek2E1gilceb1s8zY93tL0xZN1NQM4VOebVNJdQqdfAzyajUabrV7qzUk58zEVYmDqA2Cz%2F8RoqpuIVN1ZVOxwAKNw0d0rkz8s1YE4hRgpSF%2FZwzBMfCSeh4hnBeq1f%2BP1mt&X-Amz-Signature=128e23f7c188dde379806160b59c72f2864ffe986d10e1a6edad2dc209754299&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
