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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKQEF2B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2JopKJtiCJTxscMYG5gF2GyyFkKnFWNMU%2BqTl7ZgJ4AIhAPezZSK1tmRbdTTJIkxxlP0IiSNLFStXGp9BKkS5UAT%2FKv8DCFYQABoMNjM3NDIzMTgzODA1Igz5GAitwdiH759y1fMq3AP9utOuZ2WibaQEwaJQ4xCKsAHnZSMgIJH3yBKZ3qg32GO1fZFz%2F29j%2FLLilVNFfjUw41WxZgEtH0IMCrCM42N8QhxKLIiauKWzvJGTwCW%2FCLKlATGa2wzbekZhY3%2BBKtdep4BwQFenf6TU4Gjh8U%2FLgChCe7dc28xKLkAA0fy%2BcVh9%2F04WwBsj3pvHdrT2k9DRp8494ucbevA4Ew%2FZ2Q2rgZHZcNHnGn2EVgbUh8HpbCh4J4l9NNxN%2Fl1ue6%2BgWPX3598C9vmkoqtBE5RM3%2FFl84XzYrGcL9pZcZ3A7XVmUHE1OfnPjpyYAeA3WQeiVnn7i0RNtOt4mwTkNLoF8hFyxsdOuDlpWL09TmLuvEmduSjZETNwdjHQEt3WYZjKSKarK%2BT5UHFFuqKIzh%2FGNIhrzlth5dXLKy0Zymb9dC3BV1MOu93%2FlJzkgsVVhzNZAfekMMTcII56vcrC%2B6l5Rs7wTPRDa1uKC1y1ywBcxSfz7AQvNM6N1nGc2Cs9ictqCb4auGbA6NZm3EQUtDo3K6ouAnQx395FSPAWCXhXBIYKJkZHKCBVOGMke2MfU70ehxwu25YbsQelyAZ5Q6YAjLbK7J91V4E%2F%2BkjwHM8yGs3TC8A7JI8Bg9kzuocWJjCylILABjqkATjTNbWJtpBvv0OHbMopIvzX37Om%2BQ%2By193fgBwrqDmBSClpeMm%2F3eWi3agMjjEqXg03dFMPSgWsbal%2FoDaujlt1ZoiCW%2B4nTX%2FfR%2Bx3gb8M%2FEH8Mst8VbSRerFj5Khlrx0VZhDdWzSs%2FWKkHBddBtinl5EiABD72L0ymZBXJVfxJJn4W%2Bq4MA9WuGv5%2FMq9aU71susecrOu4A18BpKnJEMa%2F4za&X-Amz-Signature=60a970ea62d7accf96dc7b729ca84e507ab33298803ad750985b32d6f666fcee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKQEF2B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2JopKJtiCJTxscMYG5gF2GyyFkKnFWNMU%2BqTl7ZgJ4AIhAPezZSK1tmRbdTTJIkxxlP0IiSNLFStXGp9BKkS5UAT%2FKv8DCFYQABoMNjM3NDIzMTgzODA1Igz5GAitwdiH759y1fMq3AP9utOuZ2WibaQEwaJQ4xCKsAHnZSMgIJH3yBKZ3qg32GO1fZFz%2F29j%2FLLilVNFfjUw41WxZgEtH0IMCrCM42N8QhxKLIiauKWzvJGTwCW%2FCLKlATGa2wzbekZhY3%2BBKtdep4BwQFenf6TU4Gjh8U%2FLgChCe7dc28xKLkAA0fy%2BcVh9%2F04WwBsj3pvHdrT2k9DRp8494ucbevA4Ew%2FZ2Q2rgZHZcNHnGn2EVgbUh8HpbCh4J4l9NNxN%2Fl1ue6%2BgWPX3598C9vmkoqtBE5RM3%2FFl84XzYrGcL9pZcZ3A7XVmUHE1OfnPjpyYAeA3WQeiVnn7i0RNtOt4mwTkNLoF8hFyxsdOuDlpWL09TmLuvEmduSjZETNwdjHQEt3WYZjKSKarK%2BT5UHFFuqKIzh%2FGNIhrzlth5dXLKy0Zymb9dC3BV1MOu93%2FlJzkgsVVhzNZAfekMMTcII56vcrC%2B6l5Rs7wTPRDa1uKC1y1ywBcxSfz7AQvNM6N1nGc2Cs9ictqCb4auGbA6NZm3EQUtDo3K6ouAnQx395FSPAWCXhXBIYKJkZHKCBVOGMke2MfU70ehxwu25YbsQelyAZ5Q6YAjLbK7J91V4E%2F%2BkjwHM8yGs3TC8A7JI8Bg9kzuocWJjCylILABjqkATjTNbWJtpBvv0OHbMopIvzX37Om%2BQ%2By193fgBwrqDmBSClpeMm%2F3eWi3agMjjEqXg03dFMPSgWsbal%2FoDaujlt1ZoiCW%2B4nTX%2FfR%2Bx3gb8M%2FEH8Mst8VbSRerFj5Khlrx0VZhDdWzSs%2FWKkHBddBtinl5EiABD72L0ymZBXJVfxJJn4W%2Bq4MA9WuGv5%2FMq9aU71susecrOu4A18BpKnJEMa%2F4za&X-Amz-Signature=4f5c75aa832418e6868109023dba0811b1c2be1e8ff3602881d746a858da5c87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
