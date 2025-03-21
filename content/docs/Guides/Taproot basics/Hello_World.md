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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR6VPTZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIF7dqhandPOVZOghb5OdPSVGTGuSVgDnRvoRFl8Ja4WyAiEA8LjkR8bVnxvncZEcIA7FXcgajpKWcl2XRqYRnTQc7%2BAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQeTPUj72%2FmNjAkSrcA88lu30JIIeWTEGMl8MoqdgNECmT4QyeQgMKWi30ZUL5988Gt9YMxxjZHVAzk%2F6W7kmsD5UL%2FuJqKEbD1qSXdVTNmpGBTxdBREEMAJ94oTUH0M%2FZtJwtGtiHnWcSJHk6Y3jjPeTd3qKUJWYqb6ERdkfYX5zzlVgN3qOjOJi6OIsQY7DfCbJxurWCRh9GXGDN%2BQ8MIpkEbwhdnPM4pPRrbDLsHLT3ybx71vGiwBRMpzKTnXhtlEEjE%2FaTZsBI5HQGzImghY56dJdOUl4Z6ZG66Q9TLK1auwjvAqyq%2BFhl6O82Wk5DuOglLsZ1%2B3P3UTzJ%2Fwenqq4T2c9JT1fa6DMnCloD14bQm1xRC95gcxq898Znuzm1FgSzinWk7f1XWnEHACYD6%2FkW8pFtXkAP9H%2BM5QrQswoTLvJr38dAi7h0cwGklxJJ4JHSyBjMl1gXa74lbiT1u0C45dKhhtdOzwiXCcDPKUpriLDoZAyBJxjIjrFGMOi0ckPwe7AQfmQRoA8%2Fb0BrZpgLHOyLSPh2Vrhu5a5%2BIEzISuboFG8xoP6XONOnno7Dk4BEhpcouW0IGqXBqMFtWL5FdJfnkiix%2BkeyiQGqEK4KVnB1CmJ0hFfJ6ya7GnYHOOEAGogvMfxjMPK59b4GOqUBdL3r6ODoGbdWUGaPXAX%2FNKNxNKlVIziwJRi%2BZ2kTcc%2FaG60I7ZoW8SxeBqMTQ2fjyuxivTTwRy6gWZv%2BsR6XKZNqbS4ZmROPOHKAmhs3InFgxtdkNeOXlliK4OUBVxEZnbFhAxIiVL4Up7557g13%2BqpDUn0FwiqYLfimZJLaYoXgLvZmkM3kbPoS7gyPnBqo9lVoKDKX%2BL%2FwVCsJ27MP60jlMNnH&X-Amz-Signature=e13af4fdd206ee7fbfcd3cf4bc52348cab8c9e17e420e7b38dac9cc9e477e25c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR6VPTZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIF7dqhandPOVZOghb5OdPSVGTGuSVgDnRvoRFl8Ja4WyAiEA8LjkR8bVnxvncZEcIA7FXcgajpKWcl2XRqYRnTQc7%2BAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODQeTPUj72%2FmNjAkSrcA88lu30JIIeWTEGMl8MoqdgNECmT4QyeQgMKWi30ZUL5988Gt9YMxxjZHVAzk%2F6W7kmsD5UL%2FuJqKEbD1qSXdVTNmpGBTxdBREEMAJ94oTUH0M%2FZtJwtGtiHnWcSJHk6Y3jjPeTd3qKUJWYqb6ERdkfYX5zzlVgN3qOjOJi6OIsQY7DfCbJxurWCRh9GXGDN%2BQ8MIpkEbwhdnPM4pPRrbDLsHLT3ybx71vGiwBRMpzKTnXhtlEEjE%2FaTZsBI5HQGzImghY56dJdOUl4Z6ZG66Q9TLK1auwjvAqyq%2BFhl6O82Wk5DuOglLsZ1%2B3P3UTzJ%2Fwenqq4T2c9JT1fa6DMnCloD14bQm1xRC95gcxq898Znuzm1FgSzinWk7f1XWnEHACYD6%2FkW8pFtXkAP9H%2BM5QrQswoTLvJr38dAi7h0cwGklxJJ4JHSyBjMl1gXa74lbiT1u0C45dKhhtdOzwiXCcDPKUpriLDoZAyBJxjIjrFGMOi0ckPwe7AQfmQRoA8%2Fb0BrZpgLHOyLSPh2Vrhu5a5%2BIEzISuboFG8xoP6XONOnno7Dk4BEhpcouW0IGqXBqMFtWL5FdJfnkiix%2BkeyiQGqEK4KVnB1CmJ0hFfJ6ya7GnYHOOEAGogvMfxjMPK59b4GOqUBdL3r6ODoGbdWUGaPXAX%2FNKNxNKlVIziwJRi%2BZ2kTcc%2FaG60I7ZoW8SxeBqMTQ2fjyuxivTTwRy6gWZv%2BsR6XKZNqbS4ZmROPOHKAmhs3InFgxtdkNeOXlliK4OUBVxEZnbFhAxIiVL4Up7557g13%2BqpDUn0FwiqYLfimZJLaYoXgLvZmkM3kbPoS7gyPnBqo9lVoKDKX%2BL%2FwVCsJ27MP60jlMNnH&X-Amz-Signature=8c17306debb7e8b278d652c00a86b3378894a6fd37ae0d880bba28b2a8e26524&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
