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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKGXM2O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2FYdZBPZy4%2FIwM1lCocXF9qjqGEoNhinOqcxyzZQVcFAiEA9ZkwymgupIictHlNvsnWEpAvnX0l1nA0Ej3FYRwNLHQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNHDmDCOR8IASHJUNCrcA4xGlVCduQntqK3XG9RYNYQt2WzKDedDXAIm8v%2FfAbwKvLSQp%2B0CSA0Yx1Ia7FN1Y96iobXngWs8%2F2%2BWJWKWEwBgttsTgUkfjAkirDC%2FmP9krZTC6WwM2ltgfoNRYIs3fu%2FIV%2BQIUIKzn%2FcZwBe1UcxE0RgyCnFD%2FuWfc4m80NsyvEHsoM4FNowsTlfGHNj8zN66C3D84p8YmSKS%2FhJtqVrg%2FiZOFIzWKSYae8Ng0oBRuQsqT3SuDehLE6tAKDEllk4%2B9VMWrfkv1eTT5gF5K52R5D%2BYscXzy2QozqTsQ99nBzuZeBjK2lB9nozbG3xpbPE8%2B81OgS%2FkmebPbNSeNQCHXzYn6g9ukwhi28rM2psXm45I17BJTxJy40BEnh4E8L%2BA3kwhDBR4C%2FA%2BOt%2BTrYmWBvw1ZYH2dSuRB4LT4GNyCfRsW9QBfDRNoKpiOYWOrLtoFI77wsEuUDq4B0MuRHqMYe6WvX0eC5UNZqhme%2BRZSqYhZbSv6l7dOdgYXqxgbT1NgYUtLNPjtlyhUBHnd%2B6jS2bH1x9VyiRGuEdXUfcKk5zUkozwGdMd95tNwD0YMd6ylUzaMsMqGLVKKjhpZSRj5TKbSW0dIEk7O%2FGO4ya5SnZkODsAQlCPqNYSMImq18MGOqUBQKLaAYZ0q1nlQZ9yFUK7TEIL085pvjBLjF2e%2B1vHUwwyKT5e6VJan6M60ZgJiRGuVmcfmorUN0%2FfPj5K6HoAaNifa7DesAXaRcEgkH2K5wVocIgDtw%2Br6i7tpMAz9%2BH2%2BkX60UdeagdZqfFuuQiEEOlTMDyiw%2BcN8haergC7VHCwbcM6xdnEA6Tp9kHyDM3iI0b2f2ygkrtLxNIJPBp07HOSuijz&X-Amz-Signature=40980fe9e93c58e1e07e46c5bbeb691008af8fe2cfa461c7d53a026b2ad5165f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKGXM2O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2FYdZBPZy4%2FIwM1lCocXF9qjqGEoNhinOqcxyzZQVcFAiEA9ZkwymgupIictHlNvsnWEpAvnX0l1nA0Ej3FYRwNLHQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNHDmDCOR8IASHJUNCrcA4xGlVCduQntqK3XG9RYNYQt2WzKDedDXAIm8v%2FfAbwKvLSQp%2B0CSA0Yx1Ia7FN1Y96iobXngWs8%2F2%2BWJWKWEwBgttsTgUkfjAkirDC%2FmP9krZTC6WwM2ltgfoNRYIs3fu%2FIV%2BQIUIKzn%2FcZwBe1UcxE0RgyCnFD%2FuWfc4m80NsyvEHsoM4FNowsTlfGHNj8zN66C3D84p8YmSKS%2FhJtqVrg%2FiZOFIzWKSYae8Ng0oBRuQsqT3SuDehLE6tAKDEllk4%2B9VMWrfkv1eTT5gF5K52R5D%2BYscXzy2QozqTsQ99nBzuZeBjK2lB9nozbG3xpbPE8%2B81OgS%2FkmebPbNSeNQCHXzYn6g9ukwhi28rM2psXm45I17BJTxJy40BEnh4E8L%2BA3kwhDBR4C%2FA%2BOt%2BTrYmWBvw1ZYH2dSuRB4LT4GNyCfRsW9QBfDRNoKpiOYWOrLtoFI77wsEuUDq4B0MuRHqMYe6WvX0eC5UNZqhme%2BRZSqYhZbSv6l7dOdgYXqxgbT1NgYUtLNPjtlyhUBHnd%2B6jS2bH1x9VyiRGuEdXUfcKk5zUkozwGdMd95tNwD0YMd6ylUzaMsMqGLVKKjhpZSRj5TKbSW0dIEk7O%2FGO4ya5SnZkODsAQlCPqNYSMImq18MGOqUBQKLaAYZ0q1nlQZ9yFUK7TEIL085pvjBLjF2e%2B1vHUwwyKT5e6VJan6M60ZgJiRGuVmcfmorUN0%2FfPj5K6HoAaNifa7DesAXaRcEgkH2K5wVocIgDtw%2Br6i7tpMAz9%2BH2%2BkX60UdeagdZqfFuuQiEEOlTMDyiw%2BcN8haergC7VHCwbcM6xdnEA6Tp9kHyDM3iI0b2f2ygkrtLxNIJPBp07HOSuijz&X-Amz-Signature=6d6524d128f6e7be631b9636b1ebd3a3fa94556dc4c024e7b7260e24a20a00da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
