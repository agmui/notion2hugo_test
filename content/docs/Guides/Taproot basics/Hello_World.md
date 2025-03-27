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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FNPNMZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjfRHj55XPYhIJOHbyfnFMS%2FoGdGZIv%2BqRKnTwEMeVzQIhAI0LmFhxA%2BqMX31NYmxNXkCBLL93H%2FBk6bnsef5RBJvUKv8DCDgQABoMNjM3NDIzMTgzODA1Igy%2FvCVrRZD6cKsmQqMq3AOj0AERCjxBDBxqb%2FTu0%2BbEwrBbSm4Tax40E1Jpac9R3TZMTya0ANlze1pT62c1SPsIy5DEqNLg75U5qJtSbard8tPdMeoVGqcV28cXxyywqGr542RBea3TFjgJsJv6R4ZEJdmGjsenjQfhLy00tCAG%2FnL93omLrWETCD8a419vRiqq%2FjD6npgp5t1R5%2FyVLkURnz2fCm3%2Fogm9bhwxFVs2JmmcgpyNEp1jMlZtLC3cpss%2B6nb04MBDbcSBPn5xf4ClGwGhp2TLj0Oo6qzyxguIPTDFzEKg2tKpSKVNPpRNnOVgrDEmGe98D3CREAPht2FPbBK3vnaVRyoSOYj5DCgtRwFthfr7Xkv2xP%2F48U2fjkMl4EfYOWke1pSXqxq7a9BJpma6WkphkgQMFj1YhrGksh%2Fk%2BpeEMLBEEQPJgonohMnduxpCGTWXj97HgBpwMTYu27MBcwS29Z1hjc0ezgmJgeLWVVbZ2Rq9H3T%2F%2F7VMf%2B75eZXug0tEupTlx5Bbompk5NrS2vSgjPSizA3f0GYVab%2FvskJx%2BsvD85odF%2B%2BRQt84EJecwQbp8hbhDmeCDhMOmV2Mytzaq1m0ej8%2BCtJnGJj0fx%2FkoxjwExJLLYPT8OvdKr6U%2BDxJo9V%2BnDDljJK%2FBjqkAVrXKyD1Q3qMKgGw93Uo19nR8JQhGLbjHF5PdLlNqu%2BEY%2FsBXm41kQyKbMlOCYh1U%2FSHuYG7YTJEBwcK0POL5bMnBgq72AzpMkZKWnnzde0Wh6Njl09xOt3MwqfM8ypN0EyYZKs9sdChdbeBG04AkOrtyk%2FXbz6crvN%2FjMXEbRJ0GsP4t6%2BHiQh%2Bv6FUkOn16PQh0Ol3RGF9zmO2f%2BGMZ0FtoiYG&X-Amz-Signature=6de822ec2654068894e36e8cae6bfb65126541d5955020fc8256dbd3c9476041&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FNPNMZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjfRHj55XPYhIJOHbyfnFMS%2FoGdGZIv%2BqRKnTwEMeVzQIhAI0LmFhxA%2BqMX31NYmxNXkCBLL93H%2FBk6bnsef5RBJvUKv8DCDgQABoMNjM3NDIzMTgzODA1Igy%2FvCVrRZD6cKsmQqMq3AOj0AERCjxBDBxqb%2FTu0%2BbEwrBbSm4Tax40E1Jpac9R3TZMTya0ANlze1pT62c1SPsIy5DEqNLg75U5qJtSbard8tPdMeoVGqcV28cXxyywqGr542RBea3TFjgJsJv6R4ZEJdmGjsenjQfhLy00tCAG%2FnL93omLrWETCD8a419vRiqq%2FjD6npgp5t1R5%2FyVLkURnz2fCm3%2Fogm9bhwxFVs2JmmcgpyNEp1jMlZtLC3cpss%2B6nb04MBDbcSBPn5xf4ClGwGhp2TLj0Oo6qzyxguIPTDFzEKg2tKpSKVNPpRNnOVgrDEmGe98D3CREAPht2FPbBK3vnaVRyoSOYj5DCgtRwFthfr7Xkv2xP%2F48U2fjkMl4EfYOWke1pSXqxq7a9BJpma6WkphkgQMFj1YhrGksh%2Fk%2BpeEMLBEEQPJgonohMnduxpCGTWXj97HgBpwMTYu27MBcwS29Z1hjc0ezgmJgeLWVVbZ2Rq9H3T%2F%2F7VMf%2B75eZXug0tEupTlx5Bbompk5NrS2vSgjPSizA3f0GYVab%2FvskJx%2BsvD85odF%2B%2BRQt84EJecwQbp8hbhDmeCDhMOmV2Mytzaq1m0ej8%2BCtJnGJj0fx%2FkoxjwExJLLYPT8OvdKr6U%2BDxJo9V%2BnDDljJK%2FBjqkAVrXKyD1Q3qMKgGw93Uo19nR8JQhGLbjHF5PdLlNqu%2BEY%2FsBXm41kQyKbMlOCYh1U%2FSHuYG7YTJEBwcK0POL5bMnBgq72AzpMkZKWnnzde0Wh6Njl09xOt3MwqfM8ypN0EyYZKs9sdChdbeBG04AkOrtyk%2FXbz6crvN%2FjMXEbRJ0GsP4t6%2BHiQh%2Bv6FUkOn16PQh0Ol3RGF9zmO2f%2BGMZ0FtoiYG&X-Amz-Signature=c503780d8768d526b717fb02505697365451d3627245dbc5f227c69f3365f63f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
