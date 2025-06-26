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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WF53HKJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEtLhpnHrF54fIBJ41zLnflvBp8LXR1czrPr9eg3JoF3AiEA%2BIWXjRtu0yantJcp78FsRFIWK8ou1no%2BbO%2BWMpBdatAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDM0REMKx%2Bk8wk5bRCSrcA2fj18v9MDwsEyRU%2BTY0N70sulMZL3mzyF8ZTSwHOO5DMQ8l4J5Fu644eR3wZZcVXQ5oCiqNLU10Lkrtklogjko9YN%2FwKwZfAjiVenUb13QNtA2tF4fBpMCXQkewGHASb%2B4YrCXK%2FomJjQMtdkPl%2FDiHXl0nS0mylVINN4zfNwyYE1OSp%2BZVtiRSn0fVXcu%2FNf5SUCO7VBbG%2BmMsOpmzZXDmYWjcBsSMhZln0wkvL3dJ2NSRsOLOI71oQEfhFNuSFuK49pHNPlF5uilevo0TjW3XsSfvwU%2FOftCtQy4nAsm8dBve1Dl06uHaiNTgFkiU3qWkxny1hVWIWdStdPQIFbAp3bCetI%2FRV30C4bw3VcmzaS3WLoW1grtOytWpg9RsRaXXAAyIr0Sla4ZNhn8Mf4KfxlO7NtsWB9E43KIEZWg1VVFvXm8o3bx4Qf0N8RUm9AptqOIjQ9omI2W%2BEId9TbNEmqQf3hrga8Y2EaHduRu7mkigLUSr7ebkC15te%2BlU8NNMotRPb%2BPlBg0qduEymhIB2W00%2FTXcwLBl8GdzxT%2BJVD1WAoQwKW0qZYecrSSfoAAdR1iSLUMKAPBt6KV0%2BZB3MgOXoEWqw6ZdH9D08ikADpFSZAtIGK6YRd0nMKyW9MIGOqUBG8eVJkLPaFpBz35w3PBqNEi5guMn5fRQylIJgAOuFtKmuxqF1r2XjItLMkZQUzYNM3ZG63AZLD7c988Wtktxc3Ehq7sgfDqb1u%2FoAlWkeyDewgTf31PBMtmLy2Sko1pN4T3l6u1gS%2Frv%2FBD8V0O7h4CeELTnEthOzuRaLUQVrR9zjAaDSSSWNKLLS%2FEWKJu4d07JebeKn2ZIddLCvM6l5EHJJzSe&X-Amz-Signature=d2f9122067dde5872deb123396d1fc90df16a8be0cff89a57061ff52175f0360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
