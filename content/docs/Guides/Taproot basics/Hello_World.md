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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6W7KPZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAauNYfFMHfLrSPmtKhLYVNdL0rFc5RzFRuodx9m2t30AiAD4mozqGLnyMa890wKNdl29wQYkoxvGoIba77ojFawSiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FlOwOvT7e97DltQhKtwDY86OgUyZ21jhTHiokI9TsMgmxnnOy7Ozl1t6IRE0NsvLwjfd%2Fe177XzyZSmhPsGRHv8kaEuSiw57R9kwrhK2jyKII%2FCovB1aV%2BUlxixESg9Hsn4mFS3CAoQrmxUBJt3d9YTgy8YhrgE7gb8x7%2FcdNLL%2BQLn3zOfyoHGz8fOEBDgCV4x6SMvKFb%2FJWjtNv7HY%2FrRj%2BcfV2ugckxFGVfHEoYwggb2UmqGnVlnT7JgFU1rlv%2FIdt%2BCHtHKHqMEt%2BOuCXKDF5PFUn%2Bxjka4WntNQnxtVhgxfybl0AqIDQchyaKYh6cgcSo4OqG83g6ggjn3%2F%2FozZSvz%2FZQaVr5cwagketPdlk%2FH9ifMIbP79%2Fw14PgVCh2GSPPqFwWyJPnxIyA5EC7LRacjke%2Fe47qYhNfUIWcD5ZCgUyNGvwSUujHmweetE0yigh%2B62Jp8oj9TBXBWsOSq2C0oJgHTn1p%2BFnlOeGBZXmXje%2BcOlVqRthrQMxULPILsMOHCLxN83GD4OVAnA3OvxRoZzke0GKr1MPi5qEarIRfnAgXloQ6Ki0%2FrOonoKFw%2BmXDqGVUPQ6k4653OePmD5SkDTpO88APIMDwB0mUYvyDGGrusv%2FbB%2FKtBE4EL9CcR0FEvUh0cthBwwh87MwAY6pgGBR4LUlV0UvkD2%2BuKnQGK9B8pyQKRg4jLFgUVEGPPesUKXprRBAOLb0JbSuCxMiwg02vikfJmfG7w%2F9opumgRPTtsB77WIFVJeLGEireztOw8zXq3%2F1anPoAN0ysS1LdjQZINtRrnzg8cOHRnyA%2FEB19O%2BesJvSZWnbiC%2BQoF1REExeemDohQjmoeMU9xWBufO2%2Fhb0KLOF9EqyFC2OyXbipiBlVDr&X-Amz-Signature=bb35418cade070510e285ef09f1e378dc708eb3cc20d36f8ab60fb5a01559f85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6W7KPZQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAauNYfFMHfLrSPmtKhLYVNdL0rFc5RzFRuodx9m2t30AiAD4mozqGLnyMa890wKNdl29wQYkoxvGoIba77ojFawSiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FlOwOvT7e97DltQhKtwDY86OgUyZ21jhTHiokI9TsMgmxnnOy7Ozl1t6IRE0NsvLwjfd%2Fe177XzyZSmhPsGRHv8kaEuSiw57R9kwrhK2jyKII%2FCovB1aV%2BUlxixESg9Hsn4mFS3CAoQrmxUBJt3d9YTgy8YhrgE7gb8x7%2FcdNLL%2BQLn3zOfyoHGz8fOEBDgCV4x6SMvKFb%2FJWjtNv7HY%2FrRj%2BcfV2ugckxFGVfHEoYwggb2UmqGnVlnT7JgFU1rlv%2FIdt%2BCHtHKHqMEt%2BOuCXKDF5PFUn%2Bxjka4WntNQnxtVhgxfybl0AqIDQchyaKYh6cgcSo4OqG83g6ggjn3%2F%2FozZSvz%2FZQaVr5cwagketPdlk%2FH9ifMIbP79%2Fw14PgVCh2GSPPqFwWyJPnxIyA5EC7LRacjke%2Fe47qYhNfUIWcD5ZCgUyNGvwSUujHmweetE0yigh%2B62Jp8oj9TBXBWsOSq2C0oJgHTn1p%2BFnlOeGBZXmXje%2BcOlVqRthrQMxULPILsMOHCLxN83GD4OVAnA3OvxRoZzke0GKr1MPi5qEarIRfnAgXloQ6Ki0%2FrOonoKFw%2BmXDqGVUPQ6k4653OePmD5SkDTpO88APIMDwB0mUYvyDGGrusv%2FbB%2FKtBE4EL9CcR0FEvUh0cthBwwh87MwAY6pgGBR4LUlV0UvkD2%2BuKnQGK9B8pyQKRg4jLFgUVEGPPesUKXprRBAOLb0JbSuCxMiwg02vikfJmfG7w%2F9opumgRPTtsB77WIFVJeLGEireztOw8zXq3%2F1anPoAN0ysS1LdjQZINtRrnzg8cOHRnyA%2FEB19O%2BesJvSZWnbiC%2BQoF1REExeemDohQjmoeMU9xWBufO2%2Fhb0KLOF9EqyFC2OyXbipiBlVDr&X-Amz-Signature=32f0b7ffe26f9e550d397376d003351ba3e42ca096914da532e105a0bb701754&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
