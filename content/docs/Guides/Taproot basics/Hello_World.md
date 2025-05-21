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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2UGF62%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB9sKt%2F7FIf2NAKi95h294aQ8E2GcbG3YZGvySBrV3QIhAPmcSxyvg83lwvUHWdXjSkN%2FDEthF03H%2FiKmsLAxjEiPKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbo8Zgzl5ugWJeNSUq3AMBBxwbAiyoaGLg38ORMihnMAcMfSlZyQp5y50EVHTRHrbQ8LuB1p5bMMwegH7JxzDJwo4tSJJtR3kuxLtRc9FcKA1X90hfWWTsvwDBI%2BKV0z4PrDz2BAELHqmXXHbP7afzfOJ7KWv0I%2BfEp6wXm2iW0I%2FN3o0kvhKt1b%2F3AnibmgLZFnPfvCDFixs81TepFss3xArjI1bv3QHOTzXcY1GWVt7kgW6wBwwtOLFE1X0K%2FoOWUL7NkWALQ58OABDJVjVGKazFde5iAngqoM0Q2wqU2c78BSxa8TBfTZRrRqgHHkWL9thu%2BOKp5o86daN453VPPeEh5cklAY%2Bo2a0I725rntF7f6rSl7AXSwDgLfj9CBi8GoTPA45%2FStDiPAqucFHccH6j1YweAUcesEiCwMSFad2v37McX5rdOdpymN348HVcFJ3Xf9F3IipRENNLfhDGGRZmy0cPQi3xiyxsTZpKwunaHg88F0QhqoqXJSsi0OwWW15lkB%2B7ei%2FIo0SXOsGjhnlM00CLsstHIAOrwqK3h9%2BSJ9XWPhna1gaI3vH6pBHzVuoiPy0j9N2hh%2BXLEnEoffYsuPcv9a%2BYgpTzhjKu%2FE5XDKoC6qH9iE%2F9IXoCI6CBIRHQ1Y29luG4pDCeo7TBBjqkARfwHXwJb44z2FUoBomIV2Di6gOBUwY4B4qeknCQ9wpbIpipCFycOKKwKy%2FBqNdH8Eg4p1N6gMC%2BxWIDXaF04JsdWbgZAbLqndTr4LINYFGjq6qUe6w7ehWV9qGsyJGITBdWf916iqH8Qh4z7zoWDqOiIpofeOJx8ABb3RGNRewaSvAoFzi9hCoI2YgSL4qTnVnDqkRNDk9mqO1yHotjds%2B6%2FvOy&X-Amz-Signature=3bb12da8c621aefb8d1643ad5ec2f51bc217812614d976b285574c605c96a6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2UGF62%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRB9sKt%2F7FIf2NAKi95h294aQ8E2GcbG3YZGvySBrV3QIhAPmcSxyvg83lwvUHWdXjSkN%2FDEthF03H%2FiKmsLAxjEiPKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbo8Zgzl5ugWJeNSUq3AMBBxwbAiyoaGLg38ORMihnMAcMfSlZyQp5y50EVHTRHrbQ8LuB1p5bMMwegH7JxzDJwo4tSJJtR3kuxLtRc9FcKA1X90hfWWTsvwDBI%2BKV0z4PrDz2BAELHqmXXHbP7afzfOJ7KWv0I%2BfEp6wXm2iW0I%2FN3o0kvhKt1b%2F3AnibmgLZFnPfvCDFixs81TepFss3xArjI1bv3QHOTzXcY1GWVt7kgW6wBwwtOLFE1X0K%2FoOWUL7NkWALQ58OABDJVjVGKazFde5iAngqoM0Q2wqU2c78BSxa8TBfTZRrRqgHHkWL9thu%2BOKp5o86daN453VPPeEh5cklAY%2Bo2a0I725rntF7f6rSl7AXSwDgLfj9CBi8GoTPA45%2FStDiPAqucFHccH6j1YweAUcesEiCwMSFad2v37McX5rdOdpymN348HVcFJ3Xf9F3IipRENNLfhDGGRZmy0cPQi3xiyxsTZpKwunaHg88F0QhqoqXJSsi0OwWW15lkB%2B7ei%2FIo0SXOsGjhnlM00CLsstHIAOrwqK3h9%2BSJ9XWPhna1gaI3vH6pBHzVuoiPy0j9N2hh%2BXLEnEoffYsuPcv9a%2BYgpTzhjKu%2FE5XDKoC6qH9iE%2F9IXoCI6CBIRHQ1Y29luG4pDCeo7TBBjqkARfwHXwJb44z2FUoBomIV2Di6gOBUwY4B4qeknCQ9wpbIpipCFycOKKwKy%2FBqNdH8Eg4p1N6gMC%2BxWIDXaF04JsdWbgZAbLqndTr4LINYFGjq6qUe6w7ehWV9qGsyJGITBdWf916iqH8Qh4z7zoWDqOiIpofeOJx8ABb3RGNRewaSvAoFzi9hCoI2YgSL4qTnVnDqkRNDk9mqO1yHotjds%2B6%2FvOy&X-Amz-Signature=42a4dff70e0ae8827c276b843e79557cdba44e6a1a219ce96b1009006fa78303&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
