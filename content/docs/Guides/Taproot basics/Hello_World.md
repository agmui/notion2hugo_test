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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6NVK46%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFc2Y1ktwRktwYYIPub8zW2SaITnkypZJj5BB%2B3%2BTtNAiBwv%2B1QZiv7%2BaNvgOPyxw9D8AHwIwuTbYcB0Ujo0ymriCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2FiD%2FcoPrq5T9ipPKtwDzkyUcrWnjU0MFa%2BIaXvKnXEa3yXLyRNtsuaidWGPnskFCQoLGe1rgGeFGhtXNcfaZzyof7rrWRm1qc%2FhV3HNBkiUXsEN5dTXcSTbdLq5D8Ybz9%2FXbgpj1ICGKzOgjviYPpM2%2FbdR39bQwJm1hA511AHWXxNh2YdxUgkSicSh3pc32QsIt9q3IxsuoEozXwuFscv1c8M35exnkEMl5cHx86ZnpKjdEtFz%2FKaHbgUGw9%2FvpUTOlcrL6zdHJ%2FESgLO8V%2BRQ02nNo3bTmPG%2BDqRlChN7l3XezyjNH9bXQn4bu2qzu9%2FiD4lkkbMq%2FoEFZPkVvonS%2BIq6TYIzqNq6EQ8YyMPohfCpVjTFIZujoFHWzMEQJjerhBpoIAjYP9oyvd3qtuullU9a3Ncv6NKbBT0zmTaQrauKIgKZD2xDAJFbptTPcXLANiAGZrdU0NF1BzvPBAzlGENT8ZDum1GZl1bpOawqC3uiGl1FSZuS9%2BDWG4dxgT5%2FPg%2BkmJHixJoTMCYligNwZfVegAXA5eHuHpkLVvGccAw%2FI5V8zEQaFQQm6b7qSp4vUfahs07uxMTOXu0zLsmQ2JM9IUW6yMNTwvNXVL%2BvCP9dWQ5HPjhfq0YP6VpsYPkh9TIk9rsscyQw9fXvwwY6pgFNNTuWYr%2B%2BahL7DlORIyX1foJT35ACCwq%2BWPNUaB%2FrJWxJKOo4KGvo3f46noYFJ90OBycJLIQzispFgZFNS0wWS%2Fy%2BH%2BMtqVz2laFZhc7cJGFGZ%2BP%2B9%2FPRKloZFCZo%2BBVrYzy0i%2Bd7pEmn72kAlLCStFT2OAfckudmLt7KJDdDtrzDJlK7Wal%2Bipm1Cer2R9J2sYaDAeYlUXB%2BV5q6ure9BGbNPqJ1&X-Amz-Signature=7987124d4e28c99c15544fdcd5a35b2df717e82ad8d96c1220a6713216251b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6NVK46%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFc2Y1ktwRktwYYIPub8zW2SaITnkypZJj5BB%2B3%2BTtNAiBwv%2B1QZiv7%2BaNvgOPyxw9D8AHwIwuTbYcB0Ujo0ymriCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2FiD%2FcoPrq5T9ipPKtwDzkyUcrWnjU0MFa%2BIaXvKnXEa3yXLyRNtsuaidWGPnskFCQoLGe1rgGeFGhtXNcfaZzyof7rrWRm1qc%2FhV3HNBkiUXsEN5dTXcSTbdLq5D8Ybz9%2FXbgpj1ICGKzOgjviYPpM2%2FbdR39bQwJm1hA511AHWXxNh2YdxUgkSicSh3pc32QsIt9q3IxsuoEozXwuFscv1c8M35exnkEMl5cHx86ZnpKjdEtFz%2FKaHbgUGw9%2FvpUTOlcrL6zdHJ%2FESgLO8V%2BRQ02nNo3bTmPG%2BDqRlChN7l3XezyjNH9bXQn4bu2qzu9%2FiD4lkkbMq%2FoEFZPkVvonS%2BIq6TYIzqNq6EQ8YyMPohfCpVjTFIZujoFHWzMEQJjerhBpoIAjYP9oyvd3qtuullU9a3Ncv6NKbBT0zmTaQrauKIgKZD2xDAJFbptTPcXLANiAGZrdU0NF1BzvPBAzlGENT8ZDum1GZl1bpOawqC3uiGl1FSZuS9%2BDWG4dxgT5%2FPg%2BkmJHixJoTMCYligNwZfVegAXA5eHuHpkLVvGccAw%2FI5V8zEQaFQQm6b7qSp4vUfahs07uxMTOXu0zLsmQ2JM9IUW6yMNTwvNXVL%2BvCP9dWQ5HPjhfq0YP6VpsYPkh9TIk9rsscyQw9fXvwwY6pgFNNTuWYr%2B%2BahL7DlORIyX1foJT35ACCwq%2BWPNUaB%2FrJWxJKOo4KGvo3f46noYFJ90OBycJLIQzispFgZFNS0wWS%2Fy%2BH%2BMtqVz2laFZhc7cJGFGZ%2BP%2B9%2FPRKloZFCZo%2BBVrYzy0i%2Bd7pEmn72kAlLCStFT2OAfckudmLt7KJDdDtrzDJlK7Wal%2Bipm1Cer2R9J2sYaDAeYlUXB%2BV5q6ure9BGbNPqJ1&X-Amz-Signature=fdc9af5a203d9dd0922c8142f7cca722a16634b8bcac8b997d14a82f7e5f4981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
