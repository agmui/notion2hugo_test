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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XN7B6O%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZkNn5p3ozMGLQK%2B0CPimOCji7Jjccoyy7UzRvYBUsnAiBVxJNyMcNSJfQcVfeq9Xj0owPq06hyA3I3zF6j6b2KtSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7hLowGTzWelLn9ukKtwDJuaf8eQ4LPir7QG3eZDhLh6Hobvt4ykKwzeyXaP85MT39vBbyxN8xsBIlPZwJvEVe3KC%2F6tolg62TyVgILh7sjFrN%2FA0XiXM3Y0Oo%2Bbbe5INtczRu%2FFACKlCoMcbmodQI51PmfWYLBAZzHpJkDtyXc%2FQsMkyl6wuHdRTUx%2Bay8%2Bub8qMFfYX6oP5Z%2FCjOHREmmaWipKMm5oHePwrSjxmm%2BuIxnPQBq%2FP12LMP2NDURxX779P2UBzyQfFWePkjGbEBRKfGPMwt3CmQMb1qLGQnmfaEFOgLyKUo9qPZmYiL5GRI8Lgt5cocAWpQE%2BANXtFhs%2B7eLIXVJ%2FzfMHhOEOnFKWiaJjREq50nyCfqGkuMTFEwSqjNhPzvW65IzZNd6sW2DCgNJvcWG%2Bi1Po6IUE2n61EVBa1g4trrDLZMNzjrH%2FrJ4JeOplyM70HtLdTjpwjEPFfbS%2Frs%2Fifb5BJMEgYNYwigsI91hMI%2FoxpGw1lIIT4CJoRcmcQhX6VRVWmL5NeYWZoWWXQdIfp91YafBq5Gfl7KiZjxL6bxS07hT4EC9DdSA4SElwAzNOBdSClmNm3l0%2F%2BBwpLChHEIb%2FlBv7djtOYolk3ybf52NFdeWghtMuPekVADJfxSt7W95cwgImZvwY6pgGmT0zd7IM7U3fqEtzHsEHl4HJ%2BHuU0%2FlNl6l3vW6w%2BzBJ0rRFoVB%2BjyWjdBlZicApdaJOAAwqo%2B6yaRZBoNSQSIvGa12zBF%2BQslKZE1NsbBD800ueqoDZWCUsiTx%2BaBNDkidgWGKIJrVCjR9uE3hE1SZqpRkb5GMOPcEc7bjo4Ko4dfsqub0NI4J3Zxksd%2FanL2uTqE73QyIT9pFCx19z82HC0D1gm&X-Amz-Signature=d18e08a499febadad13fc2e0988b46a0e5b1bde58de7df1d238b3844ddea7b59&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2XN7B6O%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZkNn5p3ozMGLQK%2B0CPimOCji7Jjccoyy7UzRvYBUsnAiBVxJNyMcNSJfQcVfeq9Xj0owPq06hyA3I3zF6j6b2KtSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7hLowGTzWelLn9ukKtwDJuaf8eQ4LPir7QG3eZDhLh6Hobvt4ykKwzeyXaP85MT39vBbyxN8xsBIlPZwJvEVe3KC%2F6tolg62TyVgILh7sjFrN%2FA0XiXM3Y0Oo%2Bbbe5INtczRu%2FFACKlCoMcbmodQI51PmfWYLBAZzHpJkDtyXc%2FQsMkyl6wuHdRTUx%2Bay8%2Bub8qMFfYX6oP5Z%2FCjOHREmmaWipKMm5oHePwrSjxmm%2BuIxnPQBq%2FP12LMP2NDURxX779P2UBzyQfFWePkjGbEBRKfGPMwt3CmQMb1qLGQnmfaEFOgLyKUo9qPZmYiL5GRI8Lgt5cocAWpQE%2BANXtFhs%2B7eLIXVJ%2FzfMHhOEOnFKWiaJjREq50nyCfqGkuMTFEwSqjNhPzvW65IzZNd6sW2DCgNJvcWG%2Bi1Po6IUE2n61EVBa1g4trrDLZMNzjrH%2FrJ4JeOplyM70HtLdTjpwjEPFfbS%2Frs%2Fifb5BJMEgYNYwigsI91hMI%2FoxpGw1lIIT4CJoRcmcQhX6VRVWmL5NeYWZoWWXQdIfp91YafBq5Gfl7KiZjxL6bxS07hT4EC9DdSA4SElwAzNOBdSClmNm3l0%2F%2BBwpLChHEIb%2FlBv7djtOYolk3ybf52NFdeWghtMuPekVADJfxSt7W95cwgImZvwY6pgGmT0zd7IM7U3fqEtzHsEHl4HJ%2BHuU0%2FlNl6l3vW6w%2BzBJ0rRFoVB%2BjyWjdBlZicApdaJOAAwqo%2B6yaRZBoNSQSIvGa12zBF%2BQslKZE1NsbBD800ueqoDZWCUsiTx%2BaBNDkidgWGKIJrVCjR9uE3hE1SZqpRkb5GMOPcEc7bjo4Ko4dfsqub0NI4J3Zxksd%2FanL2uTqE73QyIT9pFCx19z82HC0D1gm&X-Amz-Signature=87cc1e325df7d08f9f4d054d611a3874b940bf72436bb550dd09f53be650c49d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
