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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB6OJQL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKJCpLH3BPpjQZz2RLky6NXPcsQo2XDDaXvvi7Zjv0lwIhALXkZYdf6T0z4%2Fzm9Fi%2F7KB6O1P6r8K%2F65bW%2BtwtR3pmKv8DCEIQABoMNjM3NDIzMTgzODA1IgyG5n1KQiOA8yIUIrYq3AOUUyZb8gYb0Ekke3QIqNuHNT3VilSNoH%2Fw74wEN%2Fw0tqwGY5Zc2PVkVhfIWxEiZw8%2FW4WHa2G0p2AUkDk4E6EXOm%2FJWSni%2FU8%2FpoDNFEUPHkU6LGAbmEJDJiVFWQmWI1Q72JtTMHC6UBAfEALBHSyhcfBvRAsM4o%2BEjm1NKe%2FJJshukQ3uWaUJKYJzgiU9yXSbOvydII9gg2hNYa239r6if6q%2F%2BtFIeJDux0GoItFQdYBDmFcDt5SxsZUSt%2Ffz0t4xYGNqlVSK6MDKy5tUqcAQGwv5xBEMVtAK8LopGHgI9zw%2FnjPYDOGzfAzp19sPbUu8mXg4c%2BJY460ycAHmpFcsHpYXNGkfoGoZil%2F4T8V6eP2%2BT1mfESqjA4ONxOyRtl4dODFDueb9eY8WBtIWzs0Moa8VnXvADrkUTnl%2Bq25j4y6TjJOCh6BP1kbk1kQLPLYyIqhRzyLNQFlF79yOzObnGVTz8Lm4KA9X6V3Oug1NMx5jfujFwIAvsLu2grujkjyBaUSeyU202XWGxp8Y5xtb2mcFpM7ZPkLznBMzzXASf0XqvgBn3Nh6ooDnovDEkT3HC1yu6nlClKQfPMiLE02n9xEdmLmqFEgm%2Fh6SnR9T2Q0C%2BMkHvLlXTeZqCzCjroXCBjqkAVT12%2B%2F6p0MoNX0vt%2BMPVwNoh8PEm6xXlUHK1vLerypxS03LZj4JN7y%2F4kWPFdbm%2BMX5gcqv0IKx4v6YksV3rCm73anw8g3%2BhDn9%2BYCmtZziYX%2BfUkAhk%2FdDjBgdv%2F8j6aRAvDUWpEz5tNjcyckY72aW5sCnlHFQBk%2BVr4c8x%2FJ%2FdHagPtoF2H45q6ZHFJhwIJLOdidaidqmKjunr1ABw9c%2F8ims&X-Amz-Signature=5d2cbd99eee96a9fecff80aca1c02aea38003f7db6c9168834c3fdc93ad6411f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB6OJQL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDKJCpLH3BPpjQZz2RLky6NXPcsQo2XDDaXvvi7Zjv0lwIhALXkZYdf6T0z4%2Fzm9Fi%2F7KB6O1P6r8K%2F65bW%2BtwtR3pmKv8DCEIQABoMNjM3NDIzMTgzODA1IgyG5n1KQiOA8yIUIrYq3AOUUyZb8gYb0Ekke3QIqNuHNT3VilSNoH%2Fw74wEN%2Fw0tqwGY5Zc2PVkVhfIWxEiZw8%2FW4WHa2G0p2AUkDk4E6EXOm%2FJWSni%2FU8%2FpoDNFEUPHkU6LGAbmEJDJiVFWQmWI1Q72JtTMHC6UBAfEALBHSyhcfBvRAsM4o%2BEjm1NKe%2FJJshukQ3uWaUJKYJzgiU9yXSbOvydII9gg2hNYa239r6if6q%2F%2BtFIeJDux0GoItFQdYBDmFcDt5SxsZUSt%2Ffz0t4xYGNqlVSK6MDKy5tUqcAQGwv5xBEMVtAK8LopGHgI9zw%2FnjPYDOGzfAzp19sPbUu8mXg4c%2BJY460ycAHmpFcsHpYXNGkfoGoZil%2F4T8V6eP2%2BT1mfESqjA4ONxOyRtl4dODFDueb9eY8WBtIWzs0Moa8VnXvADrkUTnl%2Bq25j4y6TjJOCh6BP1kbk1kQLPLYyIqhRzyLNQFlF79yOzObnGVTz8Lm4KA9X6V3Oug1NMx5jfujFwIAvsLu2grujkjyBaUSeyU202XWGxp8Y5xtb2mcFpM7ZPkLznBMzzXASf0XqvgBn3Nh6ooDnovDEkT3HC1yu6nlClKQfPMiLE02n9xEdmLmqFEgm%2Fh6SnR9T2Q0C%2BMkHvLlXTeZqCzCjroXCBjqkAVT12%2B%2F6p0MoNX0vt%2BMPVwNoh8PEm6xXlUHK1vLerypxS03LZj4JN7y%2F4kWPFdbm%2BMX5gcqv0IKx4v6YksV3rCm73anw8g3%2BhDn9%2BYCmtZziYX%2BfUkAhk%2FdDjBgdv%2F8j6aRAvDUWpEz5tNjcyckY72aW5sCnlHFQBk%2BVr4c8x%2FJ%2FdHagPtoF2H45q6ZHFJhwIJLOdidaidqmKjunr1ABw9c%2F8ims&X-Amz-Signature=41a2793002f55d509a77538a2cae5412c7053e4b7dfe094f0a543050043afbff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
