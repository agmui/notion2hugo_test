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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIFED4O%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZVCEFsWD45gKqB%2BS9W87%2Buzkyf7vee%2BmVPquQk%2Bc0GwIgCFKAE1eLP2MtH1usPsXGTms7AW8E4bx3Ktted15d%2BPQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk6EE38PmJr%2Bq9%2BEircA8N7PC4g5l%2F2%2FRo1TxMJqTQ34QIaBzgkMWPqczPPVRmQR9ZT6N2lWufwQGyM7iOv1%2FM%2BioqCYMTr4d1nphE5GgchzziHrRASGZjFP0Ts%2BBrCMnDsl6o%2F6mB4D3Pb0l81oMo7QpqEAH42%2FPLEQQfVVRfhjd6YF2s5rBHCwE0Vi10xA0YyGLCM5le9L97bvnDDZkW%2B9KAGTlqlk%2FnRzCUhRV4rQXw6%2FXORLQPJtPY%2FvhOXahQXmqs1Zyh%2B2nuPhTG9m6ZkSqHWdYIbY1OfzNQuT2FkhoNDcww32pOiRdkWfjL980GHxM5s2fLCV2RxytXfePWbgYNlns83k7fhJ24UsRLDoCnCjx%2FtjtkwiXsbVYdLpAKedGE1ZZmGUvbwSIHGJmQefM3s0nxxULvqDtuJ8WrLH7xrmAuSuFG4ETfI9LwVLICqX%2BJU%2F5wWQ8al4vgdEWbJkvNCgOe1HkLP%2F0nN8DTkhjMCbNK9eXiG70%2F%2BhjcYfmestk0tYKmF09Hw0FkmeM%2B%2FM7xhkeI3rrBeqZAn6i5GNIugz5oW%2FuxhRf6VEvZ7JBdEOoZV9XXJJyQGN7lx%2FW%2BDfa%2B2tv4GqZ2x8mN948tz4d774xmuTJTd2WzBiziU7RUsP3rwDD1Z1Pa9MKuH%2BMAGOqUBsKco%2B0keT2IS1fNyCsrQhsWv10IM%2BlP3GGJM264S%2BxbjU1a6B%2FTMdO5iuHOzzqyURTRBpfvW4GYDrAo%2B%2BH9EAYRupI9aQAl6Fkd8cXp6Tbmor0fNhjdMXAW0sXAdFAR1pMun0kQyqegthOvMdHTRipvDNkSqgkX054cxWGQYB0slBhb%2Bt6q9YJQ%2Ff0NC7gX5hRFXDtP%2FDWYgq%2BUA%2BpQEN7UffUmE&X-Amz-Signature=a19b404def171895a9d575dcc72cd8ed2204cc5b97ae112511833596b5f9dd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIFED4O%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZVCEFsWD45gKqB%2BS9W87%2Buzkyf7vee%2BmVPquQk%2Bc0GwIgCFKAE1eLP2MtH1usPsXGTms7AW8E4bx3Ktted15d%2BPQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk6EE38PmJr%2Bq9%2BEircA8N7PC4g5l%2F2%2FRo1TxMJqTQ34QIaBzgkMWPqczPPVRmQR9ZT6N2lWufwQGyM7iOv1%2FM%2BioqCYMTr4d1nphE5GgchzziHrRASGZjFP0Ts%2BBrCMnDsl6o%2F6mB4D3Pb0l81oMo7QpqEAH42%2FPLEQQfVVRfhjd6YF2s5rBHCwE0Vi10xA0YyGLCM5le9L97bvnDDZkW%2B9KAGTlqlk%2FnRzCUhRV4rQXw6%2FXORLQPJtPY%2FvhOXahQXmqs1Zyh%2B2nuPhTG9m6ZkSqHWdYIbY1OfzNQuT2FkhoNDcww32pOiRdkWfjL980GHxM5s2fLCV2RxytXfePWbgYNlns83k7fhJ24UsRLDoCnCjx%2FtjtkwiXsbVYdLpAKedGE1ZZmGUvbwSIHGJmQefM3s0nxxULvqDtuJ8WrLH7xrmAuSuFG4ETfI9LwVLICqX%2BJU%2F5wWQ8al4vgdEWbJkvNCgOe1HkLP%2F0nN8DTkhjMCbNK9eXiG70%2F%2BhjcYfmestk0tYKmF09Hw0FkmeM%2B%2FM7xhkeI3rrBeqZAn6i5GNIugz5oW%2FuxhRf6VEvZ7JBdEOoZV9XXJJyQGN7lx%2FW%2BDfa%2B2tv4GqZ2x8mN948tz4d774xmuTJTd2WzBiziU7RUsP3rwDD1Z1Pa9MKuH%2BMAGOqUBsKco%2B0keT2IS1fNyCsrQhsWv10IM%2BlP3GGJM264S%2BxbjU1a6B%2FTMdO5iuHOzzqyURTRBpfvW4GYDrAo%2B%2BH9EAYRupI9aQAl6Fkd8cXp6Tbmor0fNhjdMXAW0sXAdFAR1pMun0kQyqegthOvMdHTRipvDNkSqgkX054cxWGQYB0slBhb%2Bt6q9YJQ%2Ff0NC7gX5hRFXDtP%2FDWYgq%2BUA%2BpQEN7UffUmE&X-Amz-Signature=0ea320fce260a6c08b878baf421762c942d2eb8144382978f454f309ecdde100&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
