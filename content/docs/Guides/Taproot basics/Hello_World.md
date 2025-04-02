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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVGTDW6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQChtQOvjS3z2qIN3mgS5gIpuw%2FcXSPd7li64MLhszD52AIhAJgdN1IMTBEssx2Un5oHDfO8iKStxSsVXr%2BQ49%2FOtY0CKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyznfTHpC0JyZstsH0q3APbYTdyishGRQzY%2BjxP4kPN56JsEL0dcWBckVHW8n8cXhxzDNKcCvoz881IZ8vmJW%2BgGCaFN0ueDisIXYuZVJVQYyHMYL2fk2jglpKGcJZmZwGQsOBo4Y3pC%2B%2BsiKtG5G6naurVZrAkxlnYduwywb%2BpXnZhUc1ZphaCVySbvujU0VfhyrUfI0KmPgeAOYxzeWDS19IIxEuZ%2FOW2skkwF4lg0FYduakx%2FiFQVIss8pyexkEEFON4Bc2cBJsF4k%2FUrm63%2BISTC54FYyheHOU3JPh0t7iF28iWtjwVVVLayPOITh8BuBndbwyNwoy7eq0I8ETQuEDrQ9rEQRsx1Ur4pN8vEu0jvtnPvEHxRFwTYEFjxSOsja6Q3D8LHg3ZP0tGyfyV%2Fo0jQdaQbyjBYjFOUjQX6FFaAv%2FNW46dGCCXokV8xYuJjgRpu6etMVi4VtN1y7wGbNDTxLHmJKghngscheOcbDv7HxanDYBcWyZlMAb%2B0tMq0CUDuckKyqvwFbaLFk1bN8PsrI7XEklc%2Fc8L60WetBQldApwVwsIxaCrDXz9LLbgjJ8YZeLWd7PpgyptyzXzjigalJNk2%2B8POlRny0eYVvtA3hOSZoXVL4rzGjPzvyXveK6XYvFbwUHmbjCzuLK%2FBjqkAZnwbqIeKwcx%2FZ1qREwNp16WtPbTIWEm4ODuPM%2BK9%2B%2BRHZfUKUSnICNmnxn3Wcl7UY%2B%2FuIH1fD2xCfUzNfbEirk8y%2FPKVs7RkXJ4l14sktHzbEP22a%2FtHwlc1%2B%2F6AgB9QRfd1Rv%2FPczxZDFY7bddssvjbaWltVxGKXNyvQyvifj%2B09UCPpZLUlscmaawAQMTti3bluOJpPAo5eVXn%2FThKcw%2FarZS&X-Amz-Signature=ecf28d03b27103faa97d42dd17fff5ecf1deb19d931ce5b18d9ca9ff79d609cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVGTDW6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQChtQOvjS3z2qIN3mgS5gIpuw%2FcXSPd7li64MLhszD52AIhAJgdN1IMTBEssx2Un5oHDfO8iKStxSsVXr%2BQ49%2FOtY0CKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyznfTHpC0JyZstsH0q3APbYTdyishGRQzY%2BjxP4kPN56JsEL0dcWBckVHW8n8cXhxzDNKcCvoz881IZ8vmJW%2BgGCaFN0ueDisIXYuZVJVQYyHMYL2fk2jglpKGcJZmZwGQsOBo4Y3pC%2B%2BsiKtG5G6naurVZrAkxlnYduwywb%2BpXnZhUc1ZphaCVySbvujU0VfhyrUfI0KmPgeAOYxzeWDS19IIxEuZ%2FOW2skkwF4lg0FYduakx%2FiFQVIss8pyexkEEFON4Bc2cBJsF4k%2FUrm63%2BISTC54FYyheHOU3JPh0t7iF28iWtjwVVVLayPOITh8BuBndbwyNwoy7eq0I8ETQuEDrQ9rEQRsx1Ur4pN8vEu0jvtnPvEHxRFwTYEFjxSOsja6Q3D8LHg3ZP0tGyfyV%2Fo0jQdaQbyjBYjFOUjQX6FFaAv%2FNW46dGCCXokV8xYuJjgRpu6etMVi4VtN1y7wGbNDTxLHmJKghngscheOcbDv7HxanDYBcWyZlMAb%2B0tMq0CUDuckKyqvwFbaLFk1bN8PsrI7XEklc%2Fc8L60WetBQldApwVwsIxaCrDXz9LLbgjJ8YZeLWd7PpgyptyzXzjigalJNk2%2B8POlRny0eYVvtA3hOSZoXVL4rzGjPzvyXveK6XYvFbwUHmbjCzuLK%2FBjqkAZnwbqIeKwcx%2FZ1qREwNp16WtPbTIWEm4ODuPM%2BK9%2B%2BRHZfUKUSnICNmnxn3Wcl7UY%2B%2FuIH1fD2xCfUzNfbEirk8y%2FPKVs7RkXJ4l14sktHzbEP22a%2FtHwlc1%2B%2F6AgB9QRfd1Rv%2FPczxZDFY7bddssvjbaWltVxGKXNyvQyvifj%2B09UCPpZLUlscmaawAQMTti3bluOJpPAo5eVXn%2FThKcw%2FarZS&X-Amz-Signature=c6436d6acc952fcdfb08466ab97b42dcc5a7ff1f93d86074b891b3d4644f088b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
