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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVS6N5Z%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCL%2FSh68mK6pmWYp427o0Iy0X%2FGAayRnZtTxzlk4x0EuQIhAPt3WkC6e7NJIS0vcgFf5w90RrqdwtM7FlHS2v0JMHxUKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDCXs%2FreLH6H1IY8kq3AN4PSnkQDmwkX8o1F2MNLwCwh%2BHowg8wJtRrG5Fz2MbCJtR%2BgDV86fxLGLwMVsnsxGkL2%2FbEj21jqM5FBxtMjxY59VVfh%2F1WtWwERdi1dGvBQxE6Tq9VHbAbMUdGdclQa5FxYmaAdAA8KcfeRXMcTCzGeZbiqx4EILfnWZjJqRSvY0KFacXpnyH5aEuO141vvAHhIoAe6ZfyMOfKgWML3xDAIYdsyHyGOGBFzSJOOqyRdi%2B4NbzTr9q0Ca%2BXEEgSNua3V7FSyLXtsqxQtCloK6iXEPsmvHEjiCSsaGGrtBowhkaAh9qEqrXjJpWn1xdzFRUyFPlgunggJ1Fn6j1Q57a0aIbbuIbGVeHqBcZGw1TkHfvkneYOhnNsmI17lYP5qZ2GP%2F1WHAuTPMaISlHF3jUxUmYl6IWe2HbLE3%2BfIPfVkCTid1S4gJ2JeIvhzEF6zo8JfZkw5jW7c00FU9blNhR9Jk4swE1tjg774DEpftr8um7%2Bn0Mbj5XmZtYOj83X9y8zIsUZwdx5mmqr8%2F9sguSrwxYqOo9fdpUIJdJNmv0WKIJ31KABLTZCkG71Ph744q4OIRAAT%2F1bal4LlXr8UKqURa%2F9LOmkqxqu%2BWT84FqkJg5ZDeA%2BDpPrNqn1DD6pqPDBjqkAVNrjssch7NIF9oz4OLYfdj%2Fzt5squ7%2FTwyvcscGB04KHAgzP5gzs%2Bx6EZ0EMusKDn2%2F3%2BTkRRFADb4e8zEGsOywUhytVquIhXZ7fEmB4ZfKtW%2FArvbxQenLz%2BZq62UOOctjiOIVhpnX%2B2Ph%2BOKToHm81LOgHVNCl%2BdGS8iC8wMvCoV2WD1xkIzNwLLjofn4sQ1K4r0%2BcS%2Bt1RdwtEYwooyGH5Kn&X-Amz-Signature=d99769fa1016deb3db39b9806262d950aec13057d815767bd1c1a0997951e68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EVS6N5Z%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCL%2FSh68mK6pmWYp427o0Iy0X%2FGAayRnZtTxzlk4x0EuQIhAPt3WkC6e7NJIS0vcgFf5w90RrqdwtM7FlHS2v0JMHxUKv8DCEEQABoMNjM3NDIzMTgzODA1IgwDCXs%2FreLH6H1IY8kq3AN4PSnkQDmwkX8o1F2MNLwCwh%2BHowg8wJtRrG5Fz2MbCJtR%2BgDV86fxLGLwMVsnsxGkL2%2FbEj21jqM5FBxtMjxY59VVfh%2F1WtWwERdi1dGvBQxE6Tq9VHbAbMUdGdclQa5FxYmaAdAA8KcfeRXMcTCzGeZbiqx4EILfnWZjJqRSvY0KFacXpnyH5aEuO141vvAHhIoAe6ZfyMOfKgWML3xDAIYdsyHyGOGBFzSJOOqyRdi%2B4NbzTr9q0Ca%2BXEEgSNua3V7FSyLXtsqxQtCloK6iXEPsmvHEjiCSsaGGrtBowhkaAh9qEqrXjJpWn1xdzFRUyFPlgunggJ1Fn6j1Q57a0aIbbuIbGVeHqBcZGw1TkHfvkneYOhnNsmI17lYP5qZ2GP%2F1WHAuTPMaISlHF3jUxUmYl6IWe2HbLE3%2BfIPfVkCTid1S4gJ2JeIvhzEF6zo8JfZkw5jW7c00FU9blNhR9Jk4swE1tjg774DEpftr8um7%2Bn0Mbj5XmZtYOj83X9y8zIsUZwdx5mmqr8%2F9sguSrwxYqOo9fdpUIJdJNmv0WKIJ31KABLTZCkG71Ph744q4OIRAAT%2F1bal4LlXr8UKqURa%2F9LOmkqxqu%2BWT84FqkJg5ZDeA%2BDpPrNqn1DD6pqPDBjqkAVNrjssch7NIF9oz4OLYfdj%2Fzt5squ7%2FTwyvcscGB04KHAgzP5gzs%2Bx6EZ0EMusKDn2%2F3%2BTkRRFADb4e8zEGsOywUhytVquIhXZ7fEmB4ZfKtW%2FArvbxQenLz%2BZq62UOOctjiOIVhpnX%2B2Ph%2BOKToHm81LOgHVNCl%2BdGS8iC8wMvCoV2WD1xkIzNwLLjofn4sQ1K4r0%2BcS%2Bt1RdwtEYwooyGH5Kn&X-Amz-Signature=c40a4e2d363d75cfcfdb2c57a79e5369fea19f60e005f0c445de86d08d4d0c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
