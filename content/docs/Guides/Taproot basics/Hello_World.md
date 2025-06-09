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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEFFL2G%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2BQWFwvJ%2BBl63cD1jyKou9qFgvU2YoDbndVQVPN3llQIgLaOSYYcPKw0y8oBxqPd0mEN2rFYTKmO%2BaxXbabI%2F4pAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI8yyI0VzAb2hLe7SrcAw%2B4Z5wvTdfALSc37ZNtwdcwLc%2FONeVNDwJlTKFJEDD5Hn3NvRizUwA%2B3k5IgsTLxxl8LGcOhC3ICfTifqtGEZ4GABhD5%2FErtsTyy30ELruHcDtUQ76ET%2FdDD6Qe%2FytTGZHuAjkHMd95geqvV2N1AnkCmPAMgTxqnESNY9DJkknaRtsKmXBq7e00aZbTBYpq7UV1VRIn7t10TPhzLj2Ag9vkr8%2F4ARIMcVKo4Xs%2FQqrS9YhPcEAJ8W%2F2PmKvVjwMNtBGhPT%2BtVky9h7kAmJ9tRy63o5tbvVVySR%2F7IS0hKiYmd%2BToN2B7ZzinYt%2FygZj6zWAlwEC8t2Xl%2BBvQIdOxkQagKMlME8dRZEkYEazEu4qw%2BtvRVQ3%2B4fmu9vrJILjmXl%2BtQgeaPtELlP3a%2FPs7kf3SzHuggy8gpMSWa30vEOljolkvxijEgNEYCajmRg%2F%2BLuGcOyvYydvAWnxtqKe8GFjeeCn4%2BNI311xZtbjIQUAALi96GiJJ%2BcRyOGZEo%2BZIhxtgGEuUuS2aTQ58KmsSOvsO6thjzX1Wvwj%2Fdr%2FllECpnYWya3U4JI4k4UdmkAAa3Xf%2FxI%2FO5p%2F5Ke89MaNmFuRmIwf1PhcA%2FQbBqL%2FZO4KMfnXav1o8qXG6soEMPqFmsIGOqUBQ24Z%2Fr4yX5bCjioX%2BT%2F1rdaJWaoYA6NkQEpVaCysgtZTghFmgZvTdsaMcjlwRuF3hVHlDKOuQ2vQxZv0EbLMqHEORE5XzvSII%2BXMiYFNgetHtXUFJ6C9VpAU%2F1MyscPlBZkdioEPo9LW8GCydgzlk4hTy41kWrJNioO%2F2ETLlTwdeJ3uM6mxUyJwSrUUbS%2BTwsp%2Fb5Fw5pFokuceL2w3cyFLKjm8&X-Amz-Signature=83c9e8d6154f630dd643ac6eb96d6a932bb137f3db32ca4699b0cd2242371d58&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEEFFL2G%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2BQWFwvJ%2BBl63cD1jyKou9qFgvU2YoDbndVQVPN3llQIgLaOSYYcPKw0y8oBxqPd0mEN2rFYTKmO%2BaxXbabI%2F4pAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI8yyI0VzAb2hLe7SrcAw%2B4Z5wvTdfALSc37ZNtwdcwLc%2FONeVNDwJlTKFJEDD5Hn3NvRizUwA%2B3k5IgsTLxxl8LGcOhC3ICfTifqtGEZ4GABhD5%2FErtsTyy30ELruHcDtUQ76ET%2FdDD6Qe%2FytTGZHuAjkHMd95geqvV2N1AnkCmPAMgTxqnESNY9DJkknaRtsKmXBq7e00aZbTBYpq7UV1VRIn7t10TPhzLj2Ag9vkr8%2F4ARIMcVKo4Xs%2FQqrS9YhPcEAJ8W%2F2PmKvVjwMNtBGhPT%2BtVky9h7kAmJ9tRy63o5tbvVVySR%2F7IS0hKiYmd%2BToN2B7ZzinYt%2FygZj6zWAlwEC8t2Xl%2BBvQIdOxkQagKMlME8dRZEkYEazEu4qw%2BtvRVQ3%2B4fmu9vrJILjmXl%2BtQgeaPtELlP3a%2FPs7kf3SzHuggy8gpMSWa30vEOljolkvxijEgNEYCajmRg%2F%2BLuGcOyvYydvAWnxtqKe8GFjeeCn4%2BNI311xZtbjIQUAALi96GiJJ%2BcRyOGZEo%2BZIhxtgGEuUuS2aTQ58KmsSOvsO6thjzX1Wvwj%2Fdr%2FllECpnYWya3U4JI4k4UdmkAAa3Xf%2FxI%2FO5p%2F5Ke89MaNmFuRmIwf1PhcA%2FQbBqL%2FZO4KMfnXav1o8qXG6soEMPqFmsIGOqUBQ24Z%2Fr4yX5bCjioX%2BT%2F1rdaJWaoYA6NkQEpVaCysgtZTghFmgZvTdsaMcjlwRuF3hVHlDKOuQ2vQxZv0EbLMqHEORE5XzvSII%2BXMiYFNgetHtXUFJ6C9VpAU%2F1MyscPlBZkdioEPo9LW8GCydgzlk4hTy41kWrJNioO%2F2ETLlTwdeJ3uM6mxUyJwSrUUbS%2BTwsp%2Fb5Fw5pFokuceL2w3cyFLKjm8&X-Amz-Signature=1de41228726c59c1f10103dae52aa12435941cf86df6f74cac738e0ff4baf3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
