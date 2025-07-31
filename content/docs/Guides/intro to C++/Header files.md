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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AN6Z5C%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEod9H13H7oPqK%2B%2F4Rrjsa3vAbaXQn14Mh%2BRAndjaFD0AiEA%2F3DvXtfAqXa6alZhPiqHdxZG4d8SAgv26dhNHfo8jJoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBElv3j5D5JgKd9fyrcA%2BIerur2o%2FcUlSznJoQSJXX6zl6M1erbjDp210FKdKZJO7LsZo6uld3U%2F8oIk%2BJRYqEPPngtCiMhRO2U0aIST6J9r7c6oXMj342fLVHCUgr8qkS6fNBTcRDxLf6XrKKtSlx29b5uuxuJCTXTBKL3K%2F%2BbSHdQtSfuvEs9AqrdCmJiSanKMEV1w4kR4Z8QC1RcVhnZ3ENyQ1Jl9kjNviscZ3vGZ1VhuPte8M6P7bhFYqzF3lEFwa5wNW1GYVs%2B1ZkDK1jbx%2F%2FaT0MGDOpNDM5al8dCoEarOPtI9SpR3saUbOODpY4v0kWfHoovxKk7qcv3iwIpiZAFMOLHPBUUurCmHSz%2Bua%2Fd579qbMJ6Jb5nggV9g%2FtknpJgusoG2tmdYQ9J6ebo1TP4mkXLu6ASV134Ks9qWfZsyT3EvLSqGSSCRRCXlyxsQFu%2F3eKXDPdApjdzyIXSZISu%2BeyJt7OhM6I6LZ2NT1KufIIaLKlZuwlFcagxwulxz49GqN4p73xRMEQr4KqQ%2F297s0o%2F28CDXGukeozbyj8iVB51rL8tc%2BJMCt3%2Bqt%2F%2FAvgq60%2B9iqtI3DUfyZVV2rOdfrfKi4hucyip%2ByGqneEtVOjUQjFhmBFzmfiWtmLDk%2BjsL0oOp9rtMKm4rsQGOqUBop2XmD1y0Bs8%2B7%2Bg3A2YbDFIF7FC%2Bjg7hWv83PZIPUaetGAZcOFTdrU4ALS3ByFyoEmwQommHNMXgZFgqUtU8Gdc5M1hhmOrfXNAikod1cCpUBumhbOwkcZbjhgEOR5d1ApdLo201fPUWtaSl7CxZ53M7xRj89B3xwCJc8nZMO6%2FSLPBQAkkcL8BfzfLMLMX6A%2FgRqYXIlYrfFqcFwwLGr7W%2Fv1e&X-Amz-Signature=1e6635188c2d8e52d6be3a6024f8b1f2fd39c270027a0fb1fd3899cbb79d3cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
