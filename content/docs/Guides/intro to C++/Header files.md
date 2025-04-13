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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3JIJYU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCkdavqvWiA3ze5LetQVkEjek2bcanOdreD7patupeFQgIhAPQOOJs26ZvaYVFxY4K4L5sAqzpY2%2FN8ozQMEAr9d2c4KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx619ntyDyufQr8P0q3AOk9FVgos8BTN6dcGH7kgeNL2YFAtS0FVaFWi27HnukPx8bsjMCa57ynb%2BLD18schNzHhwrUhTgE2m3v2Nx6Eq3gRIrpVOnEcclNQ9mKar5mPVnY%2BZDs5JAu1XP6byn4SYl29yM4ILJglAwH5prXhmu9BBJHu%2ByJBh5xmJsUpjq29a6QkiwpYaDNekt4mGFG4R3UwGwQEIgAHhCZFVEFhUNrj1FD0Gob%2F3slZj4oadjxs88SmIh%2BveaOlHLlFXl2kiUSNMQuhEsBQzf%2BjkA8vTsnDYXIHaG6DI0feV2FqE297i21cEuTCp3Nc19hr5tdfM%2BO%2Bp9Ynw1a%2BqLEkc0V9Dh1Kp%2FdwA8WFIJXdXub8Y6hF2GQefPMMUuEHbh%2BkI5O6wF5RPuv%2FS7qlk93l%2F2u2aypwyH8xX3vNLTaCy%2FWPkXfFjUKrSDK6JfigxvqcnJjtVHBO9eA6OAv5fI%2BZ6TkRNCzdI4wjdnAow4gCgSnokuuW8pttwb1tKKT4Eb027Qo6OviUiFe9hf39xIDglIuvoClZNplfRu2Rgfdpg9HcxOr8gF%2FNnbA%2FsQsm%2F0Lhe0%2F%2BnXS5yr%2BLk93uPHDGHQ4ERIbI%2FX9rS2Uc%2BDvuuNu3ZKL7d004Kovgqa33TU8jDkr%2FC%2FBjqkAREYM%2FmooWuAe8Ih%2Ba9FMaFG4EWLsUvqNIaxRok3BKZlLyAkt%2B1pTxsV6OYw5YZz0yqn7zA%2FcQ%2BO8taoN%2FzE3EIQxZwk0bb%2BKFoF3shd0Cw95TRww6BnM5751qsnFspjacfjbDqfphJh1Cg9SwqaTTCP8pesKzVAptXlSiXBzWibkbdqrnTDDF3jN9VK3v0cGZ2tsyDBBZ8SEhROmQZRNR2mRwvc&X-Amz-Signature=9a8d94c339bfec60c625c63cf730023691f01e3d660d30b4d236b3ae3711476d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
