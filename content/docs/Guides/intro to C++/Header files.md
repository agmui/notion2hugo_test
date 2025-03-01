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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWUQFQK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCMXwXY7wHKu4S1ck5mcC4fHM4TzVxtXFRPqx8QjWtK%2FwIga%2B%2BnWOgP2IEI8JKYGwXYF1lMiil%2BpPysvwMS1XjfkYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC36Lnxva7tZfcSh7SrcAz8eL1%2FYuhN3t1S5QX%2BppKCojsTvEhCQus7DnmHMuvVz0YJAPK%2FDcuE4x5XT7RHtyDwTvHynsCZLjH7YT70EX39DlKaTILyGT7LtXTLRA%2BRuMPKSu0liPwsz0ow1Dm1QcQp5vq0Ig7EJqpxR2LTISTyyFJ%2FA%2BHD4ly1VUySx7WZf9mLD9q21Uxgi5VmDqvRpHKjsDY4WLOFdUPyE0fagDAeBfJfvRLvv1kJrWfn9MmIs5DxMGS21bNOCRctwiv%2F13hcwDaU%2BrSDkq9eekQqFRluQP18S7OqbKyn9fWHCPyu2QnZjsQIFOeTV%2Bd8nRWGPwTKN%2BOqlGU9ZOOfhC1QukJOhVs6ehpd2acL5PBHmq0AT7QNOWYY%2BI64AYdHeNEAd%2Bqhil%2FKHbR1ectzJCxbuF6X0KOMVUrDBwY1dwW%2BxiLKyazN4XIZn5gaBTpAat4m1%2FmS7Yoo03rJ3hhdd4mYS4RTqGiFiaFKPnuxZmcnbgwx4SAPZ%2BGBC%2F6P4gGQBzonQANs3syd0%2F5Aai35FwVxvX2PSpY%2B8Hl6laBZJLJ4TTrSsUjyDzuwZsx%2FRwnUqIRudrVDAmyEHThM80DLLh0%2Fy2DD95A2XtF5dOUPtP49Cnn9p5AjLh9qoamEzlntHMPSUjL4GOqUBW6NHC%2BpRRVG30H8QMvlH1gL4%2F%2Fcj8OYCn%2F9Ia9s02dlE1Wg0ifkUCSRm1IzDcC5QAu1v3%2F0C1ToPK1TkUt0hn3%2F673Phgm8terWRKJeVQtcvisux5yVkxEPFlCzhz1925Uqpw8oAzbWKPusmzagBRj8TUossbYYcKIpUt2oopykNlce2dS%2BysHKjMQzMqPzXjouH4iHfGZ2r90BfQsnr20sa6Bcy&X-Amz-Signature=b5cc6640cd1375ca8b6fcc4ce0568fe4c1fed3e96403cf82881efe58d7fd67a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
