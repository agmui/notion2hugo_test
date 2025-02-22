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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIIGVOV7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEekMoD8VGjeA%2FDUfJP1fHfiNFyzkC9Ua%2FsFsB0N%2Bm%2BSAiEA8Bm%2BwgCyzzlH9iJY4mMWtxKmJgYEJOj5VTeEk%2FnIiLoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgY4xRuvkN05uifPircA%2BV3TdP6ZINuZsGoNQXrizKjHWap%2FgY1KcWYePJyqOewSwUXp8o7%2BICt03tVDSdykf4ugyTuuL6EAXxIltiNhS7ap8Nv8iZ3tnRMKHmDCvqMUVRL%2B2Zrpjh8nkecTAeSw%2BKEu%2FGY%2F0dS2%2Bh26sqTkJaoOwswuW4WHRFIdNVUzbchIFM0XMP6YCvNQUuFQBGUxvIv8rsoEileHaoLc5SOnfB7%2BtARxcksT7m5wm5J1kR%2Fn0YkVIWsHn0RxLCh34cC065LNwIScvKxUU%2BIKrCzuroc6ASBP3SqDVW9mvUV085r%2BpAu5aLmz7bphl6LmjpCDE7zDaMqSz6itwdEpDS7z9KjrXa1d4pTQOzTmhkSUHA3g3Ro3bXU5fix8BCtjEPVPYyqowAKquHIj1%2B9CB5hTTf4quQuqcNNdFZA8KFmGqSIOVJr9vIjGYknJ3qF%2BoCeo6AuaM%2BehvgNA%2F0q0VhcU0W1m7646jdRqWbvMD%2FnQ3L7mcTt0r5y69eKW%2BB3OGmqbOL%2BQtxYIV2MwSfuDdlotRJGt0x2XbqXgk%2BJFr1I2JOVvJMxjBdTGXZTzek4Yp3rBtI0R8CW5Woeek9lGBuCtPeDGo%2F3g4eWYRky4P9gmKkaHjO%2BVB5T8XBna4VWMNHp5r0GOqUBp%2B44HWp%2FH7%2FraONbociNO0mKXPfHlg6VhDirPITin0dwViNUdCA8HMgmnAeMR5e%2BJPqN8c2hfrhAFI9729PS8z8oifj3MPk2ijq6m%2B%2FziF4ROSdZo4VyTgZ3DP%2FmGxvIepgo%2BBJWeA3j1bwfT3uwu6jb6U7LAOaTYpmt7W7JDh9tvBei4yyLgqkrcFjZ7eH7jr9exc6N5phvlh9F6emScpV34tKg&X-Amz-Signature=008fb3ea158653eff4b1d35fcfe635f668e3b526840872063f06792d6cee54d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIIGVOV7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEekMoD8VGjeA%2FDUfJP1fHfiNFyzkC9Ua%2FsFsB0N%2Bm%2BSAiEA8Bm%2BwgCyzzlH9iJY4mMWtxKmJgYEJOj5VTeEk%2FnIiLoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgY4xRuvkN05uifPircA%2BV3TdP6ZINuZsGoNQXrizKjHWap%2FgY1KcWYePJyqOewSwUXp8o7%2BICt03tVDSdykf4ugyTuuL6EAXxIltiNhS7ap8Nv8iZ3tnRMKHmDCvqMUVRL%2B2Zrpjh8nkecTAeSw%2BKEu%2FGY%2F0dS2%2Bh26sqTkJaoOwswuW4WHRFIdNVUzbchIFM0XMP6YCvNQUuFQBGUxvIv8rsoEileHaoLc5SOnfB7%2BtARxcksT7m5wm5J1kR%2Fn0YkVIWsHn0RxLCh34cC065LNwIScvKxUU%2BIKrCzuroc6ASBP3SqDVW9mvUV085r%2BpAu5aLmz7bphl6LmjpCDE7zDaMqSz6itwdEpDS7z9KjrXa1d4pTQOzTmhkSUHA3g3Ro3bXU5fix8BCtjEPVPYyqowAKquHIj1%2B9CB5hTTf4quQuqcNNdFZA8KFmGqSIOVJr9vIjGYknJ3qF%2BoCeo6AuaM%2BehvgNA%2F0q0VhcU0W1m7646jdRqWbvMD%2FnQ3L7mcTt0r5y69eKW%2BB3OGmqbOL%2BQtxYIV2MwSfuDdlotRJGt0x2XbqXgk%2BJFr1I2JOVvJMxjBdTGXZTzek4Yp3rBtI0R8CW5Woeek9lGBuCtPeDGo%2F3g4eWYRky4P9gmKkaHjO%2BVB5T8XBna4VWMNHp5r0GOqUBp%2B44HWp%2FH7%2FraONbociNO0mKXPfHlg6VhDirPITin0dwViNUdCA8HMgmnAeMR5e%2BJPqN8c2hfrhAFI9729PS8z8oifj3MPk2ijq6m%2B%2FziF4ROSdZo4VyTgZ3DP%2FmGxvIepgo%2BBJWeA3j1bwfT3uwu6jb6U7LAOaTYpmt7W7JDh9tvBei4yyLgqkrcFjZ7eH7jr9exc6N5phvlh9F6emScpV34tKg&X-Amz-Signature=d394983d2001f9117767c0ab36be29329f8cc3fba76997053bb51139b072db41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
