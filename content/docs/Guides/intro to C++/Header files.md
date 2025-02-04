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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUI6SE3B%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDRBML5PqsZ7ZXuoHWpLatjBoS%2BSHkxC%2B60sw7Lr9j9sAiEAtXcxoW%2BYlk0RCIZzzG2y22g4VxClcct7QAIFCSmUqxkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF63%2FBaeCE2h9gLwRyrcA7joFF%2B54CIPZPnl3Vz7Jz3yExxcYPw3E9wM2pRKGZK1ySK9XDq574XjHtZF9rXZRS73YEbkBFVCnQb1oYrWJUqPTSn6Ddxqxl%2Fp6cbHpNwgKlthnSPScLM32P4XhaJWpZ03GbPC3qjdRU1AhBB%2FuOKLwhMuYmCTdCpKZ7%2FMh8pQ97jpLxPaDIfamUMsSsXs%2FaGatSdF%2FDzWQn7TIxeWEXe%2B8jDouCNW%2Fk4mJL5L1B6FHcDRDJTmVxBdJ7WPMadNrx%2Buo2DKdmSPsIVivBoljzAc3td6D6I7AYTYuluZC89DfqjvzlmGsGofR8%2BCHIHdLXPO04dzFVW%2B3CjFt9i8QHIZ7VeiwayZgLcEiy19sW3EUChAFU%2BBCabcMsjwVhXxLdpvei7Q5%2F%2FD3WkqvloSbrqAz7LsnB6iJPBYfIKgST3morSmwiWFWosNobR1k%2FJy89bkokb7lrH02j5jTO4ajqlRmhZjttC9bUi7c2Ptg%2B8diB%2Ffa%2Fy5Mcrig6nClkjv8N5nWKIRHRm1QseDAn%2BcnJ9bLqFY5RWglEu17WU6f10Cgi%2FBLj4Hmwqn0gRW5esh8MVfmThA%2BSimQIM1MlH5a9k3BophrrJupyklwhxj18EywCoo7TGhkwv80rUzMOS%2FiL0GOqUB2dmCq%2FtpdRIKBM4miew5c34siErJLXw0FoldSHqu2o3CXnmke94pZz%2FmcGilPAv6h%2Fppwede6IHOilF%2FBuuAcizmc0i2PwyA84zSmgm7Tr7iF5af3mqrnq74XFQF1QMb51zUkqRzE68gzmBGCU6A8xhsCZPR2n6yyD%2BJ52G0CDZQ1dvCLzHza5JokfVzCE9SXl8IglaNKsCMyvS8ED62L2K5x4Zv&X-Amz-Signature=1013ddf2884cde789979d64b687cabd8df3bfe28b55208d4463be223094cc871&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
