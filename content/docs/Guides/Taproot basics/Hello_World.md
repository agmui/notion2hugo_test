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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YAELMH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTm4zGWBGnAWKMph5B7V5dg9NWBFgR%2FJibdQUaLZnbTAiEAk%2F7b3CvXAWRM8Rs3rPlr5V71VW%2F%2FBDgHyj4QK%2BwOMZoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKCspxJFmEdU%2BJOYRyrcA9HhJOwg4F%2BKGboU3OwWL0oRbych%2BCVNgUr28euKf%2Bg7oBsvGQwUYsjTCZgA3vOlPLniqfr%2FuCMbo1PibyMupIuU91nWosc4312wV4deYqIKyPQxjUTdsIg1MQQLEliX9pUKWVwPpTJJZSYZWnya0ixVo91M%2F%2FStGZP%2BPjSCEWa%2FTCMO6gfhL170VpeN6jSRKzKbcjE8J%2BQiTShRzMhL3QF7gly7broukkFFa3lwuIr1WHonIHo8SV8wuiJhRvEWP3%2BbWcY7EdRVSqfDvTILTIlFy4GrV3Db7z32U2mZp5tf8KFQEmIGIpoF9Of24AjYgB0DNg56pgPdp%2FJMlaEMaNtmdDqf1Z8x3jPiqcq4C1%2FX0T0vllixzNvW%2Bw01rYuEOfnfyU5LOPLlmrVCiJ9nB6LlQfLBZpldl2%2Bq8CAE4UHkkinOiOqohOQrY3FSrl2k8iuYS23XUvz7KA5fIYolAeLoXPgLrvpsk0NeitwwrAS18AdDEPLf%2FjAYyxSlA7%2B%2B16wkTdrEevI2qy6WqSNtd%2BFMe%2BmF%2FUP4EOZ%2FMLzBO9cjo%2BK9sVslVB7PVaRCXmHwqQMau7Og30dKZeIu8Xr8a7GdLo877gV6gAP%2Bmep0F1oqllgE210G%2B6kE8XuCMNS3r8AGOqUBxH%2FTTuwJ8WHuAEK5df4XSCBQa45pctHi6HjCRAkt%2BNO5T0H5dBg0sH5KWhjEsA%2FT8bs2zwouUJp%2FS23jCx6bGDLpp7C%2BGK8cWhUE8rHTTPkmjuPlxoALHHKF4njInqmmSmU%2FGo9zBUAzTjdwrdENQzjclivoXyi%2B1boepkN9qmiZrPnp5e2DUxxNsRfuaMLy09UJnuHCJ0chlrG7zaherJh7u8JM&X-Amz-Signature=a1b024b5cfbf17f951000145305fa32d5b502dd282401dfa4a80374562dc6c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YAELMH%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTm4zGWBGnAWKMph5B7V5dg9NWBFgR%2FJibdQUaLZnbTAiEAk%2F7b3CvXAWRM8Rs3rPlr5V71VW%2F%2FBDgHyj4QK%2BwOMZoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKCspxJFmEdU%2BJOYRyrcA9HhJOwg4F%2BKGboU3OwWL0oRbych%2BCVNgUr28euKf%2Bg7oBsvGQwUYsjTCZgA3vOlPLniqfr%2FuCMbo1PibyMupIuU91nWosc4312wV4deYqIKyPQxjUTdsIg1MQQLEliX9pUKWVwPpTJJZSYZWnya0ixVo91M%2F%2FStGZP%2BPjSCEWa%2FTCMO6gfhL170VpeN6jSRKzKbcjE8J%2BQiTShRzMhL3QF7gly7broukkFFa3lwuIr1WHonIHo8SV8wuiJhRvEWP3%2BbWcY7EdRVSqfDvTILTIlFy4GrV3Db7z32U2mZp5tf8KFQEmIGIpoF9Of24AjYgB0DNg56pgPdp%2FJMlaEMaNtmdDqf1Z8x3jPiqcq4C1%2FX0T0vllixzNvW%2Bw01rYuEOfnfyU5LOPLlmrVCiJ9nB6LlQfLBZpldl2%2Bq8CAE4UHkkinOiOqohOQrY3FSrl2k8iuYS23XUvz7KA5fIYolAeLoXPgLrvpsk0NeitwwrAS18AdDEPLf%2FjAYyxSlA7%2B%2B16wkTdrEevI2qy6WqSNtd%2BFMe%2BmF%2FUP4EOZ%2FMLzBO9cjo%2BK9sVslVB7PVaRCXmHwqQMau7Og30dKZeIu8Xr8a7GdLo877gV6gAP%2Bmep0F1oqllgE210G%2B6kE8XuCMNS3r8AGOqUBxH%2FTTuwJ8WHuAEK5df4XSCBQa45pctHi6HjCRAkt%2BNO5T0H5dBg0sH5KWhjEsA%2FT8bs2zwouUJp%2FS23jCx6bGDLpp7C%2BGK8cWhUE8rHTTPkmjuPlxoALHHKF4njInqmmSmU%2FGo9zBUAzTjdwrdENQzjclivoXyi%2B1boepkN9qmiZrPnp5e2DUxxNsRfuaMLy09UJnuHCJ0chlrG7zaherJh7u8JM&X-Amz-Signature=80653f0388de7f346bd5b8001cadfd64306878ee9194c69d2cdc770c4b52bdcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
