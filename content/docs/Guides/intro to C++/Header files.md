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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUYGE6O%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFATOX%2Ff9M%2B4MDf1z%2B8lNYNW0M2SgFRAG0SBLI88gBzAIgM5I5pV%2B38sLYPxJrjhxwo%2B5lX9SDZsn0jMyPR2%2BxgX0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMu8E8Y8p2%2FZXhCLOyrcA9CvvKVt%2BO%2FMvGwIfO2nAGk77KNf0FC0hw2WY7h3hqiJMh0ImpaeLfCzdbMpsR%2FfYN2PiOarDlTfJvrphtXC5bvD%2F%2BC7EnYPjs7CvJWzJZOaJ05dtUueyjYHtv8pEYqnRU4ZER%2BDGfEK7ilH85g5zF1%2BXzkkc3PTEUE%2Ft6WIyQ%2F8yEDfK8Ef5%2BSq0s%2FdhZ5e1StP5Ue4gfFBRuUSRctdhvGrCW%2BZimp2G16lJdSYhpyygRSLcrg5yOyYEH4wGRmOVShAeLDuANxMtoL68cRdKd%2FXVpMFC4djoEWVrhQSUXZZyZu3n8nnEI6pFeST6NlTG7gzF3VwehzJ7zW9FL5oPm0mkSogdXGUCTgw24FJIzehEoyjHyrp%2BAQ7CmmE%2F9thdmfP8oDrs%2FxqOyn5WBP3rca%2BP9AGQjx4mFdfsCOkw1X3GL8E9V6WQyw36HrjozpVHU6kwRyY58ZnpnOTsP6Wr%2FNfrCL%2FeekMW0Uq3D2IP3cCNtekunO1FS7Zevhyl%2BwC3GEzCBdifoUZVGjtBlnBjsf927Gj8RSOxmppXejEldZbweTWe0Q0wCbCQeA4aMWjBlN6KuCa1qdJIGOvRL4bLwyuGkjvrmZGBWV3qzAp4wMi6RW7oOXX4T%2BJXGHfMNa9lL8GOqUB4qwfaB8dfu4gwuX%2BGyE%2F0YaifWq%2BTD7Iogbwb%2F3BEquoPVmmTa6Zqe0pKsekPkX%2BWCQXBbbeiWjnDleyQYdh9aQ1o5Fsl1WRo4cfPG2wEbQEl1x%2FD5tjzQiNkuzOuMam%2FjBXBbS5x79u6YH8wuGzCHfzLUi%2F1XaMBidC7IHCIj97vdhZl%2BKgYQbCVv9br1ZPBfi%2FpuP6mYMj%2F6bJGTjPvkBS%2FdC%2F&X-Amz-Signature=83505aff9b9bc7dd9cffb35ce973c878482f5fecf77e931cb83f343a369bff9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
