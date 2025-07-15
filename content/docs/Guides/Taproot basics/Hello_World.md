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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFJNSJH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDyLT09od57czPkU%2BpRWWr7jIfJhBw2HF8MFJhC0%2B9t1AiBI7eXkquXHOkybo%2F2BM%2FVxARHyb9yCEAHqLKcvDQhovyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM6K0ocVkcPaZ%2BjtwNKtwD8TFZE8cT0CQbDx1YnSwXbBtR2XYS%2FvxrbffrvhBXupcyOUm9KTwWLTpfJdC168aXbOvt1bWmRLVPXFjphmYVrjswmP%2FmPfVikCQmpq8SZ3%2FN%2FBFoAdeT%2BpEp4auApej0GHndKW53mLRaSElcEsJ%2F9%2Fh6PDWchBt%2BXZbZXconHpAu%2Bc%2B8fIfM6BLVTPptBuNXZQc5kHauuXf13%2BS7%2BsKUPJevyN1iHVY8MVnpIRDK1eXlrHgsaKnk1%2F80tM%2BzthnmIQX0G4U9yBOEmYTh8x%2BxqEvgzdNOviuYWgsw%2Frp7v%2BmXqJ%2BmuqyLA6jL5IkfjTsCXDoU3q2F%2BaBBiGLJb%2FaCM1ubpT5Fch7uBMacHssGq5iBdyT6dzDWPfeSObTpptfwd%2BFZMCX%2FLpz3sFHRhvyKPAWgzHz7yVDH%2F918TeTFM34Rxilv8HDJPHZiW2kBL7sKMvZ20riMtQYCQ605dccpO4Emo0BA3rXMHigEEaUsRSRKtLnfDCfHHf7TWxkGRENky2HEjxQZal%2FkZds60x25Jc5ErEVOeVhPMydwgyOjJD0BMpzIndcq%2B%2BJsAZUeH9iMcNx%2FebYEOc3JO704mxo1OHzpQVes0jAzfc8NHSLhPv8WzPcwSCCPDcEQGHUw1dnZwwY6pgHMTs7omaJjAirBPLzTfnRp6wnywSYP5UPhSIBbbfIJ%2FOEenJH%2BF%2FCZbZEOjF2q3LW%2BQ43u4b%2B3dMnuzyP65cydrUPWaeMoYz6ONdeAVwx3Mcn9xHG8NmbsWbiYuqwB3p%2F%2BW79TflYFBQxRvcN2xBxmDYYLNa8Jj3ePSx%2BEkTgb2EKyRd4W2rlHjOotNPkz16RPxOW6ogv6UDXJkq7rdqxUQ0EHHpRP&X-Amz-Signature=799c2b9cb03944085b769d986a8e29e28d61b74833aa8e6731494eb804b71568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGFJNSJH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDyLT09od57czPkU%2BpRWWr7jIfJhBw2HF8MFJhC0%2B9t1AiBI7eXkquXHOkybo%2F2BM%2FVxARHyb9yCEAHqLKcvDQhovyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM6K0ocVkcPaZ%2BjtwNKtwD8TFZE8cT0CQbDx1YnSwXbBtR2XYS%2FvxrbffrvhBXupcyOUm9KTwWLTpfJdC168aXbOvt1bWmRLVPXFjphmYVrjswmP%2FmPfVikCQmpq8SZ3%2FN%2FBFoAdeT%2BpEp4auApej0GHndKW53mLRaSElcEsJ%2F9%2Fh6PDWchBt%2BXZbZXconHpAu%2Bc%2B8fIfM6BLVTPptBuNXZQc5kHauuXf13%2BS7%2BsKUPJevyN1iHVY8MVnpIRDK1eXlrHgsaKnk1%2F80tM%2BzthnmIQX0G4U9yBOEmYTh8x%2BxqEvgzdNOviuYWgsw%2Frp7v%2BmXqJ%2BmuqyLA6jL5IkfjTsCXDoU3q2F%2BaBBiGLJb%2FaCM1ubpT5Fch7uBMacHssGq5iBdyT6dzDWPfeSObTpptfwd%2BFZMCX%2FLpz3sFHRhvyKPAWgzHz7yVDH%2F918TeTFM34Rxilv8HDJPHZiW2kBL7sKMvZ20riMtQYCQ605dccpO4Emo0BA3rXMHigEEaUsRSRKtLnfDCfHHf7TWxkGRENky2HEjxQZal%2FkZds60x25Jc5ErEVOeVhPMydwgyOjJD0BMpzIndcq%2B%2BJsAZUeH9iMcNx%2FebYEOc3JO704mxo1OHzpQVes0jAzfc8NHSLhPv8WzPcwSCCPDcEQGHUw1dnZwwY6pgHMTs7omaJjAirBPLzTfnRp6wnywSYP5UPhSIBbbfIJ%2FOEenJH%2BF%2FCZbZEOjF2q3LW%2BQ43u4b%2B3dMnuzyP65cydrUPWaeMoYz6ONdeAVwx3Mcn9xHG8NmbsWbiYuqwB3p%2F%2BW79TflYFBQxRvcN2xBxmDYYLNa8Jj3ePSx%2BEkTgb2EKyRd4W2rlHjOotNPkz16RPxOW6ogv6UDXJkq7rdqxUQ0EHHpRP&X-Amz-Signature=716e17312a75e445894713a9b40a5d541991ebbab3efe6bb98ede00b45e3999f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
