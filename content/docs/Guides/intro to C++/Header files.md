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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BHU6CSV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNA9u2RS%2BpopX48GysfYMHnEGrq6u6p9cSmThWs3Xj5AIhAM59ZKjc%2FdXJboZ%2Bz6lgQGmxvtaFSSDzZdaK5QSjGrQXKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwaCxcBB0iGH4pNawq3AMcogpyDsVnTDsUh%2FpPtoVXXndfzoaF%2Bp%2FNkv6bw9DIaQbWNHfe2qvcfDWuj33Tpi13ZlRwx%2BTsceObO0Bde5mjW9Fkc1Q13sLqwgFHVPuGnNjzXPycr9ykIY8yh%2FBWV0M4Q5Wh6yO%2BoZ3XFQsuXhI7GTL1x1up6%2Fkcv6Rk23kB6oX%2B1KqxCWX%2FEAzRq1epAdM5E460BDfIyeUcDVixyFfPxljJ62e3UIMFzoPjt036Yf%2BQ%2FbaEe6J69Nzuf2HEwKs4Ap9Q1qwhne2bmkok3RLA%2FK%2Bh71iulm9XDi4Nmyvzct0lz%2Bgimbjy9mpk3nDTDuiYoxP0QMBzFc3AY3iRmr9LEd3Q056qz6QdErg%2BgLfCrfqF9kN9coAc12yqmmuTIbHXKsyYkZzZx2neMeBHlP0bs7R85fBogiKP39Ycneqj7Wue7cmCNIKooStM2eqLIAY%2BWrNkDnOPeSJBK6wGeVwnCGOvTYUMPtYZ1ys0wIeDh6SLjyldnyP%2FnYcWhKCLhCsTM8%2FhOM0IJsgPos%2BNfULgLoSiIaahVkajyjSWrUjqXIeSK3WqbZWNBAAbR6Hcnnxphrpq27i9GfMRv5x%2FaOdhASppRIOPmSkrbs9buigz4DpYRSPrVtocZcCZejCK3aTEBjqkAckQwn8EwiE52YcTexJbj3qxx73EVWz09sycUJUezBRcVfUjc1JXqF3QKIHyM0%2B5%2FZpY2NOU0WbNDfz6X4KD7Hvo9nS6LWJCgcOVySVnt%2BFpK63KEIS9b30bLrN9X9w2Lb%2B4Cl3voleuyCMBMLT%2FXEL5IJ3kUH5HIIFaLROl16DOrQLhfKAEWCxnI%2BHQK5reL1Z4rArAKustJIIxkNE7QAraJ34A&X-Amz-Signature=bda95e636263764db3d9be7dc1fe8731d03d53c7a77adf5ae0d3729452756d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
