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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YUUKLBB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD11hFp9rnclMLHgIq%2BWmDbr4zqAP67jHOWGEGFCK353wIhAOU7VP8L%2BE788LU%2Fb%2FZtrIHyNI1TIVLj%2FLgRSbcVACX5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSeqyI%2BfGiM4KTPk4q3AMx9ChFG5lTcHqvD1ZgKDN%2FBmLX3%2BGlt9xiqgdUtHxp5ywulbbmRQjemVu9UPkk%2FvryAqc1lnQ%2FlUubBO4%2FU75XQA1sKlPh0yudGiAPxYnqvJhBWXafnHvfG3cASJpe5InzmcKyt7PlJmkBHlBjvy3uK3H95nmuteN26uVBo5OasdpgCzyemPKff0yymncDXvJUdj4yPa2ZUKfttzBH%2FJ9ionvnfc9KqrjEuDcpXFnE%2FF%2F8wxlCUUxBAQ6azIiO7xTgUdt3VzBlaP8ON%2B6%2BZG%2Bwiahz3qwFNBo9JBzlDbdQc%2BiHSpcyvo%2FcxlMmVaJ3emkJMZ24yakVecQbXyPPdlb7zxZp%2FifNOsmY7meKnQXwx9wcyaIFapqmHWCm%2B3dSIP2FSRDo9PoqD6AWR2aEJhck1nE9Bqb18q3eUioc%2FLjTCqt7K4DbUkvgViWaPRlzUKFsF5gusj62fZ0PdhApn%2BnV4nj88K83fn4QGm3HLg7UK8nmfT5t63ivSK%2B1OSNOwUeMUdm7ysO6AHQghUEInvCdGu9kp0zxBAWrzzED%2Fvx7KqsJSQ2RsCU4CJS8jUpW%2B9c7cv%2F17Js0tCJQ4dSH9Zinb9vo6iYHWPwykeYe0hFhr89hovFEAmsltZTA1zDtmOG9BjqkAXo5BT1l%2B4uR9cese9fbSXkVesPKPetLgYOnmGYmLfHup3BtJ%2B07xXbJ8wamUKY3uLyPpMCXDeJnCApABzqcA%2FoHA6kiXY0xEfiC9usLG96NYb5f5a11M7Kz%2FsTYBoeTHTHsg48rIwXDVEtVCADICi%2BZrAuwY09XskBcd%2BXFISOVPOcMXkqHi6k7dQcqrYdhwnZ8W%2F20b0hpQrkYsK9yjHbT1FTm&X-Amz-Signature=811da45a4b176f731eb6dbb3d9b5ffab56441f941757697335823ee6e7cce134&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YUUKLBB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD11hFp9rnclMLHgIq%2BWmDbr4zqAP67jHOWGEGFCK353wIhAOU7VP8L%2BE788LU%2Fb%2FZtrIHyNI1TIVLj%2FLgRSbcVACX5KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSeqyI%2BfGiM4KTPk4q3AMx9ChFG5lTcHqvD1ZgKDN%2FBmLX3%2BGlt9xiqgdUtHxp5ywulbbmRQjemVu9UPkk%2FvryAqc1lnQ%2FlUubBO4%2FU75XQA1sKlPh0yudGiAPxYnqvJhBWXafnHvfG3cASJpe5InzmcKyt7PlJmkBHlBjvy3uK3H95nmuteN26uVBo5OasdpgCzyemPKff0yymncDXvJUdj4yPa2ZUKfttzBH%2FJ9ionvnfc9KqrjEuDcpXFnE%2FF%2F8wxlCUUxBAQ6azIiO7xTgUdt3VzBlaP8ON%2B6%2BZG%2Bwiahz3qwFNBo9JBzlDbdQc%2BiHSpcyvo%2FcxlMmVaJ3emkJMZ24yakVecQbXyPPdlb7zxZp%2FifNOsmY7meKnQXwx9wcyaIFapqmHWCm%2B3dSIP2FSRDo9PoqD6AWR2aEJhck1nE9Bqb18q3eUioc%2FLjTCqt7K4DbUkvgViWaPRlzUKFsF5gusj62fZ0PdhApn%2BnV4nj88K83fn4QGm3HLg7UK8nmfT5t63ivSK%2B1OSNOwUeMUdm7ysO6AHQghUEInvCdGu9kp0zxBAWrzzED%2Fvx7KqsJSQ2RsCU4CJS8jUpW%2B9c7cv%2F17Js0tCJQ4dSH9Zinb9vo6iYHWPwykeYe0hFhr89hovFEAmsltZTA1zDtmOG9BjqkAXo5BT1l%2B4uR9cese9fbSXkVesPKPetLgYOnmGYmLfHup3BtJ%2B07xXbJ8wamUKY3uLyPpMCXDeJnCApABzqcA%2FoHA6kiXY0xEfiC9usLG96NYb5f5a11M7Kz%2FsTYBoeTHTHsg48rIwXDVEtVCADICi%2BZrAuwY09XskBcd%2BXFISOVPOcMXkqHi6k7dQcqrYdhwnZ8W%2F20b0hpQrkYsK9yjHbT1FTm&X-Amz-Signature=40d0bb84347414ef9b1229f0c73e6d27d848b6d1b1f5757228475138cd242aef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
