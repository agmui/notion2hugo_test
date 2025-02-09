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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXYAMH2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcB5aOnwkL91BbxyvEappkcyWiNRPFCc2Z5iIpRTayhAiBoFCtHRKkNOjZuqNJc2F7bylzhdsm8l1QjFOU217EMYSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUJ1B4mCz88o%2FHMIDKtwD%2FhLO6y0d%2B2qHy5yT9ilf3FnIXtAjovD1Pj9P0UVZ8CJ9BcOZ9Gmx7ammjj4kaP8k5n9STxN8H9z%2FY%2BN2dNWKjjMJiers4vwq%2B8VJImKrwIcGn1CrN3Ni7mWZN6G8lSY45hANPP%2FesZlGtNkFqkGmtDKO6VxWuexzIPt2h85wE5PXX1eZc2tXu0aRLnZCDuoCF07E0ZNOPQSPz%2BDdAE%2FN8ukBadCYgy%2BfYXfJOTKYfs%2FkMCYij5LazvM6wSsMXXj7d%2FTkx7BxELAPC5LQShRwLrD8NfTYvILl8csSzoHhYRZV%2FYfr%2BmucV6VRKrn3NIC7q2pPwLo8%2B0QwozCqS8nppckw1pK91uuMW%2B9pQ9NyjZVJmoIq6RPpyKMi%2FPMaLg%2FGo5enuFW4Gcltmuq%2BFI2YKhspv61Oa2ijGwFOnfQ2y1mbxfpGM06FGxF64NY4PLOm%2Brfua6ytWm9x%2F6DvuIMYKVQ%2FZo3C1hhPFTyNKzbIKMNxsWaziGl4A%2FnOhmUJJmyreLiLwAjwzdMSbuM80K7aSm6U6Nr8Z%2F6IjJcqbtYCSdlLGIqUW6QBgWKL1PO82j95ibo6TEyifrqYN8P40xc7S0JQFrOMzLUN6bYriAIJRThGEBdpvx8eag9jwDUw6eShvQY6pgHE439pbAxYhUQPk2F5siOyu5sJ%2B%2FZ9Cn2KvxfMT6HtRwVW0bVm5KHqhIHk7BJAy3EAjRqOIccFTybFUzPAausj9hpZN6COuqwJl9QZwyM7lA9C0xM%2FtaqPipxoxSyWzvEtK5FOa9MIvxgy9zSuBP%2FoO5d3sF4niedLaHzhVjlizcQCtTXNetGaVI3WwnsD6ig1PBDr%2FaO9t%2BxGx3sj8RnBLfQ9HhGw&X-Amz-Signature=241d4773d1960506dc477cea259f0afec5bb61655d479a4f0eb2d5ca66a26070&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOXYAMH2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcB5aOnwkL91BbxyvEappkcyWiNRPFCc2Z5iIpRTayhAiBoFCtHRKkNOjZuqNJc2F7bylzhdsm8l1QjFOU217EMYSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUJ1B4mCz88o%2FHMIDKtwD%2FhLO6y0d%2B2qHy5yT9ilf3FnIXtAjovD1Pj9P0UVZ8CJ9BcOZ9Gmx7ammjj4kaP8k5n9STxN8H9z%2FY%2BN2dNWKjjMJiers4vwq%2B8VJImKrwIcGn1CrN3Ni7mWZN6G8lSY45hANPP%2FesZlGtNkFqkGmtDKO6VxWuexzIPt2h85wE5PXX1eZc2tXu0aRLnZCDuoCF07E0ZNOPQSPz%2BDdAE%2FN8ukBadCYgy%2BfYXfJOTKYfs%2FkMCYij5LazvM6wSsMXXj7d%2FTkx7BxELAPC5LQShRwLrD8NfTYvILl8csSzoHhYRZV%2FYfr%2BmucV6VRKrn3NIC7q2pPwLo8%2B0QwozCqS8nppckw1pK91uuMW%2B9pQ9NyjZVJmoIq6RPpyKMi%2FPMaLg%2FGo5enuFW4Gcltmuq%2BFI2YKhspv61Oa2ijGwFOnfQ2y1mbxfpGM06FGxF64NY4PLOm%2Brfua6ytWm9x%2F6DvuIMYKVQ%2FZo3C1hhPFTyNKzbIKMNxsWaziGl4A%2FnOhmUJJmyreLiLwAjwzdMSbuM80K7aSm6U6Nr8Z%2F6IjJcqbtYCSdlLGIqUW6QBgWKL1PO82j95ibo6TEyifrqYN8P40xc7S0JQFrOMzLUN6bYriAIJRThGEBdpvx8eag9jwDUw6eShvQY6pgHE439pbAxYhUQPk2F5siOyu5sJ%2B%2FZ9Cn2KvxfMT6HtRwVW0bVm5KHqhIHk7BJAy3EAjRqOIccFTybFUzPAausj9hpZN6COuqwJl9QZwyM7lA9C0xM%2FtaqPipxoxSyWzvEtK5FOa9MIvxgy9zSuBP%2FoO5d3sF4niedLaHzhVjlizcQCtTXNetGaVI3WwnsD6ig1PBDr%2FaO9t%2BxGx3sj8RnBLfQ9HhGw&X-Amz-Signature=c19b354fa01b370acc641dfdd15b870a84e5293a3ba4807389c470c5dcb63092&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
