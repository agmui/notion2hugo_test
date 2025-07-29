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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4XJ7EV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5YW84hyf5Iome80cmhLqzXX9g7Q6KQXFaiWtdUM6%2BqgIhALFBzTGxuDVSvHjkUtyWfLU3ZC1kEs6TZroE%2FxBlQxuHKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFiRBSVIv5Xy2ddBIq3AOVhaVhNpjNI9%2F5oyCX6JcdS%2BUF42%2FC%2Buw6S4GfyaK7M3RsJgEJfTl1d64aifpOMJLmPHfhxH7iKihaXcJZ4RRZOtRtnLtMXlK9PITUwTc%2BlDYw0AybImoTWCf9GBcjiDF84WKlQ5hD3Ouzg2XROBoMLBbES%2BHzvviH%2FgMbTa5yJmWK2WgJhfOm91zS0W6t64F9snc8F7X%2B4GaL3d%2Bk%2BXHfC72fMJtdeOhLkBx%2FUPocvTPffwIdBk5XwNRuOmeRMi3VUyFab%2BXRWntkosYQCaaK6KwmnOrTz2B6j9VyCgKRfDK1fu7xlSpFP6BzztS%2BUrmdX1pBjG5bN7i30LzdVg6uA56IwRMf7P56%2B8%2FWmerc4Dj%2BbCWao6YUU4ETzaZA0EnOfTOu9Iet1QDKPWRQ1sKmnHmb22wjyhWoAtvP3BLSBQ9FhJVafuyjyC1a4i%2BBnubAVUg33UPJ948XqeuYdtzZCvWrSg1CLc63uF5HCMbvrPLlLuHHWvJy1El5%2B5w%2FxRai1pnP7CUG%2Fc3LzxgFAKRlSxB3DrAyQLDMlLg9PyKZ4fEyoiQ3Wa9vhpYyaoNPO5Kb7MH2cHcexen2NNxD19q0yYXYwgr23ZXOHtH%2FuWhO0ujn5gsC7X4m4iJQ4zCn%2FqPEBjqkAU8TrcUBJiQgsysnYBAAV98TbBFxmEyWSWjA6s5kpo2YMHlQFY%2FK94SArTJTFKLL4AeosQZo%2BFR%2BGfNupogKo4RrVAy2nI%2FMVKmg%2Bth865ektM01b2AVMLZ2%2FsjBCNCquAfQOzTeTABAPng8aMXTTQNux9ojlNLcfexCAiAlTBP1D5mJqqDaW5dcMtaJ3ws5fQsQHtNDlMoilURzYrEH4%2FPxV6WR&X-Amz-Signature=0b541f07a8c71927c2cf269105d36064778f19df60b83727676361a732281107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
