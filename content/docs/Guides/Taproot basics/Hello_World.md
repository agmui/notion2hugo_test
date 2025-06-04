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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHIFM6I%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPmFx57MvuhkvdZBmJ0R9KwAj591reB7oX5dqdzGYtrwIgBsKuWYscrNJKGEgGe70J8oQA02VBzd8qjRQ97s6vUVgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHfbdqXKvyL%2Bf5%2F1XCrcAx29vzczomOy270rLlrEkxGGbfdpg6dJmck1M9hDXHLrYo97ApGeevFM7COhd0mo%2F861%2B9jVRWi7DwFFeS2AqkChY1ym05DNtlkVLvQzu465Htcyw2shS1%2F93uYhRhhoXe9KZ%2B%2B77pK0i77vWnuezctA3n7ElKmwaDMUkXxzasifCjoUZq1YO1N3BadrOlJkOXytRWYsn%2FJfyeoTGKDiFJVof1qt%2Fva9g7jlBKHbWlJfCIeW8r1Zu9aGnwJT0Q70t2%2BofmmG0qX3ctxVZwM2gV%2BkQbnqqpMW7mRVZZbWJYCMN30nzwkOryqgK82oPL8gQzuGYdEasTxo9GsyrgMFvsLqmjP1S5YnaTB73UrCwzqD180Dv7SRXQc%2FaUuNN%2BmY13aaGiTQCdJNHaG1Vt34UY9%2BIVepWJxOS2DjtDvfB5Ja%2BecImF5JHMW%2B4qygE12evtU39%2BJq5V%2FWi2sennjFu%2BEjnEwiMlS%2BUJcw%2FwdzlqIgCvAZQiqxAvBox2vb53BUy4HN2wG8NxyyDaI8P61wV9l1iMpPzQByfOIO8a4zoHT62EsKLJtty6rFAJjmoGi%2BnsxVLVFol3f%2F2oOUgeqL29o948ax%2BABpMAUIIY9chjhwMEtbqf5Jr6PLecuMMIGfgMIGOqUBlA3kDpg2Sn2HWogugIdObfxCdOY7rvibD0h%2BCVEgKDTac5%2FXg4o%2B7sDGwOkQxyIeRuq%2B9IksrYRWGOemyXzk5w7PX%2BVDys%2BW5S7NVqxrUTlaCZ6dijn43XJjs1RPuxujsK9HX4PgZoaalVCqQym3QuL%2F9Abw3gNLd8MRrfL%2Bvn8fkR%2BFzXCihjw2OD3x4sWLTBtxXkj3GcX7tnK7%2BE%2FeWJuiE2mI&X-Amz-Signature=d0fee259e841e32bd45d13a33d30e3f511176550946dd3f984551b25bb8228dd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHIFM6I%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCPmFx57MvuhkvdZBmJ0R9KwAj591reB7oX5dqdzGYtrwIgBsKuWYscrNJKGEgGe70J8oQA02VBzd8qjRQ97s6vUVgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHfbdqXKvyL%2Bf5%2F1XCrcAx29vzczomOy270rLlrEkxGGbfdpg6dJmck1M9hDXHLrYo97ApGeevFM7COhd0mo%2F861%2B9jVRWi7DwFFeS2AqkChY1ym05DNtlkVLvQzu465Htcyw2shS1%2F93uYhRhhoXe9KZ%2B%2B77pK0i77vWnuezctA3n7ElKmwaDMUkXxzasifCjoUZq1YO1N3BadrOlJkOXytRWYsn%2FJfyeoTGKDiFJVof1qt%2Fva9g7jlBKHbWlJfCIeW8r1Zu9aGnwJT0Q70t2%2BofmmG0qX3ctxVZwM2gV%2BkQbnqqpMW7mRVZZbWJYCMN30nzwkOryqgK82oPL8gQzuGYdEasTxo9GsyrgMFvsLqmjP1S5YnaTB73UrCwzqD180Dv7SRXQc%2FaUuNN%2BmY13aaGiTQCdJNHaG1Vt34UY9%2BIVepWJxOS2DjtDvfB5Ja%2BecImF5JHMW%2B4qygE12evtU39%2BJq5V%2FWi2sennjFu%2BEjnEwiMlS%2BUJcw%2FwdzlqIgCvAZQiqxAvBox2vb53BUy4HN2wG8NxyyDaI8P61wV9l1iMpPzQByfOIO8a4zoHT62EsKLJtty6rFAJjmoGi%2BnsxVLVFol3f%2F2oOUgeqL29o948ax%2BABpMAUIIY9chjhwMEtbqf5Jr6PLecuMMIGfgMIGOqUBlA3kDpg2Sn2HWogugIdObfxCdOY7rvibD0h%2BCVEgKDTac5%2FXg4o%2B7sDGwOkQxyIeRuq%2B9IksrYRWGOemyXzk5w7PX%2BVDys%2BW5S7NVqxrUTlaCZ6dijn43XJjs1RPuxujsK9HX4PgZoaalVCqQym3QuL%2F9Abw3gNLd8MRrfL%2Bvn8fkR%2BFzXCihjw2OD3x4sWLTBtxXkj3GcX7tnK7%2BE%2FeWJuiE2mI&X-Amz-Signature=8fa52a4481568c828188ca71c9973f09f9923a1f0b7bb12c77f88ba8a30987c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
