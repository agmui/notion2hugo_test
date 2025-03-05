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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNQTAJ6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQoCvhnIF05OxYrTMoSpnJGMuyy4gRjB7xrzj26iAPPAiAD3kbACoKSjGz7gu1YZRqoGi3qMFL1rsod38qY%2FySEnSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMbvCx5ugxU0sSB050KtwDq9Dz1GcqwpZaaRj4lCe6mg19gY%2BZsIj7nqINN9Ea0MwQTQav2oY5%2BmJ7xN9VRAUJf%2F%2F2HBcnoWIVx30SYhUNWPkcVksMDLJTGK4R0ypcNwi%2FpGXZmIr9KkEwWMj75czBPtbBUp17UWNmxrxQBDsTG48F3XeZVdiNMIMGF5Rrvj55MXucQUk16nYgIqFsuuX7HyZkCnNvdBV%2F7CA4FWPZlyhZcMwGRMJZhNTnYuewcLbafZtjlajfbbG4oU9v3U7ux5RNOeHIeZ1LKdIn%2F6G7vMvX8thGMCKAL7QAqW8AUQnywqBT0E1%2FJn5I%2Bz64ohY0AXPlovhBKRbrL1UdeVkCrHbd2%2FrEAwvLu7XYmDnHhf7Swj2cwYckMrDS%2Bl73ZR9biAOr71KSumEn3jCbh38hFXgbZ9hkWcpUDV8%2FgPHIPfIsW4N%2FIm3eDwEl2Kh%2Bhqf5dSmptP2uocU8ExZ3mn8D31HBHfpmgi6hvhOCy0c2SQajMNRGkhqPlt4mhAmXqNFoYltYLtNcB8d0GTiTljUvGZ%2FMO3QktyrVrQcFZafaMPb%2FxLXTpdhc8cjD3ldVReBXybl8LjyWUlbracxtcH0JVRl%2FH9F4lWsAKcVksvFtlrMChDEmPn5yiKCHzu4w%2F6OjvgY6pgG77N16kX7wiwLVcHU0xMqhiqwUAj6QQwGrBE3NePODhpJ9bBD%2BP4FcCwOWKArei%2BEE2mAHTkAwxyZlUv4kiESzC%2BJAH%2F5o57QdhAZvzmzyQRK4qaF8tqti1kO3yECja%2BzB2mIS66FWKx2PFLwe9I96PLfoPRWxpC50RG5%2FDeBQZGxIcGy6naTe8R2YmmJJs%2BW5nGUol4AkHcWAX2QIMa%2FglJI%2FOPrN&X-Amz-Signature=e7103402ce5f842346cdde6b5e4ac4d2cefca1409b31e32cfa46c7d034ddf23c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNQTAJ6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQoCvhnIF05OxYrTMoSpnJGMuyy4gRjB7xrzj26iAPPAiAD3kbACoKSjGz7gu1YZRqoGi3qMFL1rsod38qY%2FySEnSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMbvCx5ugxU0sSB050KtwDq9Dz1GcqwpZaaRj4lCe6mg19gY%2BZsIj7nqINN9Ea0MwQTQav2oY5%2BmJ7xN9VRAUJf%2F%2F2HBcnoWIVx30SYhUNWPkcVksMDLJTGK4R0ypcNwi%2FpGXZmIr9KkEwWMj75czBPtbBUp17UWNmxrxQBDsTG48F3XeZVdiNMIMGF5Rrvj55MXucQUk16nYgIqFsuuX7HyZkCnNvdBV%2F7CA4FWPZlyhZcMwGRMJZhNTnYuewcLbafZtjlajfbbG4oU9v3U7ux5RNOeHIeZ1LKdIn%2F6G7vMvX8thGMCKAL7QAqW8AUQnywqBT0E1%2FJn5I%2Bz64ohY0AXPlovhBKRbrL1UdeVkCrHbd2%2FrEAwvLu7XYmDnHhf7Swj2cwYckMrDS%2Bl73ZR9biAOr71KSumEn3jCbh38hFXgbZ9hkWcpUDV8%2FgPHIPfIsW4N%2FIm3eDwEl2Kh%2Bhqf5dSmptP2uocU8ExZ3mn8D31HBHfpmgi6hvhOCy0c2SQajMNRGkhqPlt4mhAmXqNFoYltYLtNcB8d0GTiTljUvGZ%2FMO3QktyrVrQcFZafaMPb%2FxLXTpdhc8cjD3ldVReBXybl8LjyWUlbracxtcH0JVRl%2FH9F4lWsAKcVksvFtlrMChDEmPn5yiKCHzu4w%2F6OjvgY6pgG77N16kX7wiwLVcHU0xMqhiqwUAj6QQwGrBE3NePODhpJ9bBD%2BP4FcCwOWKArei%2BEE2mAHTkAwxyZlUv4kiESzC%2BJAH%2F5o57QdhAZvzmzyQRK4qaF8tqti1kO3yECja%2BzB2mIS66FWKx2PFLwe9I96PLfoPRWxpC50RG5%2FDeBQZGxIcGy6naTe8R2YmmJJs%2BW5nGUol4AkHcWAX2QIMa%2FglJI%2FOPrN&X-Amz-Signature=6785f28a89d0110f7386653ea21cd452d53601cef016ab49b1b568b46b470459&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
