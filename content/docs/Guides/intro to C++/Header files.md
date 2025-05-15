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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YZRASTM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCx2D0Sv08rOQhCgiw80419HyfSXgumhuqPqr2xvG%2F5iAIhAN7cbOvFbG7wU3sX43ki1qktPMOrCtzOQ3OHETVzqg5%2BKv8DCCwQABoMNjM3NDIzMTgzODA1IgzS4amVQfDbnz%2FQJZkq3AOOJF5qSlGyQyHx8156cOuRt%2FsqcGEVCu%2B99gFJ5goYO2q6zCk97KXd9fZjUTohjxNun1Lax8q9vH8gnQTr0nZE8%2BGYkAOl%2B%2FnJ0l8kFtBj2bu5kWbSXaML66a6HA0pwQSesTEB%2FFm19Aootauv%2BnVx%2BpEFf04Q4WiK7j1RfemlWMZREA7x2Okg8Ao26NK1it9oH8k8Ph0Ash1a7npmRrPmhjC11fXQ3YjX9S9z7E42Ey02s39znLeCK7hRdtAcZK2hbdtMV5Xk1B8C4r7mp%2BVUZeZpjYTtd1BcOoDgj%2F6m4cF5aNTxIzS3WzQHEWDsVHt%2FqzXfEb%2F%2Fh6y4sYuTo0vnFptp4TDYDHROWr5k1pnagxTX3Nezt7IsQ3dCIzFSoKsdmLLjPxAKSbKp3jtI78vGNV%2FyiQbA7orB9tP0MSNt4Vees8F61GrzqmF4b9YAjkfrJccUq1wWtquiaTZJ0BTjMY37TTyDMR3k6S3fZM80G7j0%2Bmm4IHhU38lfFn3RSmwI4mGszWaYqYcShdryR%2BlTC%2BPsLh4Yw0GC53N1vOyJCCyHW0qGeVV2QeEPYvrZqW03ujHYnIzbSqjxhqaCK48jIQ3DZhtj%2Fm6LR1G3r34hje9g7Cstfv0tMU%2FAuTCPhZfBBjqkAWsNRnGWZknAdo7NniC68cbpu2B2z%2BhBoWidb0nrxgv1zEVG8GqtncBKgepV8StnRY9RIU2Wgv19Vm3vlTcTEQTzQFv0oM2CyN3oXYQNWATqCVy9CfSb%2BidG31fhrOgJadVhMHHbAXvvr%2FarsDKllVcQmeMmbR2ugKGun6Rw5l8%2BSvnz4ZenBDlBUMz5yam8MQHSj%2FeUe3D%2FmLeVh96SkGpz3uZB&X-Amz-Signature=be3cc384c8eee8c35332a793be3bfaf4f746bd3a64ce188d64e4e76dd1b29535&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
