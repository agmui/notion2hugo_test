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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXYCO3M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHEdZna08uZKQNED75oNOrjqmF8z10CaepsOEmPluXDAIgSpPRiPxxxNiO56Ng2HfYfmg6PjSI1R1nXFWYrGDPFyQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpQUlmU0npAp%2F8avCrcA%2FY18FyrXuvWHmhhMAkXMcZhRxr%2FtXKbHvEwAYOArEJPZ%2Bo9QOzGd2%2Fr5K6%2Fv%2B0hgU9tgJF%2B4d6KCmPRrLMxlI0MZnUD2CA5Ft18Mk56hOkJshxuhlnsakMMekj%2BNr%2BT2nC7ERt5tMC8%2B%2BImUNkjqqokxbFvxkzszwyx7MO26ySavBu0vQHgGBt78UvH%2FmYIq%2FitrQVe0FlseGkq%2FTewN3Psq3LiTf1grKCREp8jSnA5BPlS6j%2F%2FgKTFFbo%2BuueTQWVy3HelEwpP3lTzi%2BXRMJ0VqnqbAE5FEj2%2BD0TAeL7Jy56uD9gu9wtTVo1cVDFWEhXiF2Rt%2F%2FXUI68Ys83%2FlXQh9c%2BkO3D6sy0ktUrFjYWYOHcHaBFWJNsscn0YNuewyh3plcRNpeogt4xcqmxZO9vqJBttsLTfRrdfHi%2BFIJR9xSMrsngW2liR0sthMiBORU3TyZzeawSsDE9Vt33FKhHsN%2BHF4RakQlAprrm65I5eWz3FvCAPzIvh9ixxdfWRo2V9fisOmQCWVwv%2BL0Psmj7s3De2YLDwE%2FSdhASVAg4h8m%2FKMNyUdGzzfMldSo2dJq3b%2BWuzLJtdB67gCUIk%2FTF4GIkbAqtCUlvJ4i%2FNvIP57OqEXWK%2BQZjHnuf7MLPEkMMGOqUBnHHOvwfknGc43Xpp8PR8PpC8qmL7%2FnKJ%2Bn1rhGLsoZx5E2ht7FII3CAN06OL8YSOnT9K10MSvXZUrMMu4dA0yAkDn55rms7UIpCRW93TR53sR%2BT3MDnop050H3SlBPBmL0OrDvW90P%2FNBS7%2Bs5yy7t45ovtpv6Rzo8NtRhZ9YWO%2FvYq0NtTetEa6LJWZIvYtZ5hlH3HcGBQDnk6eMSY8bht6wvJN&X-Amz-Signature=c982543fe95776123cf4cda2378c9b602b0e4d182be9e76838eaa45eebbda121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXYCO3M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHEdZna08uZKQNED75oNOrjqmF8z10CaepsOEmPluXDAIgSpPRiPxxxNiO56Ng2HfYfmg6PjSI1R1nXFWYrGDPFyQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpQUlmU0npAp%2F8avCrcA%2FY18FyrXuvWHmhhMAkXMcZhRxr%2FtXKbHvEwAYOArEJPZ%2Bo9QOzGd2%2Fr5K6%2Fv%2B0hgU9tgJF%2B4d6KCmPRrLMxlI0MZnUD2CA5Ft18Mk56hOkJshxuhlnsakMMekj%2BNr%2BT2nC7ERt5tMC8%2B%2BImUNkjqqokxbFvxkzszwyx7MO26ySavBu0vQHgGBt78UvH%2FmYIq%2FitrQVe0FlseGkq%2FTewN3Psq3LiTf1grKCREp8jSnA5BPlS6j%2F%2FgKTFFbo%2BuueTQWVy3HelEwpP3lTzi%2BXRMJ0VqnqbAE5FEj2%2BD0TAeL7Jy56uD9gu9wtTVo1cVDFWEhXiF2Rt%2F%2FXUI68Ys83%2FlXQh9c%2BkO3D6sy0ktUrFjYWYOHcHaBFWJNsscn0YNuewyh3plcRNpeogt4xcqmxZO9vqJBttsLTfRrdfHi%2BFIJR9xSMrsngW2liR0sthMiBORU3TyZzeawSsDE9Vt33FKhHsN%2BHF4RakQlAprrm65I5eWz3FvCAPzIvh9ixxdfWRo2V9fisOmQCWVwv%2BL0Psmj7s3De2YLDwE%2FSdhASVAg4h8m%2FKMNyUdGzzfMldSo2dJq3b%2BWuzLJtdB67gCUIk%2FTF4GIkbAqtCUlvJ4i%2FNvIP57OqEXWK%2BQZjHnuf7MLPEkMMGOqUBnHHOvwfknGc43Xpp8PR8PpC8qmL7%2FnKJ%2Bn1rhGLsoZx5E2ht7FII3CAN06OL8YSOnT9K10MSvXZUrMMu4dA0yAkDn55rms7UIpCRW93TR53sR%2BT3MDnop050H3SlBPBmL0OrDvW90P%2FNBS7%2Bs5yy7t45ovtpv6Rzo8NtRhZ9YWO%2FvYq0NtTetEa6LJWZIvYtZ5hlH3HcGBQDnk6eMSY8bht6wvJN&X-Amz-Signature=68b0c787c36e9135859d07133dc6bd8294950330c6f650f9669941f7c7409bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
