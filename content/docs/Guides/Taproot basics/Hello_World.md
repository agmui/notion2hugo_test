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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQGWH5U%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZSIb0BWSruYM6TngUod3o44q1lpzBfS5Jc9KIvQr7%2FwIgX2uDWYpzP1aUcFfpjCVKrDZTkGvDgPN0s%2BWpv2604f8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkoczTPdqXjs5yHYSrcA5pWER7khqgmF6mtHrK4UhyWWxrLEuUg%2Fu%2B9ePE9U7ft3XPejOq8AqLRDlKqG3kgcfLDtiVD8hwV1OW%2FhtIzoMJdKpqsHr6vbPULDKMgLBaXDkefG7oa51rYJqI7T9RACiTeXxMVJp%2FIhETKJEcm8CUWFOFv1DlWd8%2Bp%2Br02NSaMFiOL54hP61eGADaWbzvY9nduoqnDO5%2B9Rkg945UyFqCjg3cKMVoLX3VQY5TC%2Bf%2F19UxPl%2BiJCKrfDJY6Tn3NsNLPtERQCSdOaJdqqinXSKIxG9qqUA%2FVdeW0WD2z8IMdbIC2ACbVhSydi9agB6zu0uzx%2FKrSVOBDzTiPA0AOf8fU6A%2BJTyfjc0%2B9MX%2FCsNTP3ijriL0Ll2By5rWox1iTMmrp%2FuRm7KCh8TBpXrmNrYhCFjwEFw41SAAU32h01yttuOqV8TfYNZwlTqusI8ugNuxHkvCZ4OOWdPIoC%2BYaMIpg7ofvZbs2RcFzrcNL9%2FhPPtaMvSDnoBbGMrbF%2BD2pkAN7cOkEkXtN74ua8i4KqR%2F5nCG8JMV4tBao5OXIxt2uGamMr5%2FNmnb81EEUSsahw3GM9snJZHd0nmyKJnici%2BvWw4C7PE9vxoaxFQHHlTbwlFj5jWlfCrtYkhVRMJC%2B18IGOqUBBtDmH9GuG8%2BH14cYxmVhx79tjmTqFRwOCBRL2%2BhliBT6wJdqbFGumKwNOLsiXQ4T7HYaoQ9c5qBBIpCNxToxShhaTzmusZz4uhssQGMBzcDfofymdGO72A5PXK%2BmR4iUIKuF6GHYzBlOpMdatdoKyn0oibQtjPDGI47j%2BeWzy%2BFnpSGeeiERtavtFi66nCYhGnfB1cxNFKv79YFgTXfIp8TKkLSq&X-Amz-Signature=04ece02e29794df96e777646b4a0556a34211b65c9be37544f748bdc5fb4ccbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQGWH5U%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZSIb0BWSruYM6TngUod3o44q1lpzBfS5Jc9KIvQr7%2FwIgX2uDWYpzP1aUcFfpjCVKrDZTkGvDgPN0s%2BWpv2604f8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkoczTPdqXjs5yHYSrcA5pWER7khqgmF6mtHrK4UhyWWxrLEuUg%2Fu%2B9ePE9U7ft3XPejOq8AqLRDlKqG3kgcfLDtiVD8hwV1OW%2FhtIzoMJdKpqsHr6vbPULDKMgLBaXDkefG7oa51rYJqI7T9RACiTeXxMVJp%2FIhETKJEcm8CUWFOFv1DlWd8%2Bp%2Br02NSaMFiOL54hP61eGADaWbzvY9nduoqnDO5%2B9Rkg945UyFqCjg3cKMVoLX3VQY5TC%2Bf%2F19UxPl%2BiJCKrfDJY6Tn3NsNLPtERQCSdOaJdqqinXSKIxG9qqUA%2FVdeW0WD2z8IMdbIC2ACbVhSydi9agB6zu0uzx%2FKrSVOBDzTiPA0AOf8fU6A%2BJTyfjc0%2B9MX%2FCsNTP3ijriL0Ll2By5rWox1iTMmrp%2FuRm7KCh8TBpXrmNrYhCFjwEFw41SAAU32h01yttuOqV8TfYNZwlTqusI8ugNuxHkvCZ4OOWdPIoC%2BYaMIpg7ofvZbs2RcFzrcNL9%2FhPPtaMvSDnoBbGMrbF%2BD2pkAN7cOkEkXtN74ua8i4KqR%2F5nCG8JMV4tBao5OXIxt2uGamMr5%2FNmnb81EEUSsahw3GM9snJZHd0nmyKJnici%2BvWw4C7PE9vxoaxFQHHlTbwlFj5jWlfCrtYkhVRMJC%2B18IGOqUBBtDmH9GuG8%2BH14cYxmVhx79tjmTqFRwOCBRL2%2BhliBT6wJdqbFGumKwNOLsiXQ4T7HYaoQ9c5qBBIpCNxToxShhaTzmusZz4uhssQGMBzcDfofymdGO72A5PXK%2BmR4iUIKuF6GHYzBlOpMdatdoKyn0oibQtjPDGI47j%2BeWzy%2BFnpSGeeiERtavtFi66nCYhGnfB1cxNFKv79YFgTXfIp8TKkLSq&X-Amz-Signature=36d39b1d06987cdbfc3bd0fbaa089b0b863c4adf46cf0c1a953706f78f2e8052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
