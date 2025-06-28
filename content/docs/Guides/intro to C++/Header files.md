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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQFP46A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR3yZ6WAuEICDisPgeGQS7gX5XvT6MnNGD6sSyTGIF3AIhAJ8WcyVLs%2FKR7r%2BSUnkmjGhB6Skc1tjvjj0MZKN6kF1XKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl%2FOxapK03zEf%2Fq6Mq3APsxATNLlkIOkabtpfEwXV8hY7b1dfZm%2FyJu4TNC8f7YovqkE0l3%2BCV9E%2B3J37yH6iLfVEJY%2B3KRGlHKWrea%2F3ovkPw3XggD9vEUqdnqaxJnSTKfap%2FrHt6v4I%2B07CbvMYUWKFDqcJq2OicLwD%2BJWoP0nLfdp9J7lkWj7cB4o3DXAKT1RDhRTQbJKOrSpSClxrTnjkMzF9pyx%2FFIYQj4pOuco2e2wnSViswjNUgMRQ7fxQbwkw1iRG1sA4116e%2Bn%2FzL%2B57U1eOH%2BqqUokSQDT6j8DWd2KvTwQYUFBqba8KLEL%2FLNF%2B8XU3pO6fab%2FEhSGeckyawjkMcWtaDIFQ%2FGfK%2F79iYYuo19MBCmuK5LZYMK6qGD1%2FlYhMuERwJiSnPZ3oKgztDOrqHedA4lsNoAa00TWLjJx%2BKSdD8FJD5mPvP4MjgqGMELNZujEUnFnFix9dDbavcbug8jkbHuRJttsA4ZQ9xrTSNGiNlWuQrkizitdNlD2eFPBruRh3AW6NF8CiynpGxXwfBULaUe2om6qH2wwgA3fM59AuJJSk0O9VTdxj%2FBPehiaTFgtiIUVC0rQY9959NM6aPa3iFJ5%2FmrvObG9C4o%2BKQzTWyQ4ZHr3Wj5LilWhhFMYSi4aux3DDa9IDDBjqkAR4boHgLM98c3TA5izJ72U9ElybYL9dzfC3YVQXO3o7n54a%2B2abKhBu6F3CwGxdc0gKBWz%2BrKorn5wQchqG1lSfRuEIGxHMpR6VAV0%2BQEqRk6nwKTK1MZ6yXmLxuAx4uOGadBEV3%2BgrBF3F%2BEyJ86l2A1gvRygrmqkgLb0nmEVA5YmwAargpbNwuVCNwVL2x4E3SgNK%2FFTmzpJdkn26n4U7FnAwz&X-Amz-Signature=83a9e7cf6010e4945e0d6abae29c6aa74ce68c1e04f2999ff644f72dd8783556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
