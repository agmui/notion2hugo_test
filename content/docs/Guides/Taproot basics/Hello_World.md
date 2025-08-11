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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2ZYWOS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRekbEk4NPsCxpVI2DxSg9%2BosihlK%2FPAYL5IimvN5VgIhAKqmLHvMzxlTobE3dJ3emodEcUqG8G9JfzJOfJPqA4r6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2BFQO1w%2F%2F9zOMjbIq3AOy198XDXGpNbaTvkb97mn6CMvVOxrb7OC409wvTc0xC6FoubXdOv%2FfN%2FV9xnqwvvtIUBdeyKu84y2Y7X8BmPZTLTP1oFV2XtvsXNodB6BZmDVBhoD3em01wEoP9TNDYWrv2TS%2BmIZ7lRZosDsb1Ays6OWmxvPuW42WcsvPDeEoLM3r47oATz85HFnvjHjtb%2BZ%2BOMq7qlg77a9Owo8jLH64OGB0IC1MkluxJeSh65ynckQlmqF%2B%2Fz9Qk%2FqV6sUte27CJrb%2BGy%2Bihv3MznS7w9sjUiwcPPoaHWp40uKOL9JlVuivbnsRgLRdexY20r%2BSFFH2x%2BhykX13%2F66dZgMNalmmXGP4uPyWNul66inlRla84uf4%2BDW07KGPwhXq9UHfarMIyhHQZrLeIQsxxQaYvhzw178zMLkGktFZ7%2BrqmhYbED%2FV%2BVbqeKaY4WN1dkGCqIWjhgsH9YJC%2F%2BcaoMTTJxFdZ8ap0XANTMXTZgM2dIfSXrHzUd1oylqOpg7KTT5en8Eblx1BZbmeE9xvwn%2Fer3miSvpzEi%2BOPsiua2AodgyUGRJVg9m6Vhan730TMDmRqpEj71Q6w1W2CqXezeU2tbnwU%2FPTb2N0NhLhaqG4NQ4CxALYN%2FdbWoA7CsZERzCXoujEBjqkATHj9wJrLq232A4OoHlpL61bSDW7IVWm7kdHwuKSWU5WwM7zXMqyFGiJz75frlmj8usmRkqo00HXg5NJ5bQuZZIQ0AtzZ9WhxDiCuHRwRNWprv1zcDQW0diyvE1clgGs3GAo5DQRp6HCvhQjXMZj29zWrG6I%2FnCgOhHpVantaKiRl9pqkADANqV%2B21wQ%2F46F2mqTmOUdPck0rajppnjaakxo2tH%2B&X-Amz-Signature=51627855229f15f23fcde9e37ac60755e0711bf215e4c73614209bba9776ff09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2ZYWOS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRekbEk4NPsCxpVI2DxSg9%2BosihlK%2FPAYL5IimvN5VgIhAKqmLHvMzxlTobE3dJ3emodEcUqG8G9JfzJOfJPqA4r6KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2BFQO1w%2F%2F9zOMjbIq3AOy198XDXGpNbaTvkb97mn6CMvVOxrb7OC409wvTc0xC6FoubXdOv%2FfN%2FV9xnqwvvtIUBdeyKu84y2Y7X8BmPZTLTP1oFV2XtvsXNodB6BZmDVBhoD3em01wEoP9TNDYWrv2TS%2BmIZ7lRZosDsb1Ays6OWmxvPuW42WcsvPDeEoLM3r47oATz85HFnvjHjtb%2BZ%2BOMq7qlg77a9Owo8jLH64OGB0IC1MkluxJeSh65ynckQlmqF%2B%2Fz9Qk%2FqV6sUte27CJrb%2BGy%2Bihv3MznS7w9sjUiwcPPoaHWp40uKOL9JlVuivbnsRgLRdexY20r%2BSFFH2x%2BhykX13%2F66dZgMNalmmXGP4uPyWNul66inlRla84uf4%2BDW07KGPwhXq9UHfarMIyhHQZrLeIQsxxQaYvhzw178zMLkGktFZ7%2BrqmhYbED%2FV%2BVbqeKaY4WN1dkGCqIWjhgsH9YJC%2F%2BcaoMTTJxFdZ8ap0XANTMXTZgM2dIfSXrHzUd1oylqOpg7KTT5en8Eblx1BZbmeE9xvwn%2Fer3miSvpzEi%2BOPsiua2AodgyUGRJVg9m6Vhan730TMDmRqpEj71Q6w1W2CqXezeU2tbnwU%2FPTb2N0NhLhaqG4NQ4CxALYN%2FdbWoA7CsZERzCXoujEBjqkATHj9wJrLq232A4OoHlpL61bSDW7IVWm7kdHwuKSWU5WwM7zXMqyFGiJz75frlmj8usmRkqo00HXg5NJ5bQuZZIQ0AtzZ9WhxDiCuHRwRNWprv1zcDQW0diyvE1clgGs3GAo5DQRp6HCvhQjXMZj29zWrG6I%2FnCgOhHpVantaKiRl9pqkADANqV%2B21wQ%2F46F2mqTmOUdPck0rajppnjaakxo2tH%2B&X-Amz-Signature=a9cf7ff538bbb91c9414f7ad8e2e994fb38b52473f736c625de4fd771ace3e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
