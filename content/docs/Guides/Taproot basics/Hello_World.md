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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PWKJWJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7YgD1Tz%2FZku1gWddTWxu74Q9B6YCqCSBNWXusGjPgwAiEAkXscByGyqqsRj3poCYGSLTyPgTKK1j6LwSUiUetHnb0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjUKHzMh2BauzOaircA%2BKSkKY%2BMJkpRflcwgbnYsK0Z4WSa5Wk904eG%2FMVnXV5RiA%2FCkXppBMFruXzpLcih5ZELiPoozpDi6E9%2BZyi4FIylIgTJCoziplHcqtlNWOglQAkr%2F0INElL3XOLxb2xkKa7xJ3qf%2BmyxuLljNT%2FkTbTae2rl4ShI3yCeaOtL8wQrqm%2F%2BkZ1OPAHGMr5txzm4salmhJ80T9hTXWQC1e5GMKBvzjdka5hjkg9XYnPbGfYHtv5CjE6cb8RIQjg3fNkbzjbvay6x614bYgpa%2FonchD6xAMnFrnLrBeJehOHifacdewVQ%2FSbMaJcNQvNlCcU112vF2UVqhgiuPUWXanjJ%2BSvLtyoX6TGCrHfNInNuTnhJOMIZXQ3uQbkwSKv1evCgS0vBnjPjeNIULHP7RY53e4x3SF0C0i1EloAddhIqo4X2PYKyAwQ6iuyou7OFy2QT8ISTVtHxxeI%2FYtakq8aTNqcdaU%2B2RxYB2N5TwT2APS5ia6BemrJOIDGhCsMhNg%2FUsYraeA%2FaKFd1Aa7IX3w3CKOgvel%2BvvRP8nIEoGzmXo9ppo8bRL%2FWveMjd98PQDmvgOPtTSrnFVuzpViHfq7IYvgwru9%2BI997Z%2BqBG%2FTU5cX%2B1wTQpMiMD6n7vhlMNn6hcMGOqUBNpzTWTZ0V2bV3SKbr%2Fi9tVzt%2F%2BwjDMBw8n0VzQnotTKKnv%2Fshek1EuWhzDp1ruI4QrRkoAfXZm9%2BJXHkC%2FYNospNbb73P2BuQflZsI0ycDOxznLvdh54tt4qRdH%2FP331O7K0WanApFjKNhik0d3zNmbZFWnWUxiKtSV5EXl3MqZ8ojW4kH6SCb4BF02guf9B0XADGyr7KUGHUQJtPGckWz3MOcGO&X-Amz-Signature=cecedaa6d7a27c0a618df39440b6345cbdb3bbb0f0ec73108d0908f11ade7755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PWKJWJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7YgD1Tz%2FZku1gWddTWxu74Q9B6YCqCSBNWXusGjPgwAiEAkXscByGyqqsRj3poCYGSLTyPgTKK1j6LwSUiUetHnb0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjUKHzMh2BauzOaircA%2BKSkKY%2BMJkpRflcwgbnYsK0Z4WSa5Wk904eG%2FMVnXV5RiA%2FCkXppBMFruXzpLcih5ZELiPoozpDi6E9%2BZyi4FIylIgTJCoziplHcqtlNWOglQAkr%2F0INElL3XOLxb2xkKa7xJ3qf%2BmyxuLljNT%2FkTbTae2rl4ShI3yCeaOtL8wQrqm%2F%2BkZ1OPAHGMr5txzm4salmhJ80T9hTXWQC1e5GMKBvzjdka5hjkg9XYnPbGfYHtv5CjE6cb8RIQjg3fNkbzjbvay6x614bYgpa%2FonchD6xAMnFrnLrBeJehOHifacdewVQ%2FSbMaJcNQvNlCcU112vF2UVqhgiuPUWXanjJ%2BSvLtyoX6TGCrHfNInNuTnhJOMIZXQ3uQbkwSKv1evCgS0vBnjPjeNIULHP7RY53e4x3SF0C0i1EloAddhIqo4X2PYKyAwQ6iuyou7OFy2QT8ISTVtHxxeI%2FYtakq8aTNqcdaU%2B2RxYB2N5TwT2APS5ia6BemrJOIDGhCsMhNg%2FUsYraeA%2FaKFd1Aa7IX3w3CKOgvel%2BvvRP8nIEoGzmXo9ppo8bRL%2FWveMjd98PQDmvgOPtTSrnFVuzpViHfq7IYvgwru9%2BI997Z%2BqBG%2FTU5cX%2B1wTQpMiMD6n7vhlMNn6hcMGOqUBNpzTWTZ0V2bV3SKbr%2Fi9tVzt%2F%2BwjDMBw8n0VzQnotTKKnv%2Fshek1EuWhzDp1ruI4QrRkoAfXZm9%2BJXHkC%2FYNospNbb73P2BuQflZsI0ycDOxznLvdh54tt4qRdH%2FP331O7K0WanApFjKNhik0d3zNmbZFWnWUxiKtSV5EXl3MqZ8ojW4kH6SCb4BF02guf9B0XADGyr7KUGHUQJtPGckWz3MOcGO&X-Amz-Signature=f3178297c4b14a5f7bf86bb56f431e2cd6e4c388c98eaa133114f531c37d9b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
