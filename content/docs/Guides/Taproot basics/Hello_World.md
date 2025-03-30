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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVN4DLS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC%2FDvphHdfFw72FMtKn1FJZ%2Fc7lNUFVHiG7ko7CId4dmQIhAOpyigwGrumbwYB2TKuylevIPMrxpzMyMpOjr4l7Px8SKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcLprjKfhbWTyuLVMq3AOMbbIcefS4LzZCSZkq59DnkOjqxlfcTdeJREW2ntvxyDpP%2FjWnJJTbg%2B1wr3v63EXvFGGZ%2FgBlbFgV56QR1oNFe1kJenX6dsQok0c24GXHMXQyZbZLma%2BiyZAuUkhE8yfZg89Goibh9y4psrYL6IUtGh9UhIY2lEX7V34ZQmBEN9PelDVTvCeLPBx12TuyymkndWfkCUpjiXYzLARL7TIGVtgLwIiAxvRoats%2BnQ4QMgXWwo%2FsLEubDh6IhLiNktXgMNIThjvOQFN9tgAbos7dXsX9Jk%2BQe15eSpQM6mR1KvJNYUxnxHCZ8idfMJrenelZfHo9iUQYdl7JXbmjDpVLlK421rdG53ti8DTC3ulrzCyRuanOQzLVS99rmtRDSuI1DaZJcgiOaTwDxTGzsHe3%2Fp0AfMhT0pGCVuR1Ww84f549DEMUhYyyfUk%2F8K87r44Draq3A6DKJw3j1ZJnx5Wz3wZa46hRjTD3gq5I0mLgkB0rUhbW5HClS9EVDjuom%2BSKFJ%2FYME%2BNuWCHfpFbCjhyPzm6D3CKP52PV7vh0aFpnYeVNsmMKdAdYBDNJ8SjGAy4%2Bdus%2Fl9mBxi7t%2BpdmbFe63JlqegpNppxt7cugSUeiS4iAo1bA%2B8rSAelZjD3%2FaG%2FBjqkAUqKgib9DPCHM3vfjBcRU7rudGidfWL5P7jhNuTmWY637E%2FhCUM49SAnqeVkN4MEkvLvgOBn3Hsj2WKa%2FShwbfXZPdUAFIVL6Oc6QTuuTd4zrm4O6IHN6%2BwB%2FiVyjFu82LBWjYlyDGk8RDQWP46UT9kNiphrWWm71vwWgA0biLHqODsLohRpuccHPPaLp9SEqMWkjoJEFqR3cV2sZ%2BLBd60Lw4qV&X-Amz-Signature=f08dc1ceff542547bc15c646847f7a5f169605394a5748656b99848e32e04ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVN4DLS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC%2FDvphHdfFw72FMtKn1FJZ%2Fc7lNUFVHiG7ko7CId4dmQIhAOpyigwGrumbwYB2TKuylevIPMrxpzMyMpOjr4l7Px8SKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcLprjKfhbWTyuLVMq3AOMbbIcefS4LzZCSZkq59DnkOjqxlfcTdeJREW2ntvxyDpP%2FjWnJJTbg%2B1wr3v63EXvFGGZ%2FgBlbFgV56QR1oNFe1kJenX6dsQok0c24GXHMXQyZbZLma%2BiyZAuUkhE8yfZg89Goibh9y4psrYL6IUtGh9UhIY2lEX7V34ZQmBEN9PelDVTvCeLPBx12TuyymkndWfkCUpjiXYzLARL7TIGVtgLwIiAxvRoats%2BnQ4QMgXWwo%2FsLEubDh6IhLiNktXgMNIThjvOQFN9tgAbos7dXsX9Jk%2BQe15eSpQM6mR1KvJNYUxnxHCZ8idfMJrenelZfHo9iUQYdl7JXbmjDpVLlK421rdG53ti8DTC3ulrzCyRuanOQzLVS99rmtRDSuI1DaZJcgiOaTwDxTGzsHe3%2Fp0AfMhT0pGCVuR1Ww84f549DEMUhYyyfUk%2F8K87r44Draq3A6DKJw3j1ZJnx5Wz3wZa46hRjTD3gq5I0mLgkB0rUhbW5HClS9EVDjuom%2BSKFJ%2FYME%2BNuWCHfpFbCjhyPzm6D3CKP52PV7vh0aFpnYeVNsmMKdAdYBDNJ8SjGAy4%2Bdus%2Fl9mBxi7t%2BpdmbFe63JlqegpNppxt7cugSUeiS4iAo1bA%2B8rSAelZjD3%2FaG%2FBjqkAUqKgib9DPCHM3vfjBcRU7rudGidfWL5P7jhNuTmWY637E%2FhCUM49SAnqeVkN4MEkvLvgOBn3Hsj2WKa%2FShwbfXZPdUAFIVL6Oc6QTuuTd4zrm4O6IHN6%2BwB%2FiVyjFu82LBWjYlyDGk8RDQWP46UT9kNiphrWWm71vwWgA0biLHqODsLohRpuccHPPaLp9SEqMWkjoJEFqR3cV2sZ%2BLBd60Lw4qV&X-Amz-Signature=0b492076646e139ca08b7e2d8f733d29e2edb2206981c46602e8f3eea58eb5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
