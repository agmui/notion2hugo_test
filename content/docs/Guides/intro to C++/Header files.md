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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQRXHVK%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDPDH%2FD6MDHDfBkB%2FQDgdP5%2FrdEMklUf0j354LIcHUkfAIhAMQTV9UIb4V9%2FLy921KFTvYliGk8AMllapTv76DZ6%2BAwKv8DCFMQABoMNjM3NDIzMTgzODA1IgwSYS8B8VxYogV8OCUq3AOLt1IvADytq7SVVyYzXhabWHOZHtHLw%2F7rd%2BWEyaxIvNdY%2Bumc9q6wZaKatwlxJrZrJT5Sx9CCVUnJ8oTd9rcVh19HuSZwlJ4SZ29DnmqczaA%2FrvmrE0iKO6w2rgdzt9ie4nPKgU06YKGd%2BpE42XhqTZNAKXpzz5TF0DKyC65DgruwwrK3MIWJhpoUlA5JXp90f%2FiopwE%2Ftq7GDJqOXoFlqeYm4lr%2BdELfBjfO%2F%2FkXj9Gp%2Bjug4iZ9AuTL0QkDclGwXj1W0Io2HpG7XJVWNaVtb%2FKgZdQOM7lb%2FSDAM8BAiinZHvyHNPB1GsUU37C%2BkqospIk93a0VM4B%2FikPPTbt6BochWCSXNGJOIvp6PXXkoFdNs7ClTX2Pr3qzB7doSPBzU8OEcJi6S3WEDf4FSv9pTydbElYiH8Kj7JBHKNxEOnJy3gt%2FDcrvISU0A5Y8K1e%2BHyFXIky%2BZn8NgyUhm%2B%2BdnNKxtZZl2AbjKEucgrSp25HHbhO7mUQWwfqdVQsLQlnL4vdAX0x9n7B2VTX6FQfh82vSsFJukNvtRLsA3Ve3p9j2drHPPnaRBfgG1oLdLg4ZHjCEaDKXwInveUfsHCTlWnG9TjSVVn6es%2BHV8BKKTNezRVtsfG34CyGB3zD1%2Fr3CBjqkASENjCdJ0J%2FBA3ltzKNj%2BnLL8GGJ%2BZ5HaNMmvbybWpWDf5nXcTb6Wor%2FMKXxf7T7cctJ3ZwDT1TC7%2FXXzpIOLl%2BVdxUFdnsWLZ5olWMHBwce2xd8%2B9rFKTybPDBkmhtqYc4YXLStp059cnMmTFJjNgfIZvIXQP%2BTbIALw96JR%2Ba80nv2xp7KM4ZAm%2Be%2FFMyIBfEcVJ4O2Af3pHFBRSm9mMEq%2FD3I&X-Amz-Signature=8b3556af54308d12e9b8ab3b5ed99b04e0d0358c2d9eb4968f538d8919d1b3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
