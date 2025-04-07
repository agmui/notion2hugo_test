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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXFOKB6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEy0Du9zflH8guQA2i8VeeMnxIfmJ5jP%2B7qR6ziF03RAiA%2FjsaB1HLJTBjLcMtKDM8evxN1vPQzlF%2F5j858OAgThir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMFWirI4vmcLEivSmjKtwD1sbIF5njCxdrvmCgmhgF55FkdKRhmx8XEypBUWU%2Fk86Bw%2BOZl23kWf8ogl2PN5rG8TBqkUY3g8vGFlb%2BFDSzQNDbUhp3VCde2Xxg7R%2Fndd7%2BCgLkJeTjHaONLZWlkSqk09qBppmaI%2BjDhEd5ojbIRZDxOoz9UGk%2BbJA1hR%2BHWlZdvIeMQoXleAQBvrqzoX1G8bGtRNF%2FzRbLBeFkMXX8SyCt0mfwQnGeoUNRtqvulTlLLksrE8ZDuaH0%2B7OeqQ%2B%2BxRTMM1Xnk7KIKY94fnbS%2BvUb6CClAguR92V9t13v8jo01iy37PSKIXdvhCKHf1ZTKkV1V69dEdiXqMfuwg%2FN4XqAeBrUlZefTckoBGruhsMzwcRjyE5gOToIN9ywKsty1gr%2F6LAbei6Tmd5XT9t8UQF75M6bf7tk%2BGMxaLYD90mV%2FcU5T1SbL314zWpAdi7UBY%2FLLlgYI7LUWPCSZUcgD3knL1SZ%2FwcNY02C4laRN2iDdZA38KcImctB4gE%2FJ3BNoBfR%2BSdF1r5eAhAyIgeTewgcHLre6SdMeGwZLxoBy8xNVoaR8n4xjY5zdZ75wNYld99ZUbyoFQRkw05RB7zApS0SxjsMjsLgT5JbFmXUenCcaEDNEcSnVCR6DkUw%2BOzOvwY6pgFkZFaBCUu4%2F8SC6Q9Fl6%2FbqAqnOc%2BjJfuORdMKNm6jOOr1FdiVhElILesC71j6R7ePTukVnUE1T9LYhz3LmCQR91HiO3mJYSeKGijQBVSYJC5r7szdKAa%2BIBof%2FLpS1qtdpyvXLxha6yARYADdwzuon2PgRS407S6LyCpyyxrTSCfvMEQP0jzo9I7EAp7bxKpwaeGOgEPnuVSCZ7MQG1pNoFrfOeYC&X-Amz-Signature=c804de2ca455e53de79ffc17d83f3fcf7ebe595826c0bdb635ae5e23f3da90d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
