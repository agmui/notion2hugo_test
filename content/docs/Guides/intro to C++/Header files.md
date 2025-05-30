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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YCWMXB%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWutKfDA28u46Gci4Yx332PxIo5QSaYC2vu8XzG%2BPq6AiBLaTE6PvV0MXKM4a%2Bj5D3NFmXc8sJsw0x7awY4Aq0RIyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnwcRii8WQWL9mYLmKtwDcXrqAB%2Fyv4kqztgsiBlTLSL9Nvuh2UuqcXBFPCK1qKyw9NzxNruAWRw97b6H34weoN8G7L%2FEIOSz%2F9JHpue1ijULBmcZz6t3RDKw2mqGDzBFgzqosipEkrGtHyKNxqEOs3sS9p8GAEdRIBuca%2BJYWWF9TEF7JMbx%2B7cxh0UHXNrkM9uObmDr57fVt3DbPfveZRX52PPUn%2BXmY3e8h57%2FWbuEN3Kr3KRMDVq3Dv9bIL5oNgFlg8tLdtwN41hYTGndhuG09Q4dVIiXwF3Uva%2FgPpe9QiWz9es9oAnoeFMMI3B0hOzPLUBDGcq3h0joR%2BlIOx5BF1hhn4tzDY54Ked4qJASIKFrFY8ZGQkrue%2BZohhdCSR3czSeufAWaBHCSbjZL%2BtRslhGdTIguOTgeifXw1eADncjsygKALTxkbqfYyj16wgqjzMMuBg4fRlE8N6gNfVuhJTPZxELlhLtKtLV6mOXaVnPgBBTGtY9U7OqoUz8kfnko2qob%2Bb%2BR0MippPTdteSlb793fi4D16%2FCT%2FR6TrE4rJ9Rba1oGUcBCH7HDF0hJsdUblQkjjnOmBzauvl%2F9uJt4cUy%2FaDCcvQrr3JYrP%2BDtdlYMBpVa%2FGJYgpR5rbdwjBrd3s4yolR6gw9N3kwQY6pgH%2BGWu%2FLPBs%2FF9642AINaMfAYcydDCA93ATrK%2BGc2xyAV89KG8CNXtlRfYTmjeltEvbVy4uKF2Y8jGY0n7XxctCfQRL3d96hWopiwYEfTgU91R2ZQ5PcXpI9YolwEeBvDL7oulsy82bNVsxZCL6aITm%2BceSJB2ZfV5K1Mg63faDnsJDQuK9egQJ624VfAxUD7gvNFAj0s8hm4QLFSjvWtVvu67PEUd7&X-Amz-Signature=7a7c32ce81dcfe8affd1075ec4ab32b4dcb942986405f5b9282055ff70192565&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
