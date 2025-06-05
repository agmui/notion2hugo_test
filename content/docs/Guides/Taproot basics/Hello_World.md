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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFXG7LK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFbHA43sR9T5JWimHvYPMt5FlKxbrcF9VRysvnnNbjGgAiEAtNgAzFKeOfnYn2b8pXZH6VIj9by24P6ccxsu7agSpx0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM466990X5DRAQekLCrcA2O1rRSN8RpDxbf711R60%2FzyEhrajwuVe6mNiFJSUJwy7%2FMuWCwLN2Ax76crraLU4O7P%2Fh5GqBSsnN85VShVeNXyfybLVcHlgeveuA737HdFein1C5dHcq%2BA3y9wycNym57eBoHaL%2BnLu65dFaASn9VgZIGAg9PzQcKgu9YH6RyESbhK%2BGFkhrdCuJEQC8W%2FowiweQbGmae51%2BRga4RDLxuTzyQeiJ60kKQwywP0PLj75j1s353oIQGd3zItM9UR%2BoErejNbdWRv9WMtYIXSi1m3xetGCrZayabulBo6kg9qc%2FhUAROP6SDJxUt4yltDJlMKbgRUR6UFp4JfnUVuWUYc%2B1yYmGK7ACg4rd7GcQoAOUSWSevU0EQeT759ESIguPHB%2BFg68euYdTCh1ly9kWaYsefUzbEo0dvn2FN9ru8Ccr5SgVxAzYewwoyBVViR91CplRJ0E%2B%2FCwVSS3wmYkRCdsd2QcN37M7bPFOHfKC6OOhoLJxv8Kr6ftKaDa7WvgfWiZr5e1h%2BONm6deUDNRRCchXTS%2FoPhMaR59wsfLXVFeRVN0MZflV3j8GUnns5DFME6yFG3hAE2yxzibaEC7EajeziYfxkj12YUME23LyiqSKnVn8Y0vojZSz3qMPLehcIGOqUBRVMVFeLigAZvDiDXnBMykEJD1RWZajl3O9zADA9f8Zszk4zTZ93jLDQw%2FZE1C8H8hBkvAO9qVIlyEb8I6k4Sy6ANZ3xZh2bH6Dh%2BCKyXgSpKyrYTxr3Vk31w9w4eDc06kPg56JLE1SJk%2FPleNh0GRaKDRT9w1j24V7U9wKwFMg5Y8GkNQOOXdSr%2BQes3nIaswMPJmV1haAuonyZ4TDrA8FzXNYb5&X-Amz-Signature=56894c50b70bd424691ff3097093cc78fa65f7b3d04b395947e9a1f03b13e6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFXG7LK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFbHA43sR9T5JWimHvYPMt5FlKxbrcF9VRysvnnNbjGgAiEAtNgAzFKeOfnYn2b8pXZH6VIj9by24P6ccxsu7agSpx0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM466990X5DRAQekLCrcA2O1rRSN8RpDxbf711R60%2FzyEhrajwuVe6mNiFJSUJwy7%2FMuWCwLN2Ax76crraLU4O7P%2Fh5GqBSsnN85VShVeNXyfybLVcHlgeveuA737HdFein1C5dHcq%2BA3y9wycNym57eBoHaL%2BnLu65dFaASn9VgZIGAg9PzQcKgu9YH6RyESbhK%2BGFkhrdCuJEQC8W%2FowiweQbGmae51%2BRga4RDLxuTzyQeiJ60kKQwywP0PLj75j1s353oIQGd3zItM9UR%2BoErejNbdWRv9WMtYIXSi1m3xetGCrZayabulBo6kg9qc%2FhUAROP6SDJxUt4yltDJlMKbgRUR6UFp4JfnUVuWUYc%2B1yYmGK7ACg4rd7GcQoAOUSWSevU0EQeT759ESIguPHB%2BFg68euYdTCh1ly9kWaYsefUzbEo0dvn2FN9ru8Ccr5SgVxAzYewwoyBVViR91CplRJ0E%2B%2FCwVSS3wmYkRCdsd2QcN37M7bPFOHfKC6OOhoLJxv8Kr6ftKaDa7WvgfWiZr5e1h%2BONm6deUDNRRCchXTS%2FoPhMaR59wsfLXVFeRVN0MZflV3j8GUnns5DFME6yFG3hAE2yxzibaEC7EajeziYfxkj12YUME23LyiqSKnVn8Y0vojZSz3qMPLehcIGOqUBRVMVFeLigAZvDiDXnBMykEJD1RWZajl3O9zADA9f8Zszk4zTZ93jLDQw%2FZE1C8H8hBkvAO9qVIlyEb8I6k4Sy6ANZ3xZh2bH6Dh%2BCKyXgSpKyrYTxr3Vk31w9w4eDc06kPg56JLE1SJk%2FPleNh0GRaKDRT9w1j24V7U9wKwFMg5Y8GkNQOOXdSr%2BQes3nIaswMPJmV1haAuonyZ4TDrA8FzXNYb5&X-Amz-Signature=7bda95b9a4b36bcb687cb6bad70e0ea9c97a038f5145f47531facc7810123caf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
