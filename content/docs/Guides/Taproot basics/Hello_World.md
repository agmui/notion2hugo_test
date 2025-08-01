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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISQAGM4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy1OKIsyt6ft2yIkIOVaIQm0nquMfyQOBIgfvLxoOYfwIgd1WOltt9goQxefw7xL1xPNqIJTYrdXeO0Yab6mZku6gqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoS77kGAy6BX%2BQ8ayrcA1VCjEGY%2Bd5YoeEffvuRN9tXjqhxzblD7MFp0wJYhGSQRMw%2Bo%2BUIFgnkXZ0AaIup4Po%2BQem2Tghx9eWuIrEEbPgSiZBtO8zyWwL5DZ2iZx2IE1vp1msXxKpKvVDHai1IqVqo5cDrRG313XZBdNOd06umA9FmjGgSBIbK3%2BIgzmEO1SmhTdACowFf4wdr0yovuG3TRf4xpjCmZyEliLiOr7JL82IoXjGtv%2F6j45YgUpsD2jYEersh3AvqU7Y2IXFW2PL5IYHlZDhoD0ndpvqWSbnZ1wjtJ4O%2BqdmCO6Qg8hGoEDCrPKugc17bxNlC0PvzcUnxvPY8Tseq8qExdqe8%2FlbQBc9qlAAuhG3DtbSqM6RB0MM9TFhS%2Fh5jc1mj9S%2BwuxuDb3xKMvj6z%2FW%2Fz%2FmsxY1kZc5KybbjU%2BOoz4mGQG0L7zZOziRwPXySvEyC3sCPlb0c07osSA2cvsuPEuRfN9h1Shzdqc9tlpTv1emSydtpfLGmK1byqa%2BGge5iVMr7Ys%2F9OSgSQuyvEW2LzGkuleFO0dtn7%2FeWGfWlbVTRC6Zm15hdOUnagNIWu%2BWzM2M7oPLo86BA0ktZC0KI%2BB8xNXGL4czJUKPpj7N3H2eCnbVAS9yhlZ66nvHfz%2FAvMM%2BRssQGOqUBKW3gp9jdO%2Fiu7hoM2dFEsDSQJXeMvjw8yvEQvmF32v8faH1H5y39t%2BEoWlI8K2Y7MaMGzEsywqGqrMhX1PPkSIUwdD9AZZXpVSCNXcj1STdcljOQRNJtMjow6G0IoShaQgCUWZx1z1828m3wVlmWTpPcltUpBqYBhtj2ZN3RUUkSmZCf%2FBWfcGAqEIuVGbkWHpabJx4Jn05p5pxx59UlfrgyqQAt&X-Amz-Signature=bf314b7330a1b093b6142729b3c38cb7b3451562b334b22baeb133838c261d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISQAGM4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy1OKIsyt6ft2yIkIOVaIQm0nquMfyQOBIgfvLxoOYfwIgd1WOltt9goQxefw7xL1xPNqIJTYrdXeO0Yab6mZku6gqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoS77kGAy6BX%2BQ8ayrcA1VCjEGY%2Bd5YoeEffvuRN9tXjqhxzblD7MFp0wJYhGSQRMw%2Bo%2BUIFgnkXZ0AaIup4Po%2BQem2Tghx9eWuIrEEbPgSiZBtO8zyWwL5DZ2iZx2IE1vp1msXxKpKvVDHai1IqVqo5cDrRG313XZBdNOd06umA9FmjGgSBIbK3%2BIgzmEO1SmhTdACowFf4wdr0yovuG3TRf4xpjCmZyEliLiOr7JL82IoXjGtv%2F6j45YgUpsD2jYEersh3AvqU7Y2IXFW2PL5IYHlZDhoD0ndpvqWSbnZ1wjtJ4O%2BqdmCO6Qg8hGoEDCrPKugc17bxNlC0PvzcUnxvPY8Tseq8qExdqe8%2FlbQBc9qlAAuhG3DtbSqM6RB0MM9TFhS%2Fh5jc1mj9S%2BwuxuDb3xKMvj6z%2FW%2Fz%2FmsxY1kZc5KybbjU%2BOoz4mGQG0L7zZOziRwPXySvEyC3sCPlb0c07osSA2cvsuPEuRfN9h1Shzdqc9tlpTv1emSydtpfLGmK1byqa%2BGge5iVMr7Ys%2F9OSgSQuyvEW2LzGkuleFO0dtn7%2FeWGfWlbVTRC6Zm15hdOUnagNIWu%2BWzM2M7oPLo86BA0ktZC0KI%2BB8xNXGL4czJUKPpj7N3H2eCnbVAS9yhlZ66nvHfz%2FAvMM%2BRssQGOqUBKW3gp9jdO%2Fiu7hoM2dFEsDSQJXeMvjw8yvEQvmF32v8faH1H5y39t%2BEoWlI8K2Y7MaMGzEsywqGqrMhX1PPkSIUwdD9AZZXpVSCNXcj1STdcljOQRNJtMjow6G0IoShaQgCUWZx1z1828m3wVlmWTpPcltUpBqYBhtj2ZN3RUUkSmZCf%2FBWfcGAqEIuVGbkWHpabJx4Jn05p5pxx59UlfrgyqQAt&X-Amz-Signature=fb78bc693c7d413c4b279c768418cfdffdd3c2115d1d87fb9988196fd3adb630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
