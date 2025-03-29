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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJQFOSI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAbyj5O8GPclmSczoKaY%2BhwigZXMj9IS0s45X10fSE5lAiAmHPs9rDdIqc5bEC9GSF1sIN4nbZ8DiJBjOQaDww1uFyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2RHupTSnaTMEhhGwKtwDfN6ivp80YeahRJIqILcACMJPK7W8E%2B7orb%2FXjeenpcTKwqPgQ%2BhZTBG0Q7SJu2VCt6U05S6xJa2t2aJE31eDDzvyG664EMSk8uvq%2BMhfeCyks3Lu5PcuX9QYabZW%2FI%2Fsupc9%2F%2F3ZSAwzmtNusu5crMcxq9GRJWYgZ76hhZbAT%2FPwoUginPYqd6mbFDgQ9TxhbNls6mO7DzvoIK7Ca%2F1NImjCeleH3DNXXclKrckXZSPEVJC3gdp41BJQz2%2BcDsT%2Fc52LKWsMisUgum7h6m6cp95UQkRQdISaD8iWgZXnrFLjY1H7JFLFd%2BrA6TR1DW4TPWKJHQ%2B2CGQbW%2BefBDXU4J99WuozES0pS0RplqzEgBawYlRp%2FB1EOce6%2BCqTblDoNnSxZJsDq%2BTikxdjEUP8QGp5aMUxreVINeqB3JWP%2BbgdPH%2F98Em1gTcmVuZQVCMvzw4Eph2TjQ96m6tLa7%2B%2BTg6y2FWM%2FDmOJC8iMQUzNxC50FLHGxAP%2BCHhZr6lkka1n5iPYoQvbbjr0RSz2rdk4I5PNrAIJwHUNVPs28Uk29nOq8TVwArinDRnuFkWV0tGhL1T%2FPI%2F%2Figs%2FMFEZ63iVXXtDPwoBsjMC5D0UNDbOV2AHL3fNdSn09m4VwUwqcWevwY6pgE9pzS7tRuqQJkgokubWt97cWfnHg0KCME33WpZ5SH3sMswMMJ1AFyb83JlC0QjMcG9ykFLK5KrhZfnf%2FG%2B7W1Fd2ndvZtW2zl%2FoZ1AFqQsSLfsBG3hN7MVf%2BlI5eBPNS9vH%2Fbz1Q4czPaPe1dvBFdbbNyzyp3okuupPmVZYJ74Fh6StA%2BH9AKB9oXwJPx2RVBmSaehFd9o3i2x8okGsSTA4JECizpg&X-Amz-Signature=df1129a338a93d92c82373715550e5f82f417b776e13d78af9e7abd35bfdcd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
