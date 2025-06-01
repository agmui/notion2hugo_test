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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=a8a610cee9189485b27b7b1a904c67499bb0014c0b270cd635c292866b5675c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCTJZA4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF%2BzH6N6SNoS2li%2BWOXIUZMGEmCfr2PyRrBass3IB11wAiEA01jIPE0tDSA5Qa2jrNu7ArGWPsZvRILkDm%2B51dTOHc8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oRsV3DgwU4ba37SrcAx2qQPbHrCOlNh3zImExz2%2FkUD4clSnhVvqBPVGarPvIUVSi3ysUNL7vrhw%2BCWLgaRynDDw%2B%2Fn7CHyQX6yAYnoM65XE5x0sn2h4N%2B4MoX2lUte9TgCVyxwn74F3t3gRbnd8Z0JfyMc%2BV8KddtwFIbdgvbX2XWCKG56VYgbWjCW4FksDN3zxAsm5dMlvM0hpOqi64ce7%2FaBYgzaOefHIp%2FC1XHA3KvLwJtL0oQEA6bB0KapJPl4IqZwp73I71%2BSeJJ3SzfnN3gQB7Z%2FfD1YmlBr%2FgjZUdDUXy6K8m1kAtisvU%2BsqIpFcTXZrooqqSpUdJTZH7xE21P57mW%2FkgXAmP3gWbqTDTZFIB%2F9GO9y07hD3FCzZ63jwcIWeZivHq7K9RM9jcJEd0q5oAZktuLo2LARcpktNnG6Ao%2Fv0x9kOc0erle9XFGvu%2FScdVy1FIusjhvfntSQIdpxSjMDTEcKz6lRCBHGeNfUGd9sbXVYZq7Wv8WYlttcmrheF23NhYipUvVoBQ3sAAiqvsEgjN3uQ1UuZF1YuTdCeCesU%2FYyIS5R1%2Frec%2FLuN%2BbVLB%2FG3Lzgzk6CIXmvTDGxUEJVierY8K5D1accvfoAqQd0UTMLzdeAtxIi2Flg2jhx7G8rodMPHe8MEGOqUBBJ%2BYKZjRvLKDfiQs7AcTP6LQNrgefXF4MeDQ4RR9J5hXfTV73XtV6Q32VHpM%2B%2F6fWSLkaqZRsAPYkisxkbtf4qeXEONGKMUcMUQYXsQsa2ziGMloP%2BdIoxg2bduglvtIfq10NCqZWsBeiwzP%2BO0QR74gzqDOItQi0%2FBkeukFmrOBd%2FJ%2BDs1bfWftAc2%2FQJsndgXqgMJ7HGF1e%2Fms%2F2NK81m102Pf&X-Amz-Signature=0320c73e7ccd261bda309c3004074c5f502ae6ba13853895e90fa9d8a656bcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
