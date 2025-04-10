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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUAHAKC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB7CiMEPXqOq6Dswoe39JyUD3VBWISCECCwSAMIpA40mAiBzArfrS5KkYrtEIrYKobcfifwT40bP6yNJNGmb%2F55HGCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXk2cRnTt%2BTjjaUcKtwDbr4C7ODlslTw6BLjCpxPw5PJoxZkylY5XOR%2BURbu43Q4tnKnYojcRKqoZpD6293DWbNa9FtsorZW89yNUhq%2FAb2yRpc6IGn1t5b1nejsRYz0KOsFO91nswyuVooHDFlIdZ6siZLQZX3eOnWzCsrIEPndJ%2BedDyqfnNLqb%2BDv9P1ndtbA%2FqYYrFNvkjK07YF8td8MQxJPzJugRSUn9BJtnxxnQ8Gb%2BJaLPbtCuPdmZXOWL30uRofhxeJCb29puhxUbxvMgKo533DJEbRd%2BuxbNDdTEaNG7v4vDF5oz5PnJVRvlFNzCQywuYo4Sd%2B%2BplXiJLdv1SCV%2BAUYGrief%2BYR5e949VBPOQi5tf54EjnmvJMWoHGMFf9yPPUDGQOCjDdXApvRraDOYc79SJWVxGNvLCMcLvkqa1U2cNwLK%2FIyW4oWWiufK5N4DA3g8qVqSK4Czjlfa85lDWeE%2Fh6%2FoFAsE%2FK1LjjUkKPu64me91LdLNrqHkfDjr2vH1HFmHXwWf68ZosZZNTyKTsrFsPgGPTMjq%2BDG3hQMZq01o0gVsU7r8%2FtWN%2B6dC2WEgPf92l5sTeKi6yzd6JYFpvZTTBVakqvdvv%2F71RSc22afxTdESlKog930em%2FiedRad0QJNMwkIvevwY6pgFNWSUP%2BbJ8eMiaQUVXTatN%2FO9Eh1c4nuWgr9x6ZvKRC%2FpwSv5W%2F0QKoPcf%2BE7i%2BiFvbKmq17fmI95wG13HJM3YXzli5PcB0DFFUGv8kMww1PzSKSRbzWgLoEag5WL%2F3tvm%2BEJALqNZd7HNZwriivsiT8RAzGz44NZZHAdO1lSi4I9HKu5CwUWzimRMGcZWopiBc8ez5xUNdtCGTepl7ATcTroPntuE&X-Amz-Signature=7c6198f39ca263f8c4d896b69d73ea8dc031844bd270f4127713936a0559474b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUAHAKC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB7CiMEPXqOq6Dswoe39JyUD3VBWISCECCwSAMIpA40mAiBzArfrS5KkYrtEIrYKobcfifwT40bP6yNJNGmb%2F55HGCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXk2cRnTt%2BTjjaUcKtwDbr4C7ODlslTw6BLjCpxPw5PJoxZkylY5XOR%2BURbu43Q4tnKnYojcRKqoZpD6293DWbNa9FtsorZW89yNUhq%2FAb2yRpc6IGn1t5b1nejsRYz0KOsFO91nswyuVooHDFlIdZ6siZLQZX3eOnWzCsrIEPndJ%2BedDyqfnNLqb%2BDv9P1ndtbA%2FqYYrFNvkjK07YF8td8MQxJPzJugRSUn9BJtnxxnQ8Gb%2BJaLPbtCuPdmZXOWL30uRofhxeJCb29puhxUbxvMgKo533DJEbRd%2BuxbNDdTEaNG7v4vDF5oz5PnJVRvlFNzCQywuYo4Sd%2B%2BplXiJLdv1SCV%2BAUYGrief%2BYR5e949VBPOQi5tf54EjnmvJMWoHGMFf9yPPUDGQOCjDdXApvRraDOYc79SJWVxGNvLCMcLvkqa1U2cNwLK%2FIyW4oWWiufK5N4DA3g8qVqSK4Czjlfa85lDWeE%2Fh6%2FoFAsE%2FK1LjjUkKPu64me91LdLNrqHkfDjr2vH1HFmHXwWf68ZosZZNTyKTsrFsPgGPTMjq%2BDG3hQMZq01o0gVsU7r8%2FtWN%2B6dC2WEgPf92l5sTeKi6yzd6JYFpvZTTBVakqvdvv%2F71RSc22afxTdESlKog930em%2FiedRad0QJNMwkIvevwY6pgFNWSUP%2BbJ8eMiaQUVXTatN%2FO9Eh1c4nuWgr9x6ZvKRC%2FpwSv5W%2F0QKoPcf%2BE7i%2BiFvbKmq17fmI95wG13HJM3YXzli5PcB0DFFUGv8kMww1PzSKSRbzWgLoEag5WL%2F3tvm%2BEJALqNZd7HNZwriivsiT8RAzGz44NZZHAdO1lSi4I9HKu5CwUWzimRMGcZWopiBc8ez5xUNdtCGTepl7ATcTroPntuE&X-Amz-Signature=c8bc758bea24a95df81ae82fe7624ae3202e4482d7a3fb24ed4c9102b57e8871&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
