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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FNULDV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO1sireXnFgx0jcywMuh421qR9uTy1vyXECLbNAgURfgIhAJhmekWjRjKoJYOFgijKuk8RTKlFJ0cD9VcazhXRfSRbKv8DCCYQABoMNjM3NDIzMTgzODA1Igxi1LLVH0tJ%2BxFZpJ0q3AOAHiZC5FH0TzI0Xi4KA%2BImOl4Jj3DKXwhw2Rul2QaUuGiO6EZTkSb3PnYfrnEFkcTRRlgd71N1heXDxyDPOgxBFZlLiJESfp8a%2B5oOJ9sSTv%2BHJrybXGLOPyaBcv4tb6uj9WTbXeOCGgsAJcQvnCicUAAj4ozD0BPlZM1EhTXObnKMEiBGvnlN4uZC29kZKtjD2ohBK0BpIEVesV0lIRLmUlnYvLbiPUATw4hph%2FRVWPXG%2F%2F3Do3J0FzrPduwMMxWA9Y5vuYDJ6lY3oZ52ZlP3kJW1XC%2BJHYHf3HSPQ3lKWu%2Fr0FJGithBgS623WETO7oqR9dZS%2BYpgjpFtLhkuA8VLgb6ds%2BP8uJdEFUrYjRhyZi5%2FxFyo6UMa9d2nWWc6njsuM7ahvJCxuUPqB1hy9UC9xRnKY1OA3nR43%2B3ex7uGsSDdj8SKmcbrriXQtXhXAsPWWgeFM1B%2BzbxhyjglGTdxGGeOwzYeC19axbNLwtnWVsGzcL44rN9WQC2lqdQvVB83Jm6Ezx5AUKNn9C44Kmtz7duSJmzxZl7kOtu9Cxi7mUXHaTC36hQKLiesVnU%2BnuD6HSiT0rT%2B2d%2F4so%2FDVcgAZECG3Epxf%2FX9lToOpq5QbeZu2cvbIYyXv1hPDCa78K%2FBjqkAURaz8uYs0T4C4YsCukrqFgRlgBXO1ty1DPXXYyLrlhuhG6toRkplbB3dK3oD6JMxNL%2BvCfWybY9ID15LRDPuCBceX3JR0OUzoUW9Y09P%2Fctep5YIdoDaFIB8nd33UFT6RDnjf9nD0Vs1vhXRuY%2BB%2B%2BtUg7hmxBwmNvmsHKPVyHFS8pZsQ%2BwwRVp%2F5fcUSWf6Jxpxjxfi4i6iBr1P37zTj1%2F8s%2FV&X-Amz-Signature=747cdece1797d675f7736866b2e20d6f93d5e15b8202adf00e02aefbda883fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FNULDV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO1sireXnFgx0jcywMuh421qR9uTy1vyXECLbNAgURfgIhAJhmekWjRjKoJYOFgijKuk8RTKlFJ0cD9VcazhXRfSRbKv8DCCYQABoMNjM3NDIzMTgzODA1Igxi1LLVH0tJ%2BxFZpJ0q3AOAHiZC5FH0TzI0Xi4KA%2BImOl4Jj3DKXwhw2Rul2QaUuGiO6EZTkSb3PnYfrnEFkcTRRlgd71N1heXDxyDPOgxBFZlLiJESfp8a%2B5oOJ9sSTv%2BHJrybXGLOPyaBcv4tb6uj9WTbXeOCGgsAJcQvnCicUAAj4ozD0BPlZM1EhTXObnKMEiBGvnlN4uZC29kZKtjD2ohBK0BpIEVesV0lIRLmUlnYvLbiPUATw4hph%2FRVWPXG%2F%2F3Do3J0FzrPduwMMxWA9Y5vuYDJ6lY3oZ52ZlP3kJW1XC%2BJHYHf3HSPQ3lKWu%2Fr0FJGithBgS623WETO7oqR9dZS%2BYpgjpFtLhkuA8VLgb6ds%2BP8uJdEFUrYjRhyZi5%2FxFyo6UMa9d2nWWc6njsuM7ahvJCxuUPqB1hy9UC9xRnKY1OA3nR43%2B3ex7uGsSDdj8SKmcbrriXQtXhXAsPWWgeFM1B%2BzbxhyjglGTdxGGeOwzYeC19axbNLwtnWVsGzcL44rN9WQC2lqdQvVB83Jm6Ezx5AUKNn9C44Kmtz7duSJmzxZl7kOtu9Cxi7mUXHaTC36hQKLiesVnU%2BnuD6HSiT0rT%2B2d%2F4so%2FDVcgAZECG3Epxf%2FX9lToOpq5QbeZu2cvbIYyXv1hPDCa78K%2FBjqkAURaz8uYs0T4C4YsCukrqFgRlgBXO1ty1DPXXYyLrlhuhG6toRkplbB3dK3oD6JMxNL%2BvCfWybY9ID15LRDPuCBceX3JR0OUzoUW9Y09P%2Fctep5YIdoDaFIB8nd33UFT6RDnjf9nD0Vs1vhXRuY%2BB%2B%2BtUg7hmxBwmNvmsHKPVyHFS8pZsQ%2BwwRVp%2F5fcUSWf6Jxpxjxfi4i6iBr1P37zTj1%2F8s%2FV&X-Amz-Signature=1323689bec3c76cc5b8f9f749574aec5a5965ed9976b1c86caf27935699c90b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
