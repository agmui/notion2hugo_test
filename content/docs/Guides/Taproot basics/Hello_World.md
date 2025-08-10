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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TB7QYH7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhy4p4qNhOYXxNk71vd%2FjBai6T5NrgJLjbCNIFXXGEvAiEA7KFTAdTnYgjIymsjxji0J5Mnk%2B1%2FrmtW%2BBuYpzE6SOsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HY51gXNHYW5J34ircAzFcAskNgeN%2Fvi273CnUjuzQCc78MLZUkf4GvNGye1VqESM5R7sULHsDgDDq7X5haRVAa2DcDZHQru0H1q0PEjI%2Fh8iPA0u2PnUhX%2FOQxk%2FQ1dhIv65bBHEBl8t%2Fjc0a4%2FONEHulqcmGz%2FBKYg5ZBij4fcydxVeRqFVqiyrnWpg3Rv2Qq%2FydGV7xnIF5ZZMJ8FBH%2FJreg73hT%2BxMJ1HP2VkdxCGQu4RJwI0tCVHwddKcXas3IF7u8MO2brZR9%2BL1G6roaMw8M9dwi%2BXt1GloM45uL7h3gPPp9VOIaidkxxiZvLwbjFxXyUNNjOKn2zGX02X8JIZKv%2FrbZs4veoLm2UQZZNZo6qsZOrSkWiBbDZF%2FbVl8Mvm%2B3dl6mx3RyUWxrHgLkVOElXuhCueDvLlZdZo6Uj492uKuZXWqLQzPIKdQ1rXDpCHS4U%2F7R1Da%2BofkjsafoYYCEofeCfhZeDrvVRmUlPvsdTBzNdI05A%2FTy6V61Gp3n1yvfGKtm%2FxTv7EGv4JqjpzKTVwh4Stvl0JMhRPlGwtA3mLqHDjbXebjJLmLpIQ3RohTkW0lZExmZscPxcxqBZsBUgHZGGzbXECOlNihcALP0MZfmy7wUHAG4DSHzfwGxgSoNTN%2Bls%2FEMOa648QGOqUBWVYT6xOX2wjT34khjC%2Byh1oTCkWOBwPeE7xvqgNC8Pl5uFkqAQ7JYtDilMOEwpzGeas0IfD5W3ilAGp%2FqKPVih4t8pSG6oCclCMGGjfKHDUfX7kPhqGV9P4%2FfMOytIn1hlXCw%2BwxSQn7gwniXgtcCU6IzqmeYazNavGELtTeQonOvmGOVwSQrZhy7MSJdnQguq%2F1zdgC5WC%2B4w8RBnrmSQZdxlaN&X-Amz-Signature=5eb3e1a8bc06bf09572cb539b553019610504aade1823f09755d7de8b61b721d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TB7QYH7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhy4p4qNhOYXxNk71vd%2FjBai6T5NrgJLjbCNIFXXGEvAiEA7KFTAdTnYgjIymsjxji0J5Mnk%2B1%2FrmtW%2BBuYpzE6SOsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HY51gXNHYW5J34ircAzFcAskNgeN%2Fvi273CnUjuzQCc78MLZUkf4GvNGye1VqESM5R7sULHsDgDDq7X5haRVAa2DcDZHQru0H1q0PEjI%2Fh8iPA0u2PnUhX%2FOQxk%2FQ1dhIv65bBHEBl8t%2Fjc0a4%2FONEHulqcmGz%2FBKYg5ZBij4fcydxVeRqFVqiyrnWpg3Rv2Qq%2FydGV7xnIF5ZZMJ8FBH%2FJreg73hT%2BxMJ1HP2VkdxCGQu4RJwI0tCVHwddKcXas3IF7u8MO2brZR9%2BL1G6roaMw8M9dwi%2BXt1GloM45uL7h3gPPp9VOIaidkxxiZvLwbjFxXyUNNjOKn2zGX02X8JIZKv%2FrbZs4veoLm2UQZZNZo6qsZOrSkWiBbDZF%2FbVl8Mvm%2B3dl6mx3RyUWxrHgLkVOElXuhCueDvLlZdZo6Uj492uKuZXWqLQzPIKdQ1rXDpCHS4U%2F7R1Da%2BofkjsafoYYCEofeCfhZeDrvVRmUlPvsdTBzNdI05A%2FTy6V61Gp3n1yvfGKtm%2FxTv7EGv4JqjpzKTVwh4Stvl0JMhRPlGwtA3mLqHDjbXebjJLmLpIQ3RohTkW0lZExmZscPxcxqBZsBUgHZGGzbXECOlNihcALP0MZfmy7wUHAG4DSHzfwGxgSoNTN%2Bls%2FEMOa648QGOqUBWVYT6xOX2wjT34khjC%2Byh1oTCkWOBwPeE7xvqgNC8Pl5uFkqAQ7JYtDilMOEwpzGeas0IfD5W3ilAGp%2FqKPVih4t8pSG6oCclCMGGjfKHDUfX7kPhqGV9P4%2FfMOytIn1hlXCw%2BwxSQn7gwniXgtcCU6IzqmeYazNavGELtTeQonOvmGOVwSQrZhy7MSJdnQguq%2F1zdgC5WC%2B4w8RBnrmSQZdxlaN&X-Amz-Signature=12fcaae70a72451df2098028811aa21c6a3724ca647667b7d5f49763925c668a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
