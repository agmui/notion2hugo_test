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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5WBRME%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnFZs84XTIildzLkOdoKgUXGeUNjmGwYU8%2FJn7G5cqxgIgaiZlriu5Snk9ArD365k4J%2B9iVVzkTis9maauQEEhOJwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGgXJ3OJ%2F%2F7LJbx%2FSSrcAxhOuj66EKU1xgaZsrsHYfH5WUtcs5YUiBc5iOvZ96k6lRI6nZ8U8%2BOY2zQnDAqXgOamcVVgHXHJYsgybellAjgHmUhAz0JvQuCGKxjl5zLWEjJ809QTKT5DEK8FCPqH7XWisvxgxD6FsLxczdS26yQxM%2BBSFhehhGNy8XumP5QzMi2BpfmKYWFALaqxtiiJXztsBR7RCkA4F62jeNJEaUpQP2195tAc2ax7AfrGQEtK71a7ruRExNQQbBgKFPpBCVsVXINSJUkktmaQPKx2TnTKWlQiW4dsMNtivvetvtjjoh1erveIbD9Q%2FJGh1iZ6sOZ7SZmBwsr3ttnu1Zx0A1PZrPHyf8dReI16M5SqgrwQlN%2B0dps0vtqxVxdJx3diGs%2BZb5sJA5It5LcOAL6I2W0Y%2Bej7Os7EcI6ZvVY8jPK1i8gOPf3g3%2F9BCgdauc6wCgjZDSn2tKzd6zWoC2Ho9TIQk01VQcirpi0%2BeZDHQwpwCn0h2Zm1fUVo0GYrmhwMQEtRAPRGNk8CKkZrvMjlmVmNX3Y14ivLLUvFiOe%2BxPf9ZaAsnvsZKdZt0Xi3UbRj0BHWJieFAOr5dBJJEjq%2FcxyzVMjqOuWscN%2Bv6oltm0GI%2BWY1DmoMaq6oLCrYMPbGgcAGOqUBgmTTKFjz%2FHC3MFKKeDKh46Kn1iaWZ9u9Ojw%2F9fLPJtjG%2B%2FEqmRstArmwPu9fOylll%2B3zeIJLB2ictOKAJiTVRle8jpr6OktgPSTC8uHRW%2FLdBqNvnjTRoIag%2FKzgqOCjxGlO4T3%2BDmndd2M99gj2V0TGYoiAkV00Il36hi6CJev8xBFztiz8eNbt73lTPIunz0ZGSuh9uA8yYWpwOB015QVLefoz&X-Amz-Signature=eb28ea7cfe53a11653727d2c40326ba04a9c6d44605e1c177edcf7f77958d9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
