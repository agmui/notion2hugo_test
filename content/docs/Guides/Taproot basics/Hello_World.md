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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RDJLXQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDO7l2HqqxN%2FTU7gHjdCtdddPfLgCNthe2cj5R6PpwlQIgV06VDE5xLSg9yoHYP3FobiVeKYRB07EBBhW6VZFPTWIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgNsf2GrnaxHI44VyrcA3XJStNHIbHTMbjRgtaqULEI6M6qxSPM4h%2Fg152%2BE5J2nQFH%2Bt85pnKKJ9W7PlfsjcLlo%2Fa07qTyLwpTPoBaTVjWwyn6kUFLNsroVeZb5f%2BvCu7Bfd8IgEwk2%2BqbAaFeDy6aZqi7MG1bNzRFT%2F21z8QJaozCVnxD7VpIb0fCA2utxYmg5V2jSGiCMVO5LMq%2B1bQlGxG9OeivEbpZE8jJpuFwT0dV7RJ%2Fi3n43wwgMcZ059kGqUAqxKWFxHqJqEsc8596z6myfJQCcYIupgkDMFfq00FShVF0ObemZdu%2B%2B%2FIrkX%2FN31tcr9O9yC2K82%2FNdyHAN2RZ9Jl7qXhEm%2FWer6zlGZue1UtwQHOuH4QUXltaI96okFQt2RsrXrnONfx%2FEyEqwjgXd0ePGWqLJcbjqHKsemtibdAT7jb%2FLjlAIBD8zVjxtzN%2FfDUJRsyYIVQ9%2FrONRVjXy6XCEYVDrGrRBcJw9vypZZ5vTaOFJuxc5r5GtIYfloWL4383G626Z%2FTsEzgAIvGn4RE6y2jI61AIHN%2B%2FbX3%2BvrG%2F6DfNFrPSgiUlhKXbEickd98j1VBmicMXqavGHZkzyRTTyBmicxX%2Bk86UjuVtrhYblAViKQoCcf1aV%2FTdv8FKHPbQS%2FRHMKKf%2B8MGOqUBszVbN36qxcp5P1cMvYY%2FhvcgFXNGtdhaegNdC7cuTZKMXs0x1%2Ffp1bUP%2BHHjiHzsDmTYokeXmp%2FlT0D5ZztMZI46YK%2F25dkP%2Bqb2icF7irlC8Pu97nGsjzPLGaIn1BBRQmABQlIGKHD9A2%2Bllf%2FNFfTiKFzKXP64A9E5pbbIwVl6fVbQmeYqbgAsT1%2BLsgb%2FYPyKlZgoLwCR4qqgdRsKAGqlkVLh&X-Amz-Signature=5fe6361d60c3cc2cba1c70ee103ae5ea30245f7296b87aafebcb4c43b5923026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RDJLXQ%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDO7l2HqqxN%2FTU7gHjdCtdddPfLgCNthe2cj5R6PpwlQIgV06VDE5xLSg9yoHYP3FobiVeKYRB07EBBhW6VZFPTWIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgNsf2GrnaxHI44VyrcA3XJStNHIbHTMbjRgtaqULEI6M6qxSPM4h%2Fg152%2BE5J2nQFH%2Bt85pnKKJ9W7PlfsjcLlo%2Fa07qTyLwpTPoBaTVjWwyn6kUFLNsroVeZb5f%2BvCu7Bfd8IgEwk2%2BqbAaFeDy6aZqi7MG1bNzRFT%2F21z8QJaozCVnxD7VpIb0fCA2utxYmg5V2jSGiCMVO5LMq%2B1bQlGxG9OeivEbpZE8jJpuFwT0dV7RJ%2Fi3n43wwgMcZ059kGqUAqxKWFxHqJqEsc8596z6myfJQCcYIupgkDMFfq00FShVF0ObemZdu%2B%2B%2FIrkX%2FN31tcr9O9yC2K82%2FNdyHAN2RZ9Jl7qXhEm%2FWer6zlGZue1UtwQHOuH4QUXltaI96okFQt2RsrXrnONfx%2FEyEqwjgXd0ePGWqLJcbjqHKsemtibdAT7jb%2FLjlAIBD8zVjxtzN%2FfDUJRsyYIVQ9%2FrONRVjXy6XCEYVDrGrRBcJw9vypZZ5vTaOFJuxc5r5GtIYfloWL4383G626Z%2FTsEzgAIvGn4RE6y2jI61AIHN%2B%2FbX3%2BvrG%2F6DfNFrPSgiUlhKXbEickd98j1VBmicMXqavGHZkzyRTTyBmicxX%2Bk86UjuVtrhYblAViKQoCcf1aV%2FTdv8FKHPbQS%2FRHMKKf%2B8MGOqUBszVbN36qxcp5P1cMvYY%2FhvcgFXNGtdhaegNdC7cuTZKMXs0x1%2Ffp1bUP%2BHHjiHzsDmTYokeXmp%2FlT0D5ZztMZI46YK%2F25dkP%2Bqb2icF7irlC8Pu97nGsjzPLGaIn1BBRQmABQlIGKHD9A2%2Bllf%2FNFfTiKFzKXP64A9E5pbbIwVl6fVbQmeYqbgAsT1%2BLsgb%2FYPyKlZgoLwCR4qqgdRsKAGqlkVLh&X-Amz-Signature=11b122bd0db7cf0362f8a3f26f621dc25b01ee3d224b68a7dc983b5c9e34c17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
