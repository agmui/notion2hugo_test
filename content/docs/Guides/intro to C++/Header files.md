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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R26TR5PL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4fNvQQJIjGY2ZtXSWvKvH%2F5Dwusj4i%2B%2BeyqTcMSxK2QIhANYex53BgYoRaP6zky1SDVcw98Cwwv%2BKhMt6IqR9m3A4KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA2MBaDjQUOKC1xX0q3ANaCErI5Xp8JqR%2Fkpk3Z0dp4YvYUMif%2Bkr42WCiQfCuC7QsI4xWaAJOOSMKdQxTeryNN9bDM3VCgNLgw%2BTf8vmPvUM8XeLXex22xP5jW02A054iABMqwgMl%2B96FLjIUxDrDEBkJNFnRsFnhavGRJSscYECGhVfGD3rogioEZRHhVEC%2FSePK6Czj8l7ZOyQudTT8jzpKoWrSWfcVqgnnkOeSHwt4AnR0Ipt29xGf7smiGgc3gVxkIEAMK5WGUsjqSfknkxrPd%2FaacB%2FocKkqJKS4oHU8ImpJf07wVTg2I%2BBIbstt%2FD5iUOJNsgVX6NkRT12HqJ%2B9shYxUiW5CwHc22biy7cS4qmsHJglUKPQdkjeAa7DB1ahTr4gDWctXacUPX7mhu5xE4L%2BaYQZO2lyM1fF9nUrsiE8UcSiauudSOPV7kPtxavzi1JEt9F6BwBFIi20gq6m8yrIyWyALfrJ5KGHSAPV7Gn3kIJniSGtW77OWXd3jxH%2BbJeSDn9JR3qQVGbZrpJqU9TUgbPUQ1SJSFo6woCSDWozWym4KrisiwvzKIylp03qTot7Ux%2Fe9%2BSrjeF1%2B8RrYTPUJV%2FGSsyiHjPC%2B%2FrbM%2BnKCRc3YzWlWpZokCcAH%2BBbrSWPubdxlTDgpq%2FEBjqkAX9ptxiBFC5B%2BmSa0UqRyRIqDExodKmUHe%2FW%2FKlAyJCBiijYwYWBkcoF9AIHwKnKbChZhkCfaaN%2BHJ6kHNPl2zM2YB5zoYn8l157B0D9zb7yFhhh6KQk0c9%2BJa%2FWP1MrUEDi9b%2FBbEnkTofWHq6LwciyR%2F3%2FnLP%2BPg1nOpqkHY0HK10qpJFZ%2Bgmg0yEVKm2OKJrFunAM9nomqd0HkjhRNlBHZNmS&X-Amz-Signature=5265d717f14fa400ac1ad2ce321707ade8e283b5da71d3e876ba8d5a2981e02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
