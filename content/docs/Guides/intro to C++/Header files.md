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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZXA3JZ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIGVjdu3bBnV4hOovseLxe2Fvu8E9v3As3U%2Bu1d%2FTZQW1AiEAlX4HnrCTQe7p4SXDd4kBic779RGLPgEkRG6GUFlbH7sq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCOXG6jOebZWXtXlQircAzWHcwIYKCaIx0EoEz%2FDP353%2BUmTqoOypV%2F4xeDKgMD0KfEeuDampKlZ7t4ewS7Tn7h6OrunD9Jp%2FQcZvRBkjJBBpkzejQFIj5XioHoOn9gYcXnef3P9%2FKmy867gRdylMFDFHzgYaqRh%2FMq1W92Gvlk4hnkKp%2FnUJ6AjtcYBOxTSCG0KI3n%2BPpDPhRZbjLrqFJBzwHUxUubAP6j2AcFqKjKQhvXtoqlawBcGtchCCWgnGHpY5Cm%2F8XFXlPvE44lgHyDa5Rl4VfY8r9UiiwWiHm7R0gnoAswDWfkl47XrQO5eco2VYGRGUe%2Ft4B79cTt3SxkfxKi6utvCgjktwNptei7JnAC121r3Wwk03ylIuraqwZJtuBjP6wbTsbLbIBwjRoXszlN%2B6FKT5ec6K95rtlqXR3f5UF5qkU5lEECvStJeuFmX7YO56upkwdUavAagvvotLsxWHr8uR7fOa4NLMTvTl5DHfTCkb3dFaF6eoE84P4B6kCXYKpY7o5SAB7LgUEw7jghmq6uFxjhny9uEmpyrivua24gGrM1y236UKycOxyLZFb7hZzap3gK3JkoalqKZiUxJvVm0fo7Xc69D9J9oevvSA06N%2FJepQ5XMetGZG3X%2B22POUmqNqSMUMPPI4cMGOqUB9C1b38VbOfizvOLIdAjNfIhx3rswuzDlUDwwKFlkUOXL8Na%2BkwxAqEH7%2Fpq%2B81VYF6HMLXOGBf3RE8fAIlwPn%2FyBVFUuyfAYzo4vUscZEOJJdX69%2BdZZFVw30ZNfm3nyh3fJnXe%2BQI3XOQpaUQ0mHrwjSRWF6Wd9EBTcMVZWAr2KAfovvE3T7lA2KYNiTs3uJR6HD0aTOCPl%2FAl%2Fu3eOOSpiIjpV&X-Amz-Signature=5dd5d5e159f620eb3cb135d57d08488e95728445272371f694a1ce2ff3916c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
