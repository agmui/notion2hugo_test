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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y233QYPK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCg7TGs6N6hL8PS%2FFXVqEFqqnnZmGiQY4d8pAKjgiSTeAIgdhWxTKiSuCt50UQt6uuHF7VpBTRqr%2FvHfYkCbNrU6i0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1IBFX8vxU8gD5vqircA%2BMYMhuXKlmptt6D3D55oIfj62%2BfaA%2FHlDsbHmX%2FLCkTLEIAoSWei0z0%2FEUm%2F8sgCIsJMJ24AIc84alA42LrRKgd3CIzKBP683HBexIhU4PYn5KoPVlnaRQRjPy4YvdLUW80VCY%2FwBg1v96Veb2HGoE3YS579pdU6xp0i4AzXWIaK%2FgyhmaqOwlD82Qy9rnltZyJu6Wvg3vFbKZIVBLqx4SYMd9zOiQcIT4ZtvKCZZfapR9JjTiDaMk2jnALTcZnjX9eBpzJrVCsIGhSztU4a5HGxaHQwwT2qCFEbPofVQC2Beouo2extG7j%2BXQRjhGxn1dWn3RJKVotESt3K3BWHfAt%2Bhx2DjmwBHUwSr0R8%2BUJFoE0aSeaISb8GaaxRZEn6oAJxSCqcRLndOTEw5uWntPL5x0NytY8T9UrW8Sw0Fw%2BZRb0kuW%2Ba1GohfOBMTTUineRfWN3x6knJVHHU96bNzZYxtIJ9QtDnDE7dYIqsLFEjPeZPcNweDpdXA1mRQ8HVml9eThNzJFN7p6BBohi4wMi8cYT1uOhY999czIrreGxwgq0WG16n1q1d6JlX%2FoBwUh2ih2BxHnzQSlQeE84UKIrSOynQSP6n%2BccUPczgAjLyenfJkHoK%2FLG5WMDMJTJk8AGOqUBH2o7uZKP%2F6JeqAgaIqACvAAWCGFMB1%2BhicufeI8f4Xl%2BeIi5kXybMACt7cUBBLRjpB7Vlx2HJ50c%2BZkoVYdHJeoVZG8mYh0xM5AHrwOG%2FMXyrNUOdZcH0WwXq8iP90I47cVbtFFNYjjA3e4GFa6yI9%2FPUY6%2BGCfjNh6MRZMp4T5lqvA%2BtgrUwnvNyg%2FQ22CQkjvAzyg%2Fi02DXjXwRrzautrFMniX&X-Amz-Signature=bb74128bc01cd4125b562688ff0750e77059a49a60c1a17cb0ea61080ad1ab44&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y233QYPK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCg7TGs6N6hL8PS%2FFXVqEFqqnnZmGiQY4d8pAKjgiSTeAIgdhWxTKiSuCt50UQt6uuHF7VpBTRqr%2FvHfYkCbNrU6i0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1IBFX8vxU8gD5vqircA%2BMYMhuXKlmptt6D3D55oIfj62%2BfaA%2FHlDsbHmX%2FLCkTLEIAoSWei0z0%2FEUm%2F8sgCIsJMJ24AIc84alA42LrRKgd3CIzKBP683HBexIhU4PYn5KoPVlnaRQRjPy4YvdLUW80VCY%2FwBg1v96Veb2HGoE3YS579pdU6xp0i4AzXWIaK%2FgyhmaqOwlD82Qy9rnltZyJu6Wvg3vFbKZIVBLqx4SYMd9zOiQcIT4ZtvKCZZfapR9JjTiDaMk2jnALTcZnjX9eBpzJrVCsIGhSztU4a5HGxaHQwwT2qCFEbPofVQC2Beouo2extG7j%2BXQRjhGxn1dWn3RJKVotESt3K3BWHfAt%2Bhx2DjmwBHUwSr0R8%2BUJFoE0aSeaISb8GaaxRZEn6oAJxSCqcRLndOTEw5uWntPL5x0NytY8T9UrW8Sw0Fw%2BZRb0kuW%2Ba1GohfOBMTTUineRfWN3x6knJVHHU96bNzZYxtIJ9QtDnDE7dYIqsLFEjPeZPcNweDpdXA1mRQ8HVml9eThNzJFN7p6BBohi4wMi8cYT1uOhY999czIrreGxwgq0WG16n1q1d6JlX%2FoBwUh2ih2BxHnzQSlQeE84UKIrSOynQSP6n%2BccUPczgAjLyenfJkHoK%2FLG5WMDMJTJk8AGOqUBH2o7uZKP%2F6JeqAgaIqACvAAWCGFMB1%2BhicufeI8f4Xl%2BeIi5kXybMACt7cUBBLRjpB7Vlx2HJ50c%2BZkoVYdHJeoVZG8mYh0xM5AHrwOG%2FMXyrNUOdZcH0WwXq8iP90I47cVbtFFNYjjA3e4GFa6yI9%2FPUY6%2BGCfjNh6MRZMp4T5lqvA%2BtgrUwnvNyg%2FQ22CQkjvAzyg%2Fi02DXjXwRrzautrFMniX&X-Amz-Signature=f8c2c28071e0eee145d0c7c043d6d918b79c11da2381e4f4da3e7698f70d0531&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
