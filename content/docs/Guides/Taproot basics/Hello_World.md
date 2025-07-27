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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJVQJCE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICUcNNUccZNRisIOcdAtfjYi7hfPzDbpveRo%2BDFW0GUWAiEA4zOiwLR2dpiimvMhvuHvH4aYmPq2ejR0aMF4IYlX1AQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL8foIRcH2885u37wCrcAzVnilMacaLHGIpmOiYz3NbRk2oMaPHKZf0kRu8CI7qennsNOO9oDBfLH5OXYPA7x7OMYA9vLOE5eiLfHyivlXaXPvm0OYFw5P0p9tuko0geg8qAadIAQH0b0n%2BPFAkQjI13imwnBm4%2FzFYUVMlyxWlebIHLrx2a1FkijHm8GmnhF3fnseMOeBkOfIlJChmu9RkTJWxvjuwTI8uQ2tTD2vsnHpqMOtysoygihbowbmQLB6pUVl3rATmNhmj8VOCM20MxPuIZYYEHIxUPyAGSPijygx183KLFjWbWn3NR8JmlOKH6F3ayAtBfEFPtq4I26%2BimIO0rE38UlqbQsZvNazBOlHHQfJUM1mkwjHZcnVCevmJcBFbrwX55oMv5hqcWtQ%2FPanKglkAtiv%2FPJ0xiw2zhleP8Xm%2ByK6Vv2pUTU32eCyDJbCXVFSnSCVeCczVJRgiPiuZ6%2BivlLOJXqNftrjI0FAij%2FNU%2Bra2yyXmoUv7omHjRwFFt%2B%2BhZJoYNRyEas1TEBfAnlKgnp%2FAQykf5SSA5U6RcXz%2FkeV%2FPAqQjW%2BRHbmg24dMu9seqBmqQHHZA98UkZg1GRuJeHhYvGft7msBMcB0gCoKZD9vaNeEXtNYbhYL2LXqzXe6aLkkzMPDdl8QGOqUBtb69dSPbALSvY1CPaBNnEMYeqYIlLPlEAdwCNrrb3rgQqMMJYcL%2BIoo8A9DcU4n1HkOgHBH4I09V5c93nSgT2NCaPdAU7KUtA%2BMfTMnd6gTEHLb6Y03PiTkmp5%2FF0RNNhWfeDhPr%2FIMORl6DCxVjjAa%2ByDObdChyQcItT4Ix38jKY65QRi6UgwwxK8%2B2Ai03P%2FjtfHv3wll5hZDpVAJB%2B8Hnkp1o&X-Amz-Signature=0b9221d1100a47ef9aad2ce9c87607e1dbd8e8a199b9bcee0a4197eacbec4f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJVQJCE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICUcNNUccZNRisIOcdAtfjYi7hfPzDbpveRo%2BDFW0GUWAiEA4zOiwLR2dpiimvMhvuHvH4aYmPq2ejR0aMF4IYlX1AQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDL8foIRcH2885u37wCrcAzVnilMacaLHGIpmOiYz3NbRk2oMaPHKZf0kRu8CI7qennsNOO9oDBfLH5OXYPA7x7OMYA9vLOE5eiLfHyivlXaXPvm0OYFw5P0p9tuko0geg8qAadIAQH0b0n%2BPFAkQjI13imwnBm4%2FzFYUVMlyxWlebIHLrx2a1FkijHm8GmnhF3fnseMOeBkOfIlJChmu9RkTJWxvjuwTI8uQ2tTD2vsnHpqMOtysoygihbowbmQLB6pUVl3rATmNhmj8VOCM20MxPuIZYYEHIxUPyAGSPijygx183KLFjWbWn3NR8JmlOKH6F3ayAtBfEFPtq4I26%2BimIO0rE38UlqbQsZvNazBOlHHQfJUM1mkwjHZcnVCevmJcBFbrwX55oMv5hqcWtQ%2FPanKglkAtiv%2FPJ0xiw2zhleP8Xm%2ByK6Vv2pUTU32eCyDJbCXVFSnSCVeCczVJRgiPiuZ6%2BivlLOJXqNftrjI0FAij%2FNU%2Bra2yyXmoUv7omHjRwFFt%2B%2BhZJoYNRyEas1TEBfAnlKgnp%2FAQykf5SSA5U6RcXz%2FkeV%2FPAqQjW%2BRHbmg24dMu9seqBmqQHHZA98UkZg1GRuJeHhYvGft7msBMcB0gCoKZD9vaNeEXtNYbhYL2LXqzXe6aLkkzMPDdl8QGOqUBtb69dSPbALSvY1CPaBNnEMYeqYIlLPlEAdwCNrrb3rgQqMMJYcL%2BIoo8A9DcU4n1HkOgHBH4I09V5c93nSgT2NCaPdAU7KUtA%2BMfTMnd6gTEHLb6Y03PiTkmp5%2FF0RNNhWfeDhPr%2FIMORl6DCxVjjAa%2ByDObdChyQcItT4Ix38jKY65QRi6UgwwxK8%2B2Ai03P%2FjtfHv3wll5hZDpVAJB%2B8Hnkp1o&X-Amz-Signature=cee833ac6087b384c360a3b6958456ba5c213bbaad58416ecc70353f2efd39d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
