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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFCONF3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGxnbVVul9ithJxpGGtW4%2FNmmoLPSkRgnt8H6usAfdGEAiBeKunu2N5XivuFfH%2BFQGQ5pHzxTU6rGb4NZxu49ALMnSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2FmIWAPbTRm1HOPQKtwDjlDPpJTXmUeXRVW0dYKSJz67oKzWlua8BunU5rYCYFWf3nTfb8v7KYQYeLqJDhtAn9hz1oVRuP6f3xvdPmUQUHLzzCcMkIRBguCWV%2F6SKEbAvTRM%2FUky%2BCozlOACydMAvBc3yok3Bmj3NtOOIvoETjdTb8G2557gupqaDlVPaVycK8cyiGKEcehnigDT4GpkOoE17Egw5vGzrpVel%2ByVOCzOxmiiLPrqMtUlViZYrsKTuKKJAaf%2Fvor8ETon6ucOeQM5MYvvjZqmOMy2zv%2BFEnTk1fIOJXPyhk%2FVxclHnlQUdlSNFxtqnFYNo%2Ft1GmaVO94DdLrfskZfvTuAruV8hs1D8pvfqKVCJWwnf5Fa9Gdk59OLMfb%2BZCrkq3Nbj9zc6rKLJwpe1qrfCMx%2FdMvM4fEZQ9f6XhRPAEDMNG2j03yWAoNgfVgQI5gbs0p%2BxDRb44O2Mw3vAGKPBAPri9mYVM77uXXT6WNIdyLFrLcvebcadmq%2F61ehyLjFgorCYjBpdulAsgX5s9ZjdmzZytnoKIRjHZyvUMxCwmt44%2Fd4yK48Pf%2BiGJREcMZ3Js6d7hcn0TV19cvez7xdDMYgphSDrAmA07cl9n9K739ygjHK32UXNg1qVPthG41p0Xgw2t6JwQY6pgHyUucbHwPD%2FsyI%2B3WTDA3%2FiZMpdL%2BmQz3YjHYF5zt6O1Z8q9abQOruB90OZiM5q5dL9Kh19fkU7hRAtVqvxLguql3auUqlo7jTdVPgHHUZmY6DXL4BSRRlVoAQWwnCRwrVm8xZ1IPbQ2KJiLVWhrQFk4dBCpcv6Sx0X%2Fy4xMM1nmPvOdilZNAT5oCuILys8FlG7PX5Q80mynrpssCgVP8mXO%2BDsfF9&X-Amz-Signature=f3f001c6406218e2d7288ee3723dcaac730cebbee278788c4744de0e7dbd5443&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
