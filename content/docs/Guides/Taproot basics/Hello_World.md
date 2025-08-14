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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNIPHP2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BEIM1JkEyvN0ODdYGmyQ3QUaDQkFE9p1U1FeeiTC%2FYAIgG1pCV5%2FQs8mctlewbCDgowAQlKU%2Fjg8%2F3Nd2Lo4Inzkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEuwbHAe0PeECIE%2FxyrcAw6j3KRGuwvowwiIneoTKuwovSbHgygVBSFqAZI7vx3JgLzYQCtJ%2BCW%2BbxU9LO4kGsRS0LZoAbPP83VGoxibBc4KXsDKrJq6WmSudXztizBf1cVbO3WC6c1Z7zWLU%2BADLS8n6hE%2FqdaoWrV4T%2BliQzOGvdDxhPJVYHcK9%2FZjYkvUhH24ok%2BeRXI3dmISspazTz9gIu0oKfTi%2Fy58H0DwO%2BSGVtrKNloFe1HzaZmu1Gj9Jott11WheV3rxePRf6JX1Zhx8XRkASql4aHpl6zA7Ci5YCyJqlaWExxFuo49vkbVvQcH3sYqLiEfswJeUeICWBFYez9sFmSjbtc%2Ftyq%2BOqEDQVkOp12Kcs6B7SBXZ%2BkeNRFmjEk2FEz3bIzE4M8lCnLgo%2BWWFiYvq9Iz8GPrJ3p6XGCCWkG2sC2KMeFuhTSU8cnovgWEjwhRI8TG2NHPUXx8rL%2FWzK4Yp2THXm0ylFI5%2FVrpeQVdcU47b34w%2Bw8RmhZCa7C5VNYAwI%2BTY3Yh13h4slUs%2B7lRDpb5oiXJ5wxCTdr4Jgnw3bUPPV9uyh515KAX7W2ybGDC01S%2BVXS5Tt3Uv2RHVgXAavzIKwpHt%2FgUFJHJ7j4Eud0Vqfpa6b7Ob2F1RS41IJLuCL0gMOuv9sQGOqUBOeqGRjH79qCpPgS2Gv5IzpPLpSp9hHfTX51cMgQbC7q1a29USMZbdH3cptTuaPZ1nvYvaWcekG7ffVhjRtppLyiIc7JvlZH1nxq7QVJGeSSm5x9MT5VzfeH%2BN%2B4NZMA37nDcjRNcGq%2F4qpqfFgx8Yafq8WmvOMZfreKwYX87nw0gfz2jTv5ygyOiZZY5YUonuGududr2IkMeWSV%2Bwzwk57y4zB6i&X-Amz-Signature=9365d1816fbb052ae86d20eab9afe4ba02f256a8cc3b5eeb48a19915ba125d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNIPHP2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BEIM1JkEyvN0ODdYGmyQ3QUaDQkFE9p1U1FeeiTC%2FYAIgG1pCV5%2FQs8mctlewbCDgowAQlKU%2Fjg8%2F3Nd2Lo4Inzkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEuwbHAe0PeECIE%2FxyrcAw6j3KRGuwvowwiIneoTKuwovSbHgygVBSFqAZI7vx3JgLzYQCtJ%2BCW%2BbxU9LO4kGsRS0LZoAbPP83VGoxibBc4KXsDKrJq6WmSudXztizBf1cVbO3WC6c1Z7zWLU%2BADLS8n6hE%2FqdaoWrV4T%2BliQzOGvdDxhPJVYHcK9%2FZjYkvUhH24ok%2BeRXI3dmISspazTz9gIu0oKfTi%2Fy58H0DwO%2BSGVtrKNloFe1HzaZmu1Gj9Jott11WheV3rxePRf6JX1Zhx8XRkASql4aHpl6zA7Ci5YCyJqlaWExxFuo49vkbVvQcH3sYqLiEfswJeUeICWBFYez9sFmSjbtc%2Ftyq%2BOqEDQVkOp12Kcs6B7SBXZ%2BkeNRFmjEk2FEz3bIzE4M8lCnLgo%2BWWFiYvq9Iz8GPrJ3p6XGCCWkG2sC2KMeFuhTSU8cnovgWEjwhRI8TG2NHPUXx8rL%2FWzK4Yp2THXm0ylFI5%2FVrpeQVdcU47b34w%2Bw8RmhZCa7C5VNYAwI%2BTY3Yh13h4slUs%2B7lRDpb5oiXJ5wxCTdr4Jgnw3bUPPV9uyh515KAX7W2ybGDC01S%2BVXS5Tt3Uv2RHVgXAavzIKwpHt%2FgUFJHJ7j4Eud0Vqfpa6b7Ob2F1RS41IJLuCL0gMOuv9sQGOqUBOeqGRjH79qCpPgS2Gv5IzpPLpSp9hHfTX51cMgQbC7q1a29USMZbdH3cptTuaPZ1nvYvaWcekG7ffVhjRtppLyiIc7JvlZH1nxq7QVJGeSSm5x9MT5VzfeH%2BN%2B4NZMA37nDcjRNcGq%2F4qpqfFgx8Yafq8WmvOMZfreKwYX87nw0gfz2jTv5ygyOiZZY5YUonuGududr2IkMeWSV%2Bwzwk57y4zB6i&X-Amz-Signature=59b94513c83892abe177214dfa03b70397f4717971a8960214439ba8a36a778c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
