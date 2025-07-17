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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DV4QGN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2F3TmdJyj7HHHbAjHFUV%2B9mZ8oU3ar1kARJtsBsTCcSwIhAOkffgwBA3NED%2FvU22i0H0EsY5mGQ1hgSQP1xFX7SGSnKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFPO1SIpSKhrlyTF8q3AOK33kpExYC4mVieJ19rSbpJRKB%2F0eRFBvSoVAspB9tf3nGSYZ7vDkxXQck7pyM20LEeTTq3cyf%2BLW5mG4HTZ5bKVDFLIK3%2FnVo1heCEOHTnRysPMUqY0SbxCG1GiXsb2nZ9i4%2BHjBEuUE1YGmHuRvpXnYcKXc0qfZNVjn4H5478hpm9uLxml6aX72wST97D6A8FfJYq684NJYiFDO8QMpSaHQC0o8jiWTcXWYWQQBz2hHcgjgs2AHbRvjz%2FfnpxqpuTgIjUDEwpSm%2F3coN2Wvci8lsmoc0JhmjpVL%2FK4Xg7xOU2Ytl06TRm2RNEIbiKal0SG2fhnfulEQK5qkpTi%2FKySJlU8ZHxMbjARkSyXt67RxLxk1D12YR8aaLUGn%2B1NJDhrwe7DkWLLINlthXVpH1BRP2DOsuPpkTdAKJOgAE4yiWdn%2BOaTOscRTiNmPdrZhQeh0lpgTfYwjIj7vhu98ZruMPanHUltJBsPtw2Sfxs136fqT8%2BKqfjLsnZJ0KHJ8uy5Tu%2FzOc%2F5G%2FSieK9nkgvBDx2d7%2BdjdX%2FyGYpNvDTSJnt9iB74N1dNRHLKsKw8xyxjchRrVa3X%2BK87T%2FcPMTzCN2yTMupuvybRxgr0iiEomXawUXX%2F666gsLMTDqx%2BHDBjqkAVip9IOis3YPgoUzIFsc%2FPPgOLfVEWXtpNHvPOmJyfadxmHRmD1vSTBCCMUV0Njj%2B77L1SrfbkkduGKE8F7gj0i4N7KfaJ%2FUlFu1PfbZpTHbRmBgtz0IEseTxy%2BHSIKsH76zIATSAL654mzKSQbfp%2BSEk%2FD%2BbyWmdGePGEIHrGUfbChs%2BbDbPHIoiAqDU9R3FxheMcMtoX%2Fw5oeJPRYCHrUXWy0n&X-Amz-Signature=0eaa37b1e046afca6a264de48a6b645ae4d9707513ffce8e3a1b643dbee74acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DV4QGN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2F3TmdJyj7HHHbAjHFUV%2B9mZ8oU3ar1kARJtsBsTCcSwIhAOkffgwBA3NED%2FvU22i0H0EsY5mGQ1hgSQP1xFX7SGSnKv8DCGwQABoMNjM3NDIzMTgzODA1IgwFPO1SIpSKhrlyTF8q3AOK33kpExYC4mVieJ19rSbpJRKB%2F0eRFBvSoVAspB9tf3nGSYZ7vDkxXQck7pyM20LEeTTq3cyf%2BLW5mG4HTZ5bKVDFLIK3%2FnVo1heCEOHTnRysPMUqY0SbxCG1GiXsb2nZ9i4%2BHjBEuUE1YGmHuRvpXnYcKXc0qfZNVjn4H5478hpm9uLxml6aX72wST97D6A8FfJYq684NJYiFDO8QMpSaHQC0o8jiWTcXWYWQQBz2hHcgjgs2AHbRvjz%2FfnpxqpuTgIjUDEwpSm%2F3coN2Wvci8lsmoc0JhmjpVL%2FK4Xg7xOU2Ytl06TRm2RNEIbiKal0SG2fhnfulEQK5qkpTi%2FKySJlU8ZHxMbjARkSyXt67RxLxk1D12YR8aaLUGn%2B1NJDhrwe7DkWLLINlthXVpH1BRP2DOsuPpkTdAKJOgAE4yiWdn%2BOaTOscRTiNmPdrZhQeh0lpgTfYwjIj7vhu98ZruMPanHUltJBsPtw2Sfxs136fqT8%2BKqfjLsnZJ0KHJ8uy5Tu%2FzOc%2F5G%2FSieK9nkgvBDx2d7%2BdjdX%2FyGYpNvDTSJnt9iB74N1dNRHLKsKw8xyxjchRrVa3X%2BK87T%2FcPMTzCN2yTMupuvybRxgr0iiEomXawUXX%2F666gsLMTDqx%2BHDBjqkAVip9IOis3YPgoUzIFsc%2FPPgOLfVEWXtpNHvPOmJyfadxmHRmD1vSTBCCMUV0Njj%2B77L1SrfbkkduGKE8F7gj0i4N7KfaJ%2FUlFu1PfbZpTHbRmBgtz0IEseTxy%2BHSIKsH76zIATSAL654mzKSQbfp%2BSEk%2FD%2BbyWmdGePGEIHrGUfbChs%2BbDbPHIoiAqDU9R3FxheMcMtoX%2Fw5oeJPRYCHrUXWy0n&X-Amz-Signature=5307fc8dcffef23f8c7f65fe1d7e506eb0d7897d101e22179d7627fef2a8f7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
