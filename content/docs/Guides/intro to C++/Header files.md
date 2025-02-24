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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5HGJIV3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGathPAfRQofsSyUcczr3LVCJUfDGhEEyOYKGuQcbC4HAiB75tcZcBFwZpuLk0YGwpzQhmEPIuN1KvC96BtgonPtqCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIML%2FKwsfA8hHC0FnFjKtwDJbSgYDdEhvlgautq5KaI4b40JRMj2%2F%2Bs7sN02ad5QOwudslMXQmG%2FsLapRBdX33YF1xcNFB1HNATyE6%2BMK0f%2B0AF%2Bl96JXxyOjEgXfpVPGdx3ioWLojKdXZam84dEs%2BMblmjLFBkLi%2FHjeFEC09RMIQi3rAwxCbVzOjh4%2FvVNEovnW6ihybVHCFowCzmUBeikxeBNSFGWevoUK6UnWeCvRJ5G0tQmTvIdIEIIvd4aVD2Yq7%2Bn1LOYazZQJIa4aDHv77PXbOAGzlbAdIfeCqqRnHfQPxYtM%2FUeusO314akt1aFM%2B4EUY5%2BSQGTI34A3eShY6gnKyaS7p7QX0O83wQZ%2BAAoaxXbY0l92yOD9%2F0eaV%2BydM4U1OQ4nP9oIZWd9H6FcrEko3EkBbW6w2XGV4LLpJ7d03daS9%2FzrdwYbvVdR5LPTt1uERdx6mjnRVQtYVL4TvPgMpRGVJ7Ml5vth3MY8rFbZco9hHMl6SpxJ%2B2irpbSTTnvGCKSB%2BBp%2Bkl7PZxgDyDBXKdZS2%2FwwujvVb28tp%2BRhVy06JUDgee0TG6TFsEO6%2BcNx0A%2B659pGYCt6GZpNDroQhRlEB%2Br8s4v7TfAD%2BDz8A5qdjqYt1CUwEKavimAxm%2Bk%2B%2BUW8DDTqMwweHvvQY6pgGE32TjGzja395xrvF6%2BKbWcaGM0qDcXa9MzwiT56tjMHJnH045%2B%2FgRXOnNqRcV3US4wP7s2D0RQ2mZy5j6QCKe36Jg%2B7PfnZXeb5E5x67JgGVtDGSKe3%2FLTnWlm%2Bsk%2F8uAqKo7jaanxIlvLeRVwzDDTEoY%2BJXCmBkCYXkAIzw8PqKzxjJ0G81ONQZedsd2D67ljct%2FbldKfy7GQdIf%2BKc3ddgV35Nh&X-Amz-Signature=82e0629878ee06ef1e8acdb0a8a7fed80768c3a4bb2e3ed13c1c7ac2e6aff1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
