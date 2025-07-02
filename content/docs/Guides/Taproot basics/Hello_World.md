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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFI62ZBY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjKsHwKSMS7u813PoFxVLAlifdf7zd%2BZRf%2BcZWJYUtAIhAKfxctihB56AfUV8Hv85IbMMSpqy3%2FqTVuhPYrAy7ZJ3KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU60dgRtTlbwPH2%2BYq3AMxeT4kjyJmcaQkZv9F9Tym2mIkubwnsfNAy192vd1o6EZ3EJcjsU6o1Z6WPxt%2B21IVerRprRoYvKVckve3UETlhvJjvXT3E6WD8m%2FNdhtRfAxpgBOBOenI0mTODBWfFqXw9ASCIvaLc%2BOEQ8C8Kvl6BZixdnqZOpefaDLJuHsALeLTC4zIjm%2BKGC3OAv%2B75Y3aYDQxwET8xb7WuE0UTjkyMZ0Tyyja8P0mZH0DFNnq3VcgmFgoAv3b3ulAxDZoS%2FJe4v8WM%2F8tvNw2mkxmM6VX0i%2B%2F85MFiAmErYHBnLMdVnx0SK6m60FhXhLCZe46x839%2FL1G8YL9X%2FAh%2BAGaZeK7R4kcnXURGCZzMBUAOrDBg9%2BykrEgHectLXBcOrSBQ72s%2FYtMFq8IlxtgME1nZTO0cVJUYSy3NXU5jbjKMH2ef%2FEUO4OwS1fkEviEOCckN5oGDsYVcB%2FtbTlH%2FZ5H4T6edjUjbH5ohwXi%2Ffb8Y1WMVFwmDmlLYMaWYfM5ZNuUWSX%2BViOxjMYzzy72ao0wu4QSj%2B3ykWfsLg5TnQ%2BGX%2FdDmfPdGfzBdtot4WKoWH6oGJKF2sRETt8vTnhMO4uwLYf8tAyevCVUOOVsIFSASoUuA2cC%2Feal70YbQESZGzCj2pLDBjqkAcMymwume%2FQUIZxGRk8xmlQnOvbwO8z%2B8ZOtefMe2ZxXovC1TSsUULXByhGn8HTB5RpE%2FrG7pWJ5pghsYqz8EO1uMsy2p1ksJYL2GKFxc5ZWOxnBe5ilwjRy%2BVpnRWlwV04lenBqMOFTqqFGpi23qDPHuoP3b4cmWIPbX%2F%2BIFfy%2FeU%2BC1BzcFiQEa4ZpStnXfS%2Fu6U6t0IeSyZ8XKaKTCSQ6oNBu&X-Amz-Signature=7f3d60faa6d37baca56dd4a15b9f34f9f77eae74ec422aa669777a60c48424ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFI62ZBY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyjKsHwKSMS7u813PoFxVLAlifdf7zd%2BZRf%2BcZWJYUtAIhAKfxctihB56AfUV8Hv85IbMMSpqy3%2FqTVuhPYrAy7ZJ3KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU60dgRtTlbwPH2%2BYq3AMxeT4kjyJmcaQkZv9F9Tym2mIkubwnsfNAy192vd1o6EZ3EJcjsU6o1Z6WPxt%2B21IVerRprRoYvKVckve3UETlhvJjvXT3E6WD8m%2FNdhtRfAxpgBOBOenI0mTODBWfFqXw9ASCIvaLc%2BOEQ8C8Kvl6BZixdnqZOpefaDLJuHsALeLTC4zIjm%2BKGC3OAv%2B75Y3aYDQxwET8xb7WuE0UTjkyMZ0Tyyja8P0mZH0DFNnq3VcgmFgoAv3b3ulAxDZoS%2FJe4v8WM%2F8tvNw2mkxmM6VX0i%2B%2F85MFiAmErYHBnLMdVnx0SK6m60FhXhLCZe46x839%2FL1G8YL9X%2FAh%2BAGaZeK7R4kcnXURGCZzMBUAOrDBg9%2BykrEgHectLXBcOrSBQ72s%2FYtMFq8IlxtgME1nZTO0cVJUYSy3NXU5jbjKMH2ef%2FEUO4OwS1fkEviEOCckN5oGDsYVcB%2FtbTlH%2FZ5H4T6edjUjbH5ohwXi%2Ffb8Y1WMVFwmDmlLYMaWYfM5ZNuUWSX%2BViOxjMYzzy72ao0wu4QSj%2B3ykWfsLg5TnQ%2BGX%2FdDmfPdGfzBdtot4WKoWH6oGJKF2sRETt8vTnhMO4uwLYf8tAyevCVUOOVsIFSASoUuA2cC%2Feal70YbQESZGzCj2pLDBjqkAcMymwume%2FQUIZxGRk8xmlQnOvbwO8z%2B8ZOtefMe2ZxXovC1TSsUULXByhGn8HTB5RpE%2FrG7pWJ5pghsYqz8EO1uMsy2p1ksJYL2GKFxc5ZWOxnBe5ilwjRy%2BVpnRWlwV04lenBqMOFTqqFGpi23qDPHuoP3b4cmWIPbX%2F%2BIFfy%2FeU%2BC1BzcFiQEa4ZpStnXfS%2Fu6U6t0IeSyZ8XKaKTCSQ6oNBu&X-Amz-Signature=a9055f07852f634b3995c5460631095889de68dd180e991bf8b2a9fd80c8568b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
