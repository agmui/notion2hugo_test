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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B52DEN2%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVYus6ugXzhYc3ydNjbRVkXAtp1mmiuJT%2FD4v0VrRrpAiAIGCnIvSUYW7OJFS9tTDeSOtQ3%2BYUekXrc%2FV1yBBw7dyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMqSxDyyC6Q3OOiuqlKtwDnEvbW%2FvwYa5REIMJb6S5gSdnNl0Kru1%2B7Ax0MNNSKUu2RU%2FCDQ1xswTtN824eCaCMLw6T7rpGtnZ3oLp8losy%2FMLSo%2F2yodA6W%2BQIx7M4sM3Oxun1udPnYVG1BrJCGu8VMIXdUKum5qt7ikVTYlLA2lfUIYZNQoJu3QBspGdlHvlqpQZY00aeYlDcCF8VV2EEu8zoPKUhL0YpqSg9%2FTVPoTbkWieBoBLECkAOX7uyzrla1aQJgj0rE7zfVZlmCpno4DS7Tqhx9FwQdcsQQfLXOsQ5X4dLLDy%2BySBRc6c4ChTDtYHY9LOW2XkEdlSrd8mqaSGwa2vaMqoqvfaTV792uAIVuPMBOPQPnPDyNcv7ngJGi75JKO7dqiT%2Bd1IIP%2F8rd9V%2BkUWrbtXAsH%2B4jdSKgLezzQjsK9Y0%2FS3kz%2FR1hRxmSFVjOWpZhlG4m9I5AiIKqTM55BT0JFf00fQlLhtNuB%2BrKjTHANG1AhMFbE0FSw1%2FB4LsYaFzMwYJ5gmXKcQeVXkyueh3CpiqIk6mrAB7K0yQfCfweRK3rjJN0DB%2F4CIITsbLj4R7KGp%2Bi1cVzGB4maDH1Ujleiazs7JhHwYQ80xw%2BI2iWDMtkCyP%2FGVeDheaeUl448q6UQ49f4wr5LtvQY6pgH2QSHk0KTYftEs1dgs71K3rB1hC9NORKZgtbpKLz6AOjmtUKrSW9DIib%2FbiqxaMYutzZPMlWXJLUHdC2g0pa9XDPC7COl3sAznoG3cS%2F1w%2BdG9QF%2BEEeiPKEIo5eHPamzH%2FH%2FDQLG7y123GsPqk3e1G2s%2F7uKAAgpKlkVP5KCx2dqe4AldNtz%2FgLwuBBT%2F0nCisOFI3k12oLHE5IphUOHsD79uTB8D&X-Amz-Signature=a8af19c52f5153e962167c5ee0feee38da51713a9888ee3d66c7826aae8f61ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
