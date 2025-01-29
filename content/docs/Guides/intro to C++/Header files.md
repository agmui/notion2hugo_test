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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVPZ2BQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BCYdZYsOaXUE8S1cvt7dyqHnAQV%2FGRXIEWmS78rCb%2BAiEAtHexy2WXxgU0u3ECQXOkU46VUnhPPubOyQAxpibiYH0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHYrCVBRFoP2YpL7CrcA09P0A%2F4SXjJJTa3BtgTPk1WKfhk1y0qPedpeh8eIwICGsvlT2gQJG79FycQq4wfOSqoeECD%2BZmtwdDL9oOYeKPuOVaE4gzEm7YGNUr%2BzpNdRz5%2BX2xwWrq6uirm91%2FUV%2FInQhKBArpNm22iVrrM%2BgXJdJeR1eFKXU8yTzlWHKa4VzgJRMGsamyFbhJBavkiILa2avdYIlXYaebjTrm73GNccn4E1oZXvjjj%2BqMY09Uj%2FpS5mElWo%2Fkv%2FARCaUdVIz8iASl5cLk7Hw10BwzAaFOSxUMsxx6NOg7CqSsNhTiO2NyygQo5ZVSyn4gzU8Nz2KODT16xg6fcYtYSq5UsZwmtJHAmln7LXXat%2BWYbdxR0prWwNhzj43GC25jV6zgcOySni%2B%2BrFjLJd0fQDTIW0Jun6OLJ3SwU80Mi%2BNmZu06jOjKIOVMe7W99w5T%2BPyHHzUJ8jv6IbD68VHNBK03twbyLjq5T2I6RLqa6%2BQlz5M0Mlf6Mg%2BtrYMy9Yn5GjCexAHb4hm6fDhZA8d70VvarOP61%2BbckpiVqVX3c2NQX52LM7iVmSd1hCkCFf3T4JBiarnvMVQx7NDjl3HxCUXWm07a5HkZeG0oqch3rcnINqWordlHmAwwiBBUPIscpMI6F6bwGOqUBD4zl6RK3pqFAsowFGyMYRo9ntLQ03GgpGRLL5CQ2m86EXUfjsbJqQFLa4aiYCtBKWkYflDff1vBFM%2BQCe%2B2KX8Rxhs3VCitQbR8RLWJ3gTwKkGO9kE7b0bEUwuv1G0kOLKtSvixB7%2F3lT2SQ6xzt66NDp9ETp216QAg%2BXlOOTkDrIfOfJr4Q%2Fi2xPpkZ9Y7E2PTpccyM5ShW%2BgIitxfduYyd5oA9&X-Amz-Signature=b6dacd636e14bd413d6391822c0f14459677b78c957289d89c2548504f4333ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
