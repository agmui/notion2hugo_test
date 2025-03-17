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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICYFZXW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET4A9XYfuNoDg8AMCo%2FSIcl87R8OkGOZgjkHdZcKyc6AiBkyP2LSKxZ1dOPYdRxxceL1cvepPVq%2BB%2FnCOiCk9VboSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMH2Jv2nng1FkB90KkKtwDpRNbdxsWAa%2BNRAkJ2PW%2BLUxu4gIsJi2HVQx9CkYVDut9YmLnll5uh8bGcA1Zh3RGud%2Bts6zItPzAIyIY1FDjmwQGM1dFZ9Y8jG7sBOzOkc5GPkAG9NxXTptGE7UvSYc5aJ20qlZNYlSibNN5mju7rR63F6Q8z%2BYt9C5HmJjPRyYZ3gMJVGSiciim4KvpyMj5r60Q4FT1Ubqc4DxAk55uc92bYw4v8Dh2du5bkdz7WWh0OSYnq65bwN3NccCfYw7a5gEVJM6dva%2FjJaY%2B7ejvjMBT%2Fp9%2BXAdsW%2FjsAcDeByvliPeGnSlaajnk78K3CJ1xTXkLL%2BNFND%2BpeGQgs4PpuQ6l5%2B7J2oPBVap%2FADfBQpTu7x9wGPSN56AWnRrdhDJmKEAfceYiKbbcXIJ%2B6L%2F7MarKqZI59dsBqeF5mstmkko3SUk2aYh8tYIq%2BNPVC%2FgyZfBwazODKRPkRHczhY5Q6TcA3KTVCOjbm7R3qa4nvY2VQwnvgBSFPkUTu%2BRzXADka29g2%2FwQElTvIx8fFl6iIJmc3i9cFQJcqf%2F%2FKWXCJAtCT8kDNIETFkETIhrmM%2Bfo%2FbXQxYM6pPLXmsg7D26DHNp%2FCJzVVze5ms%2BfQ2BI6cf%2BbKJK5uuLFO%2FTTLkwmtvevgY6pgHC22KPMl2%2B3V5veIVhIywgPeb9EH%2BMSXDmatSJF3xURbWT1vVo%2FaPrZ%2BDn06ZPkRUB4G6XLLjPeMGCyvGoPdowc4r8RD8Bs3p4IvnR0PbgwsXG7b6Ep0nf49inemkuoYq7OYvNxjVs1hU%2FpMS1DVHuOyiWmBuGGOGdCMCCys9WpDrOYjLw434CCe9S%2B2DKt824zwVob9PAuAVvgawLXYTNTRQbx3wM&X-Amz-Signature=a8632dd6381141af00cb51d61415a417160b4ef867e585331ee70ec5f34ee9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICYFZXW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET4A9XYfuNoDg8AMCo%2FSIcl87R8OkGOZgjkHdZcKyc6AiBkyP2LSKxZ1dOPYdRxxceL1cvepPVq%2BB%2FnCOiCk9VboSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMH2Jv2nng1FkB90KkKtwDpRNbdxsWAa%2BNRAkJ2PW%2BLUxu4gIsJi2HVQx9CkYVDut9YmLnll5uh8bGcA1Zh3RGud%2Bts6zItPzAIyIY1FDjmwQGM1dFZ9Y8jG7sBOzOkc5GPkAG9NxXTptGE7UvSYc5aJ20qlZNYlSibNN5mju7rR63F6Q8z%2BYt9C5HmJjPRyYZ3gMJVGSiciim4KvpyMj5r60Q4FT1Ubqc4DxAk55uc92bYw4v8Dh2du5bkdz7WWh0OSYnq65bwN3NccCfYw7a5gEVJM6dva%2FjJaY%2B7ejvjMBT%2Fp9%2BXAdsW%2FjsAcDeByvliPeGnSlaajnk78K3CJ1xTXkLL%2BNFND%2BpeGQgs4PpuQ6l5%2B7J2oPBVap%2FADfBQpTu7x9wGPSN56AWnRrdhDJmKEAfceYiKbbcXIJ%2B6L%2F7MarKqZI59dsBqeF5mstmkko3SUk2aYh8tYIq%2BNPVC%2FgyZfBwazODKRPkRHczhY5Q6TcA3KTVCOjbm7R3qa4nvY2VQwnvgBSFPkUTu%2BRzXADka29g2%2FwQElTvIx8fFl6iIJmc3i9cFQJcqf%2F%2FKWXCJAtCT8kDNIETFkETIhrmM%2Bfo%2FbXQxYM6pPLXmsg7D26DHNp%2FCJzVVze5ms%2BfQ2BI6cf%2BbKJK5uuLFO%2FTTLkwmtvevgY6pgHC22KPMl2%2B3V5veIVhIywgPeb9EH%2BMSXDmatSJF3xURbWT1vVo%2FaPrZ%2BDn06ZPkRUB4G6XLLjPeMGCyvGoPdowc4r8RD8Bs3p4IvnR0PbgwsXG7b6Ep0nf49inemkuoYq7OYvNxjVs1hU%2FpMS1DVHuOyiWmBuGGOGdCMCCys9WpDrOYjLw434CCe9S%2B2DKt824zwVob9PAuAVvgawLXYTNTRQbx3wM&X-Amz-Signature=dd97894c7d788263f4ce03bebad9cd59e4572469717bb2b834271c926f8eacc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
