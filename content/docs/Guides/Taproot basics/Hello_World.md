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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6ZRJGW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIG02S6nSCAWof85NOaStBXFDh4TGhVRSpBlQpiGfo6myAiB4hV5n75vOHrbex4PBcyTFh3rHA0eb0DrxsDipWdWwSSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM4%2BPC81YOZxFFvzLFKtwD8NNZFpinDIXNInWnIp2kwYQxusqIIFLuxExX%2BjzJBklFBrGzHZEnKLWR4z5yZz6SrAEqGa3kxso9N3QXHu2YkxZCs%2FwKYEf6kfmqocaFJpm1rmG5o8xgWOqw1lDRdIQEqKBONw8hyE17Sz0IJjwlhRF%2FuT5%2FnfOyVDTd2QD6%2FY%2Fb4muAfRKu%2FjSmlQ7qg4mJpE%2BDmLQyNoT9MwqMklnyrBZ%2FhzOImDKRMxbL4DATYfa%2Ft5zZkv6KPffteNahw9EyZPYhGR7OVWCFHlOrJzS9%2FAVbY8slOBfNmxAiHUhKyJnWn%2F%2F0b2kaRR%2Fr5zvpLskNPjJc5K9gNrC5upGEReeQslh3g2jfoIl4OH%2BkK24nJIzs1wzi7vvouBCFNY3CIyxjpiCOfl0gRmj1hGNOMhsywzu%2FJoP9eW8xOBHCfzZ9604LIWm0V682xln6xkpvV9O7l0RMcKQZc191mfgH1DeDy76DBOUeMpsKZPSSHz%2BfMzXkq2SfFfpn7pUrGIzN29QvVleFMWEWElLYkGDDAR1qejlFiRCPgmNJF8E9IXOoLxuR%2BCxComIw5KgGKXx4QIz6ejQGgFo%2FNOkbnKom0W11UNO0qaxdyrJZ92GdHYBRq005UUtnu4M5rCzTv30ws4bVvwY6pgGFI%2FRj%2B51Rz%2Bc5tzq21Af8mZBVFs1bJFe1TZNw7%2Fpm04kxNzI%2BrpA0RdG%2Fxt0UUWW8laQPdxmdN9g27iL8ailEtfOOgnRshND6VDkN7UIMWfGhysxViX2ACuKQQVsfr3Oj4%2Fz2rrrUmIjgtBtCq%2BAHv8iANijupeGs00C78wU51ldIVNFpenCmkcMCLW6TgfqS3d07JPUQT0BF3aZR0%2FrT7uq8YkpX&X-Amz-Signature=f8f28e0b8bae0c6e883331593d1f70d372d619ec9d6bdff64511e7c5fb2c1f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6ZRJGW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIG02S6nSCAWof85NOaStBXFDh4TGhVRSpBlQpiGfo6myAiB4hV5n75vOHrbex4PBcyTFh3rHA0eb0DrxsDipWdWwSSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM4%2BPC81YOZxFFvzLFKtwD8NNZFpinDIXNInWnIp2kwYQxusqIIFLuxExX%2BjzJBklFBrGzHZEnKLWR4z5yZz6SrAEqGa3kxso9N3QXHu2YkxZCs%2FwKYEf6kfmqocaFJpm1rmG5o8xgWOqw1lDRdIQEqKBONw8hyE17Sz0IJjwlhRF%2FuT5%2FnfOyVDTd2QD6%2FY%2Fb4muAfRKu%2FjSmlQ7qg4mJpE%2BDmLQyNoT9MwqMklnyrBZ%2FhzOImDKRMxbL4DATYfa%2Ft5zZkv6KPffteNahw9EyZPYhGR7OVWCFHlOrJzS9%2FAVbY8slOBfNmxAiHUhKyJnWn%2F%2F0b2kaRR%2Fr5zvpLskNPjJc5K9gNrC5upGEReeQslh3g2jfoIl4OH%2BkK24nJIzs1wzi7vvouBCFNY3CIyxjpiCOfl0gRmj1hGNOMhsywzu%2FJoP9eW8xOBHCfzZ9604LIWm0V682xln6xkpvV9O7l0RMcKQZc191mfgH1DeDy76DBOUeMpsKZPSSHz%2BfMzXkq2SfFfpn7pUrGIzN29QvVleFMWEWElLYkGDDAR1qejlFiRCPgmNJF8E9IXOoLxuR%2BCxComIw5KgGKXx4QIz6ejQGgFo%2FNOkbnKom0W11UNO0qaxdyrJZ92GdHYBRq005UUtnu4M5rCzTv30ws4bVvwY6pgGFI%2FRj%2B51Rz%2Bc5tzq21Af8mZBVFs1bJFe1TZNw7%2Fpm04kxNzI%2BrpA0RdG%2Fxt0UUWW8laQPdxmdN9g27iL8ailEtfOOgnRshND6VDkN7UIMWfGhysxViX2ACuKQQVsfr3Oj4%2Fz2rrrUmIjgtBtCq%2BAHv8iANijupeGs00C78wU51ldIVNFpenCmkcMCLW6TgfqS3d07JPUQT0BF3aZR0%2FrT7uq8YkpX&X-Amz-Signature=e4e9eb50ecbce33bc555a6bfbb5266bd766e81f552064385ad96fa5e60c233cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
