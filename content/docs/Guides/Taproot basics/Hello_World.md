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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LCFMNT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2FlpOEfYS7yZoWGU9MfPmK4Bma8mUWSzFbjOF%2BjlEvZAIhAMRVGNFhQIoT9SqBYBG0XKkFHKj3VF99aZhTusboCGZBKv8DCFMQABoMNjM3NDIzMTgzODA1Igxj%2FkNsJcAsJWcTeg4q3AMAb%2FDTZB7Tqx4iGgY4P3Wf%2FNMlx7%2FzHP3feDXQ0fLjDDSRWXq2t3Djxjl5IXQn3nEbeUf%2F8VVHr9QuVDHAc91tSWwC%2BeMtzKopi1CzjSfq4G1aVEDrn4TYnvbCzHS%2FdXm0ImSIDfoORAuj3BymUJZifMlCCa35k5Ei%2BONkyZEtYmcmzLBum1hReESJ9%2BlDHFuuX3tMoB%2FwUuC9LREgTtxwWjVWQn5RZM%2B%2BU2w%2FalcaYEIJt0W29bLtqvTwri%2BStd8rEShQ%2FPgUuKKTeie%2BjFQSXti%2BQZrA17mhJo%2FHeDq19ybzfy9o85ifVWQuBHjKeLvKDutMn3I1wOQEO5PYmv3h6Ttx0ggAckFXsDx1D%2Fsqgjo7bAYPFHzoqsiEd%2FBhAoyGjdZ6vVFknMA1iwjvQf9KiJL9KFt%2FMjosoTzPEQ1EsBByL20a3GggADheJZwPjGa2B3ktKNPvQzTXcbQxMD7qeXikFpfxpT8Z2Td0C9bM6q3Xc9vARFN%2Fkwm55HPPNp0fUoRA4EhAT5RiGgwmKKYufKf2hK7m6JfTgW24U2S2OcsiQOyJ1OG4sx3h2zk82w0jyBYQdOsOBaWY%2B3oXDuN2gUS%2FdK9drMP4%2BPseHFFF0jo1CoF6Vt%2F4zA9jlDCV%2Fr3CBjqkAa8ouduyPr60mIMZuqSU9G9EzdTAby8mNCx2NsA8%2BdXubqXT5E3%2B23k3F0WjnbAt6A77XQgc606rjoqGYrGB%2Flk1mQOvueysNeusxvVSXxdp9Au4CbVJ%2F8bvnXYeAP7SGCBaMhteFlPcQGRHv%2BLTh00dxrdlaSPhLBo3GUQimSedFLnozihUDnyh%2FFEo2oDXOlFmcaFhUD0lMagELiC%2BuQ9FrtCq&X-Amz-Signature=053a126988770df1b7fc1a73e91903af6ef5537649143358f38837d724e5d44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LCFMNT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD%2FlpOEfYS7yZoWGU9MfPmK4Bma8mUWSzFbjOF%2BjlEvZAIhAMRVGNFhQIoT9SqBYBG0XKkFHKj3VF99aZhTusboCGZBKv8DCFMQABoMNjM3NDIzMTgzODA1Igxj%2FkNsJcAsJWcTeg4q3AMAb%2FDTZB7Tqx4iGgY4P3Wf%2FNMlx7%2FzHP3feDXQ0fLjDDSRWXq2t3Djxjl5IXQn3nEbeUf%2F8VVHr9QuVDHAc91tSWwC%2BeMtzKopi1CzjSfq4G1aVEDrn4TYnvbCzHS%2FdXm0ImSIDfoORAuj3BymUJZifMlCCa35k5Ei%2BONkyZEtYmcmzLBum1hReESJ9%2BlDHFuuX3tMoB%2FwUuC9LREgTtxwWjVWQn5RZM%2B%2BU2w%2FalcaYEIJt0W29bLtqvTwri%2BStd8rEShQ%2FPgUuKKTeie%2BjFQSXti%2BQZrA17mhJo%2FHeDq19ybzfy9o85ifVWQuBHjKeLvKDutMn3I1wOQEO5PYmv3h6Ttx0ggAckFXsDx1D%2Fsqgjo7bAYPFHzoqsiEd%2FBhAoyGjdZ6vVFknMA1iwjvQf9KiJL9KFt%2FMjosoTzPEQ1EsBByL20a3GggADheJZwPjGa2B3ktKNPvQzTXcbQxMD7qeXikFpfxpT8Z2Td0C9bM6q3Xc9vARFN%2Fkwm55HPPNp0fUoRA4EhAT5RiGgwmKKYufKf2hK7m6JfTgW24U2S2OcsiQOyJ1OG4sx3h2zk82w0jyBYQdOsOBaWY%2B3oXDuN2gUS%2FdK9drMP4%2BPseHFFF0jo1CoF6Vt%2F4zA9jlDCV%2Fr3CBjqkAa8ouduyPr60mIMZuqSU9G9EzdTAby8mNCx2NsA8%2BdXubqXT5E3%2B23k3F0WjnbAt6A77XQgc606rjoqGYrGB%2Flk1mQOvueysNeusxvVSXxdp9Au4CbVJ%2F8bvnXYeAP7SGCBaMhteFlPcQGRHv%2BLTh00dxrdlaSPhLBo3GUQimSedFLnozihUDnyh%2FFEo2oDXOlFmcaFhUD0lMagELiC%2BuQ9FrtCq&X-Amz-Signature=a6e11e8c023814d02355021327f286f38aafe96316fb12c4ef9da8264711e7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
