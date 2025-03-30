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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYDP23F%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo%2FYIk9JBbjNIAioxUlsssrMbbmnXDwjDgT7z9FHLJWAiBW6Lu9QQEQKm45%2Fa3uHGXcnUQAnbPmhK%2BLaqWjv4wKIyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyrmOUDFhFBNww6yzKtwDOrT81%2FrO8uLqItreIa%2F9ntzBaeJEhwH89bPwYRYiQQxeWgZ%2Fliz9KPLiIHTl2DHDmkG8eGeNBI3zA5ZJmVJdHE1Q12WF916vPYmjSPAciB6OiNos%2FEibpMUIFPJulw5CvvqPE4CZmusFjGrgaPhV4OAYq1c0QGJYT9S5oEnLdMHVt%2BLI%2FW4LWfgCx8f9pLep3QEI4p%2BfWG%2FCK28EnMA5N5S14vWMsIwzG3mlD3YkzjkTvi6JANCgrrtoKcGJMYOr9PUVEZiwuJJGlyrcVe2HANGqXNbmLaHZV7ZZVq62fn%2FdcCVOv%2FWd2OU04H8Mo6bte0ZgzB4bCi20X0YMQC6KNp9cjGOXeoE7LQwxelFOVE%2FZodnOegv7JcKysGcgZ%2FeYfn%2FqguokSMjeZmrVVG7tYpALjGGG%2FyRXc%2FG29jhLHIOl3iaWcvwXLN2%2F%2FzfomPDKtb4jT%2FRTLVgVnT5cprjTaaFyGErmIiPj8DS16plmMS2LGLX1nDeFEDVz6HRFwyalvroCH8l2Zfz49pR86Gd2ianyDrkft2bIOE5NB2SdW%2BmxjwyujoJOZwjK3rLxIpQzob97Mo9c9rNiKLNHTnBzmlb7UFE%2FG4kGV6YFj%2BUfln%2BNqP7KMHaeP2FMiDIwn%2BqivwY6pgHEM4xtlGyEWoZkwSROoF4bSskiYAFRj5ybTGTSLH834FMvxmzm%2BmgYTM2HLclGLQtH9sTTCtu9PAUxKaPztX2A%2BuAK179cl1kyq%2FDa7NJ9Sg1ZURJyFG8BKqLBx23h%2FEO9jCv6huiMFKtdZOT4numv%2F7wja0L3Bzm6kt9IxqyK32rZ0VlR7SBJKUB6OdWi5UehdctKEzXYtif%2BFE5BdmDKQeC5Z75p&X-Amz-Signature=778c21fb76d3004553c689f574019a8a374cc382b980ab85fca10ed2effbd25c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XYDP23F%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEo%2FYIk9JBbjNIAioxUlsssrMbbmnXDwjDgT7z9FHLJWAiBW6Lu9QQEQKm45%2Fa3uHGXcnUQAnbPmhK%2BLaqWjv4wKIyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyrmOUDFhFBNww6yzKtwDOrT81%2FrO8uLqItreIa%2F9ntzBaeJEhwH89bPwYRYiQQxeWgZ%2Fliz9KPLiIHTl2DHDmkG8eGeNBI3zA5ZJmVJdHE1Q12WF916vPYmjSPAciB6OiNos%2FEibpMUIFPJulw5CvvqPE4CZmusFjGrgaPhV4OAYq1c0QGJYT9S5oEnLdMHVt%2BLI%2FW4LWfgCx8f9pLep3QEI4p%2BfWG%2FCK28EnMA5N5S14vWMsIwzG3mlD3YkzjkTvi6JANCgrrtoKcGJMYOr9PUVEZiwuJJGlyrcVe2HANGqXNbmLaHZV7ZZVq62fn%2FdcCVOv%2FWd2OU04H8Mo6bte0ZgzB4bCi20X0YMQC6KNp9cjGOXeoE7LQwxelFOVE%2FZodnOegv7JcKysGcgZ%2FeYfn%2FqguokSMjeZmrVVG7tYpALjGGG%2FyRXc%2FG29jhLHIOl3iaWcvwXLN2%2F%2FzfomPDKtb4jT%2FRTLVgVnT5cprjTaaFyGErmIiPj8DS16plmMS2LGLX1nDeFEDVz6HRFwyalvroCH8l2Zfz49pR86Gd2ianyDrkft2bIOE5NB2SdW%2BmxjwyujoJOZwjK3rLxIpQzob97Mo9c9rNiKLNHTnBzmlb7UFE%2FG4kGV6YFj%2BUfln%2BNqP7KMHaeP2FMiDIwn%2BqivwY6pgHEM4xtlGyEWoZkwSROoF4bSskiYAFRj5ybTGTSLH834FMvxmzm%2BmgYTM2HLclGLQtH9sTTCtu9PAUxKaPztX2A%2BuAK179cl1kyq%2FDa7NJ9Sg1ZURJyFG8BKqLBx23h%2FEO9jCv6huiMFKtdZOT4numv%2F7wja0L3Bzm6kt9IxqyK32rZ0VlR7SBJKUB6OdWi5UehdctKEzXYtif%2BFE5BdmDKQeC5Z75p&X-Amz-Signature=b97f44770638aba80f7c5fee64cd122d5515b7d5d20640e72bf76b8802cea8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
