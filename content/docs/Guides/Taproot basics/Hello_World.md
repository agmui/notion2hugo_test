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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QKSA6G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBsHWCFKFEAOtI3cwRWzh2CQozNU1KohtpKLhwNhLcyBAiEA80J1llGTMWGvkogpBt%2FarpsSXV2xc%2BkV3XREynacG%2FkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKGHDhcWOnQafn%2BrircA7Dnu3KhSE1IkF5cM5XsNP4fSoaQd2fPwR1f2u9nGNTn8KSCkFX9eyw7%2F%2BQIOFSzFteXdjjnE7jLy5HyhD1Swwo%2Fy6yBAqGtuxNwLkNBHbTRL0tHVCE0yUDEMpUHMjpO%2Bl4NUELFfljTsdn%2BUKnNU3LWsvfo%2BqglpF%2FwQxHEvwlxuiEY8qYXIqZWP%2FTxk%2B2GH32i0AqLgak53hkMkuD6rcBK20JPXXpM4pLWsoswnfc5SJGg5s6Z6ht3pSG8Gs1gCD%2FXprS7BAs22t4aRTBCuMvdhaKHN4yyix0oDAKzyZua9vUJbjEkfAhJs1VllkLWiswaw8ZIO54Dp8ChEh6NU8jU8gyQxEbaImJlSkVvBxvZ5YN2syzQKoSAG9PuAVlFoaM3JVNWOzdxFf2brrkk315dDFd82VtxTf3bRnIjk1JTjPToWHdY%2BxxhpChTCfN%2FFg61ERtzKwOxQTuIBtmvwKcGR5yPVI%2BP772Qk5LDePTUfPY6CANR5MavYGhTlhK2MEe5MWP3puzC%2FTtek%2FJmbm6OVIZ4NAhgfvDS6hSOFVPP3VUv9sqR%2F9v%2FjqN5pwhWTVCes1x08y7G38YosMCRac9YXClhY33DkFAzlI4lpmJPBY8UONUzPRZenj4qMMnR0MAGOqUBW5D2Gd%2FV%2FYxVzSdGEK5WpyQtIe%2B4z%2FStSBmhYqHox6BgMbsT2am2uLiKQ3REol%2FPtpo4G%2FXRJnofFJGDtOqaEoVBJHHut%2Bp9VcrCfq7BhINDUe97rONY8Kj%2BLk76Dfaelq1oT2w1ILtnJlHgeenkY%2FMy1%2B6GhXcMRDpJ5Jrw%2BCTaBldJgUP%2FWP5vxaIgLg3ErMPJ4GQRZj8ktcUyi2YAPLJjogo0&X-Amz-Signature=248be9716e0f121e09c8e043d7f9e2239b8ef1919eb04a71367726741cf6c758&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QKSA6G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIBsHWCFKFEAOtI3cwRWzh2CQozNU1KohtpKLhwNhLcyBAiEA80J1llGTMWGvkogpBt%2FarpsSXV2xc%2BkV3XREynacG%2FkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKGHDhcWOnQafn%2BrircA7Dnu3KhSE1IkF5cM5XsNP4fSoaQd2fPwR1f2u9nGNTn8KSCkFX9eyw7%2F%2BQIOFSzFteXdjjnE7jLy5HyhD1Swwo%2Fy6yBAqGtuxNwLkNBHbTRL0tHVCE0yUDEMpUHMjpO%2Bl4NUELFfljTsdn%2BUKnNU3LWsvfo%2BqglpF%2FwQxHEvwlxuiEY8qYXIqZWP%2FTxk%2B2GH32i0AqLgak53hkMkuD6rcBK20JPXXpM4pLWsoswnfc5SJGg5s6Z6ht3pSG8Gs1gCD%2FXprS7BAs22t4aRTBCuMvdhaKHN4yyix0oDAKzyZua9vUJbjEkfAhJs1VllkLWiswaw8ZIO54Dp8ChEh6NU8jU8gyQxEbaImJlSkVvBxvZ5YN2syzQKoSAG9PuAVlFoaM3JVNWOzdxFf2brrkk315dDFd82VtxTf3bRnIjk1JTjPToWHdY%2BxxhpChTCfN%2FFg61ERtzKwOxQTuIBtmvwKcGR5yPVI%2BP772Qk5LDePTUfPY6CANR5MavYGhTlhK2MEe5MWP3puzC%2FTtek%2FJmbm6OVIZ4NAhgfvDS6hSOFVPP3VUv9sqR%2F9v%2FjqN5pwhWTVCes1x08y7G38YosMCRac9YXClhY33DkFAzlI4lpmJPBY8UONUzPRZenj4qMMnR0MAGOqUBW5D2Gd%2FV%2FYxVzSdGEK5WpyQtIe%2B4z%2FStSBmhYqHox6BgMbsT2am2uLiKQ3REol%2FPtpo4G%2FXRJnofFJGDtOqaEoVBJHHut%2Bp9VcrCfq7BhINDUe97rONY8Kj%2BLk76Dfaelq1oT2w1ILtnJlHgeenkY%2FMy1%2B6GhXcMRDpJ5Jrw%2BCTaBldJgUP%2FWP5vxaIgLg3ErMPJ4GQRZj8ktcUyi2YAPLJjogo0&X-Amz-Signature=323ad76fa2652f6daafc39e222d4e80bce6312eeccbd4af0f857b64b60f019b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
