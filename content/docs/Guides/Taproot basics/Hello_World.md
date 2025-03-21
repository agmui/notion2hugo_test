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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIVPYG2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD7hQrDv%2Bob4TmrlrgOnVrs3Ge9vo3YO5%2FvJEqNdNz3RQIhANSHm5XT5uacS28l29bO8bqShz0HbeSWoqWRd8qD67b9KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoWHyIY%2Fcof%2Fo4wmkq3AOyGV9KZjj0gIROZvzxa8pM9SGnzhr9G6u%2BrNyildWY5jArHscRixb8eQCvj8ZZLC2I056xb%2BHb7zFcgVZGWitxgGglGQWJDFmYPDVmhKF43vU%2FxPoxurDmO5e5u0gOAZzQb0pz6Fmizv73zkuoEzB4XwE27NYEEAf5a86Ga31O8yUr4wPUR4y%2FW%2BI5TUP4iFPmWAR5PYWtmEYhI%2Ff%2B8vTSOCn0dHCFVKRB3AokRDvHrFe7C%2F0Z4J92OG5VKikt1JbJSsiwoIS0IDppazQZBoPwU1ZANAjA8crvK6D8eY4hEYIThMJ05qNwwRjsqFaMoryaNdpGxHLS%2F%2B1rh0bxRBesiUetLzaa4171qmoik8NKNBLDFf%2FNZMEToe5%2Bqyh8oHx7LCMJ4cM%2Fd%2FQgDzNga9c3Pb2R5rY%2FRCmOZEQptDaIqVO875OAKDuW45mUgLDzTIHWgkls7qbilnh0OK2nQew7OS%2FnzlSFdF%2FzSPNNxv7%2FfEU3ju7wYh36lOu6OXt1Fsb%2FTnUIsVeUN%2B4cuaaX%2BChpaVkAO0eRfA6tzzC7QBUFQlJBM2sbyC2vcsAO25Yn%2FIALvqLQ6A3PFOu69Pz1Owv1UTckxg607wO%2BxV4CuVkE6LGGHuQPJBM5%2FabTXjC4uvS%2BBjqkAcOmwFkJ3lkxsNaUQ8U42RCjycqG2i9k9WvsXcBtpMjQueiGkLA0v26HaReo9vu7CueBXpOqscOZ025GXKVkiwuALm%2FIqxd%2Bd4TZ5u63U5M9oVPgTKcgJwz%2Bwg%2FJJIswLbFKdAhQ8c1lC3zKKz6wpEOgQAoLMRZKmGWY0EFFHMkFs4FsGdKx1MdtUnC39hKi8n5OXxsQMD3u6d9tzd6z%2FJpPfUd2&X-Amz-Signature=59be9799f071a5150f5a3feb2f1473e5ecc1fad6c4986470186db1254b5ab6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIVPYG2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQD7hQrDv%2Bob4TmrlrgOnVrs3Ge9vo3YO5%2FvJEqNdNz3RQIhANSHm5XT5uacS28l29bO8bqShz0HbeSWoqWRd8qD67b9KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoWHyIY%2Fcof%2Fo4wmkq3AOyGV9KZjj0gIROZvzxa8pM9SGnzhr9G6u%2BrNyildWY5jArHscRixb8eQCvj8ZZLC2I056xb%2BHb7zFcgVZGWitxgGglGQWJDFmYPDVmhKF43vU%2FxPoxurDmO5e5u0gOAZzQb0pz6Fmizv73zkuoEzB4XwE27NYEEAf5a86Ga31O8yUr4wPUR4y%2FW%2BI5TUP4iFPmWAR5PYWtmEYhI%2Ff%2B8vTSOCn0dHCFVKRB3AokRDvHrFe7C%2F0Z4J92OG5VKikt1JbJSsiwoIS0IDppazQZBoPwU1ZANAjA8crvK6D8eY4hEYIThMJ05qNwwRjsqFaMoryaNdpGxHLS%2F%2B1rh0bxRBesiUetLzaa4171qmoik8NKNBLDFf%2FNZMEToe5%2Bqyh8oHx7LCMJ4cM%2Fd%2FQgDzNga9c3Pb2R5rY%2FRCmOZEQptDaIqVO875OAKDuW45mUgLDzTIHWgkls7qbilnh0OK2nQew7OS%2FnzlSFdF%2FzSPNNxv7%2FfEU3ju7wYh36lOu6OXt1Fsb%2FTnUIsVeUN%2B4cuaaX%2BChpaVkAO0eRfA6tzzC7QBUFQlJBM2sbyC2vcsAO25Yn%2FIALvqLQ6A3PFOu69Pz1Owv1UTckxg607wO%2BxV4CuVkE6LGGHuQPJBM5%2FabTXjC4uvS%2BBjqkAcOmwFkJ3lkxsNaUQ8U42RCjycqG2i9k9WvsXcBtpMjQueiGkLA0v26HaReo9vu7CueBXpOqscOZ025GXKVkiwuALm%2FIqxd%2Bd4TZ5u63U5M9oVPgTKcgJwz%2Bwg%2FJJIswLbFKdAhQ8c1lC3zKKz6wpEOgQAoLMRZKmGWY0EFFHMkFs4FsGdKx1MdtUnC39hKi8n5OXxsQMD3u6d9tzd6z%2FJpPfUd2&X-Amz-Signature=2bd58fa369a08374c972142aa914a0d15540f1af832e0cbb49d0fa126efe367c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
