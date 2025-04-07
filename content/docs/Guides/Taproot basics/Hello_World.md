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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF3W7RF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YWZUT87ec8utamexnA5jBwgmSIyCVkEIg4FXuFZRTgIgKf9lHatVvdmR%2F44wy2nm%2FSqMmvuo49okpgj%2FH%2Bxv5gcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVcf4s4DnGc8CsOCCrcA%2BamcN3IBE%2Bkj%2Fjyl%2F74NcWaDIF1VwlgcNfCMn1ba%2FNcb2FvQqYRJ%2FIlOJ%2BpsMs5IXU9KB8aIgH0w8lFItsOygyKLkI5M806tRCrIsENZvpvgNihUJ6OcugzlrytKBbBRW%2Bi9Z9SJRetyLlwxQJxp7td9TKh6Mudo4UW2r1rX8ZT%2Fvu1M1d%2FFM9X1AhVEMjjzpErW%2F456FPSqGzZi0iSD0i%2FZ0cVzT7NXkTQ1uL5RiE%2F%2FzbDqqmxyScJZILEcDMKtjXHFg3YxPV6kRC6Cshj0osBGQjSOqvh%2B8DWXoL0RaC5C2BBvXY9iKRSrwpsto4qiE1uH8M%2BRVKcRS%2BGn6yO71qPHwHmNylqVF5Rm2TezDWpPI0QjQjQN8%2B%2FV6tAZrDpalQ0PXNtaaZ4NxL0OcPz62m5eV2QtN4Mz1u8YUm7sHvbmjCQZEDf6uVqbDFNfo3SmnJwORqk2RGZfCCzbdBk3KmK3GpH3YjayW5DT4ZUt3QX29zVcfCuqS4QCI%2BTUYC7hdvDF7%2BYPL2TlISCToS29FDGmxGMSij%2FTHX4opXMgGWADPjOKh3o%2FaPo4YoNH4vVzKsG56nyJWPybo86UhnqrnAEK2BYtDmg1geJjnCamvIAe9SOvDRBwuYa%2B3G9MI3Uzr8GOqUBrHnc%2FNFmCNUXLy%2FX28Iubh36OLE5wMErk5KbO7%2BkyqOi7rgOwmPuoA%2FuBEnWZLxzwuHgPXWOZiyskf9MtL9JqAWAeZcvlj8SHcljIpnIbKrS5826djfNt0IS1VioM0PGOO87lKgZTa7KMTpkJf2iAmVDLznhV4P%2FlaFBoNTy8ovExjehLafkjBU1VQRiHncNewOLQ4hHqGwjmA5licwFo7uS1ssS&X-Amz-Signature=c2fc90100ae2d8739e0d368ce9a4c1eff7a2a7a8b78d8b883a91054b6238f1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZF3W7RF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YWZUT87ec8utamexnA5jBwgmSIyCVkEIg4FXuFZRTgIgKf9lHatVvdmR%2F44wy2nm%2FSqMmvuo49okpgj%2FH%2Bxv5gcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIVcf4s4DnGc8CsOCCrcA%2BamcN3IBE%2Bkj%2Fjyl%2F74NcWaDIF1VwlgcNfCMn1ba%2FNcb2FvQqYRJ%2FIlOJ%2BpsMs5IXU9KB8aIgH0w8lFItsOygyKLkI5M806tRCrIsENZvpvgNihUJ6OcugzlrytKBbBRW%2Bi9Z9SJRetyLlwxQJxp7td9TKh6Mudo4UW2r1rX8ZT%2Fvu1M1d%2FFM9X1AhVEMjjzpErW%2F456FPSqGzZi0iSD0i%2FZ0cVzT7NXkTQ1uL5RiE%2F%2FzbDqqmxyScJZILEcDMKtjXHFg3YxPV6kRC6Cshj0osBGQjSOqvh%2B8DWXoL0RaC5C2BBvXY9iKRSrwpsto4qiE1uH8M%2BRVKcRS%2BGn6yO71qPHwHmNylqVF5Rm2TezDWpPI0QjQjQN8%2B%2FV6tAZrDpalQ0PXNtaaZ4NxL0OcPz62m5eV2QtN4Mz1u8YUm7sHvbmjCQZEDf6uVqbDFNfo3SmnJwORqk2RGZfCCzbdBk3KmK3GpH3YjayW5DT4ZUt3QX29zVcfCuqS4QCI%2BTUYC7hdvDF7%2BYPL2TlISCToS29FDGmxGMSij%2FTHX4opXMgGWADPjOKh3o%2FaPo4YoNH4vVzKsG56nyJWPybo86UhnqrnAEK2BYtDmg1geJjnCamvIAe9SOvDRBwuYa%2B3G9MI3Uzr8GOqUBrHnc%2FNFmCNUXLy%2FX28Iubh36OLE5wMErk5KbO7%2BkyqOi7rgOwmPuoA%2FuBEnWZLxzwuHgPXWOZiyskf9MtL9JqAWAeZcvlj8SHcljIpnIbKrS5826djfNt0IS1VioM0PGOO87lKgZTa7KMTpkJf2iAmVDLznhV4P%2FlaFBoNTy8ovExjehLafkjBU1VQRiHncNewOLQ4hHqGwjmA5licwFo7uS1ssS&X-Amz-Signature=9659014d77e586a7edb71ec710d5983f3ada088ccdf8c0b1b5847625994a652a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
