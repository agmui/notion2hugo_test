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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEN35YF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDY0u2tUKxYg61AVz6vHL2wuSUw5nWdTzvxVpMLPzJkuQIhAP9hR%2BDyCqW1NpimFYH5fA9oXBwlgoyxA6%2BQlajljrwFKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy66I0696kaLVdkyx4q3APf6I8s8GWLmLtjfoRRxL%2B6RcF4rdURtANj1VnbMDIG2%2BLW5vnSlG8T2RlnMAceBy4owMuxFIu86by08LnjRWWA6mAHADufFWV376GI26QFG9OmqTX73fVypiJAC7ifemCL7XO2LZHWMh8PJeKaw%2Fs6zoL%2FHBrE4%2B%2FFDVCwoz5h6Oh5VUe7Ywts1XddBxpNVXVfnnF1V1S4ceRFxRpODXVEyZrioDW77syfzb9kuzS77dIx%2Bd%2BES4si795MHtelR27wZlyWHCgKbrBuU8laGhsyFv5zkec7twEMIyOc3fi6rFExN1xEi6ww9TYYS3gIT%2Ff1%2BTotd9SDXEMKLw7qYQyiPfsVWUEL4dZYib%2BrwtC68eW6Jy8R1SnWZ7aqBkt3y5Iq6FQynqeTfpY3wXv5obk2dI%2FlTduWT8x%2FQ9OuafodocSkqTAwH1QPlXfbpQujm8Z%2BsoH236T7Fj8TEW2YyoSvqUjz6V0QiG2idU8Ega%2FqWYEX1QcMARupMwPhutHCqS4naYgcykQTOf9B23blCIitUsovptzyJu9I%2BJYROVYDKE6FuVlXnZHQB9KyDghMyyn%2FxkGgtNZ7HPE9KL3d9aQGuAWsrvfcqnv%2BKxVLPA1teW5KSpegv95E99KlHjDA7t%2B%2FBjqkAb1kYb1Qq5Xcoj9MlFCc7LLs%2Bjn8DQLHw3Cw3o%2BmvafhgrXO%2FVPDiWuwhIwRm%2BmjbWs1ap3nGlqchwEchDV3gzhLqYyAruGkAuCfdHFffkowASOnUzeZDQmH5R9yaSyExLj1ZSifALj7GZh5rvb%2FBZaiuUfhT9UNkf2D1G7znVQ8oTE2aymP6dXGM%2BIK1rg4hwR2LMSR0siOeakN6vsiMgV37Cpu&X-Amz-Signature=3842cea77cfd693d3ff84c3e409ca9bc073336de4ba0036b83bdc75efabf626f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
