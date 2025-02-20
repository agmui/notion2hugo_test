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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGDRRATR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGgz2j4kDjUgOyWAzUZ6r2ndAYnBAnERRB3xgOn2Hd8gIgOLHzGpVS7Cdd%2Bis2oYq9drbeEr3i8RwbwjoRu7pAqpgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQf8%2BlTXoQaNEjxJSrcAzQj5Qg%2Bxic2di4ZxBdKqSgO7XReffU9hIu4JorYKv0Mdh5BPo9jKVhBCCTq5XI42CrncZQJ3DBpH%2F6H1kn1Hg%2BSaEv4j48Ucq4%2Bpb%2Bs8IuHjx2tsWJtChfHraPvtOFLUkUtR7cIoOhmPDdrBpYJcB6yfb5YCYILtT3jvwVFBL5Ce%2Fp8P2VSuIOYttrhk7nmHv0o%2FgL8BroszmO5GZCl4frwJvHaEeWDwv0NlAZ46eg5lwXp0cJnLOw5EX%2B%2BTIzfGvHyMs7ZRK%2B3g6Cz5SKjy30ehxvtRVCwMeKuA0vE4uIxBqYYhmfG6VVjHxUwzB3aRRRdlHfAZLKWGSL3U7%2B5mKAGdmgG9YFUUvKWmV%2BsWCPeYIVtjZyoZWIuSUzjoApXL1cYIK4oF2z3KW5%2Bm8SpeMI7ORTpPxij5CPqtYkMGohyeIS8YC2J9dXd1pMt0lI9L93iCXJD5Au%2Fh2pJKsFWmrLBKj5bZmSDDrdajKNAus%2Fi7Fg51zPsZmnPJTBOios91gbp69V%2FocRA2%2FN3hTA%2B%2FkIj7o%2F0Ijiux1AVFM3kzuTOSiGute6QEgsEaASc7ArPuddm%2FOFuVfQwjDaxgLX9I5LXSfod7KZPsfes1hWPdNmfzeqM6F0rJWF1YwLoMKW8270GOqUBbZprQ%2FOlXAa8D3J%2BFpuF%2B5ux2jS3ILedjphZrRg94otAVU%2BhV1M2oN1Ku07JkCro0ROV12Q4PXkiCBWk9pssjM0VRQl4vfeAKMy87%2BhRJw1MiahuXP7B10NFaMvJd8WaMeyQmbrgZ4WIrXZpwA3AnPZ%2B%2Bo1K37AGbg1BVdbO0IcQNeHJZ5%2BPR33KrVR7I3nmhl%2Fzq7EoOgJ98%2BuUO2iCqlljIjp0&X-Amz-Signature=9566ed1d33028d8e93e81bfcc8753538f6b56134b1fd26ba955b5db50ecf35ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGDRRATR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGgz2j4kDjUgOyWAzUZ6r2ndAYnBAnERRB3xgOn2Hd8gIgOLHzGpVS7Cdd%2Bis2oYq9drbeEr3i8RwbwjoRu7pAqpgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQf8%2BlTXoQaNEjxJSrcAzQj5Qg%2Bxic2di4ZxBdKqSgO7XReffU9hIu4JorYKv0Mdh5BPo9jKVhBCCTq5XI42CrncZQJ3DBpH%2F6H1kn1Hg%2BSaEv4j48Ucq4%2Bpb%2Bs8IuHjx2tsWJtChfHraPvtOFLUkUtR7cIoOhmPDdrBpYJcB6yfb5YCYILtT3jvwVFBL5Ce%2Fp8P2VSuIOYttrhk7nmHv0o%2FgL8BroszmO5GZCl4frwJvHaEeWDwv0NlAZ46eg5lwXp0cJnLOw5EX%2B%2BTIzfGvHyMs7ZRK%2B3g6Cz5SKjy30ehxvtRVCwMeKuA0vE4uIxBqYYhmfG6VVjHxUwzB3aRRRdlHfAZLKWGSL3U7%2B5mKAGdmgG9YFUUvKWmV%2BsWCPeYIVtjZyoZWIuSUzjoApXL1cYIK4oF2z3KW5%2Bm8SpeMI7ORTpPxij5CPqtYkMGohyeIS8YC2J9dXd1pMt0lI9L93iCXJD5Au%2Fh2pJKsFWmrLBKj5bZmSDDrdajKNAus%2Fi7Fg51zPsZmnPJTBOios91gbp69V%2FocRA2%2FN3hTA%2B%2FkIj7o%2F0Ijiux1AVFM3kzuTOSiGute6QEgsEaASc7ArPuddm%2FOFuVfQwjDaxgLX9I5LXSfod7KZPsfes1hWPdNmfzeqM6F0rJWF1YwLoMKW8270GOqUBbZprQ%2FOlXAa8D3J%2BFpuF%2B5ux2jS3ILedjphZrRg94otAVU%2BhV1M2oN1Ku07JkCro0ROV12Q4PXkiCBWk9pssjM0VRQl4vfeAKMy87%2BhRJw1MiahuXP7B10NFaMvJd8WaMeyQmbrgZ4WIrXZpwA3AnPZ%2B%2Bo1K37AGbg1BVdbO0IcQNeHJZ5%2BPR33KrVR7I3nmhl%2Fzq7EoOgJ98%2BuUO2iCqlljIjp0&X-Amz-Signature=5f4f79bcd3ea968b62bf81ef89eae49a49680f2fd4b59fc34b2cf0e17e4f2572&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
