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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3OL4GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAp4c5TTZ7J6AB%2B9tXveEnhNQxKJHx0f6Yzov84fCDt8AiEA5sVI20iMPlWYM6H272A7vpJjxbY%2B4VxrQrYgnJMqjqIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBtWz3exAhSphANDSrcA7zhXZZoU%2FTKxAw%2BjVZQ647KXO05yiu5kjpMYCXszIt0O4PuPu%2FBfMBFly9S3jBJoO1sM%2BfR2dl8GZbBc%2B919zcJBrTbrT%2BsShwcUpl5Z%2Bc1iN%2FnCVaw4N3pyu5zJAsy%2FzUwTtSKGmq4CX%2Bfp6uRzVcc6mBG6QqRuGq9WNwJBOtia2tZk7H%2BN4PAwnW3A%2FH4XPND0hIpdii42L9g%2BuU5Xpr%2BkUpRhljHfvPjfxtDAtbQgcd2tRbyuZTOHAP0%2FDqrBPJE35Y77YBogbUrmK8Ie12OWTVSJBxQpzMSYAGSctG0mSiOwtLiR8CM087W%2F240RKA%2Fn2eO9WmGrRMCZ3oNmCfCpQAwRrJu7eKvSEUvkmcKrW8Frc21pdxwjNKzUhnFuJfimgEofPKQFLpuOaX%2BkMr0QudIzKkNtAmQcyGpjUDN%2BvFMuC%2FZOAi9irzubnLBAj1Sz9EJOFoCszGU476LiPaD1%2B3lZnrL7TGljWJXbD026qCAXI84d3lS9cqGmoy5Yla158D%2BF8uIIvO6wg2lm2j9HmxVBQlwrwT0lOe3Cmux3a16h62uiSWZo%2FCU7v2mbm65K7SFaIqjjCRXK2rCPOc5gw5H9bXcSUCWvc9osW6%2FByq2mBFHfNhnE%2FOsMPbUib4GOqUBLmcbMDHPJzehD%2BIHFzhn0O3jSPxxgczoPMYqFDhE0WUQgMu1M5bwoZHqGEnGVFTrowwfrpP7iYd5DzERbnThjQVw%2B%2B22%2F0uTD7iPro1A0R1SyGJ6YSEd1nehdz%2F9ig5QIxPVOYvO1SBFqcBuvRC3ZJdEU%2FalS6yJYxIvNU6ZfJnVKJeCGGiRw8XLHkTI7HWnQcam2bGtGHRD%2B9Acovy7nM2HwcGk&X-Amz-Signature=674976b8914b040f9f8f927532115c8ebe4fcd3f9d85c1efd327581e9a090229&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L3OL4GJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAp4c5TTZ7J6AB%2B9tXveEnhNQxKJHx0f6Yzov84fCDt8AiEA5sVI20iMPlWYM6H272A7vpJjxbY%2B4VxrQrYgnJMqjqIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBtWz3exAhSphANDSrcA7zhXZZoU%2FTKxAw%2BjVZQ647KXO05yiu5kjpMYCXszIt0O4PuPu%2FBfMBFly9S3jBJoO1sM%2BfR2dl8GZbBc%2B919zcJBrTbrT%2BsShwcUpl5Z%2Bc1iN%2FnCVaw4N3pyu5zJAsy%2FzUwTtSKGmq4CX%2Bfp6uRzVcc6mBG6QqRuGq9WNwJBOtia2tZk7H%2BN4PAwnW3A%2FH4XPND0hIpdii42L9g%2BuU5Xpr%2BkUpRhljHfvPjfxtDAtbQgcd2tRbyuZTOHAP0%2FDqrBPJE35Y77YBogbUrmK8Ie12OWTVSJBxQpzMSYAGSctG0mSiOwtLiR8CM087W%2F240RKA%2Fn2eO9WmGrRMCZ3oNmCfCpQAwRrJu7eKvSEUvkmcKrW8Frc21pdxwjNKzUhnFuJfimgEofPKQFLpuOaX%2BkMr0QudIzKkNtAmQcyGpjUDN%2BvFMuC%2FZOAi9irzubnLBAj1Sz9EJOFoCszGU476LiPaD1%2B3lZnrL7TGljWJXbD026qCAXI84d3lS9cqGmoy5Yla158D%2BF8uIIvO6wg2lm2j9HmxVBQlwrwT0lOe3Cmux3a16h62uiSWZo%2FCU7v2mbm65K7SFaIqjjCRXK2rCPOc5gw5H9bXcSUCWvc9osW6%2FByq2mBFHfNhnE%2FOsMPbUib4GOqUBLmcbMDHPJzehD%2BIHFzhn0O3jSPxxgczoPMYqFDhE0WUQgMu1M5bwoZHqGEnGVFTrowwfrpP7iYd5DzERbnThjQVw%2B%2B22%2F0uTD7iPro1A0R1SyGJ6YSEd1nehdz%2F9ig5QIxPVOYvO1SBFqcBuvRC3ZJdEU%2FalS6yJYxIvNU6ZfJnVKJeCGGiRw8XLHkTI7HWnQcam2bGtGHRD%2B9Acovy7nM2HwcGk&X-Amz-Signature=db0ce2b7ac83abc7f29b706cbd18d45d87e83e443cfbc43491344eb98067aa20&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
