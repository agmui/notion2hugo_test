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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTOWIQA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFQX%2BgslxAicOEnJ4iIMFQF62mYV6w5a1atv4sniMw5XAiAPjoIshHspK3NeEsFocr%2FIr7lHWCgsaQ%2BZVV%2FtF6B6GCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMuk4OjKevMXpPwpXnKtwD35I9NygwkvFQuoybuIqcjHQEh1soOgrLjJ6C1FbqPa2%2FT8XXtTA7eaDPmkf77MzlghUTxiKW0FPo%2FoTzQmnYqkYg02%2FqZaMwmLsmOzmMJqw9%2BklnUYk9lBvv5h6fbeKoRHLhhobLLFLg8BVCNTdeisagI5iSm%2BY2m0Vo7ziTF8DzXxsaFaQ10r0RL0W%2B5j9n%2BZN0WV1eNqkqeKtqSjDOoQoxkVx3n31Pnqep87inrRxYj0tOmXXXNlhr15QKuvdEvxC0wNdYihbSp5Eu%2BzGnZlkGNfyZxCl6EwkwL6gdXzOtU41NJ6MjhyoDTzH3LqiDGWjayH30KplPETyFrRltQy5UDZT%2F78JYUEbHG5O%2Bk4wR3SQQorwnHZaDXw2es9wJlHZ%2FCXNs9xcJN9NyuT44lCCxQVlqdCgUvHy0j9dsEZ4z0rDKBmbDbCCATPITcrwO8BhsyuBF4LCAegF8OR%2BBMionFjTS4VqZww%2FavCMoRuEI5MaBaFlQHHSVLk%2Bwk55SEK49rQ35CzgsDOLSWGcK3PcXi4LdlS3a4SFlnUSKAP4I9%2BH5KNPmVnYQrKoVrDbi%2BVV%2BAqZzVSAVr4t0UKzwJEsFjYYm5e97ic0xrtMQPNcudlgSIgSITFMqaFww9N6cvwY6pgFKnjfd0Ig315BLj1iWQLJRfGAc9HC7XNfY64DeD%2BxPeHr7eJ%2FEzQMx2VHVPADjENX6mULvjGRWL6i%2BeBYvMsSEjmxql2ySaG02pPBa%2FXdyrSK0s9Eh479UFLQHXhZ2zWpbE6LB84hqcpxz46QxNjsxZJ3UvVaVSEkNG4qrk0hbWBR31xGs2a2JdxxPEwohU%2FpNjXMAQSI37KG0V%2Fud%2FDjkeoMIxcdk&X-Amz-Signature=0b2cd9fa0953ca9167520f80afe32f18ba3d6816ede585a40b6eb5dd107b2ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTOWIQA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFQX%2BgslxAicOEnJ4iIMFQF62mYV6w5a1atv4sniMw5XAiAPjoIshHspK3NeEsFocr%2FIr7lHWCgsaQ%2BZVV%2FtF6B6GCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMuk4OjKevMXpPwpXnKtwD35I9NygwkvFQuoybuIqcjHQEh1soOgrLjJ6C1FbqPa2%2FT8XXtTA7eaDPmkf77MzlghUTxiKW0FPo%2FoTzQmnYqkYg02%2FqZaMwmLsmOzmMJqw9%2BklnUYk9lBvv5h6fbeKoRHLhhobLLFLg8BVCNTdeisagI5iSm%2BY2m0Vo7ziTF8DzXxsaFaQ10r0RL0W%2B5j9n%2BZN0WV1eNqkqeKtqSjDOoQoxkVx3n31Pnqep87inrRxYj0tOmXXXNlhr15QKuvdEvxC0wNdYihbSp5Eu%2BzGnZlkGNfyZxCl6EwkwL6gdXzOtU41NJ6MjhyoDTzH3LqiDGWjayH30KplPETyFrRltQy5UDZT%2F78JYUEbHG5O%2Bk4wR3SQQorwnHZaDXw2es9wJlHZ%2FCXNs9xcJN9NyuT44lCCxQVlqdCgUvHy0j9dsEZ4z0rDKBmbDbCCATPITcrwO8BhsyuBF4LCAegF8OR%2BBMionFjTS4VqZww%2FavCMoRuEI5MaBaFlQHHSVLk%2Bwk55SEK49rQ35CzgsDOLSWGcK3PcXi4LdlS3a4SFlnUSKAP4I9%2BH5KNPmVnYQrKoVrDbi%2BVV%2BAqZzVSAVr4t0UKzwJEsFjYYm5e97ic0xrtMQPNcudlgSIgSITFMqaFww9N6cvwY6pgFKnjfd0Ig315BLj1iWQLJRfGAc9HC7XNfY64DeD%2BxPeHr7eJ%2FEzQMx2VHVPADjENX6mULvjGRWL6i%2BeBYvMsSEjmxql2ySaG02pPBa%2FXdyrSK0s9Eh479UFLQHXhZ2zWpbE6LB84hqcpxz46QxNjsxZJ3UvVaVSEkNG4qrk0hbWBR31xGs2a2JdxxPEwohU%2FpNjXMAQSI37KG0V%2Fud%2FDjkeoMIxcdk&X-Amz-Signature=e241b8ab41a424dc2d67287897e5e5803a51330259ad0af98d4c1e91f49c4709&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
