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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUYDCHDJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC47NPJF77mtcVc%2B%2B8QMN4bOVfwlSDyhbPTDhwJIzSCUwIgUtGDJcNg6%2F%2B9XryzYk2q1UHP%2FuFZ0ADzuZmgwhsoO8gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL2S6OTuglFHhRD1SyrcA%2F37HPr%2BDHeNeQZJsASuBkNszEKcUqTjc7ZvLI81yUfSHIAAYG99Or2knTgu9kLXhkI4OusMvypi1rs%2B2QbPoCPJh8ZQ4F2LFq8tY063o2%2FYKaU1h1aPFQRguGoqdHsyp1mvSz45GjWTO0aPHktjd4c3%2F4%2By56C%2BfnZzbbJgTVwfNrMsECFWcRUNElq2kV92fvVVAg7BeoJR19mI%2BAgiuVppVDEmsFwe3%2FHm5AUHPaoSnFhJhsR%2BhWjycM%2Beo9Ne3jLBq4rowRhphgiLFDZxvHhvGkeNGAlHyrHFI7MzwDaZPBtZSU8rzruTGqZ5VOx%2FhzrkDTD0OobsWbiO4GpF488jSLieJSkP4o0XxMFW5PzeZVQ5ZL6vuXjb8EzK4PEqtHey2SeaJGqke%2B5JWpY63dUbDHstwNFBvveolmem2EKU%2BHAiR7533w8aZT1TOO2oWLfD98arOIL4SD1fYBpPTWZ2OL%2BlsXxpuEsKcF5xFU9DINVx8akrDoRV1fhlgnJigRRkcqlKNPBjoR%2FZjaQTpGJTdTdoTrTp7elutfoSma%2FYP07ZG2SNB2x7QGeEIbnXlF16MnJvLpTIHmoxSsU5dTDhQL9MzlJXbhMFY934tw52MINk6o8%2BD299qh4wMOSVob4GOqUBZ2ZQbw49txwBm%2FwzM5rEBNsJQQedHZCsqPgArsXwEl08rVbqi109%2FcKdNeJPt44IwiBpGOZHvJfDgtnuazZeqPinhutvubPB3RBjCTvmZaZqMG657qmjBwQG4n8ZKrd2Fb0nGSIbWUffio%2BvfRhZA0ES6BFllM8vG2FOwsTeIftF7g4JW7O%2FgNNIDOaz9wWiMPa3NAZ%2FsYOtp3qhDBbZnT28Q6vu&X-Amz-Signature=a37785ebc8f696cab5241de299a76b6bf7f00054c2e5f5c2c33b17a96962b754&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
