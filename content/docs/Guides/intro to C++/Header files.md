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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJX2G5KW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpUd4SGgmbkxfm3l6PcxA%2B3IiN%2BfPJwPRyqbUBLS6VmAiBpaoTejdF%2FKixih08AVN7RmeTU0747iQEGPFu7Ap2ArSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76FOTEPsXwlvU9qOKtwDfN13BFg4nihkg6OQ7NRlpDrgeuQB4sI5b2l3Xieqhfw8MtH7CU67Codhyt7VF6lHfWIGDqBMSiFXvvyTYk9Z4WQR9AM35oL%2BKWvyWIAtmMWPo%2F057zGPsl24tqFu63PUtyyKfpno9SbkdJJBZfW7r%2BOJm6aJ%2B43VhsKYZSG2w%2F5mt7Zllnz%2F3AxeeS34WcbbOHPsZh%2BfAKUZAnLO8HPRCtjklCt3aFJxMSSj78RDKvyZV3klsx6EfgDltXNg0gPcwQVCcQL3JHhVrN4ewwTv9MLStBxTAqW%2FyhunqqbsPzu6H2MKK5%2BWe97Pb6ZV9YR%2B0WaEyMPA7%2FWAS%2Bwm3Rtvc0i94dMXcU7jIAATVvCghqQL9fildUkFevel5%2FVTCq6qz0X0sB1OwjqKe6xBY6ubjsZ1rMG2U2T%2Bxa7D5z9viyaJ90y95x9aRrXVrOqV2KGOf4A1pJTzEGjKku1BG%2B1YHeO%2FNhSxT%2BL4m6ygA9MInYzPa4%2FQpbXphhbJa1WhwKLzLUCa0RDKmU5Ce4Y%2BP2dL95pVJAiR0A06lk5iwvgrGoD27d0jJTEDCKJza4m3Jjhju1lHJaGOH0QGssFmtk6SWHJncSX0hCHSZxj1AmsZkdVApTs%2B4M3fquYm8vQw5PacvgY6pgH2NBbUm5AFP%2BL0ZDz2iNA0r0VpYCff%2B1pKasPqxPTkqwsdIUkniiUL2ElkCTPvy2mAvxs3hp93KHTTZhM7P9AoI6ShqypQjR%2BZ%2BPptXqqJ9Z7zYyTQUrWi4PrmYwR%2B59VtGpCpoeG4Is58%2Fe6p6%2B5Q8c7Rxc8QsY9tVxrf4G8Mp8c%2BVHCDjmfusWV6qyKB4fBmgf00xW0l%2FWM9vO5GPignXO%2F85Lt6&X-Amz-Signature=3901d9cdbce8f1d094a4df5f9b2928cffc53896ce41407ceac0cd503401273dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
