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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEKF6E4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMP4%2FofJQMWOyvANNJ3YTfRWWOzBTDjgyVgK5PQvAN4AIhAPSq12SAerD91xqrShSQuxMWI8QvydH69ryfcIMsUpsWKv8DCFQQABoMNjM3NDIzMTgzODA1IgxmWGyg%2Bfe%2FYkRRPOMq3AOQhk%2FDo4wkxHdh%2FffBC1l8O%2FWMzokK%2BTH3KOneU5ucz2kYFwggSt12P5KBMhkrBS8prwAVofmFHfpKyGTWY5YoKDKbbPwcQoAEzMi4jUT76JqvDbhUVGWMl3OgswHjI%2BYwoLGVOiYaVOeDtc9ItaHl8NPFUm93DuvFaAL1tHimlB%2BvsVAE7%2FlC2jbiWF2qm%2FUUif1QYHyBmMkqBDA2eP%2BkOBqvGUKFV0eA%2BhNfcBM9k7ykxWDXPWHInPXg%2B%2FvG6bQ4d%2F95scCk7VP1ScVJTaoJxPw40mqTYCFicTKnt%2BKWgfBXuXPuivetLtAxgGI2IIUACGqpgD6g7DjSxxaZs8PAEgFJLlrkaI8uEgq1xDc1mC4itODw%2FvNAuK8fd8SfNQReVWecD2d6bCwTQipDhd1%2B3h1K0uhCLTiKMwZ1LLmjV4rwesj1VggZguTReH2SCJemQ2IfnyHBq3Dn9AqXUnorM029fGDI2A5aqidyHhpJar3ieXpVeQSVVjqIzDckgImji8rHy17WCi6nR4Ly6DyY39WiZA8ETWWGdS112d8a6ag9RRciVvb%2FoCoKSq%2FYVxlXGDfrLojYMBe7l82WVwCIGNjSYu9jBt555hqX7HwlmH3nDCwoTPMGDxLiWzC3lJi%2FBjqkAWO00ZgJlkX8YFU4Ln7wJtxUaSYbHDeIhAX%2F%2FnFr41UjKps6QwnHGs3H2SH%2B1FBvIy4fegzDCV8OQZ5UbAe0Mqi%2B8i1zOqcmAcBm6LVl71NCj2CJ6bvN9X19DdP7sdjbSashmLHPsQ0pV6GQF61AT7PrrhCVZGv20l3gjrQ3A2glDyu3B6W2sY14QGYwd0Q84hDsKF%2FdS0ggNAvxuuFzS1GIkfe%2F&X-Amz-Signature=d32944c77bd0907bf0d202d5e8dfd9ea51ad775ea22b46c514af0b6ad426f7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
