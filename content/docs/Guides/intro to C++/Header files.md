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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBIMJ67%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCEn9Ic%2F641rGgi1w2%2FmgOs1IxwjGQk2JmvI3YVnPdlJwIgAKlQTLQ4WO39jl%2F3Wn%2Bpn4uj6XFxwLS8aCv3z5RBUvgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDF2anUAIc81zJJs%2B5SrcA9dKVYZ6bAfdAI9lkseWr85C%2FQwxX%2FAh9V1UTDhRg5VjgU%2BqNV7PiWbzyR2yaYtIzZXRkeujDtINVvO2Tm8yC82KsUhUcDS3BRaFcz2dqszJSruBtDrQMZZrHRqmBb40QJ8k73VLUnIoHRGA%2BnYoh0AaTn1cOx5GfaFTc8%2FVcQW2n2B2FZBAfhPFR6H4O%2F2mxuEgHQab8ikiBMSBJpuS%2FUs0GCglvQrb0dODWF1uMlKK6D42OqG6LVEQgl%2BsBvismhBTcLGqAsVkYmtR4wE91TLwcsvJPEMx6seOivpIxxwz1RpKZvEcS37fbFC2n27L179Z7NhQWMxt0pNg6MszrGnu%2FxGVmxLi%2FeXFcuYb0zVZr0Cc2cNBrok0WwzTbFZEJO%2BRlAymm8JqTWIEqA2YFsHDVq3a%2Brr6dgRuZsqoSaSn5EgFugEAmSf6d6ixTtgQekWPSpSbujzaRdBwlTBgmQUUdUy%2BECx0QIDSYjlbDbpRr30peMG3fL9x243oVLf%2F%2BjVTbP0o2kKnvT6odH%2FzO3sHbCHHi%2FJnMa2qU5NB%2FTNO1lt0nu4bpn9pi4D%2F48VnGz7ZGNiBn%2BwpNl5RNRHG7tJ%2FFD0fLQG4Vd0OBOgZgnj5pUc4aW9YASel0cXwMMvg8MIGOqUBRjiEeWP%2BInLfv%2FV0eiroKzqDCZtaNgV18ZgwdZL0pLLB%2Fg8K5J0Au%2FxkqgPtEagZCVtsXjvurDdeTMAV4gmldCOeOv6SJZTZIUmRNJMi9ra68%2BKVKorgy9oK8rpb2Vv8wXPE8vePBUAeU1k%2BLFapaWsYw5M4IW%2BqyT%2Fgmq8IKYyLj2kDto13%2BpMb1e09jXO8V1N58Skf%2B7tL1DtPHqVBZzhdeGQc&X-Amz-Signature=b4a4ccc748a263f02898407b522ef04b6e13fadaf8d3309c69a4ce7c7e72a2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
