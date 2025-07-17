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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKCKF5E%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBAu7vxb3qhXjHAeHJ6YVYWoJn4272zhHWUuyfYaK1O5AiEA4cXx3UUlGSWBGRj7S%2B%2F7tDxwjRoCOehQmLLb02%2FrKMUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLD%2BcywRCLVTtkLO4yrcA%2FLRGivUBzJxPWZAZqI5qXBgV%2F%2F7wklJ9DihibQ%2BO6gL%2BX1JXs6ft3ymEiNwK%2BskGPzf220WtcXmPlSJ3P9BHbIiENtBuco2HAcjMO36BhreuqN1vHIIfapIGs%2B54%2BAygRaDRhoZDSpmAIUPBRhFR5fAaioXJj%2F1s2wTNGtHflMP02LdVa4I2m7dFEDtEddgAEH%2FQkpf5DJg4r%2FzV31aKze18F5s3eY3uzLhZe3Ovmis0ZxhDDQGkotkhGl5NIVOXyzZaUdBQALKhPnF7xUC3OZFrBfKPZPyyJ2ripmcBite8US%2FuvslmFQyVS6LOXDzDzbEC99AXzWzm9mYjsMl0GuEso7qB3z981QuXCPfUtTYP1kMKWwWG%2FOsru%2FPA2Fz4sRDiBZVyJQ%2BWAIOV6%2FAU57mMwGNvqf0Ng4Q1YKYWjTOz71Az7Zt399QAaDyh5b14bwMmZU%2FfZbcN4qZErahhccGdUncc2Gz6RJjQ0D3%2FE799CHMJ%2Fo1sUpjWJBo%2F%2FwfiQe4NOqIVJLX%2BZ0J2BqyCRB%2FDj0QYmK%2FTxAVUTcOIPE%2BDTQ%2BUPYiG8RcnDzlmAZHPTj9ksYhVBtA6Yx34lKV%2B1whaAb%2F52iwGkZz3GXvWBkUK2bM%2Bnu%2BhDjyzqZwMI3i48MGOqUBNabANuumobM51h843beWZdzhnOXLVVxl5ae9yusppK2USNz3QI6WGmRoBmkHOh1rCFGLTXwnKpBYSKhkB83BggBR4wh1RGgpGLnSoSPPYrA5wuw2xSlt%2FZVtfOqbwsW%2FJ3ZTFM5CCtbYMJNyw0nuKV25OeHXVz8dwLkVtXNM8eS7rixJRw0BF0wWETlF90QJf8ZoO%2Fe7%2FcWtjI%2BSPJzt3gQG%2BOkW&X-Amz-Signature=782d46e015b840484f841a69a3085e7c8f2a4fdcfa96a7bcf5d52856c6dedd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKCKF5E%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBAu7vxb3qhXjHAeHJ6YVYWoJn4272zhHWUuyfYaK1O5AiEA4cXx3UUlGSWBGRj7S%2B%2F7tDxwjRoCOehQmLLb02%2FrKMUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLD%2BcywRCLVTtkLO4yrcA%2FLRGivUBzJxPWZAZqI5qXBgV%2F%2F7wklJ9DihibQ%2BO6gL%2BX1JXs6ft3ymEiNwK%2BskGPzf220WtcXmPlSJ3P9BHbIiENtBuco2HAcjMO36BhreuqN1vHIIfapIGs%2B54%2BAygRaDRhoZDSpmAIUPBRhFR5fAaioXJj%2F1s2wTNGtHflMP02LdVa4I2m7dFEDtEddgAEH%2FQkpf5DJg4r%2FzV31aKze18F5s3eY3uzLhZe3Ovmis0ZxhDDQGkotkhGl5NIVOXyzZaUdBQALKhPnF7xUC3OZFrBfKPZPyyJ2ripmcBite8US%2FuvslmFQyVS6LOXDzDzbEC99AXzWzm9mYjsMl0GuEso7qB3z981QuXCPfUtTYP1kMKWwWG%2FOsru%2FPA2Fz4sRDiBZVyJQ%2BWAIOV6%2FAU57mMwGNvqf0Ng4Q1YKYWjTOz71Az7Zt399QAaDyh5b14bwMmZU%2FfZbcN4qZErahhccGdUncc2Gz6RJjQ0D3%2FE799CHMJ%2Fo1sUpjWJBo%2F%2FwfiQe4NOqIVJLX%2BZ0J2BqyCRB%2FDj0QYmK%2FTxAVUTcOIPE%2BDTQ%2BUPYiG8RcnDzlmAZHPTj9ksYhVBtA6Yx34lKV%2B1whaAb%2F52iwGkZz3GXvWBkUK2bM%2Bnu%2BhDjyzqZwMI3i48MGOqUBNabANuumobM51h843beWZdzhnOXLVVxl5ae9yusppK2USNz3QI6WGmRoBmkHOh1rCFGLTXwnKpBYSKhkB83BggBR4wh1RGgpGLnSoSPPYrA5wuw2xSlt%2FZVtfOqbwsW%2FJ3ZTFM5CCtbYMJNyw0nuKV25OeHXVz8dwLkVtXNM8eS7rixJRw0BF0wWETlF90QJf8ZoO%2Fe7%2FcWtjI%2BSPJzt3gQG%2BOkW&X-Amz-Signature=f2b4a37e9e9752ee8f177eea71e862980592f1ec9dfc0630c11890b9c0b0f351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
