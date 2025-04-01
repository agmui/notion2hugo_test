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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNBSAZK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDyv3VoSnZSpYjfjTqL1iN8ySjvpchJuDdaPFweQtf2sAiEArdgNeBAG0JqzFkNAaV6xLXWCowFVRn8nR9aFk5U2vCgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxhUc75bfNnAkKapCrcA3%2FN5yCXF3yN8GgB1TllinTt3sXAhr7Ij6l4YSDe4S%2BFaOBFk3JShXLe9jBTXe7yFkE7Org4TtGlKYnN51oc0V%2ByulQXht%2BhQ8rWZ5ocb61JwWOU95%2Bc28OQlu48x%2FU7JzhzwKPVd2w2s3tl1WMGjP%2FFSsoIva1JGlzwJ5Vmwb3hs8t%2BfLd1x45lTWHBvRG3RE9oImIF18WK2jqC%2FVQ7WkCiipn%2FnlXt16cRcL6dsGi7BH4j931np%2FkU94YDbyBCcX%2BXuD6UhvW4KKuM7CaYTtc%2BM%2FYncJCBmXDJRu2PUidYBA77iKkZTeEZGrFPZl5by54K7Aj7LfEoe0U8B7UddWQHvWOSgPWjuEBqBuBpmedBxhUBHoM0dbxVBvbb%2FqEMQ8SNe7eGX4BCeIcA24AKMtNgnGMlO%2FLMawmOyUtErVD54E4NH1MJfzgSOadG5nrNL5NuUa8KK6OytoTTBHkJ4SwSuWevK4Yi6tyMShIXOvqtE9DY%2BnjKW5uusMxRhso4qn2xpfUgC5QxxtKx3eCgRbiu%2FQCqBLzs4aGYDQlvrfbpolLG2XotUq2RkZRhWfZ1BtiILqBB2d0x19qThz5vFEP8nrHA9CIGEEEphb0q6jso9CTtgZvN3WAzCE8TMNm7sL8GOqUByw1TmSGDOFaxA0zMwuytG6Z4udRm6tCB%2FGzExWehiex0ioX2zojl1CyQctHjiHZftHLIuBQYuXrfDPePBn%2FDvK9jQofPHnLt99HVQJBYYQWcAg7aKoByMx3h3Fd8ddK52Vy3o8k4w8y4Jz1rLRHcCMAKEQMfmXs0tX2CwdGziujvVbbWQ9ZV%2BOYvNVkgaQ293CC9quJW8KYzj%2Fc6DgcFcgcWxSSq&X-Amz-Signature=e48234d9ba143e87739208dbdeb3bdb6939fae792c017a8b7c81b135dbfcc41e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
