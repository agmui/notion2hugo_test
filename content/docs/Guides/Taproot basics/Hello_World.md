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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRBNS2X%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6DnUYfpSN0xvL70YCUhAb%2BzTkOyfv5Z789SpjIJjKdAIhAKTpqzOyEF1dU2yd6oCDDz0jLwK8ni%2FfsGDcTILj919xKv8DCCoQABoMNjM3NDIzMTgzODA1IgzFFq2whweOmCYC0AIq3AN7cHyar4hg1Xf1kYZpDocCkRp%2F3B3ulsyVo2vhvjBw9dL2PFZiIHunj6cPkjh84gbwruA6WSg6%2FUh92rCDOESroxIFlnKJ6BMJq0ccbzu5nXua7zwYRl%2BymkR1dQdhg%2BPbNIXLwiXHGwrhfFvrl%2B4KYp%2FfTr6tEqmGcmYax6F7W4TS08JL0RUnecq3MUl%2FJCnn4BW3TyZcwNyXYcSqLoyP88r1E4xuNx7q8bxSUiZWzrUvaadCUyXZXWZPajpjlyH3FWOXTu0KV%2FMfOokmXLnXZEWe%2F6MbrTosUvm%2BS%2BEIFPF328ov1GujQy1uhr%2FiyzcMHZPIeRXbp1hIA1N3YGcxLYfUzusfvCr3AzKoP4%2BmU7KRu5RoIYAGQ5asaZB4NH1lRJiMxnqjwSs6B6HTSJJgkANgA%2FtGgCy6uy9udszQV3a6clQ4jAir5fPk8jbm2LFMtXi3rRR4MxeL0CFBAqxTzoNQw%2BLMWlQWbzM%2BvyqZm8mn%2BC9k3e0BUm7CYq%2BYR9URE5eYu74CrkB0kdMX88tGdoSQBYYTtAG%2BXiEPLlpV9FnaGLnFXsypqwZuK7sluMtM8UHMNVxbP5RJXyVU1wqN5Rj0%2F%2BZA0WpDfqV5F4uw58U03RrwYvjFJAch4zCN7PC9BjqkAYGh6KvjHsihfmFS1VX%2BV6muQj%2FdjohRU5T2mmG6H%2BnufH88BJ%2F0wwI3TLmEWzfnFPxcSOqlNfwLmlyhP%2Fu3RkGURSyqVnv6zzpwKdRZ0AXlIW0be%2FMCtQDe2Q5qrYfrzwd9dAIAB6csXKMmpGx2nj98A7eh8WAMYjcUQt%2BK9AeCxwnN76G5pGeaLVGXiPZgO3MlgIGFxQo8Ati1RD2DjYzove%2FB&X-Amz-Signature=628a6efb7581224a36ec9c7d54eccb1684a3bddbf7f2533d4d89cfe0d75f300e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRBNS2X%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6DnUYfpSN0xvL70YCUhAb%2BzTkOyfv5Z789SpjIJjKdAIhAKTpqzOyEF1dU2yd6oCDDz0jLwK8ni%2FfsGDcTILj919xKv8DCCoQABoMNjM3NDIzMTgzODA1IgzFFq2whweOmCYC0AIq3AN7cHyar4hg1Xf1kYZpDocCkRp%2F3B3ulsyVo2vhvjBw9dL2PFZiIHunj6cPkjh84gbwruA6WSg6%2FUh92rCDOESroxIFlnKJ6BMJq0ccbzu5nXua7zwYRl%2BymkR1dQdhg%2BPbNIXLwiXHGwrhfFvrl%2B4KYp%2FfTr6tEqmGcmYax6F7W4TS08JL0RUnecq3MUl%2FJCnn4BW3TyZcwNyXYcSqLoyP88r1E4xuNx7q8bxSUiZWzrUvaadCUyXZXWZPajpjlyH3FWOXTu0KV%2FMfOokmXLnXZEWe%2F6MbrTosUvm%2BS%2BEIFPF328ov1GujQy1uhr%2FiyzcMHZPIeRXbp1hIA1N3YGcxLYfUzusfvCr3AzKoP4%2BmU7KRu5RoIYAGQ5asaZB4NH1lRJiMxnqjwSs6B6HTSJJgkANgA%2FtGgCy6uy9udszQV3a6clQ4jAir5fPk8jbm2LFMtXi3rRR4MxeL0CFBAqxTzoNQw%2BLMWlQWbzM%2BvyqZm8mn%2BC9k3e0BUm7CYq%2BYR9URE5eYu74CrkB0kdMX88tGdoSQBYYTtAG%2BXiEPLlpV9FnaGLnFXsypqwZuK7sluMtM8UHMNVxbP5RJXyVU1wqN5Rj0%2F%2BZA0WpDfqV5F4uw58U03RrwYvjFJAch4zCN7PC9BjqkAYGh6KvjHsihfmFS1VX%2BV6muQj%2FdjohRU5T2mmG6H%2BnufH88BJ%2F0wwI3TLmEWzfnFPxcSOqlNfwLmlyhP%2Fu3RkGURSyqVnv6zzpwKdRZ0AXlIW0be%2FMCtQDe2Q5qrYfrzwd9dAIAB6csXKMmpGx2nj98A7eh8WAMYjcUQt%2BK9AeCxwnN76G5pGeaLVGXiPZgO3MlgIGFxQo8Ati1RD2DjYzove%2FB&X-Amz-Signature=0dc408897f02e0aec531c9286b962b737dde008c61ac219bab30391ac0e43d18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
