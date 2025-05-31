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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FKEUB5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcJeXqJeFMFgBlc0KWdKOzU0XOOH2MV5fHulAqRSsJnAiBDCy3CF5%2BObbXhC3VpBLF%2F4OL0Mee9g%2FJdBNEEJf93CiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZF5%2FDV%2FbnGJb4%2BGbKtwD6xjsalpvKkv3hNCiznnoornsh2iZdhKM3SBS%2BB%2FaVBLZwlm7cNEYuPqgU%2BbU%2FUMNHZ7dbyd20btiUot9RJ3YZbiItljSvrSVx5hY%2F%2FcxupxaaUqY4kiQ2PKkh8cF7AH7%2BWyBN9iCD9yQfnL49C6AuaSn3OF0BgPtnrJ%2BtC%2BllRI1%2F07kwEKXjFLmqjR4y5fm%2F2m0flQb%2FAZgybCW5osEIupsqgtii726E%2B90qPpgG%2BU5CNI1Zir%2B7dAMH4yn0%2BYywYtmpcI0Pza7bo1js5Qo%2BImXmm%2BozUGl0%2BNpCbhC0GibpopfY9GqcT27pptGGqiH2PkLXpHJu45fGC9xQ6pATiMfUookFaTAcLWRqIXBqZye5b1HHtmb5sr328ofEHfRMgnL7djTLFOaLWfVUGvpfeuabctN%2BzQfGpqgXzbNjgejDu7XlKao5BcrDECoLEWC%2B7%2B7A0ARrBZdUXdNjCfAo%2Ft%2Fl6TrO%2FxT9Sn%2BlR3Wy1wFQ6LbnCWI4uNsL9dCWn2N6lNo9GFCp80J%2FWHQFrdFh%2FXHrWW84Jy%2BgbmGOUZmQx4vAiGTSsANC2eSqRT2gVAUJHzd4CcJ1FKVcsRDI1A7nKWg%2F%2FaKpkJTbOwjo%2BH1e%2FMiD3f7hHIok41dsVIwt7PqwQY6pgHQCqXfdctu12Ns2KpHlFrJZPKAt7icWO%2Fc49jzyxZt0pF12ZGODH%2B3R2VLoteAtQ9wIq7N6Eh5kE5%2FbEqf00V3t4mmIEFkbevya58JvIAI7ilvVsiJY6nzAaPHz1pDnuwq229OFXupzQXLYDG2n7tK2mBg8IHFer7z9g9PyE5ft2FANdgNb2DMy1cOMj7OgxadGBrq%2Bq063OTOLiXXDDBCKY21wPdl&X-Amz-Signature=1fa675fc67ecd5f50bbfe694db75e579f0af875377500b8e0194bb938da1c505&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FKEUB5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcJeXqJeFMFgBlc0KWdKOzU0XOOH2MV5fHulAqRSsJnAiBDCy3CF5%2BObbXhC3VpBLF%2F4OL0Mee9g%2FJdBNEEJf93CiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZF5%2FDV%2FbnGJb4%2BGbKtwD6xjsalpvKkv3hNCiznnoornsh2iZdhKM3SBS%2BB%2FaVBLZwlm7cNEYuPqgU%2BbU%2FUMNHZ7dbyd20btiUot9RJ3YZbiItljSvrSVx5hY%2F%2FcxupxaaUqY4kiQ2PKkh8cF7AH7%2BWyBN9iCD9yQfnL49C6AuaSn3OF0BgPtnrJ%2BtC%2BllRI1%2F07kwEKXjFLmqjR4y5fm%2F2m0flQb%2FAZgybCW5osEIupsqgtii726E%2B90qPpgG%2BU5CNI1Zir%2B7dAMH4yn0%2BYywYtmpcI0Pza7bo1js5Qo%2BImXmm%2BozUGl0%2BNpCbhC0GibpopfY9GqcT27pptGGqiH2PkLXpHJu45fGC9xQ6pATiMfUookFaTAcLWRqIXBqZye5b1HHtmb5sr328ofEHfRMgnL7djTLFOaLWfVUGvpfeuabctN%2BzQfGpqgXzbNjgejDu7XlKao5BcrDECoLEWC%2B7%2B7A0ARrBZdUXdNjCfAo%2Ft%2Fl6TrO%2FxT9Sn%2BlR3Wy1wFQ6LbnCWI4uNsL9dCWn2N6lNo9GFCp80J%2FWHQFrdFh%2FXHrWW84Jy%2BgbmGOUZmQx4vAiGTSsANC2eSqRT2gVAUJHzd4CcJ1FKVcsRDI1A7nKWg%2F%2FaKpkJTbOwjo%2BH1e%2FMiD3f7hHIok41dsVIwt7PqwQY6pgHQCqXfdctu12Ns2KpHlFrJZPKAt7icWO%2Fc49jzyxZt0pF12ZGODH%2B3R2VLoteAtQ9wIq7N6Eh5kE5%2FbEqf00V3t4mmIEFkbevya58JvIAI7ilvVsiJY6nzAaPHz1pDnuwq229OFXupzQXLYDG2n7tK2mBg8IHFer7z9g9PyE5ft2FANdgNb2DMy1cOMj7OgxadGBrq%2Bq063OTOLiXXDDBCKY21wPdl&X-Amz-Signature=165ab8ecf98ed18578547d4558cf665e36a2221c194aba0b0e5182a0f07d8444&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
