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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAP4BRI4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCfdqpziXvvxkkewHzKnLrNfpV%2B8NDV8Qezxfuj1etZWAIhALTgIk2udN49EfIu9%2FfHgSsDpTksHrKuoBWEsre%2FtdwMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrAFOx7cFb%2BzE%2BQBMq3APt2W3LfVarI76156XNvM1uTcKDJ1Pp0w%2FN%2F71TY6%2FU0fPH0QP9kuWEPXg%2Byfl6EHHbfpxKibVonBKmDmhPu%2BmYJ4KbvqYu5c1V2bkD9EW8DvDhHw7tFR3xnhwE0VMF6AAZXHW54XaIAlX3dsxBDkWJ3RJ8H9znz%2Br3LojpA6Fntk00feOgvpetclU4ZzotgBtvhG1nctSwDkzF4%2BYTGKteUjK%2F6dFPj2la8Yd1rdJ4BSs4HKmaXpSwrG3Fq8LWuXxRoHVn96reIYdtbcgTgQthP3fJbJksgutIft29REXVTmzPkTXDR0g3jR6KFiVVqBYifkpUwkSxO9wA8RfVyhGsG%2B7WU8EUsK4rKgqiHiDKoV%2FlVy%2F%2B4Yvvrboz2nbviYPoUyUKw6qr%2FyNWX5kle35QAH5iT17V3EI98qu%2B4d2LGqCXVnNBgcqrRcqk4uWvHGiw9bx0WpZHPtKvPdG8ZzyRi2CP36s6pkYPZsbB9Ye1xI6Oz7SBcGVwp8t1sTghFeMp7X5jzVBKJ0Pvh7cOpaN6%2FJL7R2N2TDDk8cXVxpNaGNb76YPNtpjBbGDrrXbVlRdd8aqCiIMkvikD8kOSSwemao2%2Fz4wYBLQx%2F0VpsBaX7Bx3sP%2BXcWXluTLQbzDlkPXBBjqkAR8RIAdRYuXNvAn2BAjDhTTZx3PU%2BSQbevCi7Wps4oPv%2FS2al5tFu9Xg68jIZzdOU5kt4kb0eyaehPCe908%2F1jhhu8azrfTqc%2BhhTWiLlVN%2FZmmAer%2F%2FWXhsv79pLRnwrZfDj9xbPALQVagwSkvNxZ9PJBU227vm%2FHvkjo8lIpCvME85FB24Vb%2FMxZQG%2FyWx6RGTCkxjvVVWTlMDOo1f8jhI3xop&X-Amz-Signature=c18353fd1eaa714fff5520848ba8f83a3540cb01f3e4fa497c0ade9683fb7b01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAP4BRI4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCfdqpziXvvxkkewHzKnLrNfpV%2B8NDV8Qezxfuj1etZWAIhALTgIk2udN49EfIu9%2FfHgSsDpTksHrKuoBWEsre%2FtdwMKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrAFOx7cFb%2BzE%2BQBMq3APt2W3LfVarI76156XNvM1uTcKDJ1Pp0w%2FN%2F71TY6%2FU0fPH0QP9kuWEPXg%2Byfl6EHHbfpxKibVonBKmDmhPu%2BmYJ4KbvqYu5c1V2bkD9EW8DvDhHw7tFR3xnhwE0VMF6AAZXHW54XaIAlX3dsxBDkWJ3RJ8H9znz%2Br3LojpA6Fntk00feOgvpetclU4ZzotgBtvhG1nctSwDkzF4%2BYTGKteUjK%2F6dFPj2la8Yd1rdJ4BSs4HKmaXpSwrG3Fq8LWuXxRoHVn96reIYdtbcgTgQthP3fJbJksgutIft29REXVTmzPkTXDR0g3jR6KFiVVqBYifkpUwkSxO9wA8RfVyhGsG%2B7WU8EUsK4rKgqiHiDKoV%2FlVy%2F%2B4Yvvrboz2nbviYPoUyUKw6qr%2FyNWX5kle35QAH5iT17V3EI98qu%2B4d2LGqCXVnNBgcqrRcqk4uWvHGiw9bx0WpZHPtKvPdG8ZzyRi2CP36s6pkYPZsbB9Ye1xI6Oz7SBcGVwp8t1sTghFeMp7X5jzVBKJ0Pvh7cOpaN6%2FJL7R2N2TDDk8cXVxpNaGNb76YPNtpjBbGDrrXbVlRdd8aqCiIMkvikD8kOSSwemao2%2Fz4wYBLQx%2F0VpsBaX7Bx3sP%2BXcWXluTLQbzDlkPXBBjqkAR8RIAdRYuXNvAn2BAjDhTTZx3PU%2BSQbevCi7Wps4oPv%2FS2al5tFu9Xg68jIZzdOU5kt4kb0eyaehPCe908%2F1jhhu8azrfTqc%2BhhTWiLlVN%2FZmmAer%2F%2FWXhsv79pLRnwrZfDj9xbPALQVagwSkvNxZ9PJBU227vm%2FHvkjo8lIpCvME85FB24Vb%2FMxZQG%2FyWx6RGTCkxjvVVWTlMDOo1f8jhI3xop&X-Amz-Signature=643625ce2febd16fcad59f75dbf27436e70ac3a9ca2473a942a3b6e455545987&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
