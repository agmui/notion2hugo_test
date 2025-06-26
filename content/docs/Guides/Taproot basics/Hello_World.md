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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXSPBIO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDmQ2fOZ1Bw5cqAS%2FUGpx913x%2BxuZHPvrxrzaeuhkPjiAIgGvEAJHmPoH3PLm0GMV%2B6biVkBvfA4mvX3GEKJ3mR%2F2oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOHShe5YDDfqx%2Bg2eircA7HFhsmG2yeZzvzNiFKWFnuHXFiJEa1rBDkE8Qz7LNGJQSHonsGe2pYxOHxsuttsLb%2Bh1GQtV%2BvlXxy94L844nIpEQpeOXP%2FIinZ2T%2FmCyrkCUbCw3wWYJwFFokNIGvIVQ9jap2eBWLem5LSv1%2Bjw8hbT55ItY2Jsrhz7ICQU6ck2aTNmPbQMICtAcBwZxGJQIHNJyonraen4Bkw50OQokjYeqxwcESg3EqnGQ55mEtmwvMZzEhUV6wlcDha%2BfoB8v4uJzwd6SImCrhBhjDPCLL%2Fxa8UT0tXPfx7a22Ml5U1ENW9xeLo1%2B7Dcx2Eo7HMxMoG4o54r5%2FrirZqF3g%2FHrzVs%2BQop5cZqqp9qDgFVr8Qpm24zB7si1Q5I1VNCzImKAMsn6leuzMMT561yzVu7l0vEtmRqzSUrCQCsAZhWUfDeGnzmcyBHNtULJ1zXZvE0cg%2BwCnA3JdCFqiH5%2BPXRhvoD4i4b%2Fy8qMlUK98UCY8HeCTV2paun%2BAnOF9WvOVEOtwlSJZ8SRsDbNUkkDouoBafq2ACaoB0O7i8JiI%2Fb7851yfsvaoB1aRMSRAs1MlXvHFBN3oIMrXb7zv5KZAPswERfhDkkwRQfdx4MbXKB60mxrdtMLAbL8yQ7RYVMIqJ88IGOqUBGmfAegX%2BUdQq9HjfrfrTUQA3W0B5BtUU0%2FY4a40l8TpVnD63BX%2FdONWOT0ooPoy%2FdaoNOQ1ZcQqHuCmbX9Rj9KcdN959p9Ori8w0UkyZsZpUZopHM%2FvEupvvIxYWwJVbeCbGiTFgocug2FyLfavZBUfWiKa16q5owInIEOg2qW%2F6R11tXF21e9PgzkMpSY84TpouQJ3VGIO6GuYXGipSrnTJ7iFj&X-Amz-Signature=90857746822528b8d13e8000fe9add5c8e18afb84cd3e98c6af9cdea8d793700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXSPBIO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDmQ2fOZ1Bw5cqAS%2FUGpx913x%2BxuZHPvrxrzaeuhkPjiAIgGvEAJHmPoH3PLm0GMV%2B6biVkBvfA4mvX3GEKJ3mR%2F2oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOHShe5YDDfqx%2Bg2eircA7HFhsmG2yeZzvzNiFKWFnuHXFiJEa1rBDkE8Qz7LNGJQSHonsGe2pYxOHxsuttsLb%2Bh1GQtV%2BvlXxy94L844nIpEQpeOXP%2FIinZ2T%2FmCyrkCUbCw3wWYJwFFokNIGvIVQ9jap2eBWLem5LSv1%2Bjw8hbT55ItY2Jsrhz7ICQU6ck2aTNmPbQMICtAcBwZxGJQIHNJyonraen4Bkw50OQokjYeqxwcESg3EqnGQ55mEtmwvMZzEhUV6wlcDha%2BfoB8v4uJzwd6SImCrhBhjDPCLL%2Fxa8UT0tXPfx7a22Ml5U1ENW9xeLo1%2B7Dcx2Eo7HMxMoG4o54r5%2FrirZqF3g%2FHrzVs%2BQop5cZqqp9qDgFVr8Qpm24zB7si1Q5I1VNCzImKAMsn6leuzMMT561yzVu7l0vEtmRqzSUrCQCsAZhWUfDeGnzmcyBHNtULJ1zXZvE0cg%2BwCnA3JdCFqiH5%2BPXRhvoD4i4b%2Fy8qMlUK98UCY8HeCTV2paun%2BAnOF9WvOVEOtwlSJZ8SRsDbNUkkDouoBafq2ACaoB0O7i8JiI%2Fb7851yfsvaoB1aRMSRAs1MlXvHFBN3oIMrXb7zv5KZAPswERfhDkkwRQfdx4MbXKB60mxrdtMLAbL8yQ7RYVMIqJ88IGOqUBGmfAegX%2BUdQq9HjfrfrTUQA3W0B5BtUU0%2FY4a40l8TpVnD63BX%2FdONWOT0ooPoy%2FdaoNOQ1ZcQqHuCmbX9Rj9KcdN959p9Ori8w0UkyZsZpUZopHM%2FvEupvvIxYWwJVbeCbGiTFgocug2FyLfavZBUfWiKa16q5owInIEOg2qW%2F6R11tXF21e9PgzkMpSY84TpouQJ3VGIO6GuYXGipSrnTJ7iFj&X-Amz-Signature=7476c175753330d90311b53d1e01d5936eae69e60351248fa305d80b0e390653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
