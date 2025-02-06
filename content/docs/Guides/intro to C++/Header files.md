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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH66G4TY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCzdr6YTMA4XQwJCUTt68A4heaxyYA5XQsgqfxgXce83QIhAJ3V6AT0OURwHU6kzbHllfLYQGzETdRj3NRRMbgwQNDTKv8DCF0QABoMNjM3NDIzMTgzODA1Igw98P70r3DNgS5B%2FSYq3APeUmrt1VdtxfTsF8VYn9YlZ7Bl%2B3oIOqZG2UrnHP%2B%2FtGXzw6kNHLpMUw%2BzU7DgIdTjJjX5fLjogBKAiaVVCcTUi5vdyPYiI9uM%2FuJ9zI9keYF%2BvWNVfvfuAn087L6Dq%2FCQNm7Pir2tKA0HawHpnew7tAToFgSwKKB68Lmta5iAzYpRc468LGVqusvZk4KBEbQ%2F9oEq1kDyiW%2FH9mIpmlXQHsnxRVbgRypoqzEk7pjBXHPprrx3fmNGJpLiZaibDQu4NfTPvnwY2E%2FnZ4yixnfJuMXeXtu%2FQQcQHQ%2FPfUZslNvUJeO9Jb4dxVehjRbH0oJQ5C0gH6H%2FNMV12vp5gXX%2F3vdhbkW75XHLV3SaZUALq1Y18w7vqf5OgVcemLlaaBZnqyNBZ%2FjD9wwsCYKOKlD04Z02NtzvvRWX9FRAKtkxJVRpqMq2Zt36DTuG1bJiiADeaCUxWrt9XGzln7gU8pdcuSmSza2KIGPAiWzRpUv3eAlMlGBgy%2Fc0kRmqNQLS2jtTczsCro%2BF9mtI0CRLCzBb8EO0ZSZIlXQV7AqsbZVxdwyZ2jWxEFny1CypZn0bfxg4JuSS6lWpLjn0Q4LxUzYpuCc9zoFih50n20LX2IJsQhyaT1ineCaWdGlDnTCXxpK9BjqkARcOlhI4jqQVKt%2B8LEC5AIzR969qpLjrDobYeAyUapnfaB5hHMz0i5WY8Ph18ulC%2B8oGtvoV57%2F3hktieb1Rf6soWx6KmuiAAb3Bz8BdDpul%2FGQO2okR6N9GaEj5NbBD7icB6zTK559ol0bYtucpSVvYhJoCRAOK%2FmLKL7Wm6QTjo%2FpxjUmRFVc6vijkXvPcoojDmDliRi4SPfmbEllQPjitOjQ3&X-Amz-Signature=637cc8d51aa754c0c441b9882627daf80b34d8e934e2e470c0e2944787f63fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
