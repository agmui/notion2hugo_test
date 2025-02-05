---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Hello_World.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IY5GN4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC%2F2ur6tZssL7Cc8pmAQXvgdJLAj2cM1FFOjRobQ0Ek0AIhAM6dKuekUix4z4Nr5pnoj%2FMfdZrBzT%2FwcS189%2FcyYO2nKv8DCDkQABoMNjM3NDIzMTgzODA1IgzUT6u9%2BooAp8hrUBsq3ANE0HqPy08STZYwJjPXL3fJdlj94Y1laArR7XpW4YlWABxrXhgSraeeg5X%2FT6iIcyIi8MVucqBW4t7c6T6ZaEGT1QHF1hvP4qjg4oK2L%2FVCaAMrdoxWRJyA5%2Bcyd0D2vsnq7pA5wdWx8J1u4QfcQME7qe4kLeYBUJNYipiEWVoydXN6qDD6vipywuOw6q%2Fo48%2B66prTbHjwtQD2iB3tTbtVYpOADHgUz642rKd0%2F2pcbvrtR2xFTmCelEqI6nqlu0p72qlh8lo8FBJ0UiVcsgpSdwb7Qe2uxSHAd7DkwjruPml0UujqaTjwJV6D21NGIyQq%2F16sONX6GB1ltaS%2BYwkYzuBVlfts%2FHZpeShWn9R3um8l1D%2FffUIWRYAiozue1a%2BuTczw72yfHDk%2Bo9JH6zZz5NVo6rptZYpdq6pBsX%2ByHUPKE5DRAN%2BbrROwhJvoD7uhdGWCFlZq8RiCCNTuvrhBoUWr0H0%2BjS3dfjY4syE23w%2FTMyuVIYgJ7SbwVbJAMBSf1D7WKJCODpEU6P93rq71kIUwEWAiTQjQuUd9Jq6R4D1TOD0jN4vUzD9wrR29GMqBxovL2WNm0PUmRLuLQ%2BHXJxgyS6s%2BgE%2Fvzipf2%2BfiI4yxUbTDYE4Vu8LhijD9zoq9BjqkAZyZ%2BaxIFbYvH4WTYS2U9nUVdDEs0%2FkRjw%2FSbaJGBMIv2uFzrlW%2FmIVAAyt8tVuFebPcc2%2FMNay9otyVE30IARKEceYv3ioHB22s5Aoahe9%2BFkc3HwpaBEJ%2Frk%2BUF2ofze8Y2B7Rl%2FJxH0ngimhiDrfiSDlB%2B5j7v%2B%2FI929lRzxCtSsaN0HpHc5qnOodXhrHtxpiWLNygepUG948Hz9h3QCDz883&X-Amz-Signature=6bd13808ceac6f1198d865054315b0bd646ffb890d1612769ccfefcc25475793&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IY5GN4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC%2F2ur6tZssL7Cc8pmAQXvgdJLAj2cM1FFOjRobQ0Ek0AIhAM6dKuekUix4z4Nr5pnoj%2FMfdZrBzT%2FwcS189%2FcyYO2nKv8DCDkQABoMNjM3NDIzMTgzODA1IgzUT6u9%2BooAp8hrUBsq3ANE0HqPy08STZYwJjPXL3fJdlj94Y1laArR7XpW4YlWABxrXhgSraeeg5X%2FT6iIcyIi8MVucqBW4t7c6T6ZaEGT1QHF1hvP4qjg4oK2L%2FVCaAMrdoxWRJyA5%2Bcyd0D2vsnq7pA5wdWx8J1u4QfcQME7qe4kLeYBUJNYipiEWVoydXN6qDD6vipywuOw6q%2Fo48%2B66prTbHjwtQD2iB3tTbtVYpOADHgUz642rKd0%2F2pcbvrtR2xFTmCelEqI6nqlu0p72qlh8lo8FBJ0UiVcsgpSdwb7Qe2uxSHAd7DkwjruPml0UujqaTjwJV6D21NGIyQq%2F16sONX6GB1ltaS%2BYwkYzuBVlfts%2FHZpeShWn9R3um8l1D%2FffUIWRYAiozue1a%2BuTczw72yfHDk%2Bo9JH6zZz5NVo6rptZYpdq6pBsX%2ByHUPKE5DRAN%2BbrROwhJvoD7uhdGWCFlZq8RiCCNTuvrhBoUWr0H0%2BjS3dfjY4syE23w%2FTMyuVIYgJ7SbwVbJAMBSf1D7WKJCODpEU6P93rq71kIUwEWAiTQjQuUd9Jq6R4D1TOD0jN4vUzD9wrR29GMqBxovL2WNm0PUmRLuLQ%2BHXJxgyS6s%2BgE%2Fvzipf2%2BfiI4yxUbTDYE4Vu8LhijD9zoq9BjqkAZyZ%2BaxIFbYvH4WTYS2U9nUVdDEs0%2FkRjw%2FSbaJGBMIv2uFzrlW%2FmIVAAyt8tVuFebPcc2%2FMNay9otyVE30IARKEceYv3ioHB22s5Aoahe9%2BFkc3HwpaBEJ%2Frk%2BUF2ofze8Y2B7Rl%2FJxH0ngimhiDrfiSDlB%2B5j7v%2B%2FI929lRzxCtSsaN0HpHc5qnOodXhrHtxpiWLNygepUG948Hz9h3QCDz883&X-Amz-Signature=29df723a343dd340685a1151485a13cf9c302e121323889940e1644759d50557&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
