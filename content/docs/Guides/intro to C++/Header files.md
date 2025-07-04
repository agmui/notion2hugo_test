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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IA4KWR7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDl0C4HjUZpCwfzOLtbLBaP%2B6HVCFx%2F819n1nvtVMcUxgIgPoB85SNim0qFEF37sne547l0ioha0pJvmmy%2BCU634ZIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIAfg3cQ6zpVj3rsFSrcA5ZmxnwJRgiQzGNVkiPKNTjqaXDKviHGNzDZIzuguqHIShZYTsrLlVbcG0bHCTf6hVxvHEMy1XWkLuHjFZN%2BIu062XsuJxFu2GWvDNkMC8KRezI4dv8bqeY05FZ5dezk7ZluIFQ3P%2FVbs1ma2loVQkmD9DU%2FJ2jcB%2FHxWsrFmng3jLWT9njvYCaE6sU6wvYLGjredEtORTGmMgnai%2B4HOXm6IV6G1IlL7NnPhox6J3pz%2B6OC0AklGE5ARRKYa6nwzLlI8aMifVLjb%2FX1vQTw2Xq3bnP1HC5ff0zGXBo3T5Gw6EF6MFjrROheKCikTQOzIr0VtguzyQJtNhksiNWTOo1dVyvmkRi0jBzFH1YLPSyRCT8oHWwTCw6USEwvKAsrL7bV9H%2FDkhSjtskki548PCVk%2BSTiGrwueyjKZOfXqJJQw%2FrBaUCmmU6ZGAE0L1suikS5NcQexI64egqxG%2FgwdV0xRchxyPR82s%2Fc4%2BsA%2BWmknR7iKI%2B0DLMTzFnvMX8tBggxubXIzlOZqdAlJXBr7qMdekvGDtcI70IJ%2Bp%2BNOQeutZYXrObOFVk0z9MW0zqsYbOw60t7FLuWiQxXwbiktBg4O38YUPJFgr%2BJaX9co94o5C%2FloxeJCvlENJEgMM3sn8MGOqUBV9CJZfM07rjUY4ojRW4jzqYmqYdA3gwEwwac3FtG8SmbeBUltYQu227rAIUgdi0khwspiHVMQBBI9kxsUVSoZArs6hT3%2B8%2F%2FgnGimIOHonXwx6dVS8jLKML21ZHfLXEYXR05cCnm7uEI4yxLDJIIXkmt6JXRvJeAT4VYCpCNlj7nDTJbvuNozY0D74YXHbsuhxN9ssEUZUi%2FU8EHUgkmrKHKi1e0&X-Amz-Signature=d6edcd46821dd3e981fdc29b3dbbd9b10273dd3a4f29fdd70f24fe2304cad8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
