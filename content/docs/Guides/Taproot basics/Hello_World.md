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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXN3UM5%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGFiafNFDoJRaTcWedrvpKObPEX4DdFYwrLsrlYnu9YLAiEA9ATrL2nGVayacjjaeYqiDPA9lYU5z7APhc4pzAfgDFMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJFy%2F%2Fs8UK7xuSSnkSrcA11libRiZK6Vnvjbub4ins5DAS0R2S0dqk0xWVKmMMVbUSCVc5sGDMdp%2BAlDo2d%2BHmuuudw4%2B8x9cLXJVHqkhhczd1jD%2BZFQBLz9zy99CrkuVlhZEUiE1%2B1dqX9BuRY3Y5DLf8AskUia6DQEa%2Fmlj9OxKwsaPUMpIp3hDdWTFyJ8jcCAhri5uXzhxwoNDyIws86v9oIFci1t3sDEsws3Q4a3wgMihLr4Ls%2B8dYF9Rz6ZrtsDG%2Fx3424qlhRM%2BRPbcpAF1veCkAS27IuUMXXISxhsPRcr7iMiqwMOUrjHl1YLi3nKlSNFF9ioLNdfj0%2FIYchSRqFnX8pZH49YVWI6VDCR3OCetIncDUffJOgWNAsd6xoSnrhxh5VGWEpxtUJg2R27ddAya%2BxaObfngQNNvlZm5coIasTxwIIiu7GuaT5i19gTpu1tuOTWMI2W7OqJR%2FkzfETmSLY3yTldb55pXq97U166zN2DD8J15pzpBL9ojz4WQWFlCZQ2THhY1HMttXmVZBjaNA4XqdpmG7zKUh%2BjbMy2lod7sDcdeNxJ5u%2FPUoQLu%2BxQZH2QIA9Btu5iygaTzBgbfjXpChPOVIsm8wKXuTDDcmt%2FXmHPlzs8kYxN%2BekdDbwRgYcJVL0tMLDOj8wGOqUBkkHc2BmHkfURqMjuRE9ONGQQjanCn8kAkfpYxbdh%2FQbb9DduPSjUaEnJ9x%2F1ZBpP1PYm8lQe05kgm0QNXSvYks7b1iE5xfxo4SnkeabB0F7kVzg%2BaTstVFmGJ5doALMqdW5v0%2FXwLzRtIVoOIzU28Bz01%2FaQfDZbvVjnyGkHgPxJH8EO23DWoCLIC7m9FWYZo0jhk%2B%2Fdzj2SGj6tSnOdBseujE2G&X-Amz-Signature=f8b2343c923ef4f865d09160d6a2046ba3dd5bba4debaee0e087dc9fb38e98be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXN3UM5%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGFiafNFDoJRaTcWedrvpKObPEX4DdFYwrLsrlYnu9YLAiEA9ATrL2nGVayacjjaeYqiDPA9lYU5z7APhc4pzAfgDFMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJFy%2F%2Fs8UK7xuSSnkSrcA11libRiZK6Vnvjbub4ins5DAS0R2S0dqk0xWVKmMMVbUSCVc5sGDMdp%2BAlDo2d%2BHmuuudw4%2B8x9cLXJVHqkhhczd1jD%2BZFQBLz9zy99CrkuVlhZEUiE1%2B1dqX9BuRY3Y5DLf8AskUia6DQEa%2Fmlj9OxKwsaPUMpIp3hDdWTFyJ8jcCAhri5uXzhxwoNDyIws86v9oIFci1t3sDEsws3Q4a3wgMihLr4Ls%2B8dYF9Rz6ZrtsDG%2Fx3424qlhRM%2BRPbcpAF1veCkAS27IuUMXXISxhsPRcr7iMiqwMOUrjHl1YLi3nKlSNFF9ioLNdfj0%2FIYchSRqFnX8pZH49YVWI6VDCR3OCetIncDUffJOgWNAsd6xoSnrhxh5VGWEpxtUJg2R27ddAya%2BxaObfngQNNvlZm5coIasTxwIIiu7GuaT5i19gTpu1tuOTWMI2W7OqJR%2FkzfETmSLY3yTldb55pXq97U166zN2DD8J15pzpBL9ojz4WQWFlCZQ2THhY1HMttXmVZBjaNA4XqdpmG7zKUh%2BjbMy2lod7sDcdeNxJ5u%2FPUoQLu%2BxQZH2QIA9Btu5iygaTzBgbfjXpChPOVIsm8wKXuTDDcmt%2FXmHPlzs8kYxN%2BekdDbwRgYcJVL0tMLDOj8wGOqUBkkHc2BmHkfURqMjuRE9ONGQQjanCn8kAkfpYxbdh%2FQbb9DduPSjUaEnJ9x%2F1ZBpP1PYm8lQe05kgm0QNXSvYks7b1iE5xfxo4SnkeabB0F7kVzg%2BaTstVFmGJ5doALMqdW5v0%2FXwLzRtIVoOIzU28Bz01%2FaQfDZbvVjnyGkHgPxJH8EO23DWoCLIC7m9FWYZo0jhk%2B%2Fdzj2SGj6tSnOdBseujE2G&X-Amz-Signature=0e4bdd1d399944e7c8fd3f44c1dee0d9e43d1c4dcab692f9970a41f1351f5f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
