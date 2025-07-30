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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJE5ZPF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDm3PqZ86Bea5WHMspULHCQS%2FWDKIMG7bvMWT%2FVkKQqAAiBUA6DdkVGdVS6GxA%2Bjw5Rsoav%2Bd%2BQzJpmfQnsakwEOBCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQih34eNVLEO4xuVjKtwDpYSXB908uE8PlJ8SQZ%2B36EwQT8sNAo6fER0tAYHYeQPQbhAxWVgYgjuamZZTzNh53ORNhtZeBKS1niQNF5Kvj%2BWs6md8zr68BW0Jw7qaZtzA2oo1hVKhfZm%2FqKOxYC3g1A8WE%2BBY02U5TdiEcL%2Bh0i8ZsgYFnzdB2lD26M5SuXXBOZiRNCaPImvaQKb69%2BSncgWgEylZMBzLdzT%2BE8CX0DZyGQjDvr8OUc2ijjgXz9n08WkCFoSaw8dF5IL8dVGuuLPFKH8s92yJRGTAGbF%2B%2BhA4BPaa%2BeuAsPSsOg567uajri1kKV84lUTuFR3GPiQy57lVSeox9CEFAMlfv9VcQvI3lt4Ixmt9N4A8Nm%2FPIYOb3vQu8OrQaxz1d7hpwHFL7%2B507fA%2Fin5xAJ4J6dHoNpR05qfqO6u5AKS3aMIDQM0%2BOi8mBKDACirydEcRUEgImMQeW4eiKxsMnsUm4HOzK5VyjeBbEYiIKzacTAb2fBcooQZ8VxaWQpAe0bJfqxOTDU4md6QyDsy4VvWISpyzVxB%2BkEO%2BtdNq8HR0GYXZdP1bnDCSZJwAoCqLJ9k%2BXqkCiU%2B0GZ1hk1R0b3gfLlGQ5ZnX%2BAW5WWQyqHOeT1W7HW8RKUI0NyQ3DTzbIH4wwfCnxAY6pgEoeepKjSjcW8QkdIFg%2FJ6IyLODEmg%2FhBL11%2FRDKjojg77ObtdhGFCkqJDYGV5RWgRx1ltqrkorPch33ABmykfj%2FBjx%2Byaz0eJwcMqbbQo6VYksDpe9He%2FsQffXuSXY8dvrMjTnHyHNU9SwwljB8lNEhdHOYUhAsg1Xt80LykCzo3wNIBhG0DhIFY%2Bu8Taso1iHA7BMgP9m3wjajIBSNZRSSPUnQkFE&X-Amz-Signature=b6ae4775177ef5ef65da71f962ec33127bbaf9b62865ea6698d6a7032c69e7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
