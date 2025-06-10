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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UCDITMY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ro7HC4ROBtZ4YlnqLgvllNwoEpAdxSgQZSgAVjdINQIhAMuQP9OfHXx23xf%2FjNvbBzmeBb%2BBO%2BL0UtkHJKkgrfEMKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJIdCPde1%2FCi4BJnwq3ANWupgxIorKP6bnGKAp6%2FpCxOPSsECTo4zztxzvBnTz7ThOWce%2BNzG62JjraVKB163jZ56BA7R0MsldmI7r%2BaY01g%2FWkKBxhKufEEAGriRHiRJDnHjV2q5JUMCVcckww6w9juWEJi8l6t1ErKYqM56RxElWnv6JF%2F%2BNRFwWfqT3NCbCyPGbmsjXe%2F18WeLmzCiLiQbe5lboTxiCoCsYXRUfienNh%2F75DEYJVOVruvrE%2FG1ke3JKB9qUEKxp9xhBI5BU3rja3TNZxnLLwb0D3%2BZWTW0%2FQRzJYLRSQIChpmWuodvsTkYBNvcGRyk7p13%2Fo00yJqVrE%2Bcn%2B19FwQRdj82m%2B%2FW18rjmP%2BOuxSZsBV55xTWry1BIF8t72fCtusVk%2BixqM3nuEWMNf00kbDz0FUHzq2om%2B53dywTjueZe4C%2F1AbRSr0p7dJbm4DnhQV1KuI9lQH9Wp0lCisUjgP9XTDKyZj6TZrcYKy0oNkDH6vUH5yGsLGYK3Wj%2B5lrhIw75tRi3g96%2Ff0ANocQIZS7WMbBspg3RaLvm%2F43nv%2BVRrG6dYzYoNBfFOnqK2DK7B2rBnYJaXXJHNLAUG3P8VBiHMYh68oiK%2BVat2dAFGogMH%2B3VYYle%2Fq%2Bz%2Fu7o343EETD7wKDCBjqkAYKLjY9OvZT2VMPdT9aoegUa00EzFfu5uHVWqRssmuASES2LaFa1DtZvRMBuL9BeUsh2qudT4q%2FT2f5r8QF%2FncFPI9fSfTf4pDAYZ2Kmys4U9tler3nQncqo6oz3GRkQcoA8UYSJ9KkF6Azoat9jBkr01KUTYIInXwc1LJnLndfCSEVAmJdPgAAq911ifuwu%2Fs806HOK%2FeDSLjo3q1Ia%2BT3cz1Wb&X-Amz-Signature=5fe01a095b8e0f6e206269aa82d6eb19c0314a7674ff8747edf5f660296d5e15&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UCDITMY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ro7HC4ROBtZ4YlnqLgvllNwoEpAdxSgQZSgAVjdINQIhAMuQP9OfHXx23xf%2FjNvbBzmeBb%2BBO%2BL0UtkHJKkgrfEMKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJIdCPde1%2FCi4BJnwq3ANWupgxIorKP6bnGKAp6%2FpCxOPSsECTo4zztxzvBnTz7ThOWce%2BNzG62JjraVKB163jZ56BA7R0MsldmI7r%2BaY01g%2FWkKBxhKufEEAGriRHiRJDnHjV2q5JUMCVcckww6w9juWEJi8l6t1ErKYqM56RxElWnv6JF%2F%2BNRFwWfqT3NCbCyPGbmsjXe%2F18WeLmzCiLiQbe5lboTxiCoCsYXRUfienNh%2F75DEYJVOVruvrE%2FG1ke3JKB9qUEKxp9xhBI5BU3rja3TNZxnLLwb0D3%2BZWTW0%2FQRzJYLRSQIChpmWuodvsTkYBNvcGRyk7p13%2Fo00yJqVrE%2Bcn%2B19FwQRdj82m%2B%2FW18rjmP%2BOuxSZsBV55xTWry1BIF8t72fCtusVk%2BixqM3nuEWMNf00kbDz0FUHzq2om%2B53dywTjueZe4C%2F1AbRSr0p7dJbm4DnhQV1KuI9lQH9Wp0lCisUjgP9XTDKyZj6TZrcYKy0oNkDH6vUH5yGsLGYK3Wj%2B5lrhIw75tRi3g96%2Ff0ANocQIZS7WMbBspg3RaLvm%2F43nv%2BVRrG6dYzYoNBfFOnqK2DK7B2rBnYJaXXJHNLAUG3P8VBiHMYh68oiK%2BVat2dAFGogMH%2B3VYYle%2Fq%2Bz%2Fu7o343EETD7wKDCBjqkAYKLjY9OvZT2VMPdT9aoegUa00EzFfu5uHVWqRssmuASES2LaFa1DtZvRMBuL9BeUsh2qudT4q%2FT2f5r8QF%2FncFPI9fSfTf4pDAYZ2Kmys4U9tler3nQncqo6oz3GRkQcoA8UYSJ9KkF6Azoat9jBkr01KUTYIInXwc1LJnLndfCSEVAmJdPgAAq911ifuwu%2Fs806HOK%2FeDSLjo3q1Ia%2BT3cz1Wb&X-Amz-Signature=c27b5b06793a09c4765acaae25e8175cf00d86a4d621e6f2e4132e6db23d53cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
