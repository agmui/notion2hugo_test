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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DT2BN7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjesoSfvSbJhqXvYUtlqrV5lwvoYK2APWY44YUYSGx9AiBaBtvgLItXCgv%2Fspgr%2FY9Hg5ka%2FlvUG5Bmw8Gx4Y%2BGQSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVbfC27bfTDrPEPBBKtwDcSkOcuIvmJL2KiKtjt24pWVaRhrhLLuMyQOnFYc1BCGRpncXuhwAxMxg%2BsuQF4GbpRWTE8UDwwsku1n8PIzzNrE6lQPOIiXuyFCJyTE1QxN5fQ9jxbbQF8vsbKQmkFXvPqCiciAZHvr%2BxpuHLtWP98WotKjfmjhpFYVbVCwaXPS8q5cIQ1CgMZbFZr22I30AFmDIKjTs2AqyMvOzGLtcyYU3feSqitr5vHTd8li8UvDO29327fW0up1235UF9tyI%2F6g4TvBLTop7D%2BD329jmRmL0bfPaKZPPV%2FI%2BZoiwlhCuRY9QI%2B%2Fjr9qhA9Zfw2XEfui9Q%2Ft7uF%2FjN4heVO6HWKQT0xUhT7i0rBMgxcfwIsx7ZasU0K7r4y9dc26tl5YvuBymqtSafAgB7kM60%2Bd4ZpIChqG62JaA6UEMqFARH9Eb8fdtU1YMp8eJcvES3Q0MVYupGfllKyfMx6D2ilzzV531rY0328g0z7mBQQMLM3mETCrQXzMYjUXuolT6OwjYtCqSM%2FxZHMzG4l5hEB7vc714LDZFIIsJuZmQxuP4k11ALUqgUljCSYmsH6lCORdGlsNP9a1Di%2BwAatGOuUhhUrz3cFIjJr8xrxEmIkjz9JZt%2Buyv34PW%2B7pULwMw4%2BWlwgY6pgGFlk04XYusED5QLSN8o0bTtF8FAmQYeCqlt89FQUFhbBC%2F8slsA1WDZLUSrWTQDjeiFq2CedweoUe%2FMX9wni8MiV68NiNW9rJkZtLpzhn4iZ3eUR9nHVQNOgAnINUSv8loa2JdEVXQ5eizLzD%2FiwVh%2FQz6gohCaakMwXPPEuQYUiv6udld400wAKurBAI%2FZDCBeBMFT0aES5zpviIzbarOq7Q6ZaJo&X-Amz-Signature=8390e78835b2947e0a900dbd17638846184a96cd231d3346a2159b7d84ae7930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DT2BN7%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjesoSfvSbJhqXvYUtlqrV5lwvoYK2APWY44YUYSGx9AiBaBtvgLItXCgv%2Fspgr%2FY9Hg5ka%2FlvUG5Bmw8Gx4Y%2BGQSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVbfC27bfTDrPEPBBKtwDcSkOcuIvmJL2KiKtjt24pWVaRhrhLLuMyQOnFYc1BCGRpncXuhwAxMxg%2BsuQF4GbpRWTE8UDwwsku1n8PIzzNrE6lQPOIiXuyFCJyTE1QxN5fQ9jxbbQF8vsbKQmkFXvPqCiciAZHvr%2BxpuHLtWP98WotKjfmjhpFYVbVCwaXPS8q5cIQ1CgMZbFZr22I30AFmDIKjTs2AqyMvOzGLtcyYU3feSqitr5vHTd8li8UvDO29327fW0up1235UF9tyI%2F6g4TvBLTop7D%2BD329jmRmL0bfPaKZPPV%2FI%2BZoiwlhCuRY9QI%2B%2Fjr9qhA9Zfw2XEfui9Q%2Ft7uF%2FjN4heVO6HWKQT0xUhT7i0rBMgxcfwIsx7ZasU0K7r4y9dc26tl5YvuBymqtSafAgB7kM60%2Bd4ZpIChqG62JaA6UEMqFARH9Eb8fdtU1YMp8eJcvES3Q0MVYupGfllKyfMx6D2ilzzV531rY0328g0z7mBQQMLM3mETCrQXzMYjUXuolT6OwjYtCqSM%2FxZHMzG4l5hEB7vc714LDZFIIsJuZmQxuP4k11ALUqgUljCSYmsH6lCORdGlsNP9a1Di%2BwAatGOuUhhUrz3cFIjJr8xrxEmIkjz9JZt%2Buyv34PW%2B7pULwMw4%2BWlwgY6pgGFlk04XYusED5QLSN8o0bTtF8FAmQYeCqlt89FQUFhbBC%2F8slsA1WDZLUSrWTQDjeiFq2CedweoUe%2FMX9wni8MiV68NiNW9rJkZtLpzhn4iZ3eUR9nHVQNOgAnINUSv8loa2JdEVXQ5eizLzD%2FiwVh%2FQz6gohCaakMwXPPEuQYUiv6udld400wAKurBAI%2FZDCBeBMFT0aES5zpviIzbarOq7Q6ZaJo&X-Amz-Signature=ab0cfa3a95f635ee1e98427fe82f5d258efd1df51253d73336fe945b978aa572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
