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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECPWZP6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHqvrBRoJBEr6qRFClPBNa227qJFaghFrqNL0Wdf6oP7AiB8MJ5QFJD%2FrzxREt%2B5Xc5VhZ4%2BD3LEE0maFIKKnFB1Syr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMV8XzXKn8E1pt7Ot4KtwDoFbDSg2Pw9%2BqgPu2QpGzOSAmYUchmCuFVmTS1uY2WYGHmlEfytJYxHCca77sAybTPUlumhXeMdWVHMzCy9IeqCVvjqbxMSKZ0P%2FC5TDSEAZ%2FsxP24om2mrEvYtyHiKWL6FSxo3ru3wNDWIPN60uL6XM8%2B7unHv53PDPc2zgilgzWc6FAtNPhdee27e53b%2FJCh26VeUbO%2FmjbkRBxornFI6MzdBxRDpWVvamiXAPA0LYA9ZWL4WWrQT%2FU4yzuvdZ8TYNdtUJEpGv4tbloZMPEK5CoqBkTZtc1e4U7JWW%2B2kEDfKtvel07qKTrxnLm0h0wvI2tp6mr0UrcVvi4Uf2%2Bew2wU5btWRN%2FUJTx%2FYhPfcfY2sYW%2BpNtLc%2Bhitmekq7gy9xnBc1GwiLl4LU%2BraziVV9w72gS2TxAEeXrcmw3ySlZ7FXSN%2F6tqumlwqJn8sPTXAY3wOE3cewDE1mJTtDXtOzwjsiUnOvqi%2BUKLG240uBMCTXtyWl%2BPOS%2BFTdAd5dA260EDQ%2Bqs8IkAiGvbXq2bJMVRLypSEDhWZmkfw5wbpQu0egUJwuY5fTg8myS4LKczTokhX1wNdmynOxHwB8szvW9cUc7L69Ml6hzCnumuDrBghBq2ACn4vldOR4w%2BtyuvgY6pgEmquFzjPGXM5I1MVNGRJeIz%2Bhw5CrT8FsanxjvtpGHw8AdgOp8SObP2SIGxMLc3Fq2O3I8PrraPNEC4ByrxECTZ%2BQYzhPUQ3sGMBSq58xFMNwxTd%2FGwerIK2PciOaV01PKgFkhVofNDaUbaxnqOIhuHXDuvLzj0lzHI1AIdZZ%2FfqlyO4ARkT1pnMU1mL2rSsU%2Fg%2FTbrMsry3KVtVu8iJMxkR1g8g1m&X-Amz-Signature=2b7414d32ceadf79ffda504b5bd2005b5e5b2bdb14f5385c184aa96ed396176a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECPWZP6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHqvrBRoJBEr6qRFClPBNa227qJFaghFrqNL0Wdf6oP7AiB8MJ5QFJD%2FrzxREt%2B5Xc5VhZ4%2BD3LEE0maFIKKnFB1Syr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMV8XzXKn8E1pt7Ot4KtwDoFbDSg2Pw9%2BqgPu2QpGzOSAmYUchmCuFVmTS1uY2WYGHmlEfytJYxHCca77sAybTPUlumhXeMdWVHMzCy9IeqCVvjqbxMSKZ0P%2FC5TDSEAZ%2FsxP24om2mrEvYtyHiKWL6FSxo3ru3wNDWIPN60uL6XM8%2B7unHv53PDPc2zgilgzWc6FAtNPhdee27e53b%2FJCh26VeUbO%2FmjbkRBxornFI6MzdBxRDpWVvamiXAPA0LYA9ZWL4WWrQT%2FU4yzuvdZ8TYNdtUJEpGv4tbloZMPEK5CoqBkTZtc1e4U7JWW%2B2kEDfKtvel07qKTrxnLm0h0wvI2tp6mr0UrcVvi4Uf2%2Bew2wU5btWRN%2FUJTx%2FYhPfcfY2sYW%2BpNtLc%2Bhitmekq7gy9xnBc1GwiLl4LU%2BraziVV9w72gS2TxAEeXrcmw3ySlZ7FXSN%2F6tqumlwqJn8sPTXAY3wOE3cewDE1mJTtDXtOzwjsiUnOvqi%2BUKLG240uBMCTXtyWl%2BPOS%2BFTdAd5dA260EDQ%2Bqs8IkAiGvbXq2bJMVRLypSEDhWZmkfw5wbpQu0egUJwuY5fTg8myS4LKczTokhX1wNdmynOxHwB8szvW9cUc7L69Ml6hzCnumuDrBghBq2ACn4vldOR4w%2BtyuvgY6pgEmquFzjPGXM5I1MVNGRJeIz%2Bhw5CrT8FsanxjvtpGHw8AdgOp8SObP2SIGxMLc3Fq2O3I8PrraPNEC4ByrxECTZ%2BQYzhPUQ3sGMBSq58xFMNwxTd%2FGwerIK2PciOaV01PKgFkhVofNDaUbaxnqOIhuHXDuvLzj0lzHI1AIdZZ%2FfqlyO4ARkT1pnMU1mL2rSsU%2Fg%2FTbrMsry3KVtVu8iJMxkR1g8g1m&X-Amz-Signature=06c593e103b8aeb4b36396b81a73cfd1051fec81583b3286c8c3965deb06177a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
