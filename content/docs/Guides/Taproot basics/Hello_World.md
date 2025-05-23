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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBBE6VD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIByJEn2aE9B3nkgVZrp2KzjZ5hG72K3x93Bv%2BuPIR25ZAiA%2By72fsmIM%2BsvLIEdPaq7mkgF8X%2FPqsJhGoxQjVxPD8iqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjyy1BedemGPAFLdKtwD2ZTP5j4kWJPBO95h6o3MghxQIa3WnUcFmrt%2BgSIFRcpXRCj%2Fl4zfMC4oCS2GFJ7fuHv88pjftvcIIXgcShJRYSX3x9pWOH%2F5gGMDXrJcWq06iVR9qliUrlnz9ObkRKBGljv6kBlboVOTjLEXneYikwp3AmPpxd2ljcvoM%2B7OS08QGiii3ot1bPmqiNHC2Nx3I70wrpI7ukHkMvGPVfHYyXOslKyZKgWtu7tS9%2B4GQXRH5Je4JwyWWwESRa%2B%2BKSUw7uY6GIc%2FrgfnEmkM52q53yg7m0bXETl97odgLo26UJxizXWddzN4EbKMoL%2FcbOPX8St%2BnX6gO2UjkUDSl2KOhgmoDUNKVv7yhooR7Tf1p5IvgJbhvrEBVsHLK4qFf%2FbDK%2BJ7Nd8VgbCmw73Rl2Bl2z8APfQsJ56VfjwGSAiB0XDU%2FGeXoDztsvKj6wGcPrHz5ftckAvU3%2B4v3wigGeqJxPPo%2FyCDkH9cSEr5CsIv5TNaInNkUROBYKGe3MsKMEMvzLFPzoZShnD6FXe7rSwEtLVBmSZfyqSMmdW3jkPbGHQWXVYgOBBdWa5bMgVqnw8eAs95p2wUKFpe7%2FYnTibnM9vB3UJNIoz49ULklmUhKO6TaGGk7kmDopLlsBww9f3CwQY6pgG8zmYSuXsMIUHrn%2FxnriT1HEeLk8qVV%2F0YAlapEQdi1bwd1qtzwZZMq%2BVNB%2BnoKauiG89ICKFJ4VqqLX76d8MiaVCHhaZ7oLvqCXz1PLhIl95ozmktvDt1k6khAyXLBIqJnO8KnYOD4GUw9RcvRtUHUISd3CYYvODG3OxEu8FKj4zMWyehQ9%2BwqLUwZ9oo9jStWtDrpGq1kqivOhPJCjvBkFk2qCtE&X-Amz-Signature=86e4898f7914776b8e2eea2cc64426cf83e9cce2127fb3d251a19c624f0ab2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBBE6VD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIByJEn2aE9B3nkgVZrp2KzjZ5hG72K3x93Bv%2BuPIR25ZAiA%2By72fsmIM%2BsvLIEdPaq7mkgF8X%2FPqsJhGoxQjVxPD8iqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjyy1BedemGPAFLdKtwD2ZTP5j4kWJPBO95h6o3MghxQIa3WnUcFmrt%2BgSIFRcpXRCj%2Fl4zfMC4oCS2GFJ7fuHv88pjftvcIIXgcShJRYSX3x9pWOH%2F5gGMDXrJcWq06iVR9qliUrlnz9ObkRKBGljv6kBlboVOTjLEXneYikwp3AmPpxd2ljcvoM%2B7OS08QGiii3ot1bPmqiNHC2Nx3I70wrpI7ukHkMvGPVfHYyXOslKyZKgWtu7tS9%2B4GQXRH5Je4JwyWWwESRa%2B%2BKSUw7uY6GIc%2FrgfnEmkM52q53yg7m0bXETl97odgLo26UJxizXWddzN4EbKMoL%2FcbOPX8St%2BnX6gO2UjkUDSl2KOhgmoDUNKVv7yhooR7Tf1p5IvgJbhvrEBVsHLK4qFf%2FbDK%2BJ7Nd8VgbCmw73Rl2Bl2z8APfQsJ56VfjwGSAiB0XDU%2FGeXoDztsvKj6wGcPrHz5ftckAvU3%2B4v3wigGeqJxPPo%2FyCDkH9cSEr5CsIv5TNaInNkUROBYKGe3MsKMEMvzLFPzoZShnD6FXe7rSwEtLVBmSZfyqSMmdW3jkPbGHQWXVYgOBBdWa5bMgVqnw8eAs95p2wUKFpe7%2FYnTibnM9vB3UJNIoz49ULklmUhKO6TaGGk7kmDopLlsBww9f3CwQY6pgG8zmYSuXsMIUHrn%2FxnriT1HEeLk8qVV%2F0YAlapEQdi1bwd1qtzwZZMq%2BVNB%2BnoKauiG89ICKFJ4VqqLX76d8MiaVCHhaZ7oLvqCXz1PLhIl95ozmktvDt1k6khAyXLBIqJnO8KnYOD4GUw9RcvRtUHUISd3CYYvODG3OxEu8FKj4zMWyehQ9%2BwqLUwZ9oo9jStWtDrpGq1kqivOhPJCjvBkFk2qCtE&X-Amz-Signature=ff02d331d6183e2238b368564ac7deed7d10e42e304bda5473d76be42adf6cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
