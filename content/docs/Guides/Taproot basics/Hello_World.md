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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIMVSYL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQlXcVcCi8m%2F8tH%2F%2BVKnttPCMJlsbiE4NutYGoBXo8pAiAYYc0xcrdF%2FBt%2FRz58L%2BkCMx0OMZwH7LPu8ryTrAU46Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMP6IKi1j9SNnsYSZrKtwDkNjTxglEFq6eSh3gB52mnKIiKDDZ3jt3ITK3b5NxDgdJ0zS535tZ%2FVTooBlDAgwNZi%2FnvMtQF7t96E%2FMa6vEYEQFc%2FR0lFopPXBsBqrOu0wrccKEKYx7C4ijL162mtZZ5UYu%2Bb%2F0axHaMF7HOKeoLeRdaW7l311pt049AQX9Xjkv7HBbWixHi82cl%2BL07pxemYpWL7%2BAiTGhdtbqeV16nBsFFB3OnnR5M4%2F5kHLqErOYUDIUzpyCSheTQD2Zm78s0E%2FLcYJdDPFEAiPCrVP2TWgzh4UQyZP2dhkGXTxkgoyAQOXzOzsoc4d%2B4Eep27VlqIYpw9fIe22mhqmKBrPnYgzPfM73BG8OAKDPHp63ibXavN1H8vkR7ZVm5QyrTrTyc8J6QzRBpeDxGDkzzizqBNgT3uJSlmkrcLxGKHgEs%2F4z7STKRospeE0A54FaSO5zYROaccZHBSzVm1y0IkOAWA9H5FQmoOrQkXj7Ti71o7rWOsvKdP1czfpKx9an9yKmoqpiNKJNaeR6yFdyWPMBfWLQWWXpQ1UjJJKTJxV8%2FjT9ninI0JWHyO5D%2BlaEhfUDRIyq%2FWSbQxovPXk9tua9rGQKXgQ2WT8NVgiXZD41Vjm9jwc%2FwjkyObmVHaoww%2BjtwAY6pgHS0uKGHK%2FYFKhvZdAQo0Eeja2pXGBvCVO4mm75Nqhb5EG2YiywMHmqZLXptuwc95OwjlrWOznvUlTxWuipM9hVy1BwbuGmqcpi5HYyrDcHBqNZFCDLkKv0TBb%2BIFPU8jQvQegUtTQiYvgmRA1g7%2F8nL0UzbhbD5ew8gWSU%2BvebwcdkOtBqkEukvJvUmeqeyfRD1NZu%2BBv1KUKvOw8SVDBPg5a%2FnwJC&X-Amz-Signature=883d48d8f7d68beeacc3457cc72a3bb01c36180b6199b9bef89b4bca8016b3f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIMVSYL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQlXcVcCi8m%2F8tH%2F%2BVKnttPCMJlsbiE4NutYGoBXo8pAiAYYc0xcrdF%2FBt%2FRz58L%2BkCMx0OMZwH7LPu8ryTrAU46Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMP6IKi1j9SNnsYSZrKtwDkNjTxglEFq6eSh3gB52mnKIiKDDZ3jt3ITK3b5NxDgdJ0zS535tZ%2FVTooBlDAgwNZi%2FnvMtQF7t96E%2FMa6vEYEQFc%2FR0lFopPXBsBqrOu0wrccKEKYx7C4ijL162mtZZ5UYu%2Bb%2F0axHaMF7HOKeoLeRdaW7l311pt049AQX9Xjkv7HBbWixHi82cl%2BL07pxemYpWL7%2BAiTGhdtbqeV16nBsFFB3OnnR5M4%2F5kHLqErOYUDIUzpyCSheTQD2Zm78s0E%2FLcYJdDPFEAiPCrVP2TWgzh4UQyZP2dhkGXTxkgoyAQOXzOzsoc4d%2B4Eep27VlqIYpw9fIe22mhqmKBrPnYgzPfM73BG8OAKDPHp63ibXavN1H8vkR7ZVm5QyrTrTyc8J6QzRBpeDxGDkzzizqBNgT3uJSlmkrcLxGKHgEs%2F4z7STKRospeE0A54FaSO5zYROaccZHBSzVm1y0IkOAWA9H5FQmoOrQkXj7Ti71o7rWOsvKdP1czfpKx9an9yKmoqpiNKJNaeR6yFdyWPMBfWLQWWXpQ1UjJJKTJxV8%2FjT9ninI0JWHyO5D%2BlaEhfUDRIyq%2FWSbQxovPXk9tua9rGQKXgQ2WT8NVgiXZD41Vjm9jwc%2FwjkyObmVHaoww%2BjtwAY6pgHS0uKGHK%2FYFKhvZdAQo0Eeja2pXGBvCVO4mm75Nqhb5EG2YiywMHmqZLXptuwc95OwjlrWOznvUlTxWuipM9hVy1BwbuGmqcpi5HYyrDcHBqNZFCDLkKv0TBb%2BIFPU8jQvQegUtTQiYvgmRA1g7%2F8nL0UzbhbD5ew8gWSU%2BvebwcdkOtBqkEukvJvUmeqeyfRD1NZu%2BBv1KUKvOw8SVDBPg5a%2FnwJC&X-Amz-Signature=f54e1beac7df6369352444934b8d581a44d6f0867d75f0550e6b09ea1ef9708c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
