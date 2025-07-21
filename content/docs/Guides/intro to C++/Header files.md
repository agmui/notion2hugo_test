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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR37VFGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3i23E%2B1paLf1LtGiL7OEREhg1X%2FCsRqr8K5TCQqyxfAIhAJB1%2BEYVY8Exm4seWQVKwyt%2FeSwB8OSQ0g5F%2Fbg9DLTZKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy32l3Gz8nTrZ5f2i4q3ANm0YMwf%2F1uYX5IFnqh3c4kG0%2BEeQ8%2FhpJBORYQF4h6oPoje5v7NaA%2FdCAjD7mtOupWqfsVsTFa52X8PWiDv7nzl%2FiByQIwXb2QiIausHUmULkyeJgXXrXq4Z6ck8G%2BisBicbe5t3kTlJ5qAnFez8XgUEAi09CyIyien3Ui9IUIEmKcmjwBWg%2B%2BcyoPTm%2BoufS%2BK1yHrKLEQ14cfA3meTGT0vcPohuILqNqXi9q2cDmicV7uGwFQG0hvzKvtci7MhLdkOlVCdCYJf16YQw9746qY8W62FyQXll%2Fw1UlMIJ7C0e8wnkpanFko2Ds9AM6UzeeGRQjGEFPQ47jIQ48%2Bw1FriSpaagBsTSzjqSWawwEt8%2BDar66U2pCOdrPNRrWXyKA9LvprBeWcjJQpQ9r58xVeVPTl3SjLs6jV9mAoGf9CJ0PffPvedeSDDoxX3aph439CDE86DxalTuqWSvzxKtCviwKPlj1RlVmwDSZrWTXyxPoZCcUzXcROKWHX7bHwLvMl2N91i%2F15HcBuzH1R9fxSAigLoFV0XpW7g3exLqzvsFuceA8rWg5FrFFoeYSB9IzKSHJ%2BYt9edoF4neyLxPgeQzx57p%2B5ZU%2FpgiN46xZv0dQviDatKpzXdNGwjDUjvjDBjqkAQFK5Jn6MRbP4YTe%2F2rl%2BNRogYg9qi5oTvS8eM9u5STRNxqEe71CKFrLlzzYXJeCyY8ERgO1xE%2FW9%2FyrsXR%2FQzlTNsGzA%2FA20HmRiOGkHVHpOrpxWKFl5ibMUa8iPYH2MUpYc1r3Ddm%2B%2F8DFK1pbOrPXh6s9Mb%2FkQffEoOjE8mH4cRgwGC2A3CXgY%2FCf%2BbfOYOnvXIfpsyFQUot2iTf3I1d%2B1kPz&X-Amz-Signature=49d884b8236052c05c907dfd719ab1cc0de511718185335e1b65de7c8f5ff7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
