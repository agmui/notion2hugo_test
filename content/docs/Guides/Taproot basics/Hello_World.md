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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=1c5a5d5aab2f10645cc85e4c12b283a4d2fcfde4a0f49a1b9092349a94cfbfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQANK6A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCczjtk3dCjWhzI1lq54XOot4CmR%2FgdRX2GggzWInL0fAIgN4NYobXxbRHYaAwyHlWnZ0knrQkPeBNJCKSkZebakQoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCGAVJikfvYI4jUkqyrcA4rDuCsJ22y5PQlD3hGIZXHSkYZX4UVfn4kblzqytnaj%2Fycu3mNep7Itwq2%2Ftg3LHIX07WHXR4oUEtPn0FBK99ZeT5D%2Fc6FaHgQlFIzSAe1%2B%2BD1GYQgX3TbCqGmW%2BdKyT1oDQySDFkQNi7D0n0FzCNwWD2dypHpN8I6toN7Wpm7YkJOPWuSF1NLvhFnUtlq55wd4YP74aYzsjNoitiPBpIea999J34poQSi1KDQcePr52zAZedtwtBHoW5sELngvHUEvHm6xlUMpoj92Pk5Radbi9KntbwWpbVPpH9WjSRCVZu5dud3tKPBRx0kbVBH0ZCfv%2BBRRZ9JealzxxNIvw3GUPLpXIHITGeZZaZbYgySVv%2F%2Fif4UqpUL3LNnk4ulFbEKZLNDM4TK3esg0a%2FlUUdwhZosXmzvUu99B6gBe2TqH7T%2FOSmpzmbELlCSKUVf9yHreivudS97yUZcMHUWe4ZbD8bsexsI%2Fz10hUh0kujyVyqvCSRq8tlWPaRYvazOUV8O%2Fi0nO2yBwh%2Bh%2Ff2r%2BJm9%2FAwdcyZh4lDE%2F4U6%2BnA27lbyTkqWdAyZKQ%2BwVKrKZ4dEpYrsUE74LCUF0lBrY6ZsSNx2iMwSo7JbiOG0uYyO3kT4mFkZX60P7xeexMLeWgsUGOqUBGCe4Ryw%2FLAwOx%2BI45htlzsXe15u7jkc2Y5ysMZ1iUuHJXzRXNVQhRvac%2BqcMf5%2BhBUYrchnMkzb%2FhMoULrNjTG5JHLL3e6x3e7IaYsNfy3SLXnPbkCXWiSardm2JXWwqMrn9Nmz%2FxIBHFseyt6asO8FdvKclE%2BjkbcOKC1busYcrXHN9mG0yEdqwO8%2Bf883pPt414DtoY3qgCMb9yXqEd4cjhzMy&X-Amz-Signature=6536e860399fba89157a0c86c6e29c73acd82856ff1493ea03ef12ac25833f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
