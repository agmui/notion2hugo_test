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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUAJTNH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrPrwMX307DeC7aYEWX9u%2BcqfTYh%2Fjj15qMYpyYGxNGAIgcfbf6%2F4LP%2Bilk%2FhdHDVSzuJ%2B%2BfJSr8Ik3xoEa%2BCQbSgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0lpcKC5URw7AK0DCrcA%2BD6VQ95LkZB6diamMM1c8DlJzaxncpPyqEVriSgGtKnzR%2BcTK%2FNCEl20%2FcPQ%2FlXRRAPmphMAf3t1FEsos6O7H6u%2Fjb3Pdlgu3g%2ByWsMuJ%2FJS5YiwMOMH5jtYbzcbpM%2FleepZkT%2F%2FG3wA2xxD08foZebUau5bi%2BuxWwBa28Q4fP8GNa0iLdUEGV62wjU6fMYQ7ILXsnXcQAgnU4s0I6rULVWPLewNKB%2BJCcYjOhst9vNioLHg5fqegajosL0lv7gxOMa6W8kM%2ByFOWXMPpktBaUnTzUH6js1qqqnV52q1YKMmdtq4oWAPxThRofCagYgiJ8%2FL3i2Q66rSkXf7jxQ5iYHiUWwt7H5RhynW7DP2O9ursbs%2BtYWFgVqIVWiwBVl17NV%2FsBscAmPaUTzoRENbXCepyqkzZZPcdSuVIIX0xH4XJNAa8bXn9IB17HesTitIvsE4zVYmLiIk6oNCW5X65q6%2FoT3DXB33lL7pBCMFoQIY%2FT9Iq1OdW3Sj8%2BbPQjNTEwBT0WAQetHWfEgYjTYUS%2F1JhU4rVCf0SuejxEbEc21qGky20qSjJKelIrJKaKA6rDas3KoDkIcE%2Fd7Crp%2FoekicaHpCRXokdvWN1ICTnjdzDS0ter8Ra6RK7adMPTn370GOqUBzuKN%2FawrRKNY3U0UHyr4mt9hXYbQqzI1w8%2FhHkE3MNTLeu8ENx2fk%2F2bsWnMA1UqYTeBKZ2brjbwcmJNc5xefAoBZq%2FHCxxTDPfry%2FC5EUuvElu6yqOSgPoXzbA5UZiZg98PFql9j1jKVtzKLtLiuXSutyJ1P3KC7YDMy1uPSCeyqQBMmLXV8KIIV2FDBfW7ClvKZGBRsTqFK14ia8R%2F1deVrn7o&X-Amz-Signature=a7bb429b9ec690db496383d8063a8046af5d470d0caceca7be4c465929075672&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUAJTNH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrPrwMX307DeC7aYEWX9u%2BcqfTYh%2Fjj15qMYpyYGxNGAIgcfbf6%2F4LP%2Bilk%2FhdHDVSzuJ%2B%2BfJSr8Ik3xoEa%2BCQbSgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0lpcKC5URw7AK0DCrcA%2BD6VQ95LkZB6diamMM1c8DlJzaxncpPyqEVriSgGtKnzR%2BcTK%2FNCEl20%2FcPQ%2FlXRRAPmphMAf3t1FEsos6O7H6u%2Fjb3Pdlgu3g%2ByWsMuJ%2FJS5YiwMOMH5jtYbzcbpM%2FleepZkT%2F%2FG3wA2xxD08foZebUau5bi%2BuxWwBa28Q4fP8GNa0iLdUEGV62wjU6fMYQ7ILXsnXcQAgnU4s0I6rULVWPLewNKB%2BJCcYjOhst9vNioLHg5fqegajosL0lv7gxOMa6W8kM%2ByFOWXMPpktBaUnTzUH6js1qqqnV52q1YKMmdtq4oWAPxThRofCagYgiJ8%2FL3i2Q66rSkXf7jxQ5iYHiUWwt7H5RhynW7DP2O9ursbs%2BtYWFgVqIVWiwBVl17NV%2FsBscAmPaUTzoRENbXCepyqkzZZPcdSuVIIX0xH4XJNAa8bXn9IB17HesTitIvsE4zVYmLiIk6oNCW5X65q6%2FoT3DXB33lL7pBCMFoQIY%2FT9Iq1OdW3Sj8%2BbPQjNTEwBT0WAQetHWfEgYjTYUS%2F1JhU4rVCf0SuejxEbEc21qGky20qSjJKelIrJKaKA6rDas3KoDkIcE%2Fd7Crp%2FoekicaHpCRXokdvWN1ICTnjdzDS0ter8Ra6RK7adMPTn370GOqUBzuKN%2FawrRKNY3U0UHyr4mt9hXYbQqzI1w8%2FhHkE3MNTLeu8ENx2fk%2F2bsWnMA1UqYTeBKZ2brjbwcmJNc5xefAoBZq%2FHCxxTDPfry%2FC5EUuvElu6yqOSgPoXzbA5UZiZg98PFql9j1jKVtzKLtLiuXSutyJ1P3KC7YDMy1uPSCeyqQBMmLXV8KIIV2FDBfW7ClvKZGBRsTqFK14ia8R%2F1deVrn7o&X-Amz-Signature=4c7586203f72e02ca71db80fa7ddd30bfab077bbd838cd51f5d56ebcdc6e8037&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
