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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFPP6HD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1dDmc2%2BvsAs92%2BCNoavkMpqLALkVy5RkGGHlf7l4hVAIgB5EZ5Ouxw2auutnLclD6qQC4Z0y9jLixL5IhcH91ZCQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATaJ29x3iljP7n0RSrcA0xaZsj3VanxWr3TD3kGq0GTGnLd5hX71XDWZzrv92ahOoLX54kt36FHxv3nzzEASgxN8zNPiFYnJJWg%2BmUXtJu2c1Z3n2va0DncH6IaFYNwTbqSG4M2Ca0eNB7sml%2FwbuRw3pXzCxHqUoUHiFZjK3WbCv%2Bgn%2BuRLFIHz4jgp6kNOH2nCfuVI5grzZpRmU1%2BiGMpRN%2FPpRofb6K%2F8wXzDb8Z58fIc7pQKYL5P5UEG9mYn%2FsQObchD1i%2Fb2JhUFtt6FQRa9es9cYA72InT5d2vni8vItWv%2BieQQeyMoHaoBSUUv2D632ybzmnoSXd17mcN9pBUtbKOkz2sSt4%2BRVcsJQJGwyHM32actDJW%2BlUXGTuk7bPIr5JJrNecAK3dpcOG6Ucut2uyIiV4GRKzs2VTAY5gqRv1pBw5puT0miUL%2BwP8cOcdOYm2wx%2FJgwzIenWiZgPUHR1YKm5oJrYdaphgggx%2F2%2FDLZaOdrcZ6a2z9maYUl1iGdno9J6DtPz2g6VX31ldYSaqe0K8rBjbO6DwyiVQlrvuJkMJYzVb7g%2BxKX5wm1Ed4LKQ1ThkOd9aERbahbkgVn%2FfiYe20XWcaberntOFGgXHPIWSfWjIrJAc9cfi9neGTyc6NW8mQNW9MLqttcMGOqUB0LIW1HPB0OobKq25T1vRHSszVQdpZ2wRdwN6mg7nL59%2BL3ryOgRnwrSDzm%2BToJsKhF5P2nXT6D9iwXoUh0pDKqDv7nqtZm6IH6P5CjE05CA4WkGlAT17X5geiGj6sgoJNq%2B6mA5QyaH%2BaECBT3EiQ7INgnVx6FMSTXIw%2FbJg8jVeDJd5ozEAJsxF5aNY7d9oxWt0cjJmCSfGNmAcKqwL%2FaTfzjKb&X-Amz-Signature=4f8981702e19d6897fc5170ed42d4ecb97c579c5c3cdf6a244287ae3059cec9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
