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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIMUUSY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfXJYjE%2BzPqKiArkS29rIvL7ELP2InuVPKR5%2FzmtowKAiBcpwQjJrO5%2BFAyyN%2BynjwmWQFIFo%2BNQwe5wycs8%2BgyIir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBr1u8AMdk6yzR8sYKtwDgJzC%2B0%2Bnb3S41WVZhg14Zn%2Bw1iEvKEOXGUPIXnewlQlnsHTUhFC%2FYPy0VOPfJmDOuhocPEZwEQAnFHbxYNw5QK4OkzPe4e1IKN%2BaHsIV6cRYVXFI3cIvgEoZrsybRsR5dZcFNNHIZNzzC25pQVIaj6vHEg7JRKV%2BjyTF98Dk87bdjvow%2BXOTRqbP9Es7VtUs84w4U%2BPXHNoUzo9kgARr79rUbFV%2FZAdQ9FAb2BNN2cCvaPMrHzXwn61c7KMuqjrDnhdkb%2BPa%2FBYoJx9T10MEsGcwlT1jed5OAx35YqTyFsxGfySN64inJ3ZQYw6%2F3CmpXE9omHGZeojMNs6aPtHmqsbwF71lbBinXwcD6Q3%2Fn4501aJwn50njnRujI3clQeKzxnIc8VDojrEEm2czvN%2BgJPz8QuELqRlJkfZUxWIB%2FcjB05tLlC2jjwdqw04joAGGbOVAXZujP3Rx%2FTuKHpKPwLv4KFJVzeBjH%2F%2FYEGtW%2Bm3ccj5FHJzyenHa88k0bgd5d3OWmUODObQ98JUVoLGEBe1f62ZYq4FRl22keNbryB4gx6FQq4LJCw0wOps9zlpuvBEIXay6Y0BQNvvfm4cWx6ndg9tiZ60rv3WXVrzDHSjqNe4MVIbcuCKpWMwluGivgY6pgGM8JsRyC9fiowTZ1ncWhYhRbF12XhhozvIF%2BhVNsRESyqxRHSzSxOanPEntJrVueKC4RGWCS1I9hlTpjJuqDf2pQUViQ%2BPKobrYDSpGhiYuuqnMr1dYJShRmxrOKi%2FQzbI7tDTTLWFRLxtvNtO8YNgo6lak5Nj7UFssrs6CAWqynDaHaw%2B5A5afqW0aojq3XIMnDttuA67HJj21ULJEcCwdGBDoA0q&X-Amz-Signature=dcf8cfc120ece8e0605740ea32f5dc05384f1bd90554fce63ff7d5a858e9ff36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIMUUSY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfXJYjE%2BzPqKiArkS29rIvL7ELP2InuVPKR5%2FzmtowKAiBcpwQjJrO5%2BFAyyN%2BynjwmWQFIFo%2BNQwe5wycs8%2BgyIir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMBr1u8AMdk6yzR8sYKtwDgJzC%2B0%2Bnb3S41WVZhg14Zn%2Bw1iEvKEOXGUPIXnewlQlnsHTUhFC%2FYPy0VOPfJmDOuhocPEZwEQAnFHbxYNw5QK4OkzPe4e1IKN%2BaHsIV6cRYVXFI3cIvgEoZrsybRsR5dZcFNNHIZNzzC25pQVIaj6vHEg7JRKV%2BjyTF98Dk87bdjvow%2BXOTRqbP9Es7VtUs84w4U%2BPXHNoUzo9kgARr79rUbFV%2FZAdQ9FAb2BNN2cCvaPMrHzXwn61c7KMuqjrDnhdkb%2BPa%2FBYoJx9T10MEsGcwlT1jed5OAx35YqTyFsxGfySN64inJ3ZQYw6%2F3CmpXE9omHGZeojMNs6aPtHmqsbwF71lbBinXwcD6Q3%2Fn4501aJwn50njnRujI3clQeKzxnIc8VDojrEEm2czvN%2BgJPz8QuELqRlJkfZUxWIB%2FcjB05tLlC2jjwdqw04joAGGbOVAXZujP3Rx%2FTuKHpKPwLv4KFJVzeBjH%2F%2FYEGtW%2Bm3ccj5FHJzyenHa88k0bgd5d3OWmUODObQ98JUVoLGEBe1f62ZYq4FRl22keNbryB4gx6FQq4LJCw0wOps9zlpuvBEIXay6Y0BQNvvfm4cWx6ndg9tiZ60rv3WXVrzDHSjqNe4MVIbcuCKpWMwluGivgY6pgGM8JsRyC9fiowTZ1ncWhYhRbF12XhhozvIF%2BhVNsRESyqxRHSzSxOanPEntJrVueKC4RGWCS1I9hlTpjJuqDf2pQUViQ%2BPKobrYDSpGhiYuuqnMr1dYJShRmxrOKi%2FQzbI7tDTTLWFRLxtvNtO8YNgo6lak5Nj7UFssrs6CAWqynDaHaw%2B5A5afqW0aojq3XIMnDttuA67HJj21ULJEcCwdGBDoA0q&X-Amz-Signature=f6cec2762305e75deae937816ce764e9a4abd534ef02522ade39635591edaf63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
