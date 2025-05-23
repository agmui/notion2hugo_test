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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75RNWMT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCMUzwGguHFcE1k2wqxXmncrRbMeGs%2F2LzoVjl9P69qrQIhAOsM%2BDp%2BHwDksbvbWhw4BakwJDkobKWAs%2F2XRCECE08ZKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIRh88aezaHta1U%2BIq3APGT9DgSi8QfrHZ9co0m%2FG4Kr7HeXqj%2FT7UgylpOskin3AKXffnZiNuwI1ff0y2xaBbPhWG8PHAZ3kO%2BNRO%2BqPbtGVr8OVBMioAKG%2FIEHQSm63kSMuQ%2BpeCsVB0%2Ba7CFwdhNm6iPHEtLq6qyajxvW0GxUe7uGpswJ02Z9d2E3lBxKOJycuMroRtY%2FYvCqbnTOLRTdjK05UpnG4uHdmi5W%2F0f%2FHjPSWT5am8nGoIT3PjW3A6H5zHUJQP%2FaSzzxGQ%2FwGpKuElc9RFg%2BmabsqQxJHR86EAh4FiV1xd2CGGnUXCzq018%2Bg5M0U2oxWjQrmDeLxskttS0xn2bHHuriI%2B04u3Ut9UN36U4qafiJlYaNTachOaUpMwjQiVOJOTgHcRsMwUIAteIskHjxs1phcTNSjmgYECtPAPdjAkg3LpWG6pC%2Fxwvn6%2BarAaIebrjYVKh2Ax4VwfzZAGzS8f40ApEogNq4w7StOfXqCofNhpe15gIOyWzrQO5tR1xNGfYkuA%2Bi5baZHTMASlf4%2F2QQrwYP4j6FeulZyuqE42SZfI2CHQDbZhdjTG9xcoKrApCySfS8OJiFW4RMlknFo8qI8XDJV4psWVTYxD%2BRAkUIpl8Ec7SpY1M%2FMgkoi7mFVfxTDkwb%2FBBjqkATAEHc5aBVhNL0HGPwqk%2Fn8ijE0xQEmKtR1uSAPo5siersH54lUD%2FjleE5TAS1Q9vrJQC1RT0C0Ud%2FFMOCYDwg9VYvbf9pXmNDSmD3qW0dFlYMmhCXwY5IiNmMf9YAYADAA75X9zZUpSDXVAr8703NfCavBKK56IME6CxAfEKEsU5C9J4l2EHLkGxldUrmbIN14MvbIzQRKd7C1E6mf%2Ft80HPbB9&X-Amz-Signature=792af43588977c6c28e4ad716051f822691e49a91e834b5fd7213c68f1fe45da&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75RNWMT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCMUzwGguHFcE1k2wqxXmncrRbMeGs%2F2LzoVjl9P69qrQIhAOsM%2BDp%2BHwDksbvbWhw4BakwJDkobKWAs%2F2XRCECE08ZKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIRh88aezaHta1U%2BIq3APGT9DgSi8QfrHZ9co0m%2FG4Kr7HeXqj%2FT7UgylpOskin3AKXffnZiNuwI1ff0y2xaBbPhWG8PHAZ3kO%2BNRO%2BqPbtGVr8OVBMioAKG%2FIEHQSm63kSMuQ%2BpeCsVB0%2Ba7CFwdhNm6iPHEtLq6qyajxvW0GxUe7uGpswJ02Z9d2E3lBxKOJycuMroRtY%2FYvCqbnTOLRTdjK05UpnG4uHdmi5W%2F0f%2FHjPSWT5am8nGoIT3PjW3A6H5zHUJQP%2FaSzzxGQ%2FwGpKuElc9RFg%2BmabsqQxJHR86EAh4FiV1xd2CGGnUXCzq018%2Bg5M0U2oxWjQrmDeLxskttS0xn2bHHuriI%2B04u3Ut9UN36U4qafiJlYaNTachOaUpMwjQiVOJOTgHcRsMwUIAteIskHjxs1phcTNSjmgYECtPAPdjAkg3LpWG6pC%2Fxwvn6%2BarAaIebrjYVKh2Ax4VwfzZAGzS8f40ApEogNq4w7StOfXqCofNhpe15gIOyWzrQO5tR1xNGfYkuA%2Bi5baZHTMASlf4%2F2QQrwYP4j6FeulZyuqE42SZfI2CHQDbZhdjTG9xcoKrApCySfS8OJiFW4RMlknFo8qI8XDJV4psWVTYxD%2BRAkUIpl8Ec7SpY1M%2FMgkoi7mFVfxTDkwb%2FBBjqkATAEHc5aBVhNL0HGPwqk%2Fn8ijE0xQEmKtR1uSAPo5siersH54lUD%2FjleE5TAS1Q9vrJQC1RT0C0Ud%2FFMOCYDwg9VYvbf9pXmNDSmD3qW0dFlYMmhCXwY5IiNmMf9YAYADAA75X9zZUpSDXVAr8703NfCavBKK56IME6CxAfEKEsU5C9J4l2EHLkGxldUrmbIN14MvbIzQRKd7C1E6mf%2Ft80HPbB9&X-Amz-Signature=3ea4a9b901c957fdb37caa2656ae981cd65825c5e2693aa9c59087a43c98a609&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
