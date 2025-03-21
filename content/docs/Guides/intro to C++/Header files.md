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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNA6DUD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDNkJiciis0%2FIqvfNDsgM1v0gkEQ%2FoY3IqBizeolZU5mwIgCtrYPf2xOG9H0mnR6CO6Bt4L6cxcxtj0bm9l3B1c6f4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsEowThWpc7eHJh6ircAyIVZZopS9OCiYjmGIwQO7%2BqovMYidcko6m0TbvJdLe%2FkfPvbygd80hLeDQgZmgWSpgpdZVqHrXAGiq1NEvA6X1wV8gGQDLhBrCmqRu4De2YvBGBh1f9W5IpeiA1r15D4%2FNg8LUs%2BDEcoXzHZ%2BdS9rwtc9GBhzMi3FkHXIiuU%2Fah86RVeeAxOV6UGVbzP8gS6CQVqxgC7fscv2OZwWKdhkzw7DRHr%2F2JhRSHg1UEvMqVvoGtd3ppiSmcYwP0v3QHFKuyhdPKNf8v5U660D9RAgLLt6WKEL%2FeuytxZKfzThMRPDVYTRN8sV9cWmT71HrBtQgQqy8b40r7ru5Dwg0xLSO3JPu0tEzXoQHe4Tm%2FzhYlLxhzgvNEEhDamPK6bMoXAX0uQjUUex3pK3qJ1tEs%2BitTOPaDv05SlMx20Vd7WRcIev2YNlHfhnhCKJme0xawGZgjrFdBaeNWXD2eBDkWodM5%2FRCK2ZImz8fUOy6p7ArQByShNCa12kXlA83qzbZBVxOso7pvJGYwXxwnUV5zhPDX7n6HrrQRYx9Ds8SABMNhjA%2FnQYLSGQ%2Bnl03GBe8B8uCtBMZxcR1qDj5VkPKjsIO6tVGInDEv%2FdoUC48QfvF17iXq1EqGmBIohfwfMIHY9L4GOqUBsEEphtWIf6%2Ff6vt5H8jWnfnP3o61QvGIUNP1pQ6vJysRVOZxx95mPYzUp%2BpDCOdID1VRzjDnfxETTX%2BUspnKNCn0XIKBoS8Og2mDY%2BbcGoNUC1qhD%2F%2F5QrRkl0IkEtvwnW%2FQ6Mxh7FsXPhhA9ag9pTf%2FWLhanQGDX%2B%2BxmhS5QSsNT61Achnz5iNS7h1kaYimqmBsnC5xsftfS2AmGxy3l5pknnur&X-Amz-Signature=c1be40ea173461345dee06b4a90fbd700cbbbbd25564b348020e4be81be43efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
