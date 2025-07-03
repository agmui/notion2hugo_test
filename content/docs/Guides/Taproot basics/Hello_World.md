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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWQ2KSG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCeOqRC1ZQAxilvuNrA30HIzPq8xhUEmPeLY5gwhejhJAIgGbwBY%2Fn6uVqYAVV4fwaZAqYzfbZmRYUMBcNGc33wB3Yq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN9TcvX02ZzAatwuWircA59hdLlxcHCaSyOX5wd0sXLZGshUPlIDC7mi2oQUnc71Li2AksrfV57VopLk4rmukFXUJUGvpzjDYs5MM2tpjolv%2BZbp%2FbHxqIFxz7sQBYauRXCVdgFs0XgkuD0PlHrbTP81XBAO1D8FcKPpZ27rvokzDIKQPawfQoaNN4Twc3hZEs7xcNIQwkgqkX6n5PezEAHODNc4w9%2BPQvXj7NRlHEJey0hons%2FLNtYx%2F0%2BuJjWrJZzom1Pv4RXIxLNuVJHlBeCwoA2uMGcT1VqxtSj%2Bme2WQXwJ64%2FzP%2B6tXArOO7r%2Fpzt5KXpas%2FVwz8F65LzR0ZJwhOD8geic47spguWRPo1Hrofe75BNTYoFH6txg1nEkdtP1jnVFv3DOCTUHeWlfiRNuOCrjzELA5MWjeJHG00GUyvEX%2FaMfKuxYf6xYV%2Fluorwmq%2BzuN1ellS2TL2bqZdaAiZNXoNDXPMDgweBXaW%2BhRbyXyk%2BoEjRpg7u8tGkfD%2F0YnXWUAGUwEP1uc6z%2B8YiHK0NxkiDzj6x%2FW9HPidNDYOk0Q3iPC75SeQukAompZgL17%2BRYPtq%2BhND%2B9pcpcwVCH9hQGO9nnuxCFCaKH90sjN7P6mXMSC3ixcYTLip0xFcXrc78e21QeFUMLuImcMGOqUBnto%2FvsaRvqm%2BD8jongUAhqXhcXWC4UsYwEaooTIj2jbq92ANhe%2BIKIweBMUUXqXngLx%2BXIg1gUYTbggwjhj54NcbdoAVtL50qpXvOT9%2FVzOzpkLLQ6uarVNmgLq1Il13zpUqzMtq2IFc0pUsQjrLTCA9%2Ff0jSDjPsAY7FuWEE%2BqMPuJcqP5LEIZIZtr4rJKjEsNL6YRNJgLns3Pk4CxFkQb96g%2B8&X-Amz-Signature=0f65826ffe05aa86fa6638ff9e6f70cb972aa8873d7b858cbdb355459abc31f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWQ2KSG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCeOqRC1ZQAxilvuNrA30HIzPq8xhUEmPeLY5gwhejhJAIgGbwBY%2Fn6uVqYAVV4fwaZAqYzfbZmRYUMBcNGc33wB3Yq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDN9TcvX02ZzAatwuWircA59hdLlxcHCaSyOX5wd0sXLZGshUPlIDC7mi2oQUnc71Li2AksrfV57VopLk4rmukFXUJUGvpzjDYs5MM2tpjolv%2BZbp%2FbHxqIFxz7sQBYauRXCVdgFs0XgkuD0PlHrbTP81XBAO1D8FcKPpZ27rvokzDIKQPawfQoaNN4Twc3hZEs7xcNIQwkgqkX6n5PezEAHODNc4w9%2BPQvXj7NRlHEJey0hons%2FLNtYx%2F0%2BuJjWrJZzom1Pv4RXIxLNuVJHlBeCwoA2uMGcT1VqxtSj%2Bme2WQXwJ64%2FzP%2B6tXArOO7r%2Fpzt5KXpas%2FVwz8F65LzR0ZJwhOD8geic47spguWRPo1Hrofe75BNTYoFH6txg1nEkdtP1jnVFv3DOCTUHeWlfiRNuOCrjzELA5MWjeJHG00GUyvEX%2FaMfKuxYf6xYV%2Fluorwmq%2BzuN1ellS2TL2bqZdaAiZNXoNDXPMDgweBXaW%2BhRbyXyk%2BoEjRpg7u8tGkfD%2F0YnXWUAGUwEP1uc6z%2B8YiHK0NxkiDzj6x%2FW9HPidNDYOk0Q3iPC75SeQukAompZgL17%2BRYPtq%2BhND%2B9pcpcwVCH9hQGO9nnuxCFCaKH90sjN7P6mXMSC3ixcYTLip0xFcXrc78e21QeFUMLuImcMGOqUBnto%2FvsaRvqm%2BD8jongUAhqXhcXWC4UsYwEaooTIj2jbq92ANhe%2BIKIweBMUUXqXngLx%2BXIg1gUYTbggwjhj54NcbdoAVtL50qpXvOT9%2FVzOzpkLLQ6uarVNmgLq1Il13zpUqzMtq2IFc0pUsQjrLTCA9%2Ff0jSDjPsAY7FuWEE%2BqMPuJcqP5LEIZIZtr4rJKjEsNL6YRNJgLns3Pk4CxFkQb96g%2B8&X-Amz-Signature=bb446e1f9e4e7a6e6c230b374508cdbd39971d3fbacf94ae1a983ad6005654cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
