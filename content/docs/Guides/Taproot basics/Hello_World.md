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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTM6XPB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDtMk3Uks07NPGRYfBMWNJ3f6gzRAiFHPmsHW39l8i7RAiEA7kQ%2Bu0tgSQ%2B4HnjA9GQsJ4tnEjVoYOPAAYHESe5qc5AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwfJGSnCEaw2xGmCrcA%2Bs20a%2BSJaktrhiUxRkysxHVr3f8H2e6%2FVdCpkiL9RLRNS23QrkOBjeGcI3jHBDNm03lfWGMj4rLd7RpfS9p1ny4SjBIfM7jX7TMS%2BmqLE5pFrMVfDRudbKfYdVHvefcFBx6GEnWTsNQTaZSO8ydw8uR05vaW9v8ZkZ9Ot%2B%2FTbpRNp%2BciOA4QrYiZfd2Q%2FfooPk0czAsufe3NGhi%2FnoQDLCyJKenZWRZ2Y17IsAlDmS7Vq%2BMsLWQH45KdJO9uSeHWq1vGEb5pvm1HxCKoIOV0WWt%2BQAjJ0H5gBviLadx%2F4lXDcn0pe85gY9nu7KBVpW%2FUNxLozrsJe%2BZvsgCrD4CoT76gWwRhkY8aam0%2F0noTpBlZh85UhIPl9c1MFjLRE2x%2FJ97XnzimF1o7ut%2Fgf0DayjrujSUY3k6Ndc%2BMoAeIQpHhOweNEoxT3TuSeH50nmUDlYjhWstgoKmJZEsY%2F9Jfi%2BWx3zWEQEt9LPTganTyJJLOV2sn6wGCBCk13ANHzgtu8y1P09IBm5LhMfwZ9QRj7qWfWuOlYnzG6RBhiB%2FEYK0EGh6rNFP5nzmFLIjW2PwVFWYQNc%2FMRHhqCqwUcyTLVdaFO6tOHb7B9CHRt%2BIhlfEtbh8%2FuVNToJvcKkaMOzJkccGOqUBoy15P2vje9hNXCyaWue%2FjpIKmj3M%2BD%2F7fTatJFnLxW%2BN11fa0UZL1ojNOF5oUNeO4R52NFdiZIWYxFlWB%2F8H3YqRtBpPVIVxWEGJmuUYAjOp2DMzdCdAPD9Q7PEkTVFslCZhftkVKvcMRcGaUN1tsTFV9l1q8hJEHEB%2F3hMEk1lSzlWTXylifyE7z%2F10RyCgX%2F0WWJa9XodsREJmD2Ph6eGUaAMM&X-Amz-Signature=34bd21bcc782d67d6c1fb3ed8ae716b4bbea1eb8efe5230fde888dab684aef1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTM6XPB%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIDtMk3Uks07NPGRYfBMWNJ3f6gzRAiFHPmsHW39l8i7RAiEA7kQ%2Bu0tgSQ%2B4HnjA9GQsJ4tnEjVoYOPAAYHESe5qc5AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgwfJGSnCEaw2xGmCrcA%2Bs20a%2BSJaktrhiUxRkysxHVr3f8H2e6%2FVdCpkiL9RLRNS23QrkOBjeGcI3jHBDNm03lfWGMj4rLd7RpfS9p1ny4SjBIfM7jX7TMS%2BmqLE5pFrMVfDRudbKfYdVHvefcFBx6GEnWTsNQTaZSO8ydw8uR05vaW9v8ZkZ9Ot%2B%2FTbpRNp%2BciOA4QrYiZfd2Q%2FfooPk0czAsufe3NGhi%2FnoQDLCyJKenZWRZ2Y17IsAlDmS7Vq%2BMsLWQH45KdJO9uSeHWq1vGEb5pvm1HxCKoIOV0WWt%2BQAjJ0H5gBviLadx%2F4lXDcn0pe85gY9nu7KBVpW%2FUNxLozrsJe%2BZvsgCrD4CoT76gWwRhkY8aam0%2F0noTpBlZh85UhIPl9c1MFjLRE2x%2FJ97XnzimF1o7ut%2Fgf0DayjrujSUY3k6Ndc%2BMoAeIQpHhOweNEoxT3TuSeH50nmUDlYjhWstgoKmJZEsY%2F9Jfi%2BWx3zWEQEt9LPTganTyJJLOV2sn6wGCBCk13ANHzgtu8y1P09IBm5LhMfwZ9QRj7qWfWuOlYnzG6RBhiB%2FEYK0EGh6rNFP5nzmFLIjW2PwVFWYQNc%2FMRHhqCqwUcyTLVdaFO6tOHb7B9CHRt%2BIhlfEtbh8%2FuVNToJvcKkaMOzJkccGOqUBoy15P2vje9hNXCyaWue%2FjpIKmj3M%2BD%2F7fTatJFnLxW%2BN11fa0UZL1ojNOF5oUNeO4R52NFdiZIWYxFlWB%2F8H3YqRtBpPVIVxWEGJmuUYAjOp2DMzdCdAPD9Q7PEkTVFslCZhftkVKvcMRcGaUN1tsTFV9l1q8hJEHEB%2F3hMEk1lSzlWTXylifyE7z%2F10RyCgX%2F0WWJa9XodsREJmD2Ph6eGUaAMM&X-Amz-Signature=0028db66188ddc3cb8ee74bd12581a7fbf0120e90736cc83b3494d3710383661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
