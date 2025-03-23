---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5P7DOL4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGTpJzG7rdWzZh979EIy49qboydmENJBO85XXaPtCANKAiAVdnRpEl2%2FZQW90otuo%2Fbf8S4%2FoKluhZiSt38lg2Ma2SqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMymJJdDj0Rhx%2Ba%2BSPKtwDiDm0FWy9kXZS5P%2BkaYfcqTG1MqTI7nr33MYEHy67O0Ed%2BQlIDSLQhGcjvC0rWfJCANaXDYgxZI8kbWWNKoMslPp79q9DlW1PL1R%2BTFPJbAm3pm1hcvAwL508VPjL2Y7K4npuYxBpDXumifCkRmJnO6%2B62DW9yBGa%2F0HsbTvvAg3y6t5S2K58y%2Brm9HuEuk3SnAH5%2FSHrgT1lkIyxyglgC7KjJPxh8qYa14LACFxguZ2KrGIEP0a5lxGCoM6ELIA86As8shueBhsKl%2BUvp3j5seIZ3cm2VGFWXPENLSDP2Jqv8BvffXAWN8t0V2eHPIjpMv%2FCsDy4S7Qz1RTGkZV2u3XDnEIukU5fyfPkUWwAA8cDZMSRshE15cgQ9ATK7DHOA6nTOj3Xewa50ALX%2FdWGox412FP0%2BKCsj9xyIbE65IGtmoixZMiG1lz0eYL8wQQBjM%2BRP3b5lKqPIG4TNmNpk%2Bye2XRr1kPHHz6CS5O0hW7XNcpcQH3w2pW5mvv1S6CDywNWATKm0hvF2KraWeOkO3%2FgeVwm5PCUiX1H6%2BZxWxEFjZbhzJQi8r25FDe2C8fuvplSFhLFN%2BP3Q50ze9%2F8Ycapf0DkYYrTw9CAW%2F7wh0SF%2F0xlYVgV1PmY%2FYYwvpD%2BvgY6pgGHCw%2Bc4hlfB6gZikpI1GKIL4gpAd7hWStxQe2A9gqK6%2BwjVzVGkRvifJYIC%2Bw%2FJ03fUqtJFrhzGSWG3Ghs6mhhWsiJnztYhWP%2B%2BUc7Sei1zNAgiyzkNdwavR7fzJfSX7gVR3YoTPdVvf3Bofv5UTTHMYF6AhBEk8TcBrQ4MvI7MXHrIxX%2BIaVhKcp2mI3Bzxmsncjg5lCm9nzIXKs6leQPLX9mAkk4&X-Amz-Signature=51d9d0e10f3d03cbab00685788e0daefddb6468fb035bd19481080a32de5a94d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
