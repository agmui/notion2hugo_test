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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYBAMO4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDVRb%2FX88HcS307fZFDHTXTHFpe%2BC7o73KZDyiRL6LYUwIgRptZA%2BqGGmeFGNOMC1fcV7xdgARpfulrh2ez3WTaWzIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDF1OnVeRXoC0fGt5iCrcAyOMHTV9hri9RU0hNAyHP%2FYQj5RoMZqoYacKsKdCWl5NLYW%2Bqvr0dSCWD%2BxYCy47dO4EUDFQHpUCrPsFucRUww5AuXTrCbAajJ1mFpbdJFflwFpBMQEkiFdD%2BBgDNHiQqIly%2FTOJ0lfl9kMWZUy%2BN4B045Obp1OfZbPg%2F1kbWKYOZK7tGvW0Kx82yffb%2FkGzHTfY8BwYN7rXg73t5iqXKVKIEr42v4dCXt6p%2BUy8ENSTeAegSlZ%2Bd8%2BgO66wI1sVUDuZ2d%2FTrCW0o8JK5LxbxqPQdU7qCxUMkXDevbwMccO9ggDlVOvCiWJEh3WVSPw3plX9biv5MMT9QLkMHyPJHdoNNuudlcUTlFi%2BBoCWB5q5XcvreM8bzJ0%2Bo%2FMmx8Aqrdg46SibeszzpNdxQ850TSk%2BqKpbFbFviKrtM8iXCyW%2BTa0rpz2x%2FJYoFvg%2FZkF%2BPhE%2FRXdvW3uP8KM%2Fl%2B2zkjzOMfRVKYXINGtQrdEhvbNXxq4Y%2BugVYsNtoRbteTrd2PCNthM6fptM79lUnAbNaDG1AwDpZnt8DZB1MXuXeR%2FYLu%2F72vdPu%2Fi%2BUDGXuVp6uevV%2Bld1%2BX0yJ8%2F148XSHemOo6GtL3nk93RnbQXESl7dfFZcoBXbjT9TndDyMM6h98IGOqUB7SZ1GuezlyQ1RrofSwSN4UCvKGrVhGx2Sq1dbUw81HYfK6cgQ%2BsQYXGr4nGNCExcMkRyRQwDYbPamGw30In7u8HiLqDdETu7eRQ5ZVDSMhgh%2FdK4nab%2BQjigKDEULqQHr%2FfTcECKql921RAY7ns%2FAc15YxJ4efBy40vy7P6hiT0hsWQJjhS7jFEKUTL8vt0NjMqWweFPXsYJkH%2FnY377gHr%2FZliT&X-Amz-Signature=3cd8e7fda0ae6a4046c9ad7df1ebe38b54c6f70deeeba1739799e5a610f15228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYBAMO4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDVRb%2FX88HcS307fZFDHTXTHFpe%2BC7o73KZDyiRL6LYUwIgRptZA%2BqGGmeFGNOMC1fcV7xdgARpfulrh2ez3WTaWzIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDF1OnVeRXoC0fGt5iCrcAyOMHTV9hri9RU0hNAyHP%2FYQj5RoMZqoYacKsKdCWl5NLYW%2Bqvr0dSCWD%2BxYCy47dO4EUDFQHpUCrPsFucRUww5AuXTrCbAajJ1mFpbdJFflwFpBMQEkiFdD%2BBgDNHiQqIly%2FTOJ0lfl9kMWZUy%2BN4B045Obp1OfZbPg%2F1kbWKYOZK7tGvW0Kx82yffb%2FkGzHTfY8BwYN7rXg73t5iqXKVKIEr42v4dCXt6p%2BUy8ENSTeAegSlZ%2Bd8%2BgO66wI1sVUDuZ2d%2FTrCW0o8JK5LxbxqPQdU7qCxUMkXDevbwMccO9ggDlVOvCiWJEh3WVSPw3plX9biv5MMT9QLkMHyPJHdoNNuudlcUTlFi%2BBoCWB5q5XcvreM8bzJ0%2Bo%2FMmx8Aqrdg46SibeszzpNdxQ850TSk%2BqKpbFbFviKrtM8iXCyW%2BTa0rpz2x%2FJYoFvg%2FZkF%2BPhE%2FRXdvW3uP8KM%2Fl%2B2zkjzOMfRVKYXINGtQrdEhvbNXxq4Y%2BugVYsNtoRbteTrd2PCNthM6fptM79lUnAbNaDG1AwDpZnt8DZB1MXuXeR%2FYLu%2F72vdPu%2Fi%2BUDGXuVp6uevV%2Bld1%2BX0yJ8%2F148XSHemOo6GtL3nk93RnbQXESl7dfFZcoBXbjT9TndDyMM6h98IGOqUB7SZ1GuezlyQ1RrofSwSN4UCvKGrVhGx2Sq1dbUw81HYfK6cgQ%2BsQYXGr4nGNCExcMkRyRQwDYbPamGw30In7u8HiLqDdETu7eRQ5ZVDSMhgh%2FdK4nab%2BQjigKDEULqQHr%2FfTcECKql921RAY7ns%2FAc15YxJ4efBy40vy7P6hiT0hsWQJjhS7jFEKUTL8vt0NjMqWweFPXsYJkH%2FnY377gHr%2FZliT&X-Amz-Signature=d7d4be636d0c219de21bf9ff07f047d834e89e80729ddb4a5aea8456bc01fa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
