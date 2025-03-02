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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7A32MH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAHUMwQ6zIjvu%2FqaoJokTZAK5IuP66zJEQPqXQa1TePLAiAxPpYaZJ8uRNjOLceGx8VJlFaNTPqmWtjLiZmV8SdhxCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMifPOuvJt40pYhCznKtwDMgVfvEt%2BtzyqfHnxtT5BtTmLY38%2FHkm87ZKyQEvJ%2BV9SrOhtYWelfnjb%2BsrqlcIIFz%2FRGfpqyX9RvQb73FtOv7j5kDNqKQ6uhawyyeJS24EqUTobwiFv1i5lRrXottY%2Bsf79OvSMlW2XwvIf%2B0458QL7tkD6LvVVHCyZwHD5bDGbh7av74w%2BSGf1kayE1XfggWz36SWGyyoCKqC%2Bx%2BWz04Wt6pErhf387xmGbIntyggOrbionVb6U17ofuMwejJGuWO2FiomPhUty3fiTC2%2F9VVP%2FP3LhcV%2FaaWlpOPQEjNAZagF%2FMMenwd2Zfr7nOnWtybRbHCWewqXLK%2FS7EotjZlqfS7misjkS51aWQLo6E2zRbunmXor2gC01J0OXA%2B%2Fo7lJ0a2eXklYALpTqHQLia6XkPUXNJP%2FiYpR0J%2FIo%2BBOBEylq1hBbGwfPlnkIPE3uQltfAzYPEeXDFXeEPp05MCevM9VsRnKsUNjW%2BCf15cy7jfUSawXMp5cDMV73FvI0MvUfYDsWamCqCg1Wjwh0VEAzPcN7MiwIe7N%2FAtbRbxS6dOgstOI5QotjyIl9UuVDrn%2BaC0YOxVgcAiheCm9d2yH%2BVygEkyxrYahLurfct%2BUDRoi7Oha930Z8nsw3vaOvgY6pgFTbyMA703QtLko7E0FOzGzrnNzPSAeLuevToJcqfUnM2SlcRD5pH98YtegtDNtn5BNd3OIadE%2FM8rzV8Uevu%2F81HSco8J%2FZbMGk5EYVVk542Spa0uyNSxz3Q3I%2FZG83uCjJ4OBBigQZfQAKqSSk9HYFTo2BijMvpuVR8qfR1MLb%2BD%2Fa1HCRYjUvdobkoX1jnxsxK6QVoEd2cPgS87RUCeSboQCuaIa&X-Amz-Signature=d26e46527cf1fa2a74e81019c2299459db1225421b2a118c0f1a9c9a3e75aa62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7A32MH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIAHUMwQ6zIjvu%2FqaoJokTZAK5IuP66zJEQPqXQa1TePLAiAxPpYaZJ8uRNjOLceGx8VJlFaNTPqmWtjLiZmV8SdhxCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMifPOuvJt40pYhCznKtwDMgVfvEt%2BtzyqfHnxtT5BtTmLY38%2FHkm87ZKyQEvJ%2BV9SrOhtYWelfnjb%2BsrqlcIIFz%2FRGfpqyX9RvQb73FtOv7j5kDNqKQ6uhawyyeJS24EqUTobwiFv1i5lRrXottY%2Bsf79OvSMlW2XwvIf%2B0458QL7tkD6LvVVHCyZwHD5bDGbh7av74w%2BSGf1kayE1XfggWz36SWGyyoCKqC%2Bx%2BWz04Wt6pErhf387xmGbIntyggOrbionVb6U17ofuMwejJGuWO2FiomPhUty3fiTC2%2F9VVP%2FP3LhcV%2FaaWlpOPQEjNAZagF%2FMMenwd2Zfr7nOnWtybRbHCWewqXLK%2FS7EotjZlqfS7misjkS51aWQLo6E2zRbunmXor2gC01J0OXA%2B%2Fo7lJ0a2eXklYALpTqHQLia6XkPUXNJP%2FiYpR0J%2FIo%2BBOBEylq1hBbGwfPlnkIPE3uQltfAzYPEeXDFXeEPp05MCevM9VsRnKsUNjW%2BCf15cy7jfUSawXMp5cDMV73FvI0MvUfYDsWamCqCg1Wjwh0VEAzPcN7MiwIe7N%2FAtbRbxS6dOgstOI5QotjyIl9UuVDrn%2BaC0YOxVgcAiheCm9d2yH%2BVygEkyxrYahLurfct%2BUDRoi7Oha930Z8nsw3vaOvgY6pgFTbyMA703QtLko7E0FOzGzrnNzPSAeLuevToJcqfUnM2SlcRD5pH98YtegtDNtn5BNd3OIadE%2FM8rzV8Uevu%2F81HSco8J%2FZbMGk5EYVVk542Spa0uyNSxz3Q3I%2FZG83uCjJ4OBBigQZfQAKqSSk9HYFTo2BijMvpuVR8qfR1MLb%2BD%2Fa1HCRYjUvdobkoX1jnxsxK6QVoEd2cPgS87RUCeSboQCuaIa&X-Amz-Signature=4db2903691c828f26c7bc53ce062106aff9422f9f4f32d276a6437632ea182f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
