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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZUL4EU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD5Zt4dtx3dLpV3nGvbVGZPrJq%2Fd84NKXqbsVPfOH6dJAIhAMq8fW%2F1KXBB%2BGojgS%2FBAX%2BX%2BDRA5y6lXJI4Y6nNhr98KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU%2B%2FasAQtegnav7%2B0q3APqut6qdm9SK%2BMuIYRnIfV%2BY7OFyFk7B4sW27mcPOAED6S30%2BSeVwvvdu9EV0Lw1OG8bfyYQsx6lwq7lWcMPl86Vt251IyCDcxuqSZ07atOm%2BMQlPA7dghOpdf5JghXfUPPWLq3oMFUCJcxuAoE3X%2BS8pPbdpaa2r2B6fTzYOt8CPIf6o%2BxFNopaixv9LMLr8Wb6G32Sw5EwWa8IpSNL14TTp5GMbSdnBUKxvBk3Ykag90htoh7a2bIbPZBLAsI8QS4NZgoxVzNa7HJY%2BOuv04Tlsjao4Tus5xwyOrGi%2FcAtjUFOQAUnRw6NZVD7nE6EG8Uo%2FR%2FIOKBSvskSn01JfkgqOJz4xUTQkHEDE6bbT%2F2%2F%2Bq8kizxIRFrsQQaXSwUaXJS1NJgo62XfFZht3sANGXEJN%2BImDdmJZY%2BhC6W7ns%2B0UtaHX%2BWRPPlyrxGQoEroWS1mIAG4IE16UKUdQfzxfo5dSJx7zaYFQvMDMcqbDTbRkuJ7cjrFjIAt5TstoFVaBSaspVeiP86MnP4DgxYlW%2FovWQ5d5Fd3ifOF8En1z2%2Bo%2FdD2R6mmHrQB6l4FDr7cWzGoDCEo8Z1qctPgRvOTykMJQTQlthRiK2Grdyp1eLC1YP2f9ZieZfKlKccwTCap%2Bi%2FBjqkAdr3kmzk6hImEKh6yLgUG31cKlvXLhwzS87Ofkho%2BesBzFx0glHG5u%2BJqldV7pW2q%2BmF7WvwV3FtyBCFRbGRJIJKho3txsqkhWipXwkLyb2amhsLzo9emPn2%2FouySkCDraeWldM10zcLpf2KAG2Wh1Pde0oAIK2ihJyF6GRVx2U%2Fip%2Fyskr0lcjU4fFPqwZfXhH6R4Jj6DZEQpe3CiAKwaHRUdNm&X-Amz-Signature=c7b8c94291738f811c9d6e5e9c5f42ddce930249c4b23eb148a0a59d2b1ce823&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
