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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPKHIST%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDhxV5RmspkduXjswZnDn1SkJniAcR7%2Fw%2FkOUaZtX7InQIhAN1EnbmSqCgsuBrI18o2kMxNGOaHN2wrzLJb6iaV11dgKv8DCCwQABoMNjM3NDIzMTgzODA1IgyrUc0tej3oIk3DodMq3AM1RE4FhA5rcnLTA5WKKp9LeqlvQlYQIYbh%2FFjG4OOV0Wiwv5JGd5CVRJ2FEhO5JYYsw2fAQ6ZMLxZREQ22pwUZGN4Oj6GHLhydYa5F5XNMrq89CsGnlULF77fhoehachbfkydJP%2Fih6ZFtlgYw0hX1GwcD5aH5jfkprwPv%2FKBfEykO%2BGKceGG7i0ejcY8lofKLoxVbc3oEngzdaMTL5FcayQH1y3KN6r2uzpCpwSN%2Fq2msIJcc7UP5hPeqVa9N2P74N5GtQxItxQ2Owtc7l49okzIQ3DS0QC7QtJKM83vWTsBPBPDnQYW73fakKvQI7o3KjN0U9O%2BRabPfiYzotc8emicaVE0JSD3v57i0tgNkkTT%2B3ftFC9%2FEp619EIonfBqJjQuCJHey00b1pMaBzPVV4a3ttGOI19Evl6SaS6JypxkQ%2BiJ4B1ALxR0z%2FG%2FjEoJAvTCFiXkbRTbGTV9cxAGgnSsi%2F71czj1HujyXtb0yM109pq9MAJTVlFMDOypFySel8DrHyDAcbMZhhSpl2y4SpPMwcJYXSgzbP7BLZKRs4Z%2Bb3Z6YTcrAEd8oG3auatqP0IxQ7bOJ6Mw3eainjCUn4Klz%2FxyleRYul9pRnbCcFj%2Bz9N8qnYFCtknLITDnz4DCBjqkAXgLemvvHh6iU4YK4Hh4Rbc5vj6Q45GDvH3vTm6DF%2BDdZpijOx3mFEMBAR6JWgN7G82Jq6JemK0taPghpuKmiRR02JGF%2BGOKW7YNvrm859GC%2FSJ4WrzVNQmV3whRbXAjqq1T7VwC93W7J%2BK30zc6S8iLc5Ec64xQ0U9tELEJrfJ%2F1XLJLC6dm%2FAIgaab7iMqSKISH3I4ETwWSlYnxDtwIuJrMIKO&X-Amz-Signature=2721a1e852458da10356550838a4a8f18dfc24fc1dfd4962e784d8542253d2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
