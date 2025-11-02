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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3EQLH6%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE2wLo4JYzf%2FGPgTpJYhNWuFk2E0hKr%2FLmPCT0qnBAA2AiB1DDDhir7n953Xjp2gw5XZRiJwDSM2ckAcX%2FbDoHlGnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMGYjSeDo61gMwG322KtwDUQQJ9LLvMu0PxDUMOPuElsCq%2F34tzKtg4T%2FmFlooWGlWHNaX0GxcYNwoEg70JNBc8vvl%2BVlgwwZHEl%2B0%2BTsWqZq9ZH5CuBBoBOYGUGkAjdSSicZeSf84BcGPTWpk%2BPZLbSp34HqKtfmFXP9grolHBh8WvollMU7If2xojrOqSGlFefYRGgEOBVqBsxFPzMhgB53ZkfPk3u53iKQcRT5F1jFIfjX4E1bXnoJIpO%2FAB7UqXnyvWGRH8qZlfsi6Wfo1jnJFo0sVhyt9AO3EwxCrRV%2FKq7Tpfi9YTNBKgMeqte9rCqwuiHic%2BmtCOPGeaRqNI7olCFmp1jCCovXHOSTyhh1kXJ8eWPWdGg8EvjcX5XTvPEPEAzzcohh5UtOljp%2BMZQYMVO1CADjmh1UJXg5BTjNM8bLfqAvOxMEGEG5sTP7fRtFV7Xxi0zUgb0DG2ehX9KSDMRqaExlmz%2BfiqKEurKJoZ7%2F6x8ZzJersABHESxXqZlby9NWOWKh2%2FXUfOFr8Ir6zNpUl1bNvG6%2Fpw21q5VqXDjGILUrfcp4tKWaa2a8M6EgU4l7yfYqnpGYlKVmXWN8iHH02w4UhOsLL6TUApy%2BLtrIHI4wEBkUC7hfzikl2mJgQLmCDtJ1F4mwwv%2BiayAY6pgFmKSy97XL8K90nrHl6l510%2Fw28YAa1OH4ucJG9kJCtritEsXxFhm5zRCsq7oTKOn3iiqDO0BqUdJDJWyhVufzfuIHr7mCybUa6%2BzhrRtAKgEphAkOuq5qPXjS96Wccsf%2FLB3RbogdX8ubQeOYCv9lGnr0J75%2B9ix%2F0HG5x0%2BZffmisbV53NcDi5vK0WC608ZzcWzNX0%2FWR%2FIEFTMq0Ft6TEwhpM9lO&X-Amz-Signature=2702e4d0321f590a251de851b1cd8a572eb6ba9dab60286663a2adda81bf576c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3EQLH6%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE2wLo4JYzf%2FGPgTpJYhNWuFk2E0hKr%2FLmPCT0qnBAA2AiB1DDDhir7n953Xjp2gw5XZRiJwDSM2ckAcX%2FbDoHlGnyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMGYjSeDo61gMwG322KtwDUQQJ9LLvMu0PxDUMOPuElsCq%2F34tzKtg4T%2FmFlooWGlWHNaX0GxcYNwoEg70JNBc8vvl%2BVlgwwZHEl%2B0%2BTsWqZq9ZH5CuBBoBOYGUGkAjdSSicZeSf84BcGPTWpk%2BPZLbSp34HqKtfmFXP9grolHBh8WvollMU7If2xojrOqSGlFefYRGgEOBVqBsxFPzMhgB53ZkfPk3u53iKQcRT5F1jFIfjX4E1bXnoJIpO%2FAB7UqXnyvWGRH8qZlfsi6Wfo1jnJFo0sVhyt9AO3EwxCrRV%2FKq7Tpfi9YTNBKgMeqte9rCqwuiHic%2BmtCOPGeaRqNI7olCFmp1jCCovXHOSTyhh1kXJ8eWPWdGg8EvjcX5XTvPEPEAzzcohh5UtOljp%2BMZQYMVO1CADjmh1UJXg5BTjNM8bLfqAvOxMEGEG5sTP7fRtFV7Xxi0zUgb0DG2ehX9KSDMRqaExlmz%2BfiqKEurKJoZ7%2F6x8ZzJersABHESxXqZlby9NWOWKh2%2FXUfOFr8Ir6zNpUl1bNvG6%2Fpw21q5VqXDjGILUrfcp4tKWaa2a8M6EgU4l7yfYqnpGYlKVmXWN8iHH02w4UhOsLL6TUApy%2BLtrIHI4wEBkUC7hfzikl2mJgQLmCDtJ1F4mwwv%2BiayAY6pgFmKSy97XL8K90nrHl6l510%2Fw28YAa1OH4ucJG9kJCtritEsXxFhm5zRCsq7oTKOn3iiqDO0BqUdJDJWyhVufzfuIHr7mCybUa6%2BzhrRtAKgEphAkOuq5qPXjS96Wccsf%2FLB3RbogdX8ubQeOYCv9lGnr0J75%2B9ix%2F0HG5x0%2BZffmisbV53NcDi5vK0WC608ZzcWzNX0%2FWR%2FIEFTMq0Ft6TEwhpM9lO&X-Amz-Signature=436b0f96e0b180b92189be04a192119bce636cbe5133cfcf825864ecc943a644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
