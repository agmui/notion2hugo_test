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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW6BQVT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG24LuTLWnrngSZluFbfmk0ew6ME6RWRO8HYJWtqjhjAiEAseMnnf0eyufgRBBWXaT2Ig94jrsotSFiAP5c4MjcYBAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDG1qXrk02z6slSkbWircA%2Fec22ivn9mtMx%2Bm6ayPjA0GqQ%2FLhfhq6JuL7MIZPUMp6QI0i1tzEjroMjDOwsnbOwlDS3%2FyAw7jN%2BgouYXHnwh90%2Bk85CuiDxh2LXFm1GAUTiJHkF6YjbgXQ1SRjXYSMp0Ipy%2FWaFHQqKwsqISD2ie8Fpd4vetyYm1Swfvt0hh76bXpSXh8DUbcpV5B29djwvNm%2FwIY9mbaOFnDt688ReWL3y0EA3mSkLWdaQHQnX3QIFDTfv59TzrxA%2BGSaFL9d6hRJreJ30i7FXw%2FQcGx%2BdD2l%2FVx5%2FZAVWxLJDQTEITuinpixvImrp%2BgQoAuqCpMycrGzNmQom9oJiZImytzuDknLkkcv00ZiDdHusT500iOvXt21S4z6xeg75AAfihc0Pj0QCd1Cfz2YbPzzUBcCNg3V%2BBIJM54xU1miEE7zaqFN4yefKzsY%2Fvd9SatJXarD%2F18T71%2Bt5kVaNBZjmKVMCodsd3VYKn%2Fv2y7Sw%2BrP1uZ%2Bt1GMjpulKD%2FYRPW9HvpDV7juqHcwRPWV%2Fqmx6WACnN4Jr%2F9enHGWDlSlwNr0igiWqVMCcU4w0RrPSyrRoJzXXCDJmaqOYTFuhpRI96J%2Fg%2FeDGC7rrGAWupBepwI1E71ohES7a2Wbue5a3y%2BMNWFxb8GOqUBmrwvkf9LV%2FVce4Rz3%2FtO6lU0D%2BTVnRbvcv8lKDrAcypVXzk3LekWRbw0OkG3g%2B4%2F4idEeul7xFmALqpTctNW3%2BM5R1z2yJe%2FOuwwxwYT89Kp2GF%2FW49A2Eox0II99fthkuFD4E3NROLAiWnhK9f6sXCssq9tpbfnZFaRP8AxGgyqOSlXZU9W60tZKKKgpr9xRgaesbyc0xEbg0a6LYh1pyo682XT&X-Amz-Signature=358e004b2cab1f259bec290bf6ccab17a1f2050711e2c7ef973c0acb6e1b17d9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DW6BQVT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG24LuTLWnrngSZluFbfmk0ew6ME6RWRO8HYJWtqjhjAiEAseMnnf0eyufgRBBWXaT2Ig94jrsotSFiAP5c4MjcYBAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDG1qXrk02z6slSkbWircA%2Fec22ivn9mtMx%2Bm6ayPjA0GqQ%2FLhfhq6JuL7MIZPUMp6QI0i1tzEjroMjDOwsnbOwlDS3%2FyAw7jN%2BgouYXHnwh90%2Bk85CuiDxh2LXFm1GAUTiJHkF6YjbgXQ1SRjXYSMp0Ipy%2FWaFHQqKwsqISD2ie8Fpd4vetyYm1Swfvt0hh76bXpSXh8DUbcpV5B29djwvNm%2FwIY9mbaOFnDt688ReWL3y0EA3mSkLWdaQHQnX3QIFDTfv59TzrxA%2BGSaFL9d6hRJreJ30i7FXw%2FQcGx%2BdD2l%2FVx5%2FZAVWxLJDQTEITuinpixvImrp%2BgQoAuqCpMycrGzNmQom9oJiZImytzuDknLkkcv00ZiDdHusT500iOvXt21S4z6xeg75AAfihc0Pj0QCd1Cfz2YbPzzUBcCNg3V%2BBIJM54xU1miEE7zaqFN4yefKzsY%2Fvd9SatJXarD%2F18T71%2Bt5kVaNBZjmKVMCodsd3VYKn%2Fv2y7Sw%2BrP1uZ%2Bt1GMjpulKD%2FYRPW9HvpDV7juqHcwRPWV%2Fqmx6WACnN4Jr%2F9enHGWDlSlwNr0igiWqVMCcU4w0RrPSyrRoJzXXCDJmaqOYTFuhpRI96J%2Fg%2FeDGC7rrGAWupBepwI1E71ohES7a2Wbue5a3y%2BMNWFxb8GOqUBmrwvkf9LV%2FVce4Rz3%2FtO6lU0D%2BTVnRbvcv8lKDrAcypVXzk3LekWRbw0OkG3g%2B4%2F4idEeul7xFmALqpTctNW3%2BM5R1z2yJe%2FOuwwxwYT89Kp2GF%2FW49A2Eox0II99fthkuFD4E3NROLAiWnhK9f6sXCssq9tpbfnZFaRP8AxGgyqOSlXZU9W60tZKKKgpr9xRgaesbyc0xEbg0a6LYh1pyo682XT&X-Amz-Signature=2720b58f3dcfd0a7aa818fd865c1b4ca1b730ce1ac80950808215e6f2f80481e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
