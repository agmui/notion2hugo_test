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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJRSZ6S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyYEJCPkPrQMFBboh%2FLQ4k2hI3PJKltHov8pAMM5JzYgIhAP5hgCycNZB9oIewZjYtw8LGLAOvSxLQ8QqLrExL8GfUKv8DCFYQABoMNjM3NDIzMTgzODA1IgzRmDoksisZB%2BLyFfkq3AOx3ItkwveXJ5kq9HdXWm67HzJD5shP3KSMCKR%2FEHsRUfbaGmg%2BEIaJmJZvHkWRZRGRNa%2BgJZMkBuT4bwlXmwjYMvJ96e%2Fu567%2F8LSLBMBlRF1wpJJqrjgs8ANcriZR8zC0KIlmHMW0JnR9XVbvRlze0uvHORqfepWOGB4ihxLvJyMrj2nNP6vMX1mEqfvpIIny%2FdkiLGfJOEowhWcrJ6uCX1MDM0rXn8ywd%2F%2FCtzgJvxXqC%2FQYi36%2BArQ%2FQSlOqqiwl3XK953oKbf0Q9rP55lc2tsIW16%2FQ94bJ7s2C%2BD%2BM%2FeRWTqFKw2IlBDVCbiV%2Bek9KgxndWkPT9OsoF6dXWWoAXsed9%2Fi%2FRCjZ2PhINMKCs7N6BhOCxbt8X6pVB54SmI8LjXJGaOmxqD4CwTY0iui6AE0uxaeHWMvzpzo%2BgcZkhd3SCY4MtrfK%2BWTBfSJrKVyDwb%2BPp4JkgT2UoesZCreWd23fvSrBXI%2FwT3UX0QOR7bvoGNhI8%2BLPiHs%2BllH88g1NzYIkBh7mftW7TtSv0aMCnprL0Bl1CF1WebTWGiqPQbEsW6psnRBfe%2FgjA4qJUZUZ3H08V2ZoJobsxQi%2BzgqjHWPjdTfj3JGhDNYYFyWQWPv9QZpPbVoBloMeTD77LbABjqkAWQ2E9phNIIr644Ma03MZMdp%2BBSNvwVpOGERk%2FvjMA1eWQivAuLT4J%2BOicBrBLz5ua2Ey%2BBdINo%2B9O2GB503yMK2RN7zd36dxAUSUPKvGbmtIdc60Ntuuo9ZkZl18PYr12sL38a%2F%2FxER25%2FI6EOdQnpmNJXE1ayevEeAJv3LqB7MoozbdDx6ASavgOlJfBCkgXB8WqrViOOrt0%2Fq2aVIpm32O7KB&X-Amz-Signature=edaaa6197e3a65228b32293755952ef8b7fd020729bf8644a1e8363ecc75769e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
