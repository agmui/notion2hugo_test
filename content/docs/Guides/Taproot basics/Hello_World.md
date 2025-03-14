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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQW7NGB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaumwgfEvJRtNaqbc7lbDnNCn04wYhvD5rOwlrbeK4TwIgEpdniljG4LmVliEVanMzV7kt4fAd%2FEwpvz1vDaKJHy4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENTzveOSUgEeIHIyircA%2BAd%2FUxS2lcAHk4%2FoM3TswkT0jkprg6TJEzOCZHrj5UMmBqQEFNBEIs2vpU8i3WRbSNFQsLc9diqozEG4tIawQZrt2BqYrD1YrS%2F%2FWMx38W9dRfKOVBVfMhB9F4AD70VoBKboWeQilU3JJnXT2Shl%2FPGHni94UVlWb9uR35%2BFEUtKarWPDEyW9QZZDb8WPh2nmY0IlZJS7XMfGeNwunOoLPfkJX3Alxsip4eNw6Ep1Tq5YrgpYBEbljeedSgwFtMhpPE6rbSf1v9PLipoTc0RkB04b%2B9TNiSvlTlkvWRdqcr0ieJLRknx5nKP7H4Yv1Txu9%2FFo3PLXl2BfWIRn%2BB5uNhLZYe4D2NqWiPt3W9iMdgciRZG1LPv90VvGyOPOmwoPYGgPNl7p%2FV%2BwGzvK6oOnIy88j0EXYLpYMvqXqB6IPjA%2B3CbWu%2BCfZVAb7H5LFQwYPZq%2Bg4KkC4Ons3sfu0B7IKG0RrjIG4bpmlzuouYTW6gxIjhtCcFscOs8G1YGxFCdWO%2Bf9qj2fVb4JZW7r8dseQB6u9R1imDzf2Du0%2B1suVPdp1DsTbH5LJU9mpsBotjXw5tfRvAOwKhIWHcB2xsARaop%2F78k%2F%2FiYgeI23EVRMMCY%2BvKp00LnkS8gZkMMPA0b4GOqUBVD0PCZS97kdKO7Nyl1lVJ6OJkGqjNLNShaY0m8PDaCzIMOHK4u92GuWeoFMwgtNLpxyRaQ3Lsczc8TJiXKFbH7a8%2FvpgZSmQFkK3GIkP4rNo62Yh0eT4B8lx%2Bo%2B7Ci64o%2FoOlc17U2uUJQ%2FAtWFrOD6OhYuXhHdQ0AwrvUnZ8%2FjIo2hmCgGu7empAMVVzoR1Xc95%2BZniKEGptowrKVTtKR%2Bg0LSe&X-Amz-Signature=c517fa95a4ce07ef3947270e53daa24ee3714a7f83db226dcf9748318c23efc8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQW7NGB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaumwgfEvJRtNaqbc7lbDnNCn04wYhvD5rOwlrbeK4TwIgEpdniljG4LmVliEVanMzV7kt4fAd%2FEwpvz1vDaKJHy4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENTzveOSUgEeIHIyircA%2BAd%2FUxS2lcAHk4%2FoM3TswkT0jkprg6TJEzOCZHrj5UMmBqQEFNBEIs2vpU8i3WRbSNFQsLc9diqozEG4tIawQZrt2BqYrD1YrS%2F%2FWMx38W9dRfKOVBVfMhB9F4AD70VoBKboWeQilU3JJnXT2Shl%2FPGHni94UVlWb9uR35%2BFEUtKarWPDEyW9QZZDb8WPh2nmY0IlZJS7XMfGeNwunOoLPfkJX3Alxsip4eNw6Ep1Tq5YrgpYBEbljeedSgwFtMhpPE6rbSf1v9PLipoTc0RkB04b%2B9TNiSvlTlkvWRdqcr0ieJLRknx5nKP7H4Yv1Txu9%2FFo3PLXl2BfWIRn%2BB5uNhLZYe4D2NqWiPt3W9iMdgciRZG1LPv90VvGyOPOmwoPYGgPNl7p%2FV%2BwGzvK6oOnIy88j0EXYLpYMvqXqB6IPjA%2B3CbWu%2BCfZVAb7H5LFQwYPZq%2Bg4KkC4Ons3sfu0B7IKG0RrjIG4bpmlzuouYTW6gxIjhtCcFscOs8G1YGxFCdWO%2Bf9qj2fVb4JZW7r8dseQB6u9R1imDzf2Du0%2B1suVPdp1DsTbH5LJU9mpsBotjXw5tfRvAOwKhIWHcB2xsARaop%2F78k%2F%2FiYgeI23EVRMMCY%2BvKp00LnkS8gZkMMPA0b4GOqUBVD0PCZS97kdKO7Nyl1lVJ6OJkGqjNLNShaY0m8PDaCzIMOHK4u92GuWeoFMwgtNLpxyRaQ3Lsczc8TJiXKFbH7a8%2FvpgZSmQFkK3GIkP4rNo62Yh0eT4B8lx%2Bo%2B7Ci64o%2FoOlc17U2uUJQ%2FAtWFrOD6OhYuXhHdQ0AwrvUnZ8%2FjIo2hmCgGu7empAMVVzoR1Xc95%2BZniKEGptowrKVTtKR%2Bg0LSe&X-Amz-Signature=036aab6079803003085123d7198f7c4244a16d6efe9a12ecb6af141e7b38d012&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
