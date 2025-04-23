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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKO74YRP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGek3vXsdIsI0UbeAbt0bmlWiNKKlyL24Ryuh1hYYnQTAiEAvoMj2XXTLEUHT3tgTrKAK8xQZo8bxzkL%2FzFvy2UsRVMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHb0Y5MMkUoLXR9%2BCrcA0MJzsCJomB%2FheMF1UIL5GkXGQD8XyImKuI6TPMZOQ9UdH5BaK4YaaD7JoGgxnqEpGZoB07yAwR%2BjqOfWloPsngdyNGHRWxnM%2BDRBTeb3asefnnQQoQ4nQ4IouSzt3dNqv%2Bc2Bbjo%2FR9OWzbzvvqjGUSvCnJ5m5NNK4MRYT7LJV%2Bpaiz8Up5Sgn4GQOvNyckvE5uTkY%2Fp8QDDMsEyGbBlSJO29cQ6M4btLRlf6FkVEEA1no7FcyUjsLBjTpXmJo3ABxCLTHsnTFR3T3b9pq2Uqd8%2BFd8KWzQCdb04XuuIk0sJwO6NzdR7E%2Bu46Pq184T%2FOTNaB2HF%2BZuhTaiB%2FZxoRZHGbjIpO%2Be2niZda1pEbaD2KR0nSnstQ%2B1MEauHrwJjeGU7CKp2KrEXpP5rc9vK3BDcTT%2BFG3kSiikzwZOhv9rnuaPUD1pHx2cVq41jO27iE1I12nWvULn87WI3rmzDpLmD5E9%2FeT%2F610WXs023K9jYjx%2FgLKciAod6z9RU0gznOaNyBe0qPV0kHm%2F7BMqRP4d0TQBMfVygpyJ0Y9QpiiIKW9AJvOvMp1AgpojzY4m1PrLU22caLLtmAbZOdlhZZmCpgZ452WosbI%2BNW0pA8MUReSOSIjTmug%2BwKLdMOHXpMAGOqUBusZAOLrbvwb0GJUJo0REl7ZHyDrxnzdXrdNot0WeI%2FT3mk4wC9GPeDCVL2k9fbMFpj1vMctkkZ4lB7Gc%2BkC2iREV%2B0SC6wd8UWQYpxVH7HbYapPkocrvAPDqfWkYLEWzQgx7%2BilLNsZ%2BxZsr084pyyoHTg7%2BpkKo93B8XqWOZAEaNI7FivIh0DSCg2Iucam9p%2BCNPmCOXkHUUXPphi80oNKaTcSQ&X-Amz-Signature=4035f91cb5c3a315bf3f27819c788e9c70c38b22830835b6f903a73b0d8e4211&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKO74YRP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGek3vXsdIsI0UbeAbt0bmlWiNKKlyL24Ryuh1hYYnQTAiEAvoMj2XXTLEUHT3tgTrKAK8xQZo8bxzkL%2FzFvy2UsRVMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHb0Y5MMkUoLXR9%2BCrcA0MJzsCJomB%2FheMF1UIL5GkXGQD8XyImKuI6TPMZOQ9UdH5BaK4YaaD7JoGgxnqEpGZoB07yAwR%2BjqOfWloPsngdyNGHRWxnM%2BDRBTeb3asefnnQQoQ4nQ4IouSzt3dNqv%2Bc2Bbjo%2FR9OWzbzvvqjGUSvCnJ5m5NNK4MRYT7LJV%2Bpaiz8Up5Sgn4GQOvNyckvE5uTkY%2Fp8QDDMsEyGbBlSJO29cQ6M4btLRlf6FkVEEA1no7FcyUjsLBjTpXmJo3ABxCLTHsnTFR3T3b9pq2Uqd8%2BFd8KWzQCdb04XuuIk0sJwO6NzdR7E%2Bu46Pq184T%2FOTNaB2HF%2BZuhTaiB%2FZxoRZHGbjIpO%2Be2niZda1pEbaD2KR0nSnstQ%2B1MEauHrwJjeGU7CKp2KrEXpP5rc9vK3BDcTT%2BFG3kSiikzwZOhv9rnuaPUD1pHx2cVq41jO27iE1I12nWvULn87WI3rmzDpLmD5E9%2FeT%2F610WXs023K9jYjx%2FgLKciAod6z9RU0gznOaNyBe0qPV0kHm%2F7BMqRP4d0TQBMfVygpyJ0Y9QpiiIKW9AJvOvMp1AgpojzY4m1PrLU22caLLtmAbZOdlhZZmCpgZ452WosbI%2BNW0pA8MUReSOSIjTmug%2BwKLdMOHXpMAGOqUBusZAOLrbvwb0GJUJo0REl7ZHyDrxnzdXrdNot0WeI%2FT3mk4wC9GPeDCVL2k9fbMFpj1vMctkkZ4lB7Gc%2BkC2iREV%2B0SC6wd8UWQYpxVH7HbYapPkocrvAPDqfWkYLEWzQgx7%2BilLNsZ%2BxZsr084pyyoHTg7%2BpkKo93B8XqWOZAEaNI7FivIh0DSCg2Iucam9p%2BCNPmCOXkHUUXPphi80oNKaTcSQ&X-Amz-Signature=5c72dec120eb7a3fe4dd0b65fbdaca0ea36a49052df456ee38fe8dc928e18e66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
