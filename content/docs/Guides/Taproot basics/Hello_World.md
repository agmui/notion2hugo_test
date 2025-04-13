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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4PORZ6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIADlRwfzCOPT1saGYra06wP3dTt%2Bj6rXXgeYeOzjwKIzAiBHxONpDhbZhc5MdExCRSwa%2Fh9J3XjYmWh6CBXMAX2j6iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxjkYhNMlAeOZW6iKtwDFm8N9Yk4SGf4Ws1P1oVQQKHT6torjUGLNhGncT8Pc84InIe9tWDMuy3fealVxzuh6TaEhvBfZcSqWTRWbxlK3Ige%2BTvxsBlblMottuVsl5nGPVJzZRHKwzIyHXsaxBMETUTXfNJ9BJ9WFUoeWMdKutAhNx5OxHjYNoMVwnIw0K9yvtCNIjWifWNYoDeITJrAlpXn6qYVVzfD8Qm5PA%2FBV7cnbmprvY3EId38p%2BjTsv2zy406qrOFg8SOJ%2FwH%2F5iFEDyjE9%2FzEWoUOrY3cmjSbS2kSM2JzkCz8Vbfm6Ers5d787KpQl1ah5bzKVK4mYcmrO4ncm%2BJYI8mh54IFglFY79%2Fh7casjEbFwqa1iN9tz%2BaBD129AdxTuS5W3wFfzkG5Tw11nIKjEbDpQS5Frf%2BDkd6vxjiiSqN%2B%2BnAIoU7RyuLXYHzRMr2LDQiUctUrYuQvIeEtkJBhFKc%2BIKJhBL7HrCql9Gxh2kEbm%2BRFGmKxUGQg4EJVE3FdQk2y6HwcHZap6kpE%2FChRyMYxCE9rxuuVg0o3tBHuZo9hxaBB3SsrNI7j9xg%2Fg9FSlcp6RxDIgSK2tXuc3nT44nNXMm6d6XGzujfqpTucMdouFWmLsuaZbRYXYB%2BmhRpRHdDrXcwg7DwvwY6pgGirBQnmJNY%2BuOgE1KjkTkUaTOVuE7Gj7bqgfMGBKnfo6JpWhSX09NRZgJ8mZ0NkqjVp9rxl8rUUOAWvq4lvl%2FljEQQDBozv%2F9wJ%2BoAwmZtd%2F4gtZHcwUd%2BM8rRLIxISAAuZ0ChEkj6oEiHJyCTdiQhy02LuI6qbEJvco0m2Pn3eSbXTUJlG98E5t0ic22GJqhOYnECsXpDJUjIu77K5annZ9HFnWeN&X-Amz-Signature=29c63546e06bd0a992ec070923c35b38d7117fb5400846c891ce32cc106bc21a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4PORZ6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIADlRwfzCOPT1saGYra06wP3dTt%2Bj6rXXgeYeOzjwKIzAiBHxONpDhbZhc5MdExCRSwa%2Fh9J3XjYmWh6CBXMAX2j6iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxjkYhNMlAeOZW6iKtwDFm8N9Yk4SGf4Ws1P1oVQQKHT6torjUGLNhGncT8Pc84InIe9tWDMuy3fealVxzuh6TaEhvBfZcSqWTRWbxlK3Ige%2BTvxsBlblMottuVsl5nGPVJzZRHKwzIyHXsaxBMETUTXfNJ9BJ9WFUoeWMdKutAhNx5OxHjYNoMVwnIw0K9yvtCNIjWifWNYoDeITJrAlpXn6qYVVzfD8Qm5PA%2FBV7cnbmprvY3EId38p%2BjTsv2zy406qrOFg8SOJ%2FwH%2F5iFEDyjE9%2FzEWoUOrY3cmjSbS2kSM2JzkCz8Vbfm6Ers5d787KpQl1ah5bzKVK4mYcmrO4ncm%2BJYI8mh54IFglFY79%2Fh7casjEbFwqa1iN9tz%2BaBD129AdxTuS5W3wFfzkG5Tw11nIKjEbDpQS5Frf%2BDkd6vxjiiSqN%2B%2BnAIoU7RyuLXYHzRMr2LDQiUctUrYuQvIeEtkJBhFKc%2BIKJhBL7HrCql9Gxh2kEbm%2BRFGmKxUGQg4EJVE3FdQk2y6HwcHZap6kpE%2FChRyMYxCE9rxuuVg0o3tBHuZo9hxaBB3SsrNI7j9xg%2Fg9FSlcp6RxDIgSK2tXuc3nT44nNXMm6d6XGzujfqpTucMdouFWmLsuaZbRYXYB%2BmhRpRHdDrXcwg7DwvwY6pgGirBQnmJNY%2BuOgE1KjkTkUaTOVuE7Gj7bqgfMGBKnfo6JpWhSX09NRZgJ8mZ0NkqjVp9rxl8rUUOAWvq4lvl%2FljEQQDBozv%2F9wJ%2BoAwmZtd%2F4gtZHcwUd%2BM8rRLIxISAAuZ0ChEkj6oEiHJyCTdiQhy02LuI6qbEJvco0m2Pn3eSbXTUJlG98E5t0ic22GJqhOYnECsXpDJUjIu77K5annZ9HFnWeN&X-Amz-Signature=6a6e43fd2f81af2a94aafe518fe9ee3bc0f3f833ce254cfd50c6a0a6da5293b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
