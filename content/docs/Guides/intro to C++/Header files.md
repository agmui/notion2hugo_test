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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URIVAXEN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnx0Cb4xz0HS6QbiWsywMcm%2FoEC5ESRk0GNNdbUgB34AiEA2pq67Cp0fs%2FZ7qOxZfwBI%2FVv2ooaDV64CpEi6sKtfXsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk7Bllzi4y5AKz3GSrcA0nAFu3ogqYhLjiuIhMPqu80tNFnHgAL2HB5xWekZPWY%2FDQJgtBAzoMt%2BNj74sGjswo8DpKEYEFOUw3UvPMARElmknY9tStmcCmhol%2BDj2u6Gi6CJ9%2FljdbEkT%2B2WBDln27VsAQGT89ESug1uaec%2BnW02wfitAy7zXZubHBCK3uzo5LwXbDg9y838aIS6DuI%2BxK97yuJ0xSrE4xYkH%2BPvGACDWEkUTe5rl%2BHDM24f0MyBhaHiTdpTlhbcv4Ue0HbJftkel%2Fx9RgZktGpWLrPz2%2BF%2Bt2gZhwR%2BQJVl6BlxvSo9u1nK9s5JIKW0qRYF%2BAARCZz96mN4f3MP%2FHmsdrUZvkhiQ8%2F8OSW2sqNHCb7FQT8RfrDjDg7ehKvyABtQaEqCU4PwZO2cxau5ICmE6hKBeH5OkKf5arfsUJBgAKZdrCenJX9hQ%2FB%2FkIpWt57jVr7K5fgLLB8a30zNcNgbRvcJMDdh9YI39jr%2Bxwd83I7G4qLzR0Bi0es75Q8xGu%2FoYx72D1AyWcxCX0u6PWjSzSmLuycDEI1t42dufJPY2Xo3B%2BLX3mkLGvlzJcyFR4CjRZBnFOmY69ScXnb7Jh%2BOKJ850ZK0O2npNSVCkGii32QhtuVaUhewcebv776ljdKMJn5nMIGOqUBdkRVldl19aqxcNNNgIt5xJg7f4Gjc5xDuS6wu1aSp3j0%2Bs5t6gnarWviv7GK2931H1UKkzURP3ANybgqLrfope2FV%2FPRa6rWWNFenbGPO2hktiNhnAytYCKWKUATVn%2Fwe7EzftNBgvZndtzx344AS%2B8Qs0Zta0W7fR3OcdeRRemHXNIuKDO2f26QxRQFHk4Du9Ss9%2FkBLBtK8sfgP5Jo0sRppvV2&X-Amz-Signature=bdd8d57624121055281b1f32b688ec58937fde8f321c12253cdefa291783731c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
