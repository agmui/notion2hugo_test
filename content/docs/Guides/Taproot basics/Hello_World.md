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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYPIZWY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChDZxkL5s654awa6lBMKOyRKknXEMgV3dBcho3EZmiCAiEA9COfTx3lemoVDucbBGzjZ5DdZBVLiIYzhlNVbPG7DGkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAKOKN9pcXAR2brB6yrcA5ypFMngw6QJ%2FcGwMIMhIsmpudcjiI39nUBzo6G0pCkSCHAnmp9NHv01i%2BIAdWfAm1o0xw6g%2Bfv9mWwy6Jli%2BtkotOpnTJorCw9nTwN0EFIDFJRFPifo0YvUUWI%2B1EYNhYqdT4M6n5%2BGUK%2B0UH8oRI2sLOtMg1srjZkmrxaoMRhOsFRTZyYookwcnhgF9Det0bvkYCUpnnll0W%2F1t%2B53WQ9mTe5HtA%2FzVQQsGSxf4BdHZqnLiOxyL4od9tIu6WN9QpigF%2FptfQp7oCDZaASUMex0JInYkh5a%2Fo7QRbSOo204Hm5fqWWpR4bTYpWEL6Xjiiv0Fwu8348EdKojyMmi7o%2BuR7Lpcii19AziXso%2BeUL2kKkU7G3%2BGl6PQ3kvrciBsTowKujFNo9n8QsqL7PEDGCCgzkYZ9LKJ8jRnf5U7ZzdTGOCFE9EVuUCYsySQff7KrXJEJ7a%2Fp%2FgHVurjkZKgjMY3GDlLZ0vRxYT2RQAF2iP%2BgevMhORRxodq%2BGeuU793R8FViMtAgedUDb9DA4rwpZdPGAqXuG1tbAWwALCZ1HHZW1N0ghGlwWw%2F0Sh%2FfUlBzhD2iDIoJZln5Fak3fqsW%2F0T%2ByjAGqrKqPjnDst4u1NqnmGLua2m350COGxMNPk0L8GOqUBsMJSvwv80Nv3abn61rDSBaCciNVDIhxFuPBHVS94tYqV2U78p1YfotBangQrgzGmlA%2FP2ua%2Bzg7lU7BJCsATioJjEtWI%2BP0bzUMjJ21r5cH6gQrcCGmLEy9aC4R97Ieq7DbKSCqg2R%2Fy%2BEU0sEDCNTzaKt6W34Yp9avlswgX4PPDXmCUySAtfxKA%2FYbqUmRdBSp1MTaYrQcivpLzmpN0bIDnRbEx&X-Amz-Signature=904be0ed46d1b332c7a286fff815d35cb127618a1719c19919f3cb88bebc59f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYPIZWY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChDZxkL5s654awa6lBMKOyRKknXEMgV3dBcho3EZmiCAiEA9COfTx3lemoVDucbBGzjZ5DdZBVLiIYzhlNVbPG7DGkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAKOKN9pcXAR2brB6yrcA5ypFMngw6QJ%2FcGwMIMhIsmpudcjiI39nUBzo6G0pCkSCHAnmp9NHv01i%2BIAdWfAm1o0xw6g%2Bfv9mWwy6Jli%2BtkotOpnTJorCw9nTwN0EFIDFJRFPifo0YvUUWI%2B1EYNhYqdT4M6n5%2BGUK%2B0UH8oRI2sLOtMg1srjZkmrxaoMRhOsFRTZyYookwcnhgF9Det0bvkYCUpnnll0W%2F1t%2B53WQ9mTe5HtA%2FzVQQsGSxf4BdHZqnLiOxyL4od9tIu6WN9QpigF%2FptfQp7oCDZaASUMex0JInYkh5a%2Fo7QRbSOo204Hm5fqWWpR4bTYpWEL6Xjiiv0Fwu8348EdKojyMmi7o%2BuR7Lpcii19AziXso%2BeUL2kKkU7G3%2BGl6PQ3kvrciBsTowKujFNo9n8QsqL7PEDGCCgzkYZ9LKJ8jRnf5U7ZzdTGOCFE9EVuUCYsySQff7KrXJEJ7a%2Fp%2FgHVurjkZKgjMY3GDlLZ0vRxYT2RQAF2iP%2BgevMhORRxodq%2BGeuU793R8FViMtAgedUDb9DA4rwpZdPGAqXuG1tbAWwALCZ1HHZW1N0ghGlwWw%2F0Sh%2FfUlBzhD2iDIoJZln5Fak3fqsW%2F0T%2ByjAGqrKqPjnDst4u1NqnmGLua2m350COGxMNPk0L8GOqUBsMJSvwv80Nv3abn61rDSBaCciNVDIhxFuPBHVS94tYqV2U78p1YfotBangQrgzGmlA%2FP2ua%2Bzg7lU7BJCsATioJjEtWI%2BP0bzUMjJ21r5cH6gQrcCGmLEy9aC4R97Ieq7DbKSCqg2R%2Fy%2BEU0sEDCNTzaKt6W34Yp9avlswgX4PPDXmCUySAtfxKA%2FYbqUmRdBSp1MTaYrQcivpLzmpN0bIDnRbEx&X-Amz-Signature=79de234685b90c473c7523ff371c65771acb97a7fc388c1c44fad8a5e73507b0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
