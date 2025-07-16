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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRLXMJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDj6mh4rY13%2B50w%2Be9NREMx%2Fzsr%2BL5o%2FQRKDcbZywLiVAiAGDIKP7qHpy3GDPJHc45DBQ%2Bu%2BmPaosxm2MeHlQufrwSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMMzE99PwbLKII3IYIKtwDJX9ZdhkqUeZmL6n9vLq%2FEvIkBHL7CUj6c1FzVDcUse5jc%2Bfdv1uVU2872K%2BVPkpcW%2BDXAh7QFXQ5FYzeHB4QNZAQl20m%2BuiJejmrv1zzF%2BeajnpqpYtONq0MJfHp2q9aaNNh3ESXSvf4qjiqcajAQTPMRUYGg4HMiFYXByMHxzABIqcw1SX2ja6YHARYmkh54TbroNkRu8XaJdbT3RGfbiTf5KG3u7YFlehWPcqnmSbCjMrgTv8WflcCtqsIv7s8vcw5T3ZBj%2F4z%2FChcsjdK%2F%2Fa%2Fa9vhzXAldzF0N4GwfPqfqeTtcQI8hY5RSIHfJasXVBfaOz4w3EOEs54H55o4xfXc2Zh%2BlY27MNo7wnV9ljJ4pNT0YbNv8t11Y%2BUNloO6hycH%2FyHW6eQoUm4QG19ZxTheXxtPV9DwAeej1fJiUKsXHOz%2BH3NjQgBxHZRtA1EHSbNVGGcsIFtjSj4RfISt4CgfMUmHTDPirbETHIcn8m0Oz03pKoZ%2BhEGqcWD%2BuF%2FUV0ej2hMEfyW8R9tYhWP8oNs%2Fx5ruC0eYlmvO3evABUKlxpuPSWWrOiMgSn1gFYBCcMqQPoGIXrwfZl3OTXzg8kenWWxWWYUUjhtTqcH3ogEd6Jasx1PsbilNTWQw5%2BfdwwY6pgHxu33z7RHEx4PPdlm5wjQY8tXE%2FrLJbh1RGyQzEpTFI0K8Iyykioi8h%2FYCMljfZNLEcysFAVg8Cb8rCNf2IsMQDhQ1HudPFfqIq1vy4yoycLUhcv7jjMRK8SFE9uddk4u%2BmusFb3HCeKmrJIFL%2BY6a79KXEvCIYHA59id7Xsjpc6PQZ6UvYWyRdCezjkZ6HCvLN63EHvfVT49DzoaF4R4JLol36Th0&X-Amz-Signature=eb0153405d788c93c98ff500e19e2843f59963d82bad10fb984fb7828050ab6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRLXMJL%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIDj6mh4rY13%2B50w%2Be9NREMx%2Fzsr%2BL5o%2FQRKDcbZywLiVAiAGDIKP7qHpy3GDPJHc45DBQ%2Bu%2BmPaosxm2MeHlQufrwSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMMzE99PwbLKII3IYIKtwDJX9ZdhkqUeZmL6n9vLq%2FEvIkBHL7CUj6c1FzVDcUse5jc%2Bfdv1uVU2872K%2BVPkpcW%2BDXAh7QFXQ5FYzeHB4QNZAQl20m%2BuiJejmrv1zzF%2BeajnpqpYtONq0MJfHp2q9aaNNh3ESXSvf4qjiqcajAQTPMRUYGg4HMiFYXByMHxzABIqcw1SX2ja6YHARYmkh54TbroNkRu8XaJdbT3RGfbiTf5KG3u7YFlehWPcqnmSbCjMrgTv8WflcCtqsIv7s8vcw5T3ZBj%2F4z%2FChcsjdK%2F%2Fa%2Fa9vhzXAldzF0N4GwfPqfqeTtcQI8hY5RSIHfJasXVBfaOz4w3EOEs54H55o4xfXc2Zh%2BlY27MNo7wnV9ljJ4pNT0YbNv8t11Y%2BUNloO6hycH%2FyHW6eQoUm4QG19ZxTheXxtPV9DwAeej1fJiUKsXHOz%2BH3NjQgBxHZRtA1EHSbNVGGcsIFtjSj4RfISt4CgfMUmHTDPirbETHIcn8m0Oz03pKoZ%2BhEGqcWD%2BuF%2FUV0ej2hMEfyW8R9tYhWP8oNs%2Fx5ruC0eYlmvO3evABUKlxpuPSWWrOiMgSn1gFYBCcMqQPoGIXrwfZl3OTXzg8kenWWxWWYUUjhtTqcH3ogEd6Jasx1PsbilNTWQw5%2BfdwwY6pgHxu33z7RHEx4PPdlm5wjQY8tXE%2FrLJbh1RGyQzEpTFI0K8Iyykioi8h%2FYCMljfZNLEcysFAVg8Cb8rCNf2IsMQDhQ1HudPFfqIq1vy4yoycLUhcv7jjMRK8SFE9uddk4u%2BmusFb3HCeKmrJIFL%2BY6a79KXEvCIYHA59id7Xsjpc6PQZ6UvYWyRdCezjkZ6HCvLN63EHvfVT49DzoaF4R4JLol36Th0&X-Amz-Signature=c26243c415223bb15397db750bad7057aff22f2ccb27f4e140ea35188140f007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
