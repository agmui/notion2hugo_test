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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WWXUYHA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDFCdmf0oaIaw7%2B6rbZoqZXtsWwl4HXHB0zObF6t0F%2BvgIhAORHvxr5KGfqST8Vf2ndUAQtPsWxHq6ZHTzoVlb%2FoF9ZKv8DCE4QABoMNjM3NDIzMTgzODA1IgwKKuXlnagkX1AOvq4q3APFWcVp8ND1bKw0%2BJDzpuu8kIEEgGypG716JvAbWInBlIsD8sgOpG2AfT38CkrCHmvFZK0et7bRCm13xMdCNA1EqVsqLg%2FRRHy3Zg5QUgDuU7f6Ma0bfqF423pAIBBwVUfm7eLw88kifPceCB%2BPnqTcoHmW39G5EA9A%2F9l7bLZHwSCW1Sgrh7zDCME2Kx9epng%2BIp7LrrAIoSXrctZLX1SC%2FcOtgAGaW0%2BJF7WOQpOjQyR4LpXpfrXwC3E248SF%2B5wrD26zVIh6WuIEh3Q3WAyunLWJ4bbOwtSi4RVqXYdjGRb%2FbwsyS8cdVsywYBtrF6lkEqz3l81vISFTe7SJfl1sAXbKpx9rnpHZqdeSY01TvVIUohIrPVC7xMAHwGoXqtdjakDBbhnCcBDSQ0KaGhihbX54BMx6jebKEvAPHdLhNQpjpbChEb250NBrzoT11BBtIA6TUHzeKDQI%2BFhTfz3HjIkcK770VpT6wgQMysLFP1jY47xxnaLJfcvsJ%2FwbEZ%2FKxDRNqO5CRq8XXoww8RpbbuDKFk3Y5i6WEMlyEYcj14PEiezhSciG%2Bx7Zaa7Wsyc99loeaZXQUsWk0ddHeu9CBQYNo%2BpF8dIGdTc2jAJotuYMD5jxJ2n0ACZ%2FNzDi0I%2FEBjqkAXvJv044l6cdIMWMVlmf4OJKkGkwIbfYn7IZggcOhfRmv5rFmGmKz2Z2ul%2ByY02yksX9EZHM7fwDgrAE4xgM8I65y%2FZixRnT8ryQIy88SXkgPpf57LXmoXT8NWgg7eH8%2FmHQ6M5yq7L10W2h%2B0zseZsR2%2FbBNLhSp9uxsBn8TWK00GLk6KjKMWSiIq%2FY%2Bi1h1Xu0iqMYsWqGNVWs5iuAd%2F7dF7TR&X-Amz-Signature=6d2e8f395d517635afda67324dc330e01346940da32a5dea2550f8cca92a1a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
