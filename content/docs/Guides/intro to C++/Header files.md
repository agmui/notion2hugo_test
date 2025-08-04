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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDDBH4F%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCFI%2B%2BOu35SgQIDsuEhl0LbL7v3kYiyOCgpnNNOlR%2BUKgIhAJRNI3emHKq8wtKI9OkYk9a%2BAzeyweGI6tCzRs7fqCsrKv8DCEQQABoMNjM3NDIzMTgzODA1IgztDpjGm2d7xakJcKcq3AOmSPfUA79N8gqTD%2F1HnsmMfo%2Bou1Za3pLwENMX4ZOHb9tfCLHMfeLO27UH6L1MYc3dQgKeA5Ot2bBONZgkHZo9WlDCF0CJaPC0gTGwjnn7Lx%2BdFbGCH4r6Ok74XtKeiVH0qqMFvzb9NueoudF%2BjxxmChcinRAe%2BtjR9FMVzZPwm2Z0sffbqtYvxg8y8a2P0xcsV8Y5E4PAIJhnPy42Sr8QxAPuEiuWSSID49gR9ub%2BDi%2FQzTpbjNqkNI3Wt7kUcRImK%2BnJQXMdJT1omxfKMeq8p5NEav04O3FsaUzvSKt060TyBDfqMCtTZTH29fbGTn66hE%2BruY1Jtp9inJ%2F%2BRiIkqr1s6u%2BjHbTax%2FGfpVrxucxHkSW4qeLLveQNivF3QpIjRqpFluBay3SwVQszb0LJor3bO9WIltSGFkPdS0W4YEa0YiCx52AI6hWiK4NLhDNyf1gswhqZfwTCf%2FAJ7Cav2tJvT2gCpEXtgShcH3nNz1%2BeWSpHLk1fuKVDuBycthRUE7oXkpeyJ%2BaKaXHWj%2BdLc%2F0xgb%2FBK%2FUNoaoA29sGwNHiV9fOXlEHVRIOLc1EnTTA5T05OxNu%2B%2FWTtKHP7VLND3P7i%2FftDeR7AJOV7LIM1YufhC6TcdxvufUhZTDCpsLEBjqkAXhR4UVimfqLqrkwCe6gAccNbe6Zc1Llp3EKAba4b7DS9XqF9uV0COeEOfBXn6NWSTk16yfvkxvnHm1YJDEnHHrIGm5vxxisVQevqov%2FBh4eqHoY72unBXDp4DUqFNQUp1Yg8wjp%2FF0ILfZVkgP25lXBHdDDjeu6WoLkCz0yHMaHzxGUac17of7aqtGcNPbhTLc5YlGQ%2BG%2BG9qMZu8A7LsigIa1E&X-Amz-Signature=9bef48e812a04755324d57deab765ea51f3be6132b9b81b0e84593b5f5174a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
