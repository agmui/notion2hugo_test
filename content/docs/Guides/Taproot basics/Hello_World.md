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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4DJW6Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1UENbd4AZZlkv9hnYzqowLAKGoE9RuFgfR5L4wvZHgIhALY9wbm%2B3Bi7Ur%2BGnDEsg5aiAZKGi%2FrBSm43ulwEG%2FnYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjPc%2BHBJ23eNeGnAsq3APLUA55aeUqEM5w08gb%2FeqK6Rl6EhdhrZhcWSptuRDOY2UyAjouEgEbpYM%2B8YahfA%2FhmVu5akDdQjV5e1DH6GoLVFYF3UT2Qli9DCo3rRbm1jDkZuhyHkgfW4i8LnV5YUvZXe5Guc49sBY0n1b2VEBEkWErmq9U%2Bx2OpOsU%2FK9bXpYkUCphEtmBnZSHvRs6NFWPXu1ucuzpf8H1Cw7%2BQ1jv9MFjs1MIoEC0x3WIq%2Ffj32dmkHF0FnZ1WO1uJlrLn3gn77hX5jgfdQgMwqG1RqL%2BvAxqEk2doQ2cNuGtk2px9%2Bt8d%2FNQ%2BBaON6yKGNMprNhK3qfvNqszgs6X6GIwfr%2BW1qL8ubQti18k9XFhxQyhwynUT40udjyey2hK3uh8JVnuUv3xfTKbul3%2FwgkqjMT9AZtbmth7JOeSNG0uklxpvoZhIUmGNArJucYMCP1lum7D6gPRQ9QiwqT79ms4ERkpD5FG%2FwCXiJ0dvKpt5GabXw377aOWswVpYLA3aOGTLkqxM%2BXTcJtw7C%2Bhv21Cy7pFfqbqzWITkSqkTgVIIHRKDDtUhTpO3myAurrWQRk28I1nYUEhBCQrqxKmTQmRKn1V6ZIsXPlBCyGqxUGAmHoRzCR5QW1esH4RUnr6bDD%2FvKi9BjqkAXtd1WBbiucRGNQMmp8g1pF3AFuBFrLZiMIBpy%2BWRMg78q1OccO%2BsdedF%2B1YwSoP11iZaSmoQ1fOIy7%2BRnK8WnorTHf6VsgbP0mw5l7sR51akILVISYfA2jDDqwUbNaL03AWwf%2BFcVmhmNfhjUuosUd8NWKtC8Y2dZjpOg3jgvaZE8XmLghHe5gBQ5Np4tWm2CHqaL5NRLLcwaYQyX%2FQn8w1uKdj&X-Amz-Signature=a78d919234db583067c2c2503d01c836b0703b52bccc105bad55684ff4dcf395&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4DJW6Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1UENbd4AZZlkv9hnYzqowLAKGoE9RuFgfR5L4wvZHgIhALY9wbm%2B3Bi7Ur%2BGnDEsg5aiAZKGi%2FrBSm43ulwEG%2FnYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjPc%2BHBJ23eNeGnAsq3APLUA55aeUqEM5w08gb%2FeqK6Rl6EhdhrZhcWSptuRDOY2UyAjouEgEbpYM%2B8YahfA%2FhmVu5akDdQjV5e1DH6GoLVFYF3UT2Qli9DCo3rRbm1jDkZuhyHkgfW4i8LnV5YUvZXe5Guc49sBY0n1b2VEBEkWErmq9U%2Bx2OpOsU%2FK9bXpYkUCphEtmBnZSHvRs6NFWPXu1ucuzpf8H1Cw7%2BQ1jv9MFjs1MIoEC0x3WIq%2Ffj32dmkHF0FnZ1WO1uJlrLn3gn77hX5jgfdQgMwqG1RqL%2BvAxqEk2doQ2cNuGtk2px9%2Bt8d%2FNQ%2BBaON6yKGNMprNhK3qfvNqszgs6X6GIwfr%2BW1qL8ubQti18k9XFhxQyhwynUT40udjyey2hK3uh8JVnuUv3xfTKbul3%2FwgkqjMT9AZtbmth7JOeSNG0uklxpvoZhIUmGNArJucYMCP1lum7D6gPRQ9QiwqT79ms4ERkpD5FG%2FwCXiJ0dvKpt5GabXw377aOWswVpYLA3aOGTLkqxM%2BXTcJtw7C%2Bhv21Cy7pFfqbqzWITkSqkTgVIIHRKDDtUhTpO3myAurrWQRk28I1nYUEhBCQrqxKmTQmRKn1V6ZIsXPlBCyGqxUGAmHoRzCR5QW1esH4RUnr6bDD%2FvKi9BjqkAXtd1WBbiucRGNQMmp8g1pF3AFuBFrLZiMIBpy%2BWRMg78q1OccO%2BsdedF%2B1YwSoP11iZaSmoQ1fOIy7%2BRnK8WnorTHf6VsgbP0mw5l7sR51akILVISYfA2jDDqwUbNaL03AWwf%2BFcVmhmNfhjUuosUd8NWKtC8Y2dZjpOg3jgvaZE8XmLghHe5gBQ5Np4tWm2CHqaL5NRLLcwaYQyX%2FQn8w1uKdj&X-Amz-Signature=eb634f6e6b9ff22f72ab13a72874f3cac5a5f33b4727957fda2890e5d9e8c3a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
