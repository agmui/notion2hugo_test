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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQB34HI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqSSNZ5W%2F32yPNus6OkILCamXU5ZkfqSHx4AfvRBu9OAiEAwrZE%2B6%2BrqQXLXI6GUU%2FSEcf8IDu4YCYC7O4TLXLOu4AqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJV1WyL7XmfPdAMdYSrcA7wJ2O73QGEEc4TuIkm%2Bd4wKtkyMEmdMJ8GTRgT%2ByGaqO6Kps8Gyyc%2FVvkejJAhs8HLBnlhsKcZ7j5DPe0s825ORhbP7KT%2FXxh0SF4ITImVZ%2FICoRlFetR21ALiHFSYqXWlH%2FtqjN8%2Bl0urdiQrb2d97JpNcDQa12hJXyvWwiEIkICo7JtWIXOvA9iPtMu49rzrEhjPOuqJkLTB6xxk5rtdwvriSVamPsZCgLbnHyBLe0lo6mK3%2F%2F2Ho7frnHpHVDqPH3C6y9c%2FANq7%2B1dDrQqdkNTgLvGl6pSipOoaAkjEEQ%2B9XY%2F8plBaZp7XkliE%2FY9XyESxEBlYK3DXMSIjFsfrfQjaYCq3vWFJWWBU%2FP4B1dWhwlZIzFZ13weSJjNKPKh%2BPVLeElDsfRTOu6EKSFaCO0Gd01dbZXfk%2BHpjPDukFvzl0enwUAfTMQoRxplbmnNMcvpguWYQJj9AbIFkm4y2b%2BcFQrAZ1w03qJH5YH%2B3lUyCup8oFKx5%2BJW9YtiTvlJEBjhlPXmBgDRizUauDxo6fJ7%2BAG7cGbHwfsSFJYDRpAI1Rj36gA2OW3wdX6sbNX8Apoh5lbu%2BXTejjI%2F36%2B3YkGecuKX0ZOYqz9FvC8ZpDoQqrc6g8e4I9wKUPMJWJo70GOqUBr6kimvktRGud%2FCqN4%2FXejabpzr0hVHVw0iXIlFFN1gpbteyKLxDl8ugf0GUyMkoCBEtfu%2B6ZsPPXHY3kfCoOFO%2BwZbN7MAUEpHwlRww0lCD%2BjWvHwuaE63vbKOwA0Z8gB8Mh0Mz8Bjn1u0ERXLZfU5j3AU63RZeKk375wqyQlUy6Grsr19ionjQPM4HmyGsK9AkYsAGsbviVCI3JEAgwIUqkAKNK&X-Amz-Signature=98addb8394062aedf1d06fe18bde5ec0a9973ccfba2fbb07b3dc2c74192186c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
