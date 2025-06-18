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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI3ABET%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1CxG%2F0HYQObPBl6%2FAWVxdcRH6gUI%2BmuiQFsR1bnwK4AiAD%2BO5Nkt6ov0UPaPmlx9Tioz9qvJiSGA7ElrWzJ5j6CSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAFp5vHsjRYXDHbcjKtwDVZM2YePi953J8agDqISzwjkMw4DetotJiTzFtyM5PFJ9VqASRJxeGfA7Cx1UHssPBnRfrb0wwg6a46R%2FXP8DmIm4LGHJlOvmugyVpwWmw9pbAwuMwof4jUy7YN30v6%2FLm1O2c3DS6G6mH4%2BLBSLBtt5dkwKnGaIkypW0anCHrhIBell0TuH8ryY1EktjMaqIClxhNgAFUEXutpCiGbdiKZm30CKv63mwYZ%2FBpiHVDtcsio3pW3I2xJqT7cu63maO9tY5eXf3K2VXgzbuq%2FGHjrKIk5MYr9lUHDztEXYcyBWMU7Jf1OVfZ%2FzTIooU3rbrWEprL2%2Fj02y807nb9PyWQWPwsS%2F2K2kubtg012NtU%2FR9ylgzskPZ6b28SObFYQsaSJFPLngZdmTbhOln1XRqaJUBgDacXbyYa0sMN6xxcwJi3kPYHlh0kxvOoBQyFOjFTLhkmyav9fjWRk%2FKZ9fipJF5GyBzKDGMHmc%2FVH22%2F3KgKIwJAU76TT72D8q%2BpSBuq7I89g1Tl3U2333U4ds8jlaLwH2b61f3ts6BozzHRhyBCmtCNrX3pxY75jrzqDQiFXsWzD0AXZzy%2FtZqQNA17Nimy4%2FAFVGvK8w4p0VCKQkhUufmG1l8%2F37AQnkwy%2BzHwgY6pgG8T5svgzMgfghB7jgWUgSxnNQvBtYCmGpx%2FJJi6UUJq4r3Ki40a1bzkt7EKm6eJsOgoNTyJyuFsujuH5%2BzM60b9pkZ4EbAzC12AI0rE8HMfQLKJSW9abArb4Sd58Z6DA56%2FbWfuHLlqDMkiZdYB5%2BdzsGW5TbHr6JcPC5znHQbw8G1rFvyqyLWKzDaWC%2FIx7uDp9%2FVHA%2BV1qVcxLV1ttVaQHVsGU8L&X-Amz-Signature=f6d3b54a7e5131133c4050c674725f69b1e2a05b05ad529f02a5d8da4acad15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
