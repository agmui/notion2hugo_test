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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=1162dcb55bb1647fc8bf3e04f5a669e7aa5ddde14944ea8e5723ff436e3747ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVIMPNE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHtAr6zOVr8wqfJR34SUNZnFyyCSx70n8BebLwmZwOK%2BAiAvoGVafqWS7qEHcSQ0aWnK7gen1QdINrQRF2f%2FZqVXoSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0cwwcO6Q39%2BWWZB%2BKtwDxA6EP9uSXRXng4uaXCpfW94z%2FubAESJChOVBnU3pp4YSPbaOW9aYUBlHKBy%2FZS4aY6hM7D4%2FNpjML9aTMNGGPtr4Zni0Qd3F3koXf%2Bq9jySO1Sm%2Bysqc9JJewCigblcbISxPEzqq0KBF2Gtgw27WYZtKZZsnqmo6z760K1%2FYXpaQ%2BVGEnB523uPPxf5vfp9nJfDW%2BY17YojVN9YwoXZehImaC18WUM8RR2dvi7hoZzxpGbSUuc4abY2P51vcvjDjKfjJ4OjtL75hsABsNhu4js2LxVZIkn7S5aW0QljoayHxQpB2WTsEzGFAysgQjoHLMSFnuX7c742Q3XH6WekReIztiElJNVJTWPVrg1NXBcOD4TDwr96PWC7w6fwzqo3%2Fmol6dUesdy6tIv3%2FPvqODJJ8%2FRRhUnhg54XfwmCgPirT7zbDKtgCvUncxMEc%2FCnLzxhiWQAx%2F17UL%2Fq4VpSl4bEYacYO3CiiRQyPxTuNtdqO4w6i2yRzofKsb7WVmAfKHxF7NnDXNOSJ7U3KrVT9EtG%2BBzwxH5TepjnBBTKYTHfPVzrSkx6liSsyfd4AuBpoXgUFlmVmEpbK0j7eaLtLNFCH7BYOSQb8feaftl7YWFFu%2FDCKcSdnvCy48l4w1LuWxAY6pgFEmHVDO2uyEXzfjj2%2BfSqlS0Llx%2Bu%2F%2BaJYGsLLFR4DoN4MKNk565%2BxK%2BQnNV8nyFNdDX3rHeIYP2Tj0lKI9TM04dQrSBNxyxd48Uraaex4AUDZQ0V5zg3qL6fmsy1n3tuFAcEhZ1zOk9sni2S5YBiucSG4TH5C%2Fw9eGKyTSwKmgdkRkIcr%2B9Fxes1ExjrwcCrzRgdBXyOek3%2B9s%2FJlsDoj2amugrCB&X-Amz-Signature=22742b4e6347caabd97736dfedacc049e23c304c63dd1f939f34d15c23b5bf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
