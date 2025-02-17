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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWNK2YN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCwNIZ4RCZSgZKiWsp6zOoSqVKMJB7hQOhebCkvO74kfAIgYqPWOJkiHBRTHTKapwY63CfmsAYtcsG1fy3WfH2%2F7Ywq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIrsMu5fdVMSH72xcyrcA8PTD76f9hnvBZNm4RZU1dEgIU4wU%2FqGP%2FGp6s1GKNAGEZOtUHDgf9wX90QdKxfBTxiQLBNk591rfTFvvnlB76ucf8Jr6gTwa7G6OtJYZd9MTd5TdnDcaDnJRTnTdwI9XN7neRQJDadQZjP%2FcMD9AGJ20BFJQB%2Bl9PmgwfoW%2FxbOEQMo4HJQ41ROPtMpD5BWsQ3ckhWgiKgcJXcdQmCSayW5BCUtFz0wM7X3Ae6Y9WTDWlRvHAXflzJimGtq%2FehocdtdAjicpsI%2B8Up4Qu5lBdW01zQ7CYuxu6y4eVgKG4btazjZ1LvMLdwd2jw%2F9PRPqmHHtSxi0STWUn5xcYdEgwloiJppwa0hwYR25U0x%2B068eiXYAbuyZfNmO8tHtu1YjMpzP6joQl0nChMjEYDXxHcppNxHjqYIAN4vKsLQvY0lDE%2BBMEUygWDy%2B6YRuMaC0VyI1P%2BkHz6yQ4T3CIrnBIjabNfqun6XmMp7kv0VADpR%2FBCYXWmxPVjK5MOcMPLNg6cPGNHQXHWvbZyiq%2FAdm4rlEwF3yv9VbKR5p9eX4N9Y%2BYmboXhrPY%2BYkQCBAHAgJHcdvMUCwyPJaPdVl07xQyhBjkxh4vjRqd6P79VVj8MU5WxuB6Z8ivNCiJV7MO3py70GOqUB5ALsgkkAGh2Y21zsG%2BmSQ%2B%2BrGMjq0L8uzrDbNbBbPYTQoWdlPZ1b%2BhRCPR95m%2FyWlq5OpHV7KO7GAVYT0JpeAuMKyhOabzoa4a8B7DjW%2F9Jx20dP8SnNS%2FGMj98tPeyZW%2BJI%2Fi2YrvmEYw3zZCiwRMvVzuQCq9lVcSE5oOKq%2BeQLwZKHymmKHR3ZWMKCPYS3WOr0wjYwtbp3iFSjVgcb4rM7xmx0&X-Amz-Signature=c2c15534bbd01f40c94f155efcc852916972380356c6fae4b0ab93e157d59ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWNK2YN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCwNIZ4RCZSgZKiWsp6zOoSqVKMJB7hQOhebCkvO74kfAIgYqPWOJkiHBRTHTKapwY63CfmsAYtcsG1fy3WfH2%2F7Ywq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIrsMu5fdVMSH72xcyrcA8PTD76f9hnvBZNm4RZU1dEgIU4wU%2FqGP%2FGp6s1GKNAGEZOtUHDgf9wX90QdKxfBTxiQLBNk591rfTFvvnlB76ucf8Jr6gTwa7G6OtJYZd9MTd5TdnDcaDnJRTnTdwI9XN7neRQJDadQZjP%2FcMD9AGJ20BFJQB%2Bl9PmgwfoW%2FxbOEQMo4HJQ41ROPtMpD5BWsQ3ckhWgiKgcJXcdQmCSayW5BCUtFz0wM7X3Ae6Y9WTDWlRvHAXflzJimGtq%2FehocdtdAjicpsI%2B8Up4Qu5lBdW01zQ7CYuxu6y4eVgKG4btazjZ1LvMLdwd2jw%2F9PRPqmHHtSxi0STWUn5xcYdEgwloiJppwa0hwYR25U0x%2B068eiXYAbuyZfNmO8tHtu1YjMpzP6joQl0nChMjEYDXxHcppNxHjqYIAN4vKsLQvY0lDE%2BBMEUygWDy%2B6YRuMaC0VyI1P%2BkHz6yQ4T3CIrnBIjabNfqun6XmMp7kv0VADpR%2FBCYXWmxPVjK5MOcMPLNg6cPGNHQXHWvbZyiq%2FAdm4rlEwF3yv9VbKR5p9eX4N9Y%2BYmboXhrPY%2BYkQCBAHAgJHcdvMUCwyPJaPdVl07xQyhBjkxh4vjRqd6P79VVj8MU5WxuB6Z8ivNCiJV7MO3py70GOqUB5ALsgkkAGh2Y21zsG%2BmSQ%2B%2BrGMjq0L8uzrDbNbBbPYTQoWdlPZ1b%2BhRCPR95m%2FyWlq5OpHV7KO7GAVYT0JpeAuMKyhOabzoa4a8B7DjW%2F9Jx20dP8SnNS%2FGMj98tPeyZW%2BJI%2Fi2YrvmEYw3zZCiwRMvVzuQCq9lVcSE5oOKq%2BeQLwZKHymmKHR3ZWMKCPYS3WOr0wjYwtbp3iFSjVgcb4rM7xmx0&X-Amz-Signature=6fbc52a1a92cc3a59af154fb5e65aa0725adb80a0da17877bc27719a6d1933cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
