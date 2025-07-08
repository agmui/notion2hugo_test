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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUFSH64%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0jT7R7zg0yw8H1LqYtRCG%2BM1qTx9azWBvtzaa9RfcrAIhAMapwMcKZJdTTgmiw3h1hKP7ZN7JIZqxs2TND8jFaIE6KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVPCk9PsWfO8VUsdwq3APi3JqVyJW0DVDeAzOWLGYZy9D6aFxqEocCXMfWxxLjD3olKedRwsw37%2BqtDTNDQ2WoDz3qV2jIvYjWXo2BJHKLZJt6JbeuYxgI%2FdH%2BixCM9uPajHw9Bex2JBnbyuTKiMFEnJ6j7ppZ0iB84dCVPtivNYSwkZ3Zebdb5VPpxTHNQhoeo9nyml822qansH%2FcMtIDP2XAqXevWeYCDL1WYsKg%2FVgafrcNh6WNM5AvNKbpKKiNdVCqfCyIo9QS%2FRTfhmvbRJ9sTk0R9o%2BBopu3uf0nBY4UQ4qjhA7lp9jAzEqGYwMotfWCor1VRANMs7nkc9eFBJKU4D2jOF0QxH2mBSAVjSxevutVfUsqlPHs6x%2Ff25tw%2FFM6l5z4R2NtQEeLCGEo9lcDe3y5eCSMupN%2BqndvUPRy4zhd6mektvxiiYK5Srn77FozaElwv2lKMkXfCoa11Zh1mmIsCINz0qmqlV%2BMiFy2RHHi3SLIq1PLX%2BrHk2sKvK4yP%2BNtbnrLdzG6ZHeuK1MabUQJj7Y1%2BMaIC6A53jANEapah8G%2F%2BPZpr%2FBSSqMj3RJ6b%2F7n8F7kekNIj9XPsN86YRbs9SIO4t8vMdBYav2BPlZv8gUOVbic0PJlDQuOok7R2hZiJiA2XDDYs7bDBjqkAf7KzGigGY3ViqOAP4EMGlG4HFCUJ6YhAVRftttLzE%2FQK2VsWXnzK%2FEVJbdWqJw%2BUCU4S2TP7a%2FzM0g390gsh6m%2BkyHnLqtfLHYxLM8xOyUQVHPgQIAxtOuDEOVEfn6yLQ4lWUm%2F1IA%2FuD9FpKY3PWJHyOEcQ6f31besZM1lj9Dstcl9%2B2lWTFHEensxrcBsW5rYuvMJfvmVVmQU5guolLUdCdql&X-Amz-Signature=cb9a92c1a0a6ae181c6b90163cb933c2d5a83a469c2cc9b97a61f78515b2d0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
