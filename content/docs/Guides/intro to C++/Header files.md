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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNEGFLPF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJFMEMCIA8hE1vBNoR%2BaS4GbE0P%2FgpnSYOKWK1%2FueFEihrNrctCAh8l4O2kJVxT4zh0bw8QkVq91cCKO6dnkOhLwaxmA3KzKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDkiP11ENuv8JwKK0q3ANYDTUGH7bXXsZt2h8lGIVJK%2FQ4qjOq8brSECxtPeHv444I7tdXF3DDqjBSYoF7Zv0%2BQ5eauPmamu2bgoBPwLmacdDPwkRS1KEkgly95mxalM%2Fgmam0qwcsIfjhiXdfPSxx3sULL4YuzIzhCJ04RGdrd18jidBXTFhA8qiGk8c15oEfolv0fGo6Ec6So11dlKhyaqHmzIMMK1TOasHi6%2BL5csmq%2B3TP8Q1Zcp1XUsXwAYv3OkzglbRuC4wmD1HJn5jbbUh%2B0RNByvgVnp%2B3q1qHQXtQSaPGge7Lb4QNhpjR2mbXshl7i8ZoGOVr8JZuLYY%2B7U0LNiNdgkbFWnqBPcOitXmQyDVfy%2BFA1Y9AKniz9PYZWaBe%2BYO75TdwFKJ6fx9xVAoL6%2FcTFtR13y5zfbsJnY65dxkEuNDNbF3VXKLMJHtRDDbXAWqlrlYfxyX4i2d14eHBeOHkn9WIfwrMIluwI6aw%2F65K0NF5GUy1pVxurGpRBaHANPqg3oshndPOxpHEFWQuterzi3eV9CF8nw7kxw%2BC%2FCV509IxFP333n0ML7GLbrkp6oJhvn0CMIKaSgHYFszU2hx6WUZOYA3nc0igJSe7xHnxMmojk5idwnBh0gtPy4blC4VxVk4TSzD3x8S%2BBjqnATW8I7gdvGD8ZWzr%2FGo6XpPCBJEeg6ZgSHXgTWtg6TlzPuY9gCQ27kO4lY9eNKHR%2Ff%2BPsSJGNiczT7PncqUwupmYbK8BUBuwPdCGkh6vluNT76HFITpd2F3iqO7pFqs1dVCXqPAZ868MJ8SB%2BOL9rWRMufBXXnldyhEhKVLoRqd7dY%2BISArgm4bIcSYyhpQ6SxYqxBCLksg96RXbcarx5sjXHkcB96ZW&X-Amz-Signature=22cda1cb5022c4f4468037a6c388575333c678109fcc3597afaded6105a2a84e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
