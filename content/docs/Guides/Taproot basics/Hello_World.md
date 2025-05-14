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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW7NGAJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFtO0fzw5DjRSZZaMhXyt7hOD8SPCbJZT7awF5R6PhWSAiBI%2Bw9W0yRe9kYowP%2FwWITOZegzOcWDxCwf6Iv5NfcvjCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKY7qfQmqaJbwZs9cKtwDLVQcxXqtX%2BICa8OYdp8sm%2BNMOxxxLxWgHzFMoZrAntOw25O0jp9mSPpx33aMqK%2FlS4XQaDoOBRgkeM63Fq4Bl2sJemcMlKNokyw7Aq5Ofr0jeWd%2FalofPclGlMgxQGRSNGOygIOoZAVGpZG0OOkNF%2B35cRgOpM%2FkcX89d5gwAECcbCwz1YPcSRxwVhWQxU6nDorKGo061SzOneRObRV0UkKh3DHpjob50Y8e6lqzSbuHTGVLXXzO%2FPaEpdsN%2FresGU1ZAr5a7Yg2yK1beBH0Cs87gxrxQOUBrrYlfDWT%2FoyHSGBvJqlnJOGWnQngoxwwrNXET9J8qzc47nlqEnkmu7s2o%2BWnPyoAZabWKyOpPD%2BqEbZYZxbeDip%2BpwYzeLPHorenA%2B2ejCRmzK28c9dY2bTidHhCJSsOqPo%2FaLb%2F3IZLuwl1B1B83AdKNqSMb5JLbFYG%2FskNpEdLaJ6nPW82p1hM92EwOWEKhM6ZMEtMQS9xht%2B2nh8UW1%2BkFJ2r0vM3QeWpfle1AdI0O5AWe1LOUUIIbfg0eCet1g8rg5Q6rtAJgvjTXpbFK00txLEiuwIiBh8HbUywYEd9d3HAVtiKT7ktV%2BOjgIhVEXN1EKQfJW6nmO6Odb9mq0KS9yQw9aCQwQY6pgEQHgvpzL4fhZtyzrQaBYBNOwehPITY8jHbXfCPSuQnzY1kgFUrf8IY3encGvhmyxWJMsLpuHflEFDj2cfspqstSv3AHOxOTMrJfV%2B20evYE9IJ8NrXhlK%2FirwtwlAhbGc%2FXsZmESsEPb6wP4w7bYXlNGp1QrBIxaNlG5M0DKMF%2FPdt01oLY90MwqrKj7duiv8qzxx%2Bq8DRzbbwLE3fLoclOoe2zBZb&X-Amz-Signature=c45302861c306cc2b708f9ca788cd14d77299305bc0aeeea67939a513b7564b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW7NGAJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFtO0fzw5DjRSZZaMhXyt7hOD8SPCbJZT7awF5R6PhWSAiBI%2Bw9W0yRe9kYowP%2FwWITOZegzOcWDxCwf6Iv5NfcvjCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKY7qfQmqaJbwZs9cKtwDLVQcxXqtX%2BICa8OYdp8sm%2BNMOxxxLxWgHzFMoZrAntOw25O0jp9mSPpx33aMqK%2FlS4XQaDoOBRgkeM63Fq4Bl2sJemcMlKNokyw7Aq5Ofr0jeWd%2FalofPclGlMgxQGRSNGOygIOoZAVGpZG0OOkNF%2B35cRgOpM%2FkcX89d5gwAECcbCwz1YPcSRxwVhWQxU6nDorKGo061SzOneRObRV0UkKh3DHpjob50Y8e6lqzSbuHTGVLXXzO%2FPaEpdsN%2FresGU1ZAr5a7Yg2yK1beBH0Cs87gxrxQOUBrrYlfDWT%2FoyHSGBvJqlnJOGWnQngoxwwrNXET9J8qzc47nlqEnkmu7s2o%2BWnPyoAZabWKyOpPD%2BqEbZYZxbeDip%2BpwYzeLPHorenA%2B2ejCRmzK28c9dY2bTidHhCJSsOqPo%2FaLb%2F3IZLuwl1B1B83AdKNqSMb5JLbFYG%2FskNpEdLaJ6nPW82p1hM92EwOWEKhM6ZMEtMQS9xht%2B2nh8UW1%2BkFJ2r0vM3QeWpfle1AdI0O5AWe1LOUUIIbfg0eCet1g8rg5Q6rtAJgvjTXpbFK00txLEiuwIiBh8HbUywYEd9d3HAVtiKT7ktV%2BOjgIhVEXN1EKQfJW6nmO6Odb9mq0KS9yQw9aCQwQY6pgEQHgvpzL4fhZtyzrQaBYBNOwehPITY8jHbXfCPSuQnzY1kgFUrf8IY3encGvhmyxWJMsLpuHflEFDj2cfspqstSv3AHOxOTMrJfV%2B20evYE9IJ8NrXhlK%2FirwtwlAhbGc%2FXsZmESsEPb6wP4w7bYXlNGp1QrBIxaNlG5M0DKMF%2FPdt01oLY90MwqrKj7duiv8qzxx%2Bq8DRzbbwLE3fLoclOoe2zBZb&X-Amz-Signature=e6f021340e9bd35c3ae8a220ad66922058200bc92470337b1bfcacaaf13b122f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
