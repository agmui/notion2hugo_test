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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCK367KB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWN1C8Vg7FnOlQcF2Ugat6Utcu2OiMX3K0U%2BuoFsxArAiB3cpK%2FL%2FdO%2FIuuBRh81uNGvAuUap3Tai%2Ff9jt%2BFTg%2Fbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMT4CZGY21KaLXosS%2FKtwDxjL%2F1%2BbHno%2BMqHPIb08TmGyXRLFwJOtGYoDQvghOoqOkacPVpkAFog7NfY9DMWomd84x4ObOeYOY5lnZpaCbfsBnmsLx52oKubOnQiL2tNLSm2qvgJrq4pWu4gG%2BKKIwUCsSlmHrnO%2B3O1WgzWCnWOThfWdE40NdlM3i0Ro6c6WRMuS4ByWnMN9nVvaCodvbzEjr%2FK%2F4FAn0FazcqU80n676Atv4U0eZtoEFnzZGzH5KvTdvBUihyhlkHvVmOCHJO7w444beWyCBPSy3%2Blv1%2BeTf8wOGPKbSHNTJ2LI4oWK9HHMllTJJ2mhoO2hV49LDyyV9LQuRE9ZLyb1Lgp1frfZI7ekYgguTwMI9hgvy8fhrPr1j9cJDjn8cuawrmlMhK%2FpadGmQCxyclULyPj4IBx3m07Sspln0f6c2T1%2BhfIaVHxiY9UlYne%2FqnT%2F5zFVM%2Fy76lelcTBHTwzM1K95kHQQ30LgP3URQy4yHw1bLDo6PTli9Km0nlkbnsorXykrwoRAfAG%2Bu7ulaJOHfjsQtiYgRRuLwhuP6z9%2FbwzCR0qipZ2litZ9%2BMHp8Kp4BJmp6nYicyTMcm4fwoGMcNs9PhWetIVvLdjUx9PQIzG8uD3y%2BuG%2BaPbvk4t%2BpTwcw3f7MwQY6pgFMijBKWMseC9bXMF6OohZ9G1ErGnObBaSfVSDBxZDaTv0tbYB8EQueYfnuQ62M0mLFlwwxq1V6JXl0aCd5CYYTC2YJ%2BSl7kaj8v80knDHqyEvCu95tUV2z1n6IPICB7TvKuajL0r13Ry6psI%2FJ4mhvsPeYuc7Bl%2BDTQ5lmorbCHFIkboe49%2Bt15DRTER6kwE8yIvuatSjbKvrKOh1XwerueLTF51bg&X-Amz-Signature=6917687b4b98a686574190457fa55d3ed3a16351f195bf3ede620abbe88ff670&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCK367KB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEWN1C8Vg7FnOlQcF2Ugat6Utcu2OiMX3K0U%2BuoFsxArAiB3cpK%2FL%2FdO%2FIuuBRh81uNGvAuUap3Tai%2Ff9jt%2BFTg%2Fbyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMT4CZGY21KaLXosS%2FKtwDxjL%2F1%2BbHno%2BMqHPIb08TmGyXRLFwJOtGYoDQvghOoqOkacPVpkAFog7NfY9DMWomd84x4ObOeYOY5lnZpaCbfsBnmsLx52oKubOnQiL2tNLSm2qvgJrq4pWu4gG%2BKKIwUCsSlmHrnO%2B3O1WgzWCnWOThfWdE40NdlM3i0Ro6c6WRMuS4ByWnMN9nVvaCodvbzEjr%2FK%2F4FAn0FazcqU80n676Atv4U0eZtoEFnzZGzH5KvTdvBUihyhlkHvVmOCHJO7w444beWyCBPSy3%2Blv1%2BeTf8wOGPKbSHNTJ2LI4oWK9HHMllTJJ2mhoO2hV49LDyyV9LQuRE9ZLyb1Lgp1frfZI7ekYgguTwMI9hgvy8fhrPr1j9cJDjn8cuawrmlMhK%2FpadGmQCxyclULyPj4IBx3m07Sspln0f6c2T1%2BhfIaVHxiY9UlYne%2FqnT%2F5zFVM%2Fy76lelcTBHTwzM1K95kHQQ30LgP3URQy4yHw1bLDo6PTli9Km0nlkbnsorXykrwoRAfAG%2Bu7ulaJOHfjsQtiYgRRuLwhuP6z9%2FbwzCR0qipZ2litZ9%2BMHp8Kp4BJmp6nYicyTMcm4fwoGMcNs9PhWetIVvLdjUx9PQIzG8uD3y%2BuG%2BaPbvk4t%2BpTwcw3f7MwQY6pgFMijBKWMseC9bXMF6OohZ9G1ErGnObBaSfVSDBxZDaTv0tbYB8EQueYfnuQ62M0mLFlwwxq1V6JXl0aCd5CYYTC2YJ%2BSl7kaj8v80knDHqyEvCu95tUV2z1n6IPICB7TvKuajL0r13Ry6psI%2FJ4mhvsPeYuc7Bl%2BDTQ5lmorbCHFIkboe49%2Bt15DRTER6kwE8yIvuatSjbKvrKOh1XwerueLTF51bg&X-Amz-Signature=f06d0fd8ceafcad1758509b73edab715c2855b4c18f4590e0177cb197ead2ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
