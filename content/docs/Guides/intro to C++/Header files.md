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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYG3AKD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD66pv%2B20%2BDbg7hY%2FIH%2BPM5lixSSl5oy1QunXwcFpjZEAIhAJz%2FsclLl8Acjiff9hWQox0kWYCIBV4tiP2S5nuLvbZ2Kv8DCHYQABoMNjM3NDIzMTgzODA1Igxthf6LVNWwaA1vE4Uq3AMNVtF0ICKumNFsD6pLC0EVhgPHd9fFohgqiWf6OoouE4yaV0XFi4diBo8xetVeJnUY7e9wRaYZaW3WD1V25hDIgZD92r0bWY8qP%2BZSEld5uGsKQUrcP1u%2BooTJQ3Ar13T4%2FcY%2FBfMvV0FhKomdmV%2FR0gt4cWx%2BEgevrQW72tzwH%2F9agzU08o0pZSnrWpUbKog70XhNiTTR4j6iI4GWFtE5e%2Fj5XyeiNvs4Y55lcb2eAvqxgPQGZJRVsS6x3Nu%2BvpSNMpe7i2rohB2QnaekLdrycF9vTpoxvR%2BFBHsePRujy7rtMrl7s8bwV9k8jVlpGGW0bgCbzHNmjZxMWXurp5buZ3xxcbsgiBpfOXlcqWvLzMXxir%2F3QRjfd1WNIrV5CUsZiZ8N3FsfQeSAxroscosjSM4Zi8cqLxwXzppna96YUQECP8OLna847lVgR52MuBI%2BGah1EvWrj957AxSI7nsIMhKNn%2BKLH17hd%2FcstE5BWPyzsAFrFhm1OvdnWdKogrxbepWLUKl5ZFwty5loWy5V%2FasKEecvGipQKaHpMU0XYucgAjFG%2FaZyoRTzY9HQ3unv5L88hOmscrhSrTOEaLW7Xr%2Bgz50Ei7VE3%2F6Ah0JYccXMpkNjfH%2Fk0FuzvDDZpvrCBjqkARwE2sADh1iSA6fTryRm18BIR9Hu8wKo787pyhDVT7PWjuRs7XIwV5fzkVc9ksHhZh7zA2VfI%2B3O3IU2QpmsVvbWHgtxpEZlKyw221HaSNQXedC9Kc6p6DzpSAAqTnEVeb2FTHkk%2BaydpFDV5KKcr2wwhA6Tv9gcfcKbpYmrMHS892VY1Z1UNXQlF0qMvQiFOXypC74ru%2B9MvgUUkIK3F5PaWBxx&X-Amz-Signature=df3cc0dd2097395207cd7f6da1c55177d705418efa30c378e352c2df6ce520e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
