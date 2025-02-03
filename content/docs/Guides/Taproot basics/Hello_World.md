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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOIW7XI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Zebdf5UDxQnZ0ieSCLxox4uCa3W0TzW6gE7MySVbGQIgRoAVRoUqycgvwgOAXuKV7CIdBrJnu1aFzc%2FltrTRYwYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDK%2Feyd8wKYRRRJ2E4yrcAz5n9FOhklapmVLTrtciiwf14mRFnu%2BOqWblkWk28%2Bz3G77FPwuNWBhxzucbKRLvT1TYnIuKW%2FTJUajCxylxkbMEYeyRPwkxEaFLj%2FTntF%2FRj%2B16239%2FCK5XhU461OxgkKZ1bp1Jmtc5DRx8C7i8JJNAgMetBAsp4vUA03h0DFFZyMjY7EJnecSnk%2B9Ee5cvm2CBp3a9cIAMbxBkbOBxeuPSWW62VjP58uSWLiOEBaZvAUGM2PPY48Y%2FMk979LLVg40n0ZeXSJaAQIytMxOcXkivl1D9uFOcjS2sl7VwAqm33vyVSSkPjJ0QInr3SVfYbQP9sfcvC8kLrzDMLwPjLb243ICsCZSmdAU%2F16xfmEWn9peCOAGxoQ6H3VGHBbgEQ%2FoCqM21b39Cg8Z9wUD57RlV3SsrWVkQ3%2BYse9zjhmgvSPHfljILKIYNyQac2%2BGwDczyRWt6JIncnfWaf%2FZUJGvPMDUM%2FSofUi41g1GtfBiDj6SoUND0jOMzeUNDed68pp7w6Xgnv3RlZ0oOXhePHOEpOiPg9SioNLYYqibeksq5icCaZfxg499YMkUuZkQlTZJmRaEIqK5yhBvo18tsivGOlVz6I1rKyrnJ6jRxKAfesdZR22RYsVQu5OYoMOWOg70GOqUB4VG6G1NNY9%2F59nGOisLJ2BixTUHzmsG0AxLcrwUZ%2Bup33thgJjDn9oCnm2Ld8iIt3%2Fjn%2BpKLaMsaPJV6FOynU2%2BpIA9sk6OAtT0TBT0j7SIxrXnoG046C5HR1MM58368Jw73AlM%2FdwIIFYh6q5Lg4qWXvf%2B1qeeeKo6IG48mQicgrJqUTYhMuHOGbOdBPmlPYL7AE2KoiKNOb7UpiuuAHRL3o0fO&X-Amz-Signature=17f65ec4e8a2a69d7c2de34ac7544522773aad6b2fb50a572267165db35877bf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOIW7XI%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Zebdf5UDxQnZ0ieSCLxox4uCa3W0TzW6gE7MySVbGQIgRoAVRoUqycgvwgOAXuKV7CIdBrJnu1aFzc%2FltrTRYwYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDK%2Feyd8wKYRRRJ2E4yrcAz5n9FOhklapmVLTrtciiwf14mRFnu%2BOqWblkWk28%2Bz3G77FPwuNWBhxzucbKRLvT1TYnIuKW%2FTJUajCxylxkbMEYeyRPwkxEaFLj%2FTntF%2FRj%2B16239%2FCK5XhU461OxgkKZ1bp1Jmtc5DRx8C7i8JJNAgMetBAsp4vUA03h0DFFZyMjY7EJnecSnk%2B9Ee5cvm2CBp3a9cIAMbxBkbOBxeuPSWW62VjP58uSWLiOEBaZvAUGM2PPY48Y%2FMk979LLVg40n0ZeXSJaAQIytMxOcXkivl1D9uFOcjS2sl7VwAqm33vyVSSkPjJ0QInr3SVfYbQP9sfcvC8kLrzDMLwPjLb243ICsCZSmdAU%2F16xfmEWn9peCOAGxoQ6H3VGHBbgEQ%2FoCqM21b39Cg8Z9wUD57RlV3SsrWVkQ3%2BYse9zjhmgvSPHfljILKIYNyQac2%2BGwDczyRWt6JIncnfWaf%2FZUJGvPMDUM%2FSofUi41g1GtfBiDj6SoUND0jOMzeUNDed68pp7w6Xgnv3RlZ0oOXhePHOEpOiPg9SioNLYYqibeksq5icCaZfxg499YMkUuZkQlTZJmRaEIqK5yhBvo18tsivGOlVz6I1rKyrnJ6jRxKAfesdZR22RYsVQu5OYoMOWOg70GOqUB4VG6G1NNY9%2F59nGOisLJ2BixTUHzmsG0AxLcrwUZ%2Bup33thgJjDn9oCnm2Ld8iIt3%2Fjn%2BpKLaMsaPJV6FOynU2%2BpIA9sk6OAtT0TBT0j7SIxrXnoG046C5HR1MM58368Jw73AlM%2FdwIIFYh6q5Lg4qWXvf%2B1qeeeKo6IG48mQicgrJqUTYhMuHOGbOdBPmlPYL7AE2KoiKNOb7UpiuuAHRL3o0fO&X-Amz-Signature=3c436aaf410dc345923d748a5aaae7906c5e7a7b66e7edc71e5fa4d1d22d39ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
