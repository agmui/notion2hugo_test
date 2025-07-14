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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO5A7AD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD2%2BsU4jObpiXacyBjrkQPdDYfORJLaUKisRGp1%2Bza3KgIhAObKg7tjcPcVY2hifDOhAft7kd8ei11KJK0uKjD9JEexKv8DCCMQABoMNjM3NDIzMTgzODA1Igw72A1BC%2B0KL2hXiw4q3APhUXYG4qfR4frjXxGdwU535KhqZzBLOlYWG7BcOaKEyc40JSN99JhETbG3ZqMhPBrHq2UuPCQPJi5BChEYE8dnl%2BHDdB%2Bv8mwnb%2BmZttn5wydO8utyiQXn5hDPu5hUfuLqLZNw3aEYLSopndsbk%2FU2w5MoVyF2uKDNwOsCAWydRdkzh0u4DefmkkVeyDEONBdaHD0WdmZbjbaUwAofp1u65%2BtSXTLI2rhW48ZHhzEu69VzCfIO7aSfSMrgscRveSlahwNG9QJwnMNDxwvGG5P0WWfxZn1WYKX%2B6otJz5ppu52410kxO3BLg7%2FTR%2FQlgi5GntGhCFTKQvJok2BfIvi5MP%2BR29LgaMuQYfugumx5lkmzTE0XdMolSATaP08i9WDbotxI0oyxbj8kj0Q5zCZoc9mXk8DKM9%2BdeCJe%2FytUjQ0rtZQkVjpn6ArkCYsJzoqaCsoKoEx99BjXfnVFfZQ6pQ01k8plz3KgqECz9Cbg%2BqjujGT7hIb%2BUzdzi%2BR9mzsn6Roj9OH45sJcvvfI5uizQnLZozlbDTKZua99fLUPD0Utxhxb1kMZnJHpM3OV2Yfh4pCCvjtbfCvqnX8hoRvPdK0NQgAs5%2BJTRSeva12A8Td5rf1ZG2%2FIWnzOezCNzNHDBjqkASr%2FSJt%2FI%2FXuJ4IGx6RyBU1BExnhPwlYLOMhmVA0MVrRRCUUkbWzR3%2FmTMo3fsD%2BBLglSz%2FuD2Fds7t7LyD5FcHTs61Jn6tucmcaoBtTh39jlfn8SelzSbfzIsQVf7gNhW2MxE1GAX%2BUBG%2BBSbAjyie6VVtv5S8MyaUSx6LZfebUHA7insv4TmLzIFfkiojM3VSPRuubdRA92vTCVC0tGD9Kx%2B2p&X-Amz-Signature=089beddcfbbaa28f1a2273bb948bec057749721c44de4d25e76ce015968caf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO5A7AD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD2%2BsU4jObpiXacyBjrkQPdDYfORJLaUKisRGp1%2Bza3KgIhAObKg7tjcPcVY2hifDOhAft7kd8ei11KJK0uKjD9JEexKv8DCCMQABoMNjM3NDIzMTgzODA1Igw72A1BC%2B0KL2hXiw4q3APhUXYG4qfR4frjXxGdwU535KhqZzBLOlYWG7BcOaKEyc40JSN99JhETbG3ZqMhPBrHq2UuPCQPJi5BChEYE8dnl%2BHDdB%2Bv8mwnb%2BmZttn5wydO8utyiQXn5hDPu5hUfuLqLZNw3aEYLSopndsbk%2FU2w5MoVyF2uKDNwOsCAWydRdkzh0u4DefmkkVeyDEONBdaHD0WdmZbjbaUwAofp1u65%2BtSXTLI2rhW48ZHhzEu69VzCfIO7aSfSMrgscRveSlahwNG9QJwnMNDxwvGG5P0WWfxZn1WYKX%2B6otJz5ppu52410kxO3BLg7%2FTR%2FQlgi5GntGhCFTKQvJok2BfIvi5MP%2BR29LgaMuQYfugumx5lkmzTE0XdMolSATaP08i9WDbotxI0oyxbj8kj0Q5zCZoc9mXk8DKM9%2BdeCJe%2FytUjQ0rtZQkVjpn6ArkCYsJzoqaCsoKoEx99BjXfnVFfZQ6pQ01k8plz3KgqECz9Cbg%2BqjujGT7hIb%2BUzdzi%2BR9mzsn6Roj9OH45sJcvvfI5uizQnLZozlbDTKZua99fLUPD0Utxhxb1kMZnJHpM3OV2Yfh4pCCvjtbfCvqnX8hoRvPdK0NQgAs5%2BJTRSeva12A8Td5rf1ZG2%2FIWnzOezCNzNHDBjqkASr%2FSJt%2FI%2FXuJ4IGx6RyBU1BExnhPwlYLOMhmVA0MVrRRCUUkbWzR3%2FmTMo3fsD%2BBLglSz%2FuD2Fds7t7LyD5FcHTs61Jn6tucmcaoBtTh39jlfn8SelzSbfzIsQVf7gNhW2MxE1GAX%2BUBG%2BBSbAjyie6VVtv5S8MyaUSx6LZfebUHA7insv4TmLzIFfkiojM3VSPRuubdRA92vTCVC0tGD9Kx%2B2p&X-Amz-Signature=bba5f58acb42f7dbdc2d3a3c43186439717a0cf8dae7c161cac0969789ac81ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
