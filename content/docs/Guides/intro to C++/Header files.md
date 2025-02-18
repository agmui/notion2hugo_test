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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6NQ274O%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCFhHnzhMyH16NcagtHYGBH5QxtZBHs7m4QWruwlm3LsAIgY63ORe7gxhkyIE9Sb6nv0dSV5PMnZWfAexY6ENJsaqsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2B102wAc%2F4dAxSKlSrcAzsoByH6LQWwKH8vsPb%2BR5hTFT0iuPbDt7%2BYNtVyjkdCIOSvD7yurjJS3ipijE%2BtR6RJLuD8I9xSmJap%2F9DhW8ICQiHRh2jp1hbnxQASAR6apZQ9Gu9t9JvAw%2FoFGoZ2n%2BURbha2BvpRWFxXrO0QG8jEq%2Fmam9AGLwSUPHYv9EH%2FmOjkSKx6qW2Mo70CXbYwG8hjE6sO7jrCetl5cqoxvx%2FcCoN%2F4oL7CTs1dGqFF%2Bv3PJeW9JhJK2TUfpsB6I%2Bd5VaiaRZ0ubOEcfUwclXP4IqOKDRRAyRSa0u49Z44%2Fk%2F4ScAxp3UL50KdJPsU47bEBVgGCLBeqh9%2FHn36Mp8nyu5Fr60d9c1EF5eD%2FuhA2UA4QM8yfhy8h%2BetqGvbeLCeqDtA8z1QnUc%2FdXOtf2VHkUXVJ1asyWyfWQ%2BsFaXcxx9ZzB0E4RFGu2zfuBnYdA%2BkiMiMUKYIrb%2BXakTFCvTr0qY6aU8BVhcpFZhf4pTv63Ehq%2BYBHmbQfsPGJDnLf1BuJlu92C36lfi7WjUn20Jm6hYCtoE%2FmOVwPiKsL5Skp1BehnvFntQr1jz%2BD5DmDBtw6m%2FsfCezWV%2FOCtyFhj3OUjDw%2Fjn07gl%2B7%2FIr0yDdgtYr0rg4xYyRbpb%2Fjga4MMqy0r0GOqUBYo%2FiSEBp3Jz5%2BVJ6R2Cm8RuV1AYnJUWCJtjuV%2ButmjR%2F5R8Nwe1higw1i6xRej9iGD%2B75kMwx59cgD9WuIhXXDmWoRInEcBZ0dsM5Xq87bia27wQ5qiixGS5DncrALPe0eLKGgiAUs%2Bve4JNZijajz8cMFll%2BMSKor5q7Wrkag9eFQaYA0dMv2or12XkII6ogsEeiGVmONDYjRsDY56xFfk7KnWg&X-Amz-Signature=ae840e341e366754efcea9f35f9d68f4978240ba24b29ea4d13d002427f921c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
