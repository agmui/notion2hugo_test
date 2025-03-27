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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGPINT5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBud5zQ3lPE82TKj00M%2B%2BR%2BgvymqLC3vUWr3EiVWEbsLAiEA1GpM1oGslVCQjMwZ1tVu3V7KNr6bqwkpriwI99nrMqAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCEUOTJ6D23c3EIN1ircA2WTo3d1rNaLhAV5hG2BxDUJSGqWRRKd%2BuNP7Uz9advdn40c33xImF4qDgPk7w4v4gAii4hDvLDuUveuFlXfjgsq7vYdIUu9%2B3rc0EePM%2BurVQ59l7gEXnG2SqdX%2FwGDmgmI%2BlIwujzuxPTF%2FL8P6SlGyxBdtV8dLXJxt3%2Bret9m9XLOO5S%2Fee9wDgviDX6N2VlruxxmDF193ZsX2qbk64b8GptMLI6lgOmb3%2FBmO5Tsw3jvi8N%2Fq3GrdBBW6yHp4DCbMHomA4Ni644nx%2FUC9xu80MF6%2FAQhC4flG8n5aEJw9Py82wIRwn25YHxCSIQXOP0GZyJ5jK%2FawM0EE6uWJLhg%2BdAZAHnzF69SxTpVZpISG1GIhRTcfnNVffk%2BSoD21CnfWoFyqQmcI3oAu1FDZMPuA9x44r67j3coCI1hPZX%2FY1Apo2hl%2FXSZE6BtcnwPSqm%2BU7oc3mOnJe3eGA15qnzvgP4ir7DaeOIZ1mWwUHomQSu0z%2FRt1aI7wUU6KL2Cg4XL23cyi6s8fzmk6or0RvDq%2BfIINn5hse%2BfmMudhKeOl3IMs8NZ8skkRwdKb2%2BACOXoEi1ek0thLmHX%2F2kDWcrUhlSmY8ZS1JmGzPJVTEae15huTtaMPWOaiLckMMi%2Flr8GOqUBhvPia1QxZSRPJESChIyWOVNyCiHit121fOax659t6liuXt4p2SkpI1ZqRGcmISGUdF8ES92eTYuNPaUPnqy%2BKptErYjdZjYy9lOKcu4KabEy5jKmhl1vAWnoqW25f%2BYWLVTWQ0rqd0wYqCIBrLNcITCybG0cIRmUmiuWk%2FCpvjavxM2XAuMozlzGrY4vEEsv9qldUjDZwdB3qiowp9qfaHYjHEan&X-Amz-Signature=29e0643c6eb9d621cf832ec6e76a81f7ff47bad1684782d1ab20c0d0e403b7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
