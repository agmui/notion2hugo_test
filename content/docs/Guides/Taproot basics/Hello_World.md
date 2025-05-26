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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6PJAPE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCCRdaZLGmpccLQuyu8VWgf8qjZ84QvRpwZS02Vywd7EgIgCOlvE7c2B%2FTWaj1mw5kY5MVdlapmYXDFfwItrZFf%2FXcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPorSFX%2BSfaWpDu50ircA4tFd4Krq5v%2FfHEFdUhlaE9egQ9LKrQkvPtL3OcimuDpSsv9fO68jgu6YL6ezaxibxQCLbkhwnyCmYD5ST8ok9QttKBnJqDjSZ3FwKtgKTVtBrXh5q%2F1x53z7wioKq1WXx8FcmDruRgPbPhk4GEx%2BcUrO9EzFs5mEQPZG5CQVZ5F4ghUJnB5zcIp77vHDfu1k5lGCnHg5xqTJUWauXqe1rycpnW9um%2FlBcpcL2hADkbhwfZqrzERvflvRYjhlIP1Qr%2Fwo67kKePD5zcLYOlLV1uoZqGdjueq%2BrEykpnZTkhdf3ZDJpHiBmsMHdFEs5hyIgwAS8foQWP7UWGJBYsOPWUY05hcWwmL%2FxgSY%2BKu8EFNV1ADn4rt8DfmUNiDPEjaoYxhzexbkcgh2TJYy58ijXou6uEUXOBA70TFQsa9ML9a69JNoe3izRpinMETd2TtmtNInA7r3VJTh1OV%2B3CHvovxgPDyN8aiZKPDS7yLPVRNlAs%2FhyQmJ%2Fzp2GffuF4Ib6FPCB7y1jhHP%2B63DvsiYEc1bT0nXW4mhOvMTJHYC1BmYxQJNFGiteGQeRjMuVFH945EBUquPBMcwSzCQ%2BYW3VlI8x5UlF5VY0ekwNhTDdwj9mbfxfkZsiTkmyK3MMaqzsEGOqUB8b5Uv6IhTS3aJjSMSRbFqlDVWG1FSSLLcZcOFLf2RM8C3W59MQL2hHj1O0sP9MUV%2F3qWl4A0eUdY2GVAYAJxr89q5sYOb4tEtbVZ2TO97u1u5%2FKeJmZLNJUsxsNjx3zvz8vAhWf8tTl4kIP0080MEyntTKwg88IfQIyQLn1iUlLWVKaL284LAZnn9mn3n8w5VGGNQjmukKvhdPYnjKnXY8xx339X&X-Amz-Signature=fe9bd49ab75c4e13080f69624f4e74ee3374aa9ec759f4889317b7fe7b33ce01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS6PJAPE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCCRdaZLGmpccLQuyu8VWgf8qjZ84QvRpwZS02Vywd7EgIgCOlvE7c2B%2FTWaj1mw5kY5MVdlapmYXDFfwItrZFf%2FXcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPorSFX%2BSfaWpDu50ircA4tFd4Krq5v%2FfHEFdUhlaE9egQ9LKrQkvPtL3OcimuDpSsv9fO68jgu6YL6ezaxibxQCLbkhwnyCmYD5ST8ok9QttKBnJqDjSZ3FwKtgKTVtBrXh5q%2F1x53z7wioKq1WXx8FcmDruRgPbPhk4GEx%2BcUrO9EzFs5mEQPZG5CQVZ5F4ghUJnB5zcIp77vHDfu1k5lGCnHg5xqTJUWauXqe1rycpnW9um%2FlBcpcL2hADkbhwfZqrzERvflvRYjhlIP1Qr%2Fwo67kKePD5zcLYOlLV1uoZqGdjueq%2BrEykpnZTkhdf3ZDJpHiBmsMHdFEs5hyIgwAS8foQWP7UWGJBYsOPWUY05hcWwmL%2FxgSY%2BKu8EFNV1ADn4rt8DfmUNiDPEjaoYxhzexbkcgh2TJYy58ijXou6uEUXOBA70TFQsa9ML9a69JNoe3izRpinMETd2TtmtNInA7r3VJTh1OV%2B3CHvovxgPDyN8aiZKPDS7yLPVRNlAs%2FhyQmJ%2Fzp2GffuF4Ib6FPCB7y1jhHP%2B63DvsiYEc1bT0nXW4mhOvMTJHYC1BmYxQJNFGiteGQeRjMuVFH945EBUquPBMcwSzCQ%2BYW3VlI8x5UlF5VY0ekwNhTDdwj9mbfxfkZsiTkmyK3MMaqzsEGOqUB8b5Uv6IhTS3aJjSMSRbFqlDVWG1FSSLLcZcOFLf2RM8C3W59MQL2hHj1O0sP9MUV%2F3qWl4A0eUdY2GVAYAJxr89q5sYOb4tEtbVZ2TO97u1u5%2FKeJmZLNJUsxsNjx3zvz8vAhWf8tTl4kIP0080MEyntTKwg88IfQIyQLn1iUlLWVKaL284LAZnn9mn3n8w5VGGNQjmukKvhdPYnjKnXY8xx339X&X-Amz-Signature=473b1a2d27e18bb4adfdc235b577a5bb350456f8d563adc5515162cc269ab37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
