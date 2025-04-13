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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC32CYY2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCuytej59vAYIGQTDyYP4zbcfbLqZQFU5UOeA249RATBwIhAJWczOoOd1yrt01Uwmu9kXeIhdQnNSeE2%2BuxW%2FpRgXLhKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjUJeZV0zIv09OcRIq3AN56bgtVvfcbNc8FyMjS85czTm51BV8pexQwnw17tl5pVVrjJNHHP2W7F4uSg0WzYkcnC8R7Bl6ufMuX3rV%2FXzrTBVdwppJwcZplXfDubr2UiTZv6kUxnDgwD63YaVcuBmffaii%2F7hvoOOxR8HjBozxFgpAPhWzHK%2BtpnuNbN8A6WHZclN1Jz4d%2F5KAjK1YhhNCG%2F1CDl%2BqXphy%2FpbSIDvU22RNoK9wQoRnPwa3c9NkakTl1rEE43nMzzKjPKVNKL3rng7idwU9aNRkUPYxHGT2ylM3KvhwZo564B%2BKHanA%2B%2FK92UmW54dTzb0EIyq8L65sOi6ZhoZHaZLAJYyUexef4ePzIhjqO%2FD0xVPXyN6KX%2B%2FqVi8uiqucQg3xMs%2BcPl%2F%2BGV55JUp02xp7XETDV6uqk4T0IKZWsj338QOHfEr96K%2FUUQDyo%2B%2B4QSldrkQkrXaDlcT9Lp60VxOKleZYNLWa45ESIcNsPvWkhR%2BeMDbcufuyl8jZZcOnS8aWQcdoN%2Bm7M6FtjclhU4SG1VFOB4qURWSAcODK7evm1gJQfDdQpqOc%2BwavzBFoEhj%2FswkkjNL9rFpHoKbwib%2FlqVQuSd5JxzhRIPUa%2F0oHg%2BCgvzLITh4kMZoGVJ0xZX8ntDDI4O2%2FBjqkAeCjiNtqVPCfBiDoqJ22HJxkmb6A8671ARAQa6DPC7iCmvB68%2B7JAtWPSAd%2B1q6xz25m6ZjIwwRSWvcYC%2FQDJ4eia1G2vyBdd5asZzCY4s8MCtva83ozp06zjiOLj4erFXpYswD37exa78MKHmnnJHKKieF2HNBi5W8oFkyBZFhbsvCD4wPl5xApbg40s0aVZ58VNPYgoXScT1nKWS8wo0pNuDRY&X-Amz-Signature=e7e78de679a97eea4ade50ebf02eb2edfea5cb79ae836a6891738ed5eefd12dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC32CYY2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCuytej59vAYIGQTDyYP4zbcfbLqZQFU5UOeA249RATBwIhAJWczOoOd1yrt01Uwmu9kXeIhdQnNSeE2%2BuxW%2FpRgXLhKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjUJeZV0zIv09OcRIq3AN56bgtVvfcbNc8FyMjS85czTm51BV8pexQwnw17tl5pVVrjJNHHP2W7F4uSg0WzYkcnC8R7Bl6ufMuX3rV%2FXzrTBVdwppJwcZplXfDubr2UiTZv6kUxnDgwD63YaVcuBmffaii%2F7hvoOOxR8HjBozxFgpAPhWzHK%2BtpnuNbN8A6WHZclN1Jz4d%2F5KAjK1YhhNCG%2F1CDl%2BqXphy%2FpbSIDvU22RNoK9wQoRnPwa3c9NkakTl1rEE43nMzzKjPKVNKL3rng7idwU9aNRkUPYxHGT2ylM3KvhwZo564B%2BKHanA%2B%2FK92UmW54dTzb0EIyq8L65sOi6ZhoZHaZLAJYyUexef4ePzIhjqO%2FD0xVPXyN6KX%2B%2FqVi8uiqucQg3xMs%2BcPl%2F%2BGV55JUp02xp7XETDV6uqk4T0IKZWsj338QOHfEr96K%2FUUQDyo%2B%2B4QSldrkQkrXaDlcT9Lp60VxOKleZYNLWa45ESIcNsPvWkhR%2BeMDbcufuyl8jZZcOnS8aWQcdoN%2Bm7M6FtjclhU4SG1VFOB4qURWSAcODK7evm1gJQfDdQpqOc%2BwavzBFoEhj%2FswkkjNL9rFpHoKbwib%2FlqVQuSd5JxzhRIPUa%2F0oHg%2BCgvzLITh4kMZoGVJ0xZX8ntDDI4O2%2FBjqkAeCjiNtqVPCfBiDoqJ22HJxkmb6A8671ARAQa6DPC7iCmvB68%2B7JAtWPSAd%2B1q6xz25m6ZjIwwRSWvcYC%2FQDJ4eia1G2vyBdd5asZzCY4s8MCtva83ozp06zjiOLj4erFXpYswD37exa78MKHmnnJHKKieF2HNBi5W8oFkyBZFhbsvCD4wPl5xApbg40s0aVZ58VNPYgoXScT1nKWS8wo0pNuDRY&X-Amz-Signature=c21879f25665edd8dfe59cf92eae5c8ac13884d71c6079f14ad8eab86045ea9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
