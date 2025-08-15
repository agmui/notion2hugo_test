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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAYRNV4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBporTOLY99FAzyVLkhvWV6WImija666JhJfPYSsHBq1AiBeBDBZcv%2B9aA7%2Bk9Vme2Ph3d%2F1XCAXWR6vB3i7wxdlIir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMbcl7GsbACLUdni07KtwD8pz3k%2BOPubBV244Dr1edc6NqJIG77BGdbZ7%2FHyOnqh8HdQwiop5GikxGXITyymN%2F%2Bc4u7kKC3mOt7i8kI%2B99k18v0JmSTxrKJNDrdYwSk%2BHJmhmFKV7siNKsTZ2z498QEGH0KJ229djBSYrsXd%2BZ5S7GNkHKE9C%2FuizcqIPJtNt6yvpJH65MamH1AMLuwqvIe2zE2nvJebj63P8ludBvLxE4tZjG7ZnlL3UEXBca%2BqcXhj%2BfH%2B60u0Vi9ftUfGet9babqYozKaf%2BG6QOhotB1ex9NB6OoUx3l%2FF24pa0q1GmbJk1txB34909K%2BPQxpYaYOUZjGOar930VR2CAZV5pSPQZd8OeIOuYmWIpyYPN%2BMA008Zr9QgMktPzxtH4BgahItX9H2JXZp4xdJzh7PRoRhK6VbeRQVL4N%2BnWhdjgECz%2Fq4Oh2PLbjsfaMjk%2Bn278NJs4yAocq3vgnOoMFf7FyEQBS3BrPlLcdASt59jcsFPohT3VxqCJ8DpUYsSjKk7Z1w9wh82VAKIb0STswdixY1aU%2FgX7Qwp0gtoz8gd%2BngwKHcSqdcrKZn497k2FRkGiPtsFRWqsi5EmV09zwZxZDn4m4tZESwVLhr0BL12DUtIwsEqM7oYJC2MzDow9e77xAY6pgHviz%2FQ8rUJatH2Z70PdBcgqAfzB3IScbR0Ion5rwx0gPIE8WPih5j3N864fUeUghWYFXPA8kX%2BUhU5mkiampem2RbzYa0Bkui%2BhnJZFV1VG2ARQILXt2MiZW7KFbCdDNKyJjVwmcYjjra84KHw4lWI%2BZSVbPxYaWLemKLGBvo98Hk%2BYyPVydd2Bxk%2Bp9w7KJ9d6JErhgQLfWFtLt4htvw4eTrCdBxS&X-Amz-Signature=1d8de1a1c10e2a29b620b334a1d2163e3c8790f213ee532eeccd94d07949d7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAYRNV4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBporTOLY99FAzyVLkhvWV6WImija666JhJfPYSsHBq1AiBeBDBZcv%2B9aA7%2Bk9Vme2Ph3d%2F1XCAXWR6vB3i7wxdlIir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMbcl7GsbACLUdni07KtwD8pz3k%2BOPubBV244Dr1edc6NqJIG77BGdbZ7%2FHyOnqh8HdQwiop5GikxGXITyymN%2F%2Bc4u7kKC3mOt7i8kI%2B99k18v0JmSTxrKJNDrdYwSk%2BHJmhmFKV7siNKsTZ2z498QEGH0KJ229djBSYrsXd%2BZ5S7GNkHKE9C%2FuizcqIPJtNt6yvpJH65MamH1AMLuwqvIe2zE2nvJebj63P8ludBvLxE4tZjG7ZnlL3UEXBca%2BqcXhj%2BfH%2B60u0Vi9ftUfGet9babqYozKaf%2BG6QOhotB1ex9NB6OoUx3l%2FF24pa0q1GmbJk1txB34909K%2BPQxpYaYOUZjGOar930VR2CAZV5pSPQZd8OeIOuYmWIpyYPN%2BMA008Zr9QgMktPzxtH4BgahItX9H2JXZp4xdJzh7PRoRhK6VbeRQVL4N%2BnWhdjgECz%2Fq4Oh2PLbjsfaMjk%2Bn278NJs4yAocq3vgnOoMFf7FyEQBS3BrPlLcdASt59jcsFPohT3VxqCJ8DpUYsSjKk7Z1w9wh82VAKIb0STswdixY1aU%2FgX7Qwp0gtoz8gd%2BngwKHcSqdcrKZn497k2FRkGiPtsFRWqsi5EmV09zwZxZDn4m4tZESwVLhr0BL12DUtIwsEqM7oYJC2MzDow9e77xAY6pgHviz%2FQ8rUJatH2Z70PdBcgqAfzB3IScbR0Ion5rwx0gPIE8WPih5j3N864fUeUghWYFXPA8kX%2BUhU5mkiampem2RbzYa0Bkui%2BhnJZFV1VG2ARQILXt2MiZW7KFbCdDNKyJjVwmcYjjra84KHw4lWI%2BZSVbPxYaWLemKLGBvo98Hk%2BYyPVydd2Bxk%2Bp9w7KJ9d6JErhgQLfWFtLt4htvw4eTrCdBxS&X-Amz-Signature=c63efef22c343299b435fefa4b8b8953c2519fd4db8c71f7f79bbff87847a5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
