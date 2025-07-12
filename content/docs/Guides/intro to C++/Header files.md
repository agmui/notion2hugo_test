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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMM5Z4Q%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyWYuZXcR6CDiRqAWC3RCCTDNt6TMMcRwz9GRXCtmpWAiEA%2BvkgOrvXp3lT66yuSwZyW2Hy%2FFAlJUxmGQq9lmN%2B68MqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxnMH%2BU78vkLCn08yrcAyst9ZKSUKvKS6u3y%2FoFWDWsvvJv9zFyowQmVYMaO2N%2F%2FfFX%2B00gbCrea0sEvJCASP9pQAynTweAuFxk%2B9IxJyl21SUN%2BZERd%2BfHLCEg042d%2B0YNFcv15n8OQ%2B%2BaxjHIpb8PmP09xT7CUXpZUtNPkToYNoPND4NxBroC8IkQcKy7iV32LiGHVKF%2FNOfSIE3APtkO5FoBQeqv28EiTyg6OLw2BTaH%2Fokts5BGGTcsP%2BQeM%2BxTZirzle3LrBo4%2BTJdGxVpVtPewpO8ujSykiN0jv6j85WvXpvGUMAWOfDYlLnFTomgzXlN%2B3uU3%2BhknDuiVBag0RXLaCIIl6OcD2NxHMHD35Uw12ds4rdNepxouXmXDRxg6uC0yHKO31dAMjuzcEx6bWiUmkBRda5mPQrJKUtNQPpvOB%2BGj%2FGix%2FhaRmCAbtzXG%2Fx%2BLSmqBaR3qgqvjmACm%2BqSWBADzaW%2FyRdm2vjAcP68llGt39RQrYGoMxI38fMR0OVTeWhdDqIc2GyiLprrl%2BAuTxY%2BxTcKtTIyNh87ZOJ6gZ%2FDeo3FY2nDTbPHyWMlV9wBKeG08IJGd7%2Bpaf5d7eesI9b6XVBXEMXSOoiByN2k%2FGTySEab0tEK4giC%2Bngt4gb0ktil%2BFaCMIXZysMGOqUBWV92qCEo2TG7gqKx6lEFzPNAHu2qh7HV20cesnXICKSqwrhBJ0TXccTTmbcFuzj4poRvdcQk3nh1w26JEuSXS90Pp3g6FsAPRFtQ9%2BMqzn5hp%2BCdGxF0Udh4Qv4V%2BsZN%2FmDoCOcYfPGXg9WRv7WHLTaQDwLSZXt1AQiAc5A5B43osIPWTdv%2F1PLx1r1CpPzpN9ZO6PH8Xrq5kltJC%2BxDchowHcLf&X-Amz-Signature=172c1b11f419c966248646b7b5ad1aa4c5e6d743f6d365180c1a4a475177be46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
