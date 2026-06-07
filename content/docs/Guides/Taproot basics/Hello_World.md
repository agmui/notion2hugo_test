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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDU7GB7V%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChYdpYHkwv7%2B7kzg1eEoL2htiiAnr%2Fzqtbqr2X8rxSmAiBNukMrzEo2q%2BYerof1HaQoM4T8Z1XXPtPXgsXf7YUsKiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsu%2BolGMZ60YHgbIrKtwD39H78X8S8IaGKkGElMiF4%2Ba7sXry8asTFUK2tviPQC%2Feh6vP8VVNrFXKgBSQ0DyP1DDTz924OGt089SRgZX4hv7VYZewAZt8SgizMwh8oDSIx8S7CBpJ2HDhmOKVFHNyKOQ0SbRR9QUH85cuv%2FQ%2F%2B9V6CLjHwJqNN9ZWv6JbiEki2zwphtp57zHXCuaGgooEBNgf32l28aoLxnG2lyJe7RcyOtZKOPTXOHQvJfFM7NN8uJHyyDRWBA1FTfoqh%2BoNf9JxQiQzrGt5lGd0kV%2BYtuP5K9Rs0DBTlXCLKxfyi9etfZ7RtuOSBXNlxTwYBPqhMec9tYUUQAdQmYD%2Br3I0o50zwvW1xWg9FkUqKPqk30l9eOaw8Rpsvse%2BZyFo2RD%2Fj585p%2Bj7LAxT%2FbIAvDI2OANiF7o4cirgK%2BjZrQ0TYwK1to0OGIF19th5cHej2jPxHWdeMvo9tgs0jndyV9uzLIW6BkgNr26XFk0OBURzj6cSCdaXdKqKBpL25aDCkl6AMe3Sy9s4Cg07HcsVFpyzQQ89jDPioXa22yda3pn1lj4%2F9ZtrSHmmjIfzGbVRBtRakkxMWT5hlXcsnVfoooqKAaE7QH76RXOz6SWWZoYaPq4RAExGi%2FEg1%2B9VRzcw9NCT0QY6pgGJixbCXYhwqW5ttLI4ksM7AgZTlq13lXbkPrv6y5t139FdO%2Fp6uYGIcMYGjJWlmzLPwRZAEFDGFlNEZCEuEeRIWzQsnDMlUDYzCY9oX31xku6BCPJNqwR9tvMZFyz8txDcSRDVXsamIOz2KGkWPNhogggEaSUpSXRLqV62QZSJB%2BRi3nsEPUWkEcg0FUDFYi443RJjasg%2F%2Br%2FLoiDG3Wo9NswrpGcK&X-Amz-Signature=6c6652a0d33ac4c877b529a8e3a2444ec47d73ead634abd37129a53dced876e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDU7GB7V%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChYdpYHkwv7%2B7kzg1eEoL2htiiAnr%2Fzqtbqr2X8rxSmAiBNukMrzEo2q%2BYerof1HaQoM4T8Z1XXPtPXgsXf7YUsKiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsu%2BolGMZ60YHgbIrKtwD39H78X8S8IaGKkGElMiF4%2Ba7sXry8asTFUK2tviPQC%2Feh6vP8VVNrFXKgBSQ0DyP1DDTz924OGt089SRgZX4hv7VYZewAZt8SgizMwh8oDSIx8S7CBpJ2HDhmOKVFHNyKOQ0SbRR9QUH85cuv%2FQ%2F%2B9V6CLjHwJqNN9ZWv6JbiEki2zwphtp57zHXCuaGgooEBNgf32l28aoLxnG2lyJe7RcyOtZKOPTXOHQvJfFM7NN8uJHyyDRWBA1FTfoqh%2BoNf9JxQiQzrGt5lGd0kV%2BYtuP5K9Rs0DBTlXCLKxfyi9etfZ7RtuOSBXNlxTwYBPqhMec9tYUUQAdQmYD%2Br3I0o50zwvW1xWg9FkUqKPqk30l9eOaw8Rpsvse%2BZyFo2RD%2Fj585p%2Bj7LAxT%2FbIAvDI2OANiF7o4cirgK%2BjZrQ0TYwK1to0OGIF19th5cHej2jPxHWdeMvo9tgs0jndyV9uzLIW6BkgNr26XFk0OBURzj6cSCdaXdKqKBpL25aDCkl6AMe3Sy9s4Cg07HcsVFpyzQQ89jDPioXa22yda3pn1lj4%2F9ZtrSHmmjIfzGbVRBtRakkxMWT5hlXcsnVfoooqKAaE7QH76RXOz6SWWZoYaPq4RAExGi%2FEg1%2B9VRzcw9NCT0QY6pgGJixbCXYhwqW5ttLI4ksM7AgZTlq13lXbkPrv6y5t139FdO%2Fp6uYGIcMYGjJWlmzLPwRZAEFDGFlNEZCEuEeRIWzQsnDMlUDYzCY9oX31xku6BCPJNqwR9tvMZFyz8txDcSRDVXsamIOz2KGkWPNhogggEaSUpSXRLqV62QZSJB%2BRi3nsEPUWkEcg0FUDFYi443RJjasg%2F%2Br%2FLoiDG3Wo9NswrpGcK&X-Amz-Signature=ec265ba8a4df4a975609f483d0b3e5070959e0ed0133805ce15c0570cd100e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
