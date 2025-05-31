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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5WVA3F%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BWI%2BeqveUnxr%2FCNdXknh4lrhhAP1PEZ6Bb%2B7K3hObywIgJJ%2Fdx%2FN2GN9VFW8TUgA94bE0TjZ%2F12SCktwYIeOQ9AsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9h%2FThXrS1Gv5a7PyrcA3vYAcdaB1oGoM%2F2RpEqGIbW5B0hrzYw3PrZSHDhqzweC68Q9slJOS%2BxPcox9OgJGdBLJCs37yfX4O66xZA4a7ZJzvUChi9HfC74eW0pM36CN2xetyKY8GLnZ4%2F8XNHvi7WZrnjxPDuXx9s8oggCsSEhKGx2NUfFaRrxVpgejI2Waf0wHscH1HCVHXsufo1tR4TBSKCcaojoAqEtdPFtsAAuOOWalsu8wyK1ppUxG%2FwVVq50RfCYt5bFrVIYSDGMIpXZzw5KiYArRnCFKhwrRmdceXuzZidOloRZ8msMk%2BI%2F0aTNvUm%2BaLTBrXI2lTTlPqgc9BH%2Bm%2FUv7I8lMFfBULNGEy22urg2KYIlR09NZ5uTwFpk1aYaqBa8XQLd0B%2FZ9e%2FIsg9eGLeWq4vAmWpFuSI%2B0DHXyRJGDLQKFxBL61eYN6n9bWUwCl1s82zeEv2SPG0TeNuYmxmmh0AO8KZL2Ld2fCtX8tuJ3W54IlYd0xhCE5QyTIKYTKkw%2FLvdZNC%2B%2FmKeFlFSuOF%2Bm6a89bT34d3nKlcAhraR1RUaBCFaBIRXQRAzJD51eZfACshLGKYCDvTMphvmkjeVvLs4flffUVClRFyjRrtdXQwUfawQhNCLNiMWQbpbH35eCSLfMK%2Bt68EGOqUBWyjvc0IC9OVU%2BMEp1sY6ZWQptLtFCF9YrQmO%2FLeDgcUvNBoJLBIkWV0u0T4baGCQ8IgoAepE5w3bYvaoaUGi8J88%2BLEsSy75B5%2BDr3O4p%2BFCGyumX4PA637otLMV5o%2B8tbs%2Ff7GgXVFFRbRP8zZhkkIzprW3xIwVtpA%2FopJr0W%2FEb7L5GasIJXTxH6gCjLqfRVz2qMHfDs43K5foevrrFbMsEpoZ&X-Amz-Signature=5db7b5a0f48beee37ee7eeeebbbd2d501869e4113d68c87c7b9971d86705e32f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5WVA3F%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BWI%2BeqveUnxr%2FCNdXknh4lrhhAP1PEZ6Bb%2B7K3hObywIgJJ%2Fdx%2FN2GN9VFW8TUgA94bE0TjZ%2F12SCktwYIeOQ9AsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9h%2FThXrS1Gv5a7PyrcA3vYAcdaB1oGoM%2F2RpEqGIbW5B0hrzYw3PrZSHDhqzweC68Q9slJOS%2BxPcox9OgJGdBLJCs37yfX4O66xZA4a7ZJzvUChi9HfC74eW0pM36CN2xetyKY8GLnZ4%2F8XNHvi7WZrnjxPDuXx9s8oggCsSEhKGx2NUfFaRrxVpgejI2Waf0wHscH1HCVHXsufo1tR4TBSKCcaojoAqEtdPFtsAAuOOWalsu8wyK1ppUxG%2FwVVq50RfCYt5bFrVIYSDGMIpXZzw5KiYArRnCFKhwrRmdceXuzZidOloRZ8msMk%2BI%2F0aTNvUm%2BaLTBrXI2lTTlPqgc9BH%2Bm%2FUv7I8lMFfBULNGEy22urg2KYIlR09NZ5uTwFpk1aYaqBa8XQLd0B%2FZ9e%2FIsg9eGLeWq4vAmWpFuSI%2B0DHXyRJGDLQKFxBL61eYN6n9bWUwCl1s82zeEv2SPG0TeNuYmxmmh0AO8KZL2Ld2fCtX8tuJ3W54IlYd0xhCE5QyTIKYTKkw%2FLvdZNC%2B%2FmKeFlFSuOF%2Bm6a89bT34d3nKlcAhraR1RUaBCFaBIRXQRAzJD51eZfACshLGKYCDvTMphvmkjeVvLs4flffUVClRFyjRrtdXQwUfawQhNCLNiMWQbpbH35eCSLfMK%2Bt68EGOqUBWyjvc0IC9OVU%2BMEp1sY6ZWQptLtFCF9YrQmO%2FLeDgcUvNBoJLBIkWV0u0T4baGCQ8IgoAepE5w3bYvaoaUGi8J88%2BLEsSy75B5%2BDr3O4p%2BFCGyumX4PA637otLMV5o%2B8tbs%2Ff7GgXVFFRbRP8zZhkkIzprW3xIwVtpA%2FopJr0W%2FEb7L5GasIJXTxH6gCjLqfRVz2qMHfDs43K5foevrrFbMsEpoZ&X-Amz-Signature=997fed9c163e1dbf8e827395449062ed3a57d07414a3de1af417bde387f075a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
