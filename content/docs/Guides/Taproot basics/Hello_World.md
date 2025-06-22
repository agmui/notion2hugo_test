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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZWFVC5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDErJUqs9qNiqSRby0TeKYCFEwnAKarySzxuJxEvNlwbwIgJA%2FIUWgSVBoZjoPTu3JFlDN9f9C0nIm9YS9pfyZCojYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtnbS2Ot3uG%2FAPDlCrcAyP3nWbfUt%2FiiS17qXu8vlNCK9kXO6%2FEHz%2BsHrUCNTHJBrldQTyk5UWNfAiRc6THVbQeWk1XrmupY0UxO%2FtQU1ZQFQnHONRlfbyZsAF9MDCqzK%2BPQyv%2F653DY%2FO0aSFQtRxiynMEbMQHf1SMbPrAyLxvOmCI0fzxDTnMdG7JlaxIKYbEI3dq2KZpZHtLAGcLC0FqhWUdqLsVAyppJ9Kj1sPBc%2BSVnqSifyzFnFvgHMky6fT9h4nH2QtyGOiAOdqTUhGP5wq14qQ62%2F3Tma5OlJw3i38RTifiuAW7etvKtrrZ9oqLn7Vx1TGk2k0iL40xfK2EQ7rcPsWwde%2Bpq5Y1s6yRKxApYfPAlLYmm1W4BtY%2Bklwb8YtqS%2BOXT3IY5Y4P2ppHZ16CcUCx%2BH21ODJ6BzXTLlT%2Fsl4g%2Bd4XZGXeYJzwyhoekBRS7eYnpeBxVlVvb59XY5IgMtVb8s53kKMV8P8NyKCajHIqHYIFPVx194d0mt9wLR4RoH3nRhmQRTzrsjRsKBtIbYi7Jwg5MGJmrOQrzeD9mGn2AUISFOwZk%2BARy0lDc0k%2BP8aU%2FzqtxZej3snNNxCfA6d36x4LDiuL7zTFu1XFnnmXswpkbXSAxJaV7ZKKMf7oH4iCSr8VMO2i4MIGOqUByFVfY1%2BAhD10G1MzLL2DCAqesObrxQcWDJlH7QdATe2F0RY0Ez%2FiJl7kG0f611jWiSbiE93%2BlMqjMv%2Bd7OZaVBtJMNE7n4UV0uw3eN7Uc68JK3suL8P9rmJFQWt2T5TuByuivnnjMSYVj8609X%2FzU1QDJk%2B5gZoiC7IE5Z2gmx5KEJ8MLGTC0a06d%2FGTR%2BSHXQ%2BDS7hAP%2BDoc5uD1LRS%2BNcqEofW&X-Amz-Signature=68aec0ba4682aa0c1176069f31850b930965910ea9214e326692bb0e5a79d923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZWFVC5%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDErJUqs9qNiqSRby0TeKYCFEwnAKarySzxuJxEvNlwbwIgJA%2FIUWgSVBoZjoPTu3JFlDN9f9C0nIm9YS9pfyZCojYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtnbS2Ot3uG%2FAPDlCrcAyP3nWbfUt%2FiiS17qXu8vlNCK9kXO6%2FEHz%2BsHrUCNTHJBrldQTyk5UWNfAiRc6THVbQeWk1XrmupY0UxO%2FtQU1ZQFQnHONRlfbyZsAF9MDCqzK%2BPQyv%2F653DY%2FO0aSFQtRxiynMEbMQHf1SMbPrAyLxvOmCI0fzxDTnMdG7JlaxIKYbEI3dq2KZpZHtLAGcLC0FqhWUdqLsVAyppJ9Kj1sPBc%2BSVnqSifyzFnFvgHMky6fT9h4nH2QtyGOiAOdqTUhGP5wq14qQ62%2F3Tma5OlJw3i38RTifiuAW7etvKtrrZ9oqLn7Vx1TGk2k0iL40xfK2EQ7rcPsWwde%2Bpq5Y1s6yRKxApYfPAlLYmm1W4BtY%2Bklwb8YtqS%2BOXT3IY5Y4P2ppHZ16CcUCx%2BH21ODJ6BzXTLlT%2Fsl4g%2Bd4XZGXeYJzwyhoekBRS7eYnpeBxVlVvb59XY5IgMtVb8s53kKMV8P8NyKCajHIqHYIFPVx194d0mt9wLR4RoH3nRhmQRTzrsjRsKBtIbYi7Jwg5MGJmrOQrzeD9mGn2AUISFOwZk%2BARy0lDc0k%2BP8aU%2FzqtxZej3snNNxCfA6d36x4LDiuL7zTFu1XFnnmXswpkbXSAxJaV7ZKKMf7oH4iCSr8VMO2i4MIGOqUByFVfY1%2BAhD10G1MzLL2DCAqesObrxQcWDJlH7QdATe2F0RY0Ez%2FiJl7kG0f611jWiSbiE93%2BlMqjMv%2Bd7OZaVBtJMNE7n4UV0uw3eN7Uc68JK3suL8P9rmJFQWt2T5TuByuivnnjMSYVj8609X%2FzU1QDJk%2B5gZoiC7IE5Z2gmx5KEJ8MLGTC0a06d%2FGTR%2BSHXQ%2BDS7hAP%2BDoc5uD1LRS%2BNcqEofW&X-Amz-Signature=a722dda0fbc9fc41df71258c168c60409882b00d7b2399f5a59bd8ac690c63ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
