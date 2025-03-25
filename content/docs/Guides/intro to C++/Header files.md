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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ56AR5Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzb%2FPKy6G0vjSO7xWDSOQ2vNpTOEbFEFXvmr6D9o76uQIgZmRaNIq%2FJd1UGe5oPhkmA19k795oh0o5PDArmhtoXCYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9ki8Oxn1NT1oA1vircA%2Flj%2FzoVJgDfemIeN0urax4EGtrZTCJhKlX%2BFFVSmJUuPybZih5naH5YtxQ4nBZz4DyHXNtxsW2DJn1Co3udE80aOtLmAlWuk%2BxZ0WiwiQkayBy0FNJB2JmETa9nEMos%2BZ6DlaIyemrHaJWet03VmNcoECxHisep%2F%2F9YgRST5AxXxmqcUv9egr1%2BebQqxizk1W%2F3GTlxYDaSUXH5CzHk14Zrz1iWZVd%2B73i2Kchj3NqNvHlJuI0ZqTbvXjnw01PNnC21T8sYHxEPfiGGpwrQNC5ny1%2FWe9P4bmGxuC001QiU2Eb3WddCV3tonrWF92A3qrBEXFwXjXx%2FI5tVZO9biCTea74zmPi%2FfjyHXEfv6TLnkfRmO0W7hHzWJR%2FeyQ9QBm0lsFrp4D8O2ChzvBsXHmZlDfzAeHM6MVbHl0i%2BrQR3WE%2FzGGNEqDF2cBgAYbsHPy3Ck%2BiRjhFen6xajjJpO%2FZXVOJT9jGqUtT%2BWF4uLZCv3CjrJ8Gyl4n6xbfVMWo9hyIfKEVqkA2JurAFKkgl%2B7oBHcwdoZYZG79nQYzyMOS3muSI7MjIfzcIe1HgKvlK2FexGwopJMAPsiD7PH2w0tcZhWEPU4ogQd7rAR2AlECGm8RMyUAAC7mDewyPMPzRiL8GOqUB9%2ByH0ppqcAVemvL5XZpYrBn%2BJBLfMRTNA6xUTBXQYmHASvsxoxLf4dLbYIDHyd1%2BdUm2y5Tq%2F0Cu%2FbKAVOYwAXNRzTn7gxiXTTip8tWw768uE3bymqBQhjb2Il3EQpn2KGX4GzTYPaMRRx3lYBFs6VrWc7tqSBLDT6%2BX%2FZzPBL81RRtK%2FDHx0OTzJlAabrE3GXZkmd246hXFHNaAtyGpd9qoC8sk&X-Amz-Signature=400234d456cba3ac277bda126c34ee293f74e33ec233be12089f3528975b0095&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
