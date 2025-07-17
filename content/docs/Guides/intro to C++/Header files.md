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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6NH5AS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDn9MB5gj2RkwBmCGgNdAbbH%2FR5uLE2Gb7VgTY6Ys%2BhigIhAIkQ5bMuDaWP733JHvMYN%2BQfB3hSEafEsszRCB7d2AqpKv8DCHIQABoMNjM3NDIzMTgzODA1IgxSTbmxQRWSMt7oYOEq3AOAXGyDOLmdrMNnw5Q9fBaGeeXZf%2FtG4vlN4dl7hwBE9AqX%2FEDa9Atp42KrG8Li5NyT0p5PNtHrvggptXGE3agix33EFLD4QZjgwfh39V7QDNJSjYbMlBX%2BO1IvrQE3xuG20DY0mpKQEmspYBQ5TLLqaDLAmt%2BwqBUcyLdt5ClvGUtvwqOlEqBMm7UIsepMzGz5XoN0nwYgenFGh931Qi%2BdrT3NKZs2l5stV3jKHUzDnm2qI3yUvEKTgAIcr2Cfa2qfFp5q5hhaP0o1mgt%2B3nyBCPOO41wkn8e5Erl%2BFTO8jIycSQSCFjbFLhwC994f0aFGjlXOzkQ4cE%2FHBYTV64cJZQmSAnqHH159ldhilahJONxgq2Dc%2FlS%2FDTNQxXZWbWKq06O9a0RLPeGcG2fefE02Clm%2FZNL4A%2B%2BYNEJhdsUr6lBXpXD6bq7PdozRAEDy%2F5xJM7PDPlhMSbpHLq8kY0fp9yftEIrN%2B%2FlLWtb%2BTReFFykCpl1VYtVqDVoZkay9ojI%2BwhwQFWnL%2BgOhTNf5zx%2F1cwpQ3dOBKPPBm8g%2FUpVvJ0kuK0fE3k%2FC5%2Fwnke8Uhrpqpj3CP%2FqAHqEZpIVd1IHQpGA7XNXAVlsN0DpmGGwgUo1thRS3EsdqPRKNtzCF7OLDBjqkAQIOWZHuCTculkJn1RWQeVf5e%2BfkaEKo%2BoVhINP%2F3qbEWwc28wVCAR3nRNu1tIqxQJIVKDZiIvty6CgyRv2vMYJ%2BaxLegCDOMKMUX6kHi5YR8Swm%2BtM1lDe2%2BP8b%2FkM5fqAVjCD00vaTuQ15VnRX9%2BKkmj8mOmCQloFAxC7FDIPb6FjcLwZRwjFTlUOrRExInXRgnOdlaIumlxW3L31Da94kn%2Ft6&X-Amz-Signature=4dbe082ec28b96ead3f7f7291551d3183f8da931a8fd9cee5d1370d241a80fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
