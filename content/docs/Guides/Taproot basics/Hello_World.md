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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N427JIC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFBd2Ancsw2z2QdfrlNOuVYi6S2Mf%2B%2BMZ4vRoTnS2QAiEAvCBlU4%2Fr155gmX9Ae1ITkTlVs3e9jDL4rpoKs5JZePYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwApMk2Te3TsAbmiCrcA8FXktYl5NI2Q95oeY9Sm1jW7%2FhRXM8jBPOU9vNUhyKsV1OD7MVVOb3gLDdI2IUXXUBsp2EN7TRLrd%2FubHsK%2BKW%2Bz01h8rwNlbaYwt1sguxL6Qthx2ZTFh3Lq5Z2qbatWBAeRX%2FXfv6Ld0yKv04ocllWleXmocFy%2B5gnbvQUrlO3izGCdDohxQY6Wm1LIBXKkMmIobKJvYSnicuecedjNIgu%2B0fiVwfedSDv54mxzvg2vRCy6kUdwWgAqslFwVDStj%2Fli%2F9jB1GggAs4cxE2RECO16PAMlX1WwhCucWiPpGU97E6hhDn5P9U%2BrzZh%2F9qYl%2BYTPhjTU32p0miQ1UYVObU8kSdU2XbYza2sDBvc%2B22MAcVLwTs00QU2JGHfUdjHEreopCCynOkncIQnexnlfPog%2B98%2B2hS30Bg7ZhB5b%2B9zdzNrfl0XTMLQnImEfRhHEEGX82OtJmtu3OktMQCz04vb4melzWsPl5OB5Q7rKebOawRCct9iPhFYxRdhfMDw05oiSvehk6KJyFeEjkG16USYXzOLehjhmAo3bkK84Ndbv8nSZCpwuKMnJhfkwj3LxBmZ0Dk564XGyFtXPyJH7A0x9MLnTgFMxIRPONDwyNOf1wlRq5c4jS8Ruy%2FMMeT8cMGOqUB7OvzVuMWP7m3vKAdP04tc7Wghb%2ByMxiAYOvkSffXHmjTwPC4Ts71k7XoOUvlucLsOaMMmrs2D3Gk%2BMDyXltw6uDIfdIQZcleOhdJ8t1g2dHfIYxakWxU11%2B4hn383GHOz9tKwU4o3NMswNX9zhsZAPpNG3Cb0o4eYwCEkJxdQxjFZPES2RHH4W%2FWo9rEQrYpk1FitG71V0ydwN2IEFhwzXLgyXzT&X-Amz-Signature=cfb25168be79c6e2f592f5bae662f3825062ec28eb96cbb2ee63b2d31d8b3bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N427JIC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BFBd2Ancsw2z2QdfrlNOuVYi6S2Mf%2B%2BMZ4vRoTnS2QAiEAvCBlU4%2Fr155gmX9Ae1ITkTlVs3e9jDL4rpoKs5JZePYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwApMk2Te3TsAbmiCrcA8FXktYl5NI2Q95oeY9Sm1jW7%2FhRXM8jBPOU9vNUhyKsV1OD7MVVOb3gLDdI2IUXXUBsp2EN7TRLrd%2FubHsK%2BKW%2Bz01h8rwNlbaYwt1sguxL6Qthx2ZTFh3Lq5Z2qbatWBAeRX%2FXfv6Ld0yKv04ocllWleXmocFy%2B5gnbvQUrlO3izGCdDohxQY6Wm1LIBXKkMmIobKJvYSnicuecedjNIgu%2B0fiVwfedSDv54mxzvg2vRCy6kUdwWgAqslFwVDStj%2Fli%2F9jB1GggAs4cxE2RECO16PAMlX1WwhCucWiPpGU97E6hhDn5P9U%2BrzZh%2F9qYl%2BYTPhjTU32p0miQ1UYVObU8kSdU2XbYza2sDBvc%2B22MAcVLwTs00QU2JGHfUdjHEreopCCynOkncIQnexnlfPog%2B98%2B2hS30Bg7ZhB5b%2B9zdzNrfl0XTMLQnImEfRhHEEGX82OtJmtu3OktMQCz04vb4melzWsPl5OB5Q7rKebOawRCct9iPhFYxRdhfMDw05oiSvehk6KJyFeEjkG16USYXzOLehjhmAo3bkK84Ndbv8nSZCpwuKMnJhfkwj3LxBmZ0Dk564XGyFtXPyJH7A0x9MLnTgFMxIRPONDwyNOf1wlRq5c4jS8Ruy%2FMMeT8cMGOqUB7OvzVuMWP7m3vKAdP04tc7Wghb%2ByMxiAYOvkSffXHmjTwPC4Ts71k7XoOUvlucLsOaMMmrs2D3Gk%2BMDyXltw6uDIfdIQZcleOhdJ8t1g2dHfIYxakWxU11%2B4hn383GHOz9tKwU4o3NMswNX9zhsZAPpNG3Cb0o4eYwCEkJxdQxjFZPES2RHH4W%2FWo9rEQrYpk1FitG71V0ydwN2IEFhwzXLgyXzT&X-Amz-Signature=3142fd4e1aef5492c70f478e17d02bb4847ae4538cbb0c62a24e44512b5c41bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
