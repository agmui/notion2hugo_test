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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V66HZKB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2hahwa0bhnZk6bkeIgTVYknf65TXJ6AreL44FH0bASAIgED%2FO9WRaSOzX6VmOVfNkCp6cJg7VM7eZTBqZDwVIFJoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFZV1UyIzy8U%2ByqO3CrcA0j7RnDLjdgP9X2YjnJqHmoU4t1nK4GByQfoUbiJZ07yeEyHY7zIWJJsx1Mrhg6pmWXejZtxQn2Fn7TAP%2Ff1ecMyaNDrtwQTiPokl9NO0SR%2FvLv9%2Bv%2Fck1Jdoj7im7X0l59%2B3U4ohcI4iSFB7ulhVtQxahyeIPCZP1%2FaiTgjne%2FcHac%2BT7wJPYO84eUfnXj0q0k1dxEGfempJ3ltzkJVPAwbc2p2lOUCXIxvGpgX94vOMg9ov94RZXUZbx4U9pdQSkuA%2FTIh1W8geHluG6ZSu45HMI2yMPYWbFNf2aMHQs9AmEptZWxT2S78PULF1fLBQWYu8bVVqXua81fXYfG7SLSoCNuc7H0N9t8RPCdJLvQRfHnr7e%2FeAVtlwbDQgZpgACSWeWr5bfkq6G5FH5A16PZGxYq%2FNqrv49wLTeKJmSz6UT0Mx6Oei%2FA3z4DDGyyH2WjZD6teasOX6NwOaNdAPtFyyuLCzZhy02XwArj%2BnjQ%2FcTjqi8bk1ipPyqoHvMwPssE650kcy5QYmTMssCdLWyZLg4xRr7SMZZSNEO0NCkso3Og4g4NgtoiFit2Y9lGsM6kDmInh3VL9bMcHBhEV30toALVpC2WqnaQqXzpCA1wO%2BBQaoUGDtvAkxbo4MMHZub0GOqUBJ8%2BU3gkeKbniwqrfRA8EzpWkFCykpkDoU%2F67Vadgo5%2Fz8C8IdBwewz6zD5yjCQt4sWvEKdKT9yN3FWSkOAvGQR4ffHmGgot5A3smFqWQ9zuicYgNyENL64bHNxBiXj8jG4ByVpLpJxrTLsRIJ64C%2FsU4pF0JBdV%2BzO3Efv9CPdo8xdkwkOERGV2UkuVnj1qaxJ0IETWDCiiOhG4y1dr0fh%2F86yyk&X-Amz-Signature=f058bd1833ce7989ddf7efbe9b0fd8d85d5343c59bae8a790ee5caa543f3e983&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V66HZKB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2hahwa0bhnZk6bkeIgTVYknf65TXJ6AreL44FH0bASAIgED%2FO9WRaSOzX6VmOVfNkCp6cJg7VM7eZTBqZDwVIFJoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFZV1UyIzy8U%2ByqO3CrcA0j7RnDLjdgP9X2YjnJqHmoU4t1nK4GByQfoUbiJZ07yeEyHY7zIWJJsx1Mrhg6pmWXejZtxQn2Fn7TAP%2Ff1ecMyaNDrtwQTiPokl9NO0SR%2FvLv9%2Bv%2Fck1Jdoj7im7X0l59%2B3U4ohcI4iSFB7ulhVtQxahyeIPCZP1%2FaiTgjne%2FcHac%2BT7wJPYO84eUfnXj0q0k1dxEGfempJ3ltzkJVPAwbc2p2lOUCXIxvGpgX94vOMg9ov94RZXUZbx4U9pdQSkuA%2FTIh1W8geHluG6ZSu45HMI2yMPYWbFNf2aMHQs9AmEptZWxT2S78PULF1fLBQWYu8bVVqXua81fXYfG7SLSoCNuc7H0N9t8RPCdJLvQRfHnr7e%2FeAVtlwbDQgZpgACSWeWr5bfkq6G5FH5A16PZGxYq%2FNqrv49wLTeKJmSz6UT0Mx6Oei%2FA3z4DDGyyH2WjZD6teasOX6NwOaNdAPtFyyuLCzZhy02XwArj%2BnjQ%2FcTjqi8bk1ipPyqoHvMwPssE650kcy5QYmTMssCdLWyZLg4xRr7SMZZSNEO0NCkso3Og4g4NgtoiFit2Y9lGsM6kDmInh3VL9bMcHBhEV30toALVpC2WqnaQqXzpCA1wO%2BBQaoUGDtvAkxbo4MMHZub0GOqUBJ8%2BU3gkeKbniwqrfRA8EzpWkFCykpkDoU%2F67Vadgo5%2Fz8C8IdBwewz6zD5yjCQt4sWvEKdKT9yN3FWSkOAvGQR4ffHmGgot5A3smFqWQ9zuicYgNyENL64bHNxBiXj8jG4ByVpLpJxrTLsRIJ64C%2FsU4pF0JBdV%2BzO3Efv9CPdo8xdkwkOERGV2UkuVnj1qaxJ0IETWDCiiOhG4y1dr0fh%2F86yyk&X-Amz-Signature=e39988259ba8e0adee01687656e5cd48b813bb0e240b8fc3f326ae4c72ade4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
