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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTSPOMX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2FhzXSJkiwiS8wXQmLLstnByER6uwi%2FQFLC63XtC76gIhAOYVSmfNuuWyx1WVWIH80xlL210q0jyKmbTdlZQKKG6RKv8DCDQQABoMNjM3NDIzMTgzODA1Igxi%2BKMx%2BtwHOXqYZvgq3ANMr5VyTsKgf44UWOuuIWQbF8prj%2FsYsWd9qUnpOJ3ua%2Fkv54961UiIcWRGbe5%2FWpt6DhllDRQ%2FQQRx9rSUgM4UXkR63T33xUoYmhYgYhNWOle26%2BpX8uR68Sjxifi11u57Wr9y1aflEsQhKRFxnYbEtT2r9IFW1uHyxOwm8ZpgIR6tU%2BaWtXNAD1SOHCOuyowiN230c%2BPflmbsXXWfdU%2FzQKln4duo%2FOAwLS7%2B8vFY4Kp9GSFqYwpJtRdOSluSZ%2BJbFrPPOXFXhPz3buYsFK2N%2FJTd4XYyWrz83EuqW%2Bq3dGuaThvTG9cY9jyvp1bcaX%2BnP7H6XtbZk4mvt709ozeSwGResueVkrAOAtGfNbu77OKt3D%2BT8N%2BY4cyDvmKNUmUAMXAmsM8%2FqWRa4eFk%2FTDcfYa5XX4gl0SrG8wCDxdhCJbclxi8ukwMwPcg2MA3YEjxb1%2BM9FanbVLq6DFAfBtSOQm0LWfwBPSXCDwlRFdpD9YboWaslrHy0DTZyOdtjzX%2F%2B8WmwEkKopnrzpyyj865NUsyQJUT1RlezCaC65YtPXRNdGVwJkwFcpZiX0oM7h9zDYhhakkpSw4kNAduC8NG6uugDAGgdD7Bk73eFYKgWNrvN99XmGgszRp4FTD%2FleTABjqkAREMTSTCHNAC8f%2BKk0urUlOVO9HEBOrtiGoGKmEzQY27Jq2dJIN%2BeZG6hiEyGyqiRrBY73H5uscvLnE2YVNUT4DK6cOtOuKWvfjivirBpkXEcfUD19NOViM2ioFbQJe7Jj9eFHqN0NKmGPYxQt3mllZoWaqJdNwytVXA2NIjZ3GAsNoeZ06x8K5I3fhVsShm6%2BBksbmrA8pXR09QU3dzbNX%2BbEWf&X-Amz-Signature=fb2f4d260617c444e5b8af6c1a878f046c881813d073c2c6655d175fbdbf3324&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTSPOMX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG%2FhzXSJkiwiS8wXQmLLstnByER6uwi%2FQFLC63XtC76gIhAOYVSmfNuuWyx1WVWIH80xlL210q0jyKmbTdlZQKKG6RKv8DCDQQABoMNjM3NDIzMTgzODA1Igxi%2BKMx%2BtwHOXqYZvgq3ANMr5VyTsKgf44UWOuuIWQbF8prj%2FsYsWd9qUnpOJ3ua%2Fkv54961UiIcWRGbe5%2FWpt6DhllDRQ%2FQQRx9rSUgM4UXkR63T33xUoYmhYgYhNWOle26%2BpX8uR68Sjxifi11u57Wr9y1aflEsQhKRFxnYbEtT2r9IFW1uHyxOwm8ZpgIR6tU%2BaWtXNAD1SOHCOuyowiN230c%2BPflmbsXXWfdU%2FzQKln4duo%2FOAwLS7%2B8vFY4Kp9GSFqYwpJtRdOSluSZ%2BJbFrPPOXFXhPz3buYsFK2N%2FJTd4XYyWrz83EuqW%2Bq3dGuaThvTG9cY9jyvp1bcaX%2BnP7H6XtbZk4mvt709ozeSwGResueVkrAOAtGfNbu77OKt3D%2BT8N%2BY4cyDvmKNUmUAMXAmsM8%2FqWRa4eFk%2FTDcfYa5XX4gl0SrG8wCDxdhCJbclxi8ukwMwPcg2MA3YEjxb1%2BM9FanbVLq6DFAfBtSOQm0LWfwBPSXCDwlRFdpD9YboWaslrHy0DTZyOdtjzX%2F%2B8WmwEkKopnrzpyyj865NUsyQJUT1RlezCaC65YtPXRNdGVwJkwFcpZiX0oM7h9zDYhhakkpSw4kNAduC8NG6uugDAGgdD7Bk73eFYKgWNrvN99XmGgszRp4FTD%2FleTABjqkAREMTSTCHNAC8f%2BKk0urUlOVO9HEBOrtiGoGKmEzQY27Jq2dJIN%2BeZG6hiEyGyqiRrBY73H5uscvLnE2YVNUT4DK6cOtOuKWvfjivirBpkXEcfUD19NOViM2ioFbQJe7Jj9eFHqN0NKmGPYxQt3mllZoWaqJdNwytVXA2NIjZ3GAsNoeZ06x8K5I3fhVsShm6%2BBksbmrA8pXR09QU3dzbNX%2BbEWf&X-Amz-Signature=a331672f8aadcda03818adbf86e764b3fc3c652dae6d39a245ddc1a972b2b84b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
