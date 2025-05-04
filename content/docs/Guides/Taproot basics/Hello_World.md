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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5IEAECA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCC0yP8uxsSlg%2B6rdVhdz1pRr1iPPU57DLGMMYlsA5LKAIgcoYDPAxC0JtfcvC4T%2FtnfMiF32MbAW4pU%2FsxP8w6H3YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqFl%2BlAjPhJk7%2Fq8CrcA4cQjYNEMrSM17tntIvCmDDfxZVxEk45oLYW0ZQz6hNt2CIazEoR%2Fx95N10ib64GXP3c2r%2FfaWpJ1E0IFNgoGgSsh19HVETihH9P%2BjwDgAezCCzusJuL9Uo%2Fw05VrsOUeSVlcoCUJKeoPgSTV8l0%2FxaO%2BBPoKOUZ4gSaE563GX71aowvJ4hIyzWd1DxJhc6M%2B2cbjNOPHJCC27KIV36%2Fli8qjcYo%2FnAkCXHwu8tts0TgQqa%2F%2Fv6uVJl5kwFDS1DY%2Bu7QuHYK4Tn2ivDOyAuetjkuDdDWzgksJmigkwNPvzWCCFUfFEUI7KszIivkxarulpPYul4EJ45VULwaCAjsjYOdTL%2FOcJD14bmWOfwkmqA5OicfDObMBlGr9GFH4D4CS%2F%2FX%2BmU8fV4QDee8fz532%2BArw2DTE84GRTkWCnGXF2MlO3MW6WfwTeuSlSv4Xtlp2sj1Gs%2Bd7%2FFbF1oTOoF8tZ%2BFgeNDUudXGgYjPObV58pm4dLHz74NVDz8xjZZW7O3Xk5%2FjfiOUcsLqhP7NH0gWcd%2FKtTWORHIULkmKjpG0NDRRs8ifYUeVNTb3IMaZLvERBvincinLovhD5gaZRvDWm2Ks9SzwtYVITWhPW0zhodhsceTAM7RxWD%2FGRPwMKfr28AGOqUBzbeGeUxrK1rKO0GpSWY2WL5HTef0kaW9xG%2FYL0bUjk%2BVXiBkD%2F3zw2XKBQmbal5HLele6fNXYB0EYz8uL2ft4TeGIL%2F6wfHi4gtGBENbbHCp1XNercR%2BnD4Vr5TmbYjEsNoBdycnYMOuKVsiKXB%2ByFEH5wlGDSmcJImH%2Bym826dlmwA6EiN7AX1WjlDI9Vj%2BKVclYn0zHXbPf26W13oMRNKvOege&X-Amz-Signature=2f9b13e268db7d84624b51465c388c5858f5f76a89501e1472fe4eb671477caf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5IEAECA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCC0yP8uxsSlg%2B6rdVhdz1pRr1iPPU57DLGMMYlsA5LKAIgcoYDPAxC0JtfcvC4T%2FtnfMiF32MbAW4pU%2FsxP8w6H3YqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqFl%2BlAjPhJk7%2Fq8CrcA4cQjYNEMrSM17tntIvCmDDfxZVxEk45oLYW0ZQz6hNt2CIazEoR%2Fx95N10ib64GXP3c2r%2FfaWpJ1E0IFNgoGgSsh19HVETihH9P%2BjwDgAezCCzusJuL9Uo%2Fw05VrsOUeSVlcoCUJKeoPgSTV8l0%2FxaO%2BBPoKOUZ4gSaE563GX71aowvJ4hIyzWd1DxJhc6M%2B2cbjNOPHJCC27KIV36%2Fli8qjcYo%2FnAkCXHwu8tts0TgQqa%2F%2Fv6uVJl5kwFDS1DY%2Bu7QuHYK4Tn2ivDOyAuetjkuDdDWzgksJmigkwNPvzWCCFUfFEUI7KszIivkxarulpPYul4EJ45VULwaCAjsjYOdTL%2FOcJD14bmWOfwkmqA5OicfDObMBlGr9GFH4D4CS%2F%2FX%2BmU8fV4QDee8fz532%2BArw2DTE84GRTkWCnGXF2MlO3MW6WfwTeuSlSv4Xtlp2sj1Gs%2Bd7%2FFbF1oTOoF8tZ%2BFgeNDUudXGgYjPObV58pm4dLHz74NVDz8xjZZW7O3Xk5%2FjfiOUcsLqhP7NH0gWcd%2FKtTWORHIULkmKjpG0NDRRs8ifYUeVNTb3IMaZLvERBvincinLovhD5gaZRvDWm2Ks9SzwtYVITWhPW0zhodhsceTAM7RxWD%2FGRPwMKfr28AGOqUBzbeGeUxrK1rKO0GpSWY2WL5HTef0kaW9xG%2FYL0bUjk%2BVXiBkD%2F3zw2XKBQmbal5HLele6fNXYB0EYz8uL2ft4TeGIL%2F6wfHi4gtGBENbbHCp1XNercR%2BnD4Vr5TmbYjEsNoBdycnYMOuKVsiKXB%2ByFEH5wlGDSmcJImH%2Bym826dlmwA6EiN7AX1WjlDI9Vj%2BKVclYn0zHXbPf26W13oMRNKvOege&X-Amz-Signature=d85a33f4912378af224cd3e586e03d8c5992d023aab01928a4084d620bf01d64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
