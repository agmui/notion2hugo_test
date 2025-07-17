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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DH6IZE7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFbiTOxlrI9Wseq%2BdpEfPMmMJ12fhPJisQVjfapjREgEAiEAtpgCGvGnC7nwbYBP2NUmZRsg98rSdlvEN%2BUkmkZCnWgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJNJLkIeVMVwWraEiSrcA1GSWZ9ttpXG8GqnjHGm87GMdopfsK4HQIjVrHi9EaDEDMd%2Bk2GakNEhdYt4Lva8zWBs9mQ5cknCqHFh7dGg%2B%2Fm%2FhutFFCwOaUfevRent21J4GYGHkMy0EXgfSlk8tFmaKyrxHP0knHpdWg7%2BLPL1VKK71mk74U435NXcWSRWddciJJZvI5a1Qj7ZYRkdhLZW0q64Z5Sv9p5OT1TUAjwfNYZ1CqzvTUY0j2%2BypsjltT48JfDygKmRI1AmyiZm0B2kuUwZKlxOK%2BH8LvJqxIAh%2FwBLlfijTv3KLsah9tZ7CdGQTNJbqvq%2FWcGy2tMoMIuVdC%2Bpi%2Fxhrm1NlF8%2BMvsc%2Fc0ZIuG6f%2BSma1UKtxioG4Wpd86xTIIz7kgIU9xLy3JyRx4vIVBXrSU8JoYvISLCN2H4XkPGKAaOKxhY5t7%2FyuM3OfNRmpf%2Bty7F%2BguEZWpMb%2BxhHbGxQ1BGTMQGjQgjbJNZD11qZ5ZJ5ipB0SoO0%2BdQF5VhisnpRjvSLgzP3Pw5rplFUFMM7QnmLqnbPhdT4bkZ7vCstbLwBvB8RwkuADYG7FJ8KG0FLTqsKf2lcFA%2BEGnG%2BhH4HgCR6NBiL%2Bdze%2BzeoCEZyi9QuYmvwYjFxP5PTo0ZbdeuftuOP8WMNq%2B5MMGOqUBvsLQjLmNRUCCceGb1VBy7CQK8tkxoK5CzXIK%2Bnjc7HtgomdULKc%2BCukR1P9H7xOpcacsPK1cpdOcFB498XgX36XppUlE4WA3d5RF1l%2BdKTOi1NJmP7q%2FaWDLakL1W%2Bj0JaOcao9NJnw%2F7p%2FpWOyk3zRBXa0KQ92O8RxjLobt6aO2hq11iMr%2B%2BG7WP%2FU%2FNOltHViXKj1lzf07XjHEv%2F6HaSzJvX8%2B&X-Amz-Signature=7c1fb22070d2a85bad31f86dd1bccf79db691c2904fba7e0990c908fb1381af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
