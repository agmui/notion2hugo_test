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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67PHMRK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9O9TLYmYIf33dQiNXr3AtQOBLgL7OPJkB6nJkGRGmkQIhAJSmdijKIH9XLLrdnQa9D8hx3KZA7H2w0f8vLCbyoLqaKv8DCBEQABoMNjM3NDIzMTgzODA1IgyonEcdlnlqFGz%2BXzEq3ANzICGRfO8xj6t8pPdBlsD99j9CsnJb6Eiv3nk2tRiVhExZ2Q7CYcv%2BlhQ9y%2BBsP3JnEVTCeMvC%2F3r2nbHsNr34oUXgMQ4vbb5wsD2EO%2FT5906sLj3wI3%2BaYFR3eqdC9S8Mu2E8V477aPwTZxbf%2BXRiDocVUt1QMjF2J6y4PrI0t35vdFJiFZX1fEO3Z%2FfmMSGK0g5BYngUU09tbHOvrfBxtb4aWntVdaM%2BHMIYaTHB0J4A2yNpsxUmJjuuROVdPkWzuRJHOd3hFXQyIDy5RXPzIO5znbYe6h8OzJlQDWf%2FgCAnvI%2BRXyPAhs41yYnQwJ%2Ftau9R26P%2BGeUaC54k6yQ9s2I61HFMSQxzUlxXkdtrRxK5dH62my9hUpII3NROUOioT46O4qLaRp3g8bIWwsVSNnhu%2BAuaOCpFk4ITn9ulXhMMdFsQMsbnGEC3eCiEewDqU8PKbipTWAO4I96Vn8ChhLRVwHKqJeR6XdmTvuX8tOMB8bI5WrWDu6kqAz5RgGwIf9cxYz%2FtIaA2rlPvoqT3sX5CSOcNGYYjZWhTrf0bBgp5df3pTdxcqGVQId%2FpzIUv%2Fh%2BvnCJ1%2F90NvkAYNoNMphyMEnuZ7RLLkiuFeFHtHjdCPFOZKC30J2ocpjDkrb6%2FBjqkATCtgHLieL1%2Bt74y8y5joJsPoL8OmLJ0pF3viTDXPiFeiHVda4lkiGRk2dVcENAiMM8SBpQaKR7kDbrS0EKs4U7VcqH1emjWUtUsn5%2B50dXr2QIfkhIzFqrcjOOHjK4qxLFnoUjHRYrKKXz5XaYogL1Uq5V2Bz4TSRMOF3WIq4VU8mYlVUgl0jXYwEK%2BPYDB1OkuJyBlxfN3nEG6CAea9qB4a1Yp&X-Amz-Signature=115ac954ee9918cf5463868683239366c84c9b2d1b0ba421e991c79971fdf365&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
