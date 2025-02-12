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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5V4W2J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0e9Jj7Q2xcj%2BMTSztsFWZPs3AJKZFcVmRm4LzblILEAiB0zEJzyeCdT3CHNqK%2Ba3A3lx3mAlwcM76w3lDbzTIKQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs7kviHrPVDJvq55tKtwDZyRS8QuPknRmAXPAnI0vTQp1UD4mA9gOJOhhN8gDYL5mLwUbmwNDOYeBxiZsK6LNvO1EpQQaRMlGYODyOz81opi7cNDwxyjkCzV4MMXohifxP0SKY0g7lIZtA5DfnA0Akd3UviEFLpp2i5QdDssLOkqwCkkOAAxs4jF9gMEpJ6MfQbsbIFB8%2BtWigB4ar3NwtBNO3Q1LBKDX%2FCMmJv0Nhks5mGOd2kYRftAmse3nQ5DLBLtkPuB9l%2BLneFpm%2BX2gq7NABUeIggyxzjMrNExUhV%2FVne9Va9Vk2N56xdRlJgj%2BqfHD0iSyky8RKYTI6LOVmGbjCbxyJ00pvqdDrCT2sSuI5OUVHIQL4UadYzsHF13JU9gRNw2CT%2Bc8yYcsrPelFpx9coQiR3THuW1thgVGUZXHCkuOgM2zS2qRkHvRi0chSvMfwHWQQRsm%2B3KtG08QXzvzVn57B8U%2Fd9JS%2FmCl2zAWtJKTtWYuzisyMj46yAx1EXEbB7debHmC9psTOHgWxx6GJbc5RxV93i1uE1ej09fCgLbmPWgj2LXSPRIE1yk19Uphqi4j87MOiut%2FehEuZtpA1pEt1ej5rZkJwFscPcJjN7f4%2BGR7W06zGzEUANi35Tmx4AoF13%2Bj7h8wzMyzvQY6pgG%2FzEqwV%2BT%2B6uQy0kheWrm4rDmtjv3JAJymxcvjVIqdHp3Bomg5SCUHLCIoSZPxWSGxfznVbpUq5rXSUA1vQzyDQxtUseyNeEDArGNiT1vEfp13m%2FbWWSiV1aqttkJm4727pIgOKvEhEf4wHZs9xpqyiH0Vjp9Dd21HPu7aCGaBsX%2FNbo%2BdCYInwtt4hCLSO8GBAl2Xz94UGPBCNBQfrICKrMSTZ4X3&X-Amz-Signature=22683ddfb51e38b0c18d70554397377133b9b9e177bb16bb3021f5dc6fd2355a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5V4W2J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0e9Jj7Q2xcj%2BMTSztsFWZPs3AJKZFcVmRm4LzblILEAiB0zEJzyeCdT3CHNqK%2Ba3A3lx3mAlwcM76w3lDbzTIKQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs7kviHrPVDJvq55tKtwDZyRS8QuPknRmAXPAnI0vTQp1UD4mA9gOJOhhN8gDYL5mLwUbmwNDOYeBxiZsK6LNvO1EpQQaRMlGYODyOz81opi7cNDwxyjkCzV4MMXohifxP0SKY0g7lIZtA5DfnA0Akd3UviEFLpp2i5QdDssLOkqwCkkOAAxs4jF9gMEpJ6MfQbsbIFB8%2BtWigB4ar3NwtBNO3Q1LBKDX%2FCMmJv0Nhks5mGOd2kYRftAmse3nQ5DLBLtkPuB9l%2BLneFpm%2BX2gq7NABUeIggyxzjMrNExUhV%2FVne9Va9Vk2N56xdRlJgj%2BqfHD0iSyky8RKYTI6LOVmGbjCbxyJ00pvqdDrCT2sSuI5OUVHIQL4UadYzsHF13JU9gRNw2CT%2Bc8yYcsrPelFpx9coQiR3THuW1thgVGUZXHCkuOgM2zS2qRkHvRi0chSvMfwHWQQRsm%2B3KtG08QXzvzVn57B8U%2Fd9JS%2FmCl2zAWtJKTtWYuzisyMj46yAx1EXEbB7debHmC9psTOHgWxx6GJbc5RxV93i1uE1ej09fCgLbmPWgj2LXSPRIE1yk19Uphqi4j87MOiut%2FehEuZtpA1pEt1ej5rZkJwFscPcJjN7f4%2BGR7W06zGzEUANi35Tmx4AoF13%2Bj7h8wzMyzvQY6pgG%2FzEqwV%2BT%2B6uQy0kheWrm4rDmtjv3JAJymxcvjVIqdHp3Bomg5SCUHLCIoSZPxWSGxfznVbpUq5rXSUA1vQzyDQxtUseyNeEDArGNiT1vEfp13m%2FbWWSiV1aqttkJm4727pIgOKvEhEf4wHZs9xpqyiH0Vjp9Dd21HPu7aCGaBsX%2FNbo%2BdCYInwtt4hCLSO8GBAl2Xz94UGPBCNBQfrICKrMSTZ4X3&X-Amz-Signature=aa1bd1db3b7aac4c579610a6400c90cf2e8c47d59f8a459c14fd18ca24273703&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
