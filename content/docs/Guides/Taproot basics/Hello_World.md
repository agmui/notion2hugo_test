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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISFGOJL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL67LSFgM48DPD3%2F0AUZix7VKbNmZumorzERHDoj%2FOTAiEArj6Pu%2Fjc40soIgrNMRtT%2BItycsM1XgiUSKIRkk1e1mEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHSaeb%2FBFhiOYOSwmircA%2BhVJTo6G5dwXKj3o7lDftI0ufK6z7sSa6gdu%2F66AxprzYTocKueHyRbS6tbHG7dwMwJD%2Btr4HtMD7p6j9aPRv4KeCzUPjx5vCkHZNYrGHgaoHFD6ZQnJFeA%2FSMY%2FHpcuLzJtGZvlmP%2FdkWBH3rsv6ldEswqEKD9hlyfee3W0LAKQyKQpVzzdyDPKxfEKJjoLUSq%2BXZ6FIh11sJQYTlEX3cq5sPrQIgCbfbHgd8YCJP5Ah05dUZh3XjqDocCYnw0dVt1EFlYj7obXg5U2cFhv8kXwL%2FNNm5O0bVLyNAzW1GRmc3K%2BklG0ClneanioMdURI6qLxGStz9L8m%2Fu8dQ2LMtBQqNdKY53xCjwpnJu1VlZ9Z3dfQ%2FB0aVrjWBkxiJyONK9rQmJ7fZV%2Bw8zqL29TZjEIwt9bKdIcjHRiT98%2FYWeMp9f%2FA%2BiO3gV882rmwIPclZD5Q5mN%2FP%2Fb0JjBjVlgNXT%2BIBMZ89GLqS5dsMwYCQfVET0YEXlEGBMm5snpWWSVccI1ZWEe58h5XEAOXA%2BLby6r9yAShXSajW0c3dsLwluzpGrFdF%2BaG%2Fi129cRbY81ppV5TaW6K7NRDXkUiG2Hu6S6uzHcQFALjKLZ4KKBRQ%2BhL%2BbsQHSILxx10doMKHOp74GOqUBxlk9gCWW1q3YV7w2Y7VibmOmeOmrOFdMWqG8f7AondCK36qrUILjYNYykAzm22Q1txdcz%2BJ%2BsbsE1Be6oRB4gX5SHQ020JV3QzN4LZgy7n2wRLIGP0dPUNtRd5lv8NaR8yZuGax4x9LM1%2FD%2BQtEXzzCoWUIEEpbFAS7za5iwt8%2BgGHZWP%2B0XKE75O3x0U9rqeWw53MxUKk54ZZWJ4aAGq1%2B39mPs&X-Amz-Signature=cd87a7e8b510e6c72b4199a2b7d21fc76ea16dec1fbb562951b3dd71e8b23607&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISFGOJL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL67LSFgM48DPD3%2F0AUZix7VKbNmZumorzERHDoj%2FOTAiEArj6Pu%2Fjc40soIgrNMRtT%2BItycsM1XgiUSKIRkk1e1mEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHSaeb%2FBFhiOYOSwmircA%2BhVJTo6G5dwXKj3o7lDftI0ufK6z7sSa6gdu%2F66AxprzYTocKueHyRbS6tbHG7dwMwJD%2Btr4HtMD7p6j9aPRv4KeCzUPjx5vCkHZNYrGHgaoHFD6ZQnJFeA%2FSMY%2FHpcuLzJtGZvlmP%2FdkWBH3rsv6ldEswqEKD9hlyfee3W0LAKQyKQpVzzdyDPKxfEKJjoLUSq%2BXZ6FIh11sJQYTlEX3cq5sPrQIgCbfbHgd8YCJP5Ah05dUZh3XjqDocCYnw0dVt1EFlYj7obXg5U2cFhv8kXwL%2FNNm5O0bVLyNAzW1GRmc3K%2BklG0ClneanioMdURI6qLxGStz9L8m%2Fu8dQ2LMtBQqNdKY53xCjwpnJu1VlZ9Z3dfQ%2FB0aVrjWBkxiJyONK9rQmJ7fZV%2Bw8zqL29TZjEIwt9bKdIcjHRiT98%2FYWeMp9f%2FA%2BiO3gV882rmwIPclZD5Q5mN%2FP%2Fb0JjBjVlgNXT%2BIBMZ89GLqS5dsMwYCQfVET0YEXlEGBMm5snpWWSVccI1ZWEe58h5XEAOXA%2BLby6r9yAShXSajW0c3dsLwluzpGrFdF%2BaG%2Fi129cRbY81ppV5TaW6K7NRDXkUiG2Hu6S6uzHcQFALjKLZ4KKBRQ%2BhL%2BbsQHSILxx10doMKHOp74GOqUBxlk9gCWW1q3YV7w2Y7VibmOmeOmrOFdMWqG8f7AondCK36qrUILjYNYykAzm22Q1txdcz%2BJ%2BsbsE1Be6oRB4gX5SHQ020JV3QzN4LZgy7n2wRLIGP0dPUNtRd5lv8NaR8yZuGax4x9LM1%2FD%2BQtEXzzCoWUIEEpbFAS7za5iwt8%2BgGHZWP%2B0XKE75O3x0U9rqeWw53MxUKk54ZZWJ4aAGq1%2B39mPs&X-Amz-Signature=ca66fddfe66382201f91ec666c05d8edbd38c523ddbd0433caf5313f5e26f7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
