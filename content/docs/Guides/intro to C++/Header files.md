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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLAAEKX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWj6nr6R%2BAEa%2FpWbT6G9rMRkVekRfQMI8r8zqeuK6kLAIgfJNSY%2BXMu%2BHCI0ReohMWf%2F04J9rqushxmRksORQp9a4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLfH28p%2B3wWHgiyXoyrcA3%2F75uWuYeoO6%2Bs0vz1QD8Ux4%2FeljAAyj0Nt2TeT8Fb%2BrDm9pMDDaV%2FfgjXjgDhhHrPuoms2qZuemDRg7k%2B2x2iXKRQ%2FZiHx9tYsefWwj%2B4yxdEpkwpH81Ne2S1f7rMu4G7ME6BCzqlTm12VR5YpV57MviYmDRH3VwUzgVwXCxlAroeW5wht0AiGDKI6HAuJyku3ADhMWFQ%2FHsyB3T6o4%2BBcz9eAEEW9dUeza3fcS48HyznllkXJQKLLd31xe%2F6SX%2BPAnORAp2XPRwCeOctpztkJnXulS4Zf06ohEbqr04BVw%2FqDts7CfQoDdX%2BlkAl5M%2By2A7ZUJPomg4jxP3EB1WWxouxEUSRSyxF5IgnNg%2BOz7kyQ8AR6s%2Bt2XbfPaZoZpOfhG9nFz1J%2Bk3TVpWerR0FZeQnFjTYQssiIldweJvVZEixeFWWIHmwkRLHC2W23qDvHuqpcn3RJHmciVTOSu1dOBUCv9jgO%2BZPv8iv20p1384lnLr1MO2oJQ4bNdudZNZxdLXMioZNNEnWk6iZpIYdwHJvXXZ3r2%2FQQ21f3Ddh%2FKhmjWuNGz3KlHQYiPDYrvqPddux%2BzoWaw94Z%2Fu%2BaA1bybtfquX62QidnjEzs65C1YS94rSrM96V9wx%2BfMKvNlb8GOqUBywWmvdpd6yAEQrcE2Tf4DCRWYUgtyvmuZmorb1nhA9BGYp9qbcWoeSsInOmCYaegpRydPef%2FUP44BRn9amFCddolrjLbVNIYyd771%2B3lNm4mauEhYZU4Sufwp0YHSXtaAaHttcZcrFegZoYL1JFHYYsGjS5ZyKDmvhBWqHziwWHeOSPgPo%2FUREG3xfuClX96go4s8TEd1t3%2BnJdiXRQ8PSctBSQo&X-Amz-Signature=937aa490e503929060aa438b794077336b97f1f0566b3b5bdfc1b5e8565ce3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
