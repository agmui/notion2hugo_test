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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGGACAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFRENxrtja4qd4t1X4NI55Ip3KjbtAXmWESqYJM%2FOD2eAiALHf8RpWx0fHrz3E%2BFm6xa0J0a1m5Wyo0bOPw%2BxQHWzyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtbjg9dKtZuloz2zdKtwDXINf%2B%2FayDfdpRMY3%2BSwFb6f37IjRlCzYNzyv1%2FHYVAKiAjJ3s%2BB0jvf%2F1EIIneIX5ZHSc8opKVSzweN6cucUa8%2FpOWqS3SO4xVb1LYQ2dFGag8mcXTVrE6ptcEJ4JaxITrpZdIWOOGVolpf7j0QPexvdK4WQqpCXDRsgXEk7h6vUkwSlxeyMTOGvL3mpPEc%2FhbHrrsK%2BUmBTuu8dGlhaHMauDNJgCiegS7pVLQb4wGav3ZhjtkHCA9XzVcm00EK0J1X2A7BgR0e%2F2ZHIGkULyYmyRpPLfpBCmxLXsNfgQQJz%2BaCYssimACq6a1dxD2rEdZKsSJpZSxTqD%2BTgVLj9TS%2F25Ts%2BTXR5gOogrWIVRVoTWtmSWvhsIw78bRIFVZmQKpn72Dl6BoVrsyoa%2BMNiUdxRTsary8jXlqWjgfDSucIPDHp6CXwHTsg8pRf%2B%2FKUTMNUPqoEnkxgBOMSLuLE6o8BJwxn6%2FBOCFUFa1OUsSvKN%2BjQB91O8KU54%2BVRYM0sss9xp7N9HVNji%2BNAgNEDa4hSDnjAm9yV%2B1xdM%2BEn18LOFyx6bXO5g5zWmayG7U%2FWq05HzTcZNPHWT7GD6OJgPmEK%2FwbO5RsVF3dOtuy1Qa6RYPVN%2FsjRu3ko2eBcwl%2FC4wQY6pgFLlYvI%2FE9lzoP8y2ZJkx%2FVEaFq%2FZz3D9zhoyeNk7l1o53zomFxzaeR7KGaKN8aYkH4gISpUR3MS2HnTRLtXq8wuLjZF3a3aulgGjgyNYnhbDAQ3LGd3M5JyJMFnFhfo%2BDDjyZA%2F1WjVsZyl%2FTwR7ZUF297LvEpcBXhozDvU1Guxa4Cp4d7og4cP7GIbBIBjNPTAIb0F5ffBdfI0QZBTvj5rE%2BUysKX&X-Amz-Signature=90bd24f5e8ff108fd31bf3ea9d7fee5f56c2520cf130256811f23423ac67da08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
