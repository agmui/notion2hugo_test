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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT2UKI2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDK544l2bsi9Mb7l4YvaomAoq6E3gwQpAo7BJ8iA4%2BYCwIhAPMFU%2F%2FBqHvUl5meZPGbGcgyEQAre95%2BpJIJfF%2FF6IVbKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWg%2FTYPr6kpmR4PLUq3AMNeAPawpUVgieAfk2Hj%2Flp20Mf55NyWKWYl7NHCdxdCKAMjMx63EcLJiJfRlVqjaNmQ4nnmA%2BT%2FOeXw7FxgBREhTJwjOrNk0MJkMGOEpSsyxcOpHYpPCDkSabpUBlA9qTsmySJEkwSnO2IJ5h6LY9h0myREe1MdONi0HcqVbI7mbE0O6rWR3Q1xwgBKCywpRSghpHCAS2xxDbejprO6RIfv%2FI0%2BwATdqSwKDZnzbqTVnInK1vCsOivtcikftRxVlf57B7rBXvZ1qHdbiDT7bFsXDXlx3ORqOXfNkuBN5zb7%2BsbFuR6HnJGBKh7ny9KcH9TnbcfguR%2FomluZyg3Iczb%2FxONOMK1BE47W3a1d7tL3mE93XRokZTPC2JwhLFDBcespFWGJohpQIKUNz7kkBDESLzVqQwk8UlZJef8A526YqUld3Lx%2FFGgynSwWz%2FmFlW%2FB046zEK5R42kzk34rneI07T4kyYCDubnrCjNRrl0RbStKR9tfwqgOMbNkR9pvpiVXz%2BZblVSnMoBboKM3c4YQGB%2FTZxYGjYZUzBKOvOyig4ZvD0W3lBCMm2cQOuS2xB%2FIjsF3SNQhYR2Y6%2FatcQoWwUnH6haj1%2FGUrtcumHdb1bzr1psRHrF22zysTC%2BkbzBBjqkAQX3mw1eM5FZf0zUP9H%2FHRIliuVk7xDXsiAsZxs2Aaon9NEhdp4QPO93jmeLTc60olHYPw9CGDaiECp%2B3VGE96XyvyvfiIVeIchizcdbpCzO%2B40Luf3nXW1i3jz%2F1Mr1EXguaH1BzIZbQg6SrhVyQtLdkDvDUct0gHBrn4Zogz4Bq4ciBS%2FZPPPMqMfyCbhq0%2FEHgTNqoAQY3qbEAvt9nODGgqg6&X-Amz-Signature=2e8b03281b83b4c38ddd01844668e12d4f17e981d90cf6556edbe380fbc4ff32&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT2UKI2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDK544l2bsi9Mb7l4YvaomAoq6E3gwQpAo7BJ8iA4%2BYCwIhAPMFU%2F%2FBqHvUl5meZPGbGcgyEQAre95%2BpJIJfF%2FF6IVbKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWg%2FTYPr6kpmR4PLUq3AMNeAPawpUVgieAfk2Hj%2Flp20Mf55NyWKWYl7NHCdxdCKAMjMx63EcLJiJfRlVqjaNmQ4nnmA%2BT%2FOeXw7FxgBREhTJwjOrNk0MJkMGOEpSsyxcOpHYpPCDkSabpUBlA9qTsmySJEkwSnO2IJ5h6LY9h0myREe1MdONi0HcqVbI7mbE0O6rWR3Q1xwgBKCywpRSghpHCAS2xxDbejprO6RIfv%2FI0%2BwATdqSwKDZnzbqTVnInK1vCsOivtcikftRxVlf57B7rBXvZ1qHdbiDT7bFsXDXlx3ORqOXfNkuBN5zb7%2BsbFuR6HnJGBKh7ny9KcH9TnbcfguR%2FomluZyg3Iczb%2FxONOMK1BE47W3a1d7tL3mE93XRokZTPC2JwhLFDBcespFWGJohpQIKUNz7kkBDESLzVqQwk8UlZJef8A526YqUld3Lx%2FFGgynSwWz%2FmFlW%2FB046zEK5R42kzk34rneI07T4kyYCDubnrCjNRrl0RbStKR9tfwqgOMbNkR9pvpiVXz%2BZblVSnMoBboKM3c4YQGB%2FTZxYGjYZUzBKOvOyig4ZvD0W3lBCMm2cQOuS2xB%2FIjsF3SNQhYR2Y6%2FatcQoWwUnH6haj1%2FGUrtcumHdb1bzr1psRHrF22zysTC%2BkbzBBjqkAQX3mw1eM5FZf0zUP9H%2FHRIliuVk7xDXsiAsZxs2Aaon9NEhdp4QPO93jmeLTc60olHYPw9CGDaiECp%2B3VGE96XyvyvfiIVeIchizcdbpCzO%2B40Luf3nXW1i3jz%2F1Mr1EXguaH1BzIZbQg6SrhVyQtLdkDvDUct0gHBrn4Zogz4Bq4ciBS%2FZPPPMqMfyCbhq0%2FEHgTNqoAQY3qbEAvt9nODGgqg6&X-Amz-Signature=2db8f615698d12b96d80bd9f8292320a18e70255f64bb82e319a74280c1c2943&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
