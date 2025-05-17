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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBDEF74%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3sX8HaIrvMAvcaNapTkgp%2FcKKps3PbgoZQxqWyknm2AIhAIkXdCSvOfaEhbhEqEN0DZDZhibHsmGqRJ%2BSWAHshl2aKv8DCF8QABoMNjM3NDIzMTgzODA1Igyta%2FklPvTTqCF%2B8EYq3AM6RMzJlJVWTE%2BVY2XTCzDCgUrdOWVAqSa2hM4m8uryom8KxyEigvDcoNqtv7jpMFzZaNtSshwbwGEABfY%2FD4b2IEoBAPi5Fh4QZl%2BLO21osAFwsw9YAdVuNSBav%2BJAHQY%2BL1mE8HBt6puWzcnWR64NDIrwLewVTcV46KzFDx%2BieW7MnpxlPVN9KlPkwVI9rWxuP8Ad8u2PCCyPRID%2FCkhIeK14Fftr6V5idtl2irAbOerV8x2Eonoa2KNmG%2FKkftRAENGcpk3isSzctuIFVa3BZ%2B3N3DqJ93UqEkRVb9d8%2FDcDknc9Ksmp8R6glHdcsqI0xOkPMu2NGONASLSm2bNtu05yd3Gr5YEywP%2B4p21GVeOxAw9sID8RgSkJJz9ESfTEw7YxgODGxkwwlPgeCWjVFoFbXGyO3DKSksejsT5hJG19v1HD7YYm4267B7BSL6f%2BNpZwdd8rIWryy2pCd1QzX6UQNX9xwj8HA4IhescKACJVmVqg%2F5HP%2BnY538m90%2BiRz4DfPslzVbo13O%2B%2BOxbK65z%2BH2pPjrAkQ%2BR25Ns0oO5O2pXxASFe15K4wpH1WJy9nYMffxENo5kOLWnXy3SEhSZeRobxu7zOmAx%2BMDWyl%2Fck2LzNBS%2BRe5TNvjCVtqLBBjqkAYYmHtDpa8BcJESMaAPKIcl81yzUVNJ3fGQ0hYNuw%2Bxo5NeeVIuhSyIdIsMa%2Fo015UyfU5gH53%2BsGK7bOtYD%2F%2Fh33vOT4%2FsvfkL36VsSRxeQzVIDw2TSaUrMsH8bnXs%2BwipIMA5uXLcrI1aCIG9X9xFqrTPMQ7bkQJ%2Bx8pryqK0ZqWt8XzsxexKfb2a57kyRaMadmLvrmq7NJpRHRCfbmbLImRL4&X-Amz-Signature=ece05c81be97d7698d810f9793636bf601abf8c92ad6f75e196e76e78f9c1509&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
