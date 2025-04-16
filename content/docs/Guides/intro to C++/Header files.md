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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFEYCMW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL4b6QUl76WKrVo7yFkalN8vC42HgLBwzY6V14qbP3xAiAjzt3xR%2FYwdQRAM57QMWD7ir6DFCq9RGHZFuwfl25awSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMEzGVVpOkTE2y%2Fk9qKtwDl3Ze5NDkBb1nn9xKKY77MvjVBmTDMI8blGwy3o1bW3aLSPNLt3JbLe0U0ydV6B0hdi5E8OEt%2BmQIX19LZQrc8uevO%2FSlGSyqjDD6nFfFiMGVt%2FkZ2YcgGoFbajEBkbBPPsOmkYYfTjOK6FVFaqoNcGnyynN2xhjL6arje%2F957dJimTreXZFExESIv0ZMmUhWcBsD2n8H%2FjhksgVqcTqgVp6tHsnJvZNV0H8i19FNnKU58gPFL1ogm7PHO%2FIK3FbmCYb19HGUJKsQDIaxSyw%2Fnf3Qzsznsb%2FLj3gw1yXTyMBNKpqI7mr%2Brp5kuFgyLDXCcxmtNNM1tX8jGuz1s%2B4zJ5BSqzygDDi1hw1KDHEYUnJeRSEjGuhk%2FZbb%2FHS4TbM9iXGGfppU%2BTlbbdZ79gPpN6gwxkb1cCjjnSIwHUzzEr2mZB9huEAJLtJlC7qduqzkltZEypQzUBvRYSpPNpAbMfftlBOIaCaGTHmpdXHQL8wqes1PvBKQpUMCRi%2BuUw3uUlxDzH1FADWrru0e%2FhGMmAOYIfOAnFJBpalyjTugL39KSRgodnr2C8a8f9Ls%2FEjN7435d9HjBqhq%2Brni9mT2nls2TNJLzNmub6LJ02YZzxfCRmr9kWYMNUZz4%2Fgw24r9vwY6pgHZdDwGG7i8H%2BSXGMcuPiYMvDfL%2BBiEvR37HZ63Pn2ab3uyn3nQSFQvBpsdow9ULAy8aC7g9nYyuLmyK6k6BR1%2BEhHUbmeRu5iaxkfVF8pHxv6cRFW3euOmcZJUWWyL5OCbnIGpeZtzU%2Bbrl27wMJOLYcVuFjInJKDNdb3K6dPhF0yaSLRouPvjJ34xmRPQNeUFRB2RQbcx71WbJdDOliffbIpfPanZ&X-Amz-Signature=3274c579e53f22629056d6d577ae375f46ac0da7444379f96fec6c57984426b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
