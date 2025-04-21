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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RJ2DRA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD2j3jipr360xrF2ApPcUiFmvQaBWpEMLFF0CQaJZkSAAIhAPXexHYFT7qOTs2ZfoH7auAtneGlb%2BEiIbeItK7NuqYmKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt8L%2FoBDCht2UpuCoq3AOr8tqCELCsJRqk6J8pQ3411V4hLEMbGJzBnIISclAf%2BsL7KTS6pNEVFYMjBozSXrx0biY91h6aEYObX8aKSVJrwoEyf2WGYP3jzYF19H7fR1JcwIedt0FpHvU8cI1jQsi3dB55D%2B3ZlAL9Js81J3XARxhZ%2BzcwJJGbfV6auliGeJnerAwsRUhUr8DeV9K6A9cGeTAo9nsajMEiv1F3PDmG2SZ8KARoBAXEiauKinA%2FNqMA5LQH%2FtW0DS5RZzl1yo6KU3eK2%2FFSad1wWNkTKeCmNqCMhhbN5rcfXyQsNfRi5QEldVREr7CCMuJdHHK04wFVxvCgVAQQrsWgRKtVpeuGQYJCjWIokmHdq4s8AhXx3Bc0EaLaqf9hS94OQNGhpuHw7XbtMTxtanl77Iyt6MRm3WBXVfnXoy02Y4bOgUpuBQk5hDi07ZuTKDfxx12FcG2krUdLFHDao8zOJdVU2rUc3E92DANN1myZrQbetj%2B9G3MzyaJlrHil8%2BaIpUiv5Eouufso5CutGQxMH99SPqx77R%2FHyMHTGJeQ%2B1XlCMEDtYIwQlvPIrif%2Fyo%2FaN6Vg2f%2BRZ7bVyOXqvbqPPDOORBw8x6Rx5JFCJMrCk6sTP1fp42cuySdWIoSnZf6bDDF25XABjqkAaqN3T0wq5SCgMgX67XU%2Fpm6F0vdVrTnK9X3Yph0Tc0Ce2JPLiVipCvlUAfVEDig4%2F%2BJwoqeNIvhddOlzhp%2BkgPYB1Fdeq%2B7INK74FheyNrEAI6GRgJnPKhEaKinkeA55wY43TkxAY%2FHC8EyiKfDUVRzDR%2F3qn2hMkjc7HKfZldOQ8qoJpg3zBW%2BwHGo6fxXA58Ov1Ku1Dx16MTMv8K5esjDo4YG&X-Amz-Signature=74d0a3f9acba6556766d1b0668a11a6a3fb0439e2f61b66f9a72433c12a24722&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
