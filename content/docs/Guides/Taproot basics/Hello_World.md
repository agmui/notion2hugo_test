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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEZPTEL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBSZKClqtHbqhWbtsngmyvZ0ibHNKqTT49KBCei4LwL8AiA5gsgqwoysUcwhK9p%2BYLFsuk0pz7ZodC1o4x5DiPIoOCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2mrlpGkyrrQV9majKtwD%2FLwnAQ7xH7DK57jEd%2FPbPRp45%2BQiF7z8L5cfVxN6%2BhXq6iguoaV9Qvq0JxqSZwRKxMzK9OVVrr%2B4OlkJURRabgNRl4661ODa2%2F8vSTyXLtUbqsvCH1OCSVZIUF%2F7g%2F3gK9vE%2BWxgLdP6Fw1VXJkldc8xHZSc3BD5cOy23GMSit0YZ5KgAMV6dbcZNgWsTxTnmm3mK6%2BgpWOyb9LzVPpmauYPytSgqo0QFXnuYozIZES01AqgpcLhX7sX6IwSxt1Ix3Kx4YC%2FEICC0X6yi1QRVi5Em%2FyKT6lRKkitGfsG47DljftKprYcxSTKRLs%2FJ1gxF4ci8maWxQLhtYojq8GEZBcx38525AeHZqmiVfap34tewi891yrO79D5YNhi8sPVFTn4sT%2FHAhocKQGxOsAg34fV1eSvfm7Rsk%2B8FBdKdjuIkOPpv%2FvWgBwmYBs18leZVOcXpS3DcrNVVCzzNCETMFOs8EzunURRfC70W3F6pk5OZuIfNmwcb3k3PWGx3Swy7EOP2QBK791032Q08HdiR5mDCjLlq6VTnsjNYXshdlC17aZV%2FR54p2eeo0a2bFqS4JyI19GxAEbF9P0sNhGidVzY0Sugznoy7Od0nX53V947S3n%2FQoZUhSoQLdsw%2Bof8vQY6pgHQuEHYOPVoCy%2Fq5FJbBk60TiRXlNqNkRRqwkr9FO2ky%2BcJuWvf8wnmtjZEB0%2BZeS88zOJ2yAb1Tv0%2BpYh8p%2FHCTwZVm7u57Gb25tBOjyN0lwLOdXaeeVPQJCqag1mRhAw1SzLpY5yFzuJfGvGh8eCB5aVWAYNblPhiAK0VijQGT1cp1p5pnuJQUqubUtI0%2FWFM9wAzJVRD%2F1%2B3Lu0B9dwoRv8M7iWH&X-Amz-Signature=40e331fd3d890972b4e793ed5bc7343f5788d696b20b0ccc8c796903b1db0214&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEZPTEL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBSZKClqtHbqhWbtsngmyvZ0ibHNKqTT49KBCei4LwL8AiA5gsgqwoysUcwhK9p%2BYLFsuk0pz7ZodC1o4x5DiPIoOCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM2mrlpGkyrrQV9majKtwD%2FLwnAQ7xH7DK57jEd%2FPbPRp45%2BQiF7z8L5cfVxN6%2BhXq6iguoaV9Qvq0JxqSZwRKxMzK9OVVrr%2B4OlkJURRabgNRl4661ODa2%2F8vSTyXLtUbqsvCH1OCSVZIUF%2F7g%2F3gK9vE%2BWxgLdP6Fw1VXJkldc8xHZSc3BD5cOy23GMSit0YZ5KgAMV6dbcZNgWsTxTnmm3mK6%2BgpWOyb9LzVPpmauYPytSgqo0QFXnuYozIZES01AqgpcLhX7sX6IwSxt1Ix3Kx4YC%2FEICC0X6yi1QRVi5Em%2FyKT6lRKkitGfsG47DljftKprYcxSTKRLs%2FJ1gxF4ci8maWxQLhtYojq8GEZBcx38525AeHZqmiVfap34tewi891yrO79D5YNhi8sPVFTn4sT%2FHAhocKQGxOsAg34fV1eSvfm7Rsk%2B8FBdKdjuIkOPpv%2FvWgBwmYBs18leZVOcXpS3DcrNVVCzzNCETMFOs8EzunURRfC70W3F6pk5OZuIfNmwcb3k3PWGx3Swy7EOP2QBK791032Q08HdiR5mDCjLlq6VTnsjNYXshdlC17aZV%2FR54p2eeo0a2bFqS4JyI19GxAEbF9P0sNhGidVzY0Sugznoy7Od0nX53V947S3n%2FQoZUhSoQLdsw%2Bof8vQY6pgHQuEHYOPVoCy%2Fq5FJbBk60TiRXlNqNkRRqwkr9FO2ky%2BcJuWvf8wnmtjZEB0%2BZeS88zOJ2yAb1Tv0%2BpYh8p%2FHCTwZVm7u57Gb25tBOjyN0lwLOdXaeeVPQJCqag1mRhAw1SzLpY5yFzuJfGvGh8eCB5aVWAYNblPhiAK0VijQGT1cp1p5pnuJQUqubUtI0%2FWFM9wAzJVRD%2F1%2B3Lu0B9dwoRv8M7iWH&X-Amz-Signature=8402c69a61aa33b41765549157bc1e042bb8855fbdd8e942967b4d464e82cbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
