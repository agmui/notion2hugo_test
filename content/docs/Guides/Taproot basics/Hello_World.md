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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJTRPA6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeattWOj1HpLnnujP9567iR5ViKHnBOv0dMP25XsRQVAIhAPK9dzmk3JpQ7snmo%2Fv9x%2BUEw%2BN0RPWBGNov2hfhIQhdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrjy7RGEYiX2NE5ogq3APbFvrO%2F5FOtZYqh%2FANs98IfkKCnHXERFgj4ThjHJJrXW8X7rHXUhNxLhmv6BlddcQMsUyJIoGiyLRjSvn%2BZjAy8DzICOoov%2BTBTKRqLp083DrNPcgA81b%2FdPf%2FP4%2Fm8YWDyZdpD%2Fo54aqc19bOmZHW5VDFo%2FVddGtDEpaeTlUQ8pl2gvdtrGhPFbUm4od%2F7vvHW4mHsPDr8jylVhtoHjNy3nNwnqqNnXRY6LhzAE616xr%2BW0yV76oREYKBaFniScvB6b2WkZMMVUiFpMRtmzkhRkCK8J0H0RxVAeXqzaDyZpIGxLAl%2BygELLnXZfxSq3nVeqU%2FbaaryrZK%2FxZ6XyWS4uEB3EuiHM8lArTBzAXJOyet10MWotFJFsGT2O46mRQqxC8C8ArdXH%2Bz2j3isVx17zGeYaSwIuqZApATBXFUm52AYcJCKdwZ7NrrTwmIxTi3%2F%2BAFlP8hOiePzcAaS0QTMzf5jf%2BiqFC6VUC1kUOJaxEGL1Z8hru2F5WeMMLy7lPIR2yuEfSwu9w%2FvIr6vtgPmAHjhC3htcyvjXFvBZeQPO%2BLbU6t4w1H8HEzB0katKwcRrmZQVwWFBBiwKhiExj%2Fbq0OrF7VLmvVBMdFNsFi2goEAWsARbDSBg005jC8xrDBBjqkAULx%2FTP%2FT%2BBf%2BR4lavqngM4Q1IGUyL26bOayRsM1igJ8rIbANRSrtEO2%2BjggkFDxDmNW%2Fjsr%2B1TL%2BT%2Bnly5bE7wv2LCbISLIPf4v0qYeFk%2FoGM1WBaHHuKiZHWSQCx%2BIb%2B7exlCUcX0f5UOgs3TwLqwMcKwzoutIXU3YaCCS1Aq3fwI3doU0LSvrg%2B6bc8q8lCd44PLEopDeREsaNM1EH6Wt2Us6&X-Amz-Signature=a905a70c95c4f740f8d78369221bea249ab2af598382413088903e063f63bea0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJTRPA6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeattWOj1HpLnnujP9567iR5ViKHnBOv0dMP25XsRQVAIhAPK9dzmk3JpQ7snmo%2Fv9x%2BUEw%2BN0RPWBGNov2hfhIQhdKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrjy7RGEYiX2NE5ogq3APbFvrO%2F5FOtZYqh%2FANs98IfkKCnHXERFgj4ThjHJJrXW8X7rHXUhNxLhmv6BlddcQMsUyJIoGiyLRjSvn%2BZjAy8DzICOoov%2BTBTKRqLp083DrNPcgA81b%2FdPf%2FP4%2Fm8YWDyZdpD%2Fo54aqc19bOmZHW5VDFo%2FVddGtDEpaeTlUQ8pl2gvdtrGhPFbUm4od%2F7vvHW4mHsPDr8jylVhtoHjNy3nNwnqqNnXRY6LhzAE616xr%2BW0yV76oREYKBaFniScvB6b2WkZMMVUiFpMRtmzkhRkCK8J0H0RxVAeXqzaDyZpIGxLAl%2BygELLnXZfxSq3nVeqU%2FbaaryrZK%2FxZ6XyWS4uEB3EuiHM8lArTBzAXJOyet10MWotFJFsGT2O46mRQqxC8C8ArdXH%2Bz2j3isVx17zGeYaSwIuqZApATBXFUm52AYcJCKdwZ7NrrTwmIxTi3%2F%2BAFlP8hOiePzcAaS0QTMzf5jf%2BiqFC6VUC1kUOJaxEGL1Z8hru2F5WeMMLy7lPIR2yuEfSwu9w%2FvIr6vtgPmAHjhC3htcyvjXFvBZeQPO%2BLbU6t4w1H8HEzB0katKwcRrmZQVwWFBBiwKhiExj%2Fbq0OrF7VLmvVBMdFNsFi2goEAWsARbDSBg005jC8xrDBBjqkAULx%2FTP%2FT%2BBf%2BR4lavqngM4Q1IGUyL26bOayRsM1igJ8rIbANRSrtEO2%2BjggkFDxDmNW%2Fjsr%2B1TL%2BT%2Bnly5bE7wv2LCbISLIPf4v0qYeFk%2FoGM1WBaHHuKiZHWSQCx%2BIb%2B7exlCUcX0f5UOgs3TwLqwMcKwzoutIXU3YaCCS1Aq3fwI3doU0LSvrg%2B6bc8q8lCd44PLEopDeREsaNM1EH6Wt2Us6&X-Amz-Signature=8cdd2f81d4959b2462e539b968fdf91c61807be6721382579a0d12ad5a554af0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
