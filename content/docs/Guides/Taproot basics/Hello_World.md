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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245ECLMJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB898QdNuBUzWZ7dYu9ZPG3JH9dBx1p6Zm4VVhAZKj8wAiEA039LuKI3vCb3sn2wNxYtUgozrTcfYrL9jG57%2FYILsH4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdCtlHnrvLMo8X6lircAxlZ5ORuaBOdUv3s2XvR5glKs67zQxxb164n3bfyRSQKjdvgiWbKtg7VpGCI8kO8UlbVYZrIyLoPl%2B%2FNx525RCkNiIvC5I%2FNJH4p%2F8JWwVdaK2gYFiYsFZ1FDZqBOVVQAjxhyiqEl3dygJ1EEEpj7wcphj3zlIZs%2FEI7%2Bfm7I%2BS1ctASTDM4PhtU6d4XDqdyC53NXmn9W4PVdSNr6YGLKeC66Yh4rD1y2cmwX7kO3n167kZAJhiwgjqoK1WsypAfiG04vph%2FRwJ2WNqsCZ3KX%2BKJ6Gu6zydvJ9jd1vcCVkXQQzEETkb5svJjo9CHo%2BYWPtykbHuMFqsv1l8a9vT2nQJ%2Fw33uyaBah1KaQeHsIUMMZErXvbuRv3WJ6mI1Cy9hNLWXzE00BPxZIYqZNmHgE%2FaDjCOAL1sVCMziFLsgHg8B2KZD27pbUp5zG9RU8aH%2Fcd1CGFIzDtJNloW1eC0cY3y9lV2kWND87LhzOvp4UscsdCgIUPYORDxPVyVqVREOzyzAZJ%2BOXaQDWj%2BERRooN3%2B48cGyuCbV05LxuOxQ7AHDhtHW7R0x3Q13xhRm1tF%2FdM1LH2vWNNx2YA1Vg%2ByowsCmj7x%2FKpRQaySMA1Yg9gory0GPzfFUJBAUKrMJMJLWm8IGOqUBz85txzd6CRn99D68Ugp8%2Fwnwfx%2BhfF0CZ%2BKp9ovZfVxiirj1O9hE%2F0S9JFw0Q%2B9xyhpAaDhatAvguitkykCxX5SIDEpPWKXrQ4FXJ52TNPkezrruATGsX9V%2BPEOW%2FfCGdwiNOPM10%2FS78r%2B0AUQ8%2FXGf8mm28uieCdxed9d7eQklvnx6eVfKyAKoNYgUckzZWgbdFnjnOQfbkyDna2mOx1t3P%2B5s&X-Amz-Signature=2b1387522768ce7a891b119f87fca8f5bdd2833637c5f31dd53a349d189b8861&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245ECLMJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB898QdNuBUzWZ7dYu9ZPG3JH9dBx1p6Zm4VVhAZKj8wAiEA039LuKI3vCb3sn2wNxYtUgozrTcfYrL9jG57%2FYILsH4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdCtlHnrvLMo8X6lircAxlZ5ORuaBOdUv3s2XvR5glKs67zQxxb164n3bfyRSQKjdvgiWbKtg7VpGCI8kO8UlbVYZrIyLoPl%2B%2FNx525RCkNiIvC5I%2FNJH4p%2F8JWwVdaK2gYFiYsFZ1FDZqBOVVQAjxhyiqEl3dygJ1EEEpj7wcphj3zlIZs%2FEI7%2Bfm7I%2BS1ctASTDM4PhtU6d4XDqdyC53NXmn9W4PVdSNr6YGLKeC66Yh4rD1y2cmwX7kO3n167kZAJhiwgjqoK1WsypAfiG04vph%2FRwJ2WNqsCZ3KX%2BKJ6Gu6zydvJ9jd1vcCVkXQQzEETkb5svJjo9CHo%2BYWPtykbHuMFqsv1l8a9vT2nQJ%2Fw33uyaBah1KaQeHsIUMMZErXvbuRv3WJ6mI1Cy9hNLWXzE00BPxZIYqZNmHgE%2FaDjCOAL1sVCMziFLsgHg8B2KZD27pbUp5zG9RU8aH%2Fcd1CGFIzDtJNloW1eC0cY3y9lV2kWND87LhzOvp4UscsdCgIUPYORDxPVyVqVREOzyzAZJ%2BOXaQDWj%2BERRooN3%2B48cGyuCbV05LxuOxQ7AHDhtHW7R0x3Q13xhRm1tF%2FdM1LH2vWNNx2YA1Vg%2ByowsCmj7x%2FKpRQaySMA1Yg9gory0GPzfFUJBAUKrMJMJLWm8IGOqUBz85txzd6CRn99D68Ugp8%2Fwnwfx%2BhfF0CZ%2BKp9ovZfVxiirj1O9hE%2F0S9JFw0Q%2B9xyhpAaDhatAvguitkykCxX5SIDEpPWKXrQ4FXJ52TNPkezrruATGsX9V%2BPEOW%2FfCGdwiNOPM10%2FS78r%2B0AUQ8%2FXGf8mm28uieCdxed9d7eQklvnx6eVfKyAKoNYgUckzZWgbdFnjnOQfbkyDna2mOx1t3P%2B5s&X-Amz-Signature=b11c9c9181ca4a3418ad32355246675fae721e2b10d007b95412034a74bb6e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
