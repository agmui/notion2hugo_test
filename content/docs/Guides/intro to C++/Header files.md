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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLRPMBI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj6ZMmK%2FZs8mCqhK0cyY8oPp8bvY0e0SFxWd0lsOy2qAiAI60KHlW5RTqhrPVg0BBPEj9JoQJVZqBjdIkPkRDLz1CqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrV7m5V8HgR83%2FRD9KtwDXUq3NC3Ok9oTHB9EhBD%2BIJ0cifxuDxIT3mf3G%2BIOnCJWX6msQUvgOcDHYpI1E7MK3sjXaQcshNjBIaLjfEpilTmHjYK5u1M2QOkzTlzlZsiIfyHfcrSnpDIHbgURPV7ZoUVwXPBRCEVj9CGr%2Bb%2F7v6p8P9B%2FISR7jiw4u3bcrCVqaz4UM2nLlVVmN2aJtj6iuxULd2imZFq7shrvlA%2FzGjzBQ86i6ZZpb%2FEGQyBlkddQ2yp1oGrEP28DTTM1ZD2sT1lj91q5zrBZDp%2B3s%2FbfoNxIjtBdi1w1EYk%2BZPnt%2Fud97WkRbiJq5SDpfpSrk%2BUR9ntusoZnMjf8btyVrH2JfnoVUmVhV9HRFGAq0DHbuE4PV4BEDeU%2FBA2PFA1x%2BUE1D4%2BWZCN5vGP8z2JbAWxXuMHWt6RBstogTIz%2BEX3uN5EzuLNOn1uFmg25bHJy06lJDiiyYDP5W6t5CEnIcSNFApqLquQ4dx1PKQvJj1546e5hk3BpAj7hJaSFddqR4ftkPoQR2c95amN%2Bc%2FmfiUlg4VxioL6LOQGDQn7KRyV5wKXfW2TFTvuKD%2Bc9mrHnGRegZT0H0FWqvpCzuoAGYLESVoGTze2X%2FBKXZ8A3iw2BsO2rfmHaXYNotc%2FPZagwtI%2F8wAY6pgGrvVCJ%2Ffd6%2B2jOdgJ57WdaZwt%2FJI4tdlQgE6nsuoql0FTVqcrIxy5Sf%2F3ShqEYAVCEObcPSnJaO%2Bmx5R2XWqxVapvoSKK1wI7nn3c6CIx0C2klX6z4JQcfdLzg%2BlGAAVeQZyegBc573Ri1VFTkdi9QOgnDdkMT8SQI71Dkmqj9seY2kos8WEr5BpLbiaHUiGVsj%2FuFIhYsNzfdOkc7b4kFhLO42GfQ&X-Amz-Signature=4e09a12ff49597ace1ee1e17628206352b5c75160d17313be1cd192f61272de3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
