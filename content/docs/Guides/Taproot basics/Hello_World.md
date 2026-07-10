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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWMJZXS%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKxErLDxC83NwIY6mFzdYII0Yz3%2F7wXtKSLv4xODTp8AiAwmfmi76NtaRVxbCeAysVa2rAQLqWa2nQI0AG4j0i03iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH3nwOBSfb5sCCNBtKtwD3VUdFwR9mbM2tFWjYuOmjk7%2Bv%2BmEj%2FLaxrRqg8GPJW9UT1F6GqC8yF4vvvPLwkOE0AOp05tO6qDppFPic7XM1yk%2B5%2Fu7XcNYxlcsvYHzx62kH6%2BrEGXPEn0TItLaHGdqU65rzV%2Fjo9TLgiwrpkKHCsG%2Bddb%2BIKULbnjSD9Gvii1zb%2BB1lhRTb6VVW06agxJCFAEU%2B9RnlkyCyzOEcH6o7M%2BGrPyw1W%2FhgPnM9CqlZOjrRe3SuFkIGpo%2BqnlOQXyMU7w9YeXmQKNpZEXYj1IYfBMFSyM9ed2JwrdiRYXUMuggjjSrfB0cACF3AvQD0CjxH9NmQasxKiHfM1cq%2BgprQaLKk5IAMVMRPpbv%2F7EMACl6YoGIQcblHPSCQl8HGLiZy53mLQ8ghb%2BOhtx9z9C%2BRksATxVHfhMxccz6gBZ1gMh%2BDOTagJKjYon7nSayRYbAnBdM8RS%2F6UggS2VwHcsXZVgv3Lg9X8SMeWq0QnEgqiSCucbYUE46nG5IXqMLkh1mQ%2BbBrjM7Obz2zmmnvvQIbIIvbObsCAsFQkLER1%2Fyk8d2bloY55vbR3yCHfHxqCFIop8kGdoDeuxXgS2GM1hdPaELqnXn6fMkpQFhN6g8YYPvrC8OKtMd8D0akmAw6LXB0gY6pgEYhSbNL%2F2UVX7FoiflDAcVjIUBdmLkHmN9T5MRotbtw9dCKT6FQm%2FzSEX8ETbmK1PJvFfQsoU3fTGIxAAGGVBA507wkJ170NlLDWSYC6KzyWwmp34J7UoyRnX1ijWHXMjCdj25EzcEJkPNUG9Xj1%2B2KLdPj9zkcRR60x8nzTAS%2BsJuiPuN8hxB1%2BN2cu8hh5VXHpe3b9BOK8HGZF5kGV%2FIrwNaioIE&X-Amz-Signature=f8236061ba07f6ab98297e5a052f95f61843668239d428ad6689f2ea3dd2b1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWMJZXS%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKxErLDxC83NwIY6mFzdYII0Yz3%2F7wXtKSLv4xODTp8AiAwmfmi76NtaRVxbCeAysVa2rAQLqWa2nQI0AG4j0i03iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH3nwOBSfb5sCCNBtKtwD3VUdFwR9mbM2tFWjYuOmjk7%2Bv%2BmEj%2FLaxrRqg8GPJW9UT1F6GqC8yF4vvvPLwkOE0AOp05tO6qDppFPic7XM1yk%2B5%2Fu7XcNYxlcsvYHzx62kH6%2BrEGXPEn0TItLaHGdqU65rzV%2Fjo9TLgiwrpkKHCsG%2Bddb%2BIKULbnjSD9Gvii1zb%2BB1lhRTb6VVW06agxJCFAEU%2B9RnlkyCyzOEcH6o7M%2BGrPyw1W%2FhgPnM9CqlZOjrRe3SuFkIGpo%2BqnlOQXyMU7w9YeXmQKNpZEXYj1IYfBMFSyM9ed2JwrdiRYXUMuggjjSrfB0cACF3AvQD0CjxH9NmQasxKiHfM1cq%2BgprQaLKk5IAMVMRPpbv%2F7EMACl6YoGIQcblHPSCQl8HGLiZy53mLQ8ghb%2BOhtx9z9C%2BRksATxVHfhMxccz6gBZ1gMh%2BDOTagJKjYon7nSayRYbAnBdM8RS%2F6UggS2VwHcsXZVgv3Lg9X8SMeWq0QnEgqiSCucbYUE46nG5IXqMLkh1mQ%2BbBrjM7Obz2zmmnvvQIbIIvbObsCAsFQkLER1%2Fyk8d2bloY55vbR3yCHfHxqCFIop8kGdoDeuxXgS2GM1hdPaELqnXn6fMkpQFhN6g8YYPvrC8OKtMd8D0akmAw6LXB0gY6pgEYhSbNL%2F2UVX7FoiflDAcVjIUBdmLkHmN9T5MRotbtw9dCKT6FQm%2FzSEX8ETbmK1PJvFfQsoU3fTGIxAAGGVBA507wkJ170NlLDWSYC6KzyWwmp34J7UoyRnX1ijWHXMjCdj25EzcEJkPNUG9Xj1%2B2KLdPj9zkcRR60x8nzTAS%2BsJuiPuN8hxB1%2BN2cu8hh5VXHpe3b9BOK8HGZF5kGV%2FIrwNaioIE&X-Amz-Signature=b4b6522199aa0cef21c96f1362fd938fad7b4722a32a9b517ced577c6c14a365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
