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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYV7KPX6%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBOpvkyLKOW%2F783PfG5jLDKju0XUYA7IZGEsykedy6jwAiEA2evp4SQzP8y4Uv%2FA1L88NXxHPOxYcPA5oJDooGEk%2F%2BEq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFThqPO26ZJEzpk%2FJCrcA05WXOICy%2F4Ey%2FveVbM9WdZIxtpWQPIYbG58DIAoa%2Ft9%2BBc2sVP62kQCbRHWkKIHoAJrp4BMdH5S6JJ42rJkKAjrqE3PwCY%2B0szJjRtbKVHPCABGd7DIaYf7FxjeyNpBHPuo923Z%2BjjsbtXvaaTW57liB6tNmY0ENnUZwq%2B2jxBCTdjXMp6SSQwBtPnvmq4nMsgGdljMAUen%2F6T7u0OosaKZlRT1XYZ6Yknx%2F2rmM986aZ0V0a%2BWv8OcK34GlJbBJNcXMdyeNnWqXtDMAULRiFovVJ4TUUvrtH32enjnwttwcRI%2B11THn8FdKEPIxvVd%2BLshmqRCAg0iq10iAlYSs%2B%2BiQdhKkaS3EE%2FW32gmzVazyX0sh2rZ3Q9XVb5SkRXK5YZuJ%2B2GuLZkb745ZBiFzWSmUY9zEFpN9DGXj1mUxlzSn40ylMPf9DwKx7nN%2FsiXIem1R8cpFzGFZBF83klKOrPjSaVceYXw1qujNvvGr84Z9bPBAI5rXFfjji4BjutWJbip9p7wcta1U3xSgZQpt6eOAvMIgI%2FPVmwiJpRE7bWe7eg0DSJvGrHwfCRhJKXVL1uVBYVTa9scfmOfirliOXpHpUjngUrOS5c7H07eaPjioYpjIVSATrjS2NmFMLek89AGOqUBiZQOVbH0DJ3pXFNsA7%2FlVAEulGfcl6hQzqsZ9qxn8oHxEQXKrNxvkzzMyru0DA3hpKwvdU1Q4Yl8CigMRYyptN%2BrOuPeXTOK30nePL9XAuqjLRIH4kXMIhcyHIT0VRangM%2BYa%2FQF5heMr3wuM%2FBE%2BeZvhT3V7%2BK%2FTMsZmvpkhF4fo5wVDPIZqV%2BUoUdz%2Fz9q3mqaQ64eSxbg8MGtzToaSBnkJHgN&X-Amz-Signature=4ea14f38386a41ececab976b7540fc67c61d33a71da9eed88a23a917fbe03867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYV7KPX6%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBOpvkyLKOW%2F783PfG5jLDKju0XUYA7IZGEsykedy6jwAiEA2evp4SQzP8y4Uv%2FA1L88NXxHPOxYcPA5oJDooGEk%2F%2BEq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDFThqPO26ZJEzpk%2FJCrcA05WXOICy%2F4Ey%2FveVbM9WdZIxtpWQPIYbG58DIAoa%2Ft9%2BBc2sVP62kQCbRHWkKIHoAJrp4BMdH5S6JJ42rJkKAjrqE3PwCY%2B0szJjRtbKVHPCABGd7DIaYf7FxjeyNpBHPuo923Z%2BjjsbtXvaaTW57liB6tNmY0ENnUZwq%2B2jxBCTdjXMp6SSQwBtPnvmq4nMsgGdljMAUen%2F6T7u0OosaKZlRT1XYZ6Yknx%2F2rmM986aZ0V0a%2BWv8OcK34GlJbBJNcXMdyeNnWqXtDMAULRiFovVJ4TUUvrtH32enjnwttwcRI%2B11THn8FdKEPIxvVd%2BLshmqRCAg0iq10iAlYSs%2B%2BiQdhKkaS3EE%2FW32gmzVazyX0sh2rZ3Q9XVb5SkRXK5YZuJ%2B2GuLZkb745ZBiFzWSmUY9zEFpN9DGXj1mUxlzSn40ylMPf9DwKx7nN%2FsiXIem1R8cpFzGFZBF83klKOrPjSaVceYXw1qujNvvGr84Z9bPBAI5rXFfjji4BjutWJbip9p7wcta1U3xSgZQpt6eOAvMIgI%2FPVmwiJpRE7bWe7eg0DSJvGrHwfCRhJKXVL1uVBYVTa9scfmOfirliOXpHpUjngUrOS5c7H07eaPjioYpjIVSATrjS2NmFMLek89AGOqUBiZQOVbH0DJ3pXFNsA7%2FlVAEulGfcl6hQzqsZ9qxn8oHxEQXKrNxvkzzMyru0DA3hpKwvdU1Q4Yl8CigMRYyptN%2BrOuPeXTOK30nePL9XAuqjLRIH4kXMIhcyHIT0VRangM%2BYa%2FQF5heMr3wuM%2FBE%2BeZvhT3V7%2BK%2FTMsZmvpkhF4fo5wVDPIZqV%2BUoUdz%2Fz9q3mqaQ64eSxbg8MGtzToaSBnkJHgN&X-Amz-Signature=5aee9b0e7e51112b7d0d68ae1386bebcbc1ce16a3d4d12d357df53250f0330e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
