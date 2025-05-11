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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B5M75O6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEQo22mr1Fuv9cHLAXU%2Bj5wYWMYZw%2F3b6n7e8tjua5rwAiB9fX%2BjNTjqKOB%2FRaGv1EdfCTTSpyCrkb60HngFd3vnhyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Ek0%2F976GwwQb%2BQVKtwDY9bphliGQel9fn47o5Cepg%2FltFLcSHfClbLkP%2F6x7f1LH32iw24VF%2B5SUe5YDN5POCyqhRXRD3psxDbxDWuzBjSuxjDSP0ltdqcGTpN0PStk1DmdOebegUhQGUwyUgLIqjVCu8x4%2FlcvmLqVNtc1YOO8IbXzFlBwuI%2FTbSp4PXPus9gRKk3cskNb%2FTVx2UNqg1YyF%2B9cbsoBzybjWhmUoi0PnQuo4F3kZVbh4fYI90%2FeD6vehtjrIttKVtCxkvNh4BMHo0VLo4dih2VUrSLF3zGxRYNS9W6bX24u6IGyfnfH%2FU9de4imEL7dYdyRIwUEXHnESNhGXGsfn0xrPRPlkMuPZTsvpBwbyQBAM3GGQOXac2BaXh0ytZkBePz%2FnYfaRLdqVxv3t2csW9WM56gTvrZbA%2FtxNv%2FtseywAoC1cVHQN5gQUhQordw9pQ2yQ8EnXHyVdE%2BvWC%2BKisPeRiKO5vZJj%2FjwVWGGNfgZEWApz9eHMJyXgNzpcq%2Fbz9ghbDju6rlEnJOIRz38ugYIr2RsWdKavZLVrH9tB5KzGY4XcuQj0PJy3I6VkSsImXIcnZmSVoAJhM8NvkpEwH6X0c5ol%2B%2Fz8CSeoIgp%2BriH8Q5sCZcAG4bzwJzw7HrNEKgwkaKDwQY6pgH50j42i30zdhPuxbKoE7UAdFoAU7CEuoFqYmBjQJfW7x26II8KKdIw9stIIJHfN0rhauA3ncnD8flExsnDc4%2FsUJIy3mJZmtRxbVSH%2FQVuIzuI7YSK84hcfRkAbNgRu28x6KI71FGhqq6d9fD%2FMVNtzrfSZhBGnhxlxijhJbbrLj5mo8U2SWv9GgUplgrAbAI6cgaq7AkvJTkW1zWA0nnlAHmJLkmv&X-Amz-Signature=8547deb87311271c5256e2fa3cf16e3af11a3589fb801fe636c986115bbf351d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
