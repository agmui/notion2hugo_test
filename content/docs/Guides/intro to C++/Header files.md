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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNFE6UA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEaYqmcS5RMIG68AYYI%2FYT44BZ%2BcOXu7m7RMkxCUP6fBAiEAtGpv%2BzMXALEb7doldI%2FqE7z4hN5tGOyDjMCHyp0LCAQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFhW%2FDM8go743TJA%2FSrcA3GGfHa5VCTMKp%2BFRgn30Oh%2B4qIFuBLdEF3Lu8OEPtGdG7TSG%2BrOKjNxJsQyv3%2BdLRKayHKxhiGKCBHfGqJiVbHM16uk%2Bq6QbVlrIOvV%2Bppzf77Ws7TeP9UIAGsPQFAuNbC1Duir51gf6APBxtiSj1ASDSrBssOotsO%2F%2BzO3GKtMC%2BAka7uvdPG9y8h4ljTuVIxGDQd16WalhtChkT9rqTWu%2BG70OEH%2FFzd4KqXxNxKQYXRES5TRK5yr5ulmdmAfc1hNaUDEMyfoNv%2F30Y6vHWn0iy6274ZqBQc494TCosiyZdBsQUkhXxslQAtCfggupk79h00pw%2Bbwjfkm8oqYBMBPiRJ2A0vZXpnuMozRpWNJLm8PFxsigrqv%2ByJ1BoHIMa%2B2c7uwRCQ9PyT%2F9kLVxrGlhRwY2E52PeUET0K7pN%2FnqoSsq6GkDHbck9hjU%2Fi%2F9Nj60U1ZQn6AsBpW%2ByTXQTxZTvmZYaHWT2jHZTqB%2FESD4qDTbU96znSjKSRN9ZaUH6xD37k8KjQ4jZ5hxzDCN01hkaMyrSlK6u4hr%2FN3fGWZWLeQSXnnE2E7kZdUjSb4znCsrixRb1cbLMmXGL3tsxyPBSuezr%2BbjzEn0bFGdb3d0JNEYUqGv5Q2Rr5oMLemwsQGOqUBf7gdW0X4eer3hafSbx4IcdXQBTRClGJQOyU2Tb%2Bx5f8lsVL%2FA7LMbDbvBy6J%2BuN5iKwWduovVdD5wNvH5D6ck822YYXSqrW5raWhSII%2F39VVMdDrUb6sCgV%2FvZ%2FdAHqB8tdwEUZnbMSx2iHWoylP6JkQ8iZ1VijM%2BWgsMsS5NnuIkEK4NjY4xoBaO%2FZD8bjEFEU5hpAtI3FTwYcBF67hnG3bXwqQ&X-Amz-Signature=8469d1af98fa605125ad90ef48c5794c8b21c146e0b3779889157791143ab40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
