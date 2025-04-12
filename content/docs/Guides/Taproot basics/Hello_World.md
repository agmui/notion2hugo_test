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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIMCAAR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFnDBjTljRlnHmoZnzsrY1MTHSV7wkUUKWyKLRGyTSBzAiEAvKGTet%2FxY7TtaDH68SzAUnM4Dhk1pJYlAG%2BhYM2SWq0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDsfSFr5ZG2ZSm4yrcA8a0Zn3x2pGXnjeoSM8wvzPzHVA2uB6ouxB0hQMHF1zUZl1vbv7zr0G5lGYds%2B0ZqTzpR1bVWS60o2Q36WrukP5K67F7ZjywfWCAUKOgLnasR6J7Rhn4cgcrtSxe%2FlnPzyfR0HbHUNJ2tOvsgh8pofbbKcLczkkZqabJrEzCq%2B4imKxpQ8c1MY9bRZmlKbWp6Yp%2BIg2s4Zp1CMBIlZ%2F2BmAUtWavWkFybTUV8FoQpuMFiftoU8IQ0E56vGACjYVJUs8meID2qLmq%2BuuEB56OFdsrap3xD8VVdCBSq42FmmV9xEDCrqUfnE%2FjJ25HYUaf7QEgDSAtPvjps9CkzjWVJVj8990mC7uxEPah3O0s3B4Zt4%2BJHag78fSXibCCmbSGbl5RLwiRp8L%2BKG6lhPTEgq%2Bl7n2gd9EM25j9aRSztmifiDdiU0Qhjk8Ld%2F44ykDgGwU8DnCcPSx2T41HkMx10z1pSRWYfoNUxsBNXKwgFFyoMIz%2BiQPnCmqhSmfEWfySfij6jUVMMg%2FThNKxwgS7NNmUtXB9ObhYidpSD9MxCocaIR4AHE1%2BNreqyGCFD0gBpCzVANzRN8%2Bgs4lAJzjcu7klFgSQbDak79zHXSKan%2FpeM7Um2g37gY2W0jNZMIKn6L8GOqUByj15mCMMeFipVel8hEaVFfTIiJdXHagBE6pBito8xxV3%2FgxFQ9w1w52SUDzZXxgT%2BeUKtqGenezjogpuS%2F9DkuR0XQw5agGaTe%2B3aMmQl996zGlUKClPE%2B2K3jyS5lP%2BxQub10DsnOXaYZ0nYxM778UowNRKvfQRUPmTpqEGDQYK9L2kS2EPArVlqocLYfNTTxRWYB50hF0P7%2FSa6x92RsGcG9fw&X-Amz-Signature=1e223043316279f9c190b4515f91ff2156660f32f54ce3e81d7eccfcdb20b001&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIMCAAR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFnDBjTljRlnHmoZnzsrY1MTHSV7wkUUKWyKLRGyTSBzAiEAvKGTet%2FxY7TtaDH68SzAUnM4Dhk1pJYlAG%2BhYM2SWq0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiDsfSFr5ZG2ZSm4yrcA8a0Zn3x2pGXnjeoSM8wvzPzHVA2uB6ouxB0hQMHF1zUZl1vbv7zr0G5lGYds%2B0ZqTzpR1bVWS60o2Q36WrukP5K67F7ZjywfWCAUKOgLnasR6J7Rhn4cgcrtSxe%2FlnPzyfR0HbHUNJ2tOvsgh8pofbbKcLczkkZqabJrEzCq%2B4imKxpQ8c1MY9bRZmlKbWp6Yp%2BIg2s4Zp1CMBIlZ%2F2BmAUtWavWkFybTUV8FoQpuMFiftoU8IQ0E56vGACjYVJUs8meID2qLmq%2BuuEB56OFdsrap3xD8VVdCBSq42FmmV9xEDCrqUfnE%2FjJ25HYUaf7QEgDSAtPvjps9CkzjWVJVj8990mC7uxEPah3O0s3B4Zt4%2BJHag78fSXibCCmbSGbl5RLwiRp8L%2BKG6lhPTEgq%2Bl7n2gd9EM25j9aRSztmifiDdiU0Qhjk8Ld%2F44ykDgGwU8DnCcPSx2T41HkMx10z1pSRWYfoNUxsBNXKwgFFyoMIz%2BiQPnCmqhSmfEWfySfij6jUVMMg%2FThNKxwgS7NNmUtXB9ObhYidpSD9MxCocaIR4AHE1%2BNreqyGCFD0gBpCzVANzRN8%2Bgs4lAJzjcu7klFgSQbDak79zHXSKan%2FpeM7Um2g37gY2W0jNZMIKn6L8GOqUByj15mCMMeFipVel8hEaVFfTIiJdXHagBE6pBito8xxV3%2FgxFQ9w1w52SUDzZXxgT%2BeUKtqGenezjogpuS%2F9DkuR0XQw5agGaTe%2B3aMmQl996zGlUKClPE%2B2K3jyS5lP%2BxQub10DsnOXaYZ0nYxM778UowNRKvfQRUPmTpqEGDQYK9L2kS2EPArVlqocLYfNTTxRWYB50hF0P7%2FSa6x92RsGcG9fw&X-Amz-Signature=084061f457ec1ed18db22856025eeb96ade0be9a54c94aba78b6d782d1223912&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
