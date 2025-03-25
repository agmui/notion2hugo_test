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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTYDWKXU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zMuuAvtH%2B%2BlCFjHUS%2FXE5N5IkxIYe6nzRHXYPT%2FUsQIgdRVlEn5Es%2FxEBoa2GQ5xAtkgmcVrjLHqe6Sy8SYUriYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMh%2BLZnRlcpbbG1rNSrcA114uumfNzSX4Rb1nJwqu0uSgvpaLwT%2Fwqs1emInVeSAT%2F%2BkXFgVisBgCfA2ZgtPu1qLyDh1bxVpTD5TYZGZNS4i3ItHYI1aV5xVmoyQCOJJ9W8IDQadHcROaplWrpY2O5D84qnM2JMOfdrx0850zwDYvcBawZ6TorrAaT08Ufce0GWwyKbs0E9vpvfCcQqetVbFMeqg1e30PQ%2BytjZkThqOg9cbqlPwvrCAXObM%2Fecu8%2F1Pi5GF2%2Fdw9t2Lvt3JODzzGtGqez9DiwN%2FeYEaM1Rji0k371wTmpzZss9XtiraAqAvV8U%2B4cV%2Fx%2F45aEuY%2BF0ksJI1Ioh%2BzGtYsg8ztWnsrZIBKA%2FSA9t7aBacnWQibzbt5zeXIyneP%2BDbHlB5cFihcN3qtCFwxQRWgi%2BnXYqz7mt9CkOjbtPYFYV4ySm9BMb0obzsG7hFfmqcIo8k8oz4MscucoP5EmgjybGmlluuVMxVqFL7okgEFYJ3rDlh0d4U8qV2E7Qnb5GGmo25upriPXjnJwyckr5azRaQT1lZlltbI3umrprT4gIl5H3jJUYRzkhobMTfpeI2T40ONiRc%2Fkrg4z%2Fe2RMusGE2PoSiuOaAzPQnVESCzOlIIAj2ZokqRLPmA%2BFBAD7tMPDkir8GOqUBmNvS9DnnYEJk38I6y2k5ycwwsPQSF%2BvzXFxLFVQybnqCkVUEHco0sY2Ym8bAKZsMs4iHI4P2pPbg1frkO8MF3%2F142u0R%2F%2FWvfzdsS39QVVByR7AK4dIXeYBrtTb3AZxxZPun81r7AEi8T8pwD5b1I0VMDHPg2dQ9L190nRnlgZS84wVdZbHr6LOZIK%2BfiDGJR9fYVFc2B0ff%2F7Lh3lBx3ehid1YZ&X-Amz-Signature=1dad6c1373ea936e6706b077ec5a466d8bccd0dbd157701e8fa4abf07622d859&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTYDWKXU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zMuuAvtH%2B%2BlCFjHUS%2FXE5N5IkxIYe6nzRHXYPT%2FUsQIgdRVlEn5Es%2FxEBoa2GQ5xAtkgmcVrjLHqe6Sy8SYUriYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMh%2BLZnRlcpbbG1rNSrcA114uumfNzSX4Rb1nJwqu0uSgvpaLwT%2Fwqs1emInVeSAT%2F%2BkXFgVisBgCfA2ZgtPu1qLyDh1bxVpTD5TYZGZNS4i3ItHYI1aV5xVmoyQCOJJ9W8IDQadHcROaplWrpY2O5D84qnM2JMOfdrx0850zwDYvcBawZ6TorrAaT08Ufce0GWwyKbs0E9vpvfCcQqetVbFMeqg1e30PQ%2BytjZkThqOg9cbqlPwvrCAXObM%2Fecu8%2F1Pi5GF2%2Fdw9t2Lvt3JODzzGtGqez9DiwN%2FeYEaM1Rji0k371wTmpzZss9XtiraAqAvV8U%2B4cV%2Fx%2F45aEuY%2BF0ksJI1Ioh%2BzGtYsg8ztWnsrZIBKA%2FSA9t7aBacnWQibzbt5zeXIyneP%2BDbHlB5cFihcN3qtCFwxQRWgi%2BnXYqz7mt9CkOjbtPYFYV4ySm9BMb0obzsG7hFfmqcIo8k8oz4MscucoP5EmgjybGmlluuVMxVqFL7okgEFYJ3rDlh0d4U8qV2E7Qnb5GGmo25upriPXjnJwyckr5azRaQT1lZlltbI3umrprT4gIl5H3jJUYRzkhobMTfpeI2T40ONiRc%2Fkrg4z%2Fe2RMusGE2PoSiuOaAzPQnVESCzOlIIAj2ZokqRLPmA%2BFBAD7tMPDkir8GOqUBmNvS9DnnYEJk38I6y2k5ycwwsPQSF%2BvzXFxLFVQybnqCkVUEHco0sY2Ym8bAKZsMs4iHI4P2pPbg1frkO8MF3%2F142u0R%2F%2FWvfzdsS39QVVByR7AK4dIXeYBrtTb3AZxxZPun81r7AEi8T8pwD5b1I0VMDHPg2dQ9L190nRnlgZS84wVdZbHr6LOZIK%2BfiDGJR9fYVFc2B0ff%2F7Lh3lBx3ehid1YZ&X-Amz-Signature=7efe884a01c513198e839132486340fc0e5dd45f53756a8aac5de40f0d000793&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
