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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4DV7H4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3UWsNFYCJKAt1kX09R3O%2BK7ZpD6Jorr5UMPJZ4HqgtAiEAgQfVz5hFiFrmfrAZpdxqcbbMpih5o8RTq9%2FPWuI2FREq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOU4DFjNOpdFOlYk%2BCrcA3%2F7pW0yFbkjKNd3DK%2Bv%2FGN292b%2BrIRcaht8qNPKH0AdkZE9seTonuWlXZkGTavV8RtMgmepCdERorF1EHrLigqswnMcO84baqKBQ7%2Fq85B6A6wTdFJAgmaSfusZGu8vUpAtGi3KEYycFPgr%2FczU%2F0Q331%2BNEIxI832hnZwXNF6CmPnbSxLWob2FlIHMoirHMZ%2BrynJ1SFlRa6OIfMoCjS%2B1BzqeTcsBpzEi%2Fvo2AF3C7lJJvSOy6ztzGuypmPWFbSRmztTLIkYmE2CTZtxrOARyCqGa%2BhJbVcuZtitUbzbL4fBijk8YNvQSlT8gX%2BZbL6NiGoVpmhB8TVffd0AQHFVB7oSCaT41bNbYrGPAx12JukOrKYHMEed4GRRC9wllw5jXir39x2SmJ8JYcgfnBi%2BXtJR2MM6Hw4mkV6DXpzDNtul%2FFS0c25W0UreXZaEbTg3Ww1tdQtlelLSigo4RYEjzSltT3QdNHlTpBc3Ezwq%2FqSk3jJdwEpQD8Ja9z3qzy6hUY36ASag35jBTyV3jy8IsSU8q%2FGmEPwgkIOqGUwjRSFB%2BWCJmxUweJMuC8SNNKjFYi1EL0QKNpyiLA7QPb55egALJ6ymiOqcAoXujiDnQdSe4oVL7yJMHeaZKMNOXjL8GOqUBan3ucqKjg8oAHhpXzFrm0qmbo41Mx3bg%2BiQavQSsSi67mCeBOwtM65uQ1DaRPasE%2F3dMHcZk5i59G5X%2Bxfg1174WORdhM%2FBSlByeR5QDL%2FbcWP0A056jV%2BvzfLQ9BqdkR7CDgTYf13FSpqaFVl7QwxhpyDimoCTgc01dR6%2B5eSXr2VVTJgrxpKwENNI8S0fMuDF0dMspWpznT%2FfHmTNCJC7o2KwK&X-Amz-Signature=cd7dff558d6577d636a780a73e15bdc3d19ec4aeaceeefd708d84cbc5d4eecf7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4DV7H4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3UWsNFYCJKAt1kX09R3O%2BK7ZpD6Jorr5UMPJZ4HqgtAiEAgQfVz5hFiFrmfrAZpdxqcbbMpih5o8RTq9%2FPWuI2FREq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOU4DFjNOpdFOlYk%2BCrcA3%2F7pW0yFbkjKNd3DK%2Bv%2FGN292b%2BrIRcaht8qNPKH0AdkZE9seTonuWlXZkGTavV8RtMgmepCdERorF1EHrLigqswnMcO84baqKBQ7%2Fq85B6A6wTdFJAgmaSfusZGu8vUpAtGi3KEYycFPgr%2FczU%2F0Q331%2BNEIxI832hnZwXNF6CmPnbSxLWob2FlIHMoirHMZ%2BrynJ1SFlRa6OIfMoCjS%2B1BzqeTcsBpzEi%2Fvo2AF3C7lJJvSOy6ztzGuypmPWFbSRmztTLIkYmE2CTZtxrOARyCqGa%2BhJbVcuZtitUbzbL4fBijk8YNvQSlT8gX%2BZbL6NiGoVpmhB8TVffd0AQHFVB7oSCaT41bNbYrGPAx12JukOrKYHMEed4GRRC9wllw5jXir39x2SmJ8JYcgfnBi%2BXtJR2MM6Hw4mkV6DXpzDNtul%2FFS0c25W0UreXZaEbTg3Ww1tdQtlelLSigo4RYEjzSltT3QdNHlTpBc3Ezwq%2FqSk3jJdwEpQD8Ja9z3qzy6hUY36ASag35jBTyV3jy8IsSU8q%2FGmEPwgkIOqGUwjRSFB%2BWCJmxUweJMuC8SNNKjFYi1EL0QKNpyiLA7QPb55egALJ6ymiOqcAoXujiDnQdSe4oVL7yJMHeaZKMNOXjL8GOqUBan3ucqKjg8oAHhpXzFrm0qmbo41Mx3bg%2BiQavQSsSi67mCeBOwtM65uQ1DaRPasE%2F3dMHcZk5i59G5X%2Bxfg1174WORdhM%2FBSlByeR5QDL%2FbcWP0A056jV%2BvzfLQ9BqdkR7CDgTYf13FSpqaFVl7QwxhpyDimoCTgc01dR6%2B5eSXr2VVTJgrxpKwENNI8S0fMuDF0dMspWpznT%2FfHmTNCJC7o2KwK&X-Amz-Signature=e35ad8a5ee972dd15bd11d29038907f7aee65b94ee9b767215e806c96ab787eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
