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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFC5AXIP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDj5rwAb%2BroMyvgu4%2BPPhIjHjl4D%2FnaMIwZ2vcBhdJdtwIhAJOoKEpPnTaJGOPIw1M3osEJcw35OjxbxRS1lZsVqwn%2FKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeH%2BV0FoUhZW2BCsUq3AN6TdVNNIbW0bVmKf8jp0sdbyq20xS9tj1LYdTTzPG4puTPZ4ZIYTQsMfzKowduq5BajrGlJMdgb9duzE6jhcwqaHCjuU31hMIGIQfzRS9RgokOUu86wkXk5D6ff%2FB5y%2F0NGh3t4V6OPJDjR%2Bvd5fhchZC9ThokNTtj%2BOXYNnPRcvzx21hEUCLzjYZyF1X4xwUji6jEOz%2FeRBXuTnLYVbtURX3VsA%2BjvzHn%2FIeqLnDoKt5QV8GsF7SaENM62OXxTEl6waajIQFWVCVs4nXEVN%2FqeMda3386bpqjCRj%2FPdYxM0c0FO%2FFFJjB1OuYl0E3%2FNVZnfuMxa7AGJyEPYvmM58ugb3pFZigdCVP1gJfNotPU%2ByeqbRwE78RKp8SbleWwZ4xs554LJC57tS3Z1JhRcsLP3Ibov01kAFNlxOtb7QaOaVcRyNIrN%2BTR1TRcFrA92yXK5Lfu57ZJ1vT%2F5%2FC5ZtV0F6CLbblKjWWg5b013hOXJnBwRbBVzGiA%2BbsRRVXJd5mH%2Bc0Mve53yiOskRH7r6hi2R4sbwrHT2g0JH9gjiFGFxFpV%2BZcbuNgrekDxACjy2mbPlM4DMwFfu0ge7TmVR9eu0bD3K1ixGSUZ7SOwdc7rnl5lVhHXHl4dKWHjCdo%2B6%2FBjqkAQ%2FzwOB9zSOESHXl4qjcJUtFRYGgxAvneMHRkU0W79b6eQcMDTzPSt2cH6dmOXjnT6zw%2BOCL1NMwprsbACdXnJG62jz%2Bj3yKy3QOtmPU2FNTfNFIio8%2Ftu%2B0YerLo2ld%2F5bHMaF7998CZZyDGOSDlGx2ye%2FSIu7Nc2ilwgcf5ImU88EZE0RYDz8RG9h13vpAxqIwsj4CJgZzJtf1AMjjC2J8vEpP&X-Amz-Signature=2dc741dc19bf01cf6a69225027e2123f352deaeb69aa6bbfb8670befc2fb2528&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
