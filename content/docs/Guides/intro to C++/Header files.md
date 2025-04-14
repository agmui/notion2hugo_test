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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNFYT3B2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvPtqjdWwOo3BHd0BQ4ZLNe3Z%2B9c8lOF%2FpmCOHkc%2BW%2FAIhAJJCLIftu9wotQMtsz8QHKw2Sx3EFtejZ7NvJZYHSjfUKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG6RIXeGJUKssW85gq3AMYwP6VQ0VMcObNvPr%2BxSZTF6%2F6zrilxhkuou5SnrYLXz0JRHiFVCJznOG8AYtxXlQjuQo%2B%2FyIS87PVPyA9rHSQvmILFJYUmNZJxvuePM6vGC7Rrz%2FSj1Tv6GneDg8Lq5kw1a7ja4X1uyKnI1vjlNfaPF9EmBEIzSh66Duyz8ipKgd2P9RZ6ylgQAsMe%2FQaWic%2BX3Pkxk5MEDhhrHZs49yLnGo%2BstOvIAUbujCYhgJi%2ByxgoyV6Znj8fO3rH0SkY%2Bs%2Ftb7yPjIE8pZygBet0tmrBAYK3eqFis3GKRuuIkehsfMne%2Bl4seP1hNXQc9Pr1m%2F%2B8I21ZDu0vieGKobJ7%2BuFNtmInFRhLctLlNyhRy9nvg24TYc3AVLiNy4v65gOM1urtrRc%2BcKoBDVjatHmDhLXn7e2j0Q2TilZSJO%2FqChyUMOi4r1oHx2O3eb3Wp4dyUJTmDR2tzemk49aUeK9suaGE23xLBsfPWpw5hO4HLhwiJfUZ73EEupbPBInSAYIoxRUMJWpvp0Pe01m2KqLsFTwJprCn71s9ytyewGshn1tEaGwG7qIsmCpe4Mv0G%2FSEU5qyftZA4rqRvzsExITfjU2sUdVLlFsVPLdq81AuuTt2fXTV%2FveBtL1dcipRjC8kPK%2FBjqkAcKGZoD0h8XTZxAkZ182LcvzpXsUBI7%2Fjd0YViQY%2BqisWXJCU0Zny1eXkIZE72kwjgxpeQpHZtUtMCUQPtAXMYoh61WvFsJDo2mpsfkWTxW9YaS5OhfJhfnIpcFHl0vjKY%2FFlgjJtRplh0ylvmdpYYc%2BHMs06nDWKD6tdGDwNfJZSTtIgnZ3JJG7B7zuKdUiG63ouoUSZfAUDA23viRuYBbXjVLJ&X-Amz-Signature=0ad80689010eddf2a14de0d4c60dab65a9295682bf3d5dc2dde7d19def20463e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
