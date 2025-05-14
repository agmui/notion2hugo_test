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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY4WH6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC%2BgixrZY34LXCh9NjFhL9ecckxNOInZJBrw8gMxghObwIgIwVoGGaFkYC7R9F7t23FXYIBUwwIzsn2pr8yw%2F8SjMQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMNCBj2ad%2F2nQ0kxCrcAzUYc1SFWptXMMxuIJhFegmPscTlDFQkvKUGkS0Dwy6qOUqmgXMeSCvdDDN4bbXaHCATFVi05XTHMhx4nBoGGJgoz2yp64ohIG5RjjwMOS0UlXyGftMP9P%2Fzkdv27zgMETxLUsVpR%2BGHouPIRKXbXIU%2B5YePQ5pPfEXwUtsa6s3LGfgQMgFCCfAwFcxmvynY%2BFDLMw8koYgpBW3FjlTrFXYRKAAuMARDCPq%2Fzc3ijqmCy7bRoij10XfJjfOp%2Fl6ve%2Fsn4wVP7fhITFCtfJrI7AdM9aJNZhrxAbDL6FAo6I7nWb5MusSrIbwqq627SKX8z4nHhVmnZD6evtaJe%2FfeBxMT%2BXQrBe5wvyGTWzLFq%2FPHdlXkLzSTrj3lk3VXK0VN220tFTXNwg2tgzg9L%2BTS9ZjwlsZ1S40XLLAwYdP6beFofqH%2FpacGy8IBq6B0xwQRF1Dj3iwNPrdNoett0nMNnVYx87acg54Xhs0HPQUdc5teCw4yl73fmGNm3yzk5senyJG%2FKLU7WwbZclNM%2B05lfkdsrUx13nRUHadZj29qlerd7v%2FnabFcmjLghkvZWZF7xbkDPZqg0calCtJwQenyxTHE%2FBiXEazfuh9ts053rLRsdffPad%2F0l1Q4e5%2BeMIi4kMEGOqUBpusyccos0v2aQvTDmxo%2FaV%2B7Y2w%2BDyjKKXkawi0Bf3CKMiXFs%2FrHuUxzjzgfMtad4kiNpEJPVeMSUY1UhoVpIn0%2B1y1wUvQpfsVSeCcN56m10H2vJZJQLDnavj3wgd4F24W3S3ofHCdgZIkjG3o1ymJk6%2F4yagol38ancW8gl95PYwPQxjC9GfQelWDbA0WKZ2FazBeNEzC5LwhQA6FPw4oKoKMB&X-Amz-Signature=b946ebeb8c5a2087769a4429e782db224a93aa21ce597251f10f7214b04f6966&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY4WH6M%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQC%2BgixrZY34LXCh9NjFhL9ecckxNOInZJBrw8gMxghObwIgIwVoGGaFkYC7R9F7t23FXYIBUwwIzsn2pr8yw%2F8SjMQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMNCBj2ad%2F2nQ0kxCrcAzUYc1SFWptXMMxuIJhFegmPscTlDFQkvKUGkS0Dwy6qOUqmgXMeSCvdDDN4bbXaHCATFVi05XTHMhx4nBoGGJgoz2yp64ohIG5RjjwMOS0UlXyGftMP9P%2Fzkdv27zgMETxLUsVpR%2BGHouPIRKXbXIU%2B5YePQ5pPfEXwUtsa6s3LGfgQMgFCCfAwFcxmvynY%2BFDLMw8koYgpBW3FjlTrFXYRKAAuMARDCPq%2Fzc3ijqmCy7bRoij10XfJjfOp%2Fl6ve%2Fsn4wVP7fhITFCtfJrI7AdM9aJNZhrxAbDL6FAo6I7nWb5MusSrIbwqq627SKX8z4nHhVmnZD6evtaJe%2FfeBxMT%2BXQrBe5wvyGTWzLFq%2FPHdlXkLzSTrj3lk3VXK0VN220tFTXNwg2tgzg9L%2BTS9ZjwlsZ1S40XLLAwYdP6beFofqH%2FpacGy8IBq6B0xwQRF1Dj3iwNPrdNoett0nMNnVYx87acg54Xhs0HPQUdc5teCw4yl73fmGNm3yzk5senyJG%2FKLU7WwbZclNM%2B05lfkdsrUx13nRUHadZj29qlerd7v%2FnabFcmjLghkvZWZF7xbkDPZqg0calCtJwQenyxTHE%2FBiXEazfuh9ts053rLRsdffPad%2F0l1Q4e5%2BeMIi4kMEGOqUBpusyccos0v2aQvTDmxo%2FaV%2B7Y2w%2BDyjKKXkawi0Bf3CKMiXFs%2FrHuUxzjzgfMtad4kiNpEJPVeMSUY1UhoVpIn0%2B1y1wUvQpfsVSeCcN56m10H2vJZJQLDnavj3wgd4F24W3S3ofHCdgZIkjG3o1ymJk6%2F4yagol38ancW8gl95PYwPQxjC9GfQelWDbA0WKZ2FazBeNEzC5LwhQA6FPw4oKoKMB&X-Amz-Signature=fa977658a76830dd747912e027f9d90458b3c9d1657aaec232676bfc102604eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
