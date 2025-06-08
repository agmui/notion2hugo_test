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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMUMRXFS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9BM4zQfihc7vGKhrb1r%2FTLaxe76DsB3qjyYJab3ioTAIhAN6a%2B9uiFFgJcHhP4FiHm5746BkAIRO7P6BJAmzCmNQ5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FNPDXSPHoPjTZYb8q3AMxBFIF2dM8yx2GnrQVwRQSMcrU8q2uFA0Oh1U4jngzOXj9TCVJVubBY8Bm2b6KNu6Q8QanvgdEP6Ikkb2Ha%2B7YLCFRAj%2BnxRHU8vTwXK1wprA2v7Ic1t8tPxTfSWOyDuX9btwUIYbGg9yqOcZOhC4XNuecRHz57nZRTb34U9D8lCA9hlLRhsnFD0BmMYfpq3uwihGCikc1VH2%2B9VJuheT%2B4mEIpTOttIp9Z7b5g0u3gxQIamR5O3Uzz%2FFrNqSn8cDlS%2BYoKe65cxTs3ZaJp%2FVgfWKlKslqfokz7SniCfxN8Y0n6dD9K1kUcp%2FPPtZZkjDSvzRLxrXoPCTaR5qbDL7y%2Bm9drL%2BlJAmsqM2H3C9kn5j02nnqX4j%2FbEjJiL2GuUVWW3OfojPBRcff7YjNGltrlKAlPj%2Bpkhlf8US13u2xHtu72M4KkpxkozCZgzg0pSGQkhrmMw0M%2FzMhhSg0IGTWBhgbd88OvqfGUuDNpXMgLyftlvMUPWqlXzxBimcXeQ4%2FpIgX6oD4%2FHMhDEMoHqbGdBIOgV01%2B1c%2FEzkoz8mlsNn1G4StOxXs3WNQviBVK%2Fvl3pxDJzPlZzHEPcfH7oE66H6qo3Lht3swWSrSZ8taeVW09PqVJrFRkB6UEjCEppXCBjqkAZU0pF%2BolCYp1GEqVEflwEzFRzUEPC%2FUHs4KlzwJ9IjnhqvsgZsnhuqcU7x0F3wggFeo3Hb7V50DrKpeAODlGpiVz3dlzOHOcOTQGBjUXdFGDIFQqiK4oJLYAgDKnmLGdWoOBK6mThSGuB5emLJq4CyKIDSHrx%2FnkGyh45yM6cSeUL1G14zfJTWSXjNfbcBQngzRu8TXN276YvrWWru3WOIzCwAJ&X-Amz-Signature=f4b9ec065141a58e9ec376482d6c779363c973b8a1bd9960fba69dba62c79fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMUMRXFS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9BM4zQfihc7vGKhrb1r%2FTLaxe76DsB3qjyYJab3ioTAIhAN6a%2B9uiFFgJcHhP4FiHm5746BkAIRO7P6BJAmzCmNQ5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FNPDXSPHoPjTZYb8q3AMxBFIF2dM8yx2GnrQVwRQSMcrU8q2uFA0Oh1U4jngzOXj9TCVJVubBY8Bm2b6KNu6Q8QanvgdEP6Ikkb2Ha%2B7YLCFRAj%2BnxRHU8vTwXK1wprA2v7Ic1t8tPxTfSWOyDuX9btwUIYbGg9yqOcZOhC4XNuecRHz57nZRTb34U9D8lCA9hlLRhsnFD0BmMYfpq3uwihGCikc1VH2%2B9VJuheT%2B4mEIpTOttIp9Z7b5g0u3gxQIamR5O3Uzz%2FFrNqSn8cDlS%2BYoKe65cxTs3ZaJp%2FVgfWKlKslqfokz7SniCfxN8Y0n6dD9K1kUcp%2FPPtZZkjDSvzRLxrXoPCTaR5qbDL7y%2Bm9drL%2BlJAmsqM2H3C9kn5j02nnqX4j%2FbEjJiL2GuUVWW3OfojPBRcff7YjNGltrlKAlPj%2Bpkhlf8US13u2xHtu72M4KkpxkozCZgzg0pSGQkhrmMw0M%2FzMhhSg0IGTWBhgbd88OvqfGUuDNpXMgLyftlvMUPWqlXzxBimcXeQ4%2FpIgX6oD4%2FHMhDEMoHqbGdBIOgV01%2B1c%2FEzkoz8mlsNn1G4StOxXs3WNQviBVK%2Fvl3pxDJzPlZzHEPcfH7oE66H6qo3Lht3swWSrSZ8taeVW09PqVJrFRkB6UEjCEppXCBjqkAZU0pF%2BolCYp1GEqVEflwEzFRzUEPC%2FUHs4KlzwJ9IjnhqvsgZsnhuqcU7x0F3wggFeo3Hb7V50DrKpeAODlGpiVz3dlzOHOcOTQGBjUXdFGDIFQqiK4oJLYAgDKnmLGdWoOBK6mThSGuB5emLJq4CyKIDSHrx%2FnkGyh45yM6cSeUL1G14zfJTWSXjNfbcBQngzRu8TXN276YvrWWru3WOIzCwAJ&X-Amz-Signature=fc6e777132f259fb666102517a6749521183092f5dd52549a5515058193699a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
