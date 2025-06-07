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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHM5P66F%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuKgqBPqbF9UX3og1T0LH4HP9y73y2duqynLYXp9kb7AiBpjYMXSERzLgIKtrUV1iPOYBUNumre%2BMpsNBlhQZmX3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdB5rQruXszGArpCoKtwD5AVbk9aG1HottsckqiyV9KXowqWByssuFQqqXTfkeHh6bypoHVnwH6WpuKh13iyOut2KTDy3SEcMfyWE%2BHlx3TMVhEFg25DOxunWPF72lEPEZcjy9nf1rwf%2FVrYugWQRTl3WaMlEpyEZc5746IaGodIXqy34tNQBTKtEAPgbfccsGF8cIEa7VRbMTzLi3syXAr9yAhfbiFdMFYMryEwgqrUVQD2%2FeTrjol2GLejmrnn8mcmMlkLQXd%2BB0KmYJbM0lcdl8mNPeWx41u7DgxVoOKqH6Pz26fVLNrcq6JfOP6rCmWmbOxjwzBunyDtnpxlrrdUf171Qqc63fldtdw5NDQRMxF0z94QfgK4%2BGgUAPaCNR6EynaGCaKomQf%2B2fRqSOKxFc0oSHdNLcL4RXmkuDqmoIlp%2BYmUbtTnpcAUtKJVYSjdH4Ia1sIqENOTWdlPKXMXhqv4lkUlBg4e8LsVK6T7r5qET%2BgtG3OvbXN3yWq8HV3QTiKG39C54c93zt4RKWahxNft%2B%2Bufl7BUQHbaWGmSxjmSnXQz%2FZziN1cNB4nUDBLOojt4AGEZGL3wigygnWLv%2F0FpPfEbjoiGhLVnq8B%2FVQllootU4xJovjD9W19B96pLvuEhRYBaA3xUwgoGRwgY6pgGJ0rnmmbGCiMRMvdOJp38poAn%2FifAssEr1GnnXy2iH%2FxoKp5RtyI7gdwyOf4V%2FWRCt56Q7gmB22tZWsFGdMqKDsJpiMyJg7Yux%2BEbrCXy%2FxMJ23F37o5nu9mqPfsCfnNp%2BKKwb%2F%2F1Tsdt%2BLtR6lDmsgedYUf0iBWiGe8O1kBDcfiMmDbZnkhXKViJ0t20kUplIfqCCAktnNQFDZpBsi1rpTRGUIZzN&X-Amz-Signature=3caafa6487c3e05bc67a8a77651a6fbe837be909fcf4d2704c27720ba99045b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHM5P66F%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuKgqBPqbF9UX3og1T0LH4HP9y73y2duqynLYXp9kb7AiBpjYMXSERzLgIKtrUV1iPOYBUNumre%2BMpsNBlhQZmX3yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdB5rQruXszGArpCoKtwD5AVbk9aG1HottsckqiyV9KXowqWByssuFQqqXTfkeHh6bypoHVnwH6WpuKh13iyOut2KTDy3SEcMfyWE%2BHlx3TMVhEFg25DOxunWPF72lEPEZcjy9nf1rwf%2FVrYugWQRTl3WaMlEpyEZc5746IaGodIXqy34tNQBTKtEAPgbfccsGF8cIEa7VRbMTzLi3syXAr9yAhfbiFdMFYMryEwgqrUVQD2%2FeTrjol2GLejmrnn8mcmMlkLQXd%2BB0KmYJbM0lcdl8mNPeWx41u7DgxVoOKqH6Pz26fVLNrcq6JfOP6rCmWmbOxjwzBunyDtnpxlrrdUf171Qqc63fldtdw5NDQRMxF0z94QfgK4%2BGgUAPaCNR6EynaGCaKomQf%2B2fRqSOKxFc0oSHdNLcL4RXmkuDqmoIlp%2BYmUbtTnpcAUtKJVYSjdH4Ia1sIqENOTWdlPKXMXhqv4lkUlBg4e8LsVK6T7r5qET%2BgtG3OvbXN3yWq8HV3QTiKG39C54c93zt4RKWahxNft%2B%2Bufl7BUQHbaWGmSxjmSnXQz%2FZziN1cNB4nUDBLOojt4AGEZGL3wigygnWLv%2F0FpPfEbjoiGhLVnq8B%2FVQllootU4xJovjD9W19B96pLvuEhRYBaA3xUwgoGRwgY6pgGJ0rnmmbGCiMRMvdOJp38poAn%2FifAssEr1GnnXy2iH%2FxoKp5RtyI7gdwyOf4V%2FWRCt56Q7gmB22tZWsFGdMqKDsJpiMyJg7Yux%2BEbrCXy%2FxMJ23F37o5nu9mqPfsCfnNp%2BKKwb%2F%2F1Tsdt%2BLtR6lDmsgedYUf0iBWiGe8O1kBDcfiMmDbZnkhXKViJ0t20kUplIfqCCAktnNQFDZpBsi1rpTRGUIZzN&X-Amz-Signature=137206b38689b055ed2290fcd76d24e8a8432e08e8e75a7cf4053853f9f24095&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
