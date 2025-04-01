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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJVRKCF%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIB1Ol0OPh2rojD6lR1GPiRvWk8Jo7Qt3WHnJU7z61HasAiALVMVgqEp5Uk48elFy0q%2BqhFmsLNRzBWl9JyHTmDkTriqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BGp42vE3M31F5gfKKtwDx7A8oV6HOeiGJWNWn7ABaPmStpXxsqhFZCPk2%2F%2FLBVpbGFPHmnpV98Ma0YmqxuyAFfnmsvBWtxYXSfgrFVXeOFFbhGVJbaFZOQ28g5w8Sgq1xnojQXHM7Ewt7XZT7ZaAf6UjCa%2F5cWLYKYLI488Or2amd1ilGoGTb6VW88ymYnrLhIZ%2FSqQfRdvnfCHo9rIs%2Bi8c0xSox2%2BMLEkgQuI0h7CYDFrVe7bKH4X%2FyHwyl9gX3IaLqhloyxQTJ%2FQnq8IqSMp%2FLQHBj0sd6cod2OsW%2BKNBnjM30JTwLu4IZrcUpvLj3l8DQuHUiB9%2BrlCKAjqD4z6hpl82jIC0OH%2FBdrsZq3xcRkftMYlLigNPWieviwX%2BdAFu3SJS7S7buq%2FIIrV1gZ9vl93dFakR7CWV%2FEH87%2FlsZkFmsele4c%2FS%2BbEzxje0si1hYU2yyINnT2lZRdnnKcMMjg%2FureXzIVBFgDIKkkLFaI8SGE%2FdnB1bXyQvEhNvjsxU8yGlTQP0PLFitqibxgUfcqEhrQbowUxuURzjJ4ndyQtl5O2II2svEcMne1Do2qO5S0Gn4jNdfHo0sx95Vn8IQ634XNNFoxzdkNj%2FwQlZY%2BMhAtzbGruqIokDAZXF5D2CS3JCsnKp4aQwwKmxvwY6pgHVL2uZ2gy706LEaO0iYdsw7Joq7Yd8Wlx8w6gls3NAswnar1rOh%2FrzYpmrkoSpgOG6XvuxZDwAWvAXNIX3twtxhESY7d6xB9OFQtzFaAJdsB4%2F5NjyLdrSEJNT2OerUygqdnP4zVQzvUIagmp41FdXDwZ8nvcCx4dR3TVfv177GIx7PdVByJr9geBg85KyyE%2BwpZB8oCg7Nu6d2eoM8%2BLWni7HqITs&X-Amz-Signature=4eda51232b5297f7068eb12f0426b9e474a6bf71c1c00e7e53914723e8f48d03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
