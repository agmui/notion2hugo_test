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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEIZZER%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcIwJNpaVWQdQourZelIgk31OsC%2BTJawJs%2FL7pqadoOgIgaZvIr8lVI6VEtcq3Chwh9pBr4E%2FVh1NuNFbBk0SYqmEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPbX3T%2FAtd88r0fdDSrcA1tq4HM6HjYwTC6La5YvtG0rx93hwgVacAutGaq7iFkM7W1XV50LCuKihRn%2BMS%2F2PaTsdByLdSVSDDuGqMaJy0Zsx3mNXBTS1Cn9FNGFjRrxKS0XBl6DnUuAkK8s265iHb3h6ZxgcL95UzujhReGBQ8tYe2Aiq2fS%2BtlQUYYWFeQGjH3GdepWMfZaEvyIoTzP%2F9giC1BMXIHwcvKz296XDNIaDL9xwe%2BVSRzzt6iALKL0ING4UYYK1sFLubnTHCJuWvXAFRbY0QUSFSKf01znrhzxwza2PnsmYK8B4rmf9ycvRG8Jk2qNYuTd6DOL13sKCQZEinLFYdY%2F%2Br1S9IObZgWzvW7F3DEHwcgboSdqeJBt3j7BwAbn4SBaWIyIpqLp%2BoyociZ7uctVlvy6xaq5euf8fnhc8%2FLaMghpnVZSsmXG0DztfTd5yJip1eneHW1TGxbwDs8tMWvxRCiYzns%2BgH%2F6W1k9EgaKTFhhSCgwtVVoecMGDC38EnF%2FQk%2Bu1eRhBbMbtqXBgg%2BCUv94TY5ll9ChdqeesQu1NkPP4PKy3HvDIx2%2B%2BB8t10Sl2em2u22XB7M%2FRo3BQCzpWbiFP1VvhwJm%2BXid9mu4vPMxMMjOlVHlv6Ou0LoLk%2F1zwIJMKfzgr0GOqUBY%2BqJC7RvjRjPt4iu3MP8kdWwu3wtbjukve0t%2FaSvLJEgaabD9flGMstDNftHhj0tSya8NsMPvo8DjAS4%2Br6AhyJGMFp8JdBxqn4MBR5UPU0gOQiSshp9mUqP2aitUkeVNw0b65TQrVqHxD5zxht9jM0tDl1MM5I3it18UfH9LIBTTREmfXQqpLS0eyUsnipsjoGKCwq4ltIy5RGtQaz%2F42bIg%2FAU&X-Amz-Signature=92dd21c48a871a04bba61b1e10e0ea8d357dfe47e82e3cb9373fbc3f6fea37e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEIZZER%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcIwJNpaVWQdQourZelIgk31OsC%2BTJawJs%2FL7pqadoOgIgaZvIr8lVI6VEtcq3Chwh9pBr4E%2FVh1NuNFbBk0SYqmEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPbX3T%2FAtd88r0fdDSrcA1tq4HM6HjYwTC6La5YvtG0rx93hwgVacAutGaq7iFkM7W1XV50LCuKihRn%2BMS%2F2PaTsdByLdSVSDDuGqMaJy0Zsx3mNXBTS1Cn9FNGFjRrxKS0XBl6DnUuAkK8s265iHb3h6ZxgcL95UzujhReGBQ8tYe2Aiq2fS%2BtlQUYYWFeQGjH3GdepWMfZaEvyIoTzP%2F9giC1BMXIHwcvKz296XDNIaDL9xwe%2BVSRzzt6iALKL0ING4UYYK1sFLubnTHCJuWvXAFRbY0QUSFSKf01znrhzxwza2PnsmYK8B4rmf9ycvRG8Jk2qNYuTd6DOL13sKCQZEinLFYdY%2F%2Br1S9IObZgWzvW7F3DEHwcgboSdqeJBt3j7BwAbn4SBaWIyIpqLp%2BoyociZ7uctVlvy6xaq5euf8fnhc8%2FLaMghpnVZSsmXG0DztfTd5yJip1eneHW1TGxbwDs8tMWvxRCiYzns%2BgH%2F6W1k9EgaKTFhhSCgwtVVoecMGDC38EnF%2FQk%2Bu1eRhBbMbtqXBgg%2BCUv94TY5ll9ChdqeesQu1NkPP4PKy3HvDIx2%2B%2BB8t10Sl2em2u22XB7M%2FRo3BQCzpWbiFP1VvhwJm%2BXid9mu4vPMxMMjOlVHlv6Ou0LoLk%2F1zwIJMKfzgr0GOqUBY%2BqJC7RvjRjPt4iu3MP8kdWwu3wtbjukve0t%2FaSvLJEgaabD9flGMstDNftHhj0tSya8NsMPvo8DjAS4%2Br6AhyJGMFp8JdBxqn4MBR5UPU0gOQiSshp9mUqP2aitUkeVNw0b65TQrVqHxD5zxht9jM0tDl1MM5I3it18UfH9LIBTTREmfXQqpLS0eyUsnipsjoGKCwq4ltIy5RGtQaz%2F42bIg%2FAU&X-Amz-Signature=3a45794eb2875f016179fced07129b2f70aad126fa18160e60304775248be93f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
