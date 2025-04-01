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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBQXGRE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICOqXNv05UTlXswQcu8zcmak0OWBB%2F1e2FLeHIKsfUUgAiEAhFdhgLBWBrGfyPq9V8Yi%2BoedJtvrteN5XaEy6azXSokqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTXeDKf%2FzCWtEhKZyrcA6jTB3W%2FfCggZTGHAF5Vy4CNpOYPTKmfF3kavDCdjR5GPwAUyikw0evc%2BMSPCG2MMHbKek5ud9qJcnG9c0Hhcsl2EnzexM5bZgDiq76CugW%2FB2b%2FLkMKoqwk7Y4bQNROTjbFDd6srSbfht4ndcYj%2BKNHQ1POFw2d4eYvUT5MuiY04JJ%2FutUvZVb%2Bixpy2ZXql7TkErhlAwEYWZofvLZyVmvFFwg6J8olDii%2BsiBZqaioiTp8RgV21oexd5hCxcSh3khXL%2FiscVyZEAO0KduHDc7OegT2rylX%2FbMm8JCU3UdSNqag5pizyFs%2F2JLQ%2BZiae9aMtqQAOOdVls84qXGQN6hKiHI5Q0rxbyD4IYsHvhKu1YK4JO4b3RluhCxWjaNA7PZOB0cjvuQQ6C6Jc%2BWVAu9lzcy1SVYqoZluFFLPE44oxhHmz5EY1mmV4mV1ERhbbJMsdJOxD6bQlzO2P%2FBfuUSMXXHk96XvRNyC%2F4%2FPiY4g5QPaSyeWtZQqDtH2iOpxFEahjpTwqFHaVNxbRSK4xXAhYwN4BapvGEu4U%2BqEwE5L4XincdZaQDcHjxTelOIKNQI4UFECmPiTSOtpwoacqomcG%2FtyanR85gxvNg6F%2Bz2gVwPRAiwjjFRf1iWCML6psb8GOqUBo%2FvV6SS%2BEEdMWACvouhAiaMssCIW31zvX3IEtSkD%2BGuqLUjPGs7gJEBcphhiC1YuxDCLU5hOM9tfZG2jQ3gripan6aRa9HCuULM%2BtGLfNKOzWCum1gH3UJDjEZQ1ZmTDS1CR26DgBAgha0574WfZum%2BdGiQ%2B3Qae4bdtJR%2BGfMQpgs%2FtYoqAaLWasFhER4l%2BzG84ZGUw4tALZ8r82cQfSQUET2JN&X-Amz-Signature=4e948125fa970945af997a93c93fcfbf5956234be69534741c77249a51e004fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBQXGRE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICOqXNv05UTlXswQcu8zcmak0OWBB%2F1e2FLeHIKsfUUgAiEAhFdhgLBWBrGfyPq9V8Yi%2BoedJtvrteN5XaEy6azXSokqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTXeDKf%2FzCWtEhKZyrcA6jTB3W%2FfCggZTGHAF5Vy4CNpOYPTKmfF3kavDCdjR5GPwAUyikw0evc%2BMSPCG2MMHbKek5ud9qJcnG9c0Hhcsl2EnzexM5bZgDiq76CugW%2FB2b%2FLkMKoqwk7Y4bQNROTjbFDd6srSbfht4ndcYj%2BKNHQ1POFw2d4eYvUT5MuiY04JJ%2FutUvZVb%2Bixpy2ZXql7TkErhlAwEYWZofvLZyVmvFFwg6J8olDii%2BsiBZqaioiTp8RgV21oexd5hCxcSh3khXL%2FiscVyZEAO0KduHDc7OegT2rylX%2FbMm8JCU3UdSNqag5pizyFs%2F2JLQ%2BZiae9aMtqQAOOdVls84qXGQN6hKiHI5Q0rxbyD4IYsHvhKu1YK4JO4b3RluhCxWjaNA7PZOB0cjvuQQ6C6Jc%2BWVAu9lzcy1SVYqoZluFFLPE44oxhHmz5EY1mmV4mV1ERhbbJMsdJOxD6bQlzO2P%2FBfuUSMXXHk96XvRNyC%2F4%2FPiY4g5QPaSyeWtZQqDtH2iOpxFEahjpTwqFHaVNxbRSK4xXAhYwN4BapvGEu4U%2BqEwE5L4XincdZaQDcHjxTelOIKNQI4UFECmPiTSOtpwoacqomcG%2FtyanR85gxvNg6F%2Bz2gVwPRAiwjjFRf1iWCML6psb8GOqUBo%2FvV6SS%2BEEdMWACvouhAiaMssCIW31zvX3IEtSkD%2BGuqLUjPGs7gJEBcphhiC1YuxDCLU5hOM9tfZG2jQ3gripan6aRa9HCuULM%2BtGLfNKOzWCum1gH3UJDjEZQ1ZmTDS1CR26DgBAgha0574WfZum%2BdGiQ%2B3Qae4bdtJR%2BGfMQpgs%2FtYoqAaLWasFhER4l%2BzG84ZGUw4tALZ8r82cQfSQUET2JN&X-Amz-Signature=1bd2e9ee9398d299cdc22bf6057870b1032107f02db00b632c6312990b609953&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
