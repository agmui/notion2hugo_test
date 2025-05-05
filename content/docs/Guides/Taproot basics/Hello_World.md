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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3S3KPY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFxk%2FA3kvuZJUJ%2BlvytC9yEh0YKQp0uk9WMR1FUXXS2NAiEAjr3mPKgtdwRF%2FArzOl6Hhc8h9O62LxoNRAjMwNXhsQwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBZ043ee1asag3KzOSrcA47j9HKPOuHIGb6N%2BMx0HtpIJq%2FiFd5jiXAxqjAPJSPGphKEe%2FePUos4z%2F5mKAy%2B88w4cOJmVxZ0P%2FT7dRK%2FUxkh6f0cufpp8ss%2FtlILbjSzJfv9ZSecep5DMn7Qo5LhSTgriEa4jE%2BspsIO8gHFXgbp7ty1Iixt%2Fd0nhYCSrVavZm9NgG14nqC19KNDuxn9L0QzK4oxHn1J7LPdUw92JjsolQu%2B71u4rf7nr732r%2FkymJIQbrp%2B2EgO6ZAzNj%2FXv5t%2FFuraAjCjBGQwC%2Fr4nHbY%2F7HOC7psPOj1Iwp%2FSqmKVr4e9JU2yx9lHCCN4lwFSoyqZt24LDYJbDkhM4XOITeSnyQXDfpftq%2FDG43el2iiIgVTYReowzFw2m7ABYjlMmHzvfoEbpegcTyQHp2Gl3v4P%2F5yImT8yHAC3xkDQCyli5hUnMC%2Bskr1j2gjDUQUjj9YuhkIubPA14yCc7xD8vrRtpkFfB02Y4EZK2T7j%2BqQyBe%2BlWh07gHUOLiSGcvIUtLZnKWANXzv%2FGE6Bj8z0VJ4yJgpNi%2F3MnNxox1NOw%2BhdU%2FT0lI1U%2BKUdWyFGVBqPzYlAOdAODO9K16ZNxG4iD3mr1CKC4z%2B8k1kv%2FVk%2BUZgZ699Fyg0kNTYyVoQMNnQ4MAGOqUBJYLrgHZT78A9m%2FW15s4PZ7jEM7TYf941Yz1u5O%2B%2Bqm36w%2FbGhdykAAEydPKLnYAYJWlcatpAIRG0h%2BZiw7heOpkqmr4N5piE2jooCpsu8CuuCXRICGs%2FezqBlhqK%2B83pjNAsOpouSFVOh9b60N6df6ko9EuflSEkPxr34K7YQZxqO%2B8AVAgBnXilL4UpSuaucpbZDMG0BSanAuKqd1JwECd%2Fywmn&X-Amz-Signature=db066c93bbc8dccc7b90a620d889dc4de297646ca2746fcce2223140d091bf91&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3S3KPY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFxk%2FA3kvuZJUJ%2BlvytC9yEh0YKQp0uk9WMR1FUXXS2NAiEAjr3mPKgtdwRF%2FArzOl6Hhc8h9O62LxoNRAjMwNXhsQwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBZ043ee1asag3KzOSrcA47j9HKPOuHIGb6N%2BMx0HtpIJq%2FiFd5jiXAxqjAPJSPGphKEe%2FePUos4z%2F5mKAy%2B88w4cOJmVxZ0P%2FT7dRK%2FUxkh6f0cufpp8ss%2FtlILbjSzJfv9ZSecep5DMn7Qo5LhSTgriEa4jE%2BspsIO8gHFXgbp7ty1Iixt%2Fd0nhYCSrVavZm9NgG14nqC19KNDuxn9L0QzK4oxHn1J7LPdUw92JjsolQu%2B71u4rf7nr732r%2FkymJIQbrp%2B2EgO6ZAzNj%2FXv5t%2FFuraAjCjBGQwC%2Fr4nHbY%2F7HOC7psPOj1Iwp%2FSqmKVr4e9JU2yx9lHCCN4lwFSoyqZt24LDYJbDkhM4XOITeSnyQXDfpftq%2FDG43el2iiIgVTYReowzFw2m7ABYjlMmHzvfoEbpegcTyQHp2Gl3v4P%2F5yImT8yHAC3xkDQCyli5hUnMC%2Bskr1j2gjDUQUjj9YuhkIubPA14yCc7xD8vrRtpkFfB02Y4EZK2T7j%2BqQyBe%2BlWh07gHUOLiSGcvIUtLZnKWANXzv%2FGE6Bj8z0VJ4yJgpNi%2F3MnNxox1NOw%2BhdU%2FT0lI1U%2BKUdWyFGVBqPzYlAOdAODO9K16ZNxG4iD3mr1CKC4z%2B8k1kv%2FVk%2BUZgZ699Fyg0kNTYyVoQMNnQ4MAGOqUBJYLrgHZT78A9m%2FW15s4PZ7jEM7TYf941Yz1u5O%2B%2Bqm36w%2FbGhdykAAEydPKLnYAYJWlcatpAIRG0h%2BZiw7heOpkqmr4N5piE2jooCpsu8CuuCXRICGs%2FezqBlhqK%2B83pjNAsOpouSFVOh9b60N6df6ko9EuflSEkPxr34K7YQZxqO%2B8AVAgBnXilL4UpSuaucpbZDMG0BSanAuKqd1JwECd%2Fywmn&X-Amz-Signature=af656ba39691a391ee2ef7f6d24b777a097006d36379a89fdb28ab55b913b422&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
