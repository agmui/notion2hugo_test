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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVCOE5R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCBn4ZNkBSuzLtuc1FCUPabRdQJleMh8%2FGKrx%2BMBadiNwIhAMlaNCn75%2FMDV6oc4QJmzI%2BLi0F4yCI%2FoXhg%2BT2twpuMKv8DCF0QABoMNjM3NDIzMTgzODA1IgxpWFAbMfle2dZvsWkq3ANu4Qq4mox9%2FtzUW%2Bk7aiIUT2ULJwjgbNTz8Ql%2F9cVmU8YlXXNk4dH2Scs9jtma8LSbxX4B8B0v7RnA2fZpEqlHOeejBEXXxtDdp7p93GnkxbW4kZaBdW%2Fy0mWpIi0FjgFYrmvifuj%2FqPAaAm%2F02VpTzodVbArY8cPg1Vn6CqGN%2BAP3HGcpZnOUvF%2F8WBnhF%2FzWUPEjMIdfrpqd5zFz%2BPpwkFP8UuXQBGDYyO%2FOPXrchNrXGkxFMv%2B41k5%2FCq06lVEmj6oFLPI8ben%2Fx%2FGKlY4fhGhxTEj%2BFF%2BFJ4NZiVZPShjc7NBLg3DC5u%2Fq0dQYcCLMQTpuX5AI6ibAGKNIY%2BYx4M0kKnpj%2FVhdXej6JtR98t77RnP4%2FDcZdh7xeZ26vU4D%2FnhbwehDPF1E8Q0TKSdxo2Abvfou5k%2BKns%2FcsYOp%2BO%2FBkQvzopRiLH%2BrnvxxLOIq0CYt13Uv4hSB6H%2BcuEgGeq7mnPHnsZ7DLLKYXzYINVXuSwNn5OxAC7pXsT%2BtrgxbT9eAEFt7bZkKHCLCPn4XOZDWBPGQu%2B7Q3BCoer19dHP0ytXuHLT5wlCO%2B7EIROeMY78QJmeGI0184eBqYAaP%2BTpxkjcxatctoAec6ltXjDi%2FxZ85wteXTceVZDCoxZK9BjqkASok1rkvpl0A5ZApCTNEBXA4ZN%2F6N9vDOJKYBRppp4VLLs3JCMB9EapL3SOc8oACkpgJC5WDLi6cqvAFsI5WQeqqYuK0jhJboEZCNV9omYHgI4UXBkKrJvsmUrLktPJcwvGlkmdqjJaNlmOOx9PAiAUGhJ6ooYvWGwrFA8bAdRPFrhz3Zi3xEuEuA06mDLKchHJ0zSnsk3lBo5Jvb4dhViZXfGdy&X-Amz-Signature=de71b113e5124f1f13e29726393a4b31a4b1ecb21436c81716ee9ab6b7aacd67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVCOE5R%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCBn4ZNkBSuzLtuc1FCUPabRdQJleMh8%2FGKrx%2BMBadiNwIhAMlaNCn75%2FMDV6oc4QJmzI%2BLi0F4yCI%2FoXhg%2BT2twpuMKv8DCF0QABoMNjM3NDIzMTgzODA1IgxpWFAbMfle2dZvsWkq3ANu4Qq4mox9%2FtzUW%2Bk7aiIUT2ULJwjgbNTz8Ql%2F9cVmU8YlXXNk4dH2Scs9jtma8LSbxX4B8B0v7RnA2fZpEqlHOeejBEXXxtDdp7p93GnkxbW4kZaBdW%2Fy0mWpIi0FjgFYrmvifuj%2FqPAaAm%2F02VpTzodVbArY8cPg1Vn6CqGN%2BAP3HGcpZnOUvF%2F8WBnhF%2FzWUPEjMIdfrpqd5zFz%2BPpwkFP8UuXQBGDYyO%2FOPXrchNrXGkxFMv%2B41k5%2FCq06lVEmj6oFLPI8ben%2Fx%2FGKlY4fhGhxTEj%2BFF%2BFJ4NZiVZPShjc7NBLg3DC5u%2Fq0dQYcCLMQTpuX5AI6ibAGKNIY%2BYx4M0kKnpj%2FVhdXej6JtR98t77RnP4%2FDcZdh7xeZ26vU4D%2FnhbwehDPF1E8Q0TKSdxo2Abvfou5k%2BKns%2FcsYOp%2BO%2FBkQvzopRiLH%2BrnvxxLOIq0CYt13Uv4hSB6H%2BcuEgGeq7mnPHnsZ7DLLKYXzYINVXuSwNn5OxAC7pXsT%2BtrgxbT9eAEFt7bZkKHCLCPn4XOZDWBPGQu%2B7Q3BCoer19dHP0ytXuHLT5wlCO%2B7EIROeMY78QJmeGI0184eBqYAaP%2BTpxkjcxatctoAec6ltXjDi%2FxZ85wteXTceVZDCoxZK9BjqkASok1rkvpl0A5ZApCTNEBXA4ZN%2F6N9vDOJKYBRppp4VLLs3JCMB9EapL3SOc8oACkpgJC5WDLi6cqvAFsI5WQeqqYuK0jhJboEZCNV9omYHgI4UXBkKrJvsmUrLktPJcwvGlkmdqjJaNlmOOx9PAiAUGhJ6ooYvWGwrFA8bAdRPFrhz3Zi3xEuEuA06mDLKchHJ0zSnsk3lBo5Jvb4dhViZXfGdy&X-Amz-Signature=d28161483bab33af86c4b747ed63075d25b4fb80204bf963efe85934b15491cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
