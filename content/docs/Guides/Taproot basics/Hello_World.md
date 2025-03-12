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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFYK2TS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD3roFW9xS47eVojqFTcMxDnhcZXgbvdWHdDHdoH9WfDQIgHmkLbuiqD9jBebDAXQ06miyNIeVmvJo9fRu8tVIZrKEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf3pViY1ZuotbjjISrcA7bIgscaElr1JRJOVOtXTArP%2BehHF%2FyFuzN%2Bl8XqXPSjxw5BCZDu7oxqxN59oZNl8DQgy%2FiI1RqFNP2PpCvfEMn8C8FJGZDWFMPIgsYehk4458Go0XDc77YqmdrQMctaoF7VQ15tz7LUskmIEEtxnZRvYYmvfys7s0Bxm4xQH2BiMTvzHEwljw7JTy0%2BBnCJGaMabKSMDr8E2E8NtqfSQrGkc7M6ne%2FDNk7rXzpn4357PCK9T83YbFMm4iP%2FE9M%2B0oGDKEbfyrOboCLBzhesq3x9Eih0YaDJYdt%2BSEQq%2FgvIOlOc4%2Fy7RLBFWJh1Bk3MevPZbbFXbQGjA%2Bhd4CExzhNS%2Fr0g3Yt4cJrpxmyKiPMl31Q0u3sQO91w2pA7DUOwTl1LcJYi1vbx2Xp5UkBjHI0x76ne9a1n3ponEkIawv%2BYuNWIJk0zfnp%2FdfMwfWSxhDHs7%2BdJt6X8Ld6uJukxW2Wk02wc0Z1JpQWQrids4x%2Fy0JiBqceSMdkhNTjXUeytZav8PBmluzTBaP4l03e0gzmnaOYSqj%2FScIqLFvTNHPEh5BSEQhaaOP014Gx8vNfyQ2x11svxVNvYcN3w9uHQDaT0gmR27yduveqTp72tfaUEYw4qvMIJ6F4Y24RxMKq%2Fxr4GOqUBqcSgjXE5apaQH%2FHp8xes%2BpfAAhi2g9YrhTPw7F8ajtcCEj3GS%2BfKH7KQ8CgiXv5jkhHQVR0YN6EZzW6LZOXNMl4ZC%2BziYDL7jDDQ0aili6Wy%2BuwRRx3izSZP0Ej58zyyw3evM3rg3tnUbdp3UAafUqoSLBwYYLeX%2F4i4to6B44uMESjA%2FC9LmIwXkpGpZqUEs4UTZvkK05mvvaPhUNwDbJpUJLJM&X-Amz-Signature=84674475087ca2581e57961aaf06f78146ea9bcf386e36a58c1f9f8300c07059&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFYK2TS%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD3roFW9xS47eVojqFTcMxDnhcZXgbvdWHdDHdoH9WfDQIgHmkLbuiqD9jBebDAXQ06miyNIeVmvJo9fRu8tVIZrKEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf3pViY1ZuotbjjISrcA7bIgscaElr1JRJOVOtXTArP%2BehHF%2FyFuzN%2Bl8XqXPSjxw5BCZDu7oxqxN59oZNl8DQgy%2FiI1RqFNP2PpCvfEMn8C8FJGZDWFMPIgsYehk4458Go0XDc77YqmdrQMctaoF7VQ15tz7LUskmIEEtxnZRvYYmvfys7s0Bxm4xQH2BiMTvzHEwljw7JTy0%2BBnCJGaMabKSMDr8E2E8NtqfSQrGkc7M6ne%2FDNk7rXzpn4357PCK9T83YbFMm4iP%2FE9M%2B0oGDKEbfyrOboCLBzhesq3x9Eih0YaDJYdt%2BSEQq%2FgvIOlOc4%2Fy7RLBFWJh1Bk3MevPZbbFXbQGjA%2Bhd4CExzhNS%2Fr0g3Yt4cJrpxmyKiPMl31Q0u3sQO91w2pA7DUOwTl1LcJYi1vbx2Xp5UkBjHI0x76ne9a1n3ponEkIawv%2BYuNWIJk0zfnp%2FdfMwfWSxhDHs7%2BdJt6X8Ld6uJukxW2Wk02wc0Z1JpQWQrids4x%2Fy0JiBqceSMdkhNTjXUeytZav8PBmluzTBaP4l03e0gzmnaOYSqj%2FScIqLFvTNHPEh5BSEQhaaOP014Gx8vNfyQ2x11svxVNvYcN3w9uHQDaT0gmR27yduveqTp72tfaUEYw4qvMIJ6F4Y24RxMKq%2Fxr4GOqUBqcSgjXE5apaQH%2FHp8xes%2BpfAAhi2g9YrhTPw7F8ajtcCEj3GS%2BfKH7KQ8CgiXv5jkhHQVR0YN6EZzW6LZOXNMl4ZC%2BziYDL7jDDQ0aili6Wy%2BuwRRx3izSZP0Ej58zyyw3evM3rg3tnUbdp3UAafUqoSLBwYYLeX%2F4i4to6B44uMESjA%2FC9LmIwXkpGpZqUEs4UTZvkK05mvvaPhUNwDbJpUJLJM&X-Amz-Signature=33bf575ff59894ed92a0101470fa82a867500019b7ca76d90863d4ac5af4c936&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
