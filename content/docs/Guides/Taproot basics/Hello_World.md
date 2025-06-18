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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVDY4F4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcSFJ%2FgesMRw90tWvlYrch6iA8DdnIg7Hw3jyzH%2FwT0AiA%2B9sRDxOdOmlZUUxz7tV0ONeWORwCbIkAksfgovn7AGCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FMVrNqI5uVBrv8sKtwDPhmufpNICBZ61c8pgieGMUWlP%2FaTqLs1tQvcwQiNAbtZWxscm6dRPOEVFynKZOfWiYpO1NsuLqn4LhGAEuxNgrj2dhnIvtVJe13tB0lth2MfaTo2snb9inRBrfNfEBiIve7sR7BVzjlb%2Be%2BCz47Fnfj%2FZRWvYNJvtV0ysuzvEDKu7HHCjRNH%2FjjCMiGlXvO3lmJf70tTYis6aTyOV0z4LYzX8fs2gkDEXM94xeDDpoiEiJ1AUz7K39%2BcRzHLiQkBKP0%2B7en0R9RrYm%2B12kwGrswlkjXVsiaZA6mISUbKQMvxpwbqEz1rNjw%2F7fWdMTUQPmoWqsVXDV%2BKUQBKyJw%2BRUFY8lSGitboFbUE%2B%2FiTT7MbWdHmPsimysjUQ2iTUJZhDJiLkV1yxKkhUytKy5QtAdhvuV4kZHS7otvfDU2x13zBq2Yp0%2Fd70TV3TtqsAJrBmNr9b2pK%2BxR0I%2FCuhDqz3OJwTfS0oKyLgAVQJzv5lKbtWLrR7I0OHK3Hf31vxjk4bHhoTiiV5ETcdOM%2FZiZ2ckjpaexLkrWHaehCdpt8CjXJv4TPjwkdm0QRNobUXduj%2FD1GtngbmcNbh7xB9VH%2F%2FcZlNAvXPBUP1wlbaWhb%2Fi9r%2B%2BDBIKBvxC%2FKrsAw39XJwgY6pgFbTqvf8f28WANj8QSFy%2FxtUZ9AIJy3p9B%2BrXkDN5vaBuEi5PZ24n6QVb2AcrhRszNiyJccmMOMEjDDfbUseSL7hKp2f%2FtPVKipmGOHht%2Fs0uuNjvB9YJrKWY5tBStyvy%2FW2TvG%2FK%2BSu%2Fk9ljBzlLGeOqF761xMBkbwRlMEkh0OwW3kRAFY5sy8PhhcwwgOwT9970QkpKvAfMboZwFsxKmVwub7dkfi&X-Amz-Signature=c30e7c804fe312405a9601cdab26f619d4fcf3780233c69e949e1489c7990640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVDY4F4%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcSFJ%2FgesMRw90tWvlYrch6iA8DdnIg7Hw3jyzH%2FwT0AiA%2B9sRDxOdOmlZUUxz7tV0ONeWORwCbIkAksfgovn7AGCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FMVrNqI5uVBrv8sKtwDPhmufpNICBZ61c8pgieGMUWlP%2FaTqLs1tQvcwQiNAbtZWxscm6dRPOEVFynKZOfWiYpO1NsuLqn4LhGAEuxNgrj2dhnIvtVJe13tB0lth2MfaTo2snb9inRBrfNfEBiIve7sR7BVzjlb%2Be%2BCz47Fnfj%2FZRWvYNJvtV0ysuzvEDKu7HHCjRNH%2FjjCMiGlXvO3lmJf70tTYis6aTyOV0z4LYzX8fs2gkDEXM94xeDDpoiEiJ1AUz7K39%2BcRzHLiQkBKP0%2B7en0R9RrYm%2B12kwGrswlkjXVsiaZA6mISUbKQMvxpwbqEz1rNjw%2F7fWdMTUQPmoWqsVXDV%2BKUQBKyJw%2BRUFY8lSGitboFbUE%2B%2FiTT7MbWdHmPsimysjUQ2iTUJZhDJiLkV1yxKkhUytKy5QtAdhvuV4kZHS7otvfDU2x13zBq2Yp0%2Fd70TV3TtqsAJrBmNr9b2pK%2BxR0I%2FCuhDqz3OJwTfS0oKyLgAVQJzv5lKbtWLrR7I0OHK3Hf31vxjk4bHhoTiiV5ETcdOM%2FZiZ2ckjpaexLkrWHaehCdpt8CjXJv4TPjwkdm0QRNobUXduj%2FD1GtngbmcNbh7xB9VH%2F%2FcZlNAvXPBUP1wlbaWhb%2Fi9r%2B%2BDBIKBvxC%2FKrsAw39XJwgY6pgFbTqvf8f28WANj8QSFy%2FxtUZ9AIJy3p9B%2BrXkDN5vaBuEi5PZ24n6QVb2AcrhRszNiyJccmMOMEjDDfbUseSL7hKp2f%2FtPVKipmGOHht%2Fs0uuNjvB9YJrKWY5tBStyvy%2FW2TvG%2FK%2BSu%2Fk9ljBzlLGeOqF761xMBkbwRlMEkh0OwW3kRAFY5sy8PhhcwwgOwT9970QkpKvAfMboZwFsxKmVwub7dkfi&X-Amz-Signature=cb48a0306ea71b9f6a46a3c398f22dff1c921039cdd49395c20d516523ed596a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
