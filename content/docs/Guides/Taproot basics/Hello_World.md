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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFDHVPR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOGyZ80wA4JqZrAtW%2BptmMHtAlxjdZj%2BVLaFJkmgko8AiEArRRT6BXMdQ0fw6lWP6MDnJ5jMOBansH3gyUNBzRfEUUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BQ1Tpu1SsUNvoinSrcA0IDa8Y%2F85Urxr0eL8W1mbMdJEMKnMRl8DD1qWDyWNW7ekQgS403FQTCd5vnmpkzeVWbb%2FSiRJZFtragUlWvf2EzZbSLQ1SF%2FxC3Qh7JvDtlg045RRG3PGm6aZCRJcTcQVd4bG1vj6puSWWv9lCywEQkbOK9d8dAOi83GTLFLRlPpIE9ew68zUkkqGOR%2F2NFF89lB00YeRFAg7ZN70AMZ%2BRjOmJo3%2FBnX96MDhdU%2FQR1ti7%2FdxFLHS4HRiAYPJ3mG5OJG88y5Mv9wgjTXitTzM4gvZkphaPdy4bstdPxO%2BfTekvaGt9CCNdwULK%2B5v%2ByS%2B6sLCkY70cpQAsJQHTujwID8KkdfoSunroI%2BUrMy%2Bw9nhC1LopyDkLUOt3azr7J8JWz3vXNK%2BIrcUjBK72MkCYvZX10%2FhvtztF03Yxmj1Vsw2yqmVJnFAbceGo92HOPMEUP6T040l%2Fb9wWvoQeH7P2laiwXigfDFSOJNncS8qxyhoJ9YxyxBIG8WMW6aZy5%2FWo4fsGlL63AqPohUjMOXXxTDZ13AELnPPIkeXBYe0IsHwALGjFkSGNRmipkLWzVXH%2F0itBWgP%2Fz4uZ0yfuKAdrseHYGqlGskbSdhu473JabWYvUd%2FyJUwDEeGzzMO7R8LwGOqUBEfkaiozctG7T62YZCS%2FfAsUSXT0bKQjheA8brVgwmBAbeeQsvWr0JRMwbbruk6YdEzELa6CxXX4Xa%2Fk6ABN4qnYHw66oGncl4dMd12YofujcLPvFWr3J%2FeoZQxPz7z4XP%2FUumpqvBFoYa%2Bo%2FEzOU7YV281okjr%2BU8RhRyfnbq7cazI3dCnvUcZcdSBizby%2Bkm%2BcEIIf0oEsVLc1TnbS%2B8T%2BpD9sw&X-Amz-Signature=2530ceba24b806fbb807d4312c0d889a785abbc21b6985a13c1c74ab0386a9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFDHVPR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOGyZ80wA4JqZrAtW%2BptmMHtAlxjdZj%2BVLaFJkmgko8AiEArRRT6BXMdQ0fw6lWP6MDnJ5jMOBansH3gyUNBzRfEUUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BQ1Tpu1SsUNvoinSrcA0IDa8Y%2F85Urxr0eL8W1mbMdJEMKnMRl8DD1qWDyWNW7ekQgS403FQTCd5vnmpkzeVWbb%2FSiRJZFtragUlWvf2EzZbSLQ1SF%2FxC3Qh7JvDtlg045RRG3PGm6aZCRJcTcQVd4bG1vj6puSWWv9lCywEQkbOK9d8dAOi83GTLFLRlPpIE9ew68zUkkqGOR%2F2NFF89lB00YeRFAg7ZN70AMZ%2BRjOmJo3%2FBnX96MDhdU%2FQR1ti7%2FdxFLHS4HRiAYPJ3mG5OJG88y5Mv9wgjTXitTzM4gvZkphaPdy4bstdPxO%2BfTekvaGt9CCNdwULK%2B5v%2ByS%2B6sLCkY70cpQAsJQHTujwID8KkdfoSunroI%2BUrMy%2Bw9nhC1LopyDkLUOt3azr7J8JWz3vXNK%2BIrcUjBK72MkCYvZX10%2FhvtztF03Yxmj1Vsw2yqmVJnFAbceGo92HOPMEUP6T040l%2Fb9wWvoQeH7P2laiwXigfDFSOJNncS8qxyhoJ9YxyxBIG8WMW6aZy5%2FWo4fsGlL63AqPohUjMOXXxTDZ13AELnPPIkeXBYe0IsHwALGjFkSGNRmipkLWzVXH%2F0itBWgP%2Fz4uZ0yfuKAdrseHYGqlGskbSdhu473JabWYvUd%2FyJUwDEeGzzMO7R8LwGOqUBEfkaiozctG7T62YZCS%2FfAsUSXT0bKQjheA8brVgwmBAbeeQsvWr0JRMwbbruk6YdEzELa6CxXX4Xa%2Fk6ABN4qnYHw66oGncl4dMd12YofujcLPvFWr3J%2FeoZQxPz7z4XP%2FUumpqvBFoYa%2Bo%2FEzOU7YV281okjr%2BU8RhRyfnbq7cazI3dCnvUcZcdSBizby%2Bkm%2BcEIIf0oEsVLc1TnbS%2B8T%2BpD9sw&X-Amz-Signature=8ea4787fedda43e63492bdfed94eec4ba2c9f0b18fe85471c6ec6e6a07e8632d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
