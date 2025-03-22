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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7N2PBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCG%2BNLP%2F%2FklruqzHm407G8NOgRN15tMSepEhIakvzMYGAIhAKjX64xkbtPhd5nQSjgFzglPWPCN3jSbvaJyj77FKqczKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcihjA5uq0MIobHgq3APxrZLL%2F1rDAVhT%2BpyeBm8A0oYKU8heCn7978na3U40nfPG%2BzaLB6eBGRCHCCOF04vENE1I%2B3Ug0b5FeujPqgyLgxFGacEGKs05xiI%2F1rPGtrebY859m1ECAScEyzxZfs0UO8FsyST7s36UL1dlOutYgCwUu2ia9vQkAdn5CGanhdTjUR1TB%2BoZTAoRlkUzMJpn9ugT1WaBEFhPjJB40JGeNb0IRB2xQ80szCL8%2BFUbU6khhCYXfTEgX0mL01EXYR0oT5TUvqkqcv0hbC2xoyvaXD2ssw%2FUaSePYdvxCguWkUJzebSIZvgLcxSJy4D%2FJMFkrMcDtQOFCFbaUiM8xJnjQExJMIWQwFECZKavFjt1LLb2m5fMVA%2Bp1nfAwUpyMEpk4Wafuv2HVrMWfNBgHtWyUjFVXeCTHWX3y4ZEQ6hUbLRftO1u7vG4X%2BotbGWeiZ%2BrmSLdoSV5k7MEmUPeYw%2FrjJVXkdM5DM28mhil7NhtChLwWyLd3F9tZTu7Xrmn%2B4BVRvZ%2Fstnn%2BmtVcvVsc2Ku2sBWR12JYaG26r5ga1%2B8u2nuWVw8eu62I2m0gnU1WN7m82KLcPIxcQcrJyE5iORa9EmBTmJ199OuXblVQ5dnI1viIlVyQYEcWoqaMDCC9%2Fq%2BBjqkAaWWMuU843xxdY12r9rBgfpZp95uJmvZAJlKk%2B8w1kDBAlbnC7syXraAP57XMvKUqdzIrLVoC9nJfBghS7NUoLg6cHqHwcL3gcICPVGChGYBqUhNtQQzAETxLXZmnTmofHD8HmOnY3l1uGsCWYldaWhiJvD8T5uqjMWRB3GndnSDfFLTrQEEnOsiUjRm%2FcCEi9z5NG8EwuJkrGOEm24%2F2RoxTeTk&X-Amz-Signature=18aca0b11fe879980ead5faf9ea4cb3ed9538a4819e21afcf1ceb5456bc478d3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7N2PBM%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCG%2BNLP%2F%2FklruqzHm407G8NOgRN15tMSepEhIakvzMYGAIhAKjX64xkbtPhd5nQSjgFzglPWPCN3jSbvaJyj77FKqczKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYcihjA5uq0MIobHgq3APxrZLL%2F1rDAVhT%2BpyeBm8A0oYKU8heCn7978na3U40nfPG%2BzaLB6eBGRCHCCOF04vENE1I%2B3Ug0b5FeujPqgyLgxFGacEGKs05xiI%2F1rPGtrebY859m1ECAScEyzxZfs0UO8FsyST7s36UL1dlOutYgCwUu2ia9vQkAdn5CGanhdTjUR1TB%2BoZTAoRlkUzMJpn9ugT1WaBEFhPjJB40JGeNb0IRB2xQ80szCL8%2BFUbU6khhCYXfTEgX0mL01EXYR0oT5TUvqkqcv0hbC2xoyvaXD2ssw%2FUaSePYdvxCguWkUJzebSIZvgLcxSJy4D%2FJMFkrMcDtQOFCFbaUiM8xJnjQExJMIWQwFECZKavFjt1LLb2m5fMVA%2Bp1nfAwUpyMEpk4Wafuv2HVrMWfNBgHtWyUjFVXeCTHWX3y4ZEQ6hUbLRftO1u7vG4X%2BotbGWeiZ%2BrmSLdoSV5k7MEmUPeYw%2FrjJVXkdM5DM28mhil7NhtChLwWyLd3F9tZTu7Xrmn%2B4BVRvZ%2Fstnn%2BmtVcvVsc2Ku2sBWR12JYaG26r5ga1%2B8u2nuWVw8eu62I2m0gnU1WN7m82KLcPIxcQcrJyE5iORa9EmBTmJ199OuXblVQ5dnI1viIlVyQYEcWoqaMDCC9%2Fq%2BBjqkAaWWMuU843xxdY12r9rBgfpZp95uJmvZAJlKk%2B8w1kDBAlbnC7syXraAP57XMvKUqdzIrLVoC9nJfBghS7NUoLg6cHqHwcL3gcICPVGChGYBqUhNtQQzAETxLXZmnTmofHD8HmOnY3l1uGsCWYldaWhiJvD8T5uqjMWRB3GndnSDfFLTrQEEnOsiUjRm%2FcCEi9z5NG8EwuJkrGOEm24%2F2RoxTeTk&X-Amz-Signature=0dd87b11be7677060359cdddd9d2f563811e60bcfd1a9fb1dee9c13ef6bb2c24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
