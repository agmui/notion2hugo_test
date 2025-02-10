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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSITE5O4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpmFh9caqL%2BLpYxG9rVzCrYduxROlNnJoNxj24mOV9BAIhAMrwrlchJghYSUGTvS2Ub1SnmF8HTrAIiEt1OM1QGSHfKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLhyyJHJluX1gr3fsq3AOPv785YW16WTnqX4ZUd5zT8BEgJJNZGXzjGMm4tblWGSvgNF2zVX3g6evz59Ps3bXJl%2BkU5cBtV0ogVkL%2Fo6BCiYqF5yeXk%2BGONgsGLdLbIno%2BhAyOStuDxgkluvQZV9odhadLDHihDfKvPFbrMH5n77Ch4lR3sjb1g7hfj%2FZ%2FbtB8c059QazWqDPIkic8IfvHBd1IMCXrWouEOMxh5Ja73Dkrcz5nBqhR2H2AzqSi9CX%2FlejXZnRIWxsrEWyLQ4OvhHy8U%2FZr%2F0YKXqqPjsI%2FfEmBD5SuI1hlHi3W0DkWsuJVlSpY44JZHWfh%2BxMRQpGvV%2BXWtpdr8vdpEJnqUCEjRYq%2FlXFjtAsL6e81LfUQaj8MUJVBPeYYotMWQO29tpv2ZY%2FsKCNq0dl1K6wwon5kV6YQW3KLfeWIIwZlNWwgb2xU4LyW6mpnjYKvo5BDr2uv98%2BFY%2BFxb6NO37%2FH9gQu3fZAAOwbCIMJbT4mQeZFtzDq%2FGK%2BuyatdJsL3a%2FbPEdbGZ%2FMiZWNgOnTyXoBzYA0KT5nyRg58FCftJ0dt2mgkw2ActLYrov65V5Lw%2BqX9AdA0SJlgag50hFNaz%2F6DwDw57FXMcTj1wIuWnWt3WYqPhnXE5cF6wtYfESJYTCRvai9BjqkASc6VqX2DV47iau%2FYp6gRzHv4UEIzuYDlrk3bbbA80mFzme8NGbQyU%2FmTFoqQrh7s4ymoGmm6JjVB6VvJXD%2F42phzAfm2sQNQmMYudApxS1PHnSCgjPXP4%2BmFsxfPsjoR2C5gURKl1vnboWXnoiEFEy70HiIRWdLQ6bIk0Su5V1ygi8MsgAZK0e8gWBJw3iC%2BKsClqPZufXbPLQhUd9rSVcA%2FL1V&X-Amz-Signature=d1c52d370c5c457d86198e9d5d2f65505582a4f42c71ffd2a06f1dc8b16c17df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VABSIJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmo4uVCc2L7B2gjhBKuTAuC3gzrHBzO8CE8PDsoFxC7wIhAJzVSXb%2Fnyo2neOwiIPjo2DJXJ7xTwLT8rNKW3q%2FPYWQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH0f6nvfCZunTiMHAq3APze5Q7Qb3zefUTCT7udIJEP5fcDP1asBGIAu4E7sFeaeNtiIvrbU%2BJ03ijuYHWCEvBfWqD4QDT9sz7JJOV%2BZCRkmrjSAigA8U%2FnqCuHWCOcTnqrKpdA0tayQTrERz9TZIaBpQz6Day5bHBrYubwkwmI8n6I0CwQme0cxkDDxCxiZq6yeqIDoqwW3bCRNtuHgd9sUwkmJ5eZig83xv%2B4XnKOrWkq8H8I1NcOTWce6vltSqN0vvu8qS0ToaQyfCbnrUaTpWuZ9xpkvY4OcrPJqf6vJC%2BdKeDAaAYjSEWtauBnXa7W6667QIRv1Zfn2%2BXJF3ZDOeFbz1moJAKtY28hD8oqX%2BlTY0RRKUhOu7ecfDe6j0wHH7U%2Bp8OMfzyuUNvZUxU4y1FIei6ewihjwnUcEIsJZPKZ9UtKCE3dKrBXjbK7CLQZ7BGg%2BZDmJ3Xy%2FcIC9ET7n3Wa1nIHY94jA49%2BIrezPwwMtFT1KqfBb2a2faHHOxo7VgexXE75no3KE3fbUpK7%2FHadlivV%2B2jBk9pPq27NK8PUHEKsRPuLL0sYeyLhLaOx1ts3%2Fxn9c0pw42Z0Q2I69aUWFGaRsjrhm%2Fcbq6g%2FIg3IhZrZf4neiKFDF%2FufQ9lveeGdkJZe8A4MDCHvai9BjqkAelui%2FzmxutZsLIty7xVyDS249dHFQcpFuQnlG1wTldPmTetYJ0CCtUzipgd3ekVY1%2BG4Fj8pPzHkU18niQ8VLxiOq626T5IyuG%2BzCPRVeEmHsqT7yCq5%2BS8IWzifRgkAQitdL%2BLNZF7ggscRy0hGerkTZTPL1Gk%2BxEe%2FvhhTYq38Vcp75AY5KNSc5eRbNNe6GpBqN95P2HkKe5Y207OW6IqQ%2Bm4&X-Amz-Signature=08a6c7e926dcee56cc81adacf7e049ca8480ff47d50f9a5b23a46e23b86dc09b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
