---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B53ZSOL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESXpnmYYr8Qs0Qcn84%2BJqtpzC1PNPdfQROJNCdc%2FaDRAiEAzlpvumRelql0RJTe7m%2FSWzFuYI4%2FPgLOEDlHMsCO5PcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGmtC%2FOevcqqeo9VCrcA5Wr6yJLC4NfTlimOAYYb57ywOJ1VRmKsUVVymOPchY%2FRw6QhBpiXWsL9i81jpR%2B81%2BPeOMSk0YctOGj7BNNsPhezyaYDwlOfwS8%2Fl7mAZnkb4REAV9Yznwwi0cry4wvxvE8H5H7TgSGq4iEwLhG0mnxV%2FWGL%2FD0v2%2FHYZmDAQJD7VQatoczyqzZ8gIlIbef0YNNekTQqGvVhV8Ms8%2BsF1Z2fb6nHBN9lQ%2FiLebBtmGf1Q2Fg9IMo68m3kAhSbc0QvoGOhtifehrXhYxiDvZ6gOaR3k4VIAmtcO90rN0GwX5Dv8Nk0al1UZBgWbIcTlrL61lDpzMce1zrKfQskf6HiRdqCCx4%2BSLbTIdRSrqHyzJKK1u3A48M%2B31Yu%2Btla1s4mmZ3OysmayShe8Ovq1jQQsLE1RC8TiO7r6k4qfTz6EXrUSF0liLbY8EZbjJ%2Fbq%2B4U4q9btZRtL797p%2BF52SBoyNauO2WziWgQKVNLJKT5XM5297hdl3CU8hIU3h3uoWq2udwEQXxMzQC7oUqwYJikB9x6Z58HYte%2Fz8j41G5fRZwOX6BAeVAwh5JZ7OnxZWWAou%2FbfZ%2BtgiIsBZkPJfMKwZH%2FGIWk1cJRXhbVuQgB5mytxoylxCsy6nhcjxMPON3r0GOqUBjmsxDmmOgMNM8mkmJWsPf2%2B5F29uJi6wgQPcXhwOSv3BDhpWDzaSthasZRXbyttZvqGdyDmlTZLJW3542GXSfM1WVDHuM%2F7sdR0iXBzgT%2BsWxatN6D1TzrKxxDn2APBRdQL4lqPqwl4bSZ9zXv0dRCFXyNfaDGpqDrmFvzE20yeXv2itFcyDQC8FB%2F%2FPFXx9WIyJvuPb6KSw0hTTnXEYuGuhY00J&X-Amz-Signature=ab4b277f6aec4080ec4193ba348c590ab2b8800c484e4d0f62a1370a43d64afa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTY7VTUX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbv0n4jO6hFQJOqv3HwyfBsquu6yv9owxVFeDnSW2OIAIgILeePzkyu1ykoDvRzbZJcE3aTXDNOmjjpOoNkgJ2uFYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH12RnTxJrZe24rDnSrcA%2B5UDTTboOaEN0AUFpFELFGCR%2BDrctr5goh2kiUrE6C7%2BSTl40qVLalrPRT6j5yMsmkiszmjndj2iCFNPzykJgnhnmMMELXZz5Xk7YpkaFcwE0%2FoUeLucco1LiDCv7wHmI7fX7goqw1ZjHmV1JIs5zCFzRCJ385ZqlFFI0yn9z80UM6jrR6jNMbRFF3h1wtDtBTZ0fXWKYr5C52A75LN56a%2BJYRzbt5oQ99hOCdxPsCmtqIgFa4r9BjVo6JgSX4qi4dnj%2BbTTa7zoP5qJKEL9Zddc7KS9sGWOyz9%2BRdqGlcBHiaYYDkeHXhs22WoHssYjb1DoCL1BojnlXxNUjgQXqxdeHayZA7E3pI8GE3Ov%2FgsaMgxe7frOllriywukNq7B%2FQqkA0PAB7MPdz5VUcTdE6bh%2FDusMrP8%2FLWoctBt0k8IdmAz379s5qanLBEbtmAsqOcjPRS4wTxY%2F8zqKwQYMfBdE7n8xqrfe3rXkDPYIZTsfOBsXzYHU%2BVfa7hf3k7ekbobf4o5mn5ZEPU%2BKV7lqkaNzmaBWsIBpVCdiffks1TeCONouwHyyNk9wsbN7WJGUea0KWtrgc2AP8tq8iO%2FELCkrwx0f9xC1JR7GfyMTnU8feZH0BWMHfG0ErPMIaO3r0GOqUBqG405yQJk0hFf5wMh92Rexwa2MKBQLTdxxg9zNvZY6j9ujrxsF%2BmKsSqX8QJe0KNA32b28gV94D1d8EjcUzF0iqqDOm%2BShhiF7StiQ8cy72cVr%2B%2BoroRZfCDR0j9sqpfqtjlGtkgbFkngiIpc1ojC1b3Wh1SGLZjthoZzuW679707C9ny%2FsmXoEphWhZqWSb%2Bxly4z%2B09YDOV1g0Hq0mknQJ4FhD&X-Amz-Signature=97e723788fe3154ebcf753dd34642f8c470cb32fbf61e4fc3447b2a344224d22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
