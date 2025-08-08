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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2HLZ7PH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFOocuO7a%2BkwIEhLRix1aHxI%2Bp2FufLnH23R9hRi3CIkAiEA1gFd8wdIDSbvBVMDvxGM1WVFT5rTZ%2F8yIg1foaHt%2Bn4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIK%2FNSSHkeaqDePLKyrcA1E4%2BxQv2aacWYIy3AaONER1Mf0R9RMu0xaMIooSJviSPDsGTRyRTbiBiRjeyJdn7L6nBujJDlqXy81owC1ruvemUaYGOveLpfwAQScKToL1PYzpHB62YWhV122exwI%2Ftpv69LgfOXQXqD8s4TP1cz4phLpHjHc6LAa939q8QjjwBW4Q3ValqPZ8miNYK07owFYVGhNyjBSf4ktSOTLsxBqr9n9d1oExVR%2FpjhlqwrThZ5WPYYq1udxhFXT4SmYzTA%2BpYSt4tJJCEvoqh4O1TQorTclAgfWO6LDOvyyBYvnpRQ3JwoYShj7Ps38yataWagouwTQsw9rEGgXyCy1hfJMA1YcgaPfCzTvbIASzv2NPKbiAbMr9pGLL6iX%2FTlKHWfa1m2XypEVfSgIcjuhYyGiN%2BfInFR%2FreYodSzrf96RxhbSrVEq0pmTrw85U1P60%2BTCI2q1YIBnLbog8HGAvuQrZ68XNs7h45JraxG1RoAsjGf7K%2B8wrAdZZNz3utnJBVoIQQEdvYiCi5ES304%2FVFSoPFGt%2BCdFeBzoD0bqi2vu6AOV8bJV2me3%2B63VwPLN1VMGbEbl0HRI7B92d0KqXUlnsLcnTIl5OzGFatGEtANCS0xS2HaRy3P%2B4mfliMKuB2MQGOqUBdehD1h1Ofq21qOMM8n%2B8ufMmH%2FZQb99fMBhkp2hTqqdvlUbTPZRkpwyxabQ1sWuaBhrHPjd3Ne%2Bcw960TImnK1YIWNsy%2FjenM7AQWB%2B7iLjBn4YmVDsFcQFHUdbF9EuCkJ4%2B%2FIjTdRjSZfH2RqVq2DCjpJxB%2Fcq75kTWYMTZpa4j6skGhMnwJSkAoyJ04eUrG06EuRghI39a%2FoIOuuRylRBdYHCX&X-Amz-Signature=d219d3f535c39e7673449c025a10dcfca726d2eda2ab900acbe3c9cea0859178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
