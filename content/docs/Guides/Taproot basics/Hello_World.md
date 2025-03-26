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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEVYWXW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BA0iHdVN2zdoNTsZzmv28B5orU1s0v8z%2FOtMCuAb4tAiAPqoyNE%2BP2IxDwrk2EPOyRMI5CxZotufIwlOj%2FhQPfDSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOFckc8jLzO7gPmumKtwDPQBkZZyGYbm6kSHzoIpsOqLzDEh8EfigRI8hn0nDvABAEdiEabLFPxy7PCsJvoY9l6k%2BYzFPHu4gzZa%2FaYkEfVTtMUEsW6zoD0vSvnNRkNEdwlDU%2F4iS9PnnDIG%2FWuT2zb95Hp2qJvrq9ThexIUiIVi6HbO2aJCLv%2BmGOvsiLxrzhRbnKMcn0x3LmKkd1qsA4OJ%2F7IAHSvlQNp1xRL0a3yZMd9lV%2FL2dBjVGVftShtCxoQsZ%2BJOMvODIvjIrCTtYujTIDNzcj4rgCjy%2FhVxqYwZgBjzKt2CmxY1fFgRUEnNzyygSjhtKdOb6VV8lXVKr%2Bb2quLdlcyHLX1cjHxEaLTMbDHepfmeBBWojL9kOLMAOgbdr9LaFNWXRZL3dwZmSSCCJ1D1TWpt2Zjauz%2F%2FxXyrdnElk%2F3u6RmeCspuFGSzEdRP%2F59YJLcdOtS%2FBaqkdHtDdK2hTwtdWiZLSoZ%2BGZKgGFAoQ0BmapGJIOamDumV2oyERZk9evX8ShTT%2BDEE5YLfLs907z4RDma3J3%2F7TRDDo29nx9h1y%2BvaN5m8GKUqsGMO7Hot9zMiWWIfEA6i%2F5yLYx6KZbtDHSRUf1uzEAWnJj0%2BO3GmtBTlhUhf2mRoDNz6N4sP7QMT5pVUw2qaPvwY6pgFJqkdrddFYku2b4l6CtNrZRbXGfZQmldM8Pg1OLxQsu79KYjyFT7PDlQy5K9ffQFDF4cngG468w9OlXgAuvtDS5cGjwERWD3X1oXky%2FxxEI59UbGParsLp84pA5g%2FwK6yobXT23vKF5AfOZmGT1TIRSo1UD8VA%2Bya%2B7h1ze%2BR8YLbkmSv54b%2FuYhYMqkWY4C2nflc%2FBpzAVeS3zaS5535wBFzkmbCM&X-Amz-Signature=846cb44c23b063ee5ace70d663c0a3df8765425c3f9b63fde9d34bff98c42f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKEVYWXW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BA0iHdVN2zdoNTsZzmv28B5orU1s0v8z%2FOtMCuAb4tAiAPqoyNE%2BP2IxDwrk2EPOyRMI5CxZotufIwlOj%2FhQPfDSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMOFckc8jLzO7gPmumKtwDPQBkZZyGYbm6kSHzoIpsOqLzDEh8EfigRI8hn0nDvABAEdiEabLFPxy7PCsJvoY9l6k%2BYzFPHu4gzZa%2FaYkEfVTtMUEsW6zoD0vSvnNRkNEdwlDU%2F4iS9PnnDIG%2FWuT2zb95Hp2qJvrq9ThexIUiIVi6HbO2aJCLv%2BmGOvsiLxrzhRbnKMcn0x3LmKkd1qsA4OJ%2F7IAHSvlQNp1xRL0a3yZMd9lV%2FL2dBjVGVftShtCxoQsZ%2BJOMvODIvjIrCTtYujTIDNzcj4rgCjy%2FhVxqYwZgBjzKt2CmxY1fFgRUEnNzyygSjhtKdOb6VV8lXVKr%2Bb2quLdlcyHLX1cjHxEaLTMbDHepfmeBBWojL9kOLMAOgbdr9LaFNWXRZL3dwZmSSCCJ1D1TWpt2Zjauz%2F%2FxXyrdnElk%2F3u6RmeCspuFGSzEdRP%2F59YJLcdOtS%2FBaqkdHtDdK2hTwtdWiZLSoZ%2BGZKgGFAoQ0BmapGJIOamDumV2oyERZk9evX8ShTT%2BDEE5YLfLs907z4RDma3J3%2F7TRDDo29nx9h1y%2BvaN5m8GKUqsGMO7Hot9zMiWWIfEA6i%2F5yLYx6KZbtDHSRUf1uzEAWnJj0%2BO3GmtBTlhUhf2mRoDNz6N4sP7QMT5pVUw2qaPvwY6pgFJqkdrddFYku2b4l6CtNrZRbXGfZQmldM8Pg1OLxQsu79KYjyFT7PDlQy5K9ffQFDF4cngG468w9OlXgAuvtDS5cGjwERWD3X1oXky%2FxxEI59UbGParsLp84pA5g%2FwK6yobXT23vKF5AfOZmGT1TIRSo1UD8VA%2Bya%2B7h1ze%2BR8YLbkmSv54b%2FuYhYMqkWY4C2nflc%2FBpzAVeS3zaS5535wBFzkmbCM&X-Amz-Signature=9fd3ac535f28c4d75636c9e5fb1ab762d8964ed8cf18b4274e036a73c11efe24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
