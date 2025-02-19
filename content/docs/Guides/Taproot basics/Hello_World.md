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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NA7WOWG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCWnLJ%2B9%2F4uoY35FjfACxHDpiw23789n2V7TC2ik4FDmQIhANVv2SYTbriUXRMXFhekis3jkAyAehcWnWA7Pmcm8eMiKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw45CLHcts9mh7gtrMq3APysjBFXUXZWYMgxLg%2BuF3kQHI68xLbbCgKDcsk6x2MU5bqfjc1o5MkBthTEBzsyE5cF4zRyZekRD83ljEksXpKEOrPyrc7%2BM2bRTPHeBv7vgfy84AJSuHb7dHPTGIOjTACyqbTuFjFw4xqqArpkH3a%2FdEVIpjkd1qcKnK7TsAFI%2BHLGTBR6RnhjuCNgs9SAL4Zf4B2osMAi1ApM5LGbF4tKr6a46z4x4slluEdtd%2Fye%2FU7meQTVfn3N3rrwbnhEk96h6zDbzc3WUIWuVOPCnmFpgdr8qiJ1uBonwd734%2FkNZ65t790rBF%2BeTYsW4P7srzny95%2BhKfkMiHZ96dNx3iJEXd6311MYz7TWFIVSVbfc6NUPX7DAT0W54fp8p0P7p8q%2FHbnldeIvn%2F8EYSL5cJD3ORlxpb1AI%2BNehL94YJn56jPoDWEgBe2CcSm0L0liANvOruaFFR4H04eSr8%2BBPi1%2BwVpULUtd824xsdC07lK6Pb8ArsfdwcvuYrhVhfmjPyWfiTd8jcF%2BxIjZgFn%2FkubbEm53du1H3AVtQm0o3d4lgfOW9SSVuWyw8Fx4K9Czx10QxxJmV5kgJdpUJihvg2ZiZ8ucNAnqpjqV5oYCcC9VBD2lPt2kr4KkMQt2jDs4tW9BjqkATpWtCPiNu5IeW146UBdRym4O4g%2BycCURfVnXVCjTkUHygF48JTejsD0ahK%2FhbcE8EJjq6O9t9zQGn5w9xwphiiObBCqnL6OzMatDXx9MbSruxi5TdBv4kd7T%2FsGHvwKdc6lMGMaaSQQjaO3WJm8OglzwDTVemmx7l6y732wL%2FBArdbs46i%2FG78LNsmOwYbZJT31pLruXCBgUnk%2FGHUsp8EEMMjm&X-Amz-Signature=1987bb8418d0ebb6fb792672258edc157f1e4d352e85287bd0f4a6ecf0eb46fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NA7WOWG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCWnLJ%2B9%2F4uoY35FjfACxHDpiw23789n2V7TC2ik4FDmQIhANVv2SYTbriUXRMXFhekis3jkAyAehcWnWA7Pmcm8eMiKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw45CLHcts9mh7gtrMq3APysjBFXUXZWYMgxLg%2BuF3kQHI68xLbbCgKDcsk6x2MU5bqfjc1o5MkBthTEBzsyE5cF4zRyZekRD83ljEksXpKEOrPyrc7%2BM2bRTPHeBv7vgfy84AJSuHb7dHPTGIOjTACyqbTuFjFw4xqqArpkH3a%2FdEVIpjkd1qcKnK7TsAFI%2BHLGTBR6RnhjuCNgs9SAL4Zf4B2osMAi1ApM5LGbF4tKr6a46z4x4slluEdtd%2Fye%2FU7meQTVfn3N3rrwbnhEk96h6zDbzc3WUIWuVOPCnmFpgdr8qiJ1uBonwd734%2FkNZ65t790rBF%2BeTYsW4P7srzny95%2BhKfkMiHZ96dNx3iJEXd6311MYz7TWFIVSVbfc6NUPX7DAT0W54fp8p0P7p8q%2FHbnldeIvn%2F8EYSL5cJD3ORlxpb1AI%2BNehL94YJn56jPoDWEgBe2CcSm0L0liANvOruaFFR4H04eSr8%2BBPi1%2BwVpULUtd824xsdC07lK6Pb8ArsfdwcvuYrhVhfmjPyWfiTd8jcF%2BxIjZgFn%2FkubbEm53du1H3AVtQm0o3d4lgfOW9SSVuWyw8Fx4K9Czx10QxxJmV5kgJdpUJihvg2ZiZ8ucNAnqpjqV5oYCcC9VBD2lPt2kr4KkMQt2jDs4tW9BjqkATpWtCPiNu5IeW146UBdRym4O4g%2BycCURfVnXVCjTkUHygF48JTejsD0ahK%2FhbcE8EJjq6O9t9zQGn5w9xwphiiObBCqnL6OzMatDXx9MbSruxi5TdBv4kd7T%2FsGHvwKdc6lMGMaaSQQjaO3WJm8OglzwDTVemmx7l6y732wL%2FBArdbs46i%2FG78LNsmOwYbZJT31pLruXCBgUnk%2FGHUsp8EEMMjm&X-Amz-Signature=9ba704ce7af8304f94ef3c926357a8a6110f95fa1de3ebe2180e6330f4b506f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
