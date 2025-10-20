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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3P3PL5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBGWzo7L8tyJyfsK7tZWtDuuiOnZpowDC2oHEf6ctVmsAiEApwFXOEOVtv0LfvRG%2BWzww5ZpSyznqDZLDEqI1TbGPZgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS8NhxCvfhH5%2FZL9CrcA8%2BtblifA9MlAiyQiDzfyqOLMuhii5qAp2oAZOEPb3s9p0tLgya7isTIzzqv1IAwzqEArWI90SGiOv0VPSSocrrZUZ7bq2jbetacq%2FF54F3RM0M5dicvC6hJ4MxpUr%2Bum28m2G8WdR4eE%2Frg47h%2BnDt2DwS%2BXZCo9S4vsM7QkD9rYLua1hgzIkBI9oPLql2MhvS7i%2BqWBaLUfBHMseF%2B9bN5ZPGT3KQaFeVtWnLhGWe%2F58ALyftOpj0F7zd8q5Lf2ZioVI0cLuL01%2FSEVPOnBYjLUCuBnjFnAsCqpXxL4sbHrj%2BfqF2Rbox0c6DGOYjtOFTNPNKg%2BXpME9%2FQdWpLS3NStc5BXryBcj8%2FSAaBenXvUpOj21jhUCUiviYG0UBrO7TD5LBQVNaCdeg2rxntWZXxZx6VzzpaaV%2FZxGhXtxMmvWqGzQt1hM4BsrN9K2neGLJ%2FSnRSSqeSb%2BmJqyUh10t%2BA3JSmnWgkwjzEkxqqq771SYxM12aIYzjSwTMJUbpdnc8xIA0KCT8DRFXzXkLe4TqkCTql0sgSSSm0uyBdfJ%2BUWwdGpOMFM%2BPUPYNeOgC3eo3nw6pXZXK9eh0U6SNqmTh7DY6ab2%2Bd5WR%2BSotUy45iNCKsvPdXgxWeDRgMIOO1scGOqUB9bcqDLDqfmVELGXj478wUZkEzOhhQ6Txdf%2BuGGb0wjUPtTzMRLbRVe%2BAK3DlSyNDqRJ7Nwjpx1EFc6GN6LiH1MNCGtnv3pF0MiBlPTbHT7mzb71vMwFayfMnHURBdrqGc8EeFfgJEHKC1Rp9%2BtyYjkvptakDJTFgdKeyMi9NxeszcSIVyG2xn7rsA%2F6QGkTCbV5Uc6eOcJ6T0qUUt%2FfICrDSq4Aj&X-Amz-Signature=e887d2671b7b4cc8a00b0519ac27426f70858a3ab8784f902a35e2488b2c1b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3P3PL5%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIBGWzo7L8tyJyfsK7tZWtDuuiOnZpowDC2oHEf6ctVmsAiEApwFXOEOVtv0LfvRG%2BWzww5ZpSyznqDZLDEqI1TbGPZgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS8NhxCvfhH5%2FZL9CrcA8%2BtblifA9MlAiyQiDzfyqOLMuhii5qAp2oAZOEPb3s9p0tLgya7isTIzzqv1IAwzqEArWI90SGiOv0VPSSocrrZUZ7bq2jbetacq%2FF54F3RM0M5dicvC6hJ4MxpUr%2Bum28m2G8WdR4eE%2Frg47h%2BnDt2DwS%2BXZCo9S4vsM7QkD9rYLua1hgzIkBI9oPLql2MhvS7i%2BqWBaLUfBHMseF%2B9bN5ZPGT3KQaFeVtWnLhGWe%2F58ALyftOpj0F7zd8q5Lf2ZioVI0cLuL01%2FSEVPOnBYjLUCuBnjFnAsCqpXxL4sbHrj%2BfqF2Rbox0c6DGOYjtOFTNPNKg%2BXpME9%2FQdWpLS3NStc5BXryBcj8%2FSAaBenXvUpOj21jhUCUiviYG0UBrO7TD5LBQVNaCdeg2rxntWZXxZx6VzzpaaV%2FZxGhXtxMmvWqGzQt1hM4BsrN9K2neGLJ%2FSnRSSqeSb%2BmJqyUh10t%2BA3JSmnWgkwjzEkxqqq771SYxM12aIYzjSwTMJUbpdnc8xIA0KCT8DRFXzXkLe4TqkCTql0sgSSSm0uyBdfJ%2BUWwdGpOMFM%2BPUPYNeOgC3eo3nw6pXZXK9eh0U6SNqmTh7DY6ab2%2Bd5WR%2BSotUy45iNCKsvPdXgxWeDRgMIOO1scGOqUB9bcqDLDqfmVELGXj478wUZkEzOhhQ6Txdf%2BuGGb0wjUPtTzMRLbRVe%2BAK3DlSyNDqRJ7Nwjpx1EFc6GN6LiH1MNCGtnv3pF0MiBlPTbHT7mzb71vMwFayfMnHURBdrqGc8EeFfgJEHKC1Rp9%2BtyYjkvptakDJTFgdKeyMi9NxeszcSIVyG2xn7rsA%2F6QGkTCbV5Uc6eOcJ6T0qUUt%2FfICrDSq4Aj&X-Amz-Signature=af30b7d0f16d3ccfb4e00316767bbc52aff8bc5511838e238fda926da833fafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
