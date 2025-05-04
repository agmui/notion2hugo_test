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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFVDANU5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD566fZJzFv0rofKomjrPPlSE5uvgdlfi60fdeWHanAggIgKf4zAQxXPMQJhRSSOxGxhyJxoV87imFDjLbN4%2Fc5mN4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmskn%2BMVaEkaW5hkCrcAw0fbduQLLH%2BKZzFRV%2BYz5PF5J2DNMZct6SHpqHuOI%2F%2Fdh7GSxbUsUx%2BBZ%2F4Dk7H8hNcMC8FTka5Of%2FRc9HdqnrFDxrmH3GSV6mYD5Lai%2FXUYS3GYpWA8dPblgen1W%2FxO4tVhqdQtyk%2FnPyI1c1PBzipMLigFCFm%2FyWBW3JAvAmu8kRBLf6QOhlqFp3ct5gHZIK1%2FicVJp3%2FANlJ9JPLxfzG9rYoYcJWzlU6kVBQPYDfY1V1S9Pxd625CM9BsqS5S%2Bii0uOfeai0h66XIuqdDOkWP5a1C9XbHkHsTJ40aAutQCyGGPy9rNpxuG655MidFL6StZ6nIVoHl6XqwEHJ6nFQhNoTIY3tqIeA1vSChdKc6cJkO7XI43%2ByXSFwdgovux8nasxiBU549jWFSQJBwF46Jxj%2BlkIGCV2dcZhsEH%2FR5Wq9aY4bEwsNqO%2BXzViGkx0wwIGmXKYl%2BYyBzqSy6EihydpRdP80Aq9UuA8Rq9W8ECnM2uaIYWbnYRjgg5K7glmc%2Bb6l10zrFJBNDiTgrr27stJc68EkQLa0fdCqwq9%2Bji8pXA0kMqWSTmKDKE0owTOCPzUPODx4rDJfekhNi%2FCwkje1RYTnY7fmCsB46N6L5hSl1CL3DYgvIOChMOXw2sAGOqUBNl5K5mUofAmnG7ZDg6vH48yaR7Wu19IeOWa%2BXHzvGEBKFvt4ZyzfBV%2F4BTeWr%2BzBALPrlg5yy9goNjbqkJauzWY7OX%2Bm2EdAFaSelfs0Td0dFp%2BZGnqv8ZTRziJtEb5vIAHt3v8OyMEvXlbvoNc1yiyq%2F7mfYK884NUYx1WhF0Fkw0wWCyl%2BNuNODCgMr2RdSYecyoBJ53pFzsulqXWXm7%2B85l%2Fl&X-Amz-Signature=c6206c3fc577f81bc5d43ddd6692557c4abc89862ed7be99c1c2d1def536a7aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
