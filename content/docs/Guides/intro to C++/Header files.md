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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC55BSFX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBli%2F3OpvvMFn39S8JqgcCNDx5u%2FRqRnTlJaPvwDk4YAiBSrrcjZn3DNpXPpz9JIN%2FUNVEqbETSH%2BmNjFbEh2iIliqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8G1ntd1LjXfJZv9rKtwDPY3AzyxxbZlUPk8GLFtwcop%2F425pKSDQnUW225OrZBeUunR2qt8onIhr%2FT1FJd3XhfmiPID%2BV1vPYgnGDt1AJFDFpSG2sE7sw6TXEDzBHiW3%2F4zU2JqT9JKFH28f8rH%2FRIwXxny%2FvAlStBaepkjYyV8x4VCoqkNJsyI3TS9XNCd0BRMHHxKPftFxEtQ6C%2BvB1ROynOwxhPwj7Or7Tvf0jDy4xS%2BdCq6qiR2UCnw4e2sy6Qe3Ub64wpuREr%2FONnKQFFcq6Fx%2BcuvoD5OO0ufu4apTyo4DLgpka%2Fs3BjoDTp5IdCPbbgK0wZ4cw2QAwQI%2F3W%2FuzH1U6%2FYxcnoR09BMby7NIQKC6VR2L8TOS4iww7rKMJIBmiXujPt9qRihs4OrzueebDzpDJcyxS2djmc%2Fq0sukP4GJze1WU%2FcM%2FB13HiB6xccS60KeMMdKc450gLbX0ew24Kb6oFJ767WVuZLW%2FlX1ZV%2BZBiVElPZQyx8kKBu%2F6Tby0ppdoalvBUWw6%2Fv77dr6%2BuwBODUCSvuxk8Zl4wkbQgIDhs7PJHFpQL%2FbWlqSbP1%2FlFGIPtvTicH33%2BjKbMiS6sXHcCY4GQgwBYcqr%2BPsWXQr6gLZPhCNYh6bFjlfERqviEuerUsUY4w%2FYmlxAY6pgFvmDkchdJMetljDWBxNIx4Pia2Y8ALu1irUgThEgB3Y%2BSvTjvNGNXhTurn5jyKzkz9S17QYo6ojSVKVYh0uhXa2ncf9jYyQAecyGeLPKh1jqOwCMgo0VLuItP8vqNPTByYRXgr8qaTCYisKjm9Ys%2BZo3uHEdnqz9bI7SqD0eJJPjcDuYIwFvKPztoxMDriOS0PeisfI9Mk%2Fz1XKJkjogP0jaP%2FO3vi&X-Amz-Signature=af1b1ec9df0e3c42028736f6672c53e862c8c613771c2c7cf30b9e24ac9569a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
