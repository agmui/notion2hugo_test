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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYCXEFM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB7gp1THQ0mOZ21OSnBfYrvxjgESj2t3B0LhiQEBF3ZjAiEAh6WZn9KyE9ppsoT7n%2BC7OjmpklKDy60BpRu6z8cAiT0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrfmtRLrnB3CwGZ1CrcAxVEIcELjtfipCQaOcW9P01x8%2FHuZcyCBZNB3kQr2pf7CYNhnX7hO75jZits0cG7EyeBtAe%2BEIWuy106KBEYIKl8ZuivTQ5qW7hmQ8qKj38nNmVKCsACqp4jX9djSx02xVHZV%2Fmu7UgwKJEZNn3io%2BQeXHdWGhJxsdhVL5NpNXR%2Ber2e%2Bk93QsQ%2BaM6xdie0GU%2FKnK7TJ6brzuD4drpgjZl4niS5Xh18wgnkM2i%2B1cFSzWWc7SPN2HtAbL8A2tZPYDCqUlWvKI3%2BhYhe71owX4SheAx3Cq92Jlyex5uryol4dGj%2FIPthe7%2BmNhlEUvWK25We4iGBTtH2Dvwy%2FPoTAsuSbw3MFs7V0%2BmEds2N2UJfmX%2FptMYwbbxj93xO%2BJ9kYmMSb9giPwzOCRoibI5%2F2mt1eHL5DGT03g59I4MWwVAmpXBxJe3wewbpBWJssGVXnTlTnI753LLIvHWarRURXeP8AvnE%2FPBYhPpYRfFjhNZFdFmS26bECjvEKYJ%2B2jsyvCJadYIC461PkCQOppMubnclt2m398yPW%2BZOelkFwMxFrVNDW6Nj7XUt%2FaTvNRloe2br%2BY4KupSbYyXPzYLgixNyjhbTvgVOYRnJQmgQqG260YdQ8fiE1jlpaVMiMIrHjb4GOqUBSNwRXZ8CRXkvTE6BmCjX2dKwAm77EMlImmxyMljBeO6BE5798iESRczVBDDcrxbJF%2FqZrcVFms43OIlY57YcI77f2h91G2AEBP7KR9WDkp9Jd8xC0XWpC811aPyq%2FTBIcjz2h9sL2EiJqEPkjW3S8Eaznmmf%2FAQTsRNZZf0m6oVFmITlE39HuLRf2LvieJ7fNVteuZrLFEwYT8e1QWeA6GoK8MV%2F&X-Amz-Signature=cd3236eca959e704b78ec6d1ead663692790558064b583812e2c2185f18b621e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYCXEFM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB7gp1THQ0mOZ21OSnBfYrvxjgESj2t3B0LhiQEBF3ZjAiEAh6WZn9KyE9ppsoT7n%2BC7OjmpklKDy60BpRu6z8cAiT0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrfmtRLrnB3CwGZ1CrcAxVEIcELjtfipCQaOcW9P01x8%2FHuZcyCBZNB3kQr2pf7CYNhnX7hO75jZits0cG7EyeBtAe%2BEIWuy106KBEYIKl8ZuivTQ5qW7hmQ8qKj38nNmVKCsACqp4jX9djSx02xVHZV%2Fmu7UgwKJEZNn3io%2BQeXHdWGhJxsdhVL5NpNXR%2Ber2e%2Bk93QsQ%2BaM6xdie0GU%2FKnK7TJ6brzuD4drpgjZl4niS5Xh18wgnkM2i%2B1cFSzWWc7SPN2HtAbL8A2tZPYDCqUlWvKI3%2BhYhe71owX4SheAx3Cq92Jlyex5uryol4dGj%2FIPthe7%2BmNhlEUvWK25We4iGBTtH2Dvwy%2FPoTAsuSbw3MFs7V0%2BmEds2N2UJfmX%2FptMYwbbxj93xO%2BJ9kYmMSb9giPwzOCRoibI5%2F2mt1eHL5DGT03g59I4MWwVAmpXBxJe3wewbpBWJssGVXnTlTnI753LLIvHWarRURXeP8AvnE%2FPBYhPpYRfFjhNZFdFmS26bECjvEKYJ%2B2jsyvCJadYIC461PkCQOppMubnclt2m398yPW%2BZOelkFwMxFrVNDW6Nj7XUt%2FaTvNRloe2br%2BY4KupSbYyXPzYLgixNyjhbTvgVOYRnJQmgQqG260YdQ8fiE1jlpaVMiMIrHjb4GOqUBSNwRXZ8CRXkvTE6BmCjX2dKwAm77EMlImmxyMljBeO6BE5798iESRczVBDDcrxbJF%2FqZrcVFms43OIlY57YcI77f2h91G2AEBP7KR9WDkp9Jd8xC0XWpC811aPyq%2FTBIcjz2h9sL2EiJqEPkjW3S8Eaznmmf%2FAQTsRNZZf0m6oVFmITlE39HuLRf2LvieJ7fNVteuZrLFEwYT8e1QWeA6GoK8MV%2F&X-Amz-Signature=c27e280cffa5c27fb3349d766488b7915b72e7a3065b0a3bf9962d328be0d90d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
