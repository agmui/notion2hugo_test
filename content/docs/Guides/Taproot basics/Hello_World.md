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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUB5JG4J%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgxA69si7gg4Eo9Y6clfj9TfV4TaMtwkcHwBSmBCb9PAiEArOadHdYVEs1AkLDm5LEl7zwivERaPQw1%2B9%2FcKzb0UXYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLgGcI8vA2l%2B8PcfrircAzyIscxbLnWZGXPB0UFfPsMs%2BiNZk0yvisyqPe3YuUeYTaHmU6xuriOf%2FJ2c6xZ7v39FbZIWxs5lOjXhZd482D6Sq%2F2c3Q3dd%2BurUHGtf3Rn8aCfSfnx%2FOlyBobHsd0mPU258VH%2B%2Fa2eR9gDFUXlDFIdxuFJUE4oydEkRlZv9gpbClgBnTuZXc%2F1MAd5PGr4YNXIxQG%2FBiBMOuCChyB6KNFonBK%2Bbjj7sUCGa8x%2B5NsbAmuYGS2TJcAKrnoI9jHxM6per8OUtwg4gGqd1HaebRYOcQ8u98anuHtPDyIstIuUpv%2FRc%2BpZSdIMivfpJsiHOnGKfMCH8RphdMr6PHDL1KU0LM6gH5LGJ13Ut1u9MRoG%2FC77SIuxK%2F9%2FOb6nGDYP6K3mOYBbG1ztIxE7%2FbLPsqCK6hcXKcWbU%2FHphuziOb3ZzK9Ge8BJcBobgzfkGx02EuKXp65Hj7QBbW3imBRuZtSqgc1xmLtQ0l2KKMiV2CRpjQlvAN1j2z0aFUUCOMQsDlKCyzwqqV3BBjZy0Rfozvc%2B2FJIovTkJYCY%2FAzMVgSoanx7Y0AkCSqSq7i1DMZCas11XmUQETJvgkQ5759Lb8bgeVpyPpudU7FE9hA7eM%2B8w%2Biy%2F0geR2yrOAp7MK2b2b4GOqUB8l%2F%2F7MIgBsqqt2GS3YciOdSc%2FCxT52xd%2F7ejCqKVFnz1aXCQePS%2BxDLMjuZWEENkcYy5RFkFahSyop5EdSfZVCwaiM17pQT6eJo49V25a8QdUnNljZlKFZixbL4fXe%2BpETIO2GJMYMLR3xswKkAow4Aouv3sEoJKhXc9p6Sifzu5ocM%2BDTyr1KLCB1eoQERPet4xGMotWk855fFcHloZr9XWnfbI&X-Amz-Signature=e5b5162afd9ad35e126abf671239b12699389bacfcbcafbad6a77494f4c57fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUB5JG4J%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgxA69si7gg4Eo9Y6clfj9TfV4TaMtwkcHwBSmBCb9PAiEArOadHdYVEs1AkLDm5LEl7zwivERaPQw1%2B9%2FcKzb0UXYq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDLgGcI8vA2l%2B8PcfrircAzyIscxbLnWZGXPB0UFfPsMs%2BiNZk0yvisyqPe3YuUeYTaHmU6xuriOf%2FJ2c6xZ7v39FbZIWxs5lOjXhZd482D6Sq%2F2c3Q3dd%2BurUHGtf3Rn8aCfSfnx%2FOlyBobHsd0mPU258VH%2B%2Fa2eR9gDFUXlDFIdxuFJUE4oydEkRlZv9gpbClgBnTuZXc%2F1MAd5PGr4YNXIxQG%2FBiBMOuCChyB6KNFonBK%2Bbjj7sUCGa8x%2B5NsbAmuYGS2TJcAKrnoI9jHxM6per8OUtwg4gGqd1HaebRYOcQ8u98anuHtPDyIstIuUpv%2FRc%2BpZSdIMivfpJsiHOnGKfMCH8RphdMr6PHDL1KU0LM6gH5LGJ13Ut1u9MRoG%2FC77SIuxK%2F9%2FOb6nGDYP6K3mOYBbG1ztIxE7%2FbLPsqCK6hcXKcWbU%2FHphuziOb3ZzK9Ge8BJcBobgzfkGx02EuKXp65Hj7QBbW3imBRuZtSqgc1xmLtQ0l2KKMiV2CRpjQlvAN1j2z0aFUUCOMQsDlKCyzwqqV3BBjZy0Rfozvc%2B2FJIovTkJYCY%2FAzMVgSoanx7Y0AkCSqSq7i1DMZCas11XmUQETJvgkQ5759Lb8bgeVpyPpudU7FE9hA7eM%2B8w%2Biy%2F0geR2yrOAp7MK2b2b4GOqUB8l%2F%2F7MIgBsqqt2GS3YciOdSc%2FCxT52xd%2F7ejCqKVFnz1aXCQePS%2BxDLMjuZWEENkcYy5RFkFahSyop5EdSfZVCwaiM17pQT6eJo49V25a8QdUnNljZlKFZixbL4fXe%2BpETIO2GJMYMLR3xswKkAow4Aouv3sEoJKhXc9p6Sifzu5ocM%2BDTyr1KLCB1eoQERPet4xGMotWk855fFcHloZr9XWnfbI&X-Amz-Signature=05eaf9706486748399e005d6dc2b5e25e1f3325d3c58a7b7a40c60fd6a1df2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
