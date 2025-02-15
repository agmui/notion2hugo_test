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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKUC256%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC01Xlmx5YIVBwVMQdrjD4gmRtjqO%2Fc%2FslGqsy2luHWJgIhAMWm8w1Dqg6UDW7QkxewNrPRt5XVI%2Br7lZxQql%2BpBW20Kv8DCEAQABoMNjM3NDIzMTgzODA1IgyVBRC3RHl9WEMCiawq3APOePM8RrjYOVGtTT%2FY06iv7Ncmpt1n051P4cRkpjXo6eSDxt5XE8FgJbspKawmrCtnKVoNdF6xgG7dU%2BNc1Ra0BXim%2B%2BglFJp35mcnP2CxU5rpLmyhn8F93UCMkubTv%2BaDMNCsOK26FCBINF%2F%2BQRydnYLjhN8whbRCk6jEAg4JdPMfGAuuLSnux8taPgXd7a0rcAR7Mieu%2F4Dj1AaXUpqekqVp%2Bnve3cPcg6JJDymGzSQjqHtEqirSpQVMydGYCR4agwpL2CiW0cX4gRfb5ZiPAzk0HT1vns%2Bu3OZSMtl3E%2B8CR8a7M5p7i%2FTUfgHscg2csQSEAq5Jt4uGs81HxMmCXhm%2FaLJ1yIVfAlgJ0%2BOuFeEoo8Dqxzz0CQCkTZ13ztSr8Ye4xZIDh4cmWoVcDiM99mbI1bOObUR3i3jIJ852ckJR9NDpya8ijQlcFo99y9%2F1twxXsTc7Y%2BrbftVYCbCU9PeukAf%2Fi%2BoGWhM8KXOAZ%2Byr1Mvussh47SUIDcPYjC6KzVoVY6CaL6wkJhIpvO9kZbH2fGWBoENZsgHo80YljJLKKaHSy9hC9%2B5ZexwJ9yAYOLigexzK3EtecdgGBh%2FRkoJThLz9u0rq%2FelJDjhg3oW%2Bo8LmSjy7nbGIRjD%2F6MC9BjqkAZ%2FeExWw05P7EKf8q21D61aUrV%2FQaifN%2BRE8ppcpBbP2mcFYjhctlp4tLPRIt5fDZtt97q0WHJGO250wgJoJbt9mcxxRnG4gx0ygmnkvr8mzsEpxPhg01FashcOzJFAJBhFY9RGqbG0Y4Z75AzIddBifyzqzQXewBvWJ1EMZsL8xdO5umSdDnPc%2BRqc14HQW%2B39T0wcgAn%2BUY4Bg%2Fa4oNOr9ORJ2&X-Amz-Signature=a17cce7ea18d196a5edaaf523cd79e229cd737923cce2ebf7699564f133ac171&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKUC256%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC01Xlmx5YIVBwVMQdrjD4gmRtjqO%2Fc%2FslGqsy2luHWJgIhAMWm8w1Dqg6UDW7QkxewNrPRt5XVI%2Br7lZxQql%2BpBW20Kv8DCEAQABoMNjM3NDIzMTgzODA1IgyVBRC3RHl9WEMCiawq3APOePM8RrjYOVGtTT%2FY06iv7Ncmpt1n051P4cRkpjXo6eSDxt5XE8FgJbspKawmrCtnKVoNdF6xgG7dU%2BNc1Ra0BXim%2B%2BglFJp35mcnP2CxU5rpLmyhn8F93UCMkubTv%2BaDMNCsOK26FCBINF%2F%2BQRydnYLjhN8whbRCk6jEAg4JdPMfGAuuLSnux8taPgXd7a0rcAR7Mieu%2F4Dj1AaXUpqekqVp%2Bnve3cPcg6JJDymGzSQjqHtEqirSpQVMydGYCR4agwpL2CiW0cX4gRfb5ZiPAzk0HT1vns%2Bu3OZSMtl3E%2B8CR8a7M5p7i%2FTUfgHscg2csQSEAq5Jt4uGs81HxMmCXhm%2FaLJ1yIVfAlgJ0%2BOuFeEoo8Dqxzz0CQCkTZ13ztSr8Ye4xZIDh4cmWoVcDiM99mbI1bOObUR3i3jIJ852ckJR9NDpya8ijQlcFo99y9%2F1twxXsTc7Y%2BrbftVYCbCU9PeukAf%2Fi%2BoGWhM8KXOAZ%2Byr1Mvussh47SUIDcPYjC6KzVoVY6CaL6wkJhIpvO9kZbH2fGWBoENZsgHo80YljJLKKaHSy9hC9%2B5ZexwJ9yAYOLigexzK3EtecdgGBh%2FRkoJThLz9u0rq%2FelJDjhg3oW%2Bo8LmSjy7nbGIRjD%2F6MC9BjqkAZ%2FeExWw05P7EKf8q21D61aUrV%2FQaifN%2BRE8ppcpBbP2mcFYjhctlp4tLPRIt5fDZtt97q0WHJGO250wgJoJbt9mcxxRnG4gx0ygmnkvr8mzsEpxPhg01FashcOzJFAJBhFY9RGqbG0Y4Z75AzIddBifyzqzQXewBvWJ1EMZsL8xdO5umSdDnPc%2BRqc14HQW%2B39T0wcgAn%2BUY4Bg%2Fa4oNOr9ORJ2&X-Amz-Signature=7e892b2bf6ef5aff2847f1239e773eacbbfdcfdff04b53ac7e0ea5a41cc45106&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
