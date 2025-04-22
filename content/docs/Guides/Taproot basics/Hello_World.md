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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXEJCJT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC8DrXRlh8Uqsm%2B02Sg1%2FIp5mmyInRB4jSEBBXo0bLKoAIgB733AF7oZX%2FENF0m%2BxdYpB2xKltPMUNBKD7j4ZVx89IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMxHJ4mjimXZHEC1SrcA5EPwVh%2FUnQlvkJqmKe7sg3c%2FY06cDd5YJg4iqbI120XDpeaEZ5fV%2Blklt8PjUcRuqBC7KYMbFfkOTlBW2yc%2BxHfeT7J3fqUlgPq8o6LvSQwEh6la6CNIg0ThK82P6NbBxWFIrPNDjDQksJ3NMONBEfEPox6hAtVo4n%2F56TBqefVL5wMfoL1ukfJEmitYtBFnAOdYgqvw9YaPRJH8FcD7IQWldV2dpCeHf5ljIOsOdh5Q3pRvuyR7JNpWqUr3bdzG%2Bk0kUhYbZstJYDDWGz50mvxonPw1TCBDd5Jc4xiRUjum%2B%2BQJIxRMnyaDBmJdDxgHC0OXKmr%2FjilrVJJPh5JrfxuyoODscNKqHQjgr2kPmKywdnTsXJQlYtp3EMMZaWAgCOJfMLRfGX3ORrqZHR5uXCN6pw8wKhhgCLzX5tgQ1gjvJW9o78mrwGwfrAH1SLBNgHFJjDzOUh1qt3%2FTU07Ilao9CgT3E7HB8Wup7Ecg55wVHf0ZuXuWUfU48DGIJOOhNQIQGKirAUTEOuTVKh9CFt3f4CCkmk8%2FdYus5AO897k5svn%2F27Sp0Ze%2BSESLrgROPo2YEnnY%2B8CupxygdeJhzG8wf9TAaOYcgsjEvxfc%2FcwWYEokuR3arYUvD6%2BMIj2ncAGOqUB%2BEWgsiUGtcz4kvxPY1Rb7sc5vQwp5Cwnk6VMS9fe3jB0hd1FdKwdloQH5dbul40bQvnsd3LiTuX9CbaUfWA0%2FNjBkzYbTun5z3FS6T04nloKDSaax4e1fZDLg3QB4geZ%2B%2ByLAd03NFvSwM3ZG41Jid3btzgF0EBfrZeWwMVaOUEL%2FEyXV%2F0W%2BwB%2BoNwFf%2Fa4deZzoTwcSrZD6%2B5C18X%2FL2cFaTfU&X-Amz-Signature=f1747dc0cb8fb8d2721c9df755bff5bd6deca7d9e0f2f8b033a8aef3058d40a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXEJCJT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC8DrXRlh8Uqsm%2B02Sg1%2FIp5mmyInRB4jSEBBXo0bLKoAIgB733AF7oZX%2FENF0m%2BxdYpB2xKltPMUNBKD7j4ZVx89IqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMxHJ4mjimXZHEC1SrcA5EPwVh%2FUnQlvkJqmKe7sg3c%2FY06cDd5YJg4iqbI120XDpeaEZ5fV%2Blklt8PjUcRuqBC7KYMbFfkOTlBW2yc%2BxHfeT7J3fqUlgPq8o6LvSQwEh6la6CNIg0ThK82P6NbBxWFIrPNDjDQksJ3NMONBEfEPox6hAtVo4n%2F56TBqefVL5wMfoL1ukfJEmitYtBFnAOdYgqvw9YaPRJH8FcD7IQWldV2dpCeHf5ljIOsOdh5Q3pRvuyR7JNpWqUr3bdzG%2Bk0kUhYbZstJYDDWGz50mvxonPw1TCBDd5Jc4xiRUjum%2B%2BQJIxRMnyaDBmJdDxgHC0OXKmr%2FjilrVJJPh5JrfxuyoODscNKqHQjgr2kPmKywdnTsXJQlYtp3EMMZaWAgCOJfMLRfGX3ORrqZHR5uXCN6pw8wKhhgCLzX5tgQ1gjvJW9o78mrwGwfrAH1SLBNgHFJjDzOUh1qt3%2FTU07Ilao9CgT3E7HB8Wup7Ecg55wVHf0ZuXuWUfU48DGIJOOhNQIQGKirAUTEOuTVKh9CFt3f4CCkmk8%2FdYus5AO897k5svn%2F27Sp0Ze%2BSESLrgROPo2YEnnY%2B8CupxygdeJhzG8wf9TAaOYcgsjEvxfc%2FcwWYEokuR3arYUvD6%2BMIj2ncAGOqUB%2BEWgsiUGtcz4kvxPY1Rb7sc5vQwp5Cwnk6VMS9fe3jB0hd1FdKwdloQH5dbul40bQvnsd3LiTuX9CbaUfWA0%2FNjBkzYbTun5z3FS6T04nloKDSaax4e1fZDLg3QB4geZ%2B%2ByLAd03NFvSwM3ZG41Jid3btzgF0EBfrZeWwMVaOUEL%2FEyXV%2F0W%2BwB%2BoNwFf%2Fa4deZzoTwcSrZD6%2B5C18X%2FL2cFaTfU&X-Amz-Signature=6f9f89ab2617683a7d415788c0d73bd9471178aff6f1371989e2572e5d601fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
