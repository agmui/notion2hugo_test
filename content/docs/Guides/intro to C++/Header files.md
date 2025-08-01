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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444WPPBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnTk%2F8c39e%2FoLicvOEpN9H58fTibE7ezXLSuTSRcvROAIhAJqW3hc8x2wK1jKjSsGFsSMH9mbY9VSRx7WEb1VAHKPxKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzILznB4bl4kw0sJt8q3AMezycmhW%2BzNjXy4tTwNVYTBLDhqN7%2FO0H%2BbqLBPcYcXvQ4f4kM4P2tTy5zfNjdRRGpq0EezZnx1kXeJJkw5a%2Fp5urA8dzDUioxTxd1mo%2BeYX5DAGF4D68pyXTWi34XNzdc1Y0OO%2Bjcn3vI7jQOprqILZbrXFIVpUVi8jpjg6I%2BeG1DQ8%2BoYrPxGm2ZXSOJ8szLS0%2FGD2FiiI7JNdMih%2BcvjhG8qdnkqhplnMu1cQMk%2BrlFJ02AZAIRQezISUgq%2BsyQrhEgnv4ogAzgx1bdRCW12YS0cXp3LfdtczL%2BCcf%2FJZ1DAgnHjIwZjp34qzvCVVVluEUNbBr%2BCSYNygYQDlRF9RO5XGPulg3AV4AqfZ8bzLAe%2F5Rtv68gaoGzaLM5shqaNnrM0CLCS31%2BpuM2aZNZH9IJiL%2B4rcDKng%2BgX9%2F1bltZ5TQwwPBtZHNxyKVbLO8M4cSgDEOcS%2BG3Kc8JCXUnJ6GaifnT%2FOqEgvamJWQm9NjZD5l4KtRluD%2FIkLhCh7RMMlJI1ePO8Wrr%2BeZ6aYBHg1EGinUcnD0hTd9KIrxM%2BQ21wy873cSEmgA7XCAUxYICudJ0FvvnEJZQ54Ez2AxEpSE8okAum3ZWJRpsh6TnrLn4I3oL30sTq%2FNw2TCK76%2FEBjqkAVUn6QgYpzCfNR7fX1htZ5%2BSIKTmATtzbGJv%2FxlLTEy6kX9K7PSRumsLgby5AONyCkYDwnStVuJSyNs351qjGDDOAduEySN90OnGIlDYRRtS%2BV3CRPJd1%2BT6%2BwDtO9WK01wNF9i7KgAhvHHBne8dEFsAX04PEIrSmRsoV6yySDCFtXwhKQ7lNVhDhkEHMmOavB2rxDpSRE09DCF20Xc93GDjnLLO&X-Amz-Signature=784c8861a2884a8097524ffebfbb9b777529d33d2e9e0faeb108e20885313f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
