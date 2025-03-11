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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT4UDDN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC9HSNxyDdCEelBB2GaOYGm%2B0%2FiBzs8Yp4HahRFcObpwwIgKwfO75CdtAXR7O7fya%2FjaZUYUZjsK5Ql1h8xKw8OPrgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm8RWak8GN9jXFLqyrcA0MJnKruJvZ3ZXey6YnJ9CccIc5WWlRavyats%2FZ3qLPwunYJqFzkchv4kDgTwFx%2BpEJ5Z0zqqsBl%2F2yYDuvkzJyb3TCU8ouGFSuob%2FV7BtwGGEchEK%2BqS7gcVGTxDeeHXGp6QD0oRjpim59gEu7ht%2ByzipI2BoYCJPgd%2FW7WYnlTP5Wb8mXRjNzQHE3OsMAMsWyGYn%2BqoUrrzyvUoG7lXuG0PpojohBDR0y0faweLN1qAJH0MA4lJNW0f%2BXd5yPaENNa6Vl2dcsLHpyCAtnmtHnT%2BWDUPLK0BdoRYvmy1W%2FTq%2BlrnZepnUWOPBwg2oZD7bC4qm4T3LJMygJhD218f0qOK%2F9nCTLSbfTZWadjPkYLclM1qaVt733Utv%2B82FStS9pv4xa50023JAyex7eUjUcgVtUd6dlL3BWk7U5SeBikAS6V8tFW4XMO33F5a8o0DdLaZsd348VQKXNkl790v0C%2BmMrHH5t6VSIZSKCekiGWPXpFLhyB0pYRhheaoR3G3vmTUw6OJ%2BTHlHnbLHVkW8g8aKOkjW%2B%2BDSpyHhNZI%2FLjxRhiEOdDjx2h7XkaHi7Lis16%2B0Q%2FzNQrTRI30%2BnjNn4nuHDhh0T38x0vOuvMVX9mkylsUQKQhUhg3f6iMP3ywb4GOqUBczLmiHiRmdnmbB0VeNxt3xPtEKVtD9BIyHFf1a7LiOLhhIKmXpzUY4BaPQ%2Brzs%2FrMxIa7YuZX1h4IM2pJSovUKYbGuc1bDJ9dp6sRFOgpqy9z%2BvqIaQ2rLfUoN29%2FcvcJR2hQKrglZ3nWepuOJ5M4fWAUQmOa4BqQ9ZRIaKvlolG3fR3m%2BiP%2BeD6pZKKeXSAv9yc0j5zqq0A7fUk5KuMt7HF4x0y&X-Amz-Signature=7afa5bb80594909e957b89dadf0c4c20ca19eacb92657517cc5eb828347e27e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
