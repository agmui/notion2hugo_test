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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLQYNDK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkCTpvPg1c%2B4mIQj5fZ0tf8Ig1OFjO275b47TuONryxAiEAjzWc%2BTDA0J0%2F4zbszylwcAzP8iyp0B2ADP1A9TFaXRoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeXWgz%2FdETy0EGqmSrcA32Bc%2Bl0yka2EnQxw%2F93OCF2BXHJmPgzQwa%2F9RHpf1ML8gJt3uG57URRHzLaw0CgtopROtqh1yCgsnSqvF7Tm8zuL5EVNlxWWEHciFWvHh62qhq1uh79MjeHjGPke7dW3UmlD1cqXtfRPYlwMfe74oAxA0BP19cGJhEDOLIJFBjzNkycMwEPI2U5ASwhsrihAw0v83etn2OWeSjGo4sUabWLrbKI%2FzYW9KuUe%2B53%2FqkhLkpjvHPEBd3mwgxpMhVx4YfKbvmfoBN3dM4HhLYS98sPbLf0x%2FLk5zYtL%2FFxkfvB3pi%2Fg%2FZfhs4%2BQ8lA0gXT2hyC1WaOZLr0ajfDxzWyhnhP1fhFGoIqeuudTcYptv6uRLv6pslACULXfQicS%2BdZCHyJzfX3dca4WGs8Nzhu0vXBue7xR7QcpagwUJPRpveCEa%2FP7cG1flYwl4OcTXAGUOdC3QnsaE0aPywGYGksuym64F4rJqai5Y3AyKOlTo3kOKFhrXxUYlF29XoJy%2F5kO3US8AkEbnCuDzrln0TXl10Lq%2FAWqRvXGDFycFhRHv9vqDWW4KVl%2FYCdPLcNP0f32q6bDbTpxE90Szq3QSaXrdxRxxZfwtEtaX9J9OT7u6Djw0%2F3NBRRoGbCl7cJMJT8wcMGOqUBxFsa1%2FlGLZegnNNmNN4KyN932zmAuQMpKRdsKyW8P8p%2FhhMiWkFTI%2BpCKG%2FFZ%2BchFa8sl5BKARSPBkuECNkQ4tvBosgNr%2FANYS%2FlSbBVn5eihRmEZicW43DXHNj6GF%2BD14LcTk%2FAV3rU6p4UEDkj4%2FR4ZznwcFeX%2FVcPtIOcb%2BGjh%2BnraGCR%2BGpDua1EzT5xxavU6Luf0UwsbTAjfapfbNuAYwMs&X-Amz-Signature=1f2e9679aa68736cd2ea2afa457fa3e46a31f3258674c4339799052f95e68ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLQYNDK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkCTpvPg1c%2B4mIQj5fZ0tf8Ig1OFjO275b47TuONryxAiEAjzWc%2BTDA0J0%2F4zbszylwcAzP8iyp0B2ADP1A9TFaXRoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeXWgz%2FdETy0EGqmSrcA32Bc%2Bl0yka2EnQxw%2F93OCF2BXHJmPgzQwa%2F9RHpf1ML8gJt3uG57URRHzLaw0CgtopROtqh1yCgsnSqvF7Tm8zuL5EVNlxWWEHciFWvHh62qhq1uh79MjeHjGPke7dW3UmlD1cqXtfRPYlwMfe74oAxA0BP19cGJhEDOLIJFBjzNkycMwEPI2U5ASwhsrihAw0v83etn2OWeSjGo4sUabWLrbKI%2FzYW9KuUe%2B53%2FqkhLkpjvHPEBd3mwgxpMhVx4YfKbvmfoBN3dM4HhLYS98sPbLf0x%2FLk5zYtL%2FFxkfvB3pi%2Fg%2FZfhs4%2BQ8lA0gXT2hyC1WaOZLr0ajfDxzWyhnhP1fhFGoIqeuudTcYptv6uRLv6pslACULXfQicS%2BdZCHyJzfX3dca4WGs8Nzhu0vXBue7xR7QcpagwUJPRpveCEa%2FP7cG1flYwl4OcTXAGUOdC3QnsaE0aPywGYGksuym64F4rJqai5Y3AyKOlTo3kOKFhrXxUYlF29XoJy%2F5kO3US8AkEbnCuDzrln0TXl10Lq%2FAWqRvXGDFycFhRHv9vqDWW4KVl%2FYCdPLcNP0f32q6bDbTpxE90Szq3QSaXrdxRxxZfwtEtaX9J9OT7u6Djw0%2F3NBRRoGbCl7cJMJT8wcMGOqUBxFsa1%2FlGLZegnNNmNN4KyN932zmAuQMpKRdsKyW8P8p%2FhhMiWkFTI%2BpCKG%2FFZ%2BchFa8sl5BKARSPBkuECNkQ4tvBosgNr%2FANYS%2FlSbBVn5eihRmEZicW43DXHNj6GF%2BD14LcTk%2FAV3rU6p4UEDkj4%2FR4ZznwcFeX%2FVcPtIOcb%2BGjh%2BnraGCR%2BGpDua1EzT5xxavU6Luf0UwsbTAjfapfbNuAYwMs&X-Amz-Signature=db2e5e30b9dcf3e26cb11727801979b3156ec8b28078639f6a9a83b311800bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
