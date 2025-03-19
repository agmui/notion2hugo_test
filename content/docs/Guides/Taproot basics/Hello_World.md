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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRORKQPS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCebn%2Bsqb7ofnRC7j9HtY5jIdw3%2BiKTt77qV00%2BfcmLngIhAMrZatrId5v2EAEsZdJJ4hjZQ1tSeKd2GvjP0rXT%2BkGQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx2SfuLpiFGwZ1jHpcq3AOx20IUjHeYSd1EEIohr8zPlYsT0QETZkRPzXpao9FeKm%2BCTrtJTcxbmcMHHUO4RgXGCiUwu%2Bb0r8oqz9yXx6j%2FxkpdwqFpAojn5VTj7CFToX%2F6Brd2S1l87zlAaIff6QNh0rLqIwuQN7F60smRsCRc6sxBd%2F8ksNgAxN2%2F3T69%2B01y0LFgKpEWN%2BLDFYZSYdCeRw%2BRGXEnSphboaTddlJ%2BkgYzzgJqn0K0W1Q74dqKY9whShjIj7dPKo4HLhThCE01dC5PCiurzywIqvEIrq791%2B0KDElTlTi%2FLhAfsCjnN71tCRZ0AM%2FY4wxH2O77Zg5tH2JEJWEASlrM5S20l6kAFH9nz8Z4EYSQzElNpkCXe1DNNZZURt7eRIlLt410Thxl37jAHtrhKzTDJ4bxGmzXbmhwhMjrvlJ40P2ZKdxJ1UoA3pvN9B2IsgKLP5zFhQ5qAP%2F1ar0xGy3Dbk9VzxJk5T0f9saHtCheXophYBGNZIzXMiqhFO8dMasVQQZfFlWzsnFsY%2B0GmgqyzACXHmf2%2BxhC7CpZgCqjFdgWitoAepQ5I9jA9xopg7o1944f4SgCZ2ZD1AhH9a1kS8YhG81a0QgmMV6s8roy%2BWUxx1T4P927wDVmieXf5iTyGTCAguq%2BBjqkAZ%2Bdt7ind63AOYZKS0QsfC%2FZhtCqA9%2FJ0vM49V3ejjeECBG%2B714O50usS2rGCvCpJzXx3%2FyJ7Rr7n%2FlhaBgIXIeHTmaebfPnsPUaoCR5Y0bikC1xb3eHXFHZ8yhcrZbAFGi8eH5ZRE2ofAk68zmiwzWrIqZyzfvKPUu6uRc5ZoedxHdbiK6Q9EYdURQpT6NDh2W%2FUPeIkvhv9sGyNhj7KorkwB8I&X-Amz-Signature=d1ec5b2204e5b9438ef8ae08aa1c61d565b2159651981a09274c66c2b386be00&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRORKQPS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCebn%2Bsqb7ofnRC7j9HtY5jIdw3%2BiKTt77qV00%2BfcmLngIhAMrZatrId5v2EAEsZdJJ4hjZQ1tSeKd2GvjP0rXT%2BkGQKv8DCHIQABoMNjM3NDIzMTgzODA1Igx2SfuLpiFGwZ1jHpcq3AOx20IUjHeYSd1EEIohr8zPlYsT0QETZkRPzXpao9FeKm%2BCTrtJTcxbmcMHHUO4RgXGCiUwu%2Bb0r8oqz9yXx6j%2FxkpdwqFpAojn5VTj7CFToX%2F6Brd2S1l87zlAaIff6QNh0rLqIwuQN7F60smRsCRc6sxBd%2F8ksNgAxN2%2F3T69%2B01y0LFgKpEWN%2BLDFYZSYdCeRw%2BRGXEnSphboaTddlJ%2BkgYzzgJqn0K0W1Q74dqKY9whShjIj7dPKo4HLhThCE01dC5PCiurzywIqvEIrq791%2B0KDElTlTi%2FLhAfsCjnN71tCRZ0AM%2FY4wxH2O77Zg5tH2JEJWEASlrM5S20l6kAFH9nz8Z4EYSQzElNpkCXe1DNNZZURt7eRIlLt410Thxl37jAHtrhKzTDJ4bxGmzXbmhwhMjrvlJ40P2ZKdxJ1UoA3pvN9B2IsgKLP5zFhQ5qAP%2F1ar0xGy3Dbk9VzxJk5T0f9saHtCheXophYBGNZIzXMiqhFO8dMasVQQZfFlWzsnFsY%2B0GmgqyzACXHmf2%2BxhC7CpZgCqjFdgWitoAepQ5I9jA9xopg7o1944f4SgCZ2ZD1AhH9a1kS8YhG81a0QgmMV6s8roy%2BWUxx1T4P927wDVmieXf5iTyGTCAguq%2BBjqkAZ%2Bdt7ind63AOYZKS0QsfC%2FZhtCqA9%2FJ0vM49V3ejjeECBG%2B714O50usS2rGCvCpJzXx3%2FyJ7Rr7n%2FlhaBgIXIeHTmaebfPnsPUaoCR5Y0bikC1xb3eHXFHZ8yhcrZbAFGi8eH5ZRE2ofAk68zmiwzWrIqZyzfvKPUu6uRc5ZoedxHdbiK6Q9EYdURQpT6NDh2W%2FUPeIkvhv9sGyNhj7KorkwB8I&X-Amz-Signature=190491c48cf4da70ec7ae489b2876abbe0f7bfe21e92b65e77124ab7f0be7ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
