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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCEK5WK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFbSp9qTwv%2BzBDRucLnFLxRw%2B6iqDgCsXs8VOGUwnRbIAiBN8aHzagAH%2Bvil9FCSMp%2BqBWrB8eqfOOXwp71VO4qfZSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMBByLO6dBsjKKjnYAKtwDsM%2Fv0WTQHn2mXd3WtQKaP2DIEEvXo75lPLK23uJSeUfTgwg2t%2Bu1xC7KUjqyfDQFk1LKdnzMQEay6CQ4P2JjF6PL%2BFp2I3ldm4KOHhrPEvltckptUzhEDB9c4FsflxUs853ONMkFJJ9rqZpJOH3o2YL0HdVJR3uP0cs83qz9VbhLGCvUnGJhqhZkfReWMr0EyAno9KfVJ4NG6nQGJG02qe8laHj848zdFdB%2B%2BNQtTkEv3RdbENYzTIZZtFBRqM%2FCl9SZCuWWPS2SiKWR45jTVwY1zbIVnOmvVF8CvX48ab2%2BaNNl0nesH4vY6W6NQVfMwpOu5Zgbg7jgzoo9u7FfjksFRI1qhutGusF2eiPND3a%2B78FmnID5KPCovSkWSuob3kjr44mgSgm6HvKJAcIbfyhM53rgYSxzIDdLTmSF1OXUEVmBGbTeSNFJ8PGilzh4dk%2BaLOEc1870vUslM%2BzZQNn4IYpaTwxLj4RC8ZlbFtVPuMjkDnei8PMtf4xzaEcw9%2BsUXp98ICvy4pNyjQfjZhpT55wA8N70kU8XMdtiphJmNv%2BTqJ2crct2b4NtIZo9GvYeTb%2FIUPHNbbovrBd6lkd140wfgmoi3Fos7Dx%2FZ8Os4LIELwUKIti9U%2FMw1LzrvgY6pgGqSp5HOVavIQ%2FMV5jnjbxSLfTRLZSdW6UNGaOAo03cEgXWI5IG0RBv1J%2F4DCBy6mostF0%2FtzTt%2Bj1%2BPrSCg3B3CYy0vUoy0wC2mdin1XArDQchu1Pwt71atCPSLXRXz9TFUC1SOJFSQnpktenmpZOSrge84ebUZMBSSTelHaQFxNiqc2EMkovgO69Xs6yucs2TZbfX7x3x8IYp7tYuMWfMVt7l4WL0&X-Amz-Signature=fe5b9551adab149f6025cd06a76758014434afd1ead10115b9def919ea02fb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCEK5WK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFbSp9qTwv%2BzBDRucLnFLxRw%2B6iqDgCsXs8VOGUwnRbIAiBN8aHzagAH%2Bvil9FCSMp%2BqBWrB8eqfOOXwp71VO4qfZSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMBByLO6dBsjKKjnYAKtwDsM%2Fv0WTQHn2mXd3WtQKaP2DIEEvXo75lPLK23uJSeUfTgwg2t%2Bu1xC7KUjqyfDQFk1LKdnzMQEay6CQ4P2JjF6PL%2BFp2I3ldm4KOHhrPEvltckptUzhEDB9c4FsflxUs853ONMkFJJ9rqZpJOH3o2YL0HdVJR3uP0cs83qz9VbhLGCvUnGJhqhZkfReWMr0EyAno9KfVJ4NG6nQGJG02qe8laHj848zdFdB%2B%2BNQtTkEv3RdbENYzTIZZtFBRqM%2FCl9SZCuWWPS2SiKWR45jTVwY1zbIVnOmvVF8CvX48ab2%2BaNNl0nesH4vY6W6NQVfMwpOu5Zgbg7jgzoo9u7FfjksFRI1qhutGusF2eiPND3a%2B78FmnID5KPCovSkWSuob3kjr44mgSgm6HvKJAcIbfyhM53rgYSxzIDdLTmSF1OXUEVmBGbTeSNFJ8PGilzh4dk%2BaLOEc1870vUslM%2BzZQNn4IYpaTwxLj4RC8ZlbFtVPuMjkDnei8PMtf4xzaEcw9%2BsUXp98ICvy4pNyjQfjZhpT55wA8N70kU8XMdtiphJmNv%2BTqJ2crct2b4NtIZo9GvYeTb%2FIUPHNbbovrBd6lkd140wfgmoi3Fos7Dx%2FZ8Os4LIELwUKIti9U%2FMw1LzrvgY6pgGqSp5HOVavIQ%2FMV5jnjbxSLfTRLZSdW6UNGaOAo03cEgXWI5IG0RBv1J%2F4DCBy6mostF0%2FtzTt%2Bj1%2BPrSCg3B3CYy0vUoy0wC2mdin1XArDQchu1Pwt71atCPSLXRXz9TFUC1SOJFSQnpktenmpZOSrge84ebUZMBSSTelHaQFxNiqc2EMkovgO69Xs6yucs2TZbfX7x3x8IYp7tYuMWfMVt7l4WL0&X-Amz-Signature=bfe386e4a194fc1fbabe6050e9746e69a8a27b4a0bbe15762e5edd0231a23cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
