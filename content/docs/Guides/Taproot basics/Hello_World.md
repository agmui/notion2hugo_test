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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XCXIIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDGioh49iuuple%2B2i%2B%2BznFS%2Bh8ARRryOsSkvZTLmO55IAiEA82oiyBPrlA6S%2F9igPcw5hYcDpS7YEMmXAiQC77iIaY0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1anc6mhWhE3G6eSCrcA3%2Fwb5hYBF016EfyJFhQ%2FgbU8ysFNZhRQW4pDMw2yBE8dJVzBOD99TNSRz2yK%2F8cpr%2FD1w%2BFxSO3NoTP3%2FIbit8Ln%2BY11LP1NLjtRkFgN04sQLvqMJe%2BrdLidWvDKWo0IXk5mnMm%2FUXZZ8ZwgB7RQuWAEC8iMxn%2FTuT5VnAchPrQSj7lwUg6L6uKiRTUmllDAy12wknn9aJAa2zpjMIkcdtLuT6d6ViQAgY2MXrmomQ9ln%2FUuWXKbR2Yt3BWg3NxwVBccWXXosFuVX3sx61kCsVr5se53D03aCGwPxPfK%2FCLbqtC%2FHZR%2FZ8Cyufk5hsN30KOhxnsEG8h3DNkN%2BDpLJbWVksKGMkRVofKCA7Tzc0KxebcLqSyu7Y3gTFWeBLwNsomXHqhyMRJVrgRZmUJQZ4cHFVfcm%2F7rGEJYmuLNqZOdmR8K6zhnIkRUyPIcIVlyhAcG9m4SDu%2Btaa8TjydwQ2hsQbXJVPTjvrdUWtxQwcpDIU1G6HXttrc95f5Y2pymt1Hm%2B7iEbuyq%2F2r25ETUISr2rXAbhJ0Ddl6vYcTVa18bOf7FMrbTVMPT3Bl6rvNj1u5d9LDKCJ2a8v8v%2BG0DUnK%2FAc7L91bHlxX1e5eGTIc21KeVofMVb5vbQFPMLvrwL4GOqUBLBz98hL5N5J5FgVa0tn7lU8rQ8ka6jO2XgCo02m7VSl3Okzw2Xw3WDyYbBzTqIEqqtBc2V%2FIhMngBi7q06XRU466Y8h%2FjXSj%2BcI1dvcJ0iTXi7IE1tZ1xLvBkY7IWeug5GYiou73b6N81Xv5pPbmW%2FgFNJe8BhQ0BKPH%2FbFErCKF6d2EK%2B7mv4IA5BANQFOFLNu67qMlcUBYIZ8ZfPBINdu8Lkpf&X-Amz-Signature=ee3cb0ea8b7ecc0d0dee60282c6140c0f122ea45208316fc51e2d614dd38ef28&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XCXIIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDGioh49iuuple%2B2i%2B%2BznFS%2Bh8ARRryOsSkvZTLmO55IAiEA82oiyBPrlA6S%2F9igPcw5hYcDpS7YEMmXAiQC77iIaY0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1anc6mhWhE3G6eSCrcA3%2Fwb5hYBF016EfyJFhQ%2FgbU8ysFNZhRQW4pDMw2yBE8dJVzBOD99TNSRz2yK%2F8cpr%2FD1w%2BFxSO3NoTP3%2FIbit8Ln%2BY11LP1NLjtRkFgN04sQLvqMJe%2BrdLidWvDKWo0IXk5mnMm%2FUXZZ8ZwgB7RQuWAEC8iMxn%2FTuT5VnAchPrQSj7lwUg6L6uKiRTUmllDAy12wknn9aJAa2zpjMIkcdtLuT6d6ViQAgY2MXrmomQ9ln%2FUuWXKbR2Yt3BWg3NxwVBccWXXosFuVX3sx61kCsVr5se53D03aCGwPxPfK%2FCLbqtC%2FHZR%2FZ8Cyufk5hsN30KOhxnsEG8h3DNkN%2BDpLJbWVksKGMkRVofKCA7Tzc0KxebcLqSyu7Y3gTFWeBLwNsomXHqhyMRJVrgRZmUJQZ4cHFVfcm%2F7rGEJYmuLNqZOdmR8K6zhnIkRUyPIcIVlyhAcG9m4SDu%2Btaa8TjydwQ2hsQbXJVPTjvrdUWtxQwcpDIU1G6HXttrc95f5Y2pymt1Hm%2B7iEbuyq%2F2r25ETUISr2rXAbhJ0Ddl6vYcTVa18bOf7FMrbTVMPT3Bl6rvNj1u5d9LDKCJ2a8v8v%2BG0DUnK%2FAc7L91bHlxX1e5eGTIc21KeVofMVb5vbQFPMLvrwL4GOqUBLBz98hL5N5J5FgVa0tn7lU8rQ8ka6jO2XgCo02m7VSl3Okzw2Xw3WDyYbBzTqIEqqtBc2V%2FIhMngBi7q06XRU466Y8h%2FjXSj%2BcI1dvcJ0iTXi7IE1tZ1xLvBkY7IWeug5GYiou73b6N81Xv5pPbmW%2FgFNJe8BhQ0BKPH%2FbFErCKF6d2EK%2B7mv4IA5BANQFOFLNu67qMlcUBYIZ8ZfPBINdu8Lkpf&X-Amz-Signature=7acfd5131dff246b59a814359638d7099e9f7f3c29c9437545a0347672367150&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
