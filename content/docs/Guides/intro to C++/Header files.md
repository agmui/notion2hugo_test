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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMUI5NY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCjgxfh4ciy%2BUsU%2FHTjDgOxboNVQ1RAGd5DLyg167fZnwIhAJUuQO8zACoCD%2BkGKVlCWOxt0Df18HSNDjCYFShT4knZKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6ACsJvEjvdp2sbYQq3AOM%2BgqEMDMO%2BNy%2FCs6VMreheeSOm4Dk3HNm%2FIHKs%2B1wYWI4dPktWDTFu%2BmxQbMYv2UN9l%2BUV%2BlqTuiZuD%2B8CVK4zRLeEJCsKt8dYid73Cho7WSu8jFv5E9vY2SsF4I%2FIl1TcCeDjXYuNt74nlU4NoVuYAl%2FQGD8tlIgWFQlQ0Z8x0C%2Fvbb3FEE0B7%2FKWGv1Vjs2B%2B%2B6YqZlwBg2k4Twpv3070EdUFhlnFVW4CpWbDsJ2HrtDicZCtTUKPrVyZ2mF1GC%2BWJlJgn0%2B6ygU2HHs2Q1OpDH%2FE4B35bhsXB2NT4B4Ijv0pT%2FpekD%2BkVGdp0hquWCJsuUNcU1znPe%2FabyL1pMXSvuNTez6%2FVHpBBrkb4wu6EqQrGJS%2FF9BjmDGw5V8w7Ll27QP04Y8fttHSZ1edW%2BPXMYAMCd86%2BP6z5RLJCBiUjhMKCfaKjQFVsc6nkMlvqKi9G2Jhcq6agYhJkbPdCGhUDUDD8%2F8GLDrJYi9VyEJIQriRpa%2Ffc8Ve3v88zCLjinYxv3UaFXKSxbY3S4it553djytDCXj4H21l6812f1N3ysjgNR0EDt3SAhq%2BXZFco6AO2dNqZKldW6EUZn6pUlHGNK5i%2F%2FI%2BUOQtwUhnvijAOarlg5QfLRmKQSBzD5j92%2FBjqkAbRBbRoB54arAEaO%2BwK3%2BIMNxpE4hEj6m0D%2BinAV2nf3cavv6bJzuv9ZKBqYTdXKPm%2BmvvahlXqYFVqYCsS6mYH6rCPC4vL7KKbZgo9wb3sX1%2BToLb8Vl8NExqrN9If%2B0pl3L2XpjTYH6%2Bte8PyQRjlnOiGjcUS4OufFgFGId7ZxRxCgrZjRxwQURRYDL%2Bws%2FfJpgjTSU6hyM%2BseLX70Gi%2FvzvMn&X-Amz-Signature=9bbece014dd91f4a23b2466e35fa31bc8f6d566d5e2293e106435f6b55ae535d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
