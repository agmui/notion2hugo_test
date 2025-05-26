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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MT2JYT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDM%2B0Tk5jLGcd7nKesyocxj%2FfPkqthA16fpWk6M0m36%2FAiAG5jTLANKgse12%2BfsZL%2FrFBFY4joZgLG%2B80ob3o1MlqSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpbvnphplXOhAG2i%2FKtwDitzDJPK1%2FkSNs9EEm10p%2Faow1DWXI67H3oh6ktjAQpS%2BMdhdzKyXXgS8SdRlKs%2BVX6kS0I4O0BuR8f%2FYpj%2Fdc7UoxVRbb90vdtVu3sWzdUF3Vt%2FBnY4o3kSrDoGxQkJpXWhiiLo8QVOkpoXjrld%2B2YIhu644PasY9%2B0ZzF6UEgNkiZJvteOKXvPtFlnzpNGxPlsMvyXLXGk%2FyXxHywMNOmE3ZO8mPudTJj1FA09fpu0dSkOmlODw0z9RW0GgCGAscSIC%2BDk8%2Fn8GKPkPwETEYMFTJZK%2FoXuArYglaCtSupKt%2Bzo0MfM5q5zvpeei9owWLEgRaR5JN34hMJMBs5bY3VbfOIGUK4HSoDlVdzftdbFxqhlaoJ6q%2FHsazuEQlhndd5UVVY18AVgyOIYBpxrRo1qJEOy5ryQMiWlwy5GNk%2Bb%2FmvRSiAvMffKV3OoFn%2BzFqJAmT7fDoki%2BkikoS6Y5ajQWqrPPJ37jXum3X0V6noBOS39uPosHItgue%2FJVqM2WCVkTQKg9yiS6ad0k85c6E6XeMtMuIFmhDRVeFlGtaMO8FTIkuCK1SINpkHlSgdM9XWHDV4PhgiHt%2FCu4NPJf4Vzx83YYowGK2CJQPtLT%2FHwOSaHr2q5Qbnf3oPowlebRwQY6pgEv1V8sLBp5%2BHDGAWniaIxroj4VfJUgk5%2FZx66zlO0PkKqoTlg2RxSEaU0wRZVckblYYTNUszjXLxua3PX35vHgHCom%2BY0OjRxvJ247hp4jrssrI%2BbneiQJIbthWrQnTjh1mUD5XAX4ydX08aCVePkc3cHi0omwzVqIfd%2FRTJt7JnHWwh9KR3P9QZ2szelXvn8U0hnFIsVjcOCjVIcJ7TnTKulgRDfd&X-Amz-Signature=394d3e60c41172bf4abcdd411a6ea8c85923f2abead367cf0bca0f1dd5a88169&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MT2JYT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDM%2B0Tk5jLGcd7nKesyocxj%2FfPkqthA16fpWk6M0m36%2FAiAG5jTLANKgse12%2BfsZL%2FrFBFY4joZgLG%2B80ob3o1MlqSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMpbvnphplXOhAG2i%2FKtwDitzDJPK1%2FkSNs9EEm10p%2Faow1DWXI67H3oh6ktjAQpS%2BMdhdzKyXXgS8SdRlKs%2BVX6kS0I4O0BuR8f%2FYpj%2Fdc7UoxVRbb90vdtVu3sWzdUF3Vt%2FBnY4o3kSrDoGxQkJpXWhiiLo8QVOkpoXjrld%2B2YIhu644PasY9%2B0ZzF6UEgNkiZJvteOKXvPtFlnzpNGxPlsMvyXLXGk%2FyXxHywMNOmE3ZO8mPudTJj1FA09fpu0dSkOmlODw0z9RW0GgCGAscSIC%2BDk8%2Fn8GKPkPwETEYMFTJZK%2FoXuArYglaCtSupKt%2Bzo0MfM5q5zvpeei9owWLEgRaR5JN34hMJMBs5bY3VbfOIGUK4HSoDlVdzftdbFxqhlaoJ6q%2FHsazuEQlhndd5UVVY18AVgyOIYBpxrRo1qJEOy5ryQMiWlwy5GNk%2Bb%2FmvRSiAvMffKV3OoFn%2BzFqJAmT7fDoki%2BkikoS6Y5ajQWqrPPJ37jXum3X0V6noBOS39uPosHItgue%2FJVqM2WCVkTQKg9yiS6ad0k85c6E6XeMtMuIFmhDRVeFlGtaMO8FTIkuCK1SINpkHlSgdM9XWHDV4PhgiHt%2FCu4NPJf4Vzx83YYowGK2CJQPtLT%2FHwOSaHr2q5Qbnf3oPowlebRwQY6pgEv1V8sLBp5%2BHDGAWniaIxroj4VfJUgk5%2FZx66zlO0PkKqoTlg2RxSEaU0wRZVckblYYTNUszjXLxua3PX35vHgHCom%2BY0OjRxvJ247hp4jrssrI%2BbneiQJIbthWrQnTjh1mUD5XAX4ydX08aCVePkc3cHi0omwzVqIfd%2FRTJt7JnHWwh9KR3P9QZ2szelXvn8U0hnFIsVjcOCjVIcJ7TnTKulgRDfd&X-Amz-Signature=1ac9d6dd5117471ab361ad57956091b541f0a6f5aca7673014f46e830a71b0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
