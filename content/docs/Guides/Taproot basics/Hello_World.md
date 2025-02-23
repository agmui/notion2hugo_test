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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLOOSQT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC47nH0%2BwYU8HNRMHrnt2wEYLfziOVkM3S1mvkXdj%2F%2BXAiA7uDTwb0zipkve5BDSWntDunbo631NVAurt8O6SYvaIyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5qjQPz9jVKjQgzEKtwDQVo7vK9JZd6oYqbYZCKlyYRRmiTSic%2BVjYpnJZksDzKn4hhCQBLLIBdIw554afVOgyWuaKb1BCaPBw1RmsnNiXqMo8yrWb4PrxpHGO6bOsoVU4iEZiOfz4SeUNLWGI2bS%2BdsHoiN3OTkFcj%2FuVrA%2Bc%2F%2FrOYPVaxREWKavHuaM2OgW%2FtPfTqCb2Lv65at2lZuFFaorOLMv3X10rb1QrznZAZUSJDHNj2%2Bj9vWX%2F5jQH3NNboXkQldVVxl7o%2BWaNEaj4pcmHr0taqLvGRPJ4Rf128Xln%2BiE75dMMWcxT%2FCzxJ6vqBGLumIuiKdEmVBHDC3TKaFJnWjRr5A%2BCB59MoIzaBNp5mdgXOBRd%2BqFMQL4aETFa6L67WW2cTEBYMZlqMReiDWBfDbZ9K4wj1UzhIZO6LODCfmIAk6xINIfylhjKNZITUvXgM7K6Cf%2BOA3x%2BxT%2FWhmDXjw2vCZQ04IUvCSu3x7KSrXjXm8fCyGVVTlsFc2gC9M%2BBe6fz22oJwPN5jLpF13fx8VJ1MG3mquKpGfRs1iivUBAzh%2F%2FOHos4A%2BupF1XxTIQ1unwZNejn7zh0UhxhkKOs4o7NOxZB7p%2Fe0wms6%2F25ORD%2BJMB%2FQaRcx404VQ3FCjv%2Frp12Sc4SYwjKrpvQY6pgEJhyBLvTbSUqNiHjwBzX2Iu9ky4EhAx7E4qN0jQhEMnzqfedDz9%2B6hLd2LtAYSTE9e4w4KC%2BHgMzTkIc5g4KFxBnx3jV9i5MLOc9cnqlE%2FfpyGga1oxsgXvxHaYkqT%2B3BQ%2FEovhPFpaBkPqEpcfwH9sO3DWj45opZjLLcvpR895r1ex6S8ZSb%2FaVf8riL%2F7GHtOAp0OQDDSlQiLe7IWnBpPFCCfLgy&X-Amz-Signature=44f7d4ef4d5efbcc6904785c0d76c80783463965dd7b0acdda04f33223660c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLOOSQT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC47nH0%2BwYU8HNRMHrnt2wEYLfziOVkM3S1mvkXdj%2F%2BXAiA7uDTwb0zipkve5BDSWntDunbo631NVAurt8O6SYvaIyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5qjQPz9jVKjQgzEKtwDQVo7vK9JZd6oYqbYZCKlyYRRmiTSic%2BVjYpnJZksDzKn4hhCQBLLIBdIw554afVOgyWuaKb1BCaPBw1RmsnNiXqMo8yrWb4PrxpHGO6bOsoVU4iEZiOfz4SeUNLWGI2bS%2BdsHoiN3OTkFcj%2FuVrA%2Bc%2F%2FrOYPVaxREWKavHuaM2OgW%2FtPfTqCb2Lv65at2lZuFFaorOLMv3X10rb1QrznZAZUSJDHNj2%2Bj9vWX%2F5jQH3NNboXkQldVVxl7o%2BWaNEaj4pcmHr0taqLvGRPJ4Rf128Xln%2BiE75dMMWcxT%2FCzxJ6vqBGLumIuiKdEmVBHDC3TKaFJnWjRr5A%2BCB59MoIzaBNp5mdgXOBRd%2BqFMQL4aETFa6L67WW2cTEBYMZlqMReiDWBfDbZ9K4wj1UzhIZO6LODCfmIAk6xINIfylhjKNZITUvXgM7K6Cf%2BOA3x%2BxT%2FWhmDXjw2vCZQ04IUvCSu3x7KSrXjXm8fCyGVVTlsFc2gC9M%2BBe6fz22oJwPN5jLpF13fx8VJ1MG3mquKpGfRs1iivUBAzh%2F%2FOHos4A%2BupF1XxTIQ1unwZNejn7zh0UhxhkKOs4o7NOxZB7p%2Fe0wms6%2F25ORD%2BJMB%2FQaRcx404VQ3FCjv%2Frp12Sc4SYwjKrpvQY6pgEJhyBLvTbSUqNiHjwBzX2Iu9ky4EhAx7E4qN0jQhEMnzqfedDz9%2B6hLd2LtAYSTE9e4w4KC%2BHgMzTkIc5g4KFxBnx3jV9i5MLOc9cnqlE%2FfpyGga1oxsgXvxHaYkqT%2B3BQ%2FEovhPFpaBkPqEpcfwH9sO3DWj45opZjLLcvpR895r1ex6S8ZSb%2FaVf8riL%2F7GHtOAp0OQDDSlQiLe7IWnBpPFCCfLgy&X-Amz-Signature=0842542473398b5186a29e0c6eed71ca88c7c80d3e8ec5bd34b082dcc20bc068&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
