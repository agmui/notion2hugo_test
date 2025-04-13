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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIXHQLP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCUE0%2BS7xWme0S60YuEEyphD1jTmIcBVckOsb%2Fi3e5X0QIhANDS6acUZNKmRqx0wpEnW%2BGpScBWC1hlCfEIbjD9pyu9KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2F68hassc5upEOPkq3APqWG7jkSdDoOtftgLIQDt3%2BiuwSJ8ZTomJBBvWoVyDCZaJFiR9Uwz7%2B0rZT0kIIeZh8Bz9MNIBUF%2Beg2cGbFwkQ7%2Fqqy3cPjTqNxMuThVZgeTAYcOh0o1zrB%2FkSJi2KPymmnDpvUs993ilkMwbgtBjD5qEEEdgnH10iU8JPjvy9r78v6QEG7kkJXkUSOAwDFmcvq2G8hizeH9wxByiHOkMhw6X9vVv4jfHUcQWW8xyyyKb4ugSBk3%2B02eD0eoC%2BNM%2B5dYyELxR9iTL9qV9akccVi0yuacS0ZJlT57v3Eo0zS7INA1lncsJgxU0EQ5EcEDjLhVBbIAfFGiWYhuCdWZk%2B5%2BfF4U22Uow8PM38JQVT%2B56osoQkVkIxW%2BbMW0Ogcm5Wpaswnwrap%2Fxoqj0qL48TN9EiqK2v53qC341zbjzutAVCIFJO8dUuSQdDCRRlFRXw%2FU4ExfSF5Z8gdpVQ%2FWocbEWYx%2B1xcbrPAPJypEvth5twez7tC4qeoniJe%2Fefcm2n4nODtj8b7J5xZE%2FhgFyuGbJzvZ8MOxCsov0UOl7qU5iBWBFQEMrbfyTQ8xGig0rzNRyG%2FZZhF6SU7E2LbDR6Ttyl%2BWECGEhz4j%2Bfa8b8S4rHcQTiT5oO%2F0C%2FTCb0%2By%2FBjqkAaRHM1u5wNcka2ZfjGp9IQSSHadK2xlB6ANzvVXPWi4l8TLrFbhHAtq6fHmKLgUAj6qYrVrJuaCVPp91vF9MTz9qtQq7bAdTw3R6rioHh1Y6xbeFLwwfIiUeRnOip5jB1ZhUZjy3m4ghoDrZq8d7kFR85y95gMQx7u2lCr%2Bbl3iafFaJR57wTMuQRPmtx24cbFv6Tv4PILef1ihGQBa899PbzPrE&X-Amz-Signature=21bdf473ec3b17717bf181cbe70408cc1a80f7587a70b669c755d5719fde7cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIXHQLP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCUE0%2BS7xWme0S60YuEEyphD1jTmIcBVckOsb%2Fi3e5X0QIhANDS6acUZNKmRqx0wpEnW%2BGpScBWC1hlCfEIbjD9pyu9KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2F68hassc5upEOPkq3APqWG7jkSdDoOtftgLIQDt3%2BiuwSJ8ZTomJBBvWoVyDCZaJFiR9Uwz7%2B0rZT0kIIeZh8Bz9MNIBUF%2Beg2cGbFwkQ7%2Fqqy3cPjTqNxMuThVZgeTAYcOh0o1zrB%2FkSJi2KPymmnDpvUs993ilkMwbgtBjD5qEEEdgnH10iU8JPjvy9r78v6QEG7kkJXkUSOAwDFmcvq2G8hizeH9wxByiHOkMhw6X9vVv4jfHUcQWW8xyyyKb4ugSBk3%2B02eD0eoC%2BNM%2B5dYyELxR9iTL9qV9akccVi0yuacS0ZJlT57v3Eo0zS7INA1lncsJgxU0EQ5EcEDjLhVBbIAfFGiWYhuCdWZk%2B5%2BfF4U22Uow8PM38JQVT%2B56osoQkVkIxW%2BbMW0Ogcm5Wpaswnwrap%2Fxoqj0qL48TN9EiqK2v53qC341zbjzutAVCIFJO8dUuSQdDCRRlFRXw%2FU4ExfSF5Z8gdpVQ%2FWocbEWYx%2B1xcbrPAPJypEvth5twez7tC4qeoniJe%2Fefcm2n4nODtj8b7J5xZE%2FhgFyuGbJzvZ8MOxCsov0UOl7qU5iBWBFQEMrbfyTQ8xGig0rzNRyG%2FZZhF6SU7E2LbDR6Ttyl%2BWECGEhz4j%2Bfa8b8S4rHcQTiT5oO%2F0C%2FTCb0%2By%2FBjqkAaRHM1u5wNcka2ZfjGp9IQSSHadK2xlB6ANzvVXPWi4l8TLrFbhHAtq6fHmKLgUAj6qYrVrJuaCVPp91vF9MTz9qtQq7bAdTw3R6rioHh1Y6xbeFLwwfIiUeRnOip5jB1ZhUZjy3m4ghoDrZq8d7kFR85y95gMQx7u2lCr%2Bbl3iafFaJR57wTMuQRPmtx24cbFv6Tv4PILef1ihGQBa899PbzPrE&X-Amz-Signature=79a2ddd4bac3c0cdf3cd67752e0c131d2bc39cf5c4694eb7ca2eea98caf5cb0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
