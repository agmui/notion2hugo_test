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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PVQSUO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0DpO9gtXofLU2gIfgPxBswcYkcjFjoQARq4u7tqrikgIhANwehotY1zDZb5Z92ceZPOjL7d3FBCOnfi3a1OAjEQg8KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM5GSjKw6p1OJmeLIq3AP%2FbFoX1NWAG76D0NEmVjeXu4Nmvzlkl76FdwvmkS53Y0rtlgVDNrMfWr4WrZMk1O9IqG2ywtzLOMA5J%2Bq36iqNGni%2BwxEr0nPAjIfTY1uSuFMW3N2cAKlQq3HybWqrmzz7X4ouV6%2Bs1S5WNu8RhUsvuBESgP8%2FtoqsefpiNoeBlL78kms2qhMHvufubDRFtIFPlLJCyl0yaeQJaoTWImu9dN23jbAEeUczYQP%2FiHhtBJq%2FuO%2Fuhf9gxFFAtJK95DFL%2FBoABn2mNczTPO6ZTgf%2Fo2iPqg1mriqdfpcINhsFirixnkd4%2FTd%2Fz9dwCePlwqfX0jbkS8BTyNObW9lXEnZ4IPTH8mUIMJz1MwsqB2qrOVRJnR29bRmwaybRf4oZZShuCMy6GYod93kMWL55LysxhwQQMgM8njesFez3o4OyYuvTHEUjH5NK%2BfJWqy%2FZlVDBMXujW%2BMwyV8VjK6mIwwRyB4aajDoSDl2V6OXqw1wtICMnX%2BBs7Z1W%2BTut0AtWGJwst3lPz1eXWGMTrXdnFIQr3e1f0FK4EvT0mZtKis1IswhHMiBwrSotdWybA7kAMl0VzAlMcpwY7kThFsly91U5yRIG8xCFlrAxMdDa58W0NtDEAWhxLaAk5HZmDC5oonDBjqkAUn9pp7GePf2%2FYlbB%2B3Cy91LoQUepNXIMONXHd83%2BslVW7ALlLVCk9MWNt0SnZrnZAzxuGmISMzYKTb%2FS4ITy9ye3tFdgHiev3bJAKXtNuF%2BUZrs3uL5IcqOp%2FDBPYlfUrTRATEZ%2Bs6pYle6Z89fQuW6RkaUkPri%2FV5kM93aIFRFg%2BCFinwYnqZ%2F4FRjPdHzQpk%2BEI%2B%2F%2FrkV4uu9jISs%2BBNhjJ7T&X-Amz-Signature=b0d082a2c432fa05dc7235b42202ed5fefc47b427bed57edd9a5b28622d785e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PVQSUO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0DpO9gtXofLU2gIfgPxBswcYkcjFjoQARq4u7tqrikgIhANwehotY1zDZb5Z92ceZPOjL7d3FBCOnfi3a1OAjEQg8KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM5GSjKw6p1OJmeLIq3AP%2FbFoX1NWAG76D0NEmVjeXu4Nmvzlkl76FdwvmkS53Y0rtlgVDNrMfWr4WrZMk1O9IqG2ywtzLOMA5J%2Bq36iqNGni%2BwxEr0nPAjIfTY1uSuFMW3N2cAKlQq3HybWqrmzz7X4ouV6%2Bs1S5WNu8RhUsvuBESgP8%2FtoqsefpiNoeBlL78kms2qhMHvufubDRFtIFPlLJCyl0yaeQJaoTWImu9dN23jbAEeUczYQP%2FiHhtBJq%2FuO%2Fuhf9gxFFAtJK95DFL%2FBoABn2mNczTPO6ZTgf%2Fo2iPqg1mriqdfpcINhsFirixnkd4%2FTd%2Fz9dwCePlwqfX0jbkS8BTyNObW9lXEnZ4IPTH8mUIMJz1MwsqB2qrOVRJnR29bRmwaybRf4oZZShuCMy6GYod93kMWL55LysxhwQQMgM8njesFez3o4OyYuvTHEUjH5NK%2BfJWqy%2FZlVDBMXujW%2BMwyV8VjK6mIwwRyB4aajDoSDl2V6OXqw1wtICMnX%2BBs7Z1W%2BTut0AtWGJwst3lPz1eXWGMTrXdnFIQr3e1f0FK4EvT0mZtKis1IswhHMiBwrSotdWybA7kAMl0VzAlMcpwY7kThFsly91U5yRIG8xCFlrAxMdDa58W0NtDEAWhxLaAk5HZmDC5oonDBjqkAUn9pp7GePf2%2FYlbB%2B3Cy91LoQUepNXIMONXHd83%2BslVW7ALlLVCk9MWNt0SnZrnZAzxuGmISMzYKTb%2FS4ITy9ye3tFdgHiev3bJAKXtNuF%2BUZrs3uL5IcqOp%2FDBPYlfUrTRATEZ%2Bs6pYle6Z89fQuW6RkaUkPri%2FV5kM93aIFRFg%2BCFinwYnqZ%2F4FRjPdHzQpk%2BEI%2B%2F%2FrkV4uu9jISs%2BBNhjJ7T&X-Amz-Signature=0103aebdb36ce057343eed3dc4b39d1cb77a4d62a32c29d5b86378f0103c9c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
