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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJOCS46%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAe8vz3lIYidvB%2FescyB31M6meOEWIs33wTZVS8Fx7fQAiA8rxbCGSM0qcdvxgraY54gcRKz6gEmdRgQFL42Tc73RSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMIkdjPJSykd5oFs0AKtwDUuli5Rgx5Mn93u9YLZ9ldjjUGWtucn%2F84SRB%2Ft1qN%2BgfnTiiR%2BeyXpjrgbDF1w0xPADjmSgnQUca5U6IezmU6qN9R0N%2FGGa4b4LUtJm0l2M43%2FqnnPuNaJ%2FxkoF1rcMgsckIglTXnESVWX6iWIsb7W8Ey0lS7JD2EdJcG0XIzcxejR8iMH6%2Fr1AfZ6RSgstA9njbtDY1NIvE5UnSleVIYMfNRY%2B9v0APN1tQqOO7vJr1y1qng%2BZBcsa6fMUD1FZYe9dboopYO4Y6tyKZBsYszpTyuAWTPbKq9fzv5l0wby4KmvvGWNLSk0BQWxWyCPpY2b2falWYX6wccKlTEokn%2FRk9UFRcszqj%2B0kkbxOHEAQrnZIkmV7v6pWVomEpwjYiFKKbGskh1qctt07xg7pWUjn7dhH5ie3mVRHYVM2sZLtdrCH5XDZ1SyFW16FgxgZjuLzG%2BILyidM4HTw5z2ppubNqoYagsajjrS%2BJzgkz2rOndRyNNzRjbiRpUmUll9VHuh3PvRD5KEUaDeDHI%2FR3xaWwh9Iik0DGbKozAnSZ%2FkWmlZvQ4aCv0KBgKnHLRsv3Zko5keMnzxRV6PeXMLoUXkrFZIH38lx3lGB7tKSc3hSbhKelQObzvPZcS2Mwxe3BvQY6pgHTL0jBtx4dmtFOLjnxzKpLJPuMMnWBULk1yFBX5t9jcrRbnF0TRGXzilkhrSb0kuI9CYA7BBXMJ9QyIG7KxeWMvV1N1kMKhllgfwPb7nove49N%2BCStrZ0%2Bfp8Qup9%2FrIFdfzk9pTbY2sV3qS8Z27JrjGLMrOF17LBshhReSHvD%2F62BGrYGds4kC6tBw9R%2BDjRIcQW5ybghbFwQ7dMrJdY3MNe4wsx2&X-Amz-Signature=adccc6e56608fd53c90fea435fb4bd3b05e7cd3d5a8f5e7dbd83a08253e684ef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJOCS46%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAe8vz3lIYidvB%2FescyB31M6meOEWIs33wTZVS8Fx7fQAiA8rxbCGSM0qcdvxgraY54gcRKz6gEmdRgQFL42Tc73RSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMIkdjPJSykd5oFs0AKtwDUuli5Rgx5Mn93u9YLZ9ldjjUGWtucn%2F84SRB%2Ft1qN%2BgfnTiiR%2BeyXpjrgbDF1w0xPADjmSgnQUca5U6IezmU6qN9R0N%2FGGa4b4LUtJm0l2M43%2FqnnPuNaJ%2FxkoF1rcMgsckIglTXnESVWX6iWIsb7W8Ey0lS7JD2EdJcG0XIzcxejR8iMH6%2Fr1AfZ6RSgstA9njbtDY1NIvE5UnSleVIYMfNRY%2B9v0APN1tQqOO7vJr1y1qng%2BZBcsa6fMUD1FZYe9dboopYO4Y6tyKZBsYszpTyuAWTPbKq9fzv5l0wby4KmvvGWNLSk0BQWxWyCPpY2b2falWYX6wccKlTEokn%2FRk9UFRcszqj%2B0kkbxOHEAQrnZIkmV7v6pWVomEpwjYiFKKbGskh1qctt07xg7pWUjn7dhH5ie3mVRHYVM2sZLtdrCH5XDZ1SyFW16FgxgZjuLzG%2BILyidM4HTw5z2ppubNqoYagsajjrS%2BJzgkz2rOndRyNNzRjbiRpUmUll9VHuh3PvRD5KEUaDeDHI%2FR3xaWwh9Iik0DGbKozAnSZ%2FkWmlZvQ4aCv0KBgKnHLRsv3Zko5keMnzxRV6PeXMLoUXkrFZIH38lx3lGB7tKSc3hSbhKelQObzvPZcS2Mwxe3BvQY6pgHTL0jBtx4dmtFOLjnxzKpLJPuMMnWBULk1yFBX5t9jcrRbnF0TRGXzilkhrSb0kuI9CYA7BBXMJ9QyIG7KxeWMvV1N1kMKhllgfwPb7nove49N%2BCStrZ0%2Bfp8Qup9%2FrIFdfzk9pTbY2sV3qS8Z27JrjGLMrOF17LBshhReSHvD%2F62BGrYGds4kC6tBw9R%2BDjRIcQW5ybghbFwQ7dMrJdY3MNe4wsx2&X-Amz-Signature=8f142f74fba6d11691a139c0b8636c01c47b6ae6faacc2a7535c556a6e4f4bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
