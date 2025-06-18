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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AL4Y4FW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkTV3fvz9X26uNxmJlIPkw3DBiq8%2F9s1TxYfovMK2WBAiAmEv1h3Kyuwc1LKRKyueZ64a%2FHQIRBW2i%2FkDwdprv17yqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMynsOgFzANMp2mTLnKtwDiss60QGEakWQSdYVKFsoleS27V%2Bl9Xs1u0Na%2FIwhttnUoV6fTsu7QJ7Q1zxXTiCrLfIq%2F0jOjGy21kIZUZjTDEuudg%2F1RltzrHGfhPbev9hM%2B27tJiilUnBdFyt%2B9ptTZ0TD5tzxuQ1FRAYqVXwHL45BUYJotjp5UjD%2B1pqoB9zInb%2FOPh23ca25hpe1cRlRXjwrGWaP9Raak9QKdVvqEbBWGa5Nczv9mtCqxvcJwhXpZK8jdty5yWStExT%2FsF%2Bdq94IFRFlgdlVoDPZ4A6cvvJG2aOnZWJxGqsYR4BkYBxuLmKm0vgcPjYQJrep%2B6L%2BZ%2FUS2Ay7mzKGvbkpvXizsu7lmwWH2gS6tkuUKfWPAj0h3cI%2BF9ChdnmqmvGerUWDkiWVr%2FNmrxtbHWeL2la1FoLk5Bl3tTKNZ1zef2trAvwRlo1i1KEH6uqs%2BuOui49utS0OFWlx9Ag8FDJvv71qUp7tEJ4JFd4e7xdMuer4Bg41CBJVyWZgDLljyCEyACMxD89eqnFIqwkg70%2FE%2Bu5aOP3sgp3SS9skckjzm4TiDQUz0V2e7HOTm2ygrcsMIBx%2Fq%2By1yNBaWrqB8oN6Ru7zLCIdOOa4Tihl1ITpnGrQDhMwf0fSA0q3o4HrDiYw9%2FPKwgY6pgHKKj3Y6NPaCa%2FBi4H5vwUDPZfsVTgb%2BHfJGYY2KjsJYuGcqByOxU5bKH4oPBUsb%2FX9kYi2RPbW8vGt6yKobwfAo1hnQjiKfNOZNk%2F2dj1MVmr3BCEmbdj2hTejx%2BPwV49M1TV3PweTv9O5QVipVfuW3MX6A7Lz%2BehtLwQUgGhJ0oMv1QXR2t4JbNmCvSoF5%2FS3XECQEw5W9CMTHZHg%2F6G0HRkv7tQr&X-Amz-Signature=842dad133b909c1e9c28dd684c12547cb5f33008539ff75a8f18f34a285006af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AL4Y4FW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkTV3fvz9X26uNxmJlIPkw3DBiq8%2F9s1TxYfovMK2WBAiAmEv1h3Kyuwc1LKRKyueZ64a%2FHQIRBW2i%2FkDwdprv17yqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMynsOgFzANMp2mTLnKtwDiss60QGEakWQSdYVKFsoleS27V%2Bl9Xs1u0Na%2FIwhttnUoV6fTsu7QJ7Q1zxXTiCrLfIq%2F0jOjGy21kIZUZjTDEuudg%2F1RltzrHGfhPbev9hM%2B27tJiilUnBdFyt%2B9ptTZ0TD5tzxuQ1FRAYqVXwHL45BUYJotjp5UjD%2B1pqoB9zInb%2FOPh23ca25hpe1cRlRXjwrGWaP9Raak9QKdVvqEbBWGa5Nczv9mtCqxvcJwhXpZK8jdty5yWStExT%2FsF%2Bdq94IFRFlgdlVoDPZ4A6cvvJG2aOnZWJxGqsYR4BkYBxuLmKm0vgcPjYQJrep%2B6L%2BZ%2FUS2Ay7mzKGvbkpvXizsu7lmwWH2gS6tkuUKfWPAj0h3cI%2BF9ChdnmqmvGerUWDkiWVr%2FNmrxtbHWeL2la1FoLk5Bl3tTKNZ1zef2trAvwRlo1i1KEH6uqs%2BuOui49utS0OFWlx9Ag8FDJvv71qUp7tEJ4JFd4e7xdMuer4Bg41CBJVyWZgDLljyCEyACMxD89eqnFIqwkg70%2FE%2Bu5aOP3sgp3SS9skckjzm4TiDQUz0V2e7HOTm2ygrcsMIBx%2Fq%2By1yNBaWrqB8oN6Ru7zLCIdOOa4Tihl1ITpnGrQDhMwf0fSA0q3o4HrDiYw9%2FPKwgY6pgHKKj3Y6NPaCa%2FBi4H5vwUDPZfsVTgb%2BHfJGYY2KjsJYuGcqByOxU5bKH4oPBUsb%2FX9kYi2RPbW8vGt6yKobwfAo1hnQjiKfNOZNk%2F2dj1MVmr3BCEmbdj2hTejx%2BPwV49M1TV3PweTv9O5QVipVfuW3MX6A7Lz%2BehtLwQUgGhJ0oMv1QXR2t4JbNmCvSoF5%2FS3XECQEw5W9CMTHZHg%2F6G0HRkv7tQr&X-Amz-Signature=8fdc7e0bef1f33b0cdaa30dcaa6f304595419894d5770bf2ff74f390367a3143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
