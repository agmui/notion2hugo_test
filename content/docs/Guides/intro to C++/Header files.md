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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK22VQPU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEscn5m7a2yOxLmJTmAvrkP%2Bg4SEaSA2Hja1ajoe1fXpAiAjN4%2B9lc1stS50PEdSuPRF2Fe%2B69xFFX636f8bPdx6jCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQGFc4n8gd0p86fx4KtwD1hIJk%2FRklTw%2Bpm0lWw%2FhyQJi6CvEMiGo4excG9xuc2BGHZCJqVI8AvjBoFIQzx1eHcoYuOrj68KaeZAMqaV4wmMjrRyJDls6mSSAG%2FPblzBhfLvT7S9dV6wr9X9qfGRVhKvRAS7Hdkzlw0NrTfBFq8yR%2ByA1qC8OzDmz2qfagFGOTt0kIrFonkFl%2BoCUjrZ%2FJBlwJ1wMW9XX0qhgUrkyUSLtmEGt8LnztaSrwUxCy4oGX39UmI%2BdTU5zcYfeYS1vpQykTHHdxLD165KLXd%2Bb6yGvSz%2BRo%2Bwudz4rqsGvKs0hb6mY8kn7KuXhfgKdJpy0mSNQDrFSLFHMQUKlweMxoMNV0npZF9GcgFzeXn9m95CDf7k9758ocb0yWnY1o4q1MrZmwq02WabVM5UDUKzonLah6BRBFZp6%2BPHPuWS7Qj%2FnNmFfGjYRhXbdEUMoMMQfZcA70n%2Bsv59RIrjtIvUVQjNjIbXs1SV8lqHctxwZ0%2FbyJP6%2BQmLfa5tHxCq%2F68O9aLrHhxydwCgVPSJEBUeLYMwIKXZirYfdmLhmWRA%2BBoLLSZrkLclQ%2BPgZQnHn1ONisfLVVQyR5KZGMwnGFEEzOKK9%2BqR2GTi5I6K%2FZbQ5g4njavwY77Ws54kFJlMw8Li8vwY6pgFoQrRV1d7T%2BgODNLSJ0LJv%2FCVIlhBOob8Hvl8YIdiAmP%2FvAClVaznYGBmHE9ssl2%2BquERyJe5bUAGiU%2FlBlyB6Hgj9AA2CEezdTGGAi3KPX1fNCj5JJSn89ZTutePuI%2BDkdQR54KF75tl61XYQ89F3mWUPmqV49Xm1KSxMvMap1ehpJYEZSLVAxI%2BmZklNbCH8dLkytsAzp%2FmkUzBCbb4BCIXrVORP&X-Amz-Signature=a44fb6dcfaefa04785200a889c98b09bd24661497f08f63bdd702afc1d26ea83&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
