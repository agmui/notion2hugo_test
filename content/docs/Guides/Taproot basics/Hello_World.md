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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNNB2T6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCctn6u%2FvaYvnEpE2YK2toAdykkDBx4aU9rrpxjcy4aEAIhAKoMCc5tAtdD3hPnTwXg0BbRuAJtHO0MoR2IL7CsVI8EKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmjLl3YntW1A1Adjsq3AOfSWof6S2nt77Ytn5qQeC2NmdBvXkkEQUrsxaaWc%2FGFKR1HJZkl%2F6hN2Ept%2FHMhuKAuRpreJUmGohO9CkQNzyvXE0G0JEjesOMV3%2FqV8k1fymqZacN0KZPuP6B2eVGR3DPJfd2nNLmDt9ePR%2FQXtWN0gJTNIpW9xKuT8hH4Au0jto3HNyEpMDr5MJ0E%2BqKdET6xwR6l9aU5bMRqkblFJ4sevXwmHSXwnP2vEDvfmQ02vY4WbtrmwaPKuNeLVhX%2BYO%2BnHRZxY1qMD5JUJ7V%2BesmSgBdr7fbkpTWwhHAAFjObX1sH5JRSO%2FXJLJngw944UuvHjcVrh%2F44eNuwUqzbH5a7feR5X1IswCppd5CPBfozfcMZ8TbjCFzPlSyWRRumXHUOZ93GOZo78YoGJ3GoTRznoKtVUA6vUEdL%2F%2FJ6rIABfZKI%2FjhwaPKZZVIqiXfP%2Fw6b%2BQquzB8sazGgTv9rMJXhRaObtVb%2F9NAddFqKAQ0DMblXOdptVnrvRlfth0jjOp3LFHyxvOaEab8np2bEwu4fDT%2FVjQ%2BDKulqfW07To309HZkTmTfFzOrIRL0SAIfScDiGjR9GhxT7ceAoin2tBhGs8Nm5prQwFIWSRcFQPb4XUmm6Vx4BHZGHDPYzC944O%2FBjqkAewwVn%2ByzOZIExWMFfjOO7DNSILO%2BoPLhfyA7f3BPvFd7rJqmEI090%2FRcp9Z93HNNqq5JdnNYlwIX74pqIBVPbcanjW5wRo%2BXE4VXFtyZ4xFtaEkAbelllJhU1QVIy%2FivqTYg9uYMBHYK0FoXXTHc0IUH6EgS2yV7PokcK6R02wukhJ4be1bIK1Cn2qjB5zSuKiHR1EzlyO96A4GCARm5B2ndARO&X-Amz-Signature=300e85bb0d73dbb081b55b51f8373c4649af37a95200bf4842d26806e43fe52b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNNB2T6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCctn6u%2FvaYvnEpE2YK2toAdykkDBx4aU9rrpxjcy4aEAIhAKoMCc5tAtdD3hPnTwXg0BbRuAJtHO0MoR2IL7CsVI8EKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmjLl3YntW1A1Adjsq3AOfSWof6S2nt77Ytn5qQeC2NmdBvXkkEQUrsxaaWc%2FGFKR1HJZkl%2F6hN2Ept%2FHMhuKAuRpreJUmGohO9CkQNzyvXE0G0JEjesOMV3%2FqV8k1fymqZacN0KZPuP6B2eVGR3DPJfd2nNLmDt9ePR%2FQXtWN0gJTNIpW9xKuT8hH4Au0jto3HNyEpMDr5MJ0E%2BqKdET6xwR6l9aU5bMRqkblFJ4sevXwmHSXwnP2vEDvfmQ02vY4WbtrmwaPKuNeLVhX%2BYO%2BnHRZxY1qMD5JUJ7V%2BesmSgBdr7fbkpTWwhHAAFjObX1sH5JRSO%2FXJLJngw944UuvHjcVrh%2F44eNuwUqzbH5a7feR5X1IswCppd5CPBfozfcMZ8TbjCFzPlSyWRRumXHUOZ93GOZo78YoGJ3GoTRznoKtVUA6vUEdL%2F%2FJ6rIABfZKI%2FjhwaPKZZVIqiXfP%2Fw6b%2BQquzB8sazGgTv9rMJXhRaObtVb%2F9NAddFqKAQ0DMblXOdptVnrvRlfth0jjOp3LFHyxvOaEab8np2bEwu4fDT%2FVjQ%2BDKulqfW07To309HZkTmTfFzOrIRL0SAIfScDiGjR9GhxT7ceAoin2tBhGs8Nm5prQwFIWSRcFQPb4XUmm6Vx4BHZGHDPYzC944O%2FBjqkAewwVn%2ByzOZIExWMFfjOO7DNSILO%2BoPLhfyA7f3BPvFd7rJqmEI090%2FRcp9Z93HNNqq5JdnNYlwIX74pqIBVPbcanjW5wRo%2BXE4VXFtyZ4xFtaEkAbelllJhU1QVIy%2FivqTYg9uYMBHYK0FoXXTHc0IUH6EgS2yV7PokcK6R02wukhJ4be1bIK1Cn2qjB5zSuKiHR1EzlyO96A4GCARm5B2ndARO&X-Amz-Signature=8bb5b7858465588c161d35dcff64f0da6657b592585b1027887e34a63291d9fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
