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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEWMWDY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADhKPTdZTWLLP5MFbosFzKZnV%2FzatlyFfw%2F5lKxWcS0AiBhYtS5fxBcWQUr7L%2B9MvZPZ2tizPI9YfQ6IxhI1qRNXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMZw1vl%2FQC8YD9%2FKlZKtwDeGNzFNk5FrQzh%2BOlAFSVWxoyd9XtcWe0Apr%2BTbbjfyWsAAYDyg%2Fy2SZQZG9PL3IlkTljUeUReBiRO2auS0XBkZ7L7mT61uoSDZFPBgI6FaTixUVetMtfo1MKa0aL%2BwkbIdh9tGIFe5kxt64bITlWoqmQUX%2BxrTE02qPcCE8HU%2FyCvD8nwl68isKHI4dDVdhLAmKyCipyNCFAry%2BPxcWueRM4QnF0aSUeodvTArtuwYVr5W5Zzrp95%2BJUX4JIz8DwKj9vXwx1dpEMqGMur7yHqv1LdvYB5PcXnWWesrH4Y85aT00M07pVqEJM%2BBzrsABfv%2FPXvXNv8qwqQ29WywfsIJ2jMUJwaJOQCNlNY%2BAOUUjrUo%2BwtaWa%2BFLpIYuxTWSe3NH%2B5KpfWKqA3GTgpGVS6L2A8Luv%2ByEYkbtJhdLz5Rt%2FPzvJzAFjoma0Ss%2Fjiboi4p6obx2tvzyHDejNDn744XXU4Hd1wC7GB18dYzh8G0fVOtC%2BHE8t9QTnxFfEg%2BoFpTrMD4Oz48IgTkEIdXn93eaD%2BoWCFlJw5brGTIVsi1SnW1WmFX9JsxZonRCoX6CFRIWN1NEmvp9cLlpbFVSJ7NHOYVE2CoYECttVmdDCr8%2FcyMip5JI5qkiOh5EwzMCIwAY6pgFhBEkyYQ0ZodLdfytEaVfaB90GnbM88ducIbZKl5UhDla3zw9PDzX3l6ieb%2FSqDrPvbYbpgFToF7qr%2FRsF7sB5Cy52FrhLubtfC3BTJJ1eoaLoEltVWtREblttAzDwRavqhfgF48yA5x867gz3vJinXH2PYVJR1XhOPtZmvfCNXTLfhpAVh6r95MBaFXTtDwRFVS5YXb%2Fz6ZDDcQuCnsyqqfgqLbIn&X-Amz-Signature=f4b34a7d2a13abd314f862156e9fbd404593920b6d8f7a73f256ee4f59c3f592&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAEWMWDY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADhKPTdZTWLLP5MFbosFzKZnV%2FzatlyFfw%2F5lKxWcS0AiBhYtS5fxBcWQUr7L%2B9MvZPZ2tizPI9YfQ6IxhI1qRNXCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMZw1vl%2FQC8YD9%2FKlZKtwDeGNzFNk5FrQzh%2BOlAFSVWxoyd9XtcWe0Apr%2BTbbjfyWsAAYDyg%2Fy2SZQZG9PL3IlkTljUeUReBiRO2auS0XBkZ7L7mT61uoSDZFPBgI6FaTixUVetMtfo1MKa0aL%2BwkbIdh9tGIFe5kxt64bITlWoqmQUX%2BxrTE02qPcCE8HU%2FyCvD8nwl68isKHI4dDVdhLAmKyCipyNCFAry%2BPxcWueRM4QnF0aSUeodvTArtuwYVr5W5Zzrp95%2BJUX4JIz8DwKj9vXwx1dpEMqGMur7yHqv1LdvYB5PcXnWWesrH4Y85aT00M07pVqEJM%2BBzrsABfv%2FPXvXNv8qwqQ29WywfsIJ2jMUJwaJOQCNlNY%2BAOUUjrUo%2BwtaWa%2BFLpIYuxTWSe3NH%2B5KpfWKqA3GTgpGVS6L2A8Luv%2ByEYkbtJhdLz5Rt%2FPzvJzAFjoma0Ss%2Fjiboi4p6obx2tvzyHDejNDn744XXU4Hd1wC7GB18dYzh8G0fVOtC%2BHE8t9QTnxFfEg%2BoFpTrMD4Oz48IgTkEIdXn93eaD%2BoWCFlJw5brGTIVsi1SnW1WmFX9JsxZonRCoX6CFRIWN1NEmvp9cLlpbFVSJ7NHOYVE2CoYECttVmdDCr8%2FcyMip5JI5qkiOh5EwzMCIwAY6pgFhBEkyYQ0ZodLdfytEaVfaB90GnbM88ducIbZKl5UhDla3zw9PDzX3l6ieb%2FSqDrPvbYbpgFToF7qr%2FRsF7sB5Cy52FrhLubtfC3BTJJ1eoaLoEltVWtREblttAzDwRavqhfgF48yA5x867gz3vJinXH2PYVJR1XhOPtZmvfCNXTLfhpAVh6r95MBaFXTtDwRFVS5YXb%2Fz6ZDDcQuCnsyqqfgqLbIn&X-Amz-Signature=d6b02949a083d1aabec3595ece949bae1c23901ad12c4c98676cc579206487a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
