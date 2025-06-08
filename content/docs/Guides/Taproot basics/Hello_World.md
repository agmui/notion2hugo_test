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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFG2ONY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpSqly7zmn6Ie1afijSQSpYYkCaKhqFGNc6clk5FCUWAiEAtt97%2BAdDbJ%2BFSSzq62FJJbPJKANiesRw5orzNFtnwCwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGwqvfZ7xk7odzQdSrcA0pj9Q3m7sCwpNkTpuSuJm3t%2F1oG7wf680o7%2F9JcMAcD3b%2FKdHsjo5IhXyX0fQaxv9yap1fclRIHZdFLSvgeFrckO6x9QuIapqMF7c0wKlPGjPHjF9IHRwmgGB23NKlFL9GSsy3xmF8H5rj5IAFG%2BDitUTSBA101gQhpC%2Ffq0gRznJfU28HSWlK8%2FpffndqGJgizMmlW4F%2BDHOcnL7ovJn%2BEGtoSU%2BvkLlJRabeggUIiLp9rAAp9z5T3eujhrEWLFzouH4weprYqQyYjLbrV5Aq5ZOdhPDrP9OHFJbdVpwo7kNB3Nw5VS842U2Ka9rpGla7bBRa3u9lQf48zGHiqfjWcidrFX0nkOfw12RAjq5fiWPhJFAPhrEpGdH5NrKTSI%2FQfD%2BbNXjvgKPkmxQOHEfcNoQnrXw3s47lM4gJz9BmRa2n9BCUWzo9gEJCm8t0najsiQY8cTe5A0oT78pd0zCCrS3296eYWu4dlfAjhjzQdfXVet8mtTn6ziaT3PhzocFqedtnqrmLVkrZOiTnFzZdFshK%2FurOxRgZ%2BSUIowwEWVM6N1%2F8h3BoAKaBAiScfAOvLhVvZtgo0CUFBXEYPAUq3Iobuh5yS7Rp3NYTnSAlHrAbr9LzhX%2B0e%2FN7hMKimlcIGOqUBlz01uQS2xLPb7ys7v%2FjVga8rRpVfXNA8h%2FxVuLyXDH6iv7qcVtLlA0JA%2FPbOhR5zt2NJl8du8mUv%2FakC8NDLkBudjAcooyLUTXbUOKlwD3vA9wjPZ110ijusjmoG12lw%2FPb3LlbcC4Udbw%2Bl4D2OZyOqM8%2Fv22vXOaMXOSdHaC2aCueEXQZ36cZ5ueKPpLnlH8JdO798GDCUJaRE2610U0ZfVAeZ&X-Amz-Signature=36c29eb69d7d41b1a3af82c33b6be625bb609913dc7f47783981dfcf1bce1761&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFG2ONY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpSqly7zmn6Ie1afijSQSpYYkCaKhqFGNc6clk5FCUWAiEAtt97%2BAdDbJ%2BFSSzq62FJJbPJKANiesRw5orzNFtnwCwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGwqvfZ7xk7odzQdSrcA0pj9Q3m7sCwpNkTpuSuJm3t%2F1oG7wf680o7%2F9JcMAcD3b%2FKdHsjo5IhXyX0fQaxv9yap1fclRIHZdFLSvgeFrckO6x9QuIapqMF7c0wKlPGjPHjF9IHRwmgGB23NKlFL9GSsy3xmF8H5rj5IAFG%2BDitUTSBA101gQhpC%2Ffq0gRznJfU28HSWlK8%2FpffndqGJgizMmlW4F%2BDHOcnL7ovJn%2BEGtoSU%2BvkLlJRabeggUIiLp9rAAp9z5T3eujhrEWLFzouH4weprYqQyYjLbrV5Aq5ZOdhPDrP9OHFJbdVpwo7kNB3Nw5VS842U2Ka9rpGla7bBRa3u9lQf48zGHiqfjWcidrFX0nkOfw12RAjq5fiWPhJFAPhrEpGdH5NrKTSI%2FQfD%2BbNXjvgKPkmxQOHEfcNoQnrXw3s47lM4gJz9BmRa2n9BCUWzo9gEJCm8t0najsiQY8cTe5A0oT78pd0zCCrS3296eYWu4dlfAjhjzQdfXVet8mtTn6ziaT3PhzocFqedtnqrmLVkrZOiTnFzZdFshK%2FurOxRgZ%2BSUIowwEWVM6N1%2F8h3BoAKaBAiScfAOvLhVvZtgo0CUFBXEYPAUq3Iobuh5yS7Rp3NYTnSAlHrAbr9LzhX%2B0e%2FN7hMKimlcIGOqUBlz01uQS2xLPb7ys7v%2FjVga8rRpVfXNA8h%2FxVuLyXDH6iv7qcVtLlA0JA%2FPbOhR5zt2NJl8du8mUv%2FakC8NDLkBudjAcooyLUTXbUOKlwD3vA9wjPZ110ijusjmoG12lw%2FPb3LlbcC4Udbw%2Bl4D2OZyOqM8%2Fv22vXOaMXOSdHaC2aCueEXQZ36cZ5ueKPpLnlH8JdO798GDCUJaRE2610U0ZfVAeZ&X-Amz-Signature=d0a47bdc83e062682e00cc658d3ebcb58c44ae732eda185c942532ff9bebb910&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
