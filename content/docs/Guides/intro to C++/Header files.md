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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCPH2VD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIBrQUHf1SGofk6SrkVJUpwLYl8GBRIgywAoHqWDYTbF2AiA25br8u4SbgTHk3Ffz6t6fQ7eqnPkj7hc5JgxLIAzN1ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMh3TlOO3ZXh2dB6beKtwDOtYHt5dXIaqE5IyfHyHPVHmg5gN5%2BjN7LyFQ%2F5%2FMwyQLKYGJa%2BTVG%2B3LnQUnf2q%2FGppWLoTT3Iuaf99XnADiQfb0YU4eaVTPukc70Suniezu3KR3%2FIGivbRGjCKJ2GvrOgzzo7spOvB8eyPAE790xZyFkv70QBprpThsndUD4OhacuXrEO5d1JzwzxW8YAGJs2mm%2FgyQPcyioZUnRsf52lENFwSkmMbsQhFKfOEO91FBk2ub5iSf2CYPA55rQ03aDXIeFkPyrL71tlZEhpEzb35a7Tdvj3iS8rTA8e%2BtoQS0C18TsO3T9kBOQgTepPDVDj7wkxvgh0LhBrEqsAVg4vishrLN2d15PixoehNIGoTV9qduJObWV2IkiG5Gc3ak9n031g4hyf1DWDiF2tDDNtflQR0fETFQ1XMQipTTcD1R5mVmje4vdHcoh3TA9OxQpkJ2bZk5GISuR0%2BawY18obAuu9YZNnrwmxq9%2FFcPwRybgDqK5QJBB1Mk5XUBzcHo9mWfnRlAL9CdNfqoLfaPo3OuRIoYM5tPnwJeSxjrocrkTC84e%2FhOxXJ%2FjHClRhYEnnruB50oQvdi88pRthRBcNpWkP2ZZJPQg9Z8b3cMyBtsEONTinU2AP4QR30w6oGOvQY6pgH9FYFzH5I7B7JlSkjRlvpf51VOl2en3xaSW1o28MuGNTkekVUxKb8Kt0JPTJxgBMPprRWwGJifAmEHIL%2BNFtrUv65gJmwWLIIOZcTzX3A9Y1m7VNPLZlTlPjebRqF7jl80nN9v4QsWNytUH%2BMH%2FrV60IutZ%2FCCMaodU63UshmdiSkeQwF32RMPUM7dAHegRNXpS5aghYLNrUXZtlBw93Aiio7VI3kc&X-Amz-Signature=d6fc3cdb005117671b9945dae7cee1eb1f4c12441efcbc83c20a6d09d0ae326d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
