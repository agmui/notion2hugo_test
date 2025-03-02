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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFBXOK5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE002UFVzFbdh0ont9XPhB9zvtQLGb8qrLPlcth14Y4uAiEAmFJt6%2FWeWocT8fHV1NJUPG7%2FkDUmwFYVCfqLVwUw3NMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUarq9gxFJfRwegWircA0rYoUYblvVhyaH%2FQy6Vm8v%2FZZHXlHMLqK4f6JPmVp3ayH56wbiEoXVqHlgFCgSCxhDCa%2BSjKZpL7bzk9X2HgsmLE5FiScrHKT1HQjhYHPd3bLHw1E1c3wf4u07I3p3UnrT29FqBg0ZDdXya6xU3sMY9O105aCxas2IxrZX2mNMmdqmVHir%2FtdBBP8VDdcSOn62ciKt2dU5MVdTwRjNaoyS9qyptH7J3nP896IJckqOJnAb8uhZxkq3OxwDbl%2FBlOyIBUpF3R8eQ3yFKESW29mlPqw3T%2FbMmLBONDot0KXW7HRCB81yPNDPgtFGi1JS0FpOU46QZELjanCm0OvaMtu9HDJh9aK2BNJl4vK2o1DyfjpTFcUjh1h4NiokZjicxVzJnt3zjnw%2BoqWPLrGtecDERYy8HMJIY4KVeHj0Zh2GWrJ7Q3gRfgKfFKFywQR4THvouwkodjxT%2FFZFJeC4QfFAQk2GpouQzIkJLdMAp55hTZJsfpfbfW%2B0WE0743LHVHEN5p5SJ3ugmNuUVa8QJPaoBZhLBee5OcXNfSPiBq9Q%2BewAOOBKrvnHKEGrIUAjC9Blyod3hUoK8k2EJ4iFPY%2BkxoFeY4vx0nFzWlq7ot6VlR67NEbGc2lNYEjTYMN%2F2jr4GOqUBTUjhLCTO8Mbgk0VkQ0B0GQRNQcthuwXsRNU6U0jDNMSrfa8MeDtlcB5ahXOZ%2FyxlOiMg62BJxls3CFVD48YLx7vuC2UV79jMs48t0Vq%2F%2BVlZJKgKOBBZxnxuinygsw4Q09EaztYd7UegYp4wRCTjDEF49SfNLD8Onrc0upPMIbiWlbdGEXC0hiXKxCYlgfXJ%2FjL5%2BW2mwlWZkoFPHCVRJOM1uNjD&X-Amz-Signature=dad37507e3ce8e5526f6ec546c04c70489d6ec80a483bc8961ed193b93573e49&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
