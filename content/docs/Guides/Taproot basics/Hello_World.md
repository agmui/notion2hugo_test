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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC4RPG4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDTwiOm0Pq2e7bvtfabtVLvZCYv0N5682RG%2BEqUoDpCTwIgbbvQBCJbIYl4OOUbP8fJCJxgwycc8D7ATnrdaCjoT4sq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI23fVRA1o1zLGUl8ircA%2FultzjLROZtyKkhlUesMH%2By3TmGWm1how4ifB3S6YXKC3Zi8e%2BdjVzt7ggkLH0HPb%2Bx9i%2FUC5XEcCm646deZqDyheyFlTteNIGeU%2FY8fEB5rwbse%2FlWAsizsQ9pkCmfdkSCfH7NnSoNU79gIUkC%2FyuPcLaBLTRPSX%2BrAJq0N4B8wB7PkDHlMXaIgBBc3bnex0%2Butu81jvPh%2B%2FwNKC7x6QHcLwEkEjge8UKRD%2FPbDmMhm%2BYhI3kmhRm6P8s2rk24KeTvltV10zGO676cg3a9uLfO3jwa%2B%2FI7UIrCcOU6zDPugWgJZ0aKWwxiRouZrGXtSPa5%2BTon4ApVn6oDOJMnhKLYo7lDICAnhJlFXPAk1QwHR4xrpyyh3AImttBD%2Bgrs6DPe7cFdXF1LH0%2FGwWk%2B35Up%2FyAKQE2UC2kIY5XfmQqDLTnTGi87ykiftmawCXsmlc%2FtzbrK3BXZsEmNaeBLugZmwJaTHk1nU%2ByZMGD1dyLDnKAyay%2F7bMwRnMd%2FQdz3O6AsDsqzEbuPc6HKWHtqPxZa2fK8jbQAtN0huyewRndEcsiuwIawIBSAOrpOGS1gothie8Y6ZkC5xmAKwqlLWlkoD4CcT%2BU%2Fuf17oPQcQimCi5jmBBUNnr2Abs%2B7MLK8nsMGOqUBw5RXzuMkkrgreW492EWC9qBoo7oX7KxuWFprjDw5PVQ72ygj5pqbWQjpLbEXf05Jil0pMuTrBza49Cmo%2FEXuv95PkWVv5XbEirXjWxVDNYjXWniSc1Xf%2FtM6y0db6KJn4W4tNgHi2e6yF6BKWT3BPnqFxyFMfDR65h919bXElTjYCxXpfTU%2F4fOn2UkbwN%2F%2FJubJ9zl12ZiEZBXttLxcLyoYmHD6&X-Amz-Signature=bda9b543e0e8aa2d5e571f9d859dccb1d32b1cd9a38988969db954c673e0f28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC4RPG4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDTwiOm0Pq2e7bvtfabtVLvZCYv0N5682RG%2BEqUoDpCTwIgbbvQBCJbIYl4OOUbP8fJCJxgwycc8D7ATnrdaCjoT4sq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDI23fVRA1o1zLGUl8ircA%2FultzjLROZtyKkhlUesMH%2By3TmGWm1how4ifB3S6YXKC3Zi8e%2BdjVzt7ggkLH0HPb%2Bx9i%2FUC5XEcCm646deZqDyheyFlTteNIGeU%2FY8fEB5rwbse%2FlWAsizsQ9pkCmfdkSCfH7NnSoNU79gIUkC%2FyuPcLaBLTRPSX%2BrAJq0N4B8wB7PkDHlMXaIgBBc3bnex0%2Butu81jvPh%2B%2FwNKC7x6QHcLwEkEjge8UKRD%2FPbDmMhm%2BYhI3kmhRm6P8s2rk24KeTvltV10zGO676cg3a9uLfO3jwa%2B%2FI7UIrCcOU6zDPugWgJZ0aKWwxiRouZrGXtSPa5%2BTon4ApVn6oDOJMnhKLYo7lDICAnhJlFXPAk1QwHR4xrpyyh3AImttBD%2Bgrs6DPe7cFdXF1LH0%2FGwWk%2B35Up%2FyAKQE2UC2kIY5XfmQqDLTnTGi87ykiftmawCXsmlc%2FtzbrK3BXZsEmNaeBLugZmwJaTHk1nU%2ByZMGD1dyLDnKAyay%2F7bMwRnMd%2FQdz3O6AsDsqzEbuPc6HKWHtqPxZa2fK8jbQAtN0huyewRndEcsiuwIawIBSAOrpOGS1gothie8Y6ZkC5xmAKwqlLWlkoD4CcT%2BU%2Fuf17oPQcQimCi5jmBBUNnr2Abs%2B7MLK8nsMGOqUBw5RXzuMkkrgreW492EWC9qBoo7oX7KxuWFprjDw5PVQ72ygj5pqbWQjpLbEXf05Jil0pMuTrBza49Cmo%2FEXuv95PkWVv5XbEirXjWxVDNYjXWniSc1Xf%2FtM6y0db6KJn4W4tNgHi2e6yF6BKWT3BPnqFxyFMfDR65h919bXElTjYCxXpfTU%2F4fOn2UkbwN%2F%2FJubJ9zl12ZiEZBXttLxcLyoYmHD6&X-Amz-Signature=bf55213e98c2e588a46b09572acf0eb4228f7793a3b1497c76091d0139eb8c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
