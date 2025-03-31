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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IN6KDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICxdayOxqdRyttS27qrgTRF1FJPAj2RAhl0fvsNMofQnAiBN%2B5GL3OVUmo%2BQ%2BupjabOeFZVUzCivA7h%2FiZnFhgIY4SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuxgUJY06X78RGqOKtwD8%2F%2FsfD01wqYbVEyRF5%2FVbTIZmu1gvehY9dob58DPZWL4EkEdKpT2Al%2FQpG3p%2BKHwvOC4U%2FIUhTenwwt5hBjXyuOTIiMhnwQr8fh8GYSEL9Xyu%2BsAunJKhHkJk%2BwH5P2Yb9o%2BKzjqSxSk%2BvCSVZTZKGD4W61uF5WGkQo9YDgeoaXbgaOVzJTDD6Izzo7OBon6ceWBhWatgRI5CdCzAdQL0%2BNPT85EjQbH6sEbn4EWjzt66%2FdteT4ZXkc6oXLGzWJH73hnHcJsuMuv%2F18vkqkgSkUVkVYuEWeF14PElvkBBkX4jvxOpoKzPM5Djh2%2F34trpFH0lNZ7OBHXP5fLB9nP2xBH1jyypk%2FuH8IOP0PDq7bMMs7FC9xJbfI2a26zBtOpJnDDlzo7ODM1Oa1jFgdBGrmGwdj0SuiEpwzmMkf2Ep%2BwCxVoEPmDNqC58fdgxrBKyvTPmYfI0qP%2FovFiHu%2FBobwJy3DnAt2WMh%2BkgMJ7qDZTm8QR3j2ZUTVBbggo%2FDBvOHVeq5Fy2SBHOzSWY90AhMm9VoXBTCFYAj3ucB138qhdNTMRMkuPwZmM07Gc4CXnjdUtOFqBN3ZqON%2FTvJa4RFIoW2umhRdvEPumybXUT5lPT%2FzymVoGm12A0fcwnOWovwY6pgE3Gc%2Fly%2Fv4jPwTVyOJtxRkD5dKZ9II%2Bc%2BWzBCWDuMwdf%2By%2Bd46Dk2abGYFTN72mrQHCaUjd2vPH40MyYdX3lfdgKHC6g6%2B45A5pExa4lsOa1bXSFWp6wd49DX7L58V%2BHxCcjPVxY87hyi%2B32MmAARLqrHw6A16OupRbfwc3M63FdkGsEfrgVeb9O80ya%2BVBwR3fE4g%2Bwo9%2BYRn6lXq5oCezSFWEmaH&X-Amz-Signature=2f231f4257f4efeddefe2f15b2e8783d593f69929b7476b95a9f82664ee8a214&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622IN6KDK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICxdayOxqdRyttS27qrgTRF1FJPAj2RAhl0fvsNMofQnAiBN%2B5GL3OVUmo%2BQ%2BupjabOeFZVUzCivA7h%2FiZnFhgIY4SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuxgUJY06X78RGqOKtwD8%2F%2FsfD01wqYbVEyRF5%2FVbTIZmu1gvehY9dob58DPZWL4EkEdKpT2Al%2FQpG3p%2BKHwvOC4U%2FIUhTenwwt5hBjXyuOTIiMhnwQr8fh8GYSEL9Xyu%2BsAunJKhHkJk%2BwH5P2Yb9o%2BKzjqSxSk%2BvCSVZTZKGD4W61uF5WGkQo9YDgeoaXbgaOVzJTDD6Izzo7OBon6ceWBhWatgRI5CdCzAdQL0%2BNPT85EjQbH6sEbn4EWjzt66%2FdteT4ZXkc6oXLGzWJH73hnHcJsuMuv%2F18vkqkgSkUVkVYuEWeF14PElvkBBkX4jvxOpoKzPM5Djh2%2F34trpFH0lNZ7OBHXP5fLB9nP2xBH1jyypk%2FuH8IOP0PDq7bMMs7FC9xJbfI2a26zBtOpJnDDlzo7ODM1Oa1jFgdBGrmGwdj0SuiEpwzmMkf2Ep%2BwCxVoEPmDNqC58fdgxrBKyvTPmYfI0qP%2FovFiHu%2FBobwJy3DnAt2WMh%2BkgMJ7qDZTm8QR3j2ZUTVBbggo%2FDBvOHVeq5Fy2SBHOzSWY90AhMm9VoXBTCFYAj3ucB138qhdNTMRMkuPwZmM07Gc4CXnjdUtOFqBN3ZqON%2FTvJa4RFIoW2umhRdvEPumybXUT5lPT%2FzymVoGm12A0fcwnOWovwY6pgE3Gc%2Fly%2Fv4jPwTVyOJtxRkD5dKZ9II%2Bc%2BWzBCWDuMwdf%2By%2Bd46Dk2abGYFTN72mrQHCaUjd2vPH40MyYdX3lfdgKHC6g6%2B45A5pExa4lsOa1bXSFWp6wd49DX7L58V%2BHxCcjPVxY87hyi%2B32MmAARLqrHw6A16OupRbfwc3M63FdkGsEfrgVeb9O80ya%2BVBwR3fE4g%2Bwo9%2BYRn6lXq5oCezSFWEmaH&X-Amz-Signature=4af9d53b61118829f74d88af60ff5f2bbb98a0e52e8533c87f8814ce72b36c77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
