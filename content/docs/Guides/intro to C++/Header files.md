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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQROG2B%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCe%2F13XgSlVO13SktBXLurJs5epcTaDi8IoC1cc9qJoMwIhAIrcvmJRaNxDKBeHwfvQKONHujxkcLrHDBXb5lOghqdCKv8DCHUQABoMNjM3NDIzMTgzODA1IgxND0r%2FnvSq%2BWw4KSoq3APQMzQBx%2BGPwRFY3I9EmZP%2BDy2Bd50s5%2BE4ok06cPsYIr7YzyIvjkInXc5RHhT6lzJst9ZMRawMMdouNA4t2%2BcCFwEkERLxEh2HqDjxV7ud6s2yoRydYQ93bmJQazcX466Jesw9Ut2ZuZMFSuUzILZvxsDlCvvjDYDJlFzhpT9U9PB7e56eBXNZj0k%2BvIcSJfseCfTa2bdB%2Bkoe2WzfIKM6cd0TuIMipucW3IKMMxWlSeWommuvzKQCwMZFZzHuNgW79vVn9BYOK6Li17sfvPoO8KzWywPQVAn2AjuUe5N45deTnPmYclmIXkIR%2F47R91E%2BaU9UwHL41Bt1lec8msd1wVdw2fm3lOpfYv3kslzA0u86h6pgGiXrEeX3q8FZfygOQp1zpNl5Fksg5yhUhHY6P39eVCQGxQJe%2BusB4RJ6IilikrJIHSMFoywCdMN%2BEYkJcir6eLVKnke0k3C%2BunNyqcCROKeE5Q2aNG%2BHf%2FwmQnVV%2BLrKLqhPrz5dB4PFUGbpJvzYcZTrfiXxzYjPVifNm3ookH5ExzhzjwEElNoB0%2F4ALe0j3V9KG5u5Z4PmH6lJNYpurwMQchUMK97pXrTIrb3hclqb%2BulZZy8yYRfrbjwwOcT5ZWoMY9hS%2FzCptZ%2B%2FBjqkAXK8ACqYejhI%2BRTIG0BVTvW1OtqfgmDCsXUlh7eV8STc0iWF9%2B0eLwM%2Bu%2FRCn1f%2B6i2hrcqmLXNxTt9fkalPIPYCkc%2B2MZ6flNAqO%2BYf1Xb0Ix1VZ61iZdDR1H7pMjIK9nV6mY98%2FVjRtNAxtt2hDZHFYs3jTpg5uM5OzM9zMiQKyoFEFbdQ7jhK7SKhYs5Azq%2BYHAsJnrGhWAfCVMsKhyW37%2Bwy&X-Amz-Signature=d338bdc023ea18af9595943c637e1d3a0c1d531307381859f52114bcffe4eb29&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
