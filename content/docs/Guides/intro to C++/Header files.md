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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSJSSTZJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIXP0to%2FqwPIxQS9EEyHUTDqmNTjRN7R%2F4Icxm%2Fv04yAiAbNZ1hybx6DXFz0tAo4Snw5KiLm3RRmgBWRWI77fy0Zir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMu4cjhT7B5qmH1L3CKtwD59wFDv%2FjndsHPFd9rwhocZ4zEsIvBVxvCode6O4IslcxtsjEQ3MghVhe0cmxcicQQICTEO7CP4aS%2FZM9Tv9%2F3AFv2n%2B70ANXtSUmf0h7sa9Kq%2BiWzXuxcLuwxC%2FHi8X0TAQb17RXmdzUCCRldCIFz0qI6782K6KcD1ksfJmNAaz87xgQxxLHr%2B7rmOWlxEa78uWgvhMlkbITOHyQOmZnsS4zSKBn3C6r4jcXSQlJAbTGrSpC7S%2FNC0hKDpI8yg6r0zfIrBfiqQvK2sHJfYIS5yakCL46qvOqaYlAJmIcV09xi8E01lBz0d1s%2FpQbB4iFc4BvDPaCCYD1IWeA%2FguU6sQ7jPgJytuNXnyTTY6aNnulbjBj2M1aL6QuANe0oWjr%2B4uJ0wRW2dYasUhpB5hAY4Pmnkfo%2B8qpn%2BRg0aYEWPDt2j2hDwdsP2jHOxYaH%2BT37HKPJLexGt5dcRjNLD4nB2Fw3BoExjXj9mzQsYJxiVNaENfejYG5ki3SBwDek9j%2BqrlzgaTWV%2BgbhwHuAd7CUvW0dkdHxLwJkx0gqI2Oa3zuJnvmba6If%2BERNEjkhQVghfjeyiPeMdrLmx6VwRuXhv9ozIWaKfvusHZM2S380V32i%2FEYG1lDsOH3fl8w2Oq6vQY6pgHpFqB3Wvyqzh%2BTbKPQNg%2FgJB1LTSJ7L1MhZPL7vrZEwm02PfopcpqFcczyAUv2xbvRsqB5oaa2%2B9pQHu5yK1rT6rlVdxfTk2eEZSfMV%2BbTcI%2F4H%2FgzapUY3efSg3ZlfGrbMIxYkyKNMINnat%2BXjuW7OPU5ZJzxC7z8blnwx6Fg%2FwmlamF%2Br5DLHJCMs2957Bc0AE5jSi7eMJzu0jeO%2BU%2Ba4WBp8H5C&X-Amz-Signature=3181a91306406ca4ad2327991aa13737dbbee23c82db0ea2d4198e6871d788dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
