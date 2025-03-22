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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=897d0e98847e5ca2e3563d18cf5f6f4ed10c502b3195201d21866fe2f181b051&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KHMNYBT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDNueZgH3V8wpg8cVMPYVb7fYB16jrGY6UKXrf8w5EruAiBoxWXD4Z5SIPXkrOIHJkoaIWAHJ8AMHMlA65Kq1VLIUiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqiZWkR%2BBUh8yPi5KtwD4FJjxEkYk6UF1AEWkcqsSwg92j22dJ9W%2Fyh%2F%2F0eHe7N%2B%2BC4jwBe3tXzmEE%2BmiYwd6BwI%2FYfKcf0Z3a6QI8vwCyoJOqtrZNshyPjxoEAM53xnOo2iQumRc9sgN9JZpxJ%2Bf%2B6On4L4sKgPgaejYVd%2BV9i0RbucS29KUftjtT3sS7%2F104rGrNMzMRpxfLa%2F%2BGoY7%2BSS1bbKtE8Jnq6tt9HmGaVyqmj6BX%2FibcssY9SWo2nRtLsKqPRA1Bw%2FwUASkyST1k4Kxmx%2B190Gruo%2Fb54hJMMAsL7EemXiaAi9ZYq%2BbTWPRqylTKhpiwJdJSvFbPvgXstR7GYbyfIpGCXfDwCvpRABLKM1%2Bsg4vbVaRCPACV1JM87ZUlkbbknv6EVDjiyyBLFRgxkpx6LhBUpMrJCh3wFnchaPawYFq4Zban38KZwLtmHnUBvKhc3aL3uCh%2BdysQqiL7NaaZJW%2FXVVak6tXsJjUXoC7zDaIgqA3XSC%2B%2BkCgtpwMJIz7t6geXW65apXnQ%2F3lZSarFQ3ln76b4StPKtLNjH7rzh0t9j0BcvHTbx%2B%2BZmOUwnoNnky34bAHX%2Fn7AXqJC8V51VHC43hVarbbo6eMvylOVta7jfNp731PkiDGOqmaWh422wQUhww9Lb8vgY6pgEgfgjcV920zgmGF4MWL53tGKe99Cmt4LFQ9g7s%2F77Gj%2BQ1u8WgdbymIGmuzDb%2BHVkgxF9vCMR1ur6AWv8H%2B7sk3dDVCc53H0odknptwWjKS0D5GSGcNBgOjBko2WiTs0fGy8hhQ8wRWg5YWV3QKWNGWDQvjaTZVpiV2cXMx4yigMBFFVcFbO9ggundyd2c%2B%2Fo0I9dEzZ4%2FYsUvKXhNBWw3M5wiqH%2F1&X-Amz-Signature=7ba91935c8367c2e8235a1c75b6925bb1dc8207add8718776fbbbd4a9d20789b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
