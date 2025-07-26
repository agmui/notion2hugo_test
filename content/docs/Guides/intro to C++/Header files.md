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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2UG4DS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIA8zRRxdYKFzbaeQi2z7CFAdMbVKBzPenpem0ddJ1tnjAiEA2e5T42MBbORRBdUPdJ5BGfJJBe1QdYUpleMuJzupFDcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIfiNOmwfT3B%2F9IG%2FCrcA%2FA6N28FE%2Btm%2Fw%2FGoH7QReHOndrYb%2FAKTfNhSMefAYPTgIgraHNEzrHqs7XJtCIGat5Iyn3bw7K4AlbALAYzyLE4PrhqkKrB4ecnagF8aFYNC97Q0njLAhpYqEbPYvI2yjG55hljj2jT%2BgyXieNlzDsKuXCYtqjJRSOCFDtzM2aoggV9GUt0IHWG2Z0zQ%2F3wnaxlsKSNypHlS%2FmQ6yNaKICyMMiNWpguc454Bwt5Vej3ujtcoIuO7hm3e6i704BFKXQTLfGCtUf6SRnw1xmry27xP%2BE%2Fq0y7c8SIjxmBGAf%2Br%2B3KLLfsoEMR84GCmzzO7MG8YNW7dPwX5IOfkxyhrCeuCpNd%2FUgdPUu2Kq9IDQoZShQ8YisHd6lf3K6965Cx7JlGpXYoSEQ09fnp8Qb3t8OigHFIhwi7CrawaT3ohsY7en2GhiGhtFM30yjHpwq5ZeK4lzdzKyjZCsNXgeLZMPnVkLSxVo2X1%2F6RdkEtUYp2KfiPyDZPD%2Ft8rPJaRVDgPfU4QqH0uXVaHZuDtKZcrBcho4aJr66iUdj2CShqUN7lJPNJ4SGIRcwc6nQ4vfoQ9z6BuLqPA9prXOcgINTDO4S3Wl8flEOj9efCr%2F%2FIfJLaXcjSVZkT67H%2FYPb4MKb%2FlMQGOqUBfpNWEwcqOlbRKrTRvlywQpYx7SnKb%2FsxhBFOx9aateFD7qPiVE5qFV3uIZQPgqrG9RCXIc2EdpSz5YzeCjkOp%2FZHT9mwPvv5rG8oBO%2BDY3NNcLvKRjZdHxzc4apDM4ihXluOx7YvRbCFMd78Laa7pCdoFvNXzR7ZhyzhA2Qw%2FycI0vaCxGfv%2BeRqB%2Bnq1so2JsZmN8jeTuIJfCZU1%2Fi%2BDQ2z4UXj&X-Amz-Signature=080a8e2c6da9f4f7c266f289f521dd85dc46ab5c72e6018a884cf5e6dec2f619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
