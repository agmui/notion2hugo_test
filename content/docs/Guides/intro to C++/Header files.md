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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4FGYOG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDuL49V7yNuq11Uwcet0nRBEHgfKxeA4sFLuzelhrGPoAIhAJ%2Fb0nWYTDcFLqu2mC3EF6hr9QlJ1J0qyy%2B2jeWPgdkqKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpa3qHMFweWyhRPLUq3AMaedLqBsuuqozBXuNjUZmcensceNJlKBSBsK7brNLWNNR9Zb55IrkFhrfwB5FddxmVJYx8lzBryJDo3JpmpecDo0aULbOGwL9xsDxawtFH5B0nPnBAGO4zZR2K8OyMEc6I4IoQPvz1zouNtgOTChnUXl4PDmcXImdn7MeWkhcdwF5L%2F1H0JwGElpDXmV%2BBT9T3YVnwRP5uHA06bZh9YYGLeEOqytE0CTMOA%2Fw2Nuffo07tc0%2ByFBZL0chBFEbrCUcCfhpAqWMLaCMEcKiPjzUFEvkvJDpL8WkWcc5U0DRSItvcvay4SLHv1a2sNESzUK2iLYj5ILsKvuCKhB9qW9eM2sBV8c5sbrRoxTcwsfFp3JR3SKGr6uOKkZ5bPPHoXlpOkI03rqfDVAbJ3ZvOwG5q%2FyfMfKyDocKx0sWrlhQzvXLnW1sjT5cH4dYGdiar5ZW6DCdaAEJuUfsh0P7PZYSdaBpW1SAaBbTuTyK0Uvh44OtQ30uxBPFmfzL1UcMazx8EJaj2Hr3dh3J0PLLauf3VgsM0CtLki4ipnkQvD%2BdP%2BItOGrQ0Yn1tlgCay5kSkeNuX1dAbpI288X5%2Bg4YW8F43yu7C1CJZGaeG7eVEb59MmEoxxUc3R5XyY7ZWTD72NrABjqkAS%2FeyIwIW4p9kQJTYJLI7YDql5e90L7d98PWiUMlrbUfCTJktuzWb7heaRAIl8Jh%2BVdO6yD5XaAC5h0PBWeajvlf3jQMM6iUKM7s%2BBAWSc5l79HpdHMEVaFsa7whQz9P%2FlXmRQAsSq8U8iSp1yShgD5WmLAE8HEt5kc7Wc%2B2Z1bnscoSZjEP%2BprGcIwptEVxzTkfXc1sJErEy%2FtgWSDZBIwGaIIj&X-Amz-Signature=7889aed9cc3c9804b2dc63c84f8a1b36904aa787b1a150b1a3ecea2b8021cfd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
