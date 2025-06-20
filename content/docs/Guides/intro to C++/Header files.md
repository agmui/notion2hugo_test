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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F62RG2B%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9YJ7e8SI96KrTr5IQdXu5JB6U50jTcrvczw3cqzZXgIhAPgBH%2FDMl1fC%2BUOyPSZC45ZpA9x356iCpuFMMjeUN%2F1DKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9Ci1XXzobfVL1aD0q3APmqWTyvPFmh4bFN4IcCMWAtB%2BOcXso9pTMMArVJapMIZX3vyl%2BonogYYmJe1nPb0M3biuIjTNNFEYslJv%2FGWAFiEZSv%2BUpMMAd0Cm9EcTW7iMwq6ziIYTXIOnIY60VZbhmhVyqUbT%2FaMW6q1AFqClzpqE9Gc1FXb5sqvWDFYriRzsbs7jtmBuEqQyAwFO%2Fs%2ByIjI5BMmX49wUbXW7jSBKLMezY8mRbJlDfULeAZWoGfTKAp3pdksHDorJAzdoQf4h7Ny5Bhad%2FlFqO97QD4MZkTjupdGSFr4LAbjKFkfqy1af1whwq3ilO2l7FXwx5BXBqo%2FKfjhBec%2FcZNey5pG%2BtXrPyxnnP8UlWgt4jYwdnNU3tBWE5eRuJYNAf4eR4LpTunQL%2BSEm1%2BicZecf8EKYepc5Ek13FMhy2CtAH2dA40XegO4%2FHXNc2lbufLw3u94oNjMvbnH2iVA5p0Ap2ivfODfLm1bcpDytC0tfQ4tEVtwwH6w1UBxLlPOcreCVb1EGmBofwYldza%2BHhq%2BrgpeYpv2ZnFiD7llNieCS%2F5ha7JqAL4tnI%2F1E1DkWF2jRfeXzF8bai5cxsIX1tzzySmD4yGHzQGJm8s019BAJhkwdXNsXMpUxbsQ7NnJ0CIjCestbCBjqkAXGNMEo69WKE%2FaVsKdG8ec5LesNtxLoHeRso9EwFLX4vo5DMtYVwVNlSVvfgf68uhAH38smmiI7byNgR1RCcLEjd4toBN3m6W7zH7YOJBIL1wOhXWCE5WZlm47jfQmlv2Z94nf5x%2BxxkllIV%2BhNH6FiBXkGeSsDxwYbcfc3reheRjGw0otxbVb0968C7keA1kHrNZCZLSkKs9h0VqBNueH2vx0xB&X-Amz-Signature=ba4a382b2448b4e1922be95254195a38ea69c7937d97fe5089b171369999ec09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
