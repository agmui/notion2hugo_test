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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KEK2TUK%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPLXbLIUCEm9tdfUbGu14eYGrxYkof0sqrD9h9VpealgIgS2FdMZ1xhpAR0689143%2BxWoExb1ZZWztcBCAMZVcKCgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN1Tti99Sx7GzeLOiircAzmK4TLZ0HL53NX3V9hoeC7RHSa81OO6EmunooKk5rVik0KUd%2FaAu2GBy8fOlGuog42aqG0EBK3hysIvuc1YY7z7jC0hXNfSCxadLcIpVIigmSdr18MkhnqJ37X68EDsm2DEj5SxDZXy7%2BnkNeBIbK5r1SirD5k6ZGND9Zk593gGmASefVHso4Pbfh3s1vxM4mIIWFce4MutZKBcju6tzo2IcWaaQ0N0PA%2BUUoEJtXAO8b1uFAI9Y5qUtTnhzwXcf%2Bs81VcDr%2FijwQEouoCvVwMiQbsOcrsfRa2riyx4SMR7wetcLhhjuN5hdWI1XI70PqIhbOsjEb94FH2uBugFj1mrNDygYsT1ZvzEMvAFGYkFZpkD0zKQs%2FzwWugn0v%2F8SN6ckINUdb6M%2Fn5rwzIDeDPOjMuZn%2BX2MzElS3P3jNpQpXr9LXSQp%2BSThiMKgcVHZsHn3PqEAV2rtDuSlFPCofsq%2F2XGOS3jbKwoP38c3zzFOg8BOknYB%2B6FfcNuyQTwmyRjc1XRxnVwFjkeWe6ZFnwQiEsq1iQ2JgXMsrT69cmQJRX%2F3845l7iCYJwZtOSNHI8wNYNFJGouGfTHwxPPJkU1%2BjkBLRBCiCUl%2FSekx68694OqKgwbpxqVEG6MMNWsjr8GOqUB6rOkBcIQkoG2CfG4roSMte4aOmxbhw7u8IB4Ep9VoKOcsBW7uyD8AHounOMTInpM0uyIUuuqCvhK%2Fl8gb9WW9WxA7ug66y7Dbxf2OkeRpQFaJt0e6%2FG7lyeUCK8QzBJrQwHvkQakYSH82sUtEqge3IWJZjw2t4Wi1CEBkQGzdJzQVcospbHGKc3oEYVmGyGVFkzp7mpCuAATycT975R247pRTJmn&X-Amz-Signature=d48aec88137e9da7d00008f1e95762e0156fd37f00ab7b6a495193b31c119b09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
