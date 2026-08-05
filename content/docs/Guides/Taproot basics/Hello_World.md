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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USH4GEG%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDiHc%2FLB2u2lkedP5J7ogLiiGMMZGdbhU7ictXG5giCjQIhAN3o3NttPBZ%2Bxt4iTYdenpi5Vu8eo%2Fu7a6zA9eU2h465Kv8DCBoQABoMNjM3NDIzMTgzODA1Igw34D64T8Iii%2F4yUe8q3APxqaXsDVjE36g9hYhzW4vhoNxiMajio%2FDHTHlfsbaG91ImVOXTswTq3Row9dMjPwZdU8%2Bt2ubs0JtbfDrU4sJCcGROUaj72Vtu7bMeKWYyD9KNuCyRd8pFHWcYfY88rGmAUB%2FjZ6m9guZcgJNU9fbqsOrK%2BOj6xAp1TRtC9CTr%2Bs5akEeVFvdT3ZqzGjjqFJHlcXpfNQDXUmgugEU2DScvYAY6a2C06oQN3OjinF3gzorsgGRy18WPxhZ5342z6nU0jld6Yx1hYeMRQ1Wq5AOVyvBVvHK7TF1YM94m1XKV6627mTMDVqHk1BvdZsNBRf73iBFY%2FofBkLaiOToxB2XJ%2FzpabpIOl0hIlTbez%2BPvpIlmdI6NdLZzS6k4m430rLdh9y04izGWJ%2FSsRw6YPLiFhTGuMilasn5jlTXIV6k4HTv36NyxGXbG3vk6nyA4CF7Gax%2BPI9SbqYtrBQvZC%2F49OcUCw7eAeLdG7Zgrjq95KRZ69TvD2BOCti3RwK3J59PLzTfzWGRGJYe9jFiqhVLVS3GNRSiE31DkEkCw4i%2FQQGPhPiPAUr8FV9vIJCsmn4apWG%2FNhBFofgtAmCkB4FGSGh71FV9vH3%2FgGKmHwq2PPOVmxlB2KoKg8qPmozDXlMrTBjqkAUuNgCUPVOWtuMpaka0EJHkhIBDFd4Bpv7Ai24OF%2Fls7fJQo9xUEJgLwFB1LoVkuzmq3Agj%2BpjpDe7jIA9NrxwO%2B8LdniOOlXjjGmfFmEfLVdPEX6XwhMN5zHPPVH87hJo9duKc4MK9v4LpZag72re%2BLgzXnkOES87vhmPNnEGSoSd6O0w1J2aBL1Sid8t2rvHLMIozt8w8n5CQvq%2Bf5VHmoHEVH&X-Amz-Signature=78cddb1866acef9107cd2baa080b96250a99dafdb84ee165417b946b7761be65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USH4GEG%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDiHc%2FLB2u2lkedP5J7ogLiiGMMZGdbhU7ictXG5giCjQIhAN3o3NttPBZ%2Bxt4iTYdenpi5Vu8eo%2Fu7a6zA9eU2h465Kv8DCBoQABoMNjM3NDIzMTgzODA1Igw34D64T8Iii%2F4yUe8q3APxqaXsDVjE36g9hYhzW4vhoNxiMajio%2FDHTHlfsbaG91ImVOXTswTq3Row9dMjPwZdU8%2Bt2ubs0JtbfDrU4sJCcGROUaj72Vtu7bMeKWYyD9KNuCyRd8pFHWcYfY88rGmAUB%2FjZ6m9guZcgJNU9fbqsOrK%2BOj6xAp1TRtC9CTr%2Bs5akEeVFvdT3ZqzGjjqFJHlcXpfNQDXUmgugEU2DScvYAY6a2C06oQN3OjinF3gzorsgGRy18WPxhZ5342z6nU0jld6Yx1hYeMRQ1Wq5AOVyvBVvHK7TF1YM94m1XKV6627mTMDVqHk1BvdZsNBRf73iBFY%2FofBkLaiOToxB2XJ%2FzpabpIOl0hIlTbez%2BPvpIlmdI6NdLZzS6k4m430rLdh9y04izGWJ%2FSsRw6YPLiFhTGuMilasn5jlTXIV6k4HTv36NyxGXbG3vk6nyA4CF7Gax%2BPI9SbqYtrBQvZC%2F49OcUCw7eAeLdG7Zgrjq95KRZ69TvD2BOCti3RwK3J59PLzTfzWGRGJYe9jFiqhVLVS3GNRSiE31DkEkCw4i%2FQQGPhPiPAUr8FV9vIJCsmn4apWG%2FNhBFofgtAmCkB4FGSGh71FV9vH3%2FgGKmHwq2PPOVmxlB2KoKg8qPmozDXlMrTBjqkAUuNgCUPVOWtuMpaka0EJHkhIBDFd4Bpv7Ai24OF%2Fls7fJQo9xUEJgLwFB1LoVkuzmq3Agj%2BpjpDe7jIA9NrxwO%2B8LdniOOlXjjGmfFmEfLVdPEX6XwhMN5zHPPVH87hJo9duKc4MK9v4LpZag72re%2BLgzXnkOES87vhmPNnEGSoSd6O0w1J2aBL1Sid8t2rvHLMIozt8w8n5CQvq%2Bf5VHmoHEVH&X-Amz-Signature=1edfb6dc94dcbc0cbbb498d3f7405f7410fd1b527230063dace9bb51a084832e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
