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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H55X725%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4IWLE9W3GnWJEJSSiN5pwIBxtYrMBj22fyJlvvdZJqAiAJQZbHka9cqPyv1UqzbYqLiY6uTg5fUQggFwv9%2Fyz%2FCSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMp5XQubSk1s2uThMpKtwDr%2BtdFDJuRwREDeAr9DBgtPVbRnuXX56yscgXQP%2BOb0g1tcAEELpoKYM4Z1yklwDfypIsb4grI5pK%2BDumF6vZ5a0p2PVmLvXHQ1kNUZIN98a5OfC4UIPqrZPM%2BJ6LtmL3rU20dkq8eeUH0BcpOmeVHeg5G%2Fa77VS%2FEbo4COW6eDkhevVQE8z6KM9GqjhgHcX8INAJgLsHvlSkobbzzRZ2nMMz74DbDGlPml6KepLLxE99TwGyWOi%2FWtqw83gP6Uc4D43LIvBHmTXw8crFbxSIRiKuVmEQ%2FwL17Wd0kafUwt0rjidsqn4Tcu1Sfxb5BYHTxvmFeS2E8l0Q8uUNeMuF4WvAoFBML9Cy3%2BazHbs8%2FaVRSTALRjyN83MSjjU73TV0zsD%2F3ksNrMH43CkDA7lPkxvVMan8BrHN6vcXlubMzsjNcJH7jH6Atk6FD6%2B6oHPvED0aYSYA6ZykQ9MueiGw6VYzgQHRu4hqQWd10V%2F1B8vpi6ASh4c27cjNY%2Bd3EkrQF9mItcpRbB15EXwVUByRD%2B9s1HQioSRcYL%2F6KxwbqzsQb%2F9BORBE98BMa8AOFYq9O5RNTtyB7aPfnuQDJ6DeGKTd9vybQJ71f%2F8nxHWGo9bNpZvbkj6AcRdSp%2F4w6YbtvQY6pgFLdFS%2FWdWH4oPpPyrqZBPjnkGpf6AYpFi4VUY5lBzTSaRsUIkPq0mpj9qk0s8ctQ2IA8C1qD66wvooALC%2BQ0Lq%2Bq5pFFclQeNV2rRN7Z5tj7Q4%2B%2BYYBhGAwRmtalQ97sWmMQlk2j7q3dw%2B9JOWkOOeHxjgd6RzV8ltxYHzfRe0DeqXu9qnO7ax8lz9ed%2Fsw1hKMFPNfIF%2B5g48%2FZn4VABS3RUy3s9b&X-Amz-Signature=5fea76fc032a18d6e51f254ad23b3bdae4972a71b44e423fc9514995e48fc500&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
