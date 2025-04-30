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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGNTCQY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCBs0fgbK24aI%2FMoYPIr4Xmcj0zDdxNmQ5XNz7vxxhRGAIhAOhMqdmWsJVIIXvEQIiG%2FGC6bunNR9geeq9blD7a2CsoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA6hvp8UnPxXZpNRwq3AOn6gLs12EGIgwKnpZgE%2F9%2B7oU7FJFef%2FtXa%2FFwxuaTmXOIeok9Qfh%2FO73nhxqTtuhn4RNklRqa1C3Rbonsw%2Br9h2y2B%2BgRSiK1GZMVFPOIDeyB%2BaoPP3PbkHx7mIP4pfUEoO1XCJDJ9duCgKhas35SqY45IxIzheePAxOKMCnAyI918P%2Fj9JNe5GG4Yb%2FujVImlBuUAOU8Y2a1IHRV36ve4eKa6mpWcGM6G35cdkSECQSUW7jRhNr7ODratfQqSJ1skgTEU5xbKqbcqHUe%2F3c9zCIT4jINzZh4sXd9MiDfmO3LvqRRoWBel88J8h26wxVcDWRmOGbtOYYzTRHneIyUlqdPdleWxNpB%2BQihRfszzU%2FWgGpxuV3eEfsWczfpx1UDLUJ2nweejcea3ZNggixJpRkTK2yu1abu38QJKFIpb2H4UE2euUy%2FJ5i0WkObxeVi76WEFDWL0XiEusuFfOLtaBC%2Fa6C7dyYmIJXMi1wY99t5ih5F9hhUTgyy4lC4oN5Govx1bQiYXrNAKNKWqM0%2BCh3MOGo%2BJ3TOYDxFfUmdY46whuwSnWufYklkPZ98ZDZKsg3%2BupVozmhCDLcl%2BVlikbeVWOIh9QpBRM7YLCqeR69meCIqalFbuWpV9jCezsfABjqkAaoTHEN1pOOrvIV%2FocVQtYmq0W3MnDQsf61qWDOYo4T1JkhJhaD%2BzaeWXadMFiIrse44FB9o62CeRWbtJiwtk3QNgyHFWEYIwBuXXmBkBVl6Zo0NzTXId%2Btm0N0mlXaLvIcFERMn1MNJKhsCZBAeguzYuAtRHzr8AJUdSR810L9LWitH4iaD5KhBo1nzKjPkNH4OrQhc6o4gtxoRrqOHubu%2FdX2g&X-Amz-Signature=267c7590b848286ca54385154e3bb17da50308ab56dc21165d2c6ecc8e306b97&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
