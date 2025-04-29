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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6RJJ677%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBig%2BTo2kWt2qKNfXrr4nDOHx%2BkKsQ4E5sxDAV7izemSAiEAijWuBg9k%2BY%2BgpA5vFOlqPukFzzjye%2BGAskctKyYRJMAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsPhwJjFU83WKW%2BsSrcA3SJJFZ%2BFAVQ%2BCfWsI3AfM4OZ4zFViuAUso5qgsD6kU7jzP%2B8wUS2Mp894Sbmud%2B4BRWDtrjKnkG1oOr2RMy9wKAf0%2BkIpXGi%2BEW9IUapFcUHbdBmZwxdiQecnvhU0awepFoF9YxrVRTlcsjYcz08WwOilYCrrQANcECd4t3xgHthFXpBoZMg7iZ%2Fw6aplTaU3B1rxThdDkVGmSqDy%2BqLY17oZBxDVfDhINzqqkdIE3BloimLd4Y%2FzePSokNH8G2aUKQs%2FhFn34ETA%2BjnmaJEKpoVxtd1DA8x64lL5MQinl2z1QD3WchCDH3vZK1OoeQBS22N7ZBqBXdIlRi9qfshOcS1E4zjCzCgk7lhZWr20qf9iMHyEihHdFHy4oXSQuq61csM2DkWzP9siYLrjlmVfJifQE8pRMXsfKEInYJdhfHEcSwZfxc1EvXAYaVd3mSWWbpbTxc05w6anSVVktKdITiyVzAj81qqKq3IFGB%2FmKR4GqROQXRT6SvM%2B98kswqSyc0waH5MBOf8A81LdcjYkINuKJI%2Bx0v6Lv%2FgdXKIfUvlBqwIijxnIE%2BSxlYuiJV%2ByrZ2jN9Qr1d5vGah0U7uA2XNLit1Xy1rVb%2FtozrwB3AX1RbRO73jvqEJFwpMMntwcAGOqUBryl8FYSa8Xwa7iyaxbLc6Y8cT1u4%2BPz4oGYMUTowf7Ta5Ph4VqaNPmTSReS3Mn26ngk3dp%2BrJ9F%2Fw3OGvm81dtvBlgo2ECKDWX7Zpz7IvaoFf%2FVjtA133%2BdQCRICRF28878gEPNYjjo1lt5XUBut3RurJ4MiQoIEIRanzP7k6A4%2FZuibJ6diGRQ77SjgMnRAyIHPG16hNaLyQEz5EhjmB2XiR2Sr&X-Amz-Signature=0e4d21d238fe90199bd868b267590a7ef0cce21cb744fe0a7f954e1386145146&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
