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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHZDM3Z%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3CBXYdHdMngnifekP%2FT3qcWzcYwW4NvDgEm0g%2BH7yQIhAKdlGT9RP1AuzljANEqjhedQLj5D5IGzBwi3wUgcQ8X9Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwrLftDLulD%2BGutFngq3AOIU3WbXmi1kI5Fx89%2FWDhPIsmD%2Fs%2FfsNSapPDvL4iEGqycx18RQz%2FFN1ywAyZQltOiJyFnVK5GkqQzsUIRaTeb%2FfGue3wdvi4omejuTXXA1vHPb7VP2mBDcR9%2FnWsL6and4B%2Fk3DgZHG4gCKIQaUwXSmqwTZG%2B6Lqp%2BgHFElxiJmAD9DA3lyjwylfcKeqFtnNknBC96zPSu96JhdMdM%2BN1eunsnjBtfAeA41fWigou0bYhHCTWcQL3JhrLEjEHAf08dXUq7ruhQABUjH9PADXHbyJsxhyYEUadsMxckKNWOKgpncRvF6Ek%2BcXStKlakbY2ElGSpJcdFC81B%2F9h3tssKVfTrLLOIKdFsdq9z0y%2BCyJ5%2BxTUOsQJguaz098aPECXUyGNnh3SlOGfsnzMPTzzXP5nQY%2FW8uyocjeyKtbbVVBvEP84FAH%2F%2BGlJIuEoJF76Sm7dqGJhdsLOrBrYTTUvxTJmO%2BNoWB9eO25zdZffIGV7tRe2x0cr63%2BNgQ4PEpS6dBnziNt3OuHirZ40h9ilTSL%2BCYUa6kssp%2FL2j2rglLH%2FEgDYM21QiZqh0u2Eq5YEmfV6wAKBp9NlwzFKLIrCm8u68DHEQjoNB4HYFlRE4BnzYlhQm%2Fv3VKB7pTDxq%2FHABjqkAQu4HuwwqS9FOjsWfFGMsVMzcNLD6Zz6OUu1Y9iBNyTWOX7O3vteggNZCCMHCMFJjzFF3leLmyv%2FKV0esuyERQoAs4gkicjJkPQmYeHq9BHSOtFw%2Ba8%2Bmnz%2BtxXN7w2j1OjscFl3qo7f57WzZEhmZ%2BK1CcZ%2F6SYIgqiQhaUHcbMxahlg%2Bex8YrllpIyY2tXsFbWK29jX%2BonnuCsIQb3HCuCVSZI%2B&X-Amz-Signature=b914ee72508a165e074b06daba8ace3de38dda8da96497a720233b50e41acc68&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHZDM3Z%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3CBXYdHdMngnifekP%2FT3qcWzcYwW4NvDgEm0g%2BH7yQIhAKdlGT9RP1AuzljANEqjhedQLj5D5IGzBwi3wUgcQ8X9Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwrLftDLulD%2BGutFngq3AOIU3WbXmi1kI5Fx89%2FWDhPIsmD%2Fs%2FfsNSapPDvL4iEGqycx18RQz%2FFN1ywAyZQltOiJyFnVK5GkqQzsUIRaTeb%2FfGue3wdvi4omejuTXXA1vHPb7VP2mBDcR9%2FnWsL6and4B%2Fk3DgZHG4gCKIQaUwXSmqwTZG%2B6Lqp%2BgHFElxiJmAD9DA3lyjwylfcKeqFtnNknBC96zPSu96JhdMdM%2BN1eunsnjBtfAeA41fWigou0bYhHCTWcQL3JhrLEjEHAf08dXUq7ruhQABUjH9PADXHbyJsxhyYEUadsMxckKNWOKgpncRvF6Ek%2BcXStKlakbY2ElGSpJcdFC81B%2F9h3tssKVfTrLLOIKdFsdq9z0y%2BCyJ5%2BxTUOsQJguaz098aPECXUyGNnh3SlOGfsnzMPTzzXP5nQY%2FW8uyocjeyKtbbVVBvEP84FAH%2F%2BGlJIuEoJF76Sm7dqGJhdsLOrBrYTTUvxTJmO%2BNoWB9eO25zdZffIGV7tRe2x0cr63%2BNgQ4PEpS6dBnziNt3OuHirZ40h9ilTSL%2BCYUa6kssp%2FL2j2rglLH%2FEgDYM21QiZqh0u2Eq5YEmfV6wAKBp9NlwzFKLIrCm8u68DHEQjoNB4HYFlRE4BnzYlhQm%2Fv3VKB7pTDxq%2FHABjqkAQu4HuwwqS9FOjsWfFGMsVMzcNLD6Zz6OUu1Y9iBNyTWOX7O3vteggNZCCMHCMFJjzFF3leLmyv%2FKV0esuyERQoAs4gkicjJkPQmYeHq9BHSOtFw%2Ba8%2Bmnz%2BtxXN7w2j1OjscFl3qo7f57WzZEhmZ%2BK1CcZ%2F6SYIgqiQhaUHcbMxahlg%2Bex8YrllpIyY2tXsFbWK29jX%2BonnuCsIQb3HCuCVSZI%2B&X-Amz-Signature=98bfae5362ee763a46c3094b636f7d1c3588faa2f652de86298c965259d056ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
