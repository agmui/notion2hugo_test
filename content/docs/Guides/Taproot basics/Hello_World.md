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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI4BTJ4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlYpSG2%2BQXSyoOynPIRzOcwf8608y253PhG85ot29Z8AiAbm3xywLJT2e3iTJgA7ht1JqF6toOABK8OBKDy2a%2BwOSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4KwanrBE1Dezb23KtwD7Aij5es7SZzUlxzJrLdGXxR5rNb6VQgn7I0iQxLCgIzQWGmFDMJBt6XcwM0YCsIYPwURQgwP8vBkZPN1dkTwCJiy%2BkEcehFRNi%2BbotYU2CXqf%2Bzb4Eft4O3AOllLv758F9FSDCbRivfK12%2BcLRdSmC47d65WvY1L9yUf%2BLya3lEsjQ37Z6x4eYXRqHfOGw01P9qfhy1IT4gEc%2B156w136JWYyrFBEqpAT3UtiXwKXCcN%2FK1agbRtmwHhReS176vy3hXVFvtYT2rilxKFCwMZvzefHgP8pdJweAojl4TdCKSh13Fb162BBk5gCsFMLbXZIPOYwNo7Ahc%2F0XFY5s6qNy5xCzvCefpHc5%2F2PBwLBTyy4dONZJ0eQ7POK81u0eRMZwmojRsQBdWzJ5ETrfnvDaI%2FoTf0Zqh%2FN17KV%2FKC0yu6H0LU4eaJQ93fDHffDH3sMbbevriJH9uRCJO4rnKGDeE309AXZTBZ8Ce76%2BAN04AHcYp4oxUz71Srb3uzj7KSHXadrZEr2K4XYJGx7YK12kDNuvkZFH1DBTj%2Fh0GuQvA849lGc7p%2B30Mj56ViVkFOvzfjjtvq3VRAOnNusovwhJZ1E%2Bmg4dLexpmdjpAQv7zCEHefDIuzzz3xB68wiMuvwQY6pgHlCKxEPWrvM0MYH3qqPLzZ%2BobXW5NVvAZkxir2v%2F1AmTk86kFGD2lQ9eYI7FjzRey4xSPPdgMswg9j1iwOHkivM%2Fe%2B0eM5inLqyA6ClbOrWRNqOfZNLthTVUEO%2FnU4jPVoyrCOocht0vuEorflHdmAvP4CxW1nbMeE07WQeG%2BV5rxpO9vuqe4wKCsVA7xpVIUtVKXhclHayUyS%2FW8Lfc%2Fv57QYrS%2FS&X-Amz-Signature=bbd2b1c1bbce287a914eed0bc369197b1f10c2b96d42fdbec50a3df7f8d6d425&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI4BTJ4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlYpSG2%2BQXSyoOynPIRzOcwf8608y253PhG85ot29Z8AiAbm3xywLJT2e3iTJgA7ht1JqF6toOABK8OBKDy2a%2BwOSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME4KwanrBE1Dezb23KtwD7Aij5es7SZzUlxzJrLdGXxR5rNb6VQgn7I0iQxLCgIzQWGmFDMJBt6XcwM0YCsIYPwURQgwP8vBkZPN1dkTwCJiy%2BkEcehFRNi%2BbotYU2CXqf%2Bzb4Eft4O3AOllLv758F9FSDCbRivfK12%2BcLRdSmC47d65WvY1L9yUf%2BLya3lEsjQ37Z6x4eYXRqHfOGw01P9qfhy1IT4gEc%2B156w136JWYyrFBEqpAT3UtiXwKXCcN%2FK1agbRtmwHhReS176vy3hXVFvtYT2rilxKFCwMZvzefHgP8pdJweAojl4TdCKSh13Fb162BBk5gCsFMLbXZIPOYwNo7Ahc%2F0XFY5s6qNy5xCzvCefpHc5%2F2PBwLBTyy4dONZJ0eQ7POK81u0eRMZwmojRsQBdWzJ5ETrfnvDaI%2FoTf0Zqh%2FN17KV%2FKC0yu6H0LU4eaJQ93fDHffDH3sMbbevriJH9uRCJO4rnKGDeE309AXZTBZ8Ce76%2BAN04AHcYp4oxUz71Srb3uzj7KSHXadrZEr2K4XYJGx7YK12kDNuvkZFH1DBTj%2Fh0GuQvA849lGc7p%2B30Mj56ViVkFOvzfjjtvq3VRAOnNusovwhJZ1E%2Bmg4dLexpmdjpAQv7zCEHefDIuzzz3xB68wiMuvwQY6pgHlCKxEPWrvM0MYH3qqPLzZ%2BobXW5NVvAZkxir2v%2F1AmTk86kFGD2lQ9eYI7FjzRey4xSPPdgMswg9j1iwOHkivM%2Fe%2B0eM5inLqyA6ClbOrWRNqOfZNLthTVUEO%2FnU4jPVoyrCOocht0vuEorflHdmAvP4CxW1nbMeE07WQeG%2BV5rxpO9vuqe4wKCsVA7xpVIUtVKXhclHayUyS%2FW8Lfc%2Fv57QYrS%2FS&X-Amz-Signature=8593e191bea7489721a6668b554519ba76b3f75c6cbc8ab2e3e0e3fb31613196&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
