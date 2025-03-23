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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IF6QDJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2BtSD7BpLhJToSetSMxYLhuoZAeKPErHnzuKo3%2B%2FOZwIhAOdSnJxC2VNdx%2FdQuGsG8U5m0fSkfyCSKar7yKRNfQReKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDu6M3C5hXC3xz4xgq3ANGjZpsSx1IvpV7B1o2vVYmXcvIDqeflpiDljnmCrGwYZahiGeF%2FT2f2Z17yhFcmEzkz%2BNB2dbIHz6qdLrzGikaxfH8SW4EcwEdqsS%2FpCNWC9777OaBgnBoIVnB5K9mh2pCoJ7ylYfxG14rzSmJBQbkKGIouBwMUGHrF5k72rtRF%2F2RKGZYxQ%2FmPugeabjYqb0iYRTvdcQr6UQ6A5OLAdC6d4HCI1uJ69TEGAXd1eGyzyQsu3WboJJ9NEDqU0tel0frocY1xvWlye2RQkLHLPPQPlkC7eUhAb05ie8e9JZIC7WkGjGc73wMH88jefD2boMayIyUcNYsHGM5aVPB%2B%2BM7BZRitBjt12R0BmWebupm4AuN8FTJREf%2BPhGgvhGTvZnG%2F%2B341PoGo52qDOCtr0xGNa866ugck0xVZcvOobaRNAUfdqFjOH2GjNbDXTBtX8tt63F6XkNjDtrfz6L0jqwIYhpNIr86bZF2lLPX5h9HBSudcXZeqBM01Rcj0b%2FHtLH0BLWhy%2F38hnghR%2FdrbG6daDrbX8uOGjonD1fpTqaiKuNYupPrDmNSYBj2vMDo0fAn55Zt67TklVKiN7cWpzZaeHHRPczGBP%2FQTGsLMJYkYTtwCZDM9E1ryEZ%2FQDC3q4G%2FBjqkAXYdaMzvRekpYOVgPlMQ8CQwH6OqiNV8UaPfFLniCivAy7Rw2FNKHylStwN%2Ff9n1qzJ%2FS905VDYjaDAjQHD7ykCA7vMEtrtxdnfHGfgiOIScxIwuhKXkUZHicqA1ZnTyWp%2FidxUVSIPLyXABV4itSUAkKaItVA2oACukvIQXvxmRYh4pAhBl3k1n5oD%2BZ6g2fIQggQBTWeK9wQxRPEFDW3tWOHE%2F&X-Amz-Signature=04d35d14ba82f80da0cb239be7f3f59433922da198760ce9daec279432c87dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IF6QDJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3%2BtSD7BpLhJToSetSMxYLhuoZAeKPErHnzuKo3%2B%2FOZwIhAOdSnJxC2VNdx%2FdQuGsG8U5m0fSkfyCSKar7yKRNfQReKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDu6M3C5hXC3xz4xgq3ANGjZpsSx1IvpV7B1o2vVYmXcvIDqeflpiDljnmCrGwYZahiGeF%2FT2f2Z17yhFcmEzkz%2BNB2dbIHz6qdLrzGikaxfH8SW4EcwEdqsS%2FpCNWC9777OaBgnBoIVnB5K9mh2pCoJ7ylYfxG14rzSmJBQbkKGIouBwMUGHrF5k72rtRF%2F2RKGZYxQ%2FmPugeabjYqb0iYRTvdcQr6UQ6A5OLAdC6d4HCI1uJ69TEGAXd1eGyzyQsu3WboJJ9NEDqU0tel0frocY1xvWlye2RQkLHLPPQPlkC7eUhAb05ie8e9JZIC7WkGjGc73wMH88jefD2boMayIyUcNYsHGM5aVPB%2B%2BM7BZRitBjt12R0BmWebupm4AuN8FTJREf%2BPhGgvhGTvZnG%2F%2B341PoGo52qDOCtr0xGNa866ugck0xVZcvOobaRNAUfdqFjOH2GjNbDXTBtX8tt63F6XkNjDtrfz6L0jqwIYhpNIr86bZF2lLPX5h9HBSudcXZeqBM01Rcj0b%2FHtLH0BLWhy%2F38hnghR%2FdrbG6daDrbX8uOGjonD1fpTqaiKuNYupPrDmNSYBj2vMDo0fAn55Zt67TklVKiN7cWpzZaeHHRPczGBP%2FQTGsLMJYkYTtwCZDM9E1ryEZ%2FQDC3q4G%2FBjqkAXYdaMzvRekpYOVgPlMQ8CQwH6OqiNV8UaPfFLniCivAy7Rw2FNKHylStwN%2Ff9n1qzJ%2FS905VDYjaDAjQHD7ykCA7vMEtrtxdnfHGfgiOIScxIwuhKXkUZHicqA1ZnTyWp%2FidxUVSIPLyXABV4itSUAkKaItVA2oACukvIQXvxmRYh4pAhBl3k1n5oD%2BZ6g2fIQggQBTWeK9wQxRPEFDW3tWOHE%2F&X-Amz-Signature=1ac1fce346c80a78b308a50eac5569ac703ee142f239860b3cbfd918884f88ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
