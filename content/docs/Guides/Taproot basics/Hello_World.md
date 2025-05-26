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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XXJ6RR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFM7sCm0Ut5l7yuLTxc9oPvtNIC5PYbeVxDE7yn1owqKAiEAiTqcttuQJDKiDv%2FNDe24byrNWcPpG3QutXyM8xpaliMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLlsxqalLUovjtTbPCrcA7p981aH63VBBCva%2BHgnmVTLk2FShoilZhUL0%2BIqSy9RFBCud7ELVj8Lvke1tgT9TcXypcJxBPQFSFGBL%2BhtSmzx2%2Bh8WZt8v80NbDneqoeT09ac3GadrcEwcjpurYu%2B5jNT9yL%2F3xsx0TNw%2F03AayoubLvSSgrC2qnbuIsvweBXPE0oIGBWhDk49xu3W62LA9Thn3W45edqyL597CzmzopJOfVEIRP8FBR%2BUMITa2PhUYaGl%2F7bgbHWJ8pOCWJh%2BN0E4OLo7sKFrcsHuQtx6NslARx3AGUZv6cQqvA4RpTkKqmGPOiDS9Z355jAjzv%2F%2BB2CbazHCq8o2v3RWPm8LbmuJKOldOjxmpnscDHolC7Ijo4u6RDVXLJmPX39pBgmFiKpTeOscYHHf4BTYI6vv%2Bpcpmc%2BkRpYcDByURDqlL2vea7eg0U5RVQOAJ95othh5Y%2BlZlisX95x%2FF8AsrtKXcwuDXC97pUSe5nkMfpSNIJ5e8EHw4H2ES91HyiKRiUVqX%2FYxot89QhoWpi8vJUBdEyf2gsZCDBVnMkeqerHVd91rLu7qfKIE8CDQAqbhyNqXfhem906bxT0o32WO2awYZ6kqtKabeQ5qlFK0z7iTbfQdkfQxyDNnBe3yTd8MN2dz8EGOqUBSvpDDZVr61oGCFV0obUrSZPLk3ChGthb8msVpy0Ikf1xHlL5Gk5eRjmPQ9rGupwBSsqd%2BsgtzbahgntcruH%2B%2FCNd6rjem2Cgv31Ke1nr4yx3N1gQ8XkeLge4yjbFe26KfTmSIvLDGSFoiRX47mEGkz9xWhlYFwIajFHP%2Fx4bPN6p27I384FibCkJFk9b7SMm%2BdnUq7dhvnq0kMl%2BFPxr6YceA4SA&X-Amz-Signature=4ab6b8b2b86b9438335cb18b9337abdd53d80d36a476496dede2e42d9c09ac95&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XXJ6RR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFM7sCm0Ut5l7yuLTxc9oPvtNIC5PYbeVxDE7yn1owqKAiEAiTqcttuQJDKiDv%2FNDe24byrNWcPpG3QutXyM8xpaliMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLlsxqalLUovjtTbPCrcA7p981aH63VBBCva%2BHgnmVTLk2FShoilZhUL0%2BIqSy9RFBCud7ELVj8Lvke1tgT9TcXypcJxBPQFSFGBL%2BhtSmzx2%2Bh8WZt8v80NbDneqoeT09ac3GadrcEwcjpurYu%2B5jNT9yL%2F3xsx0TNw%2F03AayoubLvSSgrC2qnbuIsvweBXPE0oIGBWhDk49xu3W62LA9Thn3W45edqyL597CzmzopJOfVEIRP8FBR%2BUMITa2PhUYaGl%2F7bgbHWJ8pOCWJh%2BN0E4OLo7sKFrcsHuQtx6NslARx3AGUZv6cQqvA4RpTkKqmGPOiDS9Z355jAjzv%2F%2BB2CbazHCq8o2v3RWPm8LbmuJKOldOjxmpnscDHolC7Ijo4u6RDVXLJmPX39pBgmFiKpTeOscYHHf4BTYI6vv%2Bpcpmc%2BkRpYcDByURDqlL2vea7eg0U5RVQOAJ95othh5Y%2BlZlisX95x%2FF8AsrtKXcwuDXC97pUSe5nkMfpSNIJ5e8EHw4H2ES91HyiKRiUVqX%2FYxot89QhoWpi8vJUBdEyf2gsZCDBVnMkeqerHVd91rLu7qfKIE8CDQAqbhyNqXfhem906bxT0o32WO2awYZ6kqtKabeQ5qlFK0z7iTbfQdkfQxyDNnBe3yTd8MN2dz8EGOqUBSvpDDZVr61oGCFV0obUrSZPLk3ChGthb8msVpy0Ikf1xHlL5Gk5eRjmPQ9rGupwBSsqd%2BsgtzbahgntcruH%2B%2FCNd6rjem2Cgv31Ke1nr4yx3N1gQ8XkeLge4yjbFe26KfTmSIvLDGSFoiRX47mEGkz9xWhlYFwIajFHP%2Fx4bPN6p27I384FibCkJFk9b7SMm%2BdnUq7dhvnq0kMl%2BFPxr6YceA4SA&X-Amz-Signature=cb6fa68b77f7d62922970c2f12f1cde94fb37f10c7db68f0997a9e21fca19516&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
