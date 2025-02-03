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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHY6I4P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8CWr%2BQdSba%2BNPn1JuEnkIKriUgPOZ81HCakRGxG7ZLAIgDfLoT1gtTJhA2pqIIjTf4WgeRL8jzBjy0F%2BpDrmcqxAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZN7zqiOKWHevQ5hSrcA7f0VCk00AvdP52nXfaxa%2BPGJvKTWSY76VjOUhT2IoIJFIIKMuc3j2RAZfNpyn%2FlgFVAx%2BKxGOfrUVpi%2FjGN0FCaHSqDHgKpkUTnRd%2FKCN304mBl1acEM5C3KaLmvu3qLPH%2FBOwgG4olN7RxOq8wyWAyW3tIySXFBffpxn3pWAJrMT01R4TlNSwhit11tHfaAvwxjIxTMulLcg1HBzg2I8mhV775LOGR63191OJjETlAAk4Nc7WGCvjmM%2BSyNgwgdf%2BOkGif%2BEPck1CzSYeVTPF0AibTecdUVvkgpWV2BCv7WBwXHNcWISQLOMbGUCulaxqZqF%2FYhj4Z1NdYC22T3ZUVbHHVAODryyeY3r2eWMkDFwhxFanNM5a81ffCUJN7MPnPHHEKQH%2FHRZrIS0VzIZvwUMXxylZg90gykSSl0K4ct6kTW%2F%2FUHgwkrZOVd4CmOAAl8SCK4PIoLWVTw2ATi1%2BrEpmbmPWxF3OsrW1bvEJh%2F0TJPvGpn%2BqID68Ylso%2B%2FSB33KXkKgAD4gN69v%2FNRZMK0BLoOsmE%2BxkPT7KrSgxiIOnjXG6v5wGQP4XtQHFyM%2Bp12%2FJnWa2zfsA5FZ5tu0qgkZcYyD8XaudVmENmvFMxQDRi3%2BEOKhL9f4FXMMnAgL0GOqUBLxl%2By8O287TzHOTJlLVfhnm2PCNHoXZzYbKUaIKO4Nt%2FnNd6xyDlYLT%2FNWk800VRn4ahk0PGx6TV7B4EKNIxtuftT3dTFlh5dlKba3t3Jg6%2FCGAPOfMDCUR08Fjd2u04e%2F3bJygS6VWuGYniBZbldewPcw34KhAIztniUAa97qpy9hlP8SsLCUD6GGQHYR6X0w7R35yfFzC3YgLoS8RnAoLJtd4l&X-Amz-Signature=e135befcd3ce39cb31b9e65c36aad9d6a56429bb4b9fcd53b2dad6bcec452fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPHY6I4P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8CWr%2BQdSba%2BNPn1JuEnkIKriUgPOZ81HCakRGxG7ZLAIgDfLoT1gtTJhA2pqIIjTf4WgeRL8jzBjy0F%2BpDrmcqxAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZN7zqiOKWHevQ5hSrcA7f0VCk00AvdP52nXfaxa%2BPGJvKTWSY76VjOUhT2IoIJFIIKMuc3j2RAZfNpyn%2FlgFVAx%2BKxGOfrUVpi%2FjGN0FCaHSqDHgKpkUTnRd%2FKCN304mBl1acEM5C3KaLmvu3qLPH%2FBOwgG4olN7RxOq8wyWAyW3tIySXFBffpxn3pWAJrMT01R4TlNSwhit11tHfaAvwxjIxTMulLcg1HBzg2I8mhV775LOGR63191OJjETlAAk4Nc7WGCvjmM%2BSyNgwgdf%2BOkGif%2BEPck1CzSYeVTPF0AibTecdUVvkgpWV2BCv7WBwXHNcWISQLOMbGUCulaxqZqF%2FYhj4Z1NdYC22T3ZUVbHHVAODryyeY3r2eWMkDFwhxFanNM5a81ffCUJN7MPnPHHEKQH%2FHRZrIS0VzIZvwUMXxylZg90gykSSl0K4ct6kTW%2F%2FUHgwkrZOVd4CmOAAl8SCK4PIoLWVTw2ATi1%2BrEpmbmPWxF3OsrW1bvEJh%2F0TJPvGpn%2BqID68Ylso%2B%2FSB33KXkKgAD4gN69v%2FNRZMK0BLoOsmE%2BxkPT7KrSgxiIOnjXG6v5wGQP4XtQHFyM%2Bp12%2FJnWa2zfsA5FZ5tu0qgkZcYyD8XaudVmENmvFMxQDRi3%2BEOKhL9f4FXMMnAgL0GOqUBLxl%2By8O287TzHOTJlLVfhnm2PCNHoXZzYbKUaIKO4Nt%2FnNd6xyDlYLT%2FNWk800VRn4ahk0PGx6TV7B4EKNIxtuftT3dTFlh5dlKba3t3Jg6%2FCGAPOfMDCUR08Fjd2u04e%2F3bJygS6VWuGYniBZbldewPcw34KhAIztniUAa97qpy9hlP8SsLCUD6GGQHYR6X0w7R35yfFzC3YgLoS8RnAoLJtd4l&X-Amz-Signature=273f9402ab9624483f7d31613243fc79e30c4348f1c84ebd0b62ce5ca82a4099&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
