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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQK5QBKH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCq4weLU8KqR3LjZjvRLf4HZ3Llzoev0UvZHxEoC8bb6wIgCasNVowHvkKxr84BEQrP29DGtWP4jh0fAoW98%2F%2Fz3Okq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNPqXoLUrYg6QVWiDCrcA3vHE7UxYUpE2W1Yv3JPFCZgADOY4rK8rbd26m3HvyHpwxpXigmWZEmAgxxIbS2v%2BlQfe2T6UsRR1I5ob3IvNuAXjBgFdVZy73IhaLLDWIjAcqpnuWUt1wacE98H48g3biij6Eztd%2FWAGfxo2ozbhdMUMoSzuLdFTiyQbK%2F6PT7oO%2BmF1ykqkRs1rlr0n9dWlTGo06REEoeFiSCt0oDDcMsHhJBcoL4JgHfrhXp5CEsDW%2FVBzOAos48fCXK83FFnSwZBa9tJ%2FHKTvBKYAxQeorSJJJdglVjP3B%2BWMGSSck3wnJ%2B4Q8ujcMZ3Eb5BfaKbkCqeli8SvQu7N04TsEp%2BwZLRddTwh9otwMUcrjX4M7wnk6SUaxKnaLjXO0M%2Bf%2FwcgOBvySCNDhjimxECMWWm02SBK43sqc19rEXYmglM43jaYnonrqezjUNOXHYB7VB5XHxI%2BKiZujDkw%2BvFDABZ%2BS5JOWsLTknOuwI96D2MH%2FXWaZameg09kJHUypuHdrrTc0u%2BhrcuoydQH8EqTB19cNfY2W8UxehnMvoZfyqtXBVk4jG6Szu9DRLXYiEooy8zpOR9ouYfiA0Wv8NGEtfes2%2FjFjsNAK1ST915mMSj2Z8ESwQ%2BQHL0jNjoN37LMMbUsb4GOqUBuwUtUweQeYunGa%2FunB%2BgRtvZ0O7h%2F9IwmRLMFdyAy%2BMa9Q8dC6aIl4RW%2Fe8J1fgU79IrATA0cuwAwLRpQHtZAfhsVr6sYfUwyir9Un96v62%2BL%2F%2BVH%2B%2FB3UjNPsnTSLI1zHjvuCCPjsLhn3WQY%2BxDEDQ0iNs2AcOC49X6Ad9iVEc4eOiyqTGU%2Bnf2nhXCfbT1zQ9O6OD23Qu3ikAZe1eJjvyqCjtW&X-Amz-Signature=6edee2d35011ab1549a7b1f4cb11e7f52b2a5148dd5ca3be5113f41f8fb40182&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
