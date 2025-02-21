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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIVGL5W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatqGxWeEgipoHFJ6GPniG5ATOXmtXkqIDdB3wPnItxAIgHA3GyfKUcCLDL3BshGbc2fhYLKoRgVXFT6j%2BU6hCu3oqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBar9ar9TrtWPSo8vCrcAz%2FZcvpv1y35Sxb%2BeohB4iREwsCE032h4Ymbje6OZ2%2FxAi7O1E1albaP6csZpkmUgZpAHkqoapEVhnHuUWSU84RbF6XORercJFAbRQQoaj%2BKi5KgDK2l3z%2FfudRimH2oMLUGrr%2FUNv%2FZTqyaEOQjPpCzQ60TZ0N6%2BQJExbPXOqzqbTA2GCPvevC9RRapem7YswNqthpBv9bvlyJ1hYUNqFXZzUeN6BzF5tBRKMtDVP0Ok6%2FUfKwZ9E6jyvLD574AGntdM934CnTa6O4VsPV3a0bINQA5EcRZ6mVURIvZSyObh7fvySdKU3nZOzA6OVBetrKRMyulVrik19hIUwk7VpC0zO%2BlbTT4BJYGj9ngP2fyLWFn0lhmBXZXjqeRlILPw2g61%2BWrMSnQhpHOef6kRFRNcHbs1KlsfXIGNMz415SlJR%2FHbfiPVU6QeQ7vfpLdA3w0bxWaclAzVAXuZxUvS32h5vTCjMstuogqjktfaGfOseRBI3h8escRPIQs2O973J5Pkzt754ID0U3piXoDoCTR%2FUuonYTPZCN%2FR1OW%2FWjlMw8Uj2OH5riCfHCqP3LU4taGcP7OEv9nH%2BUHlqAU6X3mDXkkoutx57X5%2BgKo1QXSkBZEhdCSxHfe2RZ5MI%2F2470GOqUBOoUhEyIN1CNnTtD75qUOascV1D9HN3lCnsEq4afk81ZRmfaYVBXpakMe%2FlxieLI%2BJOeAukHku0b7iNaSjZwV3LBUU3TZS2FqT0oDCG%2F4C3MFrk2vLyelgnxUOlZyCbu3%2F7IyDVf2cUUyAsnnx1a8MjFPf%2FwSy4pCoELPC5Zzx4T%2FE1Rzvap3kBVSFFt2P%2FYyNPIpe8UzARVZNGmPXsEJoCU%2Bfp%2BR&X-Amz-Signature=378784e6bcd7f56f12a02470e742477118a15aef8424671989aa9d4df15a1f74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIVGL5W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatqGxWeEgipoHFJ6GPniG5ATOXmtXkqIDdB3wPnItxAIgHA3GyfKUcCLDL3BshGbc2fhYLKoRgVXFT6j%2BU6hCu3oqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBar9ar9TrtWPSo8vCrcAz%2FZcvpv1y35Sxb%2BeohB4iREwsCE032h4Ymbje6OZ2%2FxAi7O1E1albaP6csZpkmUgZpAHkqoapEVhnHuUWSU84RbF6XORercJFAbRQQoaj%2BKi5KgDK2l3z%2FfudRimH2oMLUGrr%2FUNv%2FZTqyaEOQjPpCzQ60TZ0N6%2BQJExbPXOqzqbTA2GCPvevC9RRapem7YswNqthpBv9bvlyJ1hYUNqFXZzUeN6BzF5tBRKMtDVP0Ok6%2FUfKwZ9E6jyvLD574AGntdM934CnTa6O4VsPV3a0bINQA5EcRZ6mVURIvZSyObh7fvySdKU3nZOzA6OVBetrKRMyulVrik19hIUwk7VpC0zO%2BlbTT4BJYGj9ngP2fyLWFn0lhmBXZXjqeRlILPw2g61%2BWrMSnQhpHOef6kRFRNcHbs1KlsfXIGNMz415SlJR%2FHbfiPVU6QeQ7vfpLdA3w0bxWaclAzVAXuZxUvS32h5vTCjMstuogqjktfaGfOseRBI3h8escRPIQs2O973J5Pkzt754ID0U3piXoDoCTR%2FUuonYTPZCN%2FR1OW%2FWjlMw8Uj2OH5riCfHCqP3LU4taGcP7OEv9nH%2BUHlqAU6X3mDXkkoutx57X5%2BgKo1QXSkBZEhdCSxHfe2RZ5MI%2F2470GOqUBOoUhEyIN1CNnTtD75qUOascV1D9HN3lCnsEq4afk81ZRmfaYVBXpakMe%2FlxieLI%2BJOeAukHku0b7iNaSjZwV3LBUU3TZS2FqT0oDCG%2F4C3MFrk2vLyelgnxUOlZyCbu3%2F7IyDVf2cUUyAsnnx1a8MjFPf%2FwSy4pCoELPC5Zzx4T%2FE1Rzvap3kBVSFFt2P%2FYyNPIpe8UzARVZNGmPXsEJoCU%2Bfp%2BR&X-Amz-Signature=66eb667e111b9731f729f695873df68b7af2dc83ef22a75240b179a8ac470627&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
