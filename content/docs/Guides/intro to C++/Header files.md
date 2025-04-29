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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JN4NA3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClFMkNGI43EBNkL4iKYPu8EITK3ZMl5wXQZwu01Rh8yQIgX6LVEKoW2e%2FbUap2Ku4JrblbplIZzctdE8SvaEx6i1wqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx7LJqxsEzYIl4KTyrcA4gu8SZZs7yGs24K%2BfIN1sS03ISYLzwaJCxyewBzGd%2B8fuE5Duje%2Bd3U6VfkQTQD8Vjwa%2BdrcR2UaaTpOaL1Q34z2C4NN53yOPfs3vcGMX4r%2FFfq21BHzgphapRxWv%2Bjc1dz%2FVNhvqt6SecHdsYOSMMltBsbubUDA4MOchZF34Y6r%2B5LyeobWBjJXXfTUhjawOruNeyrMwu5Ek2s0eGSk11HvPiNkYfQmQBFIpW81qS0E3mQ%2BMVle6qeX9b53Rsdc3q0FESJCuTP7EMnToP0fXDLblLNygS482L7c9pdL4CCHrVXzqaO9yt2EbOP6GmsR7HiuHDs%2Byjd91gSRBBZjalMOvCLEZJVc8ee%2BU2P3Y3BpFkarmFYGocG%2FlKuSJKYUVmpEwe9Orrio5ho%2B8VPQnF5O0qfYUmZ2RAFPjWIXJxdMjZ4W1Lr4Olvk0v4QYX5l6aiCxMJl88%2Ffcvffdk9qbej1C8Uf56LehnK%2BUGesBQmnNRvZ%2Bng%2Ft%2F9L%2Bi586gknNWBbk5tjTevzLdzlnhVEWkZhYW6aVjCb%2FFR6GedIJgZkcWLyB%2FcOIN53be7fp7bk429HtUFgY7a5h01qgKAxe849xWELBa2JjYpa4bnFjWYbYQCE%2F6ZK7nyMpZPMNTaw8AGOqUB15c1byuliLN2nKf2peDM85Ww7FreyfsA9TOQrdHVo8zyB%2BCt%2Fbn48sHVzPUiP9hQAoBnj%2BGaA%2FnL3lqD2%2FRcnWdDsZj4JBtznhZTumChLBGk%2BY6dMZd%2FUceSwYAjgS9OqbmAzwSrnBoestL5142XhlI3FRILHte0v3oJchTEHsXBXdXzw%2BJd8NeacVINO%2BR9VXXW0XdxOus5IvMRe%2FhwQzwDjQVZ&X-Amz-Signature=0ebc4bad70116189abe755a0b9b7bf6e56a47ab547e60acd7e07af8676d473e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
