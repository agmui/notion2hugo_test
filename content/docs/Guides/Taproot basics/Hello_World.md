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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDMDZSL%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCZE5UwIRQ3VBGX5dLVvoBc%2FzmUQgZIieS7cRRUjKzcfgIhALkT5VDKzRkh8ur58KQvh4XRsynB2GJXetVIJqpuv2N3Kv8DCEwQABoMNjM3NDIzMTgzODA1Igw4axjMkuWREidTi7Yq3ANZp%2FKX7ai43Mlwmk0kIToHeKvT04DHWicDgr7%2Fkw8BGMDJ59XJEM%2BqRySbF4lKzQVWHtxGIMMfOEuuzVoDPiAB3e0dIP1ET6y%2FxkxOHoj%2B8498yDxk%2FUpZKJ7YHVkJAcx2VtcWiyEVOdaWwBKnjAhCxleCds9kyf8u2d9oDOLXwOm3pzNhKxYYp6WPFRtoL01rh0MhCN5v5sYAcBwRfmw%2B6ySUeTGCvOAYLdA1qYppWP9i7ijBgE89QYz69Ll5xicWiyeKmJAeEdw%2FQJDegs8irzRPbq%2BxSjSBj5gWve1DrfNVA0HCYs8WVZePvevU2wfBfdjleSEZPKA0GXDeS6tlw2iKMS6Zbi0UxfGwtyulAbPep0i6epJ7IcdPUzCw7fMVceA68VCooWDypCXrxFLo6mrxyzhSI85lAnMk0RPUQfX67z0oxDN8PIgZDmbNHabLHGVu51kHLuE25pjuVc%2FoMQifTJPG73ib9%2FbbgltjuhzfMOwoECyEtfvXnaOHWnYhCwf0EFrJ86PhfnkZ3t1D3aH5VmyCksS4BcD%2BX7RS99NnojJ2uwT43KnH1oeoMT6EfY7ro%2BnYsiaVD54uxUvF0K9BsOp7UvAjy29167n2qxwaKUD68zRbp7AhNTDq66XDBjqkAXbGlVBc0Iz1TLgl0vUmKSuPpPcija8e4J9zkiiwNXgY0M9B6BmK7BeT0gR5aPs9EDY6cXFKa7dW91Wd6el0OwZ49EDigOpzy6gVxfM%2B4RjoLRnAPA0j6erWxB5LOEMWkRavp51i1kGxs1xDG5AbPgDiEAjeNntlmhY%2BDRc8XG8Vh3VhA0NzuyQC6SCYUPAJnPMxQV75CQDP3ysiI35Piq9nyvoG&X-Amz-Signature=f30b7294c2199886394b2d3768bb36ffabafea85acb478bfc0b49031a788e666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNDMDZSL%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCZE5UwIRQ3VBGX5dLVvoBc%2FzmUQgZIieS7cRRUjKzcfgIhALkT5VDKzRkh8ur58KQvh4XRsynB2GJXetVIJqpuv2N3Kv8DCEwQABoMNjM3NDIzMTgzODA1Igw4axjMkuWREidTi7Yq3ANZp%2FKX7ai43Mlwmk0kIToHeKvT04DHWicDgr7%2Fkw8BGMDJ59XJEM%2BqRySbF4lKzQVWHtxGIMMfOEuuzVoDPiAB3e0dIP1ET6y%2FxkxOHoj%2B8498yDxk%2FUpZKJ7YHVkJAcx2VtcWiyEVOdaWwBKnjAhCxleCds9kyf8u2d9oDOLXwOm3pzNhKxYYp6WPFRtoL01rh0MhCN5v5sYAcBwRfmw%2B6ySUeTGCvOAYLdA1qYppWP9i7ijBgE89QYz69Ll5xicWiyeKmJAeEdw%2FQJDegs8irzRPbq%2BxSjSBj5gWve1DrfNVA0HCYs8WVZePvevU2wfBfdjleSEZPKA0GXDeS6tlw2iKMS6Zbi0UxfGwtyulAbPep0i6epJ7IcdPUzCw7fMVceA68VCooWDypCXrxFLo6mrxyzhSI85lAnMk0RPUQfX67z0oxDN8PIgZDmbNHabLHGVu51kHLuE25pjuVc%2FoMQifTJPG73ib9%2FbbgltjuhzfMOwoECyEtfvXnaOHWnYhCwf0EFrJ86PhfnkZ3t1D3aH5VmyCksS4BcD%2BX7RS99NnojJ2uwT43KnH1oeoMT6EfY7ro%2BnYsiaVD54uxUvF0K9BsOp7UvAjy29167n2qxwaKUD68zRbp7AhNTDq66XDBjqkAXbGlVBc0Iz1TLgl0vUmKSuPpPcija8e4J9zkiiwNXgY0M9B6BmK7BeT0gR5aPs9EDY6cXFKa7dW91Wd6el0OwZ49EDigOpzy6gVxfM%2B4RjoLRnAPA0j6erWxB5LOEMWkRavp51i1kGxs1xDG5AbPgDiEAjeNntlmhY%2BDRc8XG8Vh3VhA0NzuyQC6SCYUPAJnPMxQV75CQDP3ysiI35Piq9nyvoG&X-Amz-Signature=a1abd652ece616bc81432fc8412f19332f1ca3a121ac827f06cca5949cf23cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
