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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXKHH6Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbdaY1bCg4lGWnJ5ahbxHsQjEwuqtqehdRW0VsJOBqTAiEA0s4DSSQ08%2BMleVJWhGSF4MC%2BR6WYDPNkA3eY2LUouHkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDITd%2FprYGrjVQSV1bSrcAx%2BMT31ycG3UcP33HCxaGnRC8nUTXo6C4yn%2FN1%2FhjhxTdw27SLviy0MO6wHyZ0oEYBlXUhEWYLN7oh4VWB3Erf0E7IjSouQl0DjC%2BWfwV%2FhDmmJB006DAyrkHvDkhn0FuhJpOv4JI2jOO94m189ikldkjpdfkqanBcHFhXJy%2Bknr6m%2BdxMhb%2BlwgZaFL0wnRT3mMKogiiRWNhP6GEWwEpCI%2F%2FjDj3ERfPmZDnXcTaOUeM3U8RweAfykSmBJG60JuAiaM4bXqeShSUyek17D0A1U94ljXBsHydkuAK34evhQZW%2B3geaXN9HS6EjMUduGIrNUhG2QbT1Rb3o05MBC5%2BDun8FSDjG0GZ8LL4mJuvvyAyUqLKyW68kW9hvOnlMNCV1sytQ2r3vxWfYXzRJffE%2BExcoXe8qYnYuXHeqAkx4TWi05%2BNqmzWSCJrNsV8Jm9wZ%2F0NzxZ8dfAeV6xaTvxxfRbPonrl7%2BSVJf4MFRsDcDDbN7TdxolqjXvL6%2BhYdVPfmg%2BYKle1DOWWDgvFGWx79gSLkIgMy3YysIHtkynRmb8G%2F10GBV8TZ55%2F%2FtZO9FwEifblusBg%2FQAw2uK7%2FiHYoDX%2FYEp8oNfxuN939hDNTmwjTADZBGq1lvSA0PoMISBkcIGOqUBy54rB0FkoMM3rglc4LTOe8f5IaVJ0u8I%2BuhefhXGwERiHcg3FIafibEa3%2BWqlz9ge9DyHGH8CSPQLldqQhunOCh7dpjo9HYDE2QQtCREEPv6fwd%2FNR1TjL%2B1WjlJNNP0nvsz8xiiBNY1xvArd2LrjrSoaY4WKTcDcoDJmbPa%2B%2Bvnaowz%2Fh%2BySz4N3yA7cYfhY4qU%2BN5w8DmUBq0rwRP5NnxDDCmj&X-Amz-Signature=e0098d1e90f6baa1af73ad5e5a4a766dc2e9a235e61fdbd1ba2b1580233f4cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXKHH6Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbdaY1bCg4lGWnJ5ahbxHsQjEwuqtqehdRW0VsJOBqTAiEA0s4DSSQ08%2BMleVJWhGSF4MC%2BR6WYDPNkA3eY2LUouHkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDITd%2FprYGrjVQSV1bSrcAx%2BMT31ycG3UcP33HCxaGnRC8nUTXo6C4yn%2FN1%2FhjhxTdw27SLviy0MO6wHyZ0oEYBlXUhEWYLN7oh4VWB3Erf0E7IjSouQl0DjC%2BWfwV%2FhDmmJB006DAyrkHvDkhn0FuhJpOv4JI2jOO94m189ikldkjpdfkqanBcHFhXJy%2Bknr6m%2BdxMhb%2BlwgZaFL0wnRT3mMKogiiRWNhP6GEWwEpCI%2F%2FjDj3ERfPmZDnXcTaOUeM3U8RweAfykSmBJG60JuAiaM4bXqeShSUyek17D0A1U94ljXBsHydkuAK34evhQZW%2B3geaXN9HS6EjMUduGIrNUhG2QbT1Rb3o05MBC5%2BDun8FSDjG0GZ8LL4mJuvvyAyUqLKyW68kW9hvOnlMNCV1sytQ2r3vxWfYXzRJffE%2BExcoXe8qYnYuXHeqAkx4TWi05%2BNqmzWSCJrNsV8Jm9wZ%2F0NzxZ8dfAeV6xaTvxxfRbPonrl7%2BSVJf4MFRsDcDDbN7TdxolqjXvL6%2BhYdVPfmg%2BYKle1DOWWDgvFGWx79gSLkIgMy3YysIHtkynRmb8G%2F10GBV8TZ55%2F%2FtZO9FwEifblusBg%2FQAw2uK7%2FiHYoDX%2FYEp8oNfxuN939hDNTmwjTADZBGq1lvSA0PoMISBkcIGOqUBy54rB0FkoMM3rglc4LTOe8f5IaVJ0u8I%2BuhefhXGwERiHcg3FIafibEa3%2BWqlz9ge9DyHGH8CSPQLldqQhunOCh7dpjo9HYDE2QQtCREEPv6fwd%2FNR1TjL%2B1WjlJNNP0nvsz8xiiBNY1xvArd2LrjrSoaY4WKTcDcoDJmbPa%2B%2Bvnaowz%2Fh%2BySz4N3yA7cYfhY4qU%2BN5w8DmUBq0rwRP5NnxDDCmj&X-Amz-Signature=ef99cf47f7b1ec8bb67ce99d3f85a37b5c99163cb294e9de9d153f43223c68d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
