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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEGZ2NU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBqHHPYqPjDJXg5ZqN1GA7dq16gvm0rRciUCYjyKQVM8AiEAthr%2B3Nme5CMv3b935ZtdicryeQtUmtEBv2owL%2BMsT5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOP6VjzFL061%2FjFTpCrcA8Bjh9uooHH56kl8EjQjPelijpiVVJO934Tqvl5P0SykLyEmZUk1Nh5L3P%2Be%2FFXRfIkCjKCrOhukCyTXVXPhZjSvxrXcMXTF7Z1bcAT53g2LBqO9hfPUHCmUTU34oocSKrH2r5F3XtaDSXzhE5DIwpUyNZBobUa5yRl3xAGRbpwKAszNQn2tVctx5ckL%2BZO7dz%2B4uBnyYM5sax%2Bq2yvgvQos1DIcBmEy2E8humPYUdI2xHrPTO0n6m7wn1Q%2FZ2JbTvHUXtyjf44%2F6R7SbBwVoyWYMyUU%2BUxkgiUsuZR7LEj0xqn%2BYZm%2FVjTE%2BlEUHmZ1K5%2BF%2BZUkBwj0Gh5XGfPo1B85bOpvnfr5CZwSniy1Ypm61bxiERs2es8v6SxFO1Vp4azgEQ4ZKoRfqnVmz0SzFXWTMMSLV0zAAnBFXKsCt16gc5G0SmQmAu2fl1yyrZT6VE31kI%2Bjm2QHRcWeo6fsphHzu252R7DMyWiz5e3vVu7XR%2BYYG8444NKirU7QdK8ErrD%2FUwxSngPUKloAAp3%2BKebaDtpeBrRvR1gq%2BlZoiev%2B%2Fze9cPREI%2Fw2G5IlYAyQBy4uAi%2Bd66pbXlDKD4Q%2FAz3qWiY%2BvNXL7eSVbDUigEGHeBzWr73Lz5YEO7BKMPyb9cIGOqUBZ%2F7AqgSUrMwc6In3Ep360AqrM44Z3rNNLGfo0j3VKxczknUMCB5EzpjDI1%2F9ilOdqSSpfhtwmhhFbtMRYGYX0PgTguk71ZbEGXGlhhwLgi1yK%2BL%2BuNRK%2FYJbcB6E3Pxt26fwG4MdfgdN3YLz2RsUFNb11wWjmbjHRA9QDiPSvNtlHHKzyMdSeDDIgin2Amn7SaZdGpyWfKWZHtj0yN%2B%2BPFOPBL30&X-Amz-Signature=4776e65ba7530f893a087729204c52c41635bfb2785274baf6a09fbb84ee7826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEGZ2NU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBqHHPYqPjDJXg5ZqN1GA7dq16gvm0rRciUCYjyKQVM8AiEAthr%2B3Nme5CMv3b935ZtdicryeQtUmtEBv2owL%2BMsT5wq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOP6VjzFL061%2FjFTpCrcA8Bjh9uooHH56kl8EjQjPelijpiVVJO934Tqvl5P0SykLyEmZUk1Nh5L3P%2Be%2FFXRfIkCjKCrOhukCyTXVXPhZjSvxrXcMXTF7Z1bcAT53g2LBqO9hfPUHCmUTU34oocSKrH2r5F3XtaDSXzhE5DIwpUyNZBobUa5yRl3xAGRbpwKAszNQn2tVctx5ckL%2BZO7dz%2B4uBnyYM5sax%2Bq2yvgvQos1DIcBmEy2E8humPYUdI2xHrPTO0n6m7wn1Q%2FZ2JbTvHUXtyjf44%2F6R7SbBwVoyWYMyUU%2BUxkgiUsuZR7LEj0xqn%2BYZm%2FVjTE%2BlEUHmZ1K5%2BF%2BZUkBwj0Gh5XGfPo1B85bOpvnfr5CZwSniy1Ypm61bxiERs2es8v6SxFO1Vp4azgEQ4ZKoRfqnVmz0SzFXWTMMSLV0zAAnBFXKsCt16gc5G0SmQmAu2fl1yyrZT6VE31kI%2Bjm2QHRcWeo6fsphHzu252R7DMyWiz5e3vVu7XR%2BYYG8444NKirU7QdK8ErrD%2FUwxSngPUKloAAp3%2BKebaDtpeBrRvR1gq%2BlZoiev%2B%2Fze9cPREI%2Fw2G5IlYAyQBy4uAi%2Bd66pbXlDKD4Q%2FAz3qWiY%2BvNXL7eSVbDUigEGHeBzWr73Lz5YEO7BKMPyb9cIGOqUBZ%2F7AqgSUrMwc6In3Ep360AqrM44Z3rNNLGfo0j3VKxczknUMCB5EzpjDI1%2F9ilOdqSSpfhtwmhhFbtMRYGYX0PgTguk71ZbEGXGlhhwLgi1yK%2BL%2BuNRK%2FYJbcB6E3Pxt26fwG4MdfgdN3YLz2RsUFNb11wWjmbjHRA9QDiPSvNtlHHKzyMdSeDDIgin2Amn7SaZdGpyWfKWZHtj0yN%2B%2BPFOPBL30&X-Amz-Signature=1d98dfa45185a01c575c9bae78260c1f379a3d0d3d7017a788fd2d675e059a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
