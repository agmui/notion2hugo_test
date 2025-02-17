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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCOVSIW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGViXoE%2BFHaPs7C6GEs25HP%2BfQ%2Bne2mCNl6fSrx37KpgIhAK3LBUP16sOLD4kKDa8MIYp%2FczT%2B7TKE2rBRdRCL5w5GKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYTcQByONUhOUz7YYq3AN5SIRqudNxq99ubyOnLWX5lXdRsuCx7Uu%2Fmy4JWEsp24LzPdGN%2B5g9Z%2FfAUwr4khqhS72GZCleD%2FRbXPMNtrAwJQZVFHUzJ9uVMqVOTShYbC3p3M%2FkOXQEk0b8mdLIiEdwk5ZGWqAcjnD5oUckbwIGd%2FetGauZQmmRnu0OrjpAe%2BjbiT0%2BbfD7Q3cUOLlSglyMNGPcbJ6b7Bpaf75M8TBQRSAIbSM75saKLrhMknbW4zMegjEqYXg1IkwFM9lxOkj7Y38Y8mqme3VHm%2Bov1rw5LTPk0vCzlIwJQa1ntXyKDyThigaCjGYaf6Y2YUw1V5MCUDhPh0fVLWJRInokq0uNQvGihhifA%2BSaBCVU6ia6riLcBv22VyiCcH3KhWpEhVcKLn6ZNj179dawUDx%2BeIttR7bJthgH3rvS6kuxED6%2B3z0j4CS2hhFZcZDXBYPXrHP8hn%2FjOL6kAVVozj1wcxFhisqLo2qfEhHFdo5W%2F7e%2BFiTCDd%2BhlqYQ4CEUVNID7tCHlXvAKM6aMolQcJU07XQUw527O7tFNKtq6FWafq3TT2EBhpwKav75ePdHwjmV3Y9hSFN7r5H4JmPjJ5bvLI8TksGinnYRWhLzxqFSNBceoPpDA0sEMkGILGKXLjCZvsy9BjqkAYT5iw5r7ynNnfy0Wf5u9SKd35zH7mXUE7bjYKMRVlDfNLLenfJzeZ%2F3k305PHc%2F2OlwSpPgHMUKd5UP8UXMYKBea9YOqMoVodC22hOSwY8Xz%2FgN7mkeGeUS%2FUNJzjWBHx8%2BM26%2FoMPGlR08zGoRlckS3ltYPfKTDjajzKgoGAFCaboFA7RTLcidvIovS7nm3ROgK2TeldeLYdJYNGgETMZ%2Bt6p4&X-Amz-Signature=1f02d6c0edf64fca7415561be5d4bd79f12b6c0cbb2f50c8c1b2b3bfd5f3bdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
