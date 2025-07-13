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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWVK7OQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBdJ0ZQcOdZ0lSpk8%2FuwYgIZC9axKgiVuaRdR%2FaWTmwIhAP96z%2Bj91i3fA0l8WYrV1AoT1DPcSKUrF3TwifRhVLomKv8DCBgQABoMNjM3NDIzMTgzODA1IgyqpSF6XbUhfW3mY%2Bsq3APXtfhBpK8eK1aFHkwlFkzNr4CCIO6nnQlmDHf46VgkpvdwZvatpChCVZkOn%2Fyw4kL6DoFDi7kqGV5nWxZWKsX0Q96LdsQcbA9JN%2BmPBGypg%2FMwYxx6RISXN%2BxYzxTPXYM5i%2FxfXDgsCIFWiofJn0f8fvHb%2B78bOEH5lGGs2TxuESbeoa8hIPBOLyCUIEyeY7YBVqJ8%2B4jk93XNKLg7rRp7vSmDRdX4f2LQMsgvBquaoe1y9pda%2BQ8FA2hGjeTF1mUMfQOHLdwEIGEk4TswtYMFIQTtrGRR24uoPl%2BCDMLs6GkLO4L6UWDw0NWdBcrizjXwYaNHexQNc4FK02uvOjkCLEAPnU6bXbE3eInoEwy6zggfFx5iLbA9s4nHnDDrGU9kx1Y%2FX6nPusNCrK%2FtgPsrLOZzIVhH4Izlti1U50ODkyBzskW0H%2FBiPpjJUK0J8gIxlSWIrq5W1a1vuhNNPQPc%2B5RtPZjXqFrsUU2nHpBQxjHJ8TOIxkijXSxS3MEyAYDB8jHFhGjTW2iSymLnfzX1ZpfiEZmOh4JT0d5XiPU7%2FGBQzj%2Fktf7doUE2mU%2FLMa0SNSf4PF0gi%2B4fcYlHGFQNOWX49Zqu9j1bFz8RQp95tmp6tAIabGueLUXKWTDUls%2FDBjqkAZgYOY%2FcVe2vqmWOleu33MDZmu7Cb7N2W6FfAUmdoJebVMaEhimcyOwWPomjW19SUTwDXPE9k6EVdp7pDNMqw%2FjZWmrgUG5k7pCBkfEY%2BnPU%2By0ppjRfGqn9mSgony6bydDTv77DpdprVze1W2M1x0F8xOvvREDjk5nLXrTFm2z5XRCTrkimhkufcc0EUBGmPSQLm9PMZzdGDQkCvsuNJ5taseMl&X-Amz-Signature=5da6f8a2a0ed89ce7c354cd0259bb158d7f9440224fe9527f6f39b2220acf57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWVK7OQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkBdJ0ZQcOdZ0lSpk8%2FuwYgIZC9axKgiVuaRdR%2FaWTmwIhAP96z%2Bj91i3fA0l8WYrV1AoT1DPcSKUrF3TwifRhVLomKv8DCBgQABoMNjM3NDIzMTgzODA1IgyqpSF6XbUhfW3mY%2Bsq3APXtfhBpK8eK1aFHkwlFkzNr4CCIO6nnQlmDHf46VgkpvdwZvatpChCVZkOn%2Fyw4kL6DoFDi7kqGV5nWxZWKsX0Q96LdsQcbA9JN%2BmPBGypg%2FMwYxx6RISXN%2BxYzxTPXYM5i%2FxfXDgsCIFWiofJn0f8fvHb%2B78bOEH5lGGs2TxuESbeoa8hIPBOLyCUIEyeY7YBVqJ8%2B4jk93XNKLg7rRp7vSmDRdX4f2LQMsgvBquaoe1y9pda%2BQ8FA2hGjeTF1mUMfQOHLdwEIGEk4TswtYMFIQTtrGRR24uoPl%2BCDMLs6GkLO4L6UWDw0NWdBcrizjXwYaNHexQNc4FK02uvOjkCLEAPnU6bXbE3eInoEwy6zggfFx5iLbA9s4nHnDDrGU9kx1Y%2FX6nPusNCrK%2FtgPsrLOZzIVhH4Izlti1U50ODkyBzskW0H%2FBiPpjJUK0J8gIxlSWIrq5W1a1vuhNNPQPc%2B5RtPZjXqFrsUU2nHpBQxjHJ8TOIxkijXSxS3MEyAYDB8jHFhGjTW2iSymLnfzX1ZpfiEZmOh4JT0d5XiPU7%2FGBQzj%2Fktf7doUE2mU%2FLMa0SNSf4PF0gi%2B4fcYlHGFQNOWX49Zqu9j1bFz8RQp95tmp6tAIabGueLUXKWTDUls%2FDBjqkAZgYOY%2FcVe2vqmWOleu33MDZmu7Cb7N2W6FfAUmdoJebVMaEhimcyOwWPomjW19SUTwDXPE9k6EVdp7pDNMqw%2FjZWmrgUG5k7pCBkfEY%2BnPU%2By0ppjRfGqn9mSgony6bydDTv77DpdprVze1W2M1x0F8xOvvREDjk5nLXrTFm2z5XRCTrkimhkufcc0EUBGmPSQLm9PMZzdGDQkCvsuNJ5taseMl&X-Amz-Signature=7623f0bfd62f73c41956fe4b9e2785d4cf5cc0c685f154184f56419ce856d40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
