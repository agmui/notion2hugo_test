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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPK43BX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkaASd4suQ3Arv5VK1RfOmSq911cfiCLXS1TVknVNNwIhANC0Eh2%2Bm03upQQyT4rAU8y%2FUjs%2Bjz0IrMi%2FcA2MRXOYKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5RS%2BLqX9TQUDxwsgq3ANBLfNU31IU%2FQtVd5TL%2BI5n4FMA7xx9fgZSQDeoloS8%2Ft%2FWQUt%2FiKrMdQFLJo7kZUs6ZQB8PlSehm%2Bq8pn%2FMsSH10Tv05pXvDrMcE4Mjji8Ak5MNJlSqyBDxsFoK0qEZR2fapOYCfmzJyy2vJTZ7%2FSVwK3X2Wr47Qps%2FHmO%2Fxk51DxdmtqKv5kfuu6W%2F2xQvL60Wh7ErQM0wLnSnmuo1xRf7td08KYqYQIlaecdKg8ij6SUnm1EUI2G94AOF5WTLoI%2FLCNhs921vq1Lp2TyU0qTfW7Z%2FT9v6vgWu5GG7j57H2essnRepHQx7rd2dcO7PqBP%2BGphD%2FeWXLJ93k%2BoDSFrO%2B1OFGbLCZ4vqPygHrdv99nmg97%2FULr4dtJ923jAaTd2xAgSf6YZXklPhCwooJCzcmJyHGC5uuVJEfTAOa5ZyWZ6b%2Fr0ZVJJq2e59BQf9jo3L6lNuGA1FO4xzh7MXHDWQ593EI5qgAY6rAlaTzqYp3rAaVk52X%2BuEA9inUwicj%2Bud%2F45LTSL%2F62JeZVJUEboWEE2zaqBB%2BLob06%2F9sXe7DW1pj2J1FZWJt9FsB6DuEJshh2ehziRZDC33he9g70dHAc9r2OhAwoplE%2Bvz3mdcXKhVheER4263IafZTCy0tnCBjqkAXwPgxGaFqszbbQcN9BBkW6ZpZcRMlMYAqVWFc3iwRyaBQGD18lXGVxSUVF8k1v5k2eOBIOOykrFZPH3ZzfOAUq8bfeOMPC%2BR2eZFNjC3z0GQ7fJ8cHDPFv2pPrC7%2BcAZgPo3cyQMXMrnzuMmyS1UEBpd0rRj93eIvj18opzXrCv2K80peWRJ372eXjt%2Bdl7nDwP8TrR0SYoCgujEhlVuX0sH%2BlG&X-Amz-Signature=a5d73291b2088ef0b388087126e93b2e0075381f7af0f9bd5bb858cf1a790c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPK43BX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMkaASd4suQ3Arv5VK1RfOmSq911cfiCLXS1TVknVNNwIhANC0Eh2%2Bm03upQQyT4rAU8y%2FUjs%2Bjz0IrMi%2FcA2MRXOYKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5RS%2BLqX9TQUDxwsgq3ANBLfNU31IU%2FQtVd5TL%2BI5n4FMA7xx9fgZSQDeoloS8%2Ft%2FWQUt%2FiKrMdQFLJo7kZUs6ZQB8PlSehm%2Bq8pn%2FMsSH10Tv05pXvDrMcE4Mjji8Ak5MNJlSqyBDxsFoK0qEZR2fapOYCfmzJyy2vJTZ7%2FSVwK3X2Wr47Qps%2FHmO%2Fxk51DxdmtqKv5kfuu6W%2F2xQvL60Wh7ErQM0wLnSnmuo1xRf7td08KYqYQIlaecdKg8ij6SUnm1EUI2G94AOF5WTLoI%2FLCNhs921vq1Lp2TyU0qTfW7Z%2FT9v6vgWu5GG7j57H2essnRepHQx7rd2dcO7PqBP%2BGphD%2FeWXLJ93k%2BoDSFrO%2B1OFGbLCZ4vqPygHrdv99nmg97%2FULr4dtJ923jAaTd2xAgSf6YZXklPhCwooJCzcmJyHGC5uuVJEfTAOa5ZyWZ6b%2Fr0ZVJJq2e59BQf9jo3L6lNuGA1FO4xzh7MXHDWQ593EI5qgAY6rAlaTzqYp3rAaVk52X%2BuEA9inUwicj%2Bud%2F45LTSL%2F62JeZVJUEboWEE2zaqBB%2BLob06%2F9sXe7DW1pj2J1FZWJt9FsB6DuEJshh2ehziRZDC33he9g70dHAc9r2OhAwoplE%2Bvz3mdcXKhVheER4263IafZTCy0tnCBjqkAXwPgxGaFqszbbQcN9BBkW6ZpZcRMlMYAqVWFc3iwRyaBQGD18lXGVxSUVF8k1v5k2eOBIOOykrFZPH3ZzfOAUq8bfeOMPC%2BR2eZFNjC3z0GQ7fJ8cHDPFv2pPrC7%2BcAZgPo3cyQMXMrnzuMmyS1UEBpd0rRj93eIvj18opzXrCv2K80peWRJ372eXjt%2Bdl7nDwP8TrR0SYoCgujEhlVuX0sH%2BlG&X-Amz-Signature=0fa8775f032892da8d00d2f43c06b5902ca827b0d29dbcf1ebb92775579ab125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
