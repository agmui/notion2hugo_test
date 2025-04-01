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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DHOJXC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDSLlBLy3%2BFUv3rsoIXhvE%2Fa4RJSLjiklUXF%2F%2FRpIa4qwIhANGrdH%2FYgY7yo%2BCnyyU7uWEACBDFJIeK6iCwMkDbbSBCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7Wwss5%2BTue2KhkGQq3ANmNFOXnB2mwEk5rAocvqC3wW02he%2FwugndFq%2F9ycar4fju22UD55jKptYCZCxlxrUtwse%2F8XmRoZpCEuoYy20kEtuNgpgzgtH%2FTGDokaQSLq%2FUFjtSIdTPqPMEXvF%2B2Sr6tF3eSoEzaTCyy4n%2BHCgAwBpDSjBFd5Lx5M%2BkADwNbjIWkNYfKDeX6tlyFAC2ASyt%2B74NULQhhR8zcN76WLkcAIIeERZ9MjN2RXNOT79JgwGt7DpUgyJpACmSmw4t7zByHzcHj5cBs%2BK2a6bKgwZeG2Ai8%2BC7zgyi4AXBkpgpYTbEp%2FRlBHNOV%2Bn5X%2Fbk1XPy6rUl3MM9s028B8cMicE6kdsdiHx21KP4dBAvutOd4peC192mbrKVjarMhyRFvCeOxFepBRMpkuzGQMdQSUUzdY218dzq4YXxz6UtC1a5gfTmIZewpPG8UvQ8t1FisnCytnC5MdWILrOd3ey5c1E7vhgKSxk0GLj3jWyoNpRq6bz5kifgWn0ZxvZz215y11o25ucW%2Bo%2Bo7YDlKVeGGVEq2L0mWXvL0nOFgVmb0i82HiOrav75IQUBH4iGnxFPTQtP1fvYiHiHHq%2FndUOmXYGicZyc3ODGZg9UaUyyCmwvoeAv9TK%2BLRTTXk%2BBfzDSqbG%2FBjqkAYuZRB79yTFUSRVlrHWlt%2B0Y7Pv1Gho4axmB1ceDuhXRzId7wXW%2FXpGRND5d7Fnz8y%2FDQoU5E8rcWEzoeDb99PxKNHD8Gyi3nJ69KcEBpSk3VpLNx0VH90OPI%2BpGEd7O7lNXvipSBlo7UhFFoXsBdDVVX2e%2BxIxsw%2Bae4WB4EgXs5y5XoQgUnvVGDBilXkM8CXOL0jqofgQRa7VCkN%2FHXfmxJO0O&X-Amz-Signature=73383e6451b4f98a8af2073191b0b684356ed3a286f4df4145fff2719c9748e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644DHOJXC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDSLlBLy3%2BFUv3rsoIXhvE%2Fa4RJSLjiklUXF%2F%2FRpIa4qwIhANGrdH%2FYgY7yo%2BCnyyU7uWEACBDFJIeK6iCwMkDbbSBCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7Wwss5%2BTue2KhkGQq3ANmNFOXnB2mwEk5rAocvqC3wW02he%2FwugndFq%2F9ycar4fju22UD55jKptYCZCxlxrUtwse%2F8XmRoZpCEuoYy20kEtuNgpgzgtH%2FTGDokaQSLq%2FUFjtSIdTPqPMEXvF%2B2Sr6tF3eSoEzaTCyy4n%2BHCgAwBpDSjBFd5Lx5M%2BkADwNbjIWkNYfKDeX6tlyFAC2ASyt%2B74NULQhhR8zcN76WLkcAIIeERZ9MjN2RXNOT79JgwGt7DpUgyJpACmSmw4t7zByHzcHj5cBs%2BK2a6bKgwZeG2Ai8%2BC7zgyi4AXBkpgpYTbEp%2FRlBHNOV%2Bn5X%2Fbk1XPy6rUl3MM9s028B8cMicE6kdsdiHx21KP4dBAvutOd4peC192mbrKVjarMhyRFvCeOxFepBRMpkuzGQMdQSUUzdY218dzq4YXxz6UtC1a5gfTmIZewpPG8UvQ8t1FisnCytnC5MdWILrOd3ey5c1E7vhgKSxk0GLj3jWyoNpRq6bz5kifgWn0ZxvZz215y11o25ucW%2Bo%2Bo7YDlKVeGGVEq2L0mWXvL0nOFgVmb0i82HiOrav75IQUBH4iGnxFPTQtP1fvYiHiHHq%2FndUOmXYGicZyc3ODGZg9UaUyyCmwvoeAv9TK%2BLRTTXk%2BBfzDSqbG%2FBjqkAYuZRB79yTFUSRVlrHWlt%2B0Y7Pv1Gho4axmB1ceDuhXRzId7wXW%2FXpGRND5d7Fnz8y%2FDQoU5E8rcWEzoeDb99PxKNHD8Gyi3nJ69KcEBpSk3VpLNx0VH90OPI%2BpGEd7O7lNXvipSBlo7UhFFoXsBdDVVX2e%2BxIxsw%2Bae4WB4EgXs5y5XoQgUnvVGDBilXkM8CXOL0jqofgQRa7VCkN%2FHXfmxJO0O&X-Amz-Signature=0692cf4ad290301eef540026c55bcaa3d9d50a24bee15a876ad1f77ce65a047c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
