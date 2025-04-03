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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANTGMT5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFuLvoI0JAvQfEKe7i28c0H%2FPZalluq7MnF6AoIrRrl0AiAD9bLnxNm8lG6np7z%2FIqjs5AeksSYMbcWV5sftadPFQiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMd%2FZ6zt7oUM4qmxEKtwDL4ydiV%2BUsVPoo1pDxeGK%2BMUSbBMwW3Hq2fHHjcS%2BXjPObJN93wU8mecyav91jg8LaF1HiubtlF1JjNk%2BQU%2BA5couUGkh050u23Xi5ea3d85oEbHGVq4xscLYsxb4XKVF9mG%2FSxviLBQNcBHatWikOlRgdCFOaoFcL2Y%2FJXkC8%2F2gMg8Pcp6on1Lo%2BpnJklDNyc15MR0LY0jhK2xCYbXEvTvciCZy4NFURPxYaUNvCDyJLiHGv3n%2F2%2FdmsbEEtbUFHwAPKQeE6GJLqAB16Jast4ZSpctvNWm9osBanK9uRAppEEEk%2BgAIYwMssYdmKuRelKpyUML%2BlMCyDcDYkIC%2Fw5%2BHRIjRZHWR%2FdxozoZMeKhzx%2BW1uX%2BROcrOPGLX5tRe04CqwLCB%2FXqoU12OulwVMRJdZZg7sOa4TIpnRtqGDjg%2BqVt8Qgg%2BWKWWuozz40m8iwWwQVb3u%2BMBH7%2Fuo001cTBqDyQ1b5YfiBST4kjzYJmjxg%2FyEB841pHqnZn2G7NOnAB1bRybku92WCrrLbboxikfYCYUdqK2ezrEw0s81KAbNbC8I%2BXx%2BTDa12wN%2BY4l2IDiypYdN5VyKnvm3D3ACKwFTuAf4%2BNbKaUtdGeoMBszjYWOOnyPQyyE2Bowr%2Fu3vwY6pgGT3e0s3G%2Br%2FN7fOtbNHqSudGlfYC74X8C4HrawHjqmQWGbzoTkDcwmobCX%2B5mTM7RR4y9IVdt28vZElQMixr9svojiyR%2B%2FrLkVJAWUqAJSG2bHEMnv4GLv1NTxnhs7zw3x6a12tHY0qFZ%2B3Bibu4PyHPyYebwjH0rrwW3MJG72miWZGrO9K0SBMASykDz2Wq1iquDog%2B3d1B91Gsicl423tuOWfPYr&X-Amz-Signature=7b073b11bb005778b3f60f9872f493fc30c0736ae011acb8102c36dc3e19d683&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
