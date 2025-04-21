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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCD6D5HS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDlG3LWXehKtudLqE9UwGUqU4LG44XVwrpVC%2FUlSQhjgIgZrIjghmBtmpEkgwYRBpAj9dMNLUAS4ErMxWbodzGN2wqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbc1nQgR6v%2FTCHT%2ByrcA9MG%2Fib1lS4o26RZtwAMnZFlK%2FTnesgxbxBihDgW3izcpNQtRJWl3OHZhOQxO2GtP20POSNlD86X3S1xARUqKup1cD0VnGnUezD6HwKzVkyQ7HvI2fxMwHhxPjaPxo4gdSpYKgdPtclOHwzILiXvRO%2F4aPJ1Ry2IjQt9GrOxLjjaEKf6OLYMJX1Df7MvpDpmXNkXekS02TqT%2BVhb%2BlZtmtT%2BUQeA1vamyOuVRE4TBsO0mjdEaBjx5LIO6bt3Ua16u6FJcZDR%2FvWCnwBRAN7geVabGb1vEgYKuY0dURoAznstabtQd9%2FAftuhGuqu5u8yxwX8DTDYvy5yKMsi17dj%2FnQm5rrxxCMFFROFCjk46YG5Ho%2B99s9Z5na8lRVBBDJKXqVFq0akhl4oSjkLt2U37%2FZxKKD42bHXn7dH6P56gzigTqKu%2BtHh%2FTzYbKe9tO8RN1Q8FSkrZu0ipVJZcxOBYvjN%2BKq06HvHAp9JF2WJ3D6Kfqb1VUs%2B70jC4eh1n79NtXDSLsKU9rFPnHT3ObFwWWvdCVvpqCvqL4DPmq7QDXZGHtGTOpXNF8jAsG6tpd6IFqj21x4i91pAuBSKr6G44EpfbBpeVQ0aVXc7rsCnJXEjLEKAh37zxYkwJJgAMPnymcAGOqUBc5ebYGJlX6XKn5PwqFD%2FCslcXdAddlZQNjlI%2FIojO0hnWBlHdH4ybrt%2B9C9OwyU%2B8ypebZLEOTm%2B9vpBnac39CBwGRtJroLJ8GUfplXkmPIeMKYYkoEqOPP0bilZJRqe6A8MLU8HhTSOYLLT2R1bIGeO%2F5lZ6i1KjsEBxKENYme%2FdKTfmK0IAYIMjs11BHwKylY7Q56k728Wczt41we0gdz7ubb4&X-Amz-Signature=1696115662a71b48bb2b8c854fc4ef42e878baeb4c120b966d854d92acba1776&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
