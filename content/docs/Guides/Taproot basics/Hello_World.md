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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CRMFPQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDXrqx7qKB%2BZRX77j3aOupsOtOasN8OmLFgSd5aUp3Y6AIhAJthfbsPsuoUflQAsB5PV8wlwtLMYtbbejh54GQFdxu5Kv8DCGsQABoMNjM3NDIzMTgzODA1Igz447AyvsJmyqDa8lQq3APcF34scMImbV1MqlgiANPUBLN3Jve2autRo%2BghKKV1uzMccA2rKburicVJJ2e4LEuqvaIGVPm1vM0WmLW4H6zsqP%2BFMW%2Fi93GPuBYr8w3vKZLBmPD9No%2FfIYkaFywal78dA4UZ4nLTy5MeP9Af7Fu6g64Itn%2Fa5BVixD9MTYTU%2Bp8%2F66w6N6R2AciGzkxsDpf0lvyIMr6Htx%2F5OWNuvYqz2Sa%2B5w%2BvNPUHM1JgBce%2FFYwGJjUdO3nPhrp3qzsMfetrztEMAj%2BrD711Gk5WwihIVpdWoI6AasKtxH%2BkI%2FCv%2FVBiUCT%2Fbit7VU%2F9mZDtgE2G8dCR%2FxMcpkeZGPKm25tHshl1FgFq29%2BB3k%2BatK95BEcupt%2B605dlifvbVHlFyhdB13f%2F1Tw%2FI%2BDtAn9FroAOx6u8MOoqJ87%2BorsybkxdREo9NFm66ZXmWi3jzIiOgQWrpVwOPsxSr9aSAOr%2FV0bzxk%2FB%2Bo6x2%2BeEMo98mIWg9Ch9acu5qycKbGMo2%2FG%2FpScfR5WwNG7a13Ggdu%2Fn4ZhSFK9sfHiWR6D5U5mxnf1%2FsPhN40Q06JqO9VY%2Fr2eQAPGv2Te5qktncgkbSvKTjvQGeJcZAwsoV8pS1FC3kM8un8BhmSAi6f5LYX34VTDY6bO%2BBjqkASy%2BAVi82H%2Fff33W8okRYGpyKe%2Br5Lex20CIR8tR%2B6xHQiT%2FH2RgVECd7Am5Cf8SlwXn3YfAf3d9FldiNs0jy9fveYl7lEEReLd%2B%2B8dSABxNk2BZWLECZ8EEC5f8jsqTNHOTbJhgZmCElZLmG1%2FhMaNyvJU67t7lQA0tlSeq3txSmdRyxY%2Bfng4PqG%2FkatjfZpEOKJ%2BPN0rana5tK1EgPUqXN%2BWh&X-Amz-Signature=fd8bf9ff096ca94e1b2bc52777a80559ee8e4479834c32e7691f8f6df53bfcd2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CRMFPQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDXrqx7qKB%2BZRX77j3aOupsOtOasN8OmLFgSd5aUp3Y6AIhAJthfbsPsuoUflQAsB5PV8wlwtLMYtbbejh54GQFdxu5Kv8DCGsQABoMNjM3NDIzMTgzODA1Igz447AyvsJmyqDa8lQq3APcF34scMImbV1MqlgiANPUBLN3Jve2autRo%2BghKKV1uzMccA2rKburicVJJ2e4LEuqvaIGVPm1vM0WmLW4H6zsqP%2BFMW%2Fi93GPuBYr8w3vKZLBmPD9No%2FfIYkaFywal78dA4UZ4nLTy5MeP9Af7Fu6g64Itn%2Fa5BVixD9MTYTU%2Bp8%2F66w6N6R2AciGzkxsDpf0lvyIMr6Htx%2F5OWNuvYqz2Sa%2B5w%2BvNPUHM1JgBce%2FFYwGJjUdO3nPhrp3qzsMfetrztEMAj%2BrD711Gk5WwihIVpdWoI6AasKtxH%2BkI%2FCv%2FVBiUCT%2Fbit7VU%2F9mZDtgE2G8dCR%2FxMcpkeZGPKm25tHshl1FgFq29%2BB3k%2BatK95BEcupt%2B605dlifvbVHlFyhdB13f%2F1Tw%2FI%2BDtAn9FroAOx6u8MOoqJ87%2BorsybkxdREo9NFm66ZXmWi3jzIiOgQWrpVwOPsxSr9aSAOr%2FV0bzxk%2FB%2Bo6x2%2BeEMo98mIWg9Ch9acu5qycKbGMo2%2FG%2FpScfR5WwNG7a13Ggdu%2Fn4ZhSFK9sfHiWR6D5U5mxnf1%2FsPhN40Q06JqO9VY%2Fr2eQAPGv2Te5qktncgkbSvKTjvQGeJcZAwsoV8pS1FC3kM8un8BhmSAi6f5LYX34VTDY6bO%2BBjqkASy%2BAVi82H%2Fff33W8okRYGpyKe%2Br5Lex20CIR8tR%2B6xHQiT%2FH2RgVECd7Am5Cf8SlwXn3YfAf3d9FldiNs0jy9fveYl7lEEReLd%2B%2B8dSABxNk2BZWLECZ8EEC5f8jsqTNHOTbJhgZmCElZLmG1%2FhMaNyvJU67t7lQA0tlSeq3txSmdRyxY%2Bfng4PqG%2FkatjfZpEOKJ%2BPN0rana5tK1EgPUqXN%2BWh&X-Amz-Signature=bfe8f0d837c3c5ae482e38d3eb774c09fb2152fce3821970b865c38058592eed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
