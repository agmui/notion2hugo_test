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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NJIJND%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIdYlaFPw%2BEz7weM9XTptFDfpg3cVVHrgdpk1F3Vh3fAiAzLWJEl9ZQy5p%2FfvOS7HiPaVX0cRuUA1zMfwxfQuqiEir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMGK7uAEoOKWEA37hlKtwDIJqkTfAdNyxdDjPHtFG74SIkr%2BlLfdxcMJhmA1NL4qV%2BsseeQTCMju4MLfAos%2FRDd1X5q6kRbeB0ceTWLYVZfeTvKYylq9tYXeV78hI5WRwfbBLgO23fxSTqnynbHrSJ%2BYWXIGty2INtOYw0Oxc%2FTmPwc0tlhhkFEQcVH%2F1xE1JJEy92o9QIpj2QA1%2B8k7Nl0x%2BoOKFayWuSk4hJoJ7qi01JP%2BVQz4R%2BG7hTDGqOL8ASXQJ%2Bd7mLWUH3edeRETVycGAB9GTKHSNYTwIo3j9DWmsfgMrpXZQJsRRG%2B1wSbhfUBpekGxS55NQUTdzA2V68sGdfjB%2FhsiGehfTsHCcELMpryUa4Hcvq5h9hPh6vmcQYPgx%2Fmdbk83tdJ3ddrENQlQjkvq%2FF6zTGmheLovlu2H20KRjnWlqgN9XAxIZOsd0dHuTVzVRgyB5x%2Fbz4zpnJ1D2lRNp5gXXqXl2Rwhg8gbMojDUxifOVzJQh1pUMDpevnDgcZrCNKDZgH81FtUhCLh9KhhZvO5DWGyitwDTc2BMkJTWF1nsh6fM4V2WQ6Oc%2BN1oF16CiBb1hhLEMxQa5ZTtPPkrTOUfdVmPnfEdOq2kMLH%2BiNW6RO4zM7TDEb%2F9dlueGyZNCh5okt54w6tG%2FwAY6pgFpZDnA%2FCFT%2BRvY%2F6tVpCc2AmkbOOj2bquTsRwB8t1CgR2RSIVk9esiZecaMXzrUIjaiUwucXPVerTSWUC5m76XVQsfrOY%2Fqqw2VSGeToPmIOWbo6Tb6yzWrL1dbdoawVZi0qBTWRPxmYxiCQ56rVUk1MhgifETzE%2FgbRIySkY0z%2FG63tPJffRXAl6G366nbW09ZeTcgBoOvJyVg4xZ3rKUQhf%2BFKwp&X-Amz-Signature=afca04a5fa25e12f97393261e03465f099b13790a246b8b64de3f31d8a5d405c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
