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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XYS3PQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICMlZ3Q4HB%2FpybkaXd6fxb16lXTJ3jeTWfwVfi0gY17bAiBjOO30sx0WG%2BQkT%2FdPMnaASw%2BaWltpXCNCpWcvwmFJGCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMlEghzVo7d%2BLxIihwKtwDWaQhBlfPDJgAa6s3yfGgVf1HgrcCLaFqC1kfSxAyBSaCq58vdyjC7fP1FAxkgUoH8t1TBt2Pz4CHw1o90rH9FnECbSz%2BmsDOip9baZHcSfenKI1tSpuEnH7FUpCtuRFwdHc5EwHi1JBMe%2FqPI%2Bbyc5k6Ry%2Bfvt7g%2Bne0xoBzMStkID3%2FoK5zCLaf2iFNGC%2BY3nQIQXx%2FQVUrQtrHh1nysxRT%2BLi5oImKnTkKEtI6uBdK8FbCbHXE6dFk8I1ORkk0G2lnQVT6eHgNreZyglBoyePz2ZKaGrSZK80TX0C8of51ZQYejVvl87rHxns0C0uaYzocPU%2F1RITNa%2BLUJsqD%2FdKOTQyq13xJR4Elp4JaROGeDXN1Nvw6q%2Fhc2eOmKOCbwTzuCqxy2Xid5Sens0EIsw8JliHHzBOuH3jEpRe9VUQqCR3O6HsoKm1Se8VUIulZAv7CniPfRm9EMMlBLtwCX5rxG1GgDKJYba1shv1nHM4lyTQnoExzSgmYQgcAjfV1FIPxz3rNagUZAW%2FWygX5w04Ml8nkKKSbwyKj%2FLMm6FrBDsZJVHZiyVBD5PdYI%2FCxAgEFBmdNP69B8qSFScp0za5rvawQpGPKAwsqtOqn2HbDLym1X7vpXrh4E%2Bgwq67NxAY6pgEJz74V%2BOQaxI5tfAQyDK7xzPnGCINYlHKj5U4wjXaN5MfmyrqYOkNWgI8ycfGoO6PGE%2BKS9hPx%2FWa4CgvVVZ8G8YyscN03W9o9zdYRTTEgh8YHayn5VaB088u81XoHOx6MxPbiarW92%2BcFsV%2FOT4oBba2HAqQzwNlaO%2BPpNaBJLa8Qw%2FhSfqgw0Qp2PPkggyZBax2gugyr%2Fn%2FyI99Dk0b5ldA%2FUDh6&X-Amz-Signature=ad0b2f06a2761ff0cb66f5153cd93a7f3bffc3fbcf5875d7afab02035085a065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623XYS3PQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICMlZ3Q4HB%2FpybkaXd6fxb16lXTJ3jeTWfwVfi0gY17bAiBjOO30sx0WG%2BQkT%2FdPMnaASw%2BaWltpXCNCpWcvwmFJGCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMlEghzVo7d%2BLxIihwKtwDWaQhBlfPDJgAa6s3yfGgVf1HgrcCLaFqC1kfSxAyBSaCq58vdyjC7fP1FAxkgUoH8t1TBt2Pz4CHw1o90rH9FnECbSz%2BmsDOip9baZHcSfenKI1tSpuEnH7FUpCtuRFwdHc5EwHi1JBMe%2FqPI%2Bbyc5k6Ry%2Bfvt7g%2Bne0xoBzMStkID3%2FoK5zCLaf2iFNGC%2BY3nQIQXx%2FQVUrQtrHh1nysxRT%2BLi5oImKnTkKEtI6uBdK8FbCbHXE6dFk8I1ORkk0G2lnQVT6eHgNreZyglBoyePz2ZKaGrSZK80TX0C8of51ZQYejVvl87rHxns0C0uaYzocPU%2F1RITNa%2BLUJsqD%2FdKOTQyq13xJR4Elp4JaROGeDXN1Nvw6q%2Fhc2eOmKOCbwTzuCqxy2Xid5Sens0EIsw8JliHHzBOuH3jEpRe9VUQqCR3O6HsoKm1Se8VUIulZAv7CniPfRm9EMMlBLtwCX5rxG1GgDKJYba1shv1nHM4lyTQnoExzSgmYQgcAjfV1FIPxz3rNagUZAW%2FWygX5w04Ml8nkKKSbwyKj%2FLMm6FrBDsZJVHZiyVBD5PdYI%2FCxAgEFBmdNP69B8qSFScp0za5rvawQpGPKAwsqtOqn2HbDLym1X7vpXrh4E%2Bgwq67NxAY6pgEJz74V%2BOQaxI5tfAQyDK7xzPnGCINYlHKj5U4wjXaN5MfmyrqYOkNWgI8ycfGoO6PGE%2BKS9hPx%2FWa4CgvVVZ8G8YyscN03W9o9zdYRTTEgh8YHayn5VaB088u81XoHOx6MxPbiarW92%2BcFsV%2FOT4oBba2HAqQzwNlaO%2BPpNaBJLa8Qw%2FhSfqgw0Qp2PPkggyZBax2gugyr%2Fn%2FyI99Dk0b5ldA%2FUDh6&X-Amz-Signature=9a19d2526e084d305f6cf35a662d2a795b0cc20d7fd4b1b3dea78e95febe242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
