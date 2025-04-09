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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LC2YKFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHMOkUKbXaFvPH4KyVTPp2g4xZBszCTT0iWGZlR0srSkAiA25z1cJzG%2FS8BdUuXOB3fXpPhciLTF%2BYNvGBHd%2Bv2RECqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8p4tOVAupz848pKtwDZiXPTKyEp8T23hCGRGhnLHwPKn9pMSSubHKVKvkYr9lGPv%2FxNjmCgFmiwG2vHtM5wbLtVEs1%2F8CPNOC2Viorl8Dcwln8qT5RLxq3qUQ6ZsTOlHux3NStniqyiQkApMsK2b738HQ%2FGdNhnY%2FD2XnRKPBp7aUTOLOEYSomXGxZhsMJ5VMslnH2VXr8wEGwSSEyQyiXOtfEJxEy427SAb9%2Bg%2B7NQzWIO3KOYETP%2FS4aDNBHVXz3KMkkSOCiaz9MhNIWri6y8VtcEO%2Brv7FQiZr0MrtreM0rGRG0NJxxwCUHjQIfr7gCbMtqDZNQqAa3Qn8I5XZPi6I3RuGOgglBKXkBmketIIiwQVUfqdcUFVHLmFDa84hzfuBk6F9%2B19HqA8bT4qbBD0%2BvgbqIbb8aTlEUBApviPhUNe8MTsR4IF%2BN5c326FWZAhrnOSw%2B0vrh9Yj%2FaGmdYXM%2BK1%2BwOQ4YRrOOBQnPPXJVmmx9Bx5%2BfV3SpTKdSLqoV31Y4%2FFhngiOYjyR0Mn%2B7B2NCZrKH%2FCSdqoZyoK9Y4D4kLejlOTTlgsoQK1X7cKZEmqUq8IeBNg8LOyUpSW7YiVVX8Gic4C3pxraMEi%2FkQvvwdfl4x7CGfmDhhxkWlNEPhD3EIeEheswyr%2FXvwY6pgG9zz2wbQug6f5zBw8WCfdMGyIHDneH0qnQNPuTwwiLSQGfe1EeKT2nGVam%2FwRWWdN5iC6LyOGy8gQWy%2Fm4gRDVugfPuV4cdBXVBfcf7TQlNGEEhSGrgsu2%2BwpDO7kmby06%2FmZuUh99FIfBo0sSOCd9whgnXolBYHNOQaDffE9Xj%2FuVAt%2F%2FbIuIFPHLdUVKp4xulqY2g8328pZcpJh2PU9p7yfcIQkb&X-Amz-Signature=c72700c01f9bda5d69d4d7516038a954ad8217262341957d5b0756a0c91aa10d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LC2YKFZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHMOkUKbXaFvPH4KyVTPp2g4xZBszCTT0iWGZlR0srSkAiA25z1cJzG%2FS8BdUuXOB3fXpPhciLTF%2BYNvGBHd%2Bv2RECqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Q8p4tOVAupz848pKtwDZiXPTKyEp8T23hCGRGhnLHwPKn9pMSSubHKVKvkYr9lGPv%2FxNjmCgFmiwG2vHtM5wbLtVEs1%2F8CPNOC2Viorl8Dcwln8qT5RLxq3qUQ6ZsTOlHux3NStniqyiQkApMsK2b738HQ%2FGdNhnY%2FD2XnRKPBp7aUTOLOEYSomXGxZhsMJ5VMslnH2VXr8wEGwSSEyQyiXOtfEJxEy427SAb9%2Bg%2B7NQzWIO3KOYETP%2FS4aDNBHVXz3KMkkSOCiaz9MhNIWri6y8VtcEO%2Brv7FQiZr0MrtreM0rGRG0NJxxwCUHjQIfr7gCbMtqDZNQqAa3Qn8I5XZPi6I3RuGOgglBKXkBmketIIiwQVUfqdcUFVHLmFDa84hzfuBk6F9%2B19HqA8bT4qbBD0%2BvgbqIbb8aTlEUBApviPhUNe8MTsR4IF%2BN5c326FWZAhrnOSw%2B0vrh9Yj%2FaGmdYXM%2BK1%2BwOQ4YRrOOBQnPPXJVmmx9Bx5%2BfV3SpTKdSLqoV31Y4%2FFhngiOYjyR0Mn%2B7B2NCZrKH%2FCSdqoZyoK9Y4D4kLejlOTTlgsoQK1X7cKZEmqUq8IeBNg8LOyUpSW7YiVVX8Gic4C3pxraMEi%2FkQvvwdfl4x7CGfmDhhxkWlNEPhD3EIeEheswyr%2FXvwY6pgG9zz2wbQug6f5zBw8WCfdMGyIHDneH0qnQNPuTwwiLSQGfe1EeKT2nGVam%2FwRWWdN5iC6LyOGy8gQWy%2Fm4gRDVugfPuV4cdBXVBfcf7TQlNGEEhSGrgsu2%2BwpDO7kmby06%2FmZuUh99FIfBo0sSOCd9whgnXolBYHNOQaDffE9Xj%2FuVAt%2F%2FbIuIFPHLdUVKp4xulqY2g8328pZcpJh2PU9p7yfcIQkb&X-Amz-Signature=7995891016718d5825b39c10105b27882fc3c9e1b12cabde9912f15cea76fe22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
