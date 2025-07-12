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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWG7UGK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCosrGE0irqdAh%2FHzV8XlG7aE0qOcq2mRUgItb4xq6CFQIhAPSem37vvb8SYabXeDQiH9mAvfGbpPKwHMM%2FvgQWpQ8hKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3uSJoQDUqbu%2FHQm8q3AP2NtQnQF2x907BTvdqgy%2FO90DMFkLTxF9YhVEKSbtY%2B3Tf%2FnCMKQ2%2B%2FuuS%2FKZZiTTMPDlFeGkEPhtq8CpuhDtXHmeVDu1ziHmk%2F7N4cgMaanIUeUinP%2BRfEE51G2oP8Az7XzlTzxWpfw0yqIRFKeN%2BR0aojoWZX1fnA%2BrNkaiQCLUYdXVis%2FllJQhFUIVQYg5kwhdzetgS6vHDmUzj4krozUXTPJ%2FcEGG0QtT5Aafzi2jhw8T2rfQDXi8e6n%2FcGduHvp68n8B8OyC5u%2BkgUctQlqoWPG4rkw10IOXyoSsIT9UBMh0ail3GoCd9aLtu7Ie2NwaSRMz%2Bf%2BetRtH4ak6N6g2W4zD%2FV6rOaw9ShAUTV%2FsDT%2BQBofOdn3Gs658tO4%2Bk3Jxj43bSln5370kMhTP2tPuSB14qYEKRWejeaG9jcbqgA1T2Vpt1rOrTDkhyID08qm%2BW71AQgqfd7T7NBxwQ0y64tIhzwHDl9GXiLqYqEtQM4eiiMzJmKbfvZhXPCqx%2F4tZ9zHIQl8BXg4hjk9Y0VCBsJMqedXcA2iX%2BYbJuy%2F04mAl10r6szLkqq3pzHV%2Fa9GWa3OzleyRZKL0TPh9cl3kmdggOzKGFYxgtFU5DO13RIhoICCWgoipG5TD2%2BMfDBjqkAUufEhtnG%2B2xVEkcp58GAMTVLG5UcnMQ9%2FhmITmUAJQaDSgqa8DlQ7pXkoqLi9H0yuFyt3Cn3FBg8FiWxTaE8vqUvfAMZuXwjQE1zWsbCQzGtRGyYXIDCMDWeSIcsJG6J%2F0EGpiE3f2kC7PM6X350tuXTybviDF8lO8IVAPD8MYjsDM5M7rnmpcWWtuRBser5CU4MEk1RRNv8JQXJbhOFTwYaO0o&X-Amz-Signature=39426aa7939c1ea19444ab427ed91a5211574092f5cee0aebc16f37b0bc2c7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWG7UGK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCosrGE0irqdAh%2FHzV8XlG7aE0qOcq2mRUgItb4xq6CFQIhAPSem37vvb8SYabXeDQiH9mAvfGbpPKwHMM%2FvgQWpQ8hKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3uSJoQDUqbu%2FHQm8q3AP2NtQnQF2x907BTvdqgy%2FO90DMFkLTxF9YhVEKSbtY%2B3Tf%2FnCMKQ2%2B%2FuuS%2FKZZiTTMPDlFeGkEPhtq8CpuhDtXHmeVDu1ziHmk%2F7N4cgMaanIUeUinP%2BRfEE51G2oP8Az7XzlTzxWpfw0yqIRFKeN%2BR0aojoWZX1fnA%2BrNkaiQCLUYdXVis%2FllJQhFUIVQYg5kwhdzetgS6vHDmUzj4krozUXTPJ%2FcEGG0QtT5Aafzi2jhw8T2rfQDXi8e6n%2FcGduHvp68n8B8OyC5u%2BkgUctQlqoWPG4rkw10IOXyoSsIT9UBMh0ail3GoCd9aLtu7Ie2NwaSRMz%2Bf%2BetRtH4ak6N6g2W4zD%2FV6rOaw9ShAUTV%2FsDT%2BQBofOdn3Gs658tO4%2Bk3Jxj43bSln5370kMhTP2tPuSB14qYEKRWejeaG9jcbqgA1T2Vpt1rOrTDkhyID08qm%2BW71AQgqfd7T7NBxwQ0y64tIhzwHDl9GXiLqYqEtQM4eiiMzJmKbfvZhXPCqx%2F4tZ9zHIQl8BXg4hjk9Y0VCBsJMqedXcA2iX%2BYbJuy%2F04mAl10r6szLkqq3pzHV%2Fa9GWa3OzleyRZKL0TPh9cl3kmdggOzKGFYxgtFU5DO13RIhoICCWgoipG5TD2%2BMfDBjqkAUufEhtnG%2B2xVEkcp58GAMTVLG5UcnMQ9%2FhmITmUAJQaDSgqa8DlQ7pXkoqLi9H0yuFyt3Cn3FBg8FiWxTaE8vqUvfAMZuXwjQE1zWsbCQzGtRGyYXIDCMDWeSIcsJG6J%2F0EGpiE3f2kC7PM6X350tuXTybviDF8lO8IVAPD8MYjsDM5M7rnmpcWWtuRBser5CU4MEk1RRNv8JQXJbhOFTwYaO0o&X-Amz-Signature=e73f47fd6becbff2e87dc5e54c09da06e25699359e3e0a9ce153f6cb48aa2e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
