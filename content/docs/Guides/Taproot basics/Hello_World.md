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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQFQRNE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa2qH8TtjzDJNgIbdGA3H4tNX7DtarSlGJ8ZknEIdJUAiBFz7r5KcoJqklf9d4XvtFz8e%2BSJaKBIlUvGXZRrS6NuyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwCUMkSc%2F9evT2g9KtwDRTa5TcWx0B1Kke6R8ba8g21d460zTTD8tjzJiE6lNu7oUa9sLQPyd3gp9L9f%2FpT2h7t3m9JvAX%2FV3eJAqWzMA%2F7o3C0KR4eZymWTAAqopKuF%2FV0kpHYUVzR%2FCjrKQGlqyli3SJZIZtsxT3KHLErSbKV2FLDxiCkgeYFKOz4vXdPA1RE%2B7wsZXjiNHtN9HUTN9l%2B4BCKPyHQLsR59Hb%2BrPfxANZKSZax9gGJRtx5oIiO5If5%2Bz1yFqGFaIoi%2F4aIvG%2BGeSgow7HBu6NP8cRlTZ2yr3Jy8oOT83vx4Ygu249pN%2Fh64ibXaxeNAYVaWpzfJWUXM2t7%2F2eAar9gqdzZuJQrBLeqhMpPShfAKeGUoeVPT9ZYe6oWJHIp23MVF1NCtBYUUMsILRFVFEvbPhMsvE6dz6HVCNZ5FqmLVhoMsFUQTq0HyQgmZCO1z%2Bn5lMROIy4R2%2F9A5oA0FrnXzTnhvNG6B3TyCwF0U3YL6RhD%2FIIWmAjgPaXwHc%2FIDjHH6zDBqGeWrC0XPA18KOlk7s3y5MC6hTWYUW%2FQ9YuDO0PF0P7DEUzSsTqYbJMVY3ChyBCVQQDSqCGTJgRoV83gAmagECXHU0C4JAcLYFXD5dF6rgSPjg4CRShhCr21m8qYwzZWIvwY6pgFfbtnAQGKJwPbJDs2cWf3%2FRirXjjmHk785ZRgmuKhLLwf1gW%2F0P4hD64V6GkWOgz9tSF8VsCLNzGTjLWiTxQuQFmcI8FH30ANXDCfVmnMl97oif0uRzzQq2kohEiQIwoYp8m9Panu2cndRn4CnhfOZ3MiImqdY2eraBriZLo9Kyi5N9Gn8lXUcIckSuW5%2Ftv4cGThbhcxs81rfdQN4sNuoUJh22pLm&X-Amz-Signature=8c37ca0be39e5e5f433a0e0242da4de5b7faeb92bd0a47403481de65100289dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQFQRNE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa2qH8TtjzDJNgIbdGA3H4tNX7DtarSlGJ8ZknEIdJUAiBFz7r5KcoJqklf9d4XvtFz8e%2BSJaKBIlUvGXZRrS6NuyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMwCUMkSc%2F9evT2g9KtwDRTa5TcWx0B1Kke6R8ba8g21d460zTTD8tjzJiE6lNu7oUa9sLQPyd3gp9L9f%2FpT2h7t3m9JvAX%2FV3eJAqWzMA%2F7o3C0KR4eZymWTAAqopKuF%2FV0kpHYUVzR%2FCjrKQGlqyli3SJZIZtsxT3KHLErSbKV2FLDxiCkgeYFKOz4vXdPA1RE%2B7wsZXjiNHtN9HUTN9l%2B4BCKPyHQLsR59Hb%2BrPfxANZKSZax9gGJRtx5oIiO5If5%2Bz1yFqGFaIoi%2F4aIvG%2BGeSgow7HBu6NP8cRlTZ2yr3Jy8oOT83vx4Ygu249pN%2Fh64ibXaxeNAYVaWpzfJWUXM2t7%2F2eAar9gqdzZuJQrBLeqhMpPShfAKeGUoeVPT9ZYe6oWJHIp23MVF1NCtBYUUMsILRFVFEvbPhMsvE6dz6HVCNZ5FqmLVhoMsFUQTq0HyQgmZCO1z%2Bn5lMROIy4R2%2F9A5oA0FrnXzTnhvNG6B3TyCwF0U3YL6RhD%2FIIWmAjgPaXwHc%2FIDjHH6zDBqGeWrC0XPA18KOlk7s3y5MC6hTWYUW%2FQ9YuDO0PF0P7DEUzSsTqYbJMVY3ChyBCVQQDSqCGTJgRoV83gAmagECXHU0C4JAcLYFXD5dF6rgSPjg4CRShhCr21m8qYwzZWIvwY6pgFfbtnAQGKJwPbJDs2cWf3%2FRirXjjmHk785ZRgmuKhLLwf1gW%2F0P4hD64V6GkWOgz9tSF8VsCLNzGTjLWiTxQuQFmcI8FH30ANXDCfVmnMl97oif0uRzzQq2kohEiQIwoYp8m9Panu2cndRn4CnhfOZ3MiImqdY2eraBriZLo9Kyi5N9Gn8lXUcIckSuW5%2Ftv4cGThbhcxs81rfdQN4sNuoUJh22pLm&X-Amz-Signature=64aa420eed8eda1242b52d4b978078fe9cee64b133fd9be0254ed7492ea36ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
