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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJXPVNV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMbF62qq8Gn80Pl%2BxicJPxGogQbZ%2F2hv1Zbo%2BOt7FkgQIgXBxIKEk7qJiZfxOvlgNZQhC4AXOEENy%2Fwig01GZbbjcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDH6PGaUy8zvq8SQ7YircA6BmvWx%2FACQVyExcSojCFuiKSI%2FHEXReq2Egy2x5%2FZRg%2FAl864c5jcYvgSHPq3slqKanJDbkjACN%2BJRLyYDjhBqtecTeucpYB45pxl3sbyeJtLroQeObiiNRt7Wx69YaFHaI8Nv5QLJKxbZvgJ2s%2B0JWJN0DsoCyYX6dwotcPe8vpB3Rfn4b%2Bq5o2vj1B5VUE8pZL3Ew4%2FOU3e0NGFSJT1D6VyOGsn%2FXnKf9rRg94XpbeRQUJIpJsdpiN%2FKCIEBTE6rc5y1B9EiGXhQW91YHIFkPRyIc1rMiUQvJsvr1ZB2ivMHnXuQCPcXlYAAlkd7MJWzGtjnG6h9qHvFOvywBS9wfai%2FiFAgfI%2Bbp5XbT5b1J%2FmxNGSjKJQr1b%2BXKnmWD14s10F46ov8LMI0oton%2B3HzbNSPtK6ffLUJ970VqjoBR%2F6TXtzYUwcgy4tqNaBJBrMH3sHe6VqsEEuGF9TyzHvgJ2V9%2Bld1AOXJ0imUYw13QX01oPb0AIdWTAY2RgqoWgS7oRyLx4wulzTVS05KOjZcNAAjhTZsxT9RgwujgPMTlVpCujNANmdjw8C0iZW1hrs6ltp0fZxreBGMlh09JM2gqQkVfr28FysLoaYrgzZtRymECPM0Ay6lKKizqML71ncEGOqUBLwgL%2BxSZSvwZzFcuSS1huYoiwmO0QcFWqhZUFdYr8QLoWfWB04%2FsFRUBwXMeMpQ3IE6QjX%2FjO4og3SDmLUQh0HwhJlVWztPUELl1hYvgN6%2BKbWnqC1XAiGX4hTHAT%2BhmVH7I5et%2BLvhgcEWE5MpzaPtiR54vHXqL1D1rRVufgHWYhNiKCX3bN3JNdmvg6J1F1V%2B%2F03IdnNssrN26L5LxRuAcKhEU&X-Amz-Signature=b6533efc80132443d43f0d88af49634b06b79546d82d884980e64c09d795024b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
