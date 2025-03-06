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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VILB3L72%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgkyp4v5FcX3P8ytd3jNUQiqrp71TOhwiKja2BomDCBAiAzQxaiyBWLAaY7SGHrHIOlTQ1kUYg1l0KixnBr1IKi5yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMv4WzOwJluLcbDGwbKtwDXAECvbl1LnSaTFj9p1fBKS3wL3Qwt9mQ6CKUH6wwIqSW9sysg%2BihdbA0m99sDT64zdP9XM1rW42za64suVZwb7cO46kXwnTAIksg3dTt6qH8tlHIEadOBySHJb8kD5ohrqa9q9j58TNaUWFcglQff55Tky4mRsc1yQwYvjw3%2Fzcda%2Fx4jRbzcQicBeSmwyBzyKZFOfd4Z9urJI8avLs%2F6lE4sPQPAfIb2AENPIlCT3dlERt5j05jEpfhO8KX%2F9SXy1hL%2FwQM0ZFdzYQo3qvUuwItJqQ%2FagVolRMi1Q6IPR%2BEbjrHpT15YqI8Z2AlbBdE88u2fxC3JZsYXnbQNs67cLjWKnurAoQV97hoHu37QclqHWG0EeNfbHEmIguY2frd%2BEX2ZX40k%2FNIR2aiLm4bwsnGudsbt3ube2We6%2FrxkmcxEx2IyatHUukbcRuZUrZC%2B6G4bz7%2BDTSzGUzGB%2F%2BFuafOrcNAXoROVSfklOiuhw%2BZI5P79ai2y8qpWx%2FcOidxDPewpgAO0ruESX8t7tpVBsHzMLAy1SbVDLiTSfh5lRsTLOeBjxczmBoPtJj%2BSXIK%2F0PXXnpHqmV4XXBLocT89IU1xDBzySE01pJgzsSt0yUKwWGDg4hDJ5HL9swwutCmvgY6pgG0%2BjNdybQGUfn04mLLgOM2uTQVwpB7TrEFa9JYv%2BErdK1mX7rYJYkpFNjy6E%2Bmx6JNavxxg%2FmXIWCx6Prc7ZMO47kiqw0RhUKuhk0hCGKsju8YK%2BwwOtB%2FmZ2Ji7B2TejkwRaTEUnhr00CjkJHcJqDyQV%2BdGi%2FEhZQc5RDGxYYeeabiyUoZI6f1oM2gSkGk5UhwQAE2swm4NIKjfYKBTtM6jd0npCI&X-Amz-Signature=894c191b72ef40803a3f8eb992259c3274f4a1e7c63737fe77c204367bf0523b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VILB3L72%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgkyp4v5FcX3P8ytd3jNUQiqrp71TOhwiKja2BomDCBAiAzQxaiyBWLAaY7SGHrHIOlTQ1kUYg1l0KixnBr1IKi5yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMv4WzOwJluLcbDGwbKtwDXAECvbl1LnSaTFj9p1fBKS3wL3Qwt9mQ6CKUH6wwIqSW9sysg%2BihdbA0m99sDT64zdP9XM1rW42za64suVZwb7cO46kXwnTAIksg3dTt6qH8tlHIEadOBySHJb8kD5ohrqa9q9j58TNaUWFcglQff55Tky4mRsc1yQwYvjw3%2Fzcda%2Fx4jRbzcQicBeSmwyBzyKZFOfd4Z9urJI8avLs%2F6lE4sPQPAfIb2AENPIlCT3dlERt5j05jEpfhO8KX%2F9SXy1hL%2FwQM0ZFdzYQo3qvUuwItJqQ%2FagVolRMi1Q6IPR%2BEbjrHpT15YqI8Z2AlbBdE88u2fxC3JZsYXnbQNs67cLjWKnurAoQV97hoHu37QclqHWG0EeNfbHEmIguY2frd%2BEX2ZX40k%2FNIR2aiLm4bwsnGudsbt3ube2We6%2FrxkmcxEx2IyatHUukbcRuZUrZC%2B6G4bz7%2BDTSzGUzGB%2F%2BFuafOrcNAXoROVSfklOiuhw%2BZI5P79ai2y8qpWx%2FcOidxDPewpgAO0ruESX8t7tpVBsHzMLAy1SbVDLiTSfh5lRsTLOeBjxczmBoPtJj%2BSXIK%2F0PXXnpHqmV4XXBLocT89IU1xDBzySE01pJgzsSt0yUKwWGDg4hDJ5HL9swwutCmvgY6pgG0%2BjNdybQGUfn04mLLgOM2uTQVwpB7TrEFa9JYv%2BErdK1mX7rYJYkpFNjy6E%2Bmx6JNavxxg%2FmXIWCx6Prc7ZMO47kiqw0RhUKuhk0hCGKsju8YK%2BwwOtB%2FmZ2Ji7B2TejkwRaTEUnhr00CjkJHcJqDyQV%2BdGi%2FEhZQc5RDGxYYeeabiyUoZI6f1oM2gSkGk5UhwQAE2swm4NIKjfYKBTtM6jd0npCI&X-Amz-Signature=393985239d7cbd33dad2353eeccfc260f5c92b8525e75a6dbf8c69701d712b30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
