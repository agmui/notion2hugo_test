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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWNBZX4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMczVUmr0qgNkQ7df2AGlHpUqQJGVL23bOzyBQgGAHlAIhANz3oRn0GdzhBAkvfcgY5r0UVULLVbS6fxH8RCXRqLu1KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAURda486AD5Fi4sgq3AP1WUOy3C42e0XPH%2FQ%2B4%2FCuztyJ05QSGmURo3ymQgwXFmDuHL4be3d1WG3dZ1WW7osa91YynqcpKwpa8%2F5nLBolsOSjDJIBaq4pxi8bulN%2FHB8e%2BD53ZyTfq5pjq%2FaWdgzlHQsNhkFMzVTNom11Xjwqc7FdDVaOQidOt8OeAHVy2aJBvVRheGCV0bASZ%2BA6Q1ihvO%2B2pBG4Z5AOWMOCd%2Bb1gEIZ%2FCCDWAcTuGxvc0FYYSHqls3QNNr7zBPiBw6xEmLSYP%2FS0LyBqnGsYKB5CTKW8mjh8X1hweGIOtPybYZLaUE9jZ7muITkXJ7RJfjY8aau6Pz37WSzkgmZNJe8gd7E31RoJZhnR4Bjlle%2F6tsb9gqnt24nMpGq%2FIs4%2BBTfZfdXGb9Gr5XA8nKr%2FZQ6wv79JGoy8HLejGqpP8Y92bJnzbXKLd52tXBNvxClDQsa4K7bLdXHx1v88uO8KPOntNGrNt7B5Db2m%2BNfHm7aagk8q5nqzsZbsvBoUNehJxuhjeaW7N%2FN5C%2BDejibNvNpwExz%2FvqDoGbKNdhYiT5ATkv0bYSKnzfy6r%2F%2BWPVHjyPU1UnjGuLLH3JgRN0pcBc4sNgNGw0azDjPdd0ondt1CyyYd5E1ZMUQix1sMCx4sTCw0rXEBjqkASWxU%2BpZHSY93nUNoMAXO2nEgKRvq0hB9lcyiOEWyON%2BCNWLWpQKwub4%2F1caCHTVnHIEVi0ushBVnYeQCtRq1PjnjMwZGVfMDFVNaJuDy4CLpz7JOvZLsx3%2F%2BRZph6U91kT579sHY6KeEKfH%2FRRaorvUF%2BMr3P74lJ68My2RubSdYY4r6XHpUJH77SdMMUwHRYNt7Zdje2Zw96GJXEcBh9m%2FM60v&X-Amz-Signature=f55dc2e9bb3bf420725f725af5a95192cd170df164a7476ad10d0e7766a40a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWNBZX4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMczVUmr0qgNkQ7df2AGlHpUqQJGVL23bOzyBQgGAHlAIhANz3oRn0GdzhBAkvfcgY5r0UVULLVbS6fxH8RCXRqLu1KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAURda486AD5Fi4sgq3AP1WUOy3C42e0XPH%2FQ%2B4%2FCuztyJ05QSGmURo3ymQgwXFmDuHL4be3d1WG3dZ1WW7osa91YynqcpKwpa8%2F5nLBolsOSjDJIBaq4pxi8bulN%2FHB8e%2BD53ZyTfq5pjq%2FaWdgzlHQsNhkFMzVTNom11Xjwqc7FdDVaOQidOt8OeAHVy2aJBvVRheGCV0bASZ%2BA6Q1ihvO%2B2pBG4Z5AOWMOCd%2Bb1gEIZ%2FCCDWAcTuGxvc0FYYSHqls3QNNr7zBPiBw6xEmLSYP%2FS0LyBqnGsYKB5CTKW8mjh8X1hweGIOtPybYZLaUE9jZ7muITkXJ7RJfjY8aau6Pz37WSzkgmZNJe8gd7E31RoJZhnR4Bjlle%2F6tsb9gqnt24nMpGq%2FIs4%2BBTfZfdXGb9Gr5XA8nKr%2FZQ6wv79JGoy8HLejGqpP8Y92bJnzbXKLd52tXBNvxClDQsa4K7bLdXHx1v88uO8KPOntNGrNt7B5Db2m%2BNfHm7aagk8q5nqzsZbsvBoUNehJxuhjeaW7N%2FN5C%2BDejibNvNpwExz%2FvqDoGbKNdhYiT5ATkv0bYSKnzfy6r%2F%2BWPVHjyPU1UnjGuLLH3JgRN0pcBc4sNgNGw0azDjPdd0ondt1CyyYd5E1ZMUQix1sMCx4sTCw0rXEBjqkASWxU%2BpZHSY93nUNoMAXO2nEgKRvq0hB9lcyiOEWyON%2BCNWLWpQKwub4%2F1caCHTVnHIEVi0ushBVnYeQCtRq1PjnjMwZGVfMDFVNaJuDy4CLpz7JOvZLsx3%2F%2BRZph6U91kT579sHY6KeEKfH%2FRRaorvUF%2BMr3P74lJ68My2RubSdYY4r6XHpUJH77SdMMUwHRYNt7Zdje2Zw96GJXEcBh9m%2FM60v&X-Amz-Signature=143c41677011185dacf4139174005995a49e02862bb998d1393299d139ef53ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
