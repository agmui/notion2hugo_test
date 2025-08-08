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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMIE2IX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD1HFtFvVAB89vQqtG2%2B7Pqqs0sOLskE2omfSBLghn6fQIhAL8EakukfyK6l%2FT47kFU9Z8aSYSBjtApcIALpuhQu9t%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcCA%2BDnn%2F7bTrRKMq3APxuF%2B21Fi4CRSS0mKUCPm1RmgggrmXVIPcISOIKMnDQ1QYLZZXFi83yiZukLrdrcKaenchJLrCYm1mqSDfHNNxILVhyh0GD5Rt%2FKZrBivGRdFfgAue227TQuUErbA3CWVSUq8nmR29b6hMudQ%2FVSu6Xq3CKTsElkUZ95xBCkQIohduKP8XYrCQT2GmOZ6lMYr2UZcNc8T%2BjxJPcIDjTIeZsud%2BqneSYpx7GPWqpcSoDg12NbuTSjEi%2BHFv8gQAo8%2FUHPPXLimBUb0ArkT%2Frhougmaw%2B3v1lfVRk6fOidOEXuo43c%2FRIkiiIl4LuIyLCIa%2BEka5irLEyoWysGQevv%2FMOYDDOASNRV2vSQTAS3wDnTUYvngXPy2V84t8zgG8AT6mRe%2FP07ZPQ%2Fgbfcp%2BAGbwtWZlHJ6HdhgZU3xWC1NDpSHJyhxobFGLW%2Boc%2F07GQh%2F5nnpZ%2BDaEU5QuXiLiihOHGQ9a6n7TSQYTu75LNcipOKn%2Fj92Z4OaienjjyCmEUEl828cgdsLaX7pNvStu0h%2B%2FCRCzNhIvq00k2aXZ79Z4uNJMQspq8RQ73lQLVZVHnoiOVvO%2BkFBrl9X58z9%2B%2BJ0lS26RS%2Bk0FVNAaZEVn%2BADoShT8cA80VW26sT0qTDCx9bEBjqkAdgygL63%2F6IhvVuvTCHixFAceEk562QqcJHBx2mo3CTeGBgvu%2FFXJ4zVaXUNzZjYHf6HuZ6XhFcWeb3coWwSx2YiewcqUItg2290HC2b5y8RCPoRoaCUmCNEEttaafuS6iNrnSfDVRBc3padgEu%2BUIx0M%2BbQZu0xqU4%2FcqOkf1lfRCn39nmUSU0eY8q5z%2Fxj2m%2BPXZyeHo9zwtfgGMRZ2qpBO%2Fpz&X-Amz-Signature=36a5c67b2d4056d93ecd3dfdb0d1ba02df5a4233e2d1eba24532fbcb85b6da3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMIE2IX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD1HFtFvVAB89vQqtG2%2B7Pqqs0sOLskE2omfSBLghn6fQIhAL8EakukfyK6l%2FT47kFU9Z8aSYSBjtApcIALpuhQu9t%2FKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcCA%2BDnn%2F7bTrRKMq3APxuF%2B21Fi4CRSS0mKUCPm1RmgggrmXVIPcISOIKMnDQ1QYLZZXFi83yiZukLrdrcKaenchJLrCYm1mqSDfHNNxILVhyh0GD5Rt%2FKZrBivGRdFfgAue227TQuUErbA3CWVSUq8nmR29b6hMudQ%2FVSu6Xq3CKTsElkUZ95xBCkQIohduKP8XYrCQT2GmOZ6lMYr2UZcNc8T%2BjxJPcIDjTIeZsud%2BqneSYpx7GPWqpcSoDg12NbuTSjEi%2BHFv8gQAo8%2FUHPPXLimBUb0ArkT%2Frhougmaw%2B3v1lfVRk6fOidOEXuo43c%2FRIkiiIl4LuIyLCIa%2BEka5irLEyoWysGQevv%2FMOYDDOASNRV2vSQTAS3wDnTUYvngXPy2V84t8zgG8AT6mRe%2FP07ZPQ%2Fgbfcp%2BAGbwtWZlHJ6HdhgZU3xWC1NDpSHJyhxobFGLW%2Boc%2F07GQh%2F5nnpZ%2BDaEU5QuXiLiihOHGQ9a6n7TSQYTu75LNcipOKn%2Fj92Z4OaienjjyCmEUEl828cgdsLaX7pNvStu0h%2B%2FCRCzNhIvq00k2aXZ79Z4uNJMQspq8RQ73lQLVZVHnoiOVvO%2BkFBrl9X58z9%2B%2BJ0lS26RS%2Bk0FVNAaZEVn%2BADoShT8cA80VW26sT0qTDCx9bEBjqkAdgygL63%2F6IhvVuvTCHixFAceEk562QqcJHBx2mo3CTeGBgvu%2FFXJ4zVaXUNzZjYHf6HuZ6XhFcWeb3coWwSx2YiewcqUItg2290HC2b5y8RCPoRoaCUmCNEEttaafuS6iNrnSfDVRBc3padgEu%2BUIx0M%2BbQZu0xqU4%2FcqOkf1lfRCn39nmUSU0eY8q5z%2Fxj2m%2BPXZyeHo9zwtfgGMRZ2qpBO%2Fpz&X-Amz-Signature=3fbb1aa888d374f9eb89927048ecfc1df09bd6c3f6dd3a3b03ce1b7d46a43bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
