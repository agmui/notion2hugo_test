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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX5M6ZI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICAjX%2BWNXx0GDXELTKEs4Ran3aeIJFlQcYi2zEUVFir%2BAiBrjiHm1P25MoJ55Rz84Tl1pZ157y7pOLUhiduOApDikiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2FcZwlQHSZslDcfAKtwDVfr6G0yR%2F5VJyeRfw%2FMyxc3%2Bu4ZxtoXRiLendeIQw7O6S5TTUMIj0Pxitid1kLXdjXf17arDC2AL%2Bif3Sj8wQq1tw3UDkkHZ8JWfAa4FhuX%2BhqLdwzI%2Fx3pb3Eqx4g3wIBdROBtz9TSbRp6NMlRwBNaW0kvSzMKkKRl426deZUDrMM90yxTGVdAdMDS95o0eRMOYm3ewoACySCWbcYOyo%2FL9Aq4JA919u31%2B07x1Fx455opElhzwL7IzbafY%2BMMqOUxF3Af1hrH%2Fx0M8MC1T6HMlVKfRDG0hJawm6cmgaXC%2BK7hT91%2FHA1e39x9eqkU8qQc8mpQXB85VmD6uUQ1D6GVSLq5Tl6rfyCvovxxnBV%2Flwus8S%2BPTsoZcT7zXzWXruCdRL66eUYmw%2FIOXdT56IDZN9HyvexV%2FFEJRZQH%2F0DPDOw5aWLisYSO5uUvUr4A4wX3qHEZT8EI7IFRpCj2AS2G5BLPlijpchgKz399AtgZ3R6Lfaq8E4S6ak2IdEYQp3yAbxZxSxXYimyhCZBBNYtnBEyN5w4qCZJMDoVta1E2T1WyvPb%2FRQ2i2SouXvxTin4wORxy8jTREc0yeox2mFQ0xIpp5CVNewYECLhgGjIzKVdT4a4CLSHNhtRgw2pjAvgY6pgGdzf3dmm4lzSEfjpaOqH3gAO5F1LXLpdD9LNCvfuE0yDVeDWajN07Hn4prDKIJu2p1860v2uquueqo1uh1mzGomuJBCIoASSZohAj%2BG33WvROGjxDYvwxSfWgB%2FmjgUgnGHyYL0tiZciTmHcI3XBPZb%2BxDShPNg%2BdYjdRmh9nZYP9Xj0G3Vmqkze1zPLbVe2dLR0ZYFyCSoS%2FNouHuSwtfDrOcvzbh&X-Amz-Signature=d4dcb3fcbcbb268caef62b32288eaaf18829fbe3d596da555807f07124d7061f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
