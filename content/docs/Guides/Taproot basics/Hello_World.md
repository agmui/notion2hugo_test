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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU7SWKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGmUx465SOCxWPxudWAOuvkWcbQcYiIZoXpo0ky1Y6mgAiAey2uH4IRetEzSGJTfks9hjbB0xpyivstgtktK86ngASqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNGGaHWsCzwCFvqdKtwDv65FShlpKAZOwnkak45upDyPvkHixhWPj2o8sErnXhHQ%2BMWsV4uCfaUuyF1DxhQ%2FmhsQ45slM22%2BDeAbtUKrYf92L6dzI7zxMSFLmkwijE5E15cSb5sc3Gqjif4K5gihCo4wLQABuQ1au%2FSBO44QcHQRJyTc2P1KVZoHAHQyowojOIN0RVTgJNPTHdx0cIytr5CKuEE4i1ClOJvC7J0%2FU4DCmoAX%2BS8kZSuodt9GGup0A2WZwe325wfeP%2B0AGYtiRn7jLJCNaOJddHDddmYaIEEVFoOvZUUx9oFhwI4CcfI%2BPmrT2BrPYajmcQkwa8oTizIfZmudQw4lrXgrL8KAlingFYcW3BC3FReOnxZBgjcDTtE0tyQRRBOauYdO2EhpAIS8V2okEyl4Lo31r4fBy%2BXSk%2BdpeaxLCM3ljcgKYrp%2F%2FO8l3MFIuXR3Ls4BKBInnWI%2Bt562Jq5UYetiPdtYbapcIcqNv4yVYk1Pm58W4E%2Bec20GJXMAFEcPkC%2FvZpC58KgwGvY8etx7jrDInfdkPB6OYNKBVtF0bhxmyf6zl7KNvwQZWKLeumoe4Lrw5BmLKgdeZGhpYw3rUmriXDRzE4qz7e9fLyMG8xmVYKfFmwWWx3juQiHh5GPdE34w16DmvAY6pgEjB95X%2FmjePQSMrynZU8hch2ZfLmuhZrV%2BpsFuflPgRwqG55yB7K0DMQ%2B6dHVf%2Brm%2FVAmrpxvhXM3MibxMUYJ4y4G%2Fbbo32MlvEChKFxW9G%2Byy7B%2FkxLKv0fT31ShgQrSA91pDvJ0MjbwXJL45KWqh7KVuRA2GGo8uFxGC5cxTFh0z2OP%2BCudTH7lpLwBhpCz87WaKydjKuYA%2F96ILT9rxnx3msOlD&X-Amz-Signature=49e80824356bd8655143772dec3dff591a2f4b829f336943489f923fbafd3fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU7SWKT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGmUx465SOCxWPxudWAOuvkWcbQcYiIZoXpo0ky1Y6mgAiAey2uH4IRetEzSGJTfks9hjbB0xpyivstgtktK86ngASqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNGGaHWsCzwCFvqdKtwDv65FShlpKAZOwnkak45upDyPvkHixhWPj2o8sErnXhHQ%2BMWsV4uCfaUuyF1DxhQ%2FmhsQ45slM22%2BDeAbtUKrYf92L6dzI7zxMSFLmkwijE5E15cSb5sc3Gqjif4K5gihCo4wLQABuQ1au%2FSBO44QcHQRJyTc2P1KVZoHAHQyowojOIN0RVTgJNPTHdx0cIytr5CKuEE4i1ClOJvC7J0%2FU4DCmoAX%2BS8kZSuodt9GGup0A2WZwe325wfeP%2B0AGYtiRn7jLJCNaOJddHDddmYaIEEVFoOvZUUx9oFhwI4CcfI%2BPmrT2BrPYajmcQkwa8oTizIfZmudQw4lrXgrL8KAlingFYcW3BC3FReOnxZBgjcDTtE0tyQRRBOauYdO2EhpAIS8V2okEyl4Lo31r4fBy%2BXSk%2BdpeaxLCM3ljcgKYrp%2F%2FO8l3MFIuXR3Ls4BKBInnWI%2Bt562Jq5UYetiPdtYbapcIcqNv4yVYk1Pm58W4E%2Bec20GJXMAFEcPkC%2FvZpC58KgwGvY8etx7jrDInfdkPB6OYNKBVtF0bhxmyf6zl7KNvwQZWKLeumoe4Lrw5BmLKgdeZGhpYw3rUmriXDRzE4qz7e9fLyMG8xmVYKfFmwWWx3juQiHh5GPdE34w16DmvAY6pgEjB95X%2FmjePQSMrynZU8hch2ZfLmuhZrV%2BpsFuflPgRwqG55yB7K0DMQ%2B6dHVf%2Brm%2FVAmrpxvhXM3MibxMUYJ4y4G%2Fbbo32MlvEChKFxW9G%2Byy7B%2FkxLKv0fT31ShgQrSA91pDvJ0MjbwXJL45KWqh7KVuRA2GGo8uFxGC5cxTFh0z2OP%2BCudTH7lpLwBhpCz87WaKydjKuYA%2F96ILT9rxnx3msOlD&X-Amz-Signature=61cb23acce4b0d3cbb06c896f8d4cf181cb4e64d13c589e705ccb45b78a5a5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
