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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSBU5CG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG0DNTkzjBnechliWr%2BmNLOMb76uTNtrytXKEDtZGs4MAiAeu9hVjnElNIB7GBdvpB3brKT0MFxcq0PpgoyzBcbvuyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMfuLMNjazn2qPFHOaKtwDtODxIPfgTbbMYiAsUx8imTnXBfDaxE2EP%2F4RCRgMzaLasc8SIXVfKPPJdsLfy6Too3pVuSKASoYdcythoH7146DFbXZMu7PsHur7vCaA5V1bII0qDhMQdMjsF2GvPF%2B1m8nVbmdhluNjrtfpxuSeuPFLy%2FSZ%2FvzAV0SVD54IGWK3ugUX%2BsoF8nxGqSa2W98%2B99pTmuNkVXWEEEbFi7GlW8EVPqPrAUdA0Z%2BoFgmG0RPz6RnTB51OtGFDmX89rERTkiCjVYVroKABAWkkxOnXtKGaWs3uW2iFnGrmDxvJL5GVBVpD0Law5ZTZ95n3q8oRHiUeRkMrriqw0Q5%2FYTRDrr1tNFB0ODTRzB97gxEK2HDOdPTlpPjn9TvhaWbKjqpCF50BP9l7DqrRvsBJRLvwq5ESmCcC0b2dlMtr3Prm4LSKFYHpsIECoy4Fam%2BCqWjstHrbtaa2R1Z0uUJZoS75sixU%2FPpJ0FyNGwzc2S2F0d1yz0ocEe3%2FQsoTNq%2F6rG%2BV9Ypc%2FqSzuKBHQPaJyHBt38MnI%2Fi%2FTYvk6f6%2FkVYCHRALmSZnZ4e2RIs5LmcDyrgYnCEYm1MIUQfobXnq8RCmWwJe6uGrRzSqTh%2BJzc7vNUURtArJ%2FuKAAs2ro1gwh92pwwY6pgF8DhjVXw2nMKdFdarEt5pr7cIsRX1bOt0pwQkrvpdtGP7Y4C03UNpD3h8sPyU%2BZFOM2V0KKX5VDPxcfp0ESYRTrE9g5CoH9qpsZyaWZvoMPh71u%2FKtJ8kcnlU3%2BabLbUdOKP2uY%2FvhDu0JhY6wPYuwvuAyMgT6pR6yhrtY7W9gvZhchRqsoZrP6Lp%2F1JeZb54qnbNPkPeXYcoW8ORrXbNF8uV3t%2FXx&X-Amz-Signature=124e8466e6cc19be62d7dd7de659984e9a1a110d886eb9e7016e421b159edb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
