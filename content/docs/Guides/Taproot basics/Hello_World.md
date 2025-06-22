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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DN62FY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCXDFqeEQklH0EQtsAhkN%2FDA66EQNwoCbny991sA4PzLgIgdorJLIkldGzWUFWELTNQIPJos%2FaP6CDGKWFUh2DF%2FIcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbgPIkqulYcrxB3%2BSrcA7S0jFPfRnGPWWYSZstMfcXBRvmlQeeUAhXz9iH1m9rbKZSB%2F1VwDRrkk20y90BfmPzN%2FmZgBGNOePZpTphzIB6L159l6OQIJJHb50BRC2HdPKYeRDWLaNfi3iGijng9FjoXjfUggOeMbQdnPjfi1LVgNZoLoWwta7Dm972BgNeSfTFYrzHbnky4DNpPVS26NXilLYIjsrdxoBRXg8dmPsgISWSs7xGS%2Fv3pfMhTsKXuVkm0AxS%2FTUZ8uX4bP2%2BNag8If%2Bgrha70C4V7CQmBo6%2BuOpk10BOh7amrn2utP%2BmxZdKNZYyJE%2F45hZTupcGL5%2FbrBkciC10jULO9ZltmFb7iIe5pmOECsp%2FjXMm%2B45mw1LypzzZTdGKwzS5lw0UUcfIIyj1rrCNPADJclOjpVXf4XlkbHiX7QniVW%2FitKVN%2Ba4iU1%2FDtxkXHXgdN0TPGBZRhStOZDs7JobNt2phwOkTB8SLTPxXOsiz4Oq1QM9B4a7J49CaBYOPfEszaNUvgaFg1atf%2FBxcb0czl%2BHbuogCIlSEMRS1YI48Sh1zGoRXWTa4YTjVX185JxljbTRHRX6ctEpVFvD8Rz0InXtlmEKETdAuzzcnTUJD6Aa82Q%2B1WrkYrJIoNTIr8PczlMM7H4cIGOqUBTowsc%2BEKgajM3Ex9SsH1e%2Fuo66K%2BBAcPWWSJ7sWn8WkLEpTqXEsCsawP%2Bq6UAkcnNg8SzIeJpCQJvBOwNOb9H3A4veDGy7iQQC4q6M6ipJ29kPgxm0sWo%2BX%2FoMYcx3ZtuT6Gpwk0OEuNHQRNbmMR6r%2BT0aAn4akMwjNqHKJU4dLVnATHq9gd1GcTIOlbvybW5KNCuL3OasuOjd7yLxYPHPnk3xoU&X-Amz-Signature=a26633482af93a7b751a46023a9140571c75c43a0c508d4ff2619f3189e583e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DN62FY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCXDFqeEQklH0EQtsAhkN%2FDA66EQNwoCbny991sA4PzLgIgdorJLIkldGzWUFWELTNQIPJos%2FaP6CDGKWFUh2DF%2FIcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbgPIkqulYcrxB3%2BSrcA7S0jFPfRnGPWWYSZstMfcXBRvmlQeeUAhXz9iH1m9rbKZSB%2F1VwDRrkk20y90BfmPzN%2FmZgBGNOePZpTphzIB6L159l6OQIJJHb50BRC2HdPKYeRDWLaNfi3iGijng9FjoXjfUggOeMbQdnPjfi1LVgNZoLoWwta7Dm972BgNeSfTFYrzHbnky4DNpPVS26NXilLYIjsrdxoBRXg8dmPsgISWSs7xGS%2Fv3pfMhTsKXuVkm0AxS%2FTUZ8uX4bP2%2BNag8If%2Bgrha70C4V7CQmBo6%2BuOpk10BOh7amrn2utP%2BmxZdKNZYyJE%2F45hZTupcGL5%2FbrBkciC10jULO9ZltmFb7iIe5pmOECsp%2FjXMm%2B45mw1LypzzZTdGKwzS5lw0UUcfIIyj1rrCNPADJclOjpVXf4XlkbHiX7QniVW%2FitKVN%2Ba4iU1%2FDtxkXHXgdN0TPGBZRhStOZDs7JobNt2phwOkTB8SLTPxXOsiz4Oq1QM9B4a7J49CaBYOPfEszaNUvgaFg1atf%2FBxcb0czl%2BHbuogCIlSEMRS1YI48Sh1zGoRXWTa4YTjVX185JxljbTRHRX6ctEpVFvD8Rz0InXtlmEKETdAuzzcnTUJD6Aa82Q%2B1WrkYrJIoNTIr8PczlMM7H4cIGOqUBTowsc%2BEKgajM3Ex9SsH1e%2Fuo66K%2BBAcPWWSJ7sWn8WkLEpTqXEsCsawP%2Bq6UAkcnNg8SzIeJpCQJvBOwNOb9H3A4veDGy7iQQC4q6M6ipJ29kPgxm0sWo%2BX%2FoMYcx3ZtuT6Gpwk0OEuNHQRNbmMR6r%2BT0aAn4akMwjNqHKJU4dLVnATHq9gd1GcTIOlbvybW5KNCuL3OasuOjd7yLxYPHPnk3xoU&X-Amz-Signature=a58b6bbd20dfea375062a60874ca78d5e18eec9c250fbbfd3c2734d08ba1848e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
