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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=3ef0321fbfc7f2ccccbafbc92cc5714949f57063c43d60486ff0b579b0988d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G7SQZ4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDigSn%2FUg4NUkF2hlu2u7g40mOcAp8lcYZ02jrw%2FrrKvQIhAMxOS41ZoutcnR%2FUyRNg87gEi7u%2B8tLYhBBEVlB9oCFMKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgS26VDN1k3k711B4q3AMAhlM9juZXrqQHzjIRRfFYRAYGyI9GsT91fLSsKuIS7AkRlV0ADNpJLRvrIq%2FOnKobPc5iUslB75NZgH2OlZUiFfbPz%2BKN5J%2FhZsGrV%2Br1NrjK9pBECpXpPip6gJf9DJMA5hBk4F3xgNdXF91%2FfUe4MqkG5xyEr7U2YvPkiwxfd4CCEEV7PYZLx0DRNmqe1visDauqDMDnk1%2BIsYiq3s1NMt5N%2B7SXQR6A2ROlK2BmTVBbXFIiZ%2FNnyGm27YGkFTQnGrc15q6d1d9rtrr3bmlhx%2FTdWAWnV8FjThdzwx6GWonosnyxK5wf9crG9tELImMsUxt9NGgHz7r6yNcPOi5Og2MmmrWLod2IyR9slQetvLgBNdMmAjfm%2BLx0oVl4S2UODuJN63y3yxdSAeGvil55HSF2DRc1qVdLDhwYAIG8mZrB%2BnCGHMo%2B0p8PuWRvTEA0QpjcEHWl%2FbV0ZUlM1MyzTCE9CMYU%2FpMEaTHbMJxAICrhrw27PlddG95oxiYXMwPlQU0bNN6Kxm%2BmvkLxE8W7ROW1jQ74%2FxHZGISO7m9RmeNsktHG%2FXyFue5jRDtBsG5sLgAcOim3Fx3TuWFcIaLqpssEa1nVlXg%2BmetcoB9h1dhqxeTnBwXipazrnzDKwsa%2FBjqkASDT1RmL9wJG1FVcPOlsnlgUVoFcZUomeuovJw0OZt2q6eCoWcfxKKWq2R7DZG27E7tBju6YHNoIeErpFpNpWaUtNS0JzcRSPxsXJKdeONYLggA5tDT7TPs7tjpaR%2FEAiz33n0xXK4XKBn5iEsS47tebn3Ae6ADKAeV8BM%2Bp0OmoOGwc8VA7kI1ZZPjt1OwdL5co8Rtc0gMzyeTJdsyo%2B6TQOV29&X-Amz-Signature=cdc85b74903f2b6ba3dc75553e0a16966077d5288889c86aa1532fc84650ab1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
