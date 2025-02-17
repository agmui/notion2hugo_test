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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2XAUXL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCusiyBEAMcaeikRhk%2BfQSTZwCy37mzoOZIjED8MrYUBwIgZwy7GhJXFffVBNtVa%2FzX39ZpFvzDRiDGniTD2jhvw3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAAQHE3jkn9632HyqyrcAyfDN5LXV1AweCHFrMmvE5LE6DkjMqR7WRSdaajObaVOYYCdnqFEO%2BnErMYyUm4Y7ugDdKDR8XKiJjRe0IS5kwur5UX3oyBE5sfbQuzqZhPdgTa5Cb733lryOizv2Md4VkQlljTkrqxwlFHvNUzPuwM5wNOI1cM1MWMEvk16spCUxBf14sY6Lni6TH01gZMDivKKzg0y4qujVgD5Pz7IaYXhD6ksNALAekK%2BqoVAohEKvgRY%2BC9DS%2BLbSCCEaNcJE35fa5i9Qorju%2F0ktGnD0o3oT5H%2F43ZJltRocgH8XGse36ATxLSe60C90ltPce8Vgpeg3poOlYUXbcEn%2FFgcjMR8%2BSHpxLtMSJLgGmP8yqjYqdutNQ2pnRt2u0MpSrl%2F9QfnXIBvzJK1C3eMmxpPmggNUGfOQLC%2F6yIN%2BG4dXv1YDdcyo5%2BcL%2BBr03EcvFWnYpENa%2F2qQ%2BhR6zNeEn6Te1lw7o%2FMOufsTtDkmbyYEpaInBE3oPu1Birt6zrNAjnQvmm0y4maxsvWCXVrUSrwzjeiGrnaT1mf9O19b5cOPfdGrFMt%2By7jDp7hMjnCQ5BT9RVWOQ8OTOOxZKOA75%2FD2msfaO96eipdu9FtOtBImZXFaGBg7PFjOy3gILa4MKvbzL0GOqUBXHxqSWOt2XrnBq7B2xCyHyYJKzZ0fDT9ztMyc7W4%2BfpHwapGMmo2qxVNaHLSOqPKk%2BlbMtj1ccUdxvTq98SRYmqmCCS9SUAlvLJ7Ma%2FCFo%2FONc9q8Jz%2Fy6ApA7MxTz4NTaZsv1VXSjrEFLeu7sAy3ltVWYqngqVbb09jtxE9of13nsDWZqCd86jeyPgr18Tf1%2FAUrR%2BEo1hKuxd4XitdOCUj8aUK&X-Amz-Signature=2cca3800f6da194bdf8ad14a0c8646b913325f00a2b13ef0ea8d10c83c130632&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2XAUXL%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCusiyBEAMcaeikRhk%2BfQSTZwCy37mzoOZIjED8MrYUBwIgZwy7GhJXFffVBNtVa%2FzX39ZpFvzDRiDGniTD2jhvw3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAAQHE3jkn9632HyqyrcAyfDN5LXV1AweCHFrMmvE5LE6DkjMqR7WRSdaajObaVOYYCdnqFEO%2BnErMYyUm4Y7ugDdKDR8XKiJjRe0IS5kwur5UX3oyBE5sfbQuzqZhPdgTa5Cb733lryOizv2Md4VkQlljTkrqxwlFHvNUzPuwM5wNOI1cM1MWMEvk16spCUxBf14sY6Lni6TH01gZMDivKKzg0y4qujVgD5Pz7IaYXhD6ksNALAekK%2BqoVAohEKvgRY%2BC9DS%2BLbSCCEaNcJE35fa5i9Qorju%2F0ktGnD0o3oT5H%2F43ZJltRocgH8XGse36ATxLSe60C90ltPce8Vgpeg3poOlYUXbcEn%2FFgcjMR8%2BSHpxLtMSJLgGmP8yqjYqdutNQ2pnRt2u0MpSrl%2F9QfnXIBvzJK1C3eMmxpPmggNUGfOQLC%2F6yIN%2BG4dXv1YDdcyo5%2BcL%2BBr03EcvFWnYpENa%2F2qQ%2BhR6zNeEn6Te1lw7o%2FMOufsTtDkmbyYEpaInBE3oPu1Birt6zrNAjnQvmm0y4maxsvWCXVrUSrwzjeiGrnaT1mf9O19b5cOPfdGrFMt%2By7jDp7hMjnCQ5BT9RVWOQ8OTOOxZKOA75%2FD2msfaO96eipdu9FtOtBImZXFaGBg7PFjOy3gILa4MKvbzL0GOqUBXHxqSWOt2XrnBq7B2xCyHyYJKzZ0fDT9ztMyc7W4%2BfpHwapGMmo2qxVNaHLSOqPKk%2BlbMtj1ccUdxvTq98SRYmqmCCS9SUAlvLJ7Ma%2FCFo%2FONc9q8Jz%2Fy6ApA7MxTz4NTaZsv1VXSjrEFLeu7sAy3ltVWYqngqVbb09jtxE9of13nsDWZqCd86jeyPgr18Tf1%2FAUrR%2BEo1hKuxd4XitdOCUj8aUK&X-Amz-Signature=696c5da06fc6215b18a26337e1be1b98508751e821557156f7175a512e2eb3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
