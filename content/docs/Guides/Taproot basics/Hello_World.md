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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IVVCXT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC9bpp4GLoxNQo7mWDI0vdsWM4Sq5LNs8bWrzSUGIM5cAIgJdOgXzNPiTrLTekVlQ%2FEKCpT6z2qqM2261tNy9Szq70qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ14DqO63rv7f1e98yrcA0t1NVMVOkk5Xmj1WkckJnlwaH66mlI%2FhAj%2FXWf7JRNZRpZdbpcvF4J5TDn8CEQCvTvygxJzDrjPPYDlA10kw%2FdU7yILLNProWwba3wLx%2BpksUJUP6INnSwwn%2FpAKLWR%2BoNWLji4tfWpYTCiVm1huFe3zasTPWgIrOgmzdXwUMc61KdyKFlpIPfZ0ROwRb7iD%2FUd460pCzqpHjza7ynHxzA9ASoxdF1ftMCHHL0yu1%2BOpfoqtL1QIznS10nMh4hGqSfgO3OHEHlYauQ9TIn77aMq3oeMgqic8IzEyUwVWwtb1rulw8k2h8GK1Ek1iaxF%2BWt8tKfFgb%2FK%2Ftk9sHBifQIcfenzRjwSaFmA%2B%2B%2FqXS52S5qZB3Zbd62ZrNSGlTORexmPhyOR%2B91pWJhPt1%2B6ieImPV3GhlJsN604bT3c5QyG1iFfmTqotntoPEh6A8bT18%2Bsw1nTsL98Llczlb981uP3FTZM%2BX9Dp6NzFWrlC%2F5ZkomolQ5AU2gotWweH7DOzTMyyNS7p5hb1HRZV%2F6dgcBBgM5w5yoZ0EPPyT3gPzNqoE%2FsYPohbSJWM8eVfWOHt5VgNorKuG3qdRWu1nJKd%2FWcQKRCRjjHPCqMsBQwyjq32WNN0fMiaucgA0TqMJ6C8b8GOqUBS8kArSlpLld%2FKp2A%2BD%2FMakMByxOATOtU3VNEJQ%2BLeuGpj75f2hb2Wt%2Bnf712FNNSAGggzrLmQ1qA3HKdyDDmPVTE9EdLCCf6yGE9DHhqYFoLEiec4QKIr7HVqF59%2Br1YFUxj0sfjKCBeSsI9Plf1LXTzqId%2BHxNWZx17f2IcaTzyarUPa%2BbD6pktLd6V8astOR9ZdOp6VAW0Li2T6nItE8bTd5bN&X-Amz-Signature=db64bc07c04708a5f641ab8ecd4a77970e957a27e964ff8ed7fee19cd3f6759e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4IVVCXT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC9bpp4GLoxNQo7mWDI0vdsWM4Sq5LNs8bWrzSUGIM5cAIgJdOgXzNPiTrLTekVlQ%2FEKCpT6z2qqM2261tNy9Szq70qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ14DqO63rv7f1e98yrcA0t1NVMVOkk5Xmj1WkckJnlwaH66mlI%2FhAj%2FXWf7JRNZRpZdbpcvF4J5TDn8CEQCvTvygxJzDrjPPYDlA10kw%2FdU7yILLNProWwba3wLx%2BpksUJUP6INnSwwn%2FpAKLWR%2BoNWLji4tfWpYTCiVm1huFe3zasTPWgIrOgmzdXwUMc61KdyKFlpIPfZ0ROwRb7iD%2FUd460pCzqpHjza7ynHxzA9ASoxdF1ftMCHHL0yu1%2BOpfoqtL1QIznS10nMh4hGqSfgO3OHEHlYauQ9TIn77aMq3oeMgqic8IzEyUwVWwtb1rulw8k2h8GK1Ek1iaxF%2BWt8tKfFgb%2FK%2Ftk9sHBifQIcfenzRjwSaFmA%2B%2B%2FqXS52S5qZB3Zbd62ZrNSGlTORexmPhyOR%2B91pWJhPt1%2B6ieImPV3GhlJsN604bT3c5QyG1iFfmTqotntoPEh6A8bT18%2Bsw1nTsL98Llczlb981uP3FTZM%2BX9Dp6NzFWrlC%2F5ZkomolQ5AU2gotWweH7DOzTMyyNS7p5hb1HRZV%2F6dgcBBgM5w5yoZ0EPPyT3gPzNqoE%2FsYPohbSJWM8eVfWOHt5VgNorKuG3qdRWu1nJKd%2FWcQKRCRjjHPCqMsBQwyjq32WNN0fMiaucgA0TqMJ6C8b8GOqUBS8kArSlpLld%2FKp2A%2BD%2FMakMByxOATOtU3VNEJQ%2BLeuGpj75f2hb2Wt%2Bnf712FNNSAGggzrLmQ1qA3HKdyDDmPVTE9EdLCCf6yGE9DHhqYFoLEiec4QKIr7HVqF59%2Br1YFUxj0sfjKCBeSsI9Plf1LXTzqId%2BHxNWZx17f2IcaTzyarUPa%2BbD6pktLd6V8astOR9ZdOp6VAW0Li2T6nItE8bTd5bN&X-Amz-Signature=163d09ec352dc0c44c9485448aa79184d14c13a4b781aab344d288eee3ab3224&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
