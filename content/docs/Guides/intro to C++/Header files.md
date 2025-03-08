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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BHMU52%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDBe8cNJ%2FhZdul2pzU77S5jhouad74XG57wPG2LrbfgxAIhALFJUWPQbyFyVOvJleHhnFmApC0uh0s%2BmvbSPg7aYkJwKv8DCFYQABoMNjM3NDIzMTgzODA1IgzzpF41FYIP2%2BZPPCoq3AMGtpxULA36c0BqXQmCKPnOr%2F25FNPY26kNumC5153dmlTIqJxkxlIPTpD3KjUu%2B3H532ugUHfPZCwRtGQ7uGkd1a8ZiUsSrZFcvOeVufXfNe%2BB%2BFxo03eRskETL6PhXzTSUGCFEfDrCWKYznDnRIj6PPNeRs0dyMsBuRERWJQVUYmdlW29a5buPxTdsuphkTHHu4jB5DnKME1AG6EYpm2mi%2FGElcZ2x5KWRE7%2FKKYnMgOatQKfs2PceF%2B%2Bvabio%2FZPRrwn%2Fgnis8utsezx6TFy7Ukv61S%2BHcL5XCQCPtZndeIiCyABiOeWElEz8zav5UcswSwBWLfHo1fkHjC5tQdSi3v5Bp9JkmJxMDsYi%2BWuVkPQdhr58CFOVgPXrRw6ezrBMpAAuPhNShxk7tlAqrVQE1HAt92TvBX8EG6Y3b5Kurf9OzH1HFSeQl0B05mf7JcIK9DSHbex5nq80930pwwbse5tnU9%2BGSBybVI%2BcaRO8Ncr1o6fFkM2dHWqbtGmdFh%2B8L4T7uSV4LUsYqT3b8d%2BKRGMjvAmEvzsADV%2BNUG8mhMSgMFvOYk2L9VGeKW4MKaoCzIvCaWlP1nQvs0OEH6RAqaVTSrTyQRCE7N8VA5YnmyNJbNnDEUxmp6n4DC6nq%2B%2BBjqkAax9h9paS4HBKURPuunWsAja1KXuxt7rFKu2aU1R6JPRUBZAH7rhxAgpvbVzro8zsvnfRXoaSBUfFkcdX5sqL0sORqR5KVLgt8MYby9aKUOrd27GUDjmSyWfPqZ%2FYW3aWZaT3LIIvk1uD1DJJ26R9kTBypZcAoQ3Sb8lIE8DaEhtB6LJunIGTRfBm9lcmRkn51AY6KIWDD1CIooVc841Q%2FkR4bfQ&X-Amz-Signature=8b17c3f73c971f397e60af35478056124aa8d0d6bd4216ea1387c1440c8014d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
