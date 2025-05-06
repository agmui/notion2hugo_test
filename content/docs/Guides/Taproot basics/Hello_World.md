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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CL2KCW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy9ZzLOLCe1EB%2FYe4WaBj%2B0h8uFqDjW%2FIAaIEL3o3KeAiAyfoSf34ikqF%2Fpvgmlc3EsBc3asCkjCnpzZUSfcbmCwSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMW12JR8J8dUBA4DnhKtwDBWtcONh%2BVnZdj2uqHFdCxv2cljhX%2FDBsMzPPVREcKjCA0rerSiwfCnDjbTfZ9O3nYJyeAgkv64Gecl7DSZ4OMCgy9WujEQwlOrzxarqmnyZUGhLaDWGQcPO2NFNAzyBsKaNYzjYkD77Z33AyQyGzwcF%2FraC7ID%2FPJXILx1AP4h90PHFTEud3Vu6jnb53cRIXPyiXkCaUD3Cp1HCj3f9WyF%2FPoSxcpYKmpbjknc%2BcjIRqJ0WsdNI1nt4ZSUl4Ksy2MyvGD3bdjnzvrOvGJj2LYWSJuIoxyHfLaM3FtozUvBzhB0QtHzpUdEA5trQIwkOpSmm1c35VVDEPmAEdXtFAGsZWnxG72rpf8MClIEy1geHv5J9%2F59Tt7Wo2nrqmT9bDB%2BaMwkPbb3XQFLvFnUs0HaEwNv%2F7DEtpNGazamdPUXTcopXi4zV21twMA9OpzBLqVvCMibE%2FJwC%2BnsEmxfQVzwzTE0E3KhPqTSJoFFTGrcMCgFivmV8qTCOyqI0bfrNKiNVHvnXfDN7C4BjZVihnPyoYKBmK8tEUbeT6zBI2tJKPIKKMOHLZqsDlLKxKA7HK%2Bsks9Eb7DQnSrBRedWrFCiH5uQiW0IC%2BItTdRjNpSZfo2rJiyHgA8AltxAUwlIvnwAY6pgF8h5hA4YqA68KWGJqsZzZkwjKRXv5cP%2B8UcoJzFU2LykG5JK93IyUfJYQ7Pj5M7Mvmm5WgQ7689ZsFA6NSwjy%2Bb9E1LCqyxgd7ulGIODG9CduAOH1hs6%2BUkRrhF%2FRJX0AVLiv5Bk7Tw6SEfuIjABm%2B9vidznlvECBKupzcP2l7HJRWMdGQr0ZnXigkI1RsyN3A5toUBvQv38cDussLWMifNrwVH%2FKW&X-Amz-Signature=e789d6a4fc190f9aff0b934379a9f7017836f74d98adc9edbc7933119b74e70e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CL2KCW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy9ZzLOLCe1EB%2FYe4WaBj%2B0h8uFqDjW%2FIAaIEL3o3KeAiAyfoSf34ikqF%2Fpvgmlc3EsBc3asCkjCnpzZUSfcbmCwSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMW12JR8J8dUBA4DnhKtwDBWtcONh%2BVnZdj2uqHFdCxv2cljhX%2FDBsMzPPVREcKjCA0rerSiwfCnDjbTfZ9O3nYJyeAgkv64Gecl7DSZ4OMCgy9WujEQwlOrzxarqmnyZUGhLaDWGQcPO2NFNAzyBsKaNYzjYkD77Z33AyQyGzwcF%2FraC7ID%2FPJXILx1AP4h90PHFTEud3Vu6jnb53cRIXPyiXkCaUD3Cp1HCj3f9WyF%2FPoSxcpYKmpbjknc%2BcjIRqJ0WsdNI1nt4ZSUl4Ksy2MyvGD3bdjnzvrOvGJj2LYWSJuIoxyHfLaM3FtozUvBzhB0QtHzpUdEA5trQIwkOpSmm1c35VVDEPmAEdXtFAGsZWnxG72rpf8MClIEy1geHv5J9%2F59Tt7Wo2nrqmT9bDB%2BaMwkPbb3XQFLvFnUs0HaEwNv%2F7DEtpNGazamdPUXTcopXi4zV21twMA9OpzBLqVvCMibE%2FJwC%2BnsEmxfQVzwzTE0E3KhPqTSJoFFTGrcMCgFivmV8qTCOyqI0bfrNKiNVHvnXfDN7C4BjZVihnPyoYKBmK8tEUbeT6zBI2tJKPIKKMOHLZqsDlLKxKA7HK%2Bsks9Eb7DQnSrBRedWrFCiH5uQiW0IC%2BItTdRjNpSZfo2rJiyHgA8AltxAUwlIvnwAY6pgF8h5hA4YqA68KWGJqsZzZkwjKRXv5cP%2B8UcoJzFU2LykG5JK93IyUfJYQ7Pj5M7Mvmm5WgQ7689ZsFA6NSwjy%2Bb9E1LCqyxgd7ulGIODG9CduAOH1hs6%2BUkRrhF%2FRJX0AVLiv5Bk7Tw6SEfuIjABm%2B9vidznlvECBKupzcP2l7HJRWMdGQr0ZnXigkI1RsyN3A5toUBvQv38cDussLWMifNrwVH%2FKW&X-Amz-Signature=f76bcb923d564591911d663dc8cd373329d193799f7290a7c215e2690174ac38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
