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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAJOAMJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDQbtY8Y3SFa7KVhGhH6TP3EVL3c0vLXh3iWxqo8InCjQIgJKUYouJhp%2FdFxH3gri2RXPNXde0DJ3zjJegqe3yX7lMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIGRxvOoD9NVfaUcCrcA15UOsLTHZL1V2%2B9WmS%2FCowejik1K2nQjQxpJywlNI%2FzUuke9gLb97Oi02Hi1G7JKQbAxNLiFAfI0W2et3zcxy05TwGlZKBAgUQuXeKrWYglAXpMQU93G2VPlOFb6Sb91WvxZhIdkdtDtaXYkVkn3yPQTmTtX1T9uIHQrXSRTQSCuFjgzfw4KJwCoHFQWxeEUPbHfKCmNXwLHDwVQsylc5rfk%2FCj3E0cmz8PRPdj9vjf8wy2QD5yIOrsBv2DqMWLLzLxdHpIMlAHY268ixlI2051woLAlPfqY%2FLPzTXPf533mi2TDvho5s8C8fm9C7w7odThrolmEHiYzAK8Al53vfrSOwvmFo50MH4po4Pb0AiWRybctSUtR01k3%2FAug4FSl5xUlCWKNPltVXE78zJQo0UxS2scQB7WlELOHfNHWZHF6fa%2FzYSyo2UhWvztJ55WDRT%2F6uHw05UGw0TJ%2F8ONiZ8k5iSutBhrc09ik1pXzIa%2F4kPaJOtFo2h6tiC9zU9wOXFUgZDKwTsLs8MqtNaKkwI2NW0tS4QfvBVKWW7f0becomq5nzz6BW%2F4RIppXZY%2FVDNFOiVeI7uLLrXrtBdS7Kx1L7QY91advKRyZGcFQU7l%2BTLGv9Rn%2FgoeRerwMOP76b8GOqUBBiGgDWCOLERLPKeM7XfoXmI4u9U00ht2a24H1Mme6QF363swbfyqr67u8gAChyhEHA5SyTsOwduVyI6h%2BYJXPr7tDDoECgwwWwsXD2XK9e9CEvsp3j4GEjwQEunWDVuO7jbbdIlcDvEWas%2FJRBBg1BBcvZZXC4HbB6oWGvRsdRTcHjka6Csu6WDJVUyhuhboLzl%2BTON1e7AzTRfZCnZ41xkCBjEX&X-Amz-Signature=4e77fbcc03a73803c2899e36bfa9f81670da0689463586eab4f044d48dac2f45&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAJOAMJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDQbtY8Y3SFa7KVhGhH6TP3EVL3c0vLXh3iWxqo8InCjQIgJKUYouJhp%2FdFxH3gri2RXPNXde0DJ3zjJegqe3yX7lMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIGRxvOoD9NVfaUcCrcA15UOsLTHZL1V2%2B9WmS%2FCowejik1K2nQjQxpJywlNI%2FzUuke9gLb97Oi02Hi1G7JKQbAxNLiFAfI0W2et3zcxy05TwGlZKBAgUQuXeKrWYglAXpMQU93G2VPlOFb6Sb91WvxZhIdkdtDtaXYkVkn3yPQTmTtX1T9uIHQrXSRTQSCuFjgzfw4KJwCoHFQWxeEUPbHfKCmNXwLHDwVQsylc5rfk%2FCj3E0cmz8PRPdj9vjf8wy2QD5yIOrsBv2DqMWLLzLxdHpIMlAHY268ixlI2051woLAlPfqY%2FLPzTXPf533mi2TDvho5s8C8fm9C7w7odThrolmEHiYzAK8Al53vfrSOwvmFo50MH4po4Pb0AiWRybctSUtR01k3%2FAug4FSl5xUlCWKNPltVXE78zJQo0UxS2scQB7WlELOHfNHWZHF6fa%2FzYSyo2UhWvztJ55WDRT%2F6uHw05UGw0TJ%2F8ONiZ8k5iSutBhrc09ik1pXzIa%2F4kPaJOtFo2h6tiC9zU9wOXFUgZDKwTsLs8MqtNaKkwI2NW0tS4QfvBVKWW7f0becomq5nzz6BW%2F4RIppXZY%2FVDNFOiVeI7uLLrXrtBdS7Kx1L7QY91advKRyZGcFQU7l%2BTLGv9Rn%2FgoeRerwMOP76b8GOqUBBiGgDWCOLERLPKeM7XfoXmI4u9U00ht2a24H1Mme6QF363swbfyqr67u8gAChyhEHA5SyTsOwduVyI6h%2BYJXPr7tDDoECgwwWwsXD2XK9e9CEvsp3j4GEjwQEunWDVuO7jbbdIlcDvEWas%2FJRBBg1BBcvZZXC4HbB6oWGvRsdRTcHjka6Csu6WDJVUyhuhboLzl%2BTON1e7AzTRfZCnZ41xkCBjEX&X-Amz-Signature=ba498c6c56a0d65de2d05b9ff996a1be54286eff350637da69cdfd616cd4b179&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
