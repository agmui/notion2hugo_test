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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4XTRWJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh1j0%2BzrezcSjcAqLY1yb2LTWP6gpio6hzyUF5ep%2BkqAiEA%2BzDuwjJaz7yJO4%2BI%2F0WdTxRR%2BmEcRTo1WMcWNKqvOsgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1fXduG4h%2BI8z2QQyrcA5uqPKpkPbszwyp51aNYOOAEf55a9esbum2sb9fW%2F%2BByfyYPsRM%2FkWz9%2FVvqwAuAM9ZZSlJ2BGZyTqx8qg%2BnnCXK9NMxaxpA9ZdGK0IO5yuyIQBkmMNpIGO0zMrCcD8eNumZ4lQ0z0qajhNG39F3NSYNQG%2FkMckHwV%2F3zeCoOsreEAyoE8GyTmIwV7%2B9PQQ0%2BWa%2BmMXQKEYUxDEuEuzmPOIfT6KDeJe19FWu8EDA5pMAascy5m8rmC3XZQ4zSHrqbwECJtnKbp0e9iuq%2B8PyGU6lesRSUq2KAKN2tnlLPQWo0cnEea54qdPA53x3K6xBdULuKQLOyoKSsJ%2BBEiEugqW9ptE5BCLH8jF5HNHBjaTDZ24EtwsL9FflrKIAm5d%2BohbHNdtZqoweHu12xqNqVsn3cmEXbv7n9hVT%2BqElfgk3dk6rN5KhdHXi9O6DSXnvGhNeL%2F1HI8%2BsOmjtmPsgUE9QmFGPm1HjYnDILMFMpOesrUuAY2XOsaXnIXITUK00lmZWKpDCVAp8TTcuCkAO%2BL%2F6PMNjkA%2FAtbxOsers2KGSPo1cH0Wdiga%2B6Z6PS6Cpe4UAm6wuYc75CsIX8XkyYaZJHayH4aCAlRlJQxL9OJL4pksdWXb2uao5AvSkMKvX%2FMIGOqUBzPH1fDziMA4ZQbR4XMS44d6M1Z3ezQpWBu5ikvh%2BMZouPYDjOOEMpzvskguEi3wziIgKEK1F%2BNLNfoa2BbTYX8Z51IUG%2FL44mzGvK9cWgSoJBoAYvzSouOjhxfyLdI8jmvPpnXop2lT6AlJi1B6Lwt5dpj0Y%2BHLNoviTH4iJGgaG7M6%2Bpotz8jKdSde%2BHhmaTeN%2F10Py0NhbcZgCG9ySQIM5f7PX&X-Amz-Signature=30c8c764e1a06a20ce945b4517e3b76c776e8169540d42c654ef3f4ff8b02ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I4XTRWJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh1j0%2BzrezcSjcAqLY1yb2LTWP6gpio6hzyUF5ep%2BkqAiEA%2BzDuwjJaz7yJO4%2BI%2F0WdTxRR%2BmEcRTo1WMcWNKqvOsgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1fXduG4h%2BI8z2QQyrcA5uqPKpkPbszwyp51aNYOOAEf55a9esbum2sb9fW%2F%2BByfyYPsRM%2FkWz9%2FVvqwAuAM9ZZSlJ2BGZyTqx8qg%2BnnCXK9NMxaxpA9ZdGK0IO5yuyIQBkmMNpIGO0zMrCcD8eNumZ4lQ0z0qajhNG39F3NSYNQG%2FkMckHwV%2F3zeCoOsreEAyoE8GyTmIwV7%2B9PQQ0%2BWa%2BmMXQKEYUxDEuEuzmPOIfT6KDeJe19FWu8EDA5pMAascy5m8rmC3XZQ4zSHrqbwECJtnKbp0e9iuq%2B8PyGU6lesRSUq2KAKN2tnlLPQWo0cnEea54qdPA53x3K6xBdULuKQLOyoKSsJ%2BBEiEugqW9ptE5BCLH8jF5HNHBjaTDZ24EtwsL9FflrKIAm5d%2BohbHNdtZqoweHu12xqNqVsn3cmEXbv7n9hVT%2BqElfgk3dk6rN5KhdHXi9O6DSXnvGhNeL%2F1HI8%2BsOmjtmPsgUE9QmFGPm1HjYnDILMFMpOesrUuAY2XOsaXnIXITUK00lmZWKpDCVAp8TTcuCkAO%2BL%2F6PMNjkA%2FAtbxOsers2KGSPo1cH0Wdiga%2B6Z6PS6Cpe4UAm6wuYc75CsIX8XkyYaZJHayH4aCAlRlJQxL9OJL4pksdWXb2uao5AvSkMKvX%2FMIGOqUBzPH1fDziMA4ZQbR4XMS44d6M1Z3ezQpWBu5ikvh%2BMZouPYDjOOEMpzvskguEi3wziIgKEK1F%2BNLNfoa2BbTYX8Z51IUG%2FL44mzGvK9cWgSoJBoAYvzSouOjhxfyLdI8jmvPpnXop2lT6AlJi1B6Lwt5dpj0Y%2BHLNoviTH4iJGgaG7M6%2Bpotz8jKdSde%2BHhmaTeN%2F10Py0NhbcZgCG9ySQIM5f7PX&X-Amz-Signature=cb5b0daeeb3925d4bc8d6d2b021cc3a69c955571a0af385a4761e17f9149093b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
