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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZSYELQJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeSywbRVCKj9o7xn8r%2Bh2vhI%2F8JzgfE%2Bgj6J2bCnr%2FwgIgI9g5p76UhkjQr0ipPofPrrmp899aFzz92tq5RQMhahsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpkEAEK31TbbjWzGSrcA566xF3Mumq%2FIABbKdxuSThxzZ7rs30XG2nUgC6UJWjbMsNoE0ATDfI5qBsVFKc3Nh44NIqC2vt7ZDAp4LOzbGKxCgH%2BaJK8MheqQkdgOZ4pCsECBS79lPOJv9pvNxSqEFgP%2F225xZx5BqJ55Un1yRTFNTOWJ%2BipFZQMKaEBLvJ2dNFJmaemA5y1Qse2IG5hwKxVna4PN3aPvrBqMg7iu%2F%2FLSmE9FBYmIdu%2F5buZFzLlSGutVQY%2F7OFWSt%2FDTooaUYgZnmOLsIatjWY1gz7CWrnDJZfEjnso0cgg2cPWRyF03JNDroIQo2601Um7aJAwJd2O30qqZzEprdeKJ4lqMNldpAwNladw7eS1QCkQzW0jr3SdhWShATQFZlt8XWuWvm9%2F86kiE7k8KLXP4hkWVn2id8Jy4BzVDegK8hwBcd2Rec5qyOYeQ62kBg3tkl%2FfWWlqXy5rZuPRsi6eQxGliTtnCnMv5hTFdkC0e5dfq77Dbp1W%2Fzoy9YFEwuGHvr0YuV0QsKkXH8moKrtho8qRHCqiZfO1O8aYyyjg%2FggoigDLSDOAHIJQfoMr22pNaOIfJhO5ZEjoT78yYcxDwZtIo6Y%2BeHFgksoCpRC0e%2BUISSI5tkJfsjQzMiI1%2FhJfMPSdqsQGOqUB3tTXGZXI1Lgf1UteKpmxQ1E4o2WF5w1mFC7AxJ%2BdtYUAk4ecmFhg5XVgTeWc5TLZF0%2BlXh4Up3DJvw53pGPrmYAIRdmTqPtG0b5D7q0%2FJuwH1OtIb8qY6JrdKgWTTzo%2F%2FZecqbyBUauHntriwdmJ7H1t4G18LTFxmrLjhO6cTaXJMSzSEhrHwjP727Do3eilUUfgoKfs8hNdc2%2FAIVbBHZeGPyyr&X-Amz-Signature=a8166b86ca6f9644b6fc8c4b2fd48c9e7a8ce7e182fc9be0661a3972acabdcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZSYELQJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeSywbRVCKj9o7xn8r%2Bh2vhI%2F8JzgfE%2Bgj6J2bCnr%2FwgIgI9g5p76UhkjQr0ipPofPrrmp899aFzz92tq5RQMhahsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpkEAEK31TbbjWzGSrcA566xF3Mumq%2FIABbKdxuSThxzZ7rs30XG2nUgC6UJWjbMsNoE0ATDfI5qBsVFKc3Nh44NIqC2vt7ZDAp4LOzbGKxCgH%2BaJK8MheqQkdgOZ4pCsECBS79lPOJv9pvNxSqEFgP%2F225xZx5BqJ55Un1yRTFNTOWJ%2BipFZQMKaEBLvJ2dNFJmaemA5y1Qse2IG5hwKxVna4PN3aPvrBqMg7iu%2F%2FLSmE9FBYmIdu%2F5buZFzLlSGutVQY%2F7OFWSt%2FDTooaUYgZnmOLsIatjWY1gz7CWrnDJZfEjnso0cgg2cPWRyF03JNDroIQo2601Um7aJAwJd2O30qqZzEprdeKJ4lqMNldpAwNladw7eS1QCkQzW0jr3SdhWShATQFZlt8XWuWvm9%2F86kiE7k8KLXP4hkWVn2id8Jy4BzVDegK8hwBcd2Rec5qyOYeQ62kBg3tkl%2FfWWlqXy5rZuPRsi6eQxGliTtnCnMv5hTFdkC0e5dfq77Dbp1W%2Fzoy9YFEwuGHvr0YuV0QsKkXH8moKrtho8qRHCqiZfO1O8aYyyjg%2FggoigDLSDOAHIJQfoMr22pNaOIfJhO5ZEjoT78yYcxDwZtIo6Y%2BeHFgksoCpRC0e%2BUISSI5tkJfsjQzMiI1%2FhJfMPSdqsQGOqUB3tTXGZXI1Lgf1UteKpmxQ1E4o2WF5w1mFC7AxJ%2BdtYUAk4ecmFhg5XVgTeWc5TLZF0%2BlXh4Up3DJvw53pGPrmYAIRdmTqPtG0b5D7q0%2FJuwH1OtIb8qY6JrdKgWTTzo%2F%2FZecqbyBUauHntriwdmJ7H1t4G18LTFxmrLjhO6cTaXJMSzSEhrHwjP727Do3eilUUfgoKfs8hNdc2%2FAIVbBHZeGPyyr&X-Amz-Signature=e06d858aba080282a8a3b9d32a9e1505d6bf30869e9cc9ab4d7c2fb15f718dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
