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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RXNDP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH5b4dZdqJMJEi2LuDnlxUORAIBxv3OQAzviGisMsbl1AiAye0xPBN4AKj2FDg7mnm4K9ClUr%2FBvy58yP2jTFcraxSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGyN4Y8g6uLvYIcrIKtwDCeFguaiPY4j2jgvyzM4%2F4yM40N4V%2B9VAX%2BZOTcsuEQjIKIlPzC3T1v5SRcszcKPqSSxXvA3n%2BNcJows79JW%2FGrU2hR4EusxcHwNpe64%2B6CLeng74QTyfl7PwJAP5ADVpc00pVOmuGK%2BE%2BuGaarPlhhg0ShqXyShttz9YLgy%2BwWqWNc9HlSrpXXbIKf%2FqIeDxwysgKPcMzGavrDPqDe2llHyT061Oc6UnoSYChnRfgN2d44%2BP7Tlq7Tm1I4Uobo8bZf17QJpF263bNyhBNqehURcHmAZj7avjSkF6g5Ih%2FyovtPa9BClbX8lnPVUKmJEEWShPw64qc%2FX1uJPU1fcd389mROJw%2FFRlMu3lDAsnZacXvJPZ4Yejjd0KrRt5vmlU5kx2R08f8ajcu2sOuzGzbjhsXfl%2FlsoStwudibEWxEx%2BMYXdR8r%2BjQW%2F1VUT44jgkEgpnPGnwr6YEP0pdqVHtAAi%2FSYFXhiWebLSX8I2SCZi9P5i3HAqkbNz9IbESClf2fuOtdqRQB7mo8Qw5Z9xnl4nqgJJKRUJkt3ot%2FwLv7tBPHAREPhVJ%2BYXpVC49VrL%2B9tnKps5pZmsxBS9tNL9Zx4u8N7Ny7euxN1yFZk4kcUZwuf2I%2BKyYMRYZ7wwiZLUvQY6pgESI8t4xI1stNag3h4Pw5%2BpKLgIkAQ2w8J5AdbNa%2BoIkT4hAWMDhP2b2WaUmRVlDn4AYXSHnjQx7%2FAH%2BOoX4mdJHICjmXHy47%2Br5wiO9%2BlmbgMlGQcpoqGlfUjXf8Md1SRG3zO3w8WzLID%2B9YSUdiPYo473vsX2g8twbClBwHKfjORNpod2LZ3%2Bimw9OqEIRcgkpu2tKDquvKAAiSXrktWXzekLTKqp&X-Amz-Signature=d6913552ff3fdd235abd636f12c60c21dc2d1c4bf9e3bf1ca469af1b95d28dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35RXNDP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH5b4dZdqJMJEi2LuDnlxUORAIBxv3OQAzviGisMsbl1AiAye0xPBN4AKj2FDg7mnm4K9ClUr%2FBvy58yP2jTFcraxSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGyN4Y8g6uLvYIcrIKtwDCeFguaiPY4j2jgvyzM4%2F4yM40N4V%2B9VAX%2BZOTcsuEQjIKIlPzC3T1v5SRcszcKPqSSxXvA3n%2BNcJows79JW%2FGrU2hR4EusxcHwNpe64%2B6CLeng74QTyfl7PwJAP5ADVpc00pVOmuGK%2BE%2BuGaarPlhhg0ShqXyShttz9YLgy%2BwWqWNc9HlSrpXXbIKf%2FqIeDxwysgKPcMzGavrDPqDe2llHyT061Oc6UnoSYChnRfgN2d44%2BP7Tlq7Tm1I4Uobo8bZf17QJpF263bNyhBNqehURcHmAZj7avjSkF6g5Ih%2FyovtPa9BClbX8lnPVUKmJEEWShPw64qc%2FX1uJPU1fcd389mROJw%2FFRlMu3lDAsnZacXvJPZ4Yejjd0KrRt5vmlU5kx2R08f8ajcu2sOuzGzbjhsXfl%2FlsoStwudibEWxEx%2BMYXdR8r%2BjQW%2F1VUT44jgkEgpnPGnwr6YEP0pdqVHtAAi%2FSYFXhiWebLSX8I2SCZi9P5i3HAqkbNz9IbESClf2fuOtdqRQB7mo8Qw5Z9xnl4nqgJJKRUJkt3ot%2FwLv7tBPHAREPhVJ%2BYXpVC49VrL%2B9tnKps5pZmsxBS9tNL9Zx4u8N7Ny7euxN1yFZk4kcUZwuf2I%2BKyYMRYZ7wwiZLUvQY6pgESI8t4xI1stNag3h4Pw5%2BpKLgIkAQ2w8J5AdbNa%2BoIkT4hAWMDhP2b2WaUmRVlDn4AYXSHnjQx7%2FAH%2BOoX4mdJHICjmXHy47%2Br5wiO9%2BlmbgMlGQcpoqGlfUjXf8Md1SRG3zO3w8WzLID%2B9YSUdiPYo473vsX2g8twbClBwHKfjORNpod2LZ3%2Bimw9OqEIRcgkpu2tKDquvKAAiSXrktWXzekLTKqp&X-Amz-Signature=8c17893b7e1984a3a6045c9aa20616c1fc8676fc1c63fbcdf196d91afbb2e4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
