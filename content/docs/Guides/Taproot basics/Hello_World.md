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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5P2Q5T%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPiHk%2FocnRyQUd5e%2BclSZ8bZ9fxR9IUGr51TxqwMCFVQIgObx4KaPMtUr5MXqQPHY8s6hHZnLr9OtCfwCQs19D%2BeYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRx8snMJk9PiqgIRircA4oJoF2wuPDQehPTlmbSqjWt7%2FwEy5ekntmNHPM487iNZdWHYL4eIXdhWzkCSsfHjJzURIfeqq5xtI8LkcA2TYAw4OzhT0fFoPevWW%2Bhe8g4c6jSjB8nH1Zg3%2B1oJH1zQD17SNepCrXWQRIYLJh9i0%2BWN8V5H7NnTqoEvuOsaL3tGBxC%2FQOBORfCjgqD%2FltHnaHMCxrMIroxQ9B76eNPGEqYhEhD6W5C849UIIzsdojSZaqQD%2FByDzRD%2Fpf59hMYemkMsWc8fc8Cyj9CuF9O8OHicZlct0oUW1xqF60dBwD73XNoL6rjFOE7iENGmX%2F5VP31RG90fxSWH4I8X0HBSa33RnN9yiV5e9QA%2FMl%2FxNt7%2FxiC8w7Y7HhSVv56lVGmTAg%2Fd8qyUGdK31crdRmQNHv6pFqHNiLZgOrfKd6Yz7%2FH54Pe4n4yfaRAUF%2BGKoQ%2FdEvKOfBcYSRhchiVw4g4gEeopDpkCf2RRrvYUkjnmtAImH45LWNj8gRdFfh4hB9tpagqwjg1DnVAZmbkaLOTvqD2NiuhojxTW5pf1XcYofCLysRe86dPeZfqf55KX3zlitlmLpXMdQ5fr0fSutibIvWNuBMaXEK6a%2BJqbR9srCvkpb98B9%2Fq3VvpdxyfMNX30b0GOqUBJie0sDM5h8iPv9AxQHFhC%2BXLY8EEKRGgYfN%2FPLNZODEq%2BYtWFjsgrozwoSYOssKKtB0TP8iXFSWLROm1segIsC9Y%2FlR1A5a2x8vss%2BmU0syRm5edTaWdhZ93j0oHCPdfjvsG11HNSONV%2FHu69c0ayVsL9B8uWV2HAJtkmRrej1rhlMCgTCBxFMCI5X4mrHw84OFx%2FjA8q2X5DcaDcLvn12msRVn1&X-Amz-Signature=74fdb7119bbb1e5fcbabb910aec4929713aa3738e9dda68673a96ece7e20b319&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5P2Q5T%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPiHk%2FocnRyQUd5e%2BclSZ8bZ9fxR9IUGr51TxqwMCFVQIgObx4KaPMtUr5MXqQPHY8s6hHZnLr9OtCfwCQs19D%2BeYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRx8snMJk9PiqgIRircA4oJoF2wuPDQehPTlmbSqjWt7%2FwEy5ekntmNHPM487iNZdWHYL4eIXdhWzkCSsfHjJzURIfeqq5xtI8LkcA2TYAw4OzhT0fFoPevWW%2Bhe8g4c6jSjB8nH1Zg3%2B1oJH1zQD17SNepCrXWQRIYLJh9i0%2BWN8V5H7NnTqoEvuOsaL3tGBxC%2FQOBORfCjgqD%2FltHnaHMCxrMIroxQ9B76eNPGEqYhEhD6W5C849UIIzsdojSZaqQD%2FByDzRD%2Fpf59hMYemkMsWc8fc8Cyj9CuF9O8OHicZlct0oUW1xqF60dBwD73XNoL6rjFOE7iENGmX%2F5VP31RG90fxSWH4I8X0HBSa33RnN9yiV5e9QA%2FMl%2FxNt7%2FxiC8w7Y7HhSVv56lVGmTAg%2Fd8qyUGdK31crdRmQNHv6pFqHNiLZgOrfKd6Yz7%2FH54Pe4n4yfaRAUF%2BGKoQ%2FdEvKOfBcYSRhchiVw4g4gEeopDpkCf2RRrvYUkjnmtAImH45LWNj8gRdFfh4hB9tpagqwjg1DnVAZmbkaLOTvqD2NiuhojxTW5pf1XcYofCLysRe86dPeZfqf55KX3zlitlmLpXMdQ5fr0fSutibIvWNuBMaXEK6a%2BJqbR9srCvkpb98B9%2Fq3VvpdxyfMNX30b0GOqUBJie0sDM5h8iPv9AxQHFhC%2BXLY8EEKRGgYfN%2FPLNZODEq%2BYtWFjsgrozwoSYOssKKtB0TP8iXFSWLROm1segIsC9Y%2FlR1A5a2x8vss%2BmU0syRm5edTaWdhZ93j0oHCPdfjvsG11HNSONV%2FHu69c0ayVsL9B8uWV2HAJtkmRrej1rhlMCgTCBxFMCI5X4mrHw84OFx%2FjA8q2X5DcaDcLvn12msRVn1&X-Amz-Signature=9a6302b3f6b5771198ea7bc13a3b6608cacd5a180f441424108b1ec334e00b50&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
