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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKZNHIN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrgNJL1NEDoLsOdUWE7ScyR9ZOiR6n01GDGBz66BRboAIhAPuNmJRPNiY%2Fc5vICMcTmcxhPA7oai8dxq5%2BAxjwbzGyKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWBFwIg%2B%2B16BQv2Uwq3AOsaR28J%2B7woiPFf97RGRLba16KPgn9lZwJHai92Pon68Y1yVNpv%2FI9P0uovOHkHctqLB5LyLg6V9LzPythmFVbIHSIC24lEZ%2BwRphKa1rWFytJC%2B3Y2337a%2BLY11ApcBt9bEIzJY2gbF6uVdcCOSdfI0Ees%2FTd1QGneraKf9c%2F%2BF6GFKi5y6Ff8OV%2BxhGKtz9UkmSGJqjQrWWs78IruaqzNCNfM8y%2BjBTJTOozo%2BHUyKZrYqKGFp4tznMTRz6g%2BsjB7gHxVmn1qkfQYHxlX4NOdRAlHOe1Vdt%2BTcFfBOYkVkJbTJIJ7Wl813qRjXxfR4YdXBGwnvwgPNI7W%2FmYNDxyRb0tFyjhw5sYcYnuJo2OjWip8NKpiqN%2Bw2Jcbykj5xMFxiH4500OhUtBCUA7Ye4y6Hl9M248UWajW40d5CN60YaB0f1%2F833oaZnoKrOcORyLdk3x5x%2F9J4rLMQZGFyIqeuw5xgSTYQZQM2aMO%2BmITkOEMIdajD3U43XJmjJk3eR%2FFazdTg0l1agldFn6vivOabXyUp9hMxxqcMAMnbhew1i%2Fn%2BBjSRog%2B1xpDyz5skZY207SurMNlvt%2F90PZuuHcC17coIft9we4%2BL2ns3J%2Bcv9TKTCNDQjFXW0bdDD5kLG9BjqkAQkB5Tjm0554AzzMkSvKf4Pi3N75pEYVOxiK3iMLhi41Oj1r7zWPFOSzon7Imo2pv3F0G4y9kJlfaX%2BKa0Ve9RP4gPUnIoWguH331ehsaWC1VWIODPKMdhGaWXon5ZL7d61FOrOXbAIdu6gN18%2F9yOCQN2DaXI99LKKOn%2F0YDhlPDzXW%2BZq8oafSD8%2BycWk2KCT4BSMxqXm63tflZ5Tcz6B%2BucgG&X-Amz-Signature=9e74f670f1efc3d9b188c6db6c19836c2b3121c492fdd4afcaa81ec7a3aa6c79&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYKZNHIN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrgNJL1NEDoLsOdUWE7ScyR9ZOiR6n01GDGBz66BRboAIhAPuNmJRPNiY%2Fc5vICMcTmcxhPA7oai8dxq5%2BAxjwbzGyKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWBFwIg%2B%2B16BQv2Uwq3AOsaR28J%2B7woiPFf97RGRLba16KPgn9lZwJHai92Pon68Y1yVNpv%2FI9P0uovOHkHctqLB5LyLg6V9LzPythmFVbIHSIC24lEZ%2BwRphKa1rWFytJC%2B3Y2337a%2BLY11ApcBt9bEIzJY2gbF6uVdcCOSdfI0Ees%2FTd1QGneraKf9c%2F%2BF6GFKi5y6Ff8OV%2BxhGKtz9UkmSGJqjQrWWs78IruaqzNCNfM8y%2BjBTJTOozo%2BHUyKZrYqKGFp4tznMTRz6g%2BsjB7gHxVmn1qkfQYHxlX4NOdRAlHOe1Vdt%2BTcFfBOYkVkJbTJIJ7Wl813qRjXxfR4YdXBGwnvwgPNI7W%2FmYNDxyRb0tFyjhw5sYcYnuJo2OjWip8NKpiqN%2Bw2Jcbykj5xMFxiH4500OhUtBCUA7Ye4y6Hl9M248UWajW40d5CN60YaB0f1%2F833oaZnoKrOcORyLdk3x5x%2F9J4rLMQZGFyIqeuw5xgSTYQZQM2aMO%2BmITkOEMIdajD3U43XJmjJk3eR%2FFazdTg0l1agldFn6vivOabXyUp9hMxxqcMAMnbhew1i%2Fn%2BBjSRog%2B1xpDyz5skZY207SurMNlvt%2F90PZuuHcC17coIft9we4%2BL2ns3J%2Bcv9TKTCNDQjFXW0bdDD5kLG9BjqkAQkB5Tjm0554AzzMkSvKf4Pi3N75pEYVOxiK3iMLhi41Oj1r7zWPFOSzon7Imo2pv3F0G4y9kJlfaX%2BKa0Ve9RP4gPUnIoWguH331ehsaWC1VWIODPKMdhGaWXon5ZL7d61FOrOXbAIdu6gN18%2F9yOCQN2DaXI99LKKOn%2F0YDhlPDzXW%2BZq8oafSD8%2BycWk2KCT4BSMxqXm63tflZ5Tcz6B%2BucgG&X-Amz-Signature=27011ebeec0b75aa7508fa49750f3628f99a8aa0d03520a06a818cd70c4efe70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
