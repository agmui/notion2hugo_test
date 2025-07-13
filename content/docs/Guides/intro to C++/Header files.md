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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DX4VNEL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDOyq76jLgRv8xw1%2BLdUVHcVyatOrVceYnYyCE2L9V%2BnAIgUVC8QICOWPZT8SbLelr8PzFJk7qg9yfV8yp0gN5djgUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEsTSgLQrLOydHyWfyrcA8bgwX6NxhrzH5HVE52bgTuHH%2B7FOJH1OB3l8gLNHLhqhmOf4D3oQWFHxNHnrpSgBHtekiMRllHGr%2FVEREPQE7d5altch2p7KnKMno4HdMxU7CNh4Pn33ooF0lKdzvqrA2jcfJj0BSY04p3a8njcWvAsnR%2FoEsPVKI1ovt%2FCTaqu9MeKqXVGWdiDSuc4TTA%2BSYVhUy4iQ6Pz3oK8%2FbZhVKoZfk90neVr3C%2B6NMUEMpB7OMFT0iF%2BSWM1%2FlziOVCtdtsPwtjQKD4mqpKr7AER9opR92iwZCmIHkoo2QdYaSTgAcCADR3mgp9eBr1syJtglZ%2BIRHSKL%2F1gdfdFop6zG2HscfzX0N4PSUuSEeLwozgnkQk5clfsuJC51lHvqfgz5lSsvYW8cWzgD%2BWEavLEZiLkmMPgeo8QGvi0YACGqFMLfDlJwHH%2FMvGdp9HJ4bwIWSsQjiK1WwDZjNtL0xulT0WIk0pjuL4G5%2BDTqydEQFT9pRkKvFWoNSXSdNgfuAOD%2FgXvDoTdVCISAsFcsVXVEIBSI2t%2BfRU2NAdY8dYX1BesltLrw3jimWGkKX6qGHaqztjqtQYN4wzwPlvQDSQ90gtS9dXgJg1%2Fmsg5dG77eqGe4bsSe2y8LSBbLqYVMLjI0MMGOqUBWGnnnJx92jYAWJTs%2FXgI6g2JvfV1GYBblCO%2B%2BZmpFMaAvPV6sKM7WoeozR%2FB25hMGYMwqLBrORE51GNrmGRCuxq3Cevj2CJp5TzRqB%2FjB%2FTPkYlw3NZNktg2prVHomO4LEJpCZpu6EZO8%2FA0UXnlukxeQURzKZMQ3ehQsNdEP4MZCa1%2BaG0lLnzI5W4gNmYFfj%2F3EN%2BUlfBfaxObNPzv%2B2GL6bFL&X-Amz-Signature=a10b1d90adf0d81bb38494e98952c3939552e097b1944b8c7d45eb736ab0d845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
