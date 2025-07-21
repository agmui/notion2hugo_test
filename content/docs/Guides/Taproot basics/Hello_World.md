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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULBDQVRG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSQBMLVmiZ4T8VvXlY2GausZAHxcSGxzfJw08koTH0DAiBNMoeCMseI2OHCTILtD%2B4VRDAfK94HL%2BggfGWoOhjJnCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqxaizDRsMlNvnRB5KtwDhRXHn5F64ivgLoR0QDa%2FqCtmMxvSYZWzYarddXWa6Guz0OTASOVV3GQPO1Qk6mTxYqmNqc3HbZTZwKHlHBJHPaSw3vuA%2F97HfR73Y3udMmILkCYK8DVD92bYuy6ipYdADCnuC3ottKxbQOmgAvJVH4%2BSBuoObqpna3qrYPCa8nP1RTX7%2FIppEBdsshQpORC0P1bm8I2l2ARL1OJMXg6JSqNADn1iX6phyQOtGoTrfmuU%2F7f53T03L9aG4%2Bnm%2BdU5cp0bXtp3AVdXHg63cipp8%2B78l62ggLk%2FfF%2F7Z391Qcx0EorjPFhvgCdERb0nhO1%2By3SUF5q%2F%2F0AlUdYhl%2FIg1pDUVLxOT5UEYQVWT%2BytaY%2Fpj4I2%2Fd%2FgeVdU%2Fs%2Fh84NjPa33xSSsKqhxqui1ojBexwkWb3EMO7oTHjvFgkIRPL6XHyYG8F3Dvvb5R6tEpQCKBycDakKdSI24nOlIHdZVuOr59eu37t2y2L9buD%2F%2FC80HBsndKEqea%2FlQpeQJPvlqpNLrRsNK7CVzCAQ87V31dp3bbjVarKhHn1HO9y%2B8kCis8Yz%2FAg1o17RzBSYdpiOdEd6WgGGnBphjhQgj6%2FmW6dBuOaFZXnVx4zDki51XN%2BXe3QksX3aojbluZeUw0Y34wwY6pgHPyFi0iHFWScnV%2FJITK4Vaqhvswv7eNd%2FWo8EOD%2BdRgKFQMjlD%2FY4nC5gSgZG7LMJHXeXrSDK%2BgW0JkYkKxsSQPHe9wBWTauLuGj7fNkn6UzU4SCC7mFotPBx9oKm7gU4HQ29CzwOn9vP6BQv43j2YCu979LuDZozJjTzIykwnSJQ0QABp54A5CwakpUeEvJqo%2B1Yi4aIweQbUjOUeo335V0KHNlLF&X-Amz-Signature=1794e917d49cc6b7b532a49166df2dbd55c7c50396ffdd4cc7ca2109824ce519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULBDQVRG%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSQBMLVmiZ4T8VvXlY2GausZAHxcSGxzfJw08koTH0DAiBNMoeCMseI2OHCTILtD%2B4VRDAfK94HL%2BggfGWoOhjJnCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqxaizDRsMlNvnRB5KtwDhRXHn5F64ivgLoR0QDa%2FqCtmMxvSYZWzYarddXWa6Guz0OTASOVV3GQPO1Qk6mTxYqmNqc3HbZTZwKHlHBJHPaSw3vuA%2F97HfR73Y3udMmILkCYK8DVD92bYuy6ipYdADCnuC3ottKxbQOmgAvJVH4%2BSBuoObqpna3qrYPCa8nP1RTX7%2FIppEBdsshQpORC0P1bm8I2l2ARL1OJMXg6JSqNADn1iX6phyQOtGoTrfmuU%2F7f53T03L9aG4%2Bnm%2BdU5cp0bXtp3AVdXHg63cipp8%2B78l62ggLk%2FfF%2F7Z391Qcx0EorjPFhvgCdERb0nhO1%2By3SUF5q%2F%2F0AlUdYhl%2FIg1pDUVLxOT5UEYQVWT%2BytaY%2Fpj4I2%2Fd%2FgeVdU%2Fs%2Fh84NjPa33xSSsKqhxqui1ojBexwkWb3EMO7oTHjvFgkIRPL6XHyYG8F3Dvvb5R6tEpQCKBycDakKdSI24nOlIHdZVuOr59eu37t2y2L9buD%2F%2FC80HBsndKEqea%2FlQpeQJPvlqpNLrRsNK7CVzCAQ87V31dp3bbjVarKhHn1HO9y%2B8kCis8Yz%2FAg1o17RzBSYdpiOdEd6WgGGnBphjhQgj6%2FmW6dBuOaFZXnVx4zDki51XN%2BXe3QksX3aojbluZeUw0Y34wwY6pgHPyFi0iHFWScnV%2FJITK4Vaqhvswv7eNd%2FWo8EOD%2BdRgKFQMjlD%2FY4nC5gSgZG7LMJHXeXrSDK%2BgW0JkYkKxsSQPHe9wBWTauLuGj7fNkn6UzU4SCC7mFotPBx9oKm7gU4HQ29CzwOn9vP6BQv43j2YCu979LuDZozJjTzIykwnSJQ0QABp54A5CwakpUeEvJqo%2B1Yi4aIweQbUjOUeo335V0KHNlLF&X-Amz-Signature=5715aaf77f11bde3d5f163f6cdfae006375a030b66010ecfd022a80445220173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
