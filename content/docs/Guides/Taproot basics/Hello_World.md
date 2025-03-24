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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSLJX67%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUB%2BTcHb1BRBS6kgirsCeb33dvQXh42glciGqi7jg4GgIgAeLQJXWMMAoiTpqJw4EyegnJhjNhN3WfSbFXeDZ95k0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIqJVqXeWnEmaO%2FHyrcA6nPZgovut5HrQjudf%2F04AmHp8sDgh1kirLzQdnxbKOif2dnaqjtCuvxK08rkEC%2Bip8qc3XzAHSEygoeZDVFVnrIBF8zK0JfxGfgoUOy7bhD%2FswBVbZvwLI1G3Vmlz%2B3A1mAX7LDMcv%2B2ge4eHVKC9vIZmzGsA3zRNwf1%2BaW8JclaqJRt4%2Bjmx%2BF%2BkgMxlBQwwIriUI7yAocT%2Fq6m0bPAelWyWssRXsJcwJOoyprX0NtXA4OgvQ3kRbH%2Bkk%2BbyXmK4aNQI2QieFGAo06Wh1sJjX82LkrIIFGH10PR76y5sqHrbK%2FVKUaMtL1wEk86cfQmiOLZzgfC%2F38AeihNLp1DOz2mn3AMAZxg5HDKuihbMOnUN8Y4qMfSGdsrdP%2FUkFmZ5fU5tls7tL40eCd%2FgoegWZglB8SSeCnz51KvbP7ihvpjIS0GfQne8pGrtyRXZtvr8cX9DAIjfRvPfEQZOFqhdZvOzEgQwYKFJ%2BZE%2F9WnszRU%2Fl4qQOxydW%2Fl8nv4SijGxSKia%2F35knjmz8GvMBo7pzwFC8aY4uKPhEKYhJauDi%2BjX6zxiWfFUD4KGEf3qNqB0Is4W1IgzBCINcJxb1Tkg8wUHFZZhkSCP87whJFUY9SbOJBnD%2B4H13s58aGMN3EhL8GOqUB7hPm9wLr8Rt1Afz07vLdRY9q0S5vym2%2BJT88IEhzgLOhDeL7qRq%2FmWz7F6%2Bj2nt24VuU1MFE8OlUaxDRp%2BlJqlLBJFL75g3tAq2L%2BTwVM6wdVnQmsp5umsKxpWcbPndwo2o7aRYLpxYL2hjQEox8YJuRGsERMu3NPSbWsbsqrFAKIbsu4QdYDPE4CU844gLvlZ2Z%2FGxMWwjfrUmpUFiNfgEDalvt&X-Amz-Signature=825336223c12e4f97d54f32c8ad62123ddd1f87966d77c083b3cede73d66fa99&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCSLJX67%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUB%2BTcHb1BRBS6kgirsCeb33dvQXh42glciGqi7jg4GgIgAeLQJXWMMAoiTpqJw4EyegnJhjNhN3WfSbFXeDZ95k0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIqJVqXeWnEmaO%2FHyrcA6nPZgovut5HrQjudf%2F04AmHp8sDgh1kirLzQdnxbKOif2dnaqjtCuvxK08rkEC%2Bip8qc3XzAHSEygoeZDVFVnrIBF8zK0JfxGfgoUOy7bhD%2FswBVbZvwLI1G3Vmlz%2B3A1mAX7LDMcv%2B2ge4eHVKC9vIZmzGsA3zRNwf1%2BaW8JclaqJRt4%2Bjmx%2BF%2BkgMxlBQwwIriUI7yAocT%2Fq6m0bPAelWyWssRXsJcwJOoyprX0NtXA4OgvQ3kRbH%2Bkk%2BbyXmK4aNQI2QieFGAo06Wh1sJjX82LkrIIFGH10PR76y5sqHrbK%2FVKUaMtL1wEk86cfQmiOLZzgfC%2F38AeihNLp1DOz2mn3AMAZxg5HDKuihbMOnUN8Y4qMfSGdsrdP%2FUkFmZ5fU5tls7tL40eCd%2FgoegWZglB8SSeCnz51KvbP7ihvpjIS0GfQne8pGrtyRXZtvr8cX9DAIjfRvPfEQZOFqhdZvOzEgQwYKFJ%2BZE%2F9WnszRU%2Fl4qQOxydW%2Fl8nv4SijGxSKia%2F35knjmz8GvMBo7pzwFC8aY4uKPhEKYhJauDi%2BjX6zxiWfFUD4KGEf3qNqB0Is4W1IgzBCINcJxb1Tkg8wUHFZZhkSCP87whJFUY9SbOJBnD%2B4H13s58aGMN3EhL8GOqUB7hPm9wLr8Rt1Afz07vLdRY9q0S5vym2%2BJT88IEhzgLOhDeL7qRq%2FmWz7F6%2Bj2nt24VuU1MFE8OlUaxDRp%2BlJqlLBJFL75g3tAq2L%2BTwVM6wdVnQmsp5umsKxpWcbPndwo2o7aRYLpxYL2hjQEox8YJuRGsERMu3NPSbWsbsqrFAKIbsu4QdYDPE4CU844gLvlZ2Z%2FGxMWwjfrUmpUFiNfgEDalvt&X-Amz-Signature=deff0b6227ccec09e12f3749ce4a77069b68ab6e82634c445d327fd425f7a76e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
