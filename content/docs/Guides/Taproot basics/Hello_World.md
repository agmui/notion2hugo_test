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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVZQUTU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2YbWi%2FhP%2BGdgPzvsYKjeSHD%2FoUY5HLMrGqYK4QqNpZAIhAOX0BHrHccefdpXizF31Dx4CEISrFnwjXA3wBnSgBvsTKv8DCFcQABoMNjM3NDIzMTgzODA1IgwAMIUF8bZUmy7rPLsq3ANcBFVGPXKam339w8cSv6Ai6cf1LYKMGDRjmrnIdqchK3uDnVS2ucc6%2FXUEyAVLRriA2%2BtvP4s5b5Ehpin1r3aW97Np2Cz3X0EdhlzkCRqTNO3T%2FVxoq115Xa3v6B0ZU8oSAKJefRHbmYK59eP1uuhIzjYxNI7kXuM0vZN4Wnwot8KICIxuejfKbdu9nloaufAkwmaViEPs3L3hm8eueSl%2Fi1MCdqUQ8h2OPe02TdlzsRl216has5UIpSPuipV40OqerbzNeTkCfoGr%2FanOQccN%2FK6Th9JqTbqjAbfR4YaWKwj38Ly6TMw5XHyftB%2FyYrA1HYidOpljgmhswoYFLBPef9TIg2botNwaK7Isx0ipujlRH%2BLLL%2BLz7sHkwysV6p26C4HSDQydu0LabtJds7o1V7gfMMbNp5UAyu%2BaaRHq%2BleFZaXF9ciJ6b9SRY7WH%2FvHrVkv61HpM3qYBlXOrFSETdLTp8b4u69UKjErojbOEFgmGIa0jYJGBMXyknvYXV%2FWQeIOb5npzSgWjsVC8y%2B%2B%2FG5QMKT5FhU7vQha0YqOORMHCwN7IdIqK%2BtTfz2L24zcKCf6T%2FEH7i0i6Nk%2BFqY1xCKIGy8GK2wWiHTq7LPjelKsWJMx8N8MKb%2BiuDDg%2FcW9BjqkAWJb52LVJ7ekWxjHVZW02L53YOVuK0VB%2BcNxUSd3pHPdJt1j56iaMlgPzhvncpCHZdyldvBVHl6QtbQcXy71cwYn%2FlFQFNOSSoHBiNpx2cq1nZ38PsRNJJkVg14Yg0z5ic3bFC6323DvDfGv%2FnEBtz2ha3TWpX%2Bm%2BgKwfII6ddTVoZ7KgL08iMZWGx87VQ4J8bt%2FsVRs1PEcPzNU7XJRmn108oy1&X-Amz-Signature=095c183b42cc0a625c1a36d7c526f21ce0cb2deabb9669ee6e15e971d4ee3c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVZQUTU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD2YbWi%2FhP%2BGdgPzvsYKjeSHD%2FoUY5HLMrGqYK4QqNpZAIhAOX0BHrHccefdpXizF31Dx4CEISrFnwjXA3wBnSgBvsTKv8DCFcQABoMNjM3NDIzMTgzODA1IgwAMIUF8bZUmy7rPLsq3ANcBFVGPXKam339w8cSv6Ai6cf1LYKMGDRjmrnIdqchK3uDnVS2ucc6%2FXUEyAVLRriA2%2BtvP4s5b5Ehpin1r3aW97Np2Cz3X0EdhlzkCRqTNO3T%2FVxoq115Xa3v6B0ZU8oSAKJefRHbmYK59eP1uuhIzjYxNI7kXuM0vZN4Wnwot8KICIxuejfKbdu9nloaufAkwmaViEPs3L3hm8eueSl%2Fi1MCdqUQ8h2OPe02TdlzsRl216has5UIpSPuipV40OqerbzNeTkCfoGr%2FanOQccN%2FK6Th9JqTbqjAbfR4YaWKwj38Ly6TMw5XHyftB%2FyYrA1HYidOpljgmhswoYFLBPef9TIg2botNwaK7Isx0ipujlRH%2BLLL%2BLz7sHkwysV6p26C4HSDQydu0LabtJds7o1V7gfMMbNp5UAyu%2BaaRHq%2BleFZaXF9ciJ6b9SRY7WH%2FvHrVkv61HpM3qYBlXOrFSETdLTp8b4u69UKjErojbOEFgmGIa0jYJGBMXyknvYXV%2FWQeIOb5npzSgWjsVC8y%2B%2B%2FG5QMKT5FhU7vQha0YqOORMHCwN7IdIqK%2BtTfz2L24zcKCf6T%2FEH7i0i6Nk%2BFqY1xCKIGy8GK2wWiHTq7LPjelKsWJMx8N8MKb%2BiuDDg%2FcW9BjqkAWJb52LVJ7ekWxjHVZW02L53YOVuK0VB%2BcNxUSd3pHPdJt1j56iaMlgPzhvncpCHZdyldvBVHl6QtbQcXy71cwYn%2FlFQFNOSSoHBiNpx2cq1nZ38PsRNJJkVg14Yg0z5ic3bFC6323DvDfGv%2FnEBtz2ha3TWpX%2Bm%2BgKwfII6ddTVoZ7KgL08iMZWGx87VQ4J8bt%2FsVRs1PEcPzNU7XJRmn108oy1&X-Amz-Signature=40a504b131ba5a4825eb45ca7d84d282921028b99088572ec9d172acb6de17ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
