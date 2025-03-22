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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGP4GOW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEQ8ZIj5oiQ%2FJKsp%2FFp5SCva6DPxd8vHy97s1fCWHXCJAiBDRoIaz2VPrMYXC8t2gY%2F%2Bq9%2BHjcXZtYbj1l%2FwBTQiNCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbiEI87JGfC7NcfHSKtwDyyr7o4cVutdTSYklRYb2JcHqZlxB%2B8iKc4tszzsTQ4ePxpzDaX6%2BaHCYxpBehRkOFotvoMQZ40X%2BBcn3n4SUGtjnUnXgbJ5aCT%2FAA0e7sft%2FeQsN9wBSq0WaZustPFaeECyD0%2FQ%2BXGs1S80migP%2Bea97ake78SKT3Q1MMJWadKvSAdKu555UG9oh1Rl%2Fegnk8Ld45GpIyvW%2BEWRyLtfLyDYh7iHPr9M8onC61BlymMv4D8mbandV6kPcu%2FfghvIny2NKAHkmju8xwvu78IKfVuyj%2F%2FdwiZq4yIUboGGGmpb6yJhoWAk7wva9Dn%2B2fxiezMBTJ3KADKEZMq7%2BQmwzhcQwXDCr09BLnWIW25ixfzgic0F4wgFgZj6Nlnu47wwmoeePIXbCf6dNlrzVXgRLPzMstZo%2Bi8%2BkOKrm4lkNNarxq2JaaMZ0bgk99J193BBs4Eq%2BLIAbvh9RoiaPvgJv2UeCcLveUT7g2t%2BDIo2Jh0bAP0qTVrRaC12mrDkIfLVifv5QBwWgimEkoeUecDjKZkinBamLB%2FmadyeuZNCe9Fiidm8lxQsMEN4cDBEVh6A1WDYAptLaaqlcHFKc2nvJ%2BkB3QNR6dOc7aNliCZIJFR%2BNHxxSTpSu1uxuplIw8%2Bv5vgY6pgHiEhnDV8Td%2BYFRgCUbMr5SB%2BxAJZgLoVGHmSVnd5jRVUEimxfqFS%2Bbxab9HBNi%2F1aj%2F0zSWIRitCQhfSuPe%2BZeclIq7MmayrLNMsuUJe%2F%2Fa%2F4Iv9Gc56g6vqekAntkppD%2B4mnrPaNEdsJq0pM0B%2BywXOQxTYxuDn1p6F9Sb01bkSn3i8wVuxZX%2FgMC9UqU7D9G8O2CfMzxlU0GVKuZnSHQBLqnrW8Y&X-Amz-Signature=cb7de61ab6618b411e613c7522ef5c75a63d87b111e3ad9462bd1bad2860194b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGP4GOW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEQ8ZIj5oiQ%2FJKsp%2FFp5SCva6DPxd8vHy97s1fCWHXCJAiBDRoIaz2VPrMYXC8t2gY%2F%2Bq9%2BHjcXZtYbj1l%2FwBTQiNCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbiEI87JGfC7NcfHSKtwDyyr7o4cVutdTSYklRYb2JcHqZlxB%2B8iKc4tszzsTQ4ePxpzDaX6%2BaHCYxpBehRkOFotvoMQZ40X%2BBcn3n4SUGtjnUnXgbJ5aCT%2FAA0e7sft%2FeQsN9wBSq0WaZustPFaeECyD0%2FQ%2BXGs1S80migP%2Bea97ake78SKT3Q1MMJWadKvSAdKu555UG9oh1Rl%2Fegnk8Ld45GpIyvW%2BEWRyLtfLyDYh7iHPr9M8onC61BlymMv4D8mbandV6kPcu%2FfghvIny2NKAHkmju8xwvu78IKfVuyj%2F%2FdwiZq4yIUboGGGmpb6yJhoWAk7wva9Dn%2B2fxiezMBTJ3KADKEZMq7%2BQmwzhcQwXDCr09BLnWIW25ixfzgic0F4wgFgZj6Nlnu47wwmoeePIXbCf6dNlrzVXgRLPzMstZo%2Bi8%2BkOKrm4lkNNarxq2JaaMZ0bgk99J193BBs4Eq%2BLIAbvh9RoiaPvgJv2UeCcLveUT7g2t%2BDIo2Jh0bAP0qTVrRaC12mrDkIfLVifv5QBwWgimEkoeUecDjKZkinBamLB%2FmadyeuZNCe9Fiidm8lxQsMEN4cDBEVh6A1WDYAptLaaqlcHFKc2nvJ%2BkB3QNR6dOc7aNliCZIJFR%2BNHxxSTpSu1uxuplIw8%2Bv5vgY6pgHiEhnDV8Td%2BYFRgCUbMr5SB%2BxAJZgLoVGHmSVnd5jRVUEimxfqFS%2Bbxab9HBNi%2F1aj%2F0zSWIRitCQhfSuPe%2BZeclIq7MmayrLNMsuUJe%2F%2Fa%2F4Iv9Gc56g6vqekAntkppD%2B4mnrPaNEdsJq0pM0B%2BywXOQxTYxuDn1p6F9Sb01bkSn3i8wVuxZX%2FgMC9UqU7D9G8O2CfMzxlU0GVKuZnSHQBLqnrW8Y&X-Amz-Signature=e5f795404beaaf2af4fe055571704c1d85decc929b4012a53ba5df10f9d9e40b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
