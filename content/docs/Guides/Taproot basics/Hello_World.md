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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45SLOY3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX8CrOxUD%2FmZYARuB0ZtGVMCv1Vc4IYTV37XvygaPROQIhAKtqNxD0b4IiLWEXwl%2B88mIwU4dvD5JAB2pyQL1SIszbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQxU8Vk04eCZzXN%2FAq3ANKfeVj4fAagqe9%2B2V%2BUR%2BYGAK7sbzeX72qUetpad8uerugGKX3rLRPRBmp6BvFZnbxJ80CD96%2FqmEKsXJDQtr7J2Tjk18djE4GPw5KxegwDgvz9WjIZp2nbX8C%2FYU%2BDUwcqllf8diJFpB7tU1tNjBzEjDMgJt1ryp8hUXv4FRTTC495zjbWlo9Et6El7k82Z9z59BHpZ4Dn6xlw3NEPax5n8gVzrNtM%2B3iU37gIRd2JMb8WUcglO3VPLz2ZZByKunFlgNPJAkNFLJkVD04ezyUXNQEDJ9jrm6cJEo6kmTi4n7mOrCNt04rmRroz6jBtLcZmCkF7PPEglCRQVBnhTfDyOevnan6EmSycGkzzulAOub3mb%2BhEfiABBMEbNR6%2FV0sc%2BK6reHzvtN0KF%2BMRw4WyqLPBvnhl2uf2svKTGelunOJuTutfPFKSoXoSp8P59cI%2Fnc09Sw2xuubu%2F4w4DRgiBa3%2FmxnMeVG2Y%2FD9JgDfkPrcu2CZOFkHoEKKtdnZdd95Y97v4ShpTpbItqkk4E5pKoQosjKinQ7axNvCjwOg431I20TMudzz3Uuc8aXXE7wRB4dKExXnIGSC7v0mMJoTfCp%2BDnSkbOYdiSI%2F7Lu1wG8Vk%2Bd%2BjNzhX9gvjCR44TDBjqkAcYqbKjEPqp2Rd4TJM9loNWmY23627ANjatYpDzKgY6BecxFCUofYh1l%2B%2Fw0MciRwNlzc9EknssRuGa6Y3syJgdcUsh4j41HyIgz03HRqH08lvxACmAVunPsH%2F6ROOS0%2FJVM2VeNuU%2BCPRJn9aV5pGsK%2Fm7fnAfG%2FSLdOXhFDlCftk7x2eNVq1e8iSd3ThMVgpD0miu81%2Bvz5FkfW9%2F8nlT8IzkX&X-Amz-Signature=e739ead9152ac33daa18e8af0738d69c1f348f0f55154146531810872a92bc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45SLOY3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX8CrOxUD%2FmZYARuB0ZtGVMCv1Vc4IYTV37XvygaPROQIhAKtqNxD0b4IiLWEXwl%2B88mIwU4dvD5JAB2pyQL1SIszbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQxU8Vk04eCZzXN%2FAq3ANKfeVj4fAagqe9%2B2V%2BUR%2BYGAK7sbzeX72qUetpad8uerugGKX3rLRPRBmp6BvFZnbxJ80CD96%2FqmEKsXJDQtr7J2Tjk18djE4GPw5KxegwDgvz9WjIZp2nbX8C%2FYU%2BDUwcqllf8diJFpB7tU1tNjBzEjDMgJt1ryp8hUXv4FRTTC495zjbWlo9Et6El7k82Z9z59BHpZ4Dn6xlw3NEPax5n8gVzrNtM%2B3iU37gIRd2JMb8WUcglO3VPLz2ZZByKunFlgNPJAkNFLJkVD04ezyUXNQEDJ9jrm6cJEo6kmTi4n7mOrCNt04rmRroz6jBtLcZmCkF7PPEglCRQVBnhTfDyOevnan6EmSycGkzzulAOub3mb%2BhEfiABBMEbNR6%2FV0sc%2BK6reHzvtN0KF%2BMRw4WyqLPBvnhl2uf2svKTGelunOJuTutfPFKSoXoSp8P59cI%2Fnc09Sw2xuubu%2F4w4DRgiBa3%2FmxnMeVG2Y%2FD9JgDfkPrcu2CZOFkHoEKKtdnZdd95Y97v4ShpTpbItqkk4E5pKoQosjKinQ7axNvCjwOg431I20TMudzz3Uuc8aXXE7wRB4dKExXnIGSC7v0mMJoTfCp%2BDnSkbOYdiSI%2F7Lu1wG8Vk%2Bd%2BjNzhX9gvjCR44TDBjqkAcYqbKjEPqp2Rd4TJM9loNWmY23627ANjatYpDzKgY6BecxFCUofYh1l%2B%2Fw0MciRwNlzc9EknssRuGa6Y3syJgdcUsh4j41HyIgz03HRqH08lvxACmAVunPsH%2F6ROOS0%2FJVM2VeNuU%2BCPRJn9aV5pGsK%2Fm7fnAfG%2FSLdOXhFDlCftk7x2eNVq1e8iSd3ThMVgpD0miu81%2Bvz5FkfW9%2F8nlT8IzkX&X-Amz-Signature=9ea2e891f7ca3e5e92a811fdf5783e51e02c0c91dcb124b80211e2de544582c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
