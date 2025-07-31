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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXII632%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzykgoNDuy7z2o7Ez8v67GUyhQYzvYK9eQX6HFJWHtDAiAYSv3P%2F5Z%2BOb0ohj1MwOS2gw7olC%2FxD2JYQO7HgF%2FN0iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdqBeoq7CPxu%2BqkaOKtwDCdjZkV1aACoa4pu8LjSuiCuMKe5%2FOH1YuiU2QXSjjTc8lbYGW2Fncwb%2Fmdj3Nq9GRdUoJNYAoEUjGu%2BpReX4yJF0TvRpnDnP5ZnugHBFAt8hhHuExxgGXF8l6xtIUGcTwPEcTWq%2B%2F7PPJ0BJ27SyTtzUAvx%2BlNTTDOE5G9PT5S85H6uvD8BTtByCXjapQk1AedTOcGxWnQmXLS3CpnOiXRn%2BDSZc0nz%2F0p1zJSaylo3bvqO3p7SOPTKGeH4tldTQumK8%2BoeHSDcTswI%2Fmbm804vqk15l2G0T5I5W3zMkZajtWC6D8uuUFLDMxzMbHfKWbBHzfBvWj8rzw5kM5sTfyX6MXeOGf94fXuAf%2F9jonVtZWOvDNlIbowdMpSqCpCsdEeMAwExEPPSFYlsFEeRpi5eEhf62hfK9UvGX%2FVVgK7y6w4%2BhaSRcNWBJZp82wFhRcCTChpL2mMPQEYyDATCzqM2T%2B0qGZ2VtPdZ%2B3BmjhrqlUV5wAEtwr%2F%2Fcin%2F2wOTOtrIL%2FOWskWbh0leISoOqm%2Fd7xIb63gToAJltppnO5IrqfsUiAYGLLWQZHQ8h8MAI8fxyYcyWU6qP78zRqmdIJFc4c11DmhJRolqqp9SnDlEiUzzyVyzcrIzVS48w7fWrxAY6pgHGpIWdFAOg%2Bx6GVDPqeZMIfoQhapSgR3DKXaMALjdOB25d0L77oPlipa7NSJvccJTVY1E60mtd%2FhjkWMsKJXEhdsfKJheGPqvzb1oTrX9iV2gPrTF2k4YJN00FDTVpz%2B%2Bmiw%2BcBST6oF5H2xvyWs6fTS3QAGWdUm%2F2XLcAvXCY0prwH%2FoxWErCqmjmePl%2FZH0fxikeO25N8K%2F1bQASKb%2FvOBSXTvkR&X-Amz-Signature=5ccd775c1b90f7cffcd99c5516dbb2752440519f53ba2c8adad4766ec132b9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXII632%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzykgoNDuy7z2o7Ez8v67GUyhQYzvYK9eQX6HFJWHtDAiAYSv3P%2F5Z%2BOb0ohj1MwOS2gw7olC%2FxD2JYQO7HgF%2FN0iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdqBeoq7CPxu%2BqkaOKtwDCdjZkV1aACoa4pu8LjSuiCuMKe5%2FOH1YuiU2QXSjjTc8lbYGW2Fncwb%2Fmdj3Nq9GRdUoJNYAoEUjGu%2BpReX4yJF0TvRpnDnP5ZnugHBFAt8hhHuExxgGXF8l6xtIUGcTwPEcTWq%2B%2F7PPJ0BJ27SyTtzUAvx%2BlNTTDOE5G9PT5S85H6uvD8BTtByCXjapQk1AedTOcGxWnQmXLS3CpnOiXRn%2BDSZc0nz%2F0p1zJSaylo3bvqO3p7SOPTKGeH4tldTQumK8%2BoeHSDcTswI%2Fmbm804vqk15l2G0T5I5W3zMkZajtWC6D8uuUFLDMxzMbHfKWbBHzfBvWj8rzw5kM5sTfyX6MXeOGf94fXuAf%2F9jonVtZWOvDNlIbowdMpSqCpCsdEeMAwExEPPSFYlsFEeRpi5eEhf62hfK9UvGX%2FVVgK7y6w4%2BhaSRcNWBJZp82wFhRcCTChpL2mMPQEYyDATCzqM2T%2B0qGZ2VtPdZ%2B3BmjhrqlUV5wAEtwr%2F%2Fcin%2F2wOTOtrIL%2FOWskWbh0leISoOqm%2Fd7xIb63gToAJltppnO5IrqfsUiAYGLLWQZHQ8h8MAI8fxyYcyWU6qP78zRqmdIJFc4c11DmhJRolqqp9SnDlEiUzzyVyzcrIzVS48w7fWrxAY6pgHGpIWdFAOg%2Bx6GVDPqeZMIfoQhapSgR3DKXaMALjdOB25d0L77oPlipa7NSJvccJTVY1E60mtd%2FhjkWMsKJXEhdsfKJheGPqvzb1oTrX9iV2gPrTF2k4YJN00FDTVpz%2B%2Bmiw%2BcBST6oF5H2xvyWs6fTS3QAGWdUm%2F2XLcAvXCY0prwH%2FoxWErCqmjmePl%2FZH0fxikeO25N8K%2F1bQASKb%2FvOBSXTvkR&X-Amz-Signature=7505649fb7bf3d08c641815d4609ec0dd4203e2db9f51bb782050aa651f35ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
