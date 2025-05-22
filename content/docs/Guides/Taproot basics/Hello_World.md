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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSIBJV2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSh3b6xMV%2F9kA5MTP54bkMqjpoSTAbeVY9pXWz15JvWQIhANUgHvhraIbDqj4bM8Kd8gNKzdnXJ%2BJWmBdnMeHSCmaEKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoLrxfVSwT%2BpElXt8q3APJdMM7%2Bca4zdi%2F2xwicMQ%2BNQLBByBZVA4T%2BXE3s0g2Z2FsNClMXrQDIBJvUinjFSDUgUs5v%2FoZHikL28zOUIazO75Jo6Rk2gYoTBDStb94%2FSBUtfg41tcZ6sJZXVUz2TEq7%2BuC%2FiY%2B8kapLnA7FjitzplKJn7zEKSXNAt%2BrPrcdMQDkZxHHyzvUj8VOt%2FbHbSuWdGEopiABXbSYgVPcTEGC1FSR4414IBd91%2BcYCfIMWPCS%2B0%2BSkAV%2BUND42nAMW7P5tWGw0FQK4S%2F0h0wQqUO6aqkwDtuC7VgBCCaE4BGXKKlDS4VnTLRGUr1f3nJIN2%2BQSqjXfvpi%2BLJunG7JZ6XgfW9%2BtNZPl%2BxebsGa6VviqmuwFQSadKF3AWNZi%2B5AWz8%2BR3p%2FxkC0tR0FIUyAWSZYsYdz%2BhNwWcPSGg%2F7RBkWONahM24SkWtcbUKqvfzdQ%2B3%2BUTX8JgsY39nQ%2FELM9BlbulWmNUNB4Vxsd5jjWkBJXzdwPgbslOekH2%2Fjh0qxhT5eK5Ul3gt%2FvYD94pyA%2FDyd%2BdtL%2FrLzxV%2BXecDiaKPH7qfmDpIh1F2qZsQq5e3tR4%2FczuzLq4Zk5JSUk4PA7U7RBKDoQBeKpWmqFk4dV6DOqH17KTXR5vF1g49dDDh7r3BBjqkAaoLT%2B0wphu%2Fvk1XjoD%2FtgXRpuSx2D5dOWo1fsZPTQ3Mv%2BH3iW5pNR30iLi%2F%2FJ4eAyuXTf494oNyFB%2FQvnpnKX8n0EDVE824f4K2qOAwzf3A6TVvojuI8kuZxWvqNgnJ9nvmWxqOfZraRDxT7DISRkd4L6W3w9eMpGQVfDnE9v9%2FVxBFgGJVwjav3dFjNuuXz629LWkzdbRXgOmbpSUHmc%2BPGtSe&X-Amz-Signature=ed7c3ed7f95aaa24455803b948948d4b6da8dbbb92af25b8c45a6c42f2407a43&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSIBJV2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSh3b6xMV%2F9kA5MTP54bkMqjpoSTAbeVY9pXWz15JvWQIhANUgHvhraIbDqj4bM8Kd8gNKzdnXJ%2BJWmBdnMeHSCmaEKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoLrxfVSwT%2BpElXt8q3APJdMM7%2Bca4zdi%2F2xwicMQ%2BNQLBByBZVA4T%2BXE3s0g2Z2FsNClMXrQDIBJvUinjFSDUgUs5v%2FoZHikL28zOUIazO75Jo6Rk2gYoTBDStb94%2FSBUtfg41tcZ6sJZXVUz2TEq7%2BuC%2FiY%2B8kapLnA7FjitzplKJn7zEKSXNAt%2BrPrcdMQDkZxHHyzvUj8VOt%2FbHbSuWdGEopiABXbSYgVPcTEGC1FSR4414IBd91%2BcYCfIMWPCS%2B0%2BSkAV%2BUND42nAMW7P5tWGw0FQK4S%2F0h0wQqUO6aqkwDtuC7VgBCCaE4BGXKKlDS4VnTLRGUr1f3nJIN2%2BQSqjXfvpi%2BLJunG7JZ6XgfW9%2BtNZPl%2BxebsGa6VviqmuwFQSadKF3AWNZi%2B5AWz8%2BR3p%2FxkC0tR0FIUyAWSZYsYdz%2BhNwWcPSGg%2F7RBkWONahM24SkWtcbUKqvfzdQ%2B3%2BUTX8JgsY39nQ%2FELM9BlbulWmNUNB4Vxsd5jjWkBJXzdwPgbslOekH2%2Fjh0qxhT5eK5Ul3gt%2FvYD94pyA%2FDyd%2BdtL%2FrLzxV%2BXecDiaKPH7qfmDpIh1F2qZsQq5e3tR4%2FczuzLq4Zk5JSUk4PA7U7RBKDoQBeKpWmqFk4dV6DOqH17KTXR5vF1g49dDDh7r3BBjqkAaoLT%2B0wphu%2Fvk1XjoD%2FtgXRpuSx2D5dOWo1fsZPTQ3Mv%2BH3iW5pNR30iLi%2F%2FJ4eAyuXTf494oNyFB%2FQvnpnKX8n0EDVE824f4K2qOAwzf3A6TVvojuI8kuZxWvqNgnJ9nvmWxqOfZraRDxT7DISRkd4L6W3w9eMpGQVfDnE9v9%2FVxBFgGJVwjav3dFjNuuXz629LWkzdbRXgOmbpSUHmc%2BPGtSe&X-Amz-Signature=4ef1f575a75b905be9b9e17831f9c4dfa94e6286bb598b628edd16f3da215e76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
