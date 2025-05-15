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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJD7PH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBFzfRAY1gZeCWR1%2FwtauYoecvPGf2EwbAb7Ej3XCv6xAiEAuzGhtNiZKPAWMTIYA3UFqM863U%2BKlR57KW8M4WCQvrsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJ3F04x%2FBlEwa9zmJSrcAwam%2BsKmfIPkK0vhD0%2FepZLO4kJ8Q5d4Q9jM7SlkzRq52OVKXc%2B%2BzL9uHd%2FfzMRJ5MtWrvXuE%2BMQmPiP2I1hgKNlumk5Jj4EI8BQjPmGIc2UGS96R9AFNIGtmav9vmZTEmFhbV%2FqHYt9udkqpLPoaGqkZsEAAfV0k56WU1Bv%2F3HVBfEqS52bJ1DCmT8sD5EZ50BCjRV7UOuTmKtxhkcGtdK7cTravvmGfog7iHePGPsFagD7BZCymL8K%2F2m9%2FFfOSSpfybEpt%2BUxWiA%2BEjAJXLXc7IXm7DIkf%2FkCN3UWRIorVFU7rKdXsR17tdshb6loCrns%2Fj13404eAjl2wpqusjnHtLxE%2FaKd1txE2IeYGdNC6j0eQq8BN9vq02rB0okM6GSnFNNX4cRTJcU4jMSV4B1EoZaczB%2BYs4tpdVcAxwp2ha2yW5%2Fre5CSRI2AwIo6RUJ%2F%2FeNMHm6pvg5MCd3t5FGxAOvquoEY%2FJXe14BFBw00b2lOe857zHMuxR%2BVyGGAVNEYnS%2BApZyXB%2F63dzcIxTsACkhsDRtkU4lgVrDqeAXYwr%2B5%2B5IgU%2B3%2FzySwH6RSeJ%2BZ5pSWtWm6vcRW67Ir0PWTXzNhHhFz2bBBJ55oTPou25r6Fk9Q66w0xFGzMJngmMEGOqUBGga3f18pPfURledw%2FmPHfPJHq8aqT1qVfv3o9IG83YpFONhLCDmlcBfbkIhtEZfrNFQgvN6ci2sbDeAQJU6hZTnWXQiTnI3qXgGTxP3Zvfq6D%2FSWkPBzwA3mwVAIvDpyM3oGQw5TaFN4FAhvvcLzNUdsJKt76hIQgvQFE2i%2BAv98KQqgmEu9QFeMIcCdxSHlwADICbjtytU2fJxBcNlpJnrVtSzU&X-Amz-Signature=1897b5e35e2b2f18ae99f40acebb1037857d825bfb324960e48a7cbb37dc1bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
