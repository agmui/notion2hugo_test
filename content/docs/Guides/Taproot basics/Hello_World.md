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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YLIJED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyD%2BKUjn4cSLA03eOl4rPOI9oECfvB8n5yNJ8YljQH9AiEAj%2FSzGX4VYFselN%2BkR7lREwIs3egHLR7XwbrqwBPon7wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNHa3fFPn6pMwa%2BwSrcA1shM6%2F1%2FAjVq3Qi5xpJNxVyAI9vT3Le%2F0UXir7vljroiZCpIJElxDYUcpi5j9%2FZVl6p8lh9%2BGG45ZW6jesWuAmzsWRH0oVQGFAE1apzipvET2XBcnu5XffxoMc5oOcoUAwYQzym9XlYhFBLwdsgjMPy6I4k1jEuX8CP1WEzvRtdLnS4uzI6rcNXcOuU8QSLnUIzlLgvzyfyQcM4dEFVRKVlXhLyxh3eHXVhthtpGdozCuVyVZWVzpsGGDS8UO%2FmZYLobl1Fw2rgh3pQwKoVjmUt%2FU3i9Qgg1L5oHusA5R9EJiIb3j6lQctoVAjyJqoL40rVy8kTkccRwD6hVs6xTmmqkij2M9lKJ5giT9MIJ9Vo3SJuMhIdInPpq6J6J0vtJHqiMLX2Q2Fh%2Bon1qAwEsfnOaGBvMM1f%2BHnlTTUvknOrPsIEutwij6g3ORTPeeEjuz8VfLS%2FWdGW0DPOv%2BK6DZmNVeirQPTYFsDK5A3vv%2BjDBA2a9s15I72qFrsUvuVTE1aHTvUkl7ESAfLJUn8KjrpXUCDKYW2dMXxkMytRS7OWswFZmCvL7dMLFQ%2BkeAgPUrRYSB7hZuo4syj9BDQRVersr05EQT4jyTHt4%2FqCQC0K2yTKuhmoKgc%2BJlbjMIXS5sQGOqUBgoPebtqnPoTsQhUr8doWIo2NdomyK9py%2BDTXirXYna5nscefr02VNbYzPqOmRdBjzvKcBl5pHQobo31ceTDG9SY1T6UyZA%2FRNxJtXVq3K%2FhNZu%2FeMSfA6ayOdgNw%2FOEnq0tiMqHPVAywth3IGhGj5UdnzWDhrCAtLSo%2F%2FOlrNrsakwGKzgRW%2B9QBgpf7dd7kFmSW76CJX8k9q%2F21Dv5KCw5mvcEC&X-Amz-Signature=020de907fac5566e485b4d1f2c2546c9b1fc69a5f8ff3933e159ed5739b70acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YLIJED%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyD%2BKUjn4cSLA03eOl4rPOI9oECfvB8n5yNJ8YljQH9AiEAj%2FSzGX4VYFselN%2BkR7lREwIs3egHLR7XwbrqwBPon7wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNHa3fFPn6pMwa%2BwSrcA1shM6%2F1%2FAjVq3Qi5xpJNxVyAI9vT3Le%2F0UXir7vljroiZCpIJElxDYUcpi5j9%2FZVl6p8lh9%2BGG45ZW6jesWuAmzsWRH0oVQGFAE1apzipvET2XBcnu5XffxoMc5oOcoUAwYQzym9XlYhFBLwdsgjMPy6I4k1jEuX8CP1WEzvRtdLnS4uzI6rcNXcOuU8QSLnUIzlLgvzyfyQcM4dEFVRKVlXhLyxh3eHXVhthtpGdozCuVyVZWVzpsGGDS8UO%2FmZYLobl1Fw2rgh3pQwKoVjmUt%2FU3i9Qgg1L5oHusA5R9EJiIb3j6lQctoVAjyJqoL40rVy8kTkccRwD6hVs6xTmmqkij2M9lKJ5giT9MIJ9Vo3SJuMhIdInPpq6J6J0vtJHqiMLX2Q2Fh%2Bon1qAwEsfnOaGBvMM1f%2BHnlTTUvknOrPsIEutwij6g3ORTPeeEjuz8VfLS%2FWdGW0DPOv%2BK6DZmNVeirQPTYFsDK5A3vv%2BjDBA2a9s15I72qFrsUvuVTE1aHTvUkl7ESAfLJUn8KjrpXUCDKYW2dMXxkMytRS7OWswFZmCvL7dMLFQ%2BkeAgPUrRYSB7hZuo4syj9BDQRVersr05EQT4jyTHt4%2FqCQC0K2yTKuhmoKgc%2BJlbjMIXS5sQGOqUBgoPebtqnPoTsQhUr8doWIo2NdomyK9py%2BDTXirXYna5nscefr02VNbYzPqOmRdBjzvKcBl5pHQobo31ceTDG9SY1T6UyZA%2FRNxJtXVq3K%2FhNZu%2FeMSfA6ayOdgNw%2FOEnq0tiMqHPVAywth3IGhGj5UdnzWDhrCAtLSo%2F%2FOlrNrsakwGKzgRW%2B9QBgpf7dd7kFmSW76CJX8k9q%2F21Dv5KCw5mvcEC&X-Amz-Signature=5e6e1e63aba3a55387ca77283c019759808b2e5afec581a3cf6bdae3f4bc1954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
