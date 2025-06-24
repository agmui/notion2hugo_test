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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJAZPD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAe4TVAalJUViK5f8Qqw25TCS%2FOXQfNCwxo9zZNj9CwnAiAPHWgpWysftpTmzpiv3Yk72H3eRVAyodkz4ADK2i1XgSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiIBcg%2FpRmr4KshC%2BKtwD9cTScZTfqXUnt9BlLmQe54i3hG4TBJkVPVBQpp7Ct%2BY1UimPgHZMsFmlbLdBR2CniiKJ0dI5fmxmcGTHu9PSOequ7Wm6BP5%2F3N5wVRAUvPv%2B52qJOyBhio42qd8dprg88wIjRtEJ9I4x2HsrB%2FWxdC7vFBVFTzJ4EzTF5oc89VNdbXbT79aedd1mMQVGbT8SjXSXYoXZg3jhos%2BHb%2BXH8nPofjhpR9GShkDZSgD4%2Buo9evWQvBBJRzFuQlRF3q%2F5%2BxLfz18OjNqJ8NTrui8a9jHljI6xffoQiXKkopj%2FOWnna%2FszBikE3n5CFjR7qrgKRdK9du7DuLrf8fCtdmJepNlS065YHLwFXS%2F02hOh7EanzxNTHeN7xaTIYBfvW2uJQ%2BBKXDdYU7GiZ4zhm%2BC1IAl3QLxkfINTUhk3K1t%2FiJseaP5cXI2bTyIVmlUVJcErM%2Bl0pGGQjvjsYvqbhBDHwWKqB0XI%2FYm%2Fmm3zZne47mrGttS9IadfnN4s6avO3Gg12pWsvM0hoNU0OKYLqGig5OrpmHZpjo3NYhBw5np9tgZcDljwM4S28dvEeMjqTbhfki6w02W9%2BBHf96ZHAoDOHNb%2FA9IF%2FY90Q8FtlG%2Ff3fdzUHkUICjV5zh50kYw%2BuXnwgY6pgGlHaMp1vbRaiYQBbquyELH%2BlGu8iApZjh%2BO%2FKaLgfzi7%2FgtoBljGAQ5f0OvvF14OjXKGRxnz8Edge%2BtDQWt2nl2RsshSqXKYMqI6jWdOpd6VJBrDClsakZrEbERuwApLlxg1FobmjQ07TKKUkzn%2Fw4Rw4qQhhNzQTJmyJmPE8OtrjtA9MVm4nY8JmIS3u1Ihy6eL70UZ1kOBgOmrWjgCYrU%2B3pBty2&X-Amz-Signature=29315a241116a2d213bcc0e5e90d8f7ef4cc8063e6c51a14cbb256cb4d53de6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRHJAZPD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAe4TVAalJUViK5f8Qqw25TCS%2FOXQfNCwxo9zZNj9CwnAiAPHWgpWysftpTmzpiv3Yk72H3eRVAyodkz4ADK2i1XgSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiIBcg%2FpRmr4KshC%2BKtwD9cTScZTfqXUnt9BlLmQe54i3hG4TBJkVPVBQpp7Ct%2BY1UimPgHZMsFmlbLdBR2CniiKJ0dI5fmxmcGTHu9PSOequ7Wm6BP5%2F3N5wVRAUvPv%2B52qJOyBhio42qd8dprg88wIjRtEJ9I4x2HsrB%2FWxdC7vFBVFTzJ4EzTF5oc89VNdbXbT79aedd1mMQVGbT8SjXSXYoXZg3jhos%2BHb%2BXH8nPofjhpR9GShkDZSgD4%2Buo9evWQvBBJRzFuQlRF3q%2F5%2BxLfz18OjNqJ8NTrui8a9jHljI6xffoQiXKkopj%2FOWnna%2FszBikE3n5CFjR7qrgKRdK9du7DuLrf8fCtdmJepNlS065YHLwFXS%2F02hOh7EanzxNTHeN7xaTIYBfvW2uJQ%2BBKXDdYU7GiZ4zhm%2BC1IAl3QLxkfINTUhk3K1t%2FiJseaP5cXI2bTyIVmlUVJcErM%2Bl0pGGQjvjsYvqbhBDHwWKqB0XI%2FYm%2Fmm3zZne47mrGttS9IadfnN4s6avO3Gg12pWsvM0hoNU0OKYLqGig5OrpmHZpjo3NYhBw5np9tgZcDljwM4S28dvEeMjqTbhfki6w02W9%2BBHf96ZHAoDOHNb%2FA9IF%2FY90Q8FtlG%2Ff3fdzUHkUICjV5zh50kYw%2BuXnwgY6pgGlHaMp1vbRaiYQBbquyELH%2BlGu8iApZjh%2BO%2FKaLgfzi7%2FgtoBljGAQ5f0OvvF14OjXKGRxnz8Edge%2BtDQWt2nl2RsshSqXKYMqI6jWdOpd6VJBrDClsakZrEbERuwApLlxg1FobmjQ07TKKUkzn%2Fw4Rw4qQhhNzQTJmyJmPE8OtrjtA9MVm4nY8JmIS3u1Ihy6eL70UZ1kOBgOmrWjgCYrU%2B3pBty2&X-Amz-Signature=6835484bc2c2e3d6615fad89a70380a5082d9f34a9844e756441becde8181bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
