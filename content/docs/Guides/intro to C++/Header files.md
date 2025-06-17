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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637WD45YC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6jzDo1ZFLCHK38Nd9WzHyesJpga6kDuqnq%2B3p6SiNKAiB%2FjMN92Q%2BVMWVMugap0rx54Lai2DiLe0TvuVQbWA2%2FFir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMjZ9Ibjlne99am8TaKtwDjzgkjiXt%2FSUvsy1TQYExZ4qhOUclMKCnSHes4st2RHq%2F1OVyuNj8f0kjveTEaZkdm8HnkxqBUCecE5YzOHU1U8mPQFcg2qX5xahsFEJdc8JS%2BmzmMzzaxWq57n1Bwo3j2ndJTRJQmvM2wH5CIiYlClAjxSzPfDKfbAEYHpMtQRfY2jskJxR88f5e%2B3XNFzHVSCuYGm1%2BL0QtKcbZ6CkYEe%2F0rKlS1hO5no2FIzZ4s8Opk47SVmoxkByHxs%2BLoaFVMNY9%2FM6%2F5SLhY1TQLGhfzPumSvVdXUI7rcMmhamO1TkIwBJzQhr1bhA5FzGwSJgyGbs87gCtwq4XZCqQ1rzAnxQK%2Fxn4DOmmmS4EQhNjUXOxCzynXR1T%2ByT3VeFG5lK6S0wwK%2BqjkijQnT7rMLUvwr7WBG6qdDCxJVWY3oksOA8tbG5rMxfQ4Rbrc%2FsIxfVMYRmxeu7cZwEzxT7cDo1FWIatL7s68Aeox4PtO%2Fdyojd8PLaEA4NmvOyNwgf17%2FhsaMqf3Jo7XGsRb4EjN21aUi%2FnDcA7GmfOCqh64uaPDfdxUFb8v2oZQzRZBkDdvqBRffnI6N7oPcWye8lipRIxaItPGs70zEa%2BX9wP1Z7V1XCrhXbKJlNEOob%2BX78wrO7EwgY6pgHqaf2ohgBStmQF8byAFEWQoZDkijBNzQqLYfMfIN4RMKpEXmCXjhw3L%2FbYV0xK4HhzTHnCHPDthcRxUMRuvqSql3BafDPbM2CVnGwqjFI58TXYAAEgNRcu8N1H%2BQypBqAdYAje6DEgt2KuJy7f0K%2FlIQSFaMOUGx2F%2B4Fte1N2gwZkFYubGwucJDw7CKLD9L5lQkpGiJMSR2NkvJ6FB1qyfj7h9MIh&X-Amz-Signature=73e2352c2be5d0acac64203836e61cc4cb91de4f2c28eceb2ea68ea932a7d2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
