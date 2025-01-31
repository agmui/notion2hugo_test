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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNSMB3Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlr5y4WM8qsFErZTtcxxNsRjD%2F9pLXdMcFRsBk99zD3AIhAIVe33azXQYeNJ7mW1Z49%2BzNMXBwmuwo1HgsK2lL6kBoKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK%2Bpf1Z2ubKy7qWoEq3APu3uqEGquk6rjvMsD3imhdYLeRArIi%2F5HO4jg5Arm3hPv5Y6JrRDgistIV5mJQ%2BQGG2pfdsp3gt5Nfq1sfE4iXbE%2BDfDRl5c6AmE1YCxCSheN%2B8hTj%2B3GJ7uwQ2ZIe0IOzn2XmTo4z%2BqfgUUp5sU92NW%2Br7uEG1y4g4lp7yZXjmyDaITRJ%2Fv4CFeFs%2BidPQt2Wyr%2FaGHFdmmswM8%2F8yJT4FDW0QDRFFToc6euiqVhefoiE8icQ8fMehVus193c0k6rkzah42YKvl2AlmGWKLuKpCvQKsGLOLYgKdfSIIJPORaez7Ny0DwsPjfij1RT%2ByNexdWWDJvGf1r8KMjqltd%2F298p3htETjr1v%2FFYqBztV9chnnUC6wfUa6T%2FGxaK%2BtbpJ0HoXt1BWa04AoyEECu7QXn1l2uAznOjFAI2XYgSSpfCyKP6PwxpDtbf7mEe%2FBhK4%2Bt2iMbZUjW9rnK1kP47XszghY2NDOx6kLHeeB2U4xgFWjdHTwn4vVkhvSnehLbpxQutVxBo8lZV0jcIoiCSjLLaYjRVL4%2FmBbKG4%2BTMC0CV4jSQMdce1I8wEbXlMKyG6GmWD9z19zri3fBt5O05qkVuWp%2BUAFsvC703Omzs6ssR2%2Flo7xe8oBvnCDCG2PK8BjqkAb%2BSVi3phG8Pz%2BFbeSdp%2Fy0FwhVVncOaOMDTavHDP5huSRs25ImD77KHD0UYEm2fRI0JNicj1RUHeBimDR2RVQ6%2BpotjmluEehF%2B2UpVz4wK5qcrfawj2%2FxV5qavXCGbtOi9Uc03vw7XFgabKYgpnRHj4Uxv68ISTFJICkanZ4AvP8UhlLPunLUMcffVkrbawlpDFmqjy0b5VmN1XQN1Z5vTQwK4&X-Amz-Signature=cdec378e3236fa91d44cab8280377894dc0079d3fcc3e75173694eaf036116b1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNSMB3Z%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlr5y4WM8qsFErZTtcxxNsRjD%2F9pLXdMcFRsBk99zD3AIhAIVe33azXQYeNJ7mW1Z49%2BzNMXBwmuwo1HgsK2lL6kBoKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK%2Bpf1Z2ubKy7qWoEq3APu3uqEGquk6rjvMsD3imhdYLeRArIi%2F5HO4jg5Arm3hPv5Y6JrRDgistIV5mJQ%2BQGG2pfdsp3gt5Nfq1sfE4iXbE%2BDfDRl5c6AmE1YCxCSheN%2B8hTj%2B3GJ7uwQ2ZIe0IOzn2XmTo4z%2BqfgUUp5sU92NW%2Br7uEG1y4g4lp7yZXjmyDaITRJ%2Fv4CFeFs%2BidPQt2Wyr%2FaGHFdmmswM8%2F8yJT4FDW0QDRFFToc6euiqVhefoiE8icQ8fMehVus193c0k6rkzah42YKvl2AlmGWKLuKpCvQKsGLOLYgKdfSIIJPORaez7Ny0DwsPjfij1RT%2ByNexdWWDJvGf1r8KMjqltd%2F298p3htETjr1v%2FFYqBztV9chnnUC6wfUa6T%2FGxaK%2BtbpJ0HoXt1BWa04AoyEECu7QXn1l2uAznOjFAI2XYgSSpfCyKP6PwxpDtbf7mEe%2FBhK4%2Bt2iMbZUjW9rnK1kP47XszghY2NDOx6kLHeeB2U4xgFWjdHTwn4vVkhvSnehLbpxQutVxBo8lZV0jcIoiCSjLLaYjRVL4%2FmBbKG4%2BTMC0CV4jSQMdce1I8wEbXlMKyG6GmWD9z19zri3fBt5O05qkVuWp%2BUAFsvC703Omzs6ssR2%2Flo7xe8oBvnCDCG2PK8BjqkAb%2BSVi3phG8Pz%2BFbeSdp%2Fy0FwhVVncOaOMDTavHDP5huSRs25ImD77KHD0UYEm2fRI0JNicj1RUHeBimDR2RVQ6%2BpotjmluEehF%2B2UpVz4wK5qcrfawj2%2FxV5qavXCGbtOi9Uc03vw7XFgabKYgpnRHj4Uxv68ISTFJICkanZ4AvP8UhlLPunLUMcffVkrbawlpDFmqjy0b5VmN1XQN1Z5vTQwK4&X-Amz-Signature=28edc1492d6d411a7dd8664664de20cb379b1853f34c459ae6a7a7450d11ef66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
