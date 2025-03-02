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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NSHGFP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCyxZfWwciMQFZ4t%2FhnIHsJU1oytlVoA%2BQDiU7TlDSoAiAicTVG2FuSV7RZMXSLWH1dAlTW91%2BlHAG4CGe5Ps0gSyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7qsSgnGMyCkAaecKtwDic2KIyoat58AVXUMzhyyBD19GWforxi4H04EGuWCyZqtKCAaJP3eOgl97d9f4VYMqnQRfc%2F%2FKpLSVu5wTt2NeA3dFDcU0JDGO93TvGmTYPlcHHDmc1gNywunHQNdufP0t9qa4pThTJJMEDhSBmIhaE9bmCDamcr1S9LaLCf2FkU9ww1E5LKOpZ8auWI5ngB%2BHbHP9RzSZAxQsnAUyyOLEwfVT6JQfO2qPEC5iv5YHoeOyR2TJFeNNDiZARMzi3bcD%2BV3E1iYje55O8iwOcJtBFgoqgFQJG8t3xM7l2p9unIXhB4pUhvduSOc1BEUVioGRmU%2BLgGjcquBtRxo5JD54Buj%2F5DAhfRYiguJ7iwVHjwzkhDcjbg82zGRLt78QB8RkaxqcCwXxQ%2FtnefnzNXlta%2F8MvLZ%2BvrprhVfbjgyJxsT7VGYbxQ4%2BJphebTKRNRFA2nEp%2F7cuZevjjZXbPpZiB6jeLJk5IGic4iwZLS4ptKmA1Mar5TSPm4R%2BL1HbDCacfT%2BGn1QAPilMwQGj2QGei5oGLhmjbJZ909icjilU8NpkklFqTn9vu01Z1WBiPcHXdDEbEoy7y1woD2l1Cm%2FydZwSWjg0vznuN2GjPI3wZa3UwZD1ag0EQ5fByQwhKaTvgY6pgFbiXeepVbgH3JEkV1Kt%2B19zXWB2drO%2FrA8AwkxE%2FeIHZy%2BUbjt2EniZmk9nGH2b7CnxWGN2iZaJOlSTe%2FKPLSGMB7sreqYSwRdFHOZZW%2B4wiCLEgccz7IaLltn%2BrZv9qFmVOWUkP8AqCJHWZ2Rxin%2FAUmngDSChCy1blGOoXr91DZ4HH61%2BcDxsjNca6cPyO1ytHkQBK5ATuw3JlBFgKZHNAv7lxCy&X-Amz-Signature=7bba8b54ab32413bf59a2e45de6341df01f7a7b72baaf4069d7af2c9b3cac89c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NSHGFP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCyxZfWwciMQFZ4t%2FhnIHsJU1oytlVoA%2BQDiU7TlDSoAiAicTVG2FuSV7RZMXSLWH1dAlTW91%2BlHAG4CGe5Ps0gSyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7qsSgnGMyCkAaecKtwDic2KIyoat58AVXUMzhyyBD19GWforxi4H04EGuWCyZqtKCAaJP3eOgl97d9f4VYMqnQRfc%2F%2FKpLSVu5wTt2NeA3dFDcU0JDGO93TvGmTYPlcHHDmc1gNywunHQNdufP0t9qa4pThTJJMEDhSBmIhaE9bmCDamcr1S9LaLCf2FkU9ww1E5LKOpZ8auWI5ngB%2BHbHP9RzSZAxQsnAUyyOLEwfVT6JQfO2qPEC5iv5YHoeOyR2TJFeNNDiZARMzi3bcD%2BV3E1iYje55O8iwOcJtBFgoqgFQJG8t3xM7l2p9unIXhB4pUhvduSOc1BEUVioGRmU%2BLgGjcquBtRxo5JD54Buj%2F5DAhfRYiguJ7iwVHjwzkhDcjbg82zGRLt78QB8RkaxqcCwXxQ%2FtnefnzNXlta%2F8MvLZ%2BvrprhVfbjgyJxsT7VGYbxQ4%2BJphebTKRNRFA2nEp%2F7cuZevjjZXbPpZiB6jeLJk5IGic4iwZLS4ptKmA1Mar5TSPm4R%2BL1HbDCacfT%2BGn1QAPilMwQGj2QGei5oGLhmjbJZ909icjilU8NpkklFqTn9vu01Z1WBiPcHXdDEbEoy7y1woD2l1Cm%2FydZwSWjg0vznuN2GjPI3wZa3UwZD1ag0EQ5fByQwhKaTvgY6pgFbiXeepVbgH3JEkV1Kt%2B19zXWB2drO%2FrA8AwkxE%2FeIHZy%2BUbjt2EniZmk9nGH2b7CnxWGN2iZaJOlSTe%2FKPLSGMB7sreqYSwRdFHOZZW%2B4wiCLEgccz7IaLltn%2BrZv9qFmVOWUkP8AqCJHWZ2Rxin%2FAUmngDSChCy1blGOoXr91DZ4HH61%2BcDxsjNca6cPyO1ytHkQBK5ATuw3JlBFgKZHNAv7lxCy&X-Amz-Signature=5dc0d97614a8e6f8411e832a869c235fb2ad758c1284204f068db392b13b674f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
