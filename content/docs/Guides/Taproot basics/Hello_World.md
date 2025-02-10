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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDZ4MOK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1uBN5m1gN%2BmZ55V4lnzfsUvls8IgvY7frTwyyGs3lTAIgOoR0IIbc5qEoasIS%2F9C0hXpx%2Fl54a1IgGzMdOgdSfX8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xVfaf5TdM7dsySrcAxI6IdX1v47iMXP2VBsgYG0hj9hK4V07A7lAkAtLQJIRI1nr81Cphhace%2B4fG9hZFT2Q%2BaRbuP7eeG3qXW5AJsik4oOAEAu262l3kBPE%2FyIBYzUy2Qum7fPehVstpQfL1x4aNHc%2FS4lxbpK4uNYedQRHi2KSwJNaUT%2BpzI3o5IIjyrZrDT3rXPuJOcCY3zCaZoSHYjnPYK%2FyavFl2SMA%2FQcRaGXIf9udMsFd1lna4JDqGS5hDn9mgNa9vyK9v%2FI8Zfd2%2FLlKMrelYh%2BtLF4YbU8tYXzwXkNbL1M7vo7fTe2NUl6agWUiOvJxIcHHzcI%2FPuSZUia9ZODw0ORrArUaTn8wW1mEdcj5H5FH6Ep4jzKqrvg%2Fz7VEv4w92rDvZywZR42uEjZ15vTsDrrhdgCDKC0b0vlhPvd4TAbK7%2Fhqk01r4lM5kQiGxbB1YPXbUpiwG1824HPxXsnF4yCFmcGbTDH%2BhnYE23Eu4%2BEsmNuuzuBq1FtoKMv4O1%2BiAIlquwNAoT98JJSRhzliQMrVPUlpkrDL2VS55viaM6vn1E%2BleOVj6phCx7oLZDZHrHq0WmVy6OuVG3vZEMU8Kv9BcWEAvMGcIrnChX056QNQvcVLjEH1cjXRLlKtjbzGsCOIMOutp70GOqUB4Z8X2BMd4PECiLtEEiaLV%2FbSvrQs1f2wFOxYH2Vyi6vIu6jSzLQ6R%2Fm3Dy30aZPDWo7S6hkG%2FysNtu%2Fq6Red%2B5s6FMLI6htL2wtbdx%2BVLK6NT9OeS8tA9YfrOZThqK5IS1pZZ7dfbSiIdXryOpzZk%2FpA9vPEhmeZdODKhFS3hj95v2VUj5ZolStDMgJh35tCtP3W4u24ARtkaANyQ7xwF7Qa7KFL&X-Amz-Signature=1c06a1fe4061f9146f622e89e60e3e3895a036ab22185c1b2f0708bc2e307fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDZ4MOK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1uBN5m1gN%2BmZ55V4lnzfsUvls8IgvY7frTwyyGs3lTAIgOoR0IIbc5qEoasIS%2F9C0hXpx%2Fl54a1IgGzMdOgdSfX8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI5xVfaf5TdM7dsySrcAxI6IdX1v47iMXP2VBsgYG0hj9hK4V07A7lAkAtLQJIRI1nr81Cphhace%2B4fG9hZFT2Q%2BaRbuP7eeG3qXW5AJsik4oOAEAu262l3kBPE%2FyIBYzUy2Qum7fPehVstpQfL1x4aNHc%2FS4lxbpK4uNYedQRHi2KSwJNaUT%2BpzI3o5IIjyrZrDT3rXPuJOcCY3zCaZoSHYjnPYK%2FyavFl2SMA%2FQcRaGXIf9udMsFd1lna4JDqGS5hDn9mgNa9vyK9v%2FI8Zfd2%2FLlKMrelYh%2BtLF4YbU8tYXzwXkNbL1M7vo7fTe2NUl6agWUiOvJxIcHHzcI%2FPuSZUia9ZODw0ORrArUaTn8wW1mEdcj5H5FH6Ep4jzKqrvg%2Fz7VEv4w92rDvZywZR42uEjZ15vTsDrrhdgCDKC0b0vlhPvd4TAbK7%2Fhqk01r4lM5kQiGxbB1YPXbUpiwG1824HPxXsnF4yCFmcGbTDH%2BhnYE23Eu4%2BEsmNuuzuBq1FtoKMv4O1%2BiAIlquwNAoT98JJSRhzliQMrVPUlpkrDL2VS55viaM6vn1E%2BleOVj6phCx7oLZDZHrHq0WmVy6OuVG3vZEMU8Kv9BcWEAvMGcIrnChX056QNQvcVLjEH1cjXRLlKtjbzGsCOIMOutp70GOqUB4Z8X2BMd4PECiLtEEiaLV%2FbSvrQs1f2wFOxYH2Vyi6vIu6jSzLQ6R%2Fm3Dy30aZPDWo7S6hkG%2FysNtu%2Fq6Red%2B5s6FMLI6htL2wtbdx%2BVLK6NT9OeS8tA9YfrOZThqK5IS1pZZ7dfbSiIdXryOpzZk%2FpA9vPEhmeZdODKhFS3hj95v2VUj5ZolStDMgJh35tCtP3W4u24ARtkaANyQ7xwF7Qa7KFL&X-Amz-Signature=bd6bf1bb3696d7963c65847cbe2f18b27b1edd83b9ef86955be242c754d4a7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
