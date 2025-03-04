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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IUFLRDY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3S3CjfcntooXeYNvU2KiSOXEiwn2XyfH7sS0G38qKtAiEA5hwtYXNWxbh1yfUE7%2BU12GSxHbMGxR8RwazjT3eSWIgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKIHtc3BaKo2XLzTSrcA%2BX7r%2BAmQ6eR0ONyX4CnNqNmlyJggE5KQUDRfS%2F2nqunLxK%2BjBAf7t%2BjvvU4zYTovfStQ6c2VY6LKPuOsbMooWbBeeNN%2FzILNRBxsftkVdRnFvvKWxN2ptfLFcbHImUvlP%2BYOkHhC88edDB9AWgx0zMC%2BqdWvqXBNIsM0%2BspijCaUB3USCrR9g8tLNa4rR3VZcoHN0GXILNzM17XL7ahi6RRZYzRo6SUh%2FDfhyz5L%2BWqz9ETH9oRPRjc%2FsqqTdD0LVGkMi%2BNVmSmaj%2FfEVWXfJ7SHZjb20W07uVtp%2BLHu4BjO%2Flede3ep7UctTBaocNGTWDsh7M0OhCZWCpaaS0iMemAJKIqapJ5VXev1qboCsBoYogJEndWh3R9n6iXLKP6XgMsSdV1FB1RNOhRBG6GtnPaGd3FJ4WVeNFQjueFT3HVtYR3GUhvHBwOk8TbGDeeqU7P5JlJeLhnEhLMjbY9krxcQCSom6%2BRB6lSbD%2FopZL6pg4YQdJ8TpdQ%2FyTFbru511NknS36pEIuMrFjBOjbC1zy7jWacRha2V0pDbkW5bP0jIaSG33inc5ByCxoad2S2SrweDszTxQOaeaWbiFb%2BY0%2BwjXGDVseCXzf3VOH5H8w3xPrUS6hf4oAp8tPMLmemr4GOqUBZy4aSFF7ZJuSKTgQ%2BNAUwSCvTUnTq0rgkM5f0ondc4unmMEF2XgcNBQwEGgSzRJ99RUc%2Bu%2BlioFwg2nZeoalb0gk5H%2BltrabppIAF6flLfyXcZ0gQm%2Bf181vhkzG0xdEGY%2FdSi5mQKdfETQcZ570R%2BdPGv2%2FwrVRgmv3JKBZukgTuJQKknEJxzXM1GVLWTV9yZkUIHDE8CUebhcA%2FArg22fvEU1A&X-Amz-Signature=29b2aa44a6c85643b8ce1ce4b39c0e92d5291c589210b77c4e06434b0f149547&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
