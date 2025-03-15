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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5XDOUS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw30AzLz8xEBLNxnZDPpNJx0zcHDoX48wsGTNxTaC4ZAiAXPAWW%2F7GINZkV3klNCzP4WKC5N5gZ20G%2FGeiJfzrg4yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTHoXb8TMbrFJfXnKtwDcR69PK2jNRui9NNZjLsKFnA1C0YRKxQSUhYFxQMYgcZYHz9p73OK3Bt05%2Fpm9A81sHGvKXDw%2BI%2BRe%2BHOOqp6wIGozrO3qojiFW2NBUn6jcFnCzaG2ry6TeFGcF72eZvFXyEuMoMRMLX9YnNXPDnkExmfWIz2LzWkXbMpVm5q3STid1rzwqy%2BK7%2BBKvV5Xgfc9C%2Fjr9HDIFs6hjgkbDCEmlF1DWfYCiKQ7oyBvCkRdSD%2F58dgU%2BwyuIjMbRnSjlN2ORAbKjdNdVLx7AwifFSZ7eoIjv%2FrG3MVMQ7f%2BSkSaUSa5mlmJoPLPW1lB2Hhq%2B3PO6xLmG3fV5u%2Bib4Ef%2B3Glb12PIFfWw0YKttVln%2BQMK3JiTY6YjY4ygLpRmMrAwWhGlZegKGyPp%2Bh8qTzRJM0%2BGUS6cn8%2B10KtDlBBLPtyQVbXipPITTluwVKSrbPn8iMCRCcK7yOafHq%2BsIYF8MUwfC1A9ZXoE1Fyynnk%2BmjLJL4becwslHVy4NkFh7fW61LoNNmpthi%2FF1tie3K2F%2BEvL9%2FSdJI3TNa4AqoiGBi8EylwuQjjEp5bSV0vY564jfkbbpOyHq0s4meOyd6HhKzVr1jBb0mADRLpj3rDfgREbC9Gn35OURUc2n%2B3HEw0ujTvgY6pgG1uTnfewS4WyTvJ3B44eWQh6GCCS0h1anERG%2BZcarLMf%2BMzwwnhwFptvfT%2B3qv%2F6d3tSGxPe8tQGWxfGsElHBm3OYKbPDgIzJeBc2I5H364YhS0RCeMFFTAtnR3CNfnPdU3R61W4dTApqUEqFDCbcltpBNfWuGT%2BNWkRY4gm5GKpErdLzgOcXCLCbrzNYQmG1Th9Unu4AmxEKRW3PoPrfyArNoUhue&X-Amz-Signature=5beaad480a893e79f2803e0e2a706097832ccde01a14b1833830d8281fb12179&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
