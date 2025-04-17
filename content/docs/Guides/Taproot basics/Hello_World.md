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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSTV6Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAChR2oBBxzCQIuepHnfLuM6Ar88JGOsBI%2Fn99G6yuXAiBSem7KVbMhqDczi76z8dWdBFVcanKbW3l2sW9P7Br6OCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMei37KZOWxBgEGg9xKtwDdr13Pb8%2Fw%2FwcO%2FI6HMETCa5lUw5UxNeG1m9Keww8ZMHVvraW0%2BAnEe%2BGqcMWJcdwCzDtaUcA94qdYbN6%2BRwi1I1wFSSJHUyffem3db1jXPGEkZLjnKXAnrqNZB5dbVSmTOvXJXrn7PqBNnRCmhH%2B2zHTm9oVAcNM9IQZDeL0LbSsRqs0SkCj6UusRx4g2jpAgHLpcy6HLL69GMN19KVpIXGY7cwmV%2FXvz3Ip%2FtDgelDpLFIr0urO5dv2OenAzA5TFGzGdxrgq7Udv%2BsM7lyDE6Mxoj3iCfQ256Vy1UXCCU8HVGp6GKtlelZhhvATzoe8w4bFD6A9Pz0E1c%2BY7vJx9BUnYEnuG8PEKhikST71ESCuNOeq0%2FnThJoIei%2FbFB7xVrC7x2GNRPch2VfkwZeQEMiCauuB%2BZm11akrM4a7yz164MuJA8CteM29gvXyNtZbezIRs7oI5kBBoNl9NR9rEhFVdzPBtDqzGjpPoGz3WyT9SexC%2BO9U2C%2FXzkFlSt%2FqnWAVsYj0PdSPX3bhpzAfY8Vm1g1G0gGRDgbtzZNFZCXgDsNxvzKeXRjsC51ZucybUsfME2KYa9MaQIDww%2BssUdm0z1uzgkjywQmQuYqM1NYFKipqXRT49N9RfsIwy9GFwAY6pgHM5CYYRgA%2Ba0epWN09FiwUA7z1exwHU06ug5Ipcv59j%2FfyVfciJ4BjIMbLfXAD6el%2FQRjXvzrixHeT9vyC%2BX16v%2BPhK1CnqFQm84ebpA3eDQEdHQD6mvneUyFKGqZvnXSQsDoah%2FLeD6AyDEafrO33jSA7hQXvlH3KzIBQn6DYbaI2iIssKlkmiEndbB4bwDqvG6aZQ%2ByTvFcw%2Fitjuw7BrUwB98jq&X-Amz-Signature=8f25b20dfbc31138ffc87620ccfed661b1895b676c598bdacc0f701fc14610d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNSTV6Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAChR2oBBxzCQIuepHnfLuM6Ar88JGOsBI%2Fn99G6yuXAiBSem7KVbMhqDczi76z8dWdBFVcanKbW3l2sW9P7Br6OCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMei37KZOWxBgEGg9xKtwDdr13Pb8%2Fw%2FwcO%2FI6HMETCa5lUw5UxNeG1m9Keww8ZMHVvraW0%2BAnEe%2BGqcMWJcdwCzDtaUcA94qdYbN6%2BRwi1I1wFSSJHUyffem3db1jXPGEkZLjnKXAnrqNZB5dbVSmTOvXJXrn7PqBNnRCmhH%2B2zHTm9oVAcNM9IQZDeL0LbSsRqs0SkCj6UusRx4g2jpAgHLpcy6HLL69GMN19KVpIXGY7cwmV%2FXvz3Ip%2FtDgelDpLFIr0urO5dv2OenAzA5TFGzGdxrgq7Udv%2BsM7lyDE6Mxoj3iCfQ256Vy1UXCCU8HVGp6GKtlelZhhvATzoe8w4bFD6A9Pz0E1c%2BY7vJx9BUnYEnuG8PEKhikST71ESCuNOeq0%2FnThJoIei%2FbFB7xVrC7x2GNRPch2VfkwZeQEMiCauuB%2BZm11akrM4a7yz164MuJA8CteM29gvXyNtZbezIRs7oI5kBBoNl9NR9rEhFVdzPBtDqzGjpPoGz3WyT9SexC%2BO9U2C%2FXzkFlSt%2FqnWAVsYj0PdSPX3bhpzAfY8Vm1g1G0gGRDgbtzZNFZCXgDsNxvzKeXRjsC51ZucybUsfME2KYa9MaQIDww%2BssUdm0z1uzgkjywQmQuYqM1NYFKipqXRT49N9RfsIwy9GFwAY6pgHM5CYYRgA%2Ba0epWN09FiwUA7z1exwHU06ug5Ipcv59j%2FfyVfciJ4BjIMbLfXAD6el%2FQRjXvzrixHeT9vyC%2BX16v%2BPhK1CnqFQm84ebpA3eDQEdHQD6mvneUyFKGqZvnXSQsDoah%2FLeD6AyDEafrO33jSA7hQXvlH3KzIBQn6DYbaI2iIssKlkmiEndbB4bwDqvG6aZQ%2ByTvFcw%2Fitjuw7BrUwB98jq&X-Amz-Signature=530ca9d43184feebb80c17fd42c8634c672c6c2df2b211d5122b10c2b712471e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
