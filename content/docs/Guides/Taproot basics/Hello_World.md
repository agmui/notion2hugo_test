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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFHCCFC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDt5J2XCb3S3O4AtRrwYgVkRFZ6uRSSFPEwRBAbe%2BKrfQIhAMJrU3m9fvQ5wfIJzG6oA%2FoBErq0dzAWnl%2FsBygOVRMcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJ9%2BqtvqkqeGdod4q3AOStR45OInMgkMSkS9mDt9nefJ7Ygd1WYrnHVJ9Btiz2QUqTEheSOt%2FdgcxlvPYTtfxz5FZUEw0j83pBo0Dlzz2qUEnDrmDArDhhzoZUkXriZeXsx4HEdCR4SvAuQauhPgOPz2plKgeH9BxErS90Mzd%2B6F6UTT1lbxVfyQZnkeLyJHQ%2Bdk9vYuCdgqUhSJS06xwryi5ardj7FCNBSc2HGLQ%2BIU1tyfP06%2FXnIQ09T%2FGgo98YSQo3lYVonPYJ9Uo9yT4e35LFGuZCQWjtXLwjYMPcWEJszGCHhKufIHsJgrFC0ldQbBelz4S4NrFl3A1qPEb2lapVz6ksf%2FQztcMPwwYkVgH%2Btu3hYUlz7JJoW488eKbNvOuv9EGDmJMJYbAm4eYZa58xwYesj2KKAGOKUDVWSu9t9tmZS5JqoZ29mhEZnmEKuIWOQNHba8%2BmAFX4mn6GXAH0ixcp624yxErgsYJgztnU4cXp5NXpO7Qt3a1GXjJbbozyDRLpzwqkn7jqF1a5IGjvywRCI%2FPbC%2FjAEDCEhCtzxGHTAkc%2B7EmtD1rz5vgvH62w3D%2BStMs6dfX0p2g2tHgWnkjURyJ2E5pOaJOaAqLEUnVtu5I6EIDJCZpKI%2BR97z6KBcBIkc03zCU2PO%2BBjqkAfWpzDxU1MqF3Mzf8TUXqgoBlBgOLV6Q0pnTdOSF3TzE%2FyrYQeblVLt1p7mQrPzttU5%2FYKmUaw%2B70VgK2P4xat7SzGsZbBwp6srcq7dcfP77f16ohz67%2FpfInTIjAHO2jWKKBsxDCFL%2FlVmIY%2FY%2B%2FyyBQKWW0MUCOZGdl74avQfPtjbDMWTQRSqQWx4ibGOUT2S8FwTyZp%2Flp0tpTvgan3KSZbZp&X-Amz-Signature=68b83090b7a149285d1b8bfdd562f3a32d906989eb61ea48c9998c2f0a5acf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFHCCFC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDt5J2XCb3S3O4AtRrwYgVkRFZ6uRSSFPEwRBAbe%2BKrfQIhAMJrU3m9fvQ5wfIJzG6oA%2FoBErq0dzAWnl%2FsBygOVRMcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHJ9%2BqtvqkqeGdod4q3AOStR45OInMgkMSkS9mDt9nefJ7Ygd1WYrnHVJ9Btiz2QUqTEheSOt%2FdgcxlvPYTtfxz5FZUEw0j83pBo0Dlzz2qUEnDrmDArDhhzoZUkXriZeXsx4HEdCR4SvAuQauhPgOPz2plKgeH9BxErS90Mzd%2B6F6UTT1lbxVfyQZnkeLyJHQ%2Bdk9vYuCdgqUhSJS06xwryi5ardj7FCNBSc2HGLQ%2BIU1tyfP06%2FXnIQ09T%2FGgo98YSQo3lYVonPYJ9Uo9yT4e35LFGuZCQWjtXLwjYMPcWEJszGCHhKufIHsJgrFC0ldQbBelz4S4NrFl3A1qPEb2lapVz6ksf%2FQztcMPwwYkVgH%2Btu3hYUlz7JJoW488eKbNvOuv9EGDmJMJYbAm4eYZa58xwYesj2KKAGOKUDVWSu9t9tmZS5JqoZ29mhEZnmEKuIWOQNHba8%2BmAFX4mn6GXAH0ixcp624yxErgsYJgztnU4cXp5NXpO7Qt3a1GXjJbbozyDRLpzwqkn7jqF1a5IGjvywRCI%2FPbC%2FjAEDCEhCtzxGHTAkc%2B7EmtD1rz5vgvH62w3D%2BStMs6dfX0p2g2tHgWnkjURyJ2E5pOaJOaAqLEUnVtu5I6EIDJCZpKI%2BR97z6KBcBIkc03zCU2PO%2BBjqkAfWpzDxU1MqF3Mzf8TUXqgoBlBgOLV6Q0pnTdOSF3TzE%2FyrYQeblVLt1p7mQrPzttU5%2FYKmUaw%2B70VgK2P4xat7SzGsZbBwp6srcq7dcfP77f16ohz67%2FpfInTIjAHO2jWKKBsxDCFL%2FlVmIY%2FY%2B%2FyyBQKWW0MUCOZGdl74avQfPtjbDMWTQRSqQWx4ibGOUT2S8FwTyZp%2Flp0tpTvgan3KSZbZp&X-Amz-Signature=7c03392ab2716d256992c984f46bd809d2ea3f6a0c44d5d13e3fe00109897f58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
