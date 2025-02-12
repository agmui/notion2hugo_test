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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRY6DLB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxN8Y8d1EPRwQ%2FdqWdfZhgNr8yjewizzi35dE5c31NwgIgI4EOyGXUg8qCOcyTJ3VtOOnu%2FXyx0x%2B3EMxkuam2v00qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2B5k5oKq21dqzj67CrcA75PHOJFphPE52Ea3%2F3cZC5Ewj54ylfHnVqdgbD8v2FdhUcjiq0tUalqYigIxp4uGiSU3H4%2BMZnT%2FRI6sC4daTZdK%2F1bdpXW%2BWh4mQZnLQVzL7gAPK2%2FYBsdY%2Fd8n5tW%2Boe46MVTLERLPGKA2iqqz24DeeNOwU%2FftR1V1HgwhFLOBKfDscboFDFhVMqOiOXNk7vhHDJt5gnY5yrmK%2BLOrhjR2nY%2BTeDnVXlznWdBHFBWmHLKl6ymMG%2BHXIuRs1s5JB3LLQQXmXwUe0QLF4MCe8rGjcd2QBxshe5QQ8X9McctMre%2FlJCCc0E1t4qYOWzYaxRNplmbS2bIq2ZESxovfHsv5FLrpOmUTMwtX4uhttGaqbwBWFkFs9i05nZfgPsjgAiFlNbW%2BvRy6ya7edleZd9YVNoETeNJ1LrPYhx3InUBJX%2FpIHDY2q7%2BiR%2FfAec8HdhYG34ed4yu5GkUuMr65KI1TKuirSpWPGTxeCKKItvA2%2FAdJAPUX6%2B9Ca%2Bu94QHvucn%2FXuJKHhBk8B%2F9MrQphjV4bnRPR88irgbW1GByvDe8Fo2xJjdK5LNh499dl8f01UmXhAJH%2B2fgAPxLnDSnuDzrjfroQcipc00X%2FUI0%2BcdrAb43%2F%2BPcD%2FQH4SaMLvtr70GOqUBUtOkTuh1cpn4k9FdYPdKzCfouZucVAPrGrecQ%2FOVLmVXxs5I1lUM0Wu5y75C%2BaUVaAoQAvBiQv0RWBh6Ja%2Fd89WUC4sae2KLCzio7BdoUZ7CNBp6Ex%2FzWObZyq41QQ2PBtIgPUmjmiYCfU3e%2FJ%2FrCHc4lzf4uKr48BNmZ19YobFLjN13uV868Gmyc0BMaeWHo97CpdMwbcL%2FBH0lrfSZJtuyav71&X-Amz-Signature=43b405ebe6d653baf03925391e911fe199f898e72bb130ae40bf8914d2718bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
