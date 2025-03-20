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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJXMYEI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCnaVqaCCgQf8Rb7Sb3yeyFVNjZQT3AMZRfXuhOJtW%2FzwIhAI2bPFy7%2Fg66p7mNkIetjP0fUphFickqK9PD6LHoqY5JKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpudDn%2FkaSUIA0r2gq3AMKfxL6iL034Zjthoj3GtZhwORCh%2BtRYY2IocMcArnZ5gPCBuwl4uEkjwTyL7ZHfEP8siRAIxA4P0GJG5BkiPT%2B8joXwyv6DgoQVv6or6eDpPJwpsgFOFH5mei7sSRYeiHHkOSO32Jiv2pzH6H7Llwyn5UhInAEZ6o39rhJEEqjrzCskCxafnGbT142zxqnlGfCvbjKGPaWchyaT11otT1GWlryiL%2F%2BdiffcH1s8JryMaK%2Bx9kLn8RutVkIb86BbhL7NWzEtaZFNYcvc6TB%2BoifAvGmfLW7vUcBwl3ufDjcMy5WfBSeRMS7sJ76WpbFvxNtH70qYCYUe4hGb9Fvl0pVGcycP5oWT98xIsqprfLOp3kz35%2FD%2BKoLVKDYyUl08IDZsNKgXOnp%2Bur8tv1kzPjvmLZABsiVNHMV7hvlHBCjnLnnOmEGiLggARrqkn8y9Auq7LrNee6OTknCEgojU7nbaoMAeIGV60z7l3Mcior8AhoTFKBf5A8mpQKE79fvTBSXLVoFhuT%2FlYQgnp0GU16XC3lRHb4ibuJWOVoC1DT5VRgWqSegKzV5Pp2MglXN4HlwMc0fHPA2i8vAwef0oPuBP1lxK4YvNQlQC1BaMH8xxUwO1D0WAzBKQBM4XTDy6e2%2BBjqkAcGytPjP4emAlGLUyl7afaL%2F8zNi5cwUcbaUlJx0oraKdYIHefEw0wje3XZ6h89X02zbmjHW4XmDKGRIF9ZZMlJbjjaNguBPsRqnLYJfksh%2BD2GBRMPngvlc5RYLSZhTjb94aP5vk8j9orJZW9miUJjgDAUs2vh8I6W4CRBDCJ65kUYCzplI7TPVdBSaj15J3lUZtb644L2WPaKM40wgAW%2BMmWw9&X-Amz-Signature=d53959aed918dc079c1e645e7ee5770a5a437268d03c71f57c7773707e902812&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJXMYEI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCnaVqaCCgQf8Rb7Sb3yeyFVNjZQT3AMZRfXuhOJtW%2FzwIhAI2bPFy7%2Fg66p7mNkIetjP0fUphFickqK9PD6LHoqY5JKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpudDn%2FkaSUIA0r2gq3AMKfxL6iL034Zjthoj3GtZhwORCh%2BtRYY2IocMcArnZ5gPCBuwl4uEkjwTyL7ZHfEP8siRAIxA4P0GJG5BkiPT%2B8joXwyv6DgoQVv6or6eDpPJwpsgFOFH5mei7sSRYeiHHkOSO32Jiv2pzH6H7Llwyn5UhInAEZ6o39rhJEEqjrzCskCxafnGbT142zxqnlGfCvbjKGPaWchyaT11otT1GWlryiL%2F%2BdiffcH1s8JryMaK%2Bx9kLn8RutVkIb86BbhL7NWzEtaZFNYcvc6TB%2BoifAvGmfLW7vUcBwl3ufDjcMy5WfBSeRMS7sJ76WpbFvxNtH70qYCYUe4hGb9Fvl0pVGcycP5oWT98xIsqprfLOp3kz35%2FD%2BKoLVKDYyUl08IDZsNKgXOnp%2Bur8tv1kzPjvmLZABsiVNHMV7hvlHBCjnLnnOmEGiLggARrqkn8y9Auq7LrNee6OTknCEgojU7nbaoMAeIGV60z7l3Mcior8AhoTFKBf5A8mpQKE79fvTBSXLVoFhuT%2FlYQgnp0GU16XC3lRHb4ibuJWOVoC1DT5VRgWqSegKzV5Pp2MglXN4HlwMc0fHPA2i8vAwef0oPuBP1lxK4YvNQlQC1BaMH8xxUwO1D0WAzBKQBM4XTDy6e2%2BBjqkAcGytPjP4emAlGLUyl7afaL%2F8zNi5cwUcbaUlJx0oraKdYIHefEw0wje3XZ6h89X02zbmjHW4XmDKGRIF9ZZMlJbjjaNguBPsRqnLYJfksh%2BD2GBRMPngvlc5RYLSZhTjb94aP5vk8j9orJZW9miUJjgDAUs2vh8I6W4CRBDCJ65kUYCzplI7TPVdBSaj15J3lUZtb644L2WPaKM40wgAW%2BMmWw9&X-Amz-Signature=ce1f8c68ed1772c53113d04dd51679d5c97b8628a64e2bb066236ef841908e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
