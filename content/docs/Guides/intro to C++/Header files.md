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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGO5BFVE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC6IAeqBt0tajz4AJggQg%2FZyqc%2BUvXWbVZeM7bbwzGbdAIhAKglkIiQcTLvbnUVZp%2FuHDm8RFhSdlTx1ILeYhJZQ%2F8gKv8DCCkQABoMNjM3NDIzMTgzODA1Igxl1vZKL7JpIqGQmTIq3AOykkUnRp%2FMBIfW451CINt427ohILngnLXA9yVAdZUlvijNY7XgO29PI6Xe5ng1uKVSBi7ZpNml7ShRTchxjMgZwkTv7HaN%2FIS6Kt2%2BJcNRsPK6ox4pNlPMTua%2BKK9HQcD4BGX3fU%2FxstkU6RIn%2BlXFHt44E%2BenQGcv2O8tFS8iCW7mDiPjhn2SkQi9ZMzZ9%2FkVHXrgUb2QhcwbU11KgUVKZb6d%2BI0cU4tp5kTqyv0xERCIK0MlR%2B0OX%2B7JQHtR5bz%2Bk9lpAUqiM7UW3oVALbPIdEV3wXz7XXjRhFEOkMRlQzOF6C9XyLhokDkHx9nEND2cF9j4v6zEICTbRr2KBQ2DlEJkQ6PXopdGWSmS0Qwm63mP2DxzYNpJdiln%2FFk49hiGZSqko3CGP5srC%2F%2F%2Bjzhc2p67RXVD8kNJMfr%2FRKTNEpIAeUq2iBoloB%2FewDYH5w3QD5bkQQdiG9BlSSY9e%2BoU1g9X1RZ1U7KD6w2B%2FIUrQGCrOSMRXXEYKnAXkKzJDCPpk%2BUNEM30VNt%2FzSN135j9GIa4uXc9ZeduSesUabQPmcfeEgGBik6Tv3uegptluJsQ3YWwtAeYWXJNrjQ7AI5LlF7kIty5kqA9m9kfGikS9bzr0lHZl%2F9jfBqypTDO6bu9BjqkASnKgg31DSL6qZY2JQ7rgcm%2By7LpeizMSCMCGtjNTQXaffGSRCev6AOuB7HKitRpLUsRPkM3l5LTWII5PHZebosAcycR5ZeimUWiPpuhLnC%2F2eLInfY1APw5vMIp9HgCF0BVYCYo6a81jYz3A6uDjZyUXu8zoUE3%2F4b1SwIjn0c7ChrWuEdc52fZPlopqHQk0xWn6AwoKFkYjpah9vd%2FsoN56k1h&X-Amz-Signature=7e8ebbc330526cc7497550d7b8a2095a6790a4386ed95791b2c75d1c4b76507a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
