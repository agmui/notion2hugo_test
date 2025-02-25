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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ4UX7AD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDsWoq50WHfkKZ2WYgkrJwWtcIC0YCsugL5dzT4Ojbu3AiBKBbZ3CuupO6SYWUjPhrSyLnyyna3LwVX0aqv6N2cOKyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMnikjVZYr7%2FUi%2FW2XKtwDQCNnZUgQuXoYzvaR2sjweWF8OhzURV08A4NB1gHKoFFUrSXgwEAcXsQkOlk8qa50p%2BAgAe6gWYfHZ1NpgeEMwmS9IkJRlOKOomrMCz2f%2FXgrBmbrumGSQLIOY89spCLzuQaQBaks5o1xO3GtEJzxVL1U1i0WayACM5JCeMRjmD3nxewdJp2kVyj1adhbVHn2T5fDRCF0gPFMnvQSKRCLTwLseUockGpHSRvkysFJbtHZfB%2BXFxQFg%2BrRPTvZPqDjndhpLaLWxWcdMRuPDmiIAvIBfAEs1IKOP4Btf7KjVrcPKF%2Bh2bKtywjEXESFAMUdHNR%2BUczXeJRMxk%2FK5oNghAFl%2BdOynJdeT2g3vYYPtIsXMo%2FDGW9gvACyw6QPZ%2BRyqjU%2FOXGQRodUJ848ZlZ5BZBWGy6wMSE7eAZ41%2BGztQmu33XdWZ0QQm7NAa%2BKDegonsapGpEypWNvBOLOM7MA%2FV2Yer5bDJLLhB58UKY8Eb8kZspiZW6zXjDrPzcYtMHCBVG%2B83brnWC4HK1GsaxET3NgpU1XvIfEVKWcqYUTuG8nPqkjF9Si%2Fs33AS6i9UN8%2BOgetWwU2YcFpfMbZKhrvNVlxblfRA8lK1f68DV06rX2jb7nEVfRjLJD2CMw%2BtD3vQY6pgE%2BwNERibNXlSR1OfW8nhaFTbNGos8dWfc8v2GkNEr%2FKHSNCz5rmw952OGUpimYGs759URyMzEPcq228qadTh3wGFweOooJLREnlebEtdsYggkGE6EY%2BaXWkACgjq%2BQjP2%2FTM8RjM2J9b5jaxm3LDl31pQ7nQ46WxURC23gkyrvHJQf13Ir%2BsaQTkP0kXYAJClI95OMvUx%2BZEqHpw2sud2yh97z4E5%2B&X-Amz-Signature=8b5414fd14e20d9d7b544615e32691f5155cbca88d42070d9575d5597562363c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
