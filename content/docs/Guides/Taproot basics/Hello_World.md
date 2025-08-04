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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4HZY6M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE9krscoIMiOU3HS6WIMG64N0BvDQTRnVUIwwvnED3HRAiBDsiYz3HaetzCz%2F0PqloDazCp19XhKiH10SlIedJ9u5Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM7UtrKrJMeAXekxIPKtwDVWXfq6Q5GCwevU4m1yI3a652%2B2K6BqEkis4ql5M6u1UDAUYoG83hmxlhl1o2CaUt1az0gIbidINGMgjMJ5MuyLhNjMXldgSPVPrgU7cNfeJdh%2FBIokrvnwTuVM%2BdzAcUu2Cgu0Y9Gxy9sxeCOjtshkJV%2FFmTqVwvCoblEeVbf3KxOdFKDGf7jkAw6pCGhop7FUOF6PiN8y9cbG0w%2F30wRYiQlzTgolpBuETiupHeOhyxyZX%2FPPPMbCp5Fl4VyoQiCR120GDVzQMUPHhk63ANIAXDYZpXZk3vUAtBCUwp4%2BZ39FJghuBgHCxhuf3kZfwaJXo1U%2FODsT9lgSz6ILyN%2FPwMh%2B8in8B6e1uX%2FBkiD5L4MJvWr1EYEvOpY%2BeNQMEhOMmLvt8VJJryNwdt7D5d51FzA3O6APhz3ld%2Bwe0vxgwndnyQHTYZ0HaYHElGWy6HxYDZG6xBPmK0YEPfCL%2BFxFXsYn9vlLIi0xxKuj10SwAIS27XoZfXl9vzonbbIppd6LcNDdkIx2Xk%2F6mmB6B98CInSYFyhKIJ7S%2FjG9Ah%2F%2FodJnYNutFXlrMjRPF8UitiXCeAFwfAC606lg62K1YKFlird2WQpebgQxUAJquD%2FrbhAraS05oAsKitByowrKbCxAY6pgHrszzQRho5smiAI1hAYMCCEZyDP8c8qHvbKy28TWrIhA%2F56ol3uuDiou133VzLpdmPppsWYP1FC3Gs42E7nnlf1MOxu%2FRcxxuruyZF2A2Zv4Fb%2FQHaTuoRGGOawbc4mMlSU8u58JJ5VJv0LVBxvti6X%2F%2BNrbq3p8naZaSltCqZXgdljhDUaxoG1BM0FIEdRpQ9kgJBvbEod0hJDsmppRSDRxV6sDk1&X-Amz-Signature=47858817d2b2b2b40d51badbc1c1b4172a08d8f3c499633c3bf26f5cd44e94f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A4HZY6M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T110959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE9krscoIMiOU3HS6WIMG64N0BvDQTRnVUIwwvnED3HRAiBDsiYz3HaetzCz%2F0PqloDazCp19XhKiH10SlIedJ9u5Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM7UtrKrJMeAXekxIPKtwDVWXfq6Q5GCwevU4m1yI3a652%2B2K6BqEkis4ql5M6u1UDAUYoG83hmxlhl1o2CaUt1az0gIbidINGMgjMJ5MuyLhNjMXldgSPVPrgU7cNfeJdh%2FBIokrvnwTuVM%2BdzAcUu2Cgu0Y9Gxy9sxeCOjtshkJV%2FFmTqVwvCoblEeVbf3KxOdFKDGf7jkAw6pCGhop7FUOF6PiN8y9cbG0w%2F30wRYiQlzTgolpBuETiupHeOhyxyZX%2FPPPMbCp5Fl4VyoQiCR120GDVzQMUPHhk63ANIAXDYZpXZk3vUAtBCUwp4%2BZ39FJghuBgHCxhuf3kZfwaJXo1U%2FODsT9lgSz6ILyN%2FPwMh%2B8in8B6e1uX%2FBkiD5L4MJvWr1EYEvOpY%2BeNQMEhOMmLvt8VJJryNwdt7D5d51FzA3O6APhz3ld%2Bwe0vxgwndnyQHTYZ0HaYHElGWy6HxYDZG6xBPmK0YEPfCL%2BFxFXsYn9vlLIi0xxKuj10SwAIS27XoZfXl9vzonbbIppd6LcNDdkIx2Xk%2F6mmB6B98CInSYFyhKIJ7S%2FjG9Ah%2F%2FodJnYNutFXlrMjRPF8UitiXCeAFwfAC606lg62K1YKFlird2WQpebgQxUAJquD%2FrbhAraS05oAsKitByowrKbCxAY6pgHrszzQRho5smiAI1hAYMCCEZyDP8c8qHvbKy28TWrIhA%2F56ol3uuDiou133VzLpdmPppsWYP1FC3Gs42E7nnlf1MOxu%2FRcxxuruyZF2A2Zv4Fb%2FQHaTuoRGGOawbc4mMlSU8u58JJ5VJv0LVBxvti6X%2F%2BNrbq3p8naZaSltCqZXgdljhDUaxoG1BM0FIEdRpQ9kgJBvbEod0hJDsmppRSDRxV6sDk1&X-Amz-Signature=268af002c30a31a18337ddaa5f4b008bc531ef32e93ab7dfccfc9b3390fcba89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
