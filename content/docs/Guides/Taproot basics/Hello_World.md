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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YADZ6NI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC79IOHCCfedQbbhQBbda%2BxlqdqkhugWezahPw3TxlBiAIhAIQ%2BHvpkTLrMX1A%2B%2BjcJJt8RYCn891G%2FImGmpGo2ukRKKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FZ%2BOiTh%2Bf0c9ecEq3AOJ9bcJZjURodgNagElTZQIghirTtyL7pQ7MsOpr%2F0J2ABEfIPUPP%2BXVhoqT2tDktonytoUPoyV5PGZt5e8WI2c1HvgPRqt5ZrbHY5VUlJY84Ooq4BUZjk8QIfDP222R8PK1hkb%2BUwzHg9Oxl8S8rBwY82Q9a3PodT623C5uetHQ3KoCYAOaJ91ZAc87c1kG28CiTmZLb%2FP9z5NjHS1umAhpqjt7PfLF10viYnWHeIvjtu6XS6h3w3T6zem2W1D58exyd2Xb5sN0Opjt38Iyjh1e7DK0EXB9zE5vWnrE%2FGbXJRHshO%2BWjrI%2BWxVZK2epAs7nDYQU2suxpXWUkCv05b0voM3sofS0ByT4P%2BLDwQc4EDauLjXGklpVaQ7qgPxZx4QPNxNv2LpLRClQPVDB7KHYjfNV13nLbhxPE8scA0RQ0R%2BHMwnPNPKu4o1Nxe55jDNIKC4QpjintXo1seB5H%2BVUTxmQM6ti3q8yGx7BuGDjlVgHzZxjyu6b%2BFkohd0V6S61rfzDLRlwSsCN1msPIYJIG8iS3ZKsR%2BpWQLeTPtyf7BTHXhuFxtDRmVlpB9V1CowMcVdEtxkrB2qaJsKhnfQExf6GBid%2BW3UcsxSTTnFXLN%2FpTP6LuTZ1nArBzDl4ua9BjqkATBQCbNwVT%2FLZVKuvets17JIClll50GMMTIhho0xlPG5x5RaWLYxydAQYyslBOPLq%2BBoJRkx3Wod%2FAjkIyU6rnbOnKVwBeR3edfgkOC%2B7PSGL%2FhMf5kBKd9yArefyPWt%2FJnBIjczRS1DfK4DnIYx%2BLxCx93tp8jEZEkhKfX9EtkTv894N95w4LplEbjtgAjMpCBFjHEoL8ipTzFgRvoscH6PqJTD&X-Amz-Signature=2829523956d3cf391044d54188195ec9c4c8bfd44a17aa1efdf3ba9dd43af0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YADZ6NI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC79IOHCCfedQbbhQBbda%2BxlqdqkhugWezahPw3TxlBiAIhAIQ%2BHvpkTLrMX1A%2B%2BjcJJt8RYCn891G%2FImGmpGo2ukRKKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FZ%2BOiTh%2Bf0c9ecEq3AOJ9bcJZjURodgNagElTZQIghirTtyL7pQ7MsOpr%2F0J2ABEfIPUPP%2BXVhoqT2tDktonytoUPoyV5PGZt5e8WI2c1HvgPRqt5ZrbHY5VUlJY84Ooq4BUZjk8QIfDP222R8PK1hkb%2BUwzHg9Oxl8S8rBwY82Q9a3PodT623C5uetHQ3KoCYAOaJ91ZAc87c1kG28CiTmZLb%2FP9z5NjHS1umAhpqjt7PfLF10viYnWHeIvjtu6XS6h3w3T6zem2W1D58exyd2Xb5sN0Opjt38Iyjh1e7DK0EXB9zE5vWnrE%2FGbXJRHshO%2BWjrI%2BWxVZK2epAs7nDYQU2suxpXWUkCv05b0voM3sofS0ByT4P%2BLDwQc4EDauLjXGklpVaQ7qgPxZx4QPNxNv2LpLRClQPVDB7KHYjfNV13nLbhxPE8scA0RQ0R%2BHMwnPNPKu4o1Nxe55jDNIKC4QpjintXo1seB5H%2BVUTxmQM6ti3q8yGx7BuGDjlVgHzZxjyu6b%2BFkohd0V6S61rfzDLRlwSsCN1msPIYJIG8iS3ZKsR%2BpWQLeTPtyf7BTHXhuFxtDRmVlpB9V1CowMcVdEtxkrB2qaJsKhnfQExf6GBid%2BW3UcsxSTTnFXLN%2FpTP6LuTZ1nArBzDl4ua9BjqkATBQCbNwVT%2FLZVKuvets17JIClll50GMMTIhho0xlPG5x5RaWLYxydAQYyslBOPLq%2BBoJRkx3Wod%2FAjkIyU6rnbOnKVwBeR3edfgkOC%2B7PSGL%2FhMf5kBKd9yArefyPWt%2FJnBIjczRS1DfK4DnIYx%2BLxCx93tp8jEZEkhKfX9EtkTv894N95w4LplEbjtgAjMpCBFjHEoL8ipTzFgRvoscH6PqJTD&X-Amz-Signature=3a22c5d737136119b712e03a120bd099fda2b1418c96f8cd218ccec7748bd1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
