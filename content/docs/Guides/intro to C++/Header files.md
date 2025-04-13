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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B7SIRHI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCp0Rezp32mkEGKtiJh8zxcwmEOLzKY6FBXP5r4TFQz8wIhALkx%2BmbPkGiMT%2F3oOIv0p0EFiDlziMAjEqvKaIUrhS4NKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwWut6zIiWXdH82c0q3ANwMJOweIkLZlLGn%2BlLBc%2Bfd7HOqZ4sDddjOSlC%2FUQJjRHFNisXBJZ0rPgZAw0KTEIqwzMvotRxrcAqKSTwnU00moRaEW%2BH62oRCK0xthzRyycy%2B3Asa2CyWXxoQ04LQvkCtl3IIy7x03w2Z0qXYYnp%2FUQ%2FU1MBHgl2YelpFa04CZaZNxX1z8Vm2n68bncXD1rb2aUgBOIDpW3ZZmdvUKTXqPFzkxrUIMeKnPgjHLytQDZGN91StzFoDJq7PufviIPnx%2BBkRxMxYxFssCYv6xsT%2BUZP%2BVoxh1VQ97yTRdLG%2FLAfrUek9cEUdmwYWMU%2BwrOGKACZ%2FcL7yKWDkppMjLBTbZGF9irYqAOhUuoTJlDUGcCWjBCCKdmv00%2BByvLkCTi%2Fw%2FlTL1imgGoq4EMhEdWLf9nWY2%2FcYuR6FR29dlzTcpUrMySBwq%2B1ZXy%2FL%2FsyxJx5PEupCj335LUPoY6E5kVZxjrKfAJ9uF94L1SWgH1NpZHTjha%2F8DHFXdeKXOQVqt%2FH1TSUxOXbzI0qKmr8UD0gtHbiIiEs1zfsB1Ytlb%2B9ddM4JISPATg%2FDxCqiFXqU7tXpTSNkFPw84VKmuEJkkc2f9ZaxZBt1ml%2BidvX3D%2BB840TRgvZ%2BJZBlLm8xjDc4O2%2FBjqkAVVkvtAHioj1pmRnNl7HoY33dVSu2ujYpPsqfjJEljHVCYkzAALuDAygf5zWXG2znLqT9yNHJpwCy%2BdSUjCCvI2hbf2QbePwlBAD%2BvCWziaMI87WOAlTBns8F6pMJaRnCWvrJ1ER88EYBebfcooL1FNCNTfa07R2D3zgk6Ls29jduTT1CJr55NjimDNMR6grfmkGu7AxGnhCYHyconLFMeKw2dHz&X-Amz-Signature=62df782f59c52d92e9afde1ef8cf12326b899bd762f5ae8c6027583602a37c69&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
