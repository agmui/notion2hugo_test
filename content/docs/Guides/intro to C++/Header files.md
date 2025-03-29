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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUSZ4ICD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCGGbndd60hKhqjuehQE96ED21wbizY%2BRz4ewEPwDf1bQIgIEIaGw%2FKyxFotImcMm4t%2F4wIS5lnq7%2FRof46d2nXllEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHxo5KlU5URcfeXebSrcA6TOhRL1w2P5mPeJSgsflzX4lPBSOKu98598s1fDkdeaignU%2Fa7UlG2ekSUSeLgTz1t2Z38wwVA3C%2FSb671ldkQmDBWG61YCXwmH5B5dtqlZbW0e1gJO%2FBqS%2FMM1Vy8Zs5CxLNNMPmIu3seeIJCkU9aK1qnVEoVa3rNpsJCevHgwmkem0SuducCGnjKdiL0RZC4NIj7dL7nl7x4p9p3DCU1VjobeXhO%2F3XuX1onN49iad2nLzsqp%2Bm10KEGMOK%2BmxW1%2F4pGwECvInhoPDXCnkU%2FVcdxYoyNwsoht47zG2jwYI%2BMUopXcmBRAQpM421NYjanuHaAE8ikhNymxUt8MjDUdYbXlzgak5mY1blKA%2BA3aEbwCnez9avkGTiH6%2Bc4pCuolTOjPvpziBEAsfwXPJVWj0dNt%2F4GLwSgp8nzOR%2B6aqFFWd%2F8ANW3bJST5Oxh40IalRmrBZlA2p%2FWZn34ArIk6xQzObkYocMr7A1rRVo3TOnJOYk5HKv7kDnrDLxMqpHcyLJ8dD7vAGR3kAiDsM4uOZGnC6HzU1VhiD%2BjFqkEep9utkG8C4713BK0808H%2FdND7SBHS3q0RlvqRTMpeIRg5OmkwQtvlzYU05HQNSBh4AYXCZqk7q4DusbXFMNfcob8GOqUBX5Nn8%2BtOztF3V3WAmvjEvpBmUMGfoB1UfvqNyjjEyM96d%2FomGDPx3WDaG1YP8yHY8OOaZGewDzscSg96ZWZhblr6IS%2BSbOxipb9FnvNdjlUUzr1ZfObjhg0Fqx3sb%2FyiMDldg4Suq59vFXaH80LHtpaEcXjXHfoulBKBXZqsnMlnwQWhted3G5UcgoAdGp1bn5lp13eHxklqxBsQAognlVV5s8Ih&X-Amz-Signature=a97679fab9b2b3b27e85997105384622c9ec55c09613496990cb173b97bb3781&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
