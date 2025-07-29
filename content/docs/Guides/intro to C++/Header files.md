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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3TZVAK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCTPtl9eYa%2FyRuiDGBqnCBNG7UPC1qj1idCtMvHenOXxQIhANVwCg9BpSAAqr%2BHDLFtuCS9BruXm3%2F6eH%2BlBJMlX1KHKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcxUJ2EJN0D3M35Jcq3AODJiy8Yfld0P%2FMIK3hciGqnbPUcLiOW9B5eFKQ14Uju7k4N1NCQbkVu2riyM2lt4k%2FSRRW8tgTKag5FjNoTxOLTlSDUOQlZsDRpIOF2F8JTRcFuufybKGLK%2BYsHteHgsFmap0bMt0ylddWDx5LXHOt0xmvHyiY5mU%2FOgfqdYfjJWfOWgnbATQqxGKxWJhiPuwaJZQF9vQr7q%2Bzz%2BD4F3gDCqpyVcgHQgj3JS5N6aSyP%2FjIkdw5ln2h5Ujn68Yyiuqcx0ntyuRFlTQX%2Bw%2BHBf4YrT%2BzzHmHLRBWv03jmuE2hXzUwlGbyojChWMazxX7tqTGECqmHc6JDvBUQgGX%2Fuf47jskkTk2QPMB%2BjBiYg8zVAkzQWJRuqKxrg42wzaPCw3i3zV8h8OXsQOrVicpvGdEPDDPgYahundMNjf58tuJHSgaMrfgLV%2Bp%2FWV%2B7OR0cN9KYxiNWFoSyIp1HqL1d1HMEeDs9oS3csbu8slvX1%2BF6sR3pvUE75t2u6o5CBGy1543f0UxTLbfPQMCN%2FAL6FidN6yQC5NU963KOJlvSbkJBnfl4Lx7uMcerIEzVXmm%2FN9ketbB08CIg70CBn00VtKRpO7n8tpgj3eNDVipXraS2JdQLiAuqiB%2F1xL1JjCymaPEBjqkAQAx9FX19MR6XFsgDj0sZKVxqK65PyC3m4JlSTVI6%2FJnyp3hyIiguzIUvSzg%2B%2FYNyBrA2lj%2FzglVYKYBb1Kay37t3m6Ay08jglC1LcV1yZnFk6MXFcoTbkW0pAIuevcJu2g5KCAr9BFRV9SeeZl%2BjDquWau2el7WMxoDxZA9Fb6VeAWlslyWBgUL6LSaKA4uy%2B4yRkeeqlYHRGoxJ%2Fe%2B96%2B3MkTX&X-Amz-Signature=8f97e194a7122fd44255d5861a860022218dde2c94c2e82778a3da5815f637e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
