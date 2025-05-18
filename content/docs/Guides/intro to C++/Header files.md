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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYAAKYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKe9gHG%2BwHi6EXGkJQlPdHqyfWjdOcaPumhCsDHZoJkAiBuCFLa%2B47haAQ%2FTRn19eBNXDO%2BSRhYALyzK%2BVp2E99Iir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM6eapiLzs3nNglLFRKtwDFAkvqJKX6zH3kLZo8I0x3Rp1bYGYKWuqheHUaUlTMyXnw7iRIwiWBSklkyGvI3rUQ7uEo7Duf9eN0%2FGTQjxwf5rEXX7w%2F5p8jSIn0irsaO5cpzAi2UaYyNmbmayJ%2B5xDosGymvfD%2F46N9P%2FmmrTMvw7Z5neVpVIy%2B2PBUu31xnj49nEFdQM8i3h6YU%2BN%2F6uwelMegTKZOOT6WRHQqm0ulKMv7wiSoQRkYBNJbZkpw0Z3%2FgWM3pXU%2FAFqphLE3ld92YYSvFoGN57CqEzxtBhidqQCUqD5AerEi4zcwOjCtGihXgiYRKpklazuqORxjJeatzE4jTQVzE6ura1H0KNsNdz7k%2FaoeiDLO4VhkBUlZqtso6htupUFVWU54iHslw7WLCWasXTDi3kXymUDwGiU46KP0LyMrIzXaQkkz5%2Br3qlTxRbu9DfEa2hFBi9%2Bh7GbBqveWN3iyCjASY4vgdL2mS7sAJdkPr5h%2FQPZvtlU7VHSkifO%2F%2F0w5kkE3ySMMU3Lny8GpvvszrZHpPMMLWHoXTq2F4zRiwxzhiLs2R%2FhxIBJFeACNxoLv7yCdy0X3UwtQeXwsUqjFPJKPM1X8jpaQGVJzPcU6HByU28d6ZDuqbyPf1hQIlVxK71KuEowzMGowQY6pgFtl42ABhFfyan2y2VQnDoPz7C26kYghNAWNJPNXUYsmEzZgvGlQ33jo1uBiaKut9zYkoFzMZkhbRoF9B%2FEUo8YQqwNlTlDi4JIMyHkZCShxRoto9ZFpV1SKH1ptd8H2b%2FOSL4DrnfuOXlNnyRE2mHLxU1N6ahG9ZaSlgjZWlIEaQEK8vHkrxXIOag7%2FpngazH50lE4KZrN5inJldBh0k0UYaJra3Zy&X-Amz-Signature=1ec69804ab21d43b0680eab1665e9040dc3c90d9b05dc4c8e05b3b6920fe7996&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
