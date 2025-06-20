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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNHH2FV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzjopO6E61btOOC01J1%2FXxrKOMTgUeeCQftIAyG3k%2BDAiBcFIJvXdnOEexrjK745Zz6ZYmyGoUU8pION2yBJCCHCiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FCZzoxacgFz0BIUAKtwDOINwSx43vUyHpbViCsYqjEJio%2Bg8G3uFwXiWAP%2F0z5ZWHwNih2fX%2FXYHbXRcNAQRSd%2BTwBPa8VpYRwCkxbkI7fS%2FvfYJ8inFNyviSN1odGQ4LJEjEzdi7Sog53p3KaIPCJnqbm%2BqYkazDCRBgjYf9liZBFNdzybJ9rbwBnTfhMARFG3JkzRtrvTT7jBLeP%2B1%2BpUAIT449Vjw0afxeIOLkHXSm6hO5%2B5Sa4jY8QZLpDU%2FthEe7TTfNwppm8EpRmc%2FpurF7Pl2wA0WndxfprNH7FAg%2Bxi4qlr3L%2BemCY6di5mH7sJokuzPE6qkoAOHDq8rWHuJYMXetAL9TIV%2F%2BJ1Mtpkoam%2FMsMMgxPmoShNldx60JcjSuZZSmN08yWNvViBKPdxCJSVaSsuLIFQnPsrH4BVnw9VzEjoIr1hnPMLyyNxwlNPwbljJb0ge%2FHHKVqA6R82aLPBI1e9d5sDJxfEXlaH4mZLd2nYQhF1rPTirSub3%2BOUYXXpncWWxr8K7XxPJhGbztrEDVEcMudC1Q%2F0SYwtEb5SZVhf%2BCTflNaoGbxEcMzl7PqXXX7lkVqQzO0%2BMbcYVFqiHLYF6fyIW78kJHolEMsRZx71s4tr6Vpzg3gPM1U66xQTNFhc7%2Fj4wqr3TwgY6pgF37KyQAfxhKko7Djpf2gHqQc6%2BosJQrtxNuhOEAj82%2BqQJhKJlb42ddUG9vGlztE1XKUYHtSK9cIxBxqgNQTr4PWDR5RsrsUiCGHRTf1BIJKPQPzEYSDpCleMRR5OuEBS8KArRqjFFog2XmGkWWmProuSDq1MLnoztkTpFHA21R8zznFWM1DmT%2FiDoX5ixrmBuwfsaXUA13EMjWwEoFMyLpGPr88Z6&X-Amz-Signature=75dfbae6474554d6cd6130fcc7a223260f87071fd9b426f806ada6e3e9ac4d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNHH2FV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzjopO6E61btOOC01J1%2FXxrKOMTgUeeCQftIAyG3k%2BDAiBcFIJvXdnOEexrjK745Zz6ZYmyGoUU8pION2yBJCCHCiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FCZzoxacgFz0BIUAKtwDOINwSx43vUyHpbViCsYqjEJio%2Bg8G3uFwXiWAP%2F0z5ZWHwNih2fX%2FXYHbXRcNAQRSd%2BTwBPa8VpYRwCkxbkI7fS%2FvfYJ8inFNyviSN1odGQ4LJEjEzdi7Sog53p3KaIPCJnqbm%2BqYkazDCRBgjYf9liZBFNdzybJ9rbwBnTfhMARFG3JkzRtrvTT7jBLeP%2B1%2BpUAIT449Vjw0afxeIOLkHXSm6hO5%2B5Sa4jY8QZLpDU%2FthEe7TTfNwppm8EpRmc%2FpurF7Pl2wA0WndxfprNH7FAg%2Bxi4qlr3L%2BemCY6di5mH7sJokuzPE6qkoAOHDq8rWHuJYMXetAL9TIV%2F%2BJ1Mtpkoam%2FMsMMgxPmoShNldx60JcjSuZZSmN08yWNvViBKPdxCJSVaSsuLIFQnPsrH4BVnw9VzEjoIr1hnPMLyyNxwlNPwbljJb0ge%2FHHKVqA6R82aLPBI1e9d5sDJxfEXlaH4mZLd2nYQhF1rPTirSub3%2BOUYXXpncWWxr8K7XxPJhGbztrEDVEcMudC1Q%2F0SYwtEb5SZVhf%2BCTflNaoGbxEcMzl7PqXXX7lkVqQzO0%2BMbcYVFqiHLYF6fyIW78kJHolEMsRZx71s4tr6Vpzg3gPM1U66xQTNFhc7%2Fj4wqr3TwgY6pgF37KyQAfxhKko7Djpf2gHqQc6%2BosJQrtxNuhOEAj82%2BqQJhKJlb42ddUG9vGlztE1XKUYHtSK9cIxBxqgNQTr4PWDR5RsrsUiCGHRTf1BIJKPQPzEYSDpCleMRR5OuEBS8KArRqjFFog2XmGkWWmProuSDq1MLnoztkTpFHA21R8zznFWM1DmT%2FiDoX5ixrmBuwfsaXUA13EMjWwEoFMyLpGPr88Z6&X-Amz-Signature=13b410e4c19ed22278e59201de3040d30918e00d1877e6e059bd4228ec30c3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
