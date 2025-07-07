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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4UXNDCN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICyayuDtABxmFVk1DsgD4Jk8mg0%2BxAmPKZ4WjmxGTbK1AiEApQIpwkK0dhqvBsFD1mQKAiwCpZSZ55yPmHmeOuYhGP4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDI2%2BIZSgGcnaltUbjircA8cxTYip8Ui%2BybDfo9i17UzS25J26jbS5YAwpJgtx3dMZfBUiWxjTfzpFHZ28iNluVGlWnepQiYVyT%2Ff4akHRs0ic9cuKgNtcszqR1naA9daW546mj1z%2B5Ly%2Fj4bJrMwnH74KXJy1lQEh0u%2F0UwEHgSsJx1qEnQjkeYMsnUKAxVSF7Cf1PVXNAFjhBgV6o%2BrncMBJy8omzGpLqfQMFMe%2BJy68FJ%2FXrU72QPmbKs1yH7p%2BdBpjzPERMYr2q94E06rJgRdb1kYnJzn91pjonGel%2Fk%2FlOPrghRZI1VSAx5PuObtLMhW16WD2Gk340jZgGO%2BQotK5CKDNXxgyziE%2FGEkFXVmGZcVQ52QCVV2vy5FeidOsC3aBQIxzaoq0HyABB%2BdfpyRkTOnApArdg7DDe8TKT5q0cHJbqqksjj80ZDRskXtI1ErnbdFog6mk8VWsnB9uFkNoJvcXTwsWqA6q2BNAkptec3TjHxOKWbnILw3zJwhebUVf4XbzmcfhHHv9SWGh%2FGIFmdb6yOnGwXlnYY5bQmYoQpPyQp1%2BamRuyBahDzfGOT7Fg71ZUwTJ0mB%2Bt5wJqHJSWq%2FEeOut5%2FI%2Fts8s7wrEDo9IbPzPCukYYFt8CjLUte3M39L%2Fgobdl2ZMKfJrcMGOqUBcNTdEeDU2ZxB0HTsB02EHru7rumy0eAw1T6WqHqIqcNYgFNGitpo0pbhCn1XkBhwfAabWg2faatsuCc5jMYd5YjljW9XDpfzIhz5Fru2P7RS8jgWHhsvJQG5AeZHYDuRiPZ1jayte7rvgj6oyAdiTVQzHwBJPNVbU%2Flmj%2FBlv3gNqNjuUmIx4ooLj%2FK7%2BuGa6dCj%2BX8yiTbVNc1B4nPP8rJ7SOXJ&X-Amz-Signature=19896f7429969139f0defbf2d6d4a51453e421c573e762e9fdaad2ceb85b7df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
