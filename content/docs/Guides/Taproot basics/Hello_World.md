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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXWHIMG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD20kMGtqPPmgD1HerxgX0pBhcC%2F8kCMRD0725gI1HQ7wIhAJjWESOZolRHLdfWqXLSfwx5Kef%2FbA99ZNEt1POlFu4vKv8DCFIQABoMNjM3NDIzMTgzODA1IgxffksNiFh%2FQ03l0Mcq3APnPE%2BHIee%2FlPWamnYsDK0ePHppg%2F350RSh0x4g9w1GWg1k9TvJ%2Fh%2BTtt56KeWKSdXqoMSrqM7pHyRmDtxlm0xJcZRxw9RERZzp09DuSdbCQQ2HHkLGLD40RaaNqAAIUwGaHlkX9i308Wp2NoWXAFulrmb%2FqhpCCMFnp1le0pWWN6J8EnNOUrKUjYxfNFj51OwPmZiLf41gr5pAlaydSvMzknlqBg8eePyNlacnflD2SnS1jOSnIswCAIBfobN5YaUu1U1MTRI76D1k4XKgZ5APmkNIQakmUm%2FhSEkfoxZWo5je9NVZKMBqnOVSckJc2pbZRBcP2iLww1g2GUl%2Bq9uXEpMV2RLt8gabn%2BCJrqwxo5hW09hTuLLfbCIaVvD7%2FI6DRC4Scpnz40RwZRGd5m%2B2c8IIB%2B4tLInri3dEJMVKHfv3G9Hmc2TXQgjSQGxxAyx1mJBmGTtU%2Fb%2BnBpEe4qrLbGLgh9dw8gAKW%2BCAlHywpif3WEOi3y9jylu9FfhLZxHv%2BjJat%2B%2B5yon6nK%2FQVhNmL0Z19qtTJLTIwK27%2B%2BgjKQ211cX%2BhUt2Cj22pIZSWybeiegN6xvjU9pE%2FXZKSuoYhpBeluydDJSfsL9uxGbjBQub2%2B9Vp7EkkrS%2BkzDknqfDBjqkAaWSpaWFwG9isqLG7DV0ldJrZg00q6Tyrbd6cr6eFdhrONrHz0SRoCoeny0bGeqH7SwPTwpcvmhtjj0T70s3VRdTJghYl10vl%2BRWwAuKNghiuyyC9d3f4RaXQg0ocq0wc%2BSHNms3lWFisx49ofOXeZhQ8Ff7c6AG0Y%2BOOU7T%2BozsvXlLNzspe%2Bg8xZFFqSJ53JgLTl26XavSI8DXodQ3m5%2B3sy%2Ba&X-Amz-Signature=19ba286fd4c15edff4a5222c26ebb968866c61f96c97390dbcedf6200ba130f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXWHIMG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD20kMGtqPPmgD1HerxgX0pBhcC%2F8kCMRD0725gI1HQ7wIhAJjWESOZolRHLdfWqXLSfwx5Kef%2FbA99ZNEt1POlFu4vKv8DCFIQABoMNjM3NDIzMTgzODA1IgxffksNiFh%2FQ03l0Mcq3APnPE%2BHIee%2FlPWamnYsDK0ePHppg%2F350RSh0x4g9w1GWg1k9TvJ%2Fh%2BTtt56KeWKSdXqoMSrqM7pHyRmDtxlm0xJcZRxw9RERZzp09DuSdbCQQ2HHkLGLD40RaaNqAAIUwGaHlkX9i308Wp2NoWXAFulrmb%2FqhpCCMFnp1le0pWWN6J8EnNOUrKUjYxfNFj51OwPmZiLf41gr5pAlaydSvMzknlqBg8eePyNlacnflD2SnS1jOSnIswCAIBfobN5YaUu1U1MTRI76D1k4XKgZ5APmkNIQakmUm%2FhSEkfoxZWo5je9NVZKMBqnOVSckJc2pbZRBcP2iLww1g2GUl%2Bq9uXEpMV2RLt8gabn%2BCJrqwxo5hW09hTuLLfbCIaVvD7%2FI6DRC4Scpnz40RwZRGd5m%2B2c8IIB%2B4tLInri3dEJMVKHfv3G9Hmc2TXQgjSQGxxAyx1mJBmGTtU%2Fb%2BnBpEe4qrLbGLgh9dw8gAKW%2BCAlHywpif3WEOi3y9jylu9FfhLZxHv%2BjJat%2B%2B5yon6nK%2FQVhNmL0Z19qtTJLTIwK27%2B%2BgjKQ211cX%2BhUt2Cj22pIZSWybeiegN6xvjU9pE%2FXZKSuoYhpBeluydDJSfsL9uxGbjBQub2%2B9Vp7EkkrS%2BkzDknqfDBjqkAaWSpaWFwG9isqLG7DV0ldJrZg00q6Tyrbd6cr6eFdhrONrHz0SRoCoeny0bGeqH7SwPTwpcvmhtjj0T70s3VRdTJghYl10vl%2BRWwAuKNghiuyyC9d3f4RaXQg0ocq0wc%2BSHNms3lWFisx49ofOXeZhQ8Ff7c6AG0Y%2BOOU7T%2BozsvXlLNzspe%2Bg8xZFFqSJ53JgLTl26XavSI8DXodQ3m5%2B3sy%2Ba&X-Amz-Signature=630446f4cc4fa496de9aa2e0f198ccc71ccab9aa3695afdf820d5b35999bd40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
