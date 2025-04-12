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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT4QSH63%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHE%2BtSaSw1Q8g8J%2FIBtUec3mQH7oFpms9fos8cZ9QikdAiBdLyROaiwmeDe8zFvLc15qTn4GnKqPQTNaioWgMvMrpiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbGRNKgMvCemJsovKtwDLB23D7ZJjYvZkRRpn2%2FMswbF4UfwTMY7FvtOZWehtD8zUxoAQNKVi6fLg7iegV4U18Tgtz%2BPyybBxRk5at7M8YbZ04i3YVFzwzc0b0g29Ct47Ov3Vxef9eU98ebQV9pOdqwOgwc%2BzpfoXkW308wv6LouESy6SnsiJAgMREwPvLkdSB9uno6o3BP%2FJ1Tk%2BpgQx18xTYIpUaOZDTcS39rqVhiWZQsu9%2FhgkYM1SiFZLpn25VuonEpZAmvMDvZns5CXv74JU7V8l33lt88uLAokyujDpGm6ft2YjTPris%2FeIasnssVy4CqlVSEsRjY3tFmbgWm%2FCYn2ANkwMeZ57zGIm2dDW2C5KduGhspx56M5hOVvY%2B%2FmMHbPNSbuBHaurzus4QThdQQf5SNTE5S17IgM43ChQm3S5xEMKtKA8awU1eC4A7cMtnV8W2jpxXinzVRKMWdSJ8eo4Xm8jx43DNaFEl11hixjRI8uS19nBuxai73IGLY0a6i%2Fq9C79dXEn1KrsJqloWMkVn%2BmnInnD1EYpaAz6mi4yy7pocMulOMJbgyY%2Fzr1aRrcQoM67jVFR%2FeqRSUmNlB4Rw02EvLXoCsdw3dwoHt%2F6W1gnA2IgYHXtUFlU%2FmLCvCgGwySX68wo6fovwY6pgGInIBjR%2FsWeHml583PUFSxtMiHqs3wdsy6Tjo44heNoOipKDhOsS9iodytd5Ee6LOd%2BreQ1w3pqf3huC6MTJO1RoBkZ041lxk%2BQSVBqYvep%2BBEcgPvVvwpBvFBHNXDpgOjJYU1S%2FlJ2GW5u2OCgpsaDilJlsUoEdzoGKfh%2FmooqWfSfpCsEJEgOHGJU5gzGpzN%2FXY5%2F4f5J8Hwb6DPAfuD%2BJfLPwIm&X-Amz-Signature=268e5f239cc1c2249305cf07316dc865e4d11fccdc50316b0a36706a66a92aec&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT4QSH63%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHE%2BtSaSw1Q8g8J%2FIBtUec3mQH7oFpms9fos8cZ9QikdAiBdLyROaiwmeDe8zFvLc15qTn4GnKqPQTNaioWgMvMrpiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbGRNKgMvCemJsovKtwDLB23D7ZJjYvZkRRpn2%2FMswbF4UfwTMY7FvtOZWehtD8zUxoAQNKVi6fLg7iegV4U18Tgtz%2BPyybBxRk5at7M8YbZ04i3YVFzwzc0b0g29Ct47Ov3Vxef9eU98ebQV9pOdqwOgwc%2BzpfoXkW308wv6LouESy6SnsiJAgMREwPvLkdSB9uno6o3BP%2FJ1Tk%2BpgQx18xTYIpUaOZDTcS39rqVhiWZQsu9%2FhgkYM1SiFZLpn25VuonEpZAmvMDvZns5CXv74JU7V8l33lt88uLAokyujDpGm6ft2YjTPris%2FeIasnssVy4CqlVSEsRjY3tFmbgWm%2FCYn2ANkwMeZ57zGIm2dDW2C5KduGhspx56M5hOVvY%2B%2FmMHbPNSbuBHaurzus4QThdQQf5SNTE5S17IgM43ChQm3S5xEMKtKA8awU1eC4A7cMtnV8W2jpxXinzVRKMWdSJ8eo4Xm8jx43DNaFEl11hixjRI8uS19nBuxai73IGLY0a6i%2Fq9C79dXEn1KrsJqloWMkVn%2BmnInnD1EYpaAz6mi4yy7pocMulOMJbgyY%2Fzr1aRrcQoM67jVFR%2FeqRSUmNlB4Rw02EvLXoCsdw3dwoHt%2F6W1gnA2IgYHXtUFlU%2FmLCvCgGwySX68wo6fovwY6pgGInIBjR%2FsWeHml583PUFSxtMiHqs3wdsy6Tjo44heNoOipKDhOsS9iodytd5Ee6LOd%2BreQ1w3pqf3huC6MTJO1RoBkZ041lxk%2BQSVBqYvep%2BBEcgPvVvwpBvFBHNXDpgOjJYU1S%2FlJ2GW5u2OCgpsaDilJlsUoEdzoGKfh%2FmooqWfSfpCsEJEgOHGJU5gzGpzN%2FXY5%2F4f5J8Hwb6DPAfuD%2BJfLPwIm&X-Amz-Signature=67492fcf8dfb62fbb1165a7671327505f8f522eca560ba0f224ac6ecb602f978&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
