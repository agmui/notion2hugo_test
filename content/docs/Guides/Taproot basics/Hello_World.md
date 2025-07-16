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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQAVMWQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAakVvx8LunAmy8U0lcHONkUJQTuK94bAXgpOhcePsRKAiEAltLgmmDwcUVeCJaesxcudqE4yzgtFfvsnGjgKply0yEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCmn%2BKLOIB8cBqnh2yrcA11fvGvWNShRXQjSvF9SnJbk%2FiIbHzMnSlbUXgvbOMgKakQRSUv3TtjxgIV5vkEncUlRV40udUjjM2qxCdROR8VLbTGaKDKQ4hcjYSjCN1JAkKlQYfLfyCt2rxCNfKYWIv3z2jaAx8rewap6ZeqPfY%2BuaA3cc4cmuAxzl3N2odyqWxQwGwbaiw97nR%2BKZ9sxVDB6J3zJ0ahlJLnh67gfdqPuYVFbrgz8ypoBYJSNrv%2BDmlk0vZwMuu%2BUhabS%2FY5ZUXxjvSlgMMV7hYljf1X36Li5l16VK1sNHcqq8iYeNNboSlDmoeZq2COEiT6%2BhlFQnJV4twJyKHz6aNJHKmrQo2bGGQ3UjT%2BYxl8tPBL4K66X%2FJZZz0GANCMDzOrBF6%2F6Yzb8bhqWgVZsktQK41LlOLZm%2BVPu92XbtNHd%2BUAdUX25nC4twLnWPRQE01SntT0etu5TVYAxvv6nxUYtKl%2FZCR0ru46j7ZNllODOzJIRzp0Ftg%2BR0%2Fg2k7tox%2BYyguwT9jrqEuM2Cmho2YkOXWpklkdNCbAr%2B2MPqb15CVOUj9MGORjct5JYe49i6VD%2FcRl8BDJz1Ky5zgxJ2VkU90Y%2BMcW3MMH4Qazh9RU%2BOLh%2FI%2FYiARSgI76tmnc7XJNvMNDQ28MGOqUBB1mdk6u8Kafk78wcwuINQrPGuBUoeAwnzWrSk4djlZqPKOszj8QtVcG8RTjXW3foouNcLcgyjlY6WX33JEXpnH8jlsRxz2x7aV%2BHat2qwyB6m8nd%2Bjsc3olUhj9b2ji32UxNIWSO4o7r1A1TXsJGKiI18fvoUSJZ8g80e0KEJmUXZA9vUZVywAm2QMvnVX0GtRRbflprfjF8VbB6MnDZCWXWbJXu&X-Amz-Signature=efc6f3320fd1bc439a479a049f8a11e895ee4a44fd4da1d4326a649cb470041d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQAVMWQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAakVvx8LunAmy8U0lcHONkUJQTuK94bAXgpOhcePsRKAiEAltLgmmDwcUVeCJaesxcudqE4yzgtFfvsnGjgKply0yEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCmn%2BKLOIB8cBqnh2yrcA11fvGvWNShRXQjSvF9SnJbk%2FiIbHzMnSlbUXgvbOMgKakQRSUv3TtjxgIV5vkEncUlRV40udUjjM2qxCdROR8VLbTGaKDKQ4hcjYSjCN1JAkKlQYfLfyCt2rxCNfKYWIv3z2jaAx8rewap6ZeqPfY%2BuaA3cc4cmuAxzl3N2odyqWxQwGwbaiw97nR%2BKZ9sxVDB6J3zJ0ahlJLnh67gfdqPuYVFbrgz8ypoBYJSNrv%2BDmlk0vZwMuu%2BUhabS%2FY5ZUXxjvSlgMMV7hYljf1X36Li5l16VK1sNHcqq8iYeNNboSlDmoeZq2COEiT6%2BhlFQnJV4twJyKHz6aNJHKmrQo2bGGQ3UjT%2BYxl8tPBL4K66X%2FJZZz0GANCMDzOrBF6%2F6Yzb8bhqWgVZsktQK41LlOLZm%2BVPu92XbtNHd%2BUAdUX25nC4twLnWPRQE01SntT0etu5TVYAxvv6nxUYtKl%2FZCR0ru46j7ZNllODOzJIRzp0Ftg%2BR0%2Fg2k7tox%2BYyguwT9jrqEuM2Cmho2YkOXWpklkdNCbAr%2B2MPqb15CVOUj9MGORjct5JYe49i6VD%2FcRl8BDJz1Ky5zgxJ2VkU90Y%2BMcW3MMH4Qazh9RU%2BOLh%2FI%2FYiARSgI76tmnc7XJNvMNDQ28MGOqUBB1mdk6u8Kafk78wcwuINQrPGuBUoeAwnzWrSk4djlZqPKOszj8QtVcG8RTjXW3foouNcLcgyjlY6WX33JEXpnH8jlsRxz2x7aV%2BHat2qwyB6m8nd%2Bjsc3olUhj9b2ji32UxNIWSO4o7r1A1TXsJGKiI18fvoUSJZ8g80e0KEJmUXZA9vUZVywAm2QMvnVX0GtRRbflprfjF8VbB6MnDZCWXWbJXu&X-Amz-Signature=afc2b1ed0ee6d51616bfb896529d804f022a9bcdc6840d692ac223ed55edced8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
