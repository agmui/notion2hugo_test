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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJGWH2V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDyP9k0BPRn2lGxfERljHY5tXw13epDFDWfL1LMt%2BzoFAiEA4tQGWiWKqZV3j%2Fye%2BXN1ZdGhhZBPA91AV4nMLopCR24qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3%2Fnag7Yl5uHceeLyrcAyq22Pw0WYNwFir%2FOsyTG6FqRKepYIeqHV5qiDty6aS8NAykM2L9e%2BdQV0sUnXwkc71DcpQUJgUcNpA%2FHS348luwrHy5IxUkeUo7gtdpwleWib8oPJ8QDYwpVboDDAXi6tbD4jsaG9C18pbhMgmwMxi%2B8yMslh7shk1X6f9uOasTTUIfdvj2jdtO6rOB%2FCejdfJtPfUjHIRCfvY29P%2Fy0%2BcCBoFbeT%2BnPrhw4HctMVtH%2Fp1Fy5k9OfoI8hD7mxZr2%2BENt1rs3fsvFuJLtdeMfGWitekdon%2FbRxWjbIcL9Y827EJ%2BMIFlwr3Czw7Bo9%2Fo1K0zQNiJ8Ga5nfeOisKiHs%2BksEYugBnmKTPUZJqadGeaDByVVo2AOFu2wh%2FUP%2FSBNZWuIR06FHF4cc%2BZWd7FDOluUSa8t9YGEI1jY0xrJiIcxVv94dS3q65f5nkQpRXe0dEKzehn645ejE%2F64D3Gb%2BtQa6gxwK9j8PxuTT%2FIJoGhOB60lhf9KWS0Mi7G%2BQ%2FQgqeL41TNehOOENghncTQchtt2Q%2Br29sfJ%2B7A44pmZAZjnbhDqRTVyNaEEDYBSUIuBb44ueVA%2F8MncknDcXm4Bez2BuEUu9AxR2llEx%2FgN2N55A7ybDFD9wwPbiixMN%2BX9L4GOqUBLPODYsNeeSflkQKV3ob9l45i%2BhuFFqi3cQgPYerqRmfm0K7mxkPonmB%2BfnNDa0Zxhw7uIzB69%2BH0hESql84Oce7%2B6DH0P34tGor9qiP4zlG2aRYzSbqv%2F3d9TrVIEzumBEQoIMYkezjW1bIvfHPjA0592Wz4J%2FyNYw%2BIkqJCGsgq6bdQUX0Y3Xlym%2FOwdZVeyAE%2BM0cjHvdqPdtUbkei2LKDcazP&X-Amz-Signature=406d3f9eb25343bbfd190a6c36cdde7aa2114c0d21cf4e417256e5248f0b8c32&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJGWH2V%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDyP9k0BPRn2lGxfERljHY5tXw13epDFDWfL1LMt%2BzoFAiEA4tQGWiWKqZV3j%2Fye%2BXN1ZdGhhZBPA91AV4nMLopCR24qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3%2Fnag7Yl5uHceeLyrcAyq22Pw0WYNwFir%2FOsyTG6FqRKepYIeqHV5qiDty6aS8NAykM2L9e%2BdQV0sUnXwkc71DcpQUJgUcNpA%2FHS348luwrHy5IxUkeUo7gtdpwleWib8oPJ8QDYwpVboDDAXi6tbD4jsaG9C18pbhMgmwMxi%2B8yMslh7shk1X6f9uOasTTUIfdvj2jdtO6rOB%2FCejdfJtPfUjHIRCfvY29P%2Fy0%2BcCBoFbeT%2BnPrhw4HctMVtH%2Fp1Fy5k9OfoI8hD7mxZr2%2BENt1rs3fsvFuJLtdeMfGWitekdon%2FbRxWjbIcL9Y827EJ%2BMIFlwr3Czw7Bo9%2Fo1K0zQNiJ8Ga5nfeOisKiHs%2BksEYugBnmKTPUZJqadGeaDByVVo2AOFu2wh%2FUP%2FSBNZWuIR06FHF4cc%2BZWd7FDOluUSa8t9YGEI1jY0xrJiIcxVv94dS3q65f5nkQpRXe0dEKzehn645ejE%2F64D3Gb%2BtQa6gxwK9j8PxuTT%2FIJoGhOB60lhf9KWS0Mi7G%2BQ%2FQgqeL41TNehOOENghncTQchtt2Q%2Br29sfJ%2B7A44pmZAZjnbhDqRTVyNaEEDYBSUIuBb44ueVA%2F8MncknDcXm4Bez2BuEUu9AxR2llEx%2FgN2N55A7ybDFD9wwPbiixMN%2BX9L4GOqUBLPODYsNeeSflkQKV3ob9l45i%2BhuFFqi3cQgPYerqRmfm0K7mxkPonmB%2BfnNDa0Zxhw7uIzB69%2BH0hESql84Oce7%2B6DH0P34tGor9qiP4zlG2aRYzSbqv%2F3d9TrVIEzumBEQoIMYkezjW1bIvfHPjA0592Wz4J%2FyNYw%2BIkqJCGsgq6bdQUX0Y3Xlym%2FOwdZVeyAE%2BM0cjHvdqPdtUbkei2LKDcazP&X-Amz-Signature=cfb19899909caf2af8da7900304013ae899a956766d672f2481b42b8d052be81&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
