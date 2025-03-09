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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YSGBRC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDQTIOauWFzCJXaN%2FkFs7gt5K42KxuQcXK9QukY0x8kwAIgRA6uphS1MGwz0jIt%2BSibanPpGIBH5R6sudlqpQt4X40q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGFv%2BLIASSzEjdYHdSrcA9%2Fw0bACVxUbwZU8Mvo7edE4kcuuAwyzIFseu6KWWP4kqfDcvVawue0fu%2Bdx6C87QsMeiu%2FuSRN%2Bo4utHgr9tK3Mwg6yCMSju%2BWYCyQbXGq5JBeA7Cqtm2uUspqdnD1jF95tJiqX1BFQZf91JcX%2F4IzNAyBxKsac4qF59QnXHZ6ymYOhTrBxjcKinRWcnBfO4hxaVfumiOOky%2BOCsYukBoXqBYh2vjz2rDHRaiWPlhnyyRwfh6lGJ5Nr4nR90kmD3yTX54GmAX9ik1zb4ysjFD2Fzk1SOt5oeLW2Mf38W%2Bj7zp1L63b84j2m0Eupx3PtDr%2FyDSzYMi9nmq%2Fhu%2Bw%2BhHeVj9j6YJKDs2m8BQHKcnBqmOq%2FXFreHh7QBV2YactMbTxmk28WMvq699oZi%2BbAS0mvjLYhN2KJygCWDGft%2BBqCO3TRr4iiXEkvbMaqmwjyya3KWReuKwLa%2B%2BHmp3%2Fr%2BYI2G66IF96uew3AGWT7QxCKcIRfwTSV3ZIE%2BlnXZAu8IpJZWsJE7HlJQkCM8EM%2F7jCU6IbCHJsLsIz%2FRQaYcb4cIwEwP%2Fc%2BUItJNjk4Q4%2FcIh1iayRHqmK2eTdqtrCUf4wpyue1X%2FKxxAoII2QCPw8eUoAdZCvu7nVLJ0mnMIqQtr4GOqUBrUZURaKVAcdi4NEaM3%2BXiEkFSEYbruUTOzGucbBEOKpz26KGTdit4E4yI6yK%2Bqqlfpk5NiUGgIx%2Bpc6%2BUUxxl6nigWgf4PchlQZL9C%2BvT%2BseR7CLSjaJDeeSV39aoUyL%2BEARr5%2FxyPKPW5zNASwLmr%2FRMHZpCnKiLY1Pj6LpEOoBoKxkzPQpt9%2Bvfiy%2F%2FdElmEOx12Ockx5yxooB1jnbcxJYyYyV&X-Amz-Signature=44d32bdef8463de1c6be9cd5fbbd4b43d702bba61b0b8ec36b7b4d7c4675701e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YSGBRC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDQTIOauWFzCJXaN%2FkFs7gt5K42KxuQcXK9QukY0x8kwAIgRA6uphS1MGwz0jIt%2BSibanPpGIBH5R6sudlqpQt4X40q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGFv%2BLIASSzEjdYHdSrcA9%2Fw0bACVxUbwZU8Mvo7edE4kcuuAwyzIFseu6KWWP4kqfDcvVawue0fu%2Bdx6C87QsMeiu%2FuSRN%2Bo4utHgr9tK3Mwg6yCMSju%2BWYCyQbXGq5JBeA7Cqtm2uUspqdnD1jF95tJiqX1BFQZf91JcX%2F4IzNAyBxKsac4qF59QnXHZ6ymYOhTrBxjcKinRWcnBfO4hxaVfumiOOky%2BOCsYukBoXqBYh2vjz2rDHRaiWPlhnyyRwfh6lGJ5Nr4nR90kmD3yTX54GmAX9ik1zb4ysjFD2Fzk1SOt5oeLW2Mf38W%2Bj7zp1L63b84j2m0Eupx3PtDr%2FyDSzYMi9nmq%2Fhu%2Bw%2BhHeVj9j6YJKDs2m8BQHKcnBqmOq%2FXFreHh7QBV2YactMbTxmk28WMvq699oZi%2BbAS0mvjLYhN2KJygCWDGft%2BBqCO3TRr4iiXEkvbMaqmwjyya3KWReuKwLa%2B%2BHmp3%2Fr%2BYI2G66IF96uew3AGWT7QxCKcIRfwTSV3ZIE%2BlnXZAu8IpJZWsJE7HlJQkCM8EM%2F7jCU6IbCHJsLsIz%2FRQaYcb4cIwEwP%2Fc%2BUItJNjk4Q4%2FcIh1iayRHqmK2eTdqtrCUf4wpyue1X%2FKxxAoII2QCPw8eUoAdZCvu7nVLJ0mnMIqQtr4GOqUBrUZURaKVAcdi4NEaM3%2BXiEkFSEYbruUTOzGucbBEOKpz26KGTdit4E4yI6yK%2Bqqlfpk5NiUGgIx%2Bpc6%2BUUxxl6nigWgf4PchlQZL9C%2BvT%2BseR7CLSjaJDeeSV39aoUyL%2BEARr5%2FxyPKPW5zNASwLmr%2FRMHZpCnKiLY1Pj6LpEOoBoKxkzPQpt9%2Bvfiy%2F%2FdElmEOx12Ockx5yxooB1jnbcxJYyYyV&X-Amz-Signature=ebb4836a64e3b0597dab25e477cf3b3036582c2029cbc9be20439ca755470ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
