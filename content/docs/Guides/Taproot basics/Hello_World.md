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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWZHIZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKGQT9KLCPWS5ttUSdeFlrJxeFYqiUqTA0WbbTGrk89AiBr%2BANlCQsru594q3BgBnNEVMvRYIQM9%2B%2BMd8fYalLzMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHIQB17bj0GsZchkKtwDGdRR2gJFJOK%2BnbUFsvG87oQmijfgQFnKvrOn3Yo955mcgI0dUTTHENl2NZpgsEi3hFYnAOhKsk6Szf4Lta1rAOqXlRhvEMIR%2FkK3MccaCjXscXDQgDpwQEjvm5ZPB5H0RmQQ5pnm%2Ffq7P6BYIlyehtcNtuuGGMmGFZdK0ldVAKaNYaM%2BYf3W0Dt%2BRYiRx84F6OsjZDp9GgLFw3LV0yBTqfmWdK%2FkMWB%2BHukXv%2BnyxNd1IxFQlfPpLd72sDlnLVEuOazGtMp5vDskZHwBhn7odzdFKMi%2Blj0yf1ImaZmJi1FLQl8Py3LvKKtB5f6f1VBrr8sPYEs8bOffzNAp5evBqCdYdegHHo45tkqwX%2FVRA5VziDi4xsC4jBKC6JS25OhtsbWK4nk%2B2re4oueS1zIQL0c4f%2FIQiRpcWl9D9Ryqe1YPVj0ULOlasYj8Ev3%2B0s%2Fn%2FbonAoYImuqHvJ6WkO6pzQTHY5fF%2BgiGoJEOV2a0bhimwwzyaiOBZ0V6146qUxDBo8efBB4iVkFyuogrrwzq6Lj95y3pJ0Z3tmomHnB3wjE6iVBbCQ0nkUjOs9RPC%2FnGb53izUzfw4UiIByXj5iZ5KrX4leiAD4q2bE46SDHeh38zVdqECFEQqijSU8wxb%2FixAY6pgHcFukkObbR141IyECO0RGNFaNZ%2BRAOSTMt4JHwTB3orPb%2BM72Fqn%2BLMm4xymbz8ScM6upFnMv9xylG%2Bel8%2BVNPSLFQknBSso5jB3B7t9taTUW%2Fvrvc%2B1Ml4bK2%2FqOYqu9E2yysjGskxlfLX55M72QBMNw%2BHAC07k2GwWcOnAnHptbu5IFVK2gUWWca6nXaecTpL%2F4q4xwtIc1V1W2enIbbP3a03H3X&X-Amz-Signature=beaba2bec204505cd618144b1e14863e3c8b03a6c7329a9b8ba7a55e8a540153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWZHIZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKGQT9KLCPWS5ttUSdeFlrJxeFYqiUqTA0WbbTGrk89AiBr%2BANlCQsru594q3BgBnNEVMvRYIQM9%2B%2BMd8fYalLzMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHIQB17bj0GsZchkKtwDGdRR2gJFJOK%2BnbUFsvG87oQmijfgQFnKvrOn3Yo955mcgI0dUTTHENl2NZpgsEi3hFYnAOhKsk6Szf4Lta1rAOqXlRhvEMIR%2FkK3MccaCjXscXDQgDpwQEjvm5ZPB5H0RmQQ5pnm%2Ffq7P6BYIlyehtcNtuuGGMmGFZdK0ldVAKaNYaM%2BYf3W0Dt%2BRYiRx84F6OsjZDp9GgLFw3LV0yBTqfmWdK%2FkMWB%2BHukXv%2BnyxNd1IxFQlfPpLd72sDlnLVEuOazGtMp5vDskZHwBhn7odzdFKMi%2Blj0yf1ImaZmJi1FLQl8Py3LvKKtB5f6f1VBrr8sPYEs8bOffzNAp5evBqCdYdegHHo45tkqwX%2FVRA5VziDi4xsC4jBKC6JS25OhtsbWK4nk%2B2re4oueS1zIQL0c4f%2FIQiRpcWl9D9Ryqe1YPVj0ULOlasYj8Ev3%2B0s%2Fn%2FbonAoYImuqHvJ6WkO6pzQTHY5fF%2BgiGoJEOV2a0bhimwwzyaiOBZ0V6146qUxDBo8efBB4iVkFyuogrrwzq6Lj95y3pJ0Z3tmomHnB3wjE6iVBbCQ0nkUjOs9RPC%2FnGb53izUzfw4UiIByXj5iZ5KrX4leiAD4q2bE46SDHeh38zVdqECFEQqijSU8wxb%2FixAY6pgHcFukkObbR141IyECO0RGNFaNZ%2BRAOSTMt4JHwTB3orPb%2BM72Fqn%2BLMm4xymbz8ScM6upFnMv9xylG%2Bel8%2BVNPSLFQknBSso5jB3B7t9taTUW%2Fvrvc%2B1Ml4bK2%2FqOYqu9E2yysjGskxlfLX55M72QBMNw%2BHAC07k2GwWcOnAnHptbu5IFVK2gUWWca6nXaecTpL%2F4q4xwtIc1V1W2enIbbP3a03H3X&X-Amz-Signature=ae64720d8bb28875414b9073d147b22fb7bc8f6e952894a8b3cddb83a2763a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
