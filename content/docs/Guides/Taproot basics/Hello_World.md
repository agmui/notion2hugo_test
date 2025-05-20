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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRRBMFN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPzTOH39EihqH6iu8eAkcr%2BgUI13zz6ZyvlptWjvwYHAiEAkoEKV1%2FwykuhBCL%2FCe5QJslNY%2FP1Q1J6fhVngTeSCbAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfEs9a49Xr2H80ArSrcA%2BH%2FKq9TB3SMsWqAzU1rH8mnwGbf0grSDQAHYA4gXSw5PC4fEBAGcOfyNCP%2BEzUgN6JJQE19pIpIMuBSYSt%2FwgfJL5HghM9wFTpS9hBcHx4gHOn2EEYcTPP5%2FO7Jah2cGs2GxpEN%2FIIEpiDxIphr4w9WOb%2FbHWxEPbUEiGgp8D6KHx3mm8qiLi5sAGyzP%2FRUqiCWP2FQSw%2BUrFRulu1UD9kAiKPF78EaTf3NN7A9yw1nJieqfkt%2FYJoOHCXSuY6Y7zrVqZ2CWBl6ipBuw%2Fk%2B6hRXY9URcVJ%2Ba2xDiWkV0vna7Wb8ybIPVEgkxWo0mSESvEXPj4DyJuZHHmXSkgZ1F71vjAFgj6tSYtF6VOLDa7pfbn%2Fiwq1C89JyC%2B6GNyyzP8lsDUVx1IJBIcGUaXNtuOGZiHTMJFeS5trfnX0aQRkItvn6RwWMxjfu0jq8Xez4wT170sJ0PoLSVX%2FW76LqvkqunECGFCvq2T5Vhn5dZf6PQVOPYFTbWcv8NbhiJLfne1ZknQdELVFnDJ4JvNVK0Cg4nQheb12d%2FcUFHTD%2BBGZPmiOIPK0xKg2oKzIHV0Fu6ZWdGFYYKGCNKdAM%2BoRM74SuCv9dIHYJnmuHP4bUnjduposGQ2ZxegXoFE3rMK%2Bxs8EGOqUBqcmoLe1X8COFVho0iGqvy3j0bPChBODiBYw4wsB6Y8vAyn8eKYgAYbIBGa4yEkdTq5fYKHuLLHD%2FVgx5LJR8s9BaTyOTE6BBR838va8q1FIXgr1h97YqpiKHF7CwvgtGqi41PA7x7YNjQif5kfWa70gYsQTA%2BNjHrimWQ8dyyVcmGgwiFEksj4rOFWDU0trGJa3gXZKT5eMQWo%2BFdhcbeDyUARY9&X-Amz-Signature=875c8c196bc3647d1af29e175aaa19ac1684ad6f8a3d9b089d5373383e889b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRRBMFN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPzTOH39EihqH6iu8eAkcr%2BgUI13zz6ZyvlptWjvwYHAiEAkoEKV1%2FwykuhBCL%2FCe5QJslNY%2FP1Q1J6fhVngTeSCbAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfEs9a49Xr2H80ArSrcA%2BH%2FKq9TB3SMsWqAzU1rH8mnwGbf0grSDQAHYA4gXSw5PC4fEBAGcOfyNCP%2BEzUgN6JJQE19pIpIMuBSYSt%2FwgfJL5HghM9wFTpS9hBcHx4gHOn2EEYcTPP5%2FO7Jah2cGs2GxpEN%2FIIEpiDxIphr4w9WOb%2FbHWxEPbUEiGgp8D6KHx3mm8qiLi5sAGyzP%2FRUqiCWP2FQSw%2BUrFRulu1UD9kAiKPF78EaTf3NN7A9yw1nJieqfkt%2FYJoOHCXSuY6Y7zrVqZ2CWBl6ipBuw%2Fk%2B6hRXY9URcVJ%2Ba2xDiWkV0vna7Wb8ybIPVEgkxWo0mSESvEXPj4DyJuZHHmXSkgZ1F71vjAFgj6tSYtF6VOLDa7pfbn%2Fiwq1C89JyC%2B6GNyyzP8lsDUVx1IJBIcGUaXNtuOGZiHTMJFeS5trfnX0aQRkItvn6RwWMxjfu0jq8Xez4wT170sJ0PoLSVX%2FW76LqvkqunECGFCvq2T5Vhn5dZf6PQVOPYFTbWcv8NbhiJLfne1ZknQdELVFnDJ4JvNVK0Cg4nQheb12d%2FcUFHTD%2BBGZPmiOIPK0xKg2oKzIHV0Fu6ZWdGFYYKGCNKdAM%2BoRM74SuCv9dIHYJnmuHP4bUnjduposGQ2ZxegXoFE3rMK%2Bxs8EGOqUBqcmoLe1X8COFVho0iGqvy3j0bPChBODiBYw4wsB6Y8vAyn8eKYgAYbIBGa4yEkdTq5fYKHuLLHD%2FVgx5LJR8s9BaTyOTE6BBR838va8q1FIXgr1h97YqpiKHF7CwvgtGqi41PA7x7YNjQif5kfWa70gYsQTA%2BNjHrimWQ8dyyVcmGgwiFEksj4rOFWDU0trGJa3gXZKT5eMQWo%2BFdhcbeDyUARY9&X-Amz-Signature=13301c211076342761ae060864450f1f28579212221b9e8497c2212998b68854&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
