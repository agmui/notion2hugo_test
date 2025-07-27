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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYUJBH3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCh9KM%2Ffr%2FmojdeDQIk3%2FkdRq1O0fJDFx9D9CoyXPNmSAIhAJ%2BECVLx6aqh5qIsM9VqNmxvKfZU3z%2F58ducLnBg%2BDS8Kv8DCHMQABoMNjM3NDIzMTgzODA1Igz7YtySR32mREMevfMq3AN8C4U%2F%2BJJh7r3%2FoYAYsdt3a7us1c2zoEWmC2f3Dzy0T5gHBMeZnf%2BhxG%2F2VMxOqZqkKS24KrVcklc6R%2BG%2Bup0NwSeVikEqOdjrjicsyH7ibhC4g9YiIOtq8T52PQd7w3shPCUyWveN4SZ2jyP6I0yUX%2BTRvZ2C2SRQxj613rykshAfaIhZ3sJ1JiJLh3SiICebCruJOyA9%2FqZ51D8uoGcbMl378Rtchlbf71vwyfcCoO7KSQENbRGjRvGg3DT%2FJyqMi2gu5wDGJTWtpQ2xu2mJKqHWiFa74EHMU7ZK4EHyU3RM7ADuslBGvYIKPa%2FZaMXiFmVMVwB1wDh2wehnc61grv8sdDJSKT5OswT2uyrrhUWjCURabPM0u52DsO8v2WqiUVpR%2FS0Fwk13ZFMSJjvkTlJZ%2Bt%2FzWENIM5A2pzx6%2B5I6%2BYqCNGOpvkzrHnBEu%2FNMzB7XGwYaGiF%2FJYeUqHEPQvlKx5ZsegXurG3P1gv4otFM2%2FW9jJC9sPy9JpbG9iu7z93vDJrsbeCCXHc8A67Ni0R8sOHrB2Ae2HGeA8nV46SPf1uU5MUai8sRXD6V9%2B3QTCC%2BB0q8pbfpjFrEosI3MucSv%2BaUwWsDK%2FWo9uukAjhan7LympsBqoexvDCS4JfEBjqkASCrHzemrN825lKbtBCXMCta1srTR0Mr5x3Rx1NGmcVBvsgBuaDw8CDSR7ZAGbkkqUo3MkbXhz2W%2BkaijHQp0CcHg2mH523RhrSalMiOgXidiCNocbRerVmyqmvXT%2BOa%2Bl7xkH7S157vOG7IuePKsIb7uhOXy1eCxmSX42dcUZWy2Yx99cxHdSgD7LHLmA8Oa7u8YJtH%2BfLuTWE3jKpjrj27CGPL&X-Amz-Signature=650b8889fbf074e5cc3b9cf4af39f8b56df8bc5a29bea91d2ebf435154e1e0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYUJBH3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCh9KM%2Ffr%2FmojdeDQIk3%2FkdRq1O0fJDFx9D9CoyXPNmSAIhAJ%2BECVLx6aqh5qIsM9VqNmxvKfZU3z%2F58ducLnBg%2BDS8Kv8DCHMQABoMNjM3NDIzMTgzODA1Igz7YtySR32mREMevfMq3AN8C4U%2F%2BJJh7r3%2FoYAYsdt3a7us1c2zoEWmC2f3Dzy0T5gHBMeZnf%2BhxG%2F2VMxOqZqkKS24KrVcklc6R%2BG%2Bup0NwSeVikEqOdjrjicsyH7ibhC4g9YiIOtq8T52PQd7w3shPCUyWveN4SZ2jyP6I0yUX%2BTRvZ2C2SRQxj613rykshAfaIhZ3sJ1JiJLh3SiICebCruJOyA9%2FqZ51D8uoGcbMl378Rtchlbf71vwyfcCoO7KSQENbRGjRvGg3DT%2FJyqMi2gu5wDGJTWtpQ2xu2mJKqHWiFa74EHMU7ZK4EHyU3RM7ADuslBGvYIKPa%2FZaMXiFmVMVwB1wDh2wehnc61grv8sdDJSKT5OswT2uyrrhUWjCURabPM0u52DsO8v2WqiUVpR%2FS0Fwk13ZFMSJjvkTlJZ%2Bt%2FzWENIM5A2pzx6%2B5I6%2BYqCNGOpvkzrHnBEu%2FNMzB7XGwYaGiF%2FJYeUqHEPQvlKx5ZsegXurG3P1gv4otFM2%2FW9jJC9sPy9JpbG9iu7z93vDJrsbeCCXHc8A67Ni0R8sOHrB2Ae2HGeA8nV46SPf1uU5MUai8sRXD6V9%2B3QTCC%2BB0q8pbfpjFrEosI3MucSv%2BaUwWsDK%2FWo9uukAjhan7LympsBqoexvDCS4JfEBjqkASCrHzemrN825lKbtBCXMCta1srTR0Mr5x3Rx1NGmcVBvsgBuaDw8CDSR7ZAGbkkqUo3MkbXhz2W%2BkaijHQp0CcHg2mH523RhrSalMiOgXidiCNocbRerVmyqmvXT%2BOa%2Bl7xkH7S157vOG7IuePKsIb7uhOXy1eCxmSX42dcUZWy2Yx99cxHdSgD7LHLmA8Oa7u8YJtH%2BfLuTWE3jKpjrj27CGPL&X-Amz-Signature=94230e3e56cd54b8443b541ad400c2c745116ed942a4867b5d88611be898c5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
