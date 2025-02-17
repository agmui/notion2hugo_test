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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYUOCJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHtui2wME9WZsbdjkl8TqcKd7iXTu2fK0X6gzMxv5lvgAiEAoXoZdstBu4ZxOWHVHeinv45be5iBdbcMNnVRBrXDH7Uq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCvJ1EwGblcsgRvO7yrcA90E7%2FOONilD2E1Aculyzzp0WYqSEmn9ket2LPv5l45e%2BbXImVFqm7Muad1%2FPnb4zxcHNrTZKiPsIvAtt0rWc5RcfiLhNJkw5hTD7sWB8WP7bu53aULBSqR%2Fn1VZpFtjABcZcnaBNvs9N01ot9VUqBW4dDX1vx3PPZZaCohDwef0AiN78DAIFyOSKsni2E7D4jdUBxKBMGWrCMQPVUBw2ph1tJ7aCz3IJtoJ9wc9vzgGj82MpOFrLGfu1lpOJ%2Boz8HfJDY0Lk2DvnhO5kXCw%2BqAlxDq4W7JtbBHJ5oNyr8mR5858qBDpbLxCnBsspo8ZikFRUVEKXx06WQzObgSbHKaSl8p06P27V%2FIbAvMm7tc379TW4iaeOWp5%2B%2BxbhVSWRvWWjpDG69JnT89Xy5wBJuny%2FzXfVo7oo8gf%2FxGmvvnRP%2B5jTfFqwMBvTQA6hyz6IWzhdRS6OejsjXW5eAzyNo7cOvAuf2U%2BozThsGoV6IH7b1rAVFxM%2FzQr3jD42bjK%2BwbqTKnsPCas%2BMuXAw3qTCjPKKfxH29ntdehSfo%2FxM46%2FzXhH086lA%2Fgsf%2BgMbuM1VuE%2BnXZVVF2Pe7fMSoW1%2Bm66ykVzlryANr8gGOgkDwd0UkCneGe1cqCJIpWMMfCzb0GOqUBEJmw9LLx%2Bicry%2Bh6Rzi6PZbg1wNhU5bP4xsyoZPsj3rNZgWZEhsccmALS9BhPx98ptUP5Ud5TPmG60Qgo4seaRg%2BzQgp0BH%2BXLQBW%2FCqawdaSDnr2wMRFy5anlktZWr7DuaI5roFWzZdkFwA%2FdKarydLadGjIPW9hoc0AlDpmqrNhD6lEtvX3WkfhySdhlVB%2BvQMjrxz3k8f8UpVB34Ol5YmWMm6&X-Amz-Signature=3c63facbeb1181e700be57e42c77a9b93c408f0baba0589ad2dceedc03caabcd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYUOCJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHtui2wME9WZsbdjkl8TqcKd7iXTu2fK0X6gzMxv5lvgAiEAoXoZdstBu4ZxOWHVHeinv45be5iBdbcMNnVRBrXDH7Uq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDCvJ1EwGblcsgRvO7yrcA90E7%2FOONilD2E1Aculyzzp0WYqSEmn9ket2LPv5l45e%2BbXImVFqm7Muad1%2FPnb4zxcHNrTZKiPsIvAtt0rWc5RcfiLhNJkw5hTD7sWB8WP7bu53aULBSqR%2Fn1VZpFtjABcZcnaBNvs9N01ot9VUqBW4dDX1vx3PPZZaCohDwef0AiN78DAIFyOSKsni2E7D4jdUBxKBMGWrCMQPVUBw2ph1tJ7aCz3IJtoJ9wc9vzgGj82MpOFrLGfu1lpOJ%2Boz8HfJDY0Lk2DvnhO5kXCw%2BqAlxDq4W7JtbBHJ5oNyr8mR5858qBDpbLxCnBsspo8ZikFRUVEKXx06WQzObgSbHKaSl8p06P27V%2FIbAvMm7tc379TW4iaeOWp5%2B%2BxbhVSWRvWWjpDG69JnT89Xy5wBJuny%2FzXfVo7oo8gf%2FxGmvvnRP%2B5jTfFqwMBvTQA6hyz6IWzhdRS6OejsjXW5eAzyNo7cOvAuf2U%2BozThsGoV6IH7b1rAVFxM%2FzQr3jD42bjK%2BwbqTKnsPCas%2BMuXAw3qTCjPKKfxH29ntdehSfo%2FxM46%2FzXhH086lA%2Fgsf%2BgMbuM1VuE%2BnXZVVF2Pe7fMSoW1%2Bm66ykVzlryANr8gGOgkDwd0UkCneGe1cqCJIpWMMfCzb0GOqUBEJmw9LLx%2Bicry%2Bh6Rzi6PZbg1wNhU5bP4xsyoZPsj3rNZgWZEhsccmALS9BhPx98ptUP5Ud5TPmG60Qgo4seaRg%2BzQgp0BH%2BXLQBW%2FCqawdaSDnr2wMRFy5anlktZWr7DuaI5roFWzZdkFwA%2FdKarydLadGjIPW9hoc0AlDpmqrNhD6lEtvX3WkfhySdhlVB%2BvQMjrxz3k8f8UpVB34Ol5YmWMm6&X-Amz-Signature=8ce43b2d72ebeb87b06090da02c509d9302b40f844fbe5b76e8dd49f1f8980de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
