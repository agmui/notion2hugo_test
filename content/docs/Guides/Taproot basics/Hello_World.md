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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUH7GFK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCGfbScgwN8HPRXt6t6jjY4poMOEQaHLlPJcr6%2FN7cCegIhANDubHHUUHTtqfXwgJgEQaEpwdt3P2C3Y57Dsgd5LFHAKv8DCFMQABoMNjM3NDIzMTgzODA1IgxoA7tZSzb2dotl%2B%2B0q3AOsl441z7IhYP2jQ3Fo19sTLoxx%2Fc3EYLCHX23lm8N7lBvFByMiTdiR0rZbaSExPZ1KznroQH1AK5Ef7FLicGAg5OKIYS7Xp687dPq%2BlGtGi9ugs77jes2kFtq8yHkYFPmzquVgdhYOrVTwMTw8ZQxyvs5qyikdYyEvcuJp6%2B8O%2B71ysFmnn9jWtIlKLg%2BMg%2BOrebTzw1WaZ13ervAutWQ4xsewXtoKEKFCYzkZHszzUNBqZ4x7XVaZBDMiFsc%2BTfLOP9AMaJYpwrdTZjpLTnz0TCG%2FX4YGfAHqqbNejRH78M7dOwrLYU%2FGMcWm1dst4Cbh0Ev%2B7secHPK%2FkLVdmlhm98fIQBk5uTihWRUIZHeMKJlE2Top7YtXT%2FodgYatSBpuFmlCBbnUD%2BEc%2FSwXDkdBA2dj%2FlrVJ8vrYWzhVXH2ZKZkZBwJUHO4dPTyZuxbvbMoPx5Khtu2%2FaPGyMNHPGfNff09bZylI%2B2plynnKWjR1Ndb1PgtFv4jiOSVOMZVoCugbMftobvKqPhdHNc6BD%2BA2S4%2BIadECQOwZ9pA2H21xaONMcC8B54gDgEPRVWYxPelR6tKBHQth6afO3k0KeSUrlKDkfcZTaZsUgl8fHqwBjcQ%2Fho3yKfO9OWuljCMo%2FrEBjqkAX8RCVXwDbKU1DfyiQss6iMjyB7nsJCbXUtYxNYaD2JbN1nZri%2FNqXxLCXot%2B5KFCH21nUvp7sny%2FZqNH%2BDpgwWIxqkdTtPtZdN7C4tNAukwdwCI7TeWrhKh0PfUPEaUNxE7bQQzhNNVFUVtxDLZsVVBwdh%2Ba8jdJAK0898jYWERh82lsb0UzNTke4iQfYfTQpOCrcodF1cMQAR2I1owrnoWeSEz&X-Amz-Signature=beaa9ef35698b9aed3111a583a4800612d5825e93a2e6c58f517635eaa598104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUH7GFK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCGfbScgwN8HPRXt6t6jjY4poMOEQaHLlPJcr6%2FN7cCegIhANDubHHUUHTtqfXwgJgEQaEpwdt3P2C3Y57Dsgd5LFHAKv8DCFMQABoMNjM3NDIzMTgzODA1IgxoA7tZSzb2dotl%2B%2B0q3AOsl441z7IhYP2jQ3Fo19sTLoxx%2Fc3EYLCHX23lm8N7lBvFByMiTdiR0rZbaSExPZ1KznroQH1AK5Ef7FLicGAg5OKIYS7Xp687dPq%2BlGtGi9ugs77jes2kFtq8yHkYFPmzquVgdhYOrVTwMTw8ZQxyvs5qyikdYyEvcuJp6%2B8O%2B71ysFmnn9jWtIlKLg%2BMg%2BOrebTzw1WaZ13ervAutWQ4xsewXtoKEKFCYzkZHszzUNBqZ4x7XVaZBDMiFsc%2BTfLOP9AMaJYpwrdTZjpLTnz0TCG%2FX4YGfAHqqbNejRH78M7dOwrLYU%2FGMcWm1dst4Cbh0Ev%2B7secHPK%2FkLVdmlhm98fIQBk5uTihWRUIZHeMKJlE2Top7YtXT%2FodgYatSBpuFmlCBbnUD%2BEc%2FSwXDkdBA2dj%2FlrVJ8vrYWzhVXH2ZKZkZBwJUHO4dPTyZuxbvbMoPx5Khtu2%2FaPGyMNHPGfNff09bZylI%2B2plynnKWjR1Ndb1PgtFv4jiOSVOMZVoCugbMftobvKqPhdHNc6BD%2BA2S4%2BIadECQOwZ9pA2H21xaONMcC8B54gDgEPRVWYxPelR6tKBHQth6afO3k0KeSUrlKDkfcZTaZsUgl8fHqwBjcQ%2Fho3yKfO9OWuljCMo%2FrEBjqkAX8RCVXwDbKU1DfyiQss6iMjyB7nsJCbXUtYxNYaD2JbN1nZri%2FNqXxLCXot%2B5KFCH21nUvp7sny%2FZqNH%2BDpgwWIxqkdTtPtZdN7C4tNAukwdwCI7TeWrhKh0PfUPEaUNxE7bQQzhNNVFUVtxDLZsVVBwdh%2Ba8jdJAK0898jYWERh82lsb0UzNTke4iQfYfTQpOCrcodF1cMQAR2I1owrnoWeSEz&X-Amz-Signature=e831eab32f64fc578a3b56a6d67c9324a5da8f10b61eb316e4f25ef774c73199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
